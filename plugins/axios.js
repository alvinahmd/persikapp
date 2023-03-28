export default function ({ $axios, $cookiz }) {
  $axios.onRequest((config) => {
    config.headers.common.Authorization = `Bearer ${$cookiz.get('token')}`
  })
}
