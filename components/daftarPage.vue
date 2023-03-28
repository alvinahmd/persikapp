<template>
  <div>
    <div v-if="showDaftar" class="fixed top-0 left-0 flex justify-center items-end w-screen h-full">
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
                Buat Akun
              </h1>
            </div>
          </div>
        </div>
        <div class="container px-5 space-y-10 py-3">
          <div>
            <div class="w-full label border-b-4 text-base focus-within:border-purple-400 duration-500 transform border-gray-500">
              Nama
              <input v-model="inputNama" type="text" placeholder=" Masukan Namamu" class=" pt-2 bg-transparent w-full focus:outline-none placeholder-gray-300" style="color:rgba(68, 68, 68, 1)">
            </div>
            <div v-if="erorInputNama" class="text-sm text-red-500">
              {{ erorInputNama }}
            </div>
          </div>
          <div>
            <div class="w-full label border-b-4 text-base focus-within:border-purple-400 duration-500 transform border-gray-500">
              Email
              <input v-model="inputEmail" type="text" placeholder="Masukan Emailmu" class=" pt-2 bg-transparent w-full focus:outline-none placeholder-gray-300" style="color:rgba(68, 68, 68, 1)">
            </div>
            <div v-if="erorInputEmail" class="text-sm text-red-500">
              {{ erorInputEmail }}
            </div>
          </div>
          <div>
            <div class="w-full label border-b-4 text-base focus-within:border-purple-400 duration-500 transform border-gray-500">
              Kata Sandi
              <input v-model="inputPasswd" type="password" placeholder="Password" class=" pt-2 bg-transparent w-full focus:outline-none placeholder-gray-300" style="color:rgba(68, 68, 68, 1)">
            </div>
            <div v-if="erorInputPasswd" class="text-red-500 text-sm">
              {{ erorInputPasswd }}
            </div>
          </div>
          <button class="rounded-lg w-full text-white text-base font-bold py-3 bg-purple-900 hover:bg-purple-700 duration-500" @click="checkFormDaftar">
            Buat akun
          </button>
        </div>
        <p class="text-center mb-3 text-base font-semibold text-gray-500 hover:text-gray-300 duration-500">
          Sudah Punya Akun?
          <a class="text-base font-semibold text-purple-900 hover:text-purple-700 duration-500 cursor-pointer " @click="showLogin=true">Masuk</a>
        </p>
      </div>
    </div>
    <loginPage :show-login="showLogin" />
  </div>
</template>
<script>
export default {
  props: {
    showDaftar: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      showLogin: false,
      inputNama: null,
      inputEmail: null,
      inputPasswd: null
    }
  },

  methods: {
    checkFormDaftar () {
      if (this.inputNama && this.inputEmail && this.inputPasswd) { this.Daftar() }
      if (this.inputNama) { this.erorInputNama = null }
      if (!this.inputNama) { this.erorInputNama = 'Nama Harus Disisi' }
      if (this.inputEmail) { this.erorInputEmail = null }
      if (!this.inputEmail) { this.erorInputEmail = 'Email Harus Disisi' }
      if (this.inputPasswd) { this.erorInputPasswd = null }
      if (!this.inputPasswd) { this.erorInputPasswd = 'Password Harus Disisi' }
    },
    async Daftar () {
      try {
        const res = await this.$axios.$post('/api/users',
          {
            name: this.inputNama,
            email: this.inputEmail,
            password: this.inputPasswd
          })
        console.log('res', res)
      } catch (error) {
        alert(error.response.data.message)
      }
    }
  }
}
</script>
