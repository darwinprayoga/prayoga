// deno-lint-ignore-file no-explicit-any
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
        <div class="fixed inset-0 overflow-y-auto bg-black text-white flex flex-col items-center justify-center p-4 pb-24">

            <div class="flex flex-col items-center">
                <Lottie src='/plugin/server.json' />
                <section>
                    <h3>Server Side Rendering</h3>
                    <p>with API calls</p>
                </section>
            </div>

            <div class="flex w-full mb-6 mt-32 max-w-screen-md">
                <div class="flex w-full bg-dark rounded-lg">
                    <div class="bg-dark text-white pl-3 py-1 rounded-l-lg"><h3>@</h3></div>
                    <input type="search" name="search" onKeyUp={(e) => setType(e.currentTarget.value)} onKeyDown={handle} class="bg-dark lowercase rounded-none pl-1" placeholder='Username' />
                    <button onClick={() => location.href = `/${type.toLowerCase()}`} class={`bg-dark font-bold text-blue-600 tracking-wider pr-2 rounded-r-lg focus:outline-none`}>try</button>
                </div>
                <button onClick={() => location.href = `/history`} class="font-bold mr-2 ml-4 text-white tracking-wider focus:outline-none">🍃</button>
            </div>

            <section class="flex justify-start w-full">
                <Nav onBack={props.onBack} />
            </section>

        </div>
    )
}