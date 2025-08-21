<template>
  <div
    :class="{ dark: isDark }"
    class="min-h-screen bg-white dark:bg-[#161618] dark:text-white"
  >
    <section
      class="hidden sm:flex w-full h-6 bg-[#D3E4C1] justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 dark:bg-transparent"
    >
      <div>
        <p class="text-xs sm:text-sm">Tovar olish manzili</p>
      </div>
      <div class="flex items-center gap-2 sm:gap-4">
        <p class="text-xs sm:text-sm hidden md:block">Sotuvchi bo'lish</p>
        <p class="text-xs sm:text-sm hidden md:block">Savol Javob</p>
        <p class="text-xs sm:text-sm hidden md:block">Buyurtmalarim</p>
        <div class="flex items-center gap-1 sm:gap-2">
          <p class="text-xs sm:text-sm">Dark mode:</p>
          <button @click="toggleTheme">
            <SunIcon
              v-if="isDark"
              class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400"
            />
            <MoonIcon
              v-else
              class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800 dark:text-white"
            />
          </button>
        </div>
      </div>
    </section>
    <div
      class="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80 w-full max-w-screen overflow-x-hidden"
    >
      <Header_Login></Header_Login>
      <div
        class="flex gap-3 sm:gap-4 lg:gap-8 pb-3 max-sm:scroll-pb-10 justify-center sm:justify-center overflow-x-auto scrollbar-hide"
      >
        <p class="whitespace-nowrap text-xs sm:text-sm md:text-base">
          Elektronika
        </p>
        <p class="whitespace-nowrap text-xs sm:text-sm md:text-base">
          Maishiy texnika
        </p>
        <p class="whitespace-nowrap text-xs sm:text-sm md:text-base">Kiyim</p>
        <p class="whitespace-nowrap text-xs sm:text-sm md:text-base">
          Poyabzal
        </p>
        <p class="whitespace-nowrap text-xs sm:text-sm md:text-base">
          Aksessuar
        </p>
        <p
          class="whitespace-nowrap text-xs sm:text-sm md:text-base hidden md:inline"
        >
          Go'zallik va Parvarish
        </p>
        <p
          class="whitespace-nowrap text-xs sm:text-sm md:text-base hidden md:inline"
        >
          Salomatlik
        </p>
        <p
          class="whitespace-nowrap text-xs sm:text-sm md:text-base hidden md:inline"
        >
          Uy jihozlari
        </p>
        <p
          class="whitespace-nowrap text-xs sm:text-sm md:text-base hidden lg:inline"
        >
          Qurilish mollari
        </p>
        <p
          class="whitespace-nowrap text-xs sm:text-sm md:text-base hidden lg:inline"
        >
          Yana
        </p>
      </div>
      <section class="">
        <Bar />
      </section>
      <section class="mt-4 sm:mt-6">
        <Card />
      </section>
      <section class="mt-6 sm:mt-10 pb-16 sm:pb-20">
        <End />
      </section>
      <section
        class="fixed bottom-0 left-0 w-full h-[55px] sm:hidden z-50 bg-white dark:bg-[#0a0a0a] flex"
      >
        <Sidebar />
      </section>
    </div>
  </div>
</template>

<script setup>
import Header_Login from "./Header_Login.vue";
import Sidebar from "./Sidebar.vue";
import Bar from "./Bar.vue";
import Card from "./Card.vue";
import End from "./End.vue";
import Header from "./Header.vue";
import { ref } from "vue";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";

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

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
