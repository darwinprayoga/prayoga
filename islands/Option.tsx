/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from '@twind';
import Nav from "./Nav.tsx";
import Server from "./Server.tsx";
import Pricing from "./Pricing.tsx";



export default function Option(props: { onBack(): void }) {

    const [index, setIndex] = useState(0)

    return (
        <div>

            {index == 0 &&
                <section>

                    <div class={tw`modal px-4`}>
                        <menu class={tw`w-full`}>
                            <button onClick={() => setIndex(1)} class={tw`focus:outline-none hover:scale-105 flex gap-1 flex-col justify-center items-center`}>
                                <h1>🔮</h1>
                                <p>Poke`ground</p>
                            </button>
                            <button onClick={() => setIndex(2)} class={tw`focus:outline-none hover:scale-105 flex gap-1 flex-col justify-center items-center`}>
                                <h1>💸</h1>
                                <p>Go Pricing</p>
                            </button>
                        </menu>
                    </div>

                    <section class={tw`fixed flex justify-between w-full p-4 bottom-0`}>
                        <Nav onBack={props.onBack} />
                    </section>

                </section>}

            {index == 1 && <Server onBack={() => setIndex(0)} />}

            {index == 2 && <Pricing onBack={() => setIndex(0)} />}

        </div>
    )
}