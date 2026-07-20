import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { useRef } from 'react';
import { profile } from '../data/socials';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const scrollToPortfolio = () => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" ref={ref} className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      {/* fine parallax grid, local to hero */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 bg-blueprint-fine bg-grid-fine opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]"
      />
      <div className="crop-marks mx-6 my-6 md:mx-10 md:my-10">
        <span />
        <span />
        <span />
        <span />
      </div>

      <motion.div style={{ opacity: fade }} className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-[minmax(0,340px)_1fr] md:gap-14 md:px-10">
        {/* Photo, left column on desktop */}
        <motion.div style={{ y: photoY }} className="order-1 mx-auto w-56 sm:w-64 md:w-full md:max-w-[300px]">
          <div className="relative aspect-square">
            <motion.div
              className="absolute -inset-3 rounded-full border border-dashed border-line-strong"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-0 overflow-hidden rounded-full border border-line-strong shadow-[0_20px_60px_-20px_rgba(13,13,14,0.25)]">
              <img src="/images/Profil.jpg" alt="Deskripsi" className="h-full w-full object-cover" />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border border-ink bg-paper font-mono text-[10px] text-ink">
              01
            </span>
          </div>
        </motion.div>

        {/* Text, right column on desktop */}
        <motion.div style={{ y: textY }} className="order-2 text-center md:text-left">
          <p className="font-mono text-xs uppercase tracking-widest2 text-steel">Portfolio Teknik — Sheet 00</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-display text-lg font-medium text-steel sm:text-xl">{profile.role}</p>
          <p className="mx-auto mt-5 max-w-lg text-balance text-base leading-relaxed text-steel md:mx-0 md:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={profile.cvPath}
              download
              data-cursor-hover
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-body text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <Download size={16} strokeWidth={1.75} />
              Download CV
            </a>
            <button
              onClick={scrollToPortfolio}
              data-cursor-hover
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/70 px-7 py-3.5 font-body text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper sm:w-auto"
            >
              Lihat Portfolio
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Drafting title block — signature element, bottom right */}
      <div className="pointer-events-none absolute bottom-8 right-6 hidden font-mono text-[10px] uppercase tracking-wider text-steel md:right-10 lg:block">
        <div className="w-52 border border-line-strong bg-paper/70 backdrop-blur-sm">
          <div className="grid grid-cols-2 divide-x divide-line-strong border-b border-line-strong">
            <div className="px-2 py-1.5">
              <p className="text-mist">Drawn by</p>
              <p className="mt-0.5 text-ink normal-case">Rangga A. P.</p>
            </div>
            <div className="px-2 py-1.5">
              <p className="text-mist">Scale</p>
              <p className="mt-0.5 text-ink">1 : 1</p>
            </div>
          </div>
          <div className="grid grid-cols-2 divide-x divide-line-strong">
            <div className="px-2 py-1.5">
              <p className="text-mist">Sheet</p>
              <p className="mt-0.5 text-ink">01 / 08</p>
            </div>
            <div className="px-2 py-1.5">
              <p className="text-mist">Rev.</p>
              <p className="mt-0.5 text-ink">2026.01</p>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToPortfolio}
        aria-label="Scroll ke bawah"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-steel sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={20} strokeWidth={1.5} />
      </motion.button>
    </section>
  );
}
