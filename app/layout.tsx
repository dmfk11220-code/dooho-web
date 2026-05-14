import type { Metadata } from 'next';
import './globals.css';
import Nav from './Nav';

export const metadata: Metadata = {
  title: 'DOOHO — MCN Agency',
  description: '크리에이터 경제의 새로운 기준. 두호 MCN 에이전시.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-[#0a0a0a] text-white antialiased overflow-x-hidden">
        <Nav />
        {children}
      </body>
    </html>
  );
}
