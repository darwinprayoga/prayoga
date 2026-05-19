import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
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
          700: "#0075F5"
        },
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
    }
  },
  plugins: [
    plugin(function({ addComponents, addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'Gilroy-Bold',
            fontWeight: '400',
            src: 'local("Gilroy-Bold"), url("/font/Gilroy-Bold.woff") format("woff")'
          },
          {
            fontFamily: 'Gilroy-Medium',
            fontWeight: '400',
            src: 'local("Gilroy-Medium"), url("/font/Gilroy-Medium.woff") format("woff")'
          }
        ],
        'html': { '@apply bg-black text-white tracking-wider font-sans select-none': {} },
        'main': { '@apply p-4 mx-auto max-w-screen-md': {} },
        'h1': { '@apply text-3xl md:text-4xl': {} },
        'h2': { '@apply text-2xl md:text-3xl': {} },
        'h3': { '@apply text-xl md:text-2xl': {} },
        'a': { '@apply text-blue-600 text-xs md:text-sm underline': {} },
        'p': { '@apply text-default text-xs md:text-sm': {} },
        'b': { '@apply text-default text-xs md:text-sm font-bold': {} },
        'menu': { '@apply flex m-0 p-0 justify-evenly items-center': {} },
        'menuitem': { '@apply flex flex-col m-0 p-0 justify-start items-start': {} },
        'input': { '@apply focus:outline-none tracking-wider bg-darkTrans p-2 rounded-lg w-full placeholder-hint': {} }
      });
      addComponents({
        '.btnPlain': { '@apply flex py-3 px-6 justify-center font-bold tracking-wider rounded-xl text-blue-600 focus:outline-none border-transparent border-2': {} },
        '.btnFilled': { '@apply flex py-3 px-6 justify-center font-bold tracking-wider rounded-xl focus:outline-none border-transparent border-2 bg-blue-600 hover:bg-blue-700 text-white': {} },
        '.btnBorder': { '@apply flex py-3 px-6 justify-center font-bold tracking-wider rounded-xl text-blue-600 focus:outline-none border-blue-600 border-2': {} },
        '.actFilled': { '@apply flex p-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white focus:outline-none border-transparent border-2': {} },
        '.actBorder': { '@apply flex p-2 rounded-xl text-white focus:outline-none bg-transparent border-blue-600 border-2': {} },
        '.cirPlain': { '@apply flex p-2 rounded-full text-white focus:outline-none border-transparent border-2': {} },
        '.cirBorder': { '@apply flex p-2 rounded-full text-white focus:outline-none border-blue-600 border-2': {} },
        '.card': { '@apply grid divide-y divide-darkTrans bg-darkTrans p-4 rounded-2xl shadow-lg': {} },
        '.divider': { '@apply w-full h-[1px] bg-darkTrans': {} },
        '.active': { '@apply border-blue-600 border-2': {} },
        '.pointer': { '@apply cursor-pointer': {} },
        '.modal': { '@apply fixed bg-darkModal inset-0 flex justify-center items-center': {} },
      });
    })
  ]
} satisfies Config;
