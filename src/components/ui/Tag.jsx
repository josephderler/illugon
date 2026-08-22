import { colorVar } from '../../lib/palette';
import { cn } from '../../lib/cn';

/**
 * Kategori etiketi: 26px yarıçap, kromatik metin + beyaz/Fog zemin.
 * Kromatik metin asla kromatik zemine oturmaz (rehber kuralı), bu yüzden
 * renk yalnızca metin ve ince kenarlıkta taşınır.
 */
export default function Tag({ color = 'sky-blue', children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-3xl px-3 py-1',
        'font-micro text-tiny font-bold',
        'transition-transform duration-200 ease-out hover:scale-105',
        className,
      )}
      style={{
        color: colorVar(color),
        backgroundColor: colorVar('paper-white'),
        border: `1px solid ${colorVar(color)}`,
      }}
    >
      {children}
    </span>
  );
}
