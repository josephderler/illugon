import { useT } from '../../i18n';
import { colorVar } from '../../lib/palette';
import Section from '../layout/Section';
import TwoToneHeadline from '../ui/TwoToneHeadline';
import Reveal from '../ui/Reveal';

/**
 * YouTube video bölümü — gizlilik dostu gömme (youtube-nocookie.com).
 *
 * Performans: iframe lazy-load edilir, sayfa yükleme hızını etkilemez.
 * Oran 16:9, responsive (aspect-ratio ile).
 * 26px yarıçap korunur, gölge yok (flat sistem).
 */

const VIDEO_ID = 'GvYL2yl63ek';

export default function VideoShowcase() {
  const t = useT();
  const content = t.home.video;

  return (
    <Section id="video">
      <div className="mx-auto max-w-[860px]">
        <Reveal>
          <TwoToneHeadline
            accent={content.headline.accent}
            rest={content.headline.rest}
            accentColor="verdant-green"
            level="heading"
            align="center"
          />

          <p
            className="mt-5 text-center text-body"
            style={{ color: colorVar('graphite') }}
          >
            {content.subtext}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div
            className="mt-10 overflow-hidden rounded-3xl"
            style={{ backgroundColor: colorVar('graphite') }}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
              title={content.iframeTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="block aspect-video w-full"
              style={{ border: 0 }}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
