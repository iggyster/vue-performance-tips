(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bench-keep-alive"],{b0c0:function(e,t,n){var r=n("83ab"),a=n("9bf2").f,o=Function.prototype,c=o.toString,i=/^\s*function ([^ (]*)/,u="name";r&&!(u in o)&&a(o,u,{configurable:!0,get:function(){try{return c.call(this).match(i)[1]}catch(e){return""}}})},b3ba:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Benchmark",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h1",[e._v("Keep-alive")])]},proxy:!0},{key:"switches",fn:function(){return[n("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[n("button",{staticClass:"btn btn-secondary",class:e.page?"":"active",attrs:{type:"button"},on:{click:function(t){e.page=!1}}},[e._v("Prev")]),n("button",{staticClass:"btn btn-secondary",class:e.page?"active":"",attrs:{type:"button"},on:{click:function(t){e.page=!0}}},[e._v("Next")])])]},proxy:!0},{key:"on",fn:function(){return[n("keep-alive",[n("router-view")],1)]},proxy:!0},{key:"off",fn:function(){return[n("router-view")]},proxy:!0}])})},a=[],o=(n("b0c0"),{name:"Keep",computed:{page:{get:function(){return"keep-alive-prev"===this.$route.name},set:function(e){e?this.$router.push({name:"keep-alive-next"}):this.$router.push({name:"keep-alive-prev"})}}}}),c=o,i=n("2877"),u=Object(i["a"])(c,r,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=bench-keep-alive.dfe49e22.js.map