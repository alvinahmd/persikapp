<template>
  <div>
    <div class="my-0 mx-auto min-h-full max-w-screen-sm">
      <div class="container">
        <div class="relative mb-4 flex flex-row py-5 px-4 bg-white shadow-lg">
          <router-link to="/">
            <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
            </svg>
          </router-link>
          <h1 class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
            Pemain
          </h1>
        </div>
        <div class="grid gap-4 grid-cols-2 grid-rows-2 px-6 py-7 bg-white shadow-lg ">
          <div v-for="(team, index) in persik" :key="index" class="block max-w-sm rounded-lg  shadow-md bg-white">
            <div class=" text-lg py-3 px-6  text-center rounded-t-lg dark:text-neutral-50" style="background-color:rgba(50, 11, 78, 1);">
              <h1 class="text-lg font-bold">
                {{ team.nama }}
              </h1>
            </div>
            <div class="px-4 py-4">
              <div class="py-2">
                <img :src="$axios.defaults.baseURL+'/'+team.url_logo" :alt="team.url_logo" class="">
              </div>
              <span class="text-lg text-white w-6 px-2" style="background-color:rgba(115, 101, 124, 1);">
                {{ team.posisi_pemain }}
              </span>
            </div>
            <div class="pl-20">
              <img :src="$axios.defaults.baseURL+'/'+team.keterangan" :alt="team.keterangan" class="">
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
      nama: null,
      posisi_pemain: null,
      url_logo: null,
      persik: null
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      try {
        await this.$axios.$get('/api/tim_persik', {
          headers: { 'ngrok-skip-browser-warning': '123123' }
        })
          .then((res) => {
            this.persik = res.message
          })
      } catch (error) {
        alert(error.response.data.message)
      }
    }
  }
}
</script>
