define(["exports","./Transforms-b2c3e401","./ComponentDatatype-b3120730","./when-208fe5b0","./Check-5e798bbf","./Cartesian2-e9bb1bb3","./GeometryAttribute-dddfbf98","./GeometryAttributes-b0b294d8","./GeometryPipeline-aac4ecee","./IndexDatatype-4d4b60a0","./WebMercatorProjection-7b54c659"],function(e,P,k,b,v,u,C,w,G,A,c){"use strict";function m(e,t,r){e=b.defaultValue(e,0),t=b.defaultValue(t,0),r=b.defaultValue(r,0),this.value=new Float32Array([e,t,r])}function x(e,t){var r=e.attributes,e=r.position,n=e.values.length/e.componentsPerAttribute;r.batchId=new C.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:1,values:new Float32Array(n)});for(var i=r.batchId.values,o=0;o<n;++o)i[o]=t}function l(e){var t,r=e.instances,n=e.projection,i=e.elementIndexUintSupported,o=e.scene3DOnly,a=e.vertexCacheOptimize,s=e.compressVertices,e=e.modelMatrix,d=r.length;for(y=0;y<d;++y)if(b.defined(r[y].geometry)){t=r[y].geometry.primitiveType;break}for(y=1;y<d;++y)if(b.defined(r[y].geometry)&&r[y].geometry.primitiveType!==t)throw new v.DeveloperError("All instance geometries must have the same primitiveType.");if(!function(e,t,r){var n=!r,i=e.length;if(!n&&1<i)for(var o=e[0].modelMatrix,a=1;a<i;++a)if(!P.Matrix4.equals(o,e[a].modelMatrix)){n=!0;break}if(n)for(a=0;a<i;++a)b.defined(e[a].geometry)&&G.GeometryPipeline.transformToWorldCoordinates(e[a]);else P.Matrix4.multiplyTransformation(t,e[0].modelMatrix,t)}(r,e,o),!o)for(y=0;y<d;++y)b.defined(r[y].geometry)&&G.GeometryPipeline.splitLongitude(r[y]);if(!function(e){for(var t=e.length,r=0;r<t;++r){var n=e[r];b.defined(n.geometry)?x(n.geometry,r):b.defined(n.westHemisphereGeometry)&&b.defined(n.eastHemisphereGeometry)&&(x(n.westHemisphereGeometry,r),x(n.eastHemisphereGeometry,r))}}(r),a)for(y=0;y<d;++y){var p=r[y];b.defined(p.geometry)?(G.GeometryPipeline.reorderForPostVertexCache(p.geometry),G.GeometryPipeline.reorderForPreVertexCache(p.geometry)):b.defined(p.westHemisphereGeometry)&&b.defined(p.eastHemisphereGeometry)&&(G.GeometryPipeline.reorderForPostVertexCache(p.westHemisphereGeometry),G.GeometryPipeline.reorderForPreVertexCache(p.westHemisphereGeometry),G.GeometryPipeline.reorderForPostVertexCache(p.eastHemisphereGeometry),G.GeometryPipeline.reorderForPreVertexCache(p.eastHemisphereGeometry))}var f=G.GeometryPipeline.combineInstances(r);for(d=f.length,y=0;y<d;++y){var u,c,m,h,l=(u=f[y]).attributes;if(o)for(c in l)l.hasOwnProperty(c)&&l[c].componentDatatype===k.ComponentDatatype.DOUBLE&&G.GeometryPipeline.encodeAttribute(u,c,c+"3DHigh",c+"3DLow");else for(c in l)l.hasOwnProperty(c)&&l[c].componentDatatype===k.ComponentDatatype.DOUBLE&&(G.GeometryPipeline.projectTo2D(u,c,m=c+"3D",h=c+"2D",n),b.defined(u.boundingSphere)&&"position"===c&&(u.boundingSphereCV=P.BoundingSphere.fromVertices(u.attributes.position2D.values)),G.GeometryPipeline.encodeAttribute(u,m,m+"High",m+"Low"),G.GeometryPipeline.encodeAttribute(u,h,h+"High",h+"Low"));s&&G.GeometryPipeline.compressVertices(u)}if(!i){for(var g=[],d=f.length,y=0;y<d;++y)u=f[y],g=g.concat(G.GeometryPipeline.fitToUnsignedShortIndices(u));f=g}return f}function g(e,t,r,n){var i,o,a,s=n.length-1;a=0<=s?(i=(s=n[s]).offset+s.count,r[o=s.index].indices.length):r[o=i=0].indices.length;for(var d=e.length,p=0;p<d;++p){var f=e[p][t];b.defined(f)&&(a<i+(f=f.indices.length)&&(i=0,a=r[++o].indices.length),n.push({index:o,offset:i,count:f}),i+=f)}}Object.defineProperties(m.prototype,{componentDatatype:{get:function(){return k.ComponentDatatype.FLOAT}},componentsPerAttribute:{get:function(){return 3}},normalize:{get:function(){return!1}}}),m.fromCartesian3=function(e){return v.Check.defined("offset",e),new m(e.x,e.y,e.z)},m.toValue=function(e,t){return v.Check.defined("offset",e),(t=!b.defined(t)?new Float32Array([e.x,e.y,e.z]):t)[0]=e.x,t[1]=e.y,t[2]=e.z,t};var h={};function i(e,t){for(var r=e.length,n=0;n<r;++n)!function(e,t){var r,n,i=e.attributes;for(r in i)i.hasOwnProperty(r)&&(n=i[r],b.defined(n)&&b.defined(n.values)&&t.push(n.values.buffer));b.defined(e.indices)&&t.push(e.indices.buffer)}(e[n],t)}function o(e){var t=e.length,r=1+(P.BoundingSphere.packedLength+1)*t,n=new Float32Array(r),i=0;n[i++]=t;for(var o=0;o<t;++o){var a=e[o];b.defined(a)?(n[i++]=1,P.BoundingSphere.pack(e[o],n,i)):n[i++]=0,i+=P.BoundingSphere.packedLength}return n}function t(e){for(var t=new Array(e[0]),r=0,n=1;n<e.length;)1===e[n++]&&(t[r]=P.BoundingSphere.unpack(e,n)),++r,n+=P.BoundingSphere.packedLength;return t}h.combineGeometry=function(e){var t,r,n,i,o,a,s=e.instances,d=s.length,p=!1;0<d&&(0<(t=l(e)).length&&(r=G.GeometryPipeline.createAttributeLocations(t[0]),e.createPickOffsets&&(g(i=s,"geometry",o=t,a=[]),g(i,"westHemisphereGeometry",o,a),g(i,"eastHemisphereGeometry",o,a),a=a)),b.defined(s[0].attributes)&&b.defined(s[0].attributes.offset)&&(n=new Array(d),p=!0));for(var f=new Array(d),u=new Array(d),c=0;c<d;++c){var m=s[c],h=m.geometry;b.defined(h)&&(f[c]=h.boundingSphere,u[c]=h.boundingSphereCV,p&&(n[c]=m.geometry.offsetAttribute));h=m.eastHemisphereGeometry,m=m.westHemisphereGeometry;b.defined(h)&&b.defined(m)&&(b.defined(h.boundingSphere)&&b.defined(m.boundingSphere)&&(f[c]=P.BoundingSphere.union(h.boundingSphere,m.boundingSphere)),b.defined(h.boundingSphereCV)&&b.defined(m.boundingSphereCV)&&(u[c]=P.BoundingSphere.union(h.boundingSphereCV,m.boundingSphereCV)))}return{geometries:t,modelMatrix:e.modelMatrix,attributeLocations:r,pickOffsets:a,offsetInstanceExtend:n,boundingSpheres:f,boundingSpheresCV:u}},h.packCreateGeometryResults=function(e,t){var r=new Float64Array(function(e){for(var t=1,r=e.length,n=0;n<r;n++){var i=e[n];if(++t,b.defined(i)){var o,a=i.attributes;for(o in t+=7+2*P.BoundingSphere.packedLength+(b.defined(i.indices)?i.indices.length:0),a)a.hasOwnProperty(o)&&b.defined(a[o])&&(t+=5+a[o].values.length)}}return t}(e)),n=[],i={},o=e.length,a=0;r[a++]=o;for(var s=0;s<o;s++){var d=e[s],p=b.defined(d);if(r[a++]=p?1:0,p){r[a++]=d.primitiveType,r[a++]=d.geometryType,r[a++]=b.defaultValue(d.offsetAttribute,-1);p=b.defined(d.boundingSphere)?1:0;(r[a++]=p)&&P.BoundingSphere.pack(d.boundingSphere,r,a),a+=P.BoundingSphere.packedLength;p=b.defined(d.boundingSphereCV)?1:0;(r[a++]=p)&&P.BoundingSphere.pack(d.boundingSphereCV,r,a),a+=P.BoundingSphere.packedLength;var f,u=d.attributes,c=[];for(f in u)u.hasOwnProperty(f)&&b.defined(u[f])&&(c.push(f),b.defined(i[f])||(i[f]=n.length,n.push(f)));r[a++]=c.length;for(var m=0;m<c.length;m++){var h=c[m],l=u[h];r[a++]=i[h],r[a++]=l.componentDatatype,r[a++]=l.componentsPerAttribute,r[a++]=l.normalize?1:0,r[a++]=l.values.length,r.set(l.values,a),a+=l.values.length}p=b.defined(d.indices)?d.indices.length:0;0<(r[a++]=p)&&(r.set(d.indices,a),a+=p)}}return t.push(r.buffer),{stringTable:n,packedData:r}},h.unpackCreateGeometryResults=function(e){for(var t=e.stringTable,r=e.packedData,n=new Array(r[0]),i=0,o=1;o<r.length;)if(1===r[o++]){var a,s,d=r[o++],p=r[o++],f=r[o++];-1===f&&(f=void 0),1===r[o++]&&(a=P.BoundingSphere.unpack(r,o)),o+=P.BoundingSphere.packedLength,1===r[o++]&&(s=P.BoundingSphere.unpack(r,o)),o+=P.BoundingSphere.packedLength;var u=new w.GeometryAttributes,c=r[o++];for(S=0;S<c;S++){for(var m=t[r[o++]],h=r[o++],l=r[o++],g=0!==r[o++],y=r[o++],b=k.ComponentDatatype.createTypedArray(h,y),v=0;v<y;v++)b[v]=r[o++];u[m]=new C.GeometryAttribute({componentDatatype:h,componentsPerAttribute:l,normalize:g,values:b})}if(0<(y=r[o++]))for(var G=b.length/l,x=A.IndexDatatype.createTypedArray(G,y),S=0;S<y;S++)x[S]=r[o++];n[i++]=new C.Geometry({primitiveType:d,geometryType:p,boundingSphere:a,boundingSphereCV:s,indices:x,attributes:u,offsetAttribute:f})}else n[i++]=void 0;return n},h.packCombineGeometryParameters=function(e,t){for(var r=e.createGeometryResults,n=r.length,i=0;i<n;i++)t.push(r[i].packedData.buffer);return{createGeometryResults:e.createGeometryResults,packedInstances:function(e,t){var r=e.length,n=new Float64Array(1+19*r),i=0;n[i++]=r;for(var o=0;o<r;o++){var a=e[o];P.Matrix4.pack(a.modelMatrix,n,i),i+=P.Matrix4.packedLength,b.defined(a.attributes)&&b.defined(a.attributes.offset)&&(a=a.attributes.offset.value,n[i]=a[0],n[i+1]=a[1],n[i+2]=a[2]),i+=3}return t.push(n.buffer),n}(e.instances,t),ellipsoid:e.ellipsoid,isGeographic:e.projection instanceof P.GeographicProjection,elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:e.modelMatrix,createPickOffsets:e.createPickOffsets}},h.unpackCombineGeometryParameters=function(e){for(var t=function(e){for(var t=e,r=new Array(t[0]),n=0,i=1;i<t.length;){var o,a=P.Matrix4.unpack(t,i);i+=P.Matrix4.packedLength,b.defined(t[i])&&(o={offset:new m(t[i],t[i+1],t[i+2])}),i+=3,r[n++]={modelMatrix:a,attributes:o}}return r}(e.packedInstances),r=e.createGeometryResults,n=r.length,i=0,o=0;o<n;o++)for(var a=h.unpackCreateGeometryResults(r[o]),s=a.length,d=0;d<s;d++){var p=a[d];t[i].geometry=p,++i}var f=u.Ellipsoid.clone(e.ellipsoid);return{instances:t,ellipsoid:f,projection:new(e.isGeographic?P.GeographicProjection:c.WebMercatorProjection)(f),elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:P.Matrix4.clone(e.modelMatrix),createPickOffsets:e.createPickOffsets}},h.packCombineGeometryResults=function(e,t){b.defined(e.geometries)&&i(e.geometries,t);var r=o(e.boundingSpheres),n=o(e.boundingSpheresCV);return t.push(r.buffer,n.buffer),{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:r,boundingSpheresCV:n}},h.unpackCombineGeometryResults=function(e){return{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:t(e.boundingSpheres),boundingSpheresCV:t(e.boundingSpheresCV)}},e.PrimitivePipeline=h});
//# sourceMappingURL=PrimitivePipeline-79188713.js.map