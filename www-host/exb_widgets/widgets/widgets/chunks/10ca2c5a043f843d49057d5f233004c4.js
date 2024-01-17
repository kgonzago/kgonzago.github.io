"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[7714],{57714:(t,e,n)=>{n.r(e),n.d(e,{executeAttachmentQuery:()=>c,fetchAttachments:()=>p,processAttachmentQueryResult:()=>d});var o=n(88256),r=n(66341),i=n(3466),a=n(27707),s=n(42544);function l(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function d(t,e){const n={};for(const r of e){const{parentObjectId:e,parentGlobalId:a,attachmentInfos:l}=r;for(const r of l){const{id:l}=r,d=(0,i.qg)((0,o.Dp)(`${t.path}/${e}/attachments/${l}`)),c=s.Z.fromJSON(r);c.set({url:d,parentObjectId:e,parentGlobalId:a}),n[e]?n[e].push(c):n[e]=[c]}}return n}function c(t,e,n){let o={query:(0,a.A)({...t.query,f:"json",...l(e)})};return n&&(o={...n,...o,query:{...n.query,...o.query}}),(0,r.Z)(t.path+"/queryAttachments",o).then((t=>t.data.attachmentGroups))}async function p(t,e,n){const{objectIds:o}=e,i=[];for(const e of o)i.push((0,r.Z)(t.path+"/"+e+"/attachments",n));return Promise.all(i).then((t=>o.map(((e,n)=>({parentObjectId:e,attachmentInfos:t[n].data.attachmentInfos})))))}},42544:(t,e,n)=>{n.d(e,{Z:()=>p});var o,r=n(36663),i=n(82064),a=n(81977),s=n(7283),l=(n(7753),n(39994),n(40266));const d={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let c=o=class extends i.wq{constructor(t){super(t),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:t}=this,e=function(t){const{exifInfo:e,exifName:n,tagName:o}=t;if(!e||!n||!o)return null;const r=e.find((t=>t.name===n));return r?function(t){const{tagName:e,tags:n}=t;if(!n||!e)return null;const o=n.find((t=>t.name===e));return o?.value||null}({tagName:o,tags:r.tags}):null}({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:t});return d[e]||null}clone(){return new o({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,r._)([(0,a.Cb)({type:String})],c.prototype,"contentType",void 0),(0,r._)([(0,a.Cb)()],c.prototype,"exifInfo",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],c.prototype,"orientationInfo",null),(0,r._)([(0,a.Cb)({type:s.z8})],c.prototype,"id",void 0),(0,r._)([(0,a.Cb)({type:String})],c.prototype,"globalId",void 0),(0,r._)([(0,a.Cb)({type:String})],c.prototype,"keywords",void 0),(0,r._)([(0,a.Cb)({type:String})],c.prototype,"name",void 0),(0,r._)([(0,a.Cb)({json:{read:!1}})],c.prototype,"parentGlobalId",void 0),(0,r._)([(0,a.Cb)({json:{read:!1}})],c.prototype,"parentObjectId",void 0),(0,r._)([(0,a.Cb)({type:s.z8})],c.prototype,"size",void 0),(0,r._)([(0,a.Cb)({json:{read:!1}})],c.prototype,"url",void 0),c=o=(0,r._)([(0,l.j)("esri.layers.support.AttachmentInfo")],c);const p=c}}]);