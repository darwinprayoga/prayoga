/** @jsx h */
import { h } from "preact";
import Fashion from "../islands/Fashion.tsx";
import Head from "../islands/Sync.tsx";

export default function SickkFashion() {
    return (
        <div>
            <Head title="SickkFashion by @darwinprayoga" />
            <Fashion />
        </div>
    )
}