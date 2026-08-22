import { Link, useLocation } from 'react-router-dom';
import { useLocale, dictionaries } from '../../i18n';
import { pageKeyFromPath, pathFor } from '../../lib/routes';
import { colorVar } from '../../lib/palette';
import { cn } from '../../lib/cn';

/**
 * Dil değiştirici.
 *
 * Kullanıcıyı ana sayfaya atmaz: bulunduğu sayfanın diğer dildeki karşılığına
 * gider (örn. /gizlilik -> /en/privacy). Slug'lar dile göre farklı olduğu için
 * eşleme `pageKeyFromPath` üzerinden yapılır.
 */
export default function LanguageSwitcher({ className }) {
  const { pathname } = useLocation();
  const { otherLocale, t } = useLocale();
  const { key } = pageKeyFromPath(pathname);
  const target = pathFor(key || 'home', otherLocale);
  const other = dictionaries[otherLocale];

  return (
    <Link
      to={target}
      hrefLang={other.htmlLang}
      aria-label={`${t.common.languageSwitcherLabel}: ${other.label}`}
      className={cn(
        'inline-flex items-center rounded-3xl px-3 py-2',
        'text-caption font-semibold no-underline',
        'transition-opacity duration-150 hover:opacity-70',
        className,
      )}
      style={{ backgroundColor: colorVar('fog'), color: colorVar('graphite') }}
    >
      {other.shortLabel}
    </Link>
  );
}
