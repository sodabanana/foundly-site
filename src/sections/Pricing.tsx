import { useState } from 'react';
import { Check, ArrowRight, MessageSquareText } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getActiveLang } from '@/i18n';
import { pricingContent, type PricingConfig, type PricingPlan } from '@/content-pricing';
import { cn } from '@/lib/utils';

/* Resolve pricing content at render time so it follows the active language
   (the whole subtree remounts on language switch). */
function getPricing(): PricingConfig {
  return pricingContent[getActiveLang()];
}

function PlanCard({ plan, delay, isVisible }: { plan: PricingPlan; delay: number; isVisible: boolean }) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border bg-white p-8 transition-all duration-700 ease-out-quart',
        plan.featured
          ? 'border-exvia-black shadow-[0_16px_48px_-16px_rgba(25,25,24,0.25)]'
          : 'border-exvia-border hover:border-exvia-black/30',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-8 px-3 py-1 text-xs font-geist-mono bg-exvia-blue text-exvia-black rounded-full">
          {getPricing().labels.popularBadge}
        </span>
      )}
      <h3 className="text-xl font-semibold text-exvia-black">{plan.name}</h3>
      <p className="mt-1 text-sm text-exvia-black/50 leading-relaxed">{plan.description}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-bold tracking-tight text-exvia-black">{plan.price}</span>
        <span className="text-sm text-exvia-black/50">{plan.unit}</span>
      </div>
      <ul className="mt-6 space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-exvia-black/70 leading-relaxed">
            <Check className="w-4 h-4 mt-0.5 shrink-0 text-exvia-black" />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={cn(
          'mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition-all duration-300 group',
          plan.featured
            ? 'bg-exvia-blue text-exvia-black hover:brightness-95'
            : 'bg-exvia-black text-white hover:opacity-85'
        )}
      >
        {plan.cta}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}

export function Pricing() {
  const pricing = getPricing();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });
  const [tab, setTab] = useState<'discover' | 'build' | 'grow'>('build');

  // Request-offer dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ name: '', contact: '', store: '', message: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  if (!pricing.labels.heading) return null;

  const labels = pricing.labels;

  const submitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim() || !form.message.trim()) {
      setError(labels.formRequired);
      return;
    }
    setError('');
    const subject = encodeURIComponent(`GROW Offer Request — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nContact: ${form.contact}\nStore: ${form.store || '-'}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:hello@foundly.sg?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const tabs = [
    { key: 'build' as const, label: 'BUILD' },
    { key: 'discover' as const, label: 'DISCOVER' },
    { key: 'grow' as const, label: 'GROW' },
  ];

  const group = tab === 'grow' ? null : pricing[tab];

  return (
    <section id="pricing" className="w-full py-24 lg:py-32 bg-exvia-subtle/40">
      <div className="container-large px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-12">
          <span
            className={cn(
              'text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50 transition-all duration-800 ease-out-quart',
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            {labels.label}
          </span>
          <h2
            className={cn(
              'text-h2 font-semibold text-exvia-black mt-4 transition-all duration-800 ease-out-quart',
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '100ms' }}
          >
            {labels.heading}
          </h2>
          <p
            className={cn(
              'mt-6 text-lg text-exvia-black/60 leading-relaxed transition-all duration-800 ease-out-quart',
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            {labels.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-geist-mono tracking-wide transition-all duration-300',
                tab === t.key
                  ? 'bg-exvia-black text-white'
                  : 'bg-white text-exvia-black/60 border border-exvia-border hover:border-exvia-black/40 hover:text-exvia-black'
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Group header */}
        {group && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-exvia-black">{group.name}</h3>
            <p className="text-sm font-geist-mono text-exvia-black/50 mt-1">{group.subtitle}</p>
          </div>
        )}

        <div ref={gridRef}>
          {/* DISCOVER / BUILD plan grids */}
          {group && (
            <div className="grid md:grid-cols-3 gap-6">
              {group.plans.map((plan, i) => (
                <PlanCard key={plan.name} plan={plan} delay={i * 100} isVisible={gridVisible} />
              ))}
            </div>
          )}
          {group && (
            <p className="mt-8 text-xs font-geist-mono text-exvia-black/40 leading-relaxed max-w-2xl">
              {group.footnote}
            </p>
          )}

          {/* GROW request-offer card */}
          {tab === 'grow' && (
            <div
              className={cn(
                'max-w-3xl mx-auto rounded-2xl border border-exvia-black bg-exvia-black text-white p-10 lg:p-14 transition-all duration-700 ease-out-quart',
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-white/50">
                {pricing.grow.subtitle}
              </span>
              <h3 className="text-3xl font-semibold mt-3">{pricing.grow.name}</h3>
              <ul className="mt-8 space-y-4">
                {pricing.grow.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-white/80 leading-relaxed">
                    <Check className="w-5 h-5 mt-0.5 shrink-0 text-exvia-blue" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-white/60 leading-relaxed border-t border-white/10 pt-6">
                {pricing.grow.note}
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setDialogOpen(true);
                }}
                className="mt-8 inline-flex items-center gap-2 bg-exvia-blue text-exvia-black rounded-full px-8 py-4 text-base font-medium hover:brightness-95 transition-all duration-300 group"
              >
                <MessageSquareText className="w-5 h-5" />
                {labels.requestOffer}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Request Offer dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-exvia-black">
              {labels.requestTitle}
            </DialogTitle>
            <DialogDescription className="text-exvia-black/60 leading-relaxed">
              {labels.requestDesc}
            </DialogDescription>
          </DialogHeader>
          {sent ? (
            <div className="py-6">
              <p className="text-sm text-exvia-black/70 leading-relaxed flex items-start gap-2">
                <Check className="w-5 h-5 mt-0.5 shrink-0 text-exvia-black" />
                {labels.formSuccess}
              </p>
              <button
                onClick={() => setDialogOpen(false)}
                className="mt-6 w-full rounded-full bg-exvia-black text-white py-3 text-sm font-medium hover:opacity-85 transition-opacity"
              >
                {labels.closeLabel}
              </button>
            </div>
          ) : (
            <form onSubmit={submitRequest} className="space-y-4 pt-2">
              <input
                type="text"
                placeholder={labels.formName}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border border-exvia-border rounded-lg text-sm focus:outline-none focus:border-exvia-black transition-colors"
              />
              <input
                type="text"
                placeholder={labels.formContact}
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                className="w-full px-4 py-3 border border-exvia-border rounded-lg text-sm focus:outline-none focus:border-exvia-black transition-colors"
              />
              <input
                type="text"
                placeholder={labels.formStore}
                value={form.store}
                onChange={(e) => setForm({ ...form, store: e.target.value })}
                className="w-full px-4 py-3 border border-exvia-border rounded-lg text-sm focus:outline-none focus:border-exvia-black transition-colors"
              />
              <textarea
                rows={4}
                placeholder={labels.formMessage}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border border-exvia-border rounded-lg text-sm focus:outline-none focus:border-exvia-black transition-colors resize-none"
              />
              {error && <p className="text-xs text-red-600">{error}</p>}
              <button
                type="submit"
                className="w-full rounded-full bg-exvia-blue text-exvia-black py-3.5 text-sm font-medium hover:brightness-95 transition-all"
              >
                {labels.formSubmit}
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
