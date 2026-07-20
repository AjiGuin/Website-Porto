import { Award } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import PlaceholderImage from './PlaceholderImage';
import { certificates } from '../data/experience';

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          sheet="Sheet 05 — Sertifikat"
          title="Kompetensi yang telah terverifikasi."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={cert.id} delay={(i % 3) * 0.08}>
              <div className="group overflow-hidden rounded-2xl border border-line bg-paper/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-line-strong hover:shadow-[0_20px_45px_-25px_rgba(13,13,14,0.35)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                    <PlaceholderImage
                      label="Sertifikat"
                      rounded="md"
                      className="rounded-none"
                      icon={<Award size={16} strokeWidth={1.5} />}
                    />
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-mist">{cert.credentialLabel}</p>
                  <h3 className="mt-2 font-display text-base font-semibold text-ink">{cert.title}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm text-steel">{cert.issuer}</p>
                    <span className="font-mono text-xs text-mist">{cert.year}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
