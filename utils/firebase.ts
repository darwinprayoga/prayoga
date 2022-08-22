import { initializeApp } from "firebase/app";
export * from "firebase";

Deno.env.set("apiKey", "AIzaSyDuFWyyIDN1xuu84K9H2trYSW9YQOubFnI");
Deno.env.set("authDomain", "prayoga-13.firebaseapp.com");
Deno.env.set("projectId", "prayoga-13");
Deno.env.set("storageBucket", "prayoga-13.appspot.com");
Deno.env.set("messagingSenderId", "996298428194");
Deno.env.set("appId", "1:996298428194:web:d9e8085737c0e1aa9a9f7b");
Deno.env.set("measurementId", "G-VT8MSGD9DT");

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
