import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const values = [
  { num: '01', title: '크리에이터 우선', desc: '모든 의사결정의 중심에 크리에이터가 있습니다. 크리에이터의 성장이 곧 두호의 성장입니다.' },
  { num: '02', title: '데이터 기반 전략', desc: '감이 아닌 데이터로 움직입니다. 콘텐츠 성과부터 커머스 전환율까지 수치로 검증합니다.' },
  { num: '03', title: '지속 가능한 성장', desc: '단기 수익보다 장기적 브랜드 가치를 추구합니다. 크리에이터와 함께 오래 성장합니다.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* HEADER */}
      <section className="pt-48 pb-24 max-w-[1400px] mx-auto px-8 md:px-12">
        <p className="text-[10px] font-bold tracking-[0.4em] text-white/25 mb-8 uppercase">About Dooho</p>
        <h1 className="text-[64px] md:text-[100px] font-black leading-[0.88] tracking-[-0.04em] mb-12">
          우리는<br />
          <span className="text-white/20">크리에이터와</span><br />
          함께합니다.
        </h1>
        <div className="max-w-xl">
          <p className="text-white/45 text-lg leading-relaxed">
            두호는 크리에이터와 브랜드를 연결하는 MCN 에이전시입니다.
            크리에이터의 성장을 지원하고, 브랜드의 콘텐츠 마케팅을 극대화하는 것이 우리의 미션입니다.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="border-t border-white/[0.06]" />

      {/* VISION */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-12 py-28">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[10px] font-bold tracking-[0.4em] text-white/25 mb-6">OUR VISION</p>
            <blockquote className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.02em]">
              "크리에이터 경제의<br />새로운 기준을 만든다."
            </blockquote>
          </div>
          <div className="flex flex-col gap-8">
            <div className="border-l border-white/10 pl-7">
              <p className="text-[10px] font-bold tracking-[0.3em] text-white/25 mb-2">FOUNDED</p>
              <p className="text-white font-bold">2020</p>
            </div>
            <div className="border-l border-white/10 pl-7">
              <p className="text-[10px] font-bold tracking-[0.3em] text-white/25 mb-2">CREATORS</p>
              <p className="text-white font-bold">200+ 크리에이터</p>
            </div>
            <div className="border-l border-white/10 pl-7">
              <p className="text-[10px] font-bold tracking-[0.3em] text-white/25 mb-2">HEADQUARTERS</p>
              <p className="text-white font-bold">Seoul, Korea</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-white/[0.06] bg-[#0d0d0d] py-28">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <p className="text-[10px] font-bold tracking-[0.4em] text-white/25 mb-16">OUR VALUES</p>
          <div className="divide-y divide-white/[0.06]">
            {values.map(v => (
              <div key={v.num} className="py-10 flex flex-col md:flex-row gap-6 md:gap-0">
                <div className="md:w-20 shrink-0">
                  <span className="text-[11px] font-bold tracking-[0.3em] text-white/20">{v.num}</span>
                </div>
                <div className="md:w-64 shrink-0">
                  <h3 className="text-xl font-black tracking-tight">{v.title}</h3>
                </div>
                <div className="flex-1">
                  <p className="text-white/40 text-sm leading-relaxed max-w-md">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-12 py-28 flex flex-col md:flex-row items-center justify-between gap-10 border-t border-white/[0.06]">
        <div>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] mb-3">함께할 준비가 됐나요?</h2>
          <p className="text-white/40 text-sm">두호의 크리에이터로 지원하세요.</p>
        </div>
        <Link href="/apply"
          className="shrink-0 flex items-center gap-3 px-8 py-4 bg-white text-black text-[11px] font-black tracking-[0.2em] hover:bg-white/88 transition-colors">
          지원하기 <ArrowRight size={14} />
        </Link>
      </section>
    </main>
  );
}
