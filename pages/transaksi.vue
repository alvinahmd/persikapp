<!-- eslint-disable vue/no-dupe-keys -->
<template>
  <div>
    <div v-if="persik" class="max-w-screen-sm mx-auto">
      <div class="mb-2 flex flex-row py-2 px-4 bg-gray-700 shadow-lg my-0 mx-auto min-h-full max-w-screen-sm">
        <div class="container">
          <div class="border-solid border-2 w-full py-2 bg-gradient-to-r from-gray-500 ">
            <div class="text-center">
              <h1 class="text-white text-lg">
                Harap Dibayar Sebelum :
              </h1>
              <clientOnly>
                <countdown :end-time="new Date().getTime() + 20000" @finish="done">
                  <span
                    slot="process"
                    slot-scope="{ timeObj }"
                    class=" text-red-500 text-2xl font-bold"
                  >
                    {{ `  ${timeObj.d}:${timeObj.h}:${timeObj.m}:${timeObj.s}` }}
                  </span>
                  <!-- <span slot="finish">Done!</span> -->
                </countdown>
              </clientOnly>
            </div>
          </div>
          <div class="pt-5">
            <div class="border-solid border-2 w-full py-2 bg-gradient-to-r from-gray-500">
              <div class="text-center">
                <h1 class="text-white text-lg">
                  Jangan Lupa Simpan Bukti Invoice Dan Bukti Transfer
                </h1>
              </div>
            </div>
          </div>
          <div class="py-8 text-white text-lg">
            <div class="flex justify-between ">
              <h1>
                Nomor Transaksi
              </h1>
              <h1>
                {{ persik.nomor_transaksi }}
              </h1>
            </div>
            <div class="border-b border-slate-500" />
            <div class="flex justify-between">
              <h1>
                Tuan Rumah
              </h1>
              <h1>
                {{ persik.tiket.tuan_rumah.nama }}
              </h1>
            </div>
            <div class="border-b border-slate-500" />
            <div class="flex justify-between">
              <h1>
                Penantang
              </h1>
              <h1>
                {{ persik.tiket.penantang.nama }}
              </h1>
            </div>
            <div class="border-b border-slate-500" />
            <div class="flex justify-between">
              <h1>
                Tanggal
              </h1>
              <h1>
                {{ persik.tanggal }}
              </h1>
            </div>
            <div class="border-b border-slate-500" />
            <div class="flex justify-between">
              <h1>
                Stadiun
              </h1>
              <h1>
                {{ persik.tiket.stadiun }}
              </h1>
            </div>
            <div class="border-b border-slate-500" />
            <div class="flex justify-between">
              <h1>
                Seat
              </h1>
              <h1>
                {{ persik.keranjang.Seat }}
              </h1>
            </div>
            <div class="border-b border-slate-500" />
            <div class="flex justify-between">
              <h1>
                Total Pembayaran
              </h1>
              <h1>
                {{ persik.harga_tiket.harga * persik.keranjang.jumlh_tiket }}
              </h1>
            </div>
            <div class="border-b border-slate-500" />
            <div class="flex justify-between">
              <h1>
                Pembayaran
              </h1>
              <h1>
                {{ persik.pembayaran }}
              </h1>
            </div>
            <div class="border-b border-slate-500" />
            <div class="flex justify-between">
              <h1>
                Nomor Virtual Account
              </h1>
              <h1>
                {{ persik.nomor_virtual_account }}
              </h1>
            </div>
            <div class="border-b border-slate-500" />
          </div>
        </div>
      </div>
    </div>
    <button @click="berhasil">
      Konfirmasi
    </button>
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
        await this.$axios.$get('/api/struk', {
          headers: { 'ngrok-skip-browser-warning': '123123' }
        })
          .then((res) => {
            this.persik = res.message[0]
          })
      } catch (error) {
        alert(error.response.data.message)
      }
    },
    // eslint-disable-next-line no-dupe-keys, vue/no-dupe-keys
    async getdata () {
      console.log('get Data')
      try {
        await this.$axios.$get('/api/struk/' + this.$route.params.id + '/show', {
          headers: { 'ngrok-skip-browser-warning': '123123' }
        })
          .then((res) => {
            this.persik = res.message
          })
      } catch (error) {
        alert(error.response.data.message)
      }
    },
    done () {
      this.$swal.fire({
      // icon: 'error',
        imageUrl: '/gelas.png',
        imageHeight: 200,
        title: 'Waktu Pembayaran Habis',
        text: 'Waktu menyelesaikan pembayaran habis, coba pesan kursi anda lagi.!'
      }).then((res) => {
        const payload = {
          tiket_id: this.persik.tiket.id,
          seat: this.persik.keranjang.Seat,
          pembayaran: 'EXPIRED'
        }

        this.$axios.$post('/api/riwayat', payload, {
          headers: { 'ngrok-skip-browser-warning': '123123' }
        })
          .then((res) => {

          })
      })
    },
    berhasil () {
      const payload = {
        tiket_id: this.persik.tiket.id,
        seat: this.persik.keranjang.Seat,
        pembayaran: 'BERHASIL'
      }

      this.$axios.$post('/api/riwayat', payload, {
        headers: { 'ngrok-skip-browser-warning': '123123' }
      })
        .then((res) => {
          this.$router.replace('/riwayat')
          this.$toast.success('Pembayaran Selesai')
        })
    }
  }
}
</script>
