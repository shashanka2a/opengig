import React, { useState, useEffect, useRef } from 'react';
import { 
  FileText, MessageSquare, Mic, Mail, 
  ArrowRight, Check, Sparkles, Filter, 
  Layers, Play, ChevronDown, CheckCircle2,
  AlertCircle, StickyNote, RefreshCw, Zap,
  Download, Share2, CornerDownRight,
  UserCheck, Send, BarChart3, Database, Workflow,
  Users, Briefcase
} from 'lucide-react';

/**
 * OpenGig - Order from Chaos Edition (Refined v3.0)
 * Updates:
 * - Typography: Switched to 'Inter' for a strictly minimal/professional tool look.
 * - Content: Pivot from "Marketplace" (Matching) to "Tooling" (Assignment/Allocation).
 * - Step 3: Changed "Match" to "Assign".
 */

// --- Global Styles & Texture ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
    
    body { font-family: 'Inter', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    .font-display { font-family: 'Inter', sans-serif; letter-spacing: -0.04em; }
    
    .bg-noise {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 50;
    }

    @keyframes float-gentle {
      0%, 100% { transform: translateY(0px) rotate(var(--rot)); }
      50% { transform: translateY(-10px) rotate(var(--rot)); }
    }
    
    .animate-float {
      animation: float-gentle 6s ease-in-out infinite;
    }
    
    @keyframes slide-up-fade {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-enter {
      animation: slide-up-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `}</style>
);

// --- 1. Hero: Hiring Chaos to AI Order (Sticky Scroll) ---
const ChaosHero = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fragments, setFragments] = useState([]);

  useEffect(() => {
    const items = [
      { type: 'alert', text: "Security: ISO 27001", color: "bg-red-50", rotate: -6, top: 5, left: 5, delay: '0s' },
      { type: 'note', text: "Budget: $15k Fixed", color: "bg-amber-50", rotate: 12, top: 85, left: 10, delay: '1s' },
      { type: 'email', text: "Tech Stack: React + Node", color: "bg-white", rotate: -3, top: 15, left: 80, delay: '2s' },
      { type: 'app', text: "Integration: Stripe", color: "bg-gray-50", rotate: 8, top: 75, left: 75, delay: '0.5s' },
      { type: 'slack', text: "Scope: User Auth", color: "bg-white", rotate: 15, top: 45, left: 85, delay: '1.5s' },
      { type: 'note', text: "Timeline: 4 Weeks", color: "bg-rose-50", rotate: -10, top: 55, left: 2, delay: '2.5s' },
    ];
    setFragments(items);

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollHeight = rect.height - viewportHeight;
      const scrolled = -rect.top; 
      let progress = 0;
      if (scrolled > 0) {
        progress = scrolled / totalScrollHeight;
      }
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const p = scrollProgress; 
  const isComplete = p > 0.95;

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#F7F8FA]">
      
      {/* Sticky Wrapper */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center pt-20">
        
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        {/* LEFT SIDE: FRAGMENTED WORKFLOWS */}
        <div className="relative w-full md:w-1/2 h-full z-10 perspective-1000 px-6 md:px-12 flex items-center">
          
          {/* Title Area */}
          <div className="relative w-full z-20 pointer-events-none mix-blend-darken"> 
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-[#1A1A1A] leading-[0.95] tracking-tight max-w-3xl">
              Streamline the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA] font-extrabold">Gig Economy.</span>
            </h1>
            {/* Scroll Indicator */}
            <div className="mt-12 text-sm font-mono text-gray-400 animate-bounce flex items-center gap-2">
              <div className="w-px h-8 bg-gray-300"></div>
              <span>Scroll to Automate</span>
            </div>
          </div>

          {/* Floating Fragments */}
          {fragments.map((frag, i) => (
            <div
              key={i}
              className={`absolute p-4 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-black/5 text-sm font-medium text-[#1A1A1A]/80 transition-transform duration-75 cubic-bezier(0.2, 0, 0.2, 1) hover:z-30 cursor-pointer hover:shadow-xl`}
              style={{
                '--rot': `${frag.rotate}deg`,
                top: `${frag.top}%`,
                left: `${frag.left}%`,
                backgroundColor: frag.color,
                maxWidth: '220px',
                transform: `
                  translate(${p * 600}px, ${p * 150}px) 
                  rotate(${frag.rotate + (p * 180)}deg) 
                  scale(${Math.max(0, 1 - p * 1.2)})
                `,
                opacity: 1 - p
              }}
            >
              <div className="flex items-center gap-2 mb-2 opacity-40 text-[10px] uppercase tracking-widest font-bold font-mono">
                {frag.type === 'email' && <Mail className="w-3 h-3" strokeWidth={1.5} />}
                {frag.type === 'note' && <StickyNote className="w-3 h-3" strokeWidth={1.5} />}
                {frag.type === 'slack' && <MessageSquare className="w-3 h-3" strokeWidth={1.5} />}
                {frag.type === 'alert' && <AlertCircle className="w-3 h-3" strokeWidth={1.5} />}
                {frag.type === 'app' && <Layers className="w-3 h-3" strokeWidth={1.5} />}
                {frag.type.toUpperCase()}
              </div>
              <div className="leading-snug">{frag.text}</div>
            </div>
          ))}
        </div>

        {/* CENTER DIVIDER */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#2563EB]/10 to-transparent hidden md:block"></div>
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-300"
          style={{ transform: `translate(-50%, -50%) scale(${1 + p * 0.2})` }}
        >
          <div 
            className={`group relative flex items-center justify-center w-24 h-24 rounded-full border-4 shadow-2xl transition-colors duration-500 ${isComplete ? 'bg-[#10B981] border-[#10B981]' : 'bg-white border-[#2563EB]'}`}
          >
             {isComplete ? (
               <Check className="w-10 h-10 text-white animate-bounce" strokeWidth={2} />
             ) : (
               <ArrowRight 
                 className="w-10 h-10 text-[#2563EB]" 
                 strokeWidth={1.5}
                 style={{ transform: `rotate(${p * 360}deg)` }} 
               />
             )}
          </div>
          <div className="absolute top-28 left-1/2 -translate-x-1/2 whitespace-nowrap font-bold text-xs text-[#2563EB] uppercase tracking-widest bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm font-mono border border-[#2563EB]/10">
            {isComplete ? 'Workflow Optimized' : `${Math.round(p * 100)}% Processing...`}
          </div>
        </div>

        {/* RIGHT SIDE: UNIFIED ECOSYSTEM */}
        <div className="relative w-full md:w-1/2 h-full z-0 flex items-center justify-center p-8 md:pl-20">
          <div 
            className="w-full max-w-md bg-white border border-[#E5E7EB] rounded-t-xl shadow-2xl overflow-hidden transition-all duration-75"
            style={{
              transform: `translateX(${(1 - p) * 100}px)`,
              opacity: p,
              filter: `blur(${(1 - p) * 10}px)`
            }}
          >
            {/* Document Header */}
            <div className="bg-white border-b border-[#F3F4F6] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center text-white font-display font-bold shadow-lg shadow-blue-500/30 text-lg">O</div>
                <div>
                  <div className="text-sm font-bold text-[#1A1A1A] font-display">Active_Project_Beta</div>
                  <div className="text-[10px] text-gray-400 font-mono">Status: In Progress • Auto-Pilot</div>
                </div>
              </div>
              <div className="flex gap-1">
                 <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                 <div className="w-2 h-2 rounded-full bg-gray-200"></div>
              </div>
            </div>

            {/* Document Body */}
            <div className="p-8 space-y-6 min-h-[320px] bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]">
              
              {/* Allocation - Enters at 30% scroll */}
              <div 
                className="transition-all duration-500"
                style={{ 
                  opacity: p > 0.3 ? 1 : 0,
                  transform: `translateY(${p > 0.3 ? 0 : 20}px)`
                }}
              >
                <div className="h-2 w-24 bg-[#2563EB]/20 rounded mb-3"></div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                      <Briefcase className="w-4 h-4" strokeWidth={1.5} />
                   </div>
                   <div>
                      <div className="text-xs font-bold text-[#1A1A1A]">Smart Allocation</div>
                      <div className="text-[10px] text-gray-500">Resource: Frontend Specialist A</div>
                   </div>
                </div>
              </div>

              {/* Verification - Enters at 50% scroll */}
              <div 
                className="transition-all duration-500"
                style={{ 
                  opacity: p > 0.5 ? 1 : 0,
                  transform: `translateY(${p > 0.5 ? 0 : 20}px)`
                }}
              >
                <div className="h-2 w-16 bg-[#2563EB]/20 rounded mb-3"></div>
                <div className="flex gap-2">
                  <span className="px-3 py-1.5 bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs rounded-md font-bold flex items-center gap-1 font-mono">
                    <UserCheck className="w-3 h-3" strokeWidth={1.5} /> Verified
                  </span>
                  <span className="px-3 py-1.5 bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-xs rounded-md font-bold flex items-center gap-1 font-mono">
                     <Zap className="w-3 h-3" strokeWidth={1.5} /> Contract Sent
                  </span>
                </div>
              </div>

              {/* Lifecycle - Enters at 70% scroll */}
              <div 
                className="transition-all duration-500"
                style={{ 
                  opacity: p > 0.7 ? 1 : 0,
                  transform: `translateY(${p > 0.7 ? 0 : 20}px)`
                }}
              >
                <div className="h-2 w-20 bg-[#2563EB]/20 rounded mb-3"></div>
                <div className="space-y-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                   <div className="flex items-center gap-3">
                     <CheckCircle2 className="w-4 h-4 text-[#2563EB]" strokeWidth={1.5} />
                     <span className="text-xs font-mono text-gray-600">Onboarding Complete</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <CheckCircle2 className="w-4 h-4 text-[#2563EB]" strokeWidth={1.5} />
                     <span className="text-xs font-mono text-gray-600">Access Granted</span>
                   </div>
                </div>
              </div>
            </div>
            
            <div className={`p-3 text-[10px] text-center border-t border-[#F3F4F6] font-bold tracking-widest uppercase transition-colors duration-500 font-mono ${isComplete ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-gray-50 text-gray-400'}`}>
              {isComplete ? '● Workflow Active' : 'Waiting for input...'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. 5-Step Project Lifecycle ---
const ProjectLifecycle = () => (
  <section className="py-24 px-6 bg-white relative overflow-hidden">
    <div className="container mx-auto max-w-7xl">
       <div className="text-center mb-20">
         <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 tracking-tight">5-Step Project Lifecycle</h2>
         <p className="text-gray-500 text-lg">A clear, linear workflow to manage projects from start to finish.</p>
       </div>

       {/* 5-Column Grid */}
       <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
         <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10"></div>

         {[
           { icon: Filter, title: "Capture", desc: "Define requirements.", color: "text-[#EF4444]", bg: "bg-[#EF4444]/10", border: "hover:border-[#EF4444]" },
           { icon: Layers, title: "Stage", desc: "Organize assets.", color: "text-[#F59E0B]", bg: "bg-[#F59E0B]/10", border: "hover:border-[#F59E0B]" },
           { icon: Users, title: "Assign", desc: "Route to your roster.", color: "text-[#2563EB]", bg: "bg-[#2563EB]/10", border: "hover:border-[#2563EB]" },
           { icon: Send, title: "Launch", desc: "Execute the gig.", color: "text-[#8B5CF6]", bg: "bg-[#8B5CF6]/10", border: "hover:border-[#8B5CF6]" },
           { icon: BarChart3, title: "Analyze", desc: "Review metrics.", color: "text-[#10B981]", bg: "bg-[#10B981]/10", border: "hover:border-[#10B981]" }
         ].map((step, i) => (
           <div key={i} className={`relative z-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group ${step.border}`}>
             <div className={`w-14 h-14 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm`}>
               <step.icon className="w-7 h-7" strokeWidth={1.5} />
             </div>
             <h3 className="font-display font-bold text-lg mb-2 text-[#1A1A1A]">{step.title}</h3>
             <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
             
             <div className="absolute top-0 right-0 bg-gray-50 rounded-bl-2xl px-3 py-1 text-xs font-mono text-gray-400 font-bold border-l border-b border-gray-100">
               0{i + 1}
             </div>
           </div>
         ))}
       </div>
    </div>
  </section>
);

// --- 3. Before/After: Fragmented vs Unified ---
const BeforeAfter = () => (
  <section className="py-24 px-6 bg-[#F7F8FA]">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-2 gap-8 md:gap-0 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-200">
        
        {/* LEFT: THE PROBLEM (Fragmented) */}
        <div className="p-12 bg-gray-50 relative overflow-hidden group">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply"></div>
           <div className="relative z-10">
             <div className="flex items-center gap-3 mb-8">
               <div className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse"></div>
               <h3 className="font-bold text-[#1A1A1A] uppercase tracking-widest text-xs font-mono">Problem: Fragmented Workflows</h3>
             </div>
             
             <div className="space-y-5 font-mono text-xs md:text-sm">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm w-full animate-enter">
                   <div className="text-[#EF4444] font-bold mb-1 flex items-center gap-2">Manual Vetting</div>
                   Wasting hours filtering through unverified profiles manually.
                </div>
                <div className="bg-blue-50 p-4 rounded-2xl rounded-tr-none border border-blue-100 shadow-sm w-4/5 ml-auto text-right animate-enter" style={{animationDelay: '0.1s'}}>
                   <div className="text-[#2563EB] font-bold mb-1">Inefficient Outreach</div>
                   Sending manual emails individually. Response rate low.
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm w-3/4 animate-enter" style={{animationDelay: '0.2s'}}>
                   <div className="text-[#EF4444] font-bold mb-1">Disjointed Tools</div>
                   Sourcing in LinkedIn, managing in Trello, paying in PayPal.
                </div>
             </div>

             <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 bg-[#EF4444] text-white rounded-lg text-xs font-bold shadow-lg shadow-red-200 font-mono">
               <AlertCircle className="w-4 h-4" strokeWidth={1.5} /> Workflow Broken
             </div>
           </div>
        </div>

        {/* RIGHT: THE SOLUTION (Unified) */}
        <div className="p-12 bg-white relative border-l border-gray-100">
           <div className="flex items-center gap-3 mb-8">
             <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
             <h3 className="font-bold text-[#1A1A1A] uppercase tracking-widest text-xs font-mono">Solution: Unified Ecosystem</h3>
           </div>

           <div className="space-y-6">
             {/* Feature 1 */}
             <div className="group relative pl-6 border-l-2 border-[#2563EB] hover:border-l-4 transition-all">
               <div className="text-[10px] text-gray-400 uppercase font-bold mb-2 tracking-wider font-mono">Smart Allocation</div>
               <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-center justify-between mb-2">
                 <span className="font-semibold text-[#1A1A1A] text-sm">Instant Resource Allocated</span>
                 <span className="text-[10px] bg-white border px-2 py-0.5 rounded text-gray-500 font-mono">Roster Checked</span>
               </div>
             </div>
             
             {/* Feature 2 */}
             <div className="group relative pl-6 border-l-2 border-[#F59E0B] hover:border-l-4 transition-all">
               <div className="text-[10px] text-gray-400 uppercase font-bold mb-2 tracking-wider font-mono">Automated Distribution</div>
               <div className="flex gap-3 mt-2">
                 <span className="px-3 py-1.5 bg-gray-900 text-white rounded-md text-xs font-bold shadow-md font-mono">Briefs Distributed</span>
                 <span className="px-3 py-1.5 bg-green-50 text-[#10B981] border border-green-100 rounded-md text-xs font-bold font-mono">High Conversion</span>
               </div>
             </div>

             <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
               <div className="flex items-center gap-2 text-[#10B981] font-bold text-sm">
                 <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} /> All-in-one Platform
               </div>
               <button className="text-gray-400 hover:text-[#2563EB] transition-colors">
                  <Share2 className="w-5 h-5" strokeWidth={1.5} />
               </button>
             </div>
           </div>
        </div>
        
      </div>
    </div>
  </section>
);

// --- Main Layout ---
export default function OpenGigChaos() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#1A1A1A] font-sans selection:bg-[#2563EB] selection:text-white">
      <GlobalStyles />
      <div className="bg-noise"></div>
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100 supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center rounded-xl font-bold text-xl shadow-lg font-display">O</div>
            <span className="font-display font-bold text-xl tracking-tight">OpenGig</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#" className="hover:text-[#2563EB] transition-colors">Platform</a>
            <a href="#" className="hover:text-[#2563EB] transition-colors">Solutions</a>
            <a href="#" className="hover:text-[#2563EB] transition-colors">Pricing</a>
            <button className="px-5 py-2.5 bg-[#2563EB] text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/30">
              Start Hiring
            </button>
          </div>
        </div>
      </nav>

      <ChaosHero />
      <ProjectLifecycle />
      <BeforeAfter />

      {/* CTA Footer */}
      <footer className="bg-[#1A1A1A] text-white py-24 px-6 text-center relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">Join the Future of Work.</h2>
          <p className="text-gray-400 mb-12 text-xl font-medium max-w-2xl mx-auto">
            Stop searching. Start building. Experience the unified AI ecosystem for the gig economy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <button className="px-8 py-4 bg-[#2563EB] rounded-xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/50 hover:scale-105 flex items-center justify-center gap-2">
               Get Started Now <Zap className="w-4 h-4 fill-white" strokeWidth={2} />
             </button>
             <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-md flex items-center justify-center gap-2">
               Watch Demo <Play className="w-4 h-4 fill-white" strokeWidth={2} />
             </button>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800 text-sm text-gray-500 font-medium font-mono">
            © 2025 OpenGig Inc. // All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
