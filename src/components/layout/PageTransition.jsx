import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '../../lib/cn';

/**
 * Sayfa geçişlerinde fade animasyonu.
 *
 * Yeni rota aktif olduğunda eski içerik hızlıca fade-out (150ms), sonra yeni
 * içerik fade-in (250ms). Animasyon yalnızca pathname değiştiğinde tetiklenir —
 * hash-only navigasyonlarda (bölüme scroll) tetiklenmez.
 *
 * prefers-reduced-motion aktifse geçiş atlanır, anlık değişir.
 *
 * Bileşen `children` olarak Routes/Outlet alır ve kendi içinde render eder.
 */
export default function PageTransition({ children }) {
  const { pathname } = useLocation();
  const [displayPath, setDisplayPath] = useState(pathname);
  const [phase, setPhase] = useState('visible'); // 'visible' | 'exiting' | 'entering'
  const prevPath = useRef(pathname);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
  }, []);

  useEffect(() => {
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;

    if (reducedMotion.current) {
      setDisplayPath(pathname);
      return;
    }

    // Exit: mevcut içerik solmaya başlar
    setPhase('exiting');

    const exitTimer = setTimeout(() => {
      // Yeni içeriğe geç
      setDisplayPath(pathname);
      setPhase('entering');

      const enterTimer = setTimeout(() => {
        setPhase('visible');
      }, 250);

      return () => clearTimeout(enterTimer);
    }, 150);

    return () => clearTimeout(exitTimer);
  }, [pathname]);

  return (
    <div
      className={cn(
        'min-h-[50vh]',
        phase === 'visible' && 'opacity-100 transition-none',
        phase === 'exiting' && 'opacity-0 transition-opacity duration-150 ease-in',
        phase === 'entering' && 'opacity-0 animate-fade-in',
      )}
      key={displayPath}
    >
      {children}
    </div>
  );
}
