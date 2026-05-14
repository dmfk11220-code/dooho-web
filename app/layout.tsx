import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'DOOHO — MCN & SHOP',
  description: '두호 공식 사이트 — 크리에이터 에이전시 & 쇼핑몰',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
