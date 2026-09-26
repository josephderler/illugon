/**
 * METİN DIŞI yapı ve doğrulanmış bilgiler: marka, şirket, mağaza, iletişim
 * bilgileri, bölüm kimlikleri, renk ve görsel eşlemeleri.
 * Tüm METİN src/i18n/locales/en.js içindedir.
 */

export const brand = {
  name: 'ILLOGAN',
};

/** Hukuki sayfalarda veri sorumlusu olarak geçen tüzel kişi. */
export const company = {
  legalName: 'ILLOGAN ENTERPRISES LTD',
};

/** Yayın adresi — canonical, hreflang ve og:url burada üretilir. */
export const site = {
  origin: 'https://illugon.com',
};

/**
 * Mağaza. Uygulama YALNIZCA Google Play'de yayında — App Store bağlantısı
 * eklenmemeli.
 */
export const store = {
  platform: 'Google Play',
  packageId: 'com.ilugon.shapes.colors.toddler.games',
  url: 'https://play.google.com/store/apps/details?id=com.ilugon.shapes.colors.toddler.games',
};

/**
 * İletişim bilgileri — hukuki sayfalarda veri sorumlusu bilgisi olarak da
 * kullanılır, bu yüzden tek kaynak burasıdır.
 */
export const contact = {
  addressLines: ['186 Evering Road', 'London, England', 'E5 8AJ'],
  phone: '+447428845167',
  phoneHref: 'tel:+447428845167',
  email: 'info@illogan.co.uk',
  emailHref: 'mailto:info@illogan.co.uk',
  altEmail: 'eloifernandezbru@outlook.com',
  altEmailHref: 'mailto:eloifernandezbru@outlook.com',
};

/**
 * Resmi Google Play rozetinin gösterim ölçüleri.
 *
 * Rozet Google'ın kendi asset'i; yalnızca ölçeklenir. Asset'in içindeki şeffaf
 * clear space nedeniyle (görünür rozet 646x168) ölçüler, rozetin GÖRÜNÜR
 * yüksekliği 56px olacak şekilde hesaplanmıştır.
 */
export const storeBadge = {
  name: 'google-play-en',
  width: 215,
  height: 83,
  small: 215,
  large: 430,
};

/** Hukuki metinlerin son güncellenme tarihi (ISO). */
export const legalUpdatedAt = '2026-08-21';

/**
 * Oyun bölümlerinin YAPISI. Metin ve başlıklar locale dosyalarında,
 * burada yalnızca sıra, renk, hangi ekran görüntüsü ve hangi tarafta olduğu.
 * `id` hem anchor hem locale sözlüğündeki anahtar.
 */
export const featureLayout = [
  { id: 'oyunlar', accentColor: 'ember-orange', screen: '1', mediaSide: 'right' },
  { id: 'sayilar', accentColor: 'verdant-green', screen: '2', mediaSide: 'left' },
  { id: 'eksik-tamamla', accentColor: 'sunset-orange', screen: '3', mediaSide: 'right' },
  { id: 'yanlis-renk', accentColor: 'iris', screen: '4', mediaSide: 'left' },
  { id: 'sirala', accentColor: 'electric-blue', screen: '5', mediaSide: 'right' },
];

/** Hero'daki kategori etiketlerinin renkleri; metin locale'den gelir. */
export const heroTagColors = ['sky-blue', 'verdant-green', 'plum', 'iris'];

export const teacherApprovedSection = {
  id: 'ogretmen-onayli',
  accentColor: 'verdant-green',
};

export const heroSection = {
  id: 'ekranlar',
  accentColor: 'verdant-green',
};

export const downloadSection = {
  id: 'indir',
};
