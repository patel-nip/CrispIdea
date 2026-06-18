"use client";

import { useState } from "react";
import { 
  ChevronDown, 
  ArrowUpRight, 
  Search, 
  HelpCircle,
  TrendingUp,
  Shield,
  Layers,
  ArrowRight
} from "lucide-react";

export default function FAQ() {
  const [researchOpen, setResearchOpen] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndices, setOpenIndices] = useState({ 0: true }); // Open first by default

  const toggleFaq = (idx) => {
    setOpenIndices(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const faqData = [
    {
      question: "What is the minimum investment to get started with CrispIdea?",
      answer: "There is no one-size-fits-all minimum — we work with HNIs and ambitious professionals across a range of portfolio sizes. The right starting point depends on your goals, timeline and current financial situation. Speak to an advisor to understand what makes sense for you."
    },
    {
      question: "How is CrispIdea different from a typical wealth manager or robo-advisor?",
      answer: "Most wealth managers give you a model portfolio built on someone else's research. We are a research house first - our analysts produce original equity research distributed to global institutions - and that same intelligence powers every portfolio we build for individual clients. You get institutional-grade thinking, personalized to your life goals. Besides you save on high commission regular mutual funds and also expensive PMS services. And one also gets exposure to alternate asset classes like global equities when investing through us."
    },
    {
      question: "What kind of goals can CrispIdea help me plan for?",
      answer: "We build portfolios around the goals that matter most - retirement corpus, children's education, lifestyle milestones like travel or property, and wealth preservation across generations. Each plan is built around your specific timeline, risk appetite and aspirations, not a generic risk category."
    },
    {
      question: "Is CrispIdea regulated? Is my money safe?",
      answer: "Yes - CrispIdea is a SEBI-registered investment advisor. As a registered advisor, we are bound by SEBI's fiduciary standards, which means we are legally required to act in your interest. Your investments are held in your own demat and bank accounts - we never hold client funds."
    },
    {
      question: "How does CrispIdea personalize my portfolio?",
      answer: "We apply behavioral finance principles to understand your financial personality - not just your risk tolerance, but your spending behavior, life stage, income trajectory and long-term aspirations. The output is a portfolio constructed specifically for you, reviewed regularly as your life evolves."
    },
    {
      question: "What does the onboarding process look like?",
      answer: "It starts with a 30-minute discovery call with one of our advisors. We map your current financial position, goals and timeline, then present a personalized plan within 3-5 working days. Once you approve the plan, we handle implementation and provide ongoing monitoring and reviews."
    },
    {
      question: "What kind of returns can I expect when investing through CrispIdea?",
      answer: "As per SEBI regulations we are not allowed to commit any specific returns as investing in equity markets is considered high risk which could include loss of capital as well. We however pay a lot of attention to creating alpha (excess return over market returns) in your portfolio while minimizing risk (through lower beta and lower volatility). Our model portfolio in 2025 and 2026 delivered 18% compounded returns, however past returns are not indicative of future returns."
    }
  ];

  const filteredFaqs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <a href="#signin" className="text-sm font-medium text-[#031333]/70 hover:text-[#031333] transition">Sign in</a>
            <a 
              href="/#contact" 
              className="bg-[#031333] text-[#F8FAFC] text-sm font-semibold py-2 px-5 rounded-full hover:bg-[#2A392F] transition duration-200 "
            >
              Talk to us
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-grid pt-16 pb-16 px-6 lg:px-12 border-b border-[#a8c940]/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-white/80 backdrop-blur-sm border border-[#a8c940]/15 rounded-full px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5 mb-6 ">
            <HelpCircle className="w-3.5 h-3.5 text-[#a8c940]" />
            FAQ Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#031333] leading-[1.15] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-base text-[#031333]/70 leading-relaxed max-w-xl mx-auto mb-8 font-medium">
            Everything you need to know about our fiduciary wealth advisory engine and how we structure your portfolios.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#031333]/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-[#a8c940]/15 rounded-full text-sm placeholder-[#031333]/45 focus:outline-none focus:border-[#a8c940]/35 focus:ring-1 focus:ring-[#a8c940]/35 transition"
            />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-20 px-6 lg:px-12 bg-white flex-1">
        <div className="max-w-3xl mx-auto">
          
          {/* Wealth section label */}
          <div className="flex items-center gap-2 mb-8 border-b border-[#a8c940]/10 pb-4">
            <TrendingUp className="w-5 h-5 text-[#a8c940]" />
            <h2 className="text-base font-bold text-[#031333] uppercase tracking-widest font-sans">
              Wealth Management FAQs
            </h2>
          </div>

          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const globalIdx = faqData.findIndex(item => item.question === faq.question);
                const isOpen = openIndices[globalIdx];
                return (
                  <div 
                    key={globalIdx}
                    className="border border-[#a8c940]/10 rounded-2xl bg-[#F8FAFC]/30 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(globalIdx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-sm md:text-base text-[#031333] focus:outline-none hover:bg-[#F8FAFC]/60 transition"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-[#a8c940]/70 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-[#031333]/70 leading-relaxed font-medium">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 text-[#031333]/60">
              <p className="text-sm font-semibold">No questions found matching "{searchQuery}"</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="text-xs text-[#a8c940] underline font-bold mt-2 hover:text-black"
              >
                Clear search filter
              </button>
            </div>
          )}

          {/* Fiduciary Notice Card */}
          <div className="mt-16 bg-gradient-to-br from-[#ECF5FC] to-white/95 border border-blue-500/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-[#0077bd]/10 flex items-center justify-center text-[#0077bd] shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#031333] mb-1">Fiduciary & Filer Standards</h4>
                <p className="text-xs text-[#031333]/65 leading-relaxed max-w-md">
                  As a SEBI Registered Investment Advisor, CrispIdea operates with complete transparency. We receive zero commissions or distributions from product manufacturers.
                </p>
              </div>
            </div>
            <a 
              href="/#contact"
              className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#071E3D] hover:bg-[#030E1C] px-5 py-3 rounded-full transition shrink-0 group"
            >
              Talk to an Advisor <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
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
              <li><a href="/faq" className="text-[#a8c940] hover:text-[#a8c940] transition">FAQ</a></li>
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

    </div>
  );
}
