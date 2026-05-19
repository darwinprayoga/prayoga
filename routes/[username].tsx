import { Handlers, PageProps } from '$fresh/server.ts';
import { getOrGeneratePokemon, Pokemon } from '../utils/pokemon.ts';
import Share from '../islands/Share.tsx';

export const handler: Handlers<Pokemon | null> = {
    async GET(req, ctx) {
        const { username } = ctx.params;
        const url = new URL(req.url);
        const indexOverrideStr = url.searchParams.get("index");
        const indexOverride = indexOverrideStr ? parseInt(indexOverrideStr, 10) : undefined;
        try {
            const data = await getOrGeneratePokemon(username, indexOverride);
            if (data) {
                data.apiKey = Deno.env.get("FRESH_ENV_RAPIDAPI_KEY");
                data.apiHost = Deno.env.get("FRESH_ENV_RAPIDAPI_HOST");
            }
            return ctx.render(data);
        } catch (e) {
            console.error("Error in GET handler [username]:", e);
            return ctx.render(null);
        }
    },
};

export default function Getuser({ data }: PageProps<Pokemon | null>) {
    return (
        <main class="min-h-screen bg-black text-white flex flex-col justify-center items-center">
            {data && data.sprites?.other?.home?.front_default ? (
                <Share data={data} />
            ) : (
                <div class="flex flex-col items-center gap-4">
                    <p class="text-sub text-lg animate-pulse">Loading your Pokémon...</p>
                    <button onClick={() => location.reload()} class="btnBorder px-4 py-2 text-sm">
                        Retry
                    </button>
                </div>
            )}
        </main>
    );
}
