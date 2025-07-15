'use client'
import { useSearchParams } from 'next/navigation'
import { ClientPage } from "./client-page";
import taipeiDataEn from '@/data/en/taipei.json';
import lanyuDataEn from '@/data/en/lanyu.json';
import taipeiDataZh from '@/data/zh/taipei.json';
import lanyuDataZh from '@/data/zh/lanyu.json';
import { type TourData } from "@/lib/types";

export default function Home() {
  const params = useSearchParams()
  const lang = params.get('lang') === 'en' ? 'en' : 'zh' // 預設中文

  const allTours: { [key: string]: TourData } = {
    taipei: lang === 'en' ? taipeiDataEn : taipeiDataZh,
    lanyu: lang === 'en' ? lanyuDataEn : lanyuDataZh,
  };

  return <ClientPage allTours={allTours} lang={lang} />
}