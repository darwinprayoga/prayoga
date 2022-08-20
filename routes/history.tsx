// deno-lint-ignore-file no-explicit-any
/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from '$fresh/server.ts';
import { app } from '@firebase';
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';

import Pokedata from '../islands/Pokedata.tsx';



const fire = getFirestore(app)

export const handler: Handlers<any | null> = {
    async GET(_, ctx) {

        const q = query(collection(fire, 'pokedata'), orderBy('time'))
        const db = await getDocs(q)

        const data = db.docs.map(x => ({ ...x.data(), username: x.id }))
        return ctx.render(data)

    },
};



export default function History({ data }: PageProps<any | null>) {

    return (
        <Pokedata data={data} />
    )
}