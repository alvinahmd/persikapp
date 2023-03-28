<template>
  <div class="max-w-screen-sm mx-auto">
    <div class="mb-2 flex flex-row py-2 px-4 bg-white shadow-lg my-0 mx-auto min-h-full max-w-screen-sm">
      <router-link to="/bayar">
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
    <div class=" bg-white shadow-lg" style="color:rgba(68, 68, 68, 1);">
      <div class="flex  px-5 flex-row font-bold pb-2">
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
    </div>
    <div class="pt-2 pb-32" style="background-color: rgba(244, 244, 244, 1);">
      <div class="px-5">
        <h1 class=" mb-5 text-lg font-bold" style="color: rgba(68, 68, 68, 1);">
          Metode Pembayaran
        </h1>
        <div class="bg-white py-3 px-3 rounded-lg shadow-md cursor-pointer" @click="showMetod=true">
          <div class="flex gap-5">
            <img v-if="!selectedMethod" src="/DANA.png" alt="">
            <img v-if="!selectedMethod" src="/GOPAY.png" alt="">
            <img v-if="!selectedMethod" src="/SPAY.png" alt="">
            <img v-if="!selectedMethod" src="/OVO.png" alt="">
            <img v-if="selectedMethod === 'dana'" src="/DANA.png" alt="">
            <img v-else-if="selectedMethod === 'gopay'" src="/GOPAY.png" alt="">
            <img v-else-if="selectedMethod === 'shopeepay'" src="/SPAY.png" alt="">
            <img v-else-if="selectedMethod === 'ovo'" src="/OVO.png" alt="">
          </div>
        </div>
      </div>
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
        <div v-if="!selectedMethod" class="cursor-pointer">
          <div class="py-2 w-full rounded-lg border-2 " style="background-color: rgba(214, 214, 214, 1);">
            <div class=" text-lg font-bold text-white px-12 text-center">
              Pilih Metode Pembayaran
            </div>
          </div>
        </div>
        <router-link v-if="selectedMethod === 'dana'" to="/dana">
          <div class="py-2 w-full rounded-lg border-2 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out bg-purple-900">
            <div class=" text-lg font-bold text-white px-12 text-center">
              Bayar dengan Dana
            </div>
          </div>
        </router-link>
        <router-link v-if="selectedMethod === 'gopay'" to="/lanjutbayar">
          <div class="py-2 w-full rounded-lg border-2 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out bg-purple-900">
            <div class=" text-lg font-bold text-white px-12 text-center">
              Bayar dengan Gopay
            </div>
          </div>
        </router-link>
        <router-link v-if="selectedMethod === 'shopeepay'" to="/lanjutbayar">
          <div class="py-2 w-full rounded-lg border-2 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out bg-purple-900">
            <div class=" text-lg font-bold text-white px-12 text-center">
              Bayar dengan Shopeeypay
            </div>
          </div>
        </router-link>
        <router-link v-if="selectedMethod === 'ovo'" to="/lanjutbayar">
          <div class="py-2 w-full rounded-lg border-2 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out bg-purple-900">
            <div class=" text-lg font-bold text-white px-12 text-center">
              Bayar dengan ovo
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <Pilihmetode :show-metod="showMetod" @pilih="pilihMetod" @close="showMetod =false" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      showMetod: false,
      selectedMethod: null
    }
  },

  methods: {
    pilihMetod (data) {
      this.showMetod = false
      this.selectedMethod = data
    }
  }
}
</script>
