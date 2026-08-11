import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://asakusa-hanamoto.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: '浅草 花本｜初音小路の居酒屋・もつ鍋・海鮮',
  description: '浅草 花本は、東京都台東区浅草2-7-14、初音小路飲食店街の居酒屋。もつ鍋、三崎直送まぐろ、湘南しらす、営業時間、予約、浅草駅からのアクセスをご案内します。',
  alternates: { canonical: '/' },
  openGraph: {
    title: '浅草 花本｜初音小路の居酒屋・もつ鍋・海鮮',
    description: '浅草・初音小路で、もつ鍋と三崎直送まぐろ、湘南しらすを味わう居酒屋。',
    url: '/',
    siteName: '浅草 花本',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: '浅草 花本｜初音小路の居酒屋',
    description: 'もつ鍋・三崎直送まぐろ・湘南しらす、営業時間、予約、アクセスのご案内。',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
