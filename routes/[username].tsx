/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from '$fresh/server.ts';

import array from "./api/pokedata.json" assert { type: "json" };
import Share from '../islands/Share.tsx';

Deno.env.set("FRESH_ENV_POKEAPI_URL", "https://pokeapi.co/api/v2/pokemon")
Deno.env.set("FRESH_ENV_RAPIDAPI_KEY", "b93225fcddmshc2aa39b60b562adp14b4efjsn88f900d37621")
Deno.env.set("FRESH_ENV_RAPIDAPI_HOST", "web-capture1.p.rapidapi.com")



export interface Pokemon {
    name: string,
    sprites: {
        other: {
            home: {
                front_default: string
            }
        }
    },
    username?: string,
    apiKey?: string,
    apiHost?: string
}

export const handler: Handlers<Pokemon | null> = {
    async GET(_, ctx) {

        const { username } = ctx.params
        const random = Math.floor(Math.random() * 500);
        array.push({ username: username, index: random })

        const find = array.find(x => x.username == username)

        const respon = await fetch(`${Deno.env.get("FRESH_ENV_POKEAPI_URL")}/${find?.index}/`, { method: 'GET' })

        if (respon.status === 404) {
            return ctx.render(null)
        } else {
            const data: Pokemon = await respon.json()
            data.username = find?.username
            data.apiKey = Deno.env.get("FRESH_ENV_RAPIDAPI_KEY")
            data.apiHost = Deno.env.get("FRESH_ENV_RAPIDAPI_HOST")
            return ctx.render(data)
        }
    },
};



export default function Getuser({ data }: PageProps<Pokemon | null>) {
    return (
        <main>
            {data && data.sprites.other.home.front_default ?
                <Share data={data} /> :
                <p>please refresh</p>}
        </main>
    );
}
