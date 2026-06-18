"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { 
  ChevronDown, 
  ChevronRight, 
  Search, 
  FileText, 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  X,
  SlidersHorizontal,
  Calendar
} from "lucide-react";

export default function ThematicResearchPage() {
  // Navigation states
  const [researchOpen, setResearchOpen] = useState(0);
  
  // Filter states
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("latest"); // "latest" | "price-desc" | "price-asc" | "title"

  // Contact Modal state
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedReportName, setSelectedReportName] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // 12 Thematic Research Reports Data
  const reports = useMemo(() => [
    {
      category: "SOFTWARE",
      date: "June 12, 2026",
      title: "The Magnificent 7: Q1 2026 Performance",
      price: 1200,
      image: "/research/recent-reports/mag7stocks.jpg",
      link: "https://www.crispidea.com/report/the-magnificient-7-2026-performance/"
    },
    {
      category: "GREEN FINTECH",
      date: "June 10, 2026",
      title: "Green Fintech 2026 Unlocking Value Across the Green Fintech Revolution",
      price: 230,
      image: "/research/recent-reports/green-fintech.jpeg",
      link: "https://www.crispidea.com/report/green-fintech-2026-fintech-revolution/"
    },
    {
      category: "AEROSPACE & DEFENSE",
      date: "June 4, 2026",
      title: "SpaceX IPO analysis: The rocket that reached everything",
      price: 299,
      image: "/research/recent-reports/spacex.png",
      link: "https://www.crispidea.com/report/spacex-ipo-analysis/"
    },
    {
      category: "DATA CENTER",
      date: "May 31, 2026",
      title: "Data Center Industry Report 2026: The physical, and operational realities of dat...",
      price: 295,
      image: "/research/recent-reports/data-center-industry-report.png",
      link: "https://www.crispidea.com/report/data-center-industry-report-2026/"
    },
    {
      category: "SOFTWARE",
      date: "May 31, 2026",
      title: "The New Era of High Growth Tech: 50 Disruptors Harnessing AI for Global...",
      price: 520,
      image: "/research/recent-reports/the-new-era.png",
      link: "https://www.crispidea.com/report/50-disruptors-harnessing-ai-for-global-scale/"
    },
    {
      category: "AEROSPACE & DEFENSE",
      date: "April 23, 2026",
      title: "The Next Industrial Revolution Is Already in Orbit.",
      price: 300,
      image: "/research/recent-reports/the-next-industrial.webp",
      link: "https://www.crispidea.com/report/spacetech-next-industrial-revolution/"
    },
    {
      category: "ESG",
      date: "April 10, 2026",
      title: "At The Cusp Of A New Geopolitical Order: Where Markets Go From Here: A...",
      price: 345,
      image: "/research/recent-reports/at-the-cusp.png",
      link: "https://www.crispidea.com/report/post-conflict-market-outlook/"
    },
    {
      category: "CP&E",
      date: "April 3, 2026",
      title: "Consumer Electronics 2025 Stock Performance: Silicon Renaissance",
      price: 1832,
      image: "/research/recent-reports/consumer-electronics.png",
      link: "https://www.crispidea.com/report/consumer-electronics-2025-stocks/"
    },
    {
      category: "AEROSPACE & DEFENSE",
      date: "April 3, 2026",
      title: "Aerospace & Defense 2026: Where Geopolitics Meet Software's Defined Power",
      price: 1944,
      image: "/research/recent-reports/aerospace.png",
      link: "https://www.crispidea.com/report/aerospace-defense-2026/"
    },
    {
      category: "AEROSPACE & DEFENSE",
      date: "March 13, 2026",
      title: "Advancing the Future of Aerospace & Defense 2026",
      price: 1912,
      image: "/research/recent-reports/advancing-future.png",
      link: "https://www.crispidea.com/report/aerospace-defense-2025-performance/"
    },
    {
      category: "SOFTWARE",
      date: "March 6, 2026",
      title: "Quantum Computing: Review of 2025 performance of stocks",
      price: 1784,
      image: "/research/recent-reports/quantum-computing.png",
      link: "https://www.crispidea.com/report/quantum-computing-2025-stock-performance/"
    },
    {
      category: "FOOD & BEVERAGES",
      date: "February 25, 2026",
      title: "Food & Beverages 2026: Where Consumer Demand Meets Margin Discipline",
      price: 3280,
      image: "/research/recent-reports/food-beverage.png",
      link: "https://www.crispidea.com/report/food-and-beverages-sector-report-2026/"
    }
  ], []);

  // Unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(reports.map((r) => r.category))).sort();
  }, [reports]);

  // Toggle category checkbox selection
  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Filter & sort logic
  const filteredReports = useMemo(() => {
    let result = [...reports];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          (r.desc && r.desc.toLowerCase().includes(q)) ||
          r.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((r) => selectedCategories.includes(r.category));
    }

    // Sorting
    if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // Latest (matches original order)
    }

    return result;
  }, [reports, searchQuery, selectedCategories, sortBy]);

  // Trigger download report flow
  const handleViewReportClick = (reportTitle) => {
    setSelectedReportName(reportTitle);
    setFormData({ name: "", email: "", company: "", message: `I would like to request institutional access for the thematic report: "${reportTitle}".` });
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

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#031333] font-sans selection:bg-[#a8c940]/20 selection:text-[#031333]">
      
      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#a8c940]/10 px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 select-none cursor-pointer">
            <div className="bg-[#031333] text-[#F8FAFC] w-8 h-8 rounded-lg flex items-center justify-center font-bold font-serif text-lg">
              C
            </div>
            <span className="font-sans font-bold text-lg tracking-tight text-[#031333]">Crisp<span className="text-[#a8c940]">Idea</span></span>
          </a>

          {/* Center Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="/about" className="text-[#031333]/70 hover:text-[#031333] transition">About us</a>
            <a href="/insights" className="text-[#031333]/70 hover:text-[#031333] transition">Insights</a>
            <a href="/#pricing" className="text-[#031333]/70 hover:text-[#031333] transition">Pricing</a>
            
            {/* Research Dropdown */}
            <div 
              className="relative"
              onMouseLeave={() => { if (researchOpen === 1) setResearchOpen(0); }}
            >
              <div className="flex items-center gap-0.5 py-1.5">
                <a 
                  href="/research"
                  className="flex items-center gap-1.5 text-[#a8c940] hover:text-[#a8c940] transition"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0077bd]"></span>
                  <span>Research</span>
                </a>
                <button
                  type="button"
                  onMouseEnter={() => { if (researchOpen !== 2) setResearchOpen(1); }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setResearchOpen(researchOpen === 2 ? 0 : 2);
                  }}
                  className="p-0.5 text-[#a8c940] hover:text-[#a8c940] transition cursor-pointer focus:outline-none"
                  aria-label="Toggle Research menu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${researchOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {!!researchOpen && (
                <div className="absolute left-0 mt-0 w-64 rounded-xl bg-[#F8FAFC] border border-[#a8c940]/15 p-2.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <a 
                    href="/equity-research" 
                    onClick={() => setResearchOpen(false)}
                    className="block px-4 py-2.5 rounded-lg hover:bg-[#F2F6E6] transition"
                  >
                    <div className="font-bold text-xs text-[#031333]">Equity Research</div>
                    <div className="text-[10px] text-[#031333]/60 mt-0.5 font-medium">Company reports &bull; 2,000+ stocks</div>
                  </a>
                  <a 
                    href="/thematic-research" 
                    onClick={() => setResearchOpen(false)}
                    className="block px-4 py-2.5 rounded-lg hover:bg-[#F2F6E6] transition mt-1"
                  >
                    <div className="font-bold text-xs text-[#031333]">Thematic Research</div>
                    <div className="text-[10px] text-[#031333]/60 mt-0.5 font-medium">Sector &amp; cross-industry themes</div>
                  </a>
                </div>
              )}
            </div>

            <a href="/wealth-management" className="flex items-center gap-1.5 text-[#031333] hover:text-[#a8c940] transition">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#031333]"></span>
              <span>Wealth Management</span>
            </a>
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-5">
            <a href="/#signin" className="text-sm font-medium text-[#031333]/70 hover:text-[#031333] transition">Sign in</a>
            <button 
              onClick={() => handleViewReportClick("General Query")}
              className="bg-[#031333] text-[#F8FAFC] text-sm font-semibold py-2 px-5 rounded-full hover:bg-[#2A392F] transition duration-200 cursor-pointer"
            >
              Talk to us
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-20 px-6 lg:px-12 border-b border-[#a8c940]/10 bg-grid">
        <div className="max-w-7xl mx-auto text-left">
          <span className="bg-white/85 backdrop-blur-sm border border-[#a8c940]/15 rounded-full px-3.5 py-1 text-xs font-semibold flex items-center gap-1.5 mb-6 w-fit ">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0077bd]"></span>
            THEMATIC RESEARCH
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-[#031333] leading-[1.08] mb-6">
            Sector & Thematic Reports.
          </h1>

          <p className="text-base md:text-lg text-[#031333]/75 leading-relaxed max-w-3xl mb-12 font-medium">
            Explore the dynamic convergence of industries. Groundbreaking opportunities at the intersection of innovation — emerging trends, key players and market dynamics driving transformative change across deep tech, defense, semiconductors, EV and beyond.
          </p>

          {/* Stats details */}
          <div className="flex flex-wrap gap-12 pt-8 border-t border-[#a8c940]/10">
            <div>
              <span className="text-2xl md:text-3xl font-serif font-bold text-[#031333] block leading-none">200+</span>
              <span className="text-[10px] uppercase font-bold text-[#031333]/40 tracking-wider mt-2.5 block">SECTOR REPORTS</span>
            </div>
            <div className="border-l border-[#a8c940]/10 pl-12">
              <span className="text-2xl md:text-3xl font-serif font-bold text-[#031333] block leading-none">20+</span>
              <span className="text-[10px] uppercase font-bold text-[#031333]/40 tracking-wider mt-2.5 block">THEMES TRACKED</span>
            </div>
            <div className="border-l border-[#a8c940]/10 pl-12">
              <span className="text-2xl md:text-3xl font-serif font-bold text-[#031333] block leading-none">Global</span>
              <span className="text-[10px] uppercase font-bold text-[#031333]/40 tracking-wider mt-2.5 block">CROSS-INDUSTRY VIEW</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN RESEARCH CATALOG */}
      <section className="py-16 px-6 lg:px-12 bg-white border-b border-[#a8c940]/10">
        <div className="max-w-7xl mx-auto">
          
          {/* Catalog Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 pb-6 border-b border-[#a8c940]/5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFiltersVisible(!filtersVisible)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-bold transition cursor-pointer select-none ${
                  filtersVisible 
                    ? "bg-[#031333] text-[#F8FAFC] border-[#031333]" 
                    : "bg-[#F8FAFC] border-[#a8c940]/15 hover:bg-[#F2F6E6] text-[#031333]"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
                {(selectedCategories.length > 0 || searchQuery) && (
                  <span className="ml-1 w-2 h-2 rounded-full bg-[#0077bd] inline-block"></span>
                )}
              </button>
              
              <span className="text-xs text-[#031333]/50 font-semibold">
                Showing {filteredReports.length} of {reports.length}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-[#031333]/50 font-bold shrink-0">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#F8FAFC] border border-[#a8c940]/15 text-xs font-bold py-2 pl-3 pr-8 rounded-lg focus:outline-none focus:border-[#a8c940]/45 appearance-none cursor-pointer relative"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%231F2922\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundPosition: 'right 0.75rem center', backgroundSize: '1rem', backgroundRepeat: 'no-repeat' }}
              >
                <option value="latest">Latest</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="title">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Filter Bar (Collapsible) */}
          {filtersVisible && (
            <div className="bg-[#F8FAFC] border border-[#a8c940]/10 rounded-2xl p-6 mb-10 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Search query input */}
                <div className="lg:col-span-4 flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#a8c940]">Search Query</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search reports or descriptions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white border border-[#a8c940]/15 rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#031333] focus:outline-none focus:border-[#a8c940]/40"
                    />
                    <Search className="w-4 h-4 text-[#031333]/40 absolute left-3 top-3.5" />
                  </div>
                </div>

                {/* Categories checklist */}
                <div className="lg:col-span-8 flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#a8c940]">Categories</label>
                  <div className="flex flex-wrap gap-2 pt-1.5">
                    {categories.map((cat) => {
                      const isSelected = selectedCategories.includes(cat);
                      return (
                        <button
                          key={cat}
                          onClick={() => handleCategoryToggle(cat)}
                          className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold transition cursor-pointer select-none ${
                            isSelected 
                              ? "bg-[#a8c940] text-white border border-transparent "
                              : "bg-white border border-[#a8c940]/15 text-[#031333] hover:bg-[#F2F6E6]"
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Clear filters trigger */}
              {(selectedCategories.length > 0 || searchQuery) && (
                <div className="mt-6 pt-4 border-t border-[#a8c940]/5 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSearchQuery("");
                    }}
                    className="text-xs font-bold text-red-700 hover:text-red-800 flex items-center gap-1 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" /> Clear active filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Catalog Grid */}
          {filteredReports.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {filteredReports.map((report, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-[#a8c940]/10 rounded-[24px] flex flex-col justify-between overflow-hidden hover:hover:border-[#a8c940]/25 hover:-translate-y-1.5 transition-all duration-300 h-[380px] md:h-[400px] group hover-card-premium"
                >
                  {/* Image wrapper */}
                  <div className="pt-4 px-4 relative shrink-0">
                    <div className="relative w-full h-40 rounded-xl overflow-hidden bg-slate-50 border border-slate-100">
                      <Image 
                        src={report.image} 
                        alt={report.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        sizes="(max-w-768px) 100vw, 280px"
                      />
                    </div>
                  </div>

                  {/* Date strip */}
                  <div className="bg-[#EAF2FA]/50 text-[#031333]/70 text-[11px] font-bold py-2.5 px-4 flex items-center justify-center gap-1.5 mt-3 border-y border-[#a8c940]/5">
                    <Calendar className="w-3.5 h-3.5 text-[#031333]/50" />
                    <span>{report.date}</span>
                  </div>

                  {/* Text Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <a 
                      href={report.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h4 className="text-xs md:text-sm font-bold text-[#031333] hover:text-[#0077bd] leading-snug line-clamp-3 mb-4 font-sans transition-colors cursor-pointer">
                        {report.title}
                      </h4>
                    </a>
                    
                    <div className="mt-auto">
                      <a 
                        href={report.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#0077bd] hover:text-[#0076bb] flex items-center gap-1 transition-colors font-sans hover:underline"
                      >
                        ${report.price} Purchase <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 flex flex-col items-center justify-center text-center max-w-md mx-auto">
              <div className="bg-[#F8FAFC] border border-[#a8c940]/10 p-4 rounded-full mb-4">
                <Search className="w-6 h-6 text-[#031333]/40" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#031333] mb-2">No reports match your filters</h3>
              <p className="text-xs text-[#031333]/65 leading-relaxed font-medium mb-6">
                Try adjustment of search string or clearing filters checkboxes to see all thematic reports.
              </p>
              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setSearchQuery("");
                }}
                className="bg-[#031333] text-[#F8FAFC] text-xs font-bold py-2.5 px-5 rounded-full hover:bg-black transition cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* INSTITUTIONAL TRIAL CTA */}
      <section className="py-20 px-6 lg:px-12 bg-[#031333] text-white border-b border-[#a8c940]/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold text-[#a8c940] uppercase tracking-wider block mb-4">
            INSTITUTIONAL ACCESS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Deploy structural sector thematic views<br />to your asset allocation pipeline.
          </h2>
          <p className="text-xs md:text-sm text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            Family offices, asset managers and corporate treasury desks subscribe to CrispIdea to access independent research coverage across 2,000+ public equities and sector themes.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => handleViewReportClick("Institutional Trial Sub")}
              className="bg-[#F8FAFC] text-[#031333] text-xs font-bold py-3 px-6 rounded-full hover:bg-white transition cursor-pointer"
            >
              Request trial subscription ↗
            </button>
            <button
              onClick={() => handleViewReportClick("Analyst Call Request")}
              className="bg-transparent border border-white/20 text-white text-xs font-bold py-3 px-6 rounded-full hover:bg-white/5 transition cursor-pointer"
            >
              Schedule an analyst call
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#031333] border-t border-[#a8c940]/10 py-16 px-6 lg:px-12 text-xs text-white/60">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          
          {/* Logo tagline column */}
          <div className="col-span-2 flex flex-col items-start gap-4">
            <a href="/" className="flex items-center gap-3 select-none cursor-pointer">
              <div className="bg-[#a8c940] text-[#031333] w-7 h-7 rounded-lg flex items-center justify-center font-bold font-serif text-base">
                C
              </div>
              <span className="font-bold text-base tracking-tight text-white">Crisp<span className="text-[#a8c940]">Idea</span></span>
            </a>
            <p className="text-xs leading-relaxed max-w-xs text-white/60 font-medium">
              Research-led intelligence for global institutions and India's wealth builders.
            </p>
          </div>

          {/* Links Column 1: Research */}
          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-wider text-[10px]">Research</h5>
            <ul className="space-y-2.5 font-semibold">
              <li><a href="/research#heatmap" className="hover:text-[#a8c940] transition">Equity</a></li>
              <li><a href="/research#recent-reports" className="hover:text-[#a8c940] transition">Thematic</a></li>
              <li><a href="/research#methodology" className="hover:text-[#a8c940] transition">QoM</a></li>
              <li><a href="/research#methodology" className="hover:text-[#a8c940] transition">ESG</a></li>
              <li><a href="/research#methodology" className="hover:text-[#a8c940] transition">Custom mandates</a></li>
            </ul>
          </div>

          {/* Links Column 2: Wealth */}
          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-wider text-[10px]">Wealth</h5>
            <ul className="space-y-2.5 font-semibold">
              <li><a href="/wealth-management" className="hover:text-[#a8c940] transition">Goal-based plans</a></li>
              <li><a href="/wealth-management" className="hover:text-[#a8c940] transition">Portfolio advisory</a></li>
              <li><a href="/wealth-management" className="hover:text-[#a8c940] transition">HNI services</a></li>
              <li><a href="/wealth-management" className="hover:text-[#a8c940] transition">Private wealth</a></li>
            </ul>
          </div>

          {/* Links Column 3: Company */}
          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-wider text-[10px]">Company</h5>
            <ul className="space-y-2.5 font-semibold">
              <li><a href="/about" className="hover:text-[#a8c940] transition">About</a></li>
              <li><a href="/insights" className="hover:text-[#a8c940] transition">Insights</a></li>
              <li><a href="/#pricing" className="hover:text-[#a8c940] transition">Careers</a></li>
              <li><a href="/#contact" className="hover:text-[#a8c940] transition">Contact</a></li>
              <li><a href="/faq" className="hover:text-[#a8c940] transition">FAQ</a></li>
            </ul>
          </div>

          {/* Links Column 4: Legal */}
          <div>
            <h5 className="font-bold text-white mb-4 uppercase tracking-wider text-[10px]">Legal</h5>
            <ul className="space-y-2.5 font-semibold">
              <li><a href="/#link" className="hover:text-[#a8c940] transition">SEBI disclosures</a></li>
              <li><a href="/#link" className="hover:text-[#a8c940] transition">Terms</a></li>
              <li><a href="/#link" className="hover:text-[#a8c940] transition">Privacy</a></li>
              <li><a href="/#link" className="hover:text-[#a8c940] transition">Disclaimers</a></li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="max-w-7xl mx-auto border-t border-[#a8c940]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 font-medium">
          <span>&copy; {new Date().getFullYear()} CrispIdea. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a8c940]"></span>
            <span>SEBI-registered Investment Advisor &bull; INA000000000</span>
          </span>
        </div>
      </footer>

      {/* TALK TO RESEARCH MODAL */}
      {contactModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white border border-[#a8c940]/15 rounded-2xl max-w-md w-full p-6 relative animate-in zoom-in-95 duration-200">
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
                <h4 className="text-lg font-serif font-bold text-[#031333] mb-1">Request Submitted</h4>
                <p className="text-xs text-[#031333]/70 leading-relaxed font-semibold max-w-xs">
                  Thank you! An institutional coordinator will contact you shortly to verify credentials.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-serif font-bold text-[#031333] mb-1">
                  Access Institutional Research
                </h3>
                <p className="text-[11px] text-[#031333]/60 mb-6 leading-relaxed font-medium">
                  {selectedReportName === "General Query" 
                    ? "Schedule an introductory call with our analyst team."
                    : `Request institutional access credentials for: "${selectedReportName}"`}
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4 font-semibold font-sans">
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#a8c940] block mb-1.5 font-bold">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-[#F8FAFC] border border-[#a8c940]/15 rounded-lg px-3 py-2 text-xs text-[#031333] focus:outline-none focus:border-[#a8c940]/35"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#a8c940] block mb-1.5 font-bold">Work Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-[#F8FAFC] border border-[#a8c940]/15 rounded-lg px-3 py-2 text-xs text-[#031333] focus:outline-none focus:border-[#a8c940]/35"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#a8c940] block mb-1.5 font-bold">Institution / Company</label>
                    <input 
                      type="text" 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full bg-[#F8FAFC] border border-[#a8c940]/15 rounded-lg px-3 py-2 text-xs text-[#031333] focus:outline-none focus:border-[#a8c940]/35"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#a8c940] block mb-1.5 font-bold">Message</label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-[#F8FAFC] border border-[#a8c940]/15 rounded-lg px-3 py-2 text-xs text-[#031333] focus:outline-none focus:border-[#a8c940]/35 resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#031333] text-[#F8FAFC] text-xs font-bold py-3 rounded-lg hover:bg-black transition mt-6 cursor-pointer"
                  >
                    Submit request
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
