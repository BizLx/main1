"use strict";(self["webpackChunkbizlx"]=self["webpackChunkbizlx"]||[]).push([[2460],{2460:function(e,t,i){i.r(t),i.d(t,{default:function(){return v}});var s=i(3423),a=i(4562),l=i(4145),n=i(266),r=i(418),o=i(5125),h=i(9258),u=function(){var e=this,t=e._self._c;return t("div",[t(l.Z,{staticClass:"elevation-1 py-3 container-fluid gx-md-4 my-2"},[t("h5",{staticClass:"pb-4"},[e._v("Reseller Registration Image")]),t("hr"),t(o.Z,{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(n.Z,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[""!=e.files?t("div",e._l(e.files,(function(e,i){return t(s.Z,{key:i,attrs:{size:"130"}},[t("img",{ref:"file",refInFor:!0,staticStyle:{display:"block"}})])})),1):t("div",[t(s.Z,{attrs:{size:"130"}},[t("img",{attrs:{src:e.url+e.getimages.reseller_reg_img}})])],1)]),t(n.Z,{attrs:{cols:"12",md:"12"}},[t(r.Z,{attrs:{dense:"",label:"Upload Image",multiple:"","small-chips":"",accept:"image/*"},on:{change:e.addFiles,click:function(t){e.isHidden=!0}},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}})],1),t("div",{staticClass:"text-end"},[t(a.Z,{staticClass:"cred mr-4 primary",on:{click:e.updateresellerimage}},[e._v("SAVE")])],1)],1)],1),t(l.Z,{staticClass:"elevation-1 py-3 container-fluid gx-md-4"},[t("h5",{staticClass:"pb-4"},[e._v("Business Registration Image")]),t("hr"),t(o.Z,{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(n.Z,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[""!=e.files1?t("div",e._l(e.files1,(function(e,i){return t(s.Z,{key:i,attrs:{size:"130"}},[t("img",{ref:"file1",refInFor:!0,staticStyle:{display:"block"}})])})),1):t("div",[t(s.Z,{attrs:{size:"130"}},[t("img",{attrs:{src:e.url+e.getimages.business_reg_img}})])],1)]),t(n.Z,{attrs:{cols:"12",md:"12"}},[t(r.Z,{attrs:{dense:"",label:"Upload Image",multiple:"","small-chips":"",accept:"image/*"},on:{change:e.addFiles1,click:function(t){e.isHidden1=!0}},model:{value:e.files1,callback:function(t){e.files1=t},expression:"files1"}})],1),t("div",{staticClass:"text-end"},[t(a.Z,{staticClass:"cred mr-4 primary",on:{click:e.updatebusinessimage}},[e._v("SAVE")])],1)],1)],1),t(h.Z,{attrs:{timeout:e.timeout,type:"success",border:"left",elevation:"3"},scopedSlots:e._u([{key:"action",fn:function({attrs:i}){return[t(a.Z,e._b({attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",i,!1),[e._v("Close")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" ")])],1)},c=[],d=i(6154),p={name:"RegistrationImage",metaInfo:{title:"Bizlx Registration Image"},data(){return{files:[],getimages:[],getimages_id:"",files1:[],valid:!1,readers:[],readers1:[],isHidden:!1,isHidden1:!1,password:"",Commission:"",snackbar:!1,text:"",timeout:-1,url:"https://bizlx.itechvision.in"}},mounted(){this.getRegisterimages(),this.addFiles(),this.addFiles1()},methods:{addFiles(){this.files.forEach(((e,t)=>{this.readers[t]=new FileReader,this.readers[t].onloadend=()=>{let e=this.readers[t].result,i=this.$refs.file[t];i.src=e},this.readers[t].readAsDataURL(this.files[t])}))},addFiles1(){this.files1.forEach(((e,t)=>{this.readers1[t]=new FileReader,this.readers1[t].onloadend=()=>{let e=this.readers1[t].result,i=this.$refs.file1[t];i.src=e},this.readers1[t].readAsDataURL(this.files1[t])}))},getRegisterimages(){d.Z.get("profile/details").then((e=>{this.getimages=e.data.profile_details,this.getimages_id=e.data.profile_details.id}))},updateresellerimage(){const e={headers:{"content-type":"multipart/form-data"}};let t={id:this.getimages_id,reseller_reg_img:this.files[0]};d.Z.post("update/profile/details",t,e).then((e=>{this.snackbar=!0,this.text=e.data.message,this.timeout=3e3,this.getRegisterimages()})).catch((e=>{var t=e.toJSON();400==t.status&&(this.snackbar=!0,this.text="something went wrong.",this.timeout=3e3)})),this.$refs.form.validate()},updatebusinessimage(){const e={headers:{"content-type":"multipart/form-data"}};let t={id:this.getimages_id,business_reg_img:this.files1[0]};d.Z.post("update/profile/details",t,e).then((e=>{this.snackbar=!0,this.text=e.data.message,this.timeout=3e3,this.getRegisterimages()})).catch((e=>{var t=e.toJSON();400==t.status&&(this.snackbar=!0,this.text="something went wrong.",this.timeout=3e3)})),this.$refs.form.validate()}}},m=p,f=i(1001),g=(0,f.Z)(m,u,c,!1,null,null,null),v=g.exports},418:function(e,t,i){i.d(t,{Z:function(){return h}});i(7658);var s=i(9780),a=s.Z,l=i(4127),n=i(5352),r=i(4101),o=i(1767),h=a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"===typeof e||[1e3,1024].includes(e)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:e=>(0,n.TI)(e).every((e=>null!=e&&"object"===typeof e))}},computed:{classes(){return{...a.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);const t=this.internalArrayValue.reduce(((e,{size:t=0})=>e+t),0);return this.$vuetify.lang.t(this.counterSizeString,e,(0,n.XE)(t,1024===this.base))},internalArrayValue(){return(0,n.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((e=>{const{name:t="",size:i=0}=e,s=this.truncateText(t);return this.showSize?`${s} (${(0,n.XE)(i,1024===this.base)})`:s})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(e){!0===e&&(0,r.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(e){const t=this.multiple?e:e?[e]:[];(0,n.vZ)(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((e,t)=>this.$createElement(l.Z,{props:{small:this.smallChips},on:{"click:close":()=>{const e=this.internalValue;e.splice(t,1),this.internalValue=e}}},[e]))):[]},genControl(){const e=a.options.methods.genControl.call(this);return this.hideInput&&(e.data.style=(0,o.y0)(e.data.style,{display:"none"})),e},genInput(){const e=a.options.methods.genInput.call(this);return e.data.attrs.multiple=this.multiple,delete e.data.domProps.value,delete e.data.on.input,e.data.on.change=this.onInput,[this.genSelections(),e]},genPrependSlot(){if(!this.prependIcon)return null;const e=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText(){const e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections(){const e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((t,i)=>{this.$scopedSlots.selection&&e.push(this.$scopedSlots.selection({text:this.text[i],file:t,index:i}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot(){const e=a.options.methods.genTextFieldSlot.call(this);return e.data.on={...e.data.on||{},click:e=>{e.target&&"LABEL"===e.target.nodeName||this.$refs.input.click()}},e},onInput(e){const t=[...e.target.files||[]];this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown(e){this.$emit("keydown",e)},truncateText(e){if(e.length<Number(this.truncateLength))return e;const t=Math.floor((Number(this.truncateLength)-1)/2);return`${e.slice(0,t)}…${e.slice(e.length-t)}`}}})}}]);
//# sourceMappingURL=2460.1c3dd9a4.js.map