
"use client";

import Image from "next/image";
import * as React from "react";
import { type ItineraryItem } from "@/lib/types";
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
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";

type DailyItineraryCardProps = {
  item: ItineraryItem;
  index: number;
  setCarouselApi?: (api: CarouselApi) => void;
};

export function DailyItineraryCard({ item, index, setCarouselApi }: DailyItineraryCardProps) {
  const isEven = index % 2 === 0;

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = (api: CarouselApi) => {
      if (api) {
        setCurrent(api.selectedScrollSnap());
      }
    };

    api.on("select", onSelect);
    // Set initial state
    onSelect(api);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const textContent = (
    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
      <Badge variant="secondary" className="w-fit mb-4 text-lg">
        Day {item.day}
      </Badge>
      <h3 className="text-3xl font-bold font-headline text-primary mb-2">
        {item.title}
      </h3>
      <h4 className="text-xl font-semibold text-accent mb-6">
        {item.subtitle}
      </h4>
      <div className="hidden md:flex flex-col space-y-4">
        {item.activities.map((activity, activityIndex) => (
          <div
            key={activity.name}
            className={cn(
              "p-4 rounded-lg transition-colors duration-300",
              { "bg-[#A3BFD9] text-card-foreground": current === activityIndex }
            )}
          >
            <h5 className="font-bold text-lg">{activity.name}</h5>
            <p className="text-foreground/80 leading-relaxed mt-1">
              {activity.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const imageCarousel = (
    <div className="w-full md:w-1/2 p-4">
      <Carousel
        setApi={(api) => {
          setApi(api);
          setCarouselApi?.(api); // 通知父層儲存
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {item.activities.map((activity, imgIndex) => (
            <CarouselItem key={imgIndex}>
              <div className="md:hidden px-2 mb-2">
                <h5 className="font-bold text-lg">{activity.name}</h5>
                <p className="text-foreground/80 text-sm leading-relaxed mt-1">
                  {activity.description}
                </p>
              </div>
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="relative aspect-square md:aspect-[3/4] p-0 rounded-lg overflow-hidden">
                  <Image
                    src={activity.image.url}
                    alt={`${activity.name} image`}
                    fill
                    sizes="(max-width: 768px) 90vw, 40vw"
                    className="object-cover"
                    data-ai-hint={activity.image.hint}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2" />
        <CarouselNext className="absolute right-2" />
      </Carousel>
    </div>
  );

  return (
    <Card
      id={`day-${item.day}`}
      className="my-8 md:my-12 overflow-hidden shadow-none border-2"
    // --- 修改每日行程卡片的「邊框」樣式 (例如: border-2, border-primary) ---
    >
      <div className={cn("flex flex-col md:flex-row items-center", {
        "md:flex-row-reverse": isEven,
      })}>
        {textContent}
        {imageCarousel}
      </div>
    </Card>
  );
}
