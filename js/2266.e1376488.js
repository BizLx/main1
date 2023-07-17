"use strict";(self["webpackChunkbizlx"]=self["webpackChunkbizlx"]||[]).push([[2266],{8959:function(t,e,s){s.r(e),s.d(e,{default:function(){return C}});var a=s(344),i=s(4562),r=s(4145),o=s(3486),l=s(266),n=s(5125),u=s(4324),c=s(1713),m=s(9258),h=s(626),d=s(5517),p=s(8263),f=s(8064),b=s(9780),g=s(2648),v=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row py-1"},[t._m(0),e("div",{staticClass:"col-4 col-md-2"},[e("router-link",{attrs:{to:"/reseller/business-list"}},[e(i.Z,{attrs:{tile:"",color:"cred"}},[e(u.Z,{attrs:{left:""}},[t._v(" mdi-format-list-bulleted ")]),t._v(" LIST ")],1)],1)],1)]),e(p.Z,{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(h.Z,{attrs:{cols:"6"}},[t._v("Create Business Client")])],1),e(f.Z,{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(d.Z,[e(r.Z,{attrs:{color:"basil",flat:""}},[e(n.Z,{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(c.Z,[e(l.Z,{staticClass:"py-4",attrs:{cols:"12",md:"12"}},[e(b.Z,{attrs:{rules:t.nameRules,counter:100,dense:"",label:"Store / Business Name",type:"text"},model:{value:t.formData.business_name,callback:function(e){t.$set(t.formData,"business_name",e)},expression:"formData.business_name"}})],1),e(l.Z,{staticClass:"py-2",attrs:{cols:"12",md:"12"}},[e(b.Z,{attrs:{rules:t.emailRules,"error-messages":t.emailVerifyMessage,label:"Your Email",dense:"",type:"email"},on:{keyup:t.emailVerify},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),e(l.Z,{staticClass:"py-2",attrs:{cols:"12",md:"12"}},[e(b.Z,{attrs:{rules:t.usernameRules,"error-messages":t.userNameVerifyMessage,counter:80,dense:"",label:"Username",type:"text"},on:{keyup:t.userNameVerify},model:{value:t.formData.username,callback:function(e){t.$set(t.formData,"username",e)},expression:"formData.username"}})],1),e(l.Z,{staticClass:"py-2",attrs:{cols:"12",md:"12"}},[e(b.Z,{attrs:{label:"GST"},model:{value:t.formData.GST,callback:function(e){t.$set(t.formData,"GST",e)},expression:"formData.GST"}})],1),e(l.Z,{staticClass:"py-2",attrs:{cols:"12",md:"12"}},[e(b.Z,{attrs:{rules:t.passwordRules,counter:15,dense:"",label:"Enter Password",type:"password"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}},[t._v(" >")])],1),e(l.Z,{staticClass:"py-2",attrs:{cols:"12",md:"12"}},[e(b.Z,{attrs:{rules:[t.formData.password===t.formData.confirm_password||"Confirm password does not match"],counter:15,dense:"",label:"Confirm Password",type:"password"},model:{value:t.formData.confirm_password,callback:function(e){t.$set(t.formData,"confirm_password",e)},expression:"formData.confirm_password"}})],1),e(l.Z,{staticClass:"d-flex",attrs:{cols:"12",md:"12"}},[e(a.Z,{attrs:{rules:t.maincatRuless,label:"Select Main Category",items:t.allmaincategories,"item-text":"cat_name","item-value":"id",dense:"","prepend-inner-icon":"mdi-tray-arrow-down"},on:{change:t.AllCats},model:{value:t.formData.category,callback:function(e){t.$set(t.formData,"category",e)},expression:"formData.category"}})],1),e(l.Z,{attrs:{cols:"12",md:"12"}},[e(a.Z,{attrs:{rules:t.catRuless,label:"Select Sub Category",items:t.allcategories,"item-text":"subcat_name",multiple:"","item-value":"id",dense:"","no-data-text":t.customNoDataText1,"prepend-inner-icon":"mdi-tray-arrow-down"},model:{value:t.formData.subcategories,callback:function(e){t.$set(t.formData,"subcategories",e)},expression:"formData.subcategories"}})],1),e(l.Z,{staticClass:"d-flex",attrs:{cols:"12",md:"12"}},[e(a.Z,{attrs:{dense:"",rules:t.stateRules,label:"Select State",items:t.allstates,"item-text":"state","prepend-inner-icon":"mdi-home-city","item-value":"id"},on:{change:t.getCities},model:{value:t.formData.state,callback:function(e){t.$set(t.formData,"state",e)},expression:"formData.state"}})],1),e(l.Z,{staticClass:"d-flex",attrs:{cols:"12",md:"12"}},[e(a.Z,{attrs:{dense:"",rules:t.cityRules,label:"Select City",items:t.cities,"item-text":"city","prepend-inner-icon":"mdi-city","item-value":"id","no-data-text":t.customNoDataText},model:{value:t.formData.city,callback:function(e){t.$set(t.formData,"city",e)},expression:"formData.city"}})],1),e(l.Z,{staticClass:"py-2",attrs:{cols:"12",md:"12"}},[e(b.Z,{attrs:{rules:t.mobileRules,dense:"","error-messages":t.phoneVerifyMessage,counter:10,label:"Enter Mobile",type:"number"},on:{keyup:t.phoneVerify},model:{value:t.formData.mobile,callback:function(e){t.$set(t.formData,"mobile",e)},expression:"formData.mobile"}})],1),e(l.Z,{staticClass:"py-2",attrs:{cols:"12",md:"12"}},[e(g.Z,{attrs:{rows:"3",dense:"","row-height":"20",label:"Business Address"},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address",e)},expression:"formData.address"}})],1),e(l.Z,{staticClass:"py-2 ms-2",attrs:{cols:"12",md:"2"}},[e(o.Z,{attrs:{label:"Active"},model:{value:t.formData.user_status,callback:function(e){t.$set(t.formData,"user_status",e)},expression:"formData.user_status"}})],1)],1),e("div",{staticClass:"text-end"},[e(i.Z,{staticClass:"text-white",attrs:{disabled:!t.valid,color:"cred",large:""},on:{click:t.BusinessformSubmit}},[t._v("SAVE")])],1)],1),e(m.Z,{attrs:{timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function({attrs:s}){return[e(i.Z,t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",s,!1),[t._v("Close")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.text)+" ")])],1)],1)],1)],1)},y=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-8 col-md-10"},[e("h4",{staticClass:"ms-4"},[t._v("Client")])])}],k=s(6154),x={name:"ClientBusinessNew",components:{},data(){return{formData:{business_name:"",username:"",subcategories:"",GST:"",category:"",mobile:"",state:"",city:"",email:"",password:"",confirm_password:"",address:"",user_status:""},tab:"",allcategories:[],allmaincategories:[],allstates:[],cities:[],userNameVerifyMessage:"",emailVerifyMessage:"",phoneVerifyMessage:"",valid:!1,snackbar:!1,text:"",timeout:"",customNoDataText:"Please Select State First",customNoDataText1:"Please Select Main Category First",nameRules:[t=>!!t||"Store/Bussine Name is required.",t=>t.length<=100||"Name must be less than 100 characters."],usernameRules:[t=>!!t||"Username is required.",t=>t.length<=80||"Username must be less than 80 characters.",t=>t.split(" ").length<=1||"space not allowed",t=>/^[\w\s]+$/.test(t)||"Username may only contain letters, numbers, dashes and underscores"],catRuless:[t=>!!t||"Sub Category name is required."],maincatRuless:[t=>!!t||"Main Category name is required."],mobileRules:[t=>!!t||"Mobile number is required.",t=>10==t.length||"Mobile number must be 10 characters."],stateRules:[t=>!!t||"State is required."],cityRules:[t=>!!t||"City is required."],emailRules:[t=>!!t||"E-mail is required.",t=>/.+@.+/.test(t)||"E-mail must be valid."],passwordRules:[t=>!!t||"Password is required.",t=>/[A-Z]/.test(t)||"Use upper case.",t=>/[a-z]/.test(t)||"Use lower case.",t=>/[0-9]/.test(t)||"Use number.",t=>/[#?!@$%^&*-]/.test(t)||"Use special character.",t=>t.length>=8||"Password must be greater than 8 characters.",t=>t.length<=15||"Password must be less than 15 characters."],addressRules:[t=>!!t||"Address is required.",t=>t.length<=100||"Address must be less than 100 characters."],agree_policyRules:[t=>!!t||"This field is required."]}},mounted(){this.AllCats(),this.AllStates(),this.getCities(),this.allmaincats()},methods:{AllCats(){this.formData.category?k.Z.get(`subcategories/${this.formData.category}`).then((t=>{this.allcategories=t.data})).catch((t=>{console.log(t)})):this.allcategories=[]},allmaincats(){k.Z.get("maincategory").then((t=>{this.allmaincategories=t.data.maincategories}))},AllStates(){k.Z.get("allstates").then((t=>{this.allstates=t.data.locations}))},getCities(){this.formData.state?k.Z.get(`states/${this.formData.state}`).then((t=>{this.cities=t.data})).catch((t=>{console.log(t)})):this.cities=[]},userNameVerify(){this.formData.username.length>=8&&k.Z.post("user/verify",{username:this.formData.username}).then((t=>{400==t.data.status?this.userNameVerifyMessage=t.data.message:this.userNameVerifyMessage=""}))},emailVerify(){/.+@.+/.test(this.formData.email)&&k.Z.post("user/verify",{email:this.formData.email}).then((t=>{400==t.data.status?this.emailVerifyMessage=t.data.message:this.emailVerifyMessage=""}))},phoneVerify(){10==this.formData.mobile_phone.length&&k.Z.post("user/verify",{mobile_phone:this.formData.mobile_phone}).then((t=>{400==t.data.status?this.phoneVerifyMessage=t.data.message:this.phoneVerifyMessage=""}))},async BusinessformSubmit(){const t={headers:{"content-type":"multipart/form-data"}};await k.Z.post("register/reseller",this.formData,t).then((t=>{this.snackbar=!0,this.text=t.data.message,this.timeout=3e3,this.$refs.form.reset()})).catch((t=>{var e=t.toJSON();400==e.status&&(this.snackbar=!0,this.text="something went wrong.",this.timeout=3e3)})),this.$refs.form.validate()}}},Z=x,D=s(1001),w=(0,D.Z)(Z,v,y,!1,null,null,null),C=w.exports},7393:function(){},6656:function(t,e,s){var a=s(4562);e["Z"]=a.Z},3486:function(t,e,s){s.d(e,{Z:function(){return o}});s(7393);var a=s(2240),i=s(573),r=s(9022),o=r.Z.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(a.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},2648:function(t,e,s){s.d(e,{Z:function(){return o}});var a=s(9780),i=s(7678);const r=(0,i.Z)(a.Z);var o=r.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...a.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"},genInput(){const t=a.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){a.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},7388:function(t,e,s){var a=s(4101),i=s(144);e["Z"]=i["default"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:s,mobileBreakpoint:a}=this.$vuetify.breakpoint;if(a===this.mobileBreakpoint)return t;const i=parseInt(this.mobileBreakpoint,10),r=!isNaN(i);return r?e<i:s===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,a.Rn)("mobile-break-point","mobile-breakpoint",this)}})},9022:function(t,e,s){s.d(e,{X:function(){return l}});s(7658);var a=s(573),i=s(7550),r=s(6174),o=s(7678);function l(t){t.preventDefault()}e["Z"]=(0,o.Z)(a.Z,i.Z,r.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=a.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:l},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:l},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const s=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===s&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}})}}]);
//# sourceMappingURL=2266.e1376488.js.map