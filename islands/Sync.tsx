/** @jsx h */
import { h } from "preact";
import { useEffect } from "preact/hooks";



export default function Head(props: { title?: string }) {

    useEffect(() => {

        addEventListener('contextmenu', (e) => {
            e.preventDefault()
        })

    }, [])

    return (
        <head>

            <title>{props.title || 'Darwin Prayoga'}</title>

            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

            <link rel="shortcut icon" href="/favicon.ico" />

            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

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