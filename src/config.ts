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
  key: 'found' | 'look' | 'grow';
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
      "FOUNDLY 是新加坡本地增长工作室（Local Growth Studio）：FOUND（SEO·GEO 搜索可见）+ LOOK（品牌网站门面）+ GROW（社媒引流获客），帮实体店被找到、被看见、获得到客。",
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
    lead: "FOUNDLY 是一家扎根新加坡的 Local Growth Studio。",
    description: "三个服务，一套增长系统——按你店的阶段，可以只做一项，也可以三项一起跑。",
    pillars: [
      {
        key: "look",
        name: "LOOK",
        scope: "品牌网站门面",
        desc: "服务项目、地址导航、真实门店图、顾客评价——搜到你的人，3 秒内决定走进来。",
      },
      {
        key: "found",
        name: "FOUND",
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
    experienceValue: "120+",
    experienceLabel: "家实体店\n被找到",
    stats: [
      { value: "120+", label: "家本地实体店" },
      { value: "98%", label: "客户续约率" },
      { value: "30天", label: "品牌网站上线" },
      { value: "3.2x", label: "平均获客提升" },
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
    heading: "先有门面，再被找到，然后获得到客",
    headingParts: ["先有门面", "，再被找到", "，然后获得到客"],
    services: [
      {
        iconName: "Palette",
        title: "LOOK · 有门面",
        description:
          "Website + Brand Presence。为实体店打造品牌官网：服务项目、门店地址与导航、真实环境图、顾客评价、WhatsApp 一键预约——搜到你的人，3 秒内决定走进来。",
        image: "/images/service-2.jpg",
      },
      {
        iconName: "Search",
        title: "FOUND · 被找到",
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
        category: "FOUND + LOOK · 官网预约增长 3 倍",
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
        category: "FOUND · “gym near me” 稳定前三",
        year: "2025",
        image: "/images/portfolio-3.jpg",
      },
      {
        title: "如切生活选物店",
        category: "LOOK + GROW · 线上咨询 +150%",
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
        author: "陈志明",
        role: "创始人",
        company: "牛车水手冲咖啡馆",
        image: "/images/testimonial-1.jpg",
        rating: 5,
      },
      {
        quote:
          "FOUNDLY 不只是帮我们发帖，他们管的是‘这个月多少个新客到店’。半年下来，会员从 500 涨到 2,000，报表每个月都清清楚楚。",
        author: "Siti Rahman",
        role: "主理人",
        company: "如切宠物美容店",
        image: "/images/testimonial-2.jpg",
        rating: 5,
      },
      {
        quote:
          "现在 AI 搜索里终于能搜到我们了。有顾客说是 ChatGPT 推荐来的——这在两年前完全不敢想。GEO 这块他们确实是新加坡第一批做的。",
        author: "Arvind Kumar",
        role: "合伙人",
        company: "CBD 精品健身房",
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
        a: "LOOK 套餐 S$2,800 起，包含设计、搭建、文案与基础门店拍摄，最快 30 天上线；预算紧张可以先从单页官网做起，之后随时扩展。",
      },
      {
        q: "我完全不懂线上，没有 logo 和图片怎么办？",
        a: "完全正常，大多数客户一开始都这样。LOOK 包含基础品牌视觉与真实门店拍摄，你只管开门做生意，门面交给我们。",
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
        a: "适合。FOUND 单项 S$600/月起，先解决「被找到」这个最痛的问题；跑通之后再升级 LOOK 和 GROW，一步一步来。",
      },
    ],
  },
  cta: {
    tags: ["FOUND · 被找到", "LOOK · 有门面", "GROW · 获得到客"],
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
      "Foundly — Local Growth Studio. Helping local businesses get FOUND. 让新加坡实体店被找到、被看见、获得到客。",
    columns: [
      {
        title: "服务体系",
        links: [
          { label: "FOUND · SEO·GEO", href: "#services" },
          { label: "LOOK · 品牌网站", href: "#services" },
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
      { iconName: "Linkedin", href: "https://linkedin.com/company/foundly-sg", label: "LinkedIn" },
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
    title: "FOUNDLY · Get Found. Get Customers. | Local Growth Studio, Singapore",
    description:
      "FOUNDLY is a Singapore Local Growth Studio: FOUND (SEO·GEO visibility) + LOOK (websites that sell) + GROW (social media & customer acquisition) — helping physical stores get found and get customers.",
  },
  navigation: {
    logo: "foundly",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "Use Cases", href: "#portfolio" },
      { label: "FAQ", href: "#faq" },
    ],
    contactLabel: "Book a Free Audit",
    contactHref: "#contact",
  },
  hero: {
    name: "foundly",
    roles: ["get found.", "get customers."],
    backgroundImage: "/images/hero-bg.jpg",
  },
  about: {
    label: "About",
    valueProp: "A great store that can't be searched or scrolled to ",
    valuePropAccent: "might as well not exist.",
    lead: "FOUNDLY is a Local Growth Studio rooted in Singapore.",
    description: "Three services, one growth system — start with one, or run all three together.",
    pillars: [
      {
        key: "look",
        name: "LOOK",
        scope: "Website & Brand Presence",
        desc: "Services, directions, real photos, reviews — visitors decide to walk in within 3 seconds.",
      },
      {
        key: "found",
        name: "FOUND",
        scope: "SEO·GEO Visibility",
        desc: "On page one of Google, named in AI answers like ChatGPT.",
      },
      {
        key: "grow",
        name: "GROW",
        scope: "Social & Customer Acquisition",
        desc: "Seen by locals on IG / TikTok / Xiaohongshu — exposure turned into foot traffic.",
      },
    ],
    experienceValue: "120+",
    experienceLabel: "local stores\nget found",
    stats: [
      { value: "120+", label: "Local stores served" },
      { value: "98%", label: "Client retention" },
      { value: "30 days", label: "Website launch" },
      { value: "3.2x", label: "Avg. acquisition lift" },
    ],
    images: [
      { src: "/images/about-1.jpg", alt: "Foundly consultants reviewing numbers with a store owner" },
      { src: "/images/about-2.jpg", alt: "Singapore shophouse street" },
      { src: "/images/about-3.jpg", alt: "Social content for a local store on a phone" },
      { src: "/images/about-4.jpg", alt: "A smiling local store owner" },
    ],
  },
  services: {
    label: "The FOUNDLY System",
    heading: "Look great. Get found. Get customers.",
    headingParts: ["Look great.", " Get found.", " Get customers."],
    services: [
      {
        iconName: "Palette",
        title: "LOOK · Look Great",
        description:
          "Website + Brand Presence. A brand website for your store: services, address & directions, real photos, customer reviews, one-tap WhatsApp booking — visitors decide to walk in within 3 seconds.",
        image: "/images/service-2.jpg",
      },
      {
        iconName: "Search",
        title: "FOUND · Get Found",
        description:
          "SEO + GEO + Local Search. Google rankings and Maps optimization, plus visibility across AI search — ChatGPT, Perplexity, Gemini. When customers search, you're on page one; when AI recommends, your store gets named.",
        image: "/images/service-1.jpg",
      },
      {
        iconName: "TrendingUp",
        title: "GROW · Get Customers",
        description:
          "Social Media + Customer Acquisition. Content planning and management for IG / FB / TikTok / Xiaohongshu, local ads and conversion tracking — content locals actually love, turning exposure into foot traffic.",
        image: "/images/service-3.jpg",
      },
    ],
  },
  portfolio: {
    label: "Use Cases",
    heading: "They got found. Then they got customers.",
    description:
      "Five typical Singapore stores — from getting found to getting customers. Every number is trackable; come verify them with us.",
    projects: [
      {
        title: "Chinatown Specialty Coffee",
        category: "FOUND + LOOK · 3x website bookings",
        year: "2026",
        image: "/images/portfolio-1.jpg",
        featured: true,
      },
      {
        title: "Orchard Skincare Clinic",
        category: "GROW · 400+ new walk-in enquiries monthly",
        year: "2026",
        image: "/images/portfolio-2.jpg",
      },
      {
        title: "CBD Boutique Gym",
        category: "FOUND · top 3 for “gym near me”",
        year: "2025",
        image: "/images/portfolio-3.jpg",
      },
      {
        title: "Joo Chiat Lifestyle Store",
        category: "LOOK + GROW · +150% online enquiries",
        year: "2025",
        image: "/images/portfolio-4.jpg",
      },
      {
        title: "Katong Pet Grooming",
        category: "Full FOUNDLY system · +2,000 members in 6 months",
        year: "2025",
        image: "/images/portfolio-5.jpg",
      },
    ],
    cta: {
      label: "Next to get found",
      heading: "Your store could be next",
      linkText: "Get a free growth plan",
      linkHref: "#contact",
    },
    viewAllLabel: "",
  },
  testimonials: {
    label: "Testimonials",
    heading: "What store owners say",
    testimonials: [
      {
        quote:
          "We used to rely on regulars' word of mouth. Now when people search ‘cafe near Chinatown’, we're first. Weekends have queues, and website bookings have tripled.",
        author: "Tan Zhi Ming",
        role: "Founder",
        company: "Chinatown Specialty Coffee",
        image: "/images/testimonial-1.jpg",
        rating: 5,
      },
      {
        quote:
          "FOUNDLY doesn't just post for us — they own ‘how many new customers walked in this month’. In six months our members grew from 500 to 2,000, and the monthly report shows everything.",
        author: "Siti Rahman",
        role: "Owner",
        company: "Katong Pet Grooming",
        image: "/images/testimonial-2.jpg",
        rating: 5,
      },
      {
        quote:
          "AI search finally finds us. A customer said ChatGPT recommended us — unimaginable two years ago. FOUNDLY was among the first in Singapore doing GEO.",
        author: "Arvind Kumar",
        role: "Partner",
        company: "CBD Boutique Gym",
        image: "/images/testimonial-3.jpg",
        rating: 5,
      },
    ],
  },
  faq: {
    label: "FAQ",
    heading: "8 questions every store owner asks",
    items: [
      {
        q: "How much does a brand website cost, and how long does it take?",
        a: "LOOK packages start from S$2,800, covering design, build, copywriting and a basic store shoot — live in as fast as 30 days. On a tighter budget? Start with a one-page site and expand anytime.",
      },
      {
        q: "I'm not online-savvy at all — no logo, no photos. What then?",
        a: "That's completely normal — most of our clients start exactly there. LOOK includes core brand visuals and a real shoot of your store. You keep running the shop; we build the storefront.",
      },
      {
        q: "What exactly does social media management include?",
        a: "GROW covers content planning, shooting, publishing, community replies and local ad spend — plus a monthly acquisition report: reach, engagement, enquiries and walk-ins, all trackable.",
      },
      {
        q: "What is GEO? How is it different from SEO?",
        a: "SEO gets you to the top of Google; GEO (Generative Engine Optimization) gets your store named in AI answers — ChatGPT, Perplexity, Gemini. More and more customers simply ask AI ‘what's good near me’ — GEO claims that brand-new acquisition channel.",
      },
      {
        q: "How long until we see results?",
        a: "Social usually gains traction in 4–8 weeks; SEO typically reaches page one in 3–6 months. We don't sell magic — we show visible progress every month.",
      },
      {
        q: "Do I need a long-term contract?",
        a: "No. Everything is month-to-month, cancellable anytime. 98% of clients renew — because the reports speak for themselves.",
      },
      {
        q: "Which industries do you serve?",
        a: "F&B, beauty, fitness, education, pet services, retail — local businesses that close sales in-store, ideally with an average ticket above S$30.",
      },
      {
        q: "I'm a single small shop on a budget — is this for me?",
        a: "Yes. FOUND starts from S$600/month — fix ‘being found’ first, then upgrade to LOOK and GROW as it pays off, step by step.",
      },
    ],
  },
  cta: {
    tags: ["FOUND · Get found", "LOOK · Look great", "GROW · Get customers"],
    heading: "Your store is great. It just hasn't been found yet.",
    description:
      "Book a free 30-minute Get Found audit: we'll show you exactly why customers can't find you on Google and AI search — and the first step to fix it.",
    buttonText: "Book a Free Audit",
    buttonHref: "mailto:hello@foundly.sg?subject=Get%20Found%20Audit",
    email: "hello@foundly.sg",
    backgroundImage: "/images/cta-bg.jpg",
  },
  footer: {
    logo: "foundly",
    description:
      "Foundly — Local Growth Studio. Helping local businesses get FOUND. Making sure Singapore's physical stores get found, get seen, and get customers.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "FOUND · SEO & GEO", href: "#services" },
          { label: "LOOK · Websites", href: "#services" },
          { label: "GROW · Social & Acquisition", href: "#services" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Pricing", href: "#pricing" },
          { label: "Use Cases", href: "#portfolio" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "Book a free audit", href: "#contact" },
          { label: "hello@foundly.sg", href: "mailto:hello@foundly.sg" },
          { label: "WhatsApp +65 9000 0000", href: "#contact" },
        ],
      },
    ],
    socialLinks: [
      { iconName: "Instagram", href: "https://instagram.com/foundly.sg", label: "Instagram" },
      { iconName: "Facebook", href: "https://facebook.com/foundly.sg", label: "Facebook" },
      { iconName: "Linkedin", href: "https://linkedin.com/company/foundly-sg", label: "LinkedIn" },
    ],
    newsletterHeading: "Subscribe to the Get Found Weekly",
    newsletterDescription:
      "One email a week: local ranking shifts, AI-search acquisition plays, tactics you can copy-paste.",
    newsletterButtonText: "Subscribe",
    newsletterPlaceholder: "Your email address",
    copyright: "© 2026 Foundly Pte. Ltd. · Singapore",
    credit: "Get Found. Get Customers.",
  },
};

export const content: Record<"zh" | "en", Content> = { zh, en };
