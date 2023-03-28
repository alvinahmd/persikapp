<template>
  <div>
    <div v-if="ShowProfil" class="fixed top-0 left-0 flex justify-center items-end w-screen h-full">
      <div class="fixed top-0 left-0 w-screen h-screen duration-700" @click="$emit('close')" />
      <div class="w-full max-w-screen-sm bg-white max-h-screen" style="z-index: 1;">
        <div class=" text-center justify-center bg-white shadow-inherit">
          <h1 class="font-bold text-2xl pt-5" style="color:rgba(50, 11, 78, 1);">
            Ubah Profil
          </h1>
          <div class=" flex flex-row gap-20 items-center justify-center pt-5">
            <div class="px-5 py-5">
              <div class=" w-full">
                <img src="/kamera.png" alt="" class="items-center">
              </div>
              <div class="label text-center mt-4 font-semibold" style="color: rgba(95, 93, 94, 1);">
                Kamera
              </div>
            </div>
            <div class=" px-5 py-5">
              <div class="w-full">
                <div class="items-center w-full">
                  <img src="/galeri.png" alt="" class="items-center">
                </div>
                <div class="label text-center mt-4 font-semibold" style="color: rgba(95, 93, 94, 1);">
                  Galery
                </div>
              </div>
            </div>
            <div class="px-5 py-5">
              <div class="w-full">
                <div class="items-center w-full">
                  <img src="/hapus.png" alt="" class="items-center">
                </div>
                <div class="label text-center mt-4 font-semibold" style="color: rgba(95, 93, 94, 1);">
                  Hapus
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
  props: {
    ShowProfil: {
      type: Boolean,
      default: false
    }
  }
}
</script>
