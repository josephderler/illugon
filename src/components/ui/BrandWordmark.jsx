import { Link } from 'react-router-dom';
import { brand } from '../../lib/siteConfig';
import { useLocale } from '../../i18n';
import { pathFor } from '../../lib/routes';
import { colorVar } from '../../lib/palette';
import { cn } from '../../lib/cn';

/**
 * Marka kilidi: gerçek uygulama ikonu + sağında Aquawax Pro Bold 18px Graphite
 * wordmark. Toplam yükseklik ~32px.
 *
 * Kaynak ikon 48x48 ve alfa kanalı yok, köşeleri dolu renk. Sistemin yumuşak
 * formuna uyması için yuvarlatılmış bir kapta kırpılıyor. 32 CSS px'te
 * gösteriliyor; 2x ekranlarda 48px varyantı devreye girer.
 */
export default function BrandWordmark({ className }) {
  const { locale, t } = useLocale();

  return (
    <Link
      to={pathFor('home', locale)}
      className={cn('inline-flex items-center gap-3 no-underline', className)}
      aria-label={t.common.homeAriaLabel}
    >
      <img
        src="/logo/illugon-48.webp"
        srcSet="/logo/illugon-32.webp 32w, /logo/illugon-48.webp 48w"
        sizes="32px"
        width="32"
        height="32"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="h-8 w-8 shrink-0 rounded-[10px] object-cover"
      />
      <span
        className="text-[18px] leading-[1.2] font-bold"
        style={{ color: colorVar('graphite') }}
      >
        {brand.name}
      </span>
    </Link>
  );
}
