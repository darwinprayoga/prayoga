/** @jsx h */
import { h } from "preact";
import { tw, _color } from '@twind';
import { useState } from 'preact/hooks';
import Nav from "./Nav.tsx";
import { Lottie } from "./Sync.tsx";



export default function Server(props: { onBack(): void }) {

    const [type, setType] = useState('')

    return (
        <div class={tw`fixed flex flex-col justify-start items-center w-full p-4 bottom-0`}>

            <div class={tw`flex flex-col items-center`}>
                <Lottie src='https://assets7.lottiefiles.com/private_files/lf30_VBnEpi.json' />
                <section>
                    <h3>Server Side Rendering</h3>
                    <p>with API calls</p>
                </section>
            </div>

            <div class={tw`flex w-full mb-6 mt-32 max-w-screen-md`}>
                <input onChange={(e) => setType(e.currentTarget.value)} class={tw`rounded-r-none`} type='url' placeholder='Enter your name' />
                <button onClick={() => location.href = `/${type}`} class={tw`bg-darkTrans font-bold text-${_color}-600 tracking-wider pr-2 rounded-r-lg focus:outline-none`}>try</button>
            </div>

            <section class={tw`flex justify-start w-full`}>
                <Nav onBack={props.onBack} />
            </section>

        </div>
    )
}