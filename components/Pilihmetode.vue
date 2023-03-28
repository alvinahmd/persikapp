<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div v-if="showMetod" class="fixed top-0 left-0 flex justify-center items-end w-screen h-full">
      <div class="fixed top-0 left-0 w-screen h-screen duration-700" @click="$emit('close')" />
      <div class="w-full max-w-screen-sm bg-white max-h-screen" style="z-index: 1;">
        <div>
          <div class="container">
            <div class="mb-4 flex flex-row py-5 px-4 rounded-t-xl bg-white shadow-lg">
              <a href="">
                <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
                </svg>
              </a>
              <h1 class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1)">
                Metode Pembayaran
              </h1>
            </div>
          </div>
        </div>
        <div class="container bg-white">
          <div style="color:rgba(188, 188, 188, 1)">
            <div class="items-center pt-3 pb-3">
              <div class="px-5 cursor-pointer">
                <div class="flex gap-4">
                  <div class="border-solid border-2 rounded-lg">
                    <img src="/DANA.png" alt="">
                  </div>
                  <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                    Dana
                  </h1>
                  <div class="absolute right-1/3 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      id="radioDefault01"
                      v-model="methodPay"
                      value="dana"
                      class="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-black bg-purple-700 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg-purple-900 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                      type="radio"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="border b solid" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5 cursor-pointer">
                <div class="flex gap-4">
                  <div class="border-solid border-2 rounded-lg">
                    <img src="/GOPAY.png" alt="">
                  </div>
                  <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                    Gopay
                  </h1>
                  <div class=" absolute right-1/3 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      id="radioDefault01"
                      v-model="methodPay"
                      value="gopay"
                      class="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-black bg-purple-700 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg-purple-900 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                      type="radio"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="border b solid" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5 cursor-pointer">
                <div class="flex gap-4">
                  <div class="border-solid border-2 rounded-lg">
                    <img src="/SPAY.png" alt="">
                  </div>
                  <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                    ShopeePay
                  </h1>
                  <div class=" absolute right-1/3 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      id="radioDefault01"
                      v-model="methodPay"
                      value="shopeepay"
                      class="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-black bg-purple-700 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg-purple-900 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                      type="radio"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="border b solid" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5 cursor-pointer">
                <div class="flex gap-4">
                  <div class="border-solid border-2 rounded-lg">
                    <img src="/OVO.png" alt="">
                  </div>
                  <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                    Ovo
                  </h1>
                  <div class=" absolute right-1/3 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      id="radioDefault01"
                      v-model="methodPay"
                      value="ovo"
                      class="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-black bg-purple-700 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg-purple-900 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                      type="radio"
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="border b solid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showMetod: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      methodPay: null
    }
  },

  watch: {
    methodPay (val) { this.$emit('pilih', val) }
  }
}
</script>
