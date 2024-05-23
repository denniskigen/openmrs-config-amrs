"use strict";(globalThis.webpackChunk_openmrs_esm_service_queues_app=globalThis.webpackChunk_openmrs_esm_service_queues_app||[]).push([[328],{7615:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(272),a=i.n(n),r=i(2609),s=i.n(r)()(a());s.push([e.id,".-esm-service-queues__change-status-dialog__radioButtonGroup___Jd32q{display:flex;flex-direction:column;align-items:flex-start;margin-top:.5rem;min-height:4rem;width:100%;font-size:var(--cds-body-compact-01-font-size, 0.875rem);font-weight:var(--cds-body-compact-01-font-weight, 400);line-height:var(--cds-body-compact-01-line-height, 1.28572);letter-spacing:var(--cds-body-compact-01-letter-spacing, 0.16px)}.-esm-service-queues__change-status-dialog__radioButton___Bup2g{padding:.25rem .25rem;margin:.5rem 0}section{margin:.5rem}.-esm-service-queues__change-status-dialog__sectionTitle___O_pM_{font-size:var(--cds-heading-compact-02-font-size, 1rem);font-weight:var(--cds-heading-compact-02-font-weight, 600);line-height:var(--cds-heading-compact-02-line-height, 1.375);letter-spacing:var(--cds-heading-compact-02-letter-spacing, 0);color:#525252;margin-bottom:.75rem}.-esm-service-queues__change-status-dialog__modalBody___QBTTb{padding-bottom:1rem}.-esm-service-queues__change-status-dialog__inline___jvQZs{display:flex;align-items:center}.-esm-service-queues__change-status-dialog__loading___SOaka{margin-right:.25rem}.-esm-service-queues__change-status-dialog__error___pClKH{margin-top:.5rem;color:#da1e28;font-size:var(--cds-label-01-font-size, 0.75rem);font-weight:var(--cds-label-01-font-weight, 400);line-height:var(--cds-label-01-line-height, 1.33333);letter-spacing:var(--cds-label-01-letter-spacing, 0.32px)}","",{version:3,sources:["webpack://./src/active-visits/change-status-dialog.scss","webpack://./../../node_modules/@carbon/layout/scss/generated/_spacing.scss","webpack://./../../node_modules/@carbon/type/scss/_styles.scss","webpack://./../../node_modules/@carbon/colors/index.scss"],names:[],mappings:"AAIA,qEACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,gBCaW,CDZX,eC+CW,CD9CX,UAAA,CEw1BE,wDAAA,CAAA,uDAAA,CAAA,2DAAA,CAAA,gEAAA,CFp1BJ,gEACE,qBAAA,CACA,cAAA,CAGF,QACE,YCCW,CDEb,iEE20BI,uDAAA,CAAA,0DAAA,CAAA,4DAAA,CAAA,8DAAA,CFz0BF,aGuBQ,CHtBR,oBAAA,CAGF,8DACE,mBCCW,CDEb,2DACE,YAAA,CACA,kBAAA,CAGF,4DACE,mBCvBW,CD0Bb,0DACE,gBCtBW,CDuBX,aGqDO,CDiwBL,gDAAA,CAAA,gDAAA,CAAA,oDAAA,CAAA,yDAAA",sourceRoot:""}]),s.locals={radioButtonGroup:"-esm-service-queues__change-status-dialog__radioButtonGroup___Jd32q",radioButton:"-esm-service-queues__change-status-dialog__radioButton___Bup2g",sectionTitle:"-esm-service-queues__change-status-dialog__sectionTitle___O_pM_",modalBody:"-esm-service-queues__change-status-dialog__modalBody___QBTTb",inline:"-esm-service-queues__change-status-dialog__inline___jvQZs",loading:"-esm-service-queues__change-status-dialog__loading___SOaka",error:"-esm-service-queues__change-status-dialog__error___pClKH"};const o=s},328:(e,t,i)=>{i.r(t),i.d(t,{default:()=>D});var n=i(5206),a=i.n(n),r=i(8427),s=i(4924),o=i(2870),l=i(8053),u=i(1995),c=i(1354),d=i.n(c),m=i(1583),v=i.n(m),g=i(7378),_=i.n(g),A=i(5993),p=i.n(A),h=i(4154),C=i.n(h),E=i(8141),f=i.n(E),y=i(7615),q={};q.styleTagTransform=f(),q.setAttributes=p(),q.insert=_().bind(null,"head"),q.domAPI=v(),q.insertStyleElement=C(),d()(y.Z,q);const b=y.Z&&y.Z.locals?y.Z.locals:void 0;var B=i(2312),S=i(3955),x=i(195),k=i(8883),w=i(9561);const D=function(e){var t,i,c,d,m=e.queueEntry,v=e.closeModal,g=(0,s.useTranslation)().t,_=(0,o.useConfig)().concepts,A=null!==(d=m.queue)&&void 0!==d?d:{},p=A.allowedPriorities,h=A.allowedStatuses,C=(0,n.useMemo)((function(){return x.z.object({location:x.z.string({required_error:g("queueLocationRequired","Queue location is required")}),service:x.z.string({required_error:g("serviceIsRequired","Service is required")}),status:x.z.string({required_error:g("serviceIsRequired","Status is required")}),priority:x.z.string({required_error:g("priorityIsRequired","Priority is required")})})}),[]),E=(0,S.cI)({defaultValues:{priority:null===(t=p[1])||void 0===t?void 0:t.uuid},resolver:(0,k.F)(C)}),f=E.control,y=E.handleSubmit,q=E.formState,D=q.isSubmitting,Q=q.errors,T=E.getValues,F=(0,B.y)(null==m?void 0:m.queueLocation).queues,N=(0,u.J)().queueLocations,z=(0,w.Q)().mutateQueueEntries;return 0===(null===(i=Object.keys(m))||void 0===i?void 0:i.length)?a().createElement(r.xBx,{closeModal:v,title:g("patientNotInQueue","The patient is not in the queue")}):(null===(c=Object.keys(m))||void 0===c?void 0:c.length)>0?a().createElement("div",null,a().createElement(r.l09,{onSubmit:y((function(e){var t,i=e.priority,n=e.status,a=e.service,r=_.defaultPriorityConceptUuid,s=""===i?r:i,u=i===_.emergencyPriorityConceptUuid?1:0,c=new Date;(0,l.zI)(null==m?void 0:m.visitUuid,null==m||null===(t=m.queue)||void 0===t?void 0:t.uuid,a,null==m?void 0:m.queueEntryUuid,null==m?void 0:m.patientUuid,s,n,c,u).then((function(e){201===e.status&&((0,o.showSnackbar)({isLowContrast:!0,title:g("updateEntry","Update entry"),kind:"success",subtitle:g("queueEntryUpdateSuccessfully","Queue Entry Updated Successfully")}),v(),z(),(0,o.navigate)({to:"".concat(window.spaBase,"/home/service-queues")}))}),(function(e){(0,o.showSnackbar)({title:g("queueEntryStatusUpdateFailed","Error updating queue entry status"),kind:"error",subtitle:null==e?void 0:e.message})}))}),(function(e){return console.error(e)}))},a().createElement(r.xBx,{closeModal:v,title:g("movePatientToNextService","Move patient to the next service?")}),a().createElement(r.fef,null,a().createElement("div",{className:b.modalBody},a().createElement("h5",null,m.name,"   ·  ",m.patientSex,"   ·  ",m.patientAge," ",g("years","Years"))),a().createElement("section",null,a().createElement(S.Qr,{name:"location",control:f,render:function(e){var t,i,n=e.field,s=n.onChange,o=n.value;return a().createElement(r.PhF,{labelText:g("selectQueueLocation","Select a queue location"),id:"location",invalid:!!Q.location,invalidText:null===(t=Q.location)||void 0===t?void 0:t.message,value:o,onChange:function(e){s(e.target.value)}},!(null===(i=T())||void 0===i?void 0:i.location)&&a().createElement(r.QlF,{text:g("selectQueueLocation","Select a queue location"),value:""}),(null==N?void 0:N.length)>0&&N.map((function(e){return a().createElement(r.QlF,{key:e.id,text:e.name,value:e.id},e.name)})))}})),a().createElement("section",{className:b.section},a().createElement("div",{className:b.sectionTitle},g("queueService","Queue service")),a().createElement(S.Qr,{name:"service",control:f,render:function(e){var t,i,n=e.field,s=n.onChange,o=n.value;return a().createElement(r.PhF,{labelText:g("selectService","Select a service"),id:"service",invalid:!!Q.service,invalidText:null===(t=Q.service)||void 0===t?void 0:t.message,value:o,onChange:function(e){return s(e.target.value)}},!(null===(i=T())||void 0===i?void 0:i.service)&&a().createElement(r.QlF,{text:g("selectService","Select a service"),value:""}),(null==F?void 0:F.length)>0&&F.map((function(e){return a().createElement(r.QlF,{key:e.uuid,text:e.display,value:e.uuid},e.display)})))}})),a().createElement("section",{className:b.section},a().createElement("div",{className:b.sectionTitle},g("queueStatus","Queue status")),(null==h?void 0:h.length)?a().createElement(S.Qr,{name:"status",control:f,render:function(e){var t,i=e.field,n=i.value,s=i.onChange;return a().createElement(r.SYO,{className:b.radioButtonWrapper,name:"status",invalid:!!Q.status,invalidText:null===(t=Q.status)||void 0===t?void 0:t.message,defaultSelected:n,onChange:function(e){s(e)}},(null==h?void 0:h.length)>0&&h.map((function(e){var t=e.uuid,i=e.display;return a().createElement(r.EUY,{key:t,labelText:i,value:t})})))}}):a().createElement(r.K0D,{className:b.inlineNotification,kind:"error",lowContrast:!0,subtitle:g("configureStatus","Please configure status to continue."),title:g("noStatusConfigured","No status configured")})),a().createElement("section",{className:b.section},a().createElement("div",{className:b.sectionTitle},g("queuePriority","Queue priority")),a().createElement(S.Qr,{control:f,name:"priority",render:function(e){var t=e.field.onChange;return a().createElement(a().Fragment,null,a().createElement(r.GHR,{size:"sm",selectedIndex:1,onChange:function(e){t(e.name)}},(null==p?void 0:p.length)>0?p.map((function(e){var t=e.uuid,i=e.display;return a().createElement(r.rsf,{name:t,text:i,key:t,value:t})})):a().createElement(r.rsf,{name:g("noPriorityFound","No priority found"),text:g("noPriorityFound","No priority found"),value:null})),Q.priority&&a().createElement("div",{className:b.error},Q.priority.message))}}))),a().createElement(r.mzw,null,a().createElement(r.zxk,{kind:"secondary",onClick:v},g("cancel","Cancel")),a().createElement(r.zxk,{disabled:D,type:"submit"},a().createElement(a().Fragment,null,D?a().createElement("div",{className:b.inline},a().createElement(r.lSo,{status:"active",iconDescription:g("submitting","Submitting"),description:g("submitting","Submitting...")})):g("moveToNextService","Move to next service")))))):void 0}}}]);