<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class=" py-3 flex px-5 rounded-t-xl">
    <div class="flex justify-center">
      <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <input
          id="checkboxCheckedNoLabel"
          v-model="selectedItem"
          class="relative float-left mt-8 mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(139,121,121,0.93)] bg-gray-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-gray checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
          type="checkbox"
          :value="tiketProp"
          name="itemkeranjang"
          aria-label="..."
          :checked="isChecked"
          @change="checked($event)"
        >
      </div>
      <router-link to="/tiket2">
        <img
          :src="$axios.defaults.baseURL + '/' + tiketProp.tiket.tuan_rumah.image"
          :alt="tiketProp.tiket.tuan_rumah.image"
          class="rounded-lg w-32 h-32"
        >
      </router-link>
    </div>
    <div class="flex flex-col font-bold pb-2 px-6" style="color:rgba(68, 68, 68, 1);">
      <h1 class="text-xl ">
        {{ tiketProp.tiket.tuan_rumah.nama }}
      </h1>
      <div class="absolute right-1/3 py-1 pl-8 cursor-pointer z-[100]" @click="hapus(tiketProp.id)">
        <div class="flex mt-2 px-12 text-gray-500">
          <img src="/Vector.png">
        </div>
      </div>
      <p>
        VS {{ tiketProp.tiket.penantang.nama }}
      </p>
      <p class="font-medium text-gray-500 pt-2">
        Seat:{{ tiketProp.Seat }}
      </p>
      <p class="font-semibold text-black pt-2">
        Rp.{{ tiketProp.harga_tiket.harga }}
      </p>
    </div>
    <div class="flex flex-row justify-between pt-20 px-8 absolute right-1/3 z-50">
      <div class="flex justify-center items-center ">
        <div class="border border-3 rounded-full px-3 border-slate-600 cursor-pointer">
          <button class="text-xl items-center text-slate-600 text-center" @click="changeCounter('-1')">
            -
          </button>
        </div>
        <div class="w-6">
          <input class="w-full border-none text-lg font-semibold text-center" type="text" name="name" :value="counter">
        </div>
        <div
          class="border border-3 rounded-full px-3 text-xl items-center text-purple-900 text-center border-purple-900 cursor-pointer"
        >
          <button @click="changeCounter('+1')">
            +
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between pt-28 px-6 absolute right-1/3">
      <h1 class="font-medium text-gray-600">
        tersisa 0 tiket
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showKeranjang: {
      type: Boolean,
      default: false
    },
    tiketProp: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      selectedItem: [],
      counter: 0,
      isChecked: false
    }
  },
  mounted () {
    this.counter = this.tiketProp.jumlh_tiket
  },
  methods: {
    changeCounter: function (num, index) {
      this.counter += +num
      if (this.selectedItem.length > 0) {
        const total = {
          ...this.tiketProp,
          total: this.counter,
          total_harga: this.tiketProp.harga_tiket.harga
        }
        this.$emit('updateIsiKeranjang', total)
      }

      // eslint-disable-next-line no-unused-expressions
      !isNaN(this.counter) && this.counter > 0 ? this.counter : this.counter = 0
    },

    checked: function (event) {
      const checked = event.target.checked
      const total = {
        ...this.tiketProp,
        total: this.counter,
        total_harga: this.tiketProp.harga_tiket.harga
      }
      if (checked) {
        this.$emit('addIsiKeranjang', total)
      } else {
        this.$emit('minusIsiKeranjang', total)
      }
    },

    async hapus (id) {
      try {
        await this.$axios.$delete('/api/keranjang/' + id + '/delete', {
          headers: { 'ngrok-skip-browser-warning': '123123' }
        })
          .then((res) => {
            this.$emit('sukseshapus', this.TiketProp)
            console.log('res', res)
            this.$toast.success('Hapus tiket berhasil')
          })
      } catch (error) {
        alert(error.response.data.message)
        console.log(error)
      }
    }
  }

}
</script>
