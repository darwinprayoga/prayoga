export interface PokemonStat { base_stat: number; stat: { name: string }; }
export interface PokemonAbility { ability: { name: string }; is_hidden: boolean; }
export interface PokemonType { type: { name: string }; }

export interface Pokemon {
    name: string;
    id: number;
    height: number;
    weight: number;
    base_experience: number;
    types: PokemonType[];
    stats: PokemonStat[];
    abilities: PokemonAbility[];
    sprites: {
        front_default: string;
        other: {
            home: {
                front_default: string;
            };
        };
    };
    username?: string;
    apiKey?: string;
    apiHost?: string;
}

function getPokemonIndex(username: string): number {
    const clean = username.trim().toLowerCase();
    let hash = 0;
    for (let i = 0; i < clean.length; i++) {
        hash = clean.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash % 898) + 1; // Maps 1 to 898
}

export async function getOrGeneratePokemon(username: string, overrideIndex?: number): Promise<Pokemon | null> {
    try {
        const index = overrideIndex && overrideIndex >= 1 && overrideIndex <= 898 
            ? overrideIndex 
            : getPokemonIndex(username);
            
        const pokeApiUrl = Deno.env.get("FRESH_ENV_POKEAPI_URL") || "https://pokeapi.co/api/v2/pokemon";

        const res = await fetch(`${pokeApiUrl}/${index}/`);
        if (!res.ok) {
            console.error(`PokeAPI returned ${res.status} for index ${index}`);
            return null;
        }
        const data: Pokemon = await res.json();
        data.username = username;
        return data;
    } catch (e) {
        console.error("Error in getOrGeneratePokemon:", e);
        return null;
    }
}
