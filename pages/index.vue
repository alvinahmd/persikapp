<template>
  <div>
    <div class="my-0 mx-auto min-h-full max-w-screen-sm">
      <div class="container bg-white shadow-md">
        <!-- pencarian -->
        <div class="relative mb-4 flex flex-row py-5 px-4 bg-white shadow-lg">
          <input type="search" class="relative m-0 mr-4  w-[1%] px-3 py-2 flex-auto rounded-full border border-solid border-black bg-transparent bg-clip-padding  text-base font-normal  outline-none transition duration-300 ease-in-out focus:border-primary focus:outline-none  dark:placeholder:text-black" placeholder="Cari tiket" aria-label="Search" aria-describedby="button-addon2">
          <img src="/krj.png" alt="" class="w-9 mr-3 items-center">
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
                galery
              </div>
            </div>
          </div>
          <div class="px-5 py-5">
            <div class="w-full">
              <div class="icon w-full bg-no-reapet bg-contain bg-purple-200 pt-5 pl-5 h-min outline-none rounded-lg">
                <a href="" target="blank">
                  <img src="/replay.png" alt="" class="h-10">
                </a>
              </div>
              <div class="label text-center">
                replay
              </div>
            </div>
          </div>
          <div class="px-5 py-5">
            <div class="w-full">
              <div class="icon w-full bg-no-reapet bg-contain bg-purple-200 pt-5 pl-5 h-min outline-none rounded-lg">
                <router-link to="/jadwal">
                  <img src="/calender.png" alt="" class="h-10">
                </router-link>
              </div>
              <div class="label text-center">
                jadwal
              </div>
            </div>
          </div>
        </div>
        <!-- icon Akhir -->
        <!-- Foto -->
        <div class="container">
          <div class="px-5 py-5">
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
            <div>
              <ul class="flex justify-between px-14 items-center">
                <li>
                  <a href="">
                    <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.4122 10.0494L21.4123 10.0494C21.7871 10.4047 22 10.8995 22 11.4177V22.118C22 23.1596 21.1582 24 20.125 24H17.25C16.2168 24 15.375 23.1596 15.375 22.118V17.3147C15.375 16.2342 14.5005 15.3541 13.4167 15.3541H9.58333C8.49953 15.3541 7.625 16.2342 7.625 17.3147V22.118C7.625 23.1597 6.78324 24 5.75 24H2.875C1.84176 24 1 23.1597 1 22.118V11.4177C1 10.8995 1.21288 10.4046 1.58774 10.0494L10.8711 1.25101C11.2243 0.916331 11.7757 0.916328 12.1289 1.25101C12.1289 1.25101 12.1289 1.25101 12.1289 1.25101L21.4122 10.0494Z" fill="white" stroke="white" stroke-width="2" />
                    </svg>
                    <span class="text-white">Beranda</span>
                  </a>
                </li>
                <li class="text-white">
                  <router-link to="/pesan">
                    <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="text-white">Pesan</span>
                  </router-link>
                </li>
                <li>
                  <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3003 2.27705C17.838 1.79918 18.6612 1.84765 19.1391 2.38531L20.5196 3.93851C19.3167 5.16728 19.2538 7.13551 20.4135 8.44035C21.5733 9.74519 23.5353 9.91369 24.8967 8.86328L26.2772 10.4165C26.7551 10.9541 26.7066 11.7774 26.1689 12.2553L11.2539 25.5117C10.7163 25.9896 9.89301 25.9411 9.41513 25.4035L8.03465 23.8503C9.23756 22.6215 9.30044 20.6533 8.1407 19.3484C6.98096 18.0436 5.01895 17.8751 3.65752 18.9255L2.27703 17.3723C1.79916 16.8347 1.84763 16.0114 2.38529 15.5335L17.3003 2.27705Z" stroke="#D2D2D2" stroke-width="2" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
