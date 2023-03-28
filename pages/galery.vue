<template>
  <div>
    <div class="my-0 mx-auto min-h-full max-w-screen-sm">
      <div class="container  bg-white shadow-lg">
        <div class="mb-4 flex flex-row py-5 px-4 bg-white shadow-lg">
          <router-link to="/">
            <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
            </svg>
          </router-link>
          <h1 v-if="!searchShown" class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
            Galeri
          </h1>
          <div @click="showSearch">
            <div class="absolute right-1/3">
              <img src="/frame.png">
            </div>
          </div>
          <div v-if="searchShown">
            <div class="relative mb-4 flex flex-row justify-between px-4 ">
              <input
                type="search"
                class="relative m-5-mr-4 w-[5%] px-44 py-1 pt-2 flex-auto rounded-full border border-solid border-black bg-transparent bg-clip-padding text-base font-normal outline-none transition duration-300 ease-in-out focus:border-primary focus:shadow-te-primary focus:outline dark:placeholder-black"
                placeholder="Cari replay"
                aria-label="Search"
                aria-describedby="button-addon2"
              >
            </div>
          </div>
        </div>
        <div class="px-10 py-4 cursor-pointer">
          <div v-for="(galeri, index) in album" :key="index" class="w-full relative mb-8" @click="showModal = true">
            <div class="relativ">
              <div class="absolute rounded-lg w-full h-full bg-gradient-to-t from-purple-800" />
              <img :src="'/' + galeri.bg" alt="" class="rounded-lg w-full h-full ">
            </div>
            <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
              <div class="flex">
                <div class="text-white pt-20">
                  <div class="mt-20">
                    <h5 class="inter font-bold mt-5 pl-4 text-4xl">
                      {{ galeri.judul }}
                    </h5>
                    <p class="inter pl-5 text-xl mt-3 mb-20">
                      {{ galeri.tanggal }} | {{ galeri.jumlahfoto }} Foto
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
      <div class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 duration-300" @click="showModal = false" />
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
            <div class="grid grid-cols-3 p-1 gap-2">
              <gallery :images="images" :index="index" @close="index = null" />
              <div
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                class="image"
                :style="{ backgroundImage: 'url(' + image + ')', width: '200px', height: '100px' }"
                @click="index = imageIndex"
              />
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
      album: [
        {
          judul: 'Persik kediri VS Dewa United',
          tanggal: '9 februari 2023',
          jumlahfoto: 24,
          bg: 'gfoto.png'
        },
        {
          judul: 'Persik kediri VS Dewa United',
          tanggal: '9 februari 2023',
          jumlahfoto: 24,
          bg: 'gfoto.png'
        },
        {
          judul: 'Persik kediri VS Dewa United',
          tanggal: '9 februari 2023',
          jumlahfoto: 24,
          bg: 'gfoto.png'
        }
      ],
      images: [
        'psk1.jpg',
        'psk2.jpg',
        'psk3.jpg',
        'psk4.jpg',
        'psk5.jpg',
        'psk6.jpg',
        'psk7.jpg',
        'psk8.jpg',
        'psk9.jpg',
        'psk10.jpg',
        'psk11.jpg',
        'psk12.jpg',
        'psk13.jpg',
        'psk14.jpg',
        'psk15.jpg',
        'psk16.jpg',
        'psk17.jpg',
        'psk18.jpg',
        'psk19.jpg',
        'psk20.jpg',
        'psk21.jpg',
        'psk22.jpg',
        'psk23.jpg',
        'psk24.jpg'
      ],
      index: null
    }
  },
  methods: {
    showSearch () {
      this.searchShown = !this.searchShown
    }
  }
}
</script>
<style>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 10px;
  }
</style>
