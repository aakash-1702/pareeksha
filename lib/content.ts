/* ============================================================
   CONTENT — all copy, captions, FAQs, testimonials, nav links
   ============================================================ */

// ---- Navigation ----
export const NAV_LINKS = [
  { label: "Domains", href: "#domains" },
  { label: "Rounds", href: "#rounds" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Templates", href: "#templates", badge: "New" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
] as const;

export const NAV_CTA = { label: "Start hiring", href: "#start" } as const;
export const ANNOUNCEMENT = "New: CA practical rounds and rubric scoring for MBA cases →";
export const ROLE_TICKER = ["Software engineer", "Chartered accountant", "Brand manager", "Product analyst", "Audit associate", "Performance marketer", "Management trainee", "Data analyst", "Content strategist", "Finance executive", "SDR", "Operations lead"] as const;
export const V3_HERO = { eyebrow: "pareeksha, noun: a test", headlineStart: "Test the ", headlineHighlight: "work", headlineEnd: ", not the résumé.", lead: "Assessments, interviews and a candidate CRM for tech, MBA, CA and marketing roles. Built for small teams that hire a few people well.", primary: "Start free", secondary: "Watch a 2-minute tour", freeLine: "Free for your first hiring drive · No card needed", stat: "Used in 1,200+ hiring drives across 4 domains", sticker: "Free first drive", calloutOne: "checked in 2 seconds", calloutTwo: "scored against your rubric", domains: ["Tech", "MBA", "CA", "Marketing"] } as const;
export const DOMAIN_DEMO = { title: "Pareeksha · Assessment", saved: "Auto-saved", tech: { title: "Two Sum", statement: "Return the indices of two values that add up to target.", constraints: ["2 ≤ nums.length ≤ 10⁴", "One valid answer exists"], example: "[2, 7, 11, 15], target = 9 → [0, 1]" }, mba: { title: "Regional dairy case", statement: "Sales fell 12% quarter on quarter. Margins are thin and a competitor is discounting.", prompts: ["Situation", "Analysis", "Recommendation"] }, ca: { title: "Reconciliation", rows: ["01 Apr · GST input · ₹12,480", "03 Apr · TDS payable · ₹8,600", "05 Apr · Bank charges · ₹1,240"] }, marketing: { title: "Cold-brew subscription", statement: "Launch a ₹499 office subscription for cold-brew coffee.", prompts: ["Hook", "Clarity", "CTA"] } } as const;

// ---- Hero ----
export const HERO = {
  announcement: {
    prefix: "Changelog",
    text: "AI interview rounds are live",
  },
  headline: "The hiring stack for small teams.",
  lead: "Assessments, coding rounds, AI interviews and a built-in candidate CRM. Everything a small company needs to hire well, in one place.",
  primaryCta: { label: "Start free", href: "#start" },
  secondaryCta: { label: "Book a demo", href: "#demo" },
  // SAMPLE: replace with real data
  socialProof: {
    avatarCount: 8,
    rating: 5,
    text: "Trusted by 500+ hiring teams",
  },
  guarantee: "Free for your first hiring drive. No credit card.",
} as const;

export const HERO_FLOATING_EVENTS = [
  {
    id: "coding",
    title: "Aarav cleared the coding round",
    chip: "Passed 100%",
  },
  {
    id: "ai-interview",
    title: "AI interview scored 86 / 100",
    scoreVal: 86,
  },
  {
    id: "shortlist",
    title: "12 candidates shortlisted",
    subtext: "Design & Engineering",
  },
  {
    id: "whatsapp",
    title: "Invite sent via WhatsApp",
    status: "Delivered",
  },
] as const;

// ---- Trust Strip ----
export const TRUST_STRIP = {
  eyebrow: "Teams hiring with Pareeksha",
  // SAMPLE: replace with real customers
  logos: [
    "Acme Corp",
    "Vertex Labs",
    "Nova Systems",
    "Pixel Works",
    "Bright Edge",
    "Cloud Nine",
    "Mint Stack",
    "Forge Dev",
    "Code Craft",
    "Data Pulse",
  ],
  // SAMPLE: replace with real data
  stats: [
    { label: "Round types", value: "12+" },
    { label: "Question formats", value: "40+" },
    { label: "Free rounds per drive", value: "2" },
    { label: "Setup time", value: "10 min" },
  ],
} as const;

// Legacy section data retained until phases B and C replace these sections.
export const SHOWCASE_CAPTIONS = ["Assess", "Code", "Interview", "Score", "Pipeline", "Notify", "Review", "Decide", "Invite", "Compare", "Shortlist", "Offer", "Questions", "Rules", "Signals", "Reports", "Schedule", "Screen", "Review", "Feedback", "Decide", "Onboard", "Track", "Hire"] as const;
export const CATALOGUE_MODULES = { eyebrow: "Platform", badge: "All in one", headline: "Built for hiring teams.", lead: "The tools your team needs.", browseLink: { label: "Explore", href: "#platform" }, items: [{ title: "Assessments", description: "Structured rounds." }, { title: "Coding", description: "Practical evaluation." }, { title: "AI interviews", description: "Consistent conversations." }, { title: "Question bank", description: "Reusable prompts." }, { title: "Pipeline", description: "Candidate context." }, { title: "Notifications", description: "Clear updates." }] } as const;
export const CATALOGUE_ROUNDS = { badge: "Rounds", headline: "Choose a round.", lead: "Start with a proven format.", browseLink: { label: "Browse", href: "#rounds" }, items: [{ title: "MCQ", count: "12 rounds" }, { title: "Coding", count: "10 rounds" }, { title: "Interview", count: "8 rounds" }] } as const;
export const CATALOGUE_TEMPLATES = { badge: "Templates", headline: "Start quickly.", lead: "Ready-made hiring flows.", items: [{ title: "Campus", description: "A complete campus drive.", previewLink: "#templates" }, { title: "Engineering", description: "A technical hiring flow.", previewLink: "#templates" }] } as const;
export const CATALOGUE_ROLES = { badge: "Roles", headline: "Match the role.", lead: "Structured flows for your team.", items: [{ title: "Engineering", description: "Technical assessment flow.", stages: ["Assess", "Interview"], secondaryCta: { label: "View", href: "#platform" }, primaryCta: { label: "Start", href: "#start" } }, { title: "Operations", description: "Structured screening flow.", stages: ["Screen", "Review"], secondaryCta: { label: "View", href: "#platform" }, primaryCta: { label: "Start", href: "#start" } }] } as const;
export const INTEGRATIONS = { headline: "Fits your workflow.", lead: "Connect the tools you use.", cta: { label: "View integrations", href: "#docs" }, stats: [{ value: "8", suffix: "+", label: "connections" }], tools: [{ name: "Calendar", icon: "calendar" }, { name: "Slack", icon: "slack" }, { name: "WhatsApp", icon: "whatsapp" }] } as const;
export const VIDEOS = { headline: "See it in action.", items: [{ title: "Candidate experience", duration: "1 min" }, { title: "Hiring workflow", duration: "2 min" }] } as const;

// ---- Round Library ----
export const ROUND_LIBRARY = {
  eyebrow: "Round library",
  headline: "Every round a small team needs.",
  lead: "Pre-built rounds covering every stage of your hiring pipeline.",
  count: "48 ready-made rounds", // SAMPLE: replace with real data
  browseLink: { label: "Browse all rounds →", href: "#rounds-all" },
  categories: ["All", "MCQ", "Coding", "SQL", "System design", "AI interview", "HR"] as const,
  items: [
    { title: "Aptitude screen", description: "Logical reasoning, verbal ability and quantitative aptitude in one timed test.", category: "MCQ", difficulty: "Easy", duration: "30 min", questions: 40, free: true },
    { title: "Core CS MCQs", description: "Operating systems, networking, DBMS and data structures fundamentals.", category: "MCQ", difficulty: "Medium", duration: "45 min", questions: 50, free: false },
    { title: "DSA coding round", description: "Two algorithm problems with automated test cases and time complexity checks.", category: "Coding", difficulty: "Medium", duration: "60 min", questions: 2, free: true },
    { title: "SQL query challenge", description: "Write and optimize queries across normalized schemas with graded output.", category: "SQL", difficulty: "Medium", duration: "45 min", questions: 8, free: false },
    { title: "Debugging with AI helper", description: "Find and fix bugs in a codebase with an AI assistant monitoring your approach.", category: "Coding", difficulty: "Hard", duration: "40 min", questions: 3, free: false },
    { title: "Frontend build task", description: "Build a responsive component from a design spec in a sandboxed environment.", category: "Coding", difficulty: "Medium", duration: "90 min", questions: 1, free: true },
    { title: "System design discussion", description: "Whiteboard a scalable architecture with structured follow-up prompts.", category: "System design", difficulty: "Hard", duration: "45 min", questions: 1, free: false },
    { title: "AI behavioral interview", description: "Conversational AI asks situational and behavioral questions with rubric scoring.", category: "AI interview", difficulty: "Medium", duration: "30 min", questions: 12, free: false },
    { title: "Case study", description: "Analyze a business scenario and present a structured recommendation.", category: "HR", difficulty: "Medium", duration: "60 min", questions: 1, free: false },
    { title: "Group discussion", description: "Multi-candidate video session with AI moderation and individual scoring.", category: "HR", difficulty: "Medium", duration: "45 min", questions: 1, free: true },
    { title: "HR screening", description: "Structured interview covering culture fit, expectations and availability.", category: "HR", difficulty: "Easy", duration: "20 min", questions: 8, free: false },
    { title: "Offer and onboarding", description: "Automated offer letter generation with e-signature and onboarding checklist.", category: "HR", difficulty: "Easy", duration: "10 min", questions: 0, free: false },
  ],
} as const;

// ---- How It Works ----
export const HOW_IT_WORKS = {
  headline: "From job post to offer in four steps.",
  steps: [
    {
      title: "Create the workflow",
      description: "Define stages, pick round types and set cutoff scores. Templates get you started in minutes.",
    },
    {
      title: "Invite candidates",
      description: "Share a link, send WhatsApp invites or import a CSV. Candidates self-register and start.",
    },
    {
      title: "Assess and interview",
      description: "Automated assessments, proctored coding rounds and AI interviews run without your involvement.",
    },
    {
      title: "Decide with scorecards",
      description: "Compare candidates on a radar chart, review AI transcripts and make data-driven hiring calls.",
    },
  ],
} as const;

// ---- Workflow Funnel Demo ----
export const WORKFLOW_FUNNEL = {
  headline: "Set cutoffs once. Let the funnel run.",
  stages: [
    { label: "Online assessment", short: "S1", count: 500, cutoff: "60%" },
    { label: "Coding round", short: "S2", count: 200, cutoff: "70%" },
    { label: "AI debugging round", short: "S3", count: 60, cutoff: "75%" },
    { label: "System design", short: "S4", count: 20, cutoff: "80%" },
    { label: "Human interviews", short: "S5", count: 5, cutoff: "" },
  ],
  prompt: "Start with a moderate DP question", // SAMPLE: replace with real data
} as const;

// ---- Feature Bento (Flow Collage) ----
export const FLOW_COLLAGE = {
  headline: "Build your hiring flow in minutes.",
  lead: "Drag, drop and configure. From job posting to offer letter, every step is built in.",
  tiles: {
    a: {
      title: "AI Interviewer",
      description: "Waveform, transcript and structured scoring in real time.",
    },
    b: {
      title: "Proctoring Monitor",
      description: "Integrity signals across six camera and browser tiles.",
    },
    c: {
      title: "Scorecard",
      description: "Radar benchmarks and rubric grading per candidate.",
    },
    d: {
      title: "Hiring Funnel Analytics",
      description: "Conversion rates and stage-by-stage drop-off metrics.",
    },
    e: {
      title: "Question Bank",
      description: "Tag, filter and reuse questions across all assessments.",
    },
    f: {
      title: "Automated Scheduler",
      description: "Self-serve calendar booking synced with team availability.",
    },
    g: {
      title: "Multi-Channel Alerts",
      description: "Instant candidate notifications via WhatsApp and email.",
    },
  },
} as const;

// ---- Templates ----
export const TEMPLATES = {
  headline: "Start from a template.",
  items: [
    {
      title: "Campus drive",
      description: "End-to-end campus recruitment with aptitude tests, coding rounds and group discussions.",
      chips: ["6 rounds", "45 min avg"],
      previewLink: "#campus-preview",
    },
    {
      title: "Software engineer",
      description: "Technical assessments, live coding, system design and AI interview rounds.",
      chips: ["5 rounds", "60 min avg"],
      previewLink: "#swe-preview",
    },
    {
      title: "Sales and support",
      description: "Role-play scenarios, communication assessments and personality evaluations.",
      chips: ["4 rounds", "30 min avg"],
      previewLink: "#sales-preview",
    },
  ],
} as const;

// ---- Pricing ----
// SAMPLE: replace with real pricing
export const PRICING = {
  headline: "Simple, transparent pricing.",
  tiers: [
    {
      name: "Free",
      description: "Your first hiring drive, on us.",
      monthlyPrice: "$0",
      annualPrice: "$0",
      highlight: false,
      badge: null,
      cta: { label: "Start free", href: "#start" },
      features: [
        "1 hiring drive",
        "2 rounds",
        "50 candidates",
        "Basic analytics",
        "Email notifications",
      ],
    },
    {
      name: "Team",
      description: "Everything for growing teams.",
      monthlyPrice: "$49",
      annualPrice: "$39",
      highlight: true,
      badge: "Most popular",
      cta: { label: "Start free trial", href: "#start" },
      features: [
        "Unlimited hiring drives",
        "Unlimited rounds",
        "AI interviews",
        "WhatsApp notifications",
        "Advanced analytics",
        "Priority support",
      ],
    },
    {
      name: "Scale",
      description: "Custom plans for larger orgs.",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      highlight: false,
      badge: null,
      cta: { label: "Contact sales", href: "#contact" },
      features: [
        "Everything in Team",
        "Custom integrations",
        "Dedicated onboarding",
        "SSO and audit logs",
        "SLA guarantee",
        "Volume discounts",
      ],
    },
  ],
} as const;

// ---- Testimonials ----
// SAMPLE: replace with real feedback
export const TESTIMONIALS = {
  headline: "Loved by small teams that hire.",
  items: [
    { name: "Arjun Mehta", handle: "@arjunm", initials: "AM", quote: "We replaced three different tools with Pareeksha. Setup took an afternoon and our first assessment was live by evening." },
    { name: "Priya Sharma", handle: "@priyash", initials: "PS", quote: "The AI interview round is a game changer. Candidates get a consistent experience and we get structured scores without scheduling overhead." },
    { name: "Rohan Gupta", handle: "@rohang", initials: "RG", quote: "Finally a hiring tool that does not assume we have a 50-person HR team. Clean, fast and exactly what we needed." },
    { name: "Sneha Patel", handle: "@snehap", initials: "SP", quote: "Our candidate pipeline went from a spreadsheet to a proper Kanban board. The automated notifications alone saved us hours every week." },
    { name: "Vikram Singh", handle: "@vikrams", initials: "VS", quote: "The coding round environment is surprisingly good. Candidates told us it felt like a real IDE, not a browser toy." },
    { name: "Ananya Reddy", handle: "@ananyar", initials: "AR", quote: "We run campus drives twice a year. The template for campus recruitment handles everything from registration to offer letters." },
    { name: "Karthik Nair", handle: "@karthikn", initials: "KN", quote: "Proctoring works without being invasive. We get integrity signals without making candidates feel like they are in a surveillance state." },
    { name: "Meera Iyer", handle: "@meerai", initials: "MI", quote: "The question bank is underrated. Being able to tag and reuse questions across assessments saves so much prep time." },
    { name: "Aditya Joshi", handle: "@adityaj", initials: "AJ", quote: "Webhooks and the REST API let us pipe candidate data straight into our internal systems. Integration took less than a day." },
    { name: "Divya Kapoor", handle: "@divyak", initials: "DK", quote: "We switched from a legacy ATS and the migration was painless. CSV import handled everything and the team was onboarded in an hour." },
    { name: "Rajesh Kumar", handle: "@rajeshk", initials: "RK", quote: "The assessment builder is intuitive. Non-technical hiring managers on our team create their own tests without asking engineering for help." },
    { name: "Nisha Verma", handle: "@nishav", initials: "NV", quote: "Small teams do not get enough love from enterprise hiring tools. Pareeksha actually understands our constraints and workflow." },
    { name: "Siddharth Rao", handle: "@siddharthr", initials: "SR", quote: "The notification templates with variable chips are brilliant. Personalized emails go out automatically at every stage." },
    { name: "Pooja Desai", handle: "@poojad", initials: "PD", quote: "We evaluated five platforms before choosing Pareeksha. It was the only one that did not try to upsell us features we would never use." },
    { name: "Amit Tiwari", handle: "@amitt", initials: "AT", quote: "Scheduling interviews used to be a coordination nightmare. The auto-scheduler with Google Calendar sync fixed that completely." },
    { name: "Lata Menon", handle: "@latam", initials: "LM", quote: "Having everything in one platform means fewer context switches. Our hiring velocity doubled in the first quarter." },
  ],
} as const;

// ---- FAQ ----
export const FAQ = {
  eyebrow: "FAQ",
  headline: "Frequently asked questions",
  lead: "Can't find what you're looking for? Reach out to us at",
  email: "support@pareeksha.com",
  items: [
    {
      question: "What does Pareeksha include?",
      answer: "Pareeksha is a complete hiring platform with online assessments, coding rounds, AI-powered interviews, a question bank, candidate pipeline management and automated notifications. Everything works together out of the box.",
    },
    {
      question: "Is there a free plan?",
      answer: "Yes. The free plan includes up to 50 candidates per month with access to all core features. No credit card required to start. Paid plans unlock higher limits and advanced features like AI interviews.",
    },
    {
      question: "How do assessments work?",
      answer: "You build assessments from our question bank or create your own. Set a time limit, configure proctoring and share a link with candidates. Results are scored automatically and appear on your pipeline board.",
    },
    {
      question: "How does proctoring work?",
      answer: "Our browser-based proctoring monitors tab switches, copy-paste activity and idle time. It provides integrity signals without requiring candidates to install software or share their screen.",
    },
    {
      question: "How do AI interviews work?",
      answer: "Candidates join a conversational AI session that asks role-specific questions, adapts based on their responses and generates a structured scorecard. You review the transcript and scores at your convenience.",
    },
    {
      question: "Is candidate data secure?",
      answer: "All data is encrypted in transit and at rest. We follow industry-standard security practices and conduct regular audits. Your candidate data is never shared with third parties or used for training.",
    },
    {
      question: "Which tools does it integrate with?",
      answer: "Pareeksha integrates with Google Calendar, Slack, WhatsApp, Gmail and Zapier. We also offer a REST API, webhooks and CSV import for custom workflows.",
    },
    {
      question: "How long does setup take?",
      answer: "Most teams are up and running within an hour. Import your existing questions via CSV, configure your pipeline stages and you are ready to send your first assessment.",
    },
    {
      question: "How do I get support?",
      answer: "We offer email support for all plans and priority support with dedicated onboarding for paid plans. Our documentation covers common workflows and our team typically responds within a few hours.",
    },
  ],
} as const;

// ---- Final CTA ----
export const FINAL_CTA = {
  headline: "Hire your next teammate this week.",
  lead: "Start with the free plan. No credit card, no sales call, no fourteen-day trial that expires before you finish evaluating.",
  primaryCta: { label: "Start free", href: "#start" },
  secondaryCta: { label: "Book a demo", href: "#demo" },
} as const;

// ---- Footer ----
export const FOOTER = {
  blurb: "Hiring, assessments and a candidate CRM for small teams.",
  builtBy: "Built by the Pareeksha team", // SAMPLE: replace with real data
  columns: [
    {
      title: "Product",
      links: [
        { label: "Platform", href: "#platform" },
        { label: "Pricing", href: "#pricing" },
        { label: "Changelog", href: "#changelog" },
        { label: "Docs", href: "#docs" },
      ],
    },
    {
      title: "Rounds",
      links: [
        { label: "MCQ", href: "#mcq" },
        { label: "Coding", href: "#coding" },
        { label: "AI interview", href: "#ai-interview" },
        { label: "Case study", href: "#case-study" },
      ],
    },
    {
      title: "Templates",
      links: [
        { label: "Campus drive", href: "#campus" },
        { label: "Software engineer", href: "#swe" },
        { label: "Sales and support", href: "#sales" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Careers", href: "#careers" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Popular",
      links: [
        { label: "Online test maker", href: "#test-maker" },
        { label: "Coding assessment", href: "#coding-assessment" },
        { label: "AI interview tool", href: "#ai-tool" },
        { label: "Hiring CRM", href: "#crm" },
      ],
    },
  ],
  legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
    { label: "Refunds", href: "#refunds" },
  ],
  copyright: "© 2026 Pareeksha. All rights reserved.",
} as const;
