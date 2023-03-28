<template>
  <div>
    <div v-if="showPin" class="fixed top-0 left-0 flex justify-center items-end w-screen h-full">
      <div class="fixed top-0 left-0 w-screen h-screen duration-700" />
      <div class="w-full max-w-screen-sm bg-white max-h-screen" style="z-index: 1;">
        <div class="px-5 bg-white shadow-sm">
          <div class="relative py-3 flex-col items-center text-center justify-center">
            <h1 class="text-xl font-semibold" style="color: rgba(68, 68, 68, 1);">
              Masukan Pin Dana
            </h1>
          </div>
          <form action="" method="post">
            <div class="flex flex-col space-y-16">
              <div class="flex flex-row items-center justify-between mx-auto w-full">
                <div class="w-16 h-16 ">
                  <input inputmode="tel" class="w-full h-full flex flex-col items-center justify-center text-center outline-none border-b-4 border-gray-700 hover:border-gray-500 duration-300" type="text" name="">
                </div>
                <div class="w-16 h-16 ">
                  <input inputmode="tel" class="w-full h-full flex flex-col items-center justify-center text-center outline-none border-b-4 border-gray-700 hover:border-gray-500 duration-300" type="text" name="">
                </div>
                <div class="w-16 h-16 ">
                  <input inputmode="tel" class="w-full h-full flex flex-col items-center justify-center text-center outline-none border-b-4 border-gray-700 hover:border-gray-500 duration-300" type="text" name="">
                </div>
                <div class="w-16 h-16 ">
                  <input inputmode="tel" class="w-full h-full flex flex-col items-center justify-center text-center outline-none border-b-4 border-gray-700 hover:border-gray-500 duration-300" type="text" name="">
                </div>
                <div class="w-16 h-16 ">
                  <input inputmode="tel" class="w-full h-full flex flex-col items-center justify-center text-center outline-none border-b-4 border-gray-700 hover:border-gray-500 duration-300" type="text" name="">
                </div>
                <div class="w-16 h-16 ">
                  <input inputmode="tel" class="w-full h-full flex flex-col items-center justify-center text-center outline-none border-b-4 border-gray-700 hover:border-gray-500 duration-300" type="text" name="">
                </div>
              </div>
              <div class="flex flex-col pb-5">
                <div>
                  <button class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-3 border-none text-white text-sm shadow-sm" style="background-color:rgba(50, 11, 78, 1)" @click="showDana=true">
                    kirim
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <OtpDana :show-dana="showDana" />
  </div>
</template>
<script>
export default {
  props: {
    showPin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showDana: false
    }
  }
}
</script>
