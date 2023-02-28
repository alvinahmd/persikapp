<template>
  <div>
    <div class="my-0 mx-auto min-h-full max-w-screen-sm">
      <div class="container">
        <div class="relative  flex flex-row py-5 px-4 bg-white shadow-md">
          <router-link to="/">
            <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
            </svg>
          </router-link>
          <h1 class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
            Jadwal
          </h1>
        </div>
        <div class="grid gap-4 grid-cols-1 px-6 py-5 bg-white shadow-md ">
          <div class="bg-white shadow-lg px-5 py-5 items-center">
            <div class="flex flex-row justify-center">
              <h1 class="text-md" style="color:rgba(68, 68, 68, 1)">
                14 Februari 2023 | 18:00
              </h1>
            </div>
            <div class=" flex flex-row justify-around">
              <div class="py-5">
                <img src="/psk.png" alt="" class="w-16 h-17">
                <span class="text-md font-bold" style="color:rgba(68, 68, 68, 1)">Persik kediri</span>
              </div>
              <span class="flex items-center">VS</span>
              <div class="py-5">
                <img src="/bu.png" alt="" class="w-16 h-17">
                <span class="text-md font-bold" style="color:rgba(68, 68, 68, 1)">Bali United</span>
              </div>
            </div>
          </div>
          <div class="bg-white shadow-lg px-5 py-5 items-center">
            <div class="flex flex-row justify-center">
              <h1 class="text-md" style="color:rgba(68, 68, 68, 1)">
                19 Februari 2023 | 15:00
              </h1>
            </div>
            <div class=" flex flex-row justify-around">
              <div class="py-5">
                <img src="/psm.png" alt="" class="w-16 h-17">
                <span class="text-md font-bold" style="color:rgba(68, 68, 68, 1)">Psm Makasar</span>
              </div>
              <span class="flex items-center">VS</span>
              <div class="py-5">
                <img src="/psk.png" alt="" class="w-16 h-17">
                <span class="text-md font-bold" style="color:rgba(68, 68, 68, 1)">Persik Kediri</span>
              </div>
            </div>
          </div>
          <div class="bg-white shadow-lg px-5 py-5 items-center">
            <div class="flex flex-row justify-center">
              <h1 class="text-md" style="color:rgba(68, 68, 68, 1)">
                23 Februari 2023 | 17:00
              </h1>
            </div>
            <div class=" flex flex-row justify-around">
              <div class="py-5">
                <img src="/psk.png" alt="" class="w-16 h-17">
                <span class="text-md font-bold" style="color:rgba(68, 68, 68, 1)">Persik kediri</span>
              </div>
              <span class="flex items-center">VS</span>
              <div class="py-5">
                <img src="/rns.png" alt="" class="w-16 h-17">
                <span class="text-md font-bold" style="color:rgba(68, 68, 68, 1)">Rans Nusantara</span>
              </div>
            </div>
          </div>
          <div class="bg-white shadow-lg px-5 py-5 items-center">
            <div class="flex flex-row justify-center">
              <h1 class="text-md" style="color:rgba(68, 68, 68, 1)">
                28 Februari 2023 | 17:00
              </h1>
            </div>
            <div class=" flex flex-row justify-around">
              <div class="py-5">
                <img src="/arema.png" alt="" class="w-16 h-17">
                <span class="text-md font-bold" style="color:rgba(68, 68, 68, 1)">Arema FC</span>
              </div>
              <span class="flex items-center">VS</span>
              <div class="py-5">
                <img src="/psk.png" alt="" class="w-16 h-17">
                <span class="text-md font-bold" style="color:rgba(68, 68, 68, 1)">Persik Kediri</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
