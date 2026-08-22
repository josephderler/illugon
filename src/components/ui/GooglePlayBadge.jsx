import { store, storeBadges } from '../../lib/siteConfig';
import { useLocale } from '../../i18n';
import { cn } from '../../lib/cn';

/**
 * Resmi Google Play mağaza rozeti.
 *
 * Uygulama YALNIZCA Google Play'de yayında — App Store rozeti kasıtlı olarak
 * yok, olmayan bir mağazaya yönlendirmiyoruz.
 *
 * Rozet Google'ın kendi asset'idir ve yalnızca ölçeklenir; kendi çizdiğimiz bir
 * rozet kullanmak marka kurallarına aykırı olurdu. Artwork dile göre değişir
 * (TR "İNDİRİN", EN "GET IT ON") ve iki sürümün içindeki clear space oranı da
 * farklı olduğu için gösterim ölçüleri siteConfig'ten okunur — böylece rozetin
 * görünür yüksekliği her iki dilde de 56px olur.
 */
export default function GooglePlayBadge({ className }) {
  const { locale, t } = useLocale();
  const badge = storeBadges[locale] ?? storeBadges.tr;

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
