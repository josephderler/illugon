import { store, storeBadge as badge } from '../../lib/siteConfig';
import { useT } from '../../i18n';
import { cn } from '../../lib/cn';

/**
 * Resmi Google Play mağaza rozeti.
 *
 * Uygulama YALNIZCA Google Play'de yayında — App Store rozeti kasıtlı olarak
 * yok, olmayan bir mağazaya yönlendirmiyoruz.
 *
 * Rozet Google'ın kendi asset'idir ve yalnızca ölçeklenir; kendi çizdiğimiz bir
 * rozet kullanmak marka kurallarına aykırı olurdu. Gösterim ölçüleri
 * siteConfig'ten okunur — böylece rozetin görünür yüksekliği 56px olur.
 */
export default function GooglePlayBadge({ className }) {
  const t = useT();

  return (
    <a
      href={store.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.common.storeBadgeLabel}
      className={cn(
        'inline-block no-underline transition-opacity duration-150 hover:opacity-90',
        className,
      )}
    >
      <img
        src={`/badges/${badge.name}-${badge.large}.webp`}
        srcSet={`/badges/${badge.name}-${badge.small}.webp ${badge.small}w, /badges/${badge.name}-${badge.large}.webp ${badge.large}w`}
        sizes={`${badge.width}px`}
        width={badge.width}
        height={badge.height}
        alt={t.common.storeBadgeLabel}
        draggable="false"
        style={{ width: badge.width, height: badge.height }}
        className="block"
      />
    </a>
  );
}
