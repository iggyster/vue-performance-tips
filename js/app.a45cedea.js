(function(e){function n(n){for(var a,r,l=n[0],u=n[1],s=n[2],d=n[3]||[],p=0,h=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&h.push(c[r][0]),c[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(n),i.push.apply(i,d);while(h.length)h.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,r=1;r<t.length;r++){var s=t[r];0!==c[s]&&(a=!1)}a&&(o.splice(n--,1),e=u(u.s=t[0]))}return 0===o.length&&(i.forEach((function(e){if(void 0===c[e]){c[e]=null;var n=document.createElement("link");u.nc&&n.setAttribute("nonce",u.nc),n.rel="prefetch",n.as="script",n.href=l(e),document.head.appendChild(n)}})),i.length=0),e}var a={},r={app:0},c={app:0},o=[],i=[];function l(e){return u.p+"js/"+({"bench-child":"bench-child","bench-conditional-render":"bench-conditional-render","bench-deferred":"bench-deferred","bench-functional-component":"bench-functional-component","bench-keep-alive":"bench-keep-alive","bench-keep-alive-off":"bench-keep-alive-off","bench-keep-alive-on":"bench-keep-alive-on","bench-local":"bench-local",jquery:"jquery",main:"main",popper:"popper",theme:"theme"}[e]||e)+"."+{"bench-child":"ccdbec80","bench-conditional-render":"8e389e55","bench-deferred":"1ce64094","bench-functional-component":"73d22484","bench-keep-alive":"d391a9f5","bench-keep-alive-off":"f713ec4d","bench-keep-alive-on":"8560d876","bench-local":"91388af8",jquery:"c5f19d4c",main:"06728b1e",popper:"c756945c",theme:"a845d034"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"bench-child":1,"bench-conditional-render":1,"bench-deferred":1,"bench-functional-component":1,"bench-keep-alive-off":1,"bench-keep-alive-on":1,"bench-local":1,main:1,theme:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="css/"+({"bench-child":"bench-child","bench-conditional-render":"bench-conditional-render","bench-deferred":"bench-deferred","bench-functional-component":"bench-functional-component","bench-keep-alive":"bench-keep-alive","bench-keep-alive-off":"bench-keep-alive-off","bench-keep-alive-on":"bench-keep-alive-on","bench-local":"bench-local",jquery:"jquery",main:"main",popper:"popper",theme:"theme"}[e]||e)+"."+{"bench-child":"af8fb2a1","bench-conditional-render":"c6d63346","bench-deferred":"584b505d","bench-functional-component":"bbd04140","bench-keep-alive":"31d6cfe0","bench-keep-alive-off":"70198bf0","bench-keep-alive-on":"3a74ad9d","bench-local":"9ad8a149",jquery:"31d6cfe0",main:"1c269809",popper:"31d6cfe0",theme:"dca42f8b"}[e]+".css",c=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===c))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===a||s===c)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var a=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],p.parentNode.removeChild(p),t(o)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=c[e]=[n,t]}));n.push(a[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=l(e);var d=new Error;i=function(n){s.onerror=s.onload=null,clearTimeout(p);var t=c[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,t[1](d)}c[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(t,a,function(n){return e[n]}.bind(null,a));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var p=0;p<s.length;p++)n(s[p]);var f=d,h=function(){return o.push([0,"chunk-vendors"]),t()}();n([[],{},0,["jquery","popper","theme"]])})({0:function(e,n,t){e.exports=t("56d7")},"0be7":function(e,n,t){t("d3b7"),t.e("theme").then(t.t.bind(null,"6aea",7))},"1ec4":function(e,n,t){t("d3b7"),t.e("jquery").then(t.t.bind(null,"1157",7)),t.e("popper").then(t.bind(null,"f0bd"))},3194:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container-fluid p-0"},[t("main",[t("div",{staticClass:"row justify-content-end mr-0 ml-0 mt-2 duplicated-switches"},[t("div",{staticClass:"col-2"},[t("div",{staticClass:"custom-control custom-switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.optimized,expression:"optimized"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"optimized"},domProps:{checked:Array.isArray(e.optimized)?e._i(e.optimized,null)>-1:e.optimized},on:{change:function(n){var t=e.optimized,a=n.target,r=!!a.checked;if(Array.isArray(t)){var c=null,o=e._i(t,c);a.checked?o<0&&(e.optimized=t.concat([c])):o>-1&&(e.optimized=t.slice(0,o).concat(t.slice(o+1)))}else e.optimized=r}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"optimized"}},[e._v("Optimized")])]),e._t("switches")],2)]),e._t("content"),e.optimized?e._t("on"):e._t("off"),e._t("default")],2)])},c=[],o={name:"Page",data:function(){return{optimized:!1}}},i=o,l=(t("f321"),t("2877")),u=Object(l["a"])(i,r,c,!1,null,null,null),s=u.exports,d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"heavy",style:"width: "+e.size+"; height: "+e.size},[t("pre",[e._v(e._s(e.heavy()))])])},p=[],f=(t("a9e3"),{name:"Heavy",props:{factor:{type:Number,default:1e5}},computed:{size:function(){return 20+this.factor/9999999*40}},methods:{heavy:function(){for(var e=this.factor,n=0,t=0;t<e;t++)n+=Math.tan(Math.sqrt(Math.cos(Math.sin(Math.random()*this.size))));return n}}}),h=f,v=(t("cd70"),Object(l["a"])(h,d,p,!1,null,"671d759f",null)),b=v.exports;a["a"].component("Page",s),a["a"].component("Heavy",b);var m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("header",[t("Navigation")],1),t("router-view")],1)},k=[],g=function(e,n){var a=n._c;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("img",{attrs:{alt:"Vue logo",src:t("cf05"),width:"20px",height:"20px"}})]),n._m(0),a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav justify-content-end"},[a("router-link",{attrs:{to:"/functional-component"},scopedSlots:n._u([{key:"default",fn:function(e){var t=e.href,r=e.navigate,c=e.isActive;return[a("li",{class:"nav-item"+(c?" active":"")},[a("a",{staticClass:"nav-link",attrs:{href:t},on:{click:r}},[n._v("Functional component")])])]}}])}),a("router-link",{attrs:{to:"/conditional-render"},scopedSlots:n._u([{key:"default",fn:function(e){var t=e.href,r=e.navigate,c=e.isActive;return[a("li",{class:"nav-item"+(c?" active":"")},[a("a",{staticClass:"nav-link",attrs:{href:t},on:{click:r}},[n._v("Conditional render")])])]}}])}),a("router-link",{attrs:{to:"/local-var"},scopedSlots:n._u([{key:"default",fn:function(e){var t=e.href,r=e.navigate,c=e.isActive;return[a("li",{class:"nav-item"+(c?" active":"")},[a("a",{staticClass:"nav-link",attrs:{href:t},on:{click:r}},[n._v("Local var")])])]}}])}),a("router-link",{attrs:{to:"/child"},scopedSlots:n._u([{key:"default",fn:function(e){var t=e.href,r=e.navigate,c=e.isActive;return[a("li",{class:"nav-item"+(c?" active":"")},[a("a",{staticClass:"nav-link",attrs:{href:t},on:{click:r}},[n._v("Child component")])])]}}])}),a("router-link",{attrs:{to:{name:"keep-alive-prev"}},scopedSlots:n._u([{key:"default",fn:function(e){var t=e.href,r=e.navigate,c=e.isActive;return[a("li",{class:"nav-item"+(c?" active":"")},[a("a",{staticClass:"nav-link",attrs:{href:t},on:{click:r}},[n._v("Keep-alive")])])]}}])}),a("router-link",{attrs:{to:{name:"deferred"}},scopedSlots:n._u([{key:"default",fn:function(e){var t=e.href,r=e.navigate,c=e.isActive;return[a("li",{class:"nav-item"+(c?" active":"")},[a("a",{staticClass:"nav-link",attrs:{href:t},on:{click:r}},[n._v("Deferred component")])])]}}])})],1)])],1)},y=[function(e,n){var t=n._c;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}],_={name:"Navigation"},C=_,j=Object(l["a"])(C,g,y,!0,null,null,null),w=j.exports,x={name:"App",components:{Navigation:w}},z=x,A=Object(l["a"])(z,m,k,!1,null,null,null),O=A.exports,S=(t("d3b7"),t("8c4f"));a["a"].use(S["a"]);var E=new S["a"]({mode:"history",routes:[{path:"/",name:"main",component:function(){return t.e("main").then(t.bind(null,"cd56"))}},{path:"/functional-component",name:"functional-component",component:function(){return t.e("bench-functional-component").then(t.bind(null,"5110"))}},{path:"/conditional-render",name:"conditional-render",component:function(){return t.e("bench-conditional-render").then(t.bind(null,"5a95"))}},{path:"/keep-alive",component:function(){return t.e("bench-keep-alive").then(t.bind(null,"b3ba"))},children:[{path:"",name:"keep-alive-prev",component:function(){return t.e("bench-keep-alive-off").then(t.bind(null,"8d7d"))}},{path:"next",name:"keep-alive-next",component:function(){return t.e("bench-keep-alive-on").then(t.bind(null,"bc29"))}}]},{path:"/child",name:"child",component:function(){return t.e("bench-child").then(t.bind(null,"6e93"))}},{path:"/local-var",name:"local-var",component:function(){return t.e("bench-local").then(t.bind(null,"66c3"))}},{path:"/deferred",name:"deferred",component:function(){return t.e("bench-deferred").then(t.bind(null,"d06c"))}}]}),N=E;t("0be7"),t("1ec4");a["a"].config.productionTip=!1,new a["a"]({router:N,render:function(e){return e(O)}}).$mount("#app")},"617b":function(e,n,t){},cd70:function(e,n,t){"use strict";var a=t("617b"),r=t.n(a);r.a},cf05:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"},f321:function(e,n,t){"use strict";var a=t("3194"),r=t.n(a);r.a}});
//# sourceMappingURL=app.a45cedea.js.map