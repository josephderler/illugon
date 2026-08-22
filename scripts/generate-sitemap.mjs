/**
 * dist/sitemap.xml üretir.
 *
 * Rota kaydını (src/lib/routes.js) doğrudan içe aktarır; böylece yeni bir sayfa
 * eklendiğinde sitemap elle güncellenmek zorunda kalmaz ve iki dosya birbirinden
 * ayrışmaz. Her URL için diğer dilin karşılığı `xhtml:link` ile hreflang olarak
 * bildirilir.
 *
 * `npm run build` sonunda otomatik çalışır.
 */
import { writeFile } from 'node:fs/promises';
import { LOCALES, PAGE_KEYS, DEFAULT_LOCALE, absoluteUrlFor } from '../src/lib/routes.js';
import { site } from '../src/lib/siteConfig.js';

const XML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' };
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => XML_ESCAPES[c]);

/** Ana sayfa diğerlerinden daha önemli; hukuki sayfalar en düşük. */
function priorityFor(pageKey) {
  if (pageKey === 'home') return '1.0';
  if (pageKey === 'contact') return '0.6';
  return '0.3';
}

function urlEntry(pageKey, locale) {
  const loc = absoluteUrlFor(pageKey, locale, site.origin);

  const alternates = [
    ...LOCALES.map((alt) => ({
      hreflang: alt,
      href: absoluteUrlFor(pageKey, alt, site.origin),
    })),
    {
      hreflang: 'x-default',
      href: absoluteUrlFor(pageKey, DEFAULT_LOCALE, site.origin),
    },
  ]
    .map(
      (a) =>
        `    <xhtml:link rel="alternate" hreflang="${esc(a.hreflang)}" href="${esc(a.href)}" />`,
    )
    .join('\n');

  return [
    '  <url>',
    `    <loc>${esc(loc)}</loc>`,
    alternates,
    `    <priority>${priorityFor(pageKey)}</priority>`,
    '  </url>',
  ].join('\n');
}

async function main() {
  const entries = LOCALES.flatMap((locale) =>
    PAGE_KEYS.map((key) => urlEntry(key, locale)),
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');

  await writeFile('dist/sitemap.xml', xml, 'utf8');
  console.log(`sitemap.xml yazildi: ${entries.length} URL`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
