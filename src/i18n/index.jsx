import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import tr from './locales/tr';
import en from './locales/en';
import {
  DEFAULT_LOCALE,
  LOCALES,
  localeFromPath,
  pathFor,
  absoluteUrlFor,
} from '../lib/routes';
import { site } from '../lib/siteConfig';

export const dictionaries = { tr, en };

const LocaleContext = createContext(null);

/**
 * Dil, URL'den türetilir — ayrı bir state tutulmaz. Böylece dil her zaman
 * adres çubuğuyla tutarlı olur, paylaşılan bağlantı doğru dilde açılır ve
 * geri/ileri tuşları beklendiği gibi çalışır.
 */
export function LocaleProvider({ children }) {
  const { pathname } = useLocation();
  const { locale } = localeFromPath(pathname);

  const value = useMemo(() => {
    const active = LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
    return {
      locale: active,
      t: dictionaries[active],
      otherLocale: active === 'tr' ? 'en' : 'tr',
    };
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = value.t.htmlLang;
    document.documentElement.dir = value.t.dir;
  }, [value]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale, LocaleProvider içinde kullanılmalı.');
  return ctx;
}

/** Aktif dildeki sözlük. */
export function useT() {
  return useLocale().t;
}

/** Aktif dilde bir sayfanın yolunu üretir. */
export function useLocalePath() {
  const { locale } = useLocale();
  return (pageKey) => pathFor(pageKey, locale);
}

/**
 * Sayfa başlığı, açıklaması, canonical ve hreflang etiketlerini yönetir.
 *
 * Statik index.html Türkçe og etiketlerini taşır (sosyal tarayıcılar JavaScript
 * çalıştırmaz). Burada yapılan güncellemeler tarayıcı ve arama motorları için
 * geçerlidir. Sosyal önizlemenin dile göre değişmesi gerekirse sayfaların
 * prerender edilmesi gerekir.
 */
export function useDocumentHead({ pageKey, title, description }) {
  const { locale } = useLocale();

  useEffect(() => {
    if (title) document.title = title;

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:locale', locale === 'tr' ? 'tr_TR' : 'en_GB');
    setMeta('property', 'og:url', absoluteUrlFor(pageKey, locale, site.origin));

    setLink('canonical', null, absoluteUrlFor(pageKey, locale, site.origin));

    for (const alt of LOCALES) {
      setLink(
        'alternate',
        alt === 'tr' ? 'tr' : 'en',
        absoluteUrlFor(pageKey, alt, site.origin),
      );
    }
    setLink('alternate', 'x-default', absoluteUrlFor(pageKey, DEFAULT_LOCALE, site.origin));
  }, [pageKey, title, description, locale]);
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

function setLink(rel, hreflang, href) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;

  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
