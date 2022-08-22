/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

export default function Card() {

    const [toggle, setToggle] = useState(true)
    const year = new Date().getFullYear()
    const daysAgo = () => {
        const today = new Date();
        const createdOn = new Date('8 Aug 2022');
        const msInDay = 24 * 60 * 60 * 1000;

        createdOn.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0)

        const result = (+today - +createdOn) / msInDay
        return result
    }



    return (
        <div class={tw`flex w-[400px] md:w-[450px] mx-4 flex-col justify-center text-center items-center bg-dark rounded-2xl shadow-lg`}>

            <section class={tw`my-2`}>
                <p>darwinprayoga / profile</p>
            </section>
            <div class={tw`divider`} />

            <img draggable={false} class={tw`w-20 md:w-24 rounded-full my-6`} src='/profile.png' />

            <section class={tw`mb-10`}>
                <h2>Darwin Prayoga</h2>
                <p>UI/UX Designer & Full Stack Developer</p>
            </section>

            <section class={tw`mx-6`}>
                <p>Build up growing businesses, agencies, and studios by executing web design & code for any demand to create growth-thinking of digitize experiences.</p>
            </section>

            <div class={tw`grid grid-cols-2 gap-4 pt-6`}>
                {toggle ?
                    <menuitem onClick={() => setToggle(!toggle)} class={tw`items-end pointer`}>
                        <p>Portfolio</p>
                        <sub>Contact</sub>
                    </menuitem> :
                    <menuitem onClick={() => setToggle(!toggle)} class={tw`items-end pointer`}>
                        <p>Contact</p>
                        <sub>Portfolio</sub>
                    </menuitem>}
                {toggle ?
                    <menuitem>
                        <li class={tw`pointer`} onClick={() => open('https://biofip.com')}>Biofip</li>
                        <li class={tw`pointer`} onClick={() => location.reload()}>This Site!</li>
                    </menuitem> :
                    <menuitem>
                        <li class={tw`pointer`} onClick={() => open('https://instagram.com/darwinprayoga')}>Instagram</li>
                        <li class={tw`pointer`} onClick={() => open('mailto:darwin.prayoga13@gmail.com')}>Google Mail</li>
                    </menuitem>}
            </div>

            <section class={tw`my-6`}>
                <sub>©2002-{year} Darwin Prayoga, All rights reserved.<br />Site created {daysAgo()} days ago</sub>
            </section>

        </div>
    )
}