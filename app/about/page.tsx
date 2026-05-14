import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <Link href="/" className="flex items-center gap-2 text-white/30 hover:text-white text-xs tracking-widest mb-8 transition-colors">
            <ArrowLeft size={14} /> BACK
          </Link>
          <p className="text-[11px] tracking-[0.3em] text-white/30 font-semibold mb-3">— ABOUT</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            WE ARE<br /><span className="text-white/20">DOOHO.</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <p className="text-white/60 text-lg leading-relaxed">
              두호는 크리에이터와 브랜드를 연결하는 MCN 에이전시입니다.<br /><br />
              크리에이터의 성장을 지원하고, 브랜드의 콘텐츠 마케팅을 극대화하는 것이 우리의 미션입니다.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { title: 'MCN 에이전시', desc: '크리에이터 발굴, 육성, 브랜드 매칭' },
              { title: '쇼핑몰', desc: '크리에이터 큐레이션 기반의 커머스 플랫폼' },
              { title: '라이브 커머스', desc: '실시간 방송 기반 상품 판매 및 협업' },
            ].map(item => (
              <div key={item.title} className="border-l-2 border-white/10 pl-5">
                <p className="font-bold text-white mb-1">{item.title}</p>
                <p className="text-sm text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 팀 비전 */}
        <div className="bg-zinc-900 border border-white/5 p-12 mb-12">
          <p className="text-[11px] tracking-widest text-white/30 mb-6">OUR VISION</p>
          <p className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
            "크리에이터 경제의<br />새로운 기준을 만든다."
          </p>
        </div>

        <Link href="/apply"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-bold tracking-widest hover:bg-white/90 transition-colors">
          함께하기 <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
