<template>
  <div>
    <div class="my-0 mx-auto min-h-full max-w-screen-sm">
      <div class="container">
        <div class="relative  flex flex-row py-5 px-4 bg-white shadow-md">
          <h1 class="font-bold text-2xl mx-auto" style="color:rgba(50, 11, 78, 1);">
            Pesan
          </h1>
        </div>
        <div class=" container p-5 pb-60 bg-white shadow-md">
          <div class="pl-5 ">
            <h1 class="text-lg font-bold" style="color:rgba(68, 68, 68, 1);">
              Selamat Bergabung
            </h1>
            <p class="text-md" style="color:rgba(150, 150, 150, 1);">
              08 Feb 2023
            </p>
            <p class="text-lg poppins pb-4" style="color:rgba(92, 92, 92, 1);">
              Hai,selamat bergabung. Di sini kamu bisa mendapat berbagai informasi seperti jadwal permainan, perolehan skor, foto foto bahkan replay pertandingan.
            </p>
            <div class="border-t solid" style="color:rgba(188, 188, 188, 1)">
              <div class="flex items-center pt-3 pb-3">
                <span class="rounded-full px-3 py-3" style="background-color:rgba(50, 11, 78, 1);">
                  <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.3333 21.2528C28.3327 23.1902 27.6705 25.0693 26.4563 26.579C25.2421 28.0887 23.5488 29.1384 21.6566 29.5545L20.7528 26.843C21.5804 26.7067 22.3675 26.3885 23.0574 25.9112C23.7472 25.434 24.3226 24.8097 24.7421 24.0833H21.25C20.4986 24.0833 19.7779 23.7848 19.2465 23.2535C18.7152 22.7221 18.4167 22.0014 18.4167 21.25V15.5833C18.4167 14.8319 18.7152 14.1112 19.2465 13.5799C19.7779 13.0485 20.4986 12.75 21.25 12.75H25.4122C25.0665 10.0114 23.7333 7.49314 21.6629 5.66762C19.5924 3.84211 16.927 2.83486 14.1667 2.83486C11.4064 2.83486 8.74093 3.84211 6.67048 5.66762C4.60003 7.49314 3.26688 10.0114 2.92117 12.75H7.08333C7.83478 12.75 8.55545 13.0485 9.0868 13.5799C9.61815 14.1112 9.91667 14.8319 9.91667 15.5833V21.25C9.91667 22.0014 9.61815 22.7221 9.0868 23.2535C8.55545 23.7848 7.83478 24.0833 7.08333 24.0833H2.83333C2.08189 24.0833 1.36122 23.7848 0.829864 23.2535C0.298511 22.7221 0 22.0014 0 21.25V14.1667C0 6.34242 6.34242 0 14.1667 0C21.9909 0 28.3333 6.34242 28.3333 14.1667V21.2528Z" fill="white" />
                  </svg>
                </span>
                <div class="pl-5">
                  <div class="text-lg" style="color:rgba(68, 68, 68, 1)">Customers Service</div>
                  <div class="text-md" style="color:rgba(153, 144, 144, 1)">Hubungi Kami Jika Anda Butuh Bantuan</div>
                </div>
              </div>
            </div>
            <div class="border-t solid " style="color:rgba(188, 188, 188, 1)">
              <div class="flex items-center pt-3 pb-3">
                <span class="rounded-full px-3 py-3" style="background-color:rgba(50, 11, 78, 1);">
                  <img src="/percik.png" alt="">
                </span>
                <div class="pl-5">
                  <div class="text-lg" style="color:rgba(68, 68, 68, 1)">Persikmania</div>
                  <div class="text-md " style="color:rgba(153, 144, 144, 1)">****** mengundang anda</div>
                </div>
              </div>
              <div class="border b solid" />
            </div>
          </div>
        </div>
        <div class="w-full bg-purple-900 py-4 ">
          <div>
            <ul class="flex justify-between px-14 items-center">
              <li>
                <router-link to="/">
                  <img src="/home1.png" alt="">
                </router-link>
              </li>
              <li class="text-white">
                <a href="">
                <img src="/pesan2.png">
                  <span class="text-white">Pesan</span>
                </a>
              </li>
              <li>
              <router-link to="/riwayat">
              <img src="/tiket1.png" alt="">
              </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
