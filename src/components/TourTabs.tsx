"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type TourTabsProps = {
  activeTour: string;
  onTabChange: (tourKey: string) => void;
  tours: { key: string; name: string; icon?: LucideIcon }[];
};

export function TourTabs({ activeTour, onTabChange, tours }: TourTabsProps) {
  const [hoveredTour, setHoveredTour] = useState<string | null>(null);

  return (
    <Tabs value={activeTour} onValueChange={onTabChange} className="w-full">
      <TabsList className="bg-transparent p-0 h-auto">
        {tours.map((tour) => {
          const Icon = tour.icon;
          const isSelected = activeTour === tour.key;
          const isHovered = hoveredTour === tour.key;

          return (
            <TabsTrigger
              key={tour.key}
              value={tour.key}
              onMouseEnter={() => setHoveredTour(tour.key)}
              onMouseLeave={() => setHoveredTour(null)}
              className={cn(
                // --- 您可以在這裡修改分頁的通用樣式 ---
                "relative rounded-none border-transparent pb-3 pt-2 pl-6 text-sm md:text-lg font-semibold transition-none",
                "data-[state=inactive]:bg-transparent data-[state=inactive]:text-tab-unselected-text",
                "data-[state=inactive]:hover:bg-tab-hover-background/20", // <-- 未選中時的 hover 效果
                // 被選中時的顏色
                "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                // --- 修改「被選中」或「Hover」時的樣式 ---
                (isSelected || isHovered) && [
                  "text-primary-foreground",
                  "shadow-none",
                  "rounded-tl-[9rem]",
                  "rounded-tr-[1rem]",
                  "border-0",
                  "pb-3",
                  "pt-2",
                  "pl-6",
                ],

                // --- 未選中且未 Hover 時的 hover 效果 (淡入) ---
                !isSelected && !isHovered && "hover:bg-primary/20",

                // --- Hover 時的顏色 ---
                isHovered && "bg-primary text-primary-foreground"
              )}
              style={{
                // --- 修改「被選中」或「Hover」分頁的「斜角」樣式 ---
                clipPath:
                  isSelected || isHovered
                    ? "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" // <-- 修改 polygon 的值來改變斜角
                    : "none",
              }}
            >
              {Icon && <Icon className="mr-2 h-6 w-6 md:h-12 md:w-12" />}
              {tour.name}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
