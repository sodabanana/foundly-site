import { useState, useEffect, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedButton } from './AnimatedButton';
import { Logo } from './Logo';
import { navigationConfig } from '@/i18n';
import { useLanguage } from '@/i18n';

export function Navigation() {
  if (!navigationConfig.logo && navigationConfig.links.length === 0) return null;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    // Fade in navbar after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-circ',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4',
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="w-full px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            {navigationConfig.logo && (
              <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center">
                <Logo className={cn(
                  "text-2xl transition-colors duration-500",
                  isScrolled ? "text-exvia-black" : "text-white"
                )} />
              </a>
            )}

            {/* Desktop Navigation */}
            {navigationConfig.links.length > 0 && (
              <div className="hidden lg:flex items-center gap-10">
                {navigationConfig.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "text-base transition-colors duration-500 relative group",
                      isScrolled ? "text-exvia-black/80 hover:text-exvia-black" : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.label}
                    <span className={cn(
                      "absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full",
                      isScrolled ? "bg-exvia-black" : "bg-white"
                    )} />
                  </a>
                ))}
              </div>
            )}

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              aria-label="Switch language / 切换语言"
              className={cn(
                "hidden lg:inline-flex items-center gap-1.5 text-xs font-geist-mono border rounded-full px-3.5 py-2 transition-all duration-500",
                isScrolled
                  ? "border-exvia-black/20 text-exvia-black/70 hover:border-exvia-black hover:text-exvia-black"
                  : "border-white/30 text-white/80 hover:border-white hover:text-white"
              )}
            >
              <span className={lang === 'zh' ? 'opacity-100' : 'opacity-40'}>中</span>
              <span className="opacity-30">/</span>
              <span className={lang === 'en' ? 'opacity-100' : 'opacity-40'}>EN</span>
            </button>

            {/* Contact Button */}
            {navigationConfig.contactLabel && (
              <div className="hidden lg:block">
                <AnimatedButton
                  href={navigationConfig.contactHref || "#contact"}
                  variant={isScrolled ? "primary" : "outline-white"}
                  size="md"
                >
                  {navigationConfig.contactLabel}
                </AnimatedButton>
              </div>
            )}

            {/* Mobile Menu Button */}
            {navigationConfig.links.length > 0 && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative w-8 h-6 flex flex-col justify-between"
                aria-label="Toggle menu"
              >
                <span
                  className={cn(
                    'w-full h-0.5 transition-all duration-500 ease-out-quad origin-center',
                    isScrolled ? 'bg-exvia-black' : 'bg-white',
                    isMenuOpen && 'translate-y-[10px] rotate-[-45deg]'
                  )}
                />
                <span
                  className={cn(
                    'w-full h-0.5 transition-all duration-300 ease-out-quad',
                    isScrolled ? 'bg-exvia-black' : 'bg-white',
                    isMenuOpen && 'scale-0 opacity-0'
                  )}
                />
                <span
                  className={cn(
                    'w-full h-0.5 transition-all duration-500 ease-out-quad origin-center',
                    isScrolled ? 'bg-exvia-black' : 'bg-white',
                    isMenuOpen && '-translate-y-[10px] rotate-[45deg]'
                  )}
                />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {navigationConfig.links.length > 0 && (
        <div
          className={cn(
            'fixed inset-0 z-40 bg-white transition-all duration-500 ease-out-cubic lg:hidden',
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navigationConfig.links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  'text-3xl font-semibold text-exvia-black transition-all duration-500 ease-out-quart',
                  isMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
            {navigationConfig.contactLabel && (
              <AnimatedButton
                href={navigationConfig.contactHref || "#contact"}
                variant="primary"
                size="lg"
                className={cn(
                  'mt-2 transition-all duration-500 ease-out-quart',
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: isMenuOpen ? '400ms' : '0ms' }}
              >
                {navigationConfig.contactLabel}
              </AnimatedButton>
            )}
            <button
              onClick={toggleLang}
              aria-label="Switch language / 切换语言"
              className={cn(
                'inline-flex items-center gap-1.5 text-sm font-geist-mono border border-exvia-black/20 rounded-full px-4 py-2 text-exvia-black/70 transition-all duration-500 ease-out-quart',
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: isMenuOpen ? '500ms' : '0ms' }}
            >
              <span className={lang === 'zh' ? 'opacity-100' : 'opacity-40'}>中</span>
              <span className="opacity-30">/</span>
              <span className={lang === 'en' ? 'opacity-100' : 'opacity-40'}>EN</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
