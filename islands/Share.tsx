// deno-lint-ignore-file no-explicit-any
/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Head from "./Sync.tsx";

export default function Share({ data }: { data: any }) {

    async function onShare() {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': data.apiKey,
                'X-RapidAPI-Host': data.apiHost,
            }
        }

        const blob = await fetch(`https://web-capture1.p.rapidapi.com/capture?url=https://prayoga.deno.dev/${data.username}&width=549&height=978&disableAnimations=true`, options)
            .then(res => res.blob())

        const filesArray: File[] = [new File([blob], `${data.username}.png`, { type: blob.type, lastModified: new Date().getTime() })]
        const shareData = {
            files: filesArray,
            title: `${data.username}'s Pokemon is ${data.name}'`,
            text: `get your own by clicking this url: https://prayoga.deno.dev`,
        }

        navigator.share(shareData as any).catch((e) => Error(e))

    }



    return (
        <div class={tw`fixed inset-0 m-4 flex flex-col`}>
            <Head title={decodeURI(data.username) + `'s Pokemon`} />

            <section class={tw`flex flex-col w-full h-full my-auto justify-center items-center`}>
                <img onClick={() => open(`https://www.pokemon.com/us/pokedex/${data.name}`)} class={tw`pointer h-[350px] mb-6 animate-bounce`} src={data.sprites.other.home.front_default} />
                <h2 class={tw`mb-4`}>Congrats! @{decodeURI(data.username)}</h2>
                <p>you got <b class={tw`tracking-wider`}>{data.name}</b>'s Pokemon</p>
            </section>

            <menuitem class={tw`items-center`}>
                <button onClick={onShare} class={tw`btnFilled w-full max-w-screen-md`}>Share</button>
                <button onClick={() => location.href = '/'} class={tw`btnPlain w-full max-w-screen-md`}>Get More</button>
            </menuitem>
        </div>
    )
}