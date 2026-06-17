"use client";

import { useState, useRef } from "react";
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
  DollarSign, 
  TrendingDown, 
  Percent, 
  Search, 
  BookMarked
} from "lucide-react";

import TimelinePortfolioChart from "@/components/TimelinePortfolioChart";
import CoverageHeatmapDashboard from "@/components/CoverageHeatmapDashboard";

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


export default function Home() {
  // Navigation active state
  const [researchOpen, setResearchOpen] = useState(false);

  // Methodology active tab
  const [methodologyTab, setMethodologyTab] = useState("research"); // "research" | "wealth"

  // Active leader for detail modal popup
  const [selectedLeader, setSelectedLeader] = useState(null);

  // Scroll reference and helper for the experts slider
  const expertScrollRef = useRef(null);
  const scrollExperts = (direction) => {
    if (expertScrollRef.current) {
      const scrollAmount = 324; // card width (300) + gap (24)
      expertScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Pricing active tab
  const [pricingTab, setPricingTab] = useState("research"); // "research" | "wealth"

  // FAQ Accordions state
  const [activeFaq, setActiveFaq] = useState({
    research_0: false,
    research_1: false,
    research_2: false,
    wealth_0: false,
    wealth_1: false,
    wealth_2: false,
  });

  const toggleFaq = (key) => {
    setActiveFaq(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Team leaders data
  const teamDetails = [
    {
      name: "Shejal Ajmera",
      role: "Founder & Head of Research",
      image: "/team/shejal.jpg",
      quote: "“Conviction comes from research. Everything we build at CrispIdea starts there.”",
      stats: [
        { label: "Experience", value: "15+ Years" },
        { label: "Forecast Hit-Rate", value: "~80%" },
        { label: "Coverage Platforms", value: "Refinitiv · FactSet · S&P" },
        { label: "Currently Leads", value: "Research at CrispIdea" }
      ],
      paragraphs: [
        "Shejal is the Founder and CEO of CrispIdea, with 15+ years across global financial markets. Under her leadership, CrispIdea has become a recognised research voice on Refinitiv, FactSet and S&P Global — used by venture funds, private equity firms, investment banks and corporates.",
        "Her edge sits at the intersection of capital markets, macro and disruptive technology — sharpened by years in Seattle and Bangalore. She has been featured on CNBC-Asia and quoted in The Economic Times and The Street.",
        "MBA (Finance), NMIMS Mumbai. Specialization in Communications, University of Dallas. GS10kW at NSRCEL-IIM Bangalore alumna."
      ]
    },
    {
      name: "Malay Shah",
      role: "Co-Founder & Principal Advisor",
      image: "/team/malay.webp",
      quote: "“Great advice is research, translated into a plan a client can actually live with.”",
      stats: [
        { label: "Experience", value: "25+ Years" },
        { label: "Scaled ARR From", value: "$1M → $300M+" },
        { label: "Consulting At", value: "McKinsey · EY · A&M" },
        { label: "Certification", value: "NISM Investment Advisor" }
      ],
      paragraphs: [
        "Malay co-founded CrispIdea to fuse AI-enabled equity research with personalised wealth management. 25+ years across SaaS, management consulting and transaction advisory — including Chief Growth Officer at LeadSquared and Chief Business Officer at Ai Palette.",
        "Two decades of consulting at EY, Alvarez & Marsal, McKinsey and Infosys Consulting, advising Microsoft, Reliance, Alibaba, Wipro, Harman and HP-Compaq on GTM, digital transformation and deal advisory.",
        "MBA (Finance). NISM-certified Investment Advisor. Based in Bangalore, with operating experience across the US, Europe, MEA and SEA."
      ]
    },
    {
      name: "Chetan Parikh",
      role: "Advisor",
      image: "/team/chetan.png",
      quote: "“Value investing is patience disciplined by process — and process begins with research.”",
      stats: [
        { label: "Experience", value: "25+ Years" },
        { label: "Co-Promoter", value: "Jeetay Investments (PMS)" },
        { label: "Education", value: "Wharton MBA · Top 2%" },
        { label: "Recognition", value: "Business India — India's Best Investors" }
      ],
      paragraphs: [
        "Chetan is co-promoter of Jeetay Investments, a SEBI-registered portfolio management firm, with 25+ years of equity and investment experience. He is visiting faculty at Jamnalal Bajaj Institute of Management Studies (University of Bombay).",
        "He is also co-promoter of capitalideasonline.com, a well-regarded investment resource. His writing has appeared in Business Standard, Business World, The Economic Times and Business India.",
        "MBA (Finance), Wharton — graduated with distinction in the top 2% of the class. BSc Statistics & Economics, University of Bombay (Economics record holder)."
      ]
    },
    {
      name: "Pankaj Rungta",
      role: "Advisor",
      image: "/team/pankaj.png",
      quote: "“Capital follows clarity. Our job is to give clients both — the conviction and the structure.”",
      stats: [
        { label: "Experience", value: "20+ Years" },
        { label: "Deal Value Advised", value: "USD 500M+" },
        { label: "Focus", value: "Cross-border M&A · PE" },
        { label: "Education", value: "NYU Stern MBA" }
      ],
      paragraphs: [
        "Pankaj is a prominent independent advisor on cross-border M&A and private equity investments in India, with 20+ years of experience. He has advised Indian and foreign firms on deals aggregating more than USD 500mn.",
        "He has worked across industries with large global organisations including MetLife, Hewlett Packard and General Motors in the United States.",
        "MBA (Finance), NYU Stern. MS Mechanical Engineering, University of Toledo. BE Mechanical Engineering, S.G.S.I.T.S Indore."
      ]
    }
  ];

  // Analyst experts data
  const expertsData = [
    {
      name: "Aishwarya Dinesh",
      role: "Research Associate I",
      image: "/team/Aishwarya_Dinesh.png",
      focus: [
        "Covers Retail & E-commerce sector",
        "Consumer demand and unit economics",
        "Tracks listed and pre-IPO consumer plays"
      ]
    },
    {
      name: "Abhishek Rai",
      role: "Research Analyst",
      image: "/team/Abhishek_Rai.png",
      focus: [
        "Covers Aerospace & Defence sector",
        "Order book, capex and execution modeling",
        "Tracks global defence cycles"
      ]
    },
    {
      name: "Satish Gaonkar",
      role: "Research Analyst",
      image: "/team/Satish_Gaonkar.png",
      focus: [
        "Covers Software & Cloud infrastructure",
        "Hyperscaler capex and SaaS metrics",
        "Deep-dive notes on infra names"
      ]
    },
    {
      name: "Prajwal Nagpure",
      role: "Research Analyst",
      image: "/team/Prajwal_Nagpure.png",
      focus: [
        "Covers Semiconductors globally",
        "Foundry, fabless and equipment value chain",
        "AI compute and memory cycle tracking"
      ]
    },
    {
      name: "Prerana Chowdhery",
      role: "Sector Analyst",
      image: "/team/Prerana_Chowdhery.png",
      focus: [
        "Cross-sector thematic and screening work",
        "Builds sector primers and comp sheets",
        "Supports customised research mandates"
      ]
    },
    {
      name: "Kedhar Krisshnan",
      role: "Investment Consultant",
      image: "/team/Kedhar_Krisshnan.png",
      focus: [
        "Manages client portfolios for Wealth Management",
        "Goal planning and asset allocation reviews",
        "Single point of contact for advised clients"
      ]
    },
    {
      name: "Vanisha Singh",
      role: "Marketing Lead",
      image: "/team/Vanisha_Singh.png",
      focus: [
        "Owns end-to-end marketing at CrispIdea",
        "Brand, content and campaign execution",
        "Distribution of research and thought leadership"
      ]
    }
  ];

  const insightsData = [
    {
      id: "article1",
      title: "NRE vs NRO vs FCNR Choosing the Right Account Structure for Your Indian Assets",
      linkTitle: "NRE vs NRO vs FCNR: Choosing the Right Account Structure for Your Indian Assets",
      link: "#article1",
      date: "May 21, 2026",
      desc: "Why Your Account Choice Matters More Than You Think. Most NRIs open a bank account in India because their bank...",
      tags: "Finance · Banking",
      gradient: "from-amber-400 to-rose-400"
    },
    {
      id: "article2",
      title: "Food and Beverage Industry Restructuring Why Acquisitions, Separations, and Partnerships Are Rising",
      linkTitle: "Food and Beverage Industry Restructuring: Why Acquisitions, Separations, and Partnerships Are Rising",
      link: "#article2",
      date: "May 19, 2026",
      desc: "The global food and beverage industry restructuring is becoming one of the most important global business trends as companies respond...",
      tags: "Consumables · Corporate",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "article3",
      title: "Technology & Deep Tech Equity Research The Complete Guide for Institutional Investors",
      linkTitle: "Technology & Deep Tech Equity Research: The Complete Guide for Institutional Investors",
      link: "#article3",
      date: "May 19, 2026",
      desc: "AI & Machine Learning · Semiconductors · Cloud & SaaS · Cybersecurity · Quantum Computing · Data Infrastructure · IoT...",
      tags: "Deep Tech · Semiconductors",
      gradient: "from-cyan-500 to-blue-500"
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
      <section className="relative overflow-hidden bg-grid pt-12 md:pt-20 pb-20 px-6 lg:px-12 border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="bg-white/80 backdrop-blur-sm border border-[#4A6B52]/15 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                Research-led intelligence
              </span>
              <span className="bg-white/80 backdrop-blur-sm border border-[#4A6B52]/15 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                Market Outperformance
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-[#1F2922] leading-[1.08] mb-6">
              The research engine<br />wealth decisions deserve.
            </h1>

            <p className="text-base md:text-lg text-[#1F2922]/75 leading-relaxed max-w-2xl mb-8">
              CrispIdea is a research-first platform for institutions making allocation decisions and professionals building lasting wealth, powered by human expertise and AI, working together to outperform the market.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 rounded-full px-3.5 py-1 text-xs font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Funds & PE/VC
              </span>
              <span className="bg-[#FAF8F5] border border-[#4A6B52]/10 rounded-full px-3.5 py-1 text-xs font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F2922]"></span>
                HNIs & Professionals
              </span>
            </div>

            <div className="flex items-center gap-4 w-full">
              <div className="h-[1px] bg-[#4A6B52]/20 flex-1 max-w-[80px]"></div>
              <span className="text-xs font-semibold text-[#1F2922]/50 tracking-wide uppercase">
                Trusted by 2500+ institutions across 18 countries
              </span>
            </div>
          </div>

          {/* Hero Right Content (Featured Cards) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Card 1: Institutions */}
            <div className="bg-gradient-to-br from-[#F0F5FA] to-white/95 border border-[#4A6B52]/15 rounded-2xl p-6 shadow-sm relative group hover:shadow-md transition-all duration-200 overflow-hidden">
              {/* Top blue line on hover */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10" />
              
              <div className="absolute top-6 right-6 text-[#1F2922]/50 group-hover:text-[#1F2922] transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-[#4A6B52] uppercase tracking-wider block mb-3">
                FOR INSTITUTIONS
              </span>
              <h3 className="text-xl font-serif font-bold text-[#1F2922] flex items-center gap-2 mb-3">
                <Search className="w-5 h-5 text-[#4A6B52] stroke-[2.5]" />
                Deep Tech Research
              </h3>
              <p className="text-xs text-[#1F2922]/70 leading-relaxed mb-6">
                Equity research, thematic deep dives including Semis, SaaS, AI, Cloud, Cyber, Robotics and Space Tech, and proprietary Quality of Management scoring, built for PE, VC, hedge funds and AMCs.
              </p>
              <a 
                href="#heatmap" 
                className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#071E3D] hover:bg-[#030E1C] px-5 py-2.5 rounded-full shadow-sm transition duration-200 group/btn"
              >
                Explore Research <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Card 2: Individuals */}
            <div className="bg-gradient-to-br from-[#EDF5F0] to-white/95 border border-[#4A6B52]/15 rounded-2xl p-6 shadow-sm relative group hover:shadow-md transition-all duration-200 overflow-hidden">
              {/* Top black line on hover */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10" />
              
              <div className="absolute top-6 right-6 text-[#1F2922]/50 group-hover:text-[#1F2922] transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-[#4A6B52] uppercase tracking-wider block mb-3">
                FOR INDIVIDUAL INVESTORS
              </span>
              <h3 className="text-xl font-serif font-bold text-[#1F2922] flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-[#4A6B52] stroke-[2.5]" />
                Wealth Management
              </h3>
              <p className="text-xs text-[#1F2922]/70 leading-relaxed mb-6">
                Portfolio management, asset allocation and goal-based financial planning, helping HNIs and ambitious professionals fund retirement, education and the lifestyle they've earned.
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#1F2922] hover:bg-[#0E1510] px-5 py-2.5 rounded-full shadow-sm transition duration-200 group/btn"
                >
                  Talk to an Advisor <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
                <span className="border border-[#4A6B52]/20 rounded-full px-4 py-2.5 text-[10px] font-bold text-[#1F2922]/60 uppercase bg-white/50 shadow-sm">
                  SEBI Registered Advisor
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS GRID ROW */}
      <section className="py-20 md:py-24 px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#4A6B52]/10">
        <div className="max-w-7xl mx-auto bg-white border border-[rgba(74,107,82,0.15)] rounded-[24px] overflow-hidden shadow-sm grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-[#4A6B52]/10">
          
          {/* Stat 1 */}
          <div className="py-8 px-6 md:px-8 flex flex-col justify-between h-40 bg-white hover:bg-[#FAF8F5] transition duration-200 group/stat cursor-default">
            <Layers className="w-4 h-4 text-[#4A6B52] group-hover/stat:scale-110 transition duration-200" />
            <div>
              <p className="text-3xl font-serif font-bold text-[#1F2922] font-mono leading-none mb-2">25</p>
              <p className="text-[10px] font-bold text-[#1F2922]/50 uppercase tracking-wider">Deep Tech Sub-Sector Coverage</p>
            </div>
          </div>
          
          {/* Stat 2 */}
          <div className="py-8 px-6 md:px-8 flex flex-col justify-between h-40 bg-white hover:bg-[#FAF8F5] transition duration-200 group/stat cursor-default">
            <FileText className="w-4 h-4 text-[#4A6B52] group-hover/stat:scale-110 transition duration-200" />
            <div>
              <p className="text-3xl font-serif font-bold text-[#1F2922] font-mono leading-none mb-2">3,000 +</p>
              <p className="text-[10px] font-bold text-[#1F2922]/50 uppercase tracking-wider">Research Reports & Data Points</p>
            </div>
          </div>
          
          {/* Stat 3 */}
          <div className="py-8 px-6 md:px-8 flex flex-col justify-between h-40 bg-white hover:bg-[#FAF8F5] transition duration-200 group/stat cursor-default">
            <Building className="w-4 h-4 text-[#4A6B52] group-hover/stat:scale-110 transition duration-200" />
            <div>
              <p className="text-3xl font-serif font-bold text-[#1F2922] font-mono leading-none mb-2">2,500 +</p>
              <p className="text-[10px] font-bold text-[#1F2922]/50 uppercase tracking-wider">Global Institutions Served</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="py-8 px-6 md:px-8 flex flex-col justify-between h-40 bg-white hover:bg-[#FAF8F5] transition duration-200 group/stat cursor-default">
            <DollarSign className="w-4 h-4 text-[#4A6B52] group-hover/stat:scale-110 transition duration-200" />
            <div>
              <p className="text-3xl font-serif font-bold text-[#1F2922] font-mono leading-none mb-2">250 + Cr</p>
              <p className="text-[10px] font-bold text-[#1F2922]/50 uppercase tracking-wider">Retail Assets Under Advisory</p>
            </div>
          </div>

          {/* Stat 5 */}
          <div className="py-8 px-6 md:px-8 flex flex-col justify-between h-40 bg-white hover:bg-[#FAF8F5] transition duration-200 group/stat cursor-default">
            <TrendingUp className="w-4 h-4 text-[#4A6B52] group-hover/stat:scale-110 transition duration-200" />
            <div>
              <p className="text-3xl font-serif font-bold text-[#1F2922] font-mono leading-none mb-2">21% +</p>
              <p className="text-[10px] font-bold text-[#1F2922]/50 uppercase tracking-wider">1 Year Alpha</p>
            </div>
          </div>

          {/* Stat 6 */}
          <div className="py-8 px-6 md:px-8 flex flex-col justify-between h-40 bg-white hover:bg-[#FAF8F5] transition duration-200 group/stat cursor-default">
            <Briefcase className="w-4 h-4 text-[#4A6B52] group-hover/stat:scale-110 transition duration-200" />
            <div>
              <p className="text-3xl font-serif font-bold text-[#1F2922] font-mono leading-none mb-2">100 + yrs</p>
              <p className="text-[10px] font-bold text-[#1F2922]/50 uppercase tracking-wider">Combined Founding Team Experience</p>
            </div>
          </div>

          {/* Stat 7 */}
          <div className="py-8 px-6 md:px-8 flex flex-col justify-between h-40 bg-white hover:bg-[#FAF8F5] transition duration-200 group/stat cursor-default">
            <TrendingUp className="w-4 h-4 text-[#4A6B52] group-hover/stat:scale-110 transition duration-200" />
            <div>
              <p className="text-3xl font-serif font-bold text-[#1F2922] font-mono leading-none mb-2">$10 Tn</p>
              <p className="text-[10px] font-bold text-[#1F2922]/50 uppercase tracking-wider">Incremental Market Cap Driven</p>
            </div>
          </div>

          {/* Stat 8 */}
          <div className="py-8 px-6 md:px-8 flex flex-col justify-between h-40 bg-white hover:bg-[#FAF8F5] transition duration-200 group/stat cursor-default">
            <Users className="w-4 h-4 text-[#4A6B52] group-hover/stat:scale-110 transition duration-200" />
            <div>
              <p className="text-3xl font-serif font-bold text-[#1F2922] font-mono leading-none mb-2">85%</p>
              <p className="text-[10px] font-bold text-[#1F2922]/50 uppercase tracking-wider">Research Call Precision</p>
            </div>
          </div>

        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              WHAT WE DO
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight max-w-xl mb-4">
              Powering Every Portfolio. At Every Scale.
            </h2>
            <p className="text-sm md:text-base text-[#1F2922]/60 max-w-xl">
              Whether you allocate billions or build personal wealth our research helps you take decision with conviction.
            </p>
          </div>

          {/* Split Column Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            {/* Left Card: Institutions */}
            <div className="border border-[#4A6B52]/10 rounded-2xl p-8 bg-[#FAF8F5]/30 flex flex-col h-full hover:border-[#4A6B52]/20 transition-all">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#4A6B52]/10 flex items-center justify-center text-[#4A6B52]">
                  <Search className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#4A6B52] uppercase tracking-wider block">FOR INSTITUTIONS</span>
                  <h3 className="text-2xl font-serif font-bold text-[#1F2922]">Deep Tech Research</h3>
                </div>
              </div>
              
              <p className="text-sm text-[#1F2922]/70 leading-relaxed mb-8">
                Independent equity, thematic and customised research for global asset managers, hedge funds and corporates.
              </p>

              {/* Sub-cards */}
              <div className="space-y-4 mb-8 flex-1">
                <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#4A6B52]/5 flex items-start gap-4">
                  <span className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-[10px]">E</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1F2922] mb-1">Equity Research</h4>
                    <p className="text-xs text-[#1F2922]/60 leading-relaxed">Bottoms up financial analysis, modeling and Buy/Hold/Sell recommendations.</p>
                  </div>
                </div>
                <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#4A6B52]/5 flex items-start gap-4">
                  <span className="w-6 h-6 rounded bg-[#4A6B52]/10 flex items-center justify-center text-[#4A6B52] font-bold text-[10px]">T</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1F2922] mb-1">Thematic Research</h4>
                    <p className="text-xs text-[#1F2922]/60 leading-relaxed">Global macroeconomic trends, industry forecast and Quality of Management.</p>
                  </div>
                </div>
                <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#4A6B52]/5 flex items-start gap-4">
                  <span className="w-6 h-6 rounded bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-[10px]">C</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1F2922] mb-1">Customised Research</h4>
                    <p className="text-xs text-[#1F2922]/60 leading-relaxed">Bespoke studies tailored to client objectives.</p>
                  </div>
                </div>
              </div>

              <a 
                href="#heatmap" 
                className="bg-[#2563EB] text-white text-xs font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition w-fit flex items-center gap-1.5 shadow-sm"
              >
                Explore Research <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Card: Individuals */}
            <div className="border border-[#4A6B52]/10 rounded-2xl p-8 bg-[#FAF8F5]/30 flex flex-col h-full hover:border-[#4A6B52]/20 transition-all">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#4A6B52]/10 flex items-center justify-center text-[#4A6B52]">
                  <TrendingUp className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#4A6B52] uppercase tracking-wider block">FOR INDIVIDUAL INVESTORS</span>
                  <h3 className="text-2xl font-serif font-bold text-[#1F2922]">Wealth Management</h3>
                </div>
              </div>

              <p className="text-sm text-[#1F2922]/70 leading-relaxed mb-8">
                Expert-led wealth advisory to grow, protect, and enjoy your hard-earned wealth.
              </p>

              {/* Sub-cards */}
              <div className="space-y-4 mb-8 flex-1">
                <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#4A6B52]/5 flex items-start gap-4">
                  <span className="w-6 h-6 rounded bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-[10px]">G</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1F2922] mb-1">Goal Planning</h4>
                    <p className="text-xs text-[#1F2922]/60 leading-relaxed">Aligned to retirement, education, lifestyle goals.</p>
                  </div>
                </div>
                <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#4A6B52]/5 flex items-start gap-4">
                  <span className="w-6 h-6 rounded bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-[10px]">P</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1F2922] mb-1">Portfolio Advisory</h4>
                    <p className="text-xs text-[#1F2922]/60 leading-relaxed">Active portfolio management to consistently generate higher returns.</p>
                  </div>
                </div>
                <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#4A6B52]/5 flex items-start gap-4">
                  <span className="w-6 h-6 rounded bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-[10px]">A</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1F2922] mb-1">Asset Allocation</h4>
                    <p className="text-xs text-[#1F2922]/60 leading-relaxed">Disciplined, diversified, risk-calibrated mixes.</p>
                  </div>
                </div>
              </div>

              <a 
                href="#contact" 
                className="bg-[#1F2922] text-[#FAF8F5] text-xs font-bold py-3 px-6 rounded-full hover:bg-black transition w-fit flex items-center gap-1.5 shadow-sm"
              >
                Explore Wealth <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer capsule bar */}
          <div className="bg-[#FAF8F5] border border-[#4A6B52]/15 rounded-full px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F2922]"></span>
              <span>Research insights</span>
              <span className="text-[#1F2922]/40">→</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B52]"></span>
              <span>Wealth strategies</span>
            </div>
            <span className="text-[#1F2922]/65 text-center">
              Every advisory recommendation traces back to a CrispIdea research report.
            </span>
          </div>

        </div>
      </section>

      {/* TWO AUDIENCES SECTION */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-left">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              WHO WE SERVE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight max-w-xl mb-4">
              Two audiences. One standard of research.
            </h2>
            <p className="text-sm md:text-base text-[#1F2922]/60 max-w-xl">
              The same analytical rigour that powers allocation decisions at global institutions sits behind every wealth recommendation we make.
            </p>
          </div>

          {/* Panels matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left: Institutional (Blue header line) */}
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-[#4A6B52]/10 pb-3">
                <Building className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-[#1F2922]/80 uppercase tracking-wider">
                  INSTITUTIONAL RESEARCH
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Institutional 1 */}
                <div className="bg-white border-t-[3px] border-blue-600 border-x border-b border-[#4A6B52]/10 rounded-xl p-5 flex flex-col justify-between min-h-[220px] shadow-sm">
                  <div>
                    <div className="w-9 h-9 rounded bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                      <Building className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-serif font-bold text-[#1F2922] mb-2">Institutional Investors</h4>
                    <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-4">
                      Custom equity research, financial models, due diligence support, sector intelligence, and Quality of Management (QoM) insights for informed investment decisions.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {['Equity research', 'Thematic', 'Models', 'QoM'].map(t => (
                      <span key={t} className="bg-blue-50 text-blue-700 text-[9px] font-bold px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Institutional 2 */}
                <div className="bg-white border-t-[3px] border-blue-600 border-x border-b border-[#4A6B52]/10 rounded-xl p-5 flex flex-col justify-between min-h-[220px] shadow-sm">
                  <div>
                    <div className="w-9 h-9 rounded bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-serif font-bold text-[#1F2922] mb-2">Corporates</h4>
                    <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-4">
                      Strategic market intelligence, competitive benchmarking, industry analysis, and thematic research to support business planning and growth initiatives.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {['Market intel', 'Benchmarking', 'Thematic'].map(t => (
                      <span key={t} className="bg-blue-50 text-blue-700 text-[9px] font-bold px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Individual (Green header line) */}
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-[#4A6B52]/10 pb-3">
                <TrendingUp className="w-4 h-4 text-[#4A6B52]" />
                <span className="text-xs font-bold text-[#1F2922]/80 uppercase tracking-wider">
                  INDIVIDUAL WEALTH
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Individual 1 */}
                <div className="bg-white border-t-[3px] border-[#4A6B52] border-x border-b border-[#4A6B52]/10 rounded-xl p-5 flex flex-col justify-between min-h-[220px] shadow-sm">
                  <div>
                    <div className="w-9 h-9 rounded bg-[#E6EBE4] flex items-center justify-center text-[#4A6B52] mb-4">
                      <Award className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-serif font-bold text-[#1F2922] mb-2">HNIs & family offices</h4>
                    <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-4">
                      Discretionary advisory and portfolio management rooted in primary research.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {['Portfolio mgmt', 'Advisory'].map(t => (
                      <span key={t} className="bg-[#E6EBE4] text-[#4A6B52] text-[9px] font-bold px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Individual 2 */}
                <div className="bg-white border-t-[3px] border-[#4A6B52] border-x border-b border-[#4A6B52]/10 rounded-xl p-5 flex flex-col justify-between min-h-[220px] shadow-sm">
                  <div>
                    <div className="w-9 h-9 rounded bg-[#E6EBE4] flex items-center justify-center text-[#4A6B52] mb-4">
                      <Users className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-serif font-bold text-[#1F2922] mb-2">Ambitious professionals</h4>
                    <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-4">
                      Goal-based financial planning, SIPs and active portfolio management for retirement, education and lifestyle.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {['Financial planning', 'Active portfolio management'].map(t => (
                      <span key={t} className="bg-[#E6EBE4] text-[#4A6B52] text-[9px] font-bold px-2 py-0.5 rounded text-left">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CRISPIDEA SECTION */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              WHY CRISPIDEA
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight max-w-xl mb-4">
              A research house that manages wealth, not the other way around.
            </h2>
            <p className="text-sm md:text-base text-[#1F2922]/60 max-w-xl">
              Most advisors borrow research. We produce it. That changes everything downstream.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {/* Card 01 */}
            <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col min-h-[300px] hover:border-[#4A6B52]/20 transition shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#4A6B52]/10 flex items-center justify-center text-[#4A6B52]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-[#1F2922]/40">01</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1F2922] mb-3">Research-first DNA</h3>
              <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-6 flex-1">
                Every model, every company covered, every portfolio call is sourced from our in-house research. Each research piece creates meaningful alpha for institutions and individuals alike.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Primary research', 'Institutional grade'].map(t => (
                  <span key={t} className="bg-white border border-[#4A6B52]/10 text-[#1F2922]/70 text-[9px] font-bold px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col min-h-[300px] hover:border-[#4A6B52]/20 transition shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#4A6B52]/10 flex items-center justify-center text-[#4A6B52]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-[#1F2922]/40">02</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1F2922] mb-3">Proprietary AI models</h3>
              <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-6 flex-1">
                Purpose-built models that scan companies for earnings quality, institutional buy propensity and optimal entry and exit points, replacing manual screening with an data-driven approach.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Earnings quality', 'Entry / exit signals', 'Inst. propensity'].map(t => (
                  <span key={t} className="bg-white border border-[#4A6B52]/10 text-[#1F2922]/70 text-[9px] font-bold px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
            </div>

            {/* Card 03 */}
            <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col min-h-[300px] hover:border-[#4A6B52]/20 transition shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#4A6B52]/10 flex items-center justify-center text-[#4A6B52]">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-[#1F2922]/40">03</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1F2922] mb-3">Deep Tech expertise</h3>
              <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-6 flex-1">
                25 sub-sector coverage across Semis, SaaS, AI, Cloud, Cyber, Robotics and Space Tech, with proprietary Quality of Management scoring built for complex, fast-moving technology businesses.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['25 sub-sectors', 'QoM scoring'].map(t => (
                  <span key={t} className="bg-white border border-[#4A6B52]/10 text-[#1F2922]/70 text-[9px] font-bold px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
            </div>

            {/* Card 04 */}
            <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col min-h-[300px] hover:border-[#4A6B52]/20 transition shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#4A6B52]/10 flex items-center justify-center text-[#4A6B52]">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-[#1F2922]/40">04</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1F2922] mb-3">Hyper-personalised</h3>
              <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-6 flex-1">
                We apply behavioural finance principles by deeply understanding each client's risk profile, aspirations, age and interests, and build a portfolio to help them fund their retirement, education and lifestyle.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Behavioural finance', 'Custom portfolios', 'Goal-based planning'].map(t => (
                  <span key={t} className="bg-white border border-[#4A6B52]/10 text-[#1F2922]/70 text-[9px] font-bold px-2 py-0.5 rounded text-left">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Proof box section (05 - THE PROOF) */}
          <div className="bg-[#E6EBE4]/40 border border-[#4A6B52]/15 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-sm">
            <div className="max-w-2xl text-left">
              <div className="flex items-center gap-2 text-xs font-bold text-[#4A6B52] uppercase tracking-wider mb-3">
                <TrendingUp className="w-4 h-4 text-[#4A6B52]" />
                05 — THE PROOF
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1F2922] mb-3">
                Deep insights that drive market outperformance
              </h3>
              <p className="text-xs md:text-sm text-[#1F2922]/65 leading-relaxed mb-6">
                Research depth that has driven incremental $10 Tn in market cap on companies covered and delivered 21%+ alpha in 2026, because better insights, systematically applied, compound over time.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border border-[#4A6B52]/10 text-[#1F2922] text-[10px] font-bold px-3 py-1 rounded-full">
                  $10 Tn market cap driven
                </span>
                <span className="bg-white border border-[#4A6B52]/10 text-[#1F2922] text-[10px] font-bold px-3 py-1 rounded-full">
                  Systematic outperformance
                </span>
              </div>
            </div>

            <div className="flex gap-4 w-full md:w-auto font-mono shrink-0">
              <div className="bg-white border border-[#4A6B52]/10 rounded-xl p-4 w-36 text-center shadow-sm">
                <span className="text-xs text-[#1F2922]/50 font-sans block mb-1">MARKET CAP</span>
                <span className="text-xl font-bold text-[#1F2922]">$10 Tn</span>
              </div>
              <div className="bg-white border border-[#4A6B52]/10 rounded-xl p-4 w-36 text-center shadow-sm">
                <span className="text-xs text-[#1F2922]/50 font-sans block mb-1">1 YR ALPHA</span>
                <span className="text-xl font-bold text-[#4A6B52]">21%+</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TRUSTED LOGOS MARQUEE */}
      <section className="py-8 bg-[#FAF8F5] border-b border-[#4A6B52]/10 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-bold text-[#1F2922]/40 tracking-wider text-center uppercase mb-6">
            TRUSTED BY LEADING GLOBAL INSTITUTIONS
          </p>
          <div className="flex justify-center flex-wrap gap-x-12 gap-y-6 text-sm font-semibold text-[#1F2922]/40 font-serif items-center">
            <span>JP Morgan</span>
            <span>Bridgewater</span>
            <span>Invesco</span>
            <span>Schroders</span>
            <span>Nomura</span>
            <span>HSBC</span>
            <span>Citi</span>
            <span>Barclays</span>
            <span>BlackRock</span>
          </div>
        </div>
      </section>

      {/* CHART 1 SECTION: PORTFOLIO PERFORMANCE ANALYTICS */}
      <section id="wealth" className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-left">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              MEASURED IMPACT
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight max-w-xl">
              Performance, proven on both sides of the engine.
            </h2>
          </div>

          {/* Timeline Portfolio Chart Container */}
          <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-2xl p-6 lg:p-8 shadow-sm mb-8">
            <TimelinePortfolioChart />
            
            {/* Chart footer block */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-[#4A6B52]/10 pt-6 mt-6 gap-4">
              <span className="text-sm font-semibold text-[#1F2922]/75">
                See how disciplined advisory outperforms passive benchmarks.
              </span>
              <a 
                href="#contact" 
                className="bg-[#4A6B52] text-[#FAF8F5] hover:bg-[#3E5944] text-xs font-bold py-3 px-6 rounded-full shadow transition flex items-center gap-1.5"
              >
                Book a wealth consult <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="text-[10px] text-[#1F2922]/40 text-left leading-relaxed">
            Source: CrispIdea Model Portfolio vs. HDFC BSE 500 ETF, price return in INR, as of 31-May-2026. Past performance is not indicative of future results.
          </p>
        </div>
      </section>

      {/* CHART 2 SECTION: EQUITY COVERAGE HEATMAP */}
      <section id="heatmap" className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-left">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              RESEARCH PERFORMANCE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight max-w-2xl mb-4">
              How our target prices have tracked reality.
            </h2>
            <p className="text-xs md:text-sm text-[#1F2922]/60 max-w-xl">
              Pick any company from our coverage. The chart shows CrispIdea's target price (step line) against the stock's adjusted close, over the full life of our coverage.
            </p>
          </div>

          {/* Heatmap Matrix Dashboard component */}
          <CoverageHeatmapDashboard />
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section id="methodology" className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-left">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              OUR METHODOLOGY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight max-w-xl mb-4">
              Rigorous process. Consistent outcomes.
            </h2>
            <p className="text-sm text-[#1F2922]/60 max-w-xl">
              Two disciplines. One standard of rigour. See how we approach research and wealth management.
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="flex bg-[#FAF8F5] border border-[#4A6B52]/10 p-1 rounded-full shadow-inner w-fit mb-12">
            <button
              onClick={() => setMethodologyTab("research")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                methodologyTab === "research"
                  ? "bg-[#1F2922] text-[#FAF8F5] shadow-sm"
                  : "text-[#1F2922]/50 hover:text-[#1F2922]"
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              Research methodology
            </button>
            <button
              onClick={() => setMethodologyTab("wealth")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                methodologyTab === "wealth"
                  ? "bg-[#1F2922] text-[#FAF8F5] shadow-sm"
                  : "text-[#1F2922]/50 hover:text-[#1F2922]"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Wealth management
            </button>
          </div>

          {/* Methodology content grid */}
          {methodologyTab === "research" ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
              
              {/* Quality */}
              <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#4A6B52]/20 transition shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#1F2922] text-white flex items-center justify-center font-bold text-xs">Q</span>
                    <span className="text-[10px] font-bold text-[#1F2922]/40 font-mono">01 — QUALITY</span>
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#1F2922] mb-3">Earnings quality & management integrity</h4>
                  <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-6">
                    Every company is screened for earnings strength, debt risk, market relevance and our proprietary Quality of Management (QoM) score — assessing leadership integrity, capital allocation discipline and governance.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['QoM scoring', 'Earnings quality', 'Debt risk', 'Governance'].map(t => (
                    <span key={t} className="bg-white border border-[#4A6B52]/15 text-[#1F2922]/70 text-[9px] font-bold px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              </div>

              {/* Performance */}
              <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#4A6B52]/20 transition shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#1F2922] text-white flex items-center justify-center font-bold text-xs">P</span>
                    <span className="text-[10px] font-bold text-[#1F2922]/40 font-mono">02 — PERFORMANCE</span>
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#1F2922] mb-3">Consistent growth & benchmark beating</h4>
                  <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-6">
                    We narrow to companies with consistent revenue growth, ROE momentum and a track record of beating estimates. For funds, we compare 3/5/10-year returns, benchmark alpha and peer outperformance.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['Revenue growth', 'ROE momentum', 'Estimate beat', 'Alpha'].map(t => (
                    <span key={t} className="bg-white border border-[#4A6B52]/15 text-[#1F2922]/70 text-[9px] font-bold px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              </div>

              {/* Valuation */}
              <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#4A6B52]/20 transition shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#1F2922] text-white flex items-center justify-center font-bold text-xs">V</span>
                    <span className="text-[10px] font-bold text-[#1F2922]/40 font-mono">03 — VALUATION</span>
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#1F2922] mb-3">Disciplined entry — price must make sense</h4>
                  <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-6">
                    We apply DCF and peer multiples to confirm margin of safety, liquidity and price patterns. For funds, we assess risk ratios, cost structures and inflow/outflow dynamics.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['DCF analysis', 'Peer multiples', 'Margin of safety', 'Liquidity check'].map(t => (
                    <span key={t} className="bg-white border border-[#4A6B52]/15 text-[#1F2922]/70 text-[9px] font-bold px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              </div>

              {/* Technicals */}
              <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#4A6B52]/20 transition shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#1F2922] text-white flex items-center justify-center font-bold text-xs">T</span>
                    <span className="text-[10px] font-bold text-[#1F2922]/40 font-mono">04 — TECHNICALS</span>
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#1F2922] mb-3">Favourable price signals & entry timing</h4>
                  <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-6">
                    Proprietary AI models scan for optimal entry and exit signals — institutional buy propensity, price pattern confirmation and momentum alignment — ensuring we enter at the right time.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['AI signals', 'Buy propensity', 'Momentum'].map(t => (
                    <span key={t} className="bg-white border border-[#4A6B52]/15 text-[#1F2922]/70 text-[9px] font-bold px-2 py-0.5 rounded text-left">{t}</span>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
              {/* Goals */}
              <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#4A6B52]/20 transition shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#4A6B52] text-white flex items-center justify-center font-bold text-xs">G</span>
                    <span className="text-[10px] font-bold text-[#1F2922]/40 font-mono">01 — GOALS</span>
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#1F2922] mb-3">Financial aspiration & milestone alignment</h4>
                  <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-6">
                    Deep consultation to construct profile timelines mapping client risk limits, retirement target figures, capital preservation needs, and tax constraints.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['Risk profiling', 'Retirement plans', 'Tax-efficiency'].map(t => (
                    <span key={t} className="bg-white border border-[#4A6B52]/15 text-[#1F2922]/70 text-[9px] font-bold px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              </div>

              {/* Allocation */}
              <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#4A6B52]/20 transition shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#4A6B52] text-white flex items-center justify-center font-bold text-xs">A</span>
                    <span className="text-[10px] font-bold text-[#1F2922]/40 font-mono">02 — ALLOCATION</span>
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#1F2922] mb-3">Multi-asset portfolio distribution</h4>
                  <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-6">
                    Structuring diversified assets across core equity allocations, index hedge tools, high-yield fixed credit overlays, and tactical commodities.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['Asset splits', 'Index hedges', 'Credit overlays'].map(t => (
                    <span key={t} className="bg-white border border-[#4A6B52]/15 text-[#1F2922]/70 text-[9px] font-bold px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              </div>

              {/* Monitoring */}
              <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#4A6B52]/20 transition shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#4A6B52] text-white flex items-center justify-center font-bold text-xs">M</span>
                    <span className="text-[10px] font-bold text-[#1F2922]/40 font-mono">03 — MONITORING</span>
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#1F2922] mb-3">Continuous risk checks & weight rebalancing</h4>
                  <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-6">
                    Running weekly valuation tests to detect drift in targeted sub-sector percentages, triggering algorithmic sells and buys to lock gains.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['Weekly audits', 'Rebalancing logs', 'Gain lockouts'].map(t => (
                    <span key={t} className="bg-white border border-[#4A6B52]/15 text-[#1F2922]/70 text-[9px] font-bold px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              </div>

              {/* Execution */}
              <div className="bg-[#FAF8F5]/40 border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#4A6B52]/20 transition shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#4A6B52] text-white flex items-center justify-center font-bold text-xs">E</span>
                    <span className="text-[10px] font-bold text-[#1F2922]/40 font-mono">04 — EXECUTION</span>
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#1F2922] mb-3">Tax-optimized wealth tracking</h4>
                  <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-6">
                    Frictionless, direct transaction execution structured to leverage tax rules and maximize net compounded growth over decades.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['Tax optimization', 'Direct routing', 'Frictionless execution'].map(t => (
                    <span key={t} className="bg-white border border-[#4A6B52]/15 text-[#1F2922]/70 text-[9px] font-bold px-2 py-0.5 rounded text-left">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* BUILT BY LEADERS SECTION (Accordions) */}
      <section id="about" className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              BUILT BY LEADERS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight mb-4">
              The people behind the research.
            </h2>
            <p className="text-sm text-[#1F2922]/60 max-w-xl mx-auto">
              Operators, investors and researchers who have spent decades doing the work — now building CrispIdea as one research-led platform.
            </p>
          </div>

          {/* Leaders List */}
          <div className="space-y-4">
            {teamDetails.map((person) => {
              return (
                <div 
                  key={person.name}
                  onClick={() => setSelectedLeader(person)}
                  className="bg-white border border-[#4A6B52]/10 rounded-2xl p-5 md:p-6 flex items-center justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 relative bg-[#FAF8F5] border border-[#4A6B52]/10">
                      <Image 
                        src={person.image} 
                        alt={person.name} 
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1F2922] group-hover:text-[#4A6B52] transition-colors">{person.name}</h4>
                      <p className="text-xs text-[#1F2922]/50 font-medium">{person.role}</p>
                    </div>
                  </div>
                  <span className="w-8 h-8 rounded-full border border-[#4A6B52]/10 flex items-center justify-center text-[#1F2922]/40 text-sm font-bold shrink-0 group-hover:bg-[#FAF8F5] group-hover:text-[#1F2922] transition duration-200">
                    ↗
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BACKED BY EXPERTS SECTION */}
      <section id="analysts" className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex justify-between items-end mb-16">
            <div className="text-left">
              <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
                BACKED BY EXPERTS
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight max-w-xl mb-4">
                The analysts and advisors behind every call.
              </h2>
              <p className="text-sm text-[#1F2922]/60 max-w-xl">
                A bench of sector specialists, analysts and client partners who turn research into actionable conviction for every CrispIdea client.
              </p>
            </div>
            
            {/* Left/Right slider buttons */}
            <div className="hidden md:flex gap-2">
              <button 
                onClick={() => scrollExperts("left")}
                className="w-10 h-10 rounded-full border border-[#4A6B52]/15 flex items-center justify-center text-[#1F2922]/60 hover:bg-[#FAF8F5] transition cursor-pointer focus:outline-none"
                aria-label="Scroll left"
              >
                &larr;
              </button>
              <button 
                onClick={() => scrollExperts("right")}
                className="w-10 h-10 rounded-full border border-[#4A6B52]/15 flex items-center justify-center text-[#1F2922]/60 hover:bg-[#FAF8F5] transition cursor-pointer focus:outline-none"
                aria-label="Scroll right"
              >
                &rarr;
              </button>
            </div>
          </div>

          {/* Expert Cards Scroll Container */}
          <div 
            ref={expertScrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pt-4 pb-4 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {expertsData.map((expert) => (
              <div 
                key={expert.name}
                className="min-w-[280px] md:min-w-[300px] w-[300px] bg-[#030E29] border border-[#4A6B52]/10 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm group hover:border-[#4A6B52]/30 transition shrink-0"
              >
                {/* Photo Area */}
                <div className="h-64 relative overflow-hidden flex items-end">
                  <img 
                    src={expert.image} 
                    alt={expert.name}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark blue gradient overlay at the bottom of the photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030E29] via-[#030E29]/20 to-transparent" />
                  
                  {/* Name and Title positioned over the bottom of the photo */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between z-10">
                    <div className="text-left">
                      <h4 className="text-base font-serif font-bold text-white leading-tight">{expert.name}</h4>
                      <p className="text-[10px] text-white/60 font-semibold tracking-wide mt-0.5">{expert.role}</p>
                    </div>
                    <a 
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/85 hover:text-white transition shrink-0"
                      aria-label={`${expert.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-[#030E29]">
                  <div className="text-left">
                    <span className="text-[9px] uppercase font-bold text-[#4A6B52] tracking-wider block mb-3">FOCUS</span>
                    <ul className="text-xs text-white/70 space-y-2 font-medium">
                      {expert.focus.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-[#4A6B52] shrink-0 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              VOICES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight max-w-xl mx-auto">
              Why clients stay with us.
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[220px]">
              <div>
                <Quote className="w-8 h-8 text-[#4A6B52]/20 mb-4" />
                <p className="text-xs md:text-sm text-[#1F2922]/80 leading-relaxed font-medium mb-6">
                  "CrispIdea's QoM reports are now a standing input in our diligence process. Their analyst team reads situations like an insider would."
                </p>
              </div>
              <div className="border-t border-[#4A6B52]/5 pt-4 mt-auto">
                <h4 className="text-xs font-bold text-[#1F2922]">Portfolio Manager</h4>
                <p className="text-[9px] text-[#1F2922]/50 font-medium">Global Long/Short Fund, London</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[220px]">
              <div>
                <Quote className="w-8 h-8 text-[#4A6B52]/20 mb-4" />
                <p className="text-xs md:text-sm text-[#1F2922]/80 leading-relaxed font-medium mb-6">
                  "The plan is simple, the reasoning is rigorous. Every recommendation comes with the research that backs it."
                </p>
              </div>
              <div className="border-t border-[#4A6B52]/5 pt-4 mt-auto">
                <h4 className="text-xs font-bold text-[#1F2922]">Senior Tech Executive</h4>
                <p className="text-[9px] text-[#1F2922]/50 font-medium">Wealth client, Bengaluru</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[220px]">
              <div>
                <Quote className="w-8 h-8 text-[#4A6B52]/20 mb-4" />
                <p className="text-xs md:text-sm text-[#1F2922]/80 leading-relaxed font-medium mb-6">
                  "We replaced two sell-side providers with CrispIdea. Coverage depth and turnaround are in a different league."
                </p>
              </div>
              <div className="border-t border-[#4A6B52]/5 pt-4 mt-auto">
                <h4 className="text-xs font-bold text-[#1F2922]">Head of Research</h4>
                <p className="text-[9px] text-[#1F2922]/50 font-medium">Asia Pacific Brokerage</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INSIGHTS CAROUSEL SECTION */}
      <section id="insights" className="py-20 border-b border-[#4A6B52]/10 bg-white overflow-hidden">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-16">
            <div className="text-left">
              <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
                INSIGHTS
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight max-w-xl mb-4">
                Thinking that compounds.
              </h2>
            </div>
            
            <a href="https://www.crispidea.com/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F2922] hover:text-[#4A6B52] transition pb-2 border-b border-[#1F2922]">
              All insights <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Full-width marquee container */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Fade overlays at left and right edges (connected doors) */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max px-6 md:px-12 items-stretch">
            {[...insightsData, ...insightsData, ...insightsData].map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`}
                className="flex flex-col h-[430px] md:h-[470px] bg-white border border-[#4A6B52]/10 rounded-2xl overflow-hidden shadow-sm group hover:border-[#4A6B52]/20 transition w-[290px] md:w-[380px] shrink-0"
              >
                {/* Graphic Cover */}
                <div className="bg-[#1F2922] p-6 text-white relative min-h-[180px] flex flex-col justify-between overflow-hidden">
                  <span className="text-[8px] font-bold tracking-widest text-[#FAF8F5]/50 uppercase">CRISPidea&reg;</span>
                  <h4 className="text-base font-bold font-serif max-w-[85%] mt-4 leading-snug">
                    {item.title}
                  </h4>
                  <div className="flex justify-between items-end mt-4 z-10">
                    <span className="text-[9px] font-bold text-white bg-white/10 px-3 py-1 rounded-full uppercase">READ NOW</span>
                    <span className="text-[8px] font-mono text-white/55">www.crispidea.com</span>
                  </div>
                  {/* Colorful circle element */}
                  <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-tr ${item.gradient} opacity-80 blur-[2px]`}></div>
                </div>
                {/* Text Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <a href={item.link} className="text-sm font-bold text-blue-600 hover:underline block mb-2 leading-snug">
                      {item.linkTitle}
                    </a>
                    <span className="text-[10px] text-[#1F2922]/40 font-semibold block mb-3">{item.date}</span>
                    <p className="text-xs text-[#1F2922]/65 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <div className="border-t border-[#4A6B52]/5 pt-4 flex justify-between items-center mt-auto">
                    <span className="text-[9px] font-semibold text-[#1F2922]/50">{item.tags}</span>
                    <span className="text-xs font-bold text-[#1F2922] flex items-center gap-1 group-hover:text-[#4A6B52] transition-colors">
                      Read More &raquo;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PLANS SECTION */}
      <section id="pricing" className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="text-xs font-bold text-[#4A6B52] uppercase tracking-wider block mb-2">
              ENGAGEMENTS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F2922] leading-tight mb-4">
              Plans for institutions and individuals.
            </h2>
            <p className="text-sm text-[#1F2922]/60 max-w-xl mx-auto">
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
                
                <a href="#buy-lite" className="block text-center text-xs font-bold text-[#1F2922] border border-[#1F2922] py-2.5 rounded-lg hover:bg-[#FAF8F5] transition mt-auto">
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
                
                <a href="#buy-standard" className="block text-center text-xs font-bold text-[#FAF8F5] bg-[#1F2922] py-2.5 rounded-lg hover:bg-black transition mt-auto">
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
                
                <a href="#buy-premium" className="block text-center text-xs font-bold text-[#1F2922] border border-[#1F2922] py-2.5 rounded-lg hover:bg-[#FAF8F5] transition mt-auto">
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
                
                <a href="#buy-sector" className="block text-center text-xs font-bold text-[#1F2922] border border-[#1F2922] py-2.5 rounded-lg hover:bg-[#FAF8F5] transition mt-auto">
                  Buy Now
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-8 flex flex-col justify-between shadow-sm relative">
                <div>
                  <h4 className="text-2xl font-serif font-bold text-[#1F2922] mb-1">Free Plan</h4>
                  <p className="text-xs text-[#1F2922]/50 font-semibold tracking-wide uppercase mb-6">Mutual Fund Only</p>
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-4xl font-serif font-black text-[#1F2922] tracking-tight">0%</span>
                    <span className="text-xs text-[#1F2922]/50 font-bold uppercase tracking-wider">Fees</span>
                  </div>

                  <ul className="space-y-4 text-xs text-[#1F2922]/80 font-medium">
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>Active advisory on choosing the right funds (debt, large cap, mid-cap, small-cap, sectoral) depending on the economic lifecycle</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>Active tracking of MF performance on returns and risk parameters (e.g. Sharpe ratio)</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>Invest only in high-rated funds that preserve capital</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>Ease of transaction through app</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>Invest in regular funds through lump-sum or SIP mode</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  {/* Highlight box */}
                  <div className="bg-[#FAF8F5] border border-[#4A6B52]/5 rounded-xl p-3 text-center mb-6">
                    <p className="text-xs text-[#1F2922]/70 font-semibold italic">Ideal for low-risk investors just getting started</p>
                  </div>
                  {/* Button */}
                  <a href="#wealth-consult" className="block text-center text-xs font-bold text-[#1F2922] border border-[#1F2922] py-3 rounded-full hover:bg-[#FAF8F5] transition">
                    Get Started
                  </a>
                </div>
              </div>

              {/* Gold Plan */}
              <div className="bg-white border-2 border-[#1F2922] rounded-2xl p-8 flex flex-col justify-between shadow-md relative">
                {/* Most Popular Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-[#FAF8F5] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  ★ MOST POPULAR
                </div>

                <div>
                  <h4 className="text-2xl font-serif font-bold text-[#1F2922] mb-1">Gold Plan</h4>
                  <p className="text-xs text-[#1F2922]/50 font-semibold tracking-wide uppercase mb-6">AUA Based Fee</p>
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-4xl font-serif font-black text-[#1F2922] tracking-tight">1%</span>
                    <span className="text-xs text-[#1F2922]/50 font-bold uppercase tracking-wider">of AUA</span>
                  </div>

                  <ul className="space-y-4 text-xs text-[#1F2922]/80 font-medium">
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>Annual upfront payment with quarterly true up</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>Higher returns by investing across India and US stocks, MFs, ETFs, SGBs, debt, structured products, SIFs</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>Detailed goal-based financial planning (e.g. retirement, kid's education, vacations) via app</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>Free advisory on PF, loans, insurance, emergency fund</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>Monthly review of market and portfolio health</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>Low-cost direct products — saves approx. 1% commission annually</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>70% lower cost than PMS</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  {/* Highlight box */}
                  <div className="bg-[#FAF8F5] border border-[#4A6B52]/5 rounded-xl p-3 text-center mb-6">
                    <p className="text-xs text-[#1F2922]/70 font-semibold italic">Ideal for investors wanting to maximize risk-adjusted returns</p>
                  </div>
                  {/* Button */}
                  <a href="#wealth-consult" className="block text-center text-xs font-bold text-[#FAF8F5] bg-[#1F2922] py-3 rounded-full hover:bg-black transition">
                    Get Started
                  </a>
                </div>
              </div>

              {/* Profit-Share Plan */}
              <div className="bg-white border border-[#4A6B52]/10 rounded-2xl p-8 flex flex-col justify-between shadow-sm relative">
                <div>
                  <h4 className="text-2xl font-serif font-bold text-[#1F2922] mb-1">Profit-Share Plan</h4>
                  <div className="mb-8 flex items-baseline gap-1 mt-6">
                    <span className="text-4xl font-serif font-black text-[#1F2922] tracking-tight">8%</span>
                    <span className="text-xs text-[#1F2922]/50 font-bold uppercase tracking-wider">of net gains^</span>
                  </div>

                  <ul className="space-y-4 text-xs text-[#1F2922]/80 font-medium">
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>AI driven active alpha strategy across global equities</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>Leveraged returns by investing in F&O (Futures & Options), MTF (Margin Trading), Pair Trading</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>Personalized dashboard, real-time alerts, high water-mark model</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <Check className="w-4 h-4 text-[#4A6B52] shrink-0 mt-0.5" />
                      <span>More skin in the game</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  {/* Highlight box */}
                  <div className="bg-[#FAF8F5] border border-[#4A6B52]/5 rounded-xl p-3 text-center mb-4">
                    <p className="text-xs text-[#1F2922]/70 font-semibold italic">Ideal for high-risk investors who want to invest upwards of ₹ 1 Cr</p>
                  </div>
                  {/* Footnote */}
                  <p className="text-[10px] text-[#1F2922]/60 text-center mb-6 leading-relaxed">
                    * Both realized and unrealized profits trued-up quarterly and offset against one-time onboarding fee of ₹25K
                  </p>
                  {/* Button */}
                  <a href="#wealth-consult" className="block text-center text-xs font-bold text-[#1F2922] border border-[#1F2922] py-3 rounded-full hover:bg-[#FAF8F5] transition">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          )}

          {pricingTab !== "wealth" && (
            <p className="text-xs font-bold text-[#1F2922]/50 text-center uppercase tracking-wide">
              * With 12 months of subscription, get 1 month free
            </p>
          )}
        </div>
      </section>

      {/* FAQ QUESTIONS SECTION */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
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
                    onClick={() => toggleFaq("research_0")}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-[#1F2922] focus:outline-none"
                  >
                    <span>Who uses CrispIdea research?</span>
                    <span className="text-xs">{activeFaq.research_0 ? '−' : '+'}</span>
                  </button>
                  {activeFaq.research_0 && (
                    <div className="px-5 pb-4 text-xs text-[#1F2922]/70 leading-relaxed font-medium">
                      Hedge funds, asset managers, PE/VC firms, brokerages and corporate strategy teams across 18 countries.
                    </div>
                  )}
                </div>

                {/* Q2 */}
                <div className="border border-[#4A6B52]/10 rounded-xl bg-[#FAF8F5]/30 overflow-hidden">
                  <button
                    onClick={() => toggleFaq("research_1")}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-[#1F2922] focus:outline-none"
                  >
                    <span>Can you build a custom coverage universe?</span>
                    <span className="text-xs">{activeFaq.research_1 ? '−' : '+'}</span>
                  </button>
                  {activeFaq.research_1 && (
                    <div className="px-5 pb-4 text-xs text-[#1F2922]/70 leading-relaxed font-medium">
                      Yes — bespoke mandates are our most popular engagement. We assemble dedicated analyst pods around your decision needs.
                    </div>
                  )}
                </div>

                {/* Q3 */}
                <div className="border border-[#4A6B52]/10 rounded-xl bg-[#FAF8F5]/30 overflow-hidden">
                  <button
                    onClick={() => toggleFaq("research_2")}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-[#1F2922] focus:outline-none"
                  >
                    <span>What is your QoM framework?</span>
                    <span className="text-xs">{activeFaq.research_2 ? '−' : '+'}</span>
                  </button>
                  {activeFaq.research_2 && (
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
                    onClick={() => toggleFaq("wealth_0")}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-[#1F2922] focus:outline-none"
                  >
                    <span>Are you SEBI registered?</span>
                    <span className="text-xs">{activeFaq.wealth_0 ? '−' : '+'}</span>
                  </button>
                  {activeFaq.wealth_0 && (
                    <div className="px-5 pb-4 text-xs text-[#1F2922]/70 leading-relaxed font-medium">
                      Yes. CrispIdea Wealth is a SEBI-registered investment advisor offering goal-based, fiduciary advisory.
                    </div>
                  )}
                </div>

                {/* Q2 */}
                <div className="border border-[#4A6B52]/10 rounded-xl bg-[#FAF8F5]/30 overflow-hidden">
                  <button
                    onClick={() => toggleFaq("wealth_1")}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-[#1F2922] focus:outline-none"
                  >
                    <span>Who is the wealth service for?</span>
                    <span className="text-xs">{activeFaq.wealth_1 ? '−' : '+'}</span>
                  </button>
                  {activeFaq.wealth_1 && (
                    <div className="px-5 pb-4 text-xs text-[#1F2922]/70 leading-relaxed font-medium">
                      Salaried professionals, high-income individuals, HNIs and family offices in India.
                    </div>
                  )}
                </div>

                {/* Q3 */}
                <div className="border border-[#4A6B52]/10 rounded-xl bg-[#FAF8F5]/30 overflow-hidden">
                  <button
                    onClick={() => toggleFaq("wealth_2")}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs md:text-sm text-[#1F2922] focus:outline-none"
                  >
                    <span>How is your advice different?</span>
                    <span className="text-xs">{activeFaq.wealth_2 ? '−' : '+'}</span>
                  </button>
                  {activeFaq.wealth_2 && (
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

      {/* CHOOSE YOUR PATH SECTION */}
      <section id="contact" className="py-20 px-6 lg:px-12 border-b border-[#4A6B52]/10 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#EAF2FA] via-white to-[#EDF5EE] border border-[#4A6B52]/10 rounded-3xl p-8 md:p-12 text-center shadow-sm">
          <span className="text-[10px] font-bold text-[#1F2922]/50 uppercase tracking-[0.2em] block mb-3">
            GET STARTED
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1F2922] leading-tight mb-4 max-w-2xl mx-auto font-normal">
            Choose your path. Both lead to the same research engine.
          </h2>
          <p className="text-sm text-[#1F2922]/60 max-w-lg mx-auto mb-10 leading-relaxed">
            Tell us who you are — we'll route you to the right team within one business day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Institution button */}
            <a 
              href="#institutional-consult"
              className="bg-gradient-to-br from-[#0C2A4E] to-[#04152A] text-white p-7 px-8 rounded-2xl hover:scale-[1.01] hover:shadow-lg transition-all duration-200 text-left flex items-center justify-between shadow-sm relative group"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-[#7CA2C8] tracking-wider block mb-1">FOR INSTITUTIONS</span>
                <span className="text-xl font-serif font-medium text-white">Talk to research</span>
              </div>
              <div className="text-white/80 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </a>

            {/* Individual button */}
            <a 
              href="#wealth-consult"
              className="bg-gradient-to-br from-[#123A23] to-[#05150C] text-white p-7 px-8 rounded-2xl hover:scale-[1.01] hover:shadow-lg transition-all duration-200 text-left flex items-center justify-between shadow-sm relative group"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-[#8EAC95] tracking-wider block mb-1">FOR INDIVIDUALS</span>
                <span className="text-xl font-serif font-medium text-white">Book a wealth consult</span>
              </div>
              <div className="text-white/80 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                <ArrowUpRight className="w-5 h-5" />
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

      {/* LEADER DETAIL MODAL */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          {/* Backdrop blur overlay */}
          <div 
            onClick={() => setSelectedLeader(null)}
            className="fixed inset-0 bg-[#1F2922]/20 backdrop-blur-md transition-opacity duration-300"
          />
          
          {/* Modal Container */}
          <div className="bg-white border border-[#4A6B52]/15 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedLeader(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full border border-[#4A6B52]/10 flex items-center justify-center text-[#1F2922]/55 hover:text-[#1F2922] hover:bg-[#FAF8F5] transition focus:outline-none z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-10">
              
              {/* Left Column (Avatar, Name, Role, Quote) */}
              <div className="md:col-span-5 flex flex-col items-start text-left">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden relative mb-6 border border-[#4A6B52]/10 bg-[#FAF8F5]">
                  <Image 
                    src={selectedLeader.image} 
                    alt={selectedLeader.name} 
                    fill
                    sizes="(max-width: 768px) 112px, 128px"
                    className="object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-[#1F2922] mb-1 leading-tight">
                  {selectedLeader.name}
                </h3>
                <p className="text-xs text-[#1F2922]/50 font-bold uppercase tracking-wider mb-4">
                  {selectedLeader.role}
                </p>

                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[#4A6B52]/15 text-[#1F2922]/60 hover:text-[#4A6B52] hover:bg-[#FAF8F5] transition mb-6"
                  aria-label={`${selectedLeader.name}'s LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <div className="border-l-2 border-[#4A6B52] pl-4 py-1.5 mb-6">
                  <p className="text-xs md:text-sm text-[#1F2922]/70 leading-relaxed font-semibold italic">
                    {selectedLeader.quote}
                  </p>
                </div>
              </div>

              {/* Right Column (Stats Grid, Paragraphs) */}
              <div className="md:col-span-7 flex flex-col justify-start">
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
                  {selectedLeader.stats.map((stat) => (
                    <div key={stat.label} className="border-b border-[#4A6B52]/10 pb-3">
                      <span className="text-[9px] uppercase font-bold text-[#4A6B52]/50 tracking-wider block mb-0.5">
                        {stat.label}
                      </span>
                      <span className="text-base font-serif font-bold text-[#1F2922] leading-snug block">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Paragraphs */}
                <div className="space-y-4 text-xs md:text-sm text-[#1F2922]/75 leading-relaxed font-medium text-left">
                  {selectedLeader.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
