/** @jsx h */
import { h } from "preact";
import Head from "../components/Sync.tsx";
import Journey from '../islands/Journey.tsx';

export default function Plan() {
    return (
        <div>
            <Head title="Muhammad Darwin Prayoga" />
            <Journey />
        </div>
    )
}