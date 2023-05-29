<template>
  <div class="max-w-screen-sm mx-auto">
    <div class="mb-4 flex flex-row py-5 px-4 bg-white shadow-lg my-0 mx-auto min-h-full max-w-screen-sm">
      <router-link to="/">
        <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
        </svg>
      </router-link>
      <h1 v-if="!searchShown" class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
        Replay
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
    <div class="relative mb-8">
      <div
        class="top-0 absolute h-full left-0 w-full bg-cover bg-center bg-transparent"
        :style="{ backgroundImage: `url(${require('~/static/11.png')})` }"
      />
      <div class="flex items-center w-full p-4 pb-8 pt-14 rounded-lg bg-gradient-to-t from-purple-900 space-y-8">
        <div class="z-1 mb-2 text-2xl absolute font-bold leading-tight bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          <div>PSS Sleman</div>
          <div>VS Persik Kediri</div>
        </div>
        <div class="ml-auto" style="z-index: 1;">
          <a
            href="https://youtu.be/QsZsD5iakHw/"
            class="text-base font-semibold text-white hover:shadow-lg hover:opacity-50 transition duration-300 ease-in-out"
          >
            <svg
              class="text-center"
              width="27"
              height="31"
              viewBox="0 0 27 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0663 13.2381L25.0676 13.2388C26.6165 14.1485 26.6136 16.3938 25.067 17.305L25.0664 17.3053L4.06521 29.7151L4.06452 29.7155C2.50249 30.6419 0.5 29.5267 0.5 27.6815V2.85593C0.5 1.80817 1.03724 1.10849 1.74228 0.758399C2.46655 0.398756 3.36641 0.409445 4.06512 0.82227C4.06515 0.822288 4.06518 0.822306 4.06521 0.822324L25.0663 13.2381Z"
                fill="#320B4E"
                stroke="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="relative mb-8">
      <div
        class="top-0 absolute h-full left-0 w-full bg-cover bg-center"
        :style="{ backgroundImage: `url(${require('~/static/11.png')})` }"
      />
      <div class="flex items-center w-full p-4 pb-8 pt-14 rounded-lg bg-gradient-to-t from-purple-900 ">
        <div class="mb-2 text-2xl absolute font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          <div>PSS Sleman</div>
          <div>VS Persik Kediri</div>
        </div>
        <div class="ml-auto" style="z-index: 1;">
          <a
            href="https://youtu.be/QsZsD5iakHw/"
            class="text-base font-semibold text-white hover:shadow-lg hover:opacity-50 transition duration-300 ease-in-out"
          >
            <svg
              class="text-center"
              width="27"
              height="31"
              viewBox="0 0 27 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0663 13.2381L25.0676 13.2388C26.6165 14.1485 26.6136 16.3938 25.067 17.305L25.0664 17.3053L4.06521 29.7151L4.06452 29.7155C2.50249 30.6419 0.5 29.5267 0.5 27.6815V2.85593C0.5 1.80817 1.03724 1.10849 1.74228 0.758399C2.46655 0.398756 3.36641 0.409445 4.06512 0.82227C4.06515 0.822288 4.06518 0.822306 4.06521 0.822324L25.0663 13.2381Z"
                fill="#320B4E"
                stroke="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="relative mb-8">
      <div
        class="top-0 absolute h-full left-0 w-full bg-cover bg-center"
        :style="{ backgroundImage: `url(${require('~/static/11.png')})` }"
      />
      <div class="flex items-center w-full p-4 pb-8 pt-14 rounded-lg bg-gradient-to-t from-purple-900 ">
        <div class="z-1 mb-2 text-2xl absolute font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          <div>PSS Sleman</div>
          <div>VS Persik Kediri</div>
        </div>
        <div class="ml-auto" style="z-index: 1;">
          <a
            href="https://youtu.be/QsZsD5iakHw/"
            class="text-base font-semibold text-white hover:shadow-lg hover:opacity-50 transition duration-300 ease-in-out"
          >
            <svg
              class="text-center"
              width="27"
              height="31"
              viewBox="0 0 27 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0663 13.2381L25.0676 13.2388C26.6165 14.1485 26.6136 16.3938 25.067 17.305L25.0664 17.3053L4.06521 29.7151L4.06452 29.7155C2.50249 30.6419 0.5 29.5267 0.5 27.6815V2.85593C0.5 1.80817 1.03724 1.10849 1.74228 0.758399C2.46655 0.398756 3.36641 0.409445 4.06512 0.82227C4.06515 0.822288 4.06518 0.822306 4.06521 0.822324L25.0663 13.2381Z"
                fill="#320B4E"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="relative">
      <div
        class="top-0 absolute h-full left-0 w-full bg-cover bg-center"
        :style="{ backgroundImage: `url(${require('~/static/11.png')})` }"
      />
      <div class="flex items-center w-full p-4 pb-8 pt-14 rounded-lg bg-gradient-to-t from-purple-900 ">
        <div class="z-1 mb-2 text-2xl absolute font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          <div>PSS Sleman</div>
          <div>VS Persik Kediri</div>
        </div>
        <div class="ml-auto" style="z-index: 1;">
          <a
            href="https://youtu.be/QsZsD5iakHw/"
            class="text-base font-semibold text-white hover:shadow-lg hover:opacity-50 transition duration-300 ease-in-out"
          >
            <svg
              class="text-center"
              width="27"
              height="31"
              viewBox="0 0 27 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0663 13.2381L25.0676 13.2388C26.6165 14.1485 26.6136 16.3938 25.067 17.305L25.0664 17.3053L4.06521 29.7151L4.06452 29.7155C2.50249 30.6419 0.5 29.5267 0.5 27.6815V2.85593C0.5 1.80817 1.03724 1.10849 1.74228 0.758399C2.46655 0.398756 3.36641 0.409445 4.06512 0.82227C4.06515 0.822288 4.06518 0.822306 4.06521 0.822324L25.0663 13.2381Z"
                fill="#320B4E"
                stroke="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data () {
    return {
      searchShown: false
    }
  },

  methods: {
    showSearch () {
      this.searchShown = !this.searchShown
    }
  }
}
</script>
