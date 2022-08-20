/** @jsx h */
import { h } from "preact";
import { useState } from 'preact/hooks';
import Design from "./Design.tsx";
import Integrity from "./Integrity.tsx";
import Intro from "./Intro.tsx";
import Journey from "./Journey.tsx";
import Option from "./Option.tsx";
import Head from "./Sync.tsx";



export default function Page() {

    const [index, setIndex] = useState(0)

    return (
        <div>

            <Head title='Darwin Prayoga' />



            {index == 0 && <Intro onBottom={() => setIndex(1)} onNext={() => setIndex(2)} />}
            {index == 1 && <Journey onNext={() => setIndex(2)} onBack={() => setIndex(0)} />}
            {index == 2 && <Design onNext={() => setIndex(3)} onBack={() => setIndex(0)} />}
            {index == 3 && <Integrity onNext={() => setIndex(4)} onBack={() => setIndex(2)} />}
            {index == 4 && <Option onBack={() => setIndex(3)} />}



        </div>
    )
}