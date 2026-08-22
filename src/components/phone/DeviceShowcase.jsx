import DeviceFrame from './DeviceFrame';
import { heroOrder } from '../../lib/screenshots';
import { cn } from '../../lib/cn';

/**
 * Hero yelpazesi: 3 yatay cihaz hafif üst üste binmiş ve hafifçe döndürülmüş,
 * beyaz sayfa üzerinde doğrudan yüzer.
 *
 * Ölçüler kapsayıcının YÜZDESİ olarak verilir; böylece 1024px ile 1200px arası
 * dar masaüstlerinde de yelpaze taşmaz. Toplam: 42 + 30 + 30 - 5 - 5 = %92;
 * kalan pay dönüş ve kaydırmanın yarattığı taşma için bırakılmıştır.
 *
 * Küçük ekranda yalnızca ortadaki cihaz gösterilir — üç yatay cihaz telefonda
 * okunmaz hale gelir.
 */
export default function DeviceShowcase({ order = heroOrder, className }) {
  const middle = Math.floor(order.length / 2);

  return (
    <div className={cn('flex items-center justify-center', className)}>
      {order.map((key, i) => {
        const offset = i - middle;
        const isCenter = offset === 0;

        return (
          <div
            key={key}
            className={cn(
              'min-w-0',
              isCenter
                ? 'w-full lg:w-[42%]'
                : 'hidden lg:block lg:w-[30%] lg:-mx-[5%]',
            )}
            style={{
              transform: `rotate(${offset * 5}deg) translate(${offset * 6}%, ${Math.abs(offset) * 24}px)`,
              zIndex: isCenter ? 10 : 10 - Math.abs(offset),
            }}
          >
            <DeviceFrame
              screen={key}
              sizes={
                isCenter
                  ? '(min-width: 1240px) 504px, (min-width: 1024px) 42vw, 92vw'
                  : '(min-width: 1240px) 360px, 30vw'
              }
              priority={isCenter}
            />
          </div>
        );
      })}
    </div>
  );
}
