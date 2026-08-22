import { useEffect, useRef, useState } from 'react';

/**
 * Intersection Observer tabanlı reveal hook.
 *
 * Bileşen viewport'a girdiğinde `isVisible` true olur ve CSS animasyonu tetiklenir.
 * `once` true ise (varsayılan) tekrar gizlendiğinde reset yapılmaz — her eleman
 * yalnızca bir kez canlanır, böylece sayfa geri kaydırıldığında rahatsız etmez.
 *
 * prefers-reduced-motion aktifse animasyon atlanır ve eleman anında görünür olur.
 *
 * @param {{ threshold?: number, rootMargin?: string, once?: boolean }} options
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // prefers-reduced-motion: animasyonu atla
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

/**
 * Reveal CSS sınıfları.
 *
 * Tailwind sınıflarını doğrudan kullanmak yerine bu sabitler üzerinden
 * gidiyoruz çünkü animasyonun gizli/görünür durumları belirli bir sıralama
 * gerektiriyor ve bunu tek yerde toplamak bakımı kolaylaştırıyor.
 */
export const reveal = {
  /** Gizli başlangıç durumu — eleman opacity-0 ve hafif aşağıda. */
  hidden: 'opacity-0 translate-y-6',
  /** Görünür durum — eleman yerinde ve tam opaklıkta. */
  visible: 'opacity-100 translate-y-0',
  /** Geçiş süresi ve easing. */
  transition: 'transition-all duration-700 ease-out',
};
