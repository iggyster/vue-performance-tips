(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bench-keep-alive"],{b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,c=Function.prototype,o=c.toString,i=/^\s*function ([^ (]*)/,u="name";a&&!(u in c)&&r(c,u,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},b3ba:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Page",{scopedSlots:t._u([{key:"switches",fn:function(){return[n("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[n("button",{staticClass:"btn btn-secondary",class:t.page?"":"active",attrs:{type:"button"},on:{click:function(e){t.page=!1}}},[t._v("Prev")]),n("button",{staticClass:"btn btn-secondary",class:t.page?"active":"",attrs:{type:"button"},on:{click:function(e){t.page=!0}}},[t._v("Next")])])]},proxy:!0},{key:"content",fn:function(){return[n("div",{staticClass:"row m-0 justify-content-md-center align-items-center duplicated-content"},[n("h1",[t._v("Keep-alive")])])]},proxy:!0},{key:"on",fn:function(){return[n("keep-alive",[n("router-view")],1)]},proxy:!0},{key:"off",fn:function(){return[n("router-view")]},proxy:!0}])})},r=[],c=(n("b0c0"),{name:"Keep",data:function(){return{play:!1}},computed:{page:{get:function(){return"keep-alive-prev"===this.$route.name},set:function(t){t?this.$router.push({name:"keep-alive-next"}):this.$router.push({name:"keep-alive-prev"})}}}}),o=c,i=n("2877"),u=Object(i["a"])(o,a,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=bench-keep-alive.4b96d44a.js.map