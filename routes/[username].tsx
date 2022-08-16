/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from '$fresh/server.ts';
import { config } from '@dotenv';

import Share from '../islands/Share.tsx';



export interface Pokemon {
    name: string,
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    },
    username?: string,
    apiKey: string,
    apiHost: string
}

const array = [
    { name: 'darwin', index: 1 }
]

export const handler: Handlers<Pokemon | null> = {
    async GET(_, ctx) {

        const { username } = ctx.params
        const random = Math.floor(Math.random() * 1154);
        array.push({ name: username, index: random })

        const find = array.find(x => x.name == username)

        const respon = await fetch(`${config.FRESH_ENV_POKEAPI_URL}${find?.index}/`, { method: 'GET' })

        if (respon.status === 404) {
            return ctx.render(null)
        } else {
            const data: Pokemon = await respon.json()
            data.username = find?.name
            data.apiKey = config.FRESH_ENV_RAPIDAPI_KEY
            data.apiHost = config.FRESH_ENV_RAPIDAPI_HOST
            return ctx.render(data)
        }
    },
};



export default function Getuser({ data }: PageProps<Pokemon | null>) {
    return (
        <main>
            {data && data.sprites.other.dream_world.front_default ?
                <Share data={data} /> :
                <p>please refresh</p>}
        </main>
    );
}
