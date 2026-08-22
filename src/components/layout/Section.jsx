import { colorVar } from '../../lib/palette';
import { cn } from '../../lib/cn';

/**
 * Bölüm sarmalayıcı: tek kolon, ortalanmış, 1200px maksimum genişlik.
 * Dikey ritim 96px (py-24) — telefon mockup'larının nefes alması için
 * cömert bırakılır.
 */
export default function Section({
  id,
  surface,
  children,
  className,
  innerClassName,
  ...rest
}) {
  return (
    <section
      id={id}
      className={cn('px-6 py-16 sm:px-8 lg:py-24', className)}
      style={surface ? { backgroundColor: colorVar(surface) } : undefined}
      {...rest}
    >
      <div className={cn('mx-auto w-full max-w-page', innerClassName)}>
        {children}
      </div>
    </section>
  );
}
