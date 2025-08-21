<template>
  <section :class="{ dark: isDark }">
    <div class="pt-11 flex flex-col items-center gap-6">
      <img src="../assets/profileimg.png" alt="" class="w-30 h-30" />
      <p class="font-bold text-4xl">Username</p>
    </div>
    <div class="flex flex-col gap-6">
      <div
        class="w-full h-13 rounded-lg hover:bg-[#469F4E] cursor-pointer text-2xl items-center px-4 hover:text-white transition-all duration-150 flex gap-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32m-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96z"
          />
        </svg>
        <p>Savat</p>
      </div>
      <div
        class="w-full h-13 rounded-lg hover:bg-[#469F4E] cursor-pointer text-2xl items-center px-4 hover:text-white transition-all duration-150 flex gap-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
          />
        </svg>
        <p>Saralangan</p>
      </div>
      <div
        class="w-full h-13 rounded-lg hover:bg-[#469F4E] cursor-pointer text-2xl items-center px-4 hover:text-white transition-all duration-150 flex gap-4"
      >
        <button @click="toggleTheme">
          <div v-if="isDark" class="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill-opacity="0"
                d="M15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"
                fill="currentColor"
              >
                <animate
                  id="SVGiNMVtdZD"
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.6s;SVGiNMVtdZD.begin+6s"
                  dur="0.4s"
                  values="0;1"
                />
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="SVGiNMVtdZD.begin+2.2s"
                  dur="0.4s"
                  values="1;0"
                />
              </path>
              <path
                fill-opacity="0"
                d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"
                fill="currentColor"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="SVGiNMVtdZD.begin+3s"
                  dur="0.4s"
                  values="0;1"
                />
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="SVGiNMVtdZD.begin+5.2s"
                  dur="0.4s"
                  values="1;0"
                />
              </path>
              <path
                fill-opacity="0"
                d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"
                fill="currentColor"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="SVGiNMVtdZD.begin+0.4s"
                  dur="0.4s"
                  values="0;1"
                />
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="SVGiNMVtdZD.begin+2.8s"
                  dur="0.4s"
                  values="1;0"
                />
              </path>
              <path
                fill-opacity="0"
                d="M20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"
                fill="currentColor"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="SVGiNMVtdZD.begin+3.4s"
                  dur="0.4s"
                  values="0;1"
                />
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="SVGiNMVtdZD.begin+5.6s"
                  dur="0.4s"
                  values="1;0"
                />
              </path>
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <g>
                  <path
                    stroke-dasharray="2"
                    stroke-dashoffset="4"
                    d="M12 21v1M21 12h1M12 3v-1M3 12h-1"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.2s"
                      values="4;2"
                    />
                  </path>
                  <path
                    stroke-dasharray="2"
                    stroke-dashoffset="4"
                    d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.2s"
                      dur="0.2s"
                      values="4;2"
                    />
                  </path>
                  <set
                    fill="freeze"
                    attributeName="opacity"
                    begin="0.5s"
                    to="0"
                  />
                </g>
                <path
                  d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                  opacity="0"
                >
                  <set
                    fill="freeze"
                    attributeName="opacity"
                    begin="0.5s"
                    to="1"
                  />
                </path>
              </g>
              <mask id="SVGBsVgBdfm">
                <circle cx="12" cy="12" r="12" fill="#fff" />
                <circle cx="12" cy="12" r="4">
                  <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="4;8"
                  />
                </circle>
                <circle cx="22" cy="2" r="3" fill="#fff">
                  <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                  />
                  <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                  />
                  <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="3;12"
                  />
                </circle>
                <circle cx="22" cy="2" r="1">
                  <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                  />
                  <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                  />
                  <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="1;10"
                  />
                </circle>
              </mask>
              <circle
                cx="12"
                cy="12"
                r="6"
                mask="url(#SVGBsVgBdfm)"
                fill="currentColor"
              >
                <animate
                  fill="freeze"
                  attributeName="r"
                  begin="0.1s"
                  dur="0.4s"
                  values="6;10"
                />
                <set
                  fill="freeze"
                  attributeName="opacity"
                  begin="0.5s"
                  to="0"
                />
              </circle>
            </svg>
            <p>Dark mode</p>
          </div>
          <div v-else class="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="2"
                  stroke-dashoffset="2"
                  d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
                >
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.2s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.2s"
                    values="2;0"
                  />
                </path>
                <path
                  stroke-dasharray="2"
                  stroke-dashoffset="2"
                  d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.4s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.4s"
                    dur="0.2s"
                    values="2;0"
                  />
                </path>
                <animateTransform
                  attributeName="transform"
                  dur="30s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </g>
              <g fill="currentColor">
                <path
                  d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.4s"
                    values="1;0"
                  />
                </path>
                <path
                  d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.2s"
                    dur="0.4s"
                    values="1;0"
                  />
                </path>
              </g>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
              >
                <set
                  fill="freeze"
                  attributeName="opacity"
                  begin="0.6s"
                  to="0"
                />
              </path>
              <mask id="SVGJJmQCcYl">
                <circle cx="12" cy="12" r="12" fill="#fff" />
                <circle cx="12" cy="12" r="8">
                  <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="8;4"
                  />
                </circle>
                <circle cx="18" cy="6" r="12" fill="#fff">
                  <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                  />
                  <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                  />
                  <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="12;3"
                  />
                </circle>
                <circle cx="18" cy="6" r="10">
                  <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                  />
                  <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                  />
                  <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="10;1"
                  />
                </circle>
              </mask>
              <circle
                cx="12"
                cy="12"
                r="10"
                mask="url(#SVGJJmQCcYl)"
                opacity="0"
                fill="currentColor"
              >
                <animate
                  fill="freeze"
                  attributeName="r"
                  begin="0.6s"
                  dur="0.4s"
                  values="10;6"
                />
                <set
                  fill="freeze"
                  attributeName="opacity"
                  begin="0.6s"
                  to="1"
                />
              </circle>
            </svg>
            <p>Light mode</p>
          </div>
        </button>
      </div>
      <div
        class="w-full h-13 rounded-lg hover:bg-[#469F4E] cursor-pointer text-2xl items-center px-4 hover:text-white transition-all duration-150 flex gap-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M5.75 1a.75.75 0 1 0 0 1.5h4.5a.75.75 0 1 0 0-1.5zm-2 2.5a.75.75 0 1 0 0 1.5h8.5a.75.75 0 1 0 0-1.5zm-1.25 4v6h11v-6zM2 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm8.28 3.83a.75.75 0 1 0-1.06-1.06l-1.97 1.97l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0z"
            clip-rule="evenodd"
          />
        </svg>
        <p>Categoriya</p>
      </div>
      <div
        class="w-full h-13 rounded-lg hover:bg-[#469F4E] cursor-pointer text-2xl items-center px-4 hover:text-white transition-all duration-150 flex gap-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9.5 7c.83 0 1.5.67 1.5 1.5S10.33 10 9.5 10S8 9.33 8 8.5S8.67 7 9.5 7m5 7c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m-6.09 3L7 15.59L15.59 7L17 8.41zM18.65 2.85l.61 3.86l3.51 1.79L21 12l1.78 3.5l-3.54 1.79l-.61 3.86l-3.89-.61l-2.77 2.77l-2.78-2.81l-3.86.64l-.62-3.89l-3.49-1.78L3 11.97L1.23 8.5l3.51-1.81l.61-3.82l3.87.63L12 .695l2.76 2.765zm1.45 6.52L17.5 8L17 5.11l-2.9.42L12 3.5L9.9 5.53L7 5.11L6.5 8L3.9 9.37L5.2 12l-1.3 2.63L6.5 16l.5 2.89l2.9-.42L12 20.5l2.1-2.03l2.9.42l.5-2.89l2.6-1.37L18.8 12z"
          />
        </svg>
        <p>Chegirmalar</p>
      </div>
      <div
        class="w-full h-13 rounded-lg hover:bg-[#469F4E] cursor-pointer text-2xl items-center px-4 hover:text-white transition-all duration-150 flex gap-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
          />
        </svg>
        <p>Sotuvchi bo'lish</p>
      </div>
      <RouterLink to="Login">
        <div
          class="w-full h-13 rounded-lg hover:bg-red-500 text-red-500 cursor-pointer text-xl items-center px-4 hover:text-white transition-all duration-150 flex gap-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
              />
              <path
                fill="currentColor"
                d="M16 14a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 5-5zm4-6a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1V9a1 1 0 0 1 1-1m-8-6a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
              />
            </g>
          </svg>
          <p>Yangi akkaundan kirish</p>
        </div>
      </RouterLink>
      <RouterLink to="Home">
        <div
          class="w-full h-13 rounded-lg hover:bg-red-500 text-red-500 cursor-pointer text-2xl items-center px-4 hover:text-white transition-all duration-150 flex gap-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
            />
          </svg>
          <p>Chiqish</p>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";
import { RouterLink } from "vue-router";
const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
</script>
<style></style>
