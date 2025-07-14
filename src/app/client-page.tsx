"use client";

import { useState, useEffect, useRef } from "react";
import type { TourData } from "@/lib/types";
import { Header } from "@/components/Header";
import { KeyVisual } from "@/components/KeyVisual";
import { InteractiveMap } from "@/components/InteractiveMap";
import { DailyItineraryCard } from "@/components/DailyItineraryCard";
import { FloatingReturnButton } from "@/components/FloatingReturnButton";
import { Separator } from "@/components/ui/separator";
import type { CarouselApi } from "@/components/ui/carousel";

type ClientPageProps = {
  allTours: {
    [key: string]: TourData;
  };
};

export function ClientPage({ allTours }: ClientPageProps) {
  const [activeTourKey, setActiveTourKey] = useState<string>("taipei");
  const carouselRefs = useRef<CarouselApi[]>([]);


  useEffect(() => {
    document.documentElement.dataset.theme = allTours[activeTourKey].theme;
  }, [activeTourKey, allTours]);

  const activeTourData = allTours[activeTourKey];

  if (!activeTourData) return null; // Or a loading state

  const tourOptions = Object.keys(allTours).map(key => ({
    key,
    name: allTours[key].name,
  }));

  return (
    <div className="bg-background text-foreground transition-colors duration-500">
      <Header
        activeTour={activeTourKey}
        onTabChange={setActiveTourKey}
        tours={tourOptions}
      />
      <main>
        <KeyVisual images={activeTourData.keyVisuals} />

        <InteractiveMap
          mapImage={activeTourData.map.image}
          mapImageHint={activeTourData.map.hint}
          pois={activeTourData.pois}
          theme={activeTourData.theme}
          carouselRefs={carouselRefs}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-center mb-6 font-headline">Daily Itinerary</h2>
          <Separator className="my-4 bg-border/50" />
          {activeTourData.itinerary.map((item, index) => (
            <DailyItineraryCard key={item.day} item={item} index={index} setCarouselApi={(api) => (carouselRefs.current[index] = api)} />
          ))}
        </div>
      </main>
      <FloatingReturnButton />
    </div>
  );
}
