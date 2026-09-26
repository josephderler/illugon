import { screenshotSources, SCREEN_IDS, ASPECT } from '../../lib/screenshots';
import { useT } from '../../i18n';
import { colorVar } from '../../lib/palette';
import { cn } from '../../lib/cn';

/**
 * Yatay telefon çerçevesi — sitenin görsel kahramanı.
 *
 * Uygulama landscape çalışıyor ve mağaza görüntüleri 16:9, bu yüzden çerçeve
 * de yatay. İngilizce ekran seti (526px kaynak) kullanılır.
 *
 * Genişlik AKIŞKAN: bileşen daima kapsayıcısını doldurur. Bezel kalınlığı yüzde
 * olarak verildiği için küçük ekranda kendiliğinden incelir ve taşma oluşmaz.
 * Mockup beyaz sayfanın üzerinde doğrudan yüzer: arkasında kart yok, gölge yok.
 */
export default function DeviceFrame({
  screen,
  sizes = '100vw',
  priority = false,
  className,
  style,
}) {
  const t = useT();
  if (!SCREEN_IDS.includes(screen)) return null;

  const shot = t.screenshots[screen];
  const { srcSet, src, width, height } = screenshotSources(screen);

  return (
    <figure className={cn('m-0 w-full min-w-0 transition-transform duration-300 ease-out hover:scale-[1.02]', className)} style={style}>
      <div
        className="relative rounded-[22px] p-[2.2%] sm:rounded-[34px]"
        style={{ backgroundColor: colorVar('graphite') }}
      >
        <div
          className="relative overflow-hidden rounded-[16px] sm:rounded-[26px]"
          style={{ aspectRatio: String(ASPECT) }}
        >
          <img
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            width={width}
            height={height}
            alt={shot.alt}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
            draggable="false"
            className="block h-full w-full object-cover"
          />
        </div>

        {/* Yatay kullanımda dynamic island sol kenarda dikey bir pil olur. */}
        <span
          className="absolute top-1/2 left-[1.1%] h-[24%] w-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ backgroundColor: colorVar('charcoal') }}
          aria-hidden="true"
        />
      </div>
    </figure>
  );
}
