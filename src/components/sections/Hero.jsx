import { useT } from '../../i18n';
import { heroSection, heroTagColors } from '../../lib/siteConfig';
import { colorVar } from '../../lib/palette';
import Section from '../layout/Section';
import TwoToneHeadline from '../ui/TwoToneHeadline';
import GooglePlayBadge from '../ui/GooglePlayBadge';
import Tag from '../ui/Tag';
import DeviceShowcase from '../phone/DeviceShowcase';
import Reveal from '../ui/Reveal';

/**
 * Hero: ortalanmış yığın — iki tonlu başlık, tek paragraf alt metin, kategori
 * etiketleri, resmi Google Play rozeti; ardından sayfa genişliğine yayılan
 * yatay cihaz yelpazesi. Zemin Paper White, gölge yok.
 *
 * Hero ilk görünüm olduğu için animasyon daha hızlı ve sıralı: başlık -> metin
 * -> etiketler -> rozet -> cihazlar.
 */
export default function Hero() {
  const { hero } = useT().home;

  return (
    <Section id={heroSection.id} className="pt-16 pb-0 lg:pt-24">
      <div className="flex flex-col items-center">
        <Reveal>
          <TwoToneHeadline
            accent={hero.headline.accent}
            rest={hero.headline.rest}
            accentColor={heroSection.accentColor}
            level="display"
            align="center"
            className="max-w-[820px]"
          />
        </Reveal>

        <Reveal delay={100}>
          <p
            className="mt-6 max-w-[620px] text-center text-body"
            style={{ color: colorVar('graphite') }}
          >
            {hero.subtext}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <ul className="mt-8 flex list-none flex-wrap justify-center gap-3 p-0">
            {hero.tags.map((label, i) => (
              <li key={label}>
                <Tag color={heroTagColors[i % heroTagColors.length]}>{label}</Tag>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={300}>
          <GooglePlayBadge className="mt-6" />
        </Reveal>
      </div>

      <Reveal delay={400}>
        <DeviceShowcase className="mt-16 lg:mt-20" />
      </Reveal>
    </Section>
  );
}
