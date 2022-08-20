import { HandlerContext } from "$fresh/server.ts";

const API = [
  "APIs coming soon!",
];

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const body = API[0];
  return new Response(body);
};
