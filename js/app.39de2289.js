(function(e){function n(n){for(var a,r,l=n[0],s=n[1],u=n[2],p=n[3]||[],d=0,f=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);h&&h(n),i.push.apply(i,p);while(f.length)f.shift()();return c.push.apply(c,u||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],a=!0,r=1;r<t.length;r++){var u=t[r];0!==o[u]&&(a=!1)}a&&(c.splice(n--,1),e=s(s.s=t[0]))}return 0===c.length&&(i.forEach((function(e){if(void 0===o[e]){o[e]=null;var n=document.createElement("link");s.nc&&n.setAttribute("nonce",s.nc),n.rel="prefetch",n.as="script",n.href=l(e),document.head.appendChild(n)}})),i.length=0),e}var a={},r={app:0},o={app:0},c=[],i=[];function l(e){return s.p+"js/"+({"bench-child":"bench-child","bench-deferred":"bench-deferred","bench-functional":"bench-functional","bench-keep-alive":"bench-keep-alive","bench-keep-alive-off":"bench-keep-alive-off","bench-keep-alive-on":"bench-keep-alive-on","bench-local":"bench-local","bench-show":"bench-show",bootstrap:"bootstrap",jquery:"jquery",main:"main",popper:"popper",theme:"theme"}[e]||e)+"."+{"bench-child":"3deb6086","bench-deferred":"6d241e56","bench-functional":"75ef9ef9","bench-keep-alive":"dfe49e22","bench-keep-alive-off":"8c28d450","bench-keep-alive-on":"01ff685a","bench-local":"0a925801","bench-show":"fb87416a",bootstrap:"d4fde3ed",jquery:"21ba9bca",main:"df07a6c9",popper:"e042f2c0",theme:"000742c3"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"bench-child":1,"bench-deferred":1,"bench-functional":1,"bench-keep-alive-off":1,"bench-keep-alive-on":1,"bench-local":1,"bench-show":1,main:1,theme:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="css/"+({"bench-child":"bench-child","bench-deferred":"bench-deferred","bench-functional":"bench-functional","bench-keep-alive":"bench-keep-alive","bench-keep-alive-off":"bench-keep-alive-off","bench-keep-alive-on":"bench-keep-alive-on","bench-local":"bench-local","bench-show":"bench-show",bootstrap:"bootstrap",jquery:"jquery",main:"main",popper:"popper",theme:"theme"}[e]||e)+"."+{"bench-child":"4d2fcb66","bench-deferred":"82a2a1d4","bench-functional":"9d9dd21d","bench-keep-alive":"31d6cfe0","bench-keep-alive-off":"950b11e3","bench-keep-alive-on":"8b3839ac","bench-local":"e1168b70","bench-show":"25b4913c",bootstrap:"31d6cfe0",jquery:"31d6cfe0",main:"1c269809",popper:"31d6cfe0",theme:"dca42f8b"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return n()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===a||u===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var a=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],d.parentNode.removeChild(d),t(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var c=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=c);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var p=new Error;i=function(n){u.onerror=u.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,t[1](p)}o[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/vue-performance-tips/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var h=p,f=function(){return c.push([0,"chunk-vendors"]),t()}();n([[],{},0,["bootstrap","jquery","popper","theme"]])})({0:function(e,n,t){e.exports=t("56d7")},"0be7":function(e,n,t){t("d3b7"),t.e("theme").then(t.t.bind(null,"6aea",7))},"1ec4":function(e,n,t){t("d3b7"),t.e("jquery").then(t.t.bind(null,"c5ec",7)),t.e("popper").then(t.bind(null,"079a")),t.e("bootstrap").then(t.t.bind(null,"3e48",7))},"309f":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container-fluid p-0"},[t("main",[t("div",{staticClass:"row justify-content-end mr-0 ml-0 mt-2 duplicated-switches"},[t("div",{staticClass:"col-2"},[t("div",{staticClass:"custom-control custom-switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.optimized,expression:"optimized"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"optimized"},domProps:{checked:Array.isArray(e.optimized)?e._i(e.optimized,null)>-1:e.optimized},on:{change:function(n){var t=e.optimized,a=n.target,r=!!a.checked;if(Array.isArray(t)){var o=null,c=e._i(t,o);a.checked?c<0&&(e.optimized=t.concat([o])):c>-1&&(e.optimized=t.slice(0,c).concat(t.slice(c+1)))}else e.optimized=r}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"optimized"}},[e._v("Optimized")])]),e._t("switches")],2)]),t("div",{staticClass:"row m-0 justify-content-center"},[e._t("title")],2),e.optimized?e._t("on"):e._t("off"),e._t("default")],2)])},o=[],c={name:"Benchmark",data:function(){return{optimized:!1}}},i=c,l=(t("c021"),t("2877")),s=Object(l["a"])(i,r,o,!1,null,null,null),u=s.exports,p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"heavy",style:"width: "+e.size+"; height: "+e.size},[t("pre",[e._v(e._s(e.heavy()))])])},d=[],h=(t("a9e3"),{name:"Heavy",props:{factor:{type:Number,default:1e5}},computed:{size:function(){return 20+this.factor/9999999*40}},methods:{heavy:function(){for(var e=this.factor,n=0,t=0;t<e;t++)n+=Math.tan(Math.sqrt(Math.cos(Math.sin(Math.random()*this.size))));return n}}}),f=h,v=(t("cd70"),Object(l["a"])(f,p,d,!1,null,"671d759f",null)),b=v.exports;a["a"].component("Benchmark",u),a["a"].component("Heavy",b);var m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("header",[t("Navigation")],1),t("router-view")],1)},k=[],g=function(e,n){var a=n._c;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("img",{attrs:{alt:"Vue logo",src:t("cf05"),width:"20px",height:"20px"}})]),n._m(0),a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav justify-content-end"},[a("router-link",{attrs:{to:{name:"functional-component"}},scopedSlots:n._u([{key:"default",fn:function(e){var t=e.href,r=e.navigate,o=e.isActive;return[a("li",{class:"nav-item"+(o?" active":"")},[a("a",{staticClass:"nav-link",attrs:{href:t},on:{click:r}},[n._v("Functional component")])])]}}])}),a("router-link",{attrs:{to:{name:"conditional-rendering"}},scopedSlots:n._u([{key:"default",fn:function(e){var t=e.href,r=e.navigate,o=e.isActive;return[a("li",{class:"nav-item"+(o?" active":"")},[a("a",{staticClass:"nav-link",attrs:{href:t},on:{click:r}},[n._v("Conditional render")])])]}}])}),a("router-link",{attrs:{to:{name:"local-var"}},scopedSlots:n._u([{key:"default",fn:function(e){var t=e.href,r=e.navigate,o=e.isActive;return[a("li",{class:"nav-item"+(o?" active":"")},[a("a",{staticClass:"nav-link",attrs:{href:t},on:{click:r}},[n._v("Local var")])])]}}])}),a("router-link",{attrs:{to:{name:"child-component"}},scopedSlots:n._u([{key:"default",fn:function(e){var t=e.href,r=e.navigate,o=e.isActive;return[a("li",{class:"nav-item"+(o?" active":"")},[a("a",{staticClass:"nav-link",attrs:{href:t},on:{click:r}},[n._v("Child component")])])]}}])}),a("router-link",{attrs:{to:{name:"keep-alive-prev"}},scopedSlots:n._u([{key:"default",fn:function(e){var t=e.href,r=e.navigate,o=e.isActive;return[a("li",{class:"nav-item"+(o?" active":"")},[a("a",{staticClass:"nav-link",attrs:{href:t},on:{click:r}},[n._v("Keep-alive")])])]}}])}),a("router-link",{attrs:{to:{name:"deferred-components"}},scopedSlots:n._u([{key:"default",fn:function(e){var t=e.href,r=e.navigate,o=e.isActive;return[a("li",{class:"nav-item"+(o?" active":"")},[a("a",{staticClass:"nav-link",attrs:{href:t},on:{click:r}},[n._v("Deferred components")])])]}}])})],1)])],1)},y=[function(e,n){var t=n._c;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}],_={name:"Navigation"},w=_,C=Object(l["a"])(w,g,y,!0,null,null,null),j=C.exports,x={name:"App",components:{Navigation:j}},z=x,A=Object(l["a"])(z,m,k,!1,null,null,null),O=A.exports,S=(t("d3b7"),t("8c4f"));a["a"].use(S["a"]);var E=new S["a"]({mode:"history",base:"/vue-performance-tips/",routes:[{path:"/",name:"main",component:function(){return t.e("main").then(t.bind(null,"cd56"))}},{path:"/functional-component",name:"functional-component",component:function(){return t.e("bench-functional").then(t.bind(null,"5110"))}},{path:"/conditional-rendering",name:"conditional-rendering",component:function(){return t.e("bench-show").then(t.bind(null,"5a95"))}},{path:"/keep-alive",component:function(){return t.e("bench-keep-alive").then(t.bind(null,"b3ba"))},children:[{path:"",name:"keep-alive-prev",component:function(){return t.e("bench-keep-alive-off").then(t.bind(null,"8d7d"))}},{path:"/next",name:"keep-alive-next",component:function(){return t.e("bench-keep-alive-on").then(t.bind(null,"bc29"))}}]},{path:"/child-component",name:"child-component",component:function(){return t.e("bench-child").then(t.bind(null,"6e93"))}},{path:"/local-var",name:"local-var",component:function(){return t.e("bench-local").then(t.bind(null,"66c3"))}},{path:"/deferred-components",name:"deferred-components",component:function(){return t.e("bench-deferred").then(t.bind(null,"d06c"))}}]}),N=E;t("0be7"),t("1ec4");a["a"].config.productionTip=!1,new a["a"]({router:N,render:function(e){return e(O)}}).$mount("#app")},"617b":function(e,n,t){},c021:function(e,n,t){"use strict";var a=t("309f"),r=t.n(a);r.a},cd70:function(e,n,t){"use strict";var a=t("617b"),r=t.n(a);r.a},cf05:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.39de2289.js.map