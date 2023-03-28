<template>
  <div>
    <div v-if="showGanti" class="fixed top-0 left-0 flex justify-center items-end w-screen h-full">
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
                Reset kata Sandi
              </h1>
            </div>
          </div>
        </div>
        <div class="container px-5 space-y-10 py-3">
          <div class="w-full label border-b-4 text-base focus-within:border-purple-400 duration-500 transform border-gray-500">
            Old Password
            <input v-model="oldPasswd" type="text" placeholder="Buat kata Sandi" class=" pt-2 bg-transparent w-full focus:outline-none placeholder-gray-300">
          </div>
          <div class="w-full label border-b-4 text-base focus-within:border-purple-400 duration-500 transform border-gray-500">
            New Password
            <input v-model="newPassword" type="text" placeholder="Buat kata Sandi" class=" pt-2 bg-transparent w-full focus:outline-none placeholder-gray-300">
          </div>
          <div class="w-full label border-b-4 text-base focus-within:border-purple-400 duration-500 transform border-gray-500">
            Konfirmasi kata Sandi
            <input v-model="confirmPasswd" type="text" placeholder="Konfirmasi Kata Sandi" class=" pt-2 bg-transparent w-full focus:outline-none placeholder-gray-300">
          </div>
          <button class="rounded-lg w-full text-white text-base font-bold py-3 bg-purple-900 hover:bg-purple-700 duration-500" @click="gantiPasswd">
            Simpan kata Sandi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showGanti: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      oldPasswd: null,
      newPassword: null,
      confirmPasswd: null
    }
  },
  methods: {
    async gantiPasswd () {
      try {
        const res = await this.$axios.$post('/api/users/update', {
          old_password: this.oldPasswd,
          password: this.newPassword,
          confirm_password: this.confirmPasswd
        })
        alert(res.message)
      } catch (error) {
        alert(error.response.data.message)
      }
    }
  }
}
</script>
