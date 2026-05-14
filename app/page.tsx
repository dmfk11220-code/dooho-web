import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Timer, Flame } from 'lucide-react';

const creators = [
  { name: '김민지', handle: '@minji_fit', category: 'FITNESS', followers: '182K', emoji: '🏋️' },
  { name: '박서연', handle: '@seo_beauty', category: 'BEAUTY', followers: '543K', emoji: '💅' },
  { name: '이지호', handle: '@jiho_eats', category: 'FOOD', followers: '97K', emoji: '🍜' },
  { name: '최아름', handle: '@arum_style', category: 'FASHION', followers: '231K', emoji: '👗' },
  { name: '한도윤', handle: '@doyoon_life', category: 'LIFESTYLE', followers: '45K', emoji: '🏠' },
  { name: '정현우', handle: '@hyunwoo_fit', category: 'FITNESS', followers: '112K', emoji: '💪' },
];

const timeDeals = [
  { name: '에어핏 레깅스 블랙', brand: '젝시믹스', price: 53100, original: 79000, creator: '김민지', emoji: '🩱', tag: 'BEST' },
  { name: '무결점 쿠션 SPF50+', brand: '어뮤즈', price: 28000, original: 38000, creator: '박서연', emoji: '💄', tag: 'NEW' },
  { name: '린넨 와이드 팬츠', brand: 'MANGO', price: 49900, original: 71200, creator: '최아름', emoji: '👖', tag: 'SALE' },
  { name: '오트밀 프로틴바 10입', brand: '마켓컬리', price: 8900, original: 12000, creator: '이지호', emoji: '🍫', tag: '' },
];

const businesses = [
  { num: '01', title: 'MCN 에이전시', en: 'CREATOR MANAGEMENT', desc: '크리에이터 발굴부터 브랜드 매칭, 콘텐츠 전략까지 함께합니다.' },
  { num: '02', title: 'DH SHOP', en: 'COMMERCE', desc: '크리에이터가 큐레이션한 상품. 타임딜, 공동구매, 라이브 커머스.' },
  { num: '03', title: '라이브 커머스', en: 'LIVE COMMERCE', desc: '실시간 방송 기반 상품 판매 및 브랜드 협업.' },
];

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '120px 120px' }} />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

        <div className="relative z-10 max-w-[1200px] w-full">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-px bg-white/30" />
            <p className="text-[11px] font-bold tracking-[0.4em] text-white/40 uppercase">MCN Agency · Commerce · Seoul</p>
          </div>

          <h1 className="text-[80px] sm:text-[110px] md:text-[150px] font-black leading-[0.85] tracking-[-0.04em] text-white mb-10">
            DOO<br />
            <span className="text-white/15">HO.</span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
            <p className="text-white/45 text-base leading-relaxed max-w-xs">
              크리에이터와 브랜드를 연결하는 MCN 에이전시.<br />
              크리에이터가 직접 큐레이션한 DH SHOP까지.
            </p>
            <div className="flex flex-col gap-4">
              <Link href="/shop"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-[11px] font-black tracking-[0.2em] hover:bg-white/88 transition-colors w-fit">
                DH SHOP <ArrowRight size={14} />
              </Link>
              <Link href="/apply"
                className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-white/40 hover:text-white transition-colors group w-fit">
                협업 문의
                <span className="inline-block w-6 h-px bg-white/30 group-hover:w-10 group-hover:bg-white transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-8 md:left-16 lg:left-24 flex items-center gap-3">
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
          <p className="text-[10px] tracking-[0.3em] text-white/20">SCROLL</p>
        </div>
        <p className="absolute bottom-10 right-8 md:right-16 text-[11px] font-bold tracking-[0.2em] text-white/15">EST. 2020</p>
      </section>

      {/* ── INTRO BAR ── */}
      <div className="border-y border-white/[0.07] bg-[#0e0e0e]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-5 flex flex-wrap gap-x-10 gap-y-2">
          {['크리에이터 발굴 · 육성', '브랜드 협업 매칭', '라이브 커머스', 'DH SHOP', '타임딜 · 공동구매'].map((t, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && <span className="text-white/10 hidden sm:block">—</span>}
              <span className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase">{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── TIME DEAL ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame size={14} className="text-white/50" />
              <p className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">Time Deal</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em]">지금 딱 이 가격.</h2>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 px-4 py-2">
              <Timer size={12} className="text-white/50" />
              <span className="text-[12px] font-black tracking-widest text-white font-mono">23:14:52</span>
            </div>
            <Link href="/shop" className="text-[11px] font-bold tracking-[0.2em] text-white/30 hover:text-white transition-colors flex items-center gap-1">
              전체 보기 <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {timeDeals.map((p, i) => (
            <Link href="/shop" key={i} className="group bg-[#111] border border-white/[0.06] hover:border-white/20 transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="aspect-square bg-[#161616] flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-500">
                {p.emoji}
              </div>
              <div className="p-4">
                {p.tag && <span className="text-[9px] font-black tracking-[0.2em] text-white/40 bg-white/[0.05] px-2 py-0.5 mb-2.5 inline-block">{p.tag}</span>}
                <p className="text-[11px] text-white/30 mb-1">{p.brand}</p>
                <p className="text-sm font-bold text-white mb-2 leading-snug">{p.name}</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-black text-white">₩{p.price.toLocaleString()}</p>
                  <p className="text-xs text-white/25 line-through">₩{p.original.toLocaleString()}</p>
                </div>
                <p className="text-[10px] text-white/25 mt-2">{p.creator} PICK</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="border-t border-white/[0.07] bg-[#0d0d0d]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-24 md:py-32">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">
            <div className="md:sticky md:top-28">
              <p className="text-[10px] font-bold tracking-[0.4em] text-white/25 mb-5">WHAT WE DO</p>
              <h2 className="text-4xl font-black tracking-[-0.03em] leading-[1.05]">
                세 가지 방식으로<br />함께합니다.
              </h2>
            </div>
            <div className="divide-y divide-white/[0.07]">
              {businesses.map((b) => (
                <div key={b.num} className="group py-8 flex gap-8 cursor-default">
                  <span className="text-[11px] font-bold tracking-[0.3em] text-white/20 pt-1 shrink-0 w-8">{b.num}</span>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold tracking-[0.3em] text-white/30 mb-2">{b.en}</p>
                    <h3 className="text-xl font-black tracking-tight text-white mb-3">{b.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{b.desc}</p>
                  </div>
                  <ArrowUpRight size={15} className="text-white/15 group-hover:text-white/50 shrink-0 mt-1 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white text-black">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-16 grid grid-cols-2 md:grid-cols-4">
          {[
            { num: '200+', label: 'Creators' },
            { num: '50+', label: 'Partner Brands' },
            { num: '1M+', label: 'Total Followers' },
            { num: '5년+', label: 'Experience' },
          ].map((s, i) => (
            <div key={s.label} className={`py-8 md:py-0 md:px-10 ${i > 0 ? 'border-t md:border-t-0 md:border-l border-black/10' : ''} ${i === 0 ? 'md:pl-0' : ''}`}>
              <p className="text-5xl font-black tracking-tight text-black mb-2">{s.num}</p>
              <p className="text-[11px] font-bold tracking-[0.2em] text-black/40 uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CREATORS ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 py-24 md:py-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] font-bold tracking-[0.4em] text-white/25 mb-5">OUR CREATORS</p>
            <h2 className="text-4xl font-black tracking-[-0.03em]">크리에이터</h2>
          </div>
          <Link href="/creators" className="hidden sm:flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-white/30 hover:text-white transition-colors">
            전체 보기 <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {creators.map(c => (
            <div key={c.name} className="group bg-[#111] border border-white/[0.06] hover:border-white/20 transition-all duration-300 p-5 cursor-pointer">
              <div className="w-12 h-12 bg-white/[0.05] rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {c.emoji}
              </div>
              <p className="text-[9px] font-bold tracking-[0.2em] text-white/25 mb-1.5">{c.category}</p>
              <p className="font-bold text-white text-sm mb-0.5 truncate">{c.name}</p>
              <p className="text-[11px] text-white/30 mb-3 truncate">{c.handle}</p>
              <p className="text-xs font-bold text-white/50">{c.followers}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="border-t border-white/[0.07] bg-[#0d0d0d] py-12">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 mb-7">
          <p className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">Partner Brands</p>
        </div>
        <div className="flex gap-14 overflow-hidden whitespace-nowrap">
          <div className="flex gap-14 animate-marquee-slow shrink-0">
            {['MANGO', 'ADER ERROR', '젝시믹스', '어뮤즈', '한샘', '마켓컬리', 'NIKE', 'AESOP',
              'MANGO', 'ADER ERROR', '젝시믹스', '어뮤즈', '한샘', '마켓컬리', 'NIKE', 'AESOP',
              'MANGO', 'ADER ERROR', '젝시믹스', '어뮤즈'].map((p, i) => (
              <span key={i} className="text-[12px] font-black tracking-[0.15em] text-white/20 uppercase">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 py-24 md:py-36">
        <div className="border border-white/[0.07] p-10 md:p-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div>
            <p className="text-[10px] font-bold tracking-[0.4em] text-white/25 mb-8">COLLABORATION</p>
            <h2 className="text-4xl md:text-5xl font-black leading-[0.95] tracking-[-0.03em]">
              함께 성장할<br />크리에이터를<br />찾습니다.
            </h2>
          </div>
          <div className="flex flex-col gap-4 shrink-0">
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              두호와 함께하면 브랜드 협업,<br />
              라이브 커머스, 콘텐츠 제작을<br />
              체계적으로 지원받을 수 있습니다.
            </p>
            <Link href="/apply"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-[11px] font-black tracking-[0.2em] hover:bg-white/88 transition-colors w-fit mt-2">
              지원하기 <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.07] py-14">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="text-[14px] font-black tracking-[0.3em] text-white mb-4">DOOHO</p>
            <p className="text-xs text-white/25 leading-relaxed">MCN 에이전시 × DH SHOP<br />contact@dooho.kr</p>
          </div>
          <div className="flex gap-16 text-[11px] font-bold tracking-[0.2em] text-white/25">
            <div className="flex flex-col gap-4">
              <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
              <Link href="/creators" className="hover:text-white transition-colors">CREATORS</Link>
              <Link href="/shop" className="hover:text-white transition-colors">SHOP</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/apply" className="hover:text-white transition-colors">CONTACT</Link>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">INSTAGRAM</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 mt-12 pt-6 border-t border-white/[0.04]">
          <p className="text-[10px] text-white/15 tracking-[0.2em]">© 2025 DOOHO CORP. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  );
}
