import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { aboutConfig } from '@/i18n';

const PILLAR_COLORS: Record<string, string> = {
  build: '#0284C7',
  discover: '#65A30D',
  grow: '#EA580C',
};

export function About() {
  if (!aboutConfig.description && aboutConfig.stats.length === 0 && aboutConfig.images.length === 0) return null;

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: imagesRef, visibleItems } = useStaggerAnimation(aboutConfig.images.length || 4, 150);

  return (
    <section id="about" className="w-full py-24 lg:py-32 bg-white">
      <div className="container-large px-6 lg:px-12">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Text Content */}
          <div>
            {/* Section Label */}
            {aboutConfig.label && (
              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
              >
                <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                  {aboutConfig.label}
                </span>
              </div>
            )}

            {/* Value Proposition */}
            {(aboutConfig.valueProp || aboutConfig.valuePropAccent) && (
              <h2
                className={cn(
                  'mt-5 text-2xl md:text-[1.75rem] lg:text-3xl font-black text-exvia-black leading-[1.3] tracking-[-0.01em] transition-all duration-800 ease-out-quart',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '80ms' }}
              >
                {aboutConfig.valueProp}
                {aboutConfig.valuePropAccent && (
                  <span className="bg-[linear-gradient(to_top,rgba(215,255,62,0.85)_42%,transparent_42%)] px-1">
                    {aboutConfig.valuePropAccent}
                  </span>
                )}
              </h2>
            )}

            {/* Stats — right under the value proposition */}
            {aboutConfig.stats.length > 0 && (
              <div
                className={cn(
                  'grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-exvia-border transition-all duration-800 ease-out-quart',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '140ms' }}
              >
                {aboutConfig.stats.map((stat, index) => (
                  <div key={index}>
                    <span className="block text-3xl lg:text-4xl font-black text-exvia-black tracking-[-0.02em]">
                      {stat.value}
                    </span>
                    <span className="block mt-1.5 text-xs lg:text-sm text-exvia-black/60 leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Three pillars — BUILD / DISCOVER / GROW, aligned columns */}
            {aboutConfig.pillars?.length > 0 && (
              <div className="mt-10 grid sm:grid-cols-3 gap-6">
                {aboutConfig.pillars.map((pillar, index) => (
                  <div
                    key={pillar.key}
                    className={cn(
                      'border-t-2 pt-5 transition-all duration-700 ease-out-quart',
                      sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    )}
                    style={{
                      borderTopColor: PILLAR_COLORS[pillar.key],
                      transitionDelay: `${220 + index * 90}ms`,
                    }}
                  >
                    <span className={cn('block text-2xl font-black tracking-[-0.02em]', `kw-${pillar.key}`)}>
                      {pillar.name}
                    </span>
                    <span className="block mt-1.5 text-xs font-geist-mono uppercase tracking-wider text-exvia-black/50">
                      {pillar.scope}
                    </span>
                    <p className="mt-3 text-sm text-exvia-black/70 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* System description */}
            {aboutConfig.description && (
              <p
                className={cn(
                  'mt-10 text-base text-exvia-black/70 leading-relaxed transition-all duration-800 ease-out-quart',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '340ms' }}
              >
                {aboutConfig.description}
              </p>
            )}
          </div>

          {/* Right Column - Image Grid (decorative, non-clickable) */}
          {aboutConfig.images.length > 0 && (
            <div ref={imagesRef} className="grid grid-cols-2 gap-4">
              {aboutConfig.images.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    'relative overflow-hidden transition-all duration-700 ease-out-quart',
                    index % 2 === 1 ? 'mt-8' : '',
                    visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                >
                  <div className="aspect-[4/5] relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
