<template>
  <div>
    <div class="my-0 mx-auto min-h-full max-w-screen-sm">
      <div class="container bg-white shadow-md">
        <!-- pencarian -->
        <div class="relative flex flex-row py-5 px-4 bg-white shadow-lg">
          <div class="pr-4">
            <img src="pskicon.png" alt="" class="w-[45px] h-[45px]">
          </div>
          <input
            v-model="cari"
            type="search"
            class="relative m-0 mr-4  w-[1%] px-3 py-2 flex-auto rounded-full border border-solid border-black  text-base outline-none transition duration-300 ease-in-out focus:border-purple-900 focus:ring-purple-900 dark:placeholder:text-black"
            placeholder="Cari tiket"
            aria-label="Search"
            aria-describedby="button-addon2"
            @keyup.enter="mencari"
          >
          <div @click="keranjang">
            <img src="/krj.png" alt="" class="w-9 mr-3 items-center cursor-pointer">
          </div>
          <div @click="profil">
            <img src="/akun.png" alt="" class="w-9 items-center cursor-pointer">
          </div>
        </div>
        <!-- pencarian Akhir -->
        <!-- icon icon -->
        <div class="flex flex-row justify-between pt-5 text-lg font-serif">
          <div class="px-5 py-5">
            <div class="icon w-full bg-no-reapet bg-contain cursor-pointer bg-purple-200 pt-5 pl-5 h-min outline-none rounded-lg" @click="team">
              <!-- <router-link to="/pemain"> -->
              <img src="/team.png" alt="" class="h-10">
              <!-- </router-link> -->
            </div>
            <div class="label text-center">
              Team
            </div>
          </div>
          <div class=" px-5 py-5">
            <div class="w-full">
              <div class="icon w-full bg-no-reapet bg-contain cursor-pointer bg-purple-200 pt-5 pl-5 h-min outline-none rounded-lg" @click="galeri">
                <!-- <router-link to="/galery"> -->
                <img src="/gallery.png" alt="" class="h-10">
                <!-- </router-link> -->
              </div>
              <div class="label text-center">
                Galery
              </div>
            </div>
          </div>
          <div class="px-5 py-5">
            <div class="w-full">
              <div class="icon w-full bg-no-reapet bg-contain cursor-pointer bg-purple-200 pt-5 pl-5 h-min outline-none rounded-lg" @click="replay">
                <!-- <a href="/replay" target="blank"> -->
                <img src="/replay.png" alt="" class="h-10">
                <!-- </a> -->
              </div>
              <div class="label text-center">
                Replay
              </div>
            </div>
          </div>
          <div class="px-5 py-5">
            <div class="w-full">
              <div class="icon w-full bg-no-reapet bg-contain cursor-pointer bg-purple-200 pt-5 pl-5 h-min outline-none rounded-lg" @click="jadwal">
                <!-- <router-link to="/jadwal"> -->
                <img src="/jadwal.png" alt="" class="h-10">
                <!-- </router-link> -->
              </div>
              <div class="label text-center">
                Jadwal
              </div>
            </div>
          </div>
        </div>
        <!-- icon Akhir -->
        <!-- Foto -->
        <div class="relative">
          <div class="px-5 py-5 cursor-pointer">
            <div class=" space-y-8 w-full relative mb-8">
              <div v-for="(tiket, index) in persik" :key="index" class="relative" @click="clickTiket">
                <div class="absolute rounded-lg w-full h-full bg-gradient-to-t from-purple-900" />
                <img :src="$axios.defaults.baseURL+'/'+tiket.tuan_rumah.image" :alt="tiket.tuan_rumah.image" class="rounded-lg w-full h-full ">
                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full  bg-fixed">
                  <div class="flex">
                    <div>
                      <div class="pt-4">
                        <span class="mb-4 font-semibold text-white bg-blue-400 rounded-full px-3 py-2 text-center">
                          Tersedia
                        </span>
                      </div>
                      <div class=" text-white pt-4">
                        <h5 class="inter font-bold mt-5 pl-4 text-4xl">
                          {{ tiket.tuan_rumah.nama }}
                        </h5>
                        <p class="inter font-bold pl-4 text-4xl">
                          VS {{ tiket.penantang.nama }}
                        </p>
                        <p class="font-semibold pl-4 pt-5 text-xl">
                          {{ tiket.stadiun }}
                        </p>
                        <p class="inter pl-5 text-xl mt-3 mb-20">
                          {{ tiket.tanggal }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full bg-purple-900 py-4 ">
          <div class="icon-w-full-bg-no-reapet bg-contain  pt-5 pl-5 h-min outline-none">
            <ul class="flex justify-between px-4 py-2 items-center">
              <li>
                <a href="">
                  <img src="/home2.png" alt="" class="">
                  <div class="absolute left-1/4 font-medium text-white px-10">
                    Beranda
                  </div>
                </a>
              </li>
              <li class="text-white">
                <router-link to="/pesan">
                  <img src="/pesan1.png" alt="">
                </router-link>
              </li>
              <li @click="riwayat">
                <img src="/tiket1.png" alt="" class="cursor-pointer">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <daftarPage :show-daftar="showDaftar" @close="showDaftar =false" />
    <resetPage :show-reset="resetShow" @close="resetShow =false" />
    <GantiPass :show-ganti="showGanti" />
    <keranjangPage :show-keranjang="showKeranjang" @close="showKeranjang =false" />
    <login2 :show-login="showLogin" @close="showLogin =false" @pp="daftar" @rs="reset" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      showLogin: false,
      showPutus: false,
      resetShow: false,
      showDaftar: false,
      showKeranjang: false,
      showGanti: false,
      persik: null,
      nama: null,
      tanggal: null,
      cari: null,
      image: null
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
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
    },
    async mencari () {
      // eslint-disable-next-line no-unused-expressions
      // this.getData()
      // console.log('nama', this.cari)
      try {
        await this.$axios.$get('/api/tiket', {
          params: {
            q: this.cari
          },
          headers: { 'ngrok-skip-browser-warning': '123123' }
        })
          .then((res) => {
            this.persik = res.message
          })
      } catch (error) {
        alert(alert.response.data.message)
      }
    },
    async getData () {
      try {
        await this.$axios.$get('/api/tiket', {
          params: {
            q: this.cari
          },
          headers: { 'ngrok-skip-browser-warning': '123123' }
        })
          .then((res) => {
            this.persik = res.message
          })
      } catch (error) {
        alert(alert.response.data.message)
      }
    },
    clickTiket () {
      const token = this.$cookiz.get('token')
      if (token) {
        this.$router.push('/tiket2')
      } else {
        this.showLogin = true
      }
    },
    team () {
      const token = this.$cookiz.get('token')
      if (token) {
        this.$router.push('/pemain')
      } else {
        this.showLogin = true
      }
    },
    galeri () {
      const token = this.$cookiz.get('token')
      if (token) {
        this.$router.push('/galery')
      } else {
        this.showLogin = true
      }
    },
    replay () {
      const token = this.$cookiz.get('token')
      if (token) {
        this.$router.push('/replay')
      } else {
        this.showLogin = true
      }
    },
    jadwal () {
      const token = this.$cookiz.get('token')
      if (token) {
        this.$router.push('/jadwal')
      } else {
        this.showLogin = true
      }
    },
    keranjang () {
      const token = this.$cookiz.get('token')
      if (token) {
        this.showKeranjang = true
      } else {
        this.showLogin = true
      }
    },
    profil () {
      const token = this.$cookiz.get('token')
      if (token) {
        this.$router.push('/profil')
      } else {
        this.showLogin = true
      }
    },
    riwayat () {
      const token = this.$cookiz.get('token')
      if (token) {
        this.$router.push('/riwayat')
      } else {
        this.showLogin = true
      }
    }
  }
}
</script>
