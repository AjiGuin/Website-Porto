import Reveal from './Reveal';

interface SectionHeadingProps {
  sheet: string;
  title: string;
  align?: 'left' | 'center';
  description?: string;
}

export default function SectionHeading({ sheet, title, align = 'left', description }: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <Reveal className={`mb-14 md:mb-20 ${isCenter ? 'text-center' : ''}`}>
      <div className={`dim-line font-mono text-[11px] tracking-widest2 text-steel uppercase ${isCenter ? 'justify-center' : ''}`}>
        {!isCenter && <span className="max-w-[2rem]" />}
        <span>{sheet}</span>
        <span />
      </div>
      <h2
        className={`mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink text-balance ${
          isCenter ? 'mx-auto' : ''
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-xl text-steel text-base md:text-lg ${isCenter ? 'mx-auto' : ''}`}>{description}</p>
      )}
    </Reveal>
  );
}
