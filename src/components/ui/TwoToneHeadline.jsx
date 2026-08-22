import { colorVar } from '../../lib/palette';
import { cn } from '../../lib/cn';

/**
 * İki tonlu başlık sistemi — sitenin imza sözleşmesi.
 *
 * İlk ifade (eylem/sonuç) kromatik bir aksan rengi, ikinci ifade
 * (nesne/marka) Graphite taşır. Koyu ifade daima daha uzun olan olmalı;
 * iki kromatik renk eşit ağırlıkta blok olarak kullanılmaz.
 *
 * Boy ölçeği rehberle sabit: display = 60px, heading = 30px.
 * Ara boy türetilmez.
 */
export default function TwoToneHeadline({
  accent,
  rest,
  accentColor = 'ember-orange',
  restColor = 'graphite',
  level = 'display',
  as,
  align = 'left',
  className,
}) {
  const Tag = as || (level === 'display' ? 'h1' : 'h2');
  const sizeClass =
    level === 'display'
      ? 'text-heading sm:text-[44px] sm:leading-[1.2] lg:text-display'
      : 'text-heading-sm sm:text-heading';

  return (
    <Tag
      className={cn(
        'font-bold tracking-[-0.01em] text-balance',
        sizeClass,
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      <span style={{ color: colorVar(accentColor) }}>{accent}</span>{' '}
      <span style={{ color: colorVar(restColor, 'graphite') }}>{rest}</span>
    </Tag>
  );
}
