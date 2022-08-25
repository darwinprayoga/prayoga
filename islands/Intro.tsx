/** @jsx h */
import { h } from "preact";
import { tw } from '@twind';
import { useState } from 'preact/hooks';
import { Bottom, Next } from '../components/Icons.tsx';



export default function Intro(props: { onNext(): void, onBottom(): void }) {

    const [toggle, setToggle] = useState(false)

    const x = toggle ? 'end' : 'start'
    const col = toggle ? 'stabilo' : 'default'
    const dark = toggle ? 'black' : 'smoke'
    const text = toggle ? 'white' : 'dark'
    const hide = toggle ? 'flex' : 'hidden'

    return (
        <div class={tw`fixed bg-${dark} text-${text} shadow-inner inset-0 flex justify-center items-center`}>

            <img draggable={false} class={tw`fixed bottom-0 right-0 w-80`} src="/avatar.png" />

            <button onClick={props.onNext} class={tw`focus:outline-none fixed text-blue-600 ${hide} m-4 items-center top-0 right-0`}>
                <h3>Next</h3>
                <Next class={tw`fill-current ml-2 w-[30px] h-[30px]`} />
            </button>

            <menuitem>
                <h1 class={tw`text-${text} animate-bounce mb-2`}>Prayoga's here!</h1>

                <button onClick={() => setToggle(!toggle)} class={tw`focus:outline-none flex z-10 shadow-inner shadow-sm justify-${x} items-center w-[51px] h-[31px] rounded-full bg-${col}`}>
                    <div class={tw`w-[27px] h-[27px] mx-[2px] bg-white rounded-full shadow-lg`} />
                </button>
            </menuitem>

            <button onClick={props.onBottom} class={tw`focus:outline-none fixed text-[#ADADAD] ${toggle ? 'hidden' : 'flex'} m-4 items-center bottom-0 left-0`}>
                <Bottom class={tw`fill-current w-[30px] h-[30px]`} />
            </button>
        </div>
    )
}