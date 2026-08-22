/**
 * Token adından CSS değişkenine köprü.
 *
 * Neden inline `var()` kullanıyoruz: config'ten gelen renk adları
 * (`'ember-orange'` gibi) çalışma zamanında belirlendiği için
 * `text-${name}` biçiminde Tailwind sınıfı üretmek güvenli değil —
 * Tailwind bu sınıfları statik taramada göremez. @theme bloğu her token'ı
 * :root altında bir CSS değişkeni olarak yayınladığı için doğrudan
 * `var(--color-...)` okumak hem güvenli hem token'a sadık.
 */

/** Stil rehberindeki tüm kromatik ve nötr token adları. */
export const colorTokens = [
  'ember-orange',
  'verdant-green',
  'signal-red-orange',
  'sky-blue',
  'mist-blue',
  'sunset-orange',
  'amber',
  'alert-red',
  'plum',
  'iris',
  'electric-blue',
  'graphite',
  'charcoal',
  'fog',
  'paper-white',
];

/**
 * @param {string} token Örn. 'ember-orange'
 * @param {string} [fallback] Token tanınmazsa kullanılacak token
 * @returns {string} CSS `var(--color-*)` ifadesi
 */
export function colorVar(token, fallback = 'graphite') {
  const safe = colorTokens.includes(token) ? token : fallback;
  return `var(--color-${safe})`;
}
