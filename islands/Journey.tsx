/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw, _color } from '@twind';
import { Branch, Download, Github, Instagram, Linkedin, Right, Star, Twitter } from "./Icons.tsx";



export default function Journey(props: { onNext(): void, onBack(): void }) {

    const [contact, setContact] = useState(false)
    const hide = contact ? 'flex' : 'hidden'

    return (
        <body class={tw`bg-smoke text-black`}>

            <section class={tw`fixed bottom-0 left-0 m-4 flex gap-5 flex-col items-center`}>
                <button onClick={() => open('https://github.com/darwinprayoga')} class={tw`${hide} hover:scale-110 focus:outline-none text-${_color}-600`}><Github class={tw`fill-current w-7`} /></button>
                <button onClick={() => open('https://instagram.com/darwinprayoga')} class={tw`${hide} hover:scale-110 focus:outline-none text-${_color}-600`}><Instagram class={tw`fill-current w-7`} /></button>
                <button onClick={() => open('https://twitter.com/mdarwinp')} class={tw`${hide} hover:scale-110 focus:outline-none text-${_color}-600`}><Twitter class={tw`fill-current w-7`} /></button>
                <button onClick={() => open('https://linkedin.com/in/darwin-prayoga-61a6731b2')} class={tw`${hide} hover:scale-110 focus:outline-none text-${_color}-600`}><Linkedin class={tw`fill-current w-7`} /></button>
                {contact && <div class={tw`h-32 w-[1px] bg-sub`} />}
                <div onClick={() => setContact(!contact)} class={tw`flex pointer h-3 w-3 ${!contact && 'ml-2'}`}>
                    <div class={tw`animate-ping absolute inline-flex h-3 w-3 rounded-full bg-${_color}-400 opacity-75`} />
                    <div class={tw`relative inline-flex rounded-full h-3 w-3 bg-${_color}-600`} />
                </div>
            </section>

            <section onClick={() => open('mailto:darwin.prayoga13@gmail.com')} class={tw`fixed pointer bottom-0 w-min right-0 m-4 flex`}>
                <p class={tw`text-sub hover:text-${_color}-600`}>darwin.prayoga13@gmail.com</p>
            </section>



            <main>
                <nav class={tw`flex justify-between items-center`}>
                    <img onClick={props.onBack} class={tw`w-10 h-10 pointer`} src="/logo.png" />
                    <button onClick={() => location.href = '/resume.pdf'} class={tw`focus:outline-none tracking-wider bg-hint flex gap-2 text-darkTrans py-2 px-4 shadow-inner rounded-lg`}><Download class={tw`fill-current w-5`} />Resume</button>
                </nav>



                <menuitem class={tw`my-12`}>
                    <p class={tw`font-mono text-${_color}-600`}>Hi! let ya'll kno me</p>
                    <h1 class={tw`font-bold text-dark`}>Darwin Prayoga</h1>
                    <h2 class={tw`font-bold text-sub`}>Build up growth things</h2>
                    <p>I`m a UI/UX Designer & Full Stack Developer specializing execute web design & code for any demand to create growth-thinking of digitize experiences.</p>
                </menuitem>



                <section class={tw`grid grid-cols-3 mb-6`}>
                    <div class={tw`flex flex-col col-span-2 justify-start items-start`}>
                        <p class={tw`text-sub`}>Capabilities:</p>
                        <section class={tw`flex w-full justify-center mt-6 gap-6`}>
                            <menuitem>
                                <li><sub>Typescript & JS</sub></li>
                                <li><sub>Node Js</sub></li>
                                <li><sub>HTML / CSS</sub></li>
                            </menuitem>
                            <menuitem>
                                <li><sub>Google Console</sub></li>
                                <li><sub>Figma</sub></li>
                                <li><sub>Adobe PS, AI</sub></li>
                            </menuitem>
                        </section>
                    </div>

                    <div class={tw`col-span-1 ml-2`}>
                        <img onClick={() => setContact(!contact)} class={tw`pointer w-full h-full bg-${_color}-600 border(white 2) shadow-lg rounded-2xl`} src='/profile.png' />
                    </div>
                </section>



                <section class={tw`mb-24`}>
                    <h2 class={tw`font-bold mb-6 tracking-wider text-default`}>Project</h2>
                    <div class={tw`flex mb-6 justify-between items-center bg-white p-4 shadow-lg rounded-2xl w-full`}>
                        <menu class={tw`justify-start items-center`}>
                            <img src='/biofip.png' class={tw`w-12 mr-4`} />
                            <menuitem class={tw`gap-0`}>
                                <h3 class={tw`text-dark`}>Biofip</h3>
                                <p>Self-branding based on NFT by web 3.0</p>
                            </menuitem>
                        </menu>
                        <button onClick={() => open('https://biofip.com')} class={tw`focus:outline-none flex items-center gap-2 bg-${_color}-600 rounded-xl py-1 px-2 text-white`}>OPEN<Right class={tw`fill-current w-5`} /></button>
                    </div>
                    <div class={tw`flex mb-6 justify-between items-center bg-white p-4 shadow-lg rounded-2xl w-full`}>
                        <menu class={tw`justify-start items-center`}>
                            <img src='/logo.png' class={tw`w-12 mr-4`} />
                            <menuitem class={tw`gap-0`}>
                                <h3 class={tw`text-dark`}>Prayoga</h3>
                                <p>specializing execute web design & code for any demand</p>
                            </menuitem>
                        </menu>
                        <button onClick={props.onNext} class={tw`focus:outline-none flex items-center gap-2 bg-${_color}-600 rounded-xl py-1 px-2 text-white`}>OPEN<Right class={tw`fill-current w-5`} /></button>
                    </div>

                    <div class={tw`flex justify-end`}>
                        <h2 class={tw`font-bold mb-6 tracking-wider text-default`}>Work Experiences</h2>
                    </div>
                    <div class={tw`flex mb-6 justify-between items-center bg-white p-4 shadow-lg rounded-2xl w-full`}>
                        <menu class={tw`justify-start items-center`}>
                            <img src='/victory.png' class={tw`w-12 mr-4`} />
                            <menuitem class={tw`gap-0`}>
                                <h3 class={tw`text-dark`}>Victory International</h3>
                                <p>Global financial investment and trading facilities, <sub>as Digital Marketing</sub></p>
                            </menuitem>
                        </menu>
                        <button onClick={() => open('https://vifx.co.id')} class={tw`focus:outline-none flex items-center gap-2 bg-${_color}-600 rounded-xl py-1 px-2 text-white`}>OPEN<Right class={tw`fill-current w-5`} /></button>
                    </div>
                    <div class={tw`flex mb-6 justify-between items-center bg-white p-4 shadow-lg rounded-2xl w-full`}>
                        <menu class={tw`justify-start items-center`}>
                            <img src='/ibf.png' class={tw`w-12 mr-4`} />
                            <menuitem class={tw`gap-0`}>
                                <h3 class={tw`text-dark`}>International Business</h3>
                                <p>Foreign exchange, stock and commodity index provider, <sub>as Human Resource Development</sub></p>
                            </menuitem>
                        </menu>
                        <button onClick={() => open('https://ibftrader.com')} class={tw`focus:outline-none flex items-center gap-2 bg-${_color}-600 rounded-xl py-1 px-2 text-white`}>OPEN<Right class={tw`fill-current w-5`} /></button>
                    </div>

                </section>



                <footer class={tw`mb-16`}>
                    <menuitem class={tw`text-sub hover:text-${_color}-600 pointer items-center`}>
                        <sub>Designed & Built by Darwin Prayoga</sub>
                        <menu class={tw`gap-2 mt-2`}>
                            <Star class={tw`fill-current w-3`} />
                            <sub>100.1k</sub>
                            <Branch class={tw`fill-current w-3`} />
                            <sub>50.3k</sub>
                        </menu>
                    </menuitem>
                </footer>
            </main>
        </body>
    )
}