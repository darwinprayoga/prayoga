/** @jsx h */
import { h } from "preact";
import { tw } from '@twind';
import { Close } from "../components/Icons.tsx";

export default function Fashion(props: { onBack?(): void }) {
    return (
        <div class={tw`fixed inset-0 bg-[#0C0C0C] overflow-auto`}>
            {props.onBack && <button onClick={props.onBack} class={tw`fixed z-10 top-0 right-0 flex p-4 focus:outline-none text-[#FF4F2A] mr-2 items-center`}><Close class={tw`fill-current w-[30px]`} /></button>}

            <img draggable={false} class={tw`fixed left-0 h-full`} src="/sickkfashion/frame1.svg" />

            <div class={tw`p-4 grid grid-cols-2`}>
                <img draggable={false} class={tw`absolute right-2 w-80`} src="/sickkfashion/frame2.svg" />

                <div class={tw`col-span-2 sm:col-span-1`}>
                    <img draggable={false} class={tw`mt-40 w-80`} src="/sickkfashion/image1.png" />

                    <img draggable={false} class={tw`mt-10 w-80`} src="/sickkfashion/frame3.svg" />
                </div>

                <div class={tw`col-span-2 sm:col-span-1`}>
                    <img draggable={false} class={tw`my-20`} src="/sickkfashion/image2.png" />

                    <img draggable={false} src="/sickkfashion/image3.png" />
                </div>

                <img draggable={false} class={tw`col-span-2 mx-auto my-20`} src="/sickkfashion/image4.png" />

                <img draggable={false} class={tw`col-span-2 mx-auto mt-10`} src="/sickkfashion/image5.png" />
            </div>
        </div>
    )
}