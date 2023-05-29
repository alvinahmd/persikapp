<template>
  <div>
    <div v-if="showGoogle" class="fixed top-0 left-0 flex justify-center items-end w-screen h-full">
      <div class="fixed top-0 left-0 w-screen h-screen duration-700" @click="$emit('close')" />
      <div class="w-full max-w-screen-sm bg-white max-h-screen" style="z-index: 1;">
        <div>
          <div class="container">
            <div class="py-5 px-4 rounded-t-xl bg-white shadow-lg">
              <h1 class="font-bold text-center text-2xl mx-auto" style="color:rgba(50, 11, 78, 1)">
                Pilih  Akun
              </h1>
            </div>
          </div>
          <div class="container bg-white">
            <div class="border-t solid " style="color:rgba(188, 188, 188, 1)">
              <div class="items-center pt-3 pb-3">
                <div class="px-5 flex  flex-row">
                  <img src="/g1.png" alt="">
                  <h1 class="text-md font-semibold pl-4 " style="color:rgba(68, 68, 68, 1)">
                    Orang Kece
                  </h1>
                  <div class="label text-center">
                    trop
                  </div>
                </div>
              </div>
              <div class="border b solid" />
              <div class="items-center pt-3 pb-3">
                <div class="px-5 flex  flex-row">
                  <img src="/g2.png" alt="">
                  <h1 class="text-md font-semibold pl-4 " style="color:rgba(68, 68, 68, 1)">
                    Dvndra Liarach
                  </h1>
                  <div class="label text-center">
                    trop
                  </div>
                </div>
              </div>
              <div class="border b solid" />
              <div class="items-center pt-3 pb-3">
                <div class="px-5 flex  flex-row">
                  <img src="/g3.png" alt="">
                  <h1 class="text-md font-semibold pl-4 " style="color:rgba(68, 68, 68, 1)">
                    trulalala
                  </h1>
                  <div class="label text-center">
                    trop
                  </div>
                </div>
              </div>
              <div class="border b solid" />
              <div class="items-center pt-3 pb-3">
                <div class="px-5 flex  flex-row" @click="tambah">
                  <img src="/++.png" alt="">
                  <h1 class="text-md font-semibold pl-4 " style="color:rgba(68, 68, 68, 1)">
                    Tambah Akun Lain
                  </h1>
                </div>
              </div>
              <div class="border b solid" />
              <div class="items-center pt-3 pb-3">
                <div class="px-5 text-sm" style="color: rgba(118, 118, 118, 1);">
                  Untuk melanjutkan, Google akan membagikan nama, alamat, email, dan foto profil Anda ke Persik kediri.
                </div>
              </div>
              <div class="border b solid" />
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
    showGoogle: {
      type: Boolean,
      default: false
    }
  },
  async tambah () {
    try {
      const res = await this.$axios.$post('/api/google',
        {
          nama: this.nama,
          email: this.email,
          password: this.password
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

</script>
