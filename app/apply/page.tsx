'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', handle: '', platform: '', category: '', followers: '', email: '', phone: '', message: '' });
  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-6xl mb-6">🎉</p>
          <h2 className="text-4xl font-black mb-4">지원 완료!</h2>
          <p className="text-white/50 mb-8">검토 후 3~5일 내 연락드릴게요.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-sm tracking-widest hover:border-white transition-colors">
            홈으로 <ArrowRight size={14} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="mb-12">
          <Link href="/" className="flex items-center gap-2 text-white/30 hover:text-white text-xs tracking-widest mb-8 transition-colors">
            <ArrowLeft size={14} /> BACK
          </Link>
          <p className="text-[11px] tracking-[0.3em] text-white/30 font-semibold mb-3">— JOIN US</p>
          <h1 className="text-5xl font-black tracking-tight mb-4">협업 지원</h1>
          <p className="text-white/40 text-sm leading-relaxed">두호와 함께할 크리에이터를 모집합니다. 아래 양식을 작성해주세요.</p>
        </div>

        <div className="flex flex-col gap-5">
          {[
            { key: 'name', label: '이름', placeholder: '실명을 입력해주세요' },
            { key: 'handle', label: '채널/계정명', placeholder: '@handle' },
            { key: 'email', label: '이메일', placeholder: 'your@email.com' },
            { key: 'phone', label: '연락처', placeholder: '010-0000-0000' },
            { key: 'followers', label: '팔로워 수', placeholder: '예) 10000' },
          ].map(f => (
            <div key={f.key}>
              <label className="block text-[11px] tracking-widest text-white/40 font-bold mb-2">{f.label.toUpperCase()}</label>
              <input
                value={form[f.key as keyof typeof form]}
                onChange={e => set(f.key, e.target.value)}
                placeholder={f.placeholder}
                className="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-white/40 transition-colors placeholder:text-white/20"
              />
            </div>
          ))}

          <div>
            <label className="block text-[11px] tracking-widest text-white/40 font-bold mb-2">PLATFORM</label>
            <select value={form.platform} onChange={e => set('platform', e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-white/40 transition-colors">
              <option value="">선택해주세요</option>
              {['인스타그램', '유튜브', '틱톡', '블로그', '기타'].map(p => <option key={p}>{p}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-[11px] tracking-widest text-white/40 font-bold mb-2">CATEGORY</label>
            <select value={form.category} onChange={e => set('category', e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-white/40 transition-colors">
              <option value="">선택해주세요</option>
              {['패션', '뷰티', '식품', '생활', '스포츠', '기타'].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-[11px] tracking-widest text-white/40 font-bold mb-2">MESSAGE</label>
            <textarea
              value={form.message}
              onChange={e => set('message', e.target.value)}
              placeholder="자기소개 및 협업 희망 내용을 자유롭게 작성해주세요."
              rows={5}
              className="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 text-sm outline-none focus:border-white/40 transition-colors placeholder:text-white/20 resize-none"
            />
          </div>

          <button
            onClick={() => setSubmitted(true)}
            className="w-full py-4 bg-white text-black text-sm font-black tracking-widest hover:bg-white/90 transition-colors flex items-center justify-center gap-2 mt-2">
            지원하기 <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </main>
  );
}
