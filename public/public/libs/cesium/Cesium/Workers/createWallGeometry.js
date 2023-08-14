define(["./defaultValue-040c41f9","./Matrix3-f3e9d70a","./Transforms-bf0664c5","./ComponentDatatype-dd0b58d1","./GeometryAttribute-716f70e8","./GeometryAttributes-52134c76","./IndexDatatype-eddea9c9","./Math-8e567554","./VertexFormat-848ec33d","./WallGeometryLibrary-4662dbad","./Matrix2-dd990207","./RuntimeError-3c5db370","./combine-6eb6e848","./WebGLConstants-f7267ced","./arrayRemoveDuplicates-bb49591c","./PolylinePipeline-e6512916","./EllipsoidGeodesic-3e3c4cdf","./EllipsoidRhumbLine-10115453","./IntersectionTests-d8d3e347","./Plane-cf08f792"],(function(e,t,n,i,a,o,r,s,l,m,d,u,c,p,y,f,g,h,C,x){"use strict";const b=new t.Cartesian3,A=new t.Cartesian3,_=new t.Cartesian3,E=new t.Cartesian3,w=new t.Cartesian3,F=new t.Cartesian3,v=new t.Cartesian3;function L(n){const i=(n=e.defaultValue(n,e.defaultValue.EMPTY_OBJECT)).positions,a=n.maximumHeights,o=n.minimumHeights,r=e.defaultValue(n.vertexFormat,l.VertexFormat.DEFAULT),m=e.defaultValue(n.granularity,s.CesiumMath.RADIANS_PER_DEGREE),d=e.defaultValue(n.ellipsoid,t.Ellipsoid.WGS84);this._positions=i,this._minimumHeights=o,this._maximumHeights=a,this._vertexFormat=l.VertexFormat.clone(r),this._granularity=m,this._ellipsoid=t.Ellipsoid.clone(d),this._workerName="createWallGeometry";let u=1+i.length*t.Cartesian3.packedLength+2;e.defined(o)&&(u+=o.length),e.defined(a)&&(u+=a.length),this.packedLength=u+t.Ellipsoid.packedLength+l.VertexFormat.packedLength+1}L.pack=function(n,i,a){let o;a=e.defaultValue(a,0);const r=n._positions;let s=r.length;for(i[a++]=s,o=0;o<s;++o,a+=t.Cartesian3.packedLength)t.Cartesian3.pack(r[o],i,a);const m=n._minimumHeights;if(s=e.defined(m)?m.length:0,i[a++]=s,e.defined(m))for(o=0;o<s;++o)i[a++]=m[o];const d=n._maximumHeights;if(s=e.defined(d)?d.length:0,i[a++]=s,e.defined(d))for(o=0;o<s;++o)i[a++]=d[o];return t.Ellipsoid.pack(n._ellipsoid,i,a),a+=t.Ellipsoid.packedLength,l.VertexFormat.pack(n._vertexFormat,i,a),i[a+=l.VertexFormat.packedLength]=n._granularity,i};const V=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),k=new l.VertexFormat,H={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:V,vertexFormat:k,granularity:void 0};return L.unpack=function(n,i,a){let o;i=e.defaultValue(i,0);let r=n[i++];const s=new Array(r);for(o=0;o<r;++o,i+=t.Cartesian3.packedLength)s[o]=t.Cartesian3.unpack(n,i);let m,d;if(r=n[i++],r>0)for(m=new Array(r),o=0;o<r;++o)m[o]=n[i++];if(r=n[i++],r>0)for(d=new Array(r),o=0;o<r;++o)d[o]=n[i++];const u=t.Ellipsoid.unpack(n,i,V);i+=t.Ellipsoid.packedLength;const c=l.VertexFormat.unpack(n,i,k),p=n[i+=l.VertexFormat.packedLength];return e.defined(a)?(a._positions=s,a._minimumHeights=m,a._maximumHeights=d,a._ellipsoid=t.Ellipsoid.clone(u,a._ellipsoid),a._vertexFormat=l.VertexFormat.clone(c,a._vertexFormat),a._granularity=p,a):(H.positions=s,H.minimumHeights=m,H.maximumHeights=d,H.granularity=p,new L(H))},L.fromConstantHeights=function(t){const n=(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions;let i,a;const o=t.minimumHeight,r=t.maximumHeight,s=e.defined(o),l=e.defined(r);if(s||l){const e=n.length;i=s?new Array(e):void 0,a=l?new Array(e):void 0;for(let t=0;t<e;++t)s&&(i[t]=o),l&&(a[t]=r)}return new L({positions:n,maximumHeights:a,minimumHeights:i,ellipsoid:t.ellipsoid,vertexFormat:t.vertexFormat})},L.createGeometry=function(l){const d=l._positions,u=l._minimumHeights,c=l._maximumHeights,p=l._vertexFormat,y=l._granularity,f=l._ellipsoid,g=m.WallGeometryLibrary.computePositions(f,d,c,u,y,!0);if(!e.defined(g))return;const h=g.bottomPositions,C=g.topPositions,x=g.numCorners;let L=C.length,V=2*L;const k=p.position?new Float64Array(V):void 0,H=p.normal?new Float32Array(V):void 0,G=p.tangent?new Float32Array(V):void 0,D=p.bitangent?new Float32Array(V):void 0,P=p.st?new Float32Array(V/3*2):void 0;let T,z=0,O=0,R=0,S=0,I=0,M=v,N=F,W=w,B=!0;L/=3;let U=0;const q=1/(L-x-1);for(T=0;T<L;++T){const e=3*T,n=t.Cartesian3.fromArray(C,e,b),i=t.Cartesian3.fromArray(h,e,A);if(p.position&&(k[z++]=i.x,k[z++]=i.y,k[z++]=i.z,k[z++]=n.x,k[z++]=n.y,k[z++]=n.z),p.st&&(P[I++]=U,P[I++]=0,P[I++]=U,P[I++]=1),p.normal||p.tangent||p.bitangent){let i=t.Cartesian3.clone(t.Cartesian3.ZERO,E);const a=t.Cartesian3.subtract(n,f.geodeticSurfaceNormal(n,A),A);if(T+1<L&&(i=t.Cartesian3.fromArray(C,e+3,E)),B){const e=t.Cartesian3.subtract(i,n,_),o=t.Cartesian3.subtract(a,n,b);M=t.Cartesian3.normalize(t.Cartesian3.cross(o,e,M),M),B=!1}t.Cartesian3.equalsEpsilon(n,i,s.CesiumMath.EPSILON10)?B=!0:(U+=q,p.tangent&&(N=t.Cartesian3.normalize(t.Cartesian3.subtract(i,n,N),N)),p.bitangent&&(W=t.Cartesian3.normalize(t.Cartesian3.cross(M,N,W),W))),p.normal&&(H[O++]=M.x,H[O++]=M.y,H[O++]=M.z,H[O++]=M.x,H[O++]=M.y,H[O++]=M.z),p.tangent&&(G[S++]=N.x,G[S++]=N.y,G[S++]=N.z,G[S++]=N.x,G[S++]=N.y,G[S++]=N.z),p.bitangent&&(D[R++]=W.x,D[R++]=W.y,D[R++]=W.z,D[R++]=W.x,D[R++]=W.y,D[R++]=W.z)}}const J=new o.GeometryAttributes;p.position&&(J.position=new a.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:k})),p.normal&&(J.normal=new a.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:H})),p.tangent&&(J.tangent=new a.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:G})),p.bitangent&&(J.bitangent=new a.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:D})),p.st&&(J.st=new a.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:P}));const Y=V/3;V-=6*(x+1);const Z=r.IndexDatatype.createTypedArray(Y,V);let j=0;for(T=0;T<Y-2;T+=2){const e=T,n=T+2,i=t.Cartesian3.fromArray(k,3*e,b),a=t.Cartesian3.fromArray(k,3*n,A);if(t.Cartesian3.equalsEpsilon(i,a,s.CesiumMath.EPSILON10))continue;const o=T+1,r=T+3;Z[j++]=o,Z[j++]=e,Z[j++]=r,Z[j++]=r,Z[j++]=e,Z[j++]=n}return new a.Geometry({attributes:J,indices:Z,primitiveType:a.PrimitiveType.TRIANGLES,boundingSphere:new n.BoundingSphere.fromVertices(k)})},function(n,i){return e.defined(i)&&(n=L.unpack(n,i)),n._ellipsoid=t.Ellipsoid.clone(n._ellipsoid),L.createGeometry(n)}}));