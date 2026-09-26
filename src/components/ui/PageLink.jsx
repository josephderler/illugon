import { Link } from 'react-router-dom';
import { pathFor } from '../../lib/routes';

/**
 * İç bağlantı. `page` verildiğinde yol sayfa kaydından üretilir.
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
        to={{ pathname: pathFor('home'), hash: href }}
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
      to={pathFor(page || 'home')}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Link>
  );
}
