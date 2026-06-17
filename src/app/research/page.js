"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Layers, 
  FileText, 
  Building, 
  TrendingUp, 
  Briefcase, 
  Award, 
  Users, 
  ChevronDown, 
  ChevronRight, 
  Check, 
  X, 
  ArrowUpRight, 
  ArrowRight, 
  BookOpen, 
  Quote, 
  Search, 
  Settings,
  HelpCircle,
  Percent,
  Play
} from "lucide-react";

import ResearchTargetsDashboard from "@/components/ResearchTargetsDashboard";

export default function ResearchPage() {
  // Navigation drop-downs
  const [researchOpen, setResearchOpen] = useState(false);
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

  // Carousel Index for "Recent Reports"
  const [reportIndex, setReportIndex] = useState(0);

  // Pricing Matrix selection
  const [pricingTab, setPricingTab] = useState("research"); // "research" | "wealth"

  // FAQ Accordion state
  const [faqState, setFaqState] = useState({
    r0: false,
    r1: false,
    r2: false,
    w0: false,
    w1: false,
    w2: false,
  });

  const toggleFaq = (key) => {
    setFaqState(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // 6 Reports list for carousel
  const reportsList = [
    {
      type: "EQUITY RESEARCH",
      isEquity: true,
      badge: "BUY",
      title: "Larsen & Toubro · Initiating Coverage",
      desc: "Multi-year capex cycle, margin expansion ahead.",
      upside: "+24%",
    },
    {
      type: "THEMATIC RESEARCH",
      isEquity: false,
      badge: "Overweight",
      title: "AI Compute Value Chain 2026",
      desc: "Foundry, HBM, networking — winners through the cycle.",
      upside: "Theme",
    },
    {
      type: "EQUITY RESEARCH",
      isEquity: true,
      badge: "HOLD",
      title: "Tata Elxsi · Q3 Update",
      desc: "Auto ER&D mix shifts; EBITDA guide intact.",
      upside: "+9%",
    },
    {
      type: "THEMATIC RESEARCH",
      isEquity: false,
      badge: "Overweight",
      title: "India Defence Indigenisation",
      desc: "Order book visibility 5x trailing revenue.",
      upside: "Theme",
    },
    {
      type: "EQUITY RESEARCH",
      isEquity: true,
      badge: "BUY",
      title: "Kaynes Technology · Deep-Dive",
      desc: "OSAT optionality, electronics PLI tailwinds.",
      upside: "+31%",
    },
    {
      type: "THEMATIC RESEARCH",
      isEquity: false,
      badge: "Overweight",
      title: "Energy Transition · 2026 Map",
      desc: "Storage, grid and BESS economics inflect.",
      upside: "Theme",
    }
  ];

  const handleNextReport = () => {
    setReportIndex((prev) => (prev < reportsList.length - 3 ? prev + 1 : 0));
  };

  const handlePrevReport = () => {
    setReportIndex((prev) => (prev > 0 ? prev - 1 : reportsList.length - 3));
  };

  // Deep tech sector cards list
  const sectorCards = [
    {
      title: "Cloud Infrastructure",
      count: "48 cos",
      tag: "SECTOR: CLOUD & INFRA",
      subSectors: ["Cloud Storage", "Cloud Compute", "DBMS PaaS", "DevOps", "Network Fabric", "Big Data"],
      linkText: "View Cloud & Infra reports",
      icon: <Layers className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Cybersecurity",
      count: "32 cos",
      tag: "SECTOR: CYBERSECURITY",
      subSectors: ["Next-Gen Firewall", "Zero Trust", "XDR", "Threat Mgmt", "Disaster Recovery"],
      linkText: "View Cybersecurity reports",
      icon: <Building className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Biotechnology",
      count: "26 cos",
      tag: "SECTOR: CONSUMER",
      subSectors: ["PBPP", "Bio Services", "Gene Therapy", "mRNA", "Bio Informatics"],
      linkText: "View Consumer reports",
      icon: <Users className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Artificial Intelligence",
      count: "41 cos",
      tag: "SECTOR: DEEP TECH",
      subSectors: ["ML / DL", "NLP", "Computer Vision", "Generative AI", "LLMs", "RPA"],
      linkText: "View Deep Tech reports",
      icon: <Settings className="w-5 h-5 text-blue-400" />
    },
    {
      title: "CPE & Semiconductors",
      count: "55 cos",
      tag: "SECTOR: SEMICONDUCTORS",
      subSectors: ["Memory", "Analog ICs", "GPUs / MPUs", "Sensors", "Data Center Tech"],
      linkText: "View Semiconductors reports",
      icon: <CpuIcon className="w-5 h-5 text-blue-400" />
    },
    {
      title: "EV & New Energy",
      count: "29 cos",
      tag: "SECTOR: AUTO & EV",
      subSectors: ["BEVs", "PHEVs", "FCEVs", "Buses & Trucks", "Energy Systems"],
      linkText: "View Auto & EV reports",
      icon: <TrendingUp className="w-5 h-5 text-blue-400" />
    },
    {
      title: "B2B SaaS",
      count: "34 cos",
      tag: "SECTOR: CLOUD & INFRA",
      subSectors: ["Collaboration", "HRMS", "Lifescience", "Logistics", "Fintech"],
      linkText: "View Cloud & Infra reports",
      icon: <Layers className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Industry 4.0 & Space",
      count: "22 cos",
      tag: "SECTOR: SPACETECH",
      subSectors: ["IoT", "Robotics", "Cyber-Physical", "SpaceTech", "MES"],
      linkText: "View SpaceTech reports",
      icon: <Building className="w-5 h-5 text-blue-400" />
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
            <a href="#pricing" className="text-[#1F2922]/70 hover:text-[#1F2922] transition">Pricing</a>
            
            {/* Research Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResearchOpen(true)}
              onMouseLeave={() => setResearchOpen(false)}
            >
              <div className="flex items-center gap-0.5 py-1.5">
                <a 
                  href="/research"
                  className="flex items-center gap-1.5 text-[#4A6B52] hover:text-[#4A6B52] transition"
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
                  className="p-0.5 text-[#4A6B52] hover:text-[#4A6B52] transition cursor-pointer focus:outline-none"
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
            <a href="#signin" className="text-sm font-medium text-[#1F2922]/70 hover:text-[#1F2922] transition">Sign in</a>
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
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-grid">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="bg-white/80 backdrop-blur-sm border border-[#4A6B52]/15 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              RESEARCH
            </span>

            <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-[#1F2922] leading-[1.08] mb-6">
              Independent research<br />that institutions actually<br /><span className="text-blue-600">act on.</span>
            </h1>

            <p className="text-base md:text-lg text-[#1F2922]/75 leading-relaxed max-w-2xl mb-8">
              7,000+ stocks under our screen. 300+ deep-tech names under coverage. Equity, thematic and customised research — built on a Q · P · V · T discipline and trusted by allocators across the world.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a 
                href="#contact" 
                className="bg-[#1F2922] text-[#FAF8F5] text-sm font-semibold py-3 px-6 rounded-full hover:bg-[#2A392F] transition duration-200 shadow-sm flex items-center gap-2"
              >
                Talk to research <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="#recent-reports" 
                className="bg-white border border-[#4A6B52]/20 text-[#1F2922] text-sm font-semibold py-3 px-6 rounded-full hover:bg-[#FAF8F5] transition duration-200 shadow-sm"
              >
                See sample reports
              </a>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#4A6B52]/10 w-full">
              <div>
                <span className="text-2xl md:text-3xl font-serif font-bold text-[#1F2922] block">1,800+</span>
                <span className="text-[10px] uppercase font-bold text-[#1F2922]/40 tracking-wider">CLIENTS</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-serif font-bold text-[#1F2922] block">7,000+</span>
                <span className="text-[10px] uppercase font-bold text-[#1F2922]/40 tracking-wider">STOCKS SCREENED</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-serif font-bold text-[#1F2922] block">300+</span>
                <span className="text-[10px] uppercase font-bold text-[#1F2922]/40 tracking-wider">DEEP-TECH NAMES</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-serif font-bold text-[#1F2922] block">25+</span>
                <span className="text-[10px] uppercase font-bold text-[#1F2922]/40 tracking-wider">SUB-SECTORS</span>
              </div>
            </div>
          </div>

          {/* Hero Right Content: Stock coverage card layout */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 shadow-xl w-full max-w-[450px]">
              <div className="flex items-center justify-between border-b border-[#4A6B52]/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#1F2922] text-[#FAF8F5] w-8 h-8 rounded-lg flex items-center justify-center font-bold font-serif text-sm">
                    C
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#1F2922]">CrispIdea · Equity Research</h4>
                    <span className="text-[9px] uppercase font-bold text-[#4A6B52] tracking-wider block mt-0.5">INITIATING COVERAGE · BUY</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[8px] font-bold text-[#1F2922]/40 block uppercase">TARGET</span>
                  <span className="text-lg font-bold font-mono text-blue-600">₹2,840</span>
                </div>
              </div>

              {/* CMP / Upside / Rating Grid */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="bg-[#FAF8F5] border border-[#4A6B52]/10 rounded-xl p-3 text-center">
                  <span className="text-[9px] text-[#1F2922]/50 font-semibold block uppercase">CMP</span>
                  <span className="text-sm font-bold font-mono text-[#1F2922]">₹2,210</span>
                </div>
                <div className="bg-[#FAF8F5] border border-[#4A6B52]/10 rounded-xl p-3 text-center">
                  <span className="text-[9px] text-[#1F2922]/50 font-semibold block uppercase">UPSIDE</span>
                  <span className="text-sm font-bold font-mono text-blue-600">+28.5%</span>
                </div>
                <div className="bg-[#FAF8F5] border border-[#4A6B52]/10 rounded-xl p-3 text-center">
                  <span className="text-[9px] text-[#1F2922]/50 font-semibold block uppercase">RATING</span>
                  <span className="text-sm font-bold font-serif text-[#1F2922]">BUY</span>
                </div>
              </div>

              {/* Slider Metrics */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-[#1F2922]/70 mb-1">
                    <span>Quality</span>
                    <span className="font-mono">86</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1F2922] rounded-full" style={{ width: "86%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-[#1F2922]/70 mb-1">
                    <span>Performance</span>
                    <span className="font-mono">74</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1F2922] rounded-full" style={{ width: "74%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-[#1F2922]/70 mb-1">
                    <span>Valuation</span>
                    <span className="font-mono">68</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1F2922] rounded-full" style={{ width: "68%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-[#1F2922]/70 mb-1">
                    <span>Technicals</span>
                    <span className="font-mono">81</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1F2922] rounded-full" style={{ width: "81%" }}></div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-[#1F2922]/70 italic leading-relaxed border-t border-[#4A6B52]/5 pt-4 mb-4">
                Excerpt — "Capex cycle and order book give multi-year revenue visibility; margin expansion likely as ramp normalises..."
              </p>

              <div className="flex items-center justify-between text-[10px] font-bold">
                <span className="text-[#1F2922]/40 tracking-wider">32-PAGE REPORT</span>
                <a href="#recent-reports" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  READ FULL <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TRUSTED BY CLIENTS BANNER */}
      <section className="py-12 bg-white border-b border-[#4A6B52]/10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[10px] font-bold text-[#4A6B52] uppercase tracking-wider block mb-6">
            TRUSTED CLIENTS
          </span>
          <h3 className="text-2xl md:text-3xl font-serif text-[#1F2922] mb-8 leading-tight">
            Trusted by 1,800+ clients across the world
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-45 select-none grayscale">
            <span className="font-serif font-black text-[#1F2922] tracking-tight text-lg">T. Rowe Price</span>
            <span className="font-serif font-black text-[#1F2922] tracking-tight text-lg">Capital Group</span>
            <span className="font-serif font-black text-[#1F2922] tracking-tight text-lg">Vanguard</span>
            <span className="font-serif font-black text-[#1F2922] tracking-tight text-lg">BNP Paribas</span>
            <span className="font-serif font-black text-[#1F2922] tracking-tight text-lg">BlackRock</span>
            <span className="font-serif font-black text-[#1F2922] tracking-tight text-lg">Goldman Sachs</span>
            <span className="font-serif font-black text-[#1F2922] tracking-tight text-lg">Morgan Stanley</span>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              OUR RESEARCH SERVICES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight max-w-xl mb-4">
              Three formats. One research-first DNA.
            </h2>
            <p className="text-xs md:text-sm text-[#1F2922]/70 max-w-2xl leading-relaxed">
              Whether you need standing coverage, a sector deep-dive or a custom mandate, every output is built on the same Q · P · V · T discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="bg-blue-50 text-blue-600 w-10 h-10 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1F2922] mb-3">Equity Research</h3>
                <p className="text-xs text-[#1F2922]/60 mb-6 leading-relaxed">Deep fundamental coverage on listed companies.</p>
                <ul className="space-y-3.5 text-xs text-[#1F2922]/80 font-medium mb-8">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>Initiating coverage, quarterly updates and event notes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>Detailed financial models with 3-statement build-up</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>BUY / SELL / HOLD calls with target price and upside</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>Coverage across India and global deep-tech names</span>
                  </li>
                </ul>
              </div>
              <a href="#recent-reports" className="bg-[#1F2922] text-[#FAF8F5] text-xs font-semibold py-3 px-6 rounded-lg text-center hover:bg-[#2A392F] transition duration-200 flex items-center justify-center gap-1">
                Explore equity reports ↗
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="bg-[#4A6B52]/10 text-[#4A6B52] w-10 h-10 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1F2922] mb-3">Thematic Research</h3>
                <p className="text-xs text-[#1F2922]/60 mb-6 leading-relaxed">Sector & macro themes for global allocators.</p>
                <ul className="space-y-3.5 text-xs text-[#1F2922]/80 font-medium mb-8">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>Multi-year structural themes — AI, energy transition, EV, biotech</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>Sector primers, value-chain maps and pricing dynamics</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>Cross-asset implications and basket ideas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>Quarterly theme dashboards and screeners</span>
                  </li>
                </ul>
              </div>
              <a href="#heatmap" className="bg-[#1F2922] text-[#FAF8F5] text-xs font-semibold py-3 px-6 rounded-lg text-center hover:bg-[#2A392F] transition duration-200 flex items-center justify-center gap-1">
                Explore thematic reports ↗
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="bg-slate-100 text-slate-700 w-10 h-10 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1F2922] mb-3">Customised Research</h3>
                <p className="text-xs text-[#1F2922]/60 mb-6 leading-relaxed">Bespoke studies tailored to client mandates.</p>
                <ul className="space-y-3.5 text-xs text-[#1F2922]/80 font-medium mb-8">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>Scoped research-on-demand for funds, family offices and corporates</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>Competitor benchmarking and market-sizing studies</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>Diligence support and channel-check programs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>White-label reports and analyst access</span>
                  </li>
                </ul>
              </div>
              <a href="#contact" className="bg-[#1F2922] text-[#FAF8F5] text-xs font-semibold py-3 px-6 rounded-lg text-center hover:bg-[#2A392F] transition duration-200 flex items-center justify-center gap-1">
                Talk to our team ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT REPORTS CAROUSEL */}
      <section id="recent-reports" className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
                RECENT REPORTS
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight">
                A peek into our equity<br />& thematic shelf.
              </h2>
              <p className="text-xs md:text-sm text-[#1F2922]/60 mt-2">
                Tap the arrows to flip through recent published work — initiating notes, deep-dives and theme primers.
              </p>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={handlePrevReport}
                className="w-10 h-10 rounded-full border border-[#4A6B52]/20 flex items-center justify-center hover:bg-[#FAF8F5] transition focus:outline-none"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <button 
                onClick={handleNextReport}
                className="w-10 h-10 rounded-full border border-[#4A6B52]/20 flex items-center justify-center hover:bg-[#FAF8F5] transition focus:outline-none"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards viewport */}
          <div className="w-full overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${reportIndex * 34.5}%)` }}
            >
              {reportsList.map((card, i) => (
                <div 
                  key={i} 
                  className="w-full md:w-[32%] shrink-0 bg-[#FAF8F5]/50 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between h-56"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className={`text-[9px] font-bold tracking-wider ${card.isEquity ? 'text-blue-600' : 'text-[#1F2922]/50'}`}>
                        {card.type}
                      </span>
                      <span className="bg-white border border-[#4A6B52]/10 px-2 py-0.5 rounded-full text-[9px] font-bold text-[#1F2922]">
                        {card.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-serif font-bold text-[#1F2922] leading-snug mb-2">
                      {card.title}
                    </h4>
                    <p className="text-xs text-[#1F2922]/60 leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>

                  <div className="flex justify-between items-end border-t border-[#4A6B52]/5 pt-4 text-[10px] font-bold">
                    <span className="text-[#1F2922]/40 tracking-wider">UPSIDE / VIEW</span>
                    <span className={card.isEquity ? 'text-[#4A6B52] font-mono text-sm' : 'text-blue-600 font-mono text-sm'}>
                      {card.upside}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section id="methodology" className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              OUR METHODOLOGY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight mb-4 max-w-xl">
              Rigorous process.<br />Consistent outcomes.
            </h2>
            <p className="text-xs md:text-sm text-[#1F2922]/70 max-w-2xl leading-relaxed">
              The Q · P · V · T discipline — quality, performance, valuation and technicals — every call passes the same four-filter funnel.
            </p>
          </div>

          {/* Process steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch relative">
            
            {/* Step 1 */}
            <div className="relative flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1F2922] text-[#FAF8F5] w-12 h-12 rounded-full flex items-center justify-center font-bold font-serif text-lg">
                  Q
                </div>
                <div className="h-[1px] bg-[#4A6B52]/20 flex-1 hidden md:block"></div>
                <ChevronRight className="w-4 h-4 text-[#4A6B52]/40 hidden md:block" />
              </div>
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">01 — QUALITY</span>
                  <h4 className="text-base font-serif font-bold text-[#1F2922] mb-3 leading-snug">Earnings quality & management integrity</h4>
                  <p className="text-xs text-[#1F2922]/65 leading-relaxed font-medium mb-6">
                    Every company is screened for earnings strength, debt risk, market relevance and our proprietary Quality of Management (QoM) score — assessing leadership integrity, capital allocation discipline and governance.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">QoM scoring</span>
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">Earnings quality</span>
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">Debt risk</span>
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">Governance</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1F2922] text-[#FAF8F5] w-12 h-12 rounded-full flex items-center justify-center font-bold font-serif text-lg">
                  P
                </div>
                <div className="h-[1px] bg-[#4A6B52]/20 flex-1 hidden md:block"></div>
                <ChevronRight className="w-4 h-4 text-[#4A6B52]/40 hidden md:block" />
              </div>
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">02 — PERFORMANCE</span>
                  <h4 className="text-base font-serif font-bold text-[#1F2922] mb-3 leading-snug">Consistent growth & benchmark-beating returns</h4>
                  <p className="text-xs text-[#1F2922]/65 leading-relaxed font-medium mb-6">
                    We narrow to companies with consistent revenue growth, ROE momentum and a track record of beating estimates. For funds, we compare 3/5/10-year returns, benchmark alpha and peer outperformance.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">Revenue growth</span>
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">ROE momentum</span>
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">Estimate beat</span>
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">Alpha</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1F2922] text-[#FAF8F5] w-12 h-12 rounded-full flex items-center justify-center font-bold font-serif text-lg">
                  V
                </div>
                <div className="h-[1px] bg-[#4A6B52]/20 flex-1 hidden md:block"></div>
                <ChevronRight className="w-4 h-4 text-[#4A6B52]/40 hidden md:block" />
              </div>
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">03 — VALUATION</span>
                  <h4 className="text-base font-serif font-bold text-[#1F2922] mb-3 leading-snug">Disciplined entry — price must make sense</h4>
                  <p className="text-xs text-[#1F2922]/65 leading-relaxed font-medium mb-6">
                    We apply DCF and peer multiples to confirm margin of safety, liquidity and price patterns. For funds, we assess risk ratios, cost structures and inflow/outflow dynamics.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">DCF analysis</span>
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">Multiples</span>
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">Margin of safety</span>
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">Liquidity check</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1F2922] text-[#FAF8F5] w-12 h-12 rounded-full flex items-center justify-center font-bold font-serif text-lg">
                  T
                </div>
              </div>
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">04 — TECHNICALS</span>
                  <h4 className="text-base font-serif font-bold text-[#1F2922] mb-3 leading-snug">Favourable price signals & entry timing</h4>
                  <p className="text-xs text-[#1F2922]/65 leading-relaxed font-medium mb-6">
                    Proprietary AI models scan for optimal entry and exit signals — institutional buy propensity, price pattern confirmation and momentum alignment — ensuring we enter at the right time, not just the right price.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">AI signals</span>
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">Buy propensity</span>
                  <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[8px] font-bold text-[#1F2922]/60">Momentum</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DEEP TECH SECTORS GRID */}
      <section className="py-20 px-6 lg:px-12 bg-[#1F2922] text-[#FAF8F5] border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
                DEEP TECH SECTORS WE COVER
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#FAF8F5] leading-tight">
                A leading authority in<br />deep-tech research.
              </h2>
              <p className="text-xs md:text-sm text-[#FAF8F5]/60 mt-3 max-w-xl leading-relaxed">
                300+ publicly traded companies, across 25+ sub-sectors. Click any sector to jump to the matching reports.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div>
                <span className="text-2xl font-serif font-bold text-[#FAF8F5] block">300+</span>
                <span className="text-[9px] uppercase font-bold text-[#FAF8F5]/40 tracking-wider">COMPANIES</span>
              </div>
              <div className="border-l border-[#FAF8F5]/10 pl-6">
                <span className="text-2xl font-serif font-bold text-[#FAF8F5] block">25+</span>
                <span className="text-[9px] uppercase font-bold text-[#FAF8F5]/40 tracking-wider">SUB-SECTORS</span>
              </div>
              <div className="border-l border-[#FAF8F5]/10 pl-6">
                <span className="text-2xl font-serif font-bold text-[#FAF8F5] block">50+</span>
                <span className="text-[9px] uppercase font-bold text-[#FAF8F5]/40 tracking-wider">CONSENSUS CONTRIBUTIONS</span>
              </div>
            </div>

            <a href="#recent-reports" className="bg-transparent border border-white text-white text-xs font-bold py-3 px-6 rounded-full hover:bg-white hover:text-[#1F2922] transition duration-200">
              Browse all thematic reports ↗
            </a>
          </div>

          {/* Sectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {sectorCards.map((sector, i) => (
              <div 
                key={i} 
                className="bg-[#121A14] border border-[#4A6B52]/20 rounded-2xl p-6 flex flex-col justify-between hover:border-[#4A6B52]/50 transition duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-[#1F2922] w-9 h-9 rounded-lg flex items-center justify-center border border-[#4A6B52]/10">
                      {sector.icon}
                    </div>
                    <span className="bg-[#1F2922] border border-[#4A6B52]/20 px-2 py-0.5 rounded text-[8px] text-[#FAF8F5]/70 font-mono">
                      {sector.count}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#FAF8F5] mb-1">{sector.title}</h3>
                  <span className="text-[8px] uppercase font-bold text-[#4A6B52] tracking-wider block mb-4">{sector.tag}</span>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {sector.subSectors.map((sub, idx) => (
                      <span key={idx} className="bg-[#1F2922] border border-[#4A6B52]/10 px-2 py-0.5 rounded text-[9px] text-[#FAF8F5]/60 font-medium">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="#recent-reports" className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-auto pt-4 border-t border-[#FAF8F5]/5">
                  {sector.linkText} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HEATMAP / PERFORMANCE INTEGRATION */}
      <section id="heatmap" className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              PERFORMANCE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight mb-3">
              Calls we made. Targets we hit.
            </h2>
            <p className="text-xs md:text-sm text-[#1F2922]/60 max-w-xl">
              A heat map of recommendations where CrispIdea's target price was achieved. Tap on a tile — the chart on the right updates instantly.
            </p>
            <div className="mt-4 flex items-center gap-2 bg-blue-50 text-blue-800 text-[10px] font-bold py-1 px-3.5 rounded-full w-fit border border-blue-100">
              <span className="inline-block w-1 h-1 rounded-full bg-blue-600 animate-ping"></span>
              Tap a tile — brighter green = stronger call
            </div>
          </div>

          {/* Embed dashboard */}
          <ResearchTargetsDashboard />

        </div>
      </section>

      {/* BUILT FOR ALLOCATORS */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              WHO WE SERVE · WHAT SETS US APART
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight mb-4 max-w-xl">
              Built for the people who allocate capital.
            </h2>
            <p className="text-xs md:text-sm text-[#1F2922]/60 mt-2 max-w-2xl leading-relaxed">
              Our research is consumed by professionals who can't afford noise — and need conviction they can defend in an investment committee.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-white border border-[#4A6B52]/15 rounded-full px-3 py-1 text-[10px] font-semibold text-[#1F2922]/80">Asset managers & hedge funds</span>
              <span className="bg-white border border-[#4A6B52]/15 rounded-full px-3 py-1 text-[10px] font-semibold text-[#1F2922]/80">Family offices & UHNI desks</span>
              <span className="bg-white border border-[#4A6B52]/15 rounded-full px-3 py-1 text-[10px] font-semibold text-[#1F2922]/80">Corporates & strategy teams</span>
              <span className="bg-white border border-[#4A6B52]/15 rounded-full px-3 py-1 text-[10px] font-semibold text-[#1F2922]/80">Sell-side & wealth distributors</span>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6">
              <div className="bg-slate-100 text-slate-700 w-9 h-9 rounded-xl flex items-center justify-center mb-6">
                <Building className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-[#1F2922] mb-2">Independent & unbiased</h4>
              <p className="text-xs text-[#1F2922]/65 leading-relaxed font-medium">
                No investment-banking, no broking conflicts. Research that points where the conviction is — not where the deal is.
              </p>
            </div>
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6">
              <div className="bg-slate-100 text-slate-700 w-9 h-9 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-[#1F2922] mb-2">Q · P · V · T discipline</h4>
              <p className="text-xs text-[#1F2922]/65 leading-relaxed font-medium">
                Quality, Performance, Valuation, Technicals — every call passes the same four-filter funnel.
              </p>
            </div>
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6">
              <div className="bg-slate-100 text-slate-700 w-9 h-9 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-[#1F2922] mb-2">Global × India lens</h4>
              <p className="text-xs text-[#1F2922]/65 leading-relaxed font-medium">
                Coverage across India, US and global deep-tech — connecting macro themes to actionable names.
              </p>
            </div>
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6">
              <div className="bg-slate-100 text-slate-700 w-9 h-9 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-[#1F2922] mb-2">Built for allocators</h4>
              <p className="text-xs text-[#1F2922]/65 leading-relaxed font-medium">
                Designed for funds, family offices and corporates — clean models, decision-ready notes, fast turnaround.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* RESEARCH TEAM SECTION */}
      <section id="analysts" className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              RESEARCH TEAM
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight mb-4 max-w-xl">
              Led by a seasoned head of research.
            </h2>
            <p className="text-xs md:text-sm text-[#1F2922]/65 mt-2 max-w-2xl leading-relaxed">
              A bench of sector specialists who turn raw data into decision-ready conviction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Shejal Ajmera card */}
            <div className="lg:col-span-6 bg-[#0B132B] text-white rounded-2xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider block mb-6">HEAD OF RESEARCH</span>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/10 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold font-serif text-xl border border-white/10">
                    SA
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">Shejal Ajmera</h3>
                    <span className="text-xs text-[#FAF8F5]/60 mt-0.5 block">Founder & Head of Research, CrispIdea</span>
                  </div>
                </div>
                <p className="text-xs text-[#FAF8F5]/70 leading-relaxed font-medium mb-8">
                  Shejal leads CrispIdea's research desk, setting the methodology, sector priorities and quality bar across equity, thematic and customised work. She has over 20 years of experience in equity research and investment analysis. She has led research desks at premier financial institutions and has a deep track record in technology and industrial sectors, defining CrispIdea's rigorous QoM frameworks.
                </p>
              </div>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 border border-white/20 text-white text-xs font-bold py-2.5 px-5 rounded-full hover:bg-white/20 transition duration-200 flex items-center justify-center gap-1.5 w-fit"
              >
                <LinkedinIcon className="w-3.5 h-3.5 fill-white" /> Connect with Shejal
              </a>
            </div>

            {/* Right: Analysts list */}
            <div className="lg:col-span-6 bg-[#FAF8F5] border border-[#4A6B52]/10 rounded-2xl p-8 flex flex-col shadow-sm">
              <span className="text-[10px] uppercase font-bold text-[#4A6B52] tracking-wider block mb-6">ANALYSTS</span>
              <h3 className="text-xl font-serif font-bold text-[#1F2922] mb-6 pb-4 border-b border-[#4A6B52]/10">Our research desk</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3.5 border-b border-[#4A6B52]/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#1F2922]/40">01</span>
                    <span className="text-xs font-bold text-[#1F2922]">Aishwarya Dinesh</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#4A6B52] tracking-wider">ANALYST</span>
                </div>
                <div className="flex justify-between items-center py-3.5 border-b border-[#4A6B52]/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#1F2922]/40">02</span>
                    <span className="text-xs font-bold text-[#1F2922]">Abhishek Rai</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#4A6B52] tracking-wider">ANALYST</span>
                </div>
                <div className="flex justify-between items-center py-3.5 border-b border-[#4A6B52]/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#1F2922]/40">03</span>
                    <span className="text-xs font-bold text-[#1F2922]">Satish Gaonkar</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#4A6B52] tracking-wider">ANALYST</span>
                </div>
                <div className="flex justify-between items-center py-3.5 border-b border-[#4A6B52]/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#1F2922]/40">04</span>
                    <span className="text-xs font-bold text-[#1F2922]">Prajwal Nagpure</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#4A6B52] tracking-wider">ANALYST</span>
                </div>
                <div className="flex justify-between items-center py-3.5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#1F2922]/40">05</span>
                    <span className="text-xs font-bold text-[#1F2922]">Prerana Chowdhery</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#4A6B52] tracking-wider">ANALYST</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="py-20 px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 text-center">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              VOICES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight">
              Why clients stay with us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Testimonial 1 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-8 flex flex-col justify-between shadow-sm relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#4A6B52]/5" />
              <div>
                <p className="text-xs text-[#1F2922]/80 leading-relaxed font-medium italic mb-8">
                  "CrispIdea's QoM reports are now a standing input in our diligence process. Their analyst team reads situations like an insider would."
                </p>
              </div>
              <div className="border-t border-[#4A6B52]/5 pt-4">
                <span className="text-xs font-bold text-[#1F2922] block">Portfolio Manager</span>
                <span className="text-[10px] text-[#1F2922]/50 font-semibold block mt-0.5">Global Long/Short Fund, London</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-8 flex flex-col justify-between shadow-sm relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#4A6B52]/5" />
              <div>
                <p className="text-xs text-[#1F2922]/80 leading-relaxed font-medium italic mb-8">
                  "The plan is simple, the reasoning is rigorous. Every recommendation comes with the research that backs it."
                </p>
              </div>
              <div className="border-t border-[#4A6B52]/5 pt-4">
                <span className="text-xs font-bold text-[#1F2922] block">Senior Tech Executive</span>
                <span className="text-[10px] text-[#1F2922]/50 font-semibold block mt-0.5">Wealth client, Bengaluru</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-8 flex flex-col justify-between shadow-sm relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#4A6B52]/5" />
              <div>
                <p className="text-xs text-[#1F2922]/80 leading-relaxed font-medium italic mb-8">
                  "We replaced two sell-side providers with CrispIdea. Coverage depth and turnaround are in a different league."
                </p>
              </div>
              <div className="border-t border-[#4A6B52]/5 pt-4">
                <span className="text-xs font-bold text-[#1F2922] block">Head of Research</span>
                <span className="text-[10px] text-[#1F2922]/50 font-semibold block mt-0.5">Asia Pacific Brokerage</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INSIGHTS CAROUSEL */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
                INSIGHTS
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight">
                Thinking that compounds.
              </h2>
            </div>
            <a href="https://www.crispidea.com/" className="text-xs font-bold text-[#1F2922] hover:text-[#4A6B52] transition flex items-center gap-1">
              All insights <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Blogs list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Blog 1 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="aspect-[1.8/1] w-full bg-[#121A14] rounded-xl mb-6 relative flex flex-col justify-between p-4 overflow-hidden border border-[#4A6B52]/10 select-none">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-white tracking-wider flex items-center gap-1.5 uppercase">
                      CRISP<span className="text-[#4A6B52]">Idea</span>®
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-serif font-semibold leading-snug">Food and Beverage Industry Restructuring</h3>
                    <p className="text-[8px] text-[#FAF8F5]/50 mt-1 uppercase font-bold tracking-wider">Why Acquisitions, Separations, and Partnerships Are Rising</p>
                  </div>
                  <div className="flex justify-between items-end pt-2">
                    <span className="text-[8px] text-[#FAF8F5]/40 font-mono">www.crispidea.com</span>
                    <span className="bg-[#4A6B52]/20 border border-[#4A6B52]/30 text-white rounded text-[8px] py-0.5 px-2 font-bold flex items-center gap-1">READ NOW</span>
                  </div>
                </div>

                <h3 className="text-base font-serif font-bold text-[#1F2922] mb-2 leading-snug hover:text-[#4A6B52] transition">
                  <a href="https://www.crispidea.com/food-and-beverage-industry-restructuring/" target="_blank" rel="noreferrer">
                    Food and Beverage Industry Restructuring: Why Acquisitions, Separations, and Partnerships Are Rising
                  </a>
                </h3>
                <span className="text-[10px] text-[#1F2922]/40 block mb-3 font-semibold uppercase">May 19, 2026</span>
                <p className="text-xs text-[#1F2922]/65 leading-relaxed font-medium mb-6">
                  The global Food and beverage industry restructuring is becoming one of the most important global business trends as companies respond...
                </p>
              </div>
              <a 
                href="https://www.crispidea.com/food-and-beverage-industry-restructuring/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs font-bold text-[#1F2922] hover:text-[#4A6B52] flex items-center gap-1"
              >
                Read More <span className="font-serif">»</span>
              </a>
            </div>

            {/* Blog 2 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="aspect-[1.8/1] w-full bg-[#121A14] rounded-xl mb-6 relative flex flex-col justify-between p-4 overflow-hidden border border-[#4A6B52]/10 select-none">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-white tracking-wider flex items-center gap-1.5 uppercase">
                      CRISP<span className="text-[#4A6B52]">Idea</span>®
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-serif font-semibold leading-snug">Technology & Deep Tech Equity Research</h3>
                    <p className="text-[8px] text-[#FAF8F5]/50 mt-1 uppercase font-bold tracking-wider">The Complete Guide for Institutional Investors</p>
                  </div>
                  <div className="flex justify-between items-end pt-2">
                    <span className="text-[8px] text-[#FAF8F5]/40 font-mono">www.crispidea.com</span>
                    <span className="bg-[#4A6B52]/20 border border-[#4A6B52]/30 text-white rounded text-[8px] py-0.5 px-2 font-bold flex items-center gap-1">READ NOW</span>
                  </div>
                </div>

                <h3 className="text-base font-serif font-bold text-[#1F2922] mb-2 leading-snug hover:text-[#4A6B52] transition">
                  <a href="https://www.crispidea.com/food-and-beverage-industry-restructuring/" target="_blank" rel="noreferrer">
                    Technology & Deep Tech Equity Research: The Complete Guide for Institutional Investors
                  </a>
                </h3>
                <span className="text-[10px] text-[#1F2922]/40 block mb-3 font-semibold uppercase">May 19, 2026</span>
                <p className="text-xs text-[#1F2922]/65 leading-relaxed font-medium mb-6">
                  AI & Machine Learning · Semiconductors · Cloud & SaaS · Cybersecurity · Quantum Computing · Data Infrastructure · IoT...
                </p>
              </div>
              <a 
                href="https://www.crispidea.com/food-and-beverage-industry-restructuring/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs font-bold text-[#1F2922] hover:text-[#4A6B52] flex items-center gap-1"
              >
                Read More <span className="font-serif">»</span>
              </a>
            </div>

            {/* Blog 3 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="aspect-[1.8/1] w-full bg-[#121A14] rounded-xl mb-6 relative flex flex-col justify-between p-4 overflow-hidden border border-[#4A6B52]/10 select-none">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-white tracking-wider flex items-center gap-1.5 uppercase">
                      CRISP<span className="text-[#4A6B52]">Idea</span>®
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-serif font-semibold leading-snug">NRE vs NRO vs FCNR</h3>
                    <p className="text-[8px] text-[#FAF8F5]/50 mt-1 uppercase font-bold tracking-wider">Choosing the Right Account Structure for Your Indian Assets</p>
                  </div>
                  <div className="flex justify-between items-end pt-2">
                    <span className="text-[8px] text-[#FAF8F5]/40 font-mono">www.crispidea.com</span>
                    <span className="bg-[#4A6B52]/20 border border-[#4A6B52]/30 text-white rounded text-[8px] py-0.5 px-2 font-bold flex items-center gap-1">READ NOW</span>
                  </div>
                </div>

                <h3 className="text-base font-serif font-bold text-[#1F2922] mb-2 leading-snug hover:text-[#4A6B52] transition">
                  <a href="https://www.crispidea.com/nre-vs-nro-vs-fcnr-nri-guide/" target="_blank" rel="noreferrer">
                    NRE vs NRO vs FCNR: Choosing the Right Account Structure for Your Indian Assets
                  </a>
                </h3>
                <span className="text-[10px] text-[#1F2922]/40 block mb-3 font-semibold uppercase">May 21, 2026</span>
                <p className="text-xs text-[#1F2922]/65 leading-relaxed font-medium mb-6">
                  Why Your Account Choice Matters More Than You Think Most NRIs open a bank account in India because their bank...
                </p>
              </div>
              <a 
                href="https://www.crispidea.com/nre-vs-nro-vs-fcnr-nri-guide/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs font-bold text-[#1F2922] hover:text-[#4A6B52] flex items-center gap-1"
              >
                Read More <span className="font-serif">»</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* PRICING ENGAGEMENTS SECTION */}
      <section id="pricing" className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 text-center">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              ENGAGEMENTS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight mb-4">
              Plans for institutions<br />and individuals.
            </h2>
            <p className="text-xs md:text-sm text-[#1F2922]/60">
              Transparent structures for both research mandates and wealth advisory.
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="flex bg-[#FAF8F5] border border-[#4A6B52]/10 p-1 rounded-full shadow-inner w-fit mx-auto mb-12">
            <button
              onClick={() => setPricingTab("research")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 focus:outline-none ${
                pricingTab === "research"
                  ? "bg-[#1F2922] text-[#FAF8F5]"
                  : "text-[#1F2922]/50 hover:text-[#1F2922]"
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              Research - Institutions
            </button>
            <button
              onClick={() => setPricingTab("wealth")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 focus:outline-none ${
                pricingTab === "wealth"
                  ? "bg-[#1F2922] text-[#FAF8F5]"
                  : "text-[#1F2922]/50 hover:text-[#1F2922]"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Wealth - Investors
            </button>
          </div>

          {/* Pricing cards grid */}
          {pricingTab === "research" ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch mb-8">
              {/* Lite */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative">
                <div className="mb-6">
                  <h4 className="text-lg font-serif font-bold text-[#1F2922] text-center mb-4">Lite</h4>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold font-mono">$149</span>
                    <span className="text-xs text-[#1F2922]/50 font-semibold"> /mo</span>
                  </div>
                  <div className="bg-[#FAF8F5] border border-[#4A6B52]/5 rounded-xl p-3.5 text-center mb-6">
                    <span className="text-xs font-bold text-[#1F2922] block">Company Specific Reports</span>
                    <span className="text-[10px] text-[#1F2922]/60 mt-0.5 block">15 Downloads / Month</span>
                  </div>

                  <span className="text-[9px] uppercase font-bold text-[#4A6B52] tracking-wider block mb-4">WHAT'S INCLUDED ON LITE</span>
                  <ul className="space-y-3.5 text-xs text-[#1F2922]/80 font-medium">
                    <li className="flex justify-between">
                      <span className="opacity-70">Excel Model</span>
                      <X className="w-4 h-4 text-red-500" />
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Report related Q&A</span>
                      <span>No</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Preference Launch</span>
                      <X className="w-4 h-4 text-red-500" />
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Customised Research</span>
                      <span>Nil</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Licensing</span>
                      <span>Single</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Expert Calls</span>
                      <X className="w-4 h-4 text-red-500" />
                    </li>
                  </ul>
                </div>
                
                <a href="#buy" className="block text-center text-xs font-bold text-[#1F2922] border border-[#1F2922] py-2.5 rounded-lg hover:bg-[#FAF8F5] transition mt-auto">
                  Buy Now
                </a>
              </div>

              {/* Standard */}
              <div className="bg-white border-2 border-[#1F2922] rounded-2xl p-6 flex flex-col justify-between shadow-md relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-[#FAF8F5] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  ★ MOST POPULAR
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-serif font-bold text-[#1F2922] text-center mb-4">Standard</h4>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold font-mono">$349</span>
                    <span className="text-xs text-[#1F2922]/50 font-semibold"> /mo</span>
                  </div>
                  <div className="bg-[#FAF8F5] border border-[#4A6B52]/5 rounded-xl p-3.5 text-center mb-6">
                    <span className="text-xs font-bold text-[#1F2922] block">Company Specific Reports</span>
                    <span className="text-[10px] text-[#1F2922]/60 mt-0.5 block">30 Downloads / Month</span>
                  </div>

                  <span className="text-[9px] uppercase font-bold text-[#4A6B52] tracking-wider block mb-4">WHAT'S INCLUDED ON STANDARD</span>
                  <ul className="space-y-3.5 text-xs text-[#1F2922]/80 font-medium">
                    <li className="flex justify-between">
                      <span className="opacity-70">Excel Model</span>
                      <X className="w-4 h-4 text-red-500" />
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Report related Q&A</span>
                      <span>2 queries / Month</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Preference Launch</span>
                      <X className="w-4 h-4 text-red-500" />
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Customised Research</span>
                      <span>2 hrs / Month</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Licensing</span>
                      <span>Single</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Expert Calls</span>
                      <X className="w-4 h-4 text-red-500" />
                    </li>
                  </ul>
                </div>
                
                <a href="#buy" className="block text-center text-xs font-bold text-[#FAF8F5] bg-[#1F2922] py-2.5 rounded-lg hover:bg-black transition mt-auto">
                  Buy Now
                </a>
              </div>

              {/* Premium */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative">
                <div className="mb-6">
                  <h4 className="text-lg font-serif font-bold text-[#1F2922] text-center mb-4">Premium</h4>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold font-mono">$699</span>
                    <span className="text-xs text-[#1F2922]/50 font-semibold"> /mo</span>
                  </div>
                  <div className="bg-[#FAF8F5] border border-[#4A6B52]/5 rounded-xl p-3.5 text-center mb-6">
                    <span className="text-xs font-bold text-[#1F2922] block">Company Specific Reports</span>
                    <span className="text-[10px] text-[#1F2922]/60 mt-0.5 block">60 Downloads / Month</span>
                  </div>

                  <span className="text-[9px] uppercase font-bold text-[#4A6B52] tracking-wider block mb-4">WHAT'S INCLUDED ON PREMIUM</span>
                  <ul className="space-y-3.5 text-xs text-[#1F2922]/80 font-medium">
                    <li className="flex justify-between">
                      <span className="opacity-70">Excel Model</span>
                      <Check className="w-4 h-4 text-[#4A6B52]" />
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Report related Q&A</span>
                      <span>5 queries / Month</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Preference Launch</span>
                      <Check className="w-4 h-4 text-[#4A6B52]" />
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Customised Research</span>
                      <span>8 hrs / Month</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Licensing</span>
                      <span>Single</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Expert Calls</span>
                      <Check className="w-4 h-4 text-[#4A6B52]" />
                    </li>
                  </ul>
                </div>
                
                <a href="#buy" className="block text-center text-xs font-bold text-[#1F2922] border border-[#1F2922] py-2.5 rounded-lg hover:bg-[#FAF8F5] transition mt-auto">
                  Buy Now
                </a>
              </div>

              {/* Sector Insights */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative">
                <div className="mb-6">
                  <h4 className="text-lg font-serif font-bold text-[#1F2922] text-center mb-4">Sector Insights</h4>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold font-mono">$1,499</span>
                    <span className="text-xs text-[#1F2922]/50 font-semibold"> /mo</span>
                  </div>
                  <div className="bg-[#FAF8F5] border border-[#4A6B52]/5 rounded-xl p-3.5 text-center mb-6">
                    <span className="text-xs font-bold text-[#1F2922] block">Sector Insights</span>
                    <span className="text-[10px] text-[#1F2922]/60 mt-0.5 block">4 Downloads / Month</span>
                  </div>

                  <span className="text-[9px] uppercase font-bold text-[#4A6B52] tracking-wider block mb-4">WHAT'S INCLUDED ON SECTOR INSIGHTS</span>
                  <ul className="space-y-3.5 text-xs text-[#1F2922]/80 font-medium">
                    <li className="flex justify-between">
                      <span className="opacity-70">Excel Model</span>
                      <X className="w-4 h-4 text-red-500" />
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Report related Q&A</span>
                      <span>8 queries / Month</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Preference Launch</span>
                      <Check className="w-4 h-4 text-[#4A6B52]" />
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Customised Research</span>
                      <span>12 hrs / Month</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Licensing</span>
                      <span>Single</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="opacity-70">Expert Calls</span>
                      <Check className="w-4 h-4 text-[#4A6B52]" />
                    </li>
                  </ul>
                </div>
                
                <a href="#buy" className="block text-center text-xs font-bold text-[#1F2922] border border-[#1F2922] py-2.5 rounded-lg hover:bg-[#FAF8F5] transition mt-auto">
                  Buy Now
                </a>
              </div>
            </div>
          ) : (
            /* Wealth Management Pricing cards */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-3 duration-200">
              {/* Wealth Card 1 */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative">
                <div className="mb-6">
                  <h4 className="text-lg font-serif font-bold text-[#1F2922] text-center mb-4">Fiduciary Advisor</h4>
                  <div className="text-center mb-4">
                    <span className="text-xs text-[#1F2922]/50 font-semibold block uppercase">FEES STRUCTURING</span>
                    <span className="text-2xl font-bold font-mono text-[#1F2922]">0.50% / year</span>
                  </div>
                  <div className="bg-[#FAF8F5] border border-[#4A6B52]/5 rounded-xl p-3.5 text-center mb-6">
                    <span className="text-xs font-bold text-[#1F2922] block">Assets Under Advisory</span>
                    <span className="text-[10px] text-[#1F2922]/60 mt-0.5 block">Fiduciary goal planning & allocation</span>
                  </div>
                  <ul className="space-y-3.5 text-xs text-[#1F2922]/80 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#4A6B52]" />
                      <span>Dedicated Investment Committee reviews</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#4A6B52]" />
                      <span>Direct equities + mutual funds execution</span>
                    </li>
                  </ul>
                </div>
                <a href="#buy" className="block text-center text-xs font-bold text-[#1F2922] border border-[#1F2922] py-2.5 rounded-lg hover:bg-[#FAF8F5] transition mt-auto">
                  Contact Advisory
                </a>
              </div>

              {/* Wealth Card 2 */}
              <div className="bg-white border-2 border-[#1F2922] rounded-2xl p-6 flex flex-col justify-between shadow-md relative">
                <div className="mb-6">
                  <h4 className="text-lg font-serif font-bold text-[#1F2922] text-center mb-4">Discretionary Portfolio</h4>
                  <div className="text-center mb-4">
                    <span className="text-xs text-[#1F2922]/50 font-semibold block uppercase">FEES STRUCTURING</span>
                    <span className="text-2xl font-bold font-mono text-[#1F2922]">1.25% / year</span>
                  </div>
                  <div className="bg-[#FAF8F5] border border-[#4A6B52]/5 rounded-xl p-3.5 text-center mb-6">
                    <span className="text-xs font-bold text-[#1F2922] block">Minimum Ticket: ₹50 Lakhs</span>
                    <span className="text-[10px] text-[#1F2922]/60 mt-0.5 block">Managed accounts under SEBI PMS mandate</span>
                  </div>
                  <ul className="space-y-3.5 text-xs text-[#1F2922]/80 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#4A6B52]" />
                      <span>Customized deep-tech sector baskets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#4A6B52]" />
                      <span>Regular rebalancing & tax optimization</span>
                    </li>
                  </ul>
                </div>
                <a href="#buy" className="block text-center text-xs font-bold text-[#FAF8F5] bg-[#1F2922] py-2.5 rounded-lg hover:bg-black transition mt-auto">
                  Contact Advisory
                </a>
              </div>

              {/* Wealth Card 3 */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm relative">
                <div className="mb-6">
                  <h4 className="text-lg font-serif font-bold text-[#1F2922] text-center mb-4">Multi-Family Office</h4>
                  <div className="text-center mb-4">
                    <span className="text-xs text-[#1F2922]/50 font-semibold block uppercase">FEES STRUCTURING</span>
                    <span className="text-2xl font-bold font-mono text-[#1F2922]">Bespoke pricing</span>
                  </div>
                  <div className="bg-[#FAF8F5] border border-[#4A6B52]/5 rounded-xl p-3.5 text-center mb-6">
                    <span className="text-xs font-bold text-[#1F2922] block">Full Wealth Estate Suite</span>
                    <span className="text-[10px] text-[#1F2922]/60 mt-0.5 block">For large estates & multi-gen accounts</span>
                  </div>
                  <ul className="space-y-3.5 text-xs text-[#1F2922]/80 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#4A6B52]" />
                      <span>Direct VC/PE access & deal flow</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#4A6B52]" />
                      <span>Estate planning, trust setup & compliance</span>
                    </li>
                  </ul>
                </div>
                <a href="#buy" className="block text-center text-xs font-bold text-[#1F2922] border border-[#1F2922] py-2.5 rounded-lg hover:bg-[#FAF8F5] transition mt-auto">
                  Request Info
                </a>
              </div>
            </div>
          )}

          <p className="text-center text-xs font-medium text-[#1F2922]/50 uppercase tracking-wider">
            * With 12 months of subscription, get 1 month free
          </p>

        </div>
      </section>

      {/* FAQ QUESTIONS SECTION */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-16">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              QUESTIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight max-w-xl">
              Answers, with the same rigor as our reports.
            </h2>
          </div>

          {/* FAQ Accordions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: DEEP TECH RESEARCH */}
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-[#4A6B52]/10 pb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span className="text-xs font-bold text-[#1F2922]/80 uppercase tracking-wider">
                  DEEP TECH RESEARCH
                </span>
              </div>

              <div className="space-y-4">
                {/* Q1 */}
                <div className="border border-[#4A6B52]/10 rounded-xl bg-[#FAF8F5]/30 overflow-hidden">
                  <button
                    onClick={() => toggleFaq("r0")}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-[#1F2922] focus:outline-none"
                  >
                    <span>Who uses CrispIdea research?</span>
                    <span className="text-xs font-mono">{faqState.r0 ? '−' : '+'}</span>
                  </button>
                  {faqState.r0 && (
                    <div className="px-5 pb-4 text-xs text-[#1F2922]/70 leading-relaxed font-medium">
                      Hedge funds, asset managers, PE/VC firms, brokerages and corporate strategy teams across 18 countries.
                    </div>
                  )}
                </div>

                {/* Q2 */}
                <div className="border border-[#4A6B52]/10 rounded-xl bg-[#FAF8F5]/30 overflow-hidden">
                  <button
                    onClick={() => toggleFaq("r1")}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-[#1F2922] focus:outline-none"
                  >
                    <span>Can you build a custom coverage universe?</span>
                    <span className="text-xs font-mono">{faqState.r1 ? '−' : '+'}</span>
                  </button>
                  {faqState.r1 && (
                    <div className="px-5 pb-4 text-xs text-[#1F2922]/70 leading-relaxed font-medium">
                      Yes — bespoke mandates are our most popular engagement. We assemble dedicated analyst pods around your decision needs.
                    </div>
                  )}
                </div>

                {/* Q3 */}
                <div className="border border-[#4A6B52]/10 rounded-xl bg-[#FAF8F5]/30 overflow-hidden">
                  <button
                    onClick={() => toggleFaq("r2")}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-[#1F2922] focus:outline-none"
                  >
                    <span>What is your QoM framework?</span>
                    <span className="text-xs font-mono">{faqState.r2 ? '−' : '+'}</span>
                  </button>
                  {faqState.r2 && (
                    <div className="px-5 pb-4 text-xs text-[#1F2922]/70 leading-relaxed font-medium">
                      A proprietary Quality of Management framework combining capital allocation history, governance, incentives and forensic financial review.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: WEALTH MANAGEMENT */}
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-[#4A6B52]/10 pb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F2922]"></span>
                <span className="text-xs font-bold text-[#1F2922]/80 uppercase tracking-wider">
                  WEALTH MANAGEMENT
                </span>
              </div>

              <div className="space-y-4">
                {/* Q1 */}
                <div className="border border-[#4A6B52]/10 rounded-xl bg-[#FAF8F5]/30 overflow-hidden">
                  <button
                    onClick={() => toggleFaq("w0")}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-[#1F2922] focus:outline-none"
                  >
                    <span>Are you SEBI registered?</span>
                    <span className="text-xs font-mono">{faqState.w0 ? '−' : '+'}</span>
                  </button>
                  {faqState.w0 && (
                    <div className="px-5 pb-4 text-xs text-[#1F2922]/70 leading-relaxed font-medium">
                      Yes. CrispIdea Wealth is a SEBI-registered investment advisor offering goal-based, fiduciary advisory.
                    </div>
                  )}
                </div>

                {/* Q2 */}
                <div className="border border-[#4A6B52]/10 rounded-xl bg-[#FAF8F5]/30 overflow-hidden">
                  <button
                    onClick={() => toggleFaq("w1")}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-[#1F2922] focus:outline-none"
                  >
                    <span>Who is the wealth service for?</span>
                    <span className="text-xs font-mono">{faqState.w1 ? '−' : '+'}</span>
                  </button>
                  {faqState.w1 && (
                    <div className="px-5 pb-4 text-xs text-[#1F2922]/70 leading-relaxed font-medium">
                      Salaried professionals, high-income individuals, HNIs and family offices in India.
                    </div>
                  )}
                </div>

                {/* Q3 */}
                <div className="border border-[#4A6B52]/10 rounded-xl bg-[#FAF8F5]/30 overflow-hidden">
                  <button
                    onClick={() => toggleFaq("w2")}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-[#1F2922] focus:outline-none"
                  >
                    <span>How is your advice different?</span>
                    <span className="text-xs font-mono">{faqState.w2 ? '−' : '+'}</span>
                  </button>
                  {faqState.w2 && (
                    <div className="px-5 pb-4 text-xs text-[#1F2922]/70 leading-relaxed font-medium">
                      Every recommendation is backed by primary research from our institutional research desk — not generic model portfolios.
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CHOOSE YOUR PATH GET STARTED SECTION */}
      <section className="py-20 px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#4A6B52]/10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#FAF8F5] border border-[#4A6B52]/10 rounded-3xl p-12 text-center shadow-sm relative overflow-hidden bg-grid">
            <span className="text-[10px] font-bold text-[#4A6B52] uppercase tracking-wider block mb-4">
              GET STARTED
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight mb-4 max-w-2xl mx-auto">
              Choose your path. Both lead to the same research engine.
            </h2>
            <p className="text-xs md:text-sm text-[#1F2922]/60 mt-2 max-w-xl mx-auto mb-10 leading-relaxed">
              Tell us who you are — we'll route you to the right team within one business day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a 
                href="#contact"
                className="bg-[#0B132B] border border-[#4A6B52]/10 rounded-2xl p-8 text-left hover:scale-[1.02] hover:bg-[#121E3F] transition-all duration-200 block shadow-sm"
              >
                <span className="text-[9px] font-bold text-blue-400 block uppercase tracking-wider mb-2">FOR INSTITUTIONS</span>
                <span className="text-xl font-serif font-bold text-white flex justify-between items-center">
                  Talk to research <ArrowUpRight className="w-5 h-5" />
                </span>
              </a>

              <a 
                href="#contact"
                className="bg-[#122A17] border border-[#4A6B52]/10 rounded-2xl p-8 text-left hover:scale-[1.02] hover:bg-[#1C3A22] transition-all duration-200 block shadow-sm"
              >
                <span className="text-[9px] font-bold text-[#4A6B52] block uppercase tracking-wider mb-2">FOR INDIVIDUALS</span>
                <span className="text-xl font-serif font-bold text-white flex justify-between items-center">
                  Book a wealth consult <ArrowUpRight className="w-5 h-5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

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

// Icon Components
function CpuIcon({ className }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
