<template>
  <div class="max-w-screen-sm mx-auto">
    <div class="mb-2 flex flex-row py-2 px-4 bg-white shadow-lg my-0 mx-auto min-h-full max-w-screen-sm">
      <router-link to="/">
        <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
        </svg>
      </router-link>
      <h1 class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
        Pembayaran
      </h1>
    </div>
    <div class="font-semibold text-gray-400 px-8 pt-2 mb-4 border-b">
      Selesaikan pembayaran dalam
    </div>
    <div class="flex flex-row font-bold pb-2 px-6" style="color:rgba(68, 68, 68, 1);">
      <img src="/pay.png">
      <div class="py-12">
        <h1 class="text-xl" style="color:rgba(68, 68, 68, 1);">
          Persik Kediri
        </h1>
        <h1 class="text-xl" style="color:rgba(68, 68, 68, 1);">
          VS Bali united
        </h1>
        <p class="font-medium mt-4" style="color:rgba(68, 68, 68, 1);">
          14 Februari 2023| 18.00
        </p>
        <p class="font-medium " style="color:rgba(68, 68, 68, 1);">
          Stadion Maguwaharjo Sleman
        </p>
      </div>
    </div>
    <div class="flex flex-col">
      <h1 class="font-bold text-2xl px-8 pt-2" style="color:rgba(68, 68, 68, 1);">
        Pesanan
      </h1>
      <div>
        <div class="justify-beetwen">
          <p class="font-medium px-8 pt-2 absolute right-1/3" style="color:rgba(68, 68, 68, 1);">
            2
          </p>
          <p class="font-medium px-8 pt-2 " style="color:rgba(68, 68, 68, 1);">
            Tiket
          </p>
          <p class="font-medium px-8 pt-2 absolute right-1/3" style="color:rgba(68, 68, 68, 1);">
            Rp.50.000 x2
          </p>
          <p class="font-medium px-8 pt-2" style="color:rgba(68, 68, 68, 1);">
            Seat(Ekonomi)
          </p>
          <p class="font-medium px-8 pt-2 absolute right-1/3" style="color:rgba(68, 68, 68, 1);">
            Rp.2.000 x2
          </p>
          <p class="font-medium px-8 pt-2 border-b-4 mb-80" style="color:rgba(68, 68, 68, 1);">
            Biaya layanan
          </p>
        </div>
        <div class="py-5 bg-white rounded-lg shadow-lg px-5">
          <div class="flex justify-between">
            <h1 class="text-lg font-bold" style="color:rgba(68, 68, 68, 1);">
              Total Bayar
            </h1>
            <h1>
              Rp.104.000
            </h1>
          </div>
          <div class="w-full pt-5">
            <router-link to="/lanjutbayar">
              <div class="py-2 w-full rounded-lg border-2 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out bg-purple-900 ">
                <div class=" text-lg font-bold text-white px-12 text-center">
                  Lanjut Pembayaran
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
