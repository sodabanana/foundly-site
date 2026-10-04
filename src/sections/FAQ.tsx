import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { faqConfig } from '@/i18n';
import { cn } from '@/lib/utils';

export function FAQ() {
  if (!faqConfig.heading && faqConfig.items.length === 0) return null;

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="faq" className="w-full py-24 lg:py-32 bg-white">
      <div className="container-large px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-14">
          {faqConfig.label && (
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                {faqConfig.label}
              </span>
            </div>
          )}
          {faqConfig.heading && (
            <h2
              className={cn(
                'text-h2 font-semibold text-exvia-black mt-4 transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              {faqConfig.heading}
            </h2>
          )}
        </div>

        {/* Accordion */}
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqConfig.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className={cn(
                  'border-b border-exvia-border transition-all duration-700 ease-out-quart',
                  headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
                style={{ transitionDelay: `${150 + index * 60}ms` }}
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-exvia-black hover:text-exvia-black/70 py-6">
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs font-geist-mono text-exvia-black/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-exvia-black/60 leading-relaxed pb-6 pl-9">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
