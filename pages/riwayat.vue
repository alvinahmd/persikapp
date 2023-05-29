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
          <div class="mb-5 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row" />
          <a href="/riwayat" class="font-bold text-2xl px-20 mx-auto">
            Riwayat
            <div class="border-b-4  border-purple-600 w-full" />
          </a>
        </div>
        <div class="container px-3 py-3">
          <div v-for="(riwayat, index) in persik" :key="index" class="rounded-lg flex flex-row pt-5 rounded-t-xl">
            <img src="/eticket(kecil).png" alt="">
            <div class="container pb-2   bg-white shadow-md">
              <div class=" flex justify-between">
                <h1 class=" pl-3 pt-5 text-lg font-bold" style="color:rgba(68, 68, 68, 1);">
                  {{ riwayat.tiket.tuan_rumah.nama }}
                </h1>
                <span class="h-7 px-4 rounded-tr-lg rounded-bl-lg" :class="{ 'bg-green-200': riwayat.pembayaran === 'BERHASIL', 'bg-gray-500':riwayat.pembayaran === 'EXPIRED' }">
                  <h1 class="-translate-x-1 pl-2 items-center font-semibold text-lg" :class="{ 'text-green-600': riwayat.pembayaran === 'BERHASIL', }">
                    {{ riwayat.pembayaran }}
                  </h1>
                </span>
              </div>
              <div class="flex items-center w-full pt-3 px-3 ">
                <div class="border-b solid border-black class w-full h-1" />
                <span class="mb-3 font-medium text-xl text-white hover:text-white text-center rounded-full bg-purple-900 py-1 px-6 ml-auto">
                  VS
                </span>
              </div>
              <div class="absolute right-1/3 py-1 px-6 ml-auto">
                <div class="flex mt-6 text-gray-500">
                  <div class="px-3 rounded-full mr-3" :class="{ 'bg-red-500': riwayat.pembayaran === 'BERHASIL','bg-gray-700': riwayat.pembayaran === 'EXPIRED', } " />
                  {{ riwayat.seat }}
                </div>
              </div>
              <div class="pl-3 text-lg font-semibold" style="color:rgba(68, 68, 68, 1);">
                <h1>
                  {{ riwayat.tiket.penantang.nama }}
                </h1>
                <h1>
                  {{ riwayat.tiket.tanggal }}
                </h1>
                <h1>
                  {{ riwayat.tiket.stadiun }}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-purple-900 py-4">
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
      persik: null
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      try {
        await this.$axios.$get('/api/riwayat', {
          headers: { 'ngrok-skip-browser-warning': '123123' }
        })
          .then((res) => {
            this.persik = res.message
          })
      } catch (error) {
        alert(alert.response.data.message)
      }
    }
  }
}
</script>
