// deno-lint-ignore-file no-explicit-any
import { useState } from "preact/hooks";
import Head from "../components/Sync.tsx";

interface PokemonItem {
    name: string;
    index: number;
    type: string;
    color: string;
    lore: string; // personality description
}

const POPULAR_POKEMONS: PokemonItem[] = [
    { name: "Pikachu", index: 25, type: "Electric ⚡", color: "from-yellow-400/20 to-yellow-600/5 hover:border-yellow-400/30", lore: "Quick, cheerful, and intensely loyal. You spark energy in every room." },
    { name: "Charizard", index: 6, type: "Fire / Flying 🔥", color: "from-orange-500/20 to-orange-600/5 hover:border-orange-500/30", lore: "Ambitious and powerful. You blaze trails where others dare not go." },
    { name: "Gengar", index: 94, type: "Ghost / Poison 🔮", color: "from-purple-500/20 to-purple-600/5 hover:border-purple-500/30", lore: "Mysterious and witty. You thrive in the shadows with a hidden grin." },
    { name: "Mewtwo", index: 150, type: "Psychic 🧠", color: "from-pink-500/20 to-pink-600/5 hover:border-pink-500/30", lore: "Brilliant and solitary. Your intellect operates on an entirely different level." },
    { name: "Lucario", index: 448, type: "Fighting / Steel 👊", color: "from-blue-400/20 to-blue-500/5 hover:border-blue-500/30", lore: "Disciplined and empathetic. You read the energy of those around you." },
    { name: "Eevee", index: 133, type: "Normal 🦊", color: "from-yellow-700/20 to-amber-800/5 hover:border-yellow-700/30", lore: "Adaptable and curious. Your potential is truly limitless — every path is yours." },
    { name: "Gyarados", index: 130, type: "Water / Flying 🌊", color: "from-cyan-500/20 to-blue-600/5 hover:border-cyan-500/30", lore: "Calm under pressure, overwhelming in motion. Underestimated until it's too late." },
    { name: "Rayquaza", index: 384, type: "Dragon / Flying 🐉", color: "from-emerald-500/20 to-green-600/5 hover:border-emerald-500/30", lore: "Guardian of extremes. You bring balance where chaos would otherwise reign." },
    { name: "Snorlax", index: 143, type: "Normal 💤", color: "from-blue-900/20 to-slate-800/5 hover:border-blue-900/30", lore: "Unbothered and grounded. You move at your own pace — and that's your power." },
    { name: "Dragonite", index: 149, type: "Dragon / Flying ✨", color: "from-amber-400/20 to-orange-500/5 hover:border-amber-400/30", lore: "Gentle giant with fierce capability. Warmth and strength in equal measure." },
];

// Nickname pool for random generation
const NICKNAME_POOL = [
    "StarTracer", "VoidWalker", "NeonPulse", "IronBlade", "FrostBite",
    "EmberStorm", "LunaEdge", "CryptoSage", "DarkNova", "SwiftArrow",
    "ThunderCore", "SilentWave", "BlazeRift", "GhostMark", "AquaFlow",
    "SteelMind", "CosmicEcho", "PhantomKey", "RiftRunner", "ShadowPeak",
];

function getRandomNickname(): string {
    return NICKNAME_POOL[Math.floor(Math.random() * NICKNAME_POOL.length)] +
        Math.floor(Math.random() * 1000);
}

const TYPE_COLOR_MAP: Record<string, string> = {
    fire: "text-orange-400", water: "text-blue-400", electric: "text-yellow-400",
    grass: "text-green-400", ice: "text-cyan-300", fighting: "text-red-400",
    poison: "text-purple-400", ground: "text-yellow-700", flying: "text-sky-400",
    psychic: "text-pink-400", bug: "text-lime-400", rock: "text-yellow-600",
    ghost: "text-violet-400", dragon: "text-indigo-400", dark: "text-gray-400",
    steel: "text-slate-400", fairy: "text-pink-300", normal: "text-gray-300",
};

interface FullPokemon {
    item: PokemonItem;
    fullData: any | null;
    loading: boolean;
}

export default function PokemonsWorld() {
    const [searchQuery, setSearchQuery] = useState("");
    const [customPokemon, setCustomPokemon] = useState<any | null>(null);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [selectedFull, setSelectedFull] = useState<FullPokemon | null>(null);

    // Live search filters the popular Pokémon
    const filteredPopular = POPULAR_POKEMONS.filter(pk =>
        pk.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    // Client-side quick search on PokeAPI
    async function handleGlobalSearch() {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return;

        const isPopular = POPULAR_POKEMONS.some(pk => pk.name.toLowerCase() === query);
        if (isPopular) {
            setCustomPokemon(null);
            return;
        }

        setLoadingSearch(true);
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
            if (res.ok) {
                const data = await res.json();
                setCustomPokemon({
                    name: data.name,
                    index: data.id,
                    type: data.types.map((t: any) => t.type.name).join(" / "),
                    sprite: data.sprites.other?.home?.front_default || data.sprites.front_default,
                    fullData: data,
                });
            } else {
                setCustomPokemon(null);
            }
        } catch (e) {
            console.error("PokeAPI Search Failed", e);
            setCustomPokemon(null);
        } finally {
            setLoadingSearch(false);
        }
    }

    // Opens modal — fetches full data for popular cards
    async function openModal(pk: PokemonItem) {
        setSelectedFull({ item: pk, fullData: null, loading: true });
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pk.index}`);
            if (res.ok) {
                const data = await res.json();
                setSelectedFull({ item: pk, fullData: data, loading: false });
            } else {
                setSelectedFull({ item: pk, fullData: null, loading: false });
            }
        } catch {
            setSelectedFull({ item: pk, fullData: null, loading: false });
        }
    }

    // Opens modal for custom-searched pokemon
    function openCustomModal() {
        if (!customPokemon) return;
        setSelectedFull({
            item: {
                name: customPokemon.name,
                index: customPokemon.index,
                type: customPokemon.type,
                color: "from-blue-600/20 to-purple-600/5",
                lore: "A rare find from the wild. Its energy aligns with those who seek the unknown.",
            },
            fullData: customPokemon.fullData,
            loading: false,
        });
    }

    // Navigate with randomly generated nickname locked to this Pokémon
    function claimWithRandom() {
        if (!selectedFull) return;
        const handle = getRandomNickname();
        location.href = `/${encodeURIComponent(handle)}?index=${selectedFull.item.index}`;
    }

    const sel = selectedFull;
    const fd = sel?.fullData;

    return (
        <main class="fixed inset-0 overflow-y-auto bg-black text-white p-4 md:p-8 flex flex-col justify-start pb-24">
            <Head title="Pokémons World 🪐" />

            <div class="absolute top-10 left-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[90px] pointer-events-none" />
            <div class="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Header */}
            <nav class="flex justify-between items-center w-full max-w-5xl mx-auto mb-8 z-10 relative">
                <div class="flex items-center gap-3 cursor-pointer" onClick={() => location.href = "/"}>
                    <img draggable={false} class="w-10 h-10 hover:animate-spin" src="/logo.png" />
                    <h3 class="font-extrabold text-lg text-white tracking-wide">Prionation</h3>
                </div>
                <button
                    onClick={() => location.href = "/"}
                    class="px-4 py-2 border border-white/10 hover:bg-white/10 text-white font-bold text-xs rounded-xl transition-all"
                >
                    ← Back to Lab
                </button>
            </nav>

            <section class="w-full max-w-5xl mx-auto text-center mb-10 z-10 relative">
                <span class="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/20">
                    Character Compendium
                </span>
                <h1 class="font-black text-3xl md:text-5xl mt-4 mb-2 tracking-tight text-white">
                    Pokémons World
                </h1>
                <p class="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                    Discover which legendary companion mirrors your personality. Each Pokémon embodies a unique character archetype.
                </p>
            </section>

            {/* Search */}
            <div class="w-full max-w-2xl mx-auto mb-10 z-10 relative flex flex-col sm:flex-row gap-3">
                <div class="relative flex-grow">
                    <input
                        type="text"
                        placeholder="Search any Pokémon (e.g. Squirtle, Bulbasaur)..."
                        value={searchQuery}
                        onInput={(e) => setSearchQuery(e.currentTarget.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleGlobalSearch()}
                        class="w-full bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none rounded-2xl px-5 py-4 text-sm text-white placeholder-gray-500 transition-all"
                    />
                </div>
                <button
                    onClick={handleGlobalSearch}
                    class="py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wider rounded-2xl shadow-md transition-all active:scale-95 text-sm"
                >
                    {loadingSearch ? "Searching..." : "Explore"}
                </button>
            </div>

            {/* Custom search result */}
            {customPokemon && (
                <section class="w-full max-w-5xl mx-auto mb-10 z-10 relative flex flex-col items-center">
                    <h3 class="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 animate-pulse">Global Search Discovery</h3>
                    <div
                        onClick={openCustomModal}
                        class="p-6 w-full max-w-sm bg-gradient-to-br from-blue-600/10 to-purple-600/5 hover:to-purple-600/10 border border-blue-500/30 hover:border-blue-400/50 rounded-3xl shadow-xl transition-all hover:scale-105 duration-300 cursor-pointer flex flex-col items-center relative overflow-hidden"
                    >
                        <div class="absolute top-2 right-4 text-[10px] font-mono text-gray-500">#{String(customPokemon.index).padStart(3, "0")}</div>
                        <img
                            src={customPokemon.sprite}
                            class="w-36 h-36 object-contain animate-bounce mb-3"
                            alt={customPokemon.name}
                        />
                        <h4 class="font-black text-xl capitalize text-white mb-1">{customPokemon.name}</h4>
                        <span class="px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full bg-white/5 text-gray-300 border border-white/5">
                            {customPokemon.type}
                        </span>
                        <div class="mt-4 text-xs font-bold text-blue-400">Tap to see character profile →</div>
                    </div>
                </section>
            )}

            {/* Popular Grid */}
            <section class="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 z-10 relative">
                {filteredPopular.map((pk) => (
                    <div
                        key={pk.index}
                        onClick={() => openModal(pk)}
                        class={`p-5 bg-gradient-to-br ${pk.color} border border-white/5 rounded-3xl shadow-lg transition-all hover:scale-105 duration-300 cursor-pointer flex flex-col items-center relative group`}
                    >
                        <div class="absolute top-2 right-4 text-[9px] font-mono text-gray-500 group-hover:text-gray-400">
                            #{String(pk.index).padStart(3, "0")}
                        </div>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pk.index}.png`}
                            class="w-24 h-24 object-contain group-hover:animate-bounce transition-transform duration-300 group-hover:scale-110 mb-3"
                            alt={pk.name}
                        />
                        <h4 class="font-extrabold text-base text-white mb-1">{pk.name}</h4>
                        <span class="px-2 py-0.5 text-[8px] uppercase font-bold tracking-wider rounded-full bg-white/5 text-gray-400 border border-white/5">
                            {pk.type}
                        </span>
                        <div class="mt-3 text-[9px] text-gray-500 group-hover:text-blue-400 transition-colors text-center leading-snug">{pk.lore.split(".")[0]}.</div>
                    </div>
                ))}
            </section>

            {/* Full Detail Modal — no username input, just details + random claim */}
            {sel && (
                <div
                    class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in"
                    onClick={() => setSelectedFull(null)}
                >
                    <div
                        class="w-full max-w-lg bg-[#1C1C1E] border border-white/10 rounded-t-3xl sm:rounded-3xl p-6 md:p-8 flex flex-col items-center shadow-2xl animate-fade-in-up relative overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Ambient glow behind pokemon */}
                        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-600/10 rounded-full blur-[60px] pointer-events-none" />

                        <button
                            onClick={() => setSelectedFull(null)}
                            class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-sm p-2 font-bold z-10"
                        >
                            ✕
                        </button>

                        {/* Pokémon Image */}
                        <div class="w-36 h-36 flex justify-center items-center rounded-full bg-white/5 border border-white/10 p-3 mb-4 relative z-10">
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${sel.item.index}.png`}
                                class="w-full h-full object-contain animate-bounce"
                                alt={sel.item.name}
                            />
                        </div>

                        {/* Name + type */}
                        <div class="text-center mb-5 relative z-10">
                            <span class="text-[10px] font-mono text-gray-500">#{String(sel.item.index).padStart(3, "0")}</span>
                            <h2 class="font-black text-3xl text-white capitalize mt-1">{sel.item.name}</h2>
                            <div class="flex gap-2 justify-center flex-wrap mt-2">
                                {sel.item.type.split("/").map(t => (
                                    <span key={t} class={`px-3 py-0.5 text-[10px] uppercase font-bold tracking-widest rounded-full bg-white/5 border border-white/10 ${TYPE_COLOR_MAP[t.trim().toLowerCase().replace(/[^a-z]/g, "")] || "text-gray-300"}`}>
                                        {t.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Personality lore */}
                        <div class="w-full bg-white/5 border border-white/5 rounded-2xl p-4 mb-5 relative z-10">
                            <p class="text-[11px] uppercase font-bold tracking-widest text-blue-400 mb-2">Character Archetype</p>
                            <p class="text-sm text-gray-200 leading-relaxed italic">"{sel.item.lore}"</p>
                        </div>

                        {/* Stats from PokeAPI */}
                        {sel.loading && (
                            <div class="w-full bg-white/3 rounded-2xl p-4 mb-5 animate-pulse text-center text-xs text-gray-500">Loading battle data...</div>
                        )}
                        {!sel.loading && fd && (
                            <div class="w-full mb-5 relative z-10">
                                <p class="text-[11px] uppercase font-bold tracking-widest text-gray-400 mb-3">Battle Stats</p>
                                <div class="grid grid-cols-2 gap-2">
                                    {fd.stats.slice(0, 6).map((s: any) => {
                                        const statPct = Math.min(100, Math.round((s.base_stat / 255) * 100));
                                        const statLabel = s.stat.name.replace("special-", "Sp.").replace("-", " ");
                                        return (
                                            <div key={s.stat.name} class="flex flex-col gap-1">
                                                <div class="flex justify-between text-[10px]">
                                                    <span class="text-gray-400 capitalize">{statLabel}</span>
                                                    <span class="text-white font-bold">{s.base_stat}</span>
                                                </div>
                                                <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                                    <div
                                                        class={`h-full rounded-full ${s.base_stat > 100 ? "bg-blue-400" : s.base_stat > 60 ? "bg-emerald-400" : "bg-amber-400"}`}
                                                        style={`width: ${statPct}%`}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Abilities */}
                                <div class="mt-4 flex flex-wrap gap-2">
                                    <p class="w-full text-[11px] uppercase font-bold tracking-widest text-gray-400 mb-1">Abilities</p>
                                    {fd.abilities.map((a: any) => (
                                        <span key={a.ability.name} class={`px-2 py-0.5 text-[10px] font-bold capitalize rounded-full border ${a.is_hidden ? "border-purple-500/40 text-purple-400 bg-purple-500/10" : "border-white/10 text-gray-300 bg-white/5"}`}>
                                            {a.is_hidden ? "🔮 " : ""}{a.ability.name.replace("-", " ")}
                                        </span>
                                    ))}
                                </div>

                                {/* Height / Weight */}
                                <div class="mt-4 grid grid-cols-3 gap-3 text-center">
                                    <div class="bg-white/5 border border-white/5 rounded-xl p-2">
                                        <p class="text-[9px] uppercase font-bold tracking-wider text-gray-500">Height</p>
                                        <p class="text-sm font-black text-white">{(fd.height / 10).toFixed(1)}m</p>
                                    </div>
                                    <div class="bg-white/5 border border-white/5 rounded-xl p-2">
                                        <p class="text-[9px] uppercase font-bold tracking-wider text-gray-500">Weight</p>
                                        <p class="text-sm font-black text-white">{(fd.weight / 10).toFixed(1)}kg</p>
                                    </div>
                                    <div class="bg-white/5 border border-white/5 rounded-xl p-2">
                                        <p class="text-[9px] uppercase font-bold tracking-wider text-gray-500">Base EXP</p>
                                        <p class="text-sm font-black text-white">{fd.base_experience ?? "—"}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* CTA — no username, random nickname only */}
                        <div class="w-full flex flex-col gap-3 relative z-10">
                            <button
                                onClick={claimWithRandom}
                                class="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wider rounded-2xl shadow-md transition-all active:scale-95 text-sm flex items-center justify-center gap-2"
                            >
                                🎲 Generate My Character Identity
                            </button>
                            <p class="text-[10px] text-gray-500 text-center">
                                A unique nickname is randomly generated & locked to this Pokémon. Try Again for a fresh one!
                            </p>
                            <button
                                onClick={() => setSelectedFull(null)}
                                class="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 text-xs font-bold rounded-2xl transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
