import FoodMenu from "../islands/FoodMenu.tsx";
import Head from "../components/Sync.tsx";

export default function FastMeal() {
    return (
        <div>
            <Head title="FastMeal ⚡ by @darwinprayoga" image="/fastmeal/thumb.png" />
            <FoodMenu />
        </div>
    )
}