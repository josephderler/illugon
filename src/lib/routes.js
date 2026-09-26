/**
 * Sayfa kaydı ve URL üretimi. Site yalnızca İngilizce ve kökten yayınlanır
 * (`/privacy`, `/contact` ...). Eski Türkçe ve `/en` önekli adresler
 * vercel.json'da buralara kalıcı olarak yönlendirilir.
 */

/** Boş slug = ana sayfa. */
export const PAGE_SLUGS = {
  home: '',
  privacy: 'privacy',
  terms: 'terms',
  kvkk: 'data-protection',
  contact: 'contact',
};

export const PAGE_KEYS = Object.keys(PAGE_SLUGS);

/** @param {string} pageKey PAGE_SLUGS anahtarı */
export function pathFor(pageKey) {
  const slug = PAGE_SLUGS[pageKey] ?? '';
  return `/${slug}`;
}

/** Mutlak URL — canonical ve og:url için. */
export function absoluteUrlFor(pageKey, origin) {
  return `${origin}${pathFor(pageKey)}`;
}
