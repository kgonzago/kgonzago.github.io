"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[3667],{13667:(e,r,t)=>{t.r(r),t.d(r,{createLabelFunction:()=>w,formatField:()=>b});var n=t(70375),a=t(13802),l=t(84684),u=t(72057),i=t(25741),o=t(79616),s=t(14845),c=t(1110),f=t(30879);const d=a.Z.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},h={getAttribute:(e,r)=>e.field(r)};async function w(e,r,t){if(!e||!e.symbol||!r)return p;const a=e.where,u=(0,c.hV)(e);let i;if("arcade"===u.type){const e=await(0,f.WW)(u.expression,t,r);if(null==e)return p;i={type:"arcade",evaluate(r,t){try{const n="attributes"in r?e.repurposeFeature(r):r;n.contextTimeZone=t??null;const a=e.evaluate({$view:{timeZone:t},$feature:n},e.services);if(null!=a)return a.toString()}catch(e){d.error(new n.Z("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:e,feature:r,expression:u}))}return null},needsHydrationToEvaluate:()=>null==(0,c.el)(u.expression)}}else i={type:"simple",evaluate:e=>u.expression.replaceAll(/{[^}]*}/g,(t=>{const n=t.slice(1,-1),a=r.get(n);if(!a)return t;let l=null;return"attributes"in e?e&&e.attributes&&(l=e.attributes[a.name]):l=e.field(a.name),null==l?"":b(l,a)}))};if(a){let e;try{e=await(0,l.E)(a,r)}catch(e){return d.error(new n.Z("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:a,error:e})),p}const t=i.evaluate;i.evaluate=(r,l)=>{const u="attributes"in r?void 0:h;try{if(e.testFeature(r,u))return t(r,l)}catch(e){d.error(new n.Z("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:a,feature:r,error:e}))}return null}}return i}function b(e,r){if(null==e)return"";const t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const r=e;for(const e of t.codedValues)if(e.code===r)return e.name}else if("range"===t.type){const{max:n,min:a}=(0,o.D3)(r),l=+e;if(null!=a&&null!=n&&a<=l&&l<=n)return t.name}let n=e;return(0,s.y2)(r)?n=(0,u.p6)(n,(0,u.Ze)("short-date")):(0,s.H7)(r)&&(n=(0,i.uf)(+n)),n||""}}}]);