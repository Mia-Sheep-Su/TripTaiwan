
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

type KeyVisualProps = {
  images: { url: string; hint: string; name: string }[];
};

export function KeyVisual({ images }: KeyVisualProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full relative">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-none rounded-none">
                <CardContent className="relative flex items-center justify-center p-0 min-h-[320px] md:min-h-[490px]">
                  <Image
                    src={image.url}
                    alt={`Key visual ${index + 1}`}
                    fill
                    className="object-cover object-center"
                    style={{ backgroundColor: "transparent" }}
                    data-ai-hint={image.hint}
                    sizes="(max-width: 768px) 100vw, 100vw"
                    priority={index === 0}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4" />
        <CarouselNext className="absolute right-4" />
      </Carousel>

      <div className="absolute bottom-1 md:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-sm md:max-w-4xl">
        <div className="grid grid-cols-3 gap-2 md:gap-4 text-center text-white px-4">
          {images.slice(0, 3).map((image, index) => (
            <div key={image.name} className="flex flex-col items-center justify-end">
              <h3 className="text-sm md:text-xl font-bold drop-shadow-lg">{image.name}</h3>
              <div
                className={cn(
                  "mt-2 h-1 w-20 rounded-full bg-white/30 transition-all duration-500 bottom-0",
                  { "bg-primary": current === index }
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
