!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("labo-vue-dock",[],e):"object"==typeof exports?exports["labo-vue-dock"]=e():t["labo-vue-dock"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=3)}([function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([a]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=u[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(a(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(a(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function a(t){var e,n,o=document.querySelector("style["+g+'~="'+t.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(m){var a=p++;o=d||(d=r()),e=s.bind(null,o,a,!1),n=s.bind(null,o,a,!0)}else o=r(),e=i.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function s(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=k(e,r);else{var a=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(a,s[e]):t.appendChild(a)}}function i(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),b.ssrId&&t.setAttribute(g,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(7),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,v=function(){},b=null,g="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,r){h=n,b=r||{};var a=l(t,e);return o(a),function(e){for(var n=[],r=0;r<a.length;r++){var s=a[r],i=u[s.id];i.refs--,n.push(i)}e?(a=l(t,e),o(a)):a=[];for(var r=0;r<n.length;r++){var i=n[r];if(0===i.refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete u[i.id]}}}};var k=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";e.a={data:function(){return{transName:"",positionTop:"unset"}},props:{dock:{default:[]},height:{default:"60px"},areaClass:{default:""},dockClass:{default:""},position:{default:"bottom"}},methods:{handleClick:function(t){var e=this.$route.path;this.positionTop=this.$refs.routerView.$el.offsetTop,this.dock.findIndex(function(t){return t.path===e})<this.dock.findIndex(function(e){return e.path===t})?this.transName="labo-dock-trans-left":this.transName="labo-dock-trans-right",this.$router.push(t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4);n.d(e,"default",function(){return o.a})},function(t,e,n){"use strict";function o(t){n(5),n(8)}var r=n(2),a=n(11),s=n(10),i=o,c=s(r.a,a.a,!1,i,"data-v-f6722666",null);e.a=c.exports},function(t,e,n){var o=n(6);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(1)("16fb781b",o,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,".labo-dock-area[data-v-f6722666]{box-sizing:border-box;height:100%}.labo-dock-area [data-v-f6722666]{box-sizing:border-box}.labo-dock-scroll[data-v-f6722666]{height:100%;overflow:auto;-webkit-overflow-scrolling:touch;transition:transform .5s}.labo-dock-box[data-v-f6722666]{position:absolute;bottom:0;left:0;right:0;display:flex;z-index:99}.labo-dock-box>div[data-v-f6722666]{flex:1}.labo-dock-item[data-v-f6722666]{display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:16px;outline:none;-webkit-tap-highlight-color:transparent}",""])},function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var a=e[r],s=a[0],i=a[1],c=a[2],l=a[3],u={id:t+":"+r,css:i,media:c,sourceMap:l};o[s]?o[s].parts.push(u):n.push(o[s]={id:s,parts:[u]})}return n}},function(t,e,n){var o=n(9);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(1)("62f18321",o,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,".labo-dock-trans-left-enter-active,.labo-dock-trans-left-leave-active,.labo-dock-trans-right-enter-active,.labo-dock-trans-right-leave-active{position:absolute;width:100%;left:0;will-change:transform}.labo-dock-trans-left-enter-active{transform:translate3d(100%,0,0)}.labo-dock-trans-right-enter-active{transform:translate3d(-100%,0,0)}.labo-dock-trans-left-leave-active,.labo-dock-trans-right-leave-active{transform:translateZ(0)}.labo-dock-trans-right-leave-to{transform:translate3d(100%,0,0)}.labo-dock-trans-left-leave-to{transform:translate3d(-100%,0,0)}.labo-dock-trans-left-enter-to,.labo-dock-trans-right-enter-to{transform:translateZ(0)}",""])},function(t,e){t.exports=function(t,e,n,o,r,a){var s,i=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,i=t.default);var l="function"==typeof i?i.options:i;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var u;if(a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=u):o&&(u=o),u){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=u,l.render=function(t,e){return u.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:s,exports:i,options:l}}},function(t,e,n){"use strict";var o=function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"labo-dock-area"},[o("transition",{attrs:{name:e.transName}},[e.$router.options.keepAlive?o("keep-alive",[o("router-view",{ref:"routerView",staticClass:"labo-dock-scroll",style:{height:"calc(100% - "+e.height+")",top:e.positionTop}})],1):o("router-view",{ref:"routerView",staticClass:"labo-dock-scroll",style:{height:"calc(100% - "+e.height+")",top:e.positionTop}})],1),e._v(" "),o("div",{staticClass:"labo-dock-box",class:(t={},t[e.areaClass]=!!e.areaClass,t),style:{height:e.height}},e._l(e.dock,function(t,n){var r;return o("div",{key:n,staticClass:"labo-dock-item",class:(r={active:e.$route.path===t.path},r[t.itemClass]=!!t.itemClass,r[e.dockClass]=!!e.dockClass,r),on:{click:function(n){return e.handleClick(t.path)}}},[e._v("\n      "+e._s(t.text)+"\n    ")])}),0)],1)},r=[],a={render:o,staticRenderFns:r};e.a=a}])});
//# sourceMappingURL=index.js.map