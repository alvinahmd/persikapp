(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{311:function(t,e,n){var content=n(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(81).default)("e072e048",content,!0,{sourceMap:!1})},331:function(t,e,n){"use strict";n(311)},332:function(t,e,n){var r=n(80)((function(i){return i[1]}));r.push([t.i,".image[data-v-1f357321]{background-position:50%;background-repeat:no-repeat;background-size:cover;border-radius:5px;float:left}",""]),r.locals={},t.exports=r},343:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(49),n(35),n(318)),o={components:{gallery:n.n(l).a},data:function(){return{searchShown:!1,showModal:!1,album:null,tanggal:null,image:null,nama:null,images:[],index:null,cari:null}},mounted:function(){this.getData()},methods:{fotoTampil:function(image,i){this.index=i;var t=this.$el.querySelector(".blueimp-gallery-controls"),button=document.createElement("button");button.classList.add("absolute","top-0","text-white"),button.addEventListener("click",(function(){var a=document.createElement("a"),t=image.split("/").pop();console.log(t),a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(image)),a.setAttribute("download",t),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a),console.log(a)})),t.appendChild(button).innerText="download"},showSearch:function(){this.searchShown=!this.searchShown},getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/api/galery_pertandingan",{params:{nama:t.cari},headers:{"ngrok-skip-browser-warning":"123123"}}).then((function(e){t.album=e.galerys}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(alert.response.data.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},showfoto:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showModal=!0,e.prev=1,e.next=4,t.$axios.$get("/api/photo",{headers:{"ngrok-skip-browser-warning":"123123"}}).then((function(e){t.images=e.photos.map((function(e){return t.$axios.defaults.baseURL+"/"+e.path}))}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert(alert.response.data.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))()}}},c=(n(331),n(47)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"my-0 mx-auto min-h-full max-w-screen-sm"},[e("div",{staticClass:"container bg-white shadow-lg"},[e("div",{staticClass:"mb-4 flex py-5 px-4 bg-white shadow-lg"},[e("router-link",{attrs:{to:"/"}},[e("svg",{attrs:{width:"13",height:"23",viewBox:"0 0 13 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M11 2L3 11.1042L11 21",stroke:"#320B4E","stroke-width":"4","stroke-linecap":"round"}})])]),t._v(" "),t.searchShown?t._e():e("h1",{staticClass:"font-bold text-2xl mx-auto",staticStyle:{color:"rgba(50, 11, 78, 1)"}},[t._v("\n          Galeri\n        ")]),t._v(" "),e("div",{on:{click:t.showSearch}},[t._m(0)]),t._v(" "),t.searchShown?e("div",{staticClass:"w-full"},[e("div",{staticClass:"relative mb-4 flex px-4 w-full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cari,expression:"cari"}],staticClass:"relative w-full px-3 py-1 pt-2 flex-auto rounded-full border border-solid border-black bg-transparent bg-clip-padding text-base font-normal outline-none transition duration-300 ease-in-out focus:border-purple-900 focus:ring-purple-900 dark:placeholder-black",attrs:{type:"search",placeholder:"Cari galery"},domProps:{value:t.cari},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getData.apply(null,arguments)},input:function(e){e.target.composing||(t.cari=e.target.value)}}})])]):t._e()],1),t._v(" "),e("div",{staticClass:"px-10 py-4 cursor-pointer"},t._l(t.album,(function(n,r){return e("div",{key:r,staticClass:"w-full relative mb-8",on:{click:t.showfoto}},[e("div",{staticClass:"relativ"},[e("div",{staticClass:"absolute rounded-lg w-full h-full bg-gradient-to-t from-purple-800"}),t._v(" "),e("img",{staticClass:"rounded-lg w-full h-full",attrs:{src:t.$axios.defaults.baseURL+"/"+n.tiket.tuan_rumah.image,alt:n.tiket.tuan_rumah.image}})]),t._v(" "),e("div",{staticClass:"absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"text-white pt-20"},[e("div",{staticClass:"mt-20"},[e("h5",{staticClass:"inter font-bold mt-5 pl-4 text-4xl"},[t._v("\n                    "+t._s(n.tiket.tuan_rumah.nama)+" VS "+t._s(n.tiket.penantang.nama)+"\n                  ")]),t._v(" "),e("p",{staticClass:"font-semibold pl-4 pt-5 text-xl"},[t._v("\n                    "+t._s(n.tiket.stadiun)+"\n                  ")]),t._v(" "),e("p",{staticClass:"inter pl-5 text-xl mt-3 mb-20"},[t._v("\n                    "+t._s(n.tiket.tanggal)+"\n                  ")])])])])])])})),0)])]),t._v(" "),t.showModal?e("div",{staticClass:"fixed top-[50%] left-0 flex justify-center items-end w-screen h-2/3"},[e("div",{staticClass:"fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 duration-300",on:{click:function(e){t.showModal=!1}}}),t._v(" "),e("div",{staticClass:"w-full max-w-screen-sm bg-white max-h-screen overflow-y-scroll",staticStyle:{"z-index":"1"}},[t._m(1),t._v(" "),e("div",[e("div",[e("div",{staticClass:"cursor-pointer grid grid-cols-3 p-1 gap-2"},[e("gallery",{attrs:{images:t.images,index:t.index},on:{close:function(e){t.index=null}}},[e("h1",[t._v("Coba")])]),t._v(" "),t._l(t.images,(function(image,n){return e("div",{key:n,staticClass:"image",style:{backgroundImage:"url("+image+")",width:"200px",height:"100px"},on:{click:function(e){return t.fotoTampil(image,n)}}})})),t._v(" "),0===t.images.length?e("div",[t._v("\n              Belum ada foto\n            ")]):t._e()],2)])])])]):t._e()])}),[function(){var t=this._self._c;return t("div",{staticClass:"cursor-pointer"},[t("img",{attrs:{src:"/frame.png"}})])},function(){var t=this._self._c;return t("div",[t("div",{staticClass:"container"},[t("div",{staticClass:"w-full flex flex-row py-5 rounded-t-xl shadow-lg",staticStyle:{"background-color":"rgba(50, 11, 78, 1)"}},[t("h1",{staticClass:"font-bold text-2xl mx-auto",staticStyle:{color:"rgba(255, 255, 255, 1)"}},[this._v("\n              Foto(24)\n            ")])])])])}],!1,null,"1f357321",null);e.default=component.exports}}]);