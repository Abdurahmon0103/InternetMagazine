<template>
  <div
    class="flex items-center justify-center w-screen h-screen bg-gradient-to-tl from-[#1BABCC] via-[#775AB5] to-[#F523D2] p-4"
  >
    <div
      class="bg-white/10 w-full max-w-md h-auto rounded-lg shadow-lg p-6 sm:p-8 flex flex-col items-center justify-between space-y-6"
    >
      <p class="text-4xl sm:text-6xl lg:text-7xl text-white font-bold">Login</p>
      <form class="flex flex-col space-y-4 w-full">
        <Input
          v-model="first"
          type="email"
          placeholder="Email/Username/Number"
          class="bg-white/10 h-12 sm:h-14 rounded-md px-4 placeholder:text-white/50 text-white text-sm sm:text-base"
        />
        <Input
          type="password"
          v-model="last"
          placeholder="Password"
          class="bg-white/10 h-12 sm:h-14 rounded-md px-4 placeholder:text-white/50 text-white text-sm sm:text-base"
        />
        <div class="flex justify-between items-center text-xs sm:text-sm">
          <div class="flex gap-2 items-center">
            <input
              type="checkbox"
              id="remember"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl"
            />
            <label for="remember" class="text-white">Eslab qolish</label>
          </div>
          <p class="text-white">Parol esdan chiqdimi?</p>
        </div>
      </form>
      <div class="flex flex-col items-center space-y-2 w-full">
        <RouterLink
          to="Home_Login"
          class="w-full flex justify-center bg-white/15 rounded-md text-white py-3 sm:py-4 hover:bg-white/30 hover:shadow-2xl transition-all duration-150 active:shadow-none"
        >
          <button class="w-full" @click="login">Login</button>
        </RouterLink>
        <p class="text-white text-sm sm:text-base text-center">
          Sizda akkaunt yo'qmi?
          <RouterLink to="Signup" class="underline">Yangi yaratish</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { RouterLink } from "vue-router";
import { useUserStore } from "../stores/user";

const first = ref("");
const last = ref("");
const userStore = useUserStore();

const login = () => {
  userStore.setUser(first.value, last.value);
};
</script>

<style scoped></style>
