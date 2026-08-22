import { useT } from '../../i18n';
import { downloadSection } from '../../lib/siteConfig';
import { colorVar } from '../../lib/palette';
import Section from '../layout/Section';
import Card from '../ui/Card';
import GooglePlayBadge from '../ui/GooglePlayBadge';
import Reveal from '../ui/Reveal';

/**
 * İndirme kartı: Fog zeminli, 26px yarıçap. Reveal ile viewport'a girdiğinde
 * fade-in yapar.
 */
export default function DownloadCta() {
  const { download } = useT().home;

  return (
    <Section id={downloadSection.id}>
      <Reveal>
        <Card surface="fog" className="lg:p-16">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[560px]">
              <h2
                className="text-heading-sm font-bold sm:text-heading"
                style={{ color: colorVar('graphite') }}
              >
                {download.headline}
              </h2>
              <p
                className="mt-4 text-body"
                style={{ color: colorVar('graphite') }}
              >
                {download.subtext}
              </p>
            </div>

            <GooglePlayBadge />
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
