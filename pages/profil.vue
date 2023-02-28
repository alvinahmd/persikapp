<template>
  <div>
    <div class="my-0 mx-auto min-h-full max-w-screen-sm">
      <div class="container">
        <div class="relative flex flex-row py-5 px-4 bg-white shadow-lg">
          <router-link to="/">
            <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2L3 11.1042L11 21" stroke="#320B4E" stroke-width="4" stroke-linecap="round" />
            </svg>
          </router-link>
          <h1 class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
            Profil
          </h1>
        </div>
        <div class="px-5" style="background-color:rgba(210, 210, 210, 0.47)">
          <div class=" flex flex-row">
            <div class="py-5 px-5">
              <img src="/profile.png" alt="" class="w-20 h-20">
            </div>
            <div class="py-5 px-8">
              <h2 class="font-bold text-xl">
                Anda belum memiliki akun.
              </h2>
              <span class="text-red-500 text-md font-bold px-16">Daftar <span class="text-black">Sekarang</span></span>
            </div>
          </div>
        </div>
        <div class="container bg-white">
          <div class="border-t solid " style="color:rgba(188, 188, 188, 1)">
            <div class="items-center pt-3 pb-3">
              <div class="px-5">
                <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                  Akun
                </h1>
              </div>
            </div>
            <div class="border b solid" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5">
                <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                  Putuskan E-Wallet
                </h1>
              </div>
            </div>
            <div class="border b solid" />
            <div class="items-center pt-3 pb-3">
              <div class="px-5">
                <h1 class="text-lg font-semibold" style="color:rgba(68, 68, 68, 1)">
                  Bahasa
                </h1>
              </div>
            </div>
            <div class="border b solid" />
            <div class="flex flex-row justify-between items-center pt-3 pb-3">
              <div class="px-5">
                <h1 class="text-lg font-semibold text-red-500">
                  Keluar
                </h1>
              </div>
              <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2.22503C0 1.63492 0.234422 1.06897 0.651697 0.651697C1.06897 0.234422 1.63492 0 2.22503 0H12.2377C12.8278 0 13.3937 0.234422 13.811 0.651697C14.2283 1.06897 14.4627 1.63492 14.4627 2.22503V4.45007C14.4627 4.74512 14.3455 5.0281 14.1369 5.23673C13.9282 5.44537 13.6453 5.56258 13.3502 5.56258C13.0551 5.56258 12.7722 5.44537 12.5635 5.23673C12.3549 5.0281 12.2377 4.74512 12.2377 4.45007V2.22503H2.22503V15.5752H12.2377V13.3502C12.2377 13.0551 12.3549 12.7722 12.5635 12.5635C12.7722 12.3549 13.0551 12.2377 13.3502 12.2377C13.6453 12.2377 13.9282 12.3549 14.1369 12.5635C14.3455 12.7722 14.4627 13.0551 14.4627 13.3502V15.5752C14.4627 16.1653 14.2283 16.7313 13.811 17.1486C13.3937 17.5658 12.8278 17.8003 12.2377 17.8003H2.22503C1.63492 17.8003 1.06897 17.5658 0.651697 17.1486C0.234422 16.7313 0 16.1653 0 15.5752V2.22503ZM17.0137 4.77603C17.2223 4.56747 17.5053 4.4503 17.8003 4.4503C18.0953 4.4503 18.3782 4.56747 18.5868 4.77603L21.9244 8.11358C22.1329 8.32221 22.2501 8.60513 22.2501 8.90013C22.2501 9.19513 22.1329 9.47805 21.9244 9.68668L18.5868 13.0242C18.377 13.2269 18.096 13.339 17.8043 13.3365C17.5126 13.334 17.2335 13.2169 17.0273 13.0107C16.821 12.8044 16.704 12.5254 16.7015 12.2337C16.6989 11.942 16.8111 11.661 17.0137 11.4511L18.4522 10.0126H7.78762C7.49256 10.0126 7.20959 9.89544 7.00095 9.6868C6.79231 9.47816 6.6751 9.19519 6.6751 8.90013C6.6751 8.60507 6.79231 8.3221 7.00095 8.11346C7.20959 7.90483 7.49256 7.78762 7.78762 7.78762H18.4522L17.0137 6.34913C16.8051 6.1405 16.688 5.85758 16.688 5.56258C16.688 5.26758 16.8051 4.98466 17.0137 4.77603Z" fill="#FF0000" />
              </svg>
            </div>
            <div class="border b solid pb-80" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
