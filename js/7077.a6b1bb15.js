"use strict";(self["webpackChunkbizlx"]=self["webpackChunkbizlx"]||[]).push([[7077],{7077:function(t,e,s){s.r(e),s.d(e,{default:function(){return x}});var r=s(4562),o=s(4145),i=s(4886),a=s(9256),n=s(4324),l=s(3201),h=s(9422),u=s(9780),d=s(6313),c=s(7953),p=function(){var t=this,e=t._self._c;return e("div",[e(d.Z,{attrs:{dense:"",height:"60px",color:"error"}},[e(c.qW,[e("router-link",{attrs:{to:"/"}},[e(r.Z,{attrs:{icon:""}},[e(n.Z,{attrs:{size:"35",color:"white"}},[t._v("mdi-home")])],1)],1)],1)],1),e(a.Z,[e(l.Z,{attrs:{"align-center":"","justify-center":""}},[e(h.Z,{staticClass:"mx-auto",attrs:{"max-width":"400px"}},[e(o.Z,{staticClass:"my-5 border rounded-3 elevation-4"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.Login.apply(null,arguments)}}},[e(i.EB,{staticClass:"rounded-top"},[t._v("Admin Login")]),e(i.ZB,[e(u.Z,{attrs:{type:"email",placeholder:"Email Address",rules:t.emailRules,"prepend-inner-icon":"mdi-email",required:""},model:{value:t.form1.email,callback:function(e){t.$set(t.form1,"email",e)},expression:"form1.email"}}),e(u.Z,{staticClass:"d-none",attrs:{name:"user_role"},model:{value:t.form1.user_role,callback:function(e){t.$set(t.form1,"user_role",e)},expression:"form1.user_role"}}),e(u.Z,{attrs:{type:"password",placeholder:"Password",rules:t.passwordRules,"prepend-inner-icon":"mdi-lock",required:""},model:{value:t.form1.password,callback:function(e){t.$set(t.form1,"password",e)},expression:"form1.password"}}),t.error?e("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),e("div",{staticClass:"mt-3 align-center"},[e(r.Z,{attrs:{type:"submit",large:"",block:"",color:"error"}},[t._v("Login")])],1)],1)],1)])],1)],1)],1)],1)},m=[],g=(s(7658),s(6154)),b={name:"AdminLogin",metaInfo:{title:"Bizlx Admin Login"},data(){return{form1:{email:"",password:"",user_role:"4"},token:"",user:"",snackbar:!1,error:"",timeout:"",emailRules:[t=>!!t||"E-mail is required.",t=>/.+@.+/.test(t)||"E-mail must be valid."],passwordRules:[t=>!!t||"Password is required.",t=>/[A-Z]/.test(t)||"Use upper case.",t=>/[a-z]/.test(t)||"Use lower case.",t=>/[0-9]/.test(t)||"Use number.",t=>/[#?!@$%^&*-]/.test(t)||"Use special character.",t=>t.length>=8||"Password must be greater than 8 characters.",t=>t.length<=15||"Password must be less than 15 characters."]}},created(){this.isAuthenticated(),this.user_role(),1==this.isAuthenticated()?(4==this.user_role()&&this.$router.push({name:"dashboard"}),1==this.user_role()&&this.$router.push({name:"businesslogin"}),2==this.user_role()&&this.$router.push({name:"resellerlogin"}),3==this.user_role()&&this.$router.push({name:"admin"}),0==this.user_role()&&this.$router.push({name:"userlogin"})):this.$router.push({name:"adminlogin"})},methods:{async Login(){await g.Z.post("admin/login",this.form1).then((t=>{this.token=t.data.token,this.user=t.data.user;const e=this.token,s=this.user;this.$store.dispatch("login",{token:e,userData:s}),this.$router.push("dashboard"),location.reload()})).catch((t=>{this.error=t.response.data.message}))},isAuthenticated(){return this.$store.state.isAuthenticated},user_role(){return this.$store.state.userData.user_role}}},f=b,v=s(1001),_=(0,v.Z)(f,p,m,!1,null,"79789c8c",null),x=_.exports},3201:function(t,e,s){s(9027);var r=s(7549);e["Z"]=(0,r.Z)("layout")},6313:function(t,e,s){s.d(e,{Z:function(){return n}});s(7658),s(541);var r=s(7423),o=s(1625),i=s(5352),a=s(4101),n=r.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...r.Z.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,i.kb)(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,a.fK)(t,e,this)}))},methods:{genBackground(){const t={height:(0,i.kb)(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(o.Z,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,i.kb)(this.computedContentHeight)}},(0,i.z9)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,i.kb)(this.extensionHeight)}},(0,i.z9)(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],s=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,s,e)}})},7953:function(t,e,s){s.d(e,{qW:function(){return i}});var r=s(6313),o=s(5352);const i=(0,o.Ji)("v-toolbar__title"),a=(0,o.Ji)("v-toolbar__items");r.Z}}]);
//# sourceMappingURL=7077.a6b1bb15.js.map