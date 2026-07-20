import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading
          sheet="Sheet 04 — Pengalaman"
          title="Jejak proyek dan pembelajaran."
          align="center"
          description="Rangkaian pengalaman kerja dan proyek yang membentuk cara saya bekerja hari ini."
        />

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-line-strong md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-10 md:gap-4">
            {experience.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={entry.id} className="relative md:grid md:grid-cols-2 md:gap-10">
                  <span className="absolute left-[13px] top-1.5 z-10 h-3 w-3 rounded-full border-2 border-ink bg-paper md:left-1/2 md:-translate-x-1/2" />

                  <div className={`pl-12 md:pl-0 ${isLeft ? 'md:pr-14 md:text-right' : 'md:col-start-2 md:pl-14'}`}>
                    <Reveal y={20} className={`${isLeft ? 'md:flex md:flex-col md:items-end' : ''}`}>
                      <p className="font-mono text-xs uppercase tracking-widest2 text-steel">{entry.period}</p>
                      <h3 className="mt-2 font-display text-lg font-semibold text-ink md:text-xl">{entry.role}</h3>
                      <p className="mt-0.5 text-sm text-mist">{entry.organization}</p>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-steel">{entry.description}</p>
                      <div className={`mt-4 flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-line-strong px-3 py-1 font-mono text-[11px] text-steel"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
