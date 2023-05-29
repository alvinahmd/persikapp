export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'persik-kediri',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/pskicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/main.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    ['@nuxtjs/firebase', {
      config: {
        apiKey: 'AIzaSyDN261hSpJFmW-03_WQdDl0VNk3yfxvTtM',
        authDomain: 'persik-kediri-app.firebaseapp.com',
        projectId: 'persik-kediri-app',
        storageBucket: 'persik-kediri-app.appspot.com',
        messagingSenderId: '697950951097',
        appId: '1:697950951097:web:dcfe0dacb8930886e52d68',
        measurementId: 'G-FP8VRDZ1T4'
      },
      services: {
        auth: {
          ssr: false
        }
      }
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE_URL
    // proxy: true
    // credentials: true
  },

  // proxy: {
  //   '/api/': {
  //     // changeOrigin: true,
  //     target: process.env.API_BASE_URL,
  //     pathRewrite: { '^/api/': '' }
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  toast: {
    position: 'top-right',
    duration: 3000,
    keepOnHover: true,
    closeOnSwipe: true
  }
}
