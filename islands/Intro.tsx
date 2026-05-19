import { useState } from "preact/hooks";
import { Bottom } from "../components/Icons.tsx";

export default function Intro(props: { onNext(): void; onBottom(): void }) {
  const [toggle, setToggle] = useState(false); // Default to Light Mode!
  const [hasToggled, setHasToggled] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");

  const isDark = toggle;
  const x = isDark ? "end" : "start";
  const col = isDark ? "stabilo" : "default";

  // Dynamic premium Apple iOS style tokens
  const bgClass = isDark
    ? "bg-black text-white"
    : "bg-[#F2F2F7] text-[#1C1C1E]";
  const subtextClass = isDark ? "text-[#8E8E93]" : "text-[#636366]";
  const cardClass = isDark
    ? "bg-white/5 border border-white/10"
    : "bg-white/70 border border-black/5 shadow-md backdrop-blur-md";
  const pokemonCardClass = isDark
    ? "bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
    : "bg-white/80 border border-black/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)]";
  const inputClass = isDark
    ? "bg-white/5 border border-white/10 text-white placeholder-white/35"
    : "bg-black/5 border border-black/10 text-black placeholder-black/40";
  const bannerClass = isDark
    ? "bg-blue-600/10 border-blue-500/20"
    : "bg-blue-600/5 border border-blue-500/10";
  const bannerText = isDark ? "text-blue-300" : "text-blue-600";
  const textAccentClass = isDark
    ? "bg-clip-text text-blue-400"
    : "text-blue-600";
  const secondaryBtnClass = isDark
    ? "bg-white/10 hover:bg-white/20 border-white/10 text-white"
    : "bg-black/5 hover:bg-black/10 border-black/5 text-[#1C1C1E]";

  return (
    <div
      class={`fixed ${bgClass} shadow-inner inset-0 flex flex-col justify-between overflow-y-auto p-6 md:p-12 transition-all duration-300`}
    >
      {/* Top Announcement Banner */}
      <div
        class={`w-full ${bannerClass} border py-3 px-6 rounded-2xl text-center flex flex-col sm:flex-row items-center justify-between gap-4 z-30 backdrop-blur-md relative mb-6 max-w-7xl mx-auto`}
      >
        <div class="flex items-center gap-2 text-left">
          <span class="text-lg">🚀</span>
          <div>
            <h4 class={`font-black text-xs md:text-sm ${bannerText}`}>
              PRIONATION.io | AI Product Engineering
            </h4>
            <p class={`text-[10px] md:text-xs ${subtextClass} leading-snug`}>
              The latest version is launched. Discover our new AI-forward design
              & tools.
            </p>
          </div>
        </div>
        <a
          href="https://www.prionation.io"
          target="_blank"
          class="px-5 py-2.5 text-blue-600 font-bold text-xs uppercase tracking-widest rounded-xl transition-all hover:scale-105 active:scale-95 duration-150 text-center w-full sm:w-auto"
        >
          v3.prionation.io
        </a>
      </div>

      {/* Top Navigation */}
      <header class="flex justify-between items-center w-full max-w-7xl mx-auto z-20 relative">
        <div class="flex items-center gap-3">
          <img
            draggable={false}
            class="w-10 h-10 hover:animate-spin"
            src="/logo.png"
            alt="logo"
          />
          <h3 class="font-extrabold text-lg tracking-wider">PRAYOGA</h3>
        </div>

        {/* Theme Toggle */}
        <div class="flex items-center gap-3 relative">
          <span class="text-xs font-bold tracking-widest uppercase opacity-60">
            Theme
          </span>
          <button
            onClick={() => {
              setToggle(!toggle);
              setHasToggled(true);
            }}
            class={`focus:outline-none flex z-10 shadow-inner justify-${x} items-center w-[51px] h-[31px] rounded-full bg-${col} transition-all duration-300`}
          >
            <div class="w-[27px] h-[27px] mx-[2px] bg-white rounded-full shadow-lg" />
          </button>

          {/* Guided Cue pointing to the Toggle Switch */}
          {!hasToggled && (
            <div class="absolute right-[60px] top-[1px] flex items-center bg-blue-600 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded-full animate-bounce shadow-md pointer-events-none whitespace-nowrap z-30 border border-blue-500/20">
              <span>Try Dark Mode 👉</span>
            </div>
          )}
        </div>
      </header>

      {/* Main Hero & Content Split */}
      <main class="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-7xl mx-auto z-10 py-8">
        {/* Left Side: Services & Intro */}
        <div class="flex-1 flex flex-col gap-6 text-left items-start max-w-xl">
          <span
            class={`px-3 py-1 text-xs font-black uppercase tracking-widest ${
              isDark
                ? "bg-blue-600/10 text-blue-400 border-blue-500/20"
                : "bg-blue-600/10 text-blue-600 border-blue-500/10"
            } rounded-full border animate-pulse`}
          >
            Web Design & Development Studio
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none">
            Prayoga's <br />
            <span class={textAccentClass}>Creative Lab</span>
          </h1>
          <p class={`text-sm md:text-base ${subtextClass}`}>
            Specializing in executing premium web design & code to create
            high-growth digital experiences. From high-fidelity frontend
            engineering to creative experimental systems.
          </p>

          {/* Services Brief */}
          <div class="grid grid-cols-2 gap-4 w-full mt-2">
            <div class={`p-4 ${cardClass}`}>
              <span class="text-xl">🪄</span>
              <h4 class="font-bold text-sm mt-1 mb-1">Frontend Engineering</h4>
              <p class={`text-xs ${subtextClass} leading-snug`}>
                React, Deno Fresh, Tailwind and ultra-fast loading systems.
              </p>
            </div>
            <div class={`p-4 ${cardClass}`}>
              <span class="text-xl">🎨</span>
              <h4 class="font-bold text-sm mt-1 mb-1">UI/UX Design Scale</h4>
              <p class={`text-xs ${subtextClass} leading-snug`}>
                Figma layouts, premium branding, and high-fidelity assets.
              </p>
            </div>
          </div>

          <button
            onClick={props.onBottom}
            class={`mt-4 px-6 py-3 flex items-center gap-2 ${
              isDark
                ? "bg-white/10 hover:bg-white/20 border-white/10"
                : "bg-black/5 hover:bg-black/10 border-black/5"
            } border text-sm font-bold tracking-wider rounded-xl transition-all hover:scale-105 active:scale-95 duration-150`}
          >
            Explore My Journey
            <Bottom class="fill-current w-4 h-4" />
          </button>
        </div>

        {/* Right Side: Experimental Lab (Pokémon Generator Card) */}
        <div class="flex-1 flex flex-col items-center justify-center w-full max-w-md">
          <div
            class={`w-full p-8 flex flex-col items-center backdrop-blur-md ${pokemonCardClass} border rounded-3xl relative`}
          >
            {/* Glowing Background Glow behind the card */}
            <div
              class={`absolute w-[240px] h-[240px] ${
                isDark ? "bg-blue-600/20" : "bg-blue-600/10"
              } rounded-full blur-[60px] pointer-events-none -z-10`}
            />

            <span class="text-2xl mb-2">☄️</span>
            <h3
              class={`font-black text-xl md:text-2xl tracking-tight mb-2 text-center ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Pokémon Identity Lab
            </h3>
            <p class={`text-xs text-center ${subtextClass} max-w-xs mb-6`}>
              Enter your unique handle below to generate your deterministic,
              identity-locked Pokémon companion.
            </p>

            <div class="flex flex-col gap-3 w-full">
              <input
                type="text"
                placeholder="Enter your nickname..."
                value={usernameInput}
                onInput={(e) => setUsernameInput(e.currentTarget.value)}
                class={`w-full border rounded-2xl px-5 py-4 text-sm ${inputClass} transition-all text-center focus:outline-none focus:border-blue-500`}
              />

              <button
                onClick={() => {
                  if (usernameInput.trim()) {
                    location.href = `/${
                      encodeURIComponent(usernameInput.trim())
                    }`;
                  } else {
                    alert("Please enter a username!");
                  }
                }}
                class="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wider rounded-2xl shadow-md transform active:scale-95 transition-all duration-200 focus:outline-none text-center"
              >
                Claim Your Pokémon
              </button>

              <div class="flex gap-2 w-full mt-2">
                <button
                  onClick={() => location.href = "/world"}
                  class={`flex-1 py-3 px-4 flex justify-center items-center font-bold text-xs tracking-wider rounded-xl border focus:outline-none transition-all duration-150 active:scale-95 ${secondaryBtnClass}`}
                >
                  Pokémons World 🪐
                </button>
                <button
                  onClick={props.onNext}
                  class={`flex-1 py-3 px-4 flex justify-center items-center font-bold text-xs tracking-wider rounded-xl border focus:outline-none transition-all duration-150 active:scale-95 ${
                    isDark
                      ? "bg-blue-600/10 hover:bg-blue-600/20 border-blue-500/20 text-blue-400"
                      : "bg-blue-600/10 hover:bg-blue-600/20 border-blue-500/20 text-blue-600"
                  }`}
                >
                  Customize Project ✨
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Bar / Desktop Layout Spacer */}
      <footer
        class={`w-full max-w-7xl mx-auto flex justify-between items-center z-20 mt-6 text-xs ${subtextClass}`}
      >
        <p>© 2022 Darwin Prayoga. All rights reserved. (Updated. 05/19/2026)</p>
        <div class="flex gap-4">
          <a
            href="https://github.com/darwinprayoga"
            target="_blank"
            class={`hover:underline ${subtextClass}`}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/darwinprayoga"
            target="_blank"
            class={`hover:underline ${subtextClass}`}
          >
            LinkedIn
          </a>
        </div>
      </footer>

      {/* Side Floating Avatar */}
      <img
        draggable={false}
        class="fixed bottom-0 right-0 w-64 md:w-80 pointer-events-none opacity-20 lg:opacity-60 -z-10 object-contain max-h-[45%]"
        src="/avatar.png"
        alt="Avatar background"
      />
    </div>
  );
}
