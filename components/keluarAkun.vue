<template>
  <div>
    <div v-if="showLogout" class="fixed top-0 left-0 flex justify-center items-end w-screen h-full">
      <div class="fixed top-0 left-0 w-screen h-screen duration-700" @click="$emit('close')" />
      <div class="w-full max-w-screen-sm max-h-screen" style="z-index: 1;">
        <div class="container">
          <!-- <div class="w-10 h-10 bg-sky-300 rounded-full translate-x-96 flex cursor-pointer">
            <a href="/profLogin" class="text-xl m-auto">X</a>
          </div> -->
          <div class="relative p-4 w-full h-full justify-center">
            <div class="relative p-4 bg-white rounded-lg shadow-md">
              <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                <h3 class=" text-center mb-3 text-2xl font-bold text-gray-700">
                  Apakah Anda Ingin Keluar Dari Akun Anda?
                </h3>
              </div>
              <div>
                <div class=" py-5 px-5">
                  <button class=" rounded-full w-full text-white text-base font-bold py-3 bg-red-700 hover:bg-red-800 duration-500" @click="logout">
                    Keluar
                  </button>
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
    showLogout: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    // logout () {
    //   this.$nuxt.$cookiz.removeAll()
    //   this.$router.replace('/')
    // }
    // eslint-disable-next-line require-await
    async logout () {
      this.$fire.auth.signOut()
      this.$router.replace('/')
      this.$toast.success('Keluar Berhasil')
      this.$cookiz.removeAll()
    }
  }
}
</script>
