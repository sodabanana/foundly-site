import { cn } from '@/lib/utils';

/**
 * Renders text with the FOUND / LOOK / GROW keywords wrapped in their
 * branded keyword styles (color + typeface) from index.css:
 *   FOUND — lime, Geist black 900
 *   LOOK  — sky blue, Instrument Serif italic
 *   GROW  — orange, GeistMono bold
 */
const KEYWORDS: Record<string, string> = {
  FOUND: 'kw-found',
  LOOK: 'kw-look',
  GROW: 'kw-grow',
};

export function Hl({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(FOUND|LOOK|GROW)/g);
  return (
    <span className={className}>
      {parts.map((part, i) =>
        KEYWORDS[part] ? (
          <span key={i} className={KEYWORDS[part]}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

/** Keyword class for a given service key, for partial highlighting. */
export function kwClass(key: 'found' | 'look' | 'grow'): string {
  return cn(`kw-${key}`);
}
