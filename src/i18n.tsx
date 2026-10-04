import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { content, type Content } from '@/config';

export type Lang = 'zh' | 'en';

/* Active language lives in a module-level variable. Config exports below
   are proxies that resolve against it on every read, so switching the
   language re-renders the tree and every section updates instantly. */

let activeLang: Lang = 'zh';

export function setActiveLang(lang: Lang) {
  activeLang = lang;
}

export function getActiveLang(): Lang {
  return activeLang;
}

function proxied<K extends keyof Content>(key: K): Content[K] {
  return new Proxy({} as Content[K], {
    get: (_, prop) =>
      (content[activeLang][key] as unknown as Record<PropertyKey, unknown>)[prop],
  });
}

export const siteConfig = proxied('site');
export const navigationConfig = proxied('navigation');
export const heroConfig = proxied('hero');
export const aboutConfig = proxied('about');
export const servicesConfig = proxied('services');
export const portfolioConfig = proxied('portfolio');
export const testimonialsConfig = proxied('testimonials');
export const faqConfig = proxied('faq');
export const ctaConfig = proxied('cta');
export const footerConfig = proxied('footer');

// Restore persisted language preference
if (typeof localStorage !== 'undefined') {
  const saved = localStorage.getItem('foundly-lang');
  if (saved === 'zh' || saved === 'en') setActiveLang(saved);
}
if (typeof document !== 'undefined') {
  document.documentElement.lang = activeLang === 'zh' ? 'zh-CN' : 'en';
  document.title = content[activeLang].site.title;
}

const LanguageContext = createContext<{ lang: Lang; toggleLang: () => void }>({
  lang: activeLang,
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(activeLang);
  const savedScroll = useRef(0);

  const toggleLang = () => {
    const next: Lang = lang === 'zh' ? 'en' : 'zh';
    savedScroll.current = typeof window !== 'undefined' ? window.scrollY : 0;
    setActiveLang(next);
    try {
      localStorage.setItem('foundly-lang', next);
    } catch {
      /* private mode */
    }
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
    document.title = content[next].site.title;
    setLang(next);
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = content[lang].site.title;
    // restore scroll position after the subtree remounts on language switch
    if (savedScroll.current) {
      window.scrollTo(0, savedScroll.current);
      savedScroll.current = 0;
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {/* key remounts the whole subtree so every section re-reads its config */}
      <div key={lang} style={{ display: 'contents' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
