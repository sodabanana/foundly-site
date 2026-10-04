// FOUNDLY — Pricing content (zh / en)
// Structure reference: canlah.ai/pricing (SG SEO/GEO market: S$840–S$4,200/mo)

export interface PricingPlan {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export interface PricingGroup {
  key: string;
  name: string;
  subtitle: string;
  plans: PricingPlan[];
  footnote: string;
}

export interface GrowGroup {
  key: string;
  name: string;
  subtitle: string;
  points: string[];
  note: string;
}

export interface PricingLabels {
  label: string;
  heading: string;
  description: string;
  popularBadge: string;
  requestOffer: string;
  requestTitle: string;
  requestDesc: string;
  formName: string;
  formContact: string;
  formStore: string;
  formMessage: string;
  formSubmit: string;
  formRequired: string;
  formSuccess: string;
  closeLabel: string;
}

export interface PricingConfig {
  labels: PricingLabels;
  found: PricingGroup;
  look: PricingGroup;
  grow: GrowGroup;
}

/* ------------------------------------------------------------------ */
/* 中文                                                                */
/* ------------------------------------------------------------------ */

const zh: PricingConfig = {
  labels: {
    label: "Pricing · 定价",
    heading: "透明的价格，按月付，随时可停",
    description:
      "参考新加坡市场行情（SEO / GEO 月费约 S$840–S$4,200），我们把每一档包含什么写清楚。GROW 因店而异，欢迎索取报价。",
    popularBadge: "最受欢迎",
    requestOffer: "索取报价",
    requestTitle: "索取 GROW 获客方案报价",
    requestDesc:
      "留下你的信息和目标，我们会在 24 小时内回复一份为你店定制的 GROW 方案与报价。",
    formName: "你的名字",
    formContact: "手机或邮箱",
    formStore: "店名与行业（选填）",
    formMessage: "留言：想实现什么目标？",
    formSubmit: "提交留言",
    formRequired: "请至少填写姓名、联系方式和留言。",
    formSuccess:
      "已为你打开邮件应用发送留言；如果没有自动打开，请直接发邮件至 hello@foundly.sg 或 WhatsApp +65 9000 0000。",
    closeLabel: "关闭",
  },
  found: {
    key: "found",
    name: "FOUND · 被找到",
    subtitle: "SEO + GEO · 月费制",
    plans: [
      {
        name: "Starter 起步",
        price: "S$840",
        unit: "/月",
        description: "适合：还没被 Google 好好找到的新店",
        features: [
          "Google 商家资料 + 地图优化",
          "5 个本地关键词排名追踪",
          "官网基础 SEO 修复",
          "每月排名与曝光报表",
        ],
        cta: "从 Starter 开始",
      },
      {
        name: "Growth 增长",
        price: "S$1,680",
        unit: "/月",
        description: "适合：想稳定冲上 Google 前三页的店",
        features: [
          "包含 Starter 全部内容",
          "10 个关键词 + 竞品对比追踪",
          "每月 4 篇 AI 友好型内容",
          "AI 搜索监测（ChatGPT / Gemini / AI Overviews）",
          "顾客评价管理与回复",
        ],
        cta: "选择 Growth",
        featured: true,
      },
      {
        name: "Dominate 领先",
        price: "S$2,980",
        unit: "/月",
        description: "适合：要在整个品类里当第一的店",
        features: [
          "包含 Growth 全部内容",
          "20 组买家意图 AI 问答监测",
          "每月 8 篇内容 + 1 个转化落地页",
          "每季度 2–3 个权威媒体引用",
          "GEO 专项：让 AI 回答主动提到你",
        ],
        cta: "选择 Dominate",
      },
    ],
    footnote:
      "所有档位含免费 48 小时「被找到」快照：先看看 Google 和 AI 现在怎么回答你的品类，再决定档位。",
  },
  look: {
    key: "look",
    name: "LOOK · 有门面",
    subtitle: "品牌网站 · 一次性交付",
    plans: [
      {
        name: "One-Page 单页官网",
        price: "S$1,800",
        unit: "一次性",
        description: "适合：预算紧、先要一个像样的线上门面",
        features: [
          "单页品牌官网（移动端优先）",
          "服务项目 + 地址导航 + 真实门店图",
          "WhatsApp 一键预约按钮",
          "基础 SEO 设置",
          "7 天交付",
        ],
        cta: "选择 One-Page",
      },
      {
        name: "Brand Site 品牌网站",
        price: "S$2,800",
        unit: "一次性",
        description: "适合：大多数实体店的标准配置",
        features: [
          "最多 6 页（服务 / 菜单 / 评价 / 预约）",
          "专业文案撰写（中英可选）",
          "2 小时门店实拍",
          "顾客评价展示 + 预约表单",
          "30 天交付，含 30 天免费修改",
        ],
        cta: "选择 Brand Site",
        featured: true,
      },
      {
        name: "Flagship 旗舰定制",
        price: "S$4,800",
        unit: "起 · 一次性",
        description: "适合：连锁、多门店或有电商需求的店",
        features: [
          "包含 Brand Site 全部内容",
          "中英双语版本",
          "在线订座 / 电商 / 会员系统",
          "完整品牌视觉包（logo / 色卡 / 模板）",
          "45 天交付 + 30 天陪跑",
        ],
        cta: "选择 Flagship",
      },
    ],
    footnote: "所有网站套餐含首年域名与托管，第二年起托管 S$240/年。",
  },
  grow: {
    key: "grow",
    name: "GROW · 获得到客",
    subtitle: "社媒运营 + 获客 · 定制报价",
    points: [
      "IG / FB / TikTok / 小红书 内容策划与代运营",
      "本地精准投流（广告费另计，透明对账）",
      "每月获客报表：曝光 → 咨询 → 到店，全链路可追踪",
    ],
    note: "每家店的目标客群、内容形式与投流预算差异很大，我们不设标准套餐——留下你的情况，24 小时内给你一份定制方案和报价。",
  },
};

/* ------------------------------------------------------------------ */
/* English                                                             */
/* ------------------------------------------------------------------ */

const en: PricingConfig = {
  labels: {
    label: "Pricing",
    heading: "Transparent pricing. Monthly. Cancel anytime.",
    description:
      "Benchmarked against the Singapore market (SEO / GEO retainers run ~S$840–S$4,200/mo), every tier lists exactly what's included. GROW is quoted per store.",
    popularBadge: "Most popular",
    requestOffer: "Request Offer",
    requestTitle: "Request a GROW growth plan",
    requestDesc:
      "Leave your details and goals — we'll reply within 24 hours with a GROW plan and quote tailored to your store.",
    formName: "Your name",
    formContact: "Phone or email",
    formStore: "Store & industry (optional)",
    formMessage: "Message: what do you want to achieve?",
    formSubmit: "Send message",
    formRequired: "Please fill in at least your name, contact and message.",
    formSuccess:
      "Your email app should have opened with the message ready to send. If not, email hello@foundly.sg or WhatsApp +65 9000 0000.",
    closeLabel: "Close",
  },
  found: {
    key: "found",
    name: "FOUND · Get Found",
    subtitle: "SEO + GEO · Monthly retainer",
    plans: [
      {
        name: "Starter",
        price: "S$840",
        unit: "/mo",
        description: "For: new stores Google barely knows yet",
        features: [
          "Google Business Profile + Maps optimization",
          "5 local keywords tracked",
          "On-page SEO fixes",
          "Monthly ranking & visibility report",
        ],
        cta: "Start with Starter",
      },
      {
        name: "Growth",
        price: "S$1,680",
        unit: "/mo",
        description: "For: stores chasing a consistent page-one spot",
        features: [
          "Everything in Starter",
          "10 keywords + competitor tracking",
          "4 AI-friendly articles per month",
          "AI search monitoring (ChatGPT / Gemini / AI Overviews)",
          "Review management & replies",
        ],
        cta: "Choose Growth",
        featured: true,
      },
      {
        name: "Dominate",
        price: "S$2,980",
        unit: "/mo",
        description: "For: stores that want to own their category",
        features: [
          "Everything in Growth",
          "20 buyer-intent AI answer probes",
          "8 articles + 1 conversion landing page / mo",
          "2–3 authority placements per quarter",
          "Dedicated GEO: get named in AI answers",
        ],
        cta: "Choose Dominate",
      },
    ],
    footnote:
      "Every tier includes a free 48-hour Get Found snapshot: see how Google and AI currently answer your category before picking a tier.",
  },
  look: {
    key: "look",
    name: "LOOK · Look Great",
    subtitle: "Brand websites · One-time",
    plans: [
      {
        name: "One-Page",
        price: "S$1,800",
        unit: "one-time",
        description: "For: tight budgets that still need a real storefront",
        features: [
          "One-page brand site (mobile-first)",
          "Services + directions + real store photos",
          "One-tap WhatsApp booking button",
          "Essential SEO setup",
          "Delivered in 7 days",
        ],
        cta: "Choose One-Page",
      },
      {
        name: "Brand Site",
        price: "S$2,800",
        unit: "one-time",
        description: "For: most physical stores — the standard package",
        features: [
          "Up to 6 pages (services / menu / reviews / booking)",
          "Professional copywriting (EN/ZH options)",
          "2-hour on-site photo shoot",
          "Review wall + booking form",
          "30-day delivery incl. 30 days of free revisions",
        ],
        cta: "Choose Brand Site",
        featured: true,
      },
      {
        name: "Flagship",
        price: "S$4,800",
        unit: "from · one-time",
        description: "For: chains, multi-outlet and e-commerce needs",
        features: [
          "Everything in Brand Site",
          "Bilingual EN/ZH versions",
          "Reservations / e-commerce / membership system",
          "Full brand visual kit (logo / palette / templates)",
          "45-day delivery + 30-day launch support",
        ],
        cta: "Choose Flagship",
      },
    ],
    footnote: "All website packages include the first year of domain & hosting; hosting is S$240/yr from year two.",
  },
  grow: {
    key: "grow",
    name: "GROW · Get Customers",
    subtitle: "Social media + customer acquisition · Custom quote",
    points: [
      "IG / FB / TikTok / Xiaohongshu content & management",
      "Hyper-local paid ads (ad spend billed separately, fully transparent)",
      "Monthly acquisition report: reach → enquiries → walk-ins, fully tracked",
    ],
    note: "Every store's audience, content style and ad budget differ too much for a standard package — tell us your situation and we'll send a tailored plan and quote within 24 hours.",
  },
};

export const pricingContent: Record<"zh" | "en", PricingConfig> = { zh, en };
