'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const fields = [
  { key: 'name', label: 'NAME', placeholder: '이름 (실명)' },
  { key: 'handle', label: 'CHANNEL', placeholder: '@채널명 또는 계정명' },
  { key: 'email', label: 'EMAIL', placeholder: 'your@email.com' },
  { key: 'phone', label: 'PHONE', placeholder: '010-0000-0000' },
  { key: 'followers', label: 'FOLLOWERS', placeholder: '팔로워 수 (예: 50000)' },
];

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', handle: '', email: '', phone: '', followers: '', platform: '', category: '', message: '' });
  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center max-w-md">
          <p className="text-[10px] font-bold tracking-[0.4em] text-white/25 mb-8">SUBMITTED</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] mb-6">지원 완료.</h2>
          <p className="text-white/40 text-sm leading-relaxed mb-10">
            감사합니다. 검토 후 3~5일 내 연락드리겠습니다.
          </p>
          <Link href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-[11px] font-black tracking-[0.2em] hover:bg-white/88 transition-colors">
            홈으로 <ArrowRight size={14} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-[800px] mx-auto px-8 md:px-12 pt-40 pb-28">
        <p className="text-[10px] font-bold tracking-[0.4em] text-white/25 mb-8">JOIN US</p>
        <h1 className="text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[0.9] mb-6">
          협업 지원
        </h1>
        <p className="text-white/40 text-sm leading-relaxed mb-16 max-w-sm">
          두호와 함께할 크리에이터를 모집합니다. 아래 양식을 작성해주세요. 모든 지원서는 성실히 검토합니다.
        </p>

        <div className="flex flex-col gap-6">
          {fields.map(f => (
            <div key={f.key}>
              <label className="block text-[10px] font-bold tracking-[0.3em] text-white/30 mb-2.5">{f.label}</label>
              <input
                value={form[f.key as keyof typeof form]}
                onChange={e => set(f.key, e.target.value)}
                placeholder={f.placeholder}
                className="w-full bg-transparent border border-white/10 focus:border-white/30 text-white px-5 py-4 text-sm outline-none transition-colors placeholder:text-white/15"
              />
            </div>
          ))}

          <div>
            <label className="block text-[10px] font-bold tracking-[0.3em] text-white/30 mb-2.5">PLATFORM</label>
            <select value={form.platform} onChange={e => set('platform', e.target.value)}
              className="w-full bg-[#111111] border border-white/10 focus:border-white/30 text-white px-5 py-4 text-sm outline-none transition-colors appearance-none cursor-pointer">
              <option value="">선택해주세요</option>
              {['인스타그램', '유튜브', '틱톡', '블로그', '기타'].map(p => <option key={p}>{p}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold tracking-[0.3em] text-white/30 mb-2.5">CATEGORY</label>
            <select value={form.category} onChange={e => set('category', e.target.value)}
              className="w-full bg-[#111111] border border-white/10 focus:border-white/30 text-white px-5 py-4 text-sm outline-none transition-colors appearance-none cursor-pointer">
              <option value="">선택해주세요</option>
              {['뷰티', '패션', '피트니스', '식품', '생활', '기타'].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold tracking-[0.3em] text-white/30 mb-2.5">MESSAGE</label>
            <textarea
              value={form.message}
              onChange={e => set('message', e.target.value)}
              placeholder="자기소개 및 협업 희망 내용을 자유롭게 작성해주세요."
              rows={5}
              className="w-full bg-transparent border border-white/10 focus:border-white/30 text-white px-5 py-4 text-sm outline-none transition-colors placeholder:text-white/15 resize-none"
            />
          </div>

          <button
            onClick={() => setSubmitted(true)}
            className="w-full py-5 bg-white text-black text-[12px] font-black tracking-[0.2em] hover:bg-white/88 transition-colors flex items-center justify-center gap-2 mt-4">
            지원하기 <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </main>
  );
}
