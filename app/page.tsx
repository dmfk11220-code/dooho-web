import Link from 'next/link';
import { ArrowRight, Play, Star } from 'lucide-react';

const products = [
  { id: 1, name: '에어핏 레깅스', brand: '젝시믹스', price: 53100, tag: 'BEST', emoji: '🩱' },
  { id: 2, name: '무결점 쿠션', brand: '어뮤즈', price: 38000, tag: 'NEW', emoji: '💄' },
  { id: 3, name: '린넨 와이드 팬츠', brand: 'MANGO', price: 71200, tag: 'SALE', emoji: '👖' },
  { id: 4, name: '유기농 그래놀라', brand: '마켓컬리', price: 14155, tag: '', emoji: '🥣' },
];

const creators = [
  { name: '김민지', handle: '@minji_fit', category: '스포츠', followers: '18.2만', emoji: '🏋️' },
  { name: '박서연', handle: '@seo_beauty', category: '뷰티', followers: '54.3만', emoji: '💅' },
  { name: '이지호', handle: '@jiho_eats', category: '푸드', followers: '9.7만', emoji: '🍜' },
  { name: '최아름', handle: '@arum_style', category: '패션', followers: '23.1만', emoji: '👗' },
];

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.4em] text-white/40 mb-8 uppercase">MCN × SHOP × CREATOR</p>
          <h1 className="text-[60px] md:text-[100px] font-black leading-none tracking-tighter mb-8">
            <span className="block text-white">DOOHO</span>
            <span className="block text-white/20">CORP.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            크리에이터와 브랜드를 연결하는 MCN 에이전시.<br />
            쇼핑, 콜라보, 라이브 커머스를 한 곳에서.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/shop"
              className="flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-bold tracking-widest hover:bg-white/90 transition-colors">
              SHOP NOW <ArrowRight size={16} />
            </Link>
            <Link href="/creators"
              className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-bold tracking-widest hover:border-white/60 transition-colors">
              CREATORS <Play size={14} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30 animate-pulse" />
          <p className="text-[10px] tracking-[0.3em] text-white/30">SCROLL</p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '200+', label: 'CREATORS' },
            { num: '50+', label: 'BRANDS' },
            { num: '1M+', label: 'FOLLOWERS' },
            { num: '5년+', label: 'EXPERIENCE' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-black text-white mb-2">{s.num}</p>
              <p className="text-[11px] tracking-widest text-white/30 font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SHOP ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-white/30 font-semibold mb-3">— SHOP</p>
            <h2 className="text-4xl font-black tracking-tight">POPULAR<br />ITEMS</h2>
          </div>
          <Link href="/shop" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors tracking-widest">
            ALL ITEMS <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map(p => (
            <Link href="/shop" key={p.id}
              className="group bg-zinc-900 border border-white/5 hover:border-white/20 transition-all overflow-hidden">
              <div className="aspect-square bg-zinc-800 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {p.emoji}
              </div>
              <div className="p-4">
                {p.tag && <span className="text-[10px] font-bold tracking-widest text-white/40 bg-white/5 px-2 py-0.5 mb-2 inline-block">{p.tag}</span>}
                <p className="text-sm font-semibold text-white mb-1">{p.name}</p>
                <p className="text-xs text-white/30 mb-2">{p.brand}</p>
                <p className="text-sm font-bold">₩{p.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CREATORS ── */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[11px] tracking-[0.3em] text-white/30 font-semibold mb-3">— CREATORS</p>
              <h2 className="text-4xl font-black tracking-tight">OUR<br />CREATORS</h2>
            </div>
            <Link href="/creators" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors tracking-widest">
              ALL <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {creators.map(c => (
              <div key={c.name} className="group bg-black border border-white/5 hover:border-white/20 transition-all p-6 cursor-pointer">
                <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-105 transition-transform">
                  {c.emoji}
                </div>
                <p className="font-bold text-white mb-0.5">{c.name}</p>
                <p className="text-xs text-white/30 mb-3">{c.handle}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-wider text-white/40 bg-white/5 px-2 py-0.5">{c.category}</span>
                  <span className="text-xs text-white/50 flex items-center gap-1"><Star size={10} />{c.followers}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 협업 CTA ── */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] tracking-[0.4em] text-black/30 font-bold mb-6">COLLABORATION</p>
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-6">
            함께 성장할<br />크리에이터를<br />찾습니다.
          </h2>
          <p className="text-black/50 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            두호와 함께하면 브랜드 협업, 라이브 커머스,<br />
            콘텐츠 제작을 체계적으로 지원받을 수 있어요.
          </p>
          <Link href="/apply"
            className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white text-sm font-bold tracking-widest hover:bg-zinc-800 transition-colors">
            지원하기 <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="text-xl font-black tracking-widest mb-3">DOOHO<span className="text-white/20">.</span></p>
            <p className="text-xs text-white/30 leading-relaxed">MCN 에이전시 × 쇼핑몰<br />상담 · 협업 문의: contact@dooho.kr</p>
          </div>
          <div className="flex gap-12 text-[11px] tracking-widest text-white/30">
            <div className="flex flex-col gap-3">
              <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
              <Link href="/shop" className="hover:text-white transition-colors">SHOP</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/creators" className="hover:text-white transition-colors">CREATORS</Link>
              <Link href="/apply" className="hover:text-white transition-colors">APPLY</Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/5">
          <p className="text-[10px] text-white/20 tracking-widest">© 2025 DOOHO CORP. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </main>
  );
}
