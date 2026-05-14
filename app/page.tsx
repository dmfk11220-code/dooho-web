import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const creators = [
  { name: '김민지', handle: '@minji_fit', category: 'FITNESS', followers: '182K', emoji: '🏋️' },
  { name: '박서연', handle: '@seo_beauty', category: 'BEAUTY', followers: '543K', emoji: '💅' },
  { name: '이지호', handle: '@jiho_eats', category: 'FOOD', followers: '97K', emoji: '🍜' },
  { name: '최아름', handle: '@arum_style', category: 'FASHION', followers: '231K', emoji: '👗' },
  { name: '한도윤', handle: '@doyoon_life', category: 'LIFESTYLE', followers: '45K', emoji: '🏠' },
  { name: '정현우', handle: '@hyunwoo_fit', category: 'FITNESS', followers: '112K', emoji: '💪' },
];

const businesses = [
  {
    num: '01',
    title: 'MCN 에이전시',
    en: 'CREATOR MANAGEMENT',
    desc: '크리에이터 발굴부터 브랜드 매칭, 콘텐츠 전략까지. 크리에이터의 성장 여정을 함께합니다.',
  },
  {
    num: '02',
    title: 'DH SHOP',
    en: 'COMMERCE',
    desc: '크리에이터가 직접 큐레이션한 상품들. 타임딜, 공동구매, 라이브 커머스를 한 플랫폼에서.',
  },
  {
    num: '03',
    title: '라이브 커머스',
    en: 'LIVE COMMERCE',
    desc: '실시간 방송을 통한 상품 판매 및 브랜드 협업. 크리에이터의 영향력을 매출로 전환합니다.',
  },
];

const partners = ['MANGO', 'ADER', '젝시믹스', '어뮤즈', '한샘', '마켓컬리', 'NIKE', 'AESOP'];

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.02) 0%, transparent 50%)' }} />

        {/* Center label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 select-none pointer-events-none">
          <p className="text-[11px] font-bold tracking-[0.5em] text-white/15 uppercase">MCN Agency × Commerce</p>
        </div>

        {/* Main text */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full">
          <h1 className="text-[72px] sm:text-[100px] md:text-[130px] lg:text-[160px] font-black leading-[0.88] tracking-[-0.04em] text-white mb-8">
            DOOHO<span className="text-white/15">.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-white/40 text-base md:text-lg max-w-sm leading-relaxed">
              크리에이터 경제의 새로운 기준.<br />
              브랜드와 크리에이터를 연결하는 MCN 에이전시.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/creators"
                className="flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-white/50 hover:text-white transition-colors group">
                CREATORS
                <span className="w-8 h-px bg-white/30 group-hover:bg-white group-hover:w-12 transition-all duration-300" />
              </Link>
              <Link href="/apply"
                className="flex items-center gap-2 px-7 py-3.5 bg-white text-black text-[11px] font-black tracking-[0.2em] hover:bg-white/88 transition-colors">
                협업 문의 <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 right-12 flex items-center gap-3 select-none">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20" />
          <p className="text-[10px] tracking-[0.3em] text-white/20 rotate-90 origin-center translate-y-2">SCROLL</p>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="border-y border-white/[0.06] bg-[#0f0f0f] overflow-hidden py-4">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {Array(3).fill(['MCN 에이전시', 'DH SHOP', 'LIVE COMMERCE', 'CREATOR MANAGEMENT', 'BRAND COLLABORATION', 'CONTENT STRATEGY']).flat().map((t, i) => (
            <span key={i} className="text-[11px] font-bold tracking-[0.25em] text-white/20 uppercase">
              {t} <span className="mx-6 text-white/10">—</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── BUSINESS AREAS ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-12 py-32 md:py-40">
        <div className="flex items-end justify-between mb-20">
          <div>
            <p className="text-[10px] font-bold tracking-[0.4em] text-white/25 mb-5">WHAT WE DO</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] leading-tight">
              세 가지 방식으로<br />크리에이터와 함께합니다.
            </h2>
          </div>
          <Link href="/about" className="hidden md:flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-white/30 hover:text-white transition-colors group">
            MORE <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="divide-y divide-white/[0.06]">
          {businesses.map((b, i) => (
            <div key={b.num} className="group py-10 md:py-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-0 cursor-default hover:bg-white/[0.015] -mx-8 px-8 transition-colors duration-300">
              <div className="md:w-24 shrink-0">
                <span className="text-[11px] font-bold tracking-[0.3em] text-white/20">{b.num}</span>
              </div>
              <div className="md:w-80 shrink-0">
                <p className="text-[10px] font-bold tracking-[0.3em] text-white/30 mb-2">{b.en}</p>
                <h3 className="text-2xl font-black tracking-tight text-white">{b.title}</h3>
              </div>
              <div className="flex-1">
                <p className="text-white/40 text-sm leading-relaxed max-w-md">{b.desc}</p>
              </div>
              <div className="md:pl-8 shrink-0">
                <ArrowUpRight size={18} className="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white text-black py-24 md:py-28">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x divide-black/10">
            {[
              { num: '200+', label: 'Creators' },
              { num: '50+', label: 'Partner Brands' },
              { num: '1M+', label: 'Total Followers' },
              { num: '5년+', label: 'Experience' },
            ].map(s => (
              <div key={s.label} className="md:px-12 first:pl-0 last:pr-0">
                <p className="text-5xl md:text-6xl font-black tracking-tight text-black mb-2">{s.num}</p>
                <p className="text-[11px] font-bold tracking-[0.2em] text-black/40 uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREATORS ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-12 py-32 md:py-40">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[10px] font-bold tracking-[0.4em] text-white/25 mb-5">OUR CREATORS</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em]">크리에이터</h2>
          </div>
          <Link href="/creators" className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-white/30 hover:text-white transition-colors group">
            전체 보기 <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {creators.map(c => (
            <div key={c.name} className="group bg-[#111111] border border-white/[0.05] hover:border-white/15 transition-all duration-300 p-6 cursor-pointer">
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-2xl mb-5 group-hover:scale-105 transition-transform duration-300">
                {c.emoji}
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/25 mb-2">{c.category}</p>
              <p className="font-bold text-white text-sm mb-0.5">{c.name}</p>
              <p className="text-xs text-white/30 mb-3">{c.handle}</p>
              <p className="text-xs font-bold text-white/50">{c.followers}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="border-y border-white/[0.06] bg-[#0d0d0d] py-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 mb-10">
          <p className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">Partner Brands</p>
        </div>
        <div className="flex gap-12 animate-marquee-slow whitespace-nowrap">
          {Array(3).fill(partners).flat().map((p, i) => (
            <span key={i} className="text-[13px] font-black tracking-[0.15em] text-white/20 hover:text-white/50 transition-colors cursor-default uppercase">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-12 py-32 md:py-48">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold tracking-[0.4em] text-white/25 mb-8">COLLABORATION</p>
          <h2 className="text-5xl md:text-7xl lg:text-[90px] font-black leading-[0.9] tracking-[-0.04em] mb-10">
            함께 성장할<br />
            <span className="text-white/20">크리에이터를</span><br />
            찾습니다.
          </h2>
          <p className="text-white/40 text-base md:text-lg leading-relaxed mb-12 max-w-lg">
            두호와 함께하면 브랜드 협업, 라이브 커머스,<br />
            콘텐츠 제작을 체계적으로 지원받을 수 있습니다.
          </p>
          <Link href="/apply"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black text-[12px] font-black tracking-[0.2em] hover:bg-white/88 transition-colors">
            지원하기 <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] py-16">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="text-[15px] font-black tracking-[0.25em] text-white mb-4">DOOHO</p>
            <p className="text-xs text-white/25 leading-relaxed">
              MCN 에이전시 × DH SHOP<br />
              contact@dooho.kr
            </p>
          </div>
          <div className="flex gap-16 text-[11px] font-bold tracking-[0.2em] text-white/25">
            <div className="flex flex-col gap-4">
              <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
              <Link href="/creators" className="hover:text-white transition-colors">CREATORS</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/apply" className="hover:text-white transition-colors">CONTACT</Link>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">INSTAGRAM</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 mt-12 pt-6 border-t border-white/[0.04]">
          <p className="text-[10px] text-white/15 tracking-[0.2em]">© 2025 DOOHO CORP. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  );
}
