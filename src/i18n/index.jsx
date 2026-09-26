import { createContext, useContext, useEffect } from 'react';
import en from './locales/en';
import { absoluteUrlFor } from '../lib/routes';
import { site } from '../lib/siteConfig';

const LocaleContext = createContext(null);

/**
 * Site yalnızca İngilizce. Metinler yine de tek sözlükten okunur; böylece
 * içerik bileşenlerden ayrı kalır.
 */
export function LocaleProvider({ children }) {
  useEffect(() => {
    document.documentElement.lang = en.htmlLang;
    document.documentElement.dir = en.dir;
  }, []);

  return <LocaleContext.Provider value={en}>{children}</LocaleContext.Provider>;
}

/** Site sözlüğü. */
export function useT() {
  const t = useContext(LocaleContext);
  if (!t) throw new Error('useT must be used inside LocaleProvider.');
  return t;
}

/**
 * Sayfa başlığı, açıklaması ve canonical etiketini yönetir.
 *
 * Statik index.html varsayılan og etiketlerini taşır (sosyal tarayıcılar
 * JavaScript çalıştırmaz). Buradaki güncellemeler tarayıcı ve arama motorları
 * için geçerlidir.
 */
export function useDocumentHead({ pageKey, title, description }) {
  useEffect(() => {
    if (title) document.title = title;

    const url = absoluteUrlFor(pageKey, site.origin);
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setLink('canonical', url);
  }, [pageKey, title, description]);
}

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
