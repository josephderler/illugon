import { useState } from 'react';
import { useT } from '../../i18n';
import { colorVar } from '../../lib/palette';
import Section from '../layout/Section';
import TwoToneHeadline from '../ui/TwoToneHeadline';
import Reveal from '../ui/Reveal';
import { cn } from '../../lib/cn';

/**
 * FAQ / "Why ILLOGAN?" bölümü.
 *
 * Accordion tasarımı: soru satırına tıklanınca cevap açılır/kapanır.
 * Aynı anda yalnızca bir öğe açık olabilir (tek seçimli accordion).
 * Animasyon: yükseklik grid-rows trick'i ile geçişli, gölge yok (flat sistem).
 * Erişilebilirlik: aria-expanded, aria-controls, role="region".
 *
 * prefers-reduced-motion aktifse geçiş atlanır.
 */
export default function Faq() {
  const { faq } = useT().home;
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <Section id={faq.sectionId} surface="fog">
      <div className="mx-auto max-w-[820px]">
        <Reveal>
          <TwoToneHeadline
            accent={faq.headline.accent}
            rest={faq.headline.rest}
            accentColor="ember-orange"
            level="heading"
            align="center"
          />

          <p
            className="mt-5 text-center text-body"
            style={{ color: colorVar('graphite') }}
          >
            {faq.lead}
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {faq.items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 60}>
              <FaqItem
                question={item.q}
                answer={item.a}
                isOpen={openIdx === idx}
                onToggle={() => toggle(idx)}
                id={`faq-${idx}`}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FaqItem({ question, answer, isOpen, onToggle, id }) {
  return (
    <div
      className="overflow-hidden rounded-3xl"
      style={{ backgroundColor: colorVar('paper-white') }}
    >
      <button
        type="button"
        id={`${id}-trigger`}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className={cn(
          'flex w-full items-center justify-between gap-4 px-6 py-5 text-left',
          'text-body font-semibold transition-colors duration-150',
          'hover:opacity-80',
        )}
        style={{ color: colorVar('graphite') }}
      >
        <span>{question}</span>
        <ChevronIcon open={isOpen} />
      </button>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <p
            className="px-6 pb-5 text-body-sm leading-relaxed"
            style={{ color: colorVar('graphite') }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={cn(
        'shrink-0 transition-transform duration-300',
        open && 'rotate-180',
      )}
    >
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
