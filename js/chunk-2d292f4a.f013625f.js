(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d292f4a"],{3530:function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"mx-auto",staticStyle:{width:"400px"}},[t._m(0),s("h3",{staticClass:"title text-center font-weight-bold mt-4"},[t._v("後台登入")]),s("form",{on:{submit:function(s){return s.preventDefault(),s.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[s("div",{staticClass:"form-wrapper"},[s("label",{attrs:{for:"account"}},[t._v("帳號")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"form",class:{redBottomLine:"此帳號不存在！"===t.errorMsg},attrs:{id:"account",name:"account",type:"text",placeholder:"請輸入帳號",required:"",autofocus:""},domProps:{value:t.account},on:{input:function(s){s.target.composing||(t.account=s.target.value)}}}),s("div",{staticClass:"error-alert"},["此帳號不存在!"===t.errorMsg?s("span",[t._v("帳號不存在")]):t._e()])])]),s("div",{staticClass:"form-wrapper"},[s("label",{attrs:{for:"password"}},[t._v("密碼")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form",class:{redBottomLine:"密碼錯誤！"===t.errorMsg},attrs:{id:"password",name:"password",type:"password",placeholder:"請輸入密碼",autocomplete:"current-password",required:""},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),s("div",{staticClass:"error-alert"},["密碼錯誤！"===t.errorMsg?s("span",[t._v("密碼錯誤")]):t._e()])])]),s("div",{staticClass:"mt-4"},[s("button",{staticClass:"btn btn-info btn-singin",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" "+t._s(t.isProcessing?"驗證中":"登入")+" ")])])]),s("div",{staticClass:"d-flex mt-4 justify-content-end"},[s("router-link",{staticClass:"mx-1",attrs:{to:"/login"}},[t._v(" 前台登入 ")])],1)])},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"mx-auto",staticStyle:{width:"40px"}},[s("img",{staticClass:"mx-auto mt-5",attrs:{width:"40px",src:"https://i.postimg.cc/Dfp23k8g/logo-2x.png",alt:"LogoImage"}})])}],o=(a("d9e2"),a("14d9"),a("2fa3")),i=a("7696"),n={name:"Admin",data(){return{account:"",password:"",isProcessing:!1,errorMsg:""}},methods:{async handleSubmit(){try{if(this.errorMsg="",!this.account||!this.password)return void o["a"].fire({icon:"warning",title:"帳號和密碼為必填"});this.isProcessing=!0;const t=await i["a"].adminSignIn({account:this.account,password:this.password}),{data:s}=t;if("error"===s.status)throw new Error(s.message);localStorage.setItem("token",s.data.token),this.$store.commit("setCurrentUser",s.data.user),this.$router.push("/admin/tweets")}catch(t){this.password="",this.isProcessing=!1,console.error(t.message),this.errorMsg=t.message,"此帳號不存在！"===t.message?o["a"].fire({icon:"error",title:"帳號不存在，請重新確認"}):"密碼錯誤！"===t.message?o["a"].fire({icon:"error",title:"密碼錯誤，請重新輸入"}):o["a"].fire({icon:"error",title:"目前無法登入，請稍後再試"})}}}},c=n,l=(a("a677"),a("2877")),d=Object(l["a"])(c,r,e,!1,null,null,null);s["default"]=d.exports},"70fb":function(t,s,a){},a677:function(t,s,a){"use strict";a("70fb")}}]);
//# sourceMappingURL=chunk-2d292f4a.f013625f.js.map