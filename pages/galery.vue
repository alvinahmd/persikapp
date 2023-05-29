<template>
  <div>
    <div class="my-0 mx-auto min-h-full max-w-screen-sm">
      <div class="container  bg-white shadow-lg">
        <div class="mb-4 flex py-5 px-4 bg-white shadow-lg">
          <router-link to="/">
            <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
            </svg>
          </router-link>
          <h1 v-if="!searchShown" class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
            Galeri
          </h1>
          <div @click="showSearch">
            <div class="cursor-pointer">
              <img src="/frame.png">
            </div>
          </div>
          <div v-if="searchShown" class="w-full">
            <div class="relative mb-4 flex px-4 w-full ">
              <input
                v-model="cari"
                type="search"
                class="relative w-full px-3 py-1 pt-2 flex-auto rounded-full border border-solid border-black bg-transparent bg-clip-padding text-base font-normal outline-none transition duration-300 ease-in-out focus:border-purple-900 focus:ring-purple-900 dark:placeholder-black"
                placeholder="Cari galery"
                @keyup.enter="getData"
              >
            </div>
          </div>
        </div>
        <div class="px-10 py-4 cursor-pointer">
          <div v-for="(galeri, index) in album" :key="index" class="w-full relative mb-8" @click="showfoto">
            <div class="relativ">
              <div class="absolute rounded-lg w-full h-full bg-gradient-to-t from-purple-800" />
              <img :src="$axios.defaults.baseURL+'/'+galeri.tiket.tuan_rumah.image" :alt="galeri.tiket.tuan_rumah.image" class="rounded-lg w-full h-full ">
            </div>
            <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
              <div class="flex">
                <div class="text-white pt-20">
                  <div class="mt-20">
                    <h5 class="inter font-bold mt-5 pl-4 text-4xl">
                      {{ galeri.tiket.tuan_rumah.nama }} VS {{ galeri.tiket.penantang.nama }}
                    </h5>
                    <p class="font-semibold pl-4 pt-5 text-xl">
                      {{ galeri.tiket.stadiun }}
                    </p>
                    <p class="inter pl-5 text-xl mt-3 mb-20">
                      {{ galeri.tiket.tanggal }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="fixed top-[50%] left-0 flex justify-center items-end w-screen h-2/3">
      <div class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 duration-300" @click="showModal = false" />
      <div class="w-full max-w-screen-sm bg-white max-h-screen overflow-y-scroll" style="z-index: 1;">
        <div>
          <div class="container ">
            <div class=" w-full flex flex-row py-5 rounded-t-xl shadow-lg" style="background-color:rgba(50, 11, 78, 1)">
              <h1 class="font-bold text-2xl mx-auto" style="color:rgba(255, 255, 255, 1)">
                Foto(24)
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="cursor-pointer  grid grid-cols-3 p-1 gap-2">
              <!-- <div v-if="index" id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls blueimp-gallery-display">donwload</div> -->
              <gallery :images="images" :index="index" @close="index = null">
                <h1>Coba</h1>
              </gallery>
              <div
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                class="image"
                :style="{ backgroundImage: 'url(' + image + ')', width: '200px', height: '100px' }"
                @click="fotoTampil(image, imageIndex)"
              />
              <div v-if="images.length === 0">
                Belum ada foto
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'
export default {
  components: {
    gallery: VueGallery
  },
  data () {
    return {
      searchShown: false,
      showModal: false,
      album: null,
      tanggal: null,
      image: null,
      nama: null,
      images: [],
      index: null,
      cari: null
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    fotoTampil (image, i) {
      this.index = i
      const el = this.$el.querySelector('.blueimp-gallery-controls')

      const button = document.createElement('button')
      button.classList.add('absolute', 'top-0', 'text-white')
      button.addEventListener('click', function () {
        const a = document.createElement('a')
        // a.href = image
        // const n = image.lastIndexOf('/')
        // const name = image.substring(n + 1)
        const parts = image.split('/')
        const name = parts.pop()
        console.log(name)
        // a.download = name
        a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(image))
        a.setAttribute('download', name)

        a.style.display = 'none'

        document.body.appendChild(a)

        a.click()

        document.body.removeChild(a)
        // a.click()
        console.log(a)
      })
      el.appendChild(button).innerText = 'download'
    },
    showSearch () {
      this.searchShown = !this.searchShown
    },
    // async mencari () {
    //   // eslint-disable-next-line no-unused-expressions
    //   // this.getData()
    //   // console.log('nama', this.cari)
    //   try {
    //     await this.$axios.$get('/api/galery_pertandingan', {
    //       params: {
    //         nama: this.cari
    //       },
    //       headers: { 'ngrok-skip-browser-warning': '123123' }
    //     })
    //       .then((res) => {
    //         this.persik = res.message
    //       })
    //   } catch (error) {
    //     alert(alert.response.data.message)
    //   }
    // },
    async getData () {
      try {
        await this.$axios.$get('/api/galery_pertandingan', {
          params: {
            nama: this.cari
          },
          headers: { 'ngrok-skip-browser-warning': '123123' }
        })
          .then((res) => {
            this.album = res.galerys
          })
      } catch (error) {
        alert(alert.response.data.message)
      }
    },
    async showfoto () {
      this.showModal = true
      try {
        await this.$axios.$get('/api/photo', {
          headers: { 'ngrok-skip-browser-warning': '123123' }
        })
          .then((res) => {
            this.images = res.photos.map((value) => {
              return this.$axios.defaults.baseURL + '/' + value.path
            })
          })
      } catch (error) {
        alert(alert.response.data.message)
      }
    }
  }
}
</script>
<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 5px;
  }
</style>
