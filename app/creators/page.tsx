import Link from 'next/link';
import { ArrowLeft, Star } from 'lucide-react';

const creators = [
  { name: '김민지', handle: '@minji_fit', category: '스포츠', followers: '18.2만', desc: '홈트레이닝 & 스포츠웨어 전문 크리에이터', emoji: '🏋️' },
  { name: '박서연', handle: '@seo_beauty', category: '뷰티', followers: '54.3만', desc: '비건 뷰티 & 스킨케어 루틴 전문', emoji: '💅' },
  { name: '이지호', handle: '@jiho_eats', category: '푸드', followers: '9.7만', desc: '맛집 탐방 & 간편 요리 레시피', emoji: '🍜' },
  { name: '최아름', handle: '@arum_style', category: '패션', followers: '23.1만', desc: '데일리룩 & 시즌 코디 전문', emoji: '👗' },
  { name: '한도윤', handle: '@doyoon_life', category: '생활', followers: '4.5만', desc: '인테리어 & 살림 노하우', emoji: '🏠' },
  { name: '정현우', handle: '@hyunwoo_fit', category: '스포츠', followers: '11.2만', desc: '헬스 & 보디빌딩 전문 트레이너', emoji: '💪' },
];

export default function CreatorsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <Link href="/" className="flex items-center gap-2 text-white/30 hover:text-white text-xs tracking-widest mb-8 transition-colors">
            <ArrowLeft size={14} /> BACK
          </Link>
          <p className="text-[11px] tracking-[0.3em] text-white/30 font-semibold mb-3">— CREATORS</p>
          <h1 className="text-5xl font-black tracking-tight">OUR CREATORS</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {creators.map(c => (
            <div key={c.name} className="group bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-8 cursor-pointer">
              <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {c.emoji}
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-lg font-black text-white">{c.name}</p>
                  <p className="text-sm text-white/30">{c.handle}</p>
                </div>
                <span className="text-[10px] tracking-wider text-white/40 bg-white/5 px-2 py-1 whitespace-nowrap">{c.category}</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-4">{c.desc}</p>
              <div className="flex items-center gap-1 text-white/30 text-xs">
                <Star size={11} /> {c.followers} 팔로워
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
