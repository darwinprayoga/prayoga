import { useState } from "preact/hooks";

export default function Card() {
  const [toggle, setToggle] = useState(true);
  const year = new Date().getFullYear();
  const daysAgo = () => {
    const today = new Date();
    const createdOn = new Date("8 Aug 2022");
    const msInDay = 24 * 60 * 60 * 1000;

    createdOn.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const result = (+today - +createdOn) / msInDay;
    return result;
  };

  return (
    <div class="flex w-[400px] md:w-[450px] mx-4 flex-col justify-center text-center items-center bg-dark rounded-2xl shadow-lg">
      <section class="my-2">
        <p>darwinprayoga / profile</p>
      </section>
      <div class="divider" />

      <img
        draggable={false}
        class="w-20 md:w-24 rounded-full my-6"
        src="/profile.png"
      />

      <section class="mb-10">
        <h2>Darwin Prayoga</h2>
        <p>UI/UX Designer & Frontend Developer</p>
      </section>

      <section class="mx-6">
        <p>
          Build up growing businesses, agencies, and studios by executing web
          design & code for any demand to create growth-thinking of digitize
          experiences.
        </p>
      </section>

      <div class="grid grid-cols-2 pt-6">
        {toggle
          ? (
            <menuitem
              onClick={() => setToggle(!toggle)}
              class="items-end mr-4 pointer"
            >
              <p class="mb-1">Portfolio</p>
              <sub>Contact</sub>
            </menuitem>
          )
          : (
            <menuitem
              onClick={() => setToggle(!toggle)}
              class="items-end mr-4 pointer"
            >
              <p class="mb-1">Contact</p>
              <sub>Portfolio</sub>
            </menuitem>
          )}
        {toggle
          ? (
            <menuitem>
              <li
                class="pointer"
                onClick={() => open("https://biofip.com")}
              >
                Biofip
              </li>
              <li class="pointer" onClick={() => location.reload()}>
                This Site!
              </li>
            </menuitem>
          )
          : (
            <menuitem>
              <li
                class="pointer"
                onClick={() => open("https://instagram.com/darwinprayoga")}
              >
                Instagram
              </li>
              <li
                class="pointer"
                onClick={() => open("mailto:darwin.prayoga13@gmail.com")}
              >
                Google Mail
              </li>
            </menuitem>
          )}
      </div>

      <section class="my-6">
        <sub>
          © 2022 Darwin Prayoga, All rights reserved.<br />Updated. 05/19/2026
        </sub>
      </section>
    </div>
  );
}
