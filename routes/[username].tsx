/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from '$fresh/server.ts';
import { supabase } from '@supabase'

import Share from '../islands/Share.tsx';



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
        const random = Math.floor(Math.random() * 898);

        const { data: exist } = await supabase
            .from('pokedata')
            .select('*')
            .eq('username', username)

        if (exist?.length == 1) {

            const respon = await fetch(`${Deno.env.get("FRESH_ENV_POKEAPI_URL")}/${exist[0].index}/`, { method: 'GET' })
            const data: Pokemon = await respon.json()

            if (respon.status === 404) {
                return ctx.render(null)
            } else {
                data.username = username
                data.apiKey = Deno.env.get("FRESH_ENV_RAPIDAPI_KEY")
                data.apiHost = Deno.env.get("FRESH_ENV_RAPIDAPI_HOST")
                return ctx.render(data)
            }

        } else {

            const respon = await fetch(`${Deno.env.get("FRESH_ENV_POKEAPI_URL")}/${random}/`, { method: 'GET' })
            const data: Pokemon = await respon.json()

            await supabase
                .from('pokedata')
                .insert([
                    { username: username, index: random, pokemon: data.name, image: data.sprites.other.home.front_default, time: new Date().toISOString() }
                ])

            if (respon.status === 404) {
                return ctx.render(null)
            } else {
                data.username = username
                data.apiKey = Deno.env.get("FRESH_ENV_RAPIDAPI_KEY")
                data.apiHost = Deno.env.get("FRESH_ENV_RAPIDAPI_HOST")
                return ctx.render(data)
            }

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
