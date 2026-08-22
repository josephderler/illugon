import { Link } from 'react-router-dom';
import { useLocale } from '../../i18n';
import { pathFor } from '../../lib/routes';

/**
 * Dile duyarlı iç bağlantı. `page` verildiğinde yol aktif dile göre üretilir,
 * böylece İngilizce sayfadan verilen bağlantı İngilizce kalır.
 *
 * Üç bağlantı türü tek yerde toplanır:
 *  - `page`     : uygulama içi sayfa (router)
 *  - `hash`     : ana sayfadaki bölüme kayan çapa
 *  - `external` : dış bağlantı (yeni sekme + noopener)
 */
export default function PageLink({
  page,
  href,
  hash,
  external,
  children,
  className,
  style,
  ...rest
}) {
  const { locale } = useLocale();

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
        {...rest}
      >
        {children}
      </a>
    );
  }

  // Ana sayfadaki bölüme giden çapa: farklı bir sayfadaysak önce ana sayfaya
  // dönmemiz gerekir, bu yüzden yolu da ekliyoruz.
  if (hash) {
    return (
      <Link
        to={{ pathname: pathFor('home', locale), hash: href }}
        className={className}
        style={style}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      to={pathFor(page || 'home', locale)}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Link>
  );
}
