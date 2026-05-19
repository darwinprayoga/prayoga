import { useState } from "preact/hooks";
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
                <div class="modal">
                    <button onClick={() => setPortfolio(false)} class="fixed top-0 right-0 flex p-4 focus:outline-none text-red-600 items-center"><Close class="fill-current mr-2 w-[30px]" /></button>
                    <Card />
                </div>}

            {speed &&
                <div class="modal">
                    <button onClick={() => setSpeed(false)} class="fixed top-0 right-0 flex p-4 focus:outline-none text-red-600 items-center"><Close class="fill-current mr-2 w-[30px]" /></button>
                    <Meter />
                </div>}

            {navOn ?
                <menu>
                    <button onClick={props.onBack} class={`flex focus:outline-none text-blue-600 mr-6 items-center`}><Back class="fill-current w-[30px]" /></button>
                    <button onClick={() => setSpeed(true)} class={`flex focus:outline-none text-blue-600 mr-6 items-center`}><Speed class="fill-current w-[30px]" /></button>
                    <button onClick={() => setPortfolio(true)} class={`flex focus:outline-none text-blue-600 mr-6 items-center`}><Portfolio class="fill-current w-[30px]" /></button>
                    <button onClick={() => setNavOn(false)} class={`flex focus:outline-none text-blue-600 mr-6 items-center`}><Left class="fill-current w-[30px]" /></button>
                </menu> :
                <button onClick={() => setNavOn(true)} class={`flex focus:outline-none text-blue-600 mr-6 items-center`}><Right class="fill-current w-[30px]" /></button>}
        </div>
    )
}