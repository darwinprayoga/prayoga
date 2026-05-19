// deno-lint-ignore-file no-explicit-any
import { useState } from "preact/hooks";
import Head from "../components/Sync.tsx";

// Personality trait map: derives a description from Pokémon typing + stats
function derivePersonalityTraits(data: any): { trait: string; icon: string; desc: string }[] {
    const types: string[] = (data.types || []).map((t: any) => t.type.name);
    const stats = data.stats || [];
    const hpStat = stats.find((s: any) => s.stat.name === "hp")?.base_stat ?? 50;
    const atkStat = stats.find((s: any) => s.stat.name === "attack")?.base_stat ?? 50;
    const spdStat = stats.find((s: any) => s.stat.name === "speed")?.base_stat ?? 50;
    const spAtkStat = stats.find((s: any) => s.stat.name === "special-attack")?.base_stat ?? 50;

    const traits = [];

    // Type-driven traits
    if (types.includes("fire")) traits.push({ icon: "🔥", trait: "Trailblazer", desc: "You ignite momentum in stagnant situations. Bold and fearless by nature." });
    if (types.includes("water")) traits.push({ icon: "💧", trait: "Adaptive", desc: "You flow around obstacles rather than breaking through them. Depth over force." });
    if (types.includes("electric")) traits.push({ icon: "⚡", trait: "Energizer", desc: "Your presence charges the atmosphere. Fast thinking, decisive action." });
    if (types.includes("psychic")) traits.push({ icon: "🧠", trait: "Strategist", desc: "You operate several steps ahead. Intelligence is your greatest weapon." });
    if (types.includes("ghost")) traits.push({ icon: "👻", trait: "Enigmatic", desc: "You reveal only what you choose. Mystery and intuition define you." });
    if (types.includes("dragon")) traits.push({ icon: "🐉", trait: "Visionary", desc: "Rare and powerful. You carry a long-term perspective others lack." });
    if (types.includes("dark")) traits.push({ icon: "🌑", trait: "Independent", desc: "You forge your own path, unmoved by expectations or social pressures." });
    if (types.includes("steel")) traits.push({ icon: "⚙️", trait: "Resilient", desc: "You weather criticism and adversity without losing your core integrity." });
    if (types.includes("fairy")) traits.push({ icon: "✨", trait: "Charming", desc: "Your warmth draws people in. You disarm tension with grace and wit." });

    // Stat-driven traits
    if (spdStat >= 100) traits.push({ icon: "💨", trait: "Rapid Executor", desc: "You act with urgency. Decisions come fast and implementation even faster." });
    if (hpStat >= 100) traits.push({ icon: "🛡️", trait: "Enduring", desc: "You outlast. Where others burn out, you sustain focus and push through." });
    if (atkStat >= 120) traits.push({ icon: "⚔️", trait: "Fierce Initiator", desc: "You strike first and strike decisively. Competition drives your best work." });
    if (spAtkStat >= 100) traits.push({ icon: "📡", trait: "Creative Force", desc: "Your mind is your strongest weapon. Ideas emerge fully-formed and powerful." });

    return traits.slice(0, 4); // show up to 4 traits
}

export default function Share({ data }: { data: any }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const traits = derivePersonalityTraits(data);
    const primaryType = data.types?.[0]?.type?.name ?? "normal";
    const pokemonName = (data.name ?? "").toUpperCase();
    const username = decodeURI(data.username ?? "");
    const spriteUrl = data.sprites?.other?.home?.front_default ?? data.sprites?.front_default;

    // Height / weight
    const heightM = data.height ? (data.height / 10).toFixed(1) : "—";
    const weightKg = data.weight ? (data.weight / 10).toFixed(1) : "—";

    // Primary stat
    const topStat = (data.stats ?? []).reduce((a: any, b: any) => a.base_stat > b.base_stat ? a : b, { base_stat: 0, stat: { name: "—" } });

    async function onDownloadInstagramStory() {
        try {
            const canvas = document.createElement("canvas");
            canvas.width = 1080;
            canvas.height = 1920;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            // 1. Dark gradient background
            const gradient = ctx.createLinearGradient(0, 0, 0, 1920);
            gradient.addColorStop(0, "#09090B");
            gradient.addColorStop(0.5, "#0D0E12");
            gradient.addColorStop(1, "#020203");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 1080, 1920);

            // 2. Ambient blue glow
            ctx.shadowBlur = 140;
            ctx.shadowColor = "rgba(59, 130, 246, 0.35)";
            ctx.fillStyle = "rgba(59, 130, 246, 0.08)";
            ctx.beginPath();
            ctx.arc(540, 840, 300, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            // 3. Frosted ring
            ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
            ctx.strokeStyle = "rgba(255, 255, 255, 0.10)";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(540, 840, 310, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // 4. Top label
            ctx.fillStyle = "#3B82F6";
            ctx.font = "bold 26px system-ui, -apple-system, sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("✦  PRIONATION IDENTITY LAB  ✦", 540, 200);

            // 5. Username
            ctx.fillStyle = "#FFFFFF";
            ctx.font = "900 72px system-ui, -apple-system, sans-serif";
            ctx.fillText(`@${username}`, 540, 360);

            ctx.fillStyle = "#8E8E93";
            ctx.font = "38px system-ui, -apple-system, sans-serif";
            ctx.fillText("Your spirit Pokémon is", 540, 450);

            // 6. Pokémon name
            ctx.fillStyle = "#60A5FA";
            ctx.font = "900 96px system-ui, -apple-system, sans-serif";
            ctx.fillText(pokemonName, 540, 1310);

            // 7. Primary trait title
            if (traits.length > 0) {
                ctx.fillStyle = "#FFFFFF";
                ctx.font = "bold 40px system-ui, -apple-system, sans-serif";
                ctx.fillText(`The ${traits[0].trait}`, 540, 1420);

                ctx.fillStyle = "rgba(255,255,255,0.50)";
                ctx.font = "32px system-ui, -apple-system, sans-serif";

                // Word-wrap the lore description
                const desc = traits[0].desc;
                const words = desc.split(" ");
                let line = "";
                let y = 1500;
                for (const word of words) {
                    const test = line ? line + " " + word : word;
                    const metrics = ctx.measureText(test);
                    if (metrics.width > 800 && line) {
                        ctx.fillText(line, 540, y);
                        line = word;
                        y += 44;
                    } else {
                        line = test;
                    }
                }
                if (line) ctx.fillText(line, 540, y);
            }

            // 8. Stat badge
            if (topStat.base_stat > 0) {
                ctx.fillStyle = "rgba(59,130,246,0.15)";
                ctx.strokeStyle = "rgba(59,130,246,0.35)";
                ctx.lineWidth = 2;
                const bx = 540 - 160, by = 1650, bw = 320, bh = 56;
                ctx.beginPath();
                ctx.roundRect(bx, by, bw, bh, 28);
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = "#93C5FD";
                ctx.font = "bold 24px system-ui";
                ctx.fillText(`Peak: ${topStat.stat.name.replace("-", " ")} ${topStat.base_stat}`, 540, by + bh / 2);
            }

            // 9. Watermark
            ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
            ctx.font = "500 36px system-ui, -apple-system, sans-serif";
            ctx.fillText("v1.prionation.io", 540, 1820);

            // 10. Load and draw the Pokémon image
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = spriteUrl;
            await new Promise((resolve) => {
                img.onload = () => {
                    const size = 500;
                    ctx.drawImage(img, 540 - size / 2, 840 - size / 2, size, size);
                    resolve(true);
                };
                img.onerror = () => resolve(false);
            });

            const dataUrl = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.download = `${username}-${data.name}-identity.png`;
            link.href = dataUrl;
            link.click();
        } catch (e) {
            console.error("Failed to generate Story Card:", e);
            alert("Failed to download Story Card. Try again!");
        }
    }

    return (
        <div class="fixed inset-0 m-0 flex flex-col items-center justify-center bg-black/90 overflow-hidden">
            <Head title={`${username}'s Pokémon Identity`} />

            {/* Background glow */}
            <div class="absolute w-[320px] h-[320px] bg-blue-600/25 rounded-full blur-[100px] pointer-events-none animate-pulse" />

            {/* Main Card */}
            <div class={`w-full max-w-sm p-7 flex flex-col items-center relative z-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-2xl animate-fade-in-up transition-all duration-500 ${drawerOpen ? "translate-y-[-12%] scale-[0.92]" : ""}`}>

                {/* Pokemon Ring */}
                <div class="relative w-56 h-56 flex justify-center items-center rounded-full backdrop-blur-md bg-white/10 p-4 border border-white/20 shadow-inner mb-5">
                    <img
                        draggable={false}
                        onClick={() => open(`https://www.pokemon.com/us/pokedex/${data.name}`)}
                        class="h-full w-full object-contain transition-transform duration-300 hover:scale-110 cursor-pointer animate-bounce pointer-events-auto z-20"
                        src={spriteUrl}
                        alt={data.name}
                    />
                </div>

                <div class="text-center mb-2">
                    <span class="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Spirit Pokémon</span>
                    <h1 class="text-3xl font-black tracking-tight text-white capitalize mt-1">{data.name}</h1>
                    <p class="text-gray-400 text-sm mt-1">
                        @{username}'s identity is locked to <span class="capitalize font-black text-blue-400">{data.name}</span>
                    </p>
                </div>

                {/* Quick trait pill */}
                {traits.length > 0 && (
                    <div class="flex gap-2 flex-wrap justify-center my-3">
                        {traits.slice(0, 2).map(t => (
                            <span key={t.trait} class="px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold rounded-full">
                                {t.icon} {t.trait}
                            </span>
                        ))}
                    </div>
                )}

                {/* Actions */}
                <div class="w-full flex flex-col gap-3 mt-3">
                    <button
                        onClick={onDownloadInstagramStory}
                        class="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wider rounded-2xl shadow-md transform active:scale-95 transition-all duration-200 focus:outline-none flex items-center justify-center gap-2"
                    >
                        📸 Share to Instagram Story
                    </button>

                    <div class="flex gap-2 w-full">
                        <button
                            onClick={() => location.href = "/world"}
                            class="flex-1 py-3 px-4 flex justify-center items-center font-bold tracking-wider rounded-2xl text-white bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none transition-all active:scale-95 duration-150 text-xs"
                        >
                            Pokémons World 🪐
                        </button>
                        {/* The drawer trigger — replaces "Get More" */}
                        <button
                            onClick={() => setDrawerOpen(true)}
                            class="flex-1 py-3 px-4 flex justify-center items-center font-bold tracking-wider rounded-2xl text-blue-400 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 focus:outline-none transition-all active:scale-95 duration-150 text-xs"
                        >
                            My Profile ↑
                        </button>
                    </div>
                </div>
            </div>

            {/* ── iPhone-style Bottom Drawer ── */}
            {/* Backdrop tap to close */}
            {drawerOpen && (
                <div
                    class="absolute inset-0 z-20"
                    onClick={() => setDrawerOpen(false)}
                />
            )}

            <div
                class={`fixed left-0 right-0 bottom-0 z-30 flex flex-col max-h-[82vh] bg-[#1C1C1E] border-t border-white/10 rounded-t-[32px] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${drawerOpen ? "translate-y-0" : "translate-y-full"}`}
            >
                {/* Drag handle */}
                <div class="flex justify-center pt-3 pb-2">
                    <div class="w-10 h-1 rounded-full bg-white/20" />
                </div>

                {/* Scrollable content */}
                <div class="overflow-y-auto px-6 pb-10 flex flex-col gap-6">

                    {/* Header */}
                    <div class="text-center pt-2">
                        <h2 class="font-black text-xl text-white">Your Character Profile</h2>
                        <p class="text-xs text-gray-400 mt-1">
                            Based on <span class="capitalize text-blue-400 font-bold">{data.name}</span>, your Pokémon identity reveals these core traits.
                        </p>
                    </div>

                    {/* Personality traits */}
                    <div class="flex flex-col gap-3">
                        <p class="text-[11px] uppercase font-bold tracking-widest text-gray-500">Personality Traits</p>
                        {traits.length > 0 ? traits.map(t => (
                            <div key={t.trait} class="flex gap-4 bg-white/5 border border-white/5 rounded-2xl p-4 items-start">
                                <span class="text-2xl">{t.icon}</span>
                                <div>
                                    <h4 class="font-bold text-white text-sm">{t.trait}</h4>
                                    <p class="text-xs text-gray-400 leading-relaxed mt-0.5">{t.desc}</p>
                                </div>
                            </div>
                        )) : (
                            <p class="text-xs text-gray-500 italic text-center">Trait data unavailable for this companion.</p>
                        )}
                    </div>

                    {/* Battle statistics */}
                    {data.stats && data.stats.length > 0 && (
                        <div class="flex flex-col gap-3">
                            <p class="text-[11px] uppercase font-bold tracking-widest text-gray-500">Battle Statistics</p>
                            <div class="grid grid-cols-2 gap-2">
                                {data.stats.slice(0, 6).map((s: any) => {
                                    const pct = Math.min(100, Math.round((s.base_stat / 255) * 100));
                                    const label = s.stat.name.replace("special-", "Sp.").replace("-", " ");
                                    return (
                                        <div key={s.stat.name} class="bg-white/5 border border-white/5 rounded-xl p-3">
                                            <div class="flex justify-between text-[10px] mb-1.5">
                                                <span class="text-gray-400 capitalize">{label}</span>
                                                <span class="text-white font-bold">{s.base_stat}</span>
                                            </div>
                                            <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    class={`h-full rounded-full ${s.base_stat > 100 ? "bg-blue-400" : s.base_stat > 60 ? "bg-emerald-400" : "bg-amber-400"}`}
                                                    style={`width: ${pct}%`}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Physical attributes + abilities */}
                    <div class="grid grid-cols-3 gap-3">
                        <div class="bg-white/5 border border-white/5 rounded-xl p-3 text-center">
                            <p class="text-[9px] uppercase font-bold tracking-wider text-gray-500">Height</p>
                            <p class="text-base font-black text-white">{heightM}m</p>
                        </div>
                        <div class="bg-white/5 border border-white/5 rounded-xl p-3 text-center">
                            <p class="text-[9px] uppercase font-bold tracking-wider text-gray-500">Weight</p>
                            <p class="text-base font-black text-white">{weightKg}kg</p>
                        </div>
                        <div class="bg-white/5 border border-white/5 rounded-xl p-3 text-center">
                            <p class="text-[9px] uppercase font-bold tracking-wider text-gray-500">Base EXP</p>
                            <p class="text-base font-black text-white">{data.base_experience ?? "—"}</p>
                        </div>
                    </div>

                    {/* Abilities */}
                    {data.abilities && (
                        <div class="flex flex-col gap-2">
                            <p class="text-[11px] uppercase font-bold tracking-widest text-gray-500">Abilities</p>
                            <div class="flex flex-wrap gap-2">
                                {data.abilities.map((a: any) => (
                                    <span key={a.ability.name} class={`px-3 py-1 text-[10px] font-bold capitalize rounded-full border ${a.is_hidden ? "border-purple-500/40 text-purple-400 bg-purple-500/10" : "border-white/10 text-gray-300 bg-white/5"}`}>
                                        {a.is_hidden ? "🔮 " : ""}{a.ability.name.replace("-", " ")}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Social share + back */}
                    <div class="flex flex-col gap-3 pt-2">
                        <button
                            onClick={onDownloadInstagramStory}
                            class="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wider rounded-2xl shadow-md transition-all active:scale-95 text-sm flex items-center justify-center gap-2"
                        >
                            📸 Share Identity Story
                        </button>
                        <button
                            onClick={() => location.href = "/"}
                            class="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 text-xs font-bold rounded-2xl transition-all"
                        >
                            ← Back to Lab
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}