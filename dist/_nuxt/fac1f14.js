(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{350:function(t,e,r){"use strict";r.r(e);var n=r(8),l=(r(35),{data:function(){return{persik:null}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/api/riwayat",{headers:{"ngrok-skip-browser-warning":"123123"}}).then((function(e){t.persik=e.message}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(alert.response.data.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}}),o=r(47),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-screen-sm mx-auto"},[e("div",{staticClass:"mb-4 flex flex-row py-5 px-4 bg-white shadow-lg my-0 mx-auto min-h-full max-w-screen-sm"},[e("router-link",{attrs:{to:"/"}},[e("svg",{attrs:{width:"13",height:"23",viewBox:"0 0 13 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M11 2L3 11.1042L11 21",stroke:"#320B4E","stroke-width":"4","stroke-linecap":"round"}})])]),t._v(" "),e("h1",{staticClass:"font-bold text-2xl mx-auto",staticStyle:{color:"rgba(50, 11, 78, 1)"}},[t._v("\n      Tiket\n    ")])],1),t._v(" "),e("div",{staticClass:"my-0 mx-auto min-h-full max-w-screen-sm"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"container px-3 py-3"},t._l(t.persik,(function(r,n){return e("div",{key:n,staticClass:"rounded-lg flex flex-row pt-5 rounded-t-xl"},[e("img",{attrs:{src:"/eticket(kecil).png",alt:""}}),t._v(" "),e("div",{staticClass:"container pb-2 bg-white shadow-md"},[e("div",{staticClass:"flex justify-between"},[e("h1",{staticClass:"pl-3 pt-5 text-lg font-bold",staticStyle:{color:"rgba(68, 68, 68, 1)"}},[t._v("\n                "+t._s(r.tiket.tuan_rumah.nama)+"\n              ")]),t._v(" "),e("span",{staticClass:"h-7 px-4 rounded-tr-lg rounded-bl-lg",class:{"bg-green-200":"BERHASIL"===r.pembayaran,"bg-gray-500":"EXPIRED"===r.pembayaran}},[e("h1",{staticClass:"-translate-x-1 pl-2 items-center font-semibold text-lg",class:{"text-green-600":"BERHASIL"===r.pembayaran}},[t._v("\n                  "+t._s(r.pembayaran)+"\n                ")])])]),t._v(" "),t._m(1,!0),t._v(" "),e("div",{staticClass:"absolute right-1/3 py-1 px-6 ml-auto"},[e("div",{staticClass:"flex mt-6 text-gray-500"},[e("div",{staticClass:"px-3 rounded-full mr-3",class:{"bg-red-500":"BERHASIL"===r.pembayaran,"bg-gray-700":"EXPIRED"===r.pembayaran}}),t._v("\n                "+t._s(r.seat)+"\n              ")])]),t._v(" "),e("div",{staticClass:"pl-3 text-lg font-semibold",staticStyle:{color:"rgba(68, 68, 68, 1)"}},[e("h1",[t._v("\n                "+t._s(r.tiket.penantang.nama)+"\n              ")]),t._v(" "),e("h1",[t._v("\n                "+t._s(r.tiket.tanggal)+"\n              ")]),t._v(" "),e("h1",[t._v("\n                "+t._s(r.tiket.stadiun)+"\n              ")])])])])})),0)])]),t._v(" "),e("div",{staticClass:"w-full bg-purple-900 py-4"},[e("div",[e("ul",{staticClass:"flex justify-between px-14 items-center"},[e("li",[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/home1.png",alt:""}})])],1),t._v(" "),e("li",{staticClass:"text-white"},[e("router-link",{attrs:{to:"/pesan"}},[e("img",{attrs:{src:"/pesan1.png",alt:""}})])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/Tiket"}},[e("img",{attrs:{src:"/tiket2.png",alt:""}}),t._v(" "),e("span",{staticClass:"text-white"},[t._v("Tiket")])])],1)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-row py-5 px-4 bg-white shadow-md"},[e("div",{staticClass:"mb-5 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"}),t._v(" "),e("a",{staticClass:"font-bold text-2xl px-20 mx-auto",attrs:{href:"/riwayat"}},[t._v("\n          Riwayat\n          "),e("div",{staticClass:"border-b-4 border-purple-600 w-full"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center w-full pt-3 px-3"},[e("div",{staticClass:"border-b solid border-black class w-full h-1"}),t._v(" "),e("span",{staticClass:"mb-3 font-medium text-xl text-white hover:text-white text-center rounded-full bg-purple-900 py-1 px-6 ml-auto"},[t._v("\n                VS\n              ")])])}],!1,null,null,null);e.default=component.exports}}]);