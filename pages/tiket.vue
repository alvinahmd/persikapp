<template>
  <div class="max-w-screen-sm mx-auto">
    <div class="mb-4 flex flex-row py-5 px-4 bg-white shadow-lg my-0 mx-auto min-h-full max-w-screen-sm">
      <router-link to="/">
        <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
        </svg>
      </router-link>
      <h1 class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
        Tiket
      </h1>
    </div>
    <div class="my-0 mx-auto min-h-full max-w-screen-sm">
      <div class="container">
        <div class="relative  flex flex-row py-5 px-4 bg-white shadow-md">
          <div class="mb-5 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row">
            <a href="/" class="font-bold text-2xl px-20 mx-auto">
              Tiket Aktif
              <div class="border-b-4  border-purple-600 w-full" />
            </a>
          </div>
          <a
            href="/riwayat"
            class="font-bold  text-gray-400 text-2xl px-20 mx-auto"
          >Riwayat</a>
        </div>
        <div class="container">
          <div class="mb-80 flex flex-row py-2 px-2 rounded-t-xl bg-white shadow-lg" @click="showTiket =true">
            <img src="/eticket(kecil).png" alt="">
            <div class="container p-2  bg-white shadow-md">
              <h1 class="text-lg font-bold" style="color:rgba(68, 68, 68, 1);">
                Persik Kediri
              </h1>
              <div class="flex items-center w-full pl-2 ">
                <div class="border-b solid border-black class w-full h-1" />
                <a href="#" class="mb-3 font-medium text-xl text-white hover:text-white text-center rounded-full bg-purple-900 py-1 px-6 ml-auto">
                  VS
                </a>
              </div>
              <div class="absolute right-1/3 py-1 px-6 ml-auto">
                <div class="flex mt-6 text-gray-500">
                  <span class="bg-red-500 px-3 rounded-full mr-3" />
                  Ekonomi
                </div>
              </div>
              <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1);">
                Bali United
              </h1>
              <h1 class="text-lg font-medium" style="color:rgba(68, 68, 68, 1);">
                14 Februari 2023| 18:00
              </h1>
              <h1 class="text-lg font-medium" style="color:rgba(68, 68, 68, 1);">
                Stadion Maguwaharjo Sleman
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showTiket" class="fixed top-0 left-0 flex justify-center items-end w-screen h-full">
      <div class="fixed top-0 left-0 w-screen h-screen duration-700" @click="showTiket = false" />
      <div class="w-full max-w-screen-sm bg-white max-h-screen" style="z-index: 1;">
        <div>
          <div class="container">
            <div class="mb-4 flex flex-row py-2 px-2 rounded-t-xl bg-white shadow-lg ">
              <img src="/etiket(panjang).png" alt="">
              <div class="container p-2  bg-white shadow-md">
                <h1 class="text-lg font-bold" style="color:rgba(68, 68, 68, 1);">
                  Persik Kediri
                </h1>
                <div class="flex items-center w-full pl-2 ">
                  <div class="border-b solid border-black class w-full h-1" />
                  <a href="#" class="mb-3 font-medium text-xl text-white hover:text-white text-center rounded-full bg-purple-900 py-1 px-6 ml-auto">
                    VS
                  </a>
                </div>
                <div class="absolute right-1/3 py-1 px-6 ml-auto">
                  <div class="flex mt-6 text-gray-500">
                    <span class="bg-red-500 px-3 rounded-full mr-3" />
                    Ekonomi
                  </div>
                </div>
                <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1);">
                  Bali United
                </h1>
                <h1 class="text-lg font-medium" style="color:rgba(68, 68, 68, 1);">
                  14 Februari 2023| 18:00
                </h1>
                <h1 class="text-lg font-medium" style="color:rgba(68, 68, 68, 1);">
                  Stadion Maguwaharjo Sleman
                </h1>
                <div class="mb-4 flex flex-row justify-center pt-8">
                  <img src="/lapangan.png" alt="">
                  <div class="absolute left-1/3 px-44 pt-16 mt-16 ml-auto">
                    No.87265
                  </div>
                </div>
                <div class="mb-4 py-4 flex flex-row justify-center pt-5">
                  <img src="/barcode.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-purple-900 py-4 ">
      <div>
        <ul class="flex justify-between px-14 items-center">
          <li>
            <router-link to="/">
              <img src="/home1.png" alt="">
            </router-link>
          </li>
          <li class="text-white">
            <router-link to="/pesan">
              <img src="/pesan1.png" alt="">
            </router-link>
          </li>
          <li>
            <router-link to="/Tiket">
              <img src="/tiket2.png" alt="">
              <span class="text-white">Tiket</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showTiket: false
    }
  }
}
</script>
