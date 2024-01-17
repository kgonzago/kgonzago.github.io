"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[4832],{56215:(t,e,n)=>{n.d(e,{Ue:()=>a,nF:()=>d,zk:()=>h});var o=n(19431),i=n(19480),r=n(6766),s=n(8909),c=n(68817);function a(t){return t?{origin:(0,s.g)(t.origin),vector:(0,s.g)(t.vector)}:{origin:(0,s.c)(),vector:(0,s.c)()}}function h(t,e,n=a()){return(0,r.c)(n.origin,t),(0,r.f)(n.vector,e,t),n}function d(t,e,n){return function(t,e,n,i,s){const{vector:a,origin:h}=t,d=(0,r.f)(c.WM.get(),e,h),l=(0,r.j)(a,d)/(0,r.m)(a);return(0,r.i)(s,a,(0,o.uZ)(l,0,1)),(0,r.g)(s,s,t.origin)}(t,e,0,0,n)}(0,s.c)(),(0,s.c)(),new i.x((()=>a()))},67262:(t,e,n)=>{n.d(e,{d:()=>r});var o=n(19431),i=n(35914);function r(t,e,n){const r=Array.isArray(t),d=r?t.length/e:t.byteLength/(4*e),l=r?t:new Uint32Array(t,0,d*e),u=n?.minReduction??0,f=n?.originalIndices||null,_=f?f.length:0,m=n?.componentOffsets||null;let T=0;if(m)for(let t=0;t<m.length-1;t++){const e=m[t+1]-m[t];e>T&&(T=e)}else T=d;const g=Math.floor(1.1*T)+1;(null==h||h.length<2*g)&&(h=new Uint32Array((0,o.Sf)(2*g)));for(let t=0;t<2*g;t++)h[t]=0;let p=0;const O=!!m&&!!f,N=O?_:d;let A=(0,i.$z)(d);const E=new Uint32Array(_),b=1.96;let S=0!==u?Math.ceil(4*b*b/(u*u)*u*(1-u)):N,R=1,I=m?m[1]:N;for(let t=0;t<N;t++){if(t===S){const e=1-p/t;if(e+b*Math.sqrt(e*(1-e)/t)<u)return null;S*=2}if(t===I){for(let t=0;t<2*g;t++)h[t]=0;if(f)for(let t=m[R-1];t<m[R];t++)E[t]=A[f[t]];I=m[++R]}const n=O?f[t]:t,o=n*e,i=a(l,o,e);let r=i%g,c=p;for(;0!==h[2*r+1];){if(h[2*r]===i){const t=h[2*r+1]-1;if(s(l,o,t*e,e)){c=A[t];break}}r++,r>=g&&(r-=g)}c===p&&(h[2*r]=i,h[2*r+1]=n+1,p++),A[n]=c}if(0!==u&&1-p/d<u)return null;if(O){for(let t=m[R-1];t<E.length;t++)E[t]=A[f[t]];A=(0,i.mi)(E)}const F=r?new Array(p):new Uint32Array(p*e);p=0;for(let t=0;t<N;t++)A[t]===p&&(c(l,(O?f[t]:t)*e,F,p*e,e),p++);if(f&&!O){const t=new Uint32Array(_);for(let e=0;e<t.length;e++)t[e]=A[f[e]];A=(0,i.mi)(t)}return{buffer:Array.isArray(F)?F:F.buffer,indices:A,uniqueCount:p}}function s(t,e,n,o){for(let i=0;i<o;i++)if(t[e+i]!==t[n+i])return!1;return!0}function c(t,e,n,o,i){for(let r=0;r<i;r++)n[o+r]=t[e+r]}function a(t,e,n){let o=0;for(let i=0;i<n;i++)o=t[e+i]+o|0,o=o+(o<<11)+(o>>>2)|0;return o>>>0}let h=null},95397:(t,e,n)=>{n.d(e,{K:()=>r});var o=n(91907),i=n(41163);function r(t,e=0){const n=t.stride;return Array.from(t.fields.keys()).map((o=>{const r=t.fields.get(o),c=r.constructor.ElementCount,a=s(r.constructor.ElementType),h=r.offset,d=!(!r.optional||!r.optional.glNormalized);return new i.G(o,c,a,h,n,d,e)}))}function s(t){const e=c[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const c={u8:o.g.UNSIGNED_BYTE,u16:o.g.UNSIGNED_SHORT,u32:o.g.UNSIGNED_INT,i8:o.g.BYTE,i16:o.g.SHORT,i32:o.g.INT,f32:o.g.FLOAT}},82976:(t,e,n)=>{n.d(e,{Hr:()=>h,dG:()=>a,tf:()=>s});var o=n(95397),i=n(44685),r=n(21414);const s=(0,i.U$)().vec3f(r.T.POSITION).u16(r.T.COMPONENTINDEX),c=(0,i.U$)().vec2u8(r.T.SIDENESS),a=((0,o.K)(c),(0,i.U$)().vec3f(r.T.POSITION0).vec3f(r.T.POSITION1).vec3f(r.T.NORMAL).u16(r.T.COMPONENTINDEX).u8(r.T.VARIANTOFFSET,{glNormalized:!0}).u8(r.T.VARIANTSTROKE).u8(r.T.VARIANTEXTENSION,{glNormalized:!0})),h=(0,i.U$)().vec3f(r.T.POSITION0).vec3f(r.T.POSITION1).vec3f(r.T.NORMALA).vec3f(r.T.NORMALB).u16(r.T.COMPONENTINDEX).u8(r.T.VARIANTOFFSET,{glNormalized:!0}).u8(r.T.VARIANTSTROKE).u8(r.T.VARIANTEXTENSION,{glNormalized:!0});new Map([[r.T.POSITION0,0],[r.T.POSITION1,1],[r.T.COMPONENTINDEX,2],[r.T.VARIANTOFFSET,3],[r.T.VARIANTSTROKE,4],[r.T.VARIANTEXTENSION,5],[r.T.NORMAL,6],[r.T.NORMALA,6],[r.T.NORMALB,7],[r.T.SIDENESS,8]])},11591:(t,e,n)=>{n.d(e,{n:()=>d});var o=n(7753),i=n(19431),r=n(6766),s=n(8909);const c=-1;var a,h;function d(t,e,n,s=g){const a=t.vertices.position,h=t.vertices.componentIndex,d=(0,i.Vl)(s.anglePlanar),T=(0,i.Vl)(s.angleSignificantEdge),p=Math.cos(T),O=Math.cos(d),N=m.edge,A=N.position0,E=N.position1,b=N.faceNormal0,S=N.faceNormal1,R=_(t),I=function(t){const e=t.faces.length/3,n=t.faces,o=t.neighbors;let i=0;for(let t=0;t<e;t++){const e=o[3*t],r=o[3*t+1],s=o[3*t+2],a=n[3*t],h=n[3*t+1],d=n[3*t+2];i+=e===c||a<h?1:0,i+=r===c||h<d?1:0,i+=s===c||d<a?1:0}const r=new Int32Array(4*i);let s=0;for(let t=0;t<e;t++){const e=o[3*t],i=o[3*t+1],a=o[3*t+2],h=n[3*t],d=n[3*t+1],l=n[3*t+2];(e===c||h<d)&&(r[s++]=h,r[s++]=d,r[s++]=t,r[s++]=e),(i===c||d<l)&&(r[s++]=d,r[s++]=l,r[s++]=t,r[s++]=i),(a===c||l<h)&&(r[s++]=l,r[s++]=h,r[s++]=t,r[s++]=a)}return r}(t),F=I.length/4,M=e.allocate(F);let v=0;const w=F,x=n.allocate(w);let P=0,y=0,L=0;const j=(0,o.wR)(0,F),B=new Float32Array(F);B.forEach(((t,e,n)=>{a.getVec(I[4*e],A),a.getVec(I[4*e+1],E),n[e]=(0,r.o)(A,E)})),j.sort(((t,e)=>B[e]-B[t]));const z=new Array,C=new Array;for(let t=0;t<F;t++){const o=j[t],i=B[o],s=I[4*o],_=I[4*o+1],m=I[4*o+2],T=I[4*o+3],g=T===c;if(a.getVec(s,A),a.getVec(_,E),g)(0,r.s)(b,R[3*m],R[3*m+1],R[3*m+2]),(0,r.c)(S,b),N.componentIndex=h.get(s),N.cosAngle=(0,r.j)(b,S);else{if((0,r.s)(b,R[3*m],R[3*m+1],R[3*m+2]),(0,r.s)(S,R[3*T],R[3*T+1],R[3*T+2]),N.componentIndex=h.get(s),N.cosAngle=(0,r.j)(b,S),u(N,O))continue;N.cosAngle<-.9999&&(0,r.c)(S,b)}y+=i,L++,g||l(N,p)?(e.write(M,v++,N),z.push(i)):f(N,d)&&(n.write(x,P++,N),C.push(i))}const D=new Float32Array(z.reverse()),H=new Float32Array(C.reverse());return{regular:{instancesData:e.trim(M,v),lodInfo:{lengths:D}},silhouette:{instancesData:n.trim(x,P),lodInfo:{lengths:H}},averageEdgeLength:y/L}}function l(t,e){return t.cosAngle<e}function u(t,e){return t.cosAngle>e}function f(t,e){const n=(0,i.ZF)(t.cosAngle),o=m.fwd,s=m.ortho;return(0,r.C)(o,t.position1,t.position0),n*((0,r.j)((0,r.b)(s,t.faceNormal0,t.faceNormal1),o)>0?-1:1)>e}function _(t){const e=t.faces.length/3,n=t.vertices.position,o=t.faces,i=T.v0,s=T.v1,c=T.v2,a=new Float32Array(3*e);for(let t=0;t<e;t++){const e=o[3*t],h=o[3*t+1],d=o[3*t+2];n.getVec(e,i),n.getVec(h,s),n.getVec(d,c),(0,r.f)(s,s,i),(0,r.f)(c,c,i),(0,r.b)(i,s,c),(0,r.n)(i,i),a[3*t]=i[0],a[3*t+1]=i[1],a[3*t+2]=i[2]}return a}(h=a||(a={}))[h.SOLID=0]="SOLID",h[h.SKETCH=1]="SKETCH";const m={edge:{position0:(0,s.c)(),position1:(0,s.c)(),faceNormal0:(0,s.c)(),faceNormal1:(0,s.c)(),componentIndex:0,cosAngle:0},ortho:(0,s.c)(),fwd:(0,s.c)()},T={v0:(0,s.c)(),v1:(0,s.c)(),v2:(0,s.c)()},g={anglePlanar:4,angleSignificantEdge:35}},73453:(t,e,n)=>{n.d(e,{Kl:()=>S,n_:()=>w,kY:()=>R,Yr:()=>v});var o=n(67262);function i(t,e,n){const o=e/3,i=new Uint32Array(n+1),r=new Uint32Array(n+1),s=(t,e)=>{t<e?i[t+1]++:r[e+1]++};for(let e=0;e<o;e++){const n=t[3*e],o=t[3*e+1],i=t[3*e+2];s(n,o),s(o,i),s(i,n)}let c=0,a=0;for(let t=0;t<n;t++){const e=i[t+1],n=r[t+1];i[t+1]=c,r[t+1]=a,c+=e,a+=n}const h=new Uint32Array(6*o),d=i[n],l=(t,e,n)=>{if(t<e){const o=i[t+1]++;h[2*o]=e,h[2*o+1]=n}else{const o=r[e+1]++;h[2*d+2*o]=t,h[2*d+2*o+1]=n}};for(let e=0;e<o;e++){const n=t[3*e],o=t[3*e+1],i=t[3*e+2];l(n,o,e),l(o,i,e),l(i,n,e)}const u=(t,e)=>{const n=2*t,o=e-t;for(let t=1;t<o;t++){const e=h[n+2*t],o=h[n+2*t+1];let i=t-1;for(;i>=0&&h[n+2*i]>e;i--)h[n+2*i+2]=h[n+2*i],h[n+2*i+3]=h[n+2*i+1];h[n+2*i+2]=e,h[n+2*i+3]=o}};for(let t=0;t<n;t++)u(i[t],i[t+1]),u(d+r[t],d+r[t+1]);const f=new Int32Array(3*o),_=(e,n)=>e===t[3*n]?0:e===t[3*n+1]?1:e===t[3*n+2]?2:-1,m=(t,e)=>{const n=_(t,e);f[3*e+n]=-1},T=(t,e,n,o)=>{const i=_(t,e);f[3*e+i]=o;const r=_(n,o);f[3*o+r]=e};for(let t=0;t<n;t++){let e=i[t];const n=i[t+1];let o=r[t];const s=r[t+1];for(;e<n&&o<s;){const n=h[2*e],i=h[2*d+2*o];n===i?(T(t,h[2*e+1],i,h[2*d+2*o+1]),e++,o++):n<i?(m(t,h[2*e+1]),e++):(m(i,h[2*d+2*o+1]),o++)}for(;e<n;)m(t,h[2*e+1]),e++;for(;o<s;)m(h[2*d+2*o],h[2*d+2*o+1]),o++}return f}var r=n(44685),s=n(21414),c=n(82976),a=n(4157),h=n(6766),d=n(8909),l=n(95397);class u{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?g:T}write(t,e,n){const o=this._edgeHashFunction(n);E.seed=o;const i=E.getIntRange(0,255),r=E.getIntRange(0,this.settings.variants-1),s=E.getFloat(),c=255*(.5*function(t,e){const n=t<0?-1:1;return Math.abs(t)**1.2*n}(-(1-Math.min(s/.7,1))+Math.max(0,s-.7)/(1-.7))+.5);t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex),t.variantOffset.set(e,i),t.variantStroke.set(e,r),t.variantExtension.set(e,c)}trim(t,e){return t.slice(0,e)}}const f=new Float32Array(6),_=new Uint32Array(f.buffer),m=new Uint32Array(1);function T(t){const e=f;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],m[0]=5381;for(let t=0;t<_.length;t++)m[0]=31*m[0]+_[t];return m[0]}function g(t){const e=f;e[0]=p(t.position0[0]),e[1]=p(t.position0[1]),e[2]=p(t.position0[2]),e[3]=p(t.position1[0]),e[4]=p(t.position1[1]),e[5]=p(t.position1[2]),m[0]=5381;for(let t=0;t<_.length;t++)m[0]=31*m[0]+_[t];return m[0]}function p(t){return Math.round(1e4*t)/1e4}class O{constructor(){this._commonWriter=new u}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return c.dG.createBuffer(t)}write(t,e,n){this._commonWriter.write(t,e,n),(0,h.g)(A,n.faceNormal0,n.faceNormal1),(0,h.n)(A,A),t.normal.setVec(e,A)}trim(t,e){return this._commonWriter.trim(t,e)}}O.Layout=c.dG,O.glLayout=(0,l.K)(c.dG,1);class N{constructor(){this._commonWriter=new u}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return c.Hr.createBuffer(t)}write(t,e,n){this._commonWriter.write(t,e,n),t.normalA.setVec(e,n.faceNormal0),t.normalB.setVec(e,n.faceNormal1)}trim(t,e){return this._commonWriter.trim(t,e)}}N.Layout=c.Hr,N.glLayout=(0,l.K)(c.Hr,1);const A=(0,d.c)(),E=new a.Z;var b=n(11591);function S(t){const e=R(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return F.updateSettings(t.writerSettings),M.updateSettings(t.writerSettings),(0,b.n)(e,F,M)}function R(t,e,n,r){if(e){const e=i(n,r,t.count);return new I(n,r,e,t)}const s=(0,o.d)(t.buffer,t.stride/4,{originalIndices:n,originalIndicesLength:r}),a=i(s.indices,r,s.uniqueCount);return{faces:s.indices,facesLength:s.indices.length,neighbors:a,vertices:c.tf.createView(s.buffer)}}class I{constructor(t,e,n,o){this.faces=t,this.facesLength=e,this.neighbors=n,this.vertices=o}}const F=new O,M=new N,v=(0,r.U$)().vec3f(s.T.POSITION0).vec3f(s.T.POSITION1),w=(0,r.U$)().vec3f(s.T.POSITION0).vec3f(s.T.POSITION1).u16(s.T.COMPONENTINDEX)},64832:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Y});var o,i,r=n(36663),s=n(33926),c=(n(13802),n(7283),n(7753),n(39994),n(70375),n(40266)),a=n(6766),h=n(8909),d=n(56215),l=n(91917),u=n(34596),f=n(17135),_=n(19480),m=(n(24455),n(88589),n(1983)),T=n(97537);function g(t){return t?{ray:(0,T.Ue)(t.ray),c0:t.c0,c1:t.c1}:{ray:(0,T.Ue)(),c0:0,c1:Number.MAX_VALUE}}function p(t,e){for(let n=0;n<O;n++){const o=t[n];if(o[0]*e[0]+o[1]*e[1]+o[2]*e[2]+o[3]>=e[3])return!1}return!0}new _.x((()=>g())),n(39050),n(68817),function(t){t[t.LEFT=0]="LEFT",t[t.RIGHT=1]="RIGHT",t[t.BOTTOM=2]="BOTTOM",t[t.TOP=3]="TOP",t[t.NEAR=4]="NEAR",t[t.FAR=5]="FAR"}(o||(o={})),function(t){t[t.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",t[t.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",t[t.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",t[t.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",t[t.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",t[t.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",t[t.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",t[t.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(i||(i={})),i.FAR_BOTTOM_RIGHT,i.NEAR_BOTTOM_RIGHT,i.NEAR_BOTTOM_LEFT,i.FAR_BOTTOM_LEFT,i.NEAR_BOTTOM_LEFT,i.NEAR_BOTTOM_RIGHT,i.NEAR_TOP_RIGHT,i.NEAR_TOP_LEFT,i.FAR_BOTTOM_RIGHT,i.FAR_BOTTOM_LEFT,i.FAR_TOP_LEFT,i.FAR_TOP_RIGHT,i.NEAR_BOTTOM_RIGHT,i.FAR_BOTTOM_RIGHT,i.FAR_TOP_RIGHT,i.NEAR_TOP_RIGHT,i.FAR_BOTTOM_LEFT,i.NEAR_BOTTOM_LEFT,i.NEAR_TOP_LEFT,i.FAR_TOP_LEFT,i.FAR_TOP_LEFT,i.NEAR_TOP_LEFT,i.NEAR_TOP_RIGHT,i.FAR_TOP_RIGHT;const O=6;(0,m.f)(-1,-1,-1,1),(0,m.f)(1,-1,-1,1),(0,m.f)(1,1,-1,1),(0,m.f)(-1,1,-1,1),(0,m.f)(-1,-1,1,1),(0,m.f)(1,-1,1,1),(0,m.f)(1,1,1,1),(0,m.f)(-1,1,1,1),new _.x(g),(0,h.c)(),(0,h.c)(),(0,h.c)(),(0,h.c)(),(0,h.c)(),(0,h.c)(),(0,h.c)(),(0,h.c)();var N,A,E=n(15095);class b{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new S,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),S.clearPool(),j[0]=null,H.prune(),q.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=S.acquire();for(let o=0;o<e;o++){const e=t[o];this._isDegenerate(e)?this._degenerateObjects.add(e):(n.init(this._root),this._add(e,n))}S.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=S.acquire();for(const o of t){const t=null!=e?e:(0,l.h)(this.objectToBoundingSphere(o),V);x(t[3])?(n.init(this._root),this._remove(o,t,n)):this._degenerateObjects.delete(o)}S.release(n),this._shrink()}update(t,e){if(!x(e[3])&&this._isDegenerate(t))return;const n=function(t){return j[0]=t,j}(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const o=(0,T.re)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNode(o,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(o,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(o,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,o){const i=(0,T.re)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNodeWithOffset(i,t,o))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(i,t,o)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(i,t,o)&&n(t)})),!0}))}forEach(t){this._forEachNode(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,o=(()=>!0),i=1/0){let r=1/0,s=1/0,c=null;const h=v(t,e),d=a=>{if(--i,!o(a))return;const h=this.objectToBoundingSphere(a);if(!p(n,h))return;const d=w(t,e,(0,l.g)(h)),u=d-h[3],f=d+h[3];u<r&&(r=u,s=f,c=a)};return this._forEachNodeDepthOrdered(this._root,(o=>{if(i<=0||!p(n,o.bounds))return!1;if((0,a.i)(z,h,o.halfSize),(0,a.g)(z,z,o.bounds),w(t,e,z)>s)return!1;const r=o.node;return r.terminals.forAll((t=>d(t))),null!==r.residents&&r.residents.forAll((t=>d(t))),!0}),t,e),c}forEachInDepthRange(t,e,n,o,i,r,s){let c=-1/0,h=1/0;const d={setRange:t=>{n===b.DepthOrder.FRONT_TO_BACK?(c=Math.max(c,t.near),h=Math.min(h,t.far)):(c=Math.max(c,-t.far),h=Math.min(h,-t.near))}};d.setRange(o);const u=w(e,n,t),f=v(e,n),_=v(e,-n),m=t=>{if(!s(t))return;const o=this.objectToBoundingSphere(t),a=(0,l.g)(o),f=w(e,n,a)-u,_=f-o[3],m=f+o[3];_>h||m<c||!p(r,o)||i(t,d)};this._forEachNodeDepthOrdered(this._root,(t=>{if(!p(r,t.bounds))return!1;if((0,a.i)(z,f,t.halfSize),(0,a.g)(z,z,t.bounds),w(e,n,z)-u>h)return!1;if((0,a.i)(z,_,t.halfSize),(0,a.g)(z,z,t.bounds),w(e,n,z)-u<c)return!1;const o=t.node;return o.terminals.forAll((t=>m(t))),null!==o.residents&&o.residents.forAll((t=>m(t))),!0}),e,n)}forEachNode(t){this._forEachNode(this._root,(e=>t(e.node,e.bounds,e.halfSize,e.depth)))}forEachNeighbor(t,e){const n=(0,l.a)(e),o=(0,l.g)(e),i=e=>{const i=this.objectToBoundingSphere(e),r=(0,l.a)(i),s=n+r;return!((0,a.a)((0,l.g)(i),o)-s*s<=0)||t(e)};let r=!0;const s=t=>{r&&(r=i(t))};this._forEachNode(this._root,(t=>{const e=(0,l.a)(t.bounds),i=n+e;if((0,a.a)((0,l.g)(t.bounds),o)-i*i>0)return!1;const c=t.node;return c.terminals.forAll(s),r&&null!==c.residents&&c.residents.forAll(s),r})),r&&this.forEachDegenerateObject(s)}_intersectsNode(t,e){return F(e.bounds,2*-e.halfSize,C),F(e.bounds,2*e.halfSize,D),(0,E.yK)(t.origin,t.direction,C,D)}_intersectsNodeWithOffset(t,e,n){return F(e.bounds,2*-e.halfSize,C),F(e.bounds,2*e.halfSize,D),n.applyToMinMax(C,D),(0,E.yK)(t.origin,t.direction,C,D)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||(0,l.j)(n,t)}_intersectsObjectWithOffset(t,e,n){const o=this.objectToBoundingSphere(e);return!(o[3]>0)||(0,l.j)(n.applyToBoundingSphere(o),t)}_forEachNode(t,e){let n=S.acquire().init(t);const o=[n];for(;0!==o.length;){if(n=o.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++)n.node.children[t]&&o.push(S.acquire().init(n).advance(t));S.release(n)}}_forEachNodeDepthOrdered(t,e,n,o=b.DepthOrder.FRONT_TO_BACK){let i=S.acquire().init(t);const r=[i];for(function(t,e,n){if(!q.length)for(let t=0;t<8;++t)q.push({index:0,distance:0});for(let n=0;n<8;++n){const o=P[n];q.data[n].index=n,q.data[n].distance=w(t,e,o)}q.sort(((t,e)=>t.distance-e.distance));for(let t=0;t<8;++t)n[t]=q.data[t].index}(n,o,W);0!==r.length;){if(i=r.pop(),e(i)&&!i.isLeaf())for(let t=7;t>=0;--t){const e=W[t];i.node.children[e]&&r.push(S.acquire().init(i).advance(e))}S.release(i)}}_remove(t,e,n){H.clear();const o=n.advanceTo(e,((t,e)=>{H.push(t.node),H.push(e)}))?n.node.terminals:n.node.residents;if(o.removeUnordered(t),0===o.length)for(let t=H.length-2;t>=0;t-=2){const e=H.data[t],n=H.data[t+1];if(!this._purge(e,n))break}}_nodeIsEmpty(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(null===t.residents&&(t.residents=new f.Z({shrink:!0})),!0)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const o=S.acquire().init(t);this._add(e.at(n),o),S.release(o)}}_grow(t,e){if(0!==e&&(M(t,e,(t=>this.objectToBoundingSphere(t)),G),x(G[3])&&!this._fitsInsideTree(G)))if(this._nodeIsEmpty(this._root.node))(0,l.h)(G,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const t=this._rootBoundsForRootAsSubNode(G);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(G,t):this._growRootAsSubNode(t),S.release(t)}}_rebuildTree(t,e){(0,a.c)(U,e.bounds),U[3]=e.halfSize,M([t,U],2,(t=>t),k);const n=S.acquire().init(this._root);this._root.initFrom(null,k,k[3]),this._root.increaseHalfSize(1.25),this._forEachNode(n,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),S.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let o=-1/0;const i=this._root.bounds,r=this._root.halfSize;for(let t=0;t<3;t++){const s=i[t]-r-(n[t]-e),c=n[t]+e-(i[t]+r),a=Math.max(0,Math.ceil(s/(2*r))),h=Math.max(0,Math.ceil(c/(2*r)))+1,d=2**Math.ceil(Math.log(a+h)*Math.LOG2E);o=Math.max(o,d),K[t].min=a,K[t].max=h}for(let t=0;t<3;t++){let e=K[t].min,n=K[t].max;const s=(o-(e+n))/2;e+=Math.ceil(s),n+=Math.floor(s);const c=i[t]-r-e*r*2;B[t]=c+(n+e)*r}const s=o*r;return B[3]=s*L,S.acquire().initFrom(null,B,s,0)}_growRootAsSubNode(t){const e=this._root.node;(0,a.c)(G,this._root.bounds),G[3]=this._root.halfSize,this._root.init(t),t.advanceTo(G,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,o=0;for(;o<e.length&&null==t;)n=o++,t=e[n];for(;o<e.length;)if(e[o++])return-1;return n}_isDegenerate(t){return!x(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,o=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:o}}}_nodeToJSON(t){const e=t.children.map((t=>t?this._nodeToJSON(t):null)),n=t.residents?.map((t=>this.objectToBoundingSphere(t))),o=t.terminals?.map((t=>this.objectToBoundingSphere(t)));return{children:e,residents:n,terminals:o}}static fromJSON(t){const e=new b((t=>t),{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}}class S{constructor(){this.bounds=(0,l.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,o=this.depth){return this.node=null!=t?t:S.createEmptyNode(),null!=e&&(0,l.h)(e,this.bounds),this.halfSize=n,this.depth=o,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*L}advance(t){let e=this.node.children[t];e||(e=S.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=P[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const o=this._childIndex(t);e&&e(this,o),this.advance(o)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new f.Z({shrink:!0}),residents:new f.Z({shrink:!0})}}static acquire(){return S._pool.acquire()}static release(t){S._pool.release(t)}static clearPool(){S._pool.prune()}}function R(t,e){t[0]=Math.min(t[0],e[0]-e[3]),t[1]=Math.min(t[1],e[1]-e[3]),t[2]=Math.min(t[2],e[2]-e[3])}function I(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function F(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function M(t,e,n,o){if(1===e){const e=n(t[0]);(0,l.h)(e,o)}else{C[0]=1/0,C[1]=1/0,C[2]=1/0,D[0]=-1/0,D[1]=-1/0,D[2]=-1/0;for(let o=0;o<e;o++){const e=n(t[o]);x(e[3])&&(R(C,e),I(D,e))}(0,a.p)(o,C,D,.5),o[3]=Math.max(D[0]-C[0],D[1]-C[1],D[2]-C[2])/2}}function v(t,e){let n,o=1/0;for(let i=0;i<8;++i){const r=w(t,e,y[i]);r<o&&(o=r,n=y[i])}return n}function w(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function x(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}S._pool=new u.Z(S),N=b||(b={}),(A=N.DepthOrder||(N.DepthOrder={}))[A.FRONT_TO_BACK=1]="FRONT_TO_BACK",A[A.BACK_TO_FRONT=-1]="BACK_TO_FRONT";const P=[(0,h.f)(-1,-1,-1),(0,h.f)(1,-1,-1),(0,h.f)(-1,1,-1),(0,h.f)(1,1,-1),(0,h.f)(-1,-1,1),(0,h.f)(1,-1,1),(0,h.f)(-1,1,1),(0,h.f)(1,1,1)],y=[(0,h.f)(-1,-1,-1),(0,h.f)(-1,-1,1),(0,h.f)(-1,1,-1),(0,h.f)(-1,1,1),(0,h.f)(1,-1,-1),(0,h.f)(1,-1,1),(0,h.f)(1,1,-1),(0,h.f)(1,1,1)],L=Math.sqrt(3),j=[null],B=(0,l.c)(),z=(0,h.c)(),C=(0,h.c)(),D=(0,h.c)(),H=new f.Z,V=(0,l.c)(),G=(0,l.c)(),U=(0,l.c)(),k=(0,l.c)(),K=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],q=new f.Z,W=[0,0,0,0,0,0,0,0],X=b;var Z=n(73453);function $(t,e,n){const o=(0,l.c)(),i=(0,l.g)(o);return(0,a.q)(i,i,t,.5),(0,a.q)(i,i,e,.5),o[3]=(0,a.o)(i,t),(0,a.g)(i,i,n),o}let J=class{constructor(){this._idToComponent=new Map,this._components=new X((t=>t.bounds)),this._edges=new X((t=>t.bounds)),this._tmpLineSegment=(0,d.Ue)(),this._tmpP1=(0,h.c)(),this._tmpP2=(0,h.c)(),this._tmpP3=(0,h.c)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,s.k_)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>(this._addCandidates(t,e,n),n.length<1e3)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if(null==t.info){const{id:e,uid:o}=t;n.push({id:e,uid:o})}return!0}),t.bounds),!n.length)return;const o={components:n},i=await this.remoteClient.invoke("fetchAllEdgeLocations",o,e??{});for(const t of i.components)this._setFetchEdgeLocations(t)}async add(t){const e=new Q(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>(n.component===e&&t.push(n),!0)),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(null==e||t.uid!==e.uid)return;const n=Z.n_.createView(t.locations),o=new Array(n.count),i=(0,h.c)(),r=(0,h.c)();for(let s=0;s<n.count;s++){n.position0.getVec(s,i),n.position1.getVec(s,r);const c=$(i,r,t.origin),a=new tt(e,s,c);o[s]=a}this._edges.add(o);const{objectIds:s,origin:c}=t;e.info={locations:n,objectIds:s,origin:c}}_addCandidates(t,e,n){const{info:o}=e.component,{origin:i,objectIds:r}=o,s=o.locations,c=s.position0.getVec(e.index,this._tmpP1),h=s.position1.getVec(e.index,this._tmpP2);(0,a.g)(c,c,i),(0,a.g)(h,h,i);const d=r[s.componentIndex.get(e.index)];this._addEdgeCandidate(t,d,c,h,n),this._addVertexCandidate(t,d,c,n),this._addVertexCandidate(t,d,h,n)}_addEdgeCandidate(t,e,n,o,i){if(!t.returnEdge)return;const r=(0,l.g)(t.bounds),s=(0,d.zk)(n,o,this._tmpLineSegment),c=(0,d.nF)(s,r,this._tmpP3);(0,l.n)(t.bounds,c)&&i.push({type:"edge",objectId:e,target:(0,h.g)(c),distance:(0,a.o)(r,c),start:(0,h.g)(n),end:(0,h.g)(o)})}_addVertexCandidate(t,e,n,o){if(!t.returnVertex)return;const i=(0,l.g)(t.bounds);(0,l.n)(t.bounds,n)&&o.push({type:"vertex",objectId:e,target:(0,h.g)(n),distance:(0,a.o)(i,n)})}};J=(0,r._)([(0,c.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],J);const Y=J;class Q{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++Q.uid}}Q.uid=0;class tt{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}},41163:(t,e,n)=>{n.d(e,{G:()=>o});class o{constructor(t,e,n,o,i,r=!1,s=0){this.name=t,this.count=e,this.type=n,this.offset=o,this.stride=i,this.normalized=r,this.divisor=s}}}}]);