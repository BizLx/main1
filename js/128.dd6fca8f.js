"use strict";(self["webpackChunkbizlx"]=self["webpackChunkbizlx"]||[]).push([[128],{8600:function(t,i,e){e.d(i,{Z:function(){return _}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"cmsp py-3"},[i("div",{staticClass:"row cmsplan g-5 text-center justify-content-center"},t._l(t.plans,(function(e,s){return i("div",{key:s,staticClass:"col-12 col-md-4"},[i("div",{staticClass:"base shadow rounded-3 px-1 p2",attrs:{id:e.id}},[i("div",{staticClass:"mtitle"},[t._v(t._s(e.plan_description))]),i("b-list-group",{attrs:{flush:""}},[i("div",[0==e.plan_price?i("b-list-group-item",{staticClass:"fw-bold mprice"},[t._v("FREE 0")]):i("b-list-group-item",{staticClass:"fw-bold mprice"},[t._v("INR : "+t._s(e.plan_price))])],1),i("div",[e.images>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Images : "),i("b",[t._v(t._s(e.images))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Images : "),i("b",[t._v("No")])],1)],1),i("div",[e.hot_deals>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Hot Deals : "),i("b",[t._v(t._s(e.hot_deals))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Hot Deals : "),i("b",[t._v("No")])],1)],1),i("div",[e.sale>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Sales : "),i("b",[t._v(t._s(e.sale))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Sales : "),i("b",[t._v("No")])],1)],1),i("div",[e.jobs>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Jobs : "),i("b",[t._v(t._s(e.jobs))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Jobs : "),i("b",[t._v("No")])],1)],1),i("div",[e.video>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Videos : "),i("b",[t._v(t._s(e.video))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Videos : "),i("b",[t._v("No")])],1)],1),i("div",[e.about>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("About : "),i("b",[t._v(t._s(e.about))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("About : "),i("b",[t._v("No")])],1)],1),i("div",[e.home_page_banner>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Home Page Banner : "),i("b",[t._v(t._s(e.home_page_banner))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Home Page Banner : "),i("b",[t._v("No")])],1)],1),i("div",[1==e.services?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Services : "),i("b",[t._v(t._s(e.services))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Services : "),i("b",[t._v("No")])],1)],1),i("div",[e.contact>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Contact : "),i("b",[t._v("Yes")])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Contact : "),i("b",[t._v("No")])],1)],1),i("div",[1==e.reviews?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Reviews : "),i("b",[t._v("Yes")])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Reviews : "),i("b",[t._v("No")])],1)],1),i("div",[e.featured_city>1?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Featured City : "),i("b",[t._v(t._s(e.featured_city))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Featured City : "),i("b",[t._v("No")])],1)],1),e.featured_category>1?i("div",[i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Featured Category : "),i("b",[t._v(t._s(e.featured_category))])],1)],1):i("div",[i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Featured Category : "),i("b",[t._v("No")])],1)],1)]),null==t.active_user_plan.plan_id?i("div",{staticClass:"my-3 btn btn-outline-light"},[t._v("BUY NOW")]):t.active_user_plan.plan_id==e.id?i("div",{staticClass:"my-3 btn btn-outline-light white",staticStyle:{color:"black"}},[t._v("ACTIVE PLAN")]):i("div",{staticClass:"my-3 btn btn-outline-light"},[t._v("BUY NOW")])],1)])})),0)])},a=[],c=e(6154),n={name:"BusinessPlans",data(){return{plans:[],active_user_plan:[]}},methods:{getPlans(){c.Z.get("businesses/billing/plan").then((t=>{this.plans=t.data.plans,this.active_user_plan=t.data.active_user_plan}))}},mounted(){this.getPlans()}},r=n,o=e(1001),l=(0,o.Z)(r,s,a,!1,null,"e67a0814",null),_=l.exports},128:function(t,i,e){e.r(i),e.d(i,{default:function(){return b}});var s=e(9256),a=function(){var t=this,i=t._self._c;return i("div",[t._m(0),t._m(1),i(s.Z,[i("BusinessPlans")],1)],1)},c=[function(){var t=this,i=t._self._c;return i("h1",{staticClass:"text-center mt-3 h3"},[i("span",[t._v("Payment and Plans")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"text-center mt-3"},[i("a",{staticClass:"cred text-decoration-underline",attrs:{href:"#"}},[t._v("Custom Payment")])])}],n=e(8600),r={name:"PaymentPlans",components:{BusinessPlans:n.Z},metaInfo:{title:"Payment Plans"},data(){return{}}},o=r,l=e(1001),_=(0,l.Z)(o,a,c,!1,null,"0c032a71",null),b=_.exports}}]);
//# sourceMappingURL=128.dd6fca8f.js.map