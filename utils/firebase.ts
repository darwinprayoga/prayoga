import { initializeApp } from "firebase/app";
export * from "firebase";

const config = {
  apiKey: Deno.env.get("apiKey"),
  authDomain: Deno.env.get("authDomain"),
  projectId: Deno.env.get("projectId"),
  storageBucket: Deno.env.get("storageBucket"),
  messagingSenderId: Deno.env.get("messagingSenderId"),
  appId: Deno.env.get("appId"),
  measurementId: Deno.env.get("measurementId"),
};

export const app = initializeApp(config);
