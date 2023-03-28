<template>
  <div>
    <div v-if="showOtp" class="fixed top-0 left-0 flex justify-center items-end w-screen h-full">
      <div class="fixed top-0 left-0 w-screen h-screen duration-700" />
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
                Verifikasi
              </h1>
            </div>
          </div>
        </div>
        <div class="px-5 bg-white shadow-sm">
          <div class="relative py-3 flex-col items-center text-center justify-center">
            <h1 class="text-xl font-semibold" style="color: rgba(68, 68, 68, 1);">
              Masukan Kode OTP
            </h1>
            <p class="text-gray-400">
              Masukkan 4 digit kode OTP yang dikirimkan
            </p>
          </div>
          <form action="" method="post">
            <div class="flex flex-col space-y-16">
              <div class="flex flex-row items-center justify-between mx-auto w-full">
                <div class="w-16 h-16 ">
                  <input class="w-full h-full flex flex-col items-center justify-center text-center outline-none border-b-4 border-gray-700 hover:border-gray-500 duration-300" type="text" name="">
                </div>
                <div class="w-16 h-16 ">
                  <input class="w-full h-full flex flex-col items-center justify-center text-center outline-none border-b-4 border-gray-700 hover:border-gray-500 duration-300" type="text" name="">
                </div>
                <div class="w-16 h-16 ">
                  <input class="w-full h-full flex flex-col items-center justify-center text-center outline-none border-b-4 border-gray-700 hover:border-gray-500 duration-300" type="text" name="">
                </div>
                <div class="w-16 h-16 ">
                  <input class="w-full h-full flex flex-col items-center justify-center text-center outline-none border-b-4 border-gray-700 hover:border-gray-500 duration-300" type="text" name="">
                </div>
              </div>
              <div class="flex flex-col pb-5">
                <div>
                  <button class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-3 border-none text-white text-sm shadow-sm" style="background-color:rgba(50, 11, 78, 1)" @click="showGanti=true">
                    kirim
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <GantiPass :show-ganti="showGanti" />
  </div>
</template>

<script>
export default {
  props: {
    showOtp: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showGanti: false
    }
  }
}
</script>
