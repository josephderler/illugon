import { useState } from 'react';
import { useT } from '../../i18n';
import { colorVar } from '../../lib/palette';
import BrandWordmark from '../ui/BrandWordmark';
import PageLink from '../ui/PageLink';
import FilledButton from '../ui/FilledButton';

/**
 * İnce üst bar: solda logo, ortada ghost nav, sağda dolu Ember Orange buton. Sidebar veya mega-menü yok. Mobilde nav bir açılır
 * panele iner.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const t = useT();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: colorVar('paper-white'),
        borderColor: colorVar('fog'),
      }}
    >
      <div className="mx-auto flex h-20 w-full max-w-page items-center justify-between gap-6 px-6 sm:px-8">
        <BrandWordmark />

        <nav aria-label={t.nav.ariaLabel} className="hidden items-center gap-8 md:flex">
          {t.nav.items.map((item) => (
            <PageLink
              key={item.href}
              hash
              href={item.href}
              className="text-body no-underline transition-opacity duration-150 hover:opacity-70"
              style={{ color: colorVar('graphite') }}
            >
              {item.label}
            </PageLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/*
            Görünürlük sarmalayıcıyla kontrol edilir, FilledButton'a `hidden`
            geçilerek DEĞİL: butonun taban sınıfı `inline-flex` ve Tailwind
            çıktısında `.inline-flex` kuralı `.hidden`'dan sonra geldiği için
            `hidden` sessizce etkisiz kalır.
          */}
          <span className="hidden sm:block">
            <FilledButton
              as="a"
              href="https://play.google.com/store/apps/details?id=com.ilugon.shapes.colors.toddler.games"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.nav.action.label}
            </FilledButton>
          </span>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-3xl md:hidden"
            style={{ backgroundColor: colorVar('fog'), color: colorVar('graphite') }}
            aria-expanded={open}
            aria-controls="mobil-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              {open ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
              ) : (
                <path
                  d="M3 6h14M3 10h14M3 14h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobil-menu"
          className="border-t md:hidden"
          style={{
            backgroundColor: colorVar('paper-white'),
            borderColor: colorVar('fog'),
          }}
        >
          <nav
            aria-label={t.nav.mobileAriaLabel}
            className="mx-auto flex max-w-page flex-col gap-5 px-6 py-6"
          >
            {t.nav.items.map((item) => (
              <PageLink
                key={item.href}
                hash
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-body no-underline transition-opacity duration-150 hover:opacity-70"
                style={{ color: colorVar('graphite') }}
              >
                {item.label}
              </PageLink>
            ))}
            <span className="self-start sm:hidden">
              <FilledButton
                as="a"
                href="https://play.google.com/store/apps/details?id=com.ilugon.shapes.colors.toddler.games"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                {t.nav.action.label}
              </FilledButton>
            </span>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
