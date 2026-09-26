import { useT, useDocumentHead } from '../i18n';
import { colorVar } from '../lib/palette';
import Section from '../components/layout/Section';
import TwoToneHeadline from '../components/ui/TwoToneHeadline';
import Card from '../components/ui/Card';
import Reveal from '../components/ui/Reveal';
import PageLink from '../components/ui/PageLink';
import ArrowIcon from '../components/ui/ArrowIcon';

/**
 * İletişim sayfası — yeniden tasarlandı.
 *
 * Yapı: sol tarafta başlık + açıklama + gizlilik notu, sağ tarafta kartlar.
 * Masaüstünde iki kolon yan yana, mobilde tek kolon yığılır.
 * Kartlarda ikon + etiket + değer; her kart kendi aksan renginde ince üst
 * kenarlık taşır (sistem flat kalır, gölge yok).
 */
export default function ContactPage() {
  const t = useT();

  useDocumentHead({
    pageKey: 'contact',
    title: t.contact.title,
    description: t.contact.description,
  });

  return (
    <Section className="pt-12 lg:pt-20">
      <div className="mx-auto max-w-page">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
          {/* Sol: başlık ve açıklama */}
          <Reveal className="flex-1">
            <TwoToneHeadline
              accent={t.contact.heading.accent}
              rest={t.contact.heading.rest}
              accentColor="ember-orange"
              level="heading"
              as="h1"
            />

            <p
              className="mt-6 max-w-[520px] text-body leading-relaxed"
              style={{ color: colorVar('graphite') }}
            >
              {t.contact.lead}
            </p>

            <p
              className="mt-8 max-w-[520px] rounded-3xl px-5 py-4 text-body-sm"
              style={{
                backgroundColor: colorVar('fog'),
                color: colorVar('mist-blue'),
              }}
            >
              {t.contact.privacyNote}
            </p>

            <PageLink
              page="home"
              className="mt-10 inline-flex items-center gap-2 text-body-sm font-semibold no-underline transition-opacity duration-150 hover:opacity-70"
              style={{ color: colorVar('ember-orange') }}
            >
              <span>{t.common.backToHome}</span>
              <ArrowIcon />
            </PageLink>
          </Reveal>

          {/* Sağ: kartlar */}
          <div className="flex w-full flex-col gap-5 lg:w-[420px] lg:shrink-0">
            {t.contact.cards.map((card, i) => (
              <Reveal key={card.label} delay={i * 100}>
                <Card
                  surface="paper-white"
                  className="relative overflow-hidden border pl-6"
                  style={{ borderColor: colorVar('fog') }}
                >
                  {/* Sol aksan şeridi */}
                  <span
                    className="absolute top-0 left-0 h-full w-1 rounded-l-3xl"
                    style={{ backgroundColor: colorVar(card.color) }}
                    aria-hidden="true"
                  />

                  <div className="flex items-start gap-4">
                    <ContactIcon type={card.icon} color={card.color} />

                    <div className="min-w-0 flex-1">
                      <span
                        className="text-caption font-semibold uppercase tracking-wide"
                        style={{ color: colorVar(card.color) }}
                      >
                        {card.label}
                      </span>

                      {card.href ? (
                        <a
                          href={card.href}
                          className="mt-2 block text-body font-semibold no-underline transition-all duration-200 hover:translate-x-1 hover:opacity-80"
                          style={{ color: colorVar('graphite') }}
                        >
                          {card.value}
                        </a>
                      ) : (
                        <address
                          className="mt-2 text-body whitespace-pre-line not-italic"
                          style={{ color: colorVar('graphite') }}
                        >
                          {card.value}
                        </address>
                      )}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/**
 * İletişim kart ikonu. Stil rehberine uygun: stroke-only, currentColor,
 * 26px yarıçaplı daire içinde.
 */
function ContactIcon({ type, color }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  let icon;
  if (type === 'email') {
    icon = (
      <svg {...common}>
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M22 7l-10 6L2 7" />
      </svg>
    );
  } else if (type === 'phone') {
    icon = (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    );
  } else {
    icon = (
      <svg {...common}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }

  return (
    <span
      className="grid h-12 w-12 shrink-0 place-items-center rounded-full"
      style={{ backgroundColor: colorVar('fog'), color: colorVar(color) }}
    >
      {icon}
    </span>
  );
}
