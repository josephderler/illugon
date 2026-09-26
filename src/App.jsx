import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LocaleProvider, useT } from './i18n';
import { PAGE_KEYS, pathFor } from './lib/routes';
import { colorVar } from './lib/palette';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PageTransition from './components/layout/PageTransition';
import HomePage from './routes/HomePage';
import ContactPage from './routes/ContactPage';
import NotFoundPage from './routes/NotFoundPage';
import { PrivacyPage, TermsPage, KvkkPage } from './routes/LegalRoutes';

/** Sayfa anahtarı -> bileşen. routes.js'teki kayıtla eşleşmeli. */
const PAGE_COMPONENTS = {
  home: HomePage,
  privacy: PrivacyPage,
  terms: TermsPage,
  kvkk: KvkkPage,
  contact: ContactPage,
};

export default function App() {
  return (
    <LocaleProvider>
      <ScrollManager />
      <Shell />
    </LocaleProvider>
  );
}

/**
 * Tek kolon, ortalanmış, 1200px maksimum genişlikte sayfa iskeleti.
 * Header ve footer tüm sayfalarda ortaktır; yalnızca orta bölüm değişir.
 */
function Shell() {
  const t = useT();

  return (
    <>
      <a
        href="#icerik"
        className="sr-only-focusable absolute top-4 left-4 z-[60] rounded-3xl px-5 py-3 text-body-sm font-semibold no-underline"
        style={{
          backgroundColor: colorVar('graphite'),
          color: colorVar('paper-white'),
        }}
      >
        {t.common.skipToContent}
      </a>

      <Header />

      <main id="icerik">
        <PageTransition>
          <Routes>
            {PAGE_KEYS.map((key) => {
              const Component = PAGE_COMPONENTS[key];
              return <Route key={key} path={pathFor(key)} element={<Component />} />;
            })}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageTransition>
      </main>

      <Footer />
    </>
  );
}

/**
 * Sayfa geçişlerinde kaydırma davranışı.
 *
 * Router varsayılan olarak kaydırma konumunu korur; bu, farklı bir sayfaya
 * geçildiğinde sayfanın ortasından başlamak gibi kafa karıştırıcı bir sonuç
 * verir. Çapa (#bölüm) varsa ilgili öğeye, yoksa en üste gidilir.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Öğe henüz bağlanmamış olabilir; bir frame bekleyip deniyoruz.
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' });
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
