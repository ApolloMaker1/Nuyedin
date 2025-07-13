import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nurullah Özatak - Full Stack Developer',
  description: 'Portfolio of Nurullah Özatak showcasing projects in Flutter, Go, AI, and cybersecurity.',
  keywords: [
    'Nurullah Özatak',
    'Flutter Developer',
    'Go Developer',
    'Full Stack Developer',
    'Cybersecurity',
    'Mobile App Developer',
    'Portfolio',
    'Next.js',
    'Tailwind CSS'
  ],
  metadataBase: new URL('https://nurullahozatak.dev'), // geçici olarak localhost:3000 yazabilirsin
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Nurullah Özatak - Full Stack Developer',
    description: 'Explore my work in mobile app development, backend architecture, and AI integration.',
    url: 'https://nurullahozatak.dev',
    siteName: 'Nurullah Özatak Portfolio',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Nurullah Özatak Portfolio Icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>{children}</body>
    </html>
  );
}