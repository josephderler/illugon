/**
 * dist/sitemap.xml üretir.
 *
 * Rota kaydını (src/lib/routes.js) doğrudan içe aktarır; böylece yeni bir sayfa
 * eklendiğinde sitemap elle güncellenmek zorunda kalmaz ve iki dosya birbirinden
 * ayrışmaz.
 *
 * `npm run build` sonunda otomatik çalışır.
 */
import { writeFile } from 'node:fs/promises';
import { PAGE_KEYS, absoluteUrlFor } from '../src/lib/routes.js';
import { site } from '../src/lib/siteConfig.js';

const XML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' };
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => XML_ESCAPES[c]);

/** Ana sayfa diğerlerinden daha önemli; hukuki sayfalar en düşük. */
function priorityFor(pageKey) {
  if (pageKey === 'home') return '1.0';
  if (pageKey === 'contact') return '0.6';
  return '0.3';
}

function urlEntry(pageKey) {
  return [
    '  <url>',
    `    <loc>${esc(absoluteUrlFor(pageKey, site.origin))}</loc>`,
    `    <priority>${priorityFor(pageKey)}</priority>`,
    '  </url>',
  ].join('\n');
}

async function main() {
  const entries = PAGE_KEYS.map(urlEntry);

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
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
