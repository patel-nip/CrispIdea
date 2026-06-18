"use client";

import { useState } from "react";
import { 
  ChevronDown, 
  ArrowUpRight, 
  FileText, 
  Play, 
  X,
  Mail,
  ArrowRight
} from "lucide-react";

export default function Insights() {
  // Navigation active state
  const [researchOpen, setResearchOpen] = useState(0);

  // Video modal state
  const [activeVideoId, setActiveVideoId] = useState(null); // YouTube video ID or null

  // Blogs dataset
  const blogs = [
    {
      badge: "RESEARCH",
      badgeStyle: "bg-[#0077bd]/10 text-[#0076bb] border-blue-200",
      date: "May 26, 2026",
      title: "The Dual-Use Dividend: Why the Wall Between Defence and Industry Is Permanently Coming Down",
      desc: "The traditional boundary between a defence company and an industrial manufacturer is not blurring at the edges — it is collapsing.",
      url: "https://www.crispidea.com/dual-use-dividend/"
    },
    {
      badge: "WEALTH",
      badgeStyle: "bg-[#F2F6E6] text-[#a8c940] border-[#a8c940]/20",
      date: "May 21, 2026",
      title: "NRE vs NRO vs FCNR: Choosing the Right Account Structure for Your Indian Assets",
      desc: "Why your account choice matters more than you think — a practical NRI guide to structuring assets in India.",
      url: "https://www.crispidea.com/nre-vs-nro-vs-fcnr-nri-guide/"
    },
    {
      badge: "SECTOR",
      badgeStyle: "bg-neutral-100 text-neutral-800 border-neutral-200",
      date: "May 19, 2026",
      title: "Food and Beverage Industry Restructuring: Why Acquisitions, Separations and Partnerships Are Rising",
      desc: "Global F&B restructuring is becoming one of the most important business trends as companies respond to shifting demand.",
      url: "https://www.crispidea.com/food-and-beverage-industry-restructuring/"
    }
  ];

  // Newsletters dataset
  const newsletters = [
    {
      date: "May 2026 • PDF",
      title: "The Next Cohort: Who Joins the Mega-Cap Club by 2030?",
      url: "https://www.crispidea.com/wp-content/uploads/2026/05/The-Next-Cohort-Who-Joins-the-Mega-Cap-Club-by-2030-1.pdf"
    },
    {
      date: "April 2026 • PDF",
      title: "The Quarter that Broke the Bull: War, Debt and the March Market Shock",
      url: "https://www.crispidea.com/wp-content/uploads/2026/04/The-Quarter-that-Broke-the-Bull.pdf"
    },
    {
      date: "February 2026 • PDF",
      title: "The 2026 Financial Rollercoaster: Making Sense of the Market Chaos",
      url: "https://www.crispidea.com/wp-content/uploads/2026/02/The-2026-Financial-Rollercoaster.pdf"
    }
  ];

  // Video Perspectives dataset
  const videos = [
    {
      title: "3 Sectors That Could Outperform in 2025 (With Real Examples)",
      youtubeId: "dae706pj5gU",
      url: "https://youtu.be/dae706pj5gU?si=F0KCo3FBeO_wLE6z"
    },
    {
      title: "CrispIdea Equity Reports: For Investors Who Move First",
      youtubeId: "8-t9VBwlRbE",
      url: "https://youtu.be/8-t9VBwlRbE?si=vjEOczI0Jz9n0Vce"
    },
    {
      title: "A Simple ₹10K Trick Could Make You a Crorepati",
      youtubeId: "6TVtgO1QPyQ",
      url: "https://youtu.be/6TVtgO1QPyQ?si=s6jMmXpMMi3-Cpom"
    }
  ];

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
            <a href="/insights" className="text-[#031333] transition border-b border-[#031333]">Insights</a>
            <a href="/#pricing" className="text-[#031333]/70 hover:text-[#031333] transition">Pricing</a>
            
            {/* Research Dropdown */}
            <div 
              className="relative"
              onMouseLeave={() => { if (researchOpen === 1) setResearchOpen(0); }}
            >
              <div className="flex items-center gap-0.5 py-1.5">
                <a 
                  href="/research"
                  className="flex items-center gap-1.5 text-[#031333] hover:text-[#a8c940] transition"
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
                  className="p-0.5 text-[#031333]/70 hover:text-[#031333] transition cursor-pointer focus:outline-none"
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
            <a 
              href="#contact" 
              className="bg-[#031333] text-[#F8FAFC] text-sm font-semibold py-2 px-5 rounded-full hover:bg-[#2A392F] transition duration-200 "
            >
              Talk to us
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-grid pt-16 md:pt-24 pb-20 px-6 lg:px-12 border-b border-[#a8c940]/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl flex flex-col items-start text-left">
            <span className="text-xs font-bold text-[#a8c940] tracking-widest uppercase mb-4 block">
              INSIGHTS
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-[#031333] leading-[1.08] mb-6">
              Go beyond the headlines.
            </h1>
            <p className="text-base md:text-lg text-[#031333]/75 leading-relaxed max-w-2xl mb-8 font-medium">
              CrispIdea's expert blogs, insightful videos and research-backed newsletters. From deep equity insights to practical wealth strategies — we help investors, advisors and decision-makers stay ahead.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="#blogs"
                className="bg-[#031333] text-[#F8FAFC] text-xs font-bold py-3 px-6 rounded-full hover:bg-black transition duration-200 flex items-center gap-1.5"
              >
                Latest blogs <span className="text-xs">↗</span>
              </a>
              <a 
                href="#newsletters"
                className="bg-white/80 backdrop-blur-sm border border-[#a8c940]/15 text-[#031333] text-xs font-bold py-3 px-6 rounded-full hover:bg-[#F8FAFC] transition duration-200"
              >
                Newsletters
              </a>
              <a 
                href="#videos"
                className="bg-white/80 backdrop-blur-sm border border-[#a8c940]/15 text-[#031333] text-xs font-bold py-3 px-6 rounded-full hover:bg-[#F8FAFC] transition duration-200"
              >
                Watch videos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section id="blogs" className="py-20 px-6 lg:px-12 border-b border-[#a8c940]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-[#a8c940] uppercase tracking-wider block mb-3">
                BLOGS
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#031333] leading-tight">
                Sharp takes. Researched, not rushed.
              </h2>
            </div>
            <a 
              href="https://www.crispidea.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#a8c940] hover:text-[#031333] transition flex items-center gap-1"
            >
              View all blogs <span>↗</span>
            </a>
          </div>

          {/* Blogs grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <div 
                key={idx}
                className="bg-[#F8FAFC]/40 border border-[#a8c940]/15 rounded-3xl overflow-hidden flex flex-col justify-between hover:hover:border-[#a8c940]/30 transition duration-300 group"
              >
                {/* Visual Placeholder for Card Header */}
                <div className="h-44 bg-gradient-to-br from-[#F2F6E6]/40 to-[#F8FAFC] border-b border-[#a8c940]/10 flex items-center justify-center relative group-hover:from-[#F2F6E6]/60 transition duration-500">
                  <div className="absolute top-4 left-4">
                    <span className={`text-[9px] font-bold border rounded-full px-2.5 py-0.5 tracking-wide ${blog.badgeStyle}`}>
                      {blog.badge}
                    </span>
                  </div>
                  <FileText className="w-10 h-10 text-[#a8c940]/40 group-hover:scale-105 transition" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 block mb-2">{blog.date}</span>
                    <h3 className="font-serif font-bold text-base md:text-lg text-[#031333] leading-snug mb-3 group-hover:text-[#a8c940] transition">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-[#031333]/70 leading-relaxed font-semibold mb-6">
                      {blog.desc}
                    </p>
                  </div>
                  
                  <a 
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#031333] hover:text-[#a8c940] transition flex items-center gap-1.5"
                  >
                    Read more <span className="text-[10px] transition-transform group-hover:translate-x-0.5">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTERS SECTION */}
      <section id="newsletters" className="py-20 px-6 lg:px-12 border-b border-[#a8c940]/10 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-[#a8c940] uppercase tracking-wider block mb-3">
                NEWSLETTERS
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#031333] leading-tight">
                Quarterly playbooks. Straight to the point.
              </h2>
            </div>
            <a 
              href="https://www.crispidea.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#a8c940] hover:text-[#031333] transition flex items-center gap-1"
            >
              View all newsletters <span>↗</span>
            </a>
          </div>

          {/* Newsletters grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsletters.map((nl, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#a8c940]/15 rounded-3xl overflow-hidden flex flex-col justify-between hover:hover:border-[#a8c940]/30 transition duration-300 group"
              >
                {/* Visual Header */}
                <div className="h-64 bg-[#F2F6E6]/20 border-b border-[#a8c940]/10 flex items-center justify-center relative group-hover:bg-[#F2F6E6]/45 transition duration-500">
                  <div className="absolute top-4 right-4 bg-neutral-900 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded">
                    PDF
                  </div>
                  {/* Central newsletter mock graphic */}
                  <div className="w-16 h-16 rounded-2xl bg-white border border-[#a8c940]/10 flex items-center justify-center text-[#a8c940]/60 group-hover:scale-105 transition">
                    <Mail className="w-6 h-6" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <span className="text-[10px] font-bold text-neutral-400 block mb-2">{nl.date}</span>
                  <h3 className="font-serif font-bold text-base md:text-lg text-[#031333] leading-snug mb-5 group-hover:text-[#a8c940] transition">
                    {nl.title}
                  </h3>
                  <a 
                    href={nl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#031333] hover:text-[#a8c940] transition flex items-center gap-1.5 border-t border-[#a8c940]/5 pt-4"
                  >
                    Download <span className="text-[10px] transition-transform group-hover:translate-x-0.5">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSPECTIVES / VIDEOS SECTION */}
      <section id="videos" className="py-20 px-6 lg:px-12 border-b border-[#a8c940]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-[#a8c940] uppercase tracking-wider block mb-3">
                PERSPECTIVES
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#031333] leading-tight">
                See the thinking — in our own voice.
              </h2>
            </div>
            <a 
              href="https://crispidea.com/perspectives/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#a8c940] hover:text-[#031333] transition flex items-center gap-1"
            >
              View all videos <span>↗</span>
            </a>
          </div>

          {/* Videos grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((vid, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveVideoId(vid.youtubeId)}
                className="bg-[#F8FAFC]/40 border border-[#a8c940]/15 rounded-3xl overflow-hidden flex flex-col justify-between hover:hover:border-[#a8c940]/30 transition duration-300 group cursor-pointer"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden flex items-center justify-center">
                  {/* YouTube native thumbnail API integration */}
                  <img 
                    src={`https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                    alt={vid.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {/* Semi-transparent dark overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300"></div>

                  {/* Play Button Indicator */}
                  <div className="absolute w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#031333] scale-90 group-hover:scale-100 transition duration-300 z-10">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="font-serif font-bold text-base text-[#031333] leading-snug group-hover:text-[#a8c940] transition">
                    {vid.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP CTA SECTION */}
      <section className="py-20 px-6 lg:px-12 border-b border-[#a8c940]/10 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto bg-white border border-[#a8c940]/15 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-15"></div>
          <div className="relative z-10 max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#F2F6E6] flex items-center justify-center text-[#a8c940] mb-6 mx-auto">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#031333] leading-tight mb-4">
              Get every new insight in your inbox.
            </h2>
            <p className="text-xs md:text-sm text-[#031333]/60 mb-8 font-semibold">
              Subscribe to CrispIdea's research and wealth notes. No noise. No filler. Just sharp thinking.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <a 
                href="/about"
                className="bg-[#031333] text-[#F8FAFC] text-xs font-bold py-3 px-6 rounded-full hover:bg-black transition duration-200 flex items-center justify-center gap-1.5 shrink-0"
              >
                About CrispIdea <span className="text-xs">↗</span>
              </a>
              <div className="flex flex-1 items-center bg-[#F8FAFC] border border-[#a8c940]/15 rounded-full px-4 py-1.5">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent text-xs w-full focus:outline-none text-[#031333] placeholder:text-[#031333]/40 font-semibold"
                />
                <button className="text-[#a8c940] hover:text-[#031333] transition">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
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

      {/* YOUTUBE EMBED VIDEO MODAL PLAYER */}
      {activeVideoId && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setActiveVideoId(null)}
        >
          <div 
            className="relative bg-[#031333] border border-white/10 rounded-2xl overflow-hidden w-full max-w-4xl aspect-video max-h-[85vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* YouTube Responsive iframe Embed */}
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="YouTube Video Player"
              className="w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Modal Close Button */}
            <button 
              onClick={() => setActiveVideoId(null)}
              className="absolute top-4 right-4 bg-white/10 text-white rounded-full p-2 hover:bg-white/20 hover:scale-105 active:scale-95 transition focus:outline-none"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
