<template>
  <div>
    <div v-if="showLogin" class="fixed top[100%] left-0 flex justify-center items-end w-screen h-2/4">
      <div class="fixed top-0 left-0 w-screen h-screen duration-700" @click="$emit('close')" />
      <div class="w-full max-w-screen-sm bg-white overflow-y-auto" style="z-index: 1; height: calc(100vh - 50px)">
        <div>
          <div class="container">
            <div class="mb-4 flex flex-row py-5 px-4 rounded-t-xl bg-white shadow-lg">
              <router-link to="">
                <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
                </svg>
              </router-link>
              <h1 class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1)">
                Login
              </h1>
            </div>
          </div>
        </div>
        <div class="container px-5 space-y-10 py-3">
          <div>
            <div class="w-full border-b-4 text-base focus-within:border-purple-400 duration-500 transform border-gray-500">
              <input v-model="inputEmail" type="text" placeholder="Masukan Email" class=" pt-2 bg-transparent w-full focus:outline-none placeholder-black" style="color:rgba(68, 68, 68, 1)">
            </div>
            <div v-if="errorInputEmail" class="text-sm text-red-500">
              {{ errorInputEmail }}
            </div>
          </div>
          <div>
            <div class="w-full border-b-4 text-base focus-within:border-purple-400 duration-500 transform border-gray-500">
              <input v-model="inputPasswd" type="password" placeholder="Masukan password" class=" pt-2 bg-transparent w-full focus:outline-none placeholder-black" style="color:rgba(68, 68, 68, 1)">
            </div>
            <div v-if="errorInputPasswd" class="text-sm text-red-500">
              {{ errorInputPasswd }}
            </div>
          </div>
          <button class="rounded-lg w-full text-white text-base font-bold py-3 bg-purple-900 hover:bg-purple-700 duration-500" @click="checkFormLogin">
            Masuk
          </button>
          <p class=" cursor-pointer text-gray-700 text-base hover:text-gray-400" @click="rst">
            Lupa Kata Sandi
          </p>
        </div>
        <div class="px-5 py-3 items-center text-gray-500">
          <div class="items-center flex w-full">
            <hr class="w-full border-gray-500">
            <p class="text-center">
              Atau
            </p>
            <hr class="w-full border-gray-500">
          </div>
          <div class="w-full">
            <button class="text-base font-semibold bg-gray-400 hover:bg-gray-300 duration-500 rounded-xl py-2 px-5 w-full flex justify-center items-center" style="color:rgba(68, 68, 68, 1)" @click="gg">
              <img src="/google.png" alt="" class="w-7 h-7 mr-3"> Masuk Dengan Goggle
            </button>
            <button class="mt-5 mb-10 text-base font-semibold bg-gray-400 hover:bg-gray-300 duration-500 rounded-xl py-2 px-5 w-full flex justify-center items-center" style="color:rgba(68, 68, 68, 1)">
              <img src="/facebook.png" alt="" class="w-7 h-7 mr-3"> Masuk Dengan Facebook
            </button>
            <p class="cursor-pointer text-center mb-3 text-base font-semibold text-gray-500 hover:text-gray-300 duration-500">
              Belum Punya Akun?
              <span class="text-base font-semibold text-purple-900 hover:text-purple-700 duration-500 cursor-pointer" @click="dd">Buat Sekarang</span>
            </p>
          </div>
        </div>
        <div class="h-48" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showLogin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      daftarShow: false,
      AkunGoogle: false,
      inputEmail: null,
      errorInputEmail: null,
      inputPasswd: null
    }
  },
  methods: {
    gg () {
      this.$emit('ok', true)
    },
    dd () {
      this.$emit('pp', true)
    },
    rst () {
      this.$emit('rs', true)
    },
    checkFormLogin () {
      if (this.inputEmail && this.inputPasswd) { this.login() }
      if (this.inputEmail) { this.errorInputEmail = null }
      if (!this.inputEmail) { this.errorInputEmail = 'Email harus diisi' }
      if (this.inputPasswd) { this.errorInputPasswd = null }
      if (!this.inputPasswd) { this.errorInputPasswd = 'Password harus diisi' }
    },
    async login () {
      try {
        const res = await this.$axios.$post('/api/users/login',
          {
            email: this.inputEmail,
            password: this.inputPasswd
          })
        this.$nuxt.$cookiz.set('name', res.data.user.name)
        this.$nuxt.$cookiz.set('email', res.data.user.email)
        this.$nuxt.$cookiz.set('token', res.data.access_token)
        this.$router.replace('/')
      } catch (error) {
        alert(error.response.data.message)
      }
    }
  }
}
</script>
