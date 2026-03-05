/* index.js */
import React, { useEffect, useState } from 'react';
import { 
  Sparkles, Layers, Zap, Code, Tablet, Clock4, Edit3, 
  Smartphone, Check, PlusCircle, ArrowRight, Menu, Package, Cpu,
  Layers as LayersIcon, Zap as ZapIcon, Code2, Smartphone as SmartphoneIcon
} from 'lucide-react';
import Typed from 'typed.js';

const AmmoueLanding = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed('#typed-target', {
      strings: ['Website', 'Landing Page', 'Dashboard', 'SaaS Platform'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const pricing = {
    pro: isYearly ? 15 : 19,
    agency: isYearly ? 39 : 49,
    period: isYearly ? '/mo' : '/mo'
  };

  return (
    <div className="antialiased min-h-screen font-['Inter'] bg-[#f8fafc] text-gray-900">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
        }
        .animate-scrolling-features {
            display: flex;
            width: fit-content;
            animation: scroll-left 40s linear infinite;
        }
        .pause-on-hover:hover {
            animation-play-state: paused;
        }
        .feature-card {
            min-width: 300px;
            margin-right: 2.5rem;
        }
        .step-box {
            transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        }
        .step-box:hover {
            box-shadow: 0 0 10px 0 #0d9488, 0 0 20px 0 rgba(13, 148, 136, 0.6), inset 0 0 0 2px #0d9488;
            transform: translateY(-2px);
        }
        .mask-image-x-fade {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center space-x-2">
              <img src="Gemini_Generated_Image_qry9pfqry9pfqry9.png" alt="AmmoueAI Logo" className="h-16 w-auto" /> 
              <span className="text-3xl font-extrabold text-[#0d9488]">Ammoue</span>
              <span className="hidden sm:inline text-xs font-medium text-gray-500 bg-teal-100 px-2 py-0.5 rounded-full border border-teal-200">AI Powered</span>
            </a>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 font-medium transition duration-200 border-b-2 border-transparent hover:border-emerald-500 hover:text-emerald-500 py-1">Features</a>
              <a href="#video-showcase" className="text-gray-600 font-medium transition duration-200 border-b-2 border-transparent hover:border-emerald-500 hover:text-emerald-500 py-1">Showcase</a> 
              <a href="#how-it-works" className="text-gray-600 font-medium transition duration-200 border-b-2 border-transparent hover:border-emerald-500 hover:text-emerald-500 py-1">How It Works</a>
              <a href="#pricing" className="text-gray-600 font-medium transition duration-200 border-b-2 border-transparent hover:border-emerald-500 hover:text-emerald-500 py-1">Pricing</a>
            </nav>

            <div className="flex items-center space-x-4">
              <a href="/login" className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-lg text-white bg-[#0d9488] hover:bg-teal-700 transition duration-300 transform hover:scale-105">
                Start for Free
              </a>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition duration-150">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden px-4 pt-2 pb-4 space-y-2 border-t border-gray-100`}>
          <a href="#features" className="block py-2 px-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50">Features</a>
          <a href="#video-showcase" className="block py-2 px-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50">Showcase</a>
          <a href="#how-it-works" className="block py-2 px-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50">How It Works</a>
          <a href="#pricing" className="block py-2 px-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50">Pricing</a>
          <a href="/login" className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-lg text-white bg-[#0d9488] hover:bg-teal-700 transition duration-300">Start for Free</a>
        </div>
      </header>

      <main>
        <section className="py-20 md:py-28 lg:py-36 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-[#0d9488] uppercase tracking-widest mb-3">The Future of Web Design</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Build Your <span id="typed-target" className="text-[#0d9488]"></span> in <span className="text-[#0d9488]">60 Seconds</span>. Seriously.
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500 mb-10">
              Ammoue uses cutting-edge AI to design, write, and launch stunning multi-page websites including landing pages, login screens, and dashboards. Build in React, Next.js, or HTML instantly.
            </p>
            
            <div className="flex justify-center space-x-4">
              <a href="/login" className="px-8 py-3 text-lg font-bold rounded-xl shadow-xl text-white bg-[#0d9488] hover:bg-teal-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50">
                <span className="flex items-center">
                  Generate My Site Now
                  <Sparkles className="w-5 h-5 ml-2" />
                </span>
              </a>
            </div>

            <div className="mt-12">
              <p className="text-sm font-medium text-gray-500 mb-4">Trusted by over 10,000 creators and small businesses</p>
              <div className="flex justify-center space-x-6 text-gray-400">
                <Layers className="w-6 h-6" />
                <Zap className="w-6 h-6" />
                <Code className="w-6 h-6" />
                <Tablet className="w-6 h-6" />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Stop Coding, Start Launching.</h2>
              <p className="mt-4 text-xl text-gray-500">The core advantages of building with Ammoue AI.</p>
            </div>

            <div className="relative w-full overflow-hidden mask-image-x-fade">
              <div className="animate-scrolling-features pause-on-hover">
                {[
                  { icon: Clock4, title: "1 Free Vercel Deployment", desc: "Every free user gets 1 complimentary Vercel deployment. Push your project from the AI builder to a live URL with just one click." },
                  { icon: Edit3, title: "Live Inline Tweak", desc: "No need to regenerate. Change headers, p1, p2, or any text element directly in the preview box for a perfect match instantly." },
                  { icon: LayersIcon, title: "Multi-Page Building", desc: "Go beyond landing pages. Generate complete website ecosystems including login pages, user dashboards, and more in one go." },
                  { icon: Code2, title: "React, Next.js & HTML", desc: "Export your site in your favorite frontend language. Ammoue provides high-quality code for React, Next.js, and clean HTML/Tailwind." },
                  { icon: SmartphoneIcon, title: "Perfectly Responsive Code", desc: "Every site generated is built with clean, modern code and is guaranteed to look pixel-perfect on mobile, tablet, and desktop devices." }
                ].map((feature, i) => (
                  <div key={i} className="feature-card bg-white p-8 rounded-2xl shadow-xl transition duration-300 border border-gray-100 transform hover:-translate-y-1">
                    <div className="w-12 h-12 bg-[#0d9488]/10 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-[#0d9488]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section id="video-showcase" className="py-16 md:py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Live Demo: Watch Sites Get Built</h2>
              <p className="mt-4 text-xl text-gray-500">See all three demos showcasing different site types built by Ammoue AI.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {[
                { id: "188TwHtdRMY", title: "General AI Site Generation Demo", color: "text-[#0d9488]" },
                { id: "by0hrP_rFwo", title: "Minimalist Portfolio Site", color: "text-gray-700" },
                { id: "ytcmnZYUXao", title: "Small Business Landing Page", color: "text-gray-700" }
              ].map((video, i) => (
                <div key={i} className="rounded-3xl shadow-xl overflow-hidden ring-4 ring-white/70">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=0&mute=1&loop=1&playlist=${video.id}&controls=1&modestbranding=1&rel=0`}
                      title={video.title}
                      frameBorder="0"
                      allow="encrypted-media"
                      allowFullScreen>
                    </iframe>
                  </div>
                  <p className={`text-center p-4 bg-white font-bold ${video.color}`}>{video.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">How Ammoue Works</h2>
              <p className="mt-4 text-xl text-gray-500">Three simple steps to your new online presence.</p>
            </div>

            <div className="relative space-y-12">
              <div className="absolute inset-0 flex justify-center">
                <div className="h-full border-l-4 border-dashed border-teal-200" style={{ marginLeft: '24px' }}></div>
              </div>
              
              {[
                { step: "1", title: "Describe Your Vision", desc: 'Type a few sentences describing your business, project, or desired website style. E.g., "A modern React SaaS platform with a dashboard and login page."' },
                { step: "2", title: "AI Creates the Draft", desc: "Our AI instantly generates a complete multi-page draft: landing pages, dashboards, professional images, and clean React or Next.js code." },
                { step: "3", title: "Tweak and Deploy", desc: "Change headers and text elements directly in the preview box without regenerating. Once ready, use your 1 free Vercel deployment to go live." }
              ].map((item, i) => (
                <div key={i} className="flex items-start relative z-10 bg-white p-6 rounded-xl step-box">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0d9488] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">{item.step}</div>
                  <div className="ml-6 flex-grow pt-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Simple, Transparent Pricing</h2>
              <p className="mt-4 text-xl text-gray-500">Choose the plan that fits your ambition.</p>
            </div>

            <div className="flex justify-center items-center space-x-4 mb-12">
              <span className={`text-sm font-semibold ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
              <button onClick={() => setIsYearly(!isYearly)} className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${isYearly ? 'bg-[#0d9488]' : 'bg-gray-200'}`} role="switch">
                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isYearly ? 'translate-x-5' : 'translate-x-0'}`}></span>
              </button>
              <span className={`text-sm font-semibold ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Yearly <span className="text-[#0d9488] font-bold">(Save 20%)</span></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-gray-200 rounded-3xl p-8 flex flex-col hover:shadow-2xl transition duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Starter</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">$0</span>
                  <span className="text-gray-500 ml-1">/forever</span>
                </div>
                <ul className="space-y-4 mb-4 flex-grow">
                  {['1 Vercel Deployment', 'AI Site Editor (Basic)', 'Vercel subdomain', '5 credit usage daily', 'Edit through preview', 'Next.js, React, HTML, JS', 'Multi-page websites', 'Supabase integration'].map((f, i) => (
                    <li key={i} className="flex items-center text-gray-600 text-sm">
                      <Check className="w-5 h-5 text-[#0d9488] mr-3" /> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setIsModalOpen(true)} className="mb-4 text-[#0d9488] text-sm font-bold flex items-center hover:underline focus:outline-none">
                  <PlusCircle className="w-4 h-4 mr-1" /> More
                </button>
                <a href="/login" className="block text-center py-3 px-6 rounded-xl border-2 border-[#0d9488] text-[#0d9488] font-bold hover:bg-[#0d9488] hover:text-white transition duration-200">Get Started</a>
              </div>

              <div className="relative border-2 border-[#0d9488] rounded-3xl p-8 flex flex-col shadow-xl bg-white transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d9488] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pro</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">${pricing.pro}</span>
                  <span className="text-gray-500 ml-1">{pricing.period}</span>
                </div>
                <p className="text-xs text-gray-600 font-bold mb-6 italic">Everything that Free plan has, and with an additional of those:</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {['5 Vercel Deployments', 'Custom Domains', 'Project remixing', '10 credits usage daily', 'Agent 2 Access', 'Ownership Transfer'].map((f, i) => (
                    <li key={i} className="flex items-center text-gray-900 font-medium text-sm">
                      <Check className="w-5 h-5 text-[#0d9488] mr-3" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="/login" className="block text-center py-3 px-6 rounded-xl bg-[#0d9488] text-white font-bold hover:bg-teal-700 shadow-lg transition duration-200">Go Pro</a>
              </div>

              <div className="relative border border-gray-200 rounded-3xl p-8 flex flex-col transition duration-300 overflow-hidden">
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/40 backdrop-blur-md">
                  <div className="bg-teal-100 text-[#0d9488] px-6 py-2 rounded-full text-lg font-black uppercase tracking-widest border-2 border-teal-300 shadow-lg transform -rotate-3">Coming Soon</div>
                </div>
                <div className="filter blur-[2px] pointer-events-none select-none">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Agency</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">${pricing.agency}</span>
                    <span className="text-gray-500 ml-1">{pricing.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-center text-gray-600 text-sm"><Check className="w-5 h-5 text-[#0d9488] mr-3" /> White-label Export</li>
                    <li className="flex items-center text-gray-600 text-sm"><Check className="w-5 h-5 text-[#0d9488] mr-3" /> Priority AI Generation</li>
                    <li className="flex items-center text-gray-600 text-sm"><Check className="w-5 h-5 text-[#0d9488] mr-3" /> 24/7 Priority Support</li>
                  </ul>
                  <a href="#" className="block text-center py-3 px-6 rounded-xl border-2 border-gray-200 text-gray-600 font-bold">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#0d9488]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-teal-200 mb-10 max-w-2xl mx-auto">
              Stop wasting time on templates and code. Join thousands of users who launch faster with Ammoue. Free plan includes 1 Vercel deployment and multi-page support.
            </p>
            
            <a href="/login" className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-xl shadow-2xl text-[#0d9488] bg-white hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              <span className="flex items-center">
                Claim Your Free Site Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-3 text-[#0d9488]">Ammoue</h4>
              <p className="text-sm text-gray-400">The fastest way to launch your online presence, powered by AI.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-[#0d9488] transition">Features</a></li>
                <li><a href="#video-showcase" className="hover:text-[#0d9488] transition">Showcase</a></li>
                <li><a href="#how-it-works" className="hover:text-[#0d9488] transition">Demo</a></li>
                <li><a href="#pricing" className="hover:text-[#0d9488] transition">Pricing</a></li>
                <li><a href="/plans-and-credits" className="hover:text-[#0d9488] transition">Plans and Credits</a></li>
                <li><a href="#" className="hover:text-[#0d9488] transition">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-[#0d9488] transition">About Us</a></li>
                <li><a href="/contact" className="hover:text-[#0d9488] transition">Contact</a></li>
                <li><a href="/careers" className="hover:text-[#0d9488] transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/terms" className="hover:text-[#0d9488] transition">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-[#0d9488] transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-500">© 2026 Ammoue. All rights reserved. Built with intelligence ⚡</p>
          </div>
        </div>
      </footer>

      <div className={`fixed inset-0 z-[100] ${isModalOpen ? 'block' : 'hidden'} overflow-y-auto`} role="dialog">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div onClick={() => setIsModalOpen(false)} className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 sm:mx-0 sm:h-10 sm:w-10">
                  <Package className="h-6 w-6 text-[#0d9488]" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-bold text-gray-900">Starter Plan: Full Features</h3>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-4 border-b pb-2">Everything included in your free starter account:</p>
                    <ul className="space-y-3">
                      {['1 Vercel Deployment', 'AI Site Editor (Basic)', 'Vercel subdomain', '5 credit usage daily', 'Edit through preview', 'Next.js, React, HTML, JS', 'Multi-page websites', 'Supabase integration'].map((feat, i) => (
                        <li key={i} className="flex items-center text-gray-700 text-sm"><Check className="w-4 h-4 text-[#0d9488] mr-3" /> {feat}</li>
                      ))}
                      <li className="flex items-center text-[#0d9488] font-bold text-sm bg-teal-50 p-2 rounded-lg border border-teal-100"><Sparkles className="w-4 h-4 text-[#0d9488] mr-3" /> Export React/Next.js Code</li>
                      <li className="flex items-center text-[#0d9488] font-bold text-sm bg-teal-50 p-2 rounded-lg border border-teal-100"><Cpu className="w-4 h-4 text-[#0d9488] mr-3" /> Advanced AI Tweak Mode</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button onClick={() => setIsModalOpen(false)} type="button" className="w-full inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-2 bg-[#0d9488] text-base font-medium text-white hover:bg-teal-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm transition duration-200">
                Got it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmmoueLanding;
