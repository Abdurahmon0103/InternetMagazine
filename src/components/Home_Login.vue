<template>
  <div :class="{ dark: isDark }" class="min-h-screen">
    <section
      class="max-sm:hidden w-screen h-6 bg-[#D3E4C1] flex justify-between px-32 dark:bg-[#0a0a0a]"
    >
      <div>
        <p class="">Tovar olish manzili</p>
      </div>
      <div class="flex items-center gap-4">
        <p>Sotuvchi bo'lish</p>
        <p>Savol Javob</p>
        <p>Buyurtmalarim</p>
        <div class="flex items-center gap-2">
          <p>Dark mode:</p>
          <button @click="toggleTheme">
            <SunIcon v-if="isDark" class="w-6 h-6 text-yellow-400" />
            <MoonIcon v-else class="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
        </div>
      </div>
    </section>
    <div
      class="max-xl:overflow-x-hidden px-80 max-sm:px-10 max-sm:max-w-screen bg-white max-w-screen h-screen dark:bg-[#0a0a0a] dark:text-white"
    >
      <header
        class="flex justify-between items-center bg-white max-h-[100px] dark:bg-[#0a0a0a]"
      >
        <img
          class="max-sm:hidden max-w-50 max-h-[150px]"
          src="../assets/logo.png"
          alt=""
        />
        <div class="flex items-center gap-15">
          <div class="flex items-center gap-10">
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
            <input
              placeholder="Mahsulot yoki tovar nomini kiriting..."
              class=" min-w-[500px] max-sm:min-w-[350px] max-sm:mt-5 min-h-[39px] outline-0 border rounded-lg px-4"
            />
            <Button
              class="relative right-[100px] max-sm:right-29 max-sm:top-[10px] max-w-20 min-h-[37px] rounded-l-none border-r-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="96"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
                />
              </svg>
            </Button>
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
                <div class="pt-11 flex flex-col items-center gap-6">
                  <img
                    src="../assets/profileimg.png"
                    alt=""
                    class="w-30 h-30"
                  />
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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <div class="flex gap-10 pb-4 justify-center max-sm:hidden">
        <p>Elektronika</p>
        <p>Maishiy texnika</p>
        <p>Kiyim</p>
        <p>Poyabzal</p>
        <p>Aksessuar</p>
        <p>Go'zallik va Parvarish</p>
        <p>Salomatlik</p>
        <p>Uy jihozlari</p>
        <p>Qurilish mollari</p>
        <p>Yana</p>
      </div>
      <section class="max-sm:mt-10">
        <div>
          <img
            class="max-sm:min-h-72 max-sm:max-w-88 max-sm:pb-10"
            src="../assets/image.png"
            alt=""
          />
          <div class="max-sm:hidden flex justify-between items-center">
            <button
              class="w-full h-[68px] bg-[#469F4E] flex items-center justify-center rounded-xl my-6 mr-4 gap-3"
            >
              <p class="text-[#FF5A5A] text-3xl font-bold">
                Qaynoq chegirmalar
              </p>
              <img src="../assets/sale.svg" alt="" />
            </button>
            <button
              class="w-full h-[68px] bg-[#469F4E] flex items-center justify-center rounded-xl my-6 ml-4 gap-3"
            >
              <p class="text-[#40BEEF] text-3xl font-bold">Maktab bozori</p>
              <img src="../assets/school.svg" alt="" />
            </button>
          </div>
        </div>
      </section>
      <section>
        <div
          class="grid grid-cols-4 max-xl:gap-x-20 gap-4 gap-y-4 max-sm:grid-cols-2 max-sm:max-w-[66vw]"
        >
          <div
            v-for="i in count"
            :key="i"
            class="min-xl:min-w-[200px] min-xl:min-h-[380px] border rounded-[24px] max-sm:w-[170px] max-sm:h-60"
          >
            <img src="../assets/product_img.png" alt="" />

            <p class="px-4 py-2">Oq qog'oz</p>
            <div class="flex justify-between items-center max-sm:max-sm:mt-16 mt-32 ">
              <Button
                class="rounded-t-none rounded-bl-[24px] rounded-br-none w-1/2"
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
              </Button>
              <Button
                class="rounded-t-none rounded-br-[24px] rounded-bl-none w-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
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
                      sm:space-x-10
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
        <p class="font-bold text-4xl my-6">Mashxur ></p>
        <div
          class="grid grid-cols-4 max-xl:gap-x-20 gap-4 gap-y-4 max-sm:grid-cols-2 max-sm:max-w-[66vw]"
        >
          <div
            v-for="i in count"
            :key="i"
            class="min-xl:min-w-[200px] min-xl:min-h-[380px] border rounded-[24px] max-sm:w-[170px] max-sm:h-60"
          >
            <img src="../assets/product_img.png" alt="" />

            <p class="px-4 py-2">Oq qog'oz</p>
            <div class="flex justify-between items-center max-sm:max-sm:mt-16 mt-32">
              <Button
                class="rounded-t-none rounded-bl-[24px] rounded-br-none w-1/2"
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
              </Button>
              <Button
                class="rounded-t-none rounded-br-[24px] rounded-bl-none w-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
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
        <p class="font-bold text-4xl my-6">Maktab bozori ></p>
        <div
          class="grid grid-cols-4 max-xl:gap-x-20 gap-4 gap-y-4 max-sm:grid-cols-2 max-sm:max-w-[66vw]"
        >
          <div
            v-for="i in count"
            :key="i"
            class="min-xl:min-w-[200px] min-xl:min-h-[380px] border rounded-[24px] max-sm:w-[170px] max-sm:h-60"
          >
            <img src="../assets/product_img.png" alt="" />

            <p class="px-4 py-2">Oq qog'oz</p>
            <div class="flex justify-between items-center max-sm:mt-16 mt-32">
              <Button
                class="rounded-t-none rounded-bl-[24px] rounded-br-none w-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
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
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
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
      <section class="max-sm:min-h-72 max-sm:max-w-88 max-sm:pb-10">
        <img
          class="max-sm:min-h-72 max-sm:max-w-88 max-sm:pb-10 mt-10"
          src="../assets/image.png"
          alt=""
        />
        <p class="font-bold text-4xl my-6">Kunlik chegirma ></p>
        <div
          class="grid grid-cols-4 max-xl:gap-x-20 gap-4 gap-y-4 max-sm:grid-cols-2 max-sm:max-w-[66vw]"
        >
          <div
            v-for="i in count"
            :key="i"
            class="min-xl:min-w-[200px] min-xl:min-h-[380px] border rounded-[24px] max-sm:w-[170px] max-sm:h-60"
          >
            <img src="../assets/product_img.png" alt="" />

            <p class="px-4 py-2">Oq qog'oz</p>
            <div class="flex justify-between items-center max-sm:mt-16 mt-32">
              <Button
                class="rounded-t-none rounded-bl-[24px] rounded-br-none w-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
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
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
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
      <section class="flex justify-between pt-5 pb-10 max-sm:grid max-sm:grid-cols-2 max-sm:gap-4">
        <div>
          <p class="font-bold pb-7">Biz haqqimizda</p>
          <p>Topshirish punktlari</p>
          <p>Vakansiyalar</p>
        </div>
        <div>
          <p class="font-bold pb-7">Foydalanuvchilarga</p>
          <p>Biz bilan bog'lanish</p>
          <p>Savol-Javob</p>
        </div>
        <div>
          <p class="font-bold pb-7">Tadbirkorlarga</p>
          <p>Uzumda soting</p>
          <p>Sotuvchi kabinetiga kirish</p>
          <p>Topshirish punktini ochish</p>
        </div>
        <div>
          <div>
            <p class="font-bold">Ilovani yuklab olish</p>
            <div class="flex gap-4 items-center">
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
                  />
                </svg>
                <p>App store</p>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 256 283"
                >
                  <path
                    fill="#ea4335"
                    d="M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z"
                  />
                  <path
                    fill="#fbbc04"
                    d="M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537z"
                  />
                  <path
                    fill="#4285f4"
                    d="M1.06 23.487A30.6 30.6 0 0 0 0 31.61v219.327a32.3 32.3 0 0 0 1.06 8.124l122.555-120.966z"
                  />
                  <path
                    fill="#34a853"
                    d="m120.436 141.274l61.278-60.483L48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399z"
                  />
                </svg>
                <p>Google play</p>
              </div>
            </div>
          </div>
          <div>
            <p class="font-bold pb-3">Olma ijtimoiy tarmoqlarda</p>
            <div class="flex gap-4 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect
                      width="256"
                      height="256"
                      fill="url(#SVGWRUqebek)"
                      rx="60"
                    />
                    <rect
                      width="256"
                      height="256"
                      fill="url(#SVGfkNpldMH)"
                      rx="60"
                    />
                    <path
                      fill="#fff"
                      d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                    />
                    <defs>
                      <radialGradient
                        id="SVGWRUqebek"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fd5" />
                        <stop offset=".1" stop-color="#fd5" />
                        <stop offset=".5" stop-color="#ff543e" />
                        <stop offset="1" stop-color="#c837ab" />
                      </radialGradient>
                      <radialGradient
                        id="SVGfkNpldMH"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3771c8" />
                        <stop offset=".128" stop-color="#3771c8" />
                        <stop offset="1" stop-color="#60f" stop-opacity="0" />
                      </radialGradient>
                    </defs>
                  </g>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                >
                  <defs>
                    <linearGradient
                      id="SVGuySfwdaH"
                      x1="50%"
                      x2="50%"
                      y1="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stop-color="#2aabee" />
                      <stop offset="100%" stop-color="#229ed9" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#SVGuySfwdaH)"
                    d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.04 128.04 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51s-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"
                  />
                  <path
                    fill="#fff"
                    d="M57.94 126.648q55.98-24.384 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#1877f2"
                    d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                  />
                  <path
                    fill="#fff"
                    d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45.52"
                  height="32"
                  viewBox="0 0 256 180"
                >
                  <path
                    fill="#f00"
                    d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                  />
                  <path
                    fill="#fff"
                    d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
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
</script>
<style></style>
