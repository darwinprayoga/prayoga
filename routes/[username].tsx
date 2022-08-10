/** @jsx h */
import { h } from "preact";
import { tw } from '@twind';
import { Handlers, PageProps } from "$fresh/server.ts";
import Head from "../islands/Sync.tsx";



export interface Pokemon {
    name: string,
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    },
    username: string
}

export const handler: Handlers<Pokemon | null> = {
    async GET(_, ctx) {

        const { username } = ctx.params
        const random = Math.floor(Math.random() * 1154);
        const respon = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`, { method: 'GET' })

        if (respon.status === 404) {
            return ctx.render(null)
        } else {
            const data: Pokemon = await respon.json()
            data.username = username
            return ctx.render(data)
        }
    },
};



export default function Getuser({ data }: PageProps<Pokemon | null>) {
    return (
        <main>
            {data && data.sprites.other.dream_world.front_default ?
                <div>
                    <Head title={decodeURI(data.username) + `'s Pokemon`} />

                    <section class={tw`modal flex-col`}>
                        <img class={tw`w-[300px] mb-6 animate-bounce`} src={data.sprites.other.dream_world.front_default} />
                        <h1 class={tw`mb-4`}>Congrats! {decodeURI(data.username)}</h1>
                        <p>you got <b class={tw`tracking-wider`}>{data.name}</b>'s Pokemon</p>
                    </section>
                </div> :
                <p>please refresh</p>}
        </main>
    );
}
