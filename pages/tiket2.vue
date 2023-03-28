<template>
  <div class="max-w-screen-sm mx-auto">
    <div class="mb-2 flex flex-row py-2 px-4 bg-white shadow- my-0 mx-auto min-h-full max-w-screen-sm">
      <router-link to="/">
        <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
        </svg>
      </router-link>
      <h1 class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
        Tiket
      </h1>
    </div>
    <div class="relative">
      <div
        class="top-0 absolute h-full left-0 w-full bg-cover bg-center"
        :style="{ backgroundImage: `url(${require('~/static/12.png')})` }"
      />
      <div class="flex items-center w-full p-4 pb-8 pt-14 rounded-lg bg-gradient-to-t from-purple-900 " />
    </div>
    <div class="container">
      <div class="flex flex-row py-2 px-2 rounded-t-xl">
        <div class="container p-2  border-b">
          <h1 class="text-lg font-bold" style="color:rgba(68, 68, 68, 1);">
            Persik Kediri
          </h1>
          <div class="flex items-center w-full pl-2 ">
            <div class="border-b solid border-black class w-full h-1" />
            <a
              href="#"
              class="mb-3 font-medium text-xl text-white hover:text-white text-center rounded-full bg-purple-900 py-1 px-6 ml-auto"
            >
              VS
            </a>
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
    <div class="container">
      <div class="px-5 rounded-t-xl border-b">
        <div class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
          Kelas Tiket
          <div class="flex justify-center container p-2">
            <div class="mb-4 justify-center">
              <img src="/lapangan.png" class="">
            </div>
          </div>
        </div>
        <!--- Tiket Ekonomi,Umum,VIP --->
        <div class="flex justify-around">
          <div class="flex mb-6 text-gray-500">
            <span class="bg-gray-800 px-3 rounded-full mr-3" />
            VIP
          </div>
          <div class="flex mb-6 text-gray-500">
            <span class="bg-green-500 px-3 rounded-full mr-3" />
            Utama
          </div>
          <div>
            <div class="flex  text-gray-500">
              <span class="bg-red-500 px-3 rounded-full mr-3" />
              Ekonomi
            </div>
          </div>
        </div>
        <div class="container">
          <div class="py-5 rounded-t-xl border-t ">
            <div class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
              Tiket Tersedia
            </div>
          </div>
        </div>
        <div class="container">
          <div class="mb-8 flex flex-row py-2 px-2 rounded-t-xl" @click="showTiket = true">
            <img src="/eticket(kecil).png" alt="">
            <div class="container p-2  bg-white shadow-md">
              <h1 class="text-lg font-bold" style="color:rgba(68, 68, 68, 1);">
                Persik Kediri
              </h1>
              <div class="flex items-center w-full pl-2 ">
                <div class="border-b solid border-black class w-full h-1" />
                <a
                  href="#"
                  class="mb-3 font-medium text-xl text-white hover:text-white text-center rounded-full bg-purple-900 py-1 px-6 ml-auto"
                >
                  VS
                </a>
              </div>
              <div class="absolute right-1/3 py-2 px-10 ml-auto">
                <div class="flex mt-6 text-gray-500">
                  <span class="bg-red-500 px-3 rounded-full" />
                  Ekonomi
                </div>
                <h1 class="font-medium mt-2" style="color:rgba(68, 68, 68, 1);">
                  Rp.50.000
                </h1>
                <div class="absolute-rounded-t px-2 bg-violet-900  text-white font-bold mx-auto">
                  189 Tiket Tersedia
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
        <div class="container">
          <div class="mb-8 flex flex-row py-2 px-2 rounded-t-xl" @click="showTiket = true">
            <img src="/eticket(kecil).png" alt="">
            <div class="container p-2  bg-white shadow-md">
              <h1 class="text-lg font-bold" style="color:rgba(68, 68, 68, 1);">
                Persik Kediri
              </h1>
              <div class="flex items-center w-full pl-2 ">
                <div class="border-b solid border-black class w-full h-1" />
                <a
                  href="#"
                  class="mb-3 font-medium text-xl text-white hover:text-white text-center rounded-full bg-purple-900 py-1 px-6 ml-auto"
                >
                  VS
                </a>
              </div>
              <div class="absolute right-1/3 py-2 px-10 ml-auto">
                <div class="flex mt-6 text-gray-500">
                  <span class="bg-green-500 px-3 rounded-full" />
                  Utama
                </div>
                <h1 class="font-medium mt-2" style="color:rgba(68, 68, 68, 1);">
                  Rp.75.000
                </h1>
                <div class="absolute-rounded-t px-2 bg-violet-900  text-white font-bold mx-auto">
                  92 Tiket Tersedia
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
        <div class="container">
          <div class="mb-8 flex flex-row py-2 px-2 rounded-t-xl" @click="showTiket = true">
            <img src="/eticket(kecil).png" alt="">
            <div class="container p-2  bg-white shadow-md">
              <h1 class="text-lg font-bold" style="color:rgba(68, 68, 68, 1);">
                Persik Kediri
              </h1>
              <div class="flex items-center w-full pl-2 ">
                <div class="border-b solid border-black class w-full h-1" />
                <a
                  href="#"
                  class="mb-3 font-medium text-xl text-white hover:text-white text-center rounded-full bg-purple-900 py-1 px-6 ml-auto"
                >
                  VS
                </a>
              </div>
              <div class="absolute right-1/3 py-2 px-10 ml-auto">
                <div class="flex mt-6 text-gray-500">
                  <span class="bg-gray-800 px-3 rounded-full" />
                  VIP
                </div>
                <h1 class="font-medium mt-2" style="color:rgba(68, 68, 68, 1);">
                  Rp.100.000
                </h1>
                <div class="absolute-rounded-t px-2  bg-violet-900  text-white font-bold mx-auto">
                  16 Tiket Tersedia
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
        <div class="container">
          <div class="py-5 rounded-t-xl border-t ">
            <div class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
              Info Lainnya
            </div>
          </div>
        </div>
        <div>
          <div class="relative">
            <div class="flex justify-between">
              <h1 class="font-bold text-2xl mb-4" style="color:rgba(50, 11, 78, 1);">
                Syarat Dan Ketentuan
              </h1>
              <div class="cursor-pointer" @click="showSk">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <!--Syarat Dan Ketentuan-->
            <div v-if="showdropdown" class="flex justify-center items-end h-full">
              <div class="w-full max-w-screen-sm bg-white max-h-screen" style="z-index: 1;">
                <div>
                  <h1 class="font-medium mx-auto text-gray-500">
                    Umum
                    <h1>
                      • Harga sudah termasuk pajak dan biaya admin tiket.
                    </h1>
                    <h1>
                      • Tiket yang sudah dibeli tidak dapat
                      dikembalikan.
                    </h1>
                    <h1>
                      • Tiket yang sudah dibeli tidak dapat diganti
                      jadwalnya
                    </h1>
                    <h1>
                      • Pembeli wajib mengisi data diri pribadi saat memesan.
                    </h1>
                    <h1>
                      • Penjualan tiket sewaktu-waktu dapat
                      dihentikan atau dimulai oleh tiket.com sesuai
                      dengan kebijakan dari promotor atau
                      tiket.com.
                    </h1>
                    <h1>
                      • Pengunjung wajib sudah vaksin kedua dan
                      memiliki aplikasi Peduli Lindungi.
                    </h1>
                    <h1>
                      • Pengunjung wajib menggunakan masker
                      selama acara berlangsung.
                    </h1>
                    <h1>
                      • Pengunjung wajib menjaga protokol kesehatan
                      yang berlaku.
                    </h1>
                    <h1>
                      • Disarankan tidak membawa anak - anak di
                      bawah umur 12 tahun.
                    </h1>
                    <h1>
                      E-tiket
                    </h1>
                    <h1>
                      • E-tiket tidak dapat diuangkan.
                    </h1>
                  </h1>
                </div>
              </div>
            </div>
            <!-- keranjang dan beli sekarang -->
            <div class="container mb-16">
              <div
                class=" flex justify-between fixed bottom-0 text-base font-semibold text-purple mb-5"
                @click="showTiket= true"
              >
                <div class="cursor-pointer bg-white px-16 rounded-lg border-2 border-purple-900 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                  <div class="flex pt-2">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21.0299 13.3333H8.8155L9.08821 14.6667H20.2723C20.914 14.6667 21.3896 15.2625 21.2474 15.8883L21.0175 16.8998C21.7963 17.2778 22.3333 18.0762 22.3333 19C22.3333 20.3001 21.27 21.3518 19.9657 21.3331C18.723 21.3152 17.7011 20.3068 17.6675 19.0645C17.6492 18.3858 17.9211 17.7708 18.3677 17.3333H9.63233C10.0647 17.7569 10.3333 18.3469 10.3333 19C10.3333 20.3255 9.228 21.393 7.88875 21.3308C6.69958 21.2755 5.73246 20.3147 5.66996 19.1259C5.62171 18.2078 6.10479 17.3986 6.83875 16.9765L3.91179 2.66667H1C0.447708 2.66667 0 2.21896 0 1.66667V1C0 0.447708 0.447708 0 1 0H5.27204C5.74708 0 6.15654 0.334208 6.25175 0.799583L6.63367 2.66667H22.9996C23.6413 2.66667 24.1169 3.26254 23.9747 3.88829L22.005 12.555C21.9015 13.0103 21.4968 13.3333 21.0299 13.3333ZM17 7H15V5.33333C15 4.96513 14.7015 4.66667 14.3333 4.66667H13.6667C13.2985 4.66667 13 4.96513 13 5.33333V7H11C10.6318 7 10.3333 7.29846 10.3333 7.66667V8.33333C10.3333 8.70154 10.6318 9 11 9H13V10.6667C13 11.0349 13.2985 11.3333 13.6667 11.3333H14.3333C14.7015 11.3333 15 11.0349 15 10.6667V9H17C17.3682 9 17.6667 8.70154 17.6667 8.33333V7.66667C17.6667 7.29846 17.3682 7 17 7Z"
                        fill="#320B4E"
                        fill-opacity="0.93"
                      />
                    </svg>
                    <h1 class="px-8">
                      Keranjang
                    </h1>
                  </div>
                </div>
                <div class="w-full px-5">
                  <div class="bg-purple-900 py-2 px-8 rounded-lg border-2 border-purple-900 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                    <div class="font-bold text-white px-12 cursor-pointer">
                      Beli Sekarang
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tiketPage :show-tiket="showTiket" @close="showTiket =false" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      showTiket: false,
      showdropdown: false
    }
  },
  methods: {
    showSk () {
      this.showdropdown = !this.showdropdown
    }
  }
}
</script>
