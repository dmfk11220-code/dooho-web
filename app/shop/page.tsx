import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const products = [
  { id: 1, name: '에어핏 레깅스 블랙', brand: '젝시믹스', price: 53100, category: '스포츠', tag: 'BEST', emoji: '🩱' },
  { id: 2, name: '무결점 쿠션 SPF50+', brand: '어뮤즈', price: 38000, category: '뷰티', tag: 'NEW', emoji: '💄' },
  { id: 3, name: '린넨 와이드 팬츠', brand: 'MANGO', price: 71200, category: '패션', tag: 'SALE', emoji: '👖' },
  { id: 4, name: '유기농 그래놀라 500g', brand: '마켓컬리', price: 14155, category: '식품', tag: '', emoji: '🥣' },
  { id: 5, name: '모던 수납 선반 3단', brand: '한샘', price: 109650, category: '생활', tag: '', emoji: '🪵' },
  { id: 6, name: '비건 립밤 라즈베리', brand: '어뮤즈', price: 12000, category: '뷰티', tag: '', emoji: '💋' },
  { id: 7, name: '쿨링 스포츠 탑', brand: '젝시믹스', price: 42000, category: '스포츠', tag: '', emoji: '👕' },
  { id: 8, name: '오트밀 프로틴바', brand: '마켓컬리', price: 8900, category: '식품', tag: 'NEW', emoji: '🍫' },
];

const cats = ['ALL', '뷰티', '패션', '식품', '생활', '스포츠'];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <Link href="/" className="flex items-center gap-2 text-white/30 hover:text-white text-xs tracking-widest mb-8 transition-colors">
            <ArrowLeft size={14} /> BACK
          </Link>
          <p className="text-[11px] tracking-[0.3em] text-white/30 font-semibold mb-3">— SHOP</p>
          <h1 className="text-5xl font-black tracking-tight">ALL ITEMS</h1>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {cats.map(c => (
            <button key={c}
              className={`px-4 py-2 text-[11px] font-bold tracking-widest border transition-colors ${c === 'ALL' ? 'bg-white text-black border-white' : 'border-white/10 text-white/40 hover:border-white/40 hover:text-white'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map(p => (
            <div key={p.id} className="group bg-zinc-900 border border-white/5 hover:border-white/20 transition-all overflow-hidden cursor-pointer">
              <div className="aspect-square bg-zinc-800 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {p.emoji}
              </div>
              <div className="p-4">
                {p.tag && <span className="text-[10px] font-bold tracking-widest text-white/40 bg-white/5 px-2 py-0.5 mb-2 inline-block">{p.tag}</span>}
                <p className="text-sm font-semibold text-white mb-1">{p.name}</p>
                <p className="text-xs text-white/30 mb-2">{p.brand}</p>
                <p className="text-sm font-bold">₩{p.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
