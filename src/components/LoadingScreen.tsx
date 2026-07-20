import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const totalMs = 1500;
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / totalMs) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 280);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <svg width="88" height="88" viewBox="0 0 88 88" className="mb-6">
            <circle cx="44" cy="44" r="34" stroke="rgba(250,250,248,0.15)" strokeWidth="1" fill="none" />
            <motion.circle
              cx="44"
              cy="44"
              r="34"
              stroke="#FAFAF8"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="214"
              initial={{ strokeDashoffset: 214 }}
              animate={{ strokeDashoffset: 214 - (214 * progress) / 100 }}
              transition={{ ease: 'linear', duration: 0.1 }}
            />
            <line x1="44" y1="6" x2="44" y2="14" stroke="rgba(250,250,248,0.4)" strokeWidth="1" />
            <line x1="44" y1="74" x2="44" y2="82" stroke="rgba(250,250,248,0.4)" strokeWidth="1" />
            <line x1="6" y1="44" x2="14" y2="44" stroke="rgba(250,250,248,0.4)" strokeWidth="1" />
            <line x1="74" y1="44" x2="82" y2="44" stroke="rgba(250,250,248,0.4)" strokeWidth="1" />
          </svg>
          <p className="font-mono text-xs tracking-widest2 text-paper/70">LOADING SHEET</p>
          <p className="mt-2 font-mono text-2xl text-paper">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
