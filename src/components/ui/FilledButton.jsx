import { colorVar } from '../../lib/palette';
import { cn } from '../../lib/cn';
import ArrowIcon from './ArrowIcon';

/**
 * Dolu marka butonu: Ember Orange zemin, beyaz DemiBold 16px etiket,
 * 26px yarıçap, 12px/20px iç boşluk, etiketten sonra küçük beyaz ok.
 * Gölge yok, gradyan yok — sistem tamamen flat.
 *
 * DİKKAT: `className` ile `hidden` GEÇMEYİN. Taban sınıf `inline-flex` ve
 * Tailwind çıktısında `.inline-flex` kuralı `.hidden`'dan sonra yer aldığı için
 * `hidden` etkisiz kalır. Görünürlüğü bir sarmalayıcı elemanla kontrol edin.
 */
export default function FilledButton({
  as = 'a',
  children,
  color = 'ember-orange',
  withArrow = true,
  size = 'md',
  className,
  ...rest
}) {
  const Tag = as;
  const pad = size === 'lg' ? 'px-8 py-4' : 'px-5 py-3';

  return (
    <Tag
      className={cn(
        'inline-flex items-center gap-2 rounded-3xl no-underline',
        'text-body-sm font-semibold',
        'transition-all duration-200 ease-out',
        'hover:scale-[1.03] hover:brightness-110 active:scale-[0.97]',
        pad,
        className,
      )}
      style={{
        backgroundColor: colorVar(color, 'ember-orange'),
        color: colorVar('paper-white'),
      }}
      {...rest}
    >
      <span>{children}</span>
      {withArrow ? <ArrowIcon /> : null}
    </Tag>
  );
}
