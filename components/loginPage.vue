
<template>
  <div>
    <div v-if="showLogin" class="fixed top[100%] left-0 flex justify-center items-end w-screen h-2/4">
      <div class="fixed top-0 left-0 w-screen h-screen duration-700" @click="$emit('close')" />
      <div class="w-full max-w-screen-sm bg-white overflow-y-auto" style="z-index: 9999; height: calc(100vh - 50px)">
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
            <div class="w-full border-b-4 text-base focus-within:border-purple-400 duration-500 transform border-gray-500" style="color:rgba(68, 68, 68, 1)">
              <input v-if="showPassword" v-model="inputPasswd" type="text" placeholder="Masukan password" class=" pt-2 bg-transparent w-full focus:outline-none placeholder-black">
              <input v-else v-model="inputPasswd" type="password" placeholder="Masukan password" class=" pt-2 bg-transparent w-full focus:outline-none placeholder-black">
              <button class="absolute top-1 right-2" @click="toggleShow">
                <span v-if="showPassword">
                  <svg
                    width="26"
                    height="24"
                    viewBox="0 0 26 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24.853 5.80498C24.9861 5.94021 25.1206 6.07688 25.257 6.21486C24.8353 6.56669 24.4249 6.92761 24.0207 7.28307C23.7794 7.49533 23.5402 7.70565 23.3022 7.91091C22.5218 8.58388 21.7318 9.2224 20.8387 9.77797C19.068 10.8794 16.8561 11.6772 13.4937 11.6772C7.09369 11.6772 3.31137 8.78335 0.726526 6.26775C0.734986 6.26004 0.743442 6.25233 0.751895 6.24462C2.40883 4.73393 3.91474 3.36094 5.75854 2.32869C7.73649 1.22132 10.1198 0.5 13.4937 0.5C16.8672 0.5 19.0768 1.22097 20.8387 2.31697C22.3368 3.24886 23.5242 4.45504 24.853 5.80498Z" stroke="black" />
                    <circle cx="13.1643" cy="6.25315" r="5.42405" stroke="black" />
                    <circle cx="13.1642" cy="6.25327" r="2.63291" fill="black" />
                  </svg>
                </span>
                <span v-if="!showPassword">
                  <svg
                    width="26"
                    height="24"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24.853 11.805C24.9861 11.9402 25.1206 12.0769 25.257 12.2149C24.8353 12.5667 24.4249 12.9276 24.0207 13.283C23.7794 13.4953 23.5402 13.7056 23.3022 13.9109C22.5218 14.5839 21.7318 15.2224 20.8387 15.778C19.068 16.8794 16.8561 17.6772 13.4937 17.6772C7.09369 17.6772 3.31137 14.7833 0.726526 12.2678C0.734986 12.26 0.743442 12.2523 0.751895 12.2446C2.40883 10.7339 3.91474 9.36094 5.75854 8.32869C7.73649 7.22132 10.1198 6.5 13.4937 6.5C16.8672 6.5 19.0768 7.22097 20.8387 8.31697C22.3368 9.24887 23.5242 10.455 24.853 11.805Z" stroke="black" />
                    <circle cx="13.1643" cy="12.2532" r="5.42405" stroke="black" />
                    <circle cx="13.1642" cy="12.2533" r="2.63291" fill="black" />
                    <path d="M22 1L7 23.5" stroke="white" stroke-linecap="round" />
                    <path d="M21 1L6 23.5" stroke="black" stroke-linecap="round" />
                  </svg>
                </span>
              </button>
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
            <button class="text-base font-semibold bg-gray-400 hover:bg-gray-300 duration-500 rounded-xl py-2 px-5 w-full flex justify-center items-center" style="color:rgba(68, 68, 68, 1)" @click="googlelogin">
              <img src="/google.png" alt="" class="w-7 h-7 mr-3"> Masuk Dengan Goggle
            </button>
            <p class="cursor-pointer text-center mb-3 text-base font-semibold text-gray-500 hover:text-gray-300 duration-500">
              Belum Punya Akun?
              <span class="text-base font-semibold text-purple-900 hover:text-purple-500 duration-500" @click="dd">Buat Sekarang</span>
            </p>
          </div>
        </div>
        <div class="h-40" />
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
      showPassword: false,
      inputPasswd: null,
      errorInputPasswd: null,
      logingoogle: false
    }
  },
  computed: {
    buttonLabel () {
      return (this.showPassword) ? 'Hide' : 'Show'
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
    toggleShow () {
      this.showPassword = !this.showPassword
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
        this.$toast.success('Login Berhasil')
      } catch (error) {
        alert(error.response.data.message)
      }
    },
    async googlelogin () {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      provider.setCustomParameters({ prompt: 'select_account' })
      await this.$fire.auth.signInWithPopup(provider).then((res) => {
        this.$cookiz.set('name', res.user.displayName)
        this.$cookiz.set('email', res.user.email)
        this.$cookiz.set('token', res.credential.accessToken)
        this.$router.replace('/')
        this.$toast.success('Login Berhasil')
        // eslint-disable-next-line no-console
        console.log('res', res)
      }).catch((e) => {
        // eslint-disable-next-line no-console
        console.log('[g]', e)
      })
    }
  }
}
</script>
