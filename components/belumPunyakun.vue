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
                  Anda belum memiliki akun,masuk sekarang?
                </h3>
              </div>
              <div>
                <div class="py-5 flex justify-between">
                  <a href="" class="py-2 px-4 w-full text-sm font-medium text-black">
                    kembali
                  </a>
                  <button type="button" class="py-2 px-4 w-full text-sm font-medium text-center text-purple-800" @click="showLogin = true">
                    Masuk
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <loginPage :show-login="showLogin" @ok="google" @pp="daftar" />
        <daftarPage :show-daftar="showDaftar" />
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
  },
  data () {
    return {
      showLogin: false,
      showDaftar: false
    }
  },
  methods: {
    google (data) {
      this.showLogin = !data
      this.AkunGoogle = data
      console.log('data', data)
      console.log('google', this.AkunGoogle)
    },
    daftar (data) {
      this.showLogin = !data
      this.showDaftar = data
      console.log('data', data)
      console.log('daftar', this.showDaftar)
    }
  }
}
</script>
