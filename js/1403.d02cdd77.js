"use strict";(self["webpackChunkbizlx"]=self["webpackChunkbizlx"]||[]).push([[1403],{8916:function(t,e,i){i.r(e),i.d(e,{default:function(){return Z}});var s=i(344),a=i(4562),n=i(4145),l=i(4886),o=i(3486),r=i(266),c=i(9256),d=i(3863),h=i(4061),u=i(5125),m=i(4324),v=i(1713),p=i(9258),f=i(3687),g=i(9780),y=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-12 col-md-6"},[e(g.Z,{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e("div",{staticClass:"col-12 col-md-2"},[e(a.Z,{attrs:{tile:"",color:"error",large:""},on:{click:t.openModel}},[e(m.Z,{attrs:{left:""}},[t._v("mdi-plus")]),t._v(" ADD NEW SLIDER ")],1)],1)]),e("div",{staticClass:"row mt-10"},[e(d.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,search:t.search,items:t.catslider},scopedSlots:t._u([{key:"top",fn:function(){return[e(h.Z,{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(n.Z,[e(l.EB,{staticClass:"text-h6 grey lighten-2",staticStyle:{"justify-content":"space-between"}},[t._v("Edit Category Slider "),e(m.Z,{staticClass:"text-h5",on:{click:function(e){t.dialog=!1}}},[t._v("mdi-close")])],1),e(l.ZB,{staticClass:"p-0"},[e(c.Z,[e(u.Z,{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(v.Z,[e(r.Z,{attrs:{cols:"12",md:"12"}},[e(s.Z,{attrs:{dense:"","item-value":"id","item-text":"subcat_name",rules:t.catslide,items:t.subcat,label:"Select Sub Category"},model:{value:t.editedItem.subcat_id,callback:function(e){t.$set(t.editedItem,"subcat_id",e)},expression:"editedItem.subcat_id"}}),e("div",[e(o.Z,{attrs:{dense:"",label:"Active"},model:{value:t.editedItem.catslider_status,callback:function(e){t.$set(t.editedItem,"catslider_status",e)},expression:"editedItem.catslider_status"}})],1),e(l.h7,[e(a.Z,{staticClass:"my-4 me-3 cred",attrs:{disabled:!t.valid},on:{click:t.editcatSlider}},[t._v("UPDATE")]),e(a.Z,{staticClass:"my-4 me-3 cred",on:{click:t.close}},[t._v("Cancel")])],1)],1)],1)],1)],1)],1)],1)],1),e(h.Z,{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e(n.Z,[e(l.EB,{staticClass:"text-h6"},[t._v("Are you sure you want to delete this item?")]),e(l.h7,[e(f.Z),e(a.Z,{staticClass:"cred",attrs:{text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),e(a.Z,{staticClass:"cred",attrs:{text:""},on:{click:t.deletecatSlider}},[t._v("OK")]),e(f.Z)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:i}){return[e(m.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-pencil ")]),e(m.Z,{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v(" mdi-delete")])]}},{key:"item.catslider_status",fn:function({item:i}){return[1===i.catslider_status?e("div",[e(m.Z,{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-check ")])],1):e("div",[e(m.Z,{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-close ")])],1)]}}],null,!0)})],1),e(h.Z,{attrs:{persistent:"","max-width":"500px"},model:{value:t.showModel,callback:function(e){t.showModel=e},expression:"showModel"}},[e(n.Z,[e(l.EB,{staticClass:"text-h6 grey lighten-2",staticStyle:{"justify-content":"space-between"}},[t._v(" Add New Slider "),e(m.Z,{staticClass:"text-h5",on:{click:function(e){t.showModel=!1}}},[t._v("mdi-close")])],1),e(l.ZB,[e(u.Z,{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(v.Z,[e(r.Z,{attrs:{cols:"12",md:"12"}},[e(s.Z,{attrs:{dense:"",items:t.subcat,rules:t.catslide,"item-text":"subcat_name","item-value":"id",label:"Select Sub Category"},model:{value:t.subcat_id,callback:function(e){t.subcat_id=e},expression:"subcat_id"}})],1),e("div",[e(a.Z,{staticClass:"my-4 me-3 cred",attrs:{disabled:!t.valid},on:{click:t.AddcatSlider}},[t._v("SAVE")]),e(a.Z,{staticClass:"my-4 me-3 cred",on:{click:function(e){t.showModel=!1}}},[t._v("CLOSE")])],1)],1)],1)],1)],1)],1),e(p.Z,{attrs:{timeout:t.timeout,type:"success",border:"left",elevation:"3"},scopedSlots:t._u([{key:"action",fn:function({attrs:i}){return[e(a.Z,t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",i,!1),[t._v("Close")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")])],1)},b=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 col-md-4"},[e("h4",[t._v("Category Slider")])])}],k=i(6154),x={name:"CategorySlider",components:{},data:()=>({search:"",subcat_id:"",valid:!1,snackbar:!1,showModel:!1,text:"",timeout:-1,dialog:!1,dialogDelete:!1,catslide:[t=>!!t||"Sub Category is required."],headers:[{text:"Subcategory Name",align:"start",value:"subcat_name"},{text:"Active",value:"catslider_status",align:"end",sortable:!1},{text:"Actions",value:"actions",align:"end",sortable:!1}],catslider:[],subcat:[],editedIndex:-1,editedItem:{id:"",subcat_id:"",catslider_status:""}}),watch:{dialog(t){t||this.close()},dialogDelete(t){t||this.closeDelete()}},mounted(){this.getSlider(),this.getSubcategory()},methods:{getSlider(){k.Z.get("admin/catsliders").then((t=>{this.catslider=t.data.catsliders}))},getSubcategory(){k.Z.get("admin/subcategories").then((t=>{this.subcat=t.data.subcategories}))},AddcatSlider(){const t={headers:{"content-type":"multipart/form-data"}};let e={subcat_id:this.subcat_id,catslider_status:1};k.Z.post("admin/add/catsliders",e,t).then((t=>{200==t.data.status?(this.snackbar=!0,this.text=t.data.message,this.showModel=!1,this.timeout=3e3,this.getSlider(),this.$refs.form.reset()):(this.snackbar=!0,this.showModel=!1,this.timeout=3e3,this.text="The job category Name has already been taken.")})),this.$refs.form.validate()},editcatSlider(){const t={headers:{"content-type":"multipart/form-data"}};let e={subcat_id:this.editedItem.subcat_id,catslider_status:this.editedItem.catslider_status};this.editedIndex>-1&&k.Z.post("admin/edit/catsliders/"+this.editedItem.id,e,t).then((t=>{this.snackbar=!0,this.text=t.data.message,this.timeout=3e3,this.getSlider(),this.close(),this.$refs.form.reset()})).catch((t=>{this.error=t,this.snackbar=!0,this.text="Something went wrong",this.timeout=3e3,this.getSlider()})),this.$refs.form.validate()},deletecatSlider(){const t={headers:{"content-type":"multipart/form-data"}};let e={catid:this.editedItem.id};k.Z.post("admin/delete/catsliders",e,t).then((t=>{this.snackbar=!0,this.timeout=3e3,this.text=t.data.message,this.dialogDelete=!1,this.getSlider()})).catch((t=>{var e=t.toJSON();400==e.status&&(this.snackbar=!0,this.timeout=3e3,this.text=t.data.error.message)}))},openModel(){this.showModel=!0},editItem(t){this.editedIndex=this.catslider.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem(t){this.editedIndex=this.catslider.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))}}},C=x,w=i(1001),S=(0,w.Z)(C,y,b,!1,null,"e2c9931a",null),Z=S.exports},7393:function(){},3486:function(t,e,i){i.d(e,{Z:function(){return l}});i(7393);var s=i(2240),a=i(573),n=i(9022),l=n.Z.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...a.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},4061:function(t,e,i){i.d(e,{Z:function(){return p}});var s=i(920),a=i(1452),n=i(908),l=i(2694),o=i(9351),r=i(6401),c=i(8472),d=i(5942),h=i(7678),u=i(4101),m=i(5352);const v=(0,h.Z)(n.Z,l.Z,o.Z,r.Z,c.Z,a.Z);var p=v.extend({name:"v-dialog",directives:{ClickOutside:d.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,u.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):o.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===m.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(s.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,m.kb)(this.maxWidth),width:(0,m.kb)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},3687:function(t,e,i){i(9027);var s=i(5352);e["Z"]=(0,s.Ji)("spacer","div","v-spacer")},9351:function(t,e,i){i.d(e,{Z:function(){return h}});i(7658);var s=i(6878),a=i(6669),n=i(1444),l=i(7678),o=(0,l.Z)(s.Z,a.Z,n.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),r=o,c=i(5352),d=i(144),h=d["default"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new r({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,c.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(t=!0){this.overlay&&((0,c.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[c.Do.up,c.Do.pageup],i=[c.Do.down,c.Do.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const i=e.shiftKey||e.deltaX?"x":"y",s="y"===i?e.deltaY:e.deltaX||e.deltaY;let a,n;"y"===i?(a=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(a=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);const l=s<0,o=s>0;return!(a||!l)||(!(n||!o)||!(!a&&!n)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=(0,c.iZ)(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,i=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(i,e))||!this.shouldScroll(e,t)}for(let i=0;i<e.length;i++){const s=e[i];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return!this.shouldScroll(s,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,c.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},9022:function(t,e,i){i.d(e,{X:function(){return o}});i(7658);var s=i(573),a=i(7550),n=i(6174),l=i(7678);function o(t){t.preventDefault()}e["Z"]=(0,l.Z)(s.Z,a.Z,n.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=s.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:o},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}})}}]);
//# sourceMappingURL=1403.d02cdd77.js.map