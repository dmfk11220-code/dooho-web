import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const creators = [
  { name: '김민지', handle: '@minji_fit', category: 'FITNESS', followers: '182K', platform: 'Instagram', desc: '홈트레이닝 & 스포츠웨어 전문 크리에이터', emoji: '🏋️', featured: true },
  { name: '박서연', handle: '@seo_beauty', category: 'BEAUTY', followers: '543K', platform: 'Instagram', desc: '비건 뷰티 & 스킨케어 루틴 전문', emoji: '💅', featured: true },
  { name: '이지호', handle: '@jiho_eats', category: 'FOOD', followers: '97K', platform: 'YouTube', desc: '맛집 탐방 & 간편 요리 레시피', emoji: '🍜', featured: false },
  { name: '최아름', handle: '@arum_style', category: 'FASHION', followers: '231K', platform: 'Instagram', desc: '데일리룩 & 시즌 코디 전문', emoji: '👗', featured: true },
  { name: '한도윤', handle: '@doyoon_life', category: 'LIFESTYLE', followers: '45K', platform: 'YouTube', desc: '인테리어 & 살림 노하우', emoji: '🏠', featured: false },
  { name: '정현우', handle: '@hyunwoo_fit', category: 'FITNESS', followers: '112K', platform: 'Instagram', desc: '헬스 & 보디빌딩 전문 트레이너', emoji: '💪', featured: false },
];

const cats = ['ALL', 'BEAUTY', 'FASHION', 'FITNESS', 'FOOD', 'LIFESTYLE'];

export default function CreatorsPage() {
  return (
    <main className="min-h-screen">
      {/* HEADER */}
      <section className="pt-40 pb-20 max-w-[1400px] mx-auto px-8 md:px-12">
        <p className="text-[10px] font-bold tracking-[0.4em] text-white/25 mb-6">OUR CREATORS</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.9]">
            크리에이터
          </h1>
          <p className="text-white/35 text-sm leading-relaxed max-w-xs">
            두호 소속 크리에이터들. 각 분야의 전문성과 진정성으로 팬들과 소통합니다.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {creators.map(c => (
            <div key={c.name} className="group bg-[#111111] border border-white/[0.05] hover:border-white/15 transition-all duration-300 p-8 cursor-pointer">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-3xl group-hover:scale-105 transition-transform duration-300">
                  {c.emoji}
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/25 bg-white/[0.04] px-3 py-1.5">{c.category}</span>
              </div>
              <p className="text-lg font-black text-white mb-1 tracking-tight">{c.name}</p>
              <p className="text-xs text-white/30 mb-4">{c.handle} · {c.platform}</p>
              <p className="text-sm text-white/40 leading-relaxed mb-6">{c.desc}</p>
              <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
                <p className="text-sm font-black text-white/60">{c.followers}</p>
                {c.featured && (
                  <span className="text-[9px] font-black tracking-[0.2em] text-white/30 border border-white/15 px-2.5 py-1">FEATURED</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black py-20">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2">두호와 함께하고 싶다면?</h2>
            <p className="text-black/50 text-sm">크리에이터 지원서를 작성해주세요. 빠르게 검토 후 연락드립니다.</p>
          </div>
          <Link href="/apply"
            className="shrink-0 flex items-center gap-3 px-8 py-4 bg-black text-white text-[11px] font-black tracking-[0.2em] hover:bg-zinc-800 transition-colors">
            지원하기 <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
