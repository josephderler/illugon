import { useReveal, reveal } from '../../lib/useReveal';
import { cn } from '../../lib/cn';

/**
 * Sarmalayıcı bileşen: içindeki her şey viewport'a girdiğinde aşağıdan yukarı
 * fade-in yapar.
 *
 * `delay` prop'u ile ardışık elemanlar arasında kaskad efekti kurulabilir.
 * prefers-reduced-motion aktifse animasyon atlanır.
 *
 * @param {{ delay?: number, className?: string, children: React.ReactNode }} props
 */
export default function Reveal({ delay = 0, className, children }) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={cn(
        reveal.transition,
        isVisible ? reveal.visible : reveal.hidden,
        className,
      )}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
