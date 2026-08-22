import { colorVar } from '../../lib/palette';
import { cn } from '../../lib/cn';

/**
 * Kart yüzeyi: 26px yarıçap, 32px iç boşluk, Paper White veya Fog zemin.
 * Gölge YOK — derinlik yalnızca renk kontrastı ve yarıçapla kurulur.
 */
export default function Card({
  surface = 'fog',
  children,
  className,
  ...rest
}) {
  return (
    <div
      className={cn('rounded-3xl p-8', className)}
      style={{ backgroundColor: colorVar(surface, 'fog') }}
      {...rest}
    >
      {children}
    </div>
  );
}
