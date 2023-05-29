<template>
  <div>
    <div class="my-0 mx-auto min-h-full max-w-screen-sm">
      <div class="container">
        <div class="relative  flex flex-row py-5 px-4 bg-white shadow-md">
          <router-link to="/">
            <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
            </svg>
          </router-link>
          <h1 class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
            Jadwal
          </h1>
        </div>
        <div class="grid gap-4 grid-cols-1 px-6 py-5 bg-white shadow-md ">
          <div v-for="(jadwal, index) in persik" :key="index" class="bg-white shadow-lg px-5 py-5 items-center">
            <div class="flex flex-row justify-center">
              <h1 class="text-md" style="color:rgba(68, 68, 68, 1)">
                {{ jadwal.tanggal }}
              </h1>
            </div>
            <div class=" flex flex-row justify-around">
              <div class="py-5">
                <div>
                  <img :src="$axios.defaults.baseURL+'/'+jadwal.tuan_rumah.image" :alt="jadwal.tuan_rumah.image" class="w-12 h-12">
                </div>
                <span class="text-center text-md font-bold" style="color:rgba(68, 68, 68, 1)">{{ jadwal.tuan_rumah.nama }}</span>
              </div>
              <span class="flex items-center text-xl font-bold">VS</span>
              <div class="py-5">
                <div>
                  <img :src="$axios.defaults.baseURL+'/'+jadwal.penantang.image" :alt="jadwal.penantang.image" class="w-12 h-12">
                </div>
                <span class=" text-center text-md font-bold" style="color:rgba(68, 68, 68, 1)">{{ jadwal.penantang.nama }}</span>
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
      persik: null,
      tanggal: null,
      image: null,
      nama: null
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      try {
        await this.$axios.$get('/api/jadwal_pertandingan', {
          headers: { 'ngrok-skip-browser-warning': '123123' }
        })
          .then((res) => {
            this.persik = res.jadwals
          })
      } catch (error) {
        alert(alert.response.data.message)
      }
    }
  }
}
</script>
