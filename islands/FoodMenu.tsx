// deno-lint-ignore-file no-explicit-any
/** @jsx h */
import { h } from "preact";
import { StateUpdater, useEffect, useState } from "preact/hooks";
import { tw } from '@twind';
import { Close } from "../components/Icons.tsx";



export default function FoodMenu(props: { onBack?(): void }) {

    const [index, setIndex] = useState(0)
    const [amount, setAmount] = useState(0)

    const [hero, setHero] = useState<any | null>(false)

    const [burger, setBurger] = useState(0)
    const [burgero, setBurgero] = useState('')
    const [burgerx, setBurgerx] = useState(0)
    const [pizza, setPizza] = useState(0)
    const [pizzao, setPizzao] = useState('')
    const [pizzax, setPizzax] = useState(0)
    const [sushi, setSuhsi] = useState(0)
    const [sushio, setSuhsio] = useState('')
    const [sushix, setSuhsix] = useState(0)

    const [honey, setHoney] = useState(0)
    const [honeyo, setHoneyo] = useState('')
    const [honeyx, setHoneyx] = useState(0)
    const [wood, setWood] = useState(0)
    const [woodo, setWoodo] = useState('')
    const [woodx, setWoodx] = useState(0)
    const [boba, setBoba] = useState(0)
    const [bobao, setBobao] = useState('')
    const [bobax, setBobax] = useState(0)

    useEffect(() => {
        setAmount(burgerx + pizzax + sushix + honeyx + woodx + bobax)
    }, [setAmount, burgerx, pizzax, sushix, honeyx, woodx, bobax])

    const Item = (props: { name: string, price: number, order: number, setOrder: StateUpdater<number>, option: string, setOption: StateUpdater<string>, src: string }) => {
        return (
            <div class={tw`grid grid-cols-5 py-4 w-full`}>
                <img draggable={false} onClick={() => setHero({ src: props.src })} class={tw`pointer w-full rounded-2xl col-span-1`} src={props.src} />
                <menuitem class={tw`justify-center pl-4 col-span-3`}>
                    <section class={tw`flex w-full justify-between`}>
                        <h3>{props.name}</h3>
                        <h3>${props.price}</h3>
                    </section>
                    <input defaultValue={props.option} onChange={(e) => props.setOption(e.currentTarget.value)} class={tw`w-full bg-hint placeholder-darkTrans`} type="text" placeholder="option" />
                </menuitem>
                <menu class={tw`pl-4 justify-between`}>
                    <button onClick={() => props.order > 0 && props.setOrder(props.order - 1)} class={tw`flex px-2 justify-center font-bold text-red-600 focus:outline-none`}>-</button>
                    <h3>{props.order}</h3>
                    <button onClick={() => props.setOrder(props.order + 1)} class={tw`flex px-2 justify-center font-bold text-blue-600 focus:outline-none`}>+</button>
                </menu>

                {hero && <div onClick={() => setHero(false)} class={tw`modal`}><img draggable={false} class={tw`pointer w-full max-w-screen-md`} src={hero.src} /></div>}
            </div>
        )
    }

    const Checkout = (props: { name: string, price: number, order: number, option: string, setTotal: StateUpdater<number>, src: string }) => {

        useEffect(() => {
            props.setTotal(props.price * props.order)
        }, [props.setTotal])

        return (
            <div class={tw`grid grid-cols-5 py-4 w-full`}>
                <img draggable={false} onClick={() => setHero({ src: props.src })} class={tw`pointer h-full rounded-2xl col-span-1`} src={props.src} />
                <menuitem class={tw`justify-center pl-4 col-span-3`}>
                    <section class={tw`flex w-full justify-between`}>
                        <h3>{props.name}</h3>
                        <h3>${props.price * props.order}</h3>
                    </section>
                    <p class={tw`text-sub`}>{props.option}</p>
                </menuitem>
                <menu class={tw`pl-4 justify-center`}>
                    <h1>{props.order}</h1>
                </menu>

                {hero && <div onClick={() => setHero(false)} class={tw`modal`}><img draggable={false} class={tw`pointer w-full max-w-screen-md`} src={hero.src} /></div>}
            </div>
        )
    }

    return (
        <div>
            {props.onBack && <button onClick={props.onBack} class={tw`fixed z-10 top-0 right-0 flex p-4 focus:outline-none text-yellow-500 gap-2 items-center`}><Close class={tw`fill-current w-[30px]`} /></button>}


            <div class={tw`fixed inset-0 flex flex-col items-center bg-red-500`}>

                {index != 1 && <h1 class={tw`m-4`}>FastMeal⚡</h1>}

                {index == 0 &&
                    <main class={tw`w-full h-full bg-white text-sub shadow-xl rounded-t-[32px]`}>

                        <menu>
                            <div class={tw`w-14 h-1 rounded-xl bg-default my-2 animate-pulse`} />
                        </menu>

                        <menuitem class={tw`pb-20 gap-0 divide-y`}>

                            <Item name='Burger' price={99} order={burger} option={burgero} setOption={setBurgero} setOrder={setBurger} src='/fastmeal/burger.avif' />

                            <Item name='Pizza' price={135} order={pizza} option={pizzao} setOption={setPizzao} setOrder={setPizza} src='/fastmeal/pizza.avif' />

                            <Item name='Sushi' price={169} order={sushi} option={sushio} setOption={setSuhsio} setOrder={setSuhsi} src='/fastmeal/sushi.avif' />

                        </menuitem>

                    </main>}

                {index == 1 &&
                    <main class={tw`overflow-auto w-full h-full bg-white text-sub shadow-xl rounded-t-[32px]`}>

                        <menu>
                            <div class={tw`w-14 h-1 rounded-xl bg-default my-2 animate-pulse`} />
                        </menu>

                        <menuitem>

                            <h2 class={tw`text-default`}>Food</h2>

                            {burger > 0 && <Checkout setTotal={setBurgerx} name='Burger' price={99} option={burgero} order={burger} src='/fastmeal/burger.avif' />}

                            {pizza > 0 && <Checkout setTotal={setPizzax} name='Pizza' price={135} option={pizzao} order={pizza} src='/fastmeal/pizza.avif' />}

                            {sushi > 0 && <Checkout setTotal={setSuhsix} name='Sushi' price={169} option={sushio} order={sushi} src='/fastmeal/sushi.avif' />}

                            <h2 class={tw`text-default`}>Drink</h2>

                            {honey > 0 && <Checkout setTotal={setHoneyx} name='Old Honey Barn' price={34} option={honeyo} order={honey} src='/fastmeal/honey.avif' />}

                            {wood > 0 && <Checkout setTotal={setWoodx} name='Woodford Reserve' price={39} option={woodo} order={wood} src='/fastmeal/wood.avif' />}

                            {boba > 0 && <Checkout setTotal={setBobax} name='Hong Kong Boba' price={59} option={bobao} order={boba} src='/fastmeal/boba.avif' />}

                        </menuitem>

                        <div class={tw`divider`} />

                        <section class={tw`flex mt-4 pb-32 justify-between`}>
                            <h1>Amount:</h1>
                            <h1>${amount}</h1>
                        </section>

                    </main>}

                {index == 2 &&
                    <main class={tw`w-full h-full bg-white text-sub shadow-xl rounded-t-[32px]`}>

                        <menu>
                            <div class={tw`w-14 h-1 rounded-xl bg-default my-2 animate-pulse`} />
                        </menu>

                        <menuitem class={tw`pb-20 gap-0 divide-y`}>

                            <Item name='Old Honey Barn' price={34} order={honey} option={honeyo} setOption={setHoneyo} setOrder={setHoney} src='/fastmeal/honey.avif' />

                            <Item name='Woodford Reserve' price={39} order={wood} option={woodo} setOption={setWoodo} setOrder={setWood} src='/fastmeal/wood.avif' />

                            <Item name='Hong Kong Boba' price={59} order={boba} option={bobao} setOption={setBobao} setOrder={setBoba} src='/fastmeal/boba.avif' />

                        </menuitem>
                    </main>}

            </div>

            <div class={tw`fixed flex justify-center bottom-0 left-0 right-0`}>
                <div class={tw`flex shadow-inner rounded-full mb-4 bg-red-500`}>
                    <button onClick={() => setIndex(0)} class={tw`focus:outline-none px-10 text-white flex gap-1 flex-col justify-center items-center`}>
                        <h1>🍔</h1>
                        <p>Food</p>
                    </button>
                    <button onClick={() => setIndex(1)} class={tw`focus:outline-none border(yellow-500 4) p-4 shadow-md bg-white text-yellow-500 rounded-full text-white flex gap-1 flex-col justify-center items-center`}>
                        <h1>🛒</h1>
                    </button>
                    <button onClick={() => setIndex(2)} class={tw`focus:outline-none px-10 text-white flex gap-1 flex-col justify-center items-center`}>
                        <h1>🍺</h1>
                        <p>Drink</p>
                    </button>
                </div>
            </div>
        </div>
    )
}