"use strict";(self["webpackChunkbizlx"]=self["webpackChunkbizlx"]||[]).push([[7100],{8600:function(t,i,s){s.d(i,{Z:function(){return b}});var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"cmsp py-3"},[i("div",{staticClass:"row cmsplan g-5 text-center justify-content-center"},t._l(t.plans,(function(s,e){return i("div",{key:e,staticClass:"col-12 col-md-4"},[i("div",{staticClass:"base shadow rounded-3 px-1 p2",attrs:{id:s.id}},[i("div",{staticClass:"mtitle"},[t._v(t._s(s.plan_description))]),i("b-list-group",{attrs:{flush:""}},[i("div",[0==s.plan_price?i("b-list-group-item",{staticClass:"fw-bold mprice"},[t._v("FREE 0")]):i("b-list-group-item",{staticClass:"fw-bold mprice"},[t._v("INR : "+t._s(s.plan_price))])],1),i("div",[s.images>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Images : "),i("b",[t._v(t._s(s.images))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Images : "),i("b",[t._v("No")])],1)],1),i("div",[s.hot_deals>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Hot Deals : "),i("b",[t._v(t._s(s.hot_deals))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Hot Deals : "),i("b",[t._v("No")])],1)],1),i("div",[s.sale>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Sales : "),i("b",[t._v(t._s(s.sale))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Sales : "),i("b",[t._v("No")])],1)],1),i("div",[s.jobs>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Jobs : "),i("b",[t._v(t._s(s.jobs))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Jobs : "),i("b",[t._v("No")])],1)],1),i("div",[s.video>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Videos : "),i("b",[t._v(t._s(s.video))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Videos : "),i("b",[t._v("No")])],1)],1),i("div",[s.about>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("About : "),i("b",[t._v(t._s(s.about))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("About : "),i("b",[t._v("No")])],1)],1),i("div",[s.home_page_banner>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Home Page Banner : "),i("b",[t._v(t._s(s.home_page_banner))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Home Page Banner : "),i("b",[t._v("No")])],1)],1),i("div",[1==s.services?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Services : "),i("b",[t._v(t._s(s.services))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Services : "),i("b",[t._v("No")])],1)],1),i("div",[s.contact>0?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Contact : "),i("b",[t._v("Yes")])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Contact : "),i("b",[t._v("No")])],1)],1),i("div",[1==s.reviews?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Reviews : "),i("b",[t._v("Yes")])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Reviews : "),i("b",[t._v("No")])],1)],1),i("div",[s.featured_city>1?i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Featured City : "),i("b",[t._v(t._s(s.featured_city))])],1):i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Featured City : "),i("b",[t._v("No")])],1)],1),s.featured_category>1?i("div",[i("b-list-group-item",[i("b-icon",{attrs:{icon:"check2-square"}}),t._v("Featured Category : "),i("b",[t._v(t._s(s.featured_category))])],1)],1):i("div",[i("b-list-group-item",[i("b-icon",{attrs:{icon:"x-circle"}}),t._v("Featured Category : "),i("b",[t._v("No")])],1)],1)]),null==t.active_user_plan.plan_id?i("div",{staticClass:"my-3 btn btn-outline-light"},[t._v("BUY NOW")]):t.active_user_plan.plan_id==s.id?i("div",{staticClass:"my-3 btn btn-outline-light white",staticStyle:{color:"black"}},[t._v("ACTIVE PLAN")]):i("div",{staticClass:"my-3 btn btn-outline-light"},[t._v("BUY NOW")])],1)])})),0)])},c=[],a=s(6154),o={name:"BusinessPlans",data(){return{plans:[],active_user_plan:[]}},methods:{getPlans(){a.Z.get("businesses/billing/plan").then((t=>{this.plans=t.data.plans,this.active_user_plan=t.data.active_user_plan}))}},mounted(){this.getPlans()}},n=o,r=s(1001),l=(0,r.Z)(n,e,c,!1,null,"e67a0814",null),b=l.exports},7100:function(t,i,s){s.r(i),s.d(i,{default:function(){return b}});var e=function(){var t=this,i=t._self._c;return i("div",[i("h4",{staticClass:"bg-red"},[t._v("Billing")]),i("h4",{staticClass:"mt-3"},[t._v("You are currently on the Trial plan.")]),i("p",[t._v("Next billing date is Feb 13, 2024 11:21 AM.")]),i("div",{staticClass:"row"},[i("BusinessPlans")],1)])},c=[],a=s(8600),o={name:"BusinessBilling",components:{BusinessPlans:a.Z}},n=o,r=s(1001),l=(0,r.Z)(n,e,c,!1,null,null,null),b=l.exports}}]);
//# sourceMappingURL=7100.48bafe0e.js.map