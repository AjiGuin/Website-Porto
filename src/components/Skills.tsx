import { motion } from 'framer-motion';
import { Box, Cpu, FileSpreadsheet, Layers, PenTool, Ruler, Settings2, SquareStack } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { skills } from '../data/skills';
import { useCountUp } from '../hooks/useCountUp';
import type { Skill } from '../types';

const icons: Record<string, typeof PenTool> = {
  autocad: PenTool,
  inventor: Box,
  solidworks: Layers,
  mastercam: Settings2,
  cnc: Cpu,
  drawing: Ruler,
  mechdesign: SquareStack,
  office: FileSpreadsheet,
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = icons[skill.id] ?? PenTool;
  const { ref, value } = useCountUp(skill.percentage, 1400);

  return (
    <Reveal delay={(index % 4) * 0.06}>
      <div
        ref={ref}
        className="group relative flex h-full flex-col justify-between rounded-2xl border border-line bg-paper/60 p-6 transition-colors hover:border-line-strong"
      >
        <div className="flex items-start justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong text-ink transition-transform group-hover:-translate-y-0.5">
            <Icon size={18} strokeWidth={1.5} />
          </span>
          <span className="font-mono text-2xl text-ink">{value}%</span>
        </div>

        <div>
          <h3 className="mt-6 font-display text-base font-medium text-ink">{skill.name}</h3>
          <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-paper-dim">
            <motion.div
              className="h-full rounded-full bg-ink"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          sheet="Sheet 02 — Skillset"
          title="Tools yang saya kuasai setiap hari."
          description="Kombinasi software CAD/CAM dan kompetensi teknis yang mendukung proses drafting dari konsep hingga produksi."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
