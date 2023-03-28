<template>
  <div>
    <div class="my-0 mx-auto min-h-full max-w-screen-sm">
      <div class="container">
        <div class="relative flex flex-row py-5 px-4 bg-white shadow-lg">
          <router-link to="/">
            <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
            </svg>
          </router-link>
          <h1 class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
            Profil
          </h1>
        </div>
        <div class="px-5" style="background-color:rgba(210, 210, 210, 0.47)">
          <div class="flex flex-row">
            <div class="py-5 px-5">
              <img src="/profile.png" alt="" class="w-20 h-20">
            </div>
            <div class="py-5 px-8 cursor-pointer" @click="showLogin = true">
              <h2 class="font-bold text-xl">
                Anda belum memiliki akun.
              </h2>
              <span class="text-red-500 text-md font-bold px-16">Daftar <span class="text-black">Sekarang</span></span>
            </div>
          </div>
        </div>
        <div class="container bg-white">
          <div class="border-t solid " style="color:rgba(188, 188, 188, 1)">
            <div class="items-center pt-3 pb-3">
              <div class="px-5 flex gap-4 cursor-pointer" @click="showLogin = true">
                <img src="/pp.png" alt="">
                <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                  Akun
                </h1>
              </div>
            </div>
            <div class="border b solid" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5 flex gap-4 cursor-pointer" @click="showLogin = false, bahasaShow = true ">
                <img src="/bahasa.png" alt="">
                <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                  Pilih Bahasa
                </h1>
              </div>
            </div>
            <div class="border b solid" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5 flex gap-4">
                <img src="/tentang.png" alt="">
                <a href="/tentangkami">
                  <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                    Tentang Kami
                  </h1>
                </a>
              </div>
            </div>
            <div class="border b solid" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5 flex gap-4">
                <img src="/privasi.png" alt="">
                <a href="/kebijakanprivasi">
                  <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                    Kebijakan Privasi
                  </h1>
                </a>
              </div>
            </div>
            <div class="border b solid" />
            <div class="cursor-pointer flex flex-row justify-between items-center pt-3 pb-3" @click="showPutus = true ">
              <div class="px-5">
                <h1 class="text-lg font-semibold text-red-500">
                  Keluar
                </h1>
              </div>
              <img class="" src="/logout.png" alt="">
            </div>
            <div class="border b solid" />
          </div>
        </div>
      </div>
    </div>
    <daftarPage :show-daftar="showDaftar" @close="showDaftar =false" />
    <akunGoogle :show-google="AkunGoogle" @close="AkunGoogle =false" />
    <resetPage :show-reset="resetShow" @close="resetShow =false" />
    <GantiPass :show-ganti="showGanti" />
    <profakunPage :show-akun="showAkun" />
    <PilihBahasaa :show-bahasa="bahasaShow" @close="bahasaShow =false" />
    <belumPunyakun :show-putus="showPutus" @close="showPutus =false" />
    <loginPage @close="showLogin =false" :show-login="showLogin" @ok="google" @pp="daftar" @rs="reset" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      showLogin: false,
      AkunGoogle: false,
      bahasaShow: false,
      showPutus: false,
      resetShow: false,
      showDaftar: false
    }
  },
  beforeCreate () {
    if (this.$nuxt.$cookiz.get('token')) { this.$router.replace('/profLogin') }
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
    },
    reset (data) {
      this.showLogin = !data
      this.resetShow = data
      console.log('data', data)
      console.log('ganti', this.resetShow)
    }
  }
}
</script>
