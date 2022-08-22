// deno-lint-ignore-file no-explicit-any
/** @jsx h */
import { h } from "preact";
import { tw } from '@twind';

import Head from '../components/Sync.tsx';



export default function Pokedata({ data }: { data: any }) {
    return (
        <main class={tw`fixed inset-0 p-0`}>

            <Head title="Poke`data ☄️" />

            <nav onClick={() => location.href = '/'} class={tw`pointer flex gap-2 p-4 justify-start items-center`}>
                <img draggable={false} class={tw`w-10 h-10`} src="/logo.png" />
                <h3>Prayoga</h3>
            </nav>

            <section class={tw`bg-dark shadow-lg p-4 rounded-t-[40px]`}>

                <menu>
                    <div class={tw`w-14 h-1 rounded-xl bg-darkTrans my-2 animate-pulse`} />
                </menu>

            </section>

            <div class={tw`overflow-auto divide-y divide-darkTrans flex flex-col bg-dark shadow-lg p-4 w-full h-full pb-60`}>

                {data.map((x: any, i: number) => (
                    <menuitem class={tw`py-4`} key={i}>
                        <menu class={tw`justify-between w-full`}>
                            <p class={tw`pointer`} onClick={() => location.href = `/${x.username}`}>@{x.username}</p>
                            <sub>at {new Date(x.time).toLocaleDateString()} {new Date(x.time).toLocaleTimeString()}</sub>
                        </menu>
                        <menu class={tw`justify-between w-full`}>
                            <img draggable={false} class={tw`pointer w-20`} onClick={() => location.href = `/${x.username}`} src={x.image} />
                            <sub>{x.pokemon}</sub>
                        </menu>
                    </menuitem>
                ))}

            </div>

        </main>
    )
}