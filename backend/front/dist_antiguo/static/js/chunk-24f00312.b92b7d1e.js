(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24f00312"],{"0fb9":function(t,n,s){},1836:function(t,n,s){"use strict";var e=s("435a"),a=s.n(e);a.a},2017:function(t,n,s){"use strict";var e=s("b12d"),a=s.n(e);a.a},2735:function(t,n,s){"use strict";var e=s("0fb9"),a=s.n(e);a.a},"435a":function(t,n,s){},"9ed6":function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[t._v("\n        "+t._s(t.$t("login.title"))+"\n      ")]),t._v(" "),s("lang-select",{staticClass:"set-language"})],1),t._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),s("el-input",{ref:"username",attrs:{placeholder:t.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:t.loginForm.username,callback:function(n){t.$set(t.loginForm,"username",n)},expression:"loginForm.username"}})],1),t._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),s("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:t.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.handleLogin(n)}},model:{value:t.loginForm.password,callback:function(n){t.$set(t.loginForm,"password",n)},expression:"loginForm.password"}}),t._v(" "),s("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1),t._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),t.handleLogin(n)}}},[t._v("\n      "+t._s(t.$t("login.logIn"))+"\n    ")]),t._v(" "),s("div",{staticStyle:{position:"relative"}},[s("div",{staticClass:"tips"},[s("span",[t._v(t._s(t.$t("login.username"))+" : admin")]),t._v(" "),s("span",[t._v(t._s(t.$t("login.password"))+" : "+t._s(t.$t("login.any")))])]),t._v(" "),s("div",{staticClass:"tips"},[s("span",{staticStyle:{"margin-right":"18px"}},[t._v("\n          "+t._s(t.$t("login.username"))+" : editor\n        ")]),t._v(" "),s("span",[t._v(t._s(t.$t("login.password"))+" : "+t._s(t.$t("login.any")))])]),t._v(" "),s("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(n){t.showDialog=!0}}},[t._v("\n        "+t._s(t.$t("login.thirdparty"))+"\n      ")])],1)],1),t._v(" "),s("el-dialog",{attrs:{title:t.$t("login.thirdparty"),visible:t.showDialog},on:{"update:visible":function(n){t.showDialog=n}}},[t._v("\n    "+t._s(t.$t("login.thirdpartyTips"))+"\n    "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("social-sign")],1)],1)},a=[],o=s("61f7"),i=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("el-dropdown",{staticClass:"international",attrs:{trigger:"click"},on:{command:t.handleSetLanguage}},[s("div",[s("svg-icon",{attrs:{"class-name":"international-icon","icon-class":"language"}})],1),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{disabled:"zh"===t.language,command:"zh"}},[t._v("\n      中文\n    ")]),t._v(" "),s("el-dropdown-item",{attrs:{disabled:"en"===t.language,command:"en"}},[t._v("\n      English\n    ")]),t._v(" "),s("el-dropdown-item",{attrs:{disabled:"es"===t.language,command:"es"}},[t._v("\n      Español\n    ")])],1)],1)},r=[],l={computed:{language:function(){return this.$store.getters.language}},methods:{handleSetLanguage:function(t){this.$i18n.locale=t,this.$store.dispatch("app/setLanguage",t),this.$message({message:"Switch Language Success",type:"success"})}}},c=l,d=s("2877"),u=Object(d["a"])(c,i,r,!1,null,null,null),p=u.exports,g=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"social-signup-container"},[s("div",{staticClass:"sign-btn",on:{click:function(n){return t.wechatHandleClick("wechat")}}},[s("span",{staticClass:"wx-svg-container"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v(" 微信\n  ")]),t._v(" "),s("div",{staticClass:"sign-btn",on:{click:function(n){return t.tencentHandleClick("tencent")}}},[s("span",{staticClass:"qq-svg-container"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v(" QQ\n  ")])])},m=[],v={name:"SocialSignin",methods:{wechatHandleClick:function(t){alert("ok")},tencentHandleClick:function(t){alert("ok")}}},h=v,f=(s("2735"),Object(d["a"])(h,g,m,!1,null,"253699e4",null)),w=f.exports,_={name:"Login",components:{LangSelect:p,SocialSign:w},data:function(){var t=function(t,n,s){Object(o["d"])(n)?s():s(new Error("Please enter the correct user name"))},n=function(t,n,s){n.length<6?s(new Error("The password can not be less than 6 digits")):s()};return{loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:n}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(n){if(!n)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/"}),t.loading=!1})).catch((function(){t.loading=!1}))}))}}},y=_,b=(s("2017"),s("1836"),Object(d["a"])(y,e,a,!1,null,"57165a62",null));n["default"]=b.exports},b12d:function(t,n,s){}}]);