// FOUNDLY — Local Growth Studio
// Bilingual site content (zh / en). All copy lives here.
// Brand guideline: ../brandguideline.md

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutPillar {
  key: 'discover' | 'build' | 'grow';
  name: string;
  scope: string;
  desc: string;
}

export interface AboutConfig {
  label: string;
  valueProp: string;
  valuePropAccent: string;
  lead: string;
  description: string;
  pillars: AboutPillar[];
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  headingParts: string[];
  services: ServiceItem[];
}

export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqConfig {
  label: string;
  heading: string;
  items: FaqItem[];
}

export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export interface Content {
  site: SiteConfig;
  navigation: NavigationConfig;
  hero: HeroConfig;
  about: AboutConfig;
  services: ServicesConfig;
  portfolio: PortfolioConfig;
  testimonials: TestimonialsConfig;
  faq: FaqConfig;
  cta: CTAConfig;
  footer: FooterConfig;
}

/* ------------------------------------------------------------------ */
/* 中文（默认）                                                        */
/* ------------------------------------------------------------------ */

const zh: Content = {
  site: {
    language: "zh",
    title: "FOUNDLY · Get Found. Get Customers. | 新加坡实体店增长工作室",
    description:
      "FOUNDLY 是新加坡本地增长工作室（Local Growth Studio）：DISCOVER（SEO·GEO 搜索可见）+ BUILD（品牌网站门面）+ GROW（社媒引流获客），帮实体店被找到、被看见、获得到客。",
  },
  navigation: {
    logo: "foundly",
    links: [
      { label: "关于我们", href: "#about" },
      { label: "服务体系", href: "#services" },
      { label: "定价", href: "#pricing" },
      { label: "客户案例", href: "#portfolio" },
      { label: "常见问题", href: "#faq" },
    ],
    contactLabel: "预约免费诊断",
    contactHref: "#contact",
  },
  hero: {
    name: "foundly",
    roles: ["get found.", "get customers."],
    backgroundImage: "/images/hero-bg.jpg",
  },
  about: {
    label: "About · 关于我们",
    valueProp: "店再好，搜不到、刷不到，",
    valuePropAccent: "就等于不存在。",
    lead: "",
    description:
      "三个服务，一套增长系统。FOUNDLY 是致力于服务 SME 商家的 Growth Studio，已成功帮助咖啡厅、舞蹈室、理发店、纹身馆等实现线上品牌曝光。",
    pillars: [
      {
        key: "build",
        name: "BUILD",
        scope: "构建品牌网站门面",
        desc: "服务项目、地址导航、真实门店图、顾客评价——搜到你的人，3 秒内决定走进来。",
      },
      {
        key: "discover",
        name: "DISCOVER",
        scope: "SEO·GEO 搜索可见",
        desc: "在 Google 第一屏被搜到，在 ChatGPT 等 AI 搜索里被点名。",
      },
      {
        key: "grow",
        name: "GROW",
        scope: "社媒引流获客",
        desc: "在 IG / TikTok / 小红书被本地人刷到，把曝光变成到店客流。",
      },
    ],
    experienceValue: "",
    experienceLabel: "",
    stats: [
      { value: "120+", label: "家实体店在 Google Maps 被找到" },
      { value: "7天", label: "品牌网站上线" },
      { value: "3.2x", label: "线上曝光+获客提升" },
    ],
    images: [
      { src: "/images/about-1.jpg", alt: "FOUNDLY 顾问与店主一起看数据" },
      { src: "/images/about-2.jpg", alt: "新加坡店屋街景" },
      { src: "/images/about-3.jpg", alt: "手机上的门店社交内容" },
      { src: "/images/about-4.jpg", alt: "微笑的实体店店主" },
    ],
  },
  services: {
    label: "The FOUNDLY System · 服务体系",
    heading: "先建门面，再被搜到，然后获得到客",
    headingParts: ["先建门面", "，再被搜到", "，然后获得到客"],
    services: [
      {
        iconName: "Palette",
        title: "BUILD · 构建门面",
        description:
          "Website + Brand Presence。为实体店打造品牌官网：服务项目、门店地址与导航、真实环境图、顾客评价、WhatsApp 一键预约——搜到你的人，3 秒内决定走进来。",
        image: "/images/service-2.jpg",
      },
      {
        iconName: "Search",
        title: "DISCOVER · 搜索可见",
        description:
          "SEO + GEO + Local Search。Google 排名与地图优化，外加 ChatGPT / Perplexity / Gemini 等 AI 搜索可见度建设——客户搜你时，你在第一屏；AI 推荐时，你的店被点名。",
        image: "/images/service-1.jpg",
      },
      {
        iconName: "TrendingUp",
        title: "GROW · 获得到客",
        description:
          "Social Media + Customer Acquisition。IG / FB / TikTok / 小红书内容策划与代运营，本地投流与转化追踪——用本地人爱看的内容，把曝光变成到店客流。",
        image: "/images/service-3.jpg",
      },
    ],
  },
  portfolio: {
    label: "Use Case · 客户案例",
    heading: "他们已经 Get Found，也获得了客",
    description:
      "五类典型的新加坡实体店，从「被找到」到「获得到客」的真实增长。数字均可追踪，欢迎当面验证。",
    projects: [
      {
        title: "牛车水手冲咖啡馆",
        category: "DISCOVER + BUILD · 官网预约增长 3 倍",
        year: "2026",
        image: "/images/portfolio-1.jpg",
        featured: true,
      },
      {
        title: "乌节路皮肤管理中心",
        category: "GROW · 每月新增 400+ 到店咨询",
        year: "2026",
        image: "/images/portfolio-2.jpg",
      },
      {
        title: "CBD 精品健身房",
        category: "DISCOVER · “gym near me” 稳定前三",
        year: "2025",
        image: "/images/portfolio-3.jpg",
      },
      {
        title: "如切生活选物店",
        category: "BUILD + GROW · 线上咨询 +150%",
        year: "2025",
        image: "/images/portfolio-4.jpg",
      },
      {
        title: "如切宠物美容店",
        category: "FOUNDLY 全案 · 半年新增 2,000 会员",
        year: "2025",
        image: "/images/portfolio-5.jpg",
      },
    ],
    cta: {
      label: "下一个 Get Found",
      heading: "你的店，也可以是下一个",
      linkText: "免费获取获客方案",
      linkHref: "#contact",
    },
    viewAllLabel: "",
  },
  testimonials: {
    label: "Testimonials · 客户评价",
    heading: "店主们怎么说",
    testimonials: [
      {
        quote:
          "以前只靠熟客口口相传，现在 Google 搜 ‘cafe near Chinatown’ 第一个就是我们。周末开始排长队，官网预约多了三倍。",
        author: "一位咖啡馆主",
        role: "牛车水 · 手冲咖啡馆",
        company: "",
        image: "/images/testimonial-1.jpg",
        rating: 5,
      },
      {
        quote:
          "FOUNDLY 不只是帮我们发帖，他们管的是‘这个月多少个新客到店’。半年下来，会员从 500 涨到 2,000，报表每个月都清清楚楚。",
        author: "一位宠物美容店主理人",
        role: "如切 · 宠物美容店",
        company: "",
        image: "/images/testimonial-2.jpg",
        rating: 5,
      },
      {
        quote:
          "现在 AI 搜索里终于能搜到我们了。有顾客说是 ChatGPT 推荐来的——这在两年前完全不敢想。GEO 这块他们确实是新加坡第一批做的。",
        author: "一位健身房合伙人",
        role: "CBD · 精品健身房",
        company: "",
        image: "/images/testimonial-3.jpg",
        rating: 5,
      },
    ],
  },
  faq: {
    label: "FAQ · 常见问题",
    heading: "店主最常问的 8 个问题",
    items: [
      {
        q: "做一次品牌网站要多少钱、多久？",
        a: "BUILD 套餐 S$2,800 起，包含设计、搭建、文案与基础门店拍摄，最快 30 天上线；预算紧张可以先从单页官网做起，之后随时扩展。",
      },
      {
        q: "我完全不懂线上，没有 logo 和图片怎么办？",
        a: "完全正常，大多数客户一开始都这样。BUILD 包含基础品牌视觉与真实门店拍摄，你只管开门做生意，门面交给我们。",
      },
      {
        q: "社媒代运营具体包含什么？",
        a: "GROW 包含内容策划、拍摄、发布、互动回复与本地投流，每月交付一份获客报表：曝光、互动、私信咨询、到店转化，全部可追踪。",
      },
      {
        q: "GEO 是什么？和 SEO 有什么区别？",
        a: "SEO 让你在 Google 排名靠前；GEO（Generative Engine Optimization）让你在 ChatGPT、Perplexity、Gemini 这类 AI 的回答里被提到。越来越多顾客直接问 AI「附近哪家好」，GEO 就是抢占这个全新的获客入口。",
      },
      {
        q: "多久能看到引流效果？",
        a: "社媒通常 4–8 周起量；SEO 一般 3–6 个月进第一页。我们不承诺玄学，只承诺每月给你看得见的进度报表。",
      },
      {
        q: "需要签长期合约吗？",
        a: "不需要。全部月付制，随时可以停。98% 的客户选择续约，因为报表会说话。",
      },
      {
        q: "你们服务哪些行业？",
        a: "餐饮、美容美发、健身、教育、宠物、零售等本地服务业，尤其擅长客单价 S$30 以上、靠到店成交的生意。",
      },
      {
        q: "只有一家小店、预算有限，适合找你们吗？",
        a: "适合。DISCOVER 单项 S$600/月起，先解决「被找到」这个最痛的问题；跑通之后再升级 BUILD 和 GROW，一步一步来。",
      },
    ],
  },
  cta: {
    tags: ["DISCOVER · 搜索可见", "BUILD · 构建门面", "GROW · 获得到客"],
    heading: "你的店很好，只是还没被找到。",
    description:
      "预约一次免费 30 分钟「Get Found」诊断：我们会当面告诉你，客户在 Google 和 AI 搜索里为什么找不到你，以及第一步该怎么改。",
    buttonText: "预约免费诊断",
    buttonHref: "mailto:hello@foundly.sg?subject=Get%20Found%20诊断预约",
    email: "hello@foundly.sg",
    backgroundImage: "/images/cta-bg.jpg",
  },
  footer: {
    logo: "foundly",
    description:
      "Foundly — Local Growth Studio. Helping local businesses get found. 让新加坡实体店被找到、被看见、获得到客。",
    columns: [
      {
        title: "服务体系",
        links: [
          { label: "DISCOVER · SEO·GEO", href: "#services" },
          { label: "BUILD · 品牌网站", href: "#services" },
          { label: "GROW · 社媒获客", href: "#services" },
        ],
      },
      {
        title: "公司",
        links: [
          { label: "关于我们", href: "#about" },
          { label: "定价", href: "#pricing" },
          { label: "客户案例", href: "#portfolio" },
          { label: "常见问题", href: "#faq" },
        ],
      },
      {
        title: "联系",
        links: [
          { label: "预约免费诊断", href: "#contact" },
          { label: "hello@foundly.sg", href: "mailto:hello@foundly.sg" },
          { label: "WhatsApp +65 9000 0000", href: "#contact" },
        ],
      },
    ],
    socialLinks: [
      { iconName: "Instagram", href: "https://instagram.com/foundly.sg", label: "Instagram" },
      { iconName: "Facebook", href: "https://facebook.com/foundly.sg", label: "Facebook" },
    ],
    newsletterHeading: "订阅《Get Found 周报》",
    newsletterDescription:
      "每周一封：本地搜索排名变化、AI 搜索获客案例、可以直接抄的作业。",
    newsletterButtonText: "订阅",
    newsletterPlaceholder: "你的邮箱地址",
    copyright: "© 2026 Foundly Pte. Ltd. · 新加坡",
    credit: "Get Found. Get Customers.",
  },
};

/* ------------------------------------------------------------------ */
/* English                                                             */
/* ------------------------------------------------------------------ */

const en: Content = {
  site: {
    language: "en",
    title: "Foundly · Get Found. Get Customers. | Growth Studio for Singapore's Local Businesses",
    description:
      "Foundly is a Singapore growth studio helping local businesses get discovered and turn online visibility into real customers — with high-converting websites, local SEO & AI-search visibility, and social media that brings people through the door.",
  },
  navigation: {
    logo: "foundly",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "Success Stories", href: "#portfolio" },
      { label: "FAQ", href: "#faq" },
    ],
    contactLabel: "Get a Free Visibility Audit",
    contactHref: "#contact",
  },
  hero: {
    name: "foundly",
    roles: ["get found.", "get customers."],
    backgroundImage: "/images/hero-bg.jpg",
  },
  about: {
    label: "About",
    valueProp: "Great local businesses ",
    valuePropAccent: "deserve to be found.",
    lead: "",
    description:
      "If customers can't find you on Google, Maps, AI search or social media, they'll choose someone else. Foundly builds the digital presence local businesses need to get discovered, earn trust, and turn online attention into bookings, enquiries and foot traffic.",
    pillars: [
      {
        key: "build",
        name: "BUILD",
        scope: "Website & Brand Presence",
        desc: "A digital storefront that builds trust — your services, directions, real photography, reviews and one-tap WhatsApp bookings in one place.",
      },
      {
        key: "discover",
        name: "DISCOVER",
        scope: "SEO, Google Maps & AI Search",
        desc: "Show up when customers search on Google and Maps — and increase your chances of being mentioned by AI platforms like ChatGPT, Gemini and Perplexity.",
      },
      {
        key: "grow",
        name: "GROW",
        scope: "Social Media & Customer Acquisition",
        desc: "Reach more people in your area through Instagram, Facebook, TikTok and Rednote — and turn attention into enquiries, bookings and visits.",
      },
    ],
    experienceValue: "",
    experienceLabel: "",
    stats: [
      { value: "120+", label: "local businesses improved their Google Maps presence" },
      { value: "7 days", label: "to launch a conversion-ready website" },
      { value: "3.2×", label: "average uplift in online visibility and customer enquiries" },
    ],
    images: [
      { src: "/images/about-1.jpg", alt: "Foundly consultants reviewing numbers with a store owner" },
      { src: "/images/about-2.jpg", alt: "Singapore shophouse street" },
      { src: "/images/about-3.jpg", alt: "Social content for a local store on a phone" },
      { src: "/images/about-4.jpg", alt: "A smiling local store owner" },
    ],
  },
  services: {
    label: "The Foundly System",
    heading: "Build your presence. Get found. Grow your customer base.",
    headingParts: ["Build your presence.", " Get found.", " Grow your customer base."],
    services: [
      {
        iconName: "Palette",
        title: "BUILD · Build Your Presence",
        description:
          "We create a polished, mobile-first website that brings together everything customers need to choose you: your services, location, directions, photography, reviews and booking options.",
        image: "/images/service-2.jpg",
      },
      {
        iconName: "Search",
        title: "DISCOVER · Get Found",
        description:
          "We improve your visibility across Google Search, Google Maps and AI-powered discovery platforms — so when potential customers look for a business like yours, you have a better chance of being seen and chosen.",
        image: "/images/service-1.jpg",
      },
      {
        iconName: "TrendingUp",
        title: "GROW · Get Customers",
        description:
          "We plan and manage social content your audience actually wants to watch, supported by targeted local campaigns and clear conversion tracking — so attention turns into real customers.",
        image: "/images/service-3.jpg",
      },
    ],
  },
  portfolio: {
    label: "Success Stories",
    heading: "They got found — and grew from there.",
    description:
      "See how Singapore businesses have turned stronger online visibility into measurable enquiries, bookings and foot traffic.",
    projects: [
      {
        title: "Chinatown Specialty Coffee",
        category: "BUILD + DISCOVER · 3× more website bookings",
        year: "2026",
        image: "/images/portfolio-1.jpg",
        featured: true,
      },
      {
        title: "Orchard Skincare Clinic",
        category: "GROW · 400+ new customer enquiries per month",
        year: "2026",
        image: "/images/portfolio-2.jpg",
      },
      {
        title: "CBD Boutique Gym",
        category: "DISCOVER · reached the top three for high-intent local searches",
        year: "2025",
        image: "/images/portfolio-3.jpg",
      },
      {
        title: "Joo Chiat Lifestyle Store",
        category: "BUILD + GROW · 150% increase in online enquiries",
        year: "2025",
        image: "/images/portfolio-4.jpg",
      },
      {
        title: "Katong Pet Grooming",
        category: "The Full Foundly System · grew from 500 to 2,000 members in six months",
        year: "2025",
        image: "/images/portfolio-5.jpg",
      },
    ],
    cta: {
      label: "Next to get found",
      heading: "Your business could be next.",
      linkText: "Get Your Free Growth Plan",
      linkHref: "#contact",
    },
    viewAllLabel: "",
  },
  testimonials: {
    label: "Testimonials",
    heading: "What local business owners say",
    testimonials: [
      {
        quote:
          "We used to rely almost entirely on word of mouth. Now, customers regularly find us while searching for cafés around Chinatown — and our website bookings have tripled.",
        author: "A café owner",
        role: "Chinatown · Specialty coffee",
        company: "",
        image: "/images/testimonial-1.jpg",
        rating: 5,
      },
      {
        quote:
          "Foundly doesn't just post content for us. They focus on the number that matters: how many new customers we bring in. Our membership grew from 500 to 2,000 in six months, and the monthly reports make the results easy to understand.",
        author: "A pet grooming studio owner",
        role: "Joo Chiat · Pet care",
        company: "",
        image: "/images/testimonial-2.jpg",
        rating: 5,
      },
      {
        quote:
          "A customer recently told us they found us through ChatGPT. That would have sounded impossible a couple of years ago. Foundly helped us understand AI search early and build a presence around it.",
        author: "A boutique gym partner",
        role: "Singapore CBD",
        company: "",
        image: "/images/testimonial-3.jpg",
        rating: 5,
      },
    ],
  },
  faq: {
    label: "FAQ",
    heading: "Eight questions local business owners often ask",
    items: [
      {
        q: "How much does a business website cost, and how long does it take to launch?",
        a: "BUILD packages start from S$2,800, covering design, build, copywriting and a basic store shoot — live in as fast as 30 days. On a tighter budget? Start with a one-page site and expand anytime.",
      },
      {
        q: "What if I don't have a logo, professional photos or any marketing experience?",
        a: "That's completely normal — most of our clients start exactly there. BUILD includes core brand visuals and a real shoot of your store. You keep running the business; we build the digital storefront.",
      },
      {
        q: "What's included in your social media management service?",
        a: "GROW covers content planning, shooting, publishing, community replies and local paid campaigns — plus a monthly report: reach, engagement, enquiries and visits, all trackable.",
      },
      {
        q: "What is GEO, and how is it different from SEO?",
        a: "SEO improves how you appear in Google; GEO (Generative Engine Optimization) increases the chances of your business being mentioned in AI answers from ChatGPT, Gemini and Perplexity. More customers now ask AI 'what's good near me' — GEO helps them find you there.",
      },
      {
        q: "How long does it usually take to see results?",
        a: "Social usually gains traction in 4–8 weeks; SEO typically takes 3–6 months to build steady visibility. We don't promise magic — we show clear progress every month.",
      },
      {
        q: "Do I need to sign a long-term contract?",
        a: "No. Everything is month-to-month, and you can cancel anytime. Most clients stay because the monthly reports speak for themselves.",
      },
      {
        q: "What types of businesses do you work with?",
        a: "Cafés, clinics, salons, gyms, studios, pet services and independent retailers — local businesses that close sales in person, ideally with an average ticket above S$30.",
      },
      {
        q: "Is Foundly suitable for a single-location business with a limited budget?",
        a: "Yes. DISCOVER starts from S$600/month — fix 'being found' first, then add BUILD and GROW as it pays off, step by step.",
      },
    ],
  },
  cta: {
    tags: ["BUILD · Build Your Presence", "DISCOVER · Get Found", "GROW · Get Customers"],
    heading: "Your business is already worth discovering. Let's make sure customers can find it.",
    description:
      "Book a free 30-minute visibility audit. We'll show you how your business currently appears across Google, Maps and AI search, where potential customers may be dropping off, and what to improve first.",
    buttonText: "Get Your Free Visibility Audit",
    buttonHref: "mailto:hello@foundly.sg?subject=Free%20Visibility%20Audit",
    email: "hello@foundly.sg",
    backgroundImage: "/images/cta-bg.jpg",
  },
  footer: {
    logo: "foundly",
    description:
      "Foundly is a Singapore growth studio helping local businesses build a stronger digital presence, get discovered, and turn online visibility into real customers.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "DISCOVER · Local SEO & AI Search", href: "#services" },
          { label: "BUILD · Websites & Brand Presence", href: "#services" },
          { label: "GROW · Social Media & Acquisition", href: "#services" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Pricing", href: "#pricing" },
          { label: "Success Stories", href: "#portfolio" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Get in touch",
        links: [
          { label: "Book a free visibility audit", href: "#contact" },
          { label: "hello@foundly.sg", href: "mailto:hello@foundly.sg" },
          { label: "WhatsApp +65 9000 0000", href: "#contact" },
        ],
      },
    ],
    socialLinks: [
      { iconName: "Instagram", href: "https://instagram.com/foundly.sg", label: "Instagram" },
      { iconName: "Facebook", href: "https://facebook.com/foundly.sg", label: "Facebook" },
    ],
    newsletterHeading: "The Get Found Weekly",
    newsletterDescription:
      "One practical email a week covering local search updates, AI-discovery opportunities and customer-acquisition ideas you can put to work.",
    newsletterButtonText: "Subscribe",
    newsletterPlaceholder: "Email address",
    copyright: "© 2026 Foundly Pte. Ltd. · Singapore",
    credit: "Get Found. Get Customers.",
  },
};

export const content: Record<"zh" | "en", Content> = { zh, en };
