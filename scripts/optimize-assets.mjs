/**
 * Görsel varlık optimizasyonu (offline, elle çalıştırılır).
 *
 *   node scripts/optimize-assets.mjs      (veya: npm run assets)
 *
 * İki iş yapar:
 *
 * 1) EKRAN GÖRÜNTÜLERİ — assets-src/screens/*.webp
 *    Mağaza çıktısı, 2208x1242 lossless WebP, dosya başına ~0.4-0.7 MB.
 *    Sitede hiçbir yerde bu genişliğe ihtiyaç yok.
 *    Çıktı: public/screens/<ad>-<genişlik>.webp
 *
 * 2) LOGO — assets-src/logo/illugon.webp
 *    Kaynak yalnızca 48x48 ve alfa kanalı yok.
 *    Küçültmeler kayıpsız kalitede; BÜYÜTME yalnızca platformun zorunlu kıldığı
 *    boyutlar için yapılır (apple-touch-icon 180px) ve lanczos + hafif keskinleştirme
 *    ile telafi edilir. Daha yüksek çözünürlüklü bir master gelirse
 *    UPSCALED_ICONS listesi büyütülebilir, kod değişmesi gerekmez.
 *    Çıktı: public/logo/illugon-<boyut>.webp, public/favicon-<boyut>.png,
 *           public/apple-touch-icon.png
 *
 * 3) ROZET — assets-src/badges/teacher-approved.webp
 *    Google Play "Teacher Approved" rozeti. Kaynak asset, işaretin etrafında
 *    opak gri kenarlıklı bir sunum kartı da içeriyor (616x346, 16:9). Sitenin
 *    kart dili kenarlıksız olduğu için yalnızca İŞARET kırpılıp alınıyor;
 *    işaretin kendisi ölçeklenmenin dışında DEĞİŞTİRİLMİYOR (yeniden
 *    renklendirme, döndürme, deforme etme yok).
 *    Çıktı: public/badges/teacher-approved-<genişlik>.webp
 *
 * 4) MAĞAZA ROZETİ — assets-src/badges/google-play-tr.png
 *    Google'ın resmi Türkçe "İNDİRİN Google Play" rozeti. Yalnızca ölçeklenir,
 *    kayıpsız kodlanır. Kendi elimizle rozet ÇİZMİYORUZ — marka kuralı resmi
 *    asset'i şart koşar.
 *    Çıktı: public/badges/google-play-tr-<genişlik>.webp
 *
 * 5) SOSYAL PAYLAŞIM GÖRSELİ — public/og-image.png (1200x630)
 *    Ekran görüntüsü yüksek çözünürlüklü kaynaktan geldiği için kalite tam.
 *    Tipografi sistem fontuyla çiziliyor (aşağıdaki OG_FONT_STACK); markanın
 *    Nunito Sans yüzü repoda gömülü olmadığı için bu tek varlıkta ikame kabul
 *    edilmiştir.
 *
 * Kalite politikası: her çıktı için hem lossless hem yüksek kaliteli lossy
 * kodlama denenir, DAHA KÜÇÜK olan yazılır. Düz vektör görsellerde lossless
 * sık sık kazanır — o durumda piksel kaybı sıfırdır.
 */
import { readdir, mkdir, writeFile, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const SCREENS_SRC = 'assets-src/screens';
const SCREENS_EN_SRC = 'assets-src/screens-en';
const SCREENS_OUT = 'public/screens';
const SCREENS_EN_OUT = 'public/screens-en';
const LOGO_SRC = 'assets-src/logo/illugon.webp';
const LOGO_OUT = 'public/logo';
const FAVICON_OUT = 'public';

/**
 * Ekran görüntüsü genişlikleri.
 * Sitede bir cihaz ekranı en fazla ~520 CSS px genişlikte görünüyor;
 * 1120 = 2x DPR karşılığı, üst sınır bu. 480/800 daha küçük viewport'lar için.
 */
const SCREEN_WIDTHS = [480, 800, 1120];

/**
 * EN kaynaklar 526px geniş — büyütme kaliteyi bozar.
 * 526 (orijinal, 1x DPR) ve 480 (küçük viewport) üretilir.
 */
const SCREEN_EN_WIDTHS = [480, 526];

/** Logo kare boyutları (WebP). Kaynaktan büyük olanlar otomatik atlanır. */
const LOGO_SIZES = [48, 32];

/** Favicon olarak yazılacak PNG boyutları (yine kaynaktan büyük olamaz). */
const FAVICON_SIZES = [48, 32];

/**
 * Platformun sabit boyut şart koştuğu, bu yüzden büyütmeye izin verilen ikonlar.
 * iOS ana ekran ikonu 180x180 ister ve dosya yoksa sayfa görüntüsü kullanır —
 * yumuşak bir ikon, ikon olmamasından iyidir.
 */
const UPSCALED_ICONS = [{ file: 'apple-touch-icon.png', size: 180 }];

const BADGE_SRC = 'assets-src/badges/teacher-approved.webp';
const BADGE_OUT = 'public/badges';

/**
 * Resmi Google Play mağaza rozeti (Türkçe "İNDİRİN" sürümü), Google'ın kendi
 * badge asset'inden indirildi: 646x250, alfa kanallı.
 *
 * Marka kuralı: rozet YALNIZCA ölçeklenebilir — yeniden renklendirme, kırpma,
 * döndürme, deforme etme veya yeniden çizme YOK. Bu yüzden burada kırpma
 * uygulanmıyor ve kodlama KAYIPSIZ zorlanıyor (piksel birebir korunur).
 *
 * Asset'in üst ve alt kenarında 29px şeffaf pay var — Google'ın şart koştuğu
 * clear space. Görünür rozet 646x192; yani asset 73px yüksekliğinde
 * gösterildiğinde rozetin kendisi 56px olur (sistemdeki rozet yüksekliği).
 */
/**
 * Her dil için ayrı artwork. Rozetin içindeki metin dile göre değiştiği gibi
 * ASSET İÇİNDEKİ ORANLAR DA değişiyor: Türkçe sürümde görünür rozet 646x192,
 * İngilizce sürümde 646x168. Bu yüzden 56px görünür yükseklik için gereken
 * gösterim ölçüsü de farklı — ölçüler src/lib/siteConfig.js `storeBadges`
 * içinde tutulur ve bileşen oradan okur.
 */
const STORE_BADGES = [
  { name: 'google-play-tr', src: 'assets-src/badges/google-play-tr.png', widths: [376, 188] },
  { name: 'google-play-en', src: 'assets-src/badges/google-play-en.png', widths: [430, 215] },
];

/**
 * Mavi işaretin kaynak asset içindeki konumu — alfa ve renk analiziyle ölçüldü
 * (opak + mavi baskın pikseller): 227x253 @ (192, 46). Etrafına ince şeffaf pay
 * bırakıyoruz ki ölçeklerken kenarlar kırpılmasın.
 */
const BADGE_CROP = { left: 182, top: 36, width: 247, height: 273 };

/** Rozet çıktı genişlikleri. Kaynak işaret 227px geniş — büyütme yapılmaz. */
const BADGE_WIDTHS = [144, 72];

/** OG görselinin ölçüsü — Facebook/Twitter/WhatsApp için standart. */
const OG_SIZE = { width: 1200, height: 630 };

/** OG görselinde kullanılacak yazı tipi yığını (sistem fontları). */
const OG_FONT_STACK = "'Segoe UI', 'Nunito Sans', 'DM Sans', Arial, sans-serif";

/** OG kompozisyonunda gösterilecek ekran görüntüsü. */
const OG_SCREEN = 'assets-src/screens/1.webp';

/** Stil rehberi renkleri — src/styles/index.css ile aynı olmalı. */
const COLOR = {
  paperWhite: '#ffffff',
  graphite: '#2f2f2f',
  verdantGreen: '#00b33f',
  mistBlue: '#72a2c5',
};

/** Lossy kodlamanın lossless'tan bu orandan fazla küçük olması gerekir. */
const LOSSY_MIN_GAIN = 0.9;

const kb = (n) => `${Math.round(n / 1024)} KB`;

async function encodeBestWebp(pipeline, { forceLossless = false } = {}) {
  if (forceLossless) {
    const buffer = await pipeline.clone().webp({ lossless: true, effort: 6 }).toBuffer();
    return { buffer, mode: 'lossless (zorunlu)' };
  }

  const [lossless, lossy] = await Promise.all([
    pipeline.clone().webp({ lossless: true, effort: 6 }).toBuffer(),
    pipeline.clone().webp({ quality: 92, effort: 6, smartSubsample: true }).toBuffer(),
  ]);

  return lossy.length < lossless.length * LOSSY_MIN_GAIN
    ? { buffer: lossy, mode: 'lossy q92' }
    : { buffer: lossless, mode: 'lossless' };
}

/** UTF-8 SVG tamponu — Türkçe karakterlerin bozulmaması için açık encoding. */
function svgBuffer(svg) {
  return Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>${svg}`, 'utf8');
}

/**
 * Köşeleri yuvarlatır. Sistemin 26px yarıçapını raster varlıklarda da korumak
 * için kullanılır; maske `dest-in` ile uygulanır, gölge eklenmez.
 */
async function roundCorners(input, width, height, radius, { sharpen = false } = {}) {
  const mask = svgBuffer(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">` +
      `<rect width="${width}" height="${height}" rx="${radius}" ry="${radius}" fill="#fff"/></svg>`,
  );

  let pipeline = sharp(input).resize(width, height, {
    fit: 'cover',
    kernel: 'lanczos3',
  });

  if (sharpen) pipeline = pipeline.sharpen({ sigma: 0.7, m1: 0.5, m2: 2 });

  return pipeline
    .ensureAlpha()
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();
}

async function buildScreens(rows) {
  await mkdir(SCREENS_OUT, { recursive: true });

  const files = (await readdir(SCREENS_SRC))
    .filter((f) => /\.(webp|png|jpe?g)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, 'tr'));

  for (const file of files) {
    const srcPath = join(SCREENS_SRC, file);
    const { name } = parse(file);
    const srcBytes = (await stat(srcPath)).size;
    const meta = await sharp(srcPath).metadata();

    for (const width of SCREEN_WIDTHS) {
      if (meta.width && width > meta.width) continue;

      const pipeline = sharp(srcPath).resize({
        width,
        withoutEnlargement: true,
        // Düz renkli illüstrasyonlarda kenarları keskin tutar.
        kernel: 'lanczos3',
      });

      const { buffer, mode } = await encodeBestWebp(pipeline);
      await writeFile(join(SCREENS_OUT, `${name}-${width}.webp`), buffer);

      rows.push({
        kaynak: `${file} ${meta.width}x${meta.height} (${kb(srcBytes)})`,
        cikti: `screens/${name}-${width}.webp`,
        boyut: kb(buffer.length),
        kodlama: mode,
      });
    }
  }
}

/**
 * İngilizce ekran görüntüleri — Türkçe ile aynı akış, farklı kaynak/çıktı.
 * Kaynak 526px geniş olduğu için büyütme yapılmaz.
 */
async function buildScreensEn(rows) {
  await mkdir(SCREENS_EN_OUT, { recursive: true });

  const files = (await readdir(SCREENS_EN_SRC))
    .filter((f) => /\.(webp|png|jpe?g)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, 'tr'));

  for (const file of files) {
    const srcPath = join(SCREENS_EN_SRC, file);
    const { name } = parse(file);
    const srcBytes = (await stat(srcPath)).size;
    const meta = await sharp(srcPath).metadata();

    for (const width of SCREEN_EN_WIDTHS) {
      if (meta.width && width > meta.width) continue;

      const pipeline = sharp(srcPath).resize({
        width,
        withoutEnlargement: true,
        kernel: 'lanczos3',
      });

      const { buffer, mode } = await encodeBestWebp(pipeline);
      await writeFile(join(SCREENS_EN_OUT, `${name}-${width}.webp`), buffer);

      rows.push({
        kaynak: `EN ${file} ${meta.width}x${meta.height} (${kb(srcBytes)})`,
        cikti: `screens-en/${name}-${width}.webp`,
        boyut: kb(buffer.length),
        kodlama: mode,
      });
    }
  }
}

async function buildLogo(rows) {
  await mkdir(LOGO_OUT, { recursive: true });

  const meta = await sharp(LOGO_SRC).metadata();
  const srcBytes = (await stat(LOGO_SRC)).size;
  const source = `illugon.webp ${meta.width}x${meta.height} (${kb(srcBytes)})`;
  const max = Math.min(meta.width ?? 0, meta.height ?? 0);

  for (const size of LOGO_SIZES) {
    if (size > max) {
      rows.push({
        kaynak: source,
        cikti: `logo/illugon-${size}.webp`,
        boyut: '-',
        kodlama: 'ATLANDI (kaynaktan büyük, büyütme yapılmaz)',
      });
      continue;
    }

    const pipeline = sharp(LOGO_SRC).resize({
      width: size,
      height: size,
      fit: 'cover',
      withoutEnlargement: true,
      kernel: 'lanczos3',
    });

    const { buffer, mode } = await encodeBestWebp(pipeline);
    await writeFile(join(LOGO_OUT, `illugon-${size}.webp`), buffer);
    rows.push({
      kaynak: source,
      cikti: `logo/illugon-${size}.webp`,
      boyut: kb(buffer.length),
      kodlama: mode,
    });
  }

  for (const size of FAVICON_SIZES) {
    if (size > max) continue;

    const buffer = await sharp(LOGO_SRC)
      .resize({ width: size, height: size, fit: 'cover', withoutEnlargement: true, kernel: 'lanczos3' })
      .png({ compressionLevel: 9, palette: true })
      .toBuffer();

    await writeFile(join(FAVICON_OUT, `favicon-${size}.png`), buffer);
    rows.push({
      kaynak: source,
      cikti: `favicon-${size}.png`,
      boyut: kb(buffer.length),
      kodlama: 'png',
    });
  }

  // Platformun zorunlu kıldığı büyük ikonlar. Büyütme kaçınılmaz; lanczos
  // sonrası hafif unsharp mask algılanan keskinliği geri kazandırır.
  for (const { file, size } of UPSCALED_ICONS) {
    const factor = (size / max).toFixed(1);
    const buffer = await sharp(LOGO_SRC)
      .resize({ width: size, height: size, fit: 'cover', kernel: 'lanczos3' })
      .sharpen({ sigma: 0.8, m1: 0.5, m2: 2 })
      .png({ compressionLevel: 9 })
      .toBuffer();

    await writeFile(join(FAVICON_OUT, file), buffer);
    rows.push({
      kaynak: source,
      cikti: file,
      boyut: kb(buffer.length),
      kodlama: `png (${factor}x BÜYÜTÜLDÜ — master gerekli)`,
    });
  }
}

/**
 * Google Play "Teacher Approved" rozeti.
 *
 * Kaynak asset'in sunum kartı (gri kenarlık) atılır, yalnızca işaret alınır.
 * Şeffaflık korunur; işaret sitenin beyaz zemininde durur.
 */
async function buildBadge(rows) {
  await mkdir(BADGE_OUT, { recursive: true });

  const meta = await sharp(BADGE_SRC).metadata();
  const srcBytes = (await stat(BADGE_SRC)).size;
  const source = `teacher-approved.webp ${meta.width}x${meta.height} (${kb(srcBytes)})`;

  for (const width of BADGE_WIDTHS) {
    if (width > BADGE_CROP.width) {
      rows.push({
        kaynak: source,
        cikti: `badges/teacher-approved-${width}.webp`,
        boyut: '-',
        kodlama: 'ATLANDI (işaretten büyük, büyütme yapılmaz)',
      });
      continue;
    }

    const pipeline = sharp(BADGE_SRC)
      .extract(BADGE_CROP)
      .resize({ width, withoutEnlargement: true, kernel: 'lanczos3' });

    const { buffer, mode } = await encodeBestWebp(pipeline);
    await writeFile(join(BADGE_OUT, `teacher-approved-${width}.webp`), buffer);

    rows.push({
      kaynak: source,
      cikti: `badges/teacher-approved-${width}.webp`,
      boyut: kb(buffer.length),
      kodlama: mode,
    });
  }
}

/**
 * Resmi Google Play mağaza rozeti. Yalnızca ölçeklenir; kırpma ve renk
 * müdahalesi yok, kodlama kayıpsız.
 */
async function buildStoreBadge(rows) {
  await mkdir(BADGE_OUT, { recursive: true });

  for (const badge of STORE_BADGES) {
    const meta = await sharp(badge.src).metadata();
    const srcBytes = (await stat(badge.src)).size;
    const source = `${badge.name}.png ${meta.width}x${meta.height} (${kb(srcBytes)})`;

    for (const width of badge.widths) {
      const pipeline = sharp(badge.src).resize({
        width,
        withoutEnlargement: true,
        kernel: 'lanczos3',
      });

      const { buffer, mode } = await encodeBestWebp(pipeline, {
        forceLossless: true,
      });
      await writeFile(join(BADGE_OUT, `${badge.name}-${width}.webp`), buffer);

      rows.push({
        kaynak: source,
        cikti: `badges/${badge.name}-${width}.webp`,
        boyut: kb(buffer.length),
        kodlama: mode,
      });
    }
  }
}

/**
 * Sosyal paylaşım görseli (og:image / twitter:image).
 *
 * Kompozisyon stil rehberine uyar: Paper White zemin, gölge yok, gradyan yok,
 * iki tonlu başlık (yeşil sonuç ifadesi + Graphite gövde), sağda yatay cihaz
 * çerçevesi içinde gerçek uygulama ekranı.
 */
async function buildSocialImage(rows) {
  const { width, height } = OG_SIZE;

  // --- Sağdaki cihaz: 16:9 ekran + Graphite bezel ---
  const screenW = 528;
  const screenH = Math.round((screenW * 9) / 16); // 297
  const bezel = 12;
  const frameW = screenW + bezel * 2;
  const frameH = screenH + bezel * 2;

  const screenPng = await roundCorners(OG_SCREEN, screenW, screenH, 26);
  const framePlate = svgBuffer(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${frameW}" height="${frameH}">` +
      `<rect width="${frameW}" height="${frameH}" rx="34" ry="34" fill="${COLOR.graphite}"/></svg>`,
  );
  const devicePng = await sharp(framePlate)
    .composite([{ input: screenPng, left: bezel, top: bezel }])
    .png()
    .toBuffer();

  // --- Soldaki logo ---
  // 48px kaynaktan 64px: 1.33x, gözle fark edilmeyen sınırda tutuluyor.
  // Daha büyük göstermek görünür yumuşama demek olurdu.
  const logoSize = 64;
  const logoPng = await roundCorners(LOGO_SRC, logoSize, logoSize, 15, {
    sharpen: true,
  });

  // --- Metin katmanı ---
  const textSvg = svgBuffer(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
       <g font-family="${OG_FONT_STACK}">
         <text x="156" y="137" font-size="44" font-weight="700" fill="${COLOR.graphite}">Illugon</text>
         <text x="72" y="320" font-size="54" font-weight="700" fill="${COLOR.verdantGreen}">Oynayarak Öğrenin</text>
         <text x="72" y="378" font-size="36" font-weight="600" fill="${COLOR.graphite}">şekil, renk ve sayılar</text>
         <text x="72" y="452" font-size="24" font-weight="600" fill="${COLOR.mistBlue}">2-5 yaş · Reklamsız · Çevrimdışı</text>
       </g>
     </svg>`,
  );

  const buffer = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: COLOR.paperWhite,
    },
  })
    .composite([
      { input: logoPng, left: 72, top: 90 },
      { input: textSvg, left: 0, top: 0 },
      { input: devicePng, left: width - frameW - 40, top: Math.round((height - frameH) / 2) },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer();

  await writeFile(join(FAVICON_OUT, 'og-image.png'), buffer);
  rows.push({
    kaynak: `${OG_SCREEN} + logo + metin`,
    cikti: 'og-image.png',
    boyut: kb(buffer.length),
    kodlama: `png ${width}x${height}`,
  });
}

async function main() {
  const rows = [];
  await buildScreens(rows);
  await buildScreensEn(rows);
  await buildLogo(rows);
  await buildBadge(rows);
  await buildStoreBadge(rows);
  await buildSocialImage(rows);

  if (rows.length === 0) {
    console.error('Optimize edilecek görsel bulunamadı.');
    process.exitCode = 1;
    return;
  }

  console.table(rows);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
