import { } from 'react';
import { cn } from '@/lib/utils';

/**
 * Page loading overlay — the FOUNDLY wordmark, where the "o" ring's
 * lime dot orbits slowly clockwise inside the circle until the page
 * is ready, then the overlay fades out.
 */
export function PageOverlay({ isVisible }: PageOverlayProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ease-out-cubic',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <span className="text-5xl font-semibold tracking-tight text-exvia-black select-none">
        f
        <span className="relative inline-flex items-center justify-center mx-[0.03em] w-[0.8em] h-[0.8em] align-middle">
          {/* ring */}
          <span className="absolute inset-0 rounded-full border-[0.1em] border-exvia-black/80" />
          {/* orbiting lime dot — clockwise, slow */}
          <span className="absolute inset-0 animate-[foundly-orbit_2.5s_linear_infinite]">
            <span
              className="absolute left-1/2 top-1/2 w-[0.2em] h-[0.2em] -ml-[0.1em] -mt-[0.3em] rounded-full bg-exvia-blue"
            />
          </span>
        </span>
        undly
      </span>

      <style>{`
        @keyframes foundly-orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

interface PageOverlayProps {
  isVisible: boolean;
}
