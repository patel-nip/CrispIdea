"use client";

import { useState, useMemo } from "react";
import { 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  X,
  Briefcase,
  Target,
  Activity,
  TrendingUp,
  Sparkles,
  User,
  Shield,
  Play,
  Quote,
  Clock,
  Compass,
  FileText
} from "lucide-react";



export default function WealthManagementPage() {
  // Navigation states
  const [researchOpen, setResearchOpen] = useState(false);

  // FAQ Accordion state
  const [faqState, setFaqState] = useState({
    q0: false,
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false
  });

  const toggleFaq = (key) => {
    setFaqState(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Contact Modal state
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [modalType, setModalType] = useState("Discovery Call"); // "Discovery Call" | "Gold Plan" | "Profit-Share Plan"
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", portfolioSize: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Trigger contact modal flow
  const handleOpenContact = (type) => {
    setModalType(type);
    setFormData({ name: "", email: "", phone: "", portfolioSize: "", message: `I am interested in scheduling a ${type} consultation.` });
    setFormSubmitted(false);
    setContactModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setContactModalOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  // 4 Small Why Cards
  const whyCards = [
    {
      num: "01",
      title: "Research-first DNA",
      desc: "Every recommendation traces back to primary research, not model portfolios."
    },
    {
      num: "02",
      title: "Direct, low-cost products",
      desc: "Save ~1% commission/year. 70% lower cost than typical PMS."
    },
    {
      num: "03",
      title: "Goal-based planning",
      desc: "Plans built around retirement, education, lifestyle — not benchmarks."
    },
    {
      num: "04",
      title: "Institutional access",
      desc: "Indian + US equities, MFs, ETFs, SGBs, debt, structured products, SIFs."
    }
  ];

  // 6 Complete Wealth Desk Services
  const services = [
    {
      title: "Goal-based planning",
      desc: "Retirement, education, lifestyle, philanthropy.",
      icon: <Target className="w-5 h-5 text-[#4A6B52]" />
    },
    {
      title: "Portfolio management",
      desc: "Across India + US equities, MFs, ETFs, SGBs, debt.",
      icon: <TrendingUp className="w-5 h-5 text-[#4A6B52]" />
    },
    {
      title: "Asset allocation",
      desc: "Disciplined, diversified, risk-calibrated mixes.",
      icon: <Shield className="w-5 h-5 text-[#4A6B52]" />
    },
    {
      title: "Structured products",
      desc: "F&O, MTF, pair trading and SIFs for qualified investors.",
      icon: <Briefcase className="w-5 h-5 text-[#4A6B52]" />
    },
    {
      title: "Advisory on PF, loans, insurance",
      desc: "Free advisory on emergency fund and protection.",
      icon: <Sparkles className="w-5 h-5 text-[#4A6B52]" />
    },
    {
      title: "AI-driven active alpha",
      desc: "Quant-supported strategies across global equities.",
      icon: <Activity className="w-5 h-5 text-[#4A6B52]" />
    }
  ];

  // 3 Investor Letters
  const letters = [
    {
      quarter: "Q1 2026",
      title: "Why discipline beats prediction",
      desc: "On positioning portfolios for an unpredictable rate cycle."
    },
    {
      quarter: "Q4 2025",
      title: "The case for direct over regular",
      desc: "How 1% in commission compounds against your retirement."
    },
    {
      quarter: "Q3 2025",
      title: "India + US: the barbell that works",
      desc: "Building a portfolio that earns in two currencies."
    }
  ];

  // 3 Voices Quote Cards
  const testimonials = [
    {
      quote: "The plan is simple, the reasoning is rigorous.",
      name: "Ravi K.",
      role: "Tech Executive · Bengaluru"
    },
    {
      quote: "First advisor who explained why, not just what.",
      name: "Priya M.",
      role: "Founder · Mumbai"
    },
    {
      quote: "Cross-border allocation finally feels coherent.",
      name: "Aman S.",
      role: "NRI · Singapore"
    }
  ];

  // 3 Advisor Team members
  const team = [
    {
      name: "Malay Shah",
      role: "Principal Advisor",
      desc: "20+ years in equities, advisory and family-office strategy."
    },
    {
      name: "Kedhar Krisshnan",
      role: "Senior Wealth Advisor",
      desc: "Cross-border portfolios, structured products, derivatives."
    },
    {
      name: "Chetan Parikh",
      role: "Investment Strategist",
      desc: "Allocation frameworks, macro positioning, risk overlays."
    }
  ];

  // 4 Insights articles
  const insights = [
    {
      category: "ASSET ALLOCATION",
      title: "The 60/40 is dead. Long live the 40/30/30.",
      readTime: "6 min read"
    },
    {
      category: "TAX",
      title: "Smart tax harvesting for HNI portfolios.",
      readTime: "4 min read"
    },
    {
      category: "US EQUITIES",
      title: "Building a USD-denominated retirement bucket.",
      readTime: "7 min read"
    },
    {
      category: "BEHAVIOUR",
      title: "Why your best returns come from doing nothing.",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F2922] font-sans selection:bg-[#4A6B52]/20 selection:text-[#1F2922]">
      
      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#4A6B52]/10 px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 select-none cursor-pointer">
            <div className="bg-[#1F2922] text-[#FAF8F5] w-8 h-8 rounded-lg flex items-center justify-center font-bold font-serif text-lg">
              C
            </div>
            <span className="font-sans font-bold text-lg tracking-tight text-[#1F2922]">CrispIdea</span>
          </a>

          {/* Center Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="/about" className="text-[#1F2922]/70 hover:text-[#1F2922] transition">About us</a>
            <a href="/insights" className="text-[#1F2922]/70 hover:text-[#1F2922] transition">Insights</a>
            <a href="/#pricing" className="text-[#1F2922]/70 hover:text-[#1F2922] transition">Pricing</a>
            
            {/* Research Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResearchOpen(true)}
              onMouseLeave={() => setResearchOpen(false)}
            >
              <div className="flex items-center gap-0.5 py-1.5">
                <a 
                  href="/research"
                  className="flex items-center gap-1.5 text-[#1F2922] hover:text-[#4A6B52] transition"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>Research</span>
                </a>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setResearchOpen(!researchOpen);
                  }}
                  className="p-0.5 text-[#1F2922]/70 hover:text-[#1F2922] transition cursor-pointer focus:outline-none"
                  aria-label="Toggle Research menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${researchOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {researchOpen && (
                <div className="absolute left-0 mt-1 w-64 rounded-xl bg-[#FAF8F5] border border-[#4A6B52]/15 shadow-xl p-2.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <a 
                    href="/equity-research" 
                    onClick={() => setResearchOpen(false)}
                    className="block px-4 py-2.5 rounded-lg hover:bg-[#E6EBE4] transition"
                  >
                    <div className="font-bold text-xs text-[#1F2922]">Equity Research</div>
                    <div className="text-[10px] text-[#1F2922]/60 mt-0.5 font-medium">Company reports &bull; 2,000+ stocks</div>
                  </a>
                  <a 
                    href="/thematic-research" 
                    onClick={() => setResearchOpen(false)}
                    className="block px-4 py-2.5 rounded-lg hover:bg-[#E6EBE4] transition mt-1"
                  >
                    <div className="font-bold text-xs text-[#1F2922]">Thematic Research</div>
                    <div className="text-[10px] text-[#1F2922]/60 mt-0.5 font-medium">Sector &amp; cross-industry themes</div>
                  </a>
                </div>
              )}
            </div>

            <a href="/wealth-management" className="flex items-center gap-1.5 text-[#4A6B52] font-semibold transition">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4A6B52]"></span>
              <span>Wealth Management</span>
            </a>
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-5">
            <a href="/#signin" className="text-sm font-medium text-[#1F2922]/70 hover:text-[#1F2922] transition">Sign in</a>
            <button 
              onClick={() => handleOpenContact("General Query")}
              className="bg-[#1F2922] text-[#FAF8F5] text-sm font-semibold py-2 px-5 rounded-full hover:bg-[#2A392F] transition duration-200 shadow-sm cursor-pointer"
            >
              Talk to us
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-grid">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#1F2922] text-[#FAF8F5] w-6 h-6 rounded-lg flex items-center justify-center font-bold font-serif text-sm">
                C
              </div>
              <span className="bg-[#1F2922]/5 border border-[#4A6B52]/15 rounded-full px-3 py-0.5 text-xs font-semibold text-[#1F2922]/80 uppercase tracking-wider block">
                Wealth Management
              </span>
            </div>

            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-3">
              DOES THIS SOUND FAMILIAR?
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-[#1F2922] leading-[1.08] mb-6">
              You're doing well.<br />But is your wealth<br />smartly <span className="text-[#4A6B52]">working</span> for<br />your family's future?
            </h1>

            <p className="text-base md:text-lg text-[#1F2922]/75 leading-relaxed max-w-2xl mb-8 font-medium">
              For India's ambitious professionals and HNIs juggling peak careers, growing families and goals that can't be left to chance — we bring the same research that powers institutional portfolios to yours.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button 
                onClick={() => handleOpenContact("Discovery Call")}
                className="bg-[#1F2922] text-[#FAF8F5] text-xs font-semibold py-3.5 px-6 rounded-full hover:bg-black transition duration-200 shadow-sm flex items-center gap-2 cursor-pointer font-sans"
              >
                Book a discovery call <ArrowUpRight className="w-4 h-4" />
              </button>
              <a 
                href="#pricing"
                className="bg-white border border-[#4A6B52]/20 text-[#1F2922] text-xs font-semibold py-3.5 px-6 rounded-full hover:bg-[#FAF8F5] transition duration-200 shadow-sm"
              >
                See pricing plans
              </a>
            </div>

            <div className="flex items-center gap-6 text-[10px] font-bold text-[#1F2922]/50 tracking-wider">
              <span>SEBI-registered RIA &bull; INA000019619</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B52]/30"></span>
              <span>Trusted by 1800+ across 18 countries</span>
            </div>
          </div>

          {/* Hero Right Content: 4 Cards and Green Quote */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full max-w-[500px] mx-auto">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-4 shadow-xs">
                <div className="bg-slate-100 w-8 h-8 rounded-lg flex items-center justify-center mb-3 text-[#1F2922]/60">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-[#1F2922] mb-1">Professionally successful</h4>
                <p className="text-[10px] text-[#1F2922]/60 leading-relaxed font-semibold">Earning well, leading teams, navigating demanding careers.</p>
              </div>
              {/* Card 2 */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-4 shadow-xs">
                <div className="bg-slate-100 w-8 h-8 rounded-lg flex items-center justify-center mb-3 text-[#1F2922]/60">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-[#1F2922] mb-1">Ambitious family goals</h4>
                <p className="text-[10px] text-[#1F2922]/60 leading-relaxed font-semibold">International education, a bigger home, early retirement.</p>
              </div>
              {/* Card 3 */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-4 shadow-xs">
                <div className="bg-slate-100 w-8 h-8 rounded-lg flex items-center justify-center mb-3 text-[#1F2922]/60">
                  <Activity className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-[#1F2922] mb-1">Time constrained</h4>
                <p className="text-[10px] text-[#1F2922]/60 leading-relaxed font-semibold">Demanding careers leave little time for deep financial management.</p>
              </div>
              {/* Card 4 */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-4 shadow-xs">
                <div className="bg-slate-100 w-8 h-8 rounded-lg flex items-center justify-center mb-3 text-[#1F2922]/60">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-[#1F2922] mb-1">Accumulating wealth</h4>
                <p className="text-[10px] text-[#1F2922]/60 leading-relaxed font-semibold">Yet unsure if it's optimised for growth and security.</p>
              </div>
            </div>

            {/* Dark green Highlight Quote */}
            <div className="bg-[#0A2417] text-white rounded-2xl p-5 shadow-md flex gap-4 items-start border border-emerald-900/30">
              <Quote className="w-6 h-6 text-[#4A6B52] shrink-0 transform rotate-180" />
              <p className="font-serif italic text-xs leading-relaxed font-medium">
                "We are doing well — but is our wealth smartly working for our family's future?"
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* VALUE BULLET BANNER */}
      <section className="py-4.5 bg-white border-b border-[#4A6B52]/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4 text-[10px] font-bold text-[#1F2922]/70 uppercase tracking-wider">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#4A6B52]"></span> SEBI-aligned advisory</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#4A6B52]"></span> 1800+ clients · 18 countries</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#4A6B52]"></span> Backed by deep-tech research</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#4A6B52]"></span> Fiduciary, fee-only options</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#4A6B52]"></span> Audited performance</span>
        </div>
      </section>

      {/* WHO WE SERVE SECTION */}
      <section className="py-20 px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              WHO WE SERVE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight max-w-xl">
              Built for the way you actually build wealth.
            </h2>
            <p className="text-xs md:text-sm text-[#1F2922]/70 mt-3 max-w-2xl leading-relaxed">
              The same analytical rigour that powers allocation decisions at global institutions sits behind every recommendation we make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Target 1 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 shadow-xs flex flex-col justify-between h-48 border-t-3 border-t-[#4A6B52]">
              <div className="bg-slate-50 w-9 h-9 rounded-lg flex items-center justify-center text-[#4A6B52]/70 mb-4">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#1F2922] text-sm mb-1.5">HNIs & family offices</h3>
                <p className="text-[11px] text-[#1F2922]/70 leading-relaxed font-semibold">
                  Discretionary advisory and portfolio management rooted in primary research.
                </p>
              </div>
            </div>
            {/* Target 2 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 shadow-xs flex flex-col justify-between h-48 border-t-3 border-t-[#4A6B52]">
              <div className="bg-slate-50 w-9 h-9 rounded-lg flex items-center justify-center text-[#4A6B52]/70 mb-4">
                <User className="w-4.5 h-4.5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#1F2922] text-sm mb-1.5">Ambitious professionals</h3>
                <p className="text-[11px] text-[#1F2922]/70 leading-relaxed font-semibold">
                  Goal-based planning, SIPs and portfolio reviews for retirement, education, lifestyle.
                </p>
              </div>
            </div>
            {/* Target 3 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 shadow-xs flex flex-col justify-between h-48 border-t-3 border-t-[#4A6B52]">
              <div className="bg-slate-50 w-9 h-9 rounded-lg flex items-center justify-center text-[#4A6B52]/70 mb-4">
                <Briefcase className="w-4.5 h-4.5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#1F2922] text-sm mb-1.5">Founders & promoters</h3>
                <p className="text-[11px] text-[#1F2922]/70 leading-relaxed font-semibold">
                  Concentrated-position management, liquidity events and diversification roadmaps.
                </p>
              </div>
            </div>
            {/* Target 4 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 shadow-xs flex flex-col justify-between h-48 border-t-3 border-t-[#4A6B52]">
              <div className="bg-slate-50 w-9 h-9 rounded-lg flex items-center justify-center text-[#4A6B52]/70 mb-4">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#1F2922] text-sm mb-1.5">NRIs & global Indians</h3>
                <p className="text-[11px] text-[#1F2922]/70 leading-relaxed font-semibold">
                  Cross-border allocation across India and US equities, MFs, ETFs and structured products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CRISPIDEA WEALTH */}
      <section className="py-20 px-6 lg:px-12 bg-white border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              WHY CRISPIDEA WEALTH
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight max-w-xl">
              The research engine wealth decisions deserve.
            </h2>
            <p className="text-xs md:text-sm text-[#1F2922]/70 mt-3 max-w-xl leading-relaxed">
              Five reasons HNIs and professionals choose us over the brokerage default.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-8">
            {whyCards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-[#FAF8F5]/50 border border-[#4A6B52]/10 rounded-2xl p-6 shadow-xs flex flex-col justify-between h-44 hover:border-[#4A6B52]/30 transition"
              >
                <span className="text-xs font-bold text-[#4A6B52]/40 block font-mono">{card.num}</span>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1F2922] mb-1.5">{card.title}</h4>
                  <p className="text-[11px] text-[#1F2922]/65 leading-relaxed font-semibold">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Big Green Proof Card */}
          <div className="bg-[#0A2417] text-[#FAF8F5] border border-emerald-950/20 rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[9px] font-bold text-[#4A6B52] uppercase tracking-widest block mb-2.5 font-mono">
                05 &bull; THE PROOF
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 leading-snug">
                Fiduciary, transparent, accountable.
              </h3>
              <p className="text-xs text-[#FAF8F5]/70 max-w-2xl leading-relaxed font-medium">
                Skin-in-the-game pricing, audited performance and direct advisor access. Built to outperform — not to upsell.
              </p>
            </div>
            <div className="lg:col-span-4 flex gap-6 lg:justify-end">
              <div className="bg-emerald-950/40 border border-[#4A6B52]/25 rounded-2xl p-4.5 min-w-[130px] text-center">
                <span className="text-2xl font-serif font-bold text-white block">21%+</span>
                <span className="text-[8px] uppercase tracking-wider font-bold text-[#4A6B52] block mt-1">ALPHA TARGET 2026</span>
              </div>
              <div className="bg-emerald-950/40 border border-[#4A6B52]/25 rounded-2xl p-4.5 min-w-[130px] text-center">
                <span className="text-2xl font-serif font-bold text-white block">$10 Tn</span>
                <span className="text-[8px] uppercase tracking-wider font-bold text-[#4A6B52] block mt-1">COVERAGE MARKET CAP</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* HOW IT WORKS SECTION */}
      <section className="py-20 px-6 lg:px-12 bg-white border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight">
              Three phases. Nine steps. One advisor.
            </h2>
            <p className="text-xs md:text-sm text-[#1F2922]/70 mt-3 max-w-2xl leading-relaxed">
              A research-driven process designed for compounding outcomes — not transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Phase 1 */}
            <div className="bg-[#FAF8F5]/50 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between gap-6">
              <div className="flex items-center justify-between border-b border-[#4A6B52]/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white border border-[#4A6B52]/15 w-8 h-8 rounded-lg flex items-center justify-center text-[#4A6B52]/70">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[8px] font-bold text-[#4A6B52] uppercase tracking-widest block">PHASE 1</span>
                    <h4 className="font-serif font-bold text-sm text-[#1F2922]">Discovery</h4>
                  </div>
                </div>
              </div>
              <div className="space-y-3 flex-1 flex flex-col justify-center">
                <div className="bg-white border border-[#4A6B52]/5 rounded-xl p-4 flex gap-4">
                  <span className="text-xs font-mono font-bold text-[#4A6B52]/40">01</span>
                  <div>
                    <h5 className="font-bold text-xs text-[#1F2922] mb-0.5">Goal mapping</h5>
                    <p className="text-[10px] text-[#1F2922]/60 font-semibold leading-relaxed">Retirement, education, lifestyle, liquidity events.</p>
                  </div>
                </div>
                <div className="bg-white border border-[#4A6B52]/5 rounded-xl p-4 flex gap-4">
                  <span className="text-xs font-mono font-bold text-[#4A6B52]/40">02</span>
                  <div>
                    <h5 className="font-bold text-xs text-[#1F2922] mb-0.5">Risk profile</h5>
                    <p className="text-[10px] text-[#1F2922]/60 font-semibold leading-relaxed">Quantified risk capacity and behaviour.</p>
                  </div>
                </div>
                <div className="bg-white border border-[#4A6B52]/5 rounded-xl p-4 flex gap-4">
                  <span className="text-xs font-mono font-bold text-[#4A6B52]/40">03</span>
                  <div>
                    <h5 className="font-bold text-xs text-[#1F2922] mb-0.5">Current snapshot</h5>
                    <p className="text-[10px] text-[#1F2922]/60 font-semibold leading-relaxed">Existing assets, liabilities, cash flow.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-[#FAF8F5]/50 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between gap-6">
              <div className="flex items-center justify-between border-b border-[#4A6B52]/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white border border-[#4A6B52]/15 w-8 h-8 rounded-lg flex items-center justify-center text-[#4A6B52]/70">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[8px] font-bold text-[#4A6B52] uppercase tracking-widest block">PHASE 2</span>
                    <h4 className="font-serif font-bold text-sm text-[#1F2922]">Planning &amp; onboarding</h4>
                  </div>
                </div>
              </div>
              <div className="space-y-3 flex-1 flex flex-col justify-center">
                <div className="bg-white border border-[#4A6B52]/5 rounded-xl p-4 flex gap-4">
                  <span className="text-xs font-mono font-bold text-[#4A6B52]/40">04</span>
                  <div>
                    <h5 className="font-bold text-xs text-[#1F2922] mb-0.5">Asset allocation</h5>
                    <p className="text-[10px] text-[#1F2922]/60 font-semibold leading-relaxed">Across geographies, asset classes, lifecycles.</p>
                  </div>
                </div>
                <div className="bg-white border border-[#4A6B52]/5 rounded-xl p-4 flex gap-4">
                  <span className="text-xs font-mono font-bold text-[#4A6B52]/40">05</span>
                  <div>
                    <h5 className="font-bold text-xs text-[#1F2922] mb-0.5">Portfolio build</h5>
                    <p className="text-[10px] text-[#1F2922]/60 font-semibold leading-relaxed">Direct funds, equities, ETFs, debt, structured.</p>
                  </div>
                </div>
                <div className="bg-white border border-[#4A6B52]/5 rounded-xl p-4 flex gap-4">
                  <span className="text-xs font-mono font-bold text-[#4A6B52]/40">06</span>
                  <div>
                    <h5 className="font-bold text-xs text-[#1F2922] mb-0.5">Onboarding</h5>
                    <p className="text-[10px] text-[#1F2922]/60 font-semibold leading-relaxed">Paperwork, app setup, advisor introduction.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-[#FAF8F5]/50 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between gap-6">
              <div className="flex items-center justify-between border-b border-[#4A6B52]/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white border border-[#4A6B52]/15 w-8 h-8 rounded-lg flex items-center justify-center text-[#4A6B52]/70">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[8px] font-bold text-[#4A6B52] uppercase tracking-widest block">PHASE 3</span>
                    <h4 className="font-serif font-bold text-sm text-[#1F2922]">Execution &amp; review</h4>
                  </div>
                </div>
              </div>
              <div className="space-y-3 flex-1 flex flex-col justify-center">
                <div className="bg-white border border-[#4A6B52]/5 rounded-xl p-4 flex gap-4">
                  <span className="text-xs font-mono font-bold text-[#4A6B52]/40">07</span>
                  <div>
                    <h5 className="font-bold text-xs text-[#1F2922] mb-0.5">Active execution</h5>
                    <p className="text-[10px] text-[#1F2922]/60 font-semibold leading-relaxed">SIPs, lump-sum, rebalancing, tax efficiency.</p>
                  </div>
                </div>
                <div className="bg-white border border-[#4A6B52]/5 rounded-xl p-4 flex gap-4">
                  <span className="text-xs font-mono font-bold text-[#4A6B52]/40">08</span>
                  <div>
                    <h5 className="font-bold text-xs text-[#1F2922] mb-0.5">Monthly review</h5>
                    <p className="text-[10px] text-[#1F2922]/60 font-semibold leading-relaxed">Market and portfolio health, risk parameters.</p>
                  </div>
                </div>
                <div className="bg-white border border-[#4A6B52]/5 rounded-xl p-4 flex gap-4">
                  <span className="text-xs font-mono font-bold text-[#4A6B52]/40">09</span>
                  <div>
                    <h5 className="font-bold text-xs text-[#1F2922] mb-0.5">Annual reset</h5>
                    <p className="text-[10px] text-[#1F2922]/60 font-semibold leading-relaxed">Goal review, allocation refresh, new opportunities.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WEALTH DESK SERVICES */}
      <section className="py-20 px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              SERVICES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight">
              A complete wealth desk<br />in one relationship.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 shadow-xs flex flex-col items-start gap-4 hover:border-[#4A6B52]/30 transition"
              >
                <div className="bg-[#FAF8F5] border border-[#4A6B52]/10 w-10 h-10 rounded-xl flex items-center justify-center">
                  {svc.icon}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#1F2922] mb-1">{svc.title}</h4>
                  <p className="text-xs text-[#1F2922]/65 leading-relaxed font-semibold">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTOR LETTERS */}
      <section className="py-20 px-6 lg:px-12 bg-white border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
                INVESTOR LETTERS
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight">
                From Malay Shah,<br />Principal Advisor.
              </h2>
              <p className="text-xs md:text-sm text-[#1F2922]/70 mt-3 max-w-xl leading-relaxed">
                Quarterly notes on markets, portfolios and the discipline that compounds wealth.
              </p>
            </div>
            
            <a 
              href="/insights" 
              className="text-xs font-bold text-[#4A6B52] hover:text-[#1F2922] transition flex items-center gap-1.5 cursor-pointer pb-2"
            >
              Read all letters <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {letters.map((letter, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between h-48 hover:border-[#4A6B52]/30 transition group"
              >
                <div>
                  <span className="text-[9px] font-bold text-[#4A6B52] uppercase tracking-wider block mb-3 font-mono">{letter.quarter}</span>
                  <h4 className="font-serif font-bold text-base text-[#1F2922] mb-2 leading-snug group-hover:text-[#4A6B52] transition">
                    {letter.title}
                  </h4>
                  <p className="text-xs text-[#1F2922]/60 font-semibold leading-relaxed">
                    {letter.desc}
                  </p>
                </div>
                
                <a 
                  href="/insights" 
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 mt-4 pt-4 border-t border-[#4A6B52]/5"
                >
                  Read letter <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS VIDEO GRID */}
      <section className="py-20 px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              VOICES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight">
              Why clients stay with us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#4A6B52]/10 rounded-3xl overflow-hidden shadow-xs flex flex-col justify-between hover:shadow-md transition duration-300"
              >
                {/* Play Button Video block placeholder */}
                <div className="h-44 bg-[#0A2417] flex items-center justify-center relative border-b border-[#4A6B52]/10 group cursor-pointer">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition duration-300">
                    <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between min-h-[160px]">
                  <div className="mb-6">
                    <Quote className="w-5 h-5 text-[#4A6B52]/40 mb-3 transform rotate-180" />
                    <p className="font-serif italic text-sm text-[#1F2922] leading-relaxed font-semibold">
                      "{t.quote}"
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-[#1F2922]">{t.name}</h4>
                    <span className="text-[10px] text-[#1F2922]/50 font-bold block mt-0.5">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET YOUR ADVISOR TEAM */}
      <section className="py-20 px-6 lg:px-12 bg-white border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              MEET YOUR ADVISOR TEAM
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight">
              One team. Direct access.<br />No middle layers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-3xl overflow-hidden p-6 flex flex-col items-stretch gap-5 hover:border-[#4A6B52]/30 transition"
              >
                {/* Advisor Image placeholder */}
                <div className="h-48 bg-[#0E2F1F] rounded-2xl flex items-center justify-center border border-[#4A6B52]/15 text-[#4A6B52]/50">
                  <User className="w-14 h-14" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#1F2922]">{member.name}</h4>
                  <span className="text-[10px] text-[#4A6B52] font-bold uppercase tracking-wider block mt-1">{member.role}</span>
                  <p className="text-xs text-[#1F2922]/65 leading-relaxed font-semibold mt-3.5 border-t border-[#4A6B52]/5 pt-3">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEALTH INSIGHTS CAROUSEL */}
      <section className="py-20 px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              WEALTH INSIGHTS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight">
              Reading worth your time.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between h-48 hover:border-[#4A6B52]/30 transition group cursor-pointer"
              >
                <div>
                  <span className="text-[8px] font-bold text-[#4A6B52] uppercase tracking-widest block mb-3.5 font-mono">
                    {item.category}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#1F2922] leading-snug group-hover:text-[#4A6B52] transition">
                    {item.title}
                  </h4>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-[#4A6B52]/5">
                  <span className="text-[9px] text-neutral-400 font-bold font-mono">{item.readTime}</span>
                  <div className="text-[#4A6B52] group-hover:translate-x-0.5 transition">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 px-6 lg:px-12 bg-white border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
                PRICING
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight">
                Our transparent pricing plan.
              </h2>
              <p className="text-xs md:text-sm text-[#1F2922]/70 mt-3 max-w-xl leading-relaxed">
                Higher returns through diversified asset-class investments.
              </p>
            </div>
            
            <div className="bg-[#FAF8F5] border border-[#4A6B52]/15 rounded-full px-4 py-1.5 text-[10px] font-bold text-[#1F2922] shadow-2xs">
              ✦ 12 months subscription &bull; 1 month free
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-8">
            
            {/* Free Plan */}
            <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-3xl p-8 flex flex-col justify-between shadow-xs">
              <div>
                <span className="font-bold text-lg text-[#1F2922]">Free Plan</span>
                <span className="text-[10px] text-neutral-400 block font-bold uppercase tracking-wider mt-0.5">Mutual Fund Only</span>
                
                <div className="my-8">
                  <span className="text-4xl font-serif font-black text-[#1F2922] tracking-tight">0%</span>
                  <span className="text-[10px] text-[#1F2922]/50 font-bold uppercase tracking-wider ml-1">FEES</span>
                </div>

                <p className="text-xs text-[#1F2922]/70 leading-relaxed font-semibold mb-6">Ideal for low-risk investors just getting started.</p>
                
                <ul className="space-y-3.5 border-t border-[#4A6B52]/5 pt-6 text-xs text-[#1F2922]/80 font-medium mb-8">
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>Active advisory across debt, large-/mid-/small-cap and sectoral funds</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>Active tracking of MF performance — returns and risk (e.g. Sharpe ratio)</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>Invest only in high-rated funds that preserve capital</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>Ease of transaction through the app</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>Lump-sum or SIP in regular funds</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleOpenContact("Free Plan")}
                className="w-full bg-[#1F2922] text-[#FAF8F5] text-xs font-bold py-3 rounded-lg hover:bg-black transition cursor-pointer"
              >
                Start free
              </button>
            </div>

            {/* Gold Plan (Green/Dark) */}
            <div className="bg-[#0A2417] text-white border border-emerald-950/20 rounded-3xl p-8 flex flex-col justify-between shadow-lg relative">
              <div className="absolute top-4 right-4 bg-emerald-900/35 border border-emerald-800/40 text-[#4A6B52] text-[8px] font-bold px-2 py-0.5 rounded-full tracking-wider">
                MOST POPULAR
              </div>
              
              <div>
                <span className="font-bold text-lg text-white">Gold Plan</span>
                <span className="text-[10px] text-white/50 block font-bold uppercase tracking-wider mt-0.5">AUA-based fee</span>
                
                <div className="my-8">
                  <span className="text-4xl font-serif font-black text-white tracking-tight">1%</span>
                  <span className="text-[9px] text-[#4A6B52] font-bold uppercase tracking-wider ml-1.5 leading-none">of AUA &bull; annual upfront, quarterly true-up</span>
                </div>

                <p className="text-xs text-white/70 leading-relaxed font-semibold mb-6">Ideal for investors wanting to maximize risk-adjusted returns.</p>
                
                <ul className="space-y-3.5 border-t border-[#4A6B52]/10 pt-6 text-xs text-white/85 font-medium mb-8">
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>India + US stocks, MFs, ETFs, SGBs, debt, structured products, SIFs</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>Detailed goal-based financial planning via app</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>Free advisory on PF, loans, insurance, emergency fund</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>Monthly review of market and portfolio health</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>Low-cost direct products — saves ~1% commission annually</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>70% lower cost than typical PMS</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleOpenContact("Gold Plan")}
                className="w-full bg-white text-[#1F2922] text-xs font-bold py-3 rounded-lg hover:bg-[#FAF8F5] transition cursor-pointer"
              >
                Talk to advisor
              </button>
            </div>

            {/* Profit-Share Plan */}
            <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-3xl p-8 flex flex-col justify-between shadow-xs">
              <div>
                <span className="font-bold text-lg text-[#1F2922]">Profit-Share Plan</span>
                <span className="text-[10px] text-neutral-400 block font-bold uppercase tracking-wider mt-0.5">Skin in the game</span>
                
                <div className="my-8">
                  <span className="text-4xl font-serif font-black text-[#1F2922] tracking-tight">8%</span>
                  <span className="text-[10px] text-[#1F2922]/50 font-bold uppercase tracking-wider ml-1">of net gains*</span>
                </div>

                <p className="text-xs text-[#1F2922]/70 leading-relaxed font-semibold mb-6">Ideal for high-risk investors investing upwards of ₹1 Cr.</p>
                
                <ul className="space-y-3.5 border-t border-[#4A6B52]/5 pt-6 text-xs text-[#1F2922]/80 font-medium mb-8">
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>AI-driven active-alpha strategy across global equities</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>Leveraged returns via F&amp;O, MTF and pair trading</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>Personalised dashboard and real-time alerts</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4A6B52] mt-0.5 shrink-0" />
                    <span>High water-mark model</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleOpenContact("Profit-Share Plan")}
                className="w-full bg-[#1F2922] text-[#FAF8F5] text-xs font-bold py-3 rounded-lg hover:bg-black transition cursor-pointer"
              >
                Apply
              </button>
            </div>

          </div>

          <p className="text-[10px] text-[#1F2922]/40 font-semibold max-w-2xl leading-normal">
            * Realized and unrealized profits trued-up quarterly and offset against a one-time onboarding fee of ₹25,000.
          </p>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="py-20 px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              QUESTIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight">
              Answers, with the same<br />rigor as our reports.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 items-start font-semibold">
            {/* Column 1 */}
            <div className="space-y-4">
              {/* FAQ 0 */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFaq("q0")}
                  className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 text-xs font-bold text-[#1F2922] hover:text-[#4A6B52] focus:outline-none cursor-pointer"
                >
                  <span>Are you SEBI registered?</span>
                  <span className="text-base font-mono leading-none">{faqState.q0 ? "−" : "+"}</span>
                </button>
                {faqState.q0 && (
                  <div className="px-6 pb-6 text-xs text-[#1F2922]/70 leading-relaxed font-semibold border-t border-[#4A6B52]/5 pt-4 animate-in fade-in slide-in-from-top-1">
                    Yes. CrispIdea Wealth is SEBI-aligned and operates under fiduciary advisory standards.
                  </div>
                )}
              </div>
              {/* FAQ 1 */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFaq("q1")}
                  className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 text-xs font-bold text-[#1F2922] hover:text-[#4A6B52] focus:outline-none cursor-pointer"
                >
                  <span>How is your advice different?</span>
                  <span className="text-base font-mono leading-none">{faqState.q1 ? "−" : "+"}</span>
                </button>
                {faqState.q1 && (
                  <div className="px-6 pb-6 text-xs text-[#1F2922]/70 leading-relaxed font-semibold border-t border-[#4A6B52]/5 pt-4 animate-in fade-in slide-in-from-top-1">
                    Every recommendation is backed by primary research from our institutional research desk — not generic model portfolios.
                  </div>
                )}
              </div>
              {/* FAQ 2 */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFaq("q2")}
                  className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 text-xs font-bold text-[#1F2922] hover:text-[#4A6B52] focus:outline-none cursor-pointer"
                >
                  <span>Do you handle cross-border investing?</span>
                  <span className="text-base font-mono leading-none">{faqState.q2 ? "−" : "+"}</span>
                </button>
                {faqState.q2 && (
                  <div className="px-6 pb-6 text-xs text-[#1F2922]/70 leading-relaxed font-semibold border-t border-[#4A6B52]/5 pt-4 animate-in fade-in slide-in-from-top-1">
                    Yes. We build allocations across India and US equities, MFs, ETFs and structured products.
                  </div>
                )}
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {/* FAQ 3 */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFaq("q3")}
                  className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 text-xs font-bold text-[#1F2922] hover:text-[#4A6B52] focus:outline-none cursor-pointer"
                >
                  <span>Who is this for?</span>
                  <span className="text-base font-mono leading-none">{faqState.q3 ? "−" : "+"}</span>
                </button>
                {faqState.q3 && (
                  <div className="px-6 pb-6 text-xs text-[#1F2922]/70 leading-relaxed font-semibold border-t border-[#4A6B52]/5 pt-4 animate-in fade-in slide-in-from-top-1">
                    HNIs, family offices, founders, NRIs and ambitious salaried professionals serious about long-term wealth.
                  </div>
                )}
              </div>
              {/* FAQ 4 */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFaq("q4")}
                  className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 text-xs font-bold text-[#1F2922] hover:text-[#4A6B52] focus:outline-none cursor-pointer"
                >
                  <span>Can I switch plans later?</span>
                  <span className="text-base font-mono leading-none">{faqState.q4 ? "−" : "+"}</span>
                </button>
                {faqState.q4 && (
                  <div className="px-6 pb-6 text-xs text-[#1F2922]/70 leading-relaxed font-semibold border-t border-[#4A6B52]/5 pt-4 animate-in fade-in slide-in-from-top-1">
                    Yes. You can upgrade from Free &rarr; Gold &rarr; Profit-Share at any time. Fees are pro-rated.
                  </div>
                )}
              </div>
              {/* FAQ 5 */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFaq("q5")}
                  className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 text-xs font-bold text-[#1F2922] hover:text-[#4A6B52] focus:outline-none cursor-pointer"
                >
                  <span>How are fees billed?</span>
                  <span className="text-base font-mono leading-none">{faqState.q5 ? "−" : "+"}</span>
                </button>
                {faqState.q5 && (
                  <div className="px-6 pb-6 text-xs text-[#1F2922]/70 leading-relaxed font-semibold border-t border-[#4A6B52]/5 pt-4 animate-in fade-in slide-in-from-top-1">
                    Free plan: zero. Gold: 1% of AUA, annual upfront with quarterly true-up. Profit-Share: 8% of net gains, quarterly.
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CONSULT CTA */}
      <section className="py-20 px-6 lg:px-12 bg-white border-b border-[#4A6B52]/10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0A2417] text-white border border-emerald-950/20 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center relative overflow-hidden">
            <span className="text-[9px] font-bold text-[#4A6B52] uppercase tracking-widest block mb-4 font-mono">
              ✦ BOOK A WEALTH CONSULT
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight max-w-2xl">
              The research engine your wealth deserves.
            </h2>
            <p className="text-xs md:text-sm text-white/60 mb-10 max-w-lg leading-relaxed font-medium">
              One conversation with your advisor — no obligation. We'll route you within one business day.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center font-semibold">
              <button
                onClick={() => handleOpenContact("Discovery Call")}
                className="bg-white text-[#1F2922] text-xs font-bold py-3.5 px-6 rounded-full hover:bg-[#FAF8F5] transition duration-200 shadow-sm cursor-pointer"
              >
                Talk to an advisor ↗
              </button>
              <a
                href="#pricing"
                className="bg-transparent border border-white/20 text-white text-xs font-bold py-3.5 px-6 rounded-full hover:bg-white/5 transition duration-200"
              >
                Compare plans
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#FAF8F5] border-t border-[#4A6B52]/10 py-16 px-6 lg:px-12 text-xs text-[#1F2922]/65">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          
          {/* Logo tagline column */}
          <div className="col-span-2 flex flex-col items-start gap-4">
            <a href="/" className="flex items-center gap-3 select-none cursor-pointer">
              <div className="bg-[#1F2922] text-[#FAF8F5] w-7 h-7 rounded-lg flex items-center justify-center font-bold font-serif text-base">
                C
              </div>
              <span className="font-bold text-base tracking-tight text-[#1F2922]">CrispIdea</span>
            </a>
            <p className="text-xs leading-relaxed max-w-xs text-[#1F2922]/70 font-medium">
              Research-led intelligence for global institutions and India's wealth builders.
            </p>
          </div>

          {/* Links Column 1: Research */}
          <div>
            <h5 className="font-bold text-[#1F2922] mb-4 uppercase tracking-wider text-[10px]">Research</h5>
            <ul className="space-y-2.5 font-semibold">
              <li><a href="/research#heatmap" className="hover:text-[#4A6B52] transition">Equity</a></li>
              <li><a href="/research#recent-reports" className="hover:text-[#4A6B52] transition">Thematic</a></li>
              <li><a href="/research#methodology" className="hover:text-[#4A6B52] transition">QoM</a></li>
              <li><a href="/research#methodology" className="hover:text-[#4A6B52] transition">ESG</a></li>
              <li><a href="/research#methodology" className="hover:text-[#4A6B52] transition">Custom mandates</a></li>
            </ul>
          </div>

          {/* Links Column 2: Wealth */}
          <div>
            <h5 className="font-bold text-[#1F2922] mb-4 uppercase tracking-wider text-[10px]">Wealth</h5>
            <ul className="space-y-2.5 font-semibold">
              <li><a href="/wealth-management" className="hover:text-[#4A6B52] transition">Goal-based plans</a></li>
              <li><a href="/wealth-management" className="hover:text-[#4A6B52] transition">Portfolio advisory</a></li>
              <li><a href="/wealth-management" className="hover:text-[#4A6B52] transition">HNI services</a></li>
              <li><a href="/wealth-management" className="hover:text-[#4A6B52] transition">Private wealth</a></li>
            </ul>
          </div>

          {/* Links Column 3: Company */}
          <div>
            <h5 className="font-bold text-[#1F2922] mb-4 uppercase tracking-wider text-[10px]">Company</h5>
            <ul className="space-y-2.5 font-semibold">
              <li><a href="/about" className="hover:text-[#4A6B52] transition">About</a></li>
              <li><a href="/insights" className="hover:text-[#4A6B52] transition">Insights</a></li>
              <li><a href="/#pricing" className="hover:text-[#4A6B52] transition">Careers</a></li>
              <li><a href="/#contact" className="hover:text-[#4A6B52] transition">Contact</a></li>
            </ul>
          </div>

          {/* Links Column 4: Legal */}
          <div>
            <h5 className="font-bold text-[#1F2922] mb-4 uppercase tracking-wider text-[10px]">Legal</h5>
            <ul className="space-y-2.5 font-semibold">
              <li><a href="/#link" className="hover:text-[#4A6B52] transition">SEBI disclosures</a></li>
              <li><a href="/#link" className="hover:text-[#4A6B52] transition">Terms</a></li>
              <li><a href="/#link" className="hover:text-[#4A6B52] transition">Privacy</a></li>
              <li><a href="/#link" className="hover:text-[#4A6B52] transition">Disclaimers</a></li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="max-w-7xl mx-auto border-t border-[#4A6B52]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#1F2922]/50 font-medium">
          <span>&copy; {new Date().getFullYear()} CrispIdea. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B52]"></span>
            <span>SEBI-registered Investment Advisor &bull; INA000000000</span>
          </span>
        </div>
      </footer>

      {/* DISCOVERY / PLAN SIGNUP MODAL */}
      {contactModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white border border-[#4A6B52]/15 rounded-2xl max-w-md w-full p-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>

            {formSubmitted ? (
              <div className="py-10 text-center flex flex-col items-center justify-center">
                <div className="bg-green-50 border border-green-200 p-3 rounded-full mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-serif font-bold text-[#1F2922] mb-1">Consultation Scheduled</h4>
                <p className="text-xs text-[#1F2922]/70 leading-relaxed font-semibold max-w-xs">
                  Thank you! An investment advisor will contact you within one business day.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-serif font-bold text-[#1F2922] mb-1">
                  Book a Wealth Consult
                </h3>
                <p className="text-[11px] text-[#1F2922]/60 mb-6 leading-relaxed font-medium">
                  {modalType === "General Query" 
                    ? "Start a transparent fiduciary relationship with a CrispIdea advisor."
                    : `Request a consult for: "${modalType}"`}
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4 font-semibold font-sans">
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#4A6B52] block mb-1.5 font-bold">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-[#FAF8F5] border border-[#4A6B52]/15 rounded-lg px-3 py-2 text-xs text-[#1F2922] focus:outline-none focus:border-[#4A6B52]/35"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#4A6B52] block mb-1.5 font-bold">Work Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-[#FAF8F5] border border-[#4A6B52]/15 rounded-lg px-3 py-2 text-xs text-[#1F2922] focus:outline-none focus:border-[#4A6B52]/35"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#4A6B52] block mb-1.5 font-bold">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-[#FAF8F5] border border-[#4A6B52]/15 rounded-lg px-3 py-2 text-xs text-[#1F2922] focus:outline-none focus:border-[#4A6B52]/35"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#4A6B52] block mb-1.5 font-bold">Approximate Portfolio Size</label>
                    <select
                      value={formData.portfolioSize}
                      onChange={(e) => setFormData(prev => ({ ...prev, portfolioSize: e.target.value }))}
                      className="w-full bg-[#FAF8F5] border border-[#4A6B52]/15 rounded-lg px-3 py-2 text-xs text-[#1F2922] focus:outline-none focus:border-[#4A6B52]/35"
                    >
                      <option value="">Select range...</option>
                      <option value="Under 50L">Under ₹50 Lakhs</option>
                      <option value="50L - 1Cr">₹50 Lakhs - ₹1 Crore</option>
                      <option value="1Cr - 5Cr">₹1 Crore - ₹5 Crores</option>
                      <option value="Over 5Cr">Over ₹5 Crores</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#4A6B52] block mb-1.5 font-bold">Message</label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-[#FAF8F5] border border-[#4A6B52]/15 rounded-lg px-3 py-2 text-xs text-[#1F2922] focus:outline-none focus:border-[#4A6B52]/35 resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#1F2922] text-[#FAF8F5] text-xs font-bold py-3 rounded-lg hover:bg-black transition mt-6 cursor-pointer"
                  >
                    Schedule discovery consult
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
