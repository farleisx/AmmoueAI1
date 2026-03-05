/* pages/login.js */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Layout, Zap, Paintbrush, TrendingUp, Mail, Github, Eye, EyeOff } from 'lucide-react';

const LoginSignup = () => {
    const [mode, setMode] = useState('login');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({ width: '0%', color: 'bg-gray-300', label: 'Too Short' });
    const [isTermsChecked, setIsTermsChecked] = useState(false);

    const reviewsData = [
        { name: "Sarah K.", rating: 5, text: "Built my entire portfolio in an hour. Incredible speed!", avatar: "https://i.pravatar.cc/150?img=1" },
        { name: "Jake D.", rating: 5, text: "The AI suggestions are spot-on. Traffic doubled!", avatar: "https://i.pravatar.cc/150?img=2" },
        { name: "Aisha M.", rating: 4, text: "Great value. The foundation was absolutely perfect.", avatar: "https://i.pravatar.cc/150?img=3" },
        { name: "Chris T.", rating: 5, text: "Finally, a site builder that understands design!", avatar: "https://i.pravatar.cc/150?img=4" },
        { name: "Maria L.", rating: 5, text: "Flawless interface. Switched and haven't looked back.", avatar: "https://i.pravatar.cc/150?img=5" },
        { name: "David B.", rating: 4, text: "Professional overnight for my small business.", avatar: "https://i.pravatar.cc/150?img=6" },
    ];

    const updatePasswordStrength = (val) => {
        let strength = 0;
        if (val.length >= 6) strength++;
        if (val.match(/[A-Z]/)) strength++;
        if (val.match(/[0-9]/)) strength++;
        if (val.match(/[^a-zA-Z0-9]/)) strength++;

        const colors = ['bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-teal-500'];
        const labels = ['Weak', 'Fair', 'Good', 'Strong'];
        
        setPasswordStrength({
            width: (strength * 25) + '%',
            color: colors[strength - 1] || 'bg-gray-300',
            label: labels[strength - 1] || 'Too Short'
        });
    };

    const ReviewCard = ({ review }) => {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        return (
            <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 min-w-[280px] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-2">
                    <img className="w-8 h-8 rounded-full border border-gray-100" src={review.avatar} alt={review.name} />
                    <div>
                        <p className="text-[11px] font-black text-gray-800">{review.name}</p>
                        <p className="text-[10px] text-yellow-500">{stars}</p>
                    </div>
                </div>
                <p className="text-xs text-gray-500 font-medium italic leading-relaxed">"{review.text}"</p>
            </div>
        );
    };

    return (
        <div className="bg-gray-50 antialiased min-h-screen flex flex-col overflow-x-hidden">
            <Head>
                <title>Ammoue | Login & Sign Up</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/png" href="Gemini_Generated_Image_qry9pfqry9pfqry9.png" />
                <script src="cookies.js" defer></script>
                <script src="analytics-head.js"></script>
            </Head>

            <style dangerouslySetInnerHTML={{ __html: `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
                :root { --ammoue-primary: #0d9488; --ammoue-hover: #0f766e; }
                body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
                .text-ammoue { color: var(--ammoue-primary); }
                .bg-ammoue { background-color: var(--ammoue-primary); }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in { animation: fadeInUp 0.6s ease-out forwards; }
                @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
                .reviews-container { display: flex; width: fit-content; gap: 1.5rem; }
                .scroll-left-anim { animation: scroll-left 50s linear infinite; }
                .scroll-right-anim { animation: scroll-right 50s linear infinite; }
                .review-wrapper { position: relative; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
                .form-transition { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
                .tab-active { position: relative; color: var(--ammoue-primary) !important; background: white !important; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
                .custom-input:focus { border-color: var(--ammoue-primary); box-shadow: 0 0 0 4px rgba(13, 148, 136, 0.1); outline: none; }
                .btn-google:hover { border-color: #4285F4; background-color: rgba(66, 133, 244, 0.05); }
                .btn-github:hover { border-color: #24292e; background-color: rgba(36, 41, 46, 0.05); }
                .strength-bar { height: 4px; transition: all 0.3s ease; border-radius: 2px; }
            `}} />

            <div id="message-box" aria-live="polite" className="fixed top-6 right-6 z-50 p-4 text-white font-semibold rounded-xl shadow-2xl transition-all duration-500 opacity-0 transform translate-y-[-20px] min-w-80"></div>

            <main className="flex flex-1 min-h-screen">
                <div className="hidden lg:flex flex-col flex-1 bg-white relative overflow-hidden p-12 justify-between border-r border-gray-100">
                    <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60"></div>
                    <div className="absolute bottom-[-5%] left-[-5%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

                    <header className="relative z-10">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-ammoue rounded-lg flex items-center justify-center">
                                <Layout className="text-white w-5 h-5" />
                            </div>
                            <h1 className="text-2xl font-black tracking-tight text-gray-900">Ammoue AI</h1>
                        </div>
                        <p className="mt-3 text-gray-500 font-medium">Empowering creators with AI-driven design.</p>
                    </header>
                    
                    <div className="relative z-10 max-w-lg">
                        <h2 className="text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                            <span className="text-ammoue">Build your site</span><br /> in under 5 minutes.
                        </h2>
                        <ul className="mt-8 space-y-4 text-gray-600 font-medium">
                            <li className="flex items-center space-x-3 group">
                                <div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors">
                                    <Zap className="w-5 h-5 text-ammoue" />
                                </div>
                                <span>Instant AI Generation</span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors">
                                    <Paintbrush className="w-5 h-5 text-ammoue" />
                                </div>
                                <span>Stunning Design Templates</span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors">
                                    <TrendingUp className="w-5 h-5 text-ammoue" />
                                </div>
                                <span>SEO Optimized from the start</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="relative z-10">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Trusted by 50,000+ creators</h3>
                        <div className="review-wrapper overflow-hidden mb-6">
                            <div className="reviews-container scroll-left-anim">
                                {reviewsData.concat(reviewsData).map((r, i) => <ReviewCard key={i} review={r} />)}
                            </div>
                        </div>
                        <div className="review-wrapper overflow-hidden">
                            <div className="reviews-container scroll-right-anim">
                                {[...reviewsData].reverse().concat([...reviewsData].reverse()).map((r, i) => <ReviewCard key={i} review={r} />)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-gray-50 lg:bg-transparent">
                    <div className="lg:hidden fixed inset-0 z-0">
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-teal-50 to-transparent"></div>
                    </div>

                    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl lg:shadow-2xl border border-gray-100 p-8 space-y-8 animate-fade-in relative z-10">
                        <div className="text-center lg:hidden">
                            <h2 className="text-3xl font-black text-gray-900">Ammoue AI</h2>
                            <p className="text-gray-500 text-sm mt-1">Start your journey today</p>
                        </div>

                        <div className="flex p-1 bg-gray-100/80 rounded-xl relative">
                            <button onClick={() => setMode('login')} className={`flex-1 py-2.5 px-4 rounded-lg transition-all duration-300 font-bold text-sm focus:outline-none z-10 ${mode === 'login' ? 'tab-active' : 'text-gray-500'}`}>Log In</button>
                            <button onClick={() => setMode('signup')} className={`flex-1 py-2.5 px-4 rounded-lg transition-all duration-300 font-bold text-sm focus:outline-none z-10 ${mode === 'signup' ? 'tab-active' : 'text-gray-500'}`}>Sign Up</button>
                        </div>

                        {mode === 'login' && (
                            <form className="space-y-5 form-transition">
                                <div className="space-y-1">
                                    <label className="block text-sm font-bold text-gray-700">Email Address</label>
                                    <input type="email" required placeholder="name@company.com" className="custom-input mt-1 block w-full border border-gray-200 rounded-xl p-3 text-sm transition-all bg-gray-50/50" />
                                </div>
                                <div className="space-y-1 relative">
                                    <div className="flex justify-between items-center">
                                        <label className="block text-sm font-bold text-gray-700">Password</label>
                                        <button type="button" onClick={() => setMode('reset')} className="text-xs font-bold text-ammoue hover:underline">Forgot?</button>
                                    </div>
                                    <div className="relative group">
                                        <input type={showPassword ? "text" : "password"} required placeholder="••••••••" className="custom-input mt-1 block w-full border border-gray-200 rounded-xl p-3 text-sm transition-all bg-gray-50/50" />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>
                                <button type="submit" className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl shadow-lg shadow-teal-700/20 text-sm font-bold text-white bg-ammoue hover:bg-teal-700 active:scale-[0.98] transition-all duration-200">Welcome Back</button>
                            </form>
                        )}

                        {mode === 'signup' && (
                            <form className="space-y-5 form-transition">
                                <div className="space-y-1">
                                    <label className="block text-sm font-bold text-gray-700">Email Address</label>
                                    <input type="email" required placeholder="name@company.com" className="custom-input mt-1 block w-full border border-gray-200 rounded-xl p-3 text-sm transition-all bg-gray-50/50" />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-bold text-gray-700">Create Password</label>
                                    <div className="relative">
                                        <input onChange={(e) => updatePasswordStrength(e.target.value)} type={showPassword ? "text" : "password"} required minLength="6" placeholder="At least 6 characters" className="custom-input mt-1 block w-full border border-gray-200 rounded-xl p-3 text-sm transition-all bg-gray-50/50" />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    <div className="mt-2 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className={`strength-bar ${passwordStrength.color}`} style={{ width: passwordStrength.width }}></div>
                                    </div>
                                    <p className={`text-[10px] font-bold mt-1 uppercase tracking-wider ${passwordStrength.width !== '0%' ? 'text-gray-600' : 'text-gray-400'}`}>{passwordStrength.label}</p>
                                </div>
                                <div className="flex items-start space-x-3 py-2">
                                    <input type="checkbox" checked={isTermsChecked} onChange={(e) => setIsTermsChecked(e.target.checked)} className="mt-1 h-4 w-4 rounded border-gray-300 text-ammoue focus:ring-ammoue cursor-pointer" />
                                    <label className="text-[11px] text-gray-500 leading-tight cursor-pointer">
                                        I agree to the <a href="/terms" className="font-bold text-gray-600 hover:text-ammoue underline">Terms of Service</a> and <a href="/privacy" className="font-bold text-gray-600 hover:text-ammoue underline">Privacy Policy</a>.
                                    </label>
                                </div>
                                <button type="submit" disabled={!isTermsChecked} className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl shadow-lg shadow-teal-700/20 text-sm font-bold text-white bg-ammoue hover:bg-teal-700 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">Get Started Free</button>
                            </form>
                        )}

                        {mode === 'reset' && (
                            <form className="space-y-5 form-transition">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-bold text-gray-900">Reset Password</h3>
                                    <p className="text-xs text-gray-500">We'll send a recovery link to your email.</p>
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-bold text-gray-700">Email Address</label>
                                    <input type="email" required placeholder="name@company.com" className="custom-input mt-1 block w-full border border-gray-200 rounded-xl p-3 text-sm transition-all bg-gray-50/50" />
                                </div>
                                <button type="submit" className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl shadow-lg shadow-teal-700/20 text-sm font-bold text-white bg-ammoue hover:bg-teal-700 active:scale-[0.98] transition-all duration-200">Send Reset Link</button>
                                <button type="button" onClick={() => setMode('login')} className="w-full text-xs font-bold text-gray-400 hover:text-ammoue">Back to Login</button>
                            </form>
                        )}

                        <div className="mt-8">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                                <div className="relative flex justify-center text-xs font-bold uppercase tracking-widest"><span className="px-4 bg-white text-gray-400">Quick Connect</span></div>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <button className="btn-google w-full inline-flex items-center justify-center py-3 px-4 border border-gray-200 rounded-xl shadow-sm bg-white text-sm font-bold text-gray-600 hover:shadow-md active:scale-95 transition-all">
                                    <Mail className="w-4 h-4 mr-2 text-red-500" /> Google
                                </button>
                                <button className="btn-github w-full inline-flex items-center justify-center py-3 px-4 border border-gray-200 rounded-xl shadow-sm bg-white text-sm font-bold text-gray-600 hover:shadow-md active:scale-95 transition-all">
                                    <Github className="w-4 h-4 mr-2 text-gray-900" /> GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LoginSignup;
