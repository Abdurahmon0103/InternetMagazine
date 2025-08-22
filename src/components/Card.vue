<template>
  <section>
    <p class="font-bold text-2xl sm:text-3xl lg:text-4xl my-4 sm:my-6">
      Mashxur >
    </p>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      <div
        v-for="i in count"
        :key="i"
        class="border rounded-[24px] overflow-hidden h-[220px] sm:h-[300px] md:h-[350px] flex flex-col justify-between"
      >
        <div class="h-[60%] sm:h-[65%] w-full">
          <img
            src="../assets/product_img.png"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>

        <p class="px-4 py-2 text-sm sm:text-base">Oq qog'oz</p>
        <div class="flex justify-between items-center mt-auto">
          <Button
            class="flex-1 rounded-t-none rounded-bl-[24px] rounded-br-none"
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
            class="flex-1 rounded-t-none rounded-br-[24px] rounded-bl-none"
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
    <p class="font-bold text-2xl sm:text-3xl lg:text-4xl my-4 sm:my-6">
      Maktab bozori >
    </p>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      <div
        v-for="i in count"
        :key="i"
        class="border rounded-[24px] overflow-hidden h-[220px] sm:h-[300px] md:h-[350px] flex flex-col justify-between"
      >
        <div class="h-[60%] sm:h-[65%] w-full">
          <img
            src="../assets/product_img.png"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>

        <p class="px-4 py-2 text-sm sm:text-base">Oq qog'oz</p>
        <div class="flex justify-between items-center mt-auto">
          <Button
            class="flex-1 rounded-t-none rounded-bl-[24px] rounded-br-none"
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
            class="flex-1 rounded-t-none rounded-br-[24px] rounded-bl-none"
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
    <p class="font-bold text-2xl sm:text-3xl lg:text-4xl my-4 sm:my-6">
      Chegirmalar >
    </p>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      <div
        v-for="i in count"
        :key="i"
        class="border rounded-[24px] overflow-hidden h-[220px] sm:h-[300px] md:h-[350px] flex flex-col justify-between"
      >
        <div class="h-[60%] sm:h-[65%] w-full">
          <img
            src="../assets/product_img.png"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>

        <p class="px-4 py-2 text-sm sm:text-base">Oq qog'oz</p>
        <div class="flex justify-between items-center mt-auto">
          <Button
            class="flex-1 rounded-t-none rounded-bl-[24px] rounded-br-none"
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
            class="flex-1 rounded-t-none rounded-br-[24px] rounded-bl-none"
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
</template>

<script setup>
const count = 8;
import { Button } from "../components/ui/button";
</script>
