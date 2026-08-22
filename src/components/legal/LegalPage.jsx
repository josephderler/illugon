import { useT, useDocumentHead } from '../../i18n';
import { legalUpdatedAt } from '../../lib/siteConfig';
import { colorVar } from '../../lib/palette';
import Section from '../layout/Section';
import PageLink from '../ui/PageLink';
import ArrowIcon from '../ui/ArrowIcon';

/**
 * Hukuki metinler için ortak düzen.
 *
 * Uzun metin okunabilirliği: satır uzunluğu ~68 karakterle sınırlı (max-w),
 * gövde 17px / 1.6 satır yüksekliği. Bölüm başlıkları h2, gövde p — ekran
 * okuyucu ve tarayıcı "içindekiler" özellikleri için doğru hiyerarşi.
 *
 * İçerik `sections` dizisinden gelir; metin dosyaya değil sözlüğe yazılır ki
 * iki dil tek yapıdan beslensin.
 */
export default function LegalPage({ pageKey, doc }) {
  const t = useT();

  useDocumentHead({
    pageKey,
    title: doc.title,
    description: doc.description,
  });

  const updated = new Intl.DateTimeFormat(t.htmlLang, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(legalUpdatedAt));

  return (
    <Section className="pt-12 lg:pt-16">
      <article className="mx-auto max-w-[720px]">
        <h1
          className="text-heading-sm font-bold sm:text-heading"
          style={{ color: colorVar('graphite') }}
        >
          {doc.heading}
        </h1>

        <p
          className="mt-3 font-micro text-tiny"
          style={{ color: colorVar('mist-blue') }}
        >
          {t.common.lastUpdated}: {updated}
        </p>

        <p className="mt-6 text-body" style={{ color: colorVar('graphite') }}>
          {doc.lead}
        </p>

        <div className="mt-12 flex flex-col gap-10">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2
                className="text-heading-sm font-bold"
                style={{ color: colorVar('ember-orange') }}
              >
                {section.heading}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-body"
                    style={{ color: colorVar('graphite') }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <PageLink
          page="home"
          className="mt-16 inline-flex items-center gap-2 text-body-sm font-semibold no-underline transition-opacity duration-150 hover:opacity-70"
          style={{ color: colorVar('ember-orange') }}
        >
          <span>{t.common.backToHome}</span>
          <ArrowIcon />
        </PageLink>
      </article>
    </Section>
  );
}
