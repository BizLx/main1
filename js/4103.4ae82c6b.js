"use strict";(self["webpackChunkbizlx"]=self["webpackChunkbizlx"]||[]).push([[4103],{4103:function(t,s,a){a.r(s),a.d(s,{default:function(){return f}});var e=a(4562),i=a(4145),l=a(266),r=a(9256),d=a(4324),c=a(1625),o=a(1713),m=function(){var t=this,s=t._self._c;return s(r.Z,[s(e.Z,{staticClass:"me-1",attrs:{color:"cred"},on:{click:t.goBack}},[s(d.Z,[t._v("mdi-chevron-left")]),t._v("Back")],1),s("router-link",{attrs:{to:"/mywishlist"}},[s(e.Z,{staticClass:"me-1",attrs:{color:"info"}},[s(d.Z,[t._v("mdi-heart-outline")]),t._v("Add to Wishlist")],1)],1),s("router-link",{attrs:{to:""}},[s(e.Z,{staticClass:"me-1",attrs:{color:"success"}},[s(d.Z,[t._v("mdi-map-marker")]),t._v("Google Location")],1)],1),s(o.Z,[s(l.Z,{attrs:{cols:"12",md:"6"}},[s(i.Z,{attrs:{flat:""}},[""==t.sdetail.sale_imageurl?s(c.Z,{staticClass:"img-fluid",attrs:{src:"https://dummyimage.com/1500x1250/fd0606/fff&text=Sale",cover:"","max-height":"350","min-height":"350"}}):t._e(),""!=t.sdetail.sale_imageurl?s(c.Z,{staticClass:"img-fluid",attrs:{src:t.url+t.sdetail.sale_imageurl,cover:"","max-height":"350","min-height":"350"}}):t._e()],1)],1),s(l.Z,{attrs:{cols:"12",md:"6"}},[s("div",{staticClass:"mobile"}),s("div",{staticClass:"desktop"},[s("div",{staticClass:"px-md-5"},[s("h2",{staticClass:"h4 mb-0"},[t._v(t._s(t.sdetail.sale_title))]),s("div",[t._v("By "),s("router-link",{staticClass:"text-decoration-none",attrs:{to:{name:"businessprofile",params:{id:t.sdetail.user_id,uname:t.sdetail.username}},title:"Business Name"}},[t._v(" "+t._s(t.sdetail.name)+" ")])],1),s("div",{},[t._v("Sale "),s("del",{staticClass:"ms-1 h6 text-muted"},[t._v("₹"+t._s(t.sdetail.normal_price))]),s("span",{staticClass:"mx-1 h4 cred"},[t._v("₹"+t._s(t.sdetail.sale_price))]),s("span",{staticClass:"text-bg-light px-2 py-1 fs-6"},[t._v(t._s(Math.round(100-100*t.sdetail.sale_price/t.sdetail.normal_price))+"% off")])]),s("div",[s("span",{staticClass:"fw-semibold"},[t._v("Validity: "+t._s(t.sdetail.saledate_from)+" - "+t._s(t.sdetail.saledate_to))])]),s("div",{staticClass:"py-1"},[s("a",{attrs:{href:"tel:"+t.sdetail.mobile_phone}},[s(e.Z,{staticClass:"me-1",attrs:{color:"cred"}},[s(d.Z,[t._v("mdi-phone")]),t._v(" "+t._s(t.sdetail.mobile_phone))],1)],1),s("a",{attrs:{href:"https://wa.me/"+t.sdetail.mobile_phone+"?text=rf"}},[s(e.Z,{staticClass:"me-1",attrs:{color:"success"}},[s(d.Z,[t._v("mdi-whatsapp")]),t._v("WhatsApp")],1)],1)]),s("p",{staticClass:"px-1 text-justify"},[t._v(" "+t._s(t.sdetail.sale_description)+" by "+t._s(t.sdetail.name)+" from "+t._s(t.sdetail.city)+", "+t._s(t.sdetail.state)+" ")])])])])],1),s(o.Z,{staticClass:"mt-10"})],1)},_=[],n=a(6154),h={name:"SaleDetail",props:{id:Number},data(){return{url:"https://bizlx.itechvision.in",sdetail:[]}},methods:{getSaleDetail(){n.Z.get(`sales/detail/${this.id}`).then((t=>{this.sdetail=t.data.sdetail}))},goBack(){window.history.back()}},created(){this.getSaleDetail()}},u=h,p=a(1001),v=(0,p.Z)(u,m,_,!1,null,"a50638bc",null),f=v.exports}}]);
//# sourceMappingURL=4103.4ae82c6b.js.map