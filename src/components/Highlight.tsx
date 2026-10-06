import { cn } from '@/lib/utils';

/**
 * Renders text with the DISCOVER / BUILD / GROW keywords wrapped in their
 * branded keyword styles (color + typeface) from index.css:
 *   DISCOVER — lime #65A30D, Geist black 900
 *   BUILD    — sky blue #0284C7, Geist black 900
 *   GROW     — orange #EA580C, Geist black 900
 */
const KEYWORDS: Record<string, string> = {
  DISCOVER: 'kw-discover',
  BUILD: 'kw-build',
  GROW: 'kw-grow',
};

export function Hl({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(DISCOVER|BUILD|GROW)/g);
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
export function kwClass(key: 'discover' | 'build' | 'grow'): string {
  return cn(`kw-${key}`);
}
