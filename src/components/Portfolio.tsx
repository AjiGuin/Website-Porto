import { AnimatePresence, motion } from 'framer-motion';
import { Eye, FileText } from 'lucide-react';
import { useState } from 'react';
import { filterCategories, projects } from '../data/projects';
import type { Project } from '../types';
import ProjectModal from './ProjectModal';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof filterCategories)[number]>('All');
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [detailProject, setDetailProject] = useState<Project | null>(null);

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          sheet="Sheet 03 — Portfolio"
          title="Sebagian pekerjaan yang telah saya gambar."
          description="Pilih kategori software untuk menyaring proyek, atau lihat semuanya sekaligus."
        />

        <Reveal className="mb-10 flex flex-wrap gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              data-cursor-hover
              className="relative rounded-full px-5 py-2.5 font-body text-sm transition-colors"
            >
              {filter === cat && (
                <motion.span
                  layoutId="filterPill"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className={`relative z-10 ${filter === cat ? 'text-paper' : 'text-ink/70'}`}>{cat}</span>
              {filter !== cat && <span className="absolute inset-0 rounded-full border border-line" />}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110">
                    <img src={project.image} alt={project.title} className="h-full w-full rounded-t-2xl object-cover"/>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center gap-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <button
                      onClick={() => setPreviewProject(project)}
                      data-cursor-hover
                      className="inline-flex items-center gap-1.5 rounded-full bg-paper/95 px-3.5 py-2 text-xs font-medium text-ink"
                    >
                      <Eye size={13} strokeWidth={1.75} /> Preview
                    </button>
                    <button
                      onClick={() => setDetailProject(project)}
                      data-cursor-hover
                      className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-xs font-medium text-paper"
                    >
                      <FileText size={13} strokeWidth={1.75} /> Detail
                    </button>
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-base font-semibold text-ink">{project.title}</h3>
                    <span className="shrink-0 font-mono text-xs text-mist">{project.year}</span>
                  </div>
                  <p className="text-xs text-steel">{project.software.join(' · ')}</p>
                  <p className="mt-1 text-sm leading-relaxed text-steel">{project.shortDescription}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={previewProject} mode="preview" onClose={() => setPreviewProject(null)} />
      <ProjectModal project={detailProject} mode="detail" onClose={() => setDetailProject(null)} />
    </section>
  );
}
