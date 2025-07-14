import Image from "next/image";
import type { POI } from "@/lib/types";
import { TaipeiPinIcon } from "./icons/TaipeiPinIcon";
import { LanyuPinIcon } from "./icons/LanyuPinIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { CarouselApi } from "@/components/ui/carousel";

type InteractiveMapProps = {
  mapImage: string;
  mapImageHint: string;
  pois: POI[];
  theme: string;
  carouselRefs: React.MutableRefObject<CarouselApi[]>;
};

export function InteractiveMap({ mapImage, mapImageHint, pois, theme, carouselRefs }: InteractiveMapProps) {
  const PinIcon = theme === 'taipei' ? TaipeiPinIcon : LanyuPinIcon;

  return (
    <div id="map-section" className="container my-8">
      <h2 className="text-3xl font-bold text-center mb-6 font-headline">Points of Interest</h2>
      <div className="relative w-full aspect-[4/3] md:aspect-[5/3] overflow-visible bg-transparent">
        <Image
          src={mapImage}
          alt="Map of the tour area"
          fill
          className="object-contain"
          style={{ backgroundColor: "transparent" }}
          data-ai-hint={mapImageHint}
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        <TooltipProvider>
          {pois.map((poi) => (
            <Tooltip key={poi.name}>
              <TooltipTrigger asChild>
                <a
                  onClick={() => {
                    const dayIndex = poi.linkToDay - 1;
                    const targetImageIndex = poi.targetImageIndex ?? 0;

                    const target = document.getElementById(`day-${poi.linkToDay}`);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }

                    // 切換到該行程卡片的第 targetImageIndex 張圖
                    carouselRefs.current[dayIndex]?.scrollTo(targetImageIndex);
                  }}
                  className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer"
                  style={{ top: poi.position.top, left: poi.position.left }}
                  aria-label={`Go to itinerary for ${poi.name}`}
                >
                  <PinIcon className="w-8 h-8 md:w-10 md:h-10 drop-shadow-md transition-transform hover:scale-110" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{poi.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
}
