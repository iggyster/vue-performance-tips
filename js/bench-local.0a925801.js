(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bench-local"],{"01af":function(t,a,e){"use strict";a["a"]={created:function(){this.count=800,this.generate()},data:function(){return{play:!1,list:[]}},watch:{play:function(t){t&&this.generate()}},methods:{generate:function(){for(var t=[],a=0;a<this.count;a++)t.push(Math.random()<.5);this.list=t,this.play&&requestAnimationFrame(this.generate)}}}},2834:function(t,a,e){"use strict";var n=e("663c"),r=e.n(n);r.a},"663c":function(t,a,e){},"66c3":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Benchmark",{scopedSlots:t._u([{key:"title",fn:function(){return[e("h1",[t._v("Local variable")])]},proxy:!0},{key:"switches",fn:function(){return[e("div",{staticClass:"custom-control custom-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.play,expression:"play"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"play"},domProps:{checked:Array.isArray(t.play)?t._i(t.play,null)>-1:t.play},on:{change:function(a){var e=t.play,n=a.target,r=!!n.checked;if(Array.isArray(e)){var s=null,c=t._i(e,s);n.checked?c<0&&(t.play=e.concat([s])):c>-1&&(t.play=e.slice(0,c).concat(e.slice(c+1)))}else t.play=r}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"play"}},[t._v("Play")])])]},proxy:!0},{key:"off",fn:function(){return[e("div",{staticClass:"grid"},t._l(t.list,(function(t,a){return e("LocalVarOff",{key:a,attrs:{value:t}})})),1)]},proxy:!0},{key:"on",fn:function(){return[e("div",{staticClass:"grid"},t._l(t.list,(function(t,a){return e("LocalVarOn",{key:a,attrs:{value:t}})})),1)]},proxy:!0}])})},r=[],s=e("01af"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"circle"},[t.value?e("div",{staticClass:"on"},[t._v(" "+t._s(t.result)+" ")]):e("div",{staticClass:"off"},[t._v(" "+t._s(t.result)+" ")])])},l=[];function i(t){return Math.sqrt(Math.cos(Math.sin(t)))+t+t*t+2*t+3*t}var o={name:"LocalVarOff",props:["value"],computed:{factor:function(){return 1e3},result:function(){for(var t=this.value,a=0;a<1e3;a++)t+=i(this.factor);return t}}},u=o,f=e("2877"),p=Object(f["a"])(u,c,l,!1,null,null,null),v=p.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"circle"},[t.value?e("div",{staticClass:"on"},[t._v(" "+t._s(t.result)+" ")]):e("div",{staticClass:"off"},[t._v(" "+t._s(t.result)+" ")])])},y=[];function d(t){return Math.sqrt(Math.cos(Math.sin(t)))+t+t*t+2*t+3*t}var m={name:"LocalVarOn",props:["value"],computed:{factor:function(){return 1e3},result:function(t){for(var a=t.factor,e=t.value,n=e,r=0;r<1e3;r++)n+=d(a);return n}}},_=m,k=Object(f["a"])(_,h,y,!1,null,null,null),C=k.exports,b={name:"LocalVar",mixins:[s["a"]],components:{LocalVarOff:v,LocalVarOn:C}},w=b,x=(e("2834"),Object(f["a"])(w,n,r,!1,null,null,null));a["default"]=x.exports}}]);
//# sourceMappingURL=bench-local.0a925801.js.map