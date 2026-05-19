import { useEffect, useState } from "preact/hooks";
import { JSX } from "preact";
import {
  Branch,
  Download,
  Github,
  Linkedin,
  Right,
  Star,
  Twitter,
} from "../components/Icons.tsx";
import { useOs } from "../components/Sync.tsx";

export default function Journey(props: { onNext?(): void; onBack?(): void }) {
  const [contact, setContact] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const hide = contact ? "flex" : "hidden";

  useEffect(() => {
    const os = useOs();
    if (os == "windows") {
      setContact(true);
    } else if (os == "macos") {
      setContact(true);
    }
  }, [setContact]);

  return (
    <div class="fixed inset-0 overflow-y-auto bg-[#F2F2F7] text-[#1C1C1E]">
      <section class="fixed bottom-0 left-0 m-4 flex flex-col items-center z-20">
        <button
          onClick={() => open("https://www.figma.com/@darwinprayoga")}
          class={`${hide} hover:scale-110 focus:outline-none mb-5`}
        >
          <img src="/figma.svg" class="w-5" />
        </button>
        <button
          onClick={() => open("https://github.com/darwinprayoga")}
          class={`${hide} hover:scale-110 focus:outline-none text-black mb-5`}
        >
          <Github class="fill-current w-7" />
        </button>
        <button
          onClick={() => open("https://linkedin.com/in/darwinprayoga")}
          class={`${hide} hover:scale-110 focus:outline-none text-[#0A66C2] mb-5`}
        >
          <Linkedin class="fill-current w-7" />
        </button>
        <button
          onClick={() => open("https://twitter.com/mdarwinp")}
          class={`${hide} hover:scale-110 focus:outline-none text-[#1D9BF0] mb-5`}
        >
          <Twitter class="fill-current w-7" />
        </button>
        <button
          onClick={() => open("https://instagram.com/darwinprayoga")}
          class={`${hide} hover:scale-110 focus:outline-none text-white mb-5`}
        >
          <img draggable={false} src="/instagram.png" class="w-7" />
        </button>
        {contact && <div class="h-32 w-[1px] bg-gray-400 mb-5" />}
        <div
          onClick={() => setContact(!contact)}
          class={`flex pointer h-3 w-3 ${!contact && "ml-2"}`}
        >
          <div
            class={`animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75`}
          />
          <div
            class={`relative inline-flex rounded-full h-3 w-3 bg-blue-600`}
          />
        </div>
      </section>

      <section
        onClick={() => open("mailto:darwin.prayoga13@gmail.com")}
        class="fixed pointer bottom-0 w-min right-0 m-4 flex"
      >
        <p class={`text-gray-500 hover:text-blue-600`}>
          darwin.prayoga13@gmail.com
        </p>
      </section>

      <main class="w-full max-w-screen-md mx-auto px-4 py-8">
        <nav class="flex justify-between items-center w-full mb-6">
          <img
            draggable={false}
            onClick={props.onBack ? props.onBack : () => location.href = "/"}
            class="w-10 h-10 pointer hover:animate-spin"
            src="/logo.png"
          />
          <button
            onClick={() => setPreviewUrl("/resume-2026.pdf")}
            class="focus:outline-none tracking-wider bg-white flex text-[#1C1C1E] border border-black/5 py-2 px-4 shadow-sm rounded-xl hover:bg-gray-50 transition-all font-bold text-xs"
          >
            <Download class="fill-current mr-2 w-4 h-4" />PREVIEW RESUME 2026
          </button>
        </nav>

        <menuitem class="my-12 block">
          <p class={`font-mono text-blue-600 animate-bounce`}>
            Hi!👋, let ya'll kno me
          </p>
          <h1 class="font-black text-3xl md:text-4xl text-[#1C1C1E] my-2">
            Darwin Prayoga
          </h1>
          <h2 class="font-bold text-gray-500 mb-4 animate-pulse">
            Build up growth things
          </h2>
          <menu class="flex justify-start gap-2 mb-4">
            <button class="focus:outline-none flex items-center bg-blue-600 text-white rounded-xl py-1 px-3 text-xs shadow-sm">
              <b class="tracking-wider">🧩 UI/UX Designer</b>
            </button>
            <button class="focus:outline-none flex items-center bg-blue-600 text-white rounded-xl py-1 px-3 text-xs shadow-sm">
              <b class="tracking-wider">🪄 Frontend Developer</b>
            </button>
          </menu>
          <p class="text-gray-600 text-sm leading-relaxed">
            📌{" "}
            <a
              class="pointer hover:underline text-blue-600"
              onClick={() => open("https://goo.gl/maps/dnUuSAauKD3g7PFT9")}
            >
              Jakarta, Indonesia
            </a>{" "}
            • Specialize in executing web design & code for any demand to create
            growth-thinking of digitized experiences.
          </p>
        </menuitem>

        <section class="grid grid-cols-3 mb-6 gap-6">
          <div class="flex flex-col col-span-2 justify-start items-start">
            <p class="text-gray-500 font-bold text-sm mb-4">Capabilities:</p>
            <section class="flex w-full justify-start gap-12">
              <menuitem class="list-none p-0 m-0">
                <li class="mb-2 text-xs font-medium text-gray-600">
                  <sub>Adobe PS</sub>
                </li>
                <li class="mb-2 text-xs font-medium text-gray-600">
                  <sub>Adobe AI</sub>
                </li>
                <li class="mb-2 text-xs font-medium text-gray-600">
                  <sub>Figma</sub>
                </li>
                <li class="mb-2 text-xs font-medium text-gray-600">
                  <sub>Webflow</sub>
                </li>
                <li class="mb-2 text-xs font-medium text-gray-600">
                  <sub>Corel Draw</sub>
                </li>
              </menuitem>
              <menuitem class="list-none p-0 m-0">
                <li class="mb-2 text-xs font-medium text-gray-600">
                  <sub>JavaScript & TypeScript</sub>
                </li>
                <li class="mb-2 text-xs font-medium text-gray-600">
                  <sub>NPM / Node JS</sub>
                </li>
                <li class="mb-2 text-xs font-medium text-gray-600">
                  <sub>Git / Github</sub>
                </li>
                <li class="mb-2 text-xs font-medium text-gray-600">
                  <sub>HTML & CSS</sub>
                </li>
                <li class="mb-2 text-xs font-medium text-gray-600">
                  <sub>React JS & Next JS</sub>
                </li>
                <li class="mb-2 text-xs font-medium text-gray-600">
                  <sub>Tailwind CSS</sub>
                </li>
              </menuitem>
            </section>
          </div>

          <div class="col-span-1">
            <img
              draggable={false}
              onClick={() => setContact(!contact)}
              class={`pointer w-full bg-blue-600 shadow-md rounded-[32px] hover:scale-105 transition-transform`}
              src="/profile.png"
            />
          </div>
        </section>

        {/* CV Progression & Evolution Section */}
        <section class="w-full mt-10 p-6 backdrop-blur-md bg-white/50 border border-black/5 rounded-3xl shadow-sm mb-8">
          <span class="px-2.5 py-1 text-[10px] font-black uppercase tracking-widest bg-blue-600/10 text-blue-600 rounded-full border border-blue-500/10 animate-pulse">
            Career Evolution Timeline
          </span>
          <h3 class="font-black text-xl mt-3 mb-1.5 text-[#1C1C1E]">
            CV Progression (2022 → 2026)
          </h3>
          <p class="text-xs text-gray-500 mb-6">
            A side-by-side progression showing rapid tech scaling, advanced
            system design, and role evolution from the original profile to
            today.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* 2022 Card */}
            <div class="p-5 backdrop-blur-md bg-white/70 border border-black/5 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-3">
                  <span class="text-xs font-black uppercase text-gray-400 tracking-widest">
                    Early Foundation
                  </span>
                  <span class="px-2 py-0.5 text-[9px] font-bold bg-gray-200 text-gray-700 rounded-full">
                    2022
                  </span>
                </div>
                <h4 class="font-black text-base text-[#1C1C1E] mb-1">
                  Junior Frontend Developer
                </h4>
                <p class="text-[11px] text-gray-500 leading-relaxed mb-4">
                  Focusing on basic UI design, graphic arts, email marketing,
                  and foundational web layouts.
                </p>

                <h5 class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                  Primary Capabilities:
                </h5>
                <ul class="list-disc list-inside text-xs text-gray-500 gap-1 flex flex-col mb-4">
                  <li>Figma, Photoshop & Illustrator</li>
                  <li>HTML, CSS & basic JavaScript</li>
                  <li>Digital & Email Campaign Marketing</li>
                </ul>
              </div>
              <button
                onClick={() => setPreviewUrl("/resume.pdf")}
                class="w-full py-2.5 bg-black/5 hover:bg-black/10 text-[#1C1C1E] border border-black/5 text-xs font-bold tracking-wider rounded-xl transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Download class="fill-current w-4 h-4" />
                Preview 2022 Resume
              </button>
            </div>

            {/* 2026 Card */}
            <div class="p-5 backdrop-blur-md bg-white/95 border border-blue-500/20 rounded-2xl shadow-md flex flex-col justify-between relative overflow-hidden">
              {/* Blue glow highlight inside the premium card */}
              <div class="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div class="flex justify-between items-center mb-3 relative z-10">
                  <span class="text-xs font-black uppercase text-blue-600 tracking-widest">
                    Lead Engineer / AI Architect
                  </span>
                  <span class="px-2 py-0.5 text-[9px] font-bold bg-blue-600 text-white rounded-full animate-pulse">
                    LATEST 2026
                  </span>
                </div>
                <h4 class="font-black text-base text-[#1C1C1E] mb-1 relative z-10">
                  AI Product & Web Architect
                </h4>
                <p class="text-[11px] text-gray-500 leading-relaxed mb-4 relative z-10">
                  Leading advanced AI systems design, state-of-the-art
                  Deno/React architectures, responsive design scales, and
                  complex full-stack web products.
                </p>

                <h5 class="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1.5 relative z-10">
                  Primary Capabilities:
                </h5>
                <ul class="list-disc list-inside text-xs text-gray-500 gap-1 flex flex-col mb-4 relative z-10">
                  <li>Full-stack Deno Fresh & NextJS</li>
                  <li>TypeScript, Complex APIs & JSON Store</li>
                  <li>AI integrators & CSS animations</li>
                </ul>
              </div>
              <button
                onClick={() => setPreviewUrl("/resume-2026.pdf")}
                class="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold tracking-wider rounded-xl transition-all shadow-md text-center flex items-center justify-center gap-1.5 relative z-10"
              >
                <Download class="fill-current w-4 h-4" />
                Preview 2026 Resume (Latest)
              </button>
            </div>
          </div>
        </section>
      </main>

      <section class="bg-white/80 border border-black/5 shadow-lg mx-auto p-6 rounded-t-[40px] max-w-screen-md relative z-10">
        <menu class="flex justify-center w-full mb-4">
          <div class="w-14 h-1 rounded-xl bg-gray-300 my-2 animate-pulse" />
        </menu>

        <h2 class="font-black text-lg mb-6 tracking-wider text-[#1C1C1E]">
          Projects
        </h2>
        <div class="flex mb-6 justify-between items-center bg-[#F2F2F7] p-4 rounded-2xl w-full border border-black/5">
          <menu class="flex justify-start items-center">
            <img draggable={false} src="/biofip.png" class="w-12 mr-4" />
            <menuitem>
              <h3 class="font-bold text-sm text-[#1C1C1E]">Biofip</h3>
              <p class="text-xs text-gray-500">
                Self-branding based on NFT by web 3.0
              </p>
            </menuitem>
          </menu>
          <button
            onClick={() => open("https://biofip.vercel.app")}
            class={`focus:outline-none flex items-center bg-blue-600 hover:bg-blue-700 text-xs font-bold rounded-xl py-2 px-3 text-white shadow-sm transition-all`}
          >
            OPEN<Right class="fill-current w-4 h-4 ml-2" />
          </button>
        </div>
        <div class="flex mb-6 justify-between items-center bg-[#F2F2F7] p-4 rounded-2xl w-full border border-black/5">
          <menu class="flex justify-start items-center">
            <img draggable={false} src="/logo.png" class="w-12 mr-4" />
            <menuitem>
              <h3 class="font-bold text-sm text-[#1C1C1E]">Prayoga</h3>
              <p class="text-xs text-gray-500">
                Specializing execute web design & code for any demand
              </p>
            </menuitem>
          </menu>
          <button
            onClick={props.onNext ? props.onNext : () => location.href = "/"}
            class={`focus:outline-none flex items-center bg-blue-600 hover:bg-blue-700 text-xs font-bold rounded-xl py-2 px-3 text-white shadow-sm transition-all`}
          >
            OPEN<Right class="fill-current w-4 h-4 ml-2" />
          </button>
        </div>

        <div class="flex justify-end mt-10">
          <h2 class="font-black text-lg mb-6 tracking-wider text-[#1C1C1E]">
            Work Experiences
          </h2>
        </div>
        <div class="flex mb-6 justify-between items-center bg-[#F2F2F7] p-4 rounded-2xl w-full border border-black/5">
          <menu class="flex justify-start items-center">
            <img draggable={false} src="/victory.png" class="w-12 mr-4" />
            <menuitem>
              <h3 class="font-bold text-sm text-[#1C1C1E]">
                Victory International
              </h3>
              <p class="text-xs text-gray-500">
                Global financial investment and trading facilities,{" "}
                <sub>as a Digital Marketing</sub>
              </p>
            </menuitem>
          </menu>
          <button
            onClick={() => open("https://vifx.co.id")}
            class={`focus:outline-none flex items-center bg-blue-600 hover:bg-blue-700 text-xs font-bold rounded-xl py-2 px-3 text-white shadow-sm transition-all`}
          >
            OPEN<Right class="fill-current w-4 h-4 ml-2" />
          </button>
        </div>
        <div class="flex mb-6 justify-between items-center bg-[#F2F2F7] p-4 rounded-2xl w-full border border-black/5">
          <menu class="flex justify-start items-center">
            <img draggable={false} src="/ibf.png" class="w-12 mr-4" />
            <menuitem>
              <h3 class="font-bold text-sm text-[#1C1C1E]">
                International Business
              </h3>
              <p class="text-xs text-gray-500">
                Foreign exchange, stock and commodity index provider,{" "}
                <sub>as a Frontend Developer</sub>
              </p>
            </menuitem>
          </menu>
          <button
            onClick={() => open("https://ibftrader.com")}
            class={`focus:outline-none flex items-center bg-blue-600 hover:bg-blue-700 text-xs font-bold rounded-xl py-2 px-3 text-white shadow-sm transition-all`}
          >
            OPEN<Right class="fill-current w-4 h-4 ml-2" />
          </button>
        </div>
        <div class="flex mb-6 justify-between items-center bg-[#F2F2F7] p-4 rounded-2xl w-full border border-black/5">
          <menu class="flex justify-start items-center">
            <img draggable={false} src="/esandar.png" class="w-12 mr-4" />
            <menuitem>
              <h3 class="font-bold text-sm text-[#1C1C1E]">Esandar Arthamas</h3>
              <p class="text-xs text-gray-500">
                Financial market and trade company with commodities product,
                {" "}
                <sub>as a Frontend Developer</sub>
              </p>
            </menuitem>
          </menu>
          <button
            onClick={() => open("https://esandar.co.id")}
            class={`focus:outline-none flex items-center bg-blue-600 hover:bg-blue-700 text-xs font-bold rounded-xl py-2 px-3 text-white shadow-sm transition-all`}
          >
            OPEN<Right class="fill-current w-4 h-4 ml-2" />
          </button>
        </div>

        <h2 class="font-black text-lg mb-6 tracking-wider text-[#1C1C1E] mt-10">
          Certificates
        </h2>
        <div class="flex mb-6 justify-between items-center bg-[#F2F2F7] p-4 rounded-2xl w-full border border-black/5">
          <menu class="flex justify-start items-center">
            <img draggable={false} src="/ubsi.png" class="w-12 mr-4" />
            <menuitem>
              <h3 class="font-bold text-sm text-[#1C1C1E]">1st Place Winner</h3>
              <p class="text-xs text-gray-500">
                Digital campaign championship 34th-anniversary UBSI
              </p>
            </menuitem>
          </menu>
          <button
            onClick={() => setPreviewUrl("/campaign.pdf")}
            class={`focus:outline-none flex items-center bg-blue-600 hover:bg-blue-700 text-xs font-bold rounded-xl py-2 px-3 text-white shadow-sm transition-all`}
          >
            OPEN<Right class="fill-current w-4 h-4 ml-2" />
          </button>
        </div>

        <div class="flex justify-end mt-10">
          <h2 class="font-black text-lg mb-6 tracking-wider text-[#1C1C1E]">
            Educations
          </h2>
        </div>
        <div class="flex mb-16 justify-between items-center bg-[#F2F2F7] p-4 rounded-2xl w-full border border-black/5">
          <menu class="flex justify-start items-center">
            <img draggable={false} src="/ubsi.png" class="w-12 mr-4" />
            <menuitem>
              <h3 class="font-bold text-sm text-[#1C1C1E]">
                Bachelor of Engineering
              </h3>
              <p class="text-xs text-gray-500">
                Information Technology Department in Bina Sarana Informatika
                University of Slipi Jakarta
              </p>
            </menuitem>
          </menu>
          <button
            onClick={() => open("http://www.bsi.ac.id")}
            class={`focus:outline-none flex items-center bg-blue-600 hover:bg-blue-700 text-xs font-bold rounded-xl py-2 px-3 text-white shadow-sm transition-all`}
          >
            OPEN<Right class="fill-current w-4 h-4 ml-2" />
          </button>
        </div>

        <footer class="mb-16 text-center">
          <menuitem
            onClick={() => open("https://github.com/darwinprayoga/prayoga")}
            class={`text-gray-500 hover:text-blue-600 pointer flex flex-col items-center`}
          >
            <sub class="font-bold">Designed & Built by Darwin Prayoga</sub>
            <menu class="mt-2 flex gap-3 justify-center">
              <div class="flex items-center gap-1">
                <Star class="fill-current w-3 h-3 text-yellow-500" />
                <span class="text-[10px] font-bold">100.1k</span>
              </div>
              <div class="flex items-center gap-1">
                <Branch class="fill-current w-3 h-3 text-blue-500" />
                <span class="text-[10px] font-bold">50.3k</span>
              </div>
            </menu>
            <button
              onClick={() =>
                open(
                  "https://www.figma.com/community/file/1144173789761736149",
                )}
              class="flex hover:scale-110 focus:outline-none mt-4"
            >
              <img src="/figma.svg" class="w-3" />
            </button>
          </menuitem>
        </footer>
      </section>

      {/* Premium PDF Preview Modal Pop-up */}
      {previewUrl && (
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8 animate-fade-in">
          <div class="w-full max-w-5xl h-[90vh] md:h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up border border-black/10">
            {/* Modal Header */}
            <div class="px-6 py-4 bg-gray-50 border-b border-black/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <h3 class="font-extrabold text-[#1C1C1E] text-xs md:text-sm">
                {previewUrl.includes("2026")
                  ? "Darwin Prayoga - 2026 Resume (Latest)"
                  : previewUrl.includes("campaign")
                  ? "UBSI Campaign Winner Certificate"
                  : "Darwin Prayoga - 2022 Resume (Legacy)"}
              </h3>
              <div class="flex gap-2 w-full sm:w-auto">
                <a
                  href={previewUrl}
                  download
                  class="flex-1 sm:flex-none px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Download class="fill-current w-3.5 h-3.5" />
                  Download
                </a>
                <button
                  onClick={() => setPreviewUrl(null)}
                  class="flex-1 sm:flex-none px-4 py-2 bg-gray-200 hover:bg-gray-300 text-[#1C1C1E] font-bold text-xs rounded-xl transition-all text-center justify-center flex"
                >
                  Close
                </button>
              </div>
            </div>
            {/* Modal Body (PDF Iframe) */}
            <div class="flex-grow bg-gray-100 p-1 md:p-3 relative h-full">
              <iframe
                src={`${previewUrl}#view=FitH`}
                class="w-full h-full border-0 rounded-2xl bg-white shadow-inner"
                title="PDF Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
