'use client';

import Link from 'next/link';
import { ArrowUpRight, Timer, Flame, Package } from 'lucide-react';
import { useState } from 'react';

const timeDeals = [
  { id: 1, name: '에어핏 레깅스 블랙', brand: '젝시믹스', price: 53100, original: 79000, creator: '김민지', category: '스포츠', emoji: '🩱', tag: 'BEST', discount: 33 },
  { id: 2, name: '무결점 쿠션 SPF50+', brand: '어뮤즈', price: 28000, original: 38000, creator: '박서연', category: '뷰티', emoji: '💄', tag: 'NEW', discount: 26 },
  { id: 3, name: '린넨 와이드 팬츠', brand: 'MANGO', price: 49900, original: 71200, creator: '최아름', category: '패션', emoji: '👖', tag: 'SALE', discount: 30 },
  { id: 4, name: '오트밀 프로틴바 10입', brand: '마켓컬리', price: 8900, original: 12000, creator: '이지호', category: '식품', emoji: '🍫', tag: '', discount: 26 },
];

const products = [
  { id: 5, name: '모던 수납 선반 3단', brand: '한샘', price: 109650, original: 129000, creator: '한도윤', category: '생활', emoji: '🪵', tag: '' },
  { id: 6, name: '비건 립밤 라즈베리', brand: '어뮤즈', price: 12000, original: 15000, creator: '박서연', category: '뷰티', emoji: '💋', tag: '' },
  { id: 7, name: '쿨링 스포츠 탑', brand: '젝시믹스', price: 42000, original: 55000, creator: '김민지', category: '스포츠', emoji: '👕', tag: '' },
  { id: 8, name: '유기농 그래놀라 500g', brand: '마켓컬리', price: 14155, original: 18000, creator: '이지호', category: '식품', emoji: '🥣', tag: '' },
  { id: 9, name: '헬스 글러브 블랙', brand: '젝시믹스', price: 29000, original: 39000, creator: '정현우', category: '스포츠', emoji: '🥊', tag: 'NEW' },
  { id: 10, name: '에센스 토너 200ml', brand: '어뮤즈', price: 32000, original: 42000, creator: '박서연', category: '뷰티', emoji: '🧴', tag: '' },
  { id: 11, name: '와이드 데님 팬츠', brand: 'MANGO', price: 65000, original: 89000, creator: '최아름', category: '패션', emoji: '👔', tag: '' },
  { id: 12, name: '수면 안대 실크', brand: '한샘', price: 18000, original: 25000, creator: '한도윤', category: '생활', emoji: '😴', tag: '' },
];

const cats = ['ALL', '뷰티', '패션', '식품', '생활', '스포츠'];

export default function ShopPage() {
  const [active, setActive] = useState('ALL');

  const filtered = active === 'ALL' ? products : products.filter(p => p.category === active);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">

      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 max-w-[1400px] mx-auto px-8 md:px-16">
        <p className="text-[10px] font-bold tracking-[0.4em] text-white/25 mb-5">DH SHOP</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-5xl md:text-6xl font-black tracking-[-0.03em]">크리에이터<br />큐레이션 샵</h1>
          <p className="text-white/35 text-sm leading-relaxed max-w-xs">
            두호 크리에이터가 직접 사용하고 추천하는 상품만 모았습니다.
          </p>
        </div>
      </section>

      {/* ── TIME DEAL ── */}
      <section className="border-t border-white/[0.07] bg-[#0d0d0d]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-14">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Flame size={16} className="text-white/50" />
              <h2 className="text-xl font-black tracking-tight">타임딜</h2>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 border border-white/10 px-2 py-1">LIMITED</span>
            </div>
            <div className="flex items-center gap-2 bg-black border border-white/10 px-4 py-2">
              <Timer size={12} className="text-white/50" />
              <span className="text-[13px] font-black tracking-widest text-white font-mono">23:14:52</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {timeDeals.map(p => (
              <div key={p.id} className="group bg-[#111] border border-white/[0.06] hover:border-white/25 transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="aspect-square bg-[#0a0a0a] flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-500 relative">
                  {p.emoji}
                  {p.discount > 0 && (
                    <span className="absolute top-3 right-3 text-[10px] font-black text-white bg-white/10 px-2 py-0.5">-{p.discount}%</span>
                  )}
                </div>
                <div className="p-4">
                  {p.tag && <span className="text-[9px] font-black tracking-[0.2em] text-white/40 bg-white/[0.05] px-2 py-0.5 mb-2.5 inline-block">{p.tag}</span>}
                  <p className="text-[11px] text-white/30 mb-1">{p.brand}</p>
                  <p className="text-sm font-bold text-white mb-2 leading-snug">{p.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-black text-white">₩{p.price.toLocaleString()}</p>
                    <p className="text-xs text-white/25 line-through">₩{p.original.toLocaleString()}</p>
                  </div>
                  <p className="text-[10px] text-white/30 mt-2 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-white/30 inline-block" />
                    {p.creator} PICK
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 상시딜 ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 py-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Package size={16} className="text-white/50" />
            <h2 className="text-xl font-black tracking-tight">상시딜</h2>
          </div>
          {/* 카테고리 필터 */}
          <div className="hidden md:flex gap-2">
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)}
                className={`px-4 py-2 text-[10px] font-bold tracking-[0.15em] border transition-colors ${
                  active === c
                    ? 'bg-white text-black border-white'
                    : 'border-white/10 text-white/35 hover:border-white/30 hover:text-white'
                }`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* 모바일 필터 */}
        <div className="flex gap-2 mb-6 md:hidden overflow-x-auto pb-1">
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className={`px-4 py-2 text-[10px] font-bold tracking-[0.15em] border whitespace-nowrap transition-colors ${
                active === c
                  ? 'bg-white text-black border-white'
                  : 'border-white/10 text-white/35'
              }`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {filtered.map(p => (
            <div key={p.id} className="group bg-[#111] border border-white/[0.06] hover:border-white/20 transition-all duration-300 overflow-hidden cursor-pointer">
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
                <p className="text-[10px] text-white/30 mt-2 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-white/30 inline-block" />
                  {p.creator} PICK
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 크리에이터 스토어 ── */}
      <section className="border-t border-white/[0.07] bg-[#0d0d0d] py-16">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[10px] font-bold tracking-[0.4em] text-white/25 mb-4">CREATOR STORE</p>
              <h2 className="text-2xl font-black tracking-tight">크리에이터 스토어</h2>
            </div>
            <Link href="/creators" className="text-[11px] font-bold tracking-[0.2em] text-white/30 hover:text-white transition-colors flex items-center gap-1">
              크리에이터 보기 <ArrowUpRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: '김민지', category: 'FITNESS', emoji: '🏋️', count: 8 },
              { name: '박서연', category: 'BEAUTY', emoji: '💅', count: 12 },
              { name: '이지호', category: 'FOOD', emoji: '🍜', count: 6 },
              { name: '최아름', category: 'FASHION', emoji: '👗', count: 9 },
              { name: '한도윤', category: 'LIFESTYLE', emoji: '🏠', count: 5 },
              { name: '정현우', category: 'FITNESS', emoji: '💪', count: 7 },
            ].map(c => (
              <div key={c.name} className="group bg-[#111] border border-white/[0.06] hover:border-white/20 transition-all duration-300 p-5 cursor-pointer text-center">
                <div className="w-12 h-12 bg-white/[0.04] rounded-full flex items-center justify-center text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {c.emoji}
                </div>
                <p className="text-[9px] font-bold tracking-[0.2em] text-white/25 mb-1">{c.category}</p>
                <p className="text-sm font-bold text-white mb-1">{c.name}</p>
                <p className="text-[10px] text-white/30">{c.count}개 상품</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
