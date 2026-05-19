import { useState } from "preact/hooks";
import FoodMenu from "./FoodMenu.tsx";
import Fashion from "./Fashion.tsx";

export default function Pricing(props: { onBack?(): void }) {
    // Theme toggle locally mapped to support the same premium Apple Light & Dark themes
    const [isDark, setIsDark] = useState(false);

    // Requirement options state
    const [integrity, setIntegrity] = useState(1); // 1 = Performance, 2 = Experience
    const [hadDomain, setHadDomain] = useState(true);
    const [domain, setDomain] = useState("");
    const [cusDesign, setCusDesign] = useState(1); // 1 = Already Concept, 2 = Request Design
    const [refDesign, setRefDesign] = useState("");
    const [numPage, setNumPage] = useState(1); // 1 = 3-5, 2 = 6-10, 3 = 11-20
    const [dbCollection, setDbCollection] = useState(1); // 1 = null, 2 = 1-3, 3 = 4-6
    const [apis, setApis] = useState(1); // 1 = null, 2 = 10, 3 = 20

    // Extra Packs
    const [gSeo, setGSeo] = useState(false);
    const [gAuth, setGAuth] = useState(false);
    const [gAnalytics, setGAnalytics] = useState(false);
    const [gPwa, setGPwa] = useState(false);

    // Concept Showcase view overlays
    const [conceptOverlay, setConceptOverlay] = useState<number | null>(null); // 1 = FoodMenu, 2 = Fashion

    // Fallback Submission Copy Modals
    const [showCopyModal, setShowCopyModal] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedBody, setCopiedBody] = useState(false);

    // Dynamic Live Estimator Calculations
    let estimatedBudget = 1200;
    let estimatedWeeks = 2;

    if (integrity === 2) {
        estimatedBudget += 500;
        estimatedWeeks += 1;
    }

    if (!hadDomain && domain.trim()) {
        estimatedBudget += 50;
    }

    if (cusDesign === 1) {
        estimatedBudget -= 200; // Discount for having their own concept/Figma file!
    } else if (cusDesign === 2) {
        estimatedBudget += 400;
        estimatedWeeks += 1;
    }

    if (numPage === 1) {
        estimatedBudget += 300;
        estimatedWeeks += 1;
    } else if (numPage === 2) {
        estimatedBudget += 600;
        estimatedWeeks += 2;
    } else if (numPage === 3) {
        estimatedBudget += 1200;
        estimatedWeeks += 3;
    }

    if (dbCollection === 2) {
        estimatedBudget += 400;
        estimatedWeeks += 1;
    } else if (dbCollection === 3) {
        estimatedBudget += 800;
        estimatedWeeks += 2;
    }

    if (apis === 2) {
        estimatedBudget += 300;
        estimatedWeeks += 1;
    } else if (apis === 3) {
        estimatedBudget += 600;
        estimatedWeeks += 2;
    }

    if (gSeo) estimatedBudget += 150;
    if (gAuth) {
        estimatedBudget += 300;
        estimatedWeeks += 0.5;
    }
    if (gAnalytics) estimatedBudget += 100;
    if (gPwa) estimatedBudget += 250;

    // Formatted email body
    const emailBody = `
Hi Darwin,

Here is my customized web project requirement proposal:

--------------------------------------------------
INTEGRITY TIER: ${integrity === 1 ? "⚡ Performance Core (Fast edge-rendered Preact/Fresh)" : "✨ High-Fidelity Experience (Next.js/Framer Motion animations)"}

DOMAIN PREFERENCE:
- Status: ${hadDomain ? "Already owned" : "Needs registration"}
- Target Domain: ${domain || "Not specified"}

DESIGN PREFERENCE:
- Custom Design: ${cusDesign === 1 ? "Already Concepted" : "Needs Design Assistance"}
- Reference Link: ${refDesign || "None provided"}

SCOPE:
- Number of Pages: ${numPage === 1 ? "3 - 5 Pages" : numPage === 2 ? "6 - 10 Pages" : "11 - 20 Pages"}
- Database Collections: ${dbCollection === 1 ? "None (Static)" : dbCollection === 2 ? "1 - 3 Collections" : "4 - 6 Collections"}
- Custom APIs / Integrations: ${apis === 1 ? "None" : apis === 2 ? "Up to 10 integrations" : "Up to 20 integrations"}

EXTRA ADD-ONS:
- Google Console & SEO: ${gSeo ? "Included" : "None"}
- Advanced User Authentication: ${gAuth ? "Included" : "None"}
- Google Analytics Integration: ${gAnalytics ? "Included" : "None"}
- Progressive Web App (PWA): ${gPwa ? "Included" : "None"}

--------------------------------------------------
ESTIMATED INVESTMENT: $${estimatedBudget} USD
ESTIMATED TIMELINE: ~${estimatedWeeks} Weeks
Complexity Classification: ${estimatedBudget > 2500 ? "Enterprise Elite" : estimatedBudget > 1800 ? "Visual Scale" : "Sleek Core"}
--------------------------------------------------

Looking forward to launching this!
    `;

    function triggerEmailSubmit() {
        // Direct modal display trigger to avoid browser execution freezing or navigation blocks!
        setShowCopyModal(true);
    }


    function copyToClipboard(text: string, type: "email" | "body") {
        navigator.clipboard.writeText(text);
        if (type === "email") {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } else {
            setCopiedBody(true);
            setTimeout(() => setCopiedBody(false), 2000);
        }
    }

    // Dynamic Apple iOS style tokens for Light & Dark theme support
    const bgClass = isDark ? "bg-black text-white" : "bg-[#F2F2F7] text-[#1C1C1E]";
    const cardClass = isDark ? "bg-white/5 border border-white/10" : "bg-white/70 border border-black/5 shadow-md backdrop-blur-md";
    const subtextClass = isDark ? "text-gray-400" : "text-gray-500";
    const labelClass = isDark ? "text-blue-400" : "text-blue-600";
    const inputClass = isDark 
        ? "bg-white/5 border border-white/10 text-white placeholder-white/30" 
        : "bg-black/5 border border-black/10 text-black placeholder-black/40";
    const secondaryBtnClass = isDark 
        ? "bg-white/10 hover:bg-white/20 border border-white/10 text-white" 
        : "bg-black/5 hover:bg-black/10 border border-black/5 text-[#1C1C1E]";

    return (
        <div class={`fixed inset-0 overflow-y-auto pb-48 transition-colors duration-300 ${bgClass} p-4 md:p-8 flex flex-col items-center justify-start`}>
            
            {/* Ambient Background Glowing Orbs */}
            <div class="absolute top-10 left-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
            <div class="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Apple style sub-navigation */}
            <nav class="flex justify-between items-center w-full max-w-2xl mb-8 z-10 relative">
                <button 
                    onClick={props.onBack}
                    class="px-4 py-2 border border-black/5 bg-black/5 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 rounded-xl transition-all font-bold text-xs flex items-center gap-1.5"
                >
                    👈 Back to Lab
                </button>
                <div class="flex items-center gap-3">
                    <span class="text-xs font-bold uppercase tracking-wider text-gray-500">Theme</span>
                    <button 
                        onClick={() => setIsDark(!isDark)}
                        class="w-12 h-6 rounded-full bg-blue-600/20 border border-blue-500/20 relative p-0.5 transition-all flex items-center"
                    >
                        <div class={`w-4.5 h-4.5 rounded-full bg-blue-600 shadow-md transform transition-transform duration-200 ${isDark ? "translate-x-6" : "translate-x-0.5"}`} />
                    </button>
                </div>
            </nav>

            <section class="w-full max-w-2xl text-center mb-8 z-10 relative">
                <span class={`px-3 py-1 text-[10px] font-black uppercase tracking-widest ${isDark ? "bg-blue-600/20 text-blue-400" : "bg-blue-600/10 text-blue-600"} rounded-full border border-blue-500/20`}>
                    Interactive Project Builder
                </span>
                <h1 class="font-black text-3xl md:text-5xl mt-4 mb-2 tracking-tight">
                    Customize Project
                </h1>
                <p class={`text-sm ${subtextClass} max-w-md mx-auto leading-relaxed`}>
                    Refine your project requirements below to see delivery estimations, dynamic investments, and launch options.
                </p>
            </section>

            {/* Main Form Fields */}
            <div class="w-full max-w-2xl flex flex-col gap-6 z-10 relative pb-24">
                
                {/* 1. Stack integrity Tier */}
                <div class={`p-6 ${cardClass} rounded-3xl flex flex-col gap-4`}>
                    <h3 class="font-extrabold text-base tracking-tight flex items-center gap-2">
                        <span>1. Select Architecture Stack</span>
                        <span class={`text-[10px] font-bold px-2 py-0.5 rounded-full ${integrity === 1 ? "bg-emerald-500/10 text-emerald-500" : "bg-blue-500/10 text-blue-500"}`}>
                            {integrity === 1 ? "Standard Core" : "Premium Tier"}
                        </span>
                    </h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div 
                            onClick={() => setIntegrity(1)}
                            class={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${integrity === 1 ? "border-blue-500 bg-blue-500/5 shadow-inner" : "border-black/5 bg-black/5 dark:border-white/5 dark:bg-white/5"}`}
                        >
                            <div>
                                <h4 class="font-black text-sm mb-1">⚡ Performance Core</h4>
                                <p class={`text-[11px] ${subtextClass}`}>
                                    Edge-rendered Preact & Deno Fresh. Perfect for maximum SEO ranking, hyper-fast page speed, and clean static landing pages.
                                </p>
                            </div>
                        </div>

                        <div 
                            onClick={() => setIntegrity(2)}
                            class={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${integrity === 2 ? "border-blue-500 bg-blue-500/5 shadow-inner" : "border-black/5 bg-black/5 dark:border-white/5 dark:bg-white/5"}`}
                        >
                            <div>
                                <h4 class="font-black text-sm mb-1">✨ High-Fidelity Experience</h4>
                                <p class={`text-[11px] ${subtextClass}`}>
                                    Dynamic Next.js platforms with Framer Motion, animations, rich design systems, and visual interactive client dashboards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Performance & PageSpeed Benchmarks Widget */}
                <div class={`p-6 ${cardClass} rounded-3xl flex flex-col gap-4 relative overflow-hidden`}>
                    <div class="absolute top-0 right-0 w-[120px] h-[120px] bg-emerald-500/10 rounded-full blur-[40px] pointer-events-none" />
                    <h3 class="font-extrabold text-base tracking-tight flex items-center gap-2 text-emerald-400">
                        <span>⚡ Real-Time Edge Engine Analytics</span>
                        <span class="animate-pulse w-2 h-2 rounded-full bg-emerald-500" />
                    </h3>
                    <p class={`text-[11px] ${subtextClass} leading-relaxed`}>
                        This website utilizes Deno Fresh edge rendering to deliver flawless, instantaneous load times with zero compilation lag. Check live core web vitals and run third-party audits immediately:
                    </p>
                    
                    <div class="grid grid-cols-3 gap-3 bg-black/10 dark:bg-white/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                        <div class="flex flex-col items-center justify-center text-center">
                            <span class="text-[9px] uppercase font-bold tracking-widest text-gray-400">PageSpeed Score</span>
                            <div class="flex items-center justify-center w-12 h-12 rounded-full border-2 border-emerald-500 text-emerald-400 font-black text-sm mt-1 bg-emerald-500/10">
                                100
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center text-center border-x border-black/5 dark:border-white/5 px-2">
                            <span class="text-[9px] uppercase font-bold tracking-widest text-gray-400">First Paint</span>
                            <span class="text-lg font-black text-emerald-400 mt-2">0.1s</span>
                            <span class="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">EXCELLENT</span>
                        </div>
                        <div class="flex flex-col items-center justify-center text-center">
                            <span class="text-[9px] uppercase font-bold tracking-widest text-gray-400">Interactive</span>
                            <span class="text-lg font-black text-emerald-400 mt-2">0.1s</span>
                            <span class="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">NO OVERHEAD</span>
                        </div>
                    </div>

                    <a 
                        href="https://pagespeed.web.dev/analysis?url=https://v1.prionation.io" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="w-full py-3 px-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 font-bold text-xs rounded-xl transition-all text-center flex items-center justify-center gap-2"
                    >
                        🚀 Run Benchmark on Google PageSpeed Insights →
                    </a>
                </div>

                {/* 2. Custom Domain */}
                <div class={`p-6 ${cardClass} rounded-3xl flex flex-col gap-4`}>
                    <h3 class="font-extrabold text-base tracking-tight">2. Custom Domain Configuration</h3>
                    <div class="flex gap-2 w-full">
                        <button 
                            onClick={() => setHadDomain(true)}
                            class={`flex-1 py-3 px-4 text-xs font-bold rounded-xl border transition-all ${hadDomain ? "bg-blue-600 text-white border-blue-500" : secondaryBtnClass}`}
                        >
                            I Already Have Domain
                        </button>
                        <button 
                            onClick={() => setHadDomain(false)}
                            class={`flex-1 py-3 px-4 text-xs font-bold rounded-xl border transition-all ${!hadDomain ? "bg-blue-600 text-white border-blue-500" : secondaryBtnClass}`}
                        >
                            Request Registration
                        </button>
                    </div>
                    <input 
                        type="text" 
                        placeholder={hadDomain ? "Enter your domain (e.g. example.com)..." : "Target domain name you wish to secure..."}
                        value={domain}
                        onInput={(e) => setDomain(e.currentTarget.value)}
                        class={`w-full px-4 py-3 rounded-xl text-sm ${inputClass} focus:outline-none focus:border-blue-500 transition-all`}
                    />
                </div>

                {/* 3. Scope Countables */}
                <div class={`p-6 ${cardClass} rounded-3xl flex flex-col gap-5`}>
                    <h3 class="font-extrabold text-base tracking-tight">3. Define Scope & Deliverables</h3>

                    {/* Design Option */}
                    <div class="flex flex-col gap-2">
                        <label class="text-xs font-bold uppercase tracking-wider text-gray-500">Design Concept Style</label>
                        <div class="flex gap-2">
                            <button 
                                onClick={() => setCusDesign(1)}
                                class={`flex-1 py-2.5 px-4 text-xs font-bold rounded-xl border transition-all ${cusDesign === 1 ? "bg-blue-600 text-white border-blue-500" : secondaryBtnClass}`}
                            >
                                Own Figma / Concept (-$200)
                            </button>
                            <button 
                                onClick={() => setCusDesign(2)}
                                class={`flex-1 py-2.5 px-4 text-xs font-bold rounded-xl border transition-all ${cusDesign === 2 ? "bg-blue-600 text-white border-blue-500" : secondaryBtnClass}`}
                            >
                                Design Assistance Requested
                            </button>
                        </div>
                        {cusDesign === 1 && (
                            <input 
                                type="url" 
                                placeholder="Figma or reference concept URL..."
                                value={refDesign}
                                onInput={(e) => setRefDesign(e.currentTarget.value)}
                                class={`w-full px-4 py-2.5 rounded-xl text-xs mt-2 ${inputClass} focus:outline-none focus:border-blue-500 transition-all`}
                            />
                        )}
                    </div>

                    {/* Page count */}
                    <div class="flex flex-col gap-2">
                        <label class="text-xs font-bold uppercase tracking-wider text-gray-500">Number of Pages</label>
                        <div class="grid grid-cols-3 gap-2">
                            {[
                                { val: 1, label: "3 - 5 Pages" },
                                { val: 2, label: "6 - 10 Pages" },
                                { val: 3, label: "11 - 20 Pages" }
                            ].map(item => (
                                <button 
                                    key={item.val}
                                    onClick={() => setNumPage(item.val)}
                                    class={`py-2.5 px-2 text-xs font-bold rounded-xl border transition-all ${numPage === item.val ? "bg-blue-600 text-white border-blue-500" : secondaryBtnClass}`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Database Collections */}
                    <div class="flex flex-col gap-2">
                        <label class="text-xs font-bold uppercase tracking-wider text-gray-500">Database Collections Scope</label>
                        <div class="grid grid-cols-3 gap-2">
                            {[
                                { val: 1, label: "None (Static)" },
                                { val: 2, label: "1 - 3 Collections" },
                                { val: 3, label: "4 - 6 Collections" }
                            ].map(item => (
                                <button 
                                    key={item.val}
                                    onClick={() => setDbCollection(item.val)}
                                    class={`py-2.5 px-2 text-xs font-bold rounded-xl border transition-all ${dbCollection === item.val ? "bg-blue-600 text-white border-blue-500" : secondaryBtnClass}`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* APIs */}
                    <div class="flex flex-col gap-2">
                        <label class="text-xs font-bold uppercase tracking-wider text-gray-500">Dependencies / Custom APIs</label>
                        <div class="grid grid-cols-3 gap-2">
                            {[
                                { val: 1, label: "None" },
                                { val: 2, label: "Up to 10 Integrations" },
                                { val: 3, label: "Up to 20 Integrations" }
                            ].map(item => (
                                <button 
                                    key={item.val}
                                    onClick={() => setApis(item.val)}
                                    class={`py-2.5 px-2 text-xs font-bold rounded-xl border transition-all ${apis === item.val ? "bg-blue-600 text-white border-blue-500" : secondaryBtnClass}`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. Extra Packs */}
                <div class={`p-6 ${cardClass} rounded-3xl flex flex-col gap-4`}>
                    <h3 class="font-extrabold text-base tracking-tight">4. Advanced Add-on Packages</h3>
                    <div class="grid grid-cols-2 gap-3">
                        <button 
                            onClick={() => setGSeo(!gSeo)}
                            class={`py-3 px-3 rounded-xl border transition-all text-xs font-bold flex items-center justify-between ${gSeo ? "border-blue-500 bg-blue-500/10 text-blue-400" : secondaryBtnClass}`}
                        >
                            <span>🔍 SEO & Console</span>
                            {gSeo && <span>✓</span>}
                        </button>

                        <button 
                            onClick={() => setGAuth(!gAuth)}
                            class={`py-3 px-3 rounded-xl border transition-all text-xs font-bold flex items-center justify-between ${gAuth ? "border-blue-500 bg-blue-500/10 text-blue-400" : secondaryBtnClass}`}
                        >
                            <span>🔐 User Auth</span>
                            {gAuth && <span>✓</span>}
                        </button>

                        <button 
                            onClick={() => setGAnalytics(!gAnalytics)}
                            class={`py-3 px-3 rounded-xl border transition-all text-xs font-bold flex items-center justify-between ${gAnalytics ? "border-blue-500 bg-blue-500/10 text-blue-400" : secondaryBtnClass}`}
                        >
                            <span>📈 Google Analytics</span>
                            {gAnalytics && <span>✓</span>}
                        </button>

                        <button 
                            onClick={() => setGPwa(!gPwa)}
                            class={`py-3 px-3 rounded-xl border transition-all text-xs font-bold flex items-center justify-between ${gPwa ? "border-blue-500 bg-blue-500/10 text-blue-400" : secondaryBtnClass}`}
                        >
                            <span>📱 PWA App Packaging</span>
                            {gPwa && <span>✓</span>}
                        </button>
                    </div>
                </div>

                {/* Interactive Tech Stack Demos Link */}
                <div class={`p-5 bg-blue-600/10 border border-blue-500/20 rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left`}>
                    <div>
                        <h4 class="font-bold text-sm text-blue-400">💡 Explore Interactive Stack Demos</h4>
                        <p class={`text-[11px] ${subtextClass} mt-0.5`}>
                            Check out live sandbox apps demonstrating our Visual and Experience catalog capabilities in real-time.
                        </p>
                    </div>
                    <div class="flex gap-2">
                        <button 
                            onClick={() => setConceptOverlay(1)}
                            class="px-4 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-sm hover:bg-blue-700 transition-all"
                        >
                            FastMeal Demo
                        </button>
                        <button 
                            onClick={() => setConceptOverlay(2)}
                            class="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold text-xs rounded-xl transition-all"
                        >
                            Fashion Catalog
                        </button>
                    </div>
                </div>

            </div>

            {/* Dynamic Apple-Style Floating Estimate panel */}
            <div class="fixed bottom-4 left-4 right-4 z-40 flex justify-center pointer-events-none">
                <div class="w-full max-w-2xl bg-[#1C1C1E]/95 border border-white/15 rounded-3xl shadow-2xl p-4 md:p-6 backdrop-blur-lg flex flex-col md:flex-row justify-between items-center gap-4 pointer-events-auto animate-fade-in-up">
                    <div class="grid grid-cols-3 divide-x divide-white/10 w-full md:w-auto text-center md:text-left">
                        <div class="pr-2 md:pr-6 flex flex-col items-center md:items-start justify-center">
                            <span class="text-[9px] uppercase font-bold tracking-widest text-gray-400">Estimated Budget</span>
                            <span class="text-lg md:text-2xl font-black text-blue-400 mt-0.5">
                                ${estimatedBudget.toLocaleString()}
                            </span>
                        </div>
                        <div class="px-2 md:px-6 flex flex-col items-center md:items-start justify-center">
                            <span class="text-[9px] uppercase font-bold tracking-widest text-gray-400">Target Delivery</span>
                            <span class="text-sm md:text-lg font-extrabold text-white mt-1">
                                ~{estimatedWeeks} Weeks
                            </span>
                        </div>
                        <div class="pl-2 md:pl-6 flex flex-col items-center md:items-start justify-center">
                            <span class="text-[9px] uppercase font-bold tracking-widest text-gray-400">Complexity</span>
                            <span class={`text-xs font-bold px-2 py-0.5 rounded-full mt-1.5 ${estimatedBudget > 2500 ? "bg-purple-500/20 text-purple-400" : estimatedBudget > 1800 ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                                {estimatedBudget > 2500 ? "Enterprise Elite" : estimatedBudget > 1800 ? "Visual Scale" : "Sleek Core"}
                            </span>
                        </div>
                    </div>
                    
                    <button 
                        onClick={triggerEmailSubmit}
                        class="w-full md:w-auto py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wider rounded-2xl shadow-md transition-all active:scale-95 text-xs text-center flex items-center justify-center gap-2"
                    >
                        🚀 Submit Project Requirements
                    </button>
                </div>
            </div>

            {/* Overlays for Sandbox Demos */}
            {conceptOverlay === 1 && (
                <div class="fixed inset-0 z-50 overflow-y-auto">
                    <FoodMenu onBack={() => setConceptOverlay(null)} />
                </div>
            )}
            {conceptOverlay === 2 && (
                <div class="fixed inset-0 z-50 overflow-y-auto">
                    <Fashion onBack={() => setConceptOverlay(null)} />
                </div>
            )}

            {/* Fallback Email Copy Glass Modal */}
            {showCopyModal && (
                <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
                    <div class="bg-[#1C1C1E] border border-white/10 w-full max-w-lg rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative">
                        <button 
                            onClick={() => setShowCopyModal(false)}
                            class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-lg p-2 font-bold"
                        >
                            ✕
                        </button>

                        <div class="text-center">
                            <span class="text-3xl">✉️</span>
                            <h3 class="font-black text-xl text-white mt-2">Almost Done!</h3>
                            <p class="text-xs text-gray-400 mt-1 max-w-sm mx-auto leading-relaxed">
                                If your default browser email client didn't launch automatically, simply copy the details below to submit your proposal manually:
                            </p>
                        </div>

                        {/* Step 1: Copy Address */}
                        <div class="bg-white/5 border border-white/5 rounded-2xl p-4 flex justify-between items-center">
                            <div class="flex flex-col">
                                <span class="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Recipient Email</span>
                                <span class="text-sm font-bold text-blue-400 mt-0.5">consult@prionation.io</span>
                            </div>
                            <button 
                                onClick={() => copyToClipboard("consult@prionation.io", "email")}
                                class={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${copiedEmail ? "bg-emerald-600 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                            >
                                {copiedEmail ? "Copied! ✓" : "Copy Email"}
                            </button>
                        </div>

                        {/* Step 2: Copy Content */}
                        <div class="flex flex-col gap-2">
                            <span class="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Generated Requirement Specs</span>
                            <div class="bg-black/40 border border-white/5 rounded-2xl p-4 max-h-[160px] overflow-y-auto font-mono text-[10px] text-gray-300 whitespace-pre-wrap leading-relaxed">
                                {emailBody}
                            </div>
                        </div>

                        <div class="flex gap-2 mt-2">
                            <button 
                                onClick={() => copyToClipboard(emailBody, "body")}
                                class={`flex-1 py-3.5 px-4 rounded-xl text-xs font-bold transition-all ${copiedBody ? "bg-emerald-600 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                            >
                                {copiedBody ? "Specs Copied! ✓" : "📋 Copy Proposal Specs"}
                            </button>
                            <button 
                                onClick={() => setShowCopyModal(false)}
                                class="flex-1 py-3.5 px-4 bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 rounded-xl text-xs font-bold transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}