// deno-lint-ignore-file no-explicit-any
/** @jsx h */
import { h } from "preact";
import { tw, _color } from '@twind';
import { useState } from 'preact/hooks';
import Nav from "../components/Nav.tsx";
import { Lottie } from "../components/Sync.tsx";



export default function Server(props: { onBack(): void }) {

    const [type, setType] = useState('')

    const handle = (e: any) => {
        if (e.key == 'Enter') {
            location.href = `/${type.toLowerCase()}`
        }
    }

    return (
        <div class={tw`fixed flex flex-col justify-start items-center w-full p-4 bottom-0`}>

            <div class={tw`flex flex-col items-center`}>
                <Lottie src='/plugin/server.json' />
                <section>
                    <h3>Server Side Rendering</h3>
                    <p>with API calls</p>
                </section>
            </div>

            <div class={tw`flex w-full mb-6 mt-32 max-w-screen-md`}>
                <div class={tw`bg-darkTrans text-white pl-3 py-1 rounded-l-lg`}><h3>@</h3></div>
                <input type="search" onKeyUp={(e) => setType(e.currentTarget.value)} onKeyDown={handle} class={tw`lowercase rounded-none pl-1`} placeholder='Username' />
                <button onClick={() => location.href = `/${type.toLowerCase()}`} class={tw`bg-darkTrans font-bold text-${_color}-600 tracking-wider pr-2 rounded-r-lg focus:outline-none`}>try</button>
                <button onClick={() => location.href = `/history`} class={tw`font-bold mr-2 ml-4 text-white tracking-wider focus:outline-none`}>🍃</button>
            </div>

            <section class={tw`flex justify-start w-full`}>
                <Nav onBack={props.onBack} />
            </section>

        </div>
    )
}