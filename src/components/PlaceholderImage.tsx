import { ImageIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface PlaceholderImageProps {
  label: string;
  rounded?: 'full' | 'lg' | 'md';
  className?: string;
  icon?: ReactNode;
}

const roundedMap = {
  full: 'rounded-full',
  lg: 'rounded-2xl',
  md: 'rounded-md',
};

export default function PlaceholderImage({ label, rounded = 'lg', className = '', icon }: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-paper-dim ${roundedMap[rounded]} ${className}`}
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, rgba(13,13,14,0.06) 0px, rgba(13,13,14,0.06) 1px, transparent 1px, transparent 10px)',
      }}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-paper/70 text-mist">
          {icon ?? <ImageIcon size={16} strokeWidth={1.5} />}
        </div>
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-mist">{label}</p>
      </div>
    </div>
  );
}
