<template>
  <div>
    <div v-if="showPutus" class="fixed top-0 left-0 flex justify-center items-end w-screen h-full">
      <div class="fixed top-0 left-0 w-screen h-screen duration-700" @click="$emit('close')" />
      <div class="w-full max-w-screen-sm bg-white max-h-screen" style="z-index: 1;">
        <div class=" text-center justify-center bg-white shadow-inherit">
          <div class="relative p-4 w-full h-full justify-center">
            <div class="relative p-4 bg-white rounded-lg shadow-md">
              <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                <h3 class="mb-3 text-2xl font-bold text-gray-700">
                  Apakah Anda ingin melepas akun DANA?
                </h3>
              </div>
              <div class="text-md" style="color: rgba(85, 85, 85, 1);">
                <p>
                  Anda tidak bisa melakukan pembelian tanpa ada akun E-Wallet yang terhubung,lanjutkan?
                </p>
              </div>
              <div>
                <div class="py-5 flex justify-between">
                  <a href="">
                    <button type="button" class="py-2 px-4 w-full text-sm font-medium text-black">
                      Tidak
                    </button>
                  </a>
                  <a href="">
                    <button type="button" class="py-2 px-4 w-full text-sm font-medium text-center text-purple-800">
                      Ya
                    </button>
                  </a>
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
  props: {
    showPutus: {
      type: Boolean,
      default: false
    }
  }
}
</script>
