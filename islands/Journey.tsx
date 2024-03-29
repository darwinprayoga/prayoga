/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw, _color } from '@twind';
import { Branch, Download, Github, Linkedin, Right, Star, Twitter } from "../components/Icons.tsx";
import { useOs } from "../components/Sync.tsx";



export default function Journey(props: { onNext?(): void, onBack?(): void }) {

    const [contact, setContact] = useState(false)
    const hide = contact ? 'flex' : 'hidden'

    useEffect(() => {

        const os = useOs()

        if (os == 'windows') {
            setContact(true)
        } else if (os == 'macos') {
            setContact(true)
        }

    }, [setContact])

    return (
        <div class={tw`fixed inset-0 overflow-y-auto bg-default text-black`}>

            <section class={tw`fixed bottom-0 left-0 m-4 flex flex-col items-center z-20`}>
                <button onClick={() => open('https://www.figma.com/@darwinprayoga')} class={tw`${hide} hover:scale-110 focus:outline-none mb-5`}><img src="/figma.svg" class={tw`w-5`} /></button>
                <button onClick={() => open('https://github.com/darwinprayoga')} class={tw`${hide} hover:scale-110 focus:outline-none text-black mb-5`}><Github class={tw`fill-current w-7`} /></button>
                <button onClick={() => open('https://linkedin.com/in/darwinprayoga')} class={tw`${hide} hover:scale-110 focus:outline-none text-[#0A66C2] mb-5`}><Linkedin class={tw`fill-current w-7`} /></button>
                <button onClick={() => open('https://twitter.com/mdarwinp')} class={tw`${hide} hover:scale-110 focus:outline-none text-[#1D9BF0] mb-5`}><Twitter class={tw`fill-current w-7`} /></button>
                <button onClick={() => open('https://instagram.com/darwinprayoga')} class={tw`${hide} hover:scale-110 focus:outline-none text-white mb-5`}><img draggable={false} src="/instagram.png" class={tw`w-7`} /></button>
                {contact && <div class={tw`h-32 w-[1px] bg-sub mb-5`} />}
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
                    <img draggable={false} onClick={props.onBack ? props.onBack : () => location.href = '/'} class={tw`w-10 h-10 pointer hover:animate-spin`} src="/logo.png" />
                    <button onClick={() => location.href = '/resume.pdf'} class={tw`focus:outline-none tracking-wider bg-default flex text-darkTrans py-2 px-4 shadow-inner rounded-xl`}><Download class={tw`fill-current mr-2 w-5`} />Resume</button>
                </nav>



                <menuitem class={tw`my-12`}>
                    <p class={tw`font-mono text-${_color}-600 animate-bounce`}>Hi!👋, let ya'll kno me</p>
                    <h1 class={tw`font-bold text-dark my-2`}>Darwin Prayoga</h1>
                    <h2 class={tw`font-bold text-sub mb-2 animate-pulse`}>Build up growth things</h2>
                    <menu>
                        <button class={tw`focus:outline-none flex items-center bg-darkTrans rounded-xl py-1 px-2 mr-2`}><b class={tw`tracking-wider text-white`}>🧩 UI/UX Designer</b></button>
                        <button class={tw`focus:outline-none flex items-center bg-darkTrans rounded-xl py-1 px-2`}><b class={tw`tracking-wider text-white`}>🪄 Frontend Developer</b></button>
                    </menu>
                    <p class={tw`text-sub mt-2`}>📌 <a class={tw`pointer`} onClick={() => location.href = "https://goo.gl/maps/dnUuSAauKD3g7PFT9"}>Jakarta, Indonesia</a> • Specialize in executing web design & code for any demand to create growth-thinking of digitized experiences.</p>
                </menuitem>



                <section class={tw`grid grid-cols-3 mb-6`}>
                    <div class={tw`flex flex-col col-span-2 justify-start items-start`}>
                        <p class={tw`text-sub`}>Capabilities:</p>
                        <section class={tw`flex w-full justify-center mt-6`}>
                            <menuitem class={tw`mr-6`}>
                                <li class={tw`mb-2`}><sub>Adobe PS</sub></li>
                                <li class={tw`mb-2`}><sub>Adobe AI</sub></li>
                                <li class={tw`mb-2`}><sub>Figma</sub></li>
                                <li class={tw`mb-2`}><sub>Webflow</sub></li>
                                <li class={tw`mb-2`}><sub>Corel Draw</sub></li>
                            </menuitem>
                            <menuitem>
                                <li class={tw`mb-2`}><sub>JavaScript & TypeScript</sub></li>
                                <li class={tw`mb-2`}><sub>NPM / Node JS</sub></li>
                                <li class={tw`mb-2`}><sub>Git / Github</sub></li>
                                <li class={tw`mb-2`}><sub>HTML & CSS</sub></li>
                                <li class={tw`mb-2`}><sub>React JS & Next JS</sub></li>
                                <li class={tw`mb-2`}><sub>Tailwind CSS</sub></li>
                            </menuitem>
                        </section>
                    </div>

                    <div class={tw`col-span-1 ml-2`}>
                        <img draggable={false} onClick={() => setContact(!contact)} class={tw`pointer w-full bg-${_color}-600 shadow-lg rounded-[32px]`} src='/profile.png' />
                    </div>
                </section>
            </main>



            <section class={tw`bg-smoke shadow-lg mx-auto p-4 rounded-t-[40px] max-w-screen-md`}>

                <menu>
                    <div class={tw`w-14 h-1 rounded-xl bg-default my-2 animate-pulse`} />
                </menu>

                <h2 class={tw`font-bold mb-6 tracking-wider text-default`}>Projects</h2>
                <div class={tw`flex mb-6 justify-between items-center bg-white p-4 rounded-2xl w-full`}>
                    <menu class={tw`justify-start items-center`}>
                        <img draggable={false} src='/biofip.png' class={tw`w-12 mr-4`} />
                        <menuitem>
                            <h3 class={tw`text-dark`}>Biofip</h3>
                            <p>Self-branding based on NFT by web 3.0</p>
                        </menuitem>
                    </menu>
                    <button onClick={() => open('https://biofip.vercel.app')} class={tw`focus:outline-none flex items-center bg-${_color}-600 rounded-xl py-1 px-2 text-white`}>OPEN<Right class={tw`fill-current w-5 ml-2`} /></button>
                </div>
                <div class={tw`flex mb-6 justify-between items-center bg-white p-4 rounded-2xl w-full`}>
                    <menu class={tw`justify-start items-center`}>
                        <img draggable={false} src='/logo.png' class={tw`w-12 mr-4`} />
                        <menuitem>
                            <h3 class={tw`text-dark`}>Prayoga</h3>
                            <p>Specializing execute web design & code for any demand</p>
                        </menuitem>
                    </menu>
                    <button onClick={props.onNext ? props.onNext : () => location.href = '/'} class={tw`focus:outline-none flex items-center bg-${_color}-600 rounded-xl py-1 px-2 text-white`}>OPEN<Right class={tw`fill-current w-5 ml-2`} /></button>
                </div>

                <div class={tw`flex justify-end`}>
                    <h2 class={tw`font-bold mb-6 tracking-wider text-default`}>Work Experiences</h2>
                </div>
                <div class={tw`flex mb-6 justify-between items-center bg-white p-4 rounded-2xl w-full`}>
                    <menu class={tw`justify-start items-center`}>
                        <img draggable={false} src='/victory.png' class={tw`w-12 mr-4`} />
                        <menuitem>
                            <h3 class={tw`text-dark`}>Victory International</h3>
                            <p>Global financial investment and trading facilities, <sub>as a Digital Marketing</sub></p>
                        </menuitem>
                    </menu>
                    <button onClick={() => open('https://vifx.co.id')} class={tw`focus:outline-none flex items-center bg-${_color}-600 rounded-xl py-1 px-2 text-white`}>OPEN<Right class={tw`fill-current w-5 ml-2`} /></button>
                </div>
                <div class={tw`flex mb-6 justify-between items-center bg-white p-4 rounded-2xl w-full`}>
                    <menu class={tw`justify-start items-center`}>
                        <img draggable={false} src='/ibf.png' class={tw`w-12 mr-4`} />
                        <menuitem>
                            <h3 class={tw`text-dark`}>International Business</h3>
                            <p>Foreign exchange, stock and commodity index provider, <sub>as a Frontend Developer</sub></p>
                        </menuitem>
                    </menu>
                    <button onClick={() => open('https://ibftrader.com')} class={tw`focus:outline-none flex items-center bg-${_color}-600 rounded-xl py-1 px-2 text-white`}>OPEN<Right class={tw`fill-current w-5 ml-2`} /></button>
                </div>
                <div class={tw`flex mb-6 justify-between items-center bg-white p-4 rounded-2xl w-full`}>
                    <menu class={tw`justify-start items-center`}>
                        <img draggable={false} src='/esandar.png' class={tw`w-12 mr-4`} />
                        <menuitem>
                            <h3 class={tw`text-dark`}>Esandar Arthamas</h3>
                            <p>Financial market and trade company with commodities product, <sub>as a Frontend Developer</sub></p>
                        </menuitem>
                    </menu>
                    <button onClick={() => open('https://esandar.co.id')} class={tw`focus:outline-none flex items-center bg-${_color}-600 rounded-xl py-1 px-2 text-white`}>OPEN<Right class={tw`fill-current w-5 ml-2`} /></button>
                </div>

                <h2 class={tw`font-bold mb-6 tracking-wider text-default`}>Certificates</h2>
                <div class={tw`flex mb-6 justify-between items-center bg-white p-4 rounded-2xl w-full`}>
                    <menu class={tw`justify-start items-center`}>
                        <img draggable={false} src='/ubsi.png' class={tw`w-12 mr-4`} />
                        <menuitem>
                            <h3 class={tw`text-dark`}>1st Place Winner</h3>
                            <p>Digital campaign championship 34th-anniversary UBSI</p>
                        </menuitem>
                    </menu>
                    <button onClick={() => location.href = '/campaign.pdf'} class={tw`focus:outline-none flex items-center bg-${_color}-600 rounded-xl py-1 px-2 text-white`}>OPEN<Right class={tw`fill-current w-5 ml-2`} /></button>
                </div>

                <div class={tw`flex justify-end`}>
                    <h2 class={tw`font-bold mb-6 tracking-wider text-default`}>Educations</h2>
                </div>
                <div class={tw`flex mb-16 justify-between items-center bg-white p-4 rounded-2xl w-full`}>
                    <menu class={tw`justify-start items-center`}>
                        <img draggable={false} src='/ubsi.png' class={tw`w-12 mr-4`} />
                        <menuitem>
                            <h3 class={tw`text-dark`}>Bachelor of Engineering</h3>
                            <p>Information Technology Department in Bina Sarana Informatika University of Slipi Jakarta</p>
                        </menuitem>
                    </menu>
                    <button onClick={() => open('http://www.bsi.ac.id')} class={tw`focus:outline-none flex items-center bg-${_color}-600 rounded-xl py-1 px-2 text-white`}>OPEN<Right class={tw`fill-current w-5 ml-2`} /></button>
                </div>



                <footer class={tw`mb-16`}>
                    <menuitem onClick={() => open('https://github.com/darwinprayoga/prayoga')} class={tw`text-sub hover:text-${_color}-600 pointer items-center`}>
                        <sub>Designed & Built by Darwin Prayoga</sub>
                        <menu class={tw`mt-2`}>
                            <Star class={tw`fill-current mr-2 w-3`} />
                            <sub class={tw`mr-2`}>100.1k</sub>
                            <Branch class={tw`fill-current mr-2 w-3`} />
                            <sub>50.3k</sub>
                        </menu>
                        <button onClick={() => open('https://www.figma.com/community/file/1144173789761736149')} class={tw`flex hover:scale-110 focus:outline-none mt-4`}><img src="/figma.svg" class={tw`w-3`} /></button>
                    </menuitem>
                </footer>

            </section>



        </div>
    )
}