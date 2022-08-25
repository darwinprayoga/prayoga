/** @jsx h */
import { h } from "preact";
import { tw, _color } from '@twind';
import { useState } from 'preact/hooks';
import { Next } from "../components/Icons.tsx";
import Nav from "../components/Nav.tsx";
import FoodMenu from "./FoodMenu.tsx";
import Fashion from "./Fashion.tsx";



export default function Design(props: { onNext(): void, onBack(): void }) {

    const [index, setIndex] = useState(0)

    return (
        <div>
            {index == 0 &&
                <div>



                    <section class={tw`p-4`}>
                        <p>Looking for Web Development?</p>
                        <sub>Now you are in the right spot.</sub>
                    </section>



                    <main>



                        <div class={tw`flex my-4 flex-col w-full max-w-screen-md items-center`}>

                            <h1 class={tw`mb-12 font-bold tracking-wider`}>Design Concept</h1>



                            <div onClick={() => setIndex(1)} class={tw`flex pointer mb-10`}>
                                <img draggable={false} class={tw`w-auto h-auto rounded-2xl`} src='/fastmeal/thumb.png' />
                                <button class={tw`btnFilled absolute m-2 shadow-xl`}>Food Menu</button>
                            </div>

                            <div onClick={() => setIndex(2)} class={tw`flex pointer mb-10`}>
                                <img draggable={false} class={tw`w-auto h-auto rounded-2xl`} src='/sickkfashion/thumb.png' />
                                <button class={tw`btnFilled absolute m-2 shadow-xl`}>Fashion Catalogue</button>
                            </div>

                        </div>



                    </main>



                    <section class={tw`bg-gradient-to-t from-black to-transparent fixed flex justify-between p-4 w-full bottom-0`}>
                        <Nav onBack={props.onBack} />
                        <button onClick={props.onNext} class={tw`flex focus:outline-none text-${_color}-600 items-center`}>
                            <h3>Next</h3>
                            <Next class={tw`fill-current ml-2 w-[30px]`} />
                        </button>
                    </section>

                </div>}

            {index == 1 && <FoodMenu onBack={() => setIndex(0)} />}

            {index == 2 && <Fashion onBack={() => setIndex(0)} />}
        </div>
    )
}