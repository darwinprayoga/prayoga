import { HandlerContext } from "$fresh/server.ts";
import { supabase } from '@supabase'

const { data, error } = await supabase
  .from('pokedata')
  .select('*')

export const handler = (_req: Request, _ctx: HandlerContext): Response => {

  if (data) {
    return new Response(JSON.stringify(data));
  } else {
    return new Response(JSON.stringify(error));
  }

};
