import { useT, useDocumentHead } from '../i18n';
import { colorVar } from '../lib/palette';
import Section from '../components/layout/Section';
import TwoToneHeadline from '../components/ui/TwoToneHeadline';
import PageLink from '../components/ui/PageLink';
import FilledButton from '../components/ui/FilledButton';

export default function NotFoundPage() {
  const t = useT();

  useDocumentHead({
    pageKey: 'home',
    title: t.notFound.title,
    description: t.notFound.description,
  });

  return (
    <Section className="pt-16 lg:pt-24">
      <div className="mx-auto flex max-w-[620px] flex-col items-center text-center">
        <TwoToneHeadline
          accent={t.notFound.heading.accent}
          rest={t.notFound.heading.rest}
          accentColor="ember-orange"
          level="heading"
          as="h1"
          align="center"
        />

        <p className="mt-6 text-body" style={{ color: colorVar('graphite') }}>
          {t.notFound.body}
        </p>

        <FilledButton as={PageLink} page="home" className="mt-10">
          {t.common.backToHome}
        </FilledButton>
      </div>
    </Section>
  );
}
