<template>
  <div v-if="persik" class="max-w-screen-sm mx-auto">
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
    <div class=" bg-white shadow-lg" style="color:rgba(68, 68, 68, 1);">
      <div class="flex  px-5 flex-row font-bold pb-2">
        <img src="/pay.png">
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
    </div>
    <div class="pt-2 pb-32" style="background-color: rgba(244, 244, 244, 1);">
      <div class="px-5">
        <h1 class=" mb-5 text-lg font-bold" style="color: rgba(68, 68, 68, 1);">
          Metode Pembayaran
        </h1>
        <div class="bg-white py-3 rounded-lg shadow-md cursor-pointer " @click="showMetod=true">
          <div class="ml-12">
            <h1 v-if="!selectedMethod.akun" class="text-lg font-semibold" style="color: rgba(68, 68, 68, 1);">
              Pilih Bank
            </h1>
            <img v-if="selectedMethod.akun === 'mandiri'" src="/bank/mandiri.png" alt="">
            <img v-if="selectedMethod.akun === 'bni'" src="/bank/bni.png" alt="">
            <img v-if="selectedMethod.akun === 'bri'" src="/bank/bi1.png" alt="">
            <img v-if="selectedMethod.akun === 'bca'" src="/bank/bca.png" alt="">
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
          Rp.{{ persik.keranjang.total }}
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
        <div v-if="selectedMethod.akun" @click="transaksi">
          <div class="py-2 w-full rounded-lg border-2 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out bg-purple-900">
            <div class=" text-lg font-bold text-white px-12 text-center">
              Bayar
            </div>
          </div>
        </div>
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
      selectedMethod: {
        akun: null,
        nomor: null
      },
      persik: null
    }
  },
  watch: {
    selectedMethod (val) { console.log('bayar', val) }
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
    pilihMetod (data) {
      this.showMetod = false
      this.selectedMethod = data
    },
    async transaksi () {
      const payload = {
        nomor_transaksi: new Date().valueOf(),
        tiket_id: this.persik.tiket.id,
        keranjang_id: this.persik.keranjang.id,
        harga_tiket_id: this.persik.harga_tiket.id,
        tanggal_pembelian: this.persik.tanggal_pembelian,
        pembayaran: this.selectedMethod.akun,
        nomor_virtual_account: this.selectedMethod.nomor,
        stadiun: this.persik.stadiun,
        tanggal: this.persik.tanggal_pembelian
      }
      await this.$axios.$post('/api/bayar', payload, {
        headers: { 'ngrok-skip-browser-warning': '123123' }
      })
        .then((res) => {
          console.log('res', res)
          this.$axios.$post('/api/struk', payload
            , {
              headers: { 'ngrok-skip-browser-warning': '123123' }
            }).then((res) => {
            this.$router.push({ name: 'transaksi', params: { id: res.message.id } })
          })
        })
    }
  }

}
</script>
