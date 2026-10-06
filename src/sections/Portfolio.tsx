import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { ArrowUpRight } from 'lucide-react';
import { portfolioConfig } from '@/i18n';

function ProjectRow({ project, index, isVisible }: { project: { title: string; category: string; year: string; image: string }; index: number; isVisible: boolean }) {
  return (
    <div
      className={cn(
        'flex items-center gap-5 lg:gap-8 py-5 lg:py-6 border-b border-exvia-border transition-all duration-700 ease-out-quart',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Thumbnail */}
      <div className="flex-shrink-0 w-24 h-24 lg:w-28 lg:h-28 overflow-hidden rounded-lg bg-exvia-subtle">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-base lg:text-lg font-semibold text-exvia-black truncate">
          {project.title}
        </h3>
        <p className="text-sm text-exvia-black/50 mt-1 truncate">{project.category}</p>
      </div>

      {/* Year */}
      <span className="flex-shrink-0 text-xs font-geist-mono text-exvia-black/40">
        {project.year}
      </span>
    </div>
  );
}

export function Portfolio() {
  if (!portfolioConfig.heading && portfolioConfig.projects.length === 0) return null;

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: listRef, visibleItems } = useStaggerAnimation(portfolioConfig.projects.length + 1, 100);

  return (
    <section id="portfolio" className="w-full py-16 lg:py-24 bg-exvia-subtle/30">
      <div className="container-large px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-10">
          {portfolioConfig.label && (
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                {portfolioConfig.label}
              </span>
            </div>
          )}

          {portfolioConfig.heading && (
            <h2
              className={cn(
                'text-h2 font-semibold text-exvia-black mt-4 transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              {portfolioConfig.heading}
            </h2>
          )}

          {portfolioConfig.description && (
            <p
              className={cn(
                'mt-4 text-base lg:text-lg text-exvia-black/60 leading-relaxed transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              {portfolioConfig.description}
            </p>
          )}
        </div>

        {/* Compact project list with thumbnails */}
        <div ref={listRef} className="border-t border-exvia-border">
          {portfolioConfig.projects.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={index}
              isVisible={visibleItems[index]}
            />
          ))}

          {/* Compact CTA Banner */}
          {portfolioConfig.cta.heading && (
            <div
              className={cn(
                'mt-8 rounded-xl bg-exvia-black px-6 lg:px-10 py-6 lg:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all duration-700 ease-out-quart',
                visibleItems[portfolioConfig.projects.length] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: `${portfolioConfig.projects.length * 80}ms` }}
            >
              <div>
                {portfolioConfig.cta.label && (
                  <span className="text-xs font-geist-mono uppercase tracking-widest text-white/50">
                    {portfolioConfig.cta.label}
                  </span>
                )}
                <h3 className="text-xl lg:text-2xl font-semibold text-white mt-1.5 leading-tight">
                  {portfolioConfig.cta.heading}
                </h3>
              </div>
              {portfolioConfig.cta.linkText && (
                <a
                  href={portfolioConfig.cta.linkHref || '#contact'}
                  className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-exvia-black text-sm font-medium hover:bg-white/90 transition-colors group"
                >
                  <span>{portfolioConfig.cta.linkText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
