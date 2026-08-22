/**
 * Sayfa kaydı ve dile göre URL üretimi.
 *
 * Diller URL ÖN EKİ ile ayrılır: Türkçe kök (`/gizlilik`), İngilizce `/en`
 * altında (`/en/privacy`). Slug'lar dile göre farklı — arama motorları için
 * doğrusu bu, ama dil değiştiricinin aynı sayfada kalabilmesi için iki yönlü
 * eşleme gerekiyor; `pageKeyFromPath` bunu sağlıyor.
 */

export const LOCALES = ['tr', 'en'];
export const DEFAULT_LOCALE = 'tr';

/** Dile göre slug'lar. Boş slug = o dilin ana sayfası. */
export const PAGE_SLUGS = {
  home: { tr: '', en: '' },
  privacy: { tr: 'gizlilik', en: 'privacy' },
  terms: { tr: 'kullanim-kosullari', en: 'terms' },
  kvkk: { tr: 'kvkk', en: 'data-protection' },
  contact: { tr: 'iletisim', en: 'contact' },
};

export const PAGE_KEYS = Object.keys(PAGE_SLUGS);

/**
 * Bir sayfanın belirtilen dildeki yolunu üretir.
 * @param {string} pageKey PAGE_SLUGS anahtarı
 * @param {string} locale 'tr' | 'en'
 */
export function pathFor(pageKey, locale) {
  const slug = PAGE_SLUGS[pageKey]?.[locale] ?? '';
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;

  if (!slug) return prefix || '/';
  return `${prefix}/${slug}`;
}

/** Mutlak URL — canonical ve hreflang için. */
export function absoluteUrlFor(pageKey, locale, origin) {
  const path = pathFor(pageKey, locale);
  return `${origin}${path === '/' ? '/' : path}`;
}

/**
 * URL yolundan dili çözer.
 * @returns {{ locale: string, rest: string }}
 */
export function localeFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];

  if (LOCALES.includes(first) && first !== DEFAULT_LOCALE) {
    return { locale: first, rest: segments.slice(1).join('/') };
  }
  return { locale: DEFAULT_LOCALE, rest: segments.join('/') };
}

/**
 * URL yolundan sayfa anahtarını çözer. Bilinmeyen yol için null döner
 * (404 sayfası bu ayrımı kullanır).
 */
export function pageKeyFromPath(pathname) {
  const { locale, rest } = localeFromPath(pathname);

  for (const key of PAGE_KEYS) {
    if ((PAGE_SLUGS[key][locale] ?? '') === rest) return { key, locale };
  }
  return { key: null, locale };
}
