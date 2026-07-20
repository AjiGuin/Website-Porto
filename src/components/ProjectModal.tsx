import { AnimatePresence, motion } from 'framer-motion';
import { Clock, Layers, X } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  mode: 'preview' | 'detail';
  onClose: () => void;
}

export default function ProjectModal({ project, mode, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`relative max-h-[88vh] w-full overflow-y-auto rounded-2xl bg-paper shadow-2xl ${
              mode === 'preview' ? 'max-w-3xl' : 'max-w-4xl'
            }`}
          >
            <button
              onClick={onClose}
              aria-label="Tutup"
              data-cursor-hover
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm transition-transform hover:scale-105"
            >
              <X size={17} strokeWidth={1.75} />
            </button>

            <div className="aspect-[16/10] w-full">
              <img src="/images/Bucket Truck.jpg" alt="Deskripsi" className="h-full w-full object-cover" />
            </div>

            {mode === 'preview' ? (
              <div className="p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-steel">{project.category}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{project.title}</h3>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-[11px] uppercase tracking-widest2 text-steel">
                    {project.category} — {project.year}
                  </p>
                  <span className="rounded-full border border-line-strong px-3 py-1 font-mono text-[11px] text-steel">
                    {project.thumbnailLabel}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">{project.title}</h3>
                <p className="mt-4 leading-relaxed text-steel">{project.fullDescription}</p>

                <div className="mt-8 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-2">
                  <img src="/images/Bucket Truck.jpg" alt="Deskripsi" className="h-full w-full object-cover" />
                  <div>
                    <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 text-mist">
                      <Layers size={13} strokeWidth={1.75} /> Software
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.software.map((s) => (
                        <span key={s} className="rounded-full bg-paper-dim px-3 py-1 text-sm text-ink">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest2 text-mist">
                      <Clock size={13} strokeWidth={1.75} /> Lama Pengerjaan
                    </p>
                    <p className="mt-3 text-sm text-ink">{project.duration}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="font-mono text-[11px] uppercase tracking-widest2 text-mist">Skill yang Digunakan</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.skillsUsed.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-line-strong px-3 py-1 text-sm text-steel"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
