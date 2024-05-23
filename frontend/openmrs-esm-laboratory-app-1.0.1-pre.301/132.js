"use strict";(globalThis.webpackChunk_openmrs_esm_laboratory_app=globalThis.webpackChunk_openmrs_esm_laboratory_app||[]).push([[132],{7132:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(7244),l=r.n(n),o=r(4652),a=r(6612),i=r(8704),u=r(4708);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const c=function(e){var t,r,c=e.order,d=e.closeModal,f=(0,o.useTranslation)().t,p=(t=(0,n.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){i=!0,l=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw l}}return o}}(t,r)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=p[0],y=p[1],h=(0,a.A5)().mutate,b=(0,i.useAbortController)();return l().createElement("div",null,l().createElement(u.kPY,{closeModal:d,title:f("pickRequest","Pick Lab Request")}),l().createElement(u.aUI,null,l().createElement("p",null,f("pickRequestConfirmationText",'Continuing will update the request status to "In Progress" and advance it to the next stage. Are you sure you want to proceed?'))),l().createElement(u._AC,null,l().createElement(u.qaq,{kind:"secondary",onClick:d},f("discard","Discard")),l().createElement(u.qaq,{type:"submit",onClick:function(){y(!0),(0,a._u)(c.uuid,"IN_PROGRESS",b).then((function(){h(),y(!1),d(),(0,i.showSnackbar)({isLowContrast:!0,title:f("pickedAnOrder","Picked an order"),kind:"success",subtitle:f("orderPickedSuccessfully","You have successfully picked an order")})}),(function(e){y(!1),(0,i.showNotification)({title:f("errorPickingAnOrder', 'Error picking an order"),kind:"error",critical:!0,description:null==e?void 0:e.message})}))},disabled:m},f("pickupLabRequest","Pickup Lab Request"))))}},6612:(e,t,r)=>{r.d(t,{A5:()=>a,E9:()=>u,_u:()=>i});var n=r(8704),l=r(4072),o=r(7244);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=(0,n.useConfig)().laboratoryOrderTypeUuid,a=(0,o.useMemo)((function(){return"NEW"===e?null:e}),[e]),i="NEW"===e,u="".concat(n.restBaseUrl,"/order?orderTypes=").concat(r,"&v=full");u=a?u+"&fulfillerStatus=".concat(a):u,u=t?"".concat(u,"&excludeCanceledAndExpired=true&excludeDiscontinueOrders=true"):u;var s=e?5e3:null,c=(0,l.cp)(u,n.openmrsFetch,{refreshInterval:s}),d=c.data,f=c.error,p=c.mutate,m=c.isLoading;return{labOrders:(null==d?void 0:d.data)&&i&&d.data.results.filter((function(e){return"NEW"===(null==e?void 0:e.action)&&null===(null==e?void 0:e.fulfillerStatus)}))||(null==d?void 0:d.data.results)||[],isLoading:m,isError:f,mutate:p}}function i(e,t,r){return(0,n.openmrsFetch)("".concat(n.restBaseUrl,"/order/").concat(e,"/fulfillerdetails/"),{method:"POST",headers:{"Content-Type":"application/json"},signal:r.signal,body:{fulfillerStatus:t}})}function u(e,t,r){return(0,n.openmrsFetch)("".concat(n.restBaseUrl,"/order/").concat(e,"/fulfillerdetails/"),{method:"POST",headers:{"Content-Type":"application/json"},signal:r.signal,body:{fulfillerStatus:"DECLINED",fulfillerComment:t}})}}}]);