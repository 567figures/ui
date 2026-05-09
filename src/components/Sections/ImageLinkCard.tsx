import React from 'react';
import { useSections } from './SectionsContext';
import type { SectionCard } from './types';

export interface ImageLinkCardProps {
  card: SectionCard;
  className?: string;
}

export function ImageLinkCard({ card, className }: ImageLinkCardProps) {
  const { renderImage, LinkComponent } = useSections();
  const { image, description, title, href } = card ?? {};

  const content = (
    <>
      {image?.asset && renderImage && (
        <div className="absolute inset-0 z-[1] mix-blend-multiply">
          {renderImage({
            asset: image,
            loading: 'eager',
            priority: true,
            quality: 100,
            fill: true,
            className: 'object-cover grayscale pointer-events-none group-hover:opacity-100 group-hover:transition-opacity duration-1000 opacity-40 dark:opacity-60 dark:hover:opacity-[2] dark:saturate-200',
          })}
        </div>
      )}
      <div className="z-[2] pt-64 flex flex-col space-y-2 mb-4 duration-500 xl:absolute xl:top-24 group-hover:top-8 xl:inset-x-8">
        <h3 className="text-xl font-[500] text-[#111827] dark:text-neutral-300">{title}</h3>
        <p className="text-sm text-[#374151] xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300 delay-150 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </>
  );

  const baseClassName = 'rounded-3xl p-4 md:p-8 transition-colors relative overflow-hidden group flex flex-col justify-end xl:h-[400px]';
  const combinedClassName = className ? `${baseClassName} ${className}` : baseClassName;

  if (LinkComponent) {
    return (
      <LinkComponent href={href ?? '#'} className={combinedClassName}>
        {content}
      </LinkComponent>
    );
  }

  return (
    <a href={href ?? '#'} className={combinedClassName}>
      {content}
    </a>
  );
}
