import { Mail } from 'lucide-react';
import type { ReactElement } from 'react';
import type { SocialLink } from '../types';

interface IconProps {
  size?: number;
}

function WhatsAppGlyph({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path
        d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9c0 1.62.43 3.14 1.18 4.45L3 21l4.7-1.15A8.96 8.96 0 0 0 12 21Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.7c.15-.55.7-.9 1.25-.8.3.05.55.25.68.53l.5 1.1c.13.28.1.6-.08.85l-.4.55a.55.55 0 0 0-.02.6c.4.7 1.13 1.5 1.85 1.9.2.11.44.1.6-.05l.5-.45a.7.7 0 0 1 .82-.1l1.1.55c.28.14.46.44.44.75-.05.75-.68 1.5-1.45 1.6-1.7.22-4.3-1.02-5.7-3.1-.55-.82-.9-1.85-1.09-2.98Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubGlyph({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path
        d="M9 20c-4.5 1.5-4.5-1.5-6-2m12 3v-3.2c0-.9.3-1.5.7-1.8-2.4-.27-5-1.2-5-5.3 0-1.17.42-2.13 1.1-2.88-.11-.27-.48-1.37.1-2.85 0 0 .9-.29 2.9 1.1a10 10 0 0 1 5.3 0c2-1.39 2.9-1.1 2.9-1.1.58 1.48.21 2.58.1 2.85.68.75 1.1 1.7 1.1 2.88 0 4.11-2.6 5.02-5.07 5.29.4.34.76 1.02.76 2.06V20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInGlyph({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" strokeLinecap="round" />
      <circle cx="7.5" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-3.6c0-1.5.9-2.4 2.1-2.4 1.2 0 1.9.8 1.9 2.4v3.6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" strokeLinecap="round" />
    </svg>
  );
}

function InstagramGlyph({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const glyphs: Record<SocialLink['id'], (props: IconProps) => ReactElement> = {
  whatsapp: WhatsAppGlyph,
  email: ({ size }) => <Mail size={size} strokeWidth={1.5} />,
  github: GitHubGlyph,
  linkedin: LinkedInGlyph,
  instagram: InstagramGlyph,
};

export default function SocialIcon({ id, size = 18 }: { id: SocialLink['id']; size?: number }) {
  const Glyph = glyphs[id];
  return <Glyph size={size} />;
}
