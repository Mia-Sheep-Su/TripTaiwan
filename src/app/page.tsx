
import { ClientPage } from "./client-page";
import taipeiData from '@/data/taipei.json';
import lanyuData from '@/data/lanyu.json';
import { type TourData } from "@/lib/types";

export default function Home() {
  const allTours: { [key: string]: TourData } = {
    taipei: taipeiData as TourData,
    lanyu: lanyuData as TourData,
  };

  return <ClientPage allTours={allTours} />;
}
