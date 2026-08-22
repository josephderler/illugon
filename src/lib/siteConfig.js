/**
 * DİLDEN BAĞIMSIZ yapı ve doğrulanmış bilgiler.
 *
 * Buraya yalnızca her iki dilde de aynı kalan şeyler girer: marka, mağaza,
 * iletişim bilgileri, bölüm kimlikleri, renk ve görsel eşlemeleri.
 * Tüm METİN src/i18n/locales/{tr,en}.js içindedir.
 */

export const brand = {
  name: 'Illugon',
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
  /** Play listelemesindeki uygulama adı. */
  listingTitle: 'Eğitici Oyun: Şekiller Renkler',
};

/**
 * İletişim bilgileri — hukuki sayfalarda veri sorumlusu bilgisi olarak da
 * kullanılır, bu yüzden tek kaynak burasıdır.
 *
 * ⚠️ Adres kullanıcının verdiği biçimde birebir duruyor. "London, Manchester"
 * satırı tutarsız görünüyor (M16 8WP posta kodu Manchester'a ait); teyit
 * edildikten sonra `addressLines` düzeltilmeli.
 */
export const contact = {
  addressLines: ['280 Wilbraham Rd', 'Manchester M16 8WP', 'GB'],
  phone: '+447564890036',
  phoneHref: 'tel:+447564890036',
  email: 'contact@illugon.com',
  emailHref: 'mailto:contact@illugon.com',
};

/**
 * Resmi Google Play rozetinin dile göre gösterim ölçüleri.
 *
 * Rozet Google'ın kendi asset'i; yalnızca ölçeklenir. Asset'in içindeki şeffaf
 * clear space oranı dile göre farklı (TR'de görünür rozet 646x192, EN'de
 * 646x168), bu yüzden rozetin GÖRÜNÜR yüksekliğinin her iki dilde de 56px
 * olması için gösterim ölçüleri ayrı hesaplanmıştır.
 */
export const storeBadges = {
  tr: { name: 'google-play-tr', width: 188, height: 73, small: 188, large: 376 },
  en: { name: 'google-play-en', width: 215, height: 83, small: 215, large: 430 },
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
