import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, Configuration, setup } from "twind";

import { useOs } from "../islands/Sync.tsx";

export * from "twind";

const _mobile = () => {
  const os = useOs();
  if (os == "ios") {
    return true;
  } else if (os == "android") {
    return true;
  } else {
    return false;
  }
};

export const _color = "blue";

export const config: Configuration = {
  darkMode: "class",
  mode: "warn",

  theme: {
    extend: {
      fontFamily: {
        bold: '"Gilroy-Bold"',
        sans: '"Gilroy-Medium"',
      },
      colors: {
        dark: "#1C1C1F",
        darkModal: "rgba(0, 0, 0, 0.5)",
        darkTrans: "rgba(118, 118, 128, 0.24)",
        default: "#D1D1D6",
        smoke: "#F2F2F6",
        sub: "#6C6C70",
        hint: "rgba(235, 235, 245, 0.6)",
        stabilo: "#32D74B",
        blue: {
          600: "#007AFF",
        },
      },
    },
  },

  plugins: {
    btnPlain:
      `flex py-3 px-6 justify-center font-bold tracking-wider rounded-xl text-${_color}-600 focus:outline-none border(transparent 2)`,
    btnFilled:
      `flex py-3 px-6 justify-center font-bold tracking-wider rounded-xl focus:outline-none border(transparent 2) bg-${_color}(600 hover:700) text-white`,
    btnBorder:
      `flex py-3 px-6 justify-center font-bold tracking-wider rounded-xl text-${_color}-600 focus:outline-none border(${_color}-600 2)`,
    actFilled:
      `flex p-2 rounded-xl bg-${_color}(600 hover:700) text-white focus:outline-none border(transparent 2)`,
    actBorder:
      `flex p-2 rounded-xl text-white focus:outline-none bg-transparent border(${_color}-600 2)`,
    cirPlain:
      `flex p-2 rounded-full text-white focus:outline-none border(transparent 2)`,
    cirBorder:
      `flex p-2 rounded-full text-white focus:outline-none border(${_color}-600 2)`,
    card:
      `grid divide-y divide-darkTrans bg-darkTrans p-4 rounded-2xl shadow-lg`,
    divider: `w-full h-[1px] bg-darkTrans`,
    active: `border(${_color}-600 2)`,
    pointer: `${_mobile() ? "cursor-auto" : "cursor-pointer"}`,
    modal: `fixed bg-darkModal inset-0 flex justify-center items-center`,
  },

  preflight: {
    ":global": {
      button: {
        "cursor": _mobile() ? "auto" : "pointer",
      },
      a: {
        "cursor": _mobile() ? "auto" : "pointer",
      },
    },
    "@font-face": [
      {
        fontFamily: "Gilroy-Bold",
        fontStyle: "normal",
        fontWeight: 400,
        src:
          `local('Gilroy-Bold'), url('https://fonts.cdnfonts.com/s/16219/Gilroy-Bold.woff') format('woff')`,
      },
      {
        fontFamily: "Gilroy-Medium",
        fontStyle: "normal",
        fontWeight: 400,
        src:
          `local('Gilroy-Medium'), url('https://fonts.cdnfonts.com/s/16219/Gilroy-Medium.woff') format('woff')`,
      },
    ],

    html: apply(
      `bg-black text-white tracking-wider font-sans select-none`,
    ),
    main: apply(`p-4 mx-auto max-w-screen-md`),
    h1: apply(`text(3xl md:4xl)`),
    h2: apply(`text(2xl md:3xl)`),
    h3: apply(`text(xl md:2xl)`),
    sub: apply(`text(sub [10px] md:xs)`),
    li: apply(`list-inside text(default xs md:sm)`),
    a: apply(`text(${_color}-600 xs md:sm) underline`),
    p: apply(`text(default xs md:sm)`),
    b: apply(`text(default xs md:sm) font-bold`),
    span: apply(`flex w-min bg-${_color}-600 rounded-full px-4 py-1`),
    menu: apply(`flex m-0 p-0 justify-evenly items-center`),
    menuitem: apply(`flex flex-col m-0 p-0 justify-start items-start gap-2`),
    input: apply(
      `focus:outline-none tracking-wider bg-darkTrans p-2 rounded-lg w-full placeholder-hint`,
    ),
  },
};
if (IS_BROWSER) setup(config);
