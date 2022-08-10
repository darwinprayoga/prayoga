/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw, _color } from "@twind";
import { Back, Close, Left, Portfolio, Right, Speed } from "./Icons.tsx";
import Card from "./Card.tsx";
import Meter from "./Meter.tsx";

export default function Nav(props: { onBack(): void, class?: string }) {

    const [navOn, setNavOn] = useState(false)
    const [portfolio, setPortfolio] = useState(false)
    const [speed, setSpeed] = useState(false)

    return (
        <div class={props.class}>

            {portfolio &&
                <div class={tw`modal`}>
                    <button onClick={() => setPortfolio(false)} class={tw`fixed top-0 right-0 flex p-4 focus:outline-none text-red-600 gap-2 items-center`}><Close class={tw`fill-current w-[30px]`} /></button>
                    <Card />
                </div>}

            {speed &&
                <div class={tw`modal`}>
                    <button onClick={() => setSpeed(false)} class={tw`fixed top-0 right-0 flex p-4 focus:outline-none text-red-600 gap-2 items-center`}><Close class={tw`fill-current w-[30px]`} /></button>
                    <Meter />
                </div>}

            {navOn ?
                <menu class={tw`gap-6`}>
                    <button onClick={props.onBack} class={tw`flex focus:outline-none text-${_color}-600 gap-2 items-center`}><Back class={tw`fill-current w-[30px]`} /></button>
                    <button onClick={() => setSpeed(true)} class={tw`flex focus:outline-none text-${_color}-600 gap-2 items-center`}><Speed class={tw`fill-current w-[30px]`} /></button>
                    <button onClick={() => setPortfolio(true)} class={tw`flex focus:outline-none text-${_color}-600 gap-2 items-center`}><Portfolio class={tw`fill-current w-[30px]`} /></button>
                    <button onClick={() => setNavOn(false)} class={tw`flex focus:outline-none text-${_color}-600 gap-2 items-center`}><Left class={tw`fill-current w-[30px]`} /></button>
                </menu> :
                <button onClick={() => setNavOn(true)} class={tw`flex focus:outline-none text-${_color}-600 gap-2 items-center`}><Right class={tw`fill-current w-[30px]`} /></button>}
        </div>
    )
}