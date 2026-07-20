import { useCountUp } from '../hooks/useCountUp';
import Reveal from './Reveal';
import { stats } from '../data/experience';
import type { StatItem } from '../types';

function StatBlock({ stat }: { stat: StatItem }) {
  const { ref, value } = useCountUp(stat.value, 2000);
  return (
    <div ref={ref} className="flex flex-col items-center px-6 py-10 text-center">
      <p className="font-mono text-4xl font-medium text-paper sm:text-5xl">
        {value}
        <span className="text-silver">{stat.suffix}</span>
      </p>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-widest2 text-paper/60">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink py-4">
      <div className="pointer-events-none absolute inset-0 bg-blueprint bg-grid opacity-[0.06] invert" />
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="grid grid-cols-2 divide-y divide-paper/10 md:grid-cols-4 md:divide-x md:divide-y-0">
            {stats.map((stat) => (
              <StatBlock key={stat.id} stat={stat} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
