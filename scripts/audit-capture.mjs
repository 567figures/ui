#!/usr/bin/env node
/**
 * Batch capture for site pattern gap audit.
 * Viewports: mobile 390×844, tablet 768×1024, desktop 1280×800
 */
import { chromium } from 'playwright-core';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '../docs/references/audit');
const CHROME =
  process.env.CHROME_PATH ||
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const VIEWPORTS = {
  mobile: { width: 390, height: 844, isMobile: true },
  tablet: { width: 768, height: 1024, isMobile: true },
  desktop: { width: 1280, height: 800, isMobile: false },
};

const SITES = [
  {
    id: 'calm',
    pages: [
      { key: 'home', url: 'https://www.calm.com/' },
      { key: 'secondary', url: 'https://www.calm.com/sleep' },
      { key: 'tertiary', url: 'https://www.calm.com/blog' },
    ],
  },
  {
    id: 'headspace',
    pages: [
      { key: 'home', url: 'https://www.headspace.com/' },
      { key: 'secondary', url: 'https://www.headspace.com/subscriptions' },
      { key: 'tertiary', url: 'https://www.headspace.com/meditation' },
    ],
  },
  {
    id: 'hubspot',
    pages: [
      { key: 'home', url: 'https://www.hubspot.com/' },
      { key: 'secondary', url: 'https://www.hubspot.com/products' },
      { key: 'tertiary', url: 'https://blog.hubspot.com/' },
    ],
  },
  {
    id: 'coursera',
    pages: [
      { key: 'home', url: 'https://www.coursera.org/' },
      { key: 'secondary', url: 'https://www.coursera.org/business' },
      { key: 'tertiary', url: 'https://www.coursera.org/degrees' },
    ],
  },
  {
    id: 'hermanmiller',
    pages: [
      { key: 'home', url: 'https://www.hermanmiller.com/' },
      { key: 'secondary', url: 'https://www.hermanmiller.com/products/' },
      { key: 'tertiary', url: 'https://www.hermanmiller.com/about/' },
    ],
  },
  {
    id: 'headway',
    pages: [
      { key: 'home', url: 'https://makeheadway.com/' },
      { key: 'secondary', url: 'https://makeheadway.com/library/' },
      { key: 'tertiary', url: 'https://makeheadway.com/pricing/' },
    ],
  },
];

async function dismissCookies(page) {
  const selectors = [
    '#onetrust-accept-btn-handler',
    '#accept-recommended-btn-handler',
    'button#onetrust-accept-btn-handler',
    '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
    '#CybotCookiebotDialogBodyButtonAccept',
    'button[aria-label="Accept all"]',
    'button[aria-label="Accept All"]',
    'button[aria-label*="Accept" i]',
    'button:has-text("Accept all")',
    'button:has-text("Accept All")',
    'button:has-text("Allow all")',
    'button:has-text("Allow All")',
    'button:has-text("Agree")',
    'button:has-text("I agree")',
    'button:has-text("Got it")',
    'button:has-text("Accept Cookies")',
    'button:has-text("Accept cookies")',
    '[data-testid="cookie-policy-dialog-accept-button"]',
    '.osano-cm-accept-all',
    '#truste-consent-button',
  ];
  for (const sel of selectors) {
    try {
      const loc = page.locator(sel).first();
      if (await loc.isVisible({ timeout: 800 })) {
        await loc.click({ timeout: 2000 });
        await page.waitForTimeout(400);
        return sel;
      }
    } catch {
      /* try next */
    }
  }
  // JS fallback
  try {
    await page.evaluate(() => {
      const texts = [
        'accept all',
        'allow all',
        'agree',
        'i agree',
        'got it',
        'accept cookies',
      ];
      for (const el of document.querySelectorAll('button, a, [role=button]')) {
        const t = (el.innerText || '').trim().toLowerCase();
        if (texts.some((x) => t === x || t.includes(x))) {
          el.click();
          return;
        }
      }
    });
  } catch {
    /* ignore */
  }
  return null;
}

async function capturePage(browser, siteId, pageKey, url) {
  const dir = path.join(ROOT, siteId, pageKey);
  await mkdir(dir, { recursive: true });
  const notes = [];

  for (const [vpName, vp] of Object.entries(VIEWPORTS)) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      isMobile: vp.isMobile,
      deviceScaleFactor: 1,
      userAgent: vp.isMobile
        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
        : undefined,
    });
    const page = await context.newPage();
    page.setDefaultTimeout(45000);
    let status = 'ok';
    try {
      const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      if (res && res.status() >= 400) status = `http-${res.status()}`;
      await page.waitForTimeout(1500);
      const cookie = await dismissCookies(page);
      await page.waitForTimeout(600);
      await dismissCookies(page); // second pass if delayed banner
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);

      const heroPath = path.join(dir, `${vpName}-hero.png`);
      await page.screenshot({ path: heroPath, fullPage: false });

      // mid-page
      await page.evaluate(() => window.scrollTo(0, Math.min(document.body.scrollHeight * 0.35, 1400)));
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(dir, `${vpName}-mid.png`), fullPage: false });

      // footer
      await page.evaluate(() => {
        const f = document.querySelector('footer');
        if (f) f.scrollIntoView({ block: 'start' });
        else window.scrollTo(0, document.body.scrollHeight);
      });
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(dir, `${vpName}-footer.png`), fullPage: false });

      notes.push({
        viewport: vpName,
        status,
        cookie,
        title: await page.title().catch(() => ''),
        finalUrl: page.url(),
      });
      console.log(`✓ ${siteId}/${pageKey}/${vpName} cookie=${cookie || 'none'} status=${status}`);
    } catch (err) {
      status = `error: ${err.message}`;
      notes.push({ viewport: vpName, status, cookie: null, title: '', finalUrl: url });
      console.error(`✗ ${siteId}/${pageKey}/${vpName}: ${err.message}`);
    } finally {
      await context.close();
    }
  }

  await writeFile(path.join(dir, 'meta.json'), JSON.stringify({ url, notes }, null, 2));
}

async function main() {
  const only = process.argv[2]; // optional site id
  const browser = await chromium.launch({
    executablePath: CHROME,
    headless: true,
    args: ['--disable-blink-features=AutomationControlled'],
  });

  try {
    for (const site of SITES) {
      if (only && site.id !== only) continue;
      for (const p of site.pages) {
        await capturePage(browser, site.id, p.key, p.url);
      }
    }
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
