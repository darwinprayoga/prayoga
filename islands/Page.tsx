import { useState } from 'preact/hooks';
import Intro from "./Intro.tsx";
import Journey from "./Journey.tsx";
import Pricing from "./Pricing.tsx";
import Head from "../components/Sync.tsx";

export default function Page() {
    const [index, setIndex] = useState(0)

    return (
        <div>
            <Head title='Darwin Prayoga' />

            <div key={index} class="animate-fade-in-up fixed inset-0 w-full h-full">
                {index == 0 && <Intro onBottom={() => setIndex(1)} onNext={() => setIndex(2)} />}
                {index == 1 && <Journey onNext={() => setIndex(2)} onBack={() => setIndex(0)} />}
                {index == 2 && <Pricing onBack={() => setIndex(0)} />}
            </div>
        </div>
    )
}