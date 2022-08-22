import { createClient } from "supabase";
export * from "supabase";

export const supabase = createClient(
  Deno.env.get("FRESH_ENV_SUPABASE_URL")!,
  Deno.env.get("FRESH_ENV_SUPABASE_KEY")!,
);
