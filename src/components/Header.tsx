import type { TourData } from '@/lib/types';
import { TourTabs } from '@/components/TourTabs';
import { Logo } from './icons/Logo';
import { Bus, Ship } from 'lucide-react';

type HeaderProps = {
  activeTour: string;
  onTabChange: (tourKey: string) => void;
  tours: { key: string, name: string }[];
};

export function Header({ activeTour, onTabChange, tours }: HeaderProps) {
  return (
    <header className="bg-header-background sticky top-0 z-40 w-full shadow-none">
      <div className="container flex h-20 items-end justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center pb-2">
          <Logo className="h-8 w-8 text-logo-color md:h-12 md:w-12" />
        </div>
        <nav>
          <TourTabs
            activeTour={activeTour}
            onTabChange={onTabChange}
            tours={tours.map(tour => ({
              ...tour,
              icon: tour.key === 'lanyu' ? Ship : Bus,
            }))}
          />
        </nav>
      </div>
    </header>
  );
}
