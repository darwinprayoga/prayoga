import { Handlers } from '$fresh/server.ts';

export const handler: Handlers = {
    GET() {
        return new Response("", {
            status: 307,
            headers: { Location: "/world" },
        });
    },
};