(window.webpackJsonp=window.webpackJsonp||[]).push([[33,7,17,22],{300:function(t,e,l){"use strict";l.r(e);var n=l(8),o=(l(35),{props:{showGanti:{type:Boolean,default:!1}},data:function(){return{oldPasswd:null,newPassword:null,confirmPasswd:null}},methods:{gantiPasswd:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/api/users/update",{old_password:t.oldPasswd,password:t.newPassword,confirm_password:t.confirmPasswd});case 3:l=e.sent,alert(l.message),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),r=l(47),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.showGanti?e("div",{staticClass:"fixed top-0 left-0 flex justify-center items-end w-screen h-full"},[e("div",{staticClass:"fixed top-0 left-0 w-screen h-screen duration-700"}),t._v(" "),e("div",{staticClass:"w-full max-w-screen-sm bg-white max-h-screen",staticStyle:{"z-index":"1"}},[e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"mb-4 flex flex-row py-5 px-4 rounded-t-xl bg-white shadow-lg"},[e("a",{attrs:{href:""}},[e("svg",{attrs:{width:"13",height:"23",viewBox:"0 0 13 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M11 2L3 11.1042L11 21",stroke:"#320B4E","stroke-width":"4","stroke-linecap":"round"}})])]),t._v(" "),e("h1",{staticClass:"font-bold text-2xl mx-auto",staticStyle:{color:"rgba(50, 11, 78, 1)"}},[t._v("\n              Reset kata Sandi\n            ")])])])]),t._v(" "),e("div",{staticClass:"container px-5 space-y-10 py-3"},[e("div",{staticClass:"w-full label border-b-4 text-base focus-within:border-purple-400 duration-500 transform border-gray-500"},[t._v("\n          Old Password\n          "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.oldPasswd,expression:"oldPasswd"}],staticClass:"pt-2 bg-transparent w-full focus:outline-none placeholder-gray-300",attrs:{type:"text",placeholder:"Buat kata Sandi"},domProps:{value:t.oldPasswd},on:{input:function(e){e.target.composing||(t.oldPasswd=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"w-full label border-b-4 text-base focus-within:border-purple-400 duration-500 transform border-gray-500"},[t._v("\n          New Password\n          "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPassword,expression:"newPassword"}],staticClass:"pt-2 bg-transparent w-full focus:outline-none placeholder-gray-300",attrs:{type:"text",placeholder:"Buat kata Sandi"},domProps:{value:t.newPassword},on:{input:function(e){e.target.composing||(t.newPassword=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"w-full label border-b-4 text-base focus-within:border-purple-400 duration-500 transform border-gray-500"},[t._v("\n          Konfirmasi kata Sandi\n          "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPasswd,expression:"confirmPasswd"}],staticClass:"pt-2 bg-transparent w-full focus:outline-none placeholder-gray-300",attrs:{type:"text",placeholder:"Konfirmasi Kata Sandi"},domProps:{value:t.confirmPasswd},on:{input:function(e){e.target.composing||(t.confirmPasswd=e.target.value)}}})]),t._v(" "),e("button",{staticClass:"rounded-lg w-full text-white text-base font-bold py-3 bg-purple-900 hover:bg-purple-700 duration-500",on:{click:t.gantiPasswd}},[t._v("\n          Simpan kata Sandi\n        ")])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,l){"use strict";l.r(e);var n={props:{showAkun:{type:Boolean,default:!1}},data:function(){return{showGanti:!1}}},o=l(47),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.showAkun?e("div",{staticClass:"fixed top-0 left-0 flex justify-center items-end w-screen h-full"},[e("div",{staticClass:"fixed top-0 left-0 w-screen h-screen duration-700",on:{click:function(e){return t.$emit("close")}}}),t._v(" "),e("div",{staticClass:"w-full max-w-screen-sm bg-white max-h-screen",staticStyle:{"z-index":"1"}},[e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"mb-4 flex flex-row py-5 px-4 rounded-t-xl bg-white shadow-lg"},[e("a",{attrs:{href:""}},[e("svg",{attrs:{width:"13",height:"23",viewBox:"0 0 13 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M11 2L3 11.1042L11 21",stroke:"#320B4E","stroke-width":"4","stroke-linecap":"round"}})])]),t._v(" "),e("h1",{staticClass:"font-bold text-2xl mx-auto",staticStyle:{color:"rgba(50, 11, 78, 1)"}},[t._v("\n              Akun\n            ")])])])]),t._v(" "),e("div",{staticClass:"container bg-white shadow-lg"},[e("div",{staticStyle:{color:"rgba(188, 188, 188, 1)"}},[e("div",{staticClass:"items-center pt-3 pb-3"},[e("div",{staticClass:"px-5 flex flex-col"},[e("h1",{staticClass:"text-lg font-semibold",staticStyle:{color:"rgba(68, 68, 68, 1)"}},[t._v("\n                Nama\n              ")]),t._v(" "),e("div",{staticClass:"pt-3 flex justify-between text-black font-semibold text-lg"},[t._v("\n                "+t._s(t.$nuxt.$cookiz.get("name"))+"\n                "),e("svg",{attrs:{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M19.0909 9.13837L7.74253 20.4446C7.13365 21.051 6.37073 21.4813 5.53535 21.6893L1.18152 22.7735C0.485615 22.9467 -0.144742 22.3189 0.0292354 21.6257L1.11769 17.2891C1.32654 16.457 1.75849 15.6971 2.36738 15.0906L13.7157 3.78445L19.0909 9.13837ZM21.7798 1.10883C23.2641 2.58728 23.2641 4.98431 21.7798 6.46275L20.4347 7.79989L15.0595 2.44597L16.4046 1.10883C17.8889 -0.369611 20.2955 -0.369611 21.7798 1.10883Z",fill:"#B9B9B9"}})])])])]),t._v(" "),e("div",{staticClass:"border b solid border-x-3"}),t._v(" "),e("div",{staticClass:"items-center pt-3 pb-3"},[e("div",{staticClass:"px-5 flex flex-col"},[e("h1",{staticClass:"text-lg font-semibold",staticStyle:{color:"rgba(68, 68, 68, 1)"}},[t._v("\n                Nomer Telepon\n              ")]),t._v(" "),e("div",{staticClass:"pt-3 flex justify-between"},[e("img",{attrs:{src:"/62.png",alt:""}}),t._v(" "),e("svg",{attrs:{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M19.0909 9.13837L7.74253 20.4446C7.13365 21.051 6.37073 21.4813 5.53535 21.6893L1.18152 22.7735C0.485615 22.9467 -0.144742 22.3189 0.0292354 21.6257L1.11769 17.2891C1.32654 16.457 1.75849 15.6971 2.36738 15.0906L13.7157 3.78445L19.0909 9.13837ZM21.7798 1.10883C23.2641 2.58728 23.2641 4.98431 21.7798 6.46275L20.4347 7.79989L15.0595 2.44597L16.4046 1.10883C17.8889 -0.369611 20.2955 -0.369611 21.7798 1.10883Z",fill:"#B9B9B9"}})])])])]),t._v(" "),e("div",{staticClass:"border b solid border-x-3"}),t._v(" "),e("div",{staticClass:"items-center pt-3 pb-3"},[e("div",{staticClass:"px-5 flex flex-col"},[e("h1",{staticClass:"text-lg font-semibold",staticStyle:{color:"rgba(68, 68, 68, 1)"}},[t._v("\n                Email\n              ")]),t._v(" "),e("div",{staticClass:"pt-3 flex justify-between text-black font-semibold text-lg"},[t._v("\n                "+t._s(t.$nuxt.$cookiz.get("email"))+"\n                "),e("svg",{attrs:{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M19.0909 9.13837L7.74253 20.4446C7.13365 21.051 6.37073 21.4813 5.53535 21.6893L1.18152 22.7735C0.485615 22.9467 -0.144742 22.3189 0.0292354 21.6257L1.11769 17.2891C1.32654 16.457 1.75849 15.6971 2.36738 15.0906L13.7157 3.78445L19.0909 9.13837ZM21.7798 1.10883C23.2641 2.58728 23.2641 4.98431 21.7798 6.46275L20.4347 7.79989L15.0595 2.44597L16.4046 1.10883C17.8889 -0.369611 20.2955 -0.369611 21.7798 1.10883Z",fill:"#B9B9B9"}})])])])]),t._v(" "),e("div",{staticClass:"border b solid"}),t._v(" "),e("div",{staticClass:"items-center pt-3 pb-3"},[e("div",{staticClass:"px-5 flex flex-col"},[e("h1",{staticClass:"text-lg font-semibold",staticStyle:{color:"rgba(68, 68, 68, 1)"}},[t._v("\n                Ganti Password\n              ")]),t._v(" "),e("div",{staticClass:"cursor-pointer pt-3 flex justify-between text-black font-semibold text-lg",on:{click:function(e){t.showGanti=!0}}},[t._v("\n                ganti Password disini\n                "),e("svg",{attrs:{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M19.0909 9.13837L7.74253 20.4446C7.13365 21.051 6.37073 21.4813 5.53535 21.6893L1.18152 22.7735C0.485615 22.9467 -0.144742 22.3189 0.0292354 21.6257L1.11769 17.2891C1.32654 16.457 1.75849 15.6971 2.36738 15.0906L13.7157 3.78445L19.0909 9.13837ZM21.7798 1.10883C23.2641 2.58728 23.2641 4.98431 21.7798 6.46275L20.4347 7.79989L15.0595 2.44597L16.4046 1.10883C17.8889 -0.369611 20.2955 -0.369611 21.7798 1.10883Z",fill:"#B9B9B9"}})])])])]),t._v(" "),e("div",{staticClass:"border b solid border-x-3 pb-10"})])])])]):t._e(),t._v(" "),e("GantiPass",{attrs:{"show-ganti":t.showGanti}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GantiPass:l(300).default})},316:function(t,e,l){"use strict";l.r(e);var n={props:{ShowProfil:{type:Boolean,default:!1}}},o=l(47),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.ShowProfil?e("div",{staticClass:"fixed top-0 left-0 flex justify-center items-end w-screen h-full"},[e("div",{staticClass:"fixed top-0 left-0 w-screen h-screen duration-700",on:{click:function(e){return t.$emit("close")}}}),t._v(" "),t._m(0)]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full max-w-screen-sm bg-white max-h-screen",staticStyle:{"z-index":"1"}},[e("div",{staticClass:"text-center justify-center bg-white shadow-inherit"},[e("h1",{staticClass:"font-bold text-2xl pt-5",staticStyle:{color:"rgba(50, 11, 78, 1)"}},[t._v("\n          Ubah Profil\n        ")]),t._v(" "),e("div",{staticClass:"flex flex-row gap-20 items-center justify-center pt-5"},[e("div",{staticClass:"px-5 py-5"},[e("div",{staticClass:"w-full"},[e("img",{staticClass:"items-center",attrs:{src:"/kamera.png",alt:""}})]),t._v(" "),e("div",{staticClass:"label text-center mt-4 font-semibold",staticStyle:{color:"rgba(95, 93, 94, 1)"}},[t._v("\n              Kamera\n            ")])]),t._v(" "),e("div",{staticClass:"px-5 py-5"},[e("div",{staticClass:"w-full"},[e("div",{staticClass:"items-center w-full"},[e("img",{staticClass:"items-center",attrs:{src:"/galeri.png",alt:""}})]),t._v(" "),e("div",{staticClass:"label text-center mt-4 font-semibold",staticStyle:{color:"rgba(95, 93, 94, 1)"}},[t._v("\n                Galery\n              ")])])]),t._v(" "),e("div",{staticClass:"px-5 py-5"},[e("div",{staticClass:"w-full"},[e("div",{staticClass:"items-center w-full"},[e("img",{staticClass:"items-center",attrs:{src:"/hapus.png",alt:""}})]),t._v(" "),e("div",{staticClass:"label text-center mt-4 font-semibold",staticStyle:{color:"rgba(95, 93, 94, 1)"}},[t._v("\n                Hapus\n              ")])])])])])])}],!1,null,null,null);e.default=component.exports},348:function(t,e,l){"use strict";l.r(e);l(27),l(64);var n={data:function(){return{showAkun:!1,showBahasa:!1,ShowProfil:!1,showPutus:!1,showLogout:!1}},beforeCreate:function(){this.$nuxt.$cookiz.get("token")||this.$router.replace("/profil")}},o=l(47),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"my-0 mx-auto min-h-full max-w-screen-sm"},[e("div",{staticClass:"container"},[e("div",{staticClass:"relative flex flex-row py-5 px-4 bg-white shadow-lg"},[e("router-link",{attrs:{to:"/"}},[e("svg",{attrs:{width:"13",height:"23",viewBox:"0 0 13 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M11 2L3 11.1042L11 21",stroke:"#320B4E","stroke-width":"4","stroke-linecap":"round"}})])]),t._v(" "),e("h1",{staticClass:"font-bold text-2xl mx-auto",staticStyle:{color:"rgba(50, 11, 78, 1)"}},[t._v("\n          Profil\n        ")])],1),t._v(" "),e("div",{staticClass:"px-5",staticStyle:{"background-color":"rgba(210, 210, 210, 0.47)"}},[e("div",{staticClass:"flex flex-row"},[e("div",{staticClass:"py-5 px-5 cursor-pointer",on:{click:function(e){t.ShowProfil=!0}}},[e("img",{staticClass:"w-20 h-20",attrs:{src:"/profile.png",alt:""}})]),t._v(" "),e("div",{staticClass:"py-5 px-8"},[e("h2",{staticClass:"font-bold text-xl"},[t._v("\n              "+t._s(t.$nuxt.$cookiz.get("name"))+"\n            ")]),t._v(" "),e("span",{staticClass:"text-red-500 text-md font-bold"},[t._v("\n              "+t._s(t.$nuxt.$cookiz.get("email"))+"\n            ")])])])]),t._v(" "),e("div",{staticClass:"container bg-white"},[e("div",{staticClass:"border-t solid",staticStyle:{color:"rgba(188, 188, 188, 1)"}},[e("div",{staticClass:"items-center pt-3 pb-3"},[e("div",{staticClass:"px-5 cursor-pointer",on:{click:function(e){t.showAkun=!0}}},[t._m(0)])]),t._v(" "),e("div",{staticClass:"border b solid"}),t._v(" "),e("div",{staticClass:"items-center pt-3 pb-3"},[e("div",{staticClass:"px-5"},[e("router-link",{attrs:{to:"/tentangkami"}},[e("div",{staticClass:"flex gap-4"},[e("img",{attrs:{src:"/tentang.png",alt:""}}),t._v(" "),e("h1",{staticClass:"text-lg font-semibold",staticStyle:{color:"rgba(68, 68, 68, 1)"}},[t._v("\n                    Tentang Kami\n                  ")])])])],1)]),t._v(" "),e("div",{staticClass:"border b solid"}),t._v(" "),e("div",{staticClass:"items-center pt-3 pb-3"},[e("div",{staticClass:"px-5"},[e("router-link",{attrs:{to:"/kebijakanprivasi"}},[e("div",{staticClass:"flex gap-4"},[e("img",{attrs:{src:"/privasi.png",alt:""}}),t._v(" "),e("h1",{staticClass:"text-lg font-semibold",staticStyle:{color:"rgba(68, 68, 68, 1)"}},[t._v("\n                    Kebijakan Privasi\n                  ")])])])],1)]),t._v(" "),e("div",{staticClass:"border b solid"}),t._v(" "),e("div",{staticClass:"flex flex-row justify-between items-center pt-3 pb-3"},[t._m(1),t._v(" "),e("img",{staticClass:"cursor-pointer",attrs:{src:"/logout.png",alt:""},on:{click:function(e){t.showLogout=!0}}})]),t._v(" "),e("div",{staticClass:"border b solid"})])])])]),t._v(" "),e("ProfakunPage",{attrs:{"show-akun":t.showAkun},on:{close:function(e){t.showAkun=!1}}}),t._v(" "),e("UbahProfil",{attrs:{"show-profil":t.ShowProfil},on:{close:function(e){t.ShowProfil=!1}}}),t._v(" "),e("keluarAkun",{attrs:{"show-logout":t.showLogout},on:{close:function(e){t.showLogout=!1}}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex gap-4"},[e("img",{attrs:{src:"/pp.png",alt:""}}),t._v(" "),e("h1",{staticClass:"text-lg font-semibold",staticStyle:{color:"rgba(68, 68, 68, 1)"}},[t._v("\n                  Akun\n                ")])])},function(){var t=this._self._c;return t("div",{staticClass:"px-5"},[t("h1",{staticClass:"text-lg font-semibold text-red-500"},[this._v("\n                Keluar\n              ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ProfakunPage:l(315).default,UbahProfil:l(316).default})}}]);