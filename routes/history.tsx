// deno-lint-ignore-file no-explicit-any
/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from '$fresh/server.ts';
import { supabase } from '@supabase'

import Pokedata from '../islands/Pokedata.tsx';



export const handler: Handlers<any | null> = {
    async GET(_, ctx) {

        const { data, error } = await supabase
            .from('pokedata')
            .select('*')

        if (data) {
            return ctx.render(data)
        } else {
            console.error(error)
            return ctx.render(null)
        }

    },
};



export default function History({ data }: PageProps<any | null>) {

    return (
        <Pokedata data={data} />
    )
}