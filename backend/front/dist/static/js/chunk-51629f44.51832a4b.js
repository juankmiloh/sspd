(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51629f44"],{"0d2a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showElements,expression:"showElements"}],staticStyle:{"padding-bottom":"50px"}},[a("sticky",{staticStyle:{position:"fixed",width:"100%"},attrs:{"class-name":"sub-navbar"}},[a("div",{staticStyle:{"text-align":"center",color:"white"}},[a("el-row",[a("el-col",{staticClass:"div-header",attrs:{span:13,xs:9}},[t.x.matches?a("label",{staticStyle:{"font-size":"x-large"}},[t._v("Fact "+t._s(t.id))]):a("label",{staticStyle:{"font-size":"x-large"}},[t._v("Factura no. "+t._s(t.id))])]),t._v(" "),a("el-col",{staticStyle:{border:"0px solid red","text-align":"right"},attrs:{span:11,xs:15}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showElements,expression:"showElements"}],staticStyle:{border:"2px solid #67c23a"},attrs:{size:"medium",icon:"el-icon-printer"},on:{click:function(e){return t.fetchData()}}},[t._v("Imprimir")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showElements,expression:"showElements"}],staticStyle:{border:"1px solid #67c23a"},attrs:{type:"warning",size:"medium"},on:{click:function(e){return t.closeWindow()}}},[t._v(t._s(t.btnClose()))])],1)],1)],1)])],1),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"main-article",style:t.showElements?{border:"1px solid #E4E7ED",marginTop:"2%"}:{},attrs:{"element-loading-text":"Generando Factura..."}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],style:t.showElements?{padding:"3%"}:{}},t._l(t.renderFacturas,(function(e,r){return a("span",{key:e.id},[a("el-row",[a("el-col",{staticStyle:{"padding-top":"2.8%"},attrs:{span:7}},[a("img",{staticClass:"logo",attrs:{src:t.logo}})]),t._v(" "),a("el-col",{attrs:{span:17}},[a("el-row",{staticStyle:{"padding-top":"2.5%"}},[a("el-col",{staticStyle:{"font-size":"11px","padding-left":"2.5%","padding-bottom":"1%"},attrs:{span:24}},[a("b",[t._v("UNIGRASAS COLOMBIA S.A.S")])]),t._v(" "),a("div",{staticStyle:{"font-size":"10px","padding-left":"2.5%"}},[a("el-col",{staticStyle:{"padding-bottom":"0.5%"},attrs:{span:24}},[t._v("NIT: 830.090.675-7")]),t._v(" "),a("el-col",{staticStyle:{"padding-bottom":"0.5%"},attrs:{span:24}},[t._v("Persona Jurídica")]),t._v(" "),a("el-col",{staticStyle:{"padding-bottom":"0.5%"},attrs:{span:24}},[t._v("Carrera 97 # 24c-50.5, BOGOTÁ, D.C., Bogotá, Colombia")]),t._v(" "),a("el-col",{staticStyle:{"padding-bottom":"0.5%"},attrs:{span:24}},[t._v("Tel. 3507259492")])],1)],1)],1)],1),t._v(" "),a("div",{staticStyle:{"border-top":"1px solid #DCDFE6","margin-top":"1.5%"}}),t._v(" "),a("el-row",{staticStyle:{"margin-top":"2.5%"}},[a("el-col",{staticStyle:{border:"1px solid","border-radius":"5px",padding:"1.5%"},attrs:{span:12}},[a("el-row",{staticStyle:{"padding-bottom":"0.5%"}},[a("el-col",{staticStyle:{"font-size":"10.5px"},attrs:{span:5}},[a("b",[t._v("Cliente ")])]),t._v(" "),a("el-col",{staticStyle:{"font-size":"10.5px"},attrs:{span:19}},[t._v(t._s(t.dataFactura.n_cliente))])],1),t._v(" "),a("el-row",{staticStyle:{"padding-bottom":"0.5%"}},[a("el-col",{staticStyle:{"font-size":"10.5px"},attrs:{span:5}},[a("b",[t._v("Nit ")])]),t._v(" "),a("el-col",{staticStyle:{"font-size":"10.5px"},attrs:{span:19}},[t._v(t._s(t.dataFactura.nit))])],1),t._v(" "),a("el-row",{staticStyle:{"padding-bottom":"0.5%"}},[a("el-col",{staticStyle:{"font-size":"10.5px"},attrs:{span:5}},[a("b",[t._v("Dirección ")])]),t._v(" "),a("el-col",{staticStyle:{"font-size":"10.5px"},attrs:{span:19}},[t._v(t._s(t.dataFactura.direccion))])],1),t._v(" "),a("el-row",{staticStyle:{"padding-bottom":"0.5%"}},[a("el-col",{staticStyle:{"font-size":"10.5px"},attrs:{span:5}},[a("b",[t._v("Teléfono ")])]),t._v(" "),a("el-col",{staticStyle:{"font-size":"10.5px"},attrs:{span:19}},[t._v(t._s(t.dataFactura.telefono))])],1)],1),t._v(" "),a("el-col",{attrs:{span:1}},[t._v("\n             \n          ")]),t._v(" "),a("el-col",{staticStyle:{border:"1px solid","border-radius":"5px",padding:"1.5%"},attrs:{span:11}},[a("el-row",{staticStyle:{"padding-bottom":"0.5%","border-bottom":"1px solid #606266"}},[a("el-col",{staticStyle:{"font-size":"10.5px",color:"#ff4603"},attrs:{span:10}},[a("b",[t._v("N° Remisión ")])]),t._v(" "),a("el-col",{staticStyle:{"font-size":"10.5px"},attrs:{span:14}},[a("b",[t._v(t._s(t.dataFactura.idfactura))])])],1),t._v(" "),a("el-row",{staticStyle:{"padding-top":"0.5%","border-bottom":"1px solid #606266"}},[a("el-col",{staticStyle:{"font-size":"10.5px",color:"#ff4603"},attrs:{span:10}},[a("b",[t._v("Fecha ")])]),t._v(" "),a("el-col",{staticStyle:{"font-size":"10.5px"},attrs:{span:14}},[a("b",[t._v(t._s(t.dataFactura.f_emision))])])],1),t._v(" "),a("el-row",{staticStyle:{"padding-top":"0.5%","border-bottom":"1px solid #606266"}},[a("el-col",{staticStyle:{"font-size":"10.5px",color:"#ff4603"},attrs:{span:10}},[a("b",[t._v("Forma de pago ")])]),t._v(" "),a("el-col",{staticStyle:{"font-size":"10.5px"},attrs:{span:14}},[a("b",[t._v(t._s(t.dataFactura.negociacion))])])],1),t._v(" "),a("el-row",{staticStyle:{"padding-top":"0.5%","border-bottom":"1px solid #606266"}},[a("el-col",{staticStyle:{"font-size":"10.5px",color:"#ff4603"},attrs:{span:10}},[a("b",[t._v("VENDEDOR: ")])]),t._v(" "),a("el-col",{staticStyle:{"font-size":"10.5px"},attrs:{span:14}},[a("b",[t._v(t._s(t.dataFactura.vendedor))])])],1)],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"2%"}},[a("el-col",{staticClass:"wrapper",style:t.x.matches?"height: 38em;":"height: 9em;",attrs:{span:24}},[a("table",{staticClass:"table-items"},[a("tr",{staticClass:"items-th"},[a("th",[t._v("# ")]),t._v(" "),a("th",[t._v("CÓDIGO")]),t._v(" "),a("th",[t._v("DESCRIPCIÓN")]),t._v(" "),a("th",[t._v("CANTIDAD")]),t._v(" "),a("th",[t._v("PRECIO U.")]),t._v(" "),a("th",[t._v("TOTAL")])]),t._v(" "),t._l(t.dataItems,(function(e,r){return a("tr",{key:e.iditem,staticClass:"items-td"},[a("td",[t._v(t._s(r+1))]),t._v(" "),a("td",[t._v(t._s(e.coditem))]),t._v(" "),a("td",[t._v(t._s(e.item))]),t._v(" "),a("td",[t._v(t._s(t._f("formatNumber")(e.cantidad)))]),t._v(" "),a("td",[t._v("$ "+t._s(t._f("formatNumber")(e.precio)))]),t._v(" "),a("td",[t._v("$ "+t._s(t._f("formatNumber")(e.cantidad*e.precio)))])])})),t._v(" "),a("tr",{staticClass:"items-td-null"},[a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")])],2)])],1),t._v(" "),a("el-row",{staticClass:"wrapper",staticStyle:{"margin-top":"1.5%"}},[a("el-col",{attrs:{span:17}},[a("el-row",{staticStyle:{padding:"1%"}},[a("el-col",{staticStyle:{"font-size":"11px"},attrs:{span:1}},[a("b",[t._v("Son: ")])]),t._v(" "),a("el-col",{staticStyle:{"font-size":"11px","padding-left":"1.5%"},attrs:{span:23}},[t._v("\n                ( "+t._s(t._f("uppercaseFirst")(t.convertNumberToLetters(t.dataFactura.total)))+" ) "),a("br")])],1),t._v(" "),a("el-row",{staticStyle:{padding:"1%","border-top":"1px solid"}},[a("el-col",{staticStyle:{border:"0px solid red","font-size":"11px",width:"52vh"},attrs:{span:24}},[a("b",[t._v("Notas:")]),t._v(" "+t._s(t.dataFactura.descripcion)+"\n              ")])],1),t._v(" "),a("el-row",{staticStyle:{padding:"1%","border-top":"1px solid"}},[a("el-col",{staticStyle:{border:"0px solid red","font-size":"11px",width:"52vh","padding-top":"0.5%"},attrs:{span:24}},[a("b",[t._v("Recibido por    _______________________________________________________")]),t._v(" "),a("br"),t._v(" "),a("b",[t._v("N° documento")])])],1)],1),t._v(" "),a("el-col",{staticStyle:{"border-left":"1px solid"},attrs:{span:7}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-row",[a("el-col",{staticStyle:{padding:"2%","border-right":"1px solid","border-bottom":"1px solid","font-size":"11px"},attrs:{span:11}},[a("b",[t._v("Subtotal: ")])]),t._v(" "),a("el-col",{staticStyle:{padding:"2%","text-align":"right","border-bottom":"1px solid","font-size":"11px"},attrs:{span:13}},[t._v("$ "+t._s(t._f("formatNumber")(t.dataFactura.total)))])],1),t._v(" "),a("el-row",[a("el-col",{staticStyle:{padding:"2%","border-right":"1px solid","border-bottom":"1px solid","font-size":"11px"},attrs:{span:11}},[a("b",[t._v("Cargos: ")])]),t._v(" "),a("el-col",{staticStyle:{padding:"2%","text-align":"right","border-bottom":"1px solid","font-size":"11px"},attrs:{span:13}},[t._v("$ 0")])],1),t._v(" "),a("el-row",[a("el-col",{staticStyle:{padding:"2%","border-right":"1px solid","border-bottom":"1px solid","font-size":"11px"},attrs:{span:11}},[a("b",[t._v("Descuento: ")])]),t._v(" "),a("el-col",{staticStyle:{padding:"2%","text-align":"right","border-bottom":"1px solid","font-size":"11px"},attrs:{span:13}},[t._v("$ 0")])],1),t._v(" "),a("el-row",[a("el-col",{staticStyle:{padding:"2%","border-right":"1px solid","font-size":"11px"},attrs:{span:11}},[a("b",[t._v("Total: ")])]),t._v(" "),a("el-col",{staticStyle:{padding:"2%","text-align":"right","font-size":"11px"},attrs:{span:13}},[t._v("$ "+t._s(t._f("formatNumber")(t.dataFactura.total)))])],1)],1)],1)],1)],1),t._v(" "),0===r?a("div",{staticStyle:{"border-top":"1px solid #909399","border-top-style":"dashed","margin-top":"2%"},style:t.x.matches?"display: none;":"display: block;"}):t._e()],1)})),0)]),t._v(" "),a("div",{style:t.showElements?{display:"block"}:{}},[a("br"),a("br")])])},n=[],s=a("c7eb"),o=(a("96cf"),a("1da1")),i=a("b804"),c=a("2a89"),l=a.n(c),d=a("de7d"),u=a("e120"),p=a("6f65"),_={name:"ViewPdf",components:{Sticky:i["a"]},data:function(){return{logo:l.a,article:"",fullscreenLoading:!1,id:"",showElements:!0,dataFactura:{},dataItems:[],loading:!1,x:"",renderFacturas:[{id:1},{id:2}]}},mounted:function(){var t=Object(o["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.x=window.matchMedia("(max-width: 800px)"),this.loading=!0,this.id=this.$route.params.id,t.next=5,this.getDataFactura();case 5:return t.next=7,this.getDataItems();case 7:this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{btnClose:function(){return this.x.matches?"X":"Cerrar"},convertNumberToLetters:function(t){var e=Object(p["a"])(t,{plural:"PESOS",singular:"PESO",centPlural:"CENTAVOS",centSingular:"CENTAVO"});return e},fetchData:function(){var t=this;this.showElements=!1,this.fullscreenLoading=!0,a.e("chunk-2d228c36").then(a.bind(null,"db24")).then((function(e){var a=e.default.title;document.title="".concat(a," #").concat(t.id," - ").concat(t.dataFactura.n_cliente),t.article=e.default,setTimeout((function(){t.fullscreenLoading=!1,t.$nextTick((function(){window.print(),t.x.matches?setTimeout((function(){t.showElements=!0}),1e4):t.showElements=!0}))}),500)}))},closeWindow:function(){this.$router.go(-1)},getDataFactura:function(){var t=Object(o["a"])(Object(s["a"])().mark((function t(){var e=this;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["c"])(this.id).then(function(){var t=Object(o["a"])(Object(s["a"])().mark((function t(a){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(a.length>0)){t.next=4;break}e.dataFactura=a[0],t.next=6;break;case 4:return t.next=6,Object(d["d"])(e.id).then(function(){var t=Object(o["a"])(Object(s["a"])().mark((function t(a){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$notify({title:"Advertencia",message:"No se puede generar factura",type:"warning",duration:2e3});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getDataItems:function(){var t=Object(o["a"])(Object(s["a"])().mark((function t(){var e=this;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["c"])(this.id).then((function(t){e.dataItems=t}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},v=_,f=(a("a315"),a("2877")),b=Object(f["a"])(v,r,n,!1,null,null,null);e["default"]=b.exports},"2a89":function(t,e,a){t.exports=a.p+"static/img/unigrasas.d8301044.jpg"},"6f65":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var r=function(){function t(t){switch(t){case 1:return"UN";case 2:return"DOS";case 3:return"TRES";case 4:return"CUATRO";case 5:return"CINCO";case 6:return"SEIS";case 7:return"SIETE";case 8:return"OCHO";case 9:return"NUEVE"}return""}function e(e){var r=Math.floor(e/10),n=e-10*r;switch(r){case 1:switch(n){case 0:return"DIEZ";case 1:return"ONCE";case 2:return"DOCE";case 3:return"TRECE";case 4:return"CATORCE";case 5:return"QUINCE";default:return"DIECI"+t(n)}case 2:switch(n){case 0:return"VEINTE";default:return"VEINTI"+t(n)}case 3:return a("TREINTA",n);case 4:return a("CUARENTA",n);case 5:return a("CINCUENTA",n);case 6:return a("SESENTA",n);case 7:return a("SETENTA",n);case 8:return a("OCHENTA",n);case 9:return a("NOVENTA",n);case 0:return t(n)}}function a(e,a){return a>0?e+" Y "+t(a):e}function r(t){var a=Math.floor(t/100),r=t-100*a;switch(a){case 1:return r>0?"CIENTO "+e(r):"CIEN";case 2:return"DOSCIENTOS "+e(r);case 3:return"TRESCIENTOS "+e(r);case 4:return"CUATROCIENTOS "+e(r);case 5:return"QUINIENTOS "+e(r);case 6:return"SEISCIENTOS "+e(r);case 7:return"SETECIENTOS "+e(r);case 8:return"OCHOCIENTOS "+e(r);case 9:return"NOVECIENTOS "+e(r)}return e(r)}function n(t,e,a,n){var s=Math.floor(t/e),o=t-s*e,i="";return s>0&&(i=s>1?r(s)+" "+n:a),o>0&&(i+=""),i}function s(t){var e=1e3,a=Math.floor(t/e),s=t-a*e,o=n(t,e,"MIL","MIL"),i=r(s);return""==o?i:o+" "+i}function o(t){var e=1e6,a=Math.floor(t/e),r=t-a*e,o=s(r),i="";return i=n(t,e,"UN MILLON",o?"MILLONES":"MILLONES DE"),""==i?o:i+" "+o}return function(t,e){e=e||{};var a={numero:t,enteros:Math.floor(t),centavos:Math.round(100*t)-100*Math.floor(t),letrasCentavos:"",letrasMonedaPlural:e.plural||"PESOS",letrasMonedaSingular:e.singular||"PESO",letrasMonedaCentavoPlural:e.centPlural||"CENTAVOS",letrasMonedaCentavoSingular:e.centSingular||"CENTAVO"};return a.centavos>0&&(a.letrasCentavos="CON "+function(){return 1==a.centavos?o(a.centavos)+" "+a.letrasMonedaCentavoSingular:o(a.centavos)+" "+a.letrasMonedaCentavoPlural}()),0==a.enteros?"CERO "+a.letrasMonedaPlural+" "+a.letrasCentavos:1==a.enteros?o(a.enteros)+" "+a.letrasMonedaSingular+" "+a.letrasCentavos:o(a.enteros)+" "+a.letrasMonedaPlural+" "+a.letrasCentavos}}()},"7c82":function(t,e,a){},a315:function(t,e,a){"use strict";a("7c82")},de7d:function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return o})),a.d(e,"b",(function(){return i})),a.d(e,"f",(function(){return c})),a.d(e,"a",(function(){return l})),a.d(e,"h",(function(){return d})),a.d(e,"g",(function(){return u}));var r=a("b775");function n(){return Object(r["a"])({url:"/procesos",method:"get"})}function s(t){return Object(r["a"])({url:"/proceso/detalle",method:"get",params:{idProceso:t}})}function o(t){return Object(r["a"])({url:"/proceso/detalle/inicial",method:"get",params:{idProceso:t}})}function i(t){return Object(r["a"])({url:"/procesos",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/procesos/update",method:"put",data:t})}function l(t){return Object(r["a"])({url:"/procesos",method:"put",params:{idProceso:t}})}function d(t){return Object(r["a"])({url:"/procesos/usuarioupdate",method:"put",data:t})}function u(t){return Object(r["a"])({url:"/procesos/totalupdate",method:"put",data:t})}},e120:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return s})),a.d(e,"d",(function(){return o})),a.d(e,"b",(function(){return i}));var r=a("b775");function n(t){return Object(r["a"])({url:"/facturaHasItems/detalle",method:"get",params:{idproceso:t}})}function s(t){return Object(r["a"])({url:"/facturaHasItems",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/facturaHasItems/update",method:"put",data:t})}function i(t){return Object(r["a"])({url:"/facturaHasItems",method:"delete",data:t})}}}]);