(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bench-show"],{"01af":function(t,a,e){"use strict";a["a"]={created:function(){this.count=800,this.generate()},data:function(){return{play:!1,list:[]}},watch:{play:function(t){t&&this.generate()}},methods:{generate:function(){for(var t=[],a=0;a<this.count;a++)t.push(Math.random()<.5);this.list=t,this.play&&requestAnimationFrame(this.generate)}}}},"0703":function(t,a,e){"use strict";var n=e("3322"),s=e.n(n);s.a},3322:function(t,a,e){},"4ed9":function(t,a,e){},5407:function(t,a,e){"use strict";var n=e("4ed9"),s=e.n(n);s.a},"631c":function(t,a,e){"use strict";var n=e("88fa"),s=e.n(n);s.a},"88fa":function(t,a,e){},e915:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Page",{scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"row m-0 justify-content-center"},[e("h1",[t._v("Show VS If")])])]},proxy:!0},{key:"switches",fn:function(){return[e("div",{staticClass:"custom-control custom-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.play,expression:"play"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"play"},domProps:{checked:Array.isArray(t.play)?t._i(t.play,null)>-1:t.play},on:{change:function(a){var e=t.play,n=a.target,s=!!n.checked;if(Array.isArray(e)){var r=null,c=t._i(e,r);n.checked?c<0&&(t.play=e.concat([r])):c>-1&&(t.play=e.slice(0,c).concat(e.slice(c+1)))}else t.play=s}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"play"}},[t._v("Play")])])]},proxy:!0},{key:"off",fn:function(){return[e("div",{staticClass:"grid"},t._l(t.list,(function(t,a){return e("ShowOff",{key:a,attrs:{value:t}})})),1)]},proxy:!0},{key:"on",fn:function(){return[e("div",{staticClass:"grid"},t._l(t.list,(function(t,a){return e("ShowOn",{key:a,attrs:{value:t}})})),1)]},proxy:!0}])})},s=[],r=function(t,a){var e=a._c;return e("div",{staticClass:"circle"},[e("div",{directives:[{name:"show",rawName:"v-show",value:a.props.value,expression:"props.value"}],staticClass:"on"},[e("Heavy",{attrs:{factor:1e3}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!a.props.value,expression:"!props.value"}],staticClass:"off"},[e("Heavy",{attrs:{factor:1e3}})],1)])},c=[],o=(e("0703"),e("2877")),i={},l=Object(o["a"])(i,r,c,!0,null,"1c70187c",null),u=l.exports,f=function(t,a){var e=a._c;return e("div",{staticClass:"circle"},[a.props.value?e("div",{staticClass:"on"},[e("Heavy",{attrs:{factor:1e3}})],1):e("div",{staticClass:"off"},[e("Heavy",{attrs:{factor:1e3}})],1)])},p=[],v=(e("631c"),{}),y=Object(o["a"])(v,f,p,!0,null,"1405e687",null),d=y.exports,h=e("01af"),w={name:"Show",mixins:[h["a"]],components:{ShowOff:u,ShowOn:d}},m=w,k=(e("5407"),Object(o["a"])(m,n,s,!1,null,"4bba881d",null));a["default"]=k.exports}}]);
//# sourceMappingURL=bench-show.36c11169.js.map