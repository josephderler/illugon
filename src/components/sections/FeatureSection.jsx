import { useT } from '../../i18n';
import { colorVar } from '../../lib/palette';
import Section from '../layout/Section';
import TwoToneHeadline from '../ui/TwoToneHeadline';
import DeviceFrame from '../phone/DeviceFrame';
import Reveal from '../ui/Reveal';
import { cn } from '../../lib/cn';

/**
 * Oyun bölümü: iki kolon — metin + yatay cihaz mockup'ı, bölümler sırayla
 * taraf değiştirir. Başlık 30px iki tonlu, sol hizalı.
 *
 * Reveal animasyonu: metin bloğu önce görünür (delay=0), cihaz mockup'ı
 * 150ms sonra gelir — kaskad efekti oluşturur.
 */
export default function FeatureSection({ layout, surface }) {
  const t = useT();
  const copy = t.home.features[layout.id];
  if (!copy) return null;

  const mediaRight = layout.mediaSide !== 'left';

  return (
    <Section id={layout.id} surface={surface}>
      <div
        className={cn(
          'flex flex-col items-center gap-12 lg:gap-16',
          mediaRight ? 'lg:flex-row' : 'lg:flex-row-reverse',
        )}
      >
        <Reveal className="flex-1">
          <TwoToneHeadline
            accent={copy.headline.accent}
            rest={copy.headline.rest}
            accentColor={layout.accentColor}
            level="heading"
          />

          <p
            className="mt-6 max-w-[520px] text-body"
            style={{ color: colorVar('graphite') }}
          >
            {copy.body}
          </p>

          <ul className="mt-8 flex list-none flex-col gap-4 p-0">
            {copy.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: colorVar(layout.accentColor) }}
                  aria-hidden="true"
                />
                <span
                  className="text-body-sm"
                  style={{ color: colorVar('graphite') }}
                >
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="flex w-full min-w-0 flex-1 justify-center">
          <DeviceFrame
            screen={layout.screen}
            className="max-w-[540px]"
            sizes="(min-width: 1024px) 520px, 92vw"
          />
        </Reveal>
      </div>
    </Section>
  );
}
