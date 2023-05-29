<template>
  <div v-if="persik" class="max-w-screen-sm mx-auto">
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
    <div class=" flex justify-between font-semibold text-gray-400 px-8 pt-2 mb-4 border-b">
      Selesaikan pembayaran dalam
    </div>
    <div class="flex flex-row font-bold pb-2 px-6" style="color:rgba(68, 68, 68, 1);">
      <img src="/pay.png" alt="" class="rounded-lg">
      <div class="py-12">
        <h1 class="text-xl" style="color:rgba(68, 68, 68, 1);">
          {{ persik.tiket.tuan_rumah.nama }}
        </h1>
        <h1 class="text-xl" style="color:rgba(68, 68, 68, 1);">
          {{ persik.tiket.penantang.nama }}
        </h1>
        <p class="font-medium mt-4" style="color:rgba(68, 68, 68, 1);">
          {{ persik.tanggal_pembelian }}
        </p>
        <p class="font-medium " style="color:rgba(68, 68, 68, 1);">
          {{ persik.stadiun }}
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
            {{ persik.keranjang.jumlh_tiket }}
          </p>
          <p class="font-medium px-8 pt-2 " style="color:rgba(68, 68, 68, 1);">
            Tiket
          </p>
          <p class="font-medium px-8 pt-2 absolute right-1/3" style="color:rgba(68, 68, 68, 1);">
            Rp. {{ persik.harga_tiket.harga }} x  {{ persik.keranjang.jumlh_tiket }}
          </p>
          <p class="font-medium px-8 pt-2" style="color:rgba(68, 68, 68, 1);">
            Seat ( {{ persik.keranjang.Seat }} )
          </p>
          <p class="font-medium px-8 pt-2 absolute right-1/3" style="color:rgba(68, 68, 68, 1);" />
          <p class="font-medium px-8 pt-2 border-b-4 mb-80" style="color:rgba(68, 68, 68, 1);" />
        </div>
        <div class="container">
          <div class="mb-2  py-2 px-2 border-t-4">
            <div class="flex justify-between p-2  bg-white shadow-md">
              <h1 class="text-lg font-bold" style="color:rgba(68, 68, 68, 1);">
                Total Bayar
              </h1>
              <h1>
                Rp.{{ persik.keranjang.total }}
              </h1>
            </div>
            <div class="w-full px-8">
              <div class="py-2 px-8 rounded-lg border-2 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out" style="background-color:rgba(50, 11, 78, 1);" @click="lanjutbayar">
                <div class=" text-lgfont-bold text-white px-12 text-center">
                  Lanjut Pembayaran
                </div>
              </div>
            </div>
          </div>
        </div>
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
    this.getdata()
  },
  methods: {

    async getdata () {
      console.log('get Data')
      try {
        await this.$axios.$get('/api/bayar/' + this.$route.params.id + '/edit', {
          headers: { 'ngrok-skip-browser-warning': '123123' }
        })
          .then((res) => {
            this.persik = res.message
          })
      } catch (error) {
        alert(error.response.data.message)
      }
    },
    lanjutbayar () {
      this.$router.push({ name: 'lanjutbayar', params: { id: this.$route.params.id } })
    }
  }
}

</script>
