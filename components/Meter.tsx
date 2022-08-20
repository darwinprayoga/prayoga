/** @jsx h */
import { h } from "preact";
import { tw } from '@twind';
import { theDomain } from "./Sync.tsx";

export default function Meter() {
    return (
        <div class={tw`flex w-full max-w-screen-md mx-4 flex-col justify-center text-center items-center bg-dark rounded-2xl shadow-lg`}>
            <section class={tw`flex items-center my-4`}>
                <h1>PageSpeed</h1>
                <img onClick={() => open(`https://pagespeed.web.dev/report?url=${theDomain}`)} src='/pagespeed.png' class={tw`pointer ml-4 w-8 h-8`} />
            </section>

            <div class={tw`divider`} />

            <section>
                <div class={tw`w-32 h-32 flex justify-center items-center my-6 rounded-full bg-green-200 text-green-700 border(stabilo 4)`}>
                    <h1>100</h1>
                </div>
                <h3>Performance</h3>
            </section>

            <section class={tw`grid grid-cols-2 gap-8 my-8`}>
                <menuitem>
                    <p>Speed Index</p>
                    <p class={tw`text-stabilo`}>0.7s</p>
                    <p>Largest Contentful Paint</p>
                    <p class={tw`text-stabilo`}>0.7s</p>
                </menuitem>
                <menuitem>
                    <p>Time to Interactive</p>
                    <p class={tw`text-stabilo`}>0.7s</p>
                    <p>Total Blocking Time</p>
                    <p class={tw`text-stabilo`}>0ms</p>
                </menuitem>
            </section>
        </div>
    )
}