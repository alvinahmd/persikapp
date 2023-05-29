<template>
  <div>
    <div v-if="showKeranjang" class="fixed top-0 left-0 flex justify-center items-end w-screen h-full">
      <div class="fixed top-0 left-0 w-screen h-screen duration-700" @click="$emit('close')" />
      <div class="w-full max-w-screen-sm bg-white max-h-screen" style="z-index: 1;">
        <div>
          <div class="max-w-screen-sm mx-auto">
            <div class="mb-4 flex flex-row py-5 px-4 bg-white shadow-lg my-0 mx-auto min-h-full max-w-screen-sm">
              <router-link to="/">
                <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
                </svg>
              </router-link>
              <h1 class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
                Keranjang
              </h1>
            </div>
            <div class="container">
              <div v-for="(tiket, index) in persik" :key="index">
                <!-- <div class="flex justify-center">
                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      id="checkboxCheckedNoLabel"
                      v-model="selectedItem"
                      class="relative float-left mt-8 mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(139,121,121,0.93)] bg-gray-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-gray checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                      type="checkbox"
                      :value="tiket"
                      name="itemkeranjang"
                      aria-label="..."
                      @change="checked($event)"
                    >
                  </div>
                  <router-link to="/tiket2">
                    <img :src="$axios.defaults.baseURL+'/'+tiket.tiket.tuan_rumah.image" :alt="tiket.tiket.tuan_rumah.image" class="rounded-lg w-32 h-32">
                  </router-link>
                </div>
                <div class="flex flex-col font-bold pb-2 px-6" style="color:rgba(68, 68, 68, 1);">
                  <h1 class="text-xl ">
                    {{tiket.tiket.tuan_rumah.nama}}
                  </h1>
                  <div class="absolute right-1/3 py-1 pl-8">
                    <div class="flex mt-2 px-12 text-gray-500">
                      <img src="/Vector.png">
                    </div>
                  </div>
                  <p>
                    VS {{tiket.tiket.penantang.nama}}
                  </p>
                  <p class="font-medium text-gray-500 pt-2">
                  Seat:{{ tiket.Seat }}
                  </p>
                  <p class="font-semibold text-black pt-2">
                   Rp.{{tiket.harga_tiket.harga}}
                  </p>
                </div>
                <div class="flex flex-row justify-between pt-20 px-8 absolute right-1/3 z-50">
                  <div class="flex justify-center items-center ">
                    <div class="border border-3 rounded-full px-3 border-slate-600 cursor-pointer">
                      <button class="text-xl items-center text-slate-600 text-center" @click="changeCounter('-1',index)">
                        -
                      </button>
                    </div>
                    <div class="w-6">
                      <input class="w-full border-none text-lg font-semibold text-center" type="text" name="name" :value="counter">
                    </div>
                    <div class="border border-3 rounded-full px-3 text-xl items-center text-purple-900 text-center border-purple-900 cursor-pointer">
                      <button @click="changeCounter('+1',index)">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-between pt-28 px-6 absolute right-1/3">
                  <h1 class="font-medium text-gray-600">
                    tersisa 189 tiket
                  </h1>
                </div> -->
                <isiKeranjang :tiket-prop="tiket" @addIsiKeranjang="addIsiKeranjang" @minusIsiKeranjang="minusIsiKeranjang" @updateIsiKeranjang="updateIsiKeranjang" @sukseshapus="getdata" />
              </div>
              <div class="border-b-2" />
              <div class="border-b-solid mb-24" />
            </div>
            <div v-if="showtombolbayar" class="container">
              <div class="mb-2  py-2 px-2 border-t-2">
                <div class="flex justify-between p-2  bg-white shadow-md">
                  <h1 class="text-lg font-bold" style="color:rgba(68, 68, 68, 1);">
                    Total Bayar
                  </h1>
                  <h1>
                    Rp.{{ totalHargaKeranjang }}
                  </h1>
                </div>
                <div class="w-full">
                  <!-- <router-link to="/bayar">
                    <div class="py-2 w-full rounded-lg border-2 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out" style="background-color:rgba(50, 11, 78, 1);">
                      <div class=" text-lg font-bold text-white px-12 text-center">
                        Bayar
                      </div>
                    </div>
                  </router-link> -->
                  <div class="py-2 w-full rounded-lg border-2 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out" style="background-color:rgba(50, 11, 78, 1);" @click="bayar">
                    <div class=" text-lg font-bold text-white px-12 text-center">
                      Bayar
                    </div>
                  </div>
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
  components: {
    isiKeranjang: () => import('./isikeranjang.vue')
  },
  props: {
    showKeranjang: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectedItem: [],
      totalHargaKeranjang: 0,
      showtombolbayar: false,
      counter: 1,
      persik: null,
      harga: null
    }
  },
  watch: {
    selectedItem () {
      if (this.selectedItem.length > 0) {
        this.showtombolbayar = true
        this.totalHargaKeranjang = 0
        // this.totalHargaKeranjang = this.selectedItem.reduce((accum, item) => accum + item.harga_tiket.harga, 0);
        this.totalHargaKeranjang = this.selectedItem.reduce((accum, item) => accum + (item.total_harga * item.total), 0)
      } else {
        this.showtombolbayar = false
      }
    }
  },
  mounted () {
    this.getdata()
  },
  methods: {
    changeCounter: function (num, index) {
      this.counter += +num
      if (this.selectedItem.length > 0) {
        // const tiket = this.selectedItem[index];
        // this.totalHargaKeranjang = this.selectedItem.reduce((accum,item) => accum + item.children, 0);
      }

      // eslint-disable-next-line no-unused-expressions
      !isNaN(this.counter) && this.counter > 0 ? this.counter : this.counter = 0
    },
    async getdata () {
      console.log('get Data')
      try {
        await this.$axios.$get('/api/keranjang', {
          headers: { 'ngrok-skip-browser-warning': '123123' }
        })
          .then((res) => {
            this.persik = res.message
          })
      } catch (error) {
        alert(error.response.data.message)
      }
    },
    checked (e) {
      console.log(e)
    },

    addIsiKeranjang (tiket) {
      this.selectedItem.push(tiket)
      console.log(this.selectedItem)
    },
    updateIsiKeranjang (tiket) {
      this.selectedItem.forEach((obj, index, arr) => {
        // eslint-disable-next-line eqeqeq
        if (obj.id == tiket.id) {
          arr[index] = tiket
        }
      })
      this.totalHargaKeranjang = this.selectedItem.reduce((accum, item) => accum + (item.total_harga * item.total), 0)
    },
    minusIsiKeranjang (tiket) {
      this.selectedItem = this.selectedItem.filter(function (e) { return e.id !== tiket.id })
    },
    async bayar () {
      await this.$axios.$post('/api/bayar', {
        harga_tiket_id: this.selectedItem[0].harga_tiket.id,
        // harga: this.selectedItem[0].harga,
        tiket_id: this.selectedItem[0].tiket.id,
        // total: this.selectedItem[0].total,
        // jumlh_tiket: this.selectedItem[0].jumlh_tiket,
        tanggal_pembelian: this.selectedItem[0].tanggal_pembelian,
        // Seat:this.selectedItem[0].Seat
        stadiun: this.selectedItem[0].tiket.stadiun,
        keranjang_id: this.selectedItem[0].id
      }, {
        headers: { 'ngrok-skip-browser-warning': '123123' }
      })
        .then((res) => {
          console.log('res', res)
          this.$router.push({ name: 'bayar', params: { id: res.message.id } })
        })
    }
  }

}
</script>
