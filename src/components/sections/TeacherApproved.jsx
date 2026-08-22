import { useT } from '../../i18n';
import { store, teacherApprovedSection } from '../../lib/siteConfig';
import { colorVar } from '../../lib/palette';
import Section from '../layout/Section';
import TwoToneHeadline from '../ui/TwoToneHeadline';
import Reveal from '../ui/Reveal';

/**
 * Sosyal kanıt: Google Play "Teacher Approved" rozeti.
 * Scroll animasyonlu: rozet ikonu önce, metin 100ms sonra gelir.
 */
export default function TeacherApproved() {
  const { teacherApproved } = useT().home;

  return (
    <Section id={teacherApprovedSection.id}>
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <img
            src="/badges/teacher-approved-144.webp"
            srcSet="/badges/teacher-approved-72.webp 72w, /badges/teacher-approved-144.webp 144w"
            sizes="72px"
            width="144"
            height="159"
            alt={teacherApproved.badgeAlt}
            draggable="false"
            className="h-20 w-auto"
          />
        </Reveal>

        <Reveal delay={100}>
          <TwoToneHeadline
            accent={teacherApproved.headline.accent}
            rest={teacherApproved.headline.rest}
            accentColor={teacherApprovedSection.accentColor}
            level="heading"
            align="center"
            className="mt-8 max-w-[720px]"
          />

          <p
            className="mt-5 max-w-[620px] text-body"
            style={{ color: colorVar('graphite') }}
          >
            {teacherApproved.body}
          </p>

          <a
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-body-sm font-semibold underline decoration-1 underline-offset-4 transition-opacity duration-150 hover:opacity-70"
            style={{ color: colorVar('verdant-green') }}
          >
            {teacherApproved.linkLabel}
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
