"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[4502,7710],{57989:(e,t,l)=>{function n(e){return e=e||globalThis.location.hostname,i.some((t=>null!=e?.match(t)))}function a(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(r)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(o)||null!=t.match(m)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}l.d(t,{XO:()=>n,pJ:()=>a});const r=/^devext.arcgis.com$/,o=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,m=/^[\w-]*\.mapsqa.arcgis.com$/,i=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,r,o,/^jsapps.esri.com$/,s,m]},77710:(e,t,l)=>{l.r(t),l.d(t,{fetchSymbolFromStyle:()=>p,getStyleItemFromStyle:()=>b,resolveWebStyleSymbol:()=>f});var n=l(4905),a=l(57989),r=l(70375),o=l(3466),s=l(93968),m=l(16641),i=l(47308),c=l(85068),u=l(11644),y=l(3032);function f(e,t,l,n){const a=e.name;return null==a?Promise.reject(new r.Z("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,l){const n=u.wm.replaceAll(/\{SymbolName\}/gi,e),a=null!=t.portal?t.portal:s.Z.getDefault();return(0,u.EJ)(n,l).then((e=>{const t=(0,u.KV)(e.data);return(0,i.im)(t,{portal:a,url:(0,o.mN)((0,o.Yd)(n)),origin:"portal-item"})}))}(a,t,n):(0,u.n2)(e,t,n).then((e=>p(e,a,t,l,u.v9,n)))}function b(e,t){return t.items.find((t=>t.name===e))}function p(e,t,l,f,p,g){const h=null!=l?.portal?l.portal:s.Z.getDefault(),d={portal:h,url:(0,o.mN)(e.baseUrl),origin:"portal-item"},w=b(t,e.data);if(!w){const e=`The symbol name '${t}' could not be found`;return Promise.reject(new r.Z("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let N=(0,m.f)(p(w,f),d),S=w.thumbnail?.href??null;const v=w.thumbnail?.imageData;(0,a.XO)()&&(N=(0,a.pJ)(N)??"",S=(0,a.pJ)(S));const Z={portal:h,url:(0,o.mN)((0,o.Yd)(N)),origin:"portal-item"};return(0,u.EJ)(N,g).then((a=>{const r="cimRef"===f?(0,u.KV)(a.data):a.data,o=(0,i.im)(r,Z);if(o&&(0,n.dU)(o)){if(S){const e=(0,m.f)(S,d);o.thumbnail=new y.p({url:e})}else v&&(o.thumbnail=new y.p({url:`data:image/png;base64,${v}`}));e.styleUrl?o.styleOrigin=new c.Z({portal:l.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(o.styleOrigin=new c.Z({portal:l.portal,styleName:e.styleName,name:t}))}return o}))}},34502:(e,t,l)=>{l.r(t),l.d(t,{fetchCIMSymbolReference:()=>u});var n=l(57989),a=l(70375),r=l(33926),o=l(3466),s=l(93968),m=l(16641),i=l(11644),c=l(77710);async function u(e,t,l){if(!e.name)throw new a.Z("style-symbol-reference-name-missing","Missing name in style symbol reference");if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return async function(e,t){const l=i.wm.replaceAll(/\{SymbolName\}/gi,e.name);try{const e=await(0,i.EJ)(l,t);return(0,i.KV)(e.data)}catch(e){return(0,r.r9)(e),null}}(e,l);try{return async function(e,t,l,u){const y={portal:null!=l?.portal?l.portal:s.Z.getDefault(),url:(0,o.mN)(e.baseUrl),origin:"portal-item"},f=(0,c.getStyleItemFromStyle)(t,e.data);if(!f)throw new a.Z("symbolstyleutils:symbol-name-not-found",`The symbol name '${t}' could not be found`,{symbolName:t});let b=(0,m.f)((0,i.v9)(f,"cimRef"),y);(0,n.XO)()&&(b=(0,n.pJ)(b));try{const e=await(0,i.EJ)(b,u);return(0,i.KV)(e.data)}catch(e){return(0,r.r9)(e),null}}(await(0,i.n2)(e,t,l),e.name,t,l)}catch(e){return(0,r.r9)(e),null}}}}]);