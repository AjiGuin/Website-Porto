import { ArrowUp } from 'lucide-react';
import { profile } from '../data/socials';

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between md:px-10">
        <p className="font-mono text-xs text-mist">
          © {year} {profile.name}. Seluruh hak cipta dilindungi.
        </p>
        <button
          onClick={scrollTop}
          data-cursor-hover
          aria-label="Kembali ke atas"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          <ArrowUp size={15} strokeWidth={1.75} />
        </button>
      </div>
    </footer>
  );
}
