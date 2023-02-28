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
          <h1 class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
            Galeri
          </h1>
        </div>
        <div class="px-10 py-4">
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
          <div class="container">
            <div class="mb-4 flex flex-row py-5 px-4 rounded-t-xl shadow-lg" style="background-color:rgba(50, 11, 78, 1)">
              <h1 class="font-bold text-2xl mx-auto" style="color:rgba(255, 255, 255, 1)">
                Foto(248)
              </h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div>
            <div class="container mx-auto px-5 py-2">
              <div class="-m-1 flex flex-wrap">
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr2.jpg" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr33.png" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr4.jpg" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr33.png" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr4.jpg" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr2.jpg" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr4.jpg" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr2.jpg" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr33.png" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr33.png" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/img1.jpg" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr2.jpg" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr2.jpg" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr4.jpg" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr2.jpg" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr33.jpg" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/img1.jpg" alt="">
                  </div>
                </div>
                <div class="flex w-1/3 flex-wrap">
                  <div class="w-full p-1">
                    <img src="/gmbr4.jpg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false,
      album: [
        {
          judul: 'Persik kediri VS Dewa United',
          tanggal: '9 februari 2023',
          jumlahfoto: 248,
          bg: 'gfoto.png'
        },
        {
          judul: 'Persik kediri VS Dewa United',
          tanggal: '9 februari 2023',
          jumlahfoto: 248,
          bg: 'gfoto.png'
        },
        {
          judul: 'Persik kediri VS Dewa United',
          tanggal: '9 februari 2023',
          jumlahfoto: 248,
          bg: 'gfoto.png'
        }
      ]
    }
  }
}
</script>
