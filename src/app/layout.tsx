import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
const siteUrl = "https://mia-sheep-su.github.io/PromotionsSales/";

export const metadata: Metadata = {
  title: 'Tour Guide Taiwan',
  description: 'Discover Taiwan’s hidden gems with expert Taipei city tours and scenic Lanyu adventures. Plan your trip today with Tour Guide Taiwan.',
  icons: {
    icon: '/Logo.svg',
    shortcut: '/Logo.svg',
    apple: '/Logo.svg',
  },
  openGraph: {
    title: 'Tour Guide Taiwan',
    description: 'Discover the best of Taiwan with cultural Taipei city tours and breathtaking island adventures in Lanyu. Plan your perfect trip today.',
    url: siteUrl,
    siteName: 'TaiwanTrips',
    images: [
      {
        url: `${siteUrl}og-image.png`, // The image should be placed in the `public` folder
        width: 1200,
        height: 630,
        alt: 'Taiwan travel, Taipei tour, Lanyu tour',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tour Guide Taiwan',
    description: 'Discover the best of Taiwan with cultural Taipei city tours and breathtaking island adventures in Lanyu. Plan your perfect trip today.',
    images: [`${siteUrl}og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
