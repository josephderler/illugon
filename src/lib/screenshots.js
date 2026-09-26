/**
 * Gerçek uygulama ekran görüntülerinin TEKNİK tanımı.
 *
 * İki dilde ayrı kaynak: TR 2208x1242 (mağaza çıktısı), EN 526x296 (küçük).
 * Optimize script her ikisinden de responsive varyantlar üretir:
 *   TR -> public/screens/<id>-{480,800,1120}.webp
 *   EN -> public/screens-en/<id>-{480,526}.webp
 *
 * Site yalnızca EN setini kullanır. Metinler (caption ve alt) burada DEĞİL,
 * src/i18n/locales/en.js içindeki `screenshots` sözlüğündedir.
 */

/** Görsellerin en-boy oranı: 2208x1242 ≈ 526x296 ≈ 16:9. */
export const ASPECT = 16 / 9;

/** Katalogdaki ekran kimlikleri. */
export const SCREEN_IDS = ['1', '2', '3', '4', '5'];

/** Hero yelpazesinde gösterilecek sıra — ortadaki en büyüktür. */
export const heroOrder = ['2', '1', '5'];

/**
 * Ekran konfigürasyonu (İngilizce set).
 *
 * `widths`: üretilen varyant genişlikleri (optimize-assets.mjs ile eşleşmeli).
 * `base`:   public/ altındaki klasör adı.
 * `intrinsic`: en büyük varyantın gerçek piksel boyutu (CLS önleme).
 */
const cfg = {
  base: '/screens-en',
  widths: [480, 526],
  intrinsic: { width: 526, height: 296 },
};

/**
 * @param {string} id   Ekran kimliği ('1'..'5')
 * @returns {{ srcSet: string, src: string, width: number, height: number }}
 */
export function screenshotSources(id) {
  const srcSet = cfg.widths
    .map((w) => `${cfg.base}/${id}-${w}.webp ${w}w`)
    .join(', ');
  const largest = cfg.widths[cfg.widths.length - 1];
  const src = `${cfg.base}/${id}-${largest}.webp`;
  return { srcSet, src, ...cfg.intrinsic };
}
