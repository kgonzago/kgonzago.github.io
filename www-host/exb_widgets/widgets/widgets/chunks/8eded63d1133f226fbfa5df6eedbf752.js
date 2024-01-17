"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[8797],{5992:(t,e,r)=>{r.d(e,{e:()=>u});var n,i,o,s=r(58340),x={exports:{}};n=x,i=function(){function t(t,r,i){i=i||2;var o,s,x,a,h,l,f,y=r&&r.length,c=y?r[0]*i:t.length,v=e(t,0,c,i,!0),_=[];if(!v||v.next===v.prev)return _;if(y&&(v=u(t,r,v,i)),t.length>80*i){o=x=t[0],s=a=t[1];for(var d=i;d<c;d+=i)(h=t[d])<o&&(o=h),(l=t[d+1])<s&&(s=l),h>x&&(x=h),l>a&&(a=l);f=0!==(f=Math.max(x-o,a-s))?1/f:0}return n(v,_,i,o,s,f),_}function e(t,e,r,n,i){var o,s;if(i===B(t,e,r,n)>0)for(o=e;o<r;o+=n)s=b(o,t[o],t[o+1],s);else for(o=r-n;o>=e;o-=n)s=b(o,t[o],t[o+1],s);if(s&&p(s,s.next)){var x=s.next;R(s),s=x}return s}function r(t,e){if(!t)return t;e||(e=t);var r,n=t;do{if(r=!1,n.steiner||!p(n,n.next)&&0!==T(n.prev,n,n.next))n=n.next;else{var i=n.prev;if(R(n),(n=e=i)===n.next)break;r=!0}}while(r||n!==e);return e}function n(t,e,u,a,h,l,f){if(t){!f&&l&&y(t,a,h,l);for(var c,v,_=t;t.prev!==t.next;)if(c=t.prev,v=t.next,l?o(t,a,h,l):i(t))e.push(c.i/u),e.push(t.i/u),e.push(v.i/u),R(t),t=v.next,_=v.next;else if((t=v)===_){f?1===f?n(t=s(r(t),e,u),e,u,a,h,l,2):2===f&&x(t,e,u,a,h,l):n(r(t),e,u,a,h,l,1);break}}}function i(t){var e=t.prev,r=t,n=t.next;if(T(e,r,n)>=0)return!1;for(var i=t.next.next;i!==t.prev;){if(_(e.x,e.y,r.x,r.y,n.x,n.y,i.x,i.y)&&T(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function o(t,e,r,n){var i=t.prev,o=t,s=t.next;if(T(i,o,s)>=0)return!1;for(var x=i.x<o.x?i.x<s.x?i.x:s.x:o.x<s.x?o.x:s.x,u=i.y<o.y?i.y<s.y?i.y:s.y:o.y<s.y?o.y:s.y,a=i.x>o.x?i.x>s.x?i.x:s.x:o.x>s.x?o.x:s.x,h=i.y>o.y?i.y>s.y?i.y:s.y:o.y>s.y?o.y:s.y,l=c(x,u,e,r,n),f=c(a,h,e,r,n),y=t.prevZ,v=t.nextZ;y&&y.z>=l&&v&&v.z<=f;){if(y!==t.prev&&y!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,y.x,y.y)&&T(y.prev,y,y.next)>=0)return!1;if(y=y.prevZ,v!==t.prev&&v!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,v.x,v.y)&&T(v.prev,v,v.next)>=0)return!1;v=v.nextZ}for(;y&&y.z>=l;){if(y!==t.prev&&y!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,y.x,y.y)&&T(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=f;){if(v!==t.prev&&v!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,v.x,v.y)&&T(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function s(t,e,n){var i=t;do{var o=i.prev,s=i.next.next;!p(o,s)&&g(o,i,i.next,s)&&w(o,s)&&w(s,o)&&(e.push(o.i/n),e.push(i.i/n),e.push(s.i/n),R(i),R(i.next),i=t=s),i=i.next}while(i!==t);return r(i)}function x(t,e,i,o,s,x){var u=t;do{for(var a=u.next.next;a!==u.prev;){if(u.i!==a.i&&d(u,a)){var h=m(u,a);return u=r(u,u.next),h=r(h,h.next),n(u,e,i,o,s,x),void n(h,e,i,o,s,x)}a=a.next}u=u.next}while(u!==t)}function u(t,n,i,o){var s,x,u,h=[];for(s=0,x=n.length;s<x;s++)(u=e(t,n[s]*o,s<x-1?n[s+1]*o:t.length,o,!1))===u.next&&(u.steiner=!0),h.push(v(u));for(h.sort(a),s=0;s<h.length;s++)i=r(i=l(h[s],i),i.next);return i}function a(t,e){return t.x-e.x}function h(t){if(t.next.prev===t)return t;let e=t;for(;;){const r=e.next;if(r.prev===e||r===e||r===t)break;e=r}return e}function l(t,e){var n=function(t,e){var r,n=e,i=t.x,o=t.y,s=-1/0;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){var x=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(x<=i&&x>s){if(s=x,x===i){if(o===n.y)return n;if(o===n.next.y)return n.next}r=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!r)return null;if(i===s)return r;var u,a=r,h=r.x,l=r.y,y=1/0;n=r;do{i>=n.x&&n.x>=h&&i!==n.x&&_(o<l?i:s,o,h,l,o<l?s:i,o,n.x,n.y)&&(u=Math.abs(o-n.y)/(i-n.x),w(n,t)&&(u<y||u===y&&(n.x>r.x||n.x===r.x&&f(r,n)))&&(r=n,y=u)),n=n.next}while(n!==a);return r}(t,e);if(!n)return e;var i=m(n,t),o=r(n,n.next);let s=h(i);return r(s,s.next),o=h(o),h(e===n?o:e)}function f(t,e){return T(t.prev,t,e.prev)<0&&T(e.next,t,t.next)<0}function y(t,e,r,n){var i=t;do{null===i.z&&(i.z=c(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,r,n,i,o,s,x,u,a=1;do{for(r=t,t=null,o=null,s=0;r;){for(s++,n=r,x=0,e=0;e<a&&(x++,n=n.nextZ);e++);for(u=a;x>0||u>0&&n;)0!==x&&(0===u||!n||r.z<=n.z)?(i=r,r=r.nextZ,x--):(i=n,n=n.nextZ,u--),o?o.nextZ=i:t=i,i.prevZ=o,o=i;r=n}o.nextZ=null,a*=2}while(s>1)}(i)}function c(t,e,r,n,i){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function v(t){var e=t,r=t;do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next}while(e!==t);return r}function _(t,e,r,n,i,o,s,x){return(i-s)*(e-x)-(t-s)*(o-x)>=0&&(t-s)*(n-x)-(r-s)*(e-x)>=0&&(r-s)*(o-x)-(i-s)*(n-x)>=0}function d(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&g(r,r.next,t,e))return!0;r=r.next}while(r!==t);return!1}(t,e)&&(w(t,e)&&w(e,t)&&function(t,e){var r=t,n=!1,i=(t.x+e.x)/2,o=(t.y+e.y)/2;do{r.y>o!=r.next.y>o&&r.next.y!==r.y&&i<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next}while(r!==t);return n}(t,e)&&(T(t.prev,t,e.prev)||T(t,e.prev,e))||p(t,e)&&T(t.prev,t,t.next)>0&&T(e.prev,e,e.next)>0)}function T(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function p(t,e){return t.x===e.x&&t.y===e.y}function g(t,e,r,n){var i=L(T(t,e,r)),o=L(T(t,e,n)),s=L(T(r,n,t)),x=L(T(r,n,e));return i!==o&&s!==x||!(0!==i||!A(t,r,e))||!(0!==o||!A(t,n,e))||!(0!==s||!A(r,t,n))||!(0!==x||!A(r,e,n))}function A(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function L(t){return t>0?1:t<0?-1:0}function w(t,e){return T(t.prev,t,t.next)<0?T(t,e,t.next)>=0&&T(t,t.prev,e)>=0:T(t,e,t.prev)<0||T(t,t.next,e)<0}function m(t,e){var r=new U(t.i,t.x,t.y),n=new U(e.i,e.x,e.y),i=t.next,o=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,o.next=n,n.prev=o,n}function b(t,e,r,n){var i=new U(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function R(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function U(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function B(t,e,r,n){for(var i=0,o=e,s=r-n;o<r;o+=n)i+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return i}return t.deviation=function(t,e,r,n){var i=e&&e.length,o=i?e[0]*r:t.length,s=Math.abs(B(t,0,o,r));if(i)for(var x=0,u=e.length;x<u;x++){var a=e[x]*r,h=x<u-1?e[x+1]*r:t.length;s-=Math.abs(B(t,a,h,r))}var l=0;for(x=0;x<n.length;x+=3){var f=n[x]*r,y=n[x+1]*r,c=n[x+2]*r;l+=Math.abs((t[f]-t[c])*(t[y+1]-t[f+1])-(t[f]-t[y])*(t[c+1]-t[f+1]))}return 0===s&&0===l?0:Math.abs((l-s)/s)},t.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var s=0;s<e;s++)r.vertices.push(t[i][o][s]);i>0&&(n+=t[i-1].length,r.holes.push(n))}return r},t},void 0!==(o=i())&&(n.exports=o);const u=(0,s.g)(x.exports)},11026:(t,e,r)=>{r.d(e,{Z:()=>b});const n=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],i=["آ","أ","إ","ا"],o=["ﻵ","ﻷ","ﻹ","ﻻ"],s=["ﻶ","ﻸ","ﻺ","ﻼ"],x=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ"],u=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺉ","ﺅ"],a=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺊ","ﺆ"],h=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ","ﺌ","ﺆ"],l=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺋ","ﺅ"],f=["ء","آ","أ","ؤ","إ","ا","ة","د","ذ","ر","ز","و","ى"],y=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],c=["ء","ف"],v=["غ","ي"],_=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],d=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],T=10,p=11,g=12,A=18,L=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],w=[100,0,0,0,0,101,102,103,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,4,4,4,0,4,0,4,0,4,4,4,0,0,4,4,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,105,7,7,106,107],m=[[A,A,A,A,A,A,A,A,A,6,5,6,8,5,A,A,A,A,A,A,A,A,A,A,A,A,A,A,5,5,5,6,8,4,4,p,p,p,4,4,4,4,4,T,9,T,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,A,A,A,A,A,A,5,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,9,4,p,p,p,p,4,4,4,4,0,4,4,A,4,4,p,p,2,2,4,0,4,4,4,2,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,4,4,4,4,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,1,g,1,g,g,1,g,g,1,g,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4],[3,3,3,3,4,4,4,4,7,p,p,7,9,7,4,4,g,g,g,g,g,g,g,g,g,g,g,7,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,3,3,3,3,3,3,3,3,3,3,p,3,3,7,7,7,g,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,g,g,g,g,g,g,g,3,4,g,g,g,g,g,g,7,7,g,g,4,g,g,g,g,7,7,2,2,2,2,2,2,2,2,2,2,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,7,7,g,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,g,g,g,g,g,g,g,g,g,g,g,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,g,g,g,g,g,g,g,g,g,1,1,4,4,4,4,1,4,4,4,4,4],[8,8,8,8,8,8,8,8,8,8,8,A,A,A,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,5,13,14,15,16,17,9,p,p,p,p,p,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,A,A,A,A,A,4,4,4,4,4,A,A,A,A,A,A,2,0,4,4,2,2,2,2,2,2,T,T,4,4,4,0,2,2,2,2,2,2,2,2,2,2,T,T,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,4,4,4,4,4,1,g,1,1,1,1,1,1,1,1,1,1,T,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,4,1,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,g,g,g,g,g,g,g,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,9,4,4,9,4,4,4,4,4,4,4,4,4,p,4,4,T,T,4,4,4,4,4,p,p,4,4,4,4,4,7,7,7,7,7,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,A],[4,4,4,p,p,p,4,4,4,4,4,T,9,T,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,4,4,4,p,p,4,4,4,p,p,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]];class b{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(t,e,r){if(this.sourceToTarget=[],this.targetToSource=[],!t)return"";if(function(t,e,r){q=[],X=[];for(let n=0;n<r;n++)t[n]=n,e[n]=n,q[n]=n}(this.sourceToTarget,this.targetToSource,t.length),!this.checkParameters(e,r))return t;e=this.inputFormat,r=this.outputFormat;let n=t;const x=$,h=H(e.charAt(1)),f=H(r.charAt(1)),c=("I"===e.charAt(0)?"L":e.charAt(0))+h,v=("I"===r.charAt(0)?"L":r.charAt(0))+f,_=e.charAt(2)+r.charAt(2);x.defInFormat=c,x.defOutFormat=v,x.defSwap=_;const d=R(t,c,v,_,x);let T=!1;return"R"===r.charAt(1)?T=!0:"C"!==r.charAt(1)&&"D"!==r.charAt(1)||(T="rtl"===this.checkContextual(d)),this.sourceToTarget=q,this.targetToSource=function(t){const e=new Array(t.length);for(let r=0;r<t.length;r++)e[t[r]]=r;return e}(this.sourceToTarget),Q=this.targetToSource,n=e.charAt(3)===r.charAt(3)?d:"S"===r.charAt(3)?function(t,e,r){if(0===e.length)return"";void 0===t&&(t=!0),void 0===r&&(r=!0);const n=(e=String(e)).split("");let i=0,x=1,h=n.length;t||(i=n.length-1,x=-1,h=1);const f=function(t,e,r,n,i){let x=0;const h=[];let f=0;for(let y=e;y*r<n;y+=r)if(E(t[y])||j(t[y])){if("ل"===t[y]&&Z(t,y+r,r,n)){t[y]=W(t[y+r],0===x?o:s),y+=r,P(t,y,r,n),i&&(h[f]=y,f++),x=0;continue}const e=t[y];1===x?t[y]=M(t,y+r,r,n)?z(t[y]):I(t[y],a):!0===M(t,y+r,r,n)?t[y]=I(t[y],l):t[y]=I(t[y],u),j(e)||(x=1),!0===O(e)&&(x=0)}else x=0;return h}(n,i,x,h,r);let y="";for(let e=0;e<n.length;e++)r&&S(f,f.length,e)>-1?(Y(Q,e,!t,-1),q.splice(e,1)):y+=n[e];return y}(T,d,!0):function(t,e,r){if(0===t.length)return"";void 0===r&&(r=!0),void 0===e&&(e=!0);let n="";const o=(t=String(t)).split("");for(let s=0;s<t.length;s++){let x=!1;if(o[s]>="ﹰ"&&o[s]<"\ufeff"){const u=t.charCodeAt(s);o[s]>="ﻵ"&&o[s]<="ﻼ"?(e?(s>0&&r&&" "===o[s-1]?n=n.substring(0,n.length-1)+"ل":(n+="ل",x=!0),n+=i[(u-65269)/2]):(n+=i[(u-65269)/2],n+="ل",s+1<t.length&&r&&" "===o[s+1]?s++:x=!0),x&&(Y(Q,s,!0,1),q.splice(s,0,q[s]))):n+=y[u-65136]}else n+=o[s]}return n}(d,T,!0),this.sourceToTarget=q,this.targetToSource=Q,this.levels=X,n}_inputFormatSetter(t){if(!et.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=t}_outputFormatSetter(t){if(!et.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=t}checkParameters(t,e){return t?this._inputFormatSetter(t):t=this.inputFormat,e?this._outputFormatSetter(e):e=this.outputFormat,t!==e}checkContextual(t){let e=U(t);if("ltr"!==e&&"rtl"!==e){try{e=document.dir.toLowerCase()}catch(t){}"ltr"!==e&&"rtl"!==e&&(e="ltr")}return e}hasBidiChar(t){return rt.test(t)}}function R(t,e,r,n,i){const o=function(t,e,r){if(void 0===e.inFormat&&(e.inFormat=r.defInFormat),void 0===e.outFormat&&(e.outFormat=r.defOutFormat),void 0===e.swap&&(e.swap=r.defSwap),e.inFormat===e.outFormat)return e;const n=e.inFormat.substring(0,1),i=e.outFormat.substring(0,1);let o,s=e.inFormat.substring(1,4),x=e.outFormat.substring(1,4);return"C"===s.charAt(0)&&(o=U(t),s="ltr"===o||"rtl"===o?o.toUpperCase():"L"===e.inFormat.charAt(2)?"LTR":"RTL",e.inFormat=n+s),"C"===x.charAt(0)&&(o=U(t),"rtl"===o?x="RTL":"ltr"===o?(o=function(t){const e=t.split("");return e.reverse(),U(e.join(""))}(t),x=o.toUpperCase()):x="L"===e.outFormat.charAt(2)?"LTR":"RTL",e.outFormat=i+x),e}(t,{inFormat:e,outFormat:r,swap:n},i);if(o.inFormat===o.outFormat)return t;e=o.inFormat,r=o.outFormat,n=o.swap;const s=e.substring(0,1),x=e.substring(1,4),u=r.substring(0,1),a=r.substring(1,4);if(i.inFormat=e,i.outFormat=r,i.swap=n,"L"===s&&"VLTR"===r){if("LTR"===x)return i.dir=K,B(t,i);if("RTL"===x)return i.dir=tt,B(t,i)}if("V"===s&&"V"===u)return i.dir="RTL"===x?tt:K,V(t,i);if("L"===s&&"VRTL"===r)return"LTR"===x?(i.dir=K,t=B(t,i)):(i.dir=tt,t=B(t,i)),V(t);if("VLTR"===e&&"LLTR"===r)return i.dir=K,B(t,i);if("V"===s&&"L"===u&&x!==a)return t=V(t),"RTL"===x?R(t,"LLTR","VLTR",n,i):R(t,"LRTL","VRTL",n,i);if("VRTL"===e&&"LRTL"===r)return R(t,"LRTL","VRTL",n,i);if("L"===s&&"L"===u){const e=i.swap;return i.swap=e.substr(0,1)+"N","RTL"===x?(i.dir=tt,t=B(t,i),i.swap="N"+e.substr(1,2),i.dir=K,t=B(t,i)):(i.dir=K,t=B(t,i),i.swap="N"+e.substr(1,2),t=R(t,"VLTR","LRTL",i.swap,i)),t}return t}function U(t){const e=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t);return e?e[0]<="z"?"ltr":"rtl":""}function B(t,e){const r=t.split(""),n=[];return N(r,n,e),function(t,e,r){if(0!==r.hiLevel&&r.swap.substr(0,1)!==r.swap.substr(1,2))for(let r=0;r<t.length;r++)1===e[r]&&(t[r]=D(t[r]))}(r,n,e),k(2,r,n,e),k(1,r,n,e),X=n,r.join("")}function N(t,e,r){const n=t.length,i=r.dir?d:_;let o=0,s=-1;const x=[],u=[];r.hiLevel=r.dir,r.lastArabic=!1,r.hasUbatAl=!1,r.hasUbatB=!1,r.hasUbatS=!1;for(let e=0;e<n;e++)x[e]=F(t[e]);for(let a=0;a<n;a++){const n=o,h=C(t,x,u,a,r);u[a]=h,o=i[n][h];const l=240&o;o&=15;const f=i[o][G];if(e[a]=f,l>0)if(16===l){for(let t=s;t<a;t++)e[t]=1;s=-1}else s=-1;if(i[o][J])-1===s&&(s=a);else if(s>-1){for(let t=s;t<a;t++)e[t]=f;s=-1}5===x[a]&&(e[a]=0),r.hiLevel|=f}r.hasUbatS&&function(t,e,r,n){for(let i=0;i<r;i++)if(6===t[i]){e[i]=n.dir;for(let r=i-1;r>=0&&8===t[r];r--)e[r]=n.dir}}(x,e,n,r)}function F(t){const e=t.charCodeAt(0),r=w[e>>8];return r<100?r:m[r-100][255&e]}function V(t,e){const r=t.split("");if(e){const t=[];N(r,t,e),X=t}return r.reverse(),q.reverse(),r.join("")}function S(t,e,r){for(let n=0;n<e;n++)if(t[n]===r)return n;return-1}function E(t){for(let e=0;e<c.length;e++)if(t>=c[e]&&t<=v[e])return!0;return!1}function M(t,e,r,n){for(;e*r<n&&j(t[e]);)e+=r;return!!(e*r<n&&E(t[e]))}function Z(t,e,r,n){for(;e*r<n&&j(t[e]);)e+=r;let o=" ";if(!(e*r<n))return!1;o=t[e];for(let t=0;t<i.length;t++)if(i[t]===o)return!0;return!1}function k(t,e,r,n){if(n.hiLevel<t)return;if(1===t&&n.dir===tt&&!n.hasUbatB)return e.reverse(),void q.reverse();const i=e.length;let o,s,x,u,a,h=0;for(;h<i;){if(r[h]>=t){for(o=h+1;o<i&&r[o]>=t;)o++;for(s=h,x=o-1;s<x;s++,x--)u=e[s],e[s]=e[x],e[x]=u,a=q[s],q[s]=q[x],q[x]=a;h=o}h++}}function C(t,e,r,n,i){const o=e[n];return{UBAT_L:()=>(i.lastArabic=!1,0),UBAT_R:()=>(i.lastArabic=!1,1),UBAT_ON:()=>4,UBAT_AN:()=>3,UBAT_EN:()=>i.lastArabic?3:2,UBAT_AL:()=>(i.lastArabic=!0,i.hasUbatAl=!0,1),UBAT_WS:()=>4,UBAT_CS:()=>{let t,o;return n<1||n+1>=e.length||2!==(t=r[n-1])&&3!==t||2!==(o=e[n+1])&&3!==o?4:(i.lastArabic&&(o=3),o===t?o:4)},UBAT_ES:()=>2===(n>0?r[n-1]:5)&&n+1<e.length&&2===e[n+1]?2:4,UBAT_ET:()=>{if(n>0&&2===r[n-1])return 2;if(i.lastArabic)return 4;let t=n+1;const o=e.length;for(;t<o&&e[t]===p;)t++;return t<o&&2===e[t]?2:4},UBAT_NSM:()=>{if("VLTR"===i.inFormat){const r=e.length;let i=n+1;for(;i<r&&e[i]===g;)i++;if(i<r){const r=t[n].charCodeAt(0),o=r>=1425&&r<=2303||64286===r,s=e[i];if(o&&(1===s||7===s))return 1}}return n<1||5===e[n-1]?4:r[n-1]},UBAT_B:()=>(i.lastArabic=!0,i.hasUbatB=!0,i.dir),UBAT_S:()=>(i.hasUbatS=!0,4),UBAT_LRE:()=>(i.lastArabic=!1,4),UBAT_RLE:()=>(i.lastArabic=!1,4),UBAT_LRO:()=>(i.lastArabic=!1,4),UBAT_RLO:()=>(i.lastArabic=!1,4),UBAT_PDF:()=>(i.lastArabic=!1,4),UBAT_BN:()=>4}[L[o]]()}function D(t){let e,r=0,i=n.length-1;for(;r<=i;)if(e=Math.floor((r+i)/2),t<n[e][0])i=e-1;else{if(!(t>n[e][0]))return n[e][1];r=e+1}return t}function O(t){for(let e=0;e<f.length;e++)if(f[e]===t)return!0;return!1}function z(t){for(let e=0;e<x.length;e++)if(t===x[e])return h[e];return t}function I(t,e){for(let r=0;r<x.length;r++)if(t===x[r])return e[r];return t}function j(t){return t>="ً"&&t<="ٕ"}function H(t){return"L"===t?"LTR":"R"===t?"RTL":"C"===t?"CLR":"D"===t?"CRL":""}function P(t,e,r,n){for(;e*r<n&&j(t[e]);)e+=r;return e*r<n&&(t[e]=" ",!0)}function W(t,e){for(let r=0;r<i.length;r++)if(t===i[r])return e[r];return t}function Y(t,e,r,n){for(let i=0;i<t.length;i++)(t[i]>e||!r&&t[i]===e)&&(t[i]+=n)}let q=[],Q=[],X=[];const $={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},G=5,J=6,K=0,tt=1,et=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,rt=/[\u0591-\u06ff\ufb1d-\ufefc]/},38958:(t,e,r)=>{r.d(e,{b:()=>u,j:()=>x});var n=r(36567),i=r(39994);let o=null,s=null;async function x(){return o||(o=async function(){const t=(0,i.Z)("esri-csp-restrictions")?await r.e(2394).then(r.bind(r,42394)).then((t=>t.l)):await r.e(7981).then(r.bind(r,87981)).then((t=>t.l));s=await t.load({locateFile:t=>(0,n.V)(`esri/core/libs/libtess/${t}`)})}()),o}function u(t,e){const r=Math.max(t.length,128e3);return s.triangulate(t,e,r)}},4655:(t,e,r)=>{r.d(e,{Z:()=>n});class n{constructor(t=0,e=0,r=0,n=0){this.x=t,this.y=e,this.width=r,this.height=n}get isEmpty(){return this.width<=0||this.height<=0}union(t){this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.width=Math.max(this.width,t.width),this.height=Math.max(this.height,t.height)}}},54475:(t,e,r)=>{r.d(e,{z:()=>y});var n=r(25609),i=r(14266);function o(t,e){return t.x===e.x&&t.y===e.y}function s(t,e){return t.x=e.y,t.y=-e.x,t}function x(t,e){return t.x=-e.y,t.y=e.x,t}function u(t,e){return t.x=e.x,t.y=e.y,t}function a(t,e){return t.x=-e.x,t.y=-e.y,t}function h(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function l(t,e){return t.x*e.x+t.y*e.y}function f(t,e,r,n){return t.x=e.x*r+e.y*n,t.y=e.x*n-e.y*r,t}class y{constructor(t,e,r){this._writeVertex=t,this._writeTriangle=e,this._canUseThinTessellation=r,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(t,e){(function(t){if(!t)return;const e=t.length;if(e<=1)return;let r=0;for(let n=1;n<e;n++)o(t[n],t[r])||++r===n||(t[r]=t[n]);t.length=r+1})(t),this._canUseThinTessellation&&e.halfWidth<i.do&&!e.offset?this._tessellateThin(t,e):this._tessellate(t,e)}_tessellateThin(t,e){if(t.length<2)return;const r=e.wrapDistance||65535;let n=e.initialDistance||0,i=!1,o=t[0].x,s=t[0].y;const x=t.length;for(let e=1;e<x;++e){i&&(i=!1,n=0);let x=t[e].x,u=t[e].y,a=x-o,h=u-s,l=Math.sqrt(a*a+h*h);if(a/=l,h/=l,n+l>r){i=!0;const t=(r-n)/l;l=r-n,x=(1-t)*o+t*x,u=(1-t)*s+t*u,--e}const f=this._writeVertex(o,s,0,0,a,h,h,-a,0,-1,n),y=this._writeVertex(o,s,0,0,a,h,-h,a,0,1,n);n+=l;const c=this._writeVertex(x,u,0,0,a,h,h,-a,0,-1,n),v=this._writeVertex(x,u,0,0,a,h,-h,a,0,1,n);this._writeTriangle(f,y,c),this._writeTriangle(y,c,v),o=x,s=u}}_tessellate(t,e){const r=t[0],i=t[t.length-1],y=o(r,i),c=y?3:2;if(t.length<c)return;const v=e.pixelCoordRatio,_=null!=e.capType?e.capType:n.RL.BUTT,d=null!=e.joinType?e.joinType:n.AH.MITER,T=null!=e.miterLimit?Math.min(e.miterLimit,4):2,p=null!=e.roundLimit?Math.min(e.roundLimit,1.05):1.05,g=null!=e.halfWidth?e.halfWidth:2,A=!!e.textured;let L,w,m,b=null;const R=this._prevNormal,U=this._nextNormal;let B=-1,N=-1;const F=this._joinNormal;let V,S;const E=this._textureNormalLeft,M=this._textureNormalRight,Z=this._textureNormal;let k=-1,C=-1;const D=e.wrapDistance||65535;let O=e.initialDistance||0;const z=this._writeVertex,I=this._writeTriangle,j=(t,e,r,n,i,o)=>{const s=z(w,m,V,S,r,n,t,e,i,o,O);return k>=0&&C>=0&&s>=0&&I(k,C,s),k=C,C=s,s};y&&(L=t[t.length-2],U.x=i.x-L.x,U.y=i.y-L.y,N=h(U),U.x/=N,U.y/=N);let H=!1;for(let e=0;e<t.length;++e){if(H&&(H=!1,O=0),L&&(R.x=-U.x,R.y=-U.y,B=N,O+B>D&&(H=!0)),H){const r=(D-O)/B;B=D-O,L={x:(1-r)*L.x+r*t[e].x,y:(1-r)*L.y+r*t[e].y},--e}else L=t[e];w=L.x,m=L.y;const r=e<=0&&!H,i=e===t.length-1;if(r||(O+=B),b=i?y?t[1]:null:t[e+1],b?(U.x=b.x-w,U.y=b.y-m,N=h(U),U.x/=N,U.y/=N):(U.x=void 0,U.y=void 0),!y){if(r){x(F,U),V=F.x,S=F.y,_===n.RL.SQUARE&&(j(-U.y-U.x,U.x-U.y,U.x,U.y,0,-1),j(U.y-U.x,-U.x-U.y,U.x,U.y,0,1)),_===n.RL.ROUND&&(j(-U.y-U.x,U.x-U.y,U.x,U.y,-1,-1),j(U.y-U.x,-U.x-U.y,U.x,U.y,-1,1)),_!==n.RL.ROUND&&_!==n.RL.BUTT||(j(-U.y,U.x,U.x,U.y,0,-1),j(U.y,-U.x,U.x,U.y,0,1));continue}if(i){s(F,R),V=F.x,S=F.y,_!==n.RL.ROUND&&_!==n.RL.BUTT||(j(R.y,-R.x,-R.x,-R.y,0,-1),j(-R.y,R.x,-R.x,-R.y,0,1)),_===n.RL.SQUARE&&(j(R.y-R.x,-R.x-R.y,-R.x,-R.y,0,-1),j(-R.y-R.x,R.x-R.y,-R.x,-R.y,0,1)),_===n.RL.ROUND&&(j(R.y-R.x,-R.x-R.y,-R.x,-R.y,1,-1),j(-R.y-R.x,R.x-R.y,-R.x,-R.y,1,1));continue}}let o,c,z=(W=U,-((P=R).x*W.y-P.y*W.x));if(Math.abs(z)<.01)l(R,U)>0?(F.x=R.x,F.y=R.y,z=1,o=Number.MAX_VALUE,c=!0):(x(F,U),z=1,o=1,c=!1);else{F.x=(R.x+U.x)/z,F.y=(R.y+U.y)/z,o=h(F);const t=(o-1)*g*v;c=o>4||t>B&&t>N}V=F.x,S=F.y;let I=d;switch(d){case n.AH.BEVEL:o<1.05&&(I=n.AH.MITER);break;case n.AH.ROUND:o<p&&(I=n.AH.MITER);break;case n.AH.MITER:o>T&&(I=n.AH.BEVEL)}switch(I){case n.AH.MITER:if(j(F.x,F.y,-R.x,-R.y,0,-1),j(-F.x,-F.y,-R.x,-R.y,0,1),i)break;if(A){const t=H?0:O;k=this._writeVertex(w,m,V,S,U.x,U.y,F.x,F.y,0,-1,t),C=this._writeVertex(w,m,V,S,U.x,U.y,-F.x,-F.y,0,1,t)}break;case n.AH.BEVEL:{const t=z<0;let e,r,n,o;if(t){const t=k;k=C,C=t,e=E,r=M}else e=M,r=E;if(c)n=t?x(this._innerPrev,R):s(this._innerPrev,R),o=t?s(this._innerNext,U):x(this._innerNext,U);else{const e=t?a(this._inner,F):u(this._inner,F);n=e,o=e}const h=t?s(this._bevelStart,R):x(this._bevelStart,R);j(n.x,n.y,-R.x,-R.y,e.x,e.y);const l=j(h.x,h.y,-R.x,-R.y,r.x,r.y);if(i)break;const y=t?x(this._bevelEnd,U):s(this._bevelEnd,U);if(c){const t=this._writeVertex(w,m,V,S,-R.x,-R.y,0,0,0,0,O);k=this._writeVertex(w,m,V,S,U.x,U.y,o.x,o.y,e.x,e.y,O),C=this._writeVertex(w,m,V,S,U.x,U.y,y.x,y.y,r.x,r.y,O),this._writeTriangle(l,t,C)}else{if(A){const t=this._bevelMiddle;t.x=(h.x+y.x)/2,t.y=(h.y+y.y)/2,f(Z,t,-R.x,-R.y),j(t.x,t.y,-R.x,-R.y,Z.x,Z.y),f(Z,t,U.x,U.y),k=this._writeVertex(w,m,V,S,U.x,U.y,t.x,t.y,Z.x,Z.y,O),C=this._writeVertex(w,m,V,S,U.x,U.y,o.x,o.y,e.x,e.y,O)}else{const t=k;k=C,C=t}j(y.x,y.y,U.x,U.y,r.x,r.y)}if(t){const t=k;k=C,C=t}break}case n.AH.ROUND:{const t=z<0;let e,r;if(t){const t=k;k=C,C=t,e=E,r=M}else e=M,r=E;const n=t?a(this._inner,F):u(this._inner,F);let h,y;c?(h=t?x(this._innerPrev,R):s(this._innerPrev,R),y=t?s(this._innerNext,U):x(this._innerNext,U)):(h=n,y=n);const v=t?s(this._roundStart,R):x(this._roundStart,R),_=t?x(this._roundEnd,U):s(this._roundEnd,U),d=j(h.x,h.y,-R.x,-R.y,e.x,e.y),T=j(v.x,v.y,-R.x,-R.y,r.x,r.y);if(i)break;const p=this._writeVertex(w,m,V,S,-R.x,-R.y,0,0,0,0,O);c||this._writeTriangle(k,C,p);const g=a(this._outer,n),L=this._writeVertex(w,m,V,S,U.x,U.y,_.x,_.y,r.x,r.y,O);let b,B;const N=o>2;if(N){let e;o!==Number.MAX_VALUE?(g.x/=o,g.y/=o,e=l(R,g),e=(o*(e*e-1)+1)/e):e=-1,b=t?s(this._startBreak,R):x(this._startBreak,R),b.x+=R.x*e,b.y+=R.y*e,B=t?x(this._endBreak,U):s(this._endBreak,U),B.x+=U.x*e,B.y+=U.y*e}f(Z,g,-R.x,-R.y);const D=this._writeVertex(w,m,V,S,-R.x,-R.y,g.x,g.y,Z.x,Z.y,O);f(Z,g,U.x,U.y);const I=A?this._writeVertex(w,m,V,S,U.x,U.y,g.x,g.y,Z.x,Z.y,O):D,H=p,P=A?this._writeVertex(w,m,V,S,U.x,U.y,0,0,0,0,O):p;let W=-1,Y=-1;if(N&&(f(Z,b,-R.x,-R.y),W=this._writeVertex(w,m,V,S,-R.x,-R.y,b.x,b.y,Z.x,Z.y,O),f(Z,B,U.x,U.y),Y=this._writeVertex(w,m,V,S,U.x,U.y,B.x,B.y,Z.x,Z.y,O)),A?N?(this._writeTriangle(H,T,W),this._writeTriangle(H,W,D),this._writeTriangle(P,I,Y),this._writeTriangle(P,Y,L)):(this._writeTriangle(H,T,D),this._writeTriangle(P,I,L)):N?(this._writeTriangle(p,T,W),this._writeTriangle(p,W,Y),this._writeTriangle(p,Y,L)):(this._writeTriangle(p,T,D),this._writeTriangle(p,I,L)),c?(k=this._writeVertex(w,m,V,S,U.x,U.y,y.x,y.y,e.x,e.y,O),C=L):(k=A?this._writeVertex(w,m,V,S,U.x,U.y,y.x,y.y,e.x,e.y,O):d,this._writeTriangle(k,P,L),C=L),t){const t=k;k=C,C=t}break}}}var P,W}}}}]);