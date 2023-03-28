<template>
  <div>
    <div v-if="showAkun" class="fixed top-0 left-0 flex justify-center items-end w-screen h-full">
      <div class="fixed top-0 left-0 w-screen h-screen duration-700" @click="$emit('close')" />
      <div class="w-full max-w-screen-sm bg-white max-h-screen" style="z-index: 1;">
        <div>
          <div class="container">
            <div class="mb-4 flex flex-row py-5 px-4 rounded-t-xl bg-white shadow-lg">
              <a href="">
                <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
                </svg>
              </a>
              <h1 class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1)">
                Akun
              </h1>
            </div>
          </div>
        </div>
        <div class="container bg-white shadow-lg">
          <div style="color:rgba(188, 188, 188, 1)">
            <div class="items-center pt-3 pb-3">
              <div class="px-5 flex flex-col">
                <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                  Nama
                </h1>
                <div class="pt-3 flex justify-between text-black font-semibold text-lg">
                  {{ $nuxt.$cookiz.get('name') }}
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.0909 9.13837L7.74253 20.4446C7.13365 21.051 6.37073 21.4813 5.53535 21.6893L1.18152 22.7735C0.485615 22.9467 -0.144742 22.3189 0.0292354 21.6257L1.11769 17.2891C1.32654 16.457 1.75849 15.6971 2.36738 15.0906L13.7157 3.78445L19.0909 9.13837ZM21.7798 1.10883C23.2641 2.58728 23.2641 4.98431 21.7798 6.46275L20.4347 7.79989L15.0595 2.44597L16.4046 1.10883C17.8889 -0.369611 20.2955 -0.369611 21.7798 1.10883Z" fill="#B9B9B9" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="border b solid border-x-3" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5 flex flex-col">
                <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                  Nomer Telepon
                </h1>
                <div class="pt-3 flex justify-between ">
                  <img src="/62.png" alt="">
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.0909 9.13837L7.74253 20.4446C7.13365 21.051 6.37073 21.4813 5.53535 21.6893L1.18152 22.7735C0.485615 22.9467 -0.144742 22.3189 0.0292354 21.6257L1.11769 17.2891C1.32654 16.457 1.75849 15.6971 2.36738 15.0906L13.7157 3.78445L19.0909 9.13837ZM21.7798 1.10883C23.2641 2.58728 23.2641 4.98431 21.7798 6.46275L20.4347 7.79989L15.0595 2.44597L16.4046 1.10883C17.8889 -0.369611 20.2955 -0.369611 21.7798 1.10883Z" fill="#B9B9B9" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="border b solid border-x-3" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5 flex flex-col">
                <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                  Email
                </h1>
                <div class="pt-3 flex justify-between text-black font-semibold text-lg ">
                  {{ $nuxt.$cookiz.get('email') }}
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.0909 9.13837L7.74253 20.4446C7.13365 21.051 6.37073 21.4813 5.53535 21.6893L1.18152 22.7735C0.485615 22.9467 -0.144742 22.3189 0.0292354 21.6257L1.11769 17.2891C1.32654 16.457 1.75849 15.6971 2.36738 15.0906L13.7157 3.78445L19.0909 9.13837ZM21.7798 1.10883C23.2641 2.58728 23.2641 4.98431 21.7798 6.46275L20.4347 7.79989L15.0595 2.44597L16.4046 1.10883C17.8889 -0.369611 20.2955 -0.369611 21.7798 1.10883Z" fill="#B9B9B9" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="border b solid" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5 flex flex-col">
                <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                  Ganti Password
                </h1>
                <div class=" cursor-pointer pt-3 flex justify-between text-black font-semibold text-lg" @click="showGanti=true">
                  ganti Password disini
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.0909 9.13837L7.74253 20.4446C7.13365 21.051 6.37073 21.4813 5.53535 21.6893L1.18152 22.7735C0.485615 22.9467 -0.144742 22.3189 0.0292354 21.6257L1.11769 17.2891C1.32654 16.457 1.75849 15.6971 2.36738 15.0906L13.7157 3.78445L19.0909 9.13837ZM21.7798 1.10883C23.2641 2.58728 23.2641 4.98431 21.7798 6.46275L20.4347 7.79989L15.0595 2.44597L16.4046 1.10883C17.8889 -0.369611 20.2955 -0.369611 21.7798 1.10883Z" fill="#B9B9B9" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="border b solid border-x-3 pb-10" />
          </div>
        </div>
      </div>
    </div>
    <GantiPass :show-ganti="showGanti" />
  </div>
</template>
<script>
export default {
  props: {
    showAkun: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showGanti: false
    }
  }
}
</script>
