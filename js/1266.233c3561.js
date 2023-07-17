"use strict";(self["webpackChunkbizlx"]=self["webpackChunkbizlx"]||[]).push([[1266],{3735:function(e,t,i){i.r(t),i.d(t,{default:function(){return w}});var s=i(4562),a=i(4145),n=i(4886),l=i(266),o=i(9256),r=i(3863),d=i(4061),h=i(418),c=i(5125),u=i(4324),m=i(1713),v=i(9258),g=i(3687),p=i(9780),y=i(2648),f=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t(v.Z,{attrs:{timeout:e.timeout},scopedSlots:e._u([{key:"action",fn:function({attrs:i}){return[t(s.Z,e._b({attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",i,!1),[e._v("Close")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.text)+" ")]),t(c.Z,{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(m.Z,[t(l.Z,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[t(h.Z,{attrs:{"small-chips":"",accept:"image/*",rules:e.coverimageRules,required:"","show-size":"",label:"Upload Image"},on:{change:e.addFiles},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}})],1)],1),null!=e.userdata.id?t(s.Z,{staticClass:"my-4 ms-4 cred",attrs:{disabled:!e.valid},on:{click:e.addcoverImagebyreseller}},[e._v("ADD IMAGE")]):t(s.Z,{staticClass:"my-4 ms-4 cred",attrs:{disabled:!e.valid},on:{click:e.addcoverImage}},[e._v("ADD IMAGE")])],1),e._m(1),t("div",{},[t(r.Z,{staticClass:"elevation-2",attrs:{headers:e.headers,items:e.coverimage,"hide-default-footer":""},scopedSlots:e._u([{key:"item.image_url",fn:function({item:i}){return[t("img",{staticClass:"py-2",staticStyle:{width:"150px",height:"100px"},attrs:{src:e.url+i.image_url}})]}},{key:"top",fn:function(){return[t(d.Z,{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(a.Z,[t(n.EB,[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),t(n.ZB,[t(o.Z,[t(m.Z,[t(l.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(p.Z,{attrs:{label:"Title",dense:""},model:{value:e.editedItem.image_title,callback:function(t){e.$set(e.editedItem,"image_title",t)},expression:"editedItem.image_title"}})],1),t(l.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(y.Z,{attrs:{rows:"3","row-height":"30",dense:"",label:"Description"},model:{value:e.editedItem.image_description,callback:function(t){e.$set(e.editedItem,"image_description",t)},expression:"editedItem.image_description"}})],1)],1)],1)],1),t(n.h7,[t(g.Z),t(s.Z,{staticClass:"cred",attrs:{text:""},on:{click:e.close}},[e._v(" Cancel ")]),null!=e.userdata.id?t(s.Z,{staticClass:"cred",attrs:{text:""},on:{click:e.editcoverImagebyreseller}},[e._v(" Update ")]):t(s.Z,{staticClass:"cred",attrs:{text:""},on:{click:e.editcoverImage}},[e._v(" Update ")])],1)],1)],1),t(d.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(a.Z,[t(n.EB,{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),t(n.h7,[t(g.Z),t(s.Z,{staticClass:"cred",attrs:{text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),null!=e.userdata.id?t(s.Z,{staticClass:"cred",attrs:{text:""},on:{click:e.deleteCoverimagebyreseller}},[e._v("Delete")]):t(s.Z,{staticClass:"cred",attrs:{text:""},on:{click:e.deleteCoverimage}},[e._v("Delete")]),t(g.Z)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function({item:i}){return[t(u.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),t(u.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}},{key:"item.active",fn:function({item:i}){return[t(u.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-check ")])]}}],null,!0)})],1)],1)},b=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-6 col-sm-12 d-flex"},[t("h4",[e._v("Add Main Cover Image")]),e._v(" "),t("span",{staticClass:"mt-1 ms-2"},[e._v("(Max 3 Cover Images Can Be Loaded)")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"py-4"},[t("h4",[e._v("Cover Images List")])])}],x=i(6154),_={name:"BussinessCover",components:{},data:()=>({dialog:!1,singleSelect:!1,image_type:1,selected:[],userdata:[],snackbar:!1,valid:!1,text:"",timeout:"",files:[],image_title:"",image_description:"",url:"https://bizlx.itechvision.in",headers:[{text:"Image",value:"image_url",sortable:!1},{text:"Title",value:"image_title",sortable:!1},{text:"Description",value:"image_description",sortable:!1},{text:"Actions",align:"end",value:"action",sortable:!1}],coverimage:[],editedIndex:-1,editedItem:{image_title:"",image_description:""},coverimageRules:[e=>!!e||"Cover image is required."]}),mounted(){this.addFiles(),this.getBusinessname(),this.user_id(),this.userdata=this.user_id(),null!=this.userdata.id?this.getCoverimagesbyreseller():this.getCoverimages()},computed:{formTitle(){return-1===this.editedIndex?"":"Edit Cover Image Title & Description"}},methods:{user_id(){return this.$store.state.userId},addFiles(){this.files.forEach(((e,t)=>{this.readers[t]=new FileReader,this.readers[t].onloadend=()=>{let e=this.readers[t].result,i=this.$refs.file[t];i.src=e},this.readers[t].readAsDataURL(this.files[t])}))},getCoverimages(){x.Z.get("cover/image").then((e=>{this.coverimage=e.data.cover_image}))},getBusinessname(){x.Z.get("get/business/namecity").then((e=>{console.log(e),this.image_title=e.data.businessdata.business_name+" "+e.data.businessdata.city_name+" Best Deals in "+e.data.businessdata.city_name,this.image_description=e.data.businessdata.business_name+" "+e.data.businessdata.city_name+"  offers the latest deals, sales, and jobs for staff on Bizlx"}))},getCoverimagesbyreseller(){x.Z.post("reseller/cover/image",{userId:this.userdata.id}).then((e=>{this.coverimage=e.data.cover_image}))},addcoverImage(){const e={headers:{"content-type":"multipart/form-data"}};let t={image_title:this.image_title,image_description:this.image_description,image_type:this.image_type,image_url:this.files};""!=this.image_url&&(x.Z.post("add/business/cover_images",t,e).then((e=>{this.snackbar=!0,this.timeout=3e3,this.text=e.data.message,this.getCoverimages(),this.$refs.form.reset()})),this.$refs.form.validate())},addcoverImagebyreseller(){const e={headers:{"content-type":"multipart/form-data"}};let t={userId:this.userdata.id,image_title:this.image_title,image_description:this.image_description,image_type:this.image_type,image_url:this.files};""!=this.image_url&&(x.Z.post("reseller/add/business/cover_images",t,e).then((e=>{this.snackbar=!0,this.timeout=3e3,this.text=e.data.message,this.$refs.form.reset(),this.getCoverimagesbyreseller()})).catch((e=>{var t=e.toJSON();400==t.status&&(this.snackbar=!0,this.timeout=3e3,this.text=e.data.error.message)})),this.$refs.form.validate())},editcoverImage(){let e={title:this.editedItem.image_title,id:this.editedItem.id,description:this.editedItem.image_description};this.editedIndex>-1&&x.Z.post("update/image",e).then((e=>{this.snackbar=!0,this.timeout=3e3,this.text=e.data.message,this.getCoverimages(),this.dialog=!1})).catch((e=>{var t=e.toJSON();401==t.status&&(this.snackbar=!0,this.timeout=3e3,this.text=e.data.error.message)}))},editcoverImagebyreseller(){let e={userId:this.userdata.id,title:this.editedItem.image_title,id:this.editedItem.id,description:this.editedItem.image_description};this.editedIndex>-1&&x.Z.post("update/image",e).then((e=>{this.snackbar=!0,this.timeout=3e3,this.text=e.data.message,this.getCoverimagesbyreseller(),this.dialog=!1})).catch((e=>{var t=e.toJSON();401==t.status&&(this.snackbar=!0,this.timeout=3e3,this.text=e.data.error.message)}))},deleteCoverimage(){let e={id:this.editedItem.id};console.log(e),x.Z.post("delete/image",e).then((e=>{this.snackbar=!0,this.timeout=3e3,this.text=e.data.message,this.dialogDelete=!1,this.getCoverimages()})).catch((e=>{var t=e.toJSON();400==t.status&&(this.snackbar=!0,this.timeout=3e3,this.text=e.data.error.message)}))},deleteCoverimagebyreseller(){let e={userId:this.userdata.id,id:this.editedItem.id};console.log(e),x.Z.post("delete/image",e).then((e=>{this.snackbar=!0,this.timeout=3e3,this.text=e.data.message,this.dialogDelete=!1,this.getCoverimagesbyreseller()})).catch((e=>{var t=e.toJSON();400==t.status&&(this.snackbar=!0,this.timeout=3e3,this.text=e.data.error.message)}))},editItem(e){this.editedIndex=this.coverimage.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){this.editedIndex=this.coverimage.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))}}},I=_,C=i(1001),k=(0,C.Z)(I,f,b,!1,null,null,null),w=k.exports},4061:function(e,t,i){i.d(t,{Z:function(){return g}});var s=i(920),a=i(1452),n=i(908),l=i(2694),o=i(9351),r=i(6401),d=i(8472),h=i(5942),c=i(7678),u=i(4101),m=i(5352);const v=(0,c.Z)(n.Z,l.Z,o.Z,r.Z,d.Z,a.Z);var g=v.extend({name:"v-dialog",directives:{ClickOutside:h.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(t=this.previousActiveElement)||void 0===t||t.focus())},fullscreen(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,u.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(e){const t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):o.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var e,t;(null===(e=this.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(t=this.$refs.dialog)||void 0===t||t.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(e){if(e.keyCode===m.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const e=this.getActivator();this.$nextTick((()=>e&&e.focus()))}this.$emit("keydown",e)},onFocusin(e){if(!e||!this.retainFocus)return;const t=e.target;if(t&&this.$refs.dialog&&![document,this.$refs.dialog].includes(t)&&!this.$refs.dialog.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((e=>e.contains(t)))){const e=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),t=[...e].find((e=>!e.hasAttribute("disabled")&&!e.matches('[tabindex="-1"]')));t&&t.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(s.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent(){const e={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style={...e.style,maxWidth:(0,m.kb)(this.maxWidth),width:(0,m.kb)(this.width)}),this.$createElement("div",e,this.getContentSlot())}},render(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},418:function(e,t,i){i.d(t,{Z:function(){return d}});i(7658);var s=i(9780),a=s.Z,n=i(4127),l=i(5352),o=i(4101),r=i(1767),d=a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"===typeof e||[1e3,1024].includes(e)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:e=>(0,l.TI)(e).every((e=>null!=e&&"object"===typeof e))}},computed:{classes(){return{...a.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);const t=this.internalArrayValue.reduce(((e,{size:t=0})=>e+t),0);return this.$vuetify.lang.t(this.counterSizeString,e,(0,l.XE)(t,1024===this.base))},internalArrayValue(){return(0,l.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((e=>{const{name:t="",size:i=0}=e,s=this.truncateText(t);return this.showSize?`${s} (${(0,l.XE)(i,1024===this.base)})`:s})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(e){!0===e&&(0,o.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(e){const t=this.multiple?e:e?[e]:[];(0,l.vZ)(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((e,t)=>this.$createElement(n.Z,{props:{small:this.smallChips},on:{"click:close":()=>{const e=this.internalValue;e.splice(t,1),this.internalValue=e}}},[e]))):[]},genControl(){const e=a.options.methods.genControl.call(this);return this.hideInput&&(e.data.style=(0,r.y0)(e.data.style,{display:"none"})),e},genInput(){const e=a.options.methods.genInput.call(this);return e.data.attrs.multiple=this.multiple,delete e.data.domProps.value,delete e.data.on.input,e.data.on.change=this.onInput,[this.genSelections(),e]},genPrependSlot(){if(!this.prependIcon)return null;const e=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText(){const e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections(){const e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((t,i)=>{this.$scopedSlots.selection&&e.push(this.$scopedSlots.selection({text:this.text[i],file:t,index:i}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot(){const e=a.options.methods.genTextFieldSlot.call(this);return e.data.on={...e.data.on||{},click:e=>{e.target&&"LABEL"===e.target.nodeName||this.$refs.input.click()}},e},onInput(e){const t=[...e.target.files||[]];this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown(e){this.$emit("keydown",e)},truncateText(e){if(e.length<Number(this.truncateLength))return e;const t=Math.floor((Number(this.truncateLength)-1)/2);return`${e.slice(0,t)}…${e.slice(e.length-t)}`}}})},3687:function(e,t,i){i(9027);var s=i(5352);t["Z"]=(0,s.Ji)("spacer","div","v-spacer")},2648:function(e,t,i){i.d(t,{Z:function(){return l}});var s=i(9780),a=i(7678);const n=(0,a.Z)(s.Z);var l=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(e){this.$nextTick((()=>{var t;e?this.calculateInputHeight():null===(t=this.$refs.input)||void 0===t||t.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(i,t)+"px"},genInput(){const e=s.Z.options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){s.Z.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},9351:function(e,t,i){i.d(t,{Z:function(){return c}});i(7658);var s=i(6878),a=i(6669),n=i(1444),l=i(7678),o=(0,l.Z)(s.Z,a.Z,n.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(e){const t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}}),r=o,d=i(5352),h=i(144),c=h["default"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const e=new r({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();const t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,d.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(e=!0){this.overlay&&((0,d.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener(e){if("key"in e){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;const t=[d.Do.up,d.Do.pageup],i=[d.Do.down,d.Do.pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!i.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return(["auto","scroll"].includes(t.overflowY)||"SELECT"===e.tagName)&&e.scrollHeight>e.clientHeight||["auto","scroll"].includes(t.overflowX)&&e.scrollWidth>e.clientWidth},shouldScroll(e,t){if(e.hasAttribute("data-app"))return!1;const i=t.shiftKey||t.deltaX?"x":"y",s="y"===i?t.deltaY:t.deltaX||t.deltaY;let a,n;"y"===i?(a=0===e.scrollTop,n=e.scrollTop+e.clientHeight===e.scrollHeight):(a=0===e.scrollLeft,n=e.scrollLeft+e.clientWidth===e.scrollWidth);const l=s<0,o=s>0;return!(a||!l)||(!(n||!o)||!(!a&&!n)&&this.shouldScroll(e.parentNode,t))},isInside(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath(e){const t=(0,d.iZ)(e);if("keydown"===e.type&&t[0]===document.body){const t=this.$refs.dialog,i=window.getSelection().anchorNode;return!(t&&this.hasScrollbar(t)&&this.isInside(i,t))||!this.shouldScroll(t,e)}for(let i=0;i<t.length;i++){const s=t[i];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return!this.shouldScroll(s,e)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,d.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);
//# sourceMappingURL=1266.233c3561.js.map