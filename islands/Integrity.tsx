/** @jsx h */
import { h } from "preact";
import { tw, _color } from '@twind';
import { useState } from 'preact/hooks';
import { Next } from "../components/Icons.tsx";
import Nav from "../components/Nav.tsx";



export default function Integrity(props: { onNext(): void, onBack(): void }) {

    const [per, setPer] = useState('flex')
    const [exp, setExp] = useState('hidden')

    const [perOn, setPerOn] = useState('cirBorder')
    const [expOn, setExpOn] = useState('cirPlain')



    function performance() {
        setPer('flex')
        setExp('hidden')
        setPerOn('cirBorder')
        setExpOn('cirPlain')
    }

    function experience() {
        setPer('hidden')
        setExp('flex')
        setPerOn('cirPlain')
        setExpOn('cirBorder')
    }



    return (
        <div>



            <section class={tw`modal px-4`}>
                <div class={tw`flex flex-col w-full max-w-screen-md items-center`}>

                    <h1 class={tw`my-12 font-bold tracking-wider`}>Integrity Concept</h1>



                    <div class={tw`${per} mb-8 flex-col w-full justify-center bg-darkTrans rounded-2xl shadow-lg`}>
                        <section class={tw`my-2 w-full flex justify-center`}>
                            <p>Performance⚡</p>
                        </section>

                        <div class={tw`divider`} />

                        <section class={tw`grid mx-4 divide-y divide-darkTrans`}>
                            <menu class={tw`justify-start py-4`}>
                                <button class={tw`actFilled mr-6`}><h2>⌛</h2></button>
                                <menuitem>
                                    <h3>No Page Load</h3>
                                    <p>Just-in-time rendering on the edge</p>
                                </menuitem>
                            </menu>
                            <menu class={tw`justify-start py-4`}>
                                <button class={tw`actFilled mr-6`}><h2>☁️</h2></button>
                                <menuitem>
                                    <h3>Lightweight</h3>
                                    <p>Zero runtime overhead</p>
                                </menuitem>
                            </menu>
                            <div class={tw`flex justify-between items-center py-2`}>
                                <sub>: Client App / User Access Usage</sub>
                                <menu class={tw`justify-end`}>
                                    <img draggable={false} src="/p1.svg" class={tw`mr-3 w-5`} />
                                    <img draggable={false} src="/p2.png" class={tw`mr-3 w-5`} />
                                    <img draggable={false} src="/p3.png" class={tw`mr-3 w-5`} />
                                    <img draggable={false} src="/p4.svg" class={tw`w-5`} />
                                </menu>
                            </div>
                        </section>
                    </div>



                    <div class={tw`${exp} mb-8 flex-col w-full justify-center bg-darkTrans rounded-2xl shadow-lg`}>
                        <section class={tw`my-2 w-full flex justify-center`}>
                            <p>Experience✨</p>
                        </section>

                        <div class={tw`divider`} />

                        <section class={tw`grid mx-4 divide-y divide-darkTrans`}>
                            <menu class={tw`justify-start py-4`}>
                                <button class={tw`actFilled mr-6`}><h2>🪀</h2></button>
                                <menuitem>
                                    <h3>Full Animaiton</h3>
                                    <p>Freedom of browser with extends</p>
                                </menuitem>
                            </menu>
                            <menu class={tw`justify-start py-4`}>
                                <button class={tw`actFilled mr-6`}><h2>🛒</h2></button>
                                <menuitem>
                                    <h3>Support a Lot</h3>
                                    <p>Get a lot of components & access</p>
                                </menuitem>
                            </menu>
                            <div class={tw`flex justify-between items-center py-2`}>
                                <sub>: For Consumer & Branding Platform</sub>
                                <menu class={tw`justify-end`}>
                                    <img draggable={false} src="/e1.png" class={tw`mr-3 w-5`} />
                                    <img draggable={false} src="/e2.svg" class={tw`mr-3 w-5`} />
                                    <img draggable={false} src="/e3.png" class={tw`mr-3 w-5`} />
                                    <img draggable={false} src="/e4.png" class={tw`w-5`} />
                                </menu>
                            </div>
                        </section>
                    </div>



                    <menu>
                        <button onClick={performance} class={tw`${perOn} mr-3`}>⚡</button>
                        <button onClick={experience} class={tw`${expOn}`}>✨</button>
                    </menu>

                </div>
            </section>



            <section class={tw`fixed p-4 top-0 left-0`}>
                <p>Looking for Web Development?</p>
                <sub>Now you are in the right spot.</sub>
            </section>



            <section class={tw`fixed flex justify-between w-full p-4 bottom-0`}>
                <Nav onBack={props.onBack} />
                <button onClick={props.onNext} class={tw`flex focus:outline-none text-${_color}-600 items-center`}>
                    <h3>Next</h3>
                    <Next class={tw`fill-current ml-2 w-[30px]`} />
                </button>
            </section>



        </div>
    )
}