/*! For license information please see 86.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_openmrs_esm_implementer_tools_app=globalThis.webpackChunk_openmrs_esm_implementer_tools_app||[]).push([[86],{8696:(e,t,r)=>{r.d(t,{AG:()=>l,vc:()=>d});var n,o,i,a,u,c=r(5776),s=r.n(c),f=r(6248);const l=s().forwardRef((function(e,t){let{children:r,size:o=16,...i}=e;return s().createElement(f.I,{width:o,height:o,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",...i},n||(n=s().createElement("path",{d:"M18,28A12,12,0,1,0,6,16v6.2L2.4,18.6,1,20l6,6,6-6-1.4-1.4L8,22.2V16H8A10,10,0,1,1,18,26Z"})),r)})),d=s().forwardRef((function(e,t){let{children:r,size:n=16,...c}=e;return 16===n||"16"===n||"16px"===n?s().createElement(f.I,{width:n,height:n,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",...c},o||(o=s().createElement("path",{d:"M13.9,4.6l-2.5-2.5C11.3,2.1,11.1,2,11,2H3C2.4,2,2,2.4,2,3v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V5 C14,4.9,13.9,4.7,13.9,4.6z M6,3h4v2H6V3z M10,13H6V9h4V13z M11,13V9c0-0.6-0.4-1-1-1H6C5.4,8,5,8.4,5,9v4H3V3h2v2c0,0.6,0.4,1,1,1 h4c0.6,0,1-0.4,1-1V3.2l2,2V13H11z"})),r):20===n||"20"===n||"20px"===n?s().createElement(f.I,{width:n,height:n,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...c},i||(i=s().createElement("path",{d:"M17.8,5.5l-3.3-3.3C14.3,2.1,14.2,2,14,2H3.3C2.6,2,2,2.6,2,3.3v13.3C2,17.4,2.6,18,3.3,18h13.3c0.7,0,1.4-0.5,1.4-1.2V6.1 C18,5.7,17.9,5.7,17.8,5.5z M7.3,3.3h5.3v3.3H7.3V3.3z M12.7,16.7H7.3v-5.3h5.3L12.7,16.7L12.7,16.7z M14,16.7v-5.3 c0-0.7-0.6-1.3-1.3-1.3H7.3C6.6,10,6,10.6,6,11.3v5.3H3.3V3.3H6v3.3C6,7.4,6.6,8,7.3,8h5.3C13.4,8,14,7.4,14,6.7v-3l2.7,2.7v10.4 L14,16.7L14,16.7z"})),r):24===n||"24"===n||"24px"===n?s().createElement(f.I,{width:n,height:n,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",...c},a||(a=s().createElement("path",{d:"M20.8,7L17,3.2C16.9,3.1,16.7,3,16.5,3h-12C3.7,3,3,3.7,3,4.5v15C3,20.3,3.7,21,4.5,21h15c0.8,0,1.5-0.7,1.5-1.5v-12 C21,7.3,20.9,7.1,20.8,7z M9,4.5h6v3H9V4.5z M15,19.5H9v-6h6V19.5z M16.5,19.5v-6c0-0.8-0.7-1.5-1.5-1.5H9c-0.8,0-1.5,0.7-1.5,1.5v6 h-3v-15h3v3C7.5,8.3,8.2,9,9,9h6c0.8,0,1.5-0.7,1.5-1.5V4.8l3,3v11.7H16.5z"})),r):s().createElement(f.I,{width:n,height:n,ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",...c},u||(u=s().createElement("path",{d:"M27.71,9.29l-5-5A1,1,0,0,0,22,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V10A1,1,0,0,0,27.71,9.29ZM12,6h8v4H12Zm8,20H12V18h8Zm2,0V18a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v8H6V6h4v4a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V6.41l4,4V26Z"})),r)}))},2173:(e,t,r)=>{var n=r(5776),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useState,a=n.useEffect,u=n.useLayoutEffect,c=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),o=n[0].inst,f=n[1];return u((function(){o.value=r,o.getSnapshot=t,s(o)&&f({inst:o})}),[e,r,t]),a((function(){return s(o)&&f({inst:o}),e((function(){s(o)&&f({inst:o})}))}),[e]),c(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:f},5917:(e,t,r)=>{var n=r(5776),o=r(1374),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=o.useSyncExternalStore,u=n.useRef,c=n.useEffect,s=n.useMemo,f=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var l=u(null);if(null===l.current){var d={hasValue:!1,value:null};l.current=d}else d=l.current;l=s((function(){function e(e){if(!c){if(c=!0,a=e,e=n(e),void 0!==o&&d.hasValue){var t=d.value;if(o(t,e))return u=t}return u=e}if(t=u,i(a,e))return t;var r=n(e);return void 0!==o&&o(t,r)?t:(a=e,u=r)}var a,u,c=!1,s=void 0===r?null:r;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]}),[t,r,n,o]);var v=a(e,l[0],l[1]);return c((function(){d.hasValue=!0,d.value=v}),[v]),f(v),v}},1374:(e,t,r)=>{e.exports=r(2173)},5668:(e,t,r)=>{e.exports=r(5917)},9616:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(1250),o=r(8670),i=Object.prototype.hasOwnProperty;const a=function(e,t,r){var a=e[t];i.call(e,t)&&(0,o.Z)(a,r)&&(void 0!==r||t in e)||(0,n.Z)(e,t,r)}},1250:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(6684);const o=function(e,t,r){"__proto__"==t&&n.Z?(0,n.Z)(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},1325:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(6449),o=r(1830),i=r(9809);const a=function(e){return(0,n.Z)(e,i.Z,o.Z)}},4003:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(6899).Z)(Object.getPrototypeOf,Object)},1830:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(4895),o=r(4003),i=r(7451),a=r(1940);const u=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)(0,n.Z)(t,(0,i.Z)(e)),e=(0,o.Z)(e);return t}:a.Z},839:(e,t,r)=>{r.d(t,{Z:()=>G});var n=r(1890);var o=r(9616),i=r(1250);const a=function(e,t,r,n){var a=!r;r||(r={});for(var u=-1,c=t.length;++u<c;){var s=t[u],f=n?n(r[s],e[s],s,r,e):void 0;void 0===f&&(f=e[s]),a?(0,i.Z)(r,s,f):(0,o.Z)(r,s,f)}return r};var u=r(825);var c=r(9809);var s=r(658),f="object"==typeof exports&&exports&&!exports.nodeType&&exports,l=f&&"object"==typeof module&&module&&!module.nodeType&&module,d=l&&l.exports===f?s.Z.Buffer:void 0,v=d?d.allocUnsafe:void 0;var h=r(7451);var b=r(1830);var p=r(8924),Z=r(1325),g=r(6812),y=Object.prototype.hasOwnProperty;var w=r(4269);const E=function(e){var t=new e.constructor(e.byteLength);return new w.Z(t).set(new w.Z(e)),t};var j=/\w*$/;var m=r(7851),V=m.Z?m.Z.prototype:void 0,S=V?V.valueOf:void 0;const C=function(e,t,r){var n,o,i,a=e.constructor;switch(t){case"[object ArrayBuffer]":return E(e);case"[object Boolean]":case"[object Date]":return new a(+e);case"[object DataView]":return function(e,t){var r=t?E(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(e,t){var r=t?E(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,r);case"[object Map]":case"[object Set]":return new a;case"[object Number]":case"[object String]":return new a(e);case"[object RegExp]":return(i=new(o=e).constructor(o.source,j.exec(o))).lastIndex=o.lastIndex,i;case"[object Symbol]":return n=e,S?Object(S.call(n)):{}}};var A=r(7275),x=Object.create;const O=function(){function e(){}return function(t){if(!(0,A.Z)(t))return{};if(x)return x(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();var R=r(4003),U=r(9494);var _=r(6575),T=r(5008),I=r(4897);var M=r(7133),L=r(9801),H=L.Z&&L.Z.isMap;const D=H?(0,M.Z)(H):function(e){return(0,I.Z)(e)&&"[object Map]"==(0,g.Z)(e)};var z=L.Z&&L.Z.isSet;const k=z?(0,M.Z)(z):function(e){return(0,I.Z)(e)&&"[object Set]"==(0,g.Z)(e)};var F="[object Arguments]",N="[object Function]",P="[object Object]",B={};B[F]=B["[object Array]"]=B["[object ArrayBuffer]"]=B["[object DataView]"]=B["[object Boolean]"]=B["[object Date]"]=B["[object Float32Array]"]=B["[object Float64Array]"]=B["[object Int8Array]"]=B["[object Int16Array]"]=B["[object Int32Array]"]=B["[object Map]"]=B["[object Number]"]=B[P]=B["[object RegExp]"]=B["[object Set]"]=B["[object String]"]=B["[object Symbol]"]=B["[object Uint8Array]"]=B["[object Uint8ClampedArray]"]=B["[object Uint16Array]"]=B["[object Uint32Array]"]=!0,B["[object Error]"]=B[N]=B["[object WeakMap]"]=!1;const W=function e(t,r,i,s,f,l){var d,w=1&r,E=2&r,j=4&r;if(i&&(d=f?i(t,s,f,l):i(t)),void 0!==d)return d;if(!(0,A.Z)(t))return t;var m=(0,_.Z)(t);if(m){if(d=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&y.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!w)return function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}(t,d)}else{var V=(0,g.Z)(t),S=V==N||"[object GeneratorFunction]"==V;if((0,T.Z)(t))return function(e,t){if(t)return e.slice();var r=e.length,n=v?v(r):new e.constructor(r);return e.copy(n),n}(t,w);if(V==P||V==F||S&&!f){if(d=E||S?{}:function(e){return"function"!=typeof e.constructor||(0,U.Z)(e)?{}:O((0,R.Z)(e))}(t),!w)return E?function(e,t){return a(e,(0,b.Z)(e),t)}(t,function(e,t){return e&&a(t,(0,c.Z)(t),e)}(d,t)):function(e,t){return a(e,(0,h.Z)(e),t)}(t,function(e,t){return e&&a(t,(0,u.Z)(t),e)}(d,t))}else{if(!B[V])return f?t:{};d=C(t,V,w)}}l||(l=new n.Z);var x=l.get(t);if(x)return x;l.set(t,d),k(t)?t.forEach((function(n){d.add(e(n,r,i,n,t,l))})):D(t)&&t.forEach((function(n,o){d.set(o,e(n,r,i,o,t,l))}));var I=j?E?Z.Z:p.Z:E?c.Z:u.Z,M=m?void 0:I(t);return function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););}(M||t,(function(n,a){M&&(n=t[a=n]),(0,o.Z)(d,a,e(n,r,i,a,t,l))})),d},G=function(e){return W(e,5)}},4383:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7275),o=r(658);const i=function(){return o.Z.Date.now()};var a=r(9203),u=Math.max,c=Math.min;const s=function(e,t,r){var o,s,f,l,d,v,h=0,b=!1,p=!1,Z=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=o,n=s;return o=s=void 0,h=t,l=e.apply(n,r)}function y(e){var r=e-v;return void 0===v||r>=t||r<0||p&&e-h>=f}function w(){var e=i();if(y(e))return E(e);d=setTimeout(w,function(e){var r=t-(e-v);return p?c(r,f-(e-h)):r}(e))}function E(e){return d=void 0,Z&&o?g(e):(o=s=void 0,l)}function j(){var e=i(),r=y(e);if(o=arguments,s=this,v=e,r){if(void 0===d)return function(e){return h=e,d=setTimeout(w,t),b?g(e):l}(v);if(p)return clearTimeout(d),d=setTimeout(w,t),g(v)}return void 0===d&&(d=setTimeout(w,t)),l}return t=(0,a.Z)(t)||0,(0,n.Z)(r)&&(b=!!r.leading,f=(p="maxWait"in r)?u((0,a.Z)(r.maxWait)||0,t):f,Z="trailing"in r?!!r.trailing:Z),j.cancel=function(){void 0!==d&&clearTimeout(d),h=0,o=v=s=d=void 0},j.flush=function(){return void 0===d?l:E(i())},j}},8403:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(3126),o=r(6812),i=r(4996),a=r(6575),u=r(6905),c=r(5008),s=r(9494),f=r(8485),l=Object.prototype.hasOwnProperty;const d=function(e){if(null==e)return!0;if((0,u.Z)(e)&&((0,a.Z)(e)||"string"==typeof e||"function"==typeof e.splice||(0,c.Z)(e)||(0,f.Z)(e)||(0,i.Z)(e)))return!e.length;var t=(0,o.Z)(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if((0,s.Z)(e))return!(0,n.Z)(e).length;for(var r in e)if(l.call(e,r))return!1;return!0}},988:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(8165);const o=function(e,t){return(0,n.Z)(e,t)}},9809:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(1602),o=r(7275),i=r(9494);var a=Object.prototype.hasOwnProperty;const u=function(e){if(!(0,o.Z)(e))return function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}(e);var t=(0,i.Z)(e),r=[];for(var n in e)("constructor"!=n||!t&&a.call(e,n))&&r.push(n);return r};var c=r(6905);const s=function(e){return(0,c.Z)(e)?(0,n.Z)(e,!0):u(e)}},9903:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(2363),o=r(8319),i=r(7106),a=r(9616),u=r(6205),c=r(5313),s=r(7275),f=r(199);const l=function(e,t,r,n){if(!(0,s.Z)(e))return e;for(var o=-1,i=(t=(0,u.Z)(t,e)).length,l=i-1,d=e;null!=d&&++o<i;){var v=(0,f.Z)(t[o]),h=r;if("__proto__"===v||"constructor"===v||"prototype"===v)return e;if(o!=l){var b=d[v];void 0===(h=n?n(b,v,d):void 0)&&(h=(0,s.Z)(b)?b:(0,c.Z)(t[o+1])?[]:{})}(0,a.Z)(d,v,h),d=d[v]}return e};var d=r(1325);const v=function(e,t){if(null==e)return{};var r=(0,n.Z)((0,d.Z)(e),(function(e){return[e]}));return t=(0,o.Z)(t),function(e,t,r){for(var n=-1,o=t.length,a={};++n<o;){var c=t[n],s=(0,i.Z)(e,c);r(s,c)&&l(a,(0,u.Z)(c,e),s)}return a}(e,r,(function(e,r){return t(e,r[0])}))}},7474:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(131),o=0;const i=function(e){var t=++o;return(0,n.Z)(e)+t}},5751:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(6205);var o=r(7106);const i=function(e,t){return t.length<2?e:(0,o.Z)(e,function(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+t];return i}(t,0,-1))};var a=r(199);const u=function(e,t){return null==e||function(e,t){return t=(0,n.Z)(t,e),null==(e=i(e,t))||delete e[(0,a.Z)((r=t,o=null==r?0:r.length,o?r[o-1]:void 0))];var r,o}(e,t)}},4126:(e,t,r)=>{r.d(t,{ZP:()=>c});var n=r(5776),o=r(1374),i=r(7381);const a=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((t=>{e.status="fulfilled",e.value=t}),(t=>{e.status="rejected",e.reason=t})),e)}),u={dedupe:!0},c=(i.OBJECT.defineProperty(i.SWRConfig,"defaultValue",{value:i.defaultConfig}),(0,i.withArgs)(((e,t,r)=>{const{cache:c,compare:s,suspense:f,fallbackData:l,revalidateOnMount:d,revalidateIfStale:v,refreshInterval:h,refreshWhenHidden:b,refreshWhenOffline:p,keepPreviousData:Z}=r,[g,y,w,E]=i.SWRGlobalState.get(c),[j,m]=(0,i.serialize)(e),V=(0,n.useRef)(!1),S=(0,n.useRef)(!1),C=(0,n.useRef)(j),A=(0,n.useRef)(t),x=(0,n.useRef)(r),O=()=>x.current,R=()=>O().isVisible()&&O().isOnline(),[U,_,T,I]=(0,i.createCacheHelper)(c,j),M=(0,n.useRef)({}).current,L=(0,i.isUndefined)(l)?r.fallback[j]:l,H=(e,t)=>{for(const r in M){const n=r;if("data"===n){if(!s(e[n],t[n])){if(!(0,i.isUndefined)(e[n]))return!1;if(!s(G,t[n]))return!1}}else if(t[n]!==e[n])return!1}return!0},D=(0,n.useMemo)((()=>{const e=!!j&&!!t&&((0,i.isUndefined)(d)?!O().isPaused()&&!f&&(!!(0,i.isUndefined)(v)||v):d),r=t=>{const r=(0,i.mergeObjects)(t);return delete r._k,e?{isValidating:!0,isLoading:!0,...r}:r},n=U(),o=I(),a=r(n),u=n===o?a:r(o);let c=a;return[()=>{const e=r(U());return H(e,c)?(c.data=e.data,c.isLoading=e.isLoading,c.isValidating=e.isValidating,c.error=e.error,c):(c=e,e)},()=>u]}),[c,j]),z=(0,o.useSyncExternalStore)((0,n.useCallback)((e=>T(j,((t,r)=>{H(r,t)||e()}))),[c,j]),D[0],D[1]),k=!V.current,F=g[j]&&g[j].length>0,N=z.data,P=(0,i.isUndefined)(N)?L:N,B=z.error,W=(0,n.useRef)(P),G=Z?(0,i.isUndefined)(N)?W.current:N:P,Y=!(F&&!(0,i.isUndefined)(B))&&(k&&!(0,i.isUndefined)(d)?d:!O().isPaused()&&(f?!(0,i.isUndefined)(P)&&v:(0,i.isUndefined)(P)||v)),q=!!(j&&t&&k&&Y),J=(0,i.isUndefined)(z.isValidating)?q:z.isValidating,$=(0,i.isUndefined)(z.isLoading)?q:z.isLoading,K=(0,n.useCallback)((async e=>{const t=A.current;if(!j||!t||S.current||O().isPaused())return!1;let n,o,a=!0;const u=e||{},c=!w[j]||!u.dedupe,f=()=>i.IS_REACT_LEGACY?!S.current&&j===C.current&&V.current:j===C.current,l={isValidating:!1,isLoading:!1},d=()=>{_(l)},v=()=>{const e=w[j];e&&e[1]===o&&delete w[j]},h={isValidating:!0};(0,i.isUndefined)(U().data)&&(h.isLoading=!0);try{if(c&&(_(h),r.loadingTimeout&&(0,i.isUndefined)(U().data)&&setTimeout((()=>{a&&f()&&O().onLoadingSlow(j,r)}),r.loadingTimeout),w[j]=[t(m),(0,i.getTimestamp)()]),[n,o]=w[j],n=await n,c&&setTimeout(v,r.dedupingInterval),!w[j]||w[j][1]!==o)return c&&f()&&O().onDiscarded(j),!1;l.error=i.UNDEFINED;const e=y[j];if(!(0,i.isUndefined)(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return d(),c&&f()&&O().onDiscarded(j),!1;const u=U().data;l.data=s(u,n)?u:n,c&&f()&&O().onSuccess(n,j,r)}catch(e){v();const t=O(),{shouldRetryOnError:r}=t;t.isPaused()||(l.error=e,c&&f()&&(t.onError(e,j,t),(!0===r||(0,i.isFunction)(r)&&r(e))&&R()&&t.onErrorRetry(e,j,t,(e=>{const t=g[j];t&&t[0]&&t[0](i.revalidateEvents.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return a=!1,d(),!0}),[j,c]),Q=(0,n.useCallback)(((...e)=>(0,i.internalMutate)(c,C.current,...e)),[]);if((0,i.useIsomorphicLayoutEffect)((()=>{A.current=t,x.current=r,(0,i.isUndefined)(N)||(W.current=N)})),(0,i.useIsomorphicLayoutEffect)((()=>{if(!j)return;const e=K.bind(i.UNDEFINED,u);let t=0;const r=(0,i.subscribeCallback)(j,g,((r,n={})=>{if(r==i.revalidateEvents.FOCUS_EVENT){const r=Date.now();O().revalidateOnFocus&&r>t&&R()&&(t=r+O().focusThrottleInterval,e())}else if(r==i.revalidateEvents.RECONNECT_EVENT)O().revalidateOnReconnect&&R()&&e();else{if(r==i.revalidateEvents.MUTATE_EVENT)return K();if(r==i.revalidateEvents.ERROR_REVALIDATE_EVENT)return K(n)}}));return S.current=!1,C.current=j,V.current=!0,_({_k:m}),Y&&((0,i.isUndefined)(P)||i.IS_SERVER?e():(0,i.rAF)(e)),()=>{S.current=!0,r()}}),[j]),(0,i.useIsomorphicLayoutEffect)((()=>{let e;function t(){const t=(0,i.isFunction)(h)?h(U().data):h;t&&-1!==e&&(e=setTimeout(r,t))}function r(){U().error||!b&&!O().isVisible()||!p&&!O().isOnline()?t():K(u).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[h,b,p,j]),(0,n.useDebugValue)(G),f&&(0,i.isUndefined)(P)&&j){if(!i.IS_REACT_LEGACY&&i.IS_SERVER)throw new Error("Fallback data is required when using suspense in SSR.");A.current=t,x.current=r,S.current=!1;const e=E[j];if(!(0,i.isUndefined)(e)){const t=Q(e);a(t)}if(!(0,i.isUndefined)(B))throw B;{const e=K(u);(0,i.isUndefined)(G)||(e.status="fulfilled",e.value=!0),a(e)}}return{mutate:Q,get data(){return M.data=!0,G},get error(){return M.error=!0,B},get isValidating(){return M.isValidating=!0,J},get isLoading(){return M.isLoading=!0,$}}})))},668:(e,t,r)=>{r.d(t,{oR:()=>a});var n=r(5776),o=r(5668);const{useSyncExternalStoreWithSelector:i}=o;function a(e,t=e.getState,r){const o=i(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return(0,n.useDebugValue)(o),o}}}]);