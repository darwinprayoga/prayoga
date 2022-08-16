/** @jsx h */
import { h } from "preact";
import FoodMenu from "../islands/FoodMenu.tsx";
import Head from "../islands/Sync.tsx";

export default function FastMeal() {
    return (
        <div>
            <Head title="FastMeal ⚡ by @darwinprayoga" />
            <FoodMenu />
        </div>
    )
}