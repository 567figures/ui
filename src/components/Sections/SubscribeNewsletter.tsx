import React from 'react';
import { useSections } from './SectionsContext';

export interface SubscribeNewsletterProps {
  title?: string | null;
  subTitle?: any[] | null;
  helperText?: any[] | null;
  /** Placeholder text for the email input */
  placeholder?: string;
  /** Submit button label (aria-label) */
  submitLabel?: string;
  /** Form action URL */
  action?: string;
  /** Called when form is submitted */
  onSubmit?: (email: string) => void;
}

export function SubscribeNewsletter({
  title,
  subTitle,
  helperText,
  placeholder = 'Enter your email address',
  submitLabel = 'Subscribe to newsletter',
  action = '',
  onSubmit,
}: SubscribeNewsletterProps) {
  const { renderRichText } = useSections();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (onSubmit) {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;
      onSubmit(email);
    }
  };

  return (
    <section id="subscribe" style={{ padding: '2rem 1rem' }}>
      <div style={{
        position: 'relative',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '4rem 2rem',
        backgroundColor: 'var(--gray50, #f9fafb)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'relative', zIndex: 10, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            marginBottom: '1rem',
            fontSize: '2rem',
            fontWeight: 600,
            textWrap: 'balance',
          }}>
            {title}
          </h2>
          {subTitle && renderRichText && (
            <div style={{ marginBottom: '1.5rem' }}>
              {renderRichText(subTitle, 'mb-6 text-sm text-gray-600 sm:mb-8 text-balance sm:text-base')}
            </div>
          )}
          <form
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}
            action={action}
            onSubmit={handleSubmit}
          >
            <div style={{
              display: 'flex',
              backgroundColor: 'white',
              alignItems: 'center',
              border: '1px solid #e5e7eb',
              borderRadius: '0.75rem',
              padding: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              maxWidth: 384,
              width: '100%',
              justifyContent: 'space-between',
              paddingLeft: '1rem',
            }}>
              <input
                type="email"
                name="email"
                required
                placeholder={placeholder}
                style={{
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  width: '100%',
                  fontSize: '0.875rem',
                }}
              />
              <button
                type="submit"
                style={{
                  width: 32,
                  height: 32,
                  backgroundColor: '#e5e7eb',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer',
                }}
                aria-label={submitLabel}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </form>
          {helperText && renderRichText && (
            <div style={{ marginTop: '0.75rem' }}>
              {renderRichText(helperText, 'mt-3 text-sm text-gray-800 opacity-80 sm:mt-4')}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
