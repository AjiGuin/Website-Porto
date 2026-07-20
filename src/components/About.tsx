import { learningTimeline } from '../data/experience';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading sheet="Sheet 01 — Tentang" title="Di balik setiap garis, ada niat." />

        <div className="grid grid-cols-1 gap-14 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <div className="absolute -inset-3 rounded-2xl border border-line-strong" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <img src="/images/Profil.jpg" alt="Deskripsi" className="h-full w-full object-cover" />
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-ink/90 md:text-xl">
                Saya seorang <span className="font-medium text-ink">Mechanical Drafter</span> yang menekuni proses
                menerjemahkan ide dan kebutuhan produksi menjadi gambar teknik yang akurat, mudah dibaca, dan siap
                dieksekusi di lantai produksi.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="leading-relaxed text-steel">
                Selama beberapa tahun terakhir saya terbiasa bekerja dari sketsa awal, model 3D, hingga gambar kerja
                lengkap dengan toleransi dan anotasi — memastikan tidak ada ruang untuk kesalahan interpretasi antara
                desain dan hasil produksi.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="leading-relaxed text-steel">
                Yang membuat saya bertahan di bidang ini adalah rasa puas melihat sebuah komponen yang sebelumnya
                hanya berupa garis di layar, akhirnya benar-benar berdiri sebagai benda fisik yang berfungsi. Presisi
                bukan sekadar target, melainkan cara saya bekerja.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Compact learning-journey timeline, styled as a dimensioned ruler */}
        <Reveal delay={0.1} className="mt-20 md:mt-28">
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-steel">Perjalanan Belajar</p>
          <div className="relative mt-8">
            <div className="hidden md:block absolute left-0 right-0 top-[9px] h-px bg-line-strong" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
              {learningTimeline.map((entry, i) => (
                <Reveal key={entry.id} delay={0.06 * i} className="relative">
                  <div className="flex items-center gap-3 md:block">
                    <span className="relative z-10 hidden h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border border-ink bg-paper md:flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                    </span>
                    <span className="font-mono text-sm text-ink md:mt-4 md:block">{entry.year}</span>
                  </div>
                  <h3 className="mt-2 font-display text-base font-semibold text-ink md:text-lg">{entry.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-steel">{entry.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
