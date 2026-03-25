import React, { useState, useEffect } from 'react';
import { 
  CalendarCheck, PhoneCall, RefreshCcw, 
  CheckCircle2, Wrench, Zap, Home, Droplet, 
  Briefcase, MessageCircle, Instagram, Menu, X,
  ArrowRight, TrendingUp, Bot
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Constants
  const logoUrl = "https://i.ibb.co/rfvBfZBq/logo.png";
  const waLink = "https://wa.me/15596814509";
  const careerLink = "https://tinyurl.com/2s3n87pd";
  const igLink = "https://www.instagram.com/autoai_system?igsh=MWlvdTRpa3U5eWwxOQ==";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <img 
                src={logoUrl} 
                alt="AutoAI Systems Logo" 
                className="h-10 md:h-12 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
              />
              <span className="hidden text-2xl font-extrabold tracking-tight text-white">
                Auto<span className="text-yellow-400">AI</span> Systems
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'How It Works', 'About', 'Careers'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, '-'))}
                  className={`font-medium transition-colors hover:text-yellow-500 ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
                >
                  {item}
                </button>
              ))}
              <a href={waLink} target="_blank" rel="noreferrer" className="mtn-gradient text-black font-bold px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all">
                Book Consultation
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={isScrolled ? 'text-slate-900' : 'text-white'}>
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col space-y-4">
            {['Home', 'Services', 'How It Works', 'About', 'Careers'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, '-'))} className="text-left font-semibold py-2 border-b border-gray-50">{item}</button>
            ))}
            <a href={waLink} className="mtn-gradient text-black font-bold text-center py-3 rounded-xl mt-4">Book Consultation</a>
          </div>
        )}
      </nav>

      {/* --- HERO --- */}
      <section id="home" className="relative dark-gradient pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="reveal opacity-0 translate-y-12">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
              AI Automation That Helps Businesses Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">More Clients Automatically</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              We help plumbing and home service businesses scale faster using AI automation, lead generation, and appointment booking systems.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href={waLink} className="w-full sm:w-auto mtn-gradient text-black font-bold text-lg px-10 py-4 rounded-full flex items-center justify-center group">
                Book Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button onClick={() => scrollToSection('how-it-works')} className="w-full sm:w-auto bg-white/5 border border-white/20 text-white font-semibold text-lg px-10 py-4 rounded-full">See How It Works</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Our Core Services</h2>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <TrendingUp size={32} />, title: "AI Lead Gen", desc: "We generate qualified leads automatically." },
            { icon: <CalendarCheck size={32} />, title: "AI Booking", desc: "AI books appointments 24/7 on your calendar." },
            { icon: <PhoneCall size={32} />, title: "Call Handling", desc: "AI answers missed calls instantly." },
            { icon: <RefreshCcw size={32} />, title: "Follow-Up System", desc: "Automated systems to close more deals." }
          ].map((s, i) => (
            <div key={i} className="reveal opacity-0 translate-y-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="text-yellow-500 mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">How It Works</h2>
            <div className="space-y-8">
              {[
                "Step 1 — We Set Up Your AI System",
                "Step 2 — We Generate Leads",
                "Step 3 — AI Books Appointments",
                "Step 4 — You Close More Deals"
              ].map((step, i) => (
                <div key={i} className="flex items-center group">
                  <div className="w-12 h-12 rounded-full mtn-gradient flex items-center justify-center font-bold mr-6">{i+1}</div>
                  <span className="text-xl font-bold">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 dark-gradient p-8 rounded-3xl shadow-2xl border border-slate-700 w-full">
             <div className="text-yellow-400 font-mono text-sm mb-4 tracking-widest uppercase">System Logs</div>
             <div className="space-y-3 font-mono text-slate-300 text-sm">
                <div className="animate-pulse flex justify-between"><span>[OK] Scanning for missed calls...</span><span className="text-green-400">ACTIVE</span></div>
                <div className="flex justify-between"><span>[OK] Lead detected (Plumbing)</span><span className="text-blue-400">DETECTED</span></div>
                <div className="flex justify-between"><span>[OK] Appointment scheduled</span><span className="text-yellow-400">SYNCED</span></div>
             </div>
          </div>
        </div>
      </section>

      {/* --- CAREERS --- */}
      <section id="careers" className="py-24 mtn-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-6">Join Our Team</h2>
          <p className="text-xl text-black/80 mb-10">We are hiring appointment setters and cold callers to join our growing AI automation agency.</p>
          <a href={careerLink} target="_blank" className="inline-block bg-black text-white font-bold text-lg px-12 py-4 rounded-full hover:scale-105 transition-all">Apply Now</a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="dark-gradient text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img src={logoUrl} alt="Logo" className="h-10 mb-6" />
            <p className="text-slate-400 max-w-xs">Premium AI automation agency for home services.</p>
          </div>
          <div>
             <h4 className="font-bold mb-6">Quick Links</h4>
             <ul className="space-y-3 text-slate-400">
               <li><button onClick={() => scrollToSection('home')}>Home</button></li>
               <li><button onClick={() => scrollToSection('services')}>Services</button></li>
               <li><button onClick={() => scrollToSection('careers')}>Careers</button></li>
             </ul>
          </div>
          <div>
             <h4 className="font-bold mb-6">Social</h4>
             <a href={igLink} className="flex items-center text-slate-400 hover:text-yellow-400"><Instagram size={20} className="mr-2" /> Instagram</a>
          </div>
        </div>
        <div className="text-center text-slate-500 text-sm border-t border-white/10 pt-8">&copy; {new Date().getFullYear()} AutoAI Systems.</div>
      </footer>

      <a href={waLink} className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full text-white shadow-2xl animate-bounce-slow"><MessageCircle size={32} /></a>
    </div>
  );
}
