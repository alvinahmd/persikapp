<template>
  <div>
    <div class="my-0 mx-auto min-h-full max-w-screen-sm">
      <div class="relative flex flex-row py-5 px-4 bg-white shadow-lg">
        <router-link to="/lanjutbayar">
          <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
          </svg>
        </router-link>
        <h1 class="font-bold text-2xl mx-auto" style="color:rgba(74, 103, 255, 1);">
          Dana
        </h1>
      </div>
      <div class=" container p-5 pb-96 bg-white shadow-md">
        <div class="border-2 border-slate-300 px-5 py-5 rounded-lg">
          <div class="text-lg font-semibold">
            Masukkan nomer HP sebagai ID Dana
          </div>
          <div class="flex gap-3 py-2">
            <div class="border-2 px-2 py-2 rounded-lg">
              <svg width="33" height="15" viewBox="0 0 33 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.656 8.69H6.254V12.182H3.878V8.69H0.476V6.494H3.878V3.002H6.254V6.494H9.656V8.69ZM18.8869 4.154C18.7669 3.65 18.5569 3.272 18.2569 3.02C17.9689 2.768 17.5489 2.642 16.9969 2.642C16.1689 2.642 15.5569 2.978 15.1609 3.65C14.7769 4.31 14.5789 5.39 14.5669 6.89C14.8549 6.41 15.2749 6.038 15.8269 5.774C16.3789 5.498 16.9789 5.36 17.6269 5.36C18.4069 5.36 19.0969 5.528 19.6969 5.864C20.2969 6.2 20.7649 6.692 21.1009 7.34C21.4369 7.976 21.6049 8.744 21.6049 9.644C21.6049 10.496 21.4309 11.258 21.0829 11.93C20.7469 12.59 20.2489 13.106 19.5889 13.478C18.9289 13.85 18.1429 14.036 17.2309 14.036C15.9829 14.036 14.9989 13.76 14.2789 13.208C13.5709 12.656 13.0729 11.888 12.7849 10.904C12.5089 9.908 12.3709 8.684 12.3709 7.232C12.3709 5.036 12.7489 3.38 13.5049 2.264C14.2609 1.136 15.4549 0.571999 17.0869 0.571999C18.3469 0.571999 19.3249 0.913999 20.0209 1.598C20.7169 2.282 21.1189 3.134 21.2269 4.154H18.8869ZM17.0509 7.43C16.4149 7.43 15.8809 7.616 15.4489 7.988C15.0169 8.36 14.8009 8.9 14.8009 9.608C14.8009 10.316 14.9989 10.874 15.3949 11.282C15.8029 11.69 16.3729 11.894 17.1049 11.894C17.7529 11.894 18.2629 11.696 18.6349 11.3C19.0189 10.904 19.2109 10.37 19.2109 9.698C19.2109 9.002 19.0249 8.45 18.6529 8.042C18.2929 7.634 17.7589 7.43 17.0509 7.43ZM24.3886 11.156C25.5406 10.196 26.4586 9.398 27.1426 8.762C27.8266 8.114 28.3966 7.442 28.8526 6.746C29.3086 6.05 29.5366 5.366 29.5366 4.694C29.5366 4.082 29.3926 3.602 29.1046 3.254C28.8166 2.906 28.3726 2.732 27.7726 2.732C27.1726 2.732 26.7106 2.936 26.3866 3.344C26.0626 3.74 25.8946 4.286 25.8826 4.982H23.4346C23.4826 3.542 23.9086 2.45 24.7126 1.706C25.5286 0.961999 26.5606 0.589999 27.8086 0.589999C29.1766 0.589999 30.2266 0.955999 30.9586 1.688C31.6906 2.408 32.0566 3.362 32.0566 4.55C32.0566 5.486 31.8046 6.38 31.3006 7.232C30.7966 8.084 30.2206 8.828 29.5726 9.464C28.9246 10.088 28.0786 10.844 27.0346 11.732H32.3446V13.82H23.4526V11.948L24.3886 11.156Z" fill="#444444" />
              </svg>
            </div>
            <div class="w-full border-b-4 text-base focus-within:border-purple-400 duration-500 transform border-gray-500">
              <input type="tel" placeholder="Masukan Nomor HP" class=" pt-2 bg-transparent w-full focus:outline-none placeholder-black" style="color:rgba(68, 68, 68, 1)">
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-slate-300 shadow-lg  py-3 px-3 ">
        <div class="cursor-pointer">
          <div class="py-2 w-full rounded-lg border-4  bg-purple-900">
            <div class=" text-lg font-bold text-white px-12 text-center" @click="showPin=true">
              Lanjutkan
            </div>
          </div>
        </div>
      </div>
    </div>
    <PinDana :show-pin="showPin" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      showPin: false
    }
  }
}
</script>
