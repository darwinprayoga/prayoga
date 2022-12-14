/** @jsx h */
import { h } from "preact";
import { useEffect } from "preact/hooks";

export const theDomain = 'https://prayoga.deno.dev/'



export default function Head(props: { title?: string, image?: string }) {

    useEffect(() => {

        const inputElem = document.querySelector('input');

        inputElem?.addEventListener('input', () => {
            console.log(inputElem.value)
        })

        addEventListener('contextmenu', (e) => {
            e.preventDefault()
        })

    }, [])



    const desc = "Darwin Prayoga: Get your own Pokemon now! & i bet u 🫵, to try this Site performance."

    return (
        <head>

            <title>{props.title || 'Darwin Prayoga'}</title>

            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

            <link rel="shortcut icon" href="/favicon.ico" />

            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>



            <meta name="description" content="Darwin Prayoga`s Portfolio and Open Source. Contribute to darwinprayoga/prayoga development by creating an account on GitHub." />

            <meta property="og:url" content={theDomain} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={props.title || 'Darwin Prayoga'} />
            <meta property="og:description" content={desc} />
            <meta property="og:image" content={props.image || '/thumb.png'} />


            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content={theDomain} />
            <meta property="twitter:url" content={theDomain} />
            <meta name="twitter:title" content={props.title || 'Darwin Prayoga'} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content={props.image || '/thumb.png'} />



        </head>
    )
}



export const Lottie = (props: { src: string }) => {
    //@ts-ignore: any
    return <lottie-player src={props.src} background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay />
}





export type OS = 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux';

function getOS(): OS {
    const { userAgent } = navigator;
    const macosPlatforms = /(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i;
    const windowsPlatforms = /(Win32)|(Win64)|(Windows)|(WinCE)/i;
    const iosPlatforms = /(iPhone)|(iPad)|(iPod)/i;

    if (macosPlatforms.test(userAgent)) {
        return 'macos';
    }
    if (iosPlatforms.test(userAgent)) {
        return 'ios';
    }
    if (windowsPlatforms.test(userAgent)) {
        return 'windows';
    }
    if (/Android/i.test(userAgent)) {
        return 'android';
    }
    if (/Linux/i.test(userAgent)) {
        return 'linux';
    }

    return 'undetermined';
}

export function useOs(): OS {
    if (typeof window !== 'undefined') {
        return getOS();
    }

    return 'undetermined';
}