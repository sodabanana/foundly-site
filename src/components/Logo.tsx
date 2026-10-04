import { cn } from '@/lib/utils';

/**
 * FOUNDLY wordmark: lowercase "foundly" where the "o" is a
 * location-pin / search-circle ring with an Electric Lime dot.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-semibold tracking-tight leading-none select-none',
        className
      )}
      aria-label="foundly"
    >
      <span>f</span>
      <span className="relative inline-flex items-center justify-center mx-[0.03em] w-[0.8em] h-[0.8em]">
        <span className="absolute inset-0 rounded-full border-[0.13em] border-current opacity-90" />
        <span className="w-[0.26em] h-[0.26em] rounded-full bg-exvia-blue" />
      </span>
      <span>undly</span>
    </span>
  );
}
