"use strict";(globalThis.webpackChunk_openmrs_esm_appointments_app=globalThis.webpackChunk_openmrs_esm_appointments_app||[]).push([[4],{4:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(268),o=n.n(r),a=n(4924),l=n(5368),i=n(2870),c=n(8527);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t,n,r,o,a,l){try{var i=e[a](l),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}const p=function(e){var t,n,p,f,m=e.closeCancelModal,d=e.appointmentUuid,h=e.patientUuid,y=(0,a.useTranslation)().t,b=(0,c.W)(h,(new Date).toUTCString(),new AbortController).mutate,v=(p=(0,r.useState)(!1),f=2,function(e){if(Array.isArray(e))return e}(p)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(p,f)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(p,f)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),w=v[0],k=v[1],C=(t=function(){return function(e,t){var n,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!((o=(o=l.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}(this,(function(e){return k(!0),(0,c.q)("Cancelled",d).then((function(e){200===e.status&&(b(),m(),(0,i.showSnackbar)({isLowContrast:!0,kind:"success",subtitle:y("appointmentCancelledSuccessfully","Appointment cancelled successfully"),title:y("appointmentCancelled","Appointment cancelled")}))})).catch((function(e){(0,i.showSnackbar)({title:y("appointmentCancelError","Error cancelling appointment"),kind:"error",isLowContrast:!0,subtitle:null==e?void 0:e.message})})),[2]}))},n=function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function l(e){s(a,r,o,l,i,"next",e)}function i(e){s(a,r,o,l,i,"throw",e)}l(void 0)}))},function(){return n.apply(this,arguments)});return o().createElement("div",null,o().createElement(l.xBx,{closeModal:m,title:y("cancelAppointment","Cancel appointment")}),o().createElement(l.fef,null,o().createElement("p",null,y("cancelAppointmentModalConfirmationText","Are you sure you want to cancel this appointment?"))),o().createElement(l.mzw,null,o().createElement(l.zxk,{kind:"secondary",onClick:m},y("discard","Discard")),o().createElement(l.zxk,{kind:"danger",onClick:C,disabled:w},y("cancelAppointment","Cancel appointment"))))}}}]);