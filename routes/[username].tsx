/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from '$fresh/server.ts';
import { app } from '@firebase';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

import Share from '../components/Share.tsx';



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



const fire = getFirestore(app)

export const handler: Handlers<Pokemon | null> = {
    async GET(_, ctx) {

        const { username } = ctx.params
        const random = Math.floor(Math.random() * 898);

        const db = await getDoc(doc(fire, 'pokedata', username))

        if (db.exists()) {

            const respon = await fetch(`${Deno.env.get("FRESH_ENV_POKEAPI_URL")}/${db.data().index}/`, { method: 'GET' })

            if (respon.status === 404) {
                return ctx.render(null)
            } else {
                const data: Pokemon = await respon.json()
                data.username = db.id
                data.apiKey = Deno.env.get("FRESH_ENV_RAPIDAPI_KEY")
                data.apiHost = Deno.env.get("FRESH_ENV_RAPIDAPI_HOST")
                return ctx.render(data)
            }
        } else {

            const respon = await fetch(`${Deno.env.get("FRESH_ENV_POKEAPI_URL")}/${random}/`, { method: 'GET' })
            const data: Pokemon = await respon.json()

            await setDoc(doc(fire, 'pokedata', username), {
                image: data.sprites.other.home.front_default,
                index: random,
                pokemon: data.name,
                time: new Date().toISOString()
            })

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
