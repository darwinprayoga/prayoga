/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw, _color } from '@twind';
import Nav from "../components/Nav.tsx";



export default function Pricing(props: { onBack(): void }) {

    const [integrity, setIntegrity] = useState(0)

    const [hadDomain, setHadDomain] = useState(false)
    const [domain, setDomain] = useState('')

    const [cusDesign, setCusDesign] = useState(0)
    const [numPage, setNumPage] = useState(0)
    const [dbCollection, setDbCollection] = useState(0)
    const [apis, setApis] = useState(0)

    const [gSeo, setGSeo] = useState(false)
    const [gAuth, setGAuth] = useState(false)
    const [gAnalytics, setGAnalytics] = useState(false)
    const [gPwa, setGPwa] = useState(false)

    const per = integrity == 1 ? 'actFilled' : 'actBorder'
    const exp = integrity == 2 ? 'actFilled' : 'actBorder'

    return (
        <div>

            <main>
                <div class={tw`flex my-4 flex-col w-full max-w-screen-md items-center`}>

                    <h1 class={tw`mb-12 font-bold tracking-wider`}>Pricing Scheme</h1>

                    <div class={tw`flex mb-10 flex-col w-full justify-center bg-darkTrans rounded-2xl shadow-lg`}>
                        <section class={tw`my-2 w-full flex justify-center`}>
                            <p>Choosing Integrity</p>
                        </section>

                        <div class={tw`divider`} />

                        <div class={tw`grid grid-cols-2`}>

                            <section class={tw`grid p-4 divide-y divide-darkTrans`}>
                                <menuitem class={tw`items-center gap-3`}>
                                    <button onClick={() => setIntegrity(1)} class={tw`${per}`}><h2>⚡</h2></button>
                                    <h3>Performance</h3>
                                    <menu class={tw`justify-end gap-3`}>
                                        <img draggable={false} src="/p1.svg" class={tw`w-5`} />
                                        <img draggable={false} src="/p2.png" class={tw`w-5`} />
                                        <img draggable={false} src="/p3.png" class={tw`w-5`} />
                                        <img draggable={false} src="/p4.svg" class={tw`w-5`} />
                                    </menu>
                                </menuitem>
                            </section>

                            <section class={tw`grid p-4 divide-y divide-darkTrans`}>
                                <menuitem class={tw`items-center gap-3`}>
                                    <button onClick={() => setIntegrity(2)} class={tw`${exp}`}><h2>✨</h2></button>
                                    <h3>Experience</h3>
                                    <menu class={tw`justify-end gap-3`}>
                                        <img draggable={false} src="/e1.png" class={tw`w-5`} />
                                        <img draggable={false} src="/e2.svg" class={tw`w-5`} />
                                        <img draggable={false} src="/e3.png" class={tw`w-5`} />
                                        <img draggable={false} src="/e4.png" class={tw`w-5`} />
                                    </menu>
                                </menuitem>
                            </section>

                        </div>

                    </div>

                    {integrity > 0 &&
                        <div class={tw`flex mb-10 flex-col w-full justify-center bg-darkTrans rounded-2xl shadow-lg`}>
                            <section class={tw`my-2 w-full flex justify-center`}>
                                <p>Custom Domain</p>
                            </section>

                            <div class={tw`divider`} />

                            <menuitem class={tw`p-4`}>
                                <p>{hadDomain ? 'Type your preparation domain' : 'Each domains name has a different price'}</p>
                                <input autoFocus onChange={(e) => setDomain(e.currentTarget.value)} type="text" placeholder="example.com" />
                                <div class={tw`flex w-full justify-between items-center py-2`}>
                                    <sub onClick={() => setHadDomain(!hadDomain)} class={tw`pointer text-${_color}-600`}>{hadDomain ? 'Looking for a new domain!' : 'Already had a domain?'}</sub>
                                    <sub>.com .io .app</sub>
                                </div>
                            </menuitem>

                        </div>}

                    {domain != '' &&
                        <div class={tw`flex mb-10 flex-col w-full justify-center bg-darkTrans rounded-2xl shadow-lg`}>
                            <section class={tw`my-2 w-full flex justify-center`}>
                                <p>Countable</p>
                            </section>

                            <div class={tw`divider`} />

                            <menuitem class={tw`p-4`}>
                                <p>Customize Design</p>
                                <menu class={tw`my-2 w-full`}>
                                    <button onClick={() => setCusDesign(1)} class={tw`${cusDesign == 1 ? 'btnFilled' : 'btnBorder'}`}><p>Already Concept</p></button>
                                    <button onClick={() => setCusDesign(2)} class={tw`${cusDesign == 2 ? 'btnFilled' : 'btnBorder'}`}><p>Request</p></button>
                                </menu>
                                <p>Number of Page</p>
                                <menu class={tw`my-2 w-full`}>
                                    <button onClick={() => setNumPage(1)} class={tw`${numPage == 1 ? 'btnFilled' : 'btnBorder'}`}><li>3-5</li></button>
                                    <button onClick={() => setNumPage(2)} class={tw`${numPage == 2 ? 'btnFilled' : 'btnBorder'}`}><li>6-10</li></button>
                                    <button onClick={() => setNumPage(3)} class={tw`${numPage == 3 ? 'btnFilled' : 'btnBorder'}`}><li>10-20</li></button>
                                </menu>
                                <p>Database Collection</p>
                                <menu class={tw`my-2 w-full`}>
                                    <button onClick={() => setDbCollection(1)} class={tw`${dbCollection == 1 ? 'btnFilled' : 'btnBorder'}`}><li>null</li></button>
                                    <button onClick={() => setDbCollection(2)} class={tw`${dbCollection == 2 ? 'btnFilled' : 'btnBorder'}`}><li>1-3</li></button>
                                    <button onClick={() => setDbCollection(3)} class={tw`${dbCollection == 3 ? 'btnFilled' : 'btnBorder'}`}><li>4-6</li></button>
                                </menu>
                                <p>Dependencies / APIs</p>
                                <menu class={tw`my-2 w-full`}>
                                    <button onClick={() => setApis(1)} class={tw`${apis == 1 ? 'btnFilled' : 'btnBorder'}`}><li>null</li></button>
                                    <button onClick={() => setApis(2)} class={tw`${apis == 2 ? 'btnFilled' : 'btnBorder'}`}><li>10</li></button>
                                    <button onClick={() => setApis(3)} class={tw`${apis == 3 ? 'btnFilled' : 'btnBorder'}`}><li>20</li></button>
                                </menu>
                            </menuitem>

                        </div>}

                    {cusDesign > 0 && numPage > 0 && dbCollection > 0 && apis > 0 &&
                        <div class={tw`flex mb-10 flex-col w-full justify-center bg-darkTrans rounded-2xl shadow-lg`}>
                            <section class={tw`my-2 w-full flex justify-center`}>
                                <p>Extra Pack</p>
                            </section>

                            <div class={tw`divider`} />

                            <menuitem class={tw`p-4`}>
                                <p>Google Console</p>
                                <menu class={tw`my-2 w-full`}>
                                    <button onClick={() => {
                                        setGPwa(false)
                                        setGAnalytics(false)
                                        setGAuth(false)
                                        setGSeo(false)
                                    }} class={tw`${!gAuth && !gSeo && !gAnalytics && !gPwa ? 'btnFilled' : 'btnBorder'}`}><p>null</p></button>
                                    <button onClick={() => setGSeo(!gSeo)} class={tw`${gSeo ? 'btnFilled' : 'btnBorder'}`}><p>SEO</p></button>
                                    <button onClick={() => setGAuth(!gAuth)} class={tw`${gAuth ? 'btnFilled' : 'btnBorder'}`}><p>Authentication</p></button>
                                </menu>
                                <menu class={tw`my-2 w-full`}>
                                    <button onClick={() => setGAnalytics(!gAnalytics)} class={tw`${gAnalytics ? 'btnFilled' : 'btnBorder'}`}><p>Analytics</p></button>
                                    <button onClick={() => setGPwa(!gPwa)} class={tw`${gPwa ? 'btnFilled' : 'btnBorder'}`}><p>PWA</p></button>
                                </menu>
                            </menuitem>

                        </div>}

                </div>
            </main>

            <section class={tw`bg-gradient-to-t from-black to-transparent fixed flex justify-between p-4 w-full bottom-0`}>
                <Nav onBack={props.onBack} />
            </section>

        </div>
    )
}