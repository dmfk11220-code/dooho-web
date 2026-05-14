'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/about', label: 'ABOUT' },
  { href: '/creators', label: 'CREATORS' },
  { href: '/apply', label: 'CONTACT' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/[0.06]' : ''}`}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 h-[72px] flex items-center justify-between">
        <Link href="/" className="text-[15px] font-black tracking-[0.25em] text-white">
          DOOHO
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-[11px] font-bold tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-200">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link href="/apply"
            className="text-[11px] font-bold tracking-[0.2em] text-black bg-white px-5 py-2.5 hover:bg-white/85 transition-colors duration-200">
            협업 문의
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/[0.06] px-8 py-8 flex flex-col gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-[12px] font-bold tracking-[0.2em] text-white/50 hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/apply" onClick={() => setOpen(false)}
            className="text-[12px] font-bold tracking-[0.2em] text-black bg-white px-5 py-3 text-center hover:bg-white/85 transition-colors mt-2">
            협업 문의
          </Link>
        </div>
      )}
    </header>
  );
}
