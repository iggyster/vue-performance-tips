(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bench-child"],{"01af":function(t,n,e){"use strict";n["a"]={created:function(){this.count=800,this.generate()},data:function(){return{play:!1,list:[]}},watch:{play:function(t){t&&this.generate()}},methods:{generate:function(){for(var t=[],n=0;n<this.count;n++)t.push(Math.random()<.5);this.list=t,this.play&&requestAnimationFrame(this.generate)}}}},"37dc":function(t,n,e){},"6e93":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Benchmark",{scopedSlots:t._u([{key:"title",fn:function(){return[e("h1",[t._v("Child component")])]},proxy:!0},{key:"switches",fn:function(){return[e("div",{staticClass:"custom-control custom-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.play,expression:"play"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"play"},domProps:{checked:Array.isArray(t.play)?t._i(t.play,null)>-1:t.play},on:{change:function(n){var e=t.play,a=n.target,s=!!a.checked;if(Array.isArray(e)){var i=null,r=t._i(e,i);a.checked?r<0&&(t.play=e.concat([i])):r>-1&&(t.play=e.slice(0,r).concat(e.slice(r+1)))}else t.play=s}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"play"}},[t._v("Play")])])]},proxy:!0},{key:"off",fn:function(){return[e("div",{staticClass:"grid"},t._l(t.list,(function(t,n){return e("ChildOff",{key:n,attrs:{value:t}})})),1)]},proxy:!0},{key:"on",fn:function(){return[e("div",{staticClass:"grid"},t._l(t.list,(function(t,n){return e("ChildOn",{key:n,attrs:{value:t}})})),1)]},proxy:!0}])})},s=[],i=e("01af"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"circle"},[t.value?e("div",{staticClass:"on"},[t._v(" "+t._s(t.heavy())+" ")]):e("div",{staticClass:"off"},[t._v(" "+t._s(t.heavy())+" ")])])},c=[],l={name:"ChildOff",props:["value"],methods:{heavy:function(){for(var t=1e5,n=0,e=0;e<t;e++)n+=Math.sqrt(Math.cos(Math.sin(42)));return n}}},o=l,u=e("2877"),f=Object(u["a"])(o,r,c,!1,null,null,null),h=f.exports,d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"circle"},[t.value?e("div",{staticClass:"on"},[e("Inner")],1):e("div",{staticClass:"off"},[e("Inner")],1)])},p=[],v={name:"ChildOn",props:["value"],components:{Inner:{methods:{heavy:function(){for(var t=1e5,n=0,e=0;e<t;e++)n+=Math.sqrt(Math.cos(Math.sin(42)));return n}},render:function(t){return t("div",this.heavy())}}}},y=v,m=Object(u["a"])(y,d,p,!1,null,null,null),C=m.exports,_={name:"Child",mixins:[i["a"]],components:{ChildOff:h,ChildOn:C}},k=_,w=(e("c40c"),Object(u["a"])(k,a,s,!1,null,null,null));n["default"]=w.exports},c40c:function(t,n,e){"use strict";var a=e("37dc"),s=e.n(a);s.a}}]);
//# sourceMappingURL=bench-child.3deb6086.js.map