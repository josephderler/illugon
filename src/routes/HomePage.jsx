import { useT, useDocumentHead } from '../i18n';
import { featureLayout } from '../lib/siteConfig';
import Hero from '../components/sections/Hero';
import TeacherApproved from '../components/sections/TeacherApproved';
import VideoShowcase from '../components/sections/VideoShowcase';
import FeatureSection from '../components/sections/FeatureSection';
import Faq from '../components/sections/Faq';
import DownloadCta from '../components/sections/DownloadCta';

/**
 * Ana sayfa.
 *
 * Sıra: hero -> öğretmen onayı -> oyun bölümleri -> FAQ -> indirme kartı.
 * Oyun bölümleri sırayla Paper White / Fog yüzeyi arasında geçiş yapar; öğretmen
 * onayı beyaz kaldığı için ilk oyun bölümü Fog ile başlar ve ritim bozulmaz.
 *
 * Not: stil referansındaki "As Featured By" basın ızgarası KASITLI olarak yok —
 * gerçek bir basın listesi bulunmadığı için uydurma logo göstermiyoruz. Yerini
 * doğrulanabilir tek sosyal kanıt olan Google Play rozeti aldı.
 */
export default function HomePage() {
  const t = useT();

  useDocumentHead({
    pageKey: 'home',
    title: t.home.title,
    description: t.home.description,
  });

  return (
    <>
      <Hero />
      <TeacherApproved />
      <VideoShowcase />

      {featureLayout.map((layout, i) => (
        <FeatureSection
          key={layout.id}
          layout={layout}
          surface={i % 2 === 0 ? 'fog' : undefined}
        />
      ))}

      <Faq />
      <DownloadCta />
    </>
  );
}
