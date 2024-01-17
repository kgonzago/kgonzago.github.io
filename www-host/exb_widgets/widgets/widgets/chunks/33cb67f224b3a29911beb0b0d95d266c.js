"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[3108,8611],{50516:(e,t,r)=>{r.d(t,{D:()=>i});var o=r(71760);function i(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,o.l)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},71760:(e,t,r)=>{function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>o})},73108:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ee});var o=r(36663),i=r(44308),n=r(66341),s=r(70375),l=r(67134),a=r(13802),p=r(15842),d=r(86745),u=r(33926),c=r(3466),y=r(81977),h=r(7283),f=r(34248),m=r(40266),v=r(39835),b=r(38481),w=r(91223),g=r(87232),S=r(43330),_=r(18241),C=r(95874),I=r(93902),x=r(79438),T=r(82064);r(7753),r(39994);let j=class extends T.wq{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,o._)([(0,y.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"field",void 0),(0,o._)([(0,y.Cb)({readOnly:!0,nonNullable:!0,json:{read:!1}})],j.prototype,"type",void 0),j=(0,o._)([(0,m.j)("esri.layers.pointCloudFilters.PointCloudFilter")],j);const R=j;var Z;let P=Z=class extends R{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new Z({field:this.field,requiredClearBits:(0,l.d9)(this.requiredClearBits),requiredSetBits:(0,l.d9)(this.requiredSetBits)})}};(0,o._)([(0,y.Cb)({type:[h.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],P.prototype,"requiredClearBits",void 0),(0,o._)([(0,y.Cb)({type:[h.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],P.prototype,"requiredSetBits",void 0),(0,o._)([(0,x.J)({pointCloudBitfieldFilter:"bitfield"})],P.prototype,"type",void 0),P=Z=(0,o._)([(0,m.j)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],P);const V=P;var O;let N=O=class extends R{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new O({field:this.field,includedReturns:(0,l.d9)(this.includedReturns)})}};(0,o._)([(0,y.Cb)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],N.prototype,"includedReturns",void 0),(0,o._)([(0,x.J)({pointCloudReturnFilter:"return"})],N.prototype,"type",void 0),N=O=(0,o._)([(0,m.j)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],N);const q=N;var F;let A=F=class extends R{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new F({field:this.field,mode:this.mode,values:(0,l.d9)(this.values)})}};(0,o._)([(0,y.Cb)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],A.prototype,"mode",void 0),(0,o._)([(0,x.J)({pointCloudValueFilter:"value"})],A.prototype,"type",void 0),(0,o._)([(0,y.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],A.prototype,"values",void 0),A=F=(0,o._)([(0,m.j)("esri.layers.pointCloudFilters.PointCloudValueFilter")],A);const E={key:"type",base:R,typeMap:{value:A,bitfield:V,return:q}};var K,k=r(51599),z=r(12512),B=r(89076),U=r(18228),L=r(99723),D=r(46999);let M=K=class extends D.Z{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new K({...this.cloneProperties(),field:(0,l.d9)(this.field)})}};(0,o._)([(0,x.J)({pointCloudRGBRenderer:"point-cloud-rgb"})],M.prototype,"type",void 0),(0,o._)([(0,y.Cb)({type:String,json:{write:!0}})],M.prototype,"field",void 0),M=K=(0,o._)([(0,m.j)("esri.renderers.PointCloudRGBRenderer")],M);const $=M;var J=r(5947),G=r(60948);const W={key:"type",base:D.Z,typeMap:{"point-cloud-class-breaks":L.Z,"point-cloud-rgb":$,"point-cloud-stretch":J.Z,"point-cloud-unique-value":G.Z},errorContext:"renderer"};var H=r(83772),X=r(10171);const Q=(0,B.v)();let Y=class extends((0,I.Vt)((0,g.Y)((0,S.q)((0,_.I)((0,C.M)((0,p.R)((0,w.V)(b.Z)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t?.domain?t.domain:null}readServiceFields(e,t,r){return Array.isArray(e)?e.map((e=>{const t=new z.Z;return"FieldTypeInteger"===e.type&&((e=(0,l.d9)(e)).type="esriFieldTypeInteger"),t.read(e,r),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new z.Z({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,r,o){(0,d.RB)("layerDefinition.drawingInfo.renderer",e.write({},o),t)}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(u.r9).then((()=>this._fetchService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){const t=(0,X.eZ)(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const r=e.fieldInfos?.find((e=>e.fieldName===t.name));if(!r)return;const o=new U.Z({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],r.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const r=e.fieldInfos?.find((e=>e.fieldName===t.name));if(!r)return;const o=new U.Z({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],r.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new s.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new s.Z("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.attributeStorageInfo)if(e.name===r.name){const r=(0,c.v_)(this.parsedUrl.path,`./statistics/${e.key}`);return(0,n.Z)(r,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new s.Z("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(I.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(I.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new s.Z("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new s.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;(0,H.LR)(a.Z.getLogger(this),(0,H.Uy)("Point cloud layers","absolute-height",e)),(0,H.LR)(a.Z.getLogger(this),(0,H.kf)("Point cloud layers",e))}};(0,o._)([(0,y.Cb)({type:["PointCloudLayer"]})],Y.prototype,"operationalLayerType",void 0),(0,o._)([(0,y.Cb)(k.C_)],Y.prototype,"popupEnabled",void 0),(0,o._)([(0,y.Cb)({type:i.Z,json:{name:"popupInfo",write:!0}})],Y.prototype,"popupTemplate",void 0),(0,o._)([(0,y.Cb)({readOnly:!0,json:{read:!1}})],Y.prototype,"defaultPopupTemplate",null),(0,o._)([(0,y.Cb)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],Y.prototype,"opacity",void 0),(0,o._)([(0,y.Cb)({type:["show","hide"]})],Y.prototype,"listMode",void 0),(0,o._)([(0,y.Cb)({types:[E],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],Y.prototype,"filters",void 0),(0,o._)([(0,y.Cb)({type:[z.Z]})],Y.prototype,"fields",void 0),(0,o._)([(0,y.Cb)(Q.fieldsIndex)],Y.prototype,"fieldsIndex",void 0),(0,o._)([(0,f.r)("service","fields",["fields","attributeStorageInfo"])],Y.prototype,"readServiceFields",null),(0,o._)([(0,y.Cb)(Q.outFields)],Y.prototype,"outFields",void 0),(0,o._)([(0,y.Cb)({readOnly:!0})],Y.prototype,"attributeStorageInfo",void 0),(0,o._)([(0,y.Cb)(k.PV)],Y.prototype,"elevationInfo",null),(0,o._)([(0,y.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],Y.prototype,"path",void 0),(0,o._)([(0,y.Cb)(k.rn)],Y.prototype,"legendEnabled",void 0),(0,o._)([(0,y.Cb)({types:W,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:W},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],Y.prototype,"renderer",void 0),(0,o._)([(0,v.c)("renderer")],Y.prototype,"writeRenderer",null),(0,o._)([(0,y.Cb)({json:{read:!1},readOnly:!0})],Y.prototype,"type",void 0),Y=(0,o._)([(0,m.j)("esri.layers.PointCloudLayer")],Y);const ee=Y},93902:(e,t,r)=>{r.d(t,{xp:()=>O,Vt:()=>T});var o=r(36663),i=r(66341),n=r(70375),s=r(13802),l=r(33926),a=r(3466),p=r(81977),d=(r(7283),r(7753),r(39994),r(34248)),u=r(40266),c=r(39835),y=r(50516),h=r(91772),f=r(64307),m=r(14685),v=r(20692),b=r(51599),w=r(40909);var g=r(93968),S=r(53110),_=r(49278),C=r(60629);const I="esri.layers.mixins.SceneService",x=s.Z.getLogger(I),T=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,l.Ds)((async(e,t,r)=>{switch(e){case O.SAVE:return this._save(t);case O.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return m.Z.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new m.Z(o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return h.Z.fromJSON(o,r)}const o=t.store,i=this._readSpatialReference(t);return null==i||null==o?.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<j))?null:new h.Z({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return(0,v.a7)(this.url,t.name);let o=t.name;if(!o&&this.url){const e=(0,v.Qc)(this.url);null!=e&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,v.ld)(o)}set url(e){const t=(0,v.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:x});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,v.wH)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,a.mN)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,w.T)(this.parsedUrl.path,this.rootNode,e,this.apiKey,x,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,r=e.rootPage?.nodes?.[t];if(null==r?.obb?.center||null==r.obb.halfSize)throw new n.Z("sceneservice:invalid-node-page","Invalid node page.");if(r.obb.center[0]<j||null==this.fullExtent||this.fullExtent.hasZ)return;const o=r.obb.halfSize,i=r.obb.center[2],s=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=i-s,this.fullExtent.zmax=i+s}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<j)return;const r=t[2],o=t[3],{fullExtent:i}=this;i&&(i.zmin=r-o,i.zmax=r+o)}}async _fetchService(e){if(null==this.url)throw new n.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,i.Z)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await(0,i.Z)(this.parsedUrl?.path??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let r=!1;if(t.data.layerType&&"Voxel"===t.data.layerType&&(r=!0),r)return this._fetchVoxelServiceLayer();const o=t.data;this.read(o,this._getServiceContext()),this.validateLayer(o)}async _fetchVoxelServiceLayer(e){const t=(await(0,i.Z)(this.parsedUrl?.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const t of o)e.typeKeywords.push(t);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===R.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const r={...V,...t};let o=S.default.from(e);if(!o)throw new n.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");(0,_.w)(o),o.id&&(o=o.clone(),o.id=null);const i=o.portal||g.Z.getDefault();await this._ensureLoadBeforeSave(),o.type=P,o.portal=i;const s={origin:"portal-item",url:null,messages:[],portal:i,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},l={layers:[this.write({},s)]};return await Promise.all(s.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(l,s,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,R.newItem),await i.signIn(),await(i.user?.addItem({item:o,folder:r?.folder,data:l})),await(0,C.Hn)(this.resourceReferences,s,null),this.portalItem=o,(0,y.D)(s),s.portalItem=o,o}async _save(e){const t={...V,...e};if(!this.portalItem)throw new n.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if((0,_.w)(this.portalItem),this.portalItem.type!==P)throw new n.Z("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${P}"`);await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&(0,a.mN)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||g.Z.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write({},r)]};return await Promise.all(r.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,R.existingItem),await(0,C.bx)(this.portalItem,o,this.resourceReferences,r,null),(0,y.D)(r),this.portalItem}async _validateAgainstJSONSchema(e,t,r){let o=t.messages?.filter((e=>"error"===e.type)).map((e=>new n.Z(e.name,e.message,e.details)))??[];r?.validationOptions?.ignoreUnsupported&&(o=o.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)));const i=r?.validationOptions,s=i?.enabled,l=null;if(s&&l){const t=(await l()).validate(e,r.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(x.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===i.failPolicy){const e=t.map((e=>new n.Z("sceneservice:schema-validation",e))).concat(o);throw new n.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(o.length>0)throw new n.Z("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}};return(0,o._)([(0,p.Cb)(b.id)],t.prototype,"id",void 0),(0,o._)([(0,p.Cb)({type:m.Z})],t.prototype,"spatialReference",void 0),(0,o._)([(0,d.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,o._)([(0,p.Cb)({type:h.Z})],t.prototype,"fullExtent",void 0),(0,o._)([(0,d.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,o._)([(0,p.Cb)({readOnly:!0,type:f.Z})],t.prototype,"heightModelInfo",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,o._)([(0,p.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,o._)([(0,d.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,o._)([(0,p.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,o._)([(0,p.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,o._)([(0,p.Cb)({type:String})],t.prototype,"title",void 0),(0,o._)([(0,d.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,o._)([(0,d.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,o._)([(0,p.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,o._)([(0,p.Cb)(b.HQ)],t.prototype,"url",null),(0,o._)([(0,c.c)("url")],t.prototype,"writeUrl",null),(0,o._)([(0,p.Cb)()],t.prototype,"parsedUrl",null),(0,o._)([(0,p.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,o._)([(0,p.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,o._)([(0,u.j)(I)],t),t},j=-1e38;var R,Z;(Z=R||(R={}))[Z.existingItem=0]="existingItem",Z[Z.newItem=1]="newItem";const P="Scene Service",V={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var O;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(O||(O={}))},40909:(e,t,r)=>{r.d(t,{T:()=>n});var o=r(66341),i=r(70375);async function n(e,t,r,n,s,l){let a=null;if(null!=r){const t=`${e}/nodepages/`,i=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,o.Z)(i,{query:{f:"json",token:n},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(e){null!=s&&s.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",i,e),a=e}}if(!t)return null;const p=t?.split("/").pop(),d=`${e}/nodes/`,u=d+p;try{return{type:"node",rootNode:(await(0,o.Z)(u,{query:{f:"json",token:n},responseType:"json",signal:l})).data,urlPrefix:d}}catch(e){throw new i.Z("sceneservice:root-node-missing","Root node missing.",{pageError:a,nodeError:e,url:u})}}},68611:(e,t,r)=>{r.r(t),r.d(t,{addOrUpdateResource:()=>l,contentToBlob:()=>c,fetchResources:()=>s,getSiblingOfSameType:()=>y,getSiblingOfSameTypeI:()=>h,removeAllResources:()=>p,removeResource:()=>a,splitPrefixFileNameAndExtension:()=>u});var o=r(66341),i=r(70375),n=r(3466);async function s(e,t={},r){await e.load(r);const o=(0,n.v_)(e.itemUrl,"resources"),{start:i=1,num:s=10,sortOrder:l="asc",sortField:a="created"}=t,p={query:{start:i,num:s,sortOrder:l,sortField:a,token:e.apiKey},signal:r?.signal},d=await e.portal.request(o,p);return{total:d.total,nextStart:d.nextStart,resources:d.resources.map((({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)})))}}async function l(e,t,r,o){if(!e.hasPath())throw new i.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const s=e.portalItem;await s.load(o);const l=(0,n.v_)(s.userItemUrl,"add"===t?"addResources":"updateResources"),[a,p]=d(e.path),u=new FormData;return a&&"."!==a&&u.append("resourcesPrefix",a),null!=o&&o.compress&&u.append("compress","true"),u.append("fileName",p),u.append("file",r,p),u.append("f","json"),o?.access&&u.append("access",o.access),await s.portal.request(l,{method:"post",body:u,signal:o?.signal}),e}async function a(e,t,r){if(!t.hasPath())throw new i.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=(0,n.v_)(e.userItemUrl,"removeResources");await e.portal.request(o,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function p(e,t){await e.load(t);const r=(0,n.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function d(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function u(e){const[t,r]=function(e){const t=(0,n.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[o,i]=d(t);return[o,i,r]}async function c(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,o.Z)(e.url,{responseType:"blob"})).data}function y(e,t){if(!e.hasPath())return null;const[r,,o]=u(e.path);return e.portalItem.resourceFromPath((0,n.v_)(r,t+o))}function h(e,t){if(!e.hasPath())return null;const[r,,o]=u(e.path);return e.portalItem.resourceFromPath((0,n.v_)(r,t+o))}},99723:(e,t,r)=>{r.d(t,{Z:()=>b});var o,i=r(36663),n=r(67134),s=r(81977),l=r(7283),a=r(79438),p=r(40266),d=r(46999),u=r(24794),c=r(30936),y=r(82064);let h=o=class extends y.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new o({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,n.d9)(this.color)})}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,i._)([(0,s.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],h.prototype,"minValue",void 0),(0,i._)([(0,s.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],h.prototype,"maxValue",void 0),(0,i._)([(0,s.Cb)({type:c.Z,json:{type:[l.z8],write:!0}})],h.prototype,"color",void 0),h=o=(0,i._)([(0,p.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],h);const f=h;var m;let v=m=class extends d.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new m({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,n.d9)(this.colorClassBreakInfos),legendOptions:(0,n.d9)(this.legendOptions)})}};(0,i._)([(0,a.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],v.prototype,"type",void 0),(0,i._)([(0,s.Cb)({json:{write:!0},type:String})],v.prototype,"field",void 0),(0,i._)([(0,s.Cb)({type:u.I,json:{write:!0}})],v.prototype,"legendOptions",void 0),(0,i._)([(0,s.Cb)({type:d.Z.fieldTransformTypeKebabDict.apiValues,json:{type:d.Z.fieldTransformTypeKebabDict.jsonValues,read:d.Z.fieldTransformTypeKebabDict.read,write:d.Z.fieldTransformTypeKebabDict.write}})],v.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.Cb)({type:[f],json:{write:!0}})],v.prototype,"colorClassBreakInfos",void 0),v=m=(0,i._)([(0,p.j)("esri.renderers.PointCloudClassBreaksRenderer")],v);const b=v},46999:(e,t,r)=>{r.d(t,{Z:()=>I});var o,i=r(36663),n=r(25709),s=r(82064),l=r(67134),a=r(81977),p=(r(7283),r(40266));r(7753),r(39994);let d=o=class extends s.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new o({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],d.prototype,"field",void 0),(0,i._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"minValue",void 0),(0,i._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"maxValue",void 0),d=o=(0,i._)([(0,p.j)("esri.renderers.support.pointCloud.ColorModulation")],d);const u=d,c=new n.X({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let y=class extends s.wq{};(0,i._)([(0,a.Cb)({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:c.write}})],y.prototype,"type",void 0),y=(0,i._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],y);const h=y;var f,m=r(79438);let v=f=class extends h{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new f({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,i._)([(0,m.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],v.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],v.prototype,"size",void 0),(0,i._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],v.prototype,"useRealWorldSymbolSizes",void 0),v=f=(0,i._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],v);const b=v;var w;let g=w=class extends h{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new w({scaleFactor:this.scaleFactor})}};(0,i._)([(0,m.J)({pointCloudSplatAlgorithm:"splat"})],g.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],g.prototype,"scaleFactor",void 0),g=w=(0,i._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],g);const S={key:"type",base:h,typeMap:{"fixed-size":b,splat:g}},_=(0,n.w)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let C=class extends s.wq{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,l.d9)(this.pointSizeAlgorithm),colorModulation:(0,l.d9)(this.colorModulation),pointsPerInch:(0,l.d9)(this.pointsPerInch)}}};(0,i._)([(0,a.Cb)({type:_.apiValues,readOnly:!0,nonNullable:!0,json:{type:_.jsonValues,read:!1,write:_.write}})],C.prototype,"type",void 0),(0,i._)([(0,a.Cb)({types:S,json:{write:!0}})],C.prototype,"pointSizeAlgorithm",void 0),(0,i._)([(0,a.Cb)({type:u,json:{write:!0}})],C.prototype,"colorModulation",void 0),(0,i._)([(0,a.Cb)({json:{write:!0},nonNullable:!0,type:Number})],C.prototype,"pointsPerInch",void 0),C=(0,i._)([(0,p.j)("esri.renderers.PointCloudRenderer")],C),(C||(C={})).fieldTransformTypeKebabDict=new n.X({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const I=C},5947:(e,t,r)=>{r.d(t,{Z:()=>y});var o,i=r(36663),n=r(67134),s=r(81977),l=(r(7283),r(79438)),a=r(40266),p=r(46999),d=r(24794),u=r(68844);let c=o=class extends p.Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new o({...this.cloneProperties(),field:(0,n.d9)(this.field),fieldTransformType:(0,n.d9)(this.fieldTransformType),stops:(0,n.d9)(this.stops),legendOptions:(0,n.d9)(this.legendOptions)})}};(0,i._)([(0,l.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],c.prototype,"type",void 0),(0,i._)([(0,s.Cb)({json:{write:!0},type:String})],c.prototype,"field",void 0),(0,i._)([(0,s.Cb)({type:d.I,json:{write:!0}})],c.prototype,"legendOptions",void 0),(0,i._)([(0,s.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.Cb)({type:[u.Z],json:{write:!0}})],c.prototype,"stops",void 0),c=o=(0,i._)([(0,a.j)("esri.renderers.PointCloudStretchRenderer")],c);const y=c},60948:(e,t,r)=>{r.d(t,{Z:()=>b});var o,i=r(36663),n=r(67134),s=r(81977),l=r(7283),a=r(79438),p=r(40266),d=r(46999),u=r(24794),c=r(30936),y=r(82064);let h=o=class extends y.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new o({description:this.description,label:this.label,values:(0,n.d9)(this.values),color:(0,n.d9)(this.color)})}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,i._)([(0,s.Cb)({type:[String],json:{write:!0}})],h.prototype,"values",void 0),(0,i._)([(0,s.Cb)({type:c.Z,json:{type:[l.z8],write:!0}})],h.prototype,"color",void 0),h=o=(0,i._)([(0,p.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],h);const f=h;var m;let v=m=class extends d.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new m({...this.cloneProperties(),field:(0,n.d9)(this.field),fieldTransformType:(0,n.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,n.d9)(this.colorUniqueValueInfos),legendOptions:(0,n.d9)(this.legendOptions)})}};(0,i._)([(0,a.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],v.prototype,"type",void 0),(0,i._)([(0,s.Cb)({json:{write:!0},type:String})],v.prototype,"field",void 0),(0,i._)([(0,s.Cb)({type:d.Z.fieldTransformTypeKebabDict.apiValues,json:{type:d.Z.fieldTransformTypeKebabDict.jsonValues,read:d.Z.fieldTransformTypeKebabDict.read,write:d.Z.fieldTransformTypeKebabDict.write}})],v.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.Cb)({type:[f],json:{write:!0}})],v.prototype,"colorUniqueValueInfos",void 0),(0,i._)([(0,s.Cb)({type:u.I,json:{write:!0}})],v.prototype,"legendOptions",void 0),v=m=(0,i._)([(0,p.j)("esri.renderers.PointCloudUniqueValueRenderer")],v);const b=v},83772:(e,t,r)=>{function o(e,t){return t?.mode?t.mode:function(e){return e?p:d}(e).mode}function i(e,t){return o(null!=e&&e.hasZ,t)}function n(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function s(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function l(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function a(e,t){t&&e.warn(".elevationInfo=",t)}r.d(t,{LR:()=>a,Uy:()=>n,VW:()=>i,Wb:()=>s,kf:()=>l}),r(91478);const p={mode:"absolute-height",offset:0},d={mode:"on-the-ground",offset:null}},49278:(e,t,r)=>{r.d(t,{w:()=>s});var o=r(51366),i=r(70375),n=r(99522);function s(e){if(o.Z.apiKey&&(0,n.r)(e.portal.url))throw new i.Z("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}},60629:(e,t,r)=>{r.d(t,{Hn:()=>a,Pl:()=>h,bx:()=>p});var o=r(67979),i=r(70375),n=r(33926),s=r(12173),l=r(68611);async function a(e,t,r=null){const o=await d(e,t,r);await u(o,t,r)}async function p(e,t,r,o,i=null){const n=await d(r,o,i);await e.update({data:t}),await u(n,o,i)}async function d(e,t,r=null){if(!t?.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map((e=>e.resource.path))),p=new Set,d=[];a.forEach((t=>{o.delete(t),e.paths.push(t)}));for(const i of t.resources.toUpdate)if(o.delete(i.resource.path),a.has(i.resource.path)||p.has(i.resource.path)){const{resource:t,content:o,finish:n,error:a}=i,p=(0,l.getSiblingOfSameTypeI)(t,(0,s.DO)());e.paths.push(p.path),d.push(c({resource:p,content:o,compress:i.compress,finish:n,error:a},r))}else e.paths.push(i.resource.path),d.push(y(i,r)),p.add(i.resource.path);for(const i of t.resources.toAdd)e.paths.push(i.resource.path),o.has(i.resource.path)?o.delete(i.resource.path):d.push(c(i,r));if(0===d.length)return o;const u=await(0,n.UO)(d);if((0,n.k_)(r),u.length>0)throw new i.Z("save:resources","Failed to save one or more resources",{errors:u});return o}async function u(e,t,r=null){if(!e||!t.portalItem)return;const o=[];for(const i of e){const e=t.portalItem.resourceFromPath(i);o.push(e.portalItem.removeResource(e,r))}await(0,n.as)(o)}async function c(e,t){const r={...null!=t?t:{},compress:e.compress},i=await(0,o.q6)(e.resource.portalItem.addResource(e.resource,await(0,l.contentToBlob)(e.content),r));if(!0!==i.ok)throw e.error?.(i.error),i.error;e.finish?.(e.resource)}async function y(e,t){const r=await(0,o.q6)(e.resource.update(await(0,l.contentToBlob)(e.content),t));if(!0!==r.ok)throw e.error?.(r.error),r.error;e.finish?.(e.resource)}async function h(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}}}]);