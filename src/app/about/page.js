"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Award, 
  Users, 
  ChevronDown, 
  ArrowUpRight, 
  Globe, 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  MapPin, 
  Sparkles,
  Search,
  Check
} from "lucide-react";

// Inline brand icon for LinkedIn (reused to avoid compilation issues)
const Linkedin = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function About() {
  // Navigation active state
  const [researchOpen, setResearchOpen] = useState(false);

  // Active Team member accordion (index or null)
  const [activeTeamIndex, setActiveTeamIndex] = useState(null);

  // Active Office map filter state: 'all' | 'research' | 'wealth'
  const [mapFilter, setMapFilter] = useState("all");

  // Active dot highlight on map hover
  const [hoveredOfficeId, setHoveredOfficeId] = useState(null);

  // Toggle single team accordion
  const toggleTeamAccordion = (index) => {
    setActiveTeamIndex(activeTeamIndex === index ? null : index);
  };

  // Timeline milestones
  const timelineMilestones = [
    {
      year: "2010",
      title: "Foundations",
      desc: "Senior analysts begin building what becomes the CrispIdea research framework — institutional rigour applied to deep-tech sectors."
    },
    {
      year: "2015",
      title: "CrispIdea is founded",
      desc: "Shejal Ajmera launches CrispIdea as an independent equity research house with a focus on disruptive technology."
    },
    {
      year: "2018",
      title: "Listed on global platforms",
      desc: "Coverage goes live on Refinitiv, FactSet and S&P Global. First institutional licensing deals signed."
    },
    {
      year: "2020",
      title: "Quality of Management framework",
      desc: "Proprietary QoM scoring launches. Forecast hit-rate stabilises around 80%."
    },
    {
      year: "2022",
      title: "Wealth management practice",
      desc: "Malay Shah joins as Co-Founder. CrispIdea begins managing private portfolios using the same research engine."
    },
    {
      year: "2024",
      title: "AI research engine",
      desc: "Quant team launches models scoring 2,000+ companies daily on earnings quality and flow signals."
    },
    {
      year: "2026",
      title: "Global footprint",
      desc: "Offices across Mumbai, Bengaluru, Singapore, Dubai, London and New York. $10 Tn in cumulative market-cap coverage."
    }
  ];

  // Leadership details
  const leadership = [
    {
      name: "Shejal Ajmera",
      role: "FOUNDER & HEAD OF RESEARCH",
      image: "/team/shejal.jpg",
      bio: "Shejal has over 20 years of experience in equity research and investment analysis. She has led research desks at premier financial institutions and has a deep track record in technology and industrial sectors, defining CrispIdea's rigorous QoM frameworks."
    },
    {
      name: "Malay Shah",
      role: "CO-FOUNDER & PRINCIPAL ADVISOR — WEALTH",
      image: "/team/malay.webp",
      bio: "Malay is a seasoned wealth advisor with over 18 years of experience structuring multi-generational family office accounts and managing discretionary portfolios. He leads CrispIdea's wealth management advisory."
    },
    {
      name: "Chetan Parikh",
      role: "ADVISOR — INVESTMENTS",
      image: "/team/chetan.png",
      bio: "Chetan is a renowned value investor, financial writer, and co-founder of Jeetay Investments. He provides macro asset allocation guidance and qualitative Quality of Management (QoM) oversight."
    },
    {
      name: "Pankaj Rungta",
      role: "ADVISOR — M&A AND WEALTH",
      image: "/team/pankaj.png",
      bio: "Pankaj is a strategic advisor specialized in corporate growth planning, capital allocation policies, and pre-IPO advisory, helping align institutional research with corporate strategy."
    }
  ];

  // Analyst details (with accordion biographic details)
  const analysts = [
    {
      name: "Priya Iyer",
      initials: "PI",
      role: "HEAD OF EQUITY RESEARCH",
      subtitle: "Semiconductors, AI infrastructure and enterprise software.",
      bio: "15 years on the sell-side and buy-side across New York and Singapore. Pioneered our Quality of Management (QoM) framework, now used by 40+ institutional clients.",
      tags: ["Semis", "Software", "QoM"]
    },
    {
      name: "Dr. Lena Park",
      initials: "DL",
      role: "HEAD OF THEMATIC RESEARCH",
      subtitle: "Macro, cross-sector themes and policy-driven inflection points.",
      bio: "PhD in Economics. Previously led thematic strategy at a global macro hedge fund. Authored CrispIdea's flagship reports on AI infrastructure, energy transition and the chip supply chain.",
      tags: ["Macro", "Themes", "Policy"]
    },
    {
      name: "Karan Shah",
      initials: "KS",
      role: "HEAD OF QUANT & DATA SCIENCE",
      subtitle: "Proprietary models for earnings quality and institutional flow.",
      bio: "Built our AI models that score 2,000+ companies daily on earnings quality, propensity-to-buy signals and entry/exit triggers. Prior experience at two leading systematic hedge funds.",
      tags: ["AI", "Quant", "Models"]
    },
    {
      name: "Rahul Kapoor",
      initials: "RK",
      role: "HEAD OF WEALTH MANAGEMENT",
      subtitle: "Behavioural finance, goal-based portfolios and family office advisory.",
      bio: "Former Private Wealth Director at a top-tier global bank. Manages bespoke portfolios for entrepreneurs, founders and senior professionals across India, Singapore and the UAE.",
      tags: ["Wealth", "Family Office", "Behavioural"]
    },
    {
      name: "Sneha Rao",
      initials: "SR",
      role: "HEAD OF CLIENT PORTFOLIOS",
      subtitle: "Risk-profiled portfolio construction and ongoing advisory.",
      bio: "CFP with 12 years of experience advising HNI and UHNI clients. Leads our active portfolio management practice and goal-based planning desk.",
      tags: ["CFP", "HNI", "Portfolios"]
    },
    {
      name: "Aditya Menon",
      initials: "AM",
      role: "SENIOR ANALYST — DEEP TECH",
      subtitle: "AI compute, semiconductors and cybersecurity coverage.",
      bio: "Covers NVIDIA, AMD, Palo Alto Networks, IonQ and the broader compute stack. Engineering background with seven years of buy-side research.",
      tags: ["AI", "Semis", "Cyber"]
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "CrispIdea is the rare research partner that combines institutional rigour with on-the-ground conviction. Their QoM framework is now part of our investment process.",
      author: "Managing Director",
      context: "Global Long/Short Fund, New York"
    },
    {
      quote: "They didn't just hand me a portfolio — they built one around my goals, my risk and my timeline. Two years in, I sleep better and my returns speak for themselves.",
      author: "Tech Founder",
      context: "Wealth client, Bengaluru"
    },
    {
      quote: "Best independent deep-tech coverage we've subscribed to. Reports are timely, models are clean and analysts actually pick up the phone.",
      author: "CIO",
      context: "APAC Asset Manager, Singapore"
    }
  ];

  // Office locations coordinates and data
  // Low resolution map dimensions are 950 x 620
  // Values are converted to exact percentages for relative overlays
  const offices = [
    {
      id: "ny",
      city: "New York",
      badge: "RESEARCH",
      badgeStyle: "bg-blue-100 text-blue-800 border-blue-200",
      desc: "Institutional clients • Sell-side coverage",
      practice: "research",
      both: false,
      top: "33.5%",
      left: "26.5%"
    },
    {
      id: "london",
      city: "London",
      badge: "RESEARCH",
      badgeStyle: "bg-blue-100 text-blue-800 border-blue-200",
      desc: "EMEA distribution • Macro desk",
      practice: "research",
      both: false,
      top: "24.5%",
      left: "48.2%"
    },
    {
      id: "dubai",
      city: "Dubai",
      badge: "WEALTH",
      badgeStyle: "bg-[#E6EBE4] text-[#4A6B52] border-[#4A6B52]/20",
      desc: "NRI & GCC wealth advisory",
      practice: "wealth",
      both: false,
      top: "39.5%",
      left: "58.2%"
    },
    {
      id: "mumbai",
      city: "Mumbai",
      badge: "RESEARCH + WEALTH",
      badgeStyle: "bg-neutral-100 text-neutral-800 border-neutral-200",
      desc: "Headquarters • Research + private wealth flagship",
      practice: "both",
      both: true,
      top: "45.5%",
      left: "65.2%"
    },
    {
      id: "bengaluru",
      city: "Bengaluru",
      badge: "RESEARCH + WEALTH",
      badgeStyle: "bg-neutral-100 text-neutral-800 border-neutral-200",
      desc: "Quant & data science • Tech founders desk",
      practice: "both",
      both: true,
      top: "48.0%",
      left: "66.5%"
    },
    {
      id: "singapore",
      city: "Singapore",
      badge: "RESEARCH + WEALTH",
      badgeStyle: "bg-neutral-100 text-neutral-800 border-neutral-200",
      desc: "APAC institutional + family office practice",
      practice: "both",
      both: true,
      top: "53.0%",
      left: "71.6%"
    }
  ];

  // Helper to filter offices based on selection
  const filteredOffices = offices.filter(office => {
    if (mapFilter === "all") return true;
    if (mapFilter === "research") return office.practice === "research" || office.both;
    if (mapFilter === "wealth") return office.practice === "wealth" || office.both;
    return true;
  });

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
            <a href="/about" className="text-[#1F2922] transition border-b border-[#1F2922]">About us</a>
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

            <a href="/wealth-management" className="flex items-center gap-1.5 text-[#1F2922] hover:text-[#4A6B52] transition">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1F2922]"></span>
              <span>Wealth Management</span>
            </a>
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-5">
            <a href="/#signin" className="text-sm font-medium text-[#1F2922]/70 hover:text-[#1F2922] transition">Sign in</a>
            <a 
              href="#contact" 
              className="bg-[#1F2922] text-[#FAF8F5] text-sm font-semibold py-2 px-5 rounded-full hover:bg-[#2A392F] transition duration-200 shadow-sm"
            >
              Talk to us
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-grid pt-16 md:pt-24 pb-20 px-6 lg:px-12 border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <span className="text-xs font-bold text-[#4A6B52] tracking-widest uppercase mb-4 block">
              ABOUT CRISPIDEA
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-[#1F2922] leading-[1.08] mb-6">
              A research house that manages wealth, not the other way around.
            </h1>
            <p className="text-base md:text-lg text-[#1F2922]/75 leading-relaxed max-w-2xl mb-8 font-medium">
              We exist because most advice is borrowed. Ours is built — from primary research, proprietary models and 15+ years of deep-tech conviction. The same DNA powers a global institution allocating billions and an individual building wealth one decision at a time.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#contact"
                className="bg-[#1F2922] text-[#FAF8F5] text-sm font-bold py-3 px-6 rounded-full hover:bg-black transition duration-200 shadow-sm flex items-center gap-2"
              >
                Talk to our team <span className="text-xs">↗</span>
              </a>
              <a 
                href="/research"
                className="bg-white/80 backdrop-blur-sm border border-[#4A6B52]/15 text-[#1F2922] text-sm font-bold py-3 px-6 rounded-full hover:bg-[#FAF8F5] transition duration-200"
              >
                Explore our research
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-4">
              OUR STORY
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F2922] leading-[1.15] max-w-md">
              Built by analysts. For decisions that compound.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-sm text-[#1F2922]/80 leading-relaxed font-medium">
            <p>
              CrispIdea was founded on a simple idea: the best wealth outcomes come from the best research — applied with discipline, over time. Too many advisors recycle reports they don't write and recommend products they don't understand.
            </p>
            <p>
              We do the opposite. We employ senior sector analysts who have spent careers at global investment banks, hedge funds and asset managers. We pair them with proprietary AI models that scan 2,000+ companies daily. The output flows two ways — to institutions that license our research, and to individuals whose portfolios we actively manage.
            </p>
            <p>
              The result is one engine, two channels — research and wealth management — held to a single standard of rigour.
            </p>
          </div>
        </div>
      </section>

      {/* WHY PEOPLE TRUST CRISPIDEA */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-3">
              WHY PEOPLE TRUST CRISPIDEA
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F2922] leading-tight mb-4">
              Independence, depth, and a track record that compounds.
            </h2>
            <p className="text-sm text-[#1F2922]/60 font-semibold max-w-lg">
              Four reasons clients across institutions and individual portfolios choose us — and stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-[#4A6B52]/15 p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1F2922] mb-3">
                Independent research
              </h3>
              <p className="text-xs text-[#1F2922]/70 leading-relaxed font-semibold">
                No banking, no underwriting, no conflicts. Our only product is unbiased insight.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#4A6B52]/15 p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-6">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1F2922] mb-3">
                15+ years of track record
              </h3>
              <p className="text-xs text-[#1F2922]/70 leading-relaxed font-semibold">
                Coverage that has driven $10 Tn in incremental market cap and delivered 21%+ alpha in 2026.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#4A6B52]/15 p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-[#4A6B52] mb-6">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1F2922] mb-3">
                Analyst-led, not algorithm-led
              </h3>
              <p className="text-xs text-[#1F2922]/70 leading-relaxed font-semibold">
                Senior sector specialists with prior buy-side and sell-side experience at top global firms.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-[#4A6B52]/15 p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1F2922] mb-3">
                Global footprint
              </h3>
              <p className="text-xs text-[#1F2922]/70 leading-relaxed font-semibold">
                Clients across North America, Europe, APAC and the Middle East — served from research hubs on three continents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY - TIMELINE */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-3">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F2922] leading-tight mb-4">
              From an idea to a global research-led platform.
            </h2>
            <p className="text-sm text-[#1F2922]/60 font-semibold">
              Fifteen years of compounding conviction — distilled into the milestones that shaped CrispIdea.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Center Line for desktop */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#4A6B52]/15 -translate-x-1/2"></div>

            <div className="space-y-12 md:space-y-16">
              {timelineMilestones.map((milestone, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex flex-col md:flex-row items-stretch">
                    {/* Timeline Node Dot */}
                    <div className="absolute left-4 md:left-1/2 top-1.5 w-4 h-4 rounded-full bg-[#1F2922] border-[3px] border-[#FAF8F5] z-10 -translate-x-1/2 shadow-sm transition hover:scale-125 duration-200"></div>

                    {/* Left spacing/content column */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right ${isLeft ? 'block' : 'md:opacity-0 pointer-events-none hidden md:block'}`}>
                      {isLeft && (
                        <div className="bg-[#FAF8F5] border border-[#4A6B52]/10 p-5 rounded-2xl hover:border-[#4A6B52]/30 transition shadow-sm max-w-md md:ml-auto">
                          <span className="text-sm font-bold text-[#4A6B52] block mb-1">
                            {milestone.year}
                          </span>
                          <h4 className="font-serif font-bold text-[#1F2922] text-base mb-2">
                            {milestone.title}
                          </h4>
                          <p className="text-xs text-[#1F2922]/70 leading-relaxed font-semibold">
                            {milestone.desc}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center spacer column for desktop layout */}
                    <div className="w-0 md:w-0"></div>

                    {/* Right spacing/content column */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-12 text-left ${!isLeft ? 'block' : 'md:opacity-0 pointer-events-none hidden md:block'}`}>
                      {!isLeft && (
                        <div className="bg-[#FAF8F5] border border-[#4A6B52]/10 p-5 rounded-2xl hover:border-[#4A6B52]/30 transition shadow-sm max-w-md">
                          <span className="text-sm font-bold text-[#4A6B52] block mb-1">
                            {milestone.year}
                          </span>
                          <h4 className="font-serif font-bold text-[#1F2922] text-base mb-2">
                            {milestone.title}
                          </h4>
                          <p className="text-xs text-[#1F2922]/70 leading-relaxed font-semibold">
                            {milestone.desc}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-3">
              LEADERSHIP
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F2922] leading-tight mb-4">
              The people behind the research.
            </h2>
            <p className="text-sm text-[#1F2922]/60 font-semibold max-w-lg">
              Founders and advisors who have spent decades doing the work — now building CrispIdea as one research-led platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#4A6B52]/15 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full bg-[#E6EBE4] overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 25vw"
                  />
                  {/* Overlay for premium contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    <Linkedin className="w-5 h-5 text-white hover:text-blue-400 cursor-pointer transition" />
                  </div>
                </div>
                {/* Details */}
                <div className="p-6">
                  <h3 className="font-serif font-bold text-lg text-[#1F2922] mb-1">
                    {member.name}
                  </h3>
                  <span className="text-[10px] font-bold text-[#4A6B52] tracking-wider uppercase block mb-4">
                    {member.role}
                  </span>
                  <p className="text-xs text-[#1F2922]/70 leading-relaxed font-semibold">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TEAM ACCORDIONS */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-3">
              OUR TEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F2922] leading-tight mb-4">
              Senior analysts. Real accountability.
            </h2>
            <p className="text-sm text-[#1F2922]/60 font-semibold max-w-lg">
              Click any member to read their background. Every name on this page personally owns the work that goes out under it.
            </p>
          </div>

          {/* Full Team Photo Placeholder Card */}
          <div className="mb-12 bg-gradient-to-br from-[#E6EBE4] to-[#FAF8F5] border border-[#4A6B52]/15 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden group min-h-[300px] flex flex-col justify-center items-center">
            {/* Background design elements */}
            <div className="absolute inset-0 bg-grid opacity-30"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A6B52]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#4A6B52]/10 transition duration-500"></div>
            
            <div className="relative z-10 max-w-xl">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#4A6B52] shadow-sm mb-6 mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#1F2922] mb-3">
                Our Senior Research & Advisory Council
              </h3>
              <p className="text-xs text-[#1F2922]/65 leading-relaxed font-semibold mb-6">
                A structured network of sector specialists, quant engineers, and wealth architects working across global offices to deliver institutional precision.
              </p>
              <span className="text-[10px] font-bold text-[#4A6B52]/70 uppercase tracking-widest bg-white/80 border border-[#4A6B52]/10 rounded-full px-4 py-2">
                16:6 HERO CAPABILITY • 18+ ADVISORS ON STANDBY
              </span>
            </div>
          </div>

          {/* Accordions grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {analysts.map((member, idx) => {
              const isOpen = activeTeamIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`border border-[#4A6B52]/10 rounded-2xl bg-[#FAF8F5]/30 overflow-hidden transition-all duration-300 ${isOpen ? 'ring-1 ring-[#4A6B52] bg-white shadow-sm' : 'hover:border-[#4A6B52]/30'}`}
                >
                  <button
                    onClick={() => toggleTeamAccordion(idx)}
                    className="w-full p-6 flex items-start text-left focus:outline-none justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      {/* Initials badge */}
                      <div className="w-12 h-12 rounded-xl bg-[#E6EBE4] text-[#1F2922] font-serif font-bold text-base flex items-center justify-center shrink-0">
                        {member.initials}
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-[#1F2922] text-lg leading-tight">
                          {member.name}
                        </h4>
                        <span className="text-[10px] font-bold text-[#4A6B52] tracking-wider uppercase block mt-1">
                          {member.role}
                        </span>
                        <p className="text-xs text-[#1F2922]/60 font-semibold mt-1 line-clamp-1">
                          {member.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Accordion trigger indicator */}
                    <span className="text-lg font-medium text-[#1F2922]/50 font-serif leading-none mt-1 select-none">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {/* Collapsible content segment */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#4A6B52]/5 animate-in fade-in duration-200">
                      <p className="text-xs text-[#1F2922]/80 leading-relaxed font-semibold mb-5">
                        {member.bio}
                      </p>
                      {/* Pills list */}
                      <div className="flex flex-wrap items-center gap-2">
                        {member.tags.map((tag, tagIdx) => (
                          <span 
                            key={tagIdx}
                            className="bg-[#E6EBE4]/70 border border-[#4A6B52]/10 rounded-full px-3 py-0.5 text-[10px] font-bold text-[#4A6B52]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RELATIONSHIP PROOF / TESTIMONIALS */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-3">
              WHY CLIENTS TRUST US
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F2922] leading-tight">
              The proof is in the relationships.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#4A6B52]/15 p-8 rounded-3xl shadow-sm relative flex flex-col justify-between"
              >
                {/* Quote Icon */}
                <div className="font-serif text-5xl text-[#4A6B52]/10 absolute top-4 left-6 pointer-events-none select-none">
                  “
                </div>
                <div className="relative z-10">
                  <p className="text-xs md:text-sm text-[#1F2922]/80 leading-relaxed font-medium mb-8 italic">
                    {t.quote}
                  </p>
                </div>
                <div className="border-t border-[#4A6B52]/10 pt-4 flex flex-col">
                  <span className="font-serif font-bold text-[#1F2922] text-sm">
                    {t.author}
                  </span>
                  <span className="text-[10px] font-bold text-[#4A6B52] tracking-wide uppercase mt-0.5">
                    {t.context}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL FOOTPRINT INTERACTIVE MAP SECTION */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-3">
              GLOBAL PRESENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F2922] leading-tight mb-4">
              On the ground where decisions get made.
            </h2>
            <p className="text-sm text-[#1F2922]/60 font-semibold mb-8">
              Toggle between practices to see where our research and wealth management teams operate.
            </p>

            {/* Filter Toggle Buttons */}
            <div className="inline-flex bg-[#FAF8F5] border border-[#4A6B52]/15 rounded-full p-1.5 shadow-sm">
              <button
                onClick={() => setMapFilter("all")}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold transition focus:outline-none ${mapFilter === "all" ? 'bg-[#1F2922] text-[#FAF8F5]' : 'text-[#1F2922]/70 hover:text-[#1F2922]'}`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>All</span>
              </button>
              <button
                onClick={() => setMapFilter("research")}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold transition focus:outline-none ${mapFilter === "research" ? 'bg-[#1F2922] text-[#FAF8F5]' : 'text-[#1F2922]/70 hover:text-[#1F2922]'}`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Research</span>
              </button>
              <button
                onClick={() => setMapFilter("wealth")}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold transition focus:outline-none ${mapFilter === "wealth" ? 'bg-[#1F2922] text-[#FAF8F5]' : 'text-[#1F2922]/70 hover:text-[#1F2922]'}`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Wealth Management</span>
              </button>
            </div>
          </div>

          {/* Interactive World Map Container */}
          <div className="bg-[#FAF8F5] border border-[#4A6B52]/15 rounded-3xl p-4 md:p-8 relative shadow-sm overflow-hidden mb-12">
            <div className="relative w-full aspect-[950/620] max-w-5xl mx-auto">
              
              {/* Map SVG Image (Requested Wikimedia map rendered cleanly) */}
              <img 
                src="/world-map.svg" 
                alt="World Map Footprint" 
                className="w-full h-full object-contain select-none opacity-90 brightness-95" 
              />
              
              {/* Overlay Interactive Office Markers */}
              {offices.map((office) => {
                // Determine visibility based on active filter
                const isFilteredOut = 
                  (mapFilter === "research" && office.practice === "wealth") ||
                  (mapFilter === "wealth" && office.practice === "research");
                
                return (
                  <div 
                    key={office.id}
                    className="absolute transition-all duration-300"
                    style={{ 
                      top: office.top, 
                      left: office.left,
                      opacity: isFilteredOut ? 0.15 : 1,
                      pointerEvents: isFilteredOut ? 'none' : 'auto'
                    }}
                    onMouseEnter={() => setHoveredOfficeId(office.id)}
                    onMouseLeave={() => setHoveredOfficeId(null)}
                  >
                    {/* Ring Pulse Container */}
                    <div className="relative flex items-center justify-center w-6 h-6">
                      
                      {/* Pulse Ring */}
                      {!isFilteredOut && (
                        <span className={`absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping ${
                          office.practice === 'research' ? 'bg-blue-400' : 
                          office.practice === 'wealth' ? 'bg-[#4A6B52]' : 'bg-[#1F2922]'
                        }`}></span>
                      )}

                      {/* Main dot circle button */}
                      <button 
                        className={`w-3.5 h-3.5 rounded-full border-2 border-white shadow-md relative z-10 transition-transform ${
                          office.practice === 'research' ? 'bg-blue-600' : 
                          office.practice === 'wealth' ? 'bg-[#4A6B52]' : 'bg-white'
                        } ${hoveredOfficeId === office.id ? 'scale-125' : ''}`}
                        aria-label={`Office in ${office.city}`}
                      />
                    </div>

                    {/* Desktop Hover Tooltip */}
                    {hoveredOfficeId === office.id && !isFilteredOut && (
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#1F2922] text-[#FAF8F5] px-3.5 py-2 rounded-xl text-[10px] font-bold shadow-xl border border-white/10 z-50 whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-150">
                        <div className="flex items-center gap-1.5 justify-center">
                          <MapPin className="w-3 h-3 text-[#4A6B52]" />
                          <span>{office.city}</span>
                        </div>
                        <div className="text-[#FAF8F5]/60 mt-0.5 text-center">{office.badge}</div>
                      </div>
                    )}
                  </div>
                );
              })}

            </div>

            {/* Map Legend */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 border-t border-[#4A6B52]/10 pt-6 text-[10px] font-bold text-[#1F2922]/70">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 border border-white shadow-sm"></span>
                Research Practice
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4A6B52] border border-white shadow-sm"></span>
                Wealth Management
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white border border-neutral-400 shadow-sm"></span>
                Both Practices (Hub)
              </span>
            </div>
          </div>

          {/* Filtered Office cards grid below the map */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffices.map((office) => (
              <div 
                key={office.id}
                className="bg-[#FAF8F5]/50 border border-[#4A6B52]/15 p-6 rounded-2xl hover:border-[#4A6B52]/30 transition duration-200"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="font-serif font-bold text-[#1F2922] text-lg">
                    {office.city}
                  </h3>
                  <span className={`text-[9px] font-bold border rounded-full px-2.5 py-0.5 tracking-wide ${office.badgeStyle}`}>
                    {office.badge}
                  </span>
                </div>
                <p className="text-xs text-[#1F2922]/70 leading-relaxed font-semibold">
                  {office.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CHOOSE YOUR PATH / BOTTOM CTA SECTION */}
      <section id="contact" className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto bg-white border border-[#4A6B52]/15 rounded-3xl p-8 md:p-12 text-center shadow-md">
          <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-3">
            GET STARTED
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight mb-4 max-w-2xl mx-auto">
            Let's build conviction together.
          </h2>
          <p className="text-sm text-[#1F2922]/60 max-w-lg mx-auto mb-10 font-semibold">
            Whether you're an institution evaluating coverage or an individual planning your next decade — we'll route you to the right team within one business day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Institution button */}
            <a 
              href="/#institutional-consult"
              className="bg-[#1F2922] text-[#FAF8F5] border border-transparent p-6 rounded-2xl hover:bg-black transition duration-200 text-left flex flex-col justify-between min-h-[140px] shadow relative group"
            >
              <div className="absolute top-6 right-6 text-white/50 group-hover:text-white transition">
                <ArrowUpRight className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#FAF8F5]/60 tracking-wider block mb-1">FOR INSTITUTIONS</span>
                <span className="text-xl font-serif font-bold">Talk to research</span>
              </div>
            </a>

            {/* Individual button */}
            <a 
              href="/#wealth-consult"
              className="bg-[#4A6B52] text-[#FAF8F5] border border-transparent p-6 rounded-2xl hover:bg-[#3E5944] transition duration-200 text-left flex flex-col justify-between min-h-[140px] shadow relative group"
            >
              <div className="absolute top-6 right-6 text-white/50 group-hover:text-white transition">
                <ArrowUpRight className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-white/60 tracking-wider block mb-1">FOR INDIVIDUALS</span>
                <span className="text-xl font-serif font-bold">Book a wealth consult</span>
              </div>
            </a>
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

    </div>
  );
}
