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
            <div class="py-5 px-5 cursor-pointer" @click="ShowProfil = true">
              <img src="/profile.png" alt="" class="w-20 h-20">
            </div>
            <div class="py-5 px-8">
              <h2 class="font-bold text-xl">
                {{ $nuxt.$cookiz.get('name') }}
              </h2>
              <span class="text-red-500 text-md font-bold">
                {{ $nuxt.$cookiz.get('email') }}
              </span>
            </div>
          </div>
        </div>
        <div class="container bg-white">
          <div class="border-t solid " style="color:rgba(188, 188, 188, 1)">
            <div class="items-center pt-3 pb-3">
              <div class="px-5 cursor-pointer" @click="showAkun = true">
                <div class="flex gap-4">
                  <img src="/pp.png" alt="">
                  <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                    Akun
                  </h1>
                </div>
              </div>
            </div>
            <div class="border b solid" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5 cursor-pointer" @click="showPutus = true">
                <div class="flex gap-4">
                  <img src="/dompet.png" alt="">
                  <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                    Putuskan Dana
                  </h1>
                </div>
              </div>
            </div>
            <div class="border b solid" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5 cursor-pointer" @click="showBahasa = true">
                <div class="flex gap-4">
                  <img src="/bahasa.png" alt="">
                  <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                    Pilih Bahasa
                  </h1>
                </div>
              </div>
            </div>
            <div class="border b solid" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5">
                <router-link to="/tentangkami">
                  <div class="flex gap-4">
                    <img src="/tentang.png" alt="">
                    <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                      Tentang Kami
                    </h1>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="border b solid" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5">
                <router-link to="/kebijakanprivasi">
                  <div class="flex gap-4">
                    <img src="/privasi.png" alt="">
                    <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                      Kebijakan Privasi
                    </h1>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="border b solid" />
            <div class="flex flex-row justify-between items-center pt-3 pb-3">
              <div class="px-5">
                <h1 class="text-lg font-semibold text-red-500">
                  Keluar
                </h1>
              </div>
              <img class="cursor-pointer" src="/logout.png" alt="" @click="showLogout=true">
            </div>
            <div class="border b solid" />
          </div>
        </div>
      </div>
    </div>
    <ProfakunPage :show-akun="showAkun" @close="showAkun =false" />
    <PilihBahasaa :show-bahasa="showBahasa" @close="showBahasa =false" />
    <UbahProfil :show-profil="ShowProfil" @close="ShowProfil =false" />
    <PutuskanDana :show-putus="showPutus" @close="showPutus =false" />
    <keluarAkun :show-logout="showLogout" @close="showLogout =false" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      showAkun: false,
      showBahasa: false,
      ShowProfil: false,
      showPutus: false,
      showLogout: false
    }
  },
  beforeCreate () {
    if (!this.$nuxt.$cookiz.get('token')) { this.$router.replace('/profil') }
  }
}
</script>
