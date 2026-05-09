import React from 'react';
import { useSections } from './SectionsContext';
import type { SectionCard } from './types';

export interface ImageLinkCardsProps {
  title?: string | null;
  eyebrow?: string | null;
  richText?: any[] | null;
  cards?: SectionCard[] | null;
  /** Override the default Chip/eyebrow renderer */
  renderEyebrow?: (eyebrow: string) => React.ReactNode;
  /** Custom card renderer — if not provided, uses default ImageLinkCard */
  renderCard?: (card: SectionCard, index: number, total: number) => React.ReactNode;
}

export function ImageLinkCards({
  title,
  eyebrow,
  richText,
  cards,
  renderEyebrow,
  renderCard,
}: ImageLinkCardsProps) {
  const { renderRichText, renderImage, LinkComponent } = useSections();
  const Link = LinkComponent ?? 'a';

  return (
    <section id="image-link-cards" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
            {eyebrow && (
              renderEyebrow ? renderEyebrow(eyebrow) : (
                <span style={{
                  backgroundColor: 'var(--color4, #f0f0f0)',
                  borderRadius: 999,
                  padding: '4px 12px',
                  fontSize: 12,
                  color: 'var(--color9, #666)',
                }}>
                  {eyebrow}
                </span>
              )
            )}
            <h2 style={{ fontSize: '2rem', fontWeight: 600, textWrap: 'balance' }}>{title}</h2>
            {renderRichText && richText && renderRichText(richText, 'text-balance')}
          </div>
          {Array.isArray(cards) && cards.length > 0 && (
            <div style={{
              marginTop: '4rem',
              display: 'grid',
              width: '100%',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '0.25rem',
            }}>
              {cards.map((card, idx) => (
                renderCard
                  ? renderCard(card, idx, cards.length)
                  : <DefaultImageLinkCard key={card._key} card={card} index={idx} total={cards.length} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Default card implementation ───────────────────────────────────────

function DefaultImageLinkCard({
  card,
  index,
  total,
}: {
  card: SectionCard;
  index: number;
  total: number;
}) {
  const { renderImage } = useSections();
  const { image, description, title, href } = card ?? {};

  let borderRadius = '0';
  if (index === 0) borderRadius = '1.5rem 0 0 1.5rem';
  if (index === total - 1) borderRadius = '0 1.5rem 1.5rem 0';
  if (total === 1) borderRadius = '1.5rem';

  return (
    <a
      href={href ?? '#'}
      style={{
        borderRadius,
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minHeight: 400,
        textDecoration: 'none',
        backgroundColor: 'rgba(128,128,128,0.1)',
      }}
    >
      {image?.asset && renderImage && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, mixBlendMode: 'multiply' }}>
          {renderImage({
            asset: image,
            loading: 'eager',
            priority: true,
            quality: 100,
            fill: true,
            className: 'object-cover grayscale opacity-40',
          })}
        </div>
      )}
      <div style={{ zIndex: 2, paddingTop: '16rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#111827' }}>{title}</h3>
        <p style={{ fontSize: '0.875rem', color: '#374151' }}>{description}</p>
      </div>
    </a>
  );
}
