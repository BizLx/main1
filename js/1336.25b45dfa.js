"use strict";(self["webpackChunkbizlx"]=self["webpackChunkbizlx"]||[]).push([[1336],{1336:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var s=i(4562),a=i(266),l=i(418),n=i(5125),r=i(4324),o=i(1625),c=i(9258),u=i(9780),h=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-md-1 col-sm-6 my-2"},[e("router-link",{attrs:{to:"/admin/maincategories"}},[e(s.Z,{attrs:{color:"error"}},[e(r.Z,{staticClass:"mt-1",attrs:{left:""}},[t._v("mdi-format-list-bulleted")]),t._v("List")],1)],1)],1)]),[e(n.Z,{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.formSubmit.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(u.Z,{attrs:{rules:t.catRules,label:"Category name"},model:{value:t.formData.cat_name,callback:function(e){t.$set(t.formData,"cat_name",e)},expression:"formData.cat_name"}}),e(l.Z,{attrs:{rules:t.filesRules,label:"Category Image",accept:"image/*"},on:{change:t.handleFileChange},model:{value:t.formData.selectedFile,callback:function(e){t.$set(t.formData,"selectedFile",e)},expression:"formData.selectedFile"}}),t.previewImage?e(o.Z,{staticClass:"img-fluid",attrs:{src:t.previewImage,width:"100",height:"100"}}):t._e(),e(a.Z,{staticClass:"py-0 d-flex",staticStyle:{"justify-content":"space-between"},attrs:{cols:"12",sm:"6",md:"12"}},[e("div"),e("div",{staticClass:"ms-3 pb-3"},[e(s.Z,{staticClass:"my-4 me-3 cred",on:{click:t.reset}},[t._v("CANCEL")]),t.isLoading?e(s.Z,{staticClass:"my-2 me-3 cred"},[t._v("Loading...")]):e(s.Z,{staticClass:"my-4 me-3 cred",attrs:{type:"submit",disabled:!t.valid}},[t._v("SAVE")])],1)])],1)],e(c.Z,{staticClass:"snackbar-shadow",attrs:{timeout:t.snackbar.timeout},scopedSlots:t._u([{key:"action",fn:function({attrs:i}){return[e(s.Z,t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",i,!1),[t._v("Close")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.text)+" ")])],2)},d=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-11 col-sm-6"},[e("h3",{staticClass:"fw-bold"},[t._v("Create Category")])])}],p=i(6154),m={name:"CreateCategory",components:{},data(){return{valid:!1,previewImage:null,isLoading:!1,snackbar:!1,text:"",timeout:"",features:[{id:"0",text:"Normal"},{id:"1",text:"Feature"},{id:"2",text:"Top add"}],formData:{cat_name:"",selectedFile:"",cat_feature:"0",cat_sort:"1"},catRules:[t=>!!t||"Category name is required.",t=>t.length<=50||"Name must be less than 50 characters."],filesRules:[t=>!!t||"Category image is required."]}},mounted(){},methods:{reset(){this.previewImage=null,this.$refs.form.reset()},handleFileChange(){this.previewImage=URL.createObjectURL(this.formData.selectedFile)},formSubmit(){const t={headers:{"content-type":"multipart/form-data"}};let e={cat_name:this.formData.cat_name,selectedFile:this.formData.selectedFile,cat_feature:this.formData.cat_feature,cat_sort:this.formData.cat_sort};""!=this.formData.cat_name&&""!=this.formData.selectedFile&&(this.isLoading=!0,p.Z.post("category/add",e,t).then((t=>{this.isLoading=!1,this.snackbar=!0,this.text=t.data.message,this.timeout=3e3,this.previewImage=null,this.$refs.form.reset()}))),this.$refs.form.validate()}}},f=m,g=i(1001),y=(0,g.Z)(f,h,d,!1,null,null,null),v=y.exports},418:function(t,e,i){i.d(e,{Z:function(){return c}});i(7658);var s=i(9780),a=s.Z,l=i(4127),n=i(5352),r=i(4101),o=i(1767),c=a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>(0,n.TI)(t).every((t=>null!=t&&"object"===typeof t))}},computed:{classes(){return{...a.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce(((t,{size:e=0})=>t+e),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,n.XE)(e,1024===this.base))},internalArrayValue(){return(0,n.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((t=>{const{name:e="",size:i=0}=t,s=this.truncateText(e);return this.showSize?`${s} (${(0,n.XE)(i,1024===this.base)})`:s})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&(0,r.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];(0,n.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((t,e)=>this.$createElement(l.Z,{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t]))):[]},genControl(){const t=a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,o.y0)(t.data.style,{display:"none"})),t},genInput(){const t=a.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((e,i)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[i],file:e,index:i}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=a.options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:t=>{t.target&&"LABEL"===t.target.nodeName||this.$refs.input.click()}},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})}}]);
//# sourceMappingURL=1336.25b45dfa.js.map