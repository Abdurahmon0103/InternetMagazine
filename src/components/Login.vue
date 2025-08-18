<template>
  <div
    class="flex items-center justify-center w-screen h-screen bg-gradient-to-tl from-[#1BABCC] via-[#775AB5] to-[#F523D2]"
  >
    <div
      class="bg-white/10 w-[502px] h-[561px] mx-auto my-auto rounded-lg shadow-lg p-8 flex flex-col items-center justify-between space-y-6"
    >
      <p class="text-7xl text-white font-bold">Login</p>
      <form class="flex flex-col space-y-4 w-full">
        <Input
          v-model="first"
          type="email"
          placeholder="Email/Username/Number"
          class="bg-white/10 h-15 rounded-md px-4 placeholder:text-white/50 text-white"
        />
        <Input
          type="password"
          v-model="last"
          placeholder="Password"
          class="bg-white/10 h-15 rounded-md px-4 placeholder:text-white/50 text-white"
        />
        <div class="flex justify-between items-center">
          <div class="flex gap-2 items-center">
            <input
              type="checkbox"
              id="remember"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl"
            />
            <label for="remember" class="text-white"> Eslab qolish </label>
          </div>
          <p class="text-white">Parol esdan chiqdimi?</p>
        </div>
      </form>
      <div class="flex flex-col items-center space-y-2">
        <RouterLink
          to="Home_Login"
          class="px-49 py-5 bg-white/15 rounded-md text-white hover:bg-white/30 active:px-47 active:py-4 fixed bottom-64 hover:shadow-2xl transition-all duration-150 active:shadow-none hover:px-50 hover:py-6"
        >
          <button @click="login">Login</button>
        </RouterLink>
        <p class="text-white">
          Sizda akkaunt yo'qmi?
          <RouterLink to="Signup">Yangi yaratish</RouterLink>
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
import { Router } from "lucide-vue-next";
import { useUserStore } from "../stores/user";
const first = ref("");
const last = ref("");
const userStore = useUserStore();
const login = () => {
  userStore.setUser(first.value, last.value);
};
</script>
<style scoped></style>
