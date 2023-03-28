<template>
  <div>
    <div class="my-0 mx-auto min-h-full max-w-screen-sm">
      <div class="container bg-white shadow-md">
        <!-- pencarian -->
        <div class="relative mb-4 flex flex-row py-5 px-4 bg-white shadow-lg">
          <input type="search" class="relative m-0 mr-4  w-[1%] px-3 py-2 flex-auto rounded-full border border-solid border-black bg-transparent bg-clip-padding  text-base font-normal  outline-none transition duration-300 ease-in-out focus:border-primary focus:outline-none  dark:placeholder:text-black" placeholder="Cari tiket" aria-label="Search" aria-describedby="button-addon2">
          <img src="/krj.png" alt="" class="w-9 mr-3 items-center cursor-pointer" @click="showKeranjang=true">
          <router-link to="/profil">
            <img src="/akun.png" alt="" class="w-9 items-center">
          </router-link>
        </div>
        <!-- pencarian Akhir -->
        <!-- icon icon -->
        <div class="mb-2 flex flex-row justify-between pt-5">
          <div class="px-5 py-5">
            <div class="icon w-full bg-no-reapet bg-contain bg-purple-200 pt-5 pl-5 h-min outline-none rounded-lg">
              <router-link to="/pemain">
                <img src="/team.png" alt="" class="h-10">
              </router-link>
            </div>
            <div class="label text-center">
              Team
            </div>
          </div>
          <div class=" px-5 py-5">
            <div class="w-full">
              <div class="icon w-full bg-no-reapet bg-contain bg-purple-200 pt-5 pl-5 h-min outline-none rounded-lg">
                <router-link to="/galery">
                  <img src="/gallery.png" alt="" class="h-10">
                </router-link>
              </div>
              <div class="label text-center">
                Galery
              </div>
            </div>
          </div>
          <div class="px-5 py-5">
            <div class="w-full">
              <div class="icon w-full bg-no-reapet bg-contain bg-purple-200 pt-5 pl-5 h-min outline-none rounded-lg">
                <a href="/replay" target="blank">
                  <img src="/replay.png" alt="" class="h-10">
                </a>
              </div>
              <div class="label text-center">
                Replay
              </div>
            </div>
          </div>
          <div class="px-5 py-5">
            <div class="w-full">
              <div class="icon w-full bg-no-reapet bg-contain bg-purple-200 pt-5 pl-5 h-min outline-none rounded-lg">
                <router-link to="/jadwal">
                  <img src="/jadwal.png" alt="" class="h-10">
                </router-link>
              </div>
              <div class="label text-center">
                Jadwal
              </div>
            </div>
          </div>
        </div>
        <!-- icon Akhir -->
        <!-- Foto -->
        <div class="container">
          <div class="px-5 py-5" @click="showLogin=true">
            <div class="w-full relative mb-8">
              <div class="relativ">
                <div class="absolute rounded-lg w-full h-full bg-gradient-to-t from-purple-900" />
                <img src="/poto.png" alt="" class="rounded-lg w-full h-full ">
              </div>
              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                <div class="flex">
                  <div class="text-white mt-5">
                    <span class="mb-4 font-semibold text-black bg-white rounded-full px-3 py-2 text-center">
                      Tanpa Penonton
                    </span>
                    <div class="pt-4">
                      <h5 class="inter font-bold mt-5 pl-4 text-4xl">
                        PSS Sleman
                      </h5>
                      <p class="inter font-bold pl-4 text-4xl">
                        VS Persik Kediri
                      </p>
                      <p class="inter pl-5 text-xl mt-3 mb-20">
                        9 Februari 2023 | 17:00
                      </p>
                      <div class="pl-5">
                        <a class="bg-yellow-300 px-2 py-3 rounded-lg text-red-600 font-bold text-xl">Live <span class="text-black text-xl">16.45</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full relative mb-32">
              <div class="relativ">
                <div class="absolute rounded-lg w-full h-full bg-gradient-to-t from-purple-900" />
                <img src="/poto.png" alt="" class="rounded-lg w-full h-full ">
              </div>
              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                <div class="w-full">
                  <div class="text-white mt-4">
                    <span class="mb-4 font-semibold text-black bg-white rounded-full px-3 py-2 text-center">
                      Tiket Tersedia
                    </span>
                    <div class="pt-4">
                      <h5 class="inter font-bold mt-5 pl-4 text-4xl">
                        Persik Kediri
                      </h5>
                      <p class="inter font-bold pl-4 text-4xl">
                        VS Bali United
                      </p>
                      <p class="inter pl-5 text-xl mt-3 mb-20">
                        14 Februari 2023 | 18:00
                      </p>
                      <div class="pl-5">
                        <a class="bg-yellow-300 px-2 py-3 rounded-lg text-red-600 font-bold text-xl">Open Gate <span class="text-black text-xl">16.30</span></a>
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
                <li>
                  <router-link to="/Tiket">
                    <img src="/tiket1.png" alt="">
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <keranjangPage :show-keranjang="showKeranjang" @close="showKeranjang =false" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      showKeranjang: false
    }
  }
}
</script>
