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
                {{team.nama}}
              </h1>
            </div>
            <div class="px-4 py-4">
              <div>
                <span class="text-lg text-white" style="background-color:rgba(115, 101, 124, 1);">
                  {{team.keterangan}}
                </span>
              </div>
              <div>
                <span class="text-lg text-white" style="background-color:rgba(115, 101, 124, 1);">
                  {{team.kewarganegaraan}}
                </span>
              </div>
              <span class="text-lg text-white" style="background-color:rgba(115, 101, 124, 1);">
                {{team.posisi_pemain}}
              </span>
            </div>
            <div class="pl-20">
              <svg width="200" height="200" viewBox="0 0 131 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M130.812 128.98C130.812 130.057 131.454 136.602 130.312 137.5C129.169 138.398 126.682 137.417 124.312 138C121.942 138.583 119.309 137.006 116.812 137.5C114.315 137.994 110.705 137.731 106.812 138C102.919 138.269 99.6894 137.865 96.8118 138C93.9342 138.135 90.2085 137.776 85.6805 137.865C81.1525 137.955 77.7248 138 75.3973 138H56.2274L45.9442 137.865L34.8118 138.5H24.8118H15.8118H12.3118C12.3118 138.5 1.85698 139.478 0.312019 137.865C-0.612634 136.9 0.812349 128.98 0.812349 128.98C0.98162 121.081 5.63657 114.102 14.7772 108.044C23.9178 101.985 35.5129 97.9688 49.5623 95.9941V91.5512C45.1613 89.4868 41.3527 86.5698 38.1366 82.8C34.9204 79.0302 32.3814 74.6098 30.5194 69.5385C28.6574 64.4673 27.3032 59.0371 26.4569 53.2478C25.6105 47.4585 25.1873 41.1981 25.1873 34.4663C25.1873 28.722 26.2453 23.6059 28.3612 19.118C30.4771 14.6302 33.397 11.0176 37.1209 8.28C40.8449 5.54244 45.119 3.47805 49.9432 2.08683C54.7674 0.69561 60.0571 0 65.8123 0C71.5676 0 76.8573 0.69561 81.6815 2.08683C86.5057 3.47805 90.7798 5.54244 94.5038 8.28C98.2277 11.0176 101.148 14.6302 103.264 19.118C105.379 23.6059 106.437 28.722 106.437 34.4663C106.437 65.881 98.3123 84.999 82.0623 91.8205V95.9941C96.1118 97.9688 107.707 101.985 116.848 108.044C125.988 114.102 130.643 121.081 130.812 128.98Z" fill="#BCBCBC" />
              </svg>
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
      kewarganegaraan: null,
      keterangan: null,
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
