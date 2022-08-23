/** @jsx h */
import { h } from "preact";
import Head from "../components/Sync.tsx";
import Pricing from '../islands/Pricing.tsx';

export default function Plan() {
    return (
        <div>
            <Head title="Pricing PLan 💸" />
            <Pricing />
        </div>
    )
}