import Image from "next/image";
import { DaisyIcon } from "./Daisy";
import { shapeStyle, type Shape } from "./Shapes";

type PhotoProps = {
  src: string | null;
  alt: string;
  sizes: string;
  shape: Shape;
  priority?: boolean;
  /** Сыртқы орам: өлшем, позиция, aspect */
  className?: string;
  imageClassName?: string;
};

/**
 * Пішінделген фото. Көлеңке сыртқы орамдағы drop-shadow арқылы беріледі,
 * сондықтан clip-path пішіндерінде де жұмсақ көлеңке сақталады.
 * Сурет әлі қосылмаса — ромашкалы нәзік фон.
 */
export function Photo({ src, alt, sizes, shape, priority, className = "", imageClassName = "" }: PhotoProps) {
  return (
    <div className={`relative drop-shadow-[0_18px_28px_rgba(91,60,170,0.22)] ${className}`}>
      <div className="absolute inset-0 overflow-hidden bg-lavender" style={shapeStyle(shape)}>
        {src ? (
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${imageClassName}`} />
        ) : (
          <div
            role="img"
            aria-label={alt}
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,#fff_0%,#f6f2ff_35%,#e4d9fd_100%)]"
          >
            <DaisyIcon className="absolute left-1/2 top-1/2 h-2/5 w-2/5 -translate-x-1/2 -translate-y-1/2 daisy-spin opacity-90" />
            <DaisyIcon className="absolute left-[16%] top-[18%] h-1/6 w-1/6 daisy-sway opacity-80" />
            <DaisyIcon className="absolute bottom-[16%] right-[16%] h-1/5 w-1/5 daisy-float opacity-80" />
          </div>
        )}
      </div>
    </div>
  );
}
