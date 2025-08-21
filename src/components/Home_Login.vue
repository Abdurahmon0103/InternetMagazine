<template>
  <div :class="{ dark: isDark }" class="min-h-screen bg-white">
    <section
      class="max-sm:hidden w-screen h-6 bg-[#D3E4C1] flex justify-between px-4 sm:px-8 md:px-16 lg:px-32 dark:bg-[#0a0a0a]"
    >
      <div>
        <p class="text-xs sm:text-sm">Tovar olish manzili</p>
      </div>
      <div class="flex items-center gap-2 sm:gap-4">
        <p class="text-xs sm:text-sm max-md:hidden">Sotuvchi bo'lish</p>
        <p class="text-xs sm:text-sm max-md:hidden">Savol Javob</p>
        <p class="text-xs sm:text-sm max-md:hidden">Buyurtmalarim</p>
        <div class="flex items-center gap-2">
          <p class="text-xs sm:text-sm">Dark mode:</p>
          <button @click="toggleTheme">
            <SunIcon
              v-if="isDark"
              class="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400"
            />
            <MoonIcon
              v-else
              class="w-4 h-4 sm:w-6 sm:h-6 text-gray-800 dark:text-white"
            />
          </button>
        </div>
      </div>
    </section>
    <div
      class="max-xl:overflow-x-hidden px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80 max-w-screen h-screen dark:bg-[#0a0a0a] dark:text-white"
    >
      <header
        class="flex flex-col sm:flex-row justify-between items-center bg-transparent max-h-[100px] dark:bg-[#0a0a0a] gap-4 py-4"
      >
        <img
          class="max-sm:w-32 sm:w-40 lg:w-50 max-h-[150px]"
          src="../assets/logo.png"
          alt=""
        />
        <div
          class="flex flex-col sm:flex-row items-center gap-4 lg:gap-15 w-full sm:w-auto"
        >
          <div
            class="flex flex-col sm:flex-row items-center gap-4 lg:gap-10 w-full sm:w-auto"
          >
            <Button class="max-sm:hidden min-w-25"
              ><svg
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
            </Button>
            <div class="relative w-full sm:w-auto">
              <input
                placeholder="Mahsulot yoki tovar nomini kiriting..."
                class="w-full sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] min-h-[39px] outline-0 border rounded-lg px-4 pr-20"
              />
              <Button
                class="absolute right-0 top-0 h-full px-4 rounded-l-none border-l"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div class="max-sm:hidden flex items-center gap-2">
            <Button
              ><svg
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
              Saralangan
            </Button>
            <Button
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2z"
                />
              </svg>
              Savat
            </Button>

            <Sheet>
              <SheetTrigger as-child>
                <Button>
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
                      d="M15 7.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m4.5 13c-.475-9.333-14.525-9.333-15 0"
                    />
                  </svg>
                  Profil</Button
                >
              </SheetTrigger>
              <SheetContent class="px-7">
                <Shet></Shet>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <div class="sm:hidden flex flex-col gap-2">
        <div class="flex items-center justify-between py-3">
          <img src="../assets/logo.png" alt="logo" class="w-28 h-auto" />
          <div class="flex items-center gap-2">
            <button
              @click="mobileSearch = !mobileSearch"
              aria-label="Toggle search"
              class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                class="text-gray-800 dark:text-white"
              >
                <path fill="currentColor" d="M21 21l-4.35-4.35" />
                <path
                  fill="currentColor"
                  d="M10 18a8 8 0 1 1 0-16a8 8 0 0 1 0 16z"
                />
              </svg>
            </button>
            <button
              @click="mobileMenu = !mobileMenu"
              aria-label="Toggle menu"
              class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <!-- hamburger icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                class="text-gray-800 dark:text-white"
              >
                <path fill="currentColor" d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>

        <!-- mobile search input -->
        <div v-if="mobileSearch" class="px-1">
          <input
            placeholder="Mahsulot yoki tovar nomini kiriting..."
            class="w-full h-10 rounded-lg border px-3 outline-0"
          />
        </div>

        <!-- mobile collapsed menu (limited items) -->
        <div v-if="mobileMenu" class="px-1 pb-2 space-y-2">
          <nav class="flex flex-col gap-2">
            <a class="text-sm font-medium" href="#">Elektronika</a>
            <a class="text-sm" href="#">Maishiy texnika</a>
            <a class="text-sm" href="#">Kiyim</a>
            <a class="text-sm" href="#">Poyabzal</a>
            <a class="text-sm" href="#">Aksessuar</a>
            <!-- hide less important items on mobile to keep menu short -->
          </nav>
        </div>
      </div>

      <div
        class="flex gap-4 lg:gap-10 pb-4 justify-start sm:justify-center overflow-x-auto max-sm:pb-2"
      >
        <p class="whitespace-nowrap text-sm sm:text-base">Elektronika</p>
        <p class="whitespace-nowrap text-sm sm:text-base">Maishiy texnika</p>
        <p class="whitespace-nowrap text-sm sm:text-base">Kiyim</p>
        <p class="whitespace-nowrap text-sm sm:text-base">Poyabzal</p>
        <p class="whitespace-nowrap text-sm sm:text-base">Aksessuar</p>
        <p class="whitespace-nowrap text-sm sm:text-base max-md:hidden">
          Go'zallik va Parvarish
        </p>
        <p class="whitespace-nowrap text-sm sm:text-base max-md:hidden">
          Salomatlik
        </p>
        <p class="whitespace-nowrap text-sm sm:text-base max-md:hidden">
          Uy jihozlari
        </p>
        <p class="whitespace-nowrap text-sm sm:text-base max-lg:hidden">
          Qurilish mollari
        </p>
        <p class="whitespace-nowrap text-sm sm:text-base max-lg:hidden">Yana</p>
      </div>
      <section class="max-sm:mt-10">
        <div>
          <img
            class="w-full h-auto max-h-96 object-cover rounded-lg"
            src="../assets/image.png"
            alt=""
          />
          <div
            class="flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <button
              class="w-full sm:w-1/2 h-[50px] sm:h-[68px] bg-[#469F4E] flex items-center justify-center rounded-xl my-4 sm:my-6 gap-3"
            >
              <p
                class="text-[#FF5A5A] text-xl sm:text-2xl lg:text-3xl font-bold"
              >
                Qaynoq chegirmalar
              </p>
              <img
                src="../assets/sale.svg"
                alt=""
                class="w-6 h-6 sm:w-8 sm:h-8"
              />
            </button>
            <button
              class="w-full sm:w-1/2 h-[50px] sm:h-[68px] bg-[#469F4E] flex items-center justify-center rounded-xl my-4 sm:my-6 gap-3"
            >
              <p
                class="text-[#40BEEF] text-xl sm:text-2xl lg:text-3xl font-bold"
              >
                Maktab bozori
              </p>
              <img
                src="../assets/school.svg"
                alt=""
                class="w-6 h-6 sm:w-8 sm:h-8"
              />
            </button>
          </div>
        </div>
      </section>
      <section>
        <p class="font-bold text-2xl sm:text-3xl lg:text-4xl my-4 sm:my-6">
          Mashxur >
        </p>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          <div
            v-for="i in count"
            :key="i"
            class="border rounded-[24px] overflow-hidden"
          >
            <img src="../assets/product_img.png" alt="" class="w-full h-auto" />

            <p class="px-4 py-2 text-sm sm:text-base">Oq qog'oz</p>
            <div class="flex justify-between items-center">
              <Button
                class="rounded-t-none rounded-bl-[24px] rounded-br-none w-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  class="sm:w-6 sm:h-6"
                >
                  <path
                    fill="currentColor"
                    d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
                  />
                </svg>
              </Button>
              <Button
                class="rounded-t-none rounded-br-[24px] rounded-bl-none w-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                  class="sm:w-6 sm:h-6"
                >
                  <g fill="none">
                    <path d="M39 32H13L8 12h36z" />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"
                    />
                    <circle
                      cx="13"
                      cy="39"
                      r="3"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                    />
                    <circle
                      cx="39"
                      cy="39"
                      r="3"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                    />
                  </g>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <End></End>
      </section>
    </div>
  </div>
</template>

<script setup>
import Shet from "./Shet.vue";
import End from "./End.vue";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ref } from "vue";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Image, Search } from "lucide-vue-next";

const count = 8;

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark"); // HTML ga dark qo‘shiladi
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// New: mobile state for compact header
const mobileMenu = ref(false);
const mobileSearch = ref(false);
</script>

<style>
/* ...existing code... */
/* keep styles minimal — layout driven by existing Tailwind classes */
</style>
