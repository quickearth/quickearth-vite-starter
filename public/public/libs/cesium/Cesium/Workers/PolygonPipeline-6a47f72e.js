define(["exports","./Cartesian2-e9bb1bb3","./Check-5e798bbf","./ComponentDatatype-b3120730","./when-208fe5b0","./EllipsoidRhumbLine-938626ba","./GeometryAttribute-dddfbf98","./Math-56f06cd5","./WebGLConstants-76bb35d1"],function(e,R,L,k,T,D,G,W,t){"use strict";function n(e,t,n){n=n||2;var r,i,a,u,x,o=t&&t.length,s=o?t[0]*n:e.length,h=c(e,0,s,n,!0),p=[];if(!h||h.next===h.prev)return p;if(o&&(h=function(e,t,n,r){var i,a,u,x,o=[];for(i=0,a=t.length;i<a;i++)u=t[i]*r,x=i<a-1?t[i+1]*r:e.length,(x=c(e,u,x,r,!1))===x.next&&(x.steiner=!0),o.push(function(e){var t=e,n=e;for(;(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next,t!==e;);return n}(x));for(o.sort(C),i=0;i<o.length;i++)!function(e,t){(t=function(e,t){var n,r=t,i=e.x,a=e.y,u=-1/0;do{if(a<=r.y&&a>=r.next.y&&r.next.y!==r.y){var x=r.x+(a-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(x<=i&&u<x){if((u=x)===i){if(a===r.y)return r;if(a===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}}while(r=r.next,r!==t);if(!n)return null;if(i===u)return n;var o,s=n,h=n.x,p=n.y,f=1/0;r=n;for(;i>=r.x&&r.x>=h&&i!==r.x&&g(a<p?i:u,a,h,p,a<p?u:i,a,r.x,r.y)&&(o=Math.abs(a-r.y)/(i-r.x),w(r,e)&&(o<f||o===f&&(r.x>n.x||r.x===n.x&&function(e,t){return b(e.prev,e,t.prev)<0&&b(t.next,e,e.next)<0}(n,r)))&&(n=r,f=o)),r=r.next,r!==s;);return n}(e,t))&&v(e=E(t,e),e.next)}(o[i],n),n=v(n,n.next);return n}(e,t,h,n)),e.length>80*n){for(var f=r=e[0],l=i=e[1],y=n;y<s;y+=n)(a=e[y])<f&&(f=a),(u=e[y+1])<l&&(l=u),r<a&&(r=a),i<u&&(i=u);x=0!==(x=Math.max(r-f,i-l))?1/x:0}return d(h,p,n,f,l,x),p}function c(e,t,n,r,i){var a,u;if(i===0<M(e,t,n,r))for(a=t;a<n;a+=r)u=x(a,e[a],e[a+1],u);else for(a=n-r;t<=a;a-=r)u=x(a,e[a],e[a+1],u);return u&&h(u,u.next)&&(f(u),u=u.next),u}function v(e,t){if(!e)return e;t=t||e;var n,r=e;do{if(n=!1,r.steiner||!h(r,r.next)&&0!==b(r.prev,r,r.next))r=r.next;else{if(f(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function d(e,t,n,r,i,a,u){if(e){!u&&a&&function(e,t,n,r){var i=e;for(;null===i.z&&(i.z=m(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next,i!==e;);i.prevZ.nextZ=null,i.prevZ=null,function(e){var t,n,r,i,a,u,x,o,s=1;do{for(n=e,a=e=null,u=0;n;){for(u++,r=n,t=x=0;t<s&&(x++,r=r.nextZ);t++);for(o=s;0<x||0<o&&r;)0!==x&&(0===o||!r||n.z<=r.z)?(n=(i=n).nextZ,x--):(r=(i=r).nextZ,o--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}}while(a.nextZ=null,s*=2,1<u)}(i)}(e,r,i,a);for(var x,o,s=e;e.prev!==e.next;)if(x=e.prev,o=e.next,a?function(e,t,n,r){var i=e.prev,a=e,u=e.next;if(0<=b(i,a,u))return!1;var x=(i.x<a.x?i.x<u.x?i:u:a.x<u.x?a:u).x,o=(i.y<a.y?i.y<u.y?i:u:a.y<u.y?a:u).y,s=(i.x>a.x?i.x>u.x?i:u:a.x>u.x?a:u).x,h=(i.y>a.y?i.y>u.y?i:u:a.y>u.y?a:u).y,p=m(x,o,t,n,r),f=m(s,h,t,n,r),l=e.prevZ,y=e.nextZ;for(;l&&l.z>=p&&y&&y.z<=f;){if(l!==e.prev&&l!==e.next&&g(i.x,i.y,a.x,a.y,u.x,u.y,l.x,l.y)&&0<=b(l.prev,l,l.next))return!1;if(l=l.prevZ,y!==e.prev&&y!==e.next&&g(i.x,i.y,a.x,a.y,u.x,u.y,y.x,y.y)&&0<=b(y.prev,y,y.next))return!1;y=y.nextZ}for(;l&&l.z>=p;){if(l!==e.prev&&l!==e.next&&g(i.x,i.y,a.x,a.y,u.x,u.y,l.x,l.y)&&0<=b(l.prev,l,l.next))return!1;l=l.prevZ}for(;y&&y.z<=f;){if(y!==e.prev&&y!==e.next&&g(i.x,i.y,a.x,a.y,u.x,u.y,y.x,y.y)&&0<=b(y.prev,y,y.next))return!1;y=y.nextZ}return!0}(e,r,i,a):function(e){var t=e.prev,n=e,r=e.next;if(0<=b(t,n,r))return!1;var i=e.next.next;for(;i!==e.prev;){if(g(t.x,t.y,n.x,n.y,r.x,r.y,i.x,i.y)&&0<=b(i.prev,i,i.next))return!1;i=i.next}return!0}(e))t.push(x.i/n),t.push(e.i/n),t.push(o.i/n),f(e),e=o.next,s=o.next;else if((e=o)===s){u?1===u?d(e=function(e,t,n){var r=e;do{var i=r.prev,a=r.next.next}while(!h(i,a)&&p(i,r,r.next,a)&&w(i,a)&&w(a,i)&&(t.push(i.i/n),t.push(r.i/n),t.push(a.i/n),f(r),f(r.next),r=e=a),r=r.next,r!==e);return v(r)}(v(e),t,n),t,n,r,i,a,2):2===u&&function(e,t,n,r,i,a){var u=e;do{for(var x=u.next.next;x!==u.prev;){if(u.i!==x.i&&function(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&p(n,n.next,e,t))return!0}while(n=n.next,n!==e);return!1}(e,t)&&(w(e,t)&&w(t,e)&&function(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;for(;n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next,n!==e;);return r}(e,t)&&(b(e.prev,e,t.prev)||b(e,t.prev,t))||h(e,t)&&0<b(e.prev,e,e.next)&&0<b(t.prev,t,t.next))}(u,x)){var o=E(u,x);return u=v(u,u.next),o=v(o,o.next),d(u,t,n,r,i,a),d(o,t,n,r,i,a)}x=x.next}}while(u=u.next,u!==e)}(e,t,n,r,i,a):d(v(e),t,n,r,i,a,1);break}}}function C(e,t){return e.x-t.x}function m(e,t,n,r,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function g(e,t,n,r,i,a,u,x){return 0<=(i-u)*(t-x)-(e-u)*(a-x)&&0<=(e-u)*(r-x)-(n-u)*(t-x)&&0<=(n-u)*(a-x)-(i-u)*(r-x)}function b(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function h(e,t){return e.x===t.x&&e.y===t.y}function p(e,t,n,r){var i=s(b(e,t,n)),a=s(b(e,t,r)),u=s(b(n,r,e)),x=s(b(n,r,t));return i!==a&&u!==x||(0===i&&o(e,n,t)||(0===a&&o(e,r,t)||(0===u&&o(n,e,r)||!(0!==x||!o(n,t,r)))))}function o(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function s(e){return 0<e?1:e<0?-1:0}function w(e,t){return b(e.prev,e,e.next)<0?0<=b(e,t,e.next)&&0<=b(e,e.prev,t):b(e,t,e.prev)<0||b(e,e.next,t)<0}function E(e,t){var n=new u(e.i,e.x,e.y),r=new u(t.i,t.x,t.y),i=e.next,a=t.prev;return(e.next=t).prev=e,(n.next=i).prev=n,(r.next=n).prev=r,(a.next=r).prev=a,r}function x(e,t,n,r){n=new u(e,t,n);return r?(n.next=r.next,(n.prev=r).next.prev=n,r.next=n):(n.prev=n).next=n,n}function f(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function u(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M(e,t,n,r){for(var i=0,a=t,u=n-r;a<n;a+=r)i+=(e[u]-e[a])*(e[a+1]+e[u+1]),u=a;return i}n.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,u=Math.abs(M(e,0,a,n));if(i)for(var x=0,o=t.length;x<o;x++){var s=t[x]*n,h=x<o-1?t[x+1]*n:e.length;u-=Math.abs(M(e,s,h,n))}for(var p=0,x=0;x<r.length;x+=3){var f=r[x]*n,l=r[x+1]*n,y=r[x+2]*n;p+=Math.abs((e[f]-e[y])*(e[1+l]-e[1+f])-(e[f]-e[l])*(e[1+y]-e[1+f]))}return 0===u&&0===p?0:Math.abs((p-u)/u)},n.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var u=0;u<t;u++)n.vertices.push(e[i][a][u]);0<i&&(r+=e[i-1].length,n.holes.push(r))}return n};var r={CLOCKWISE:t.WebGLConstants.CW,COUNTER_CLOCKWISE:t.WebGLConstants.CCW,validate:function(e){return e===r.CLOCKWISE||e===r.COUNTER_CLOCKWISE}},i=Object.freeze(r),l=new R.Cartesian3,y=new R.Cartesian3,a={computeArea2D:function(e){L.Check.defined("positions",e),L.Check.typeOf.number.greaterThanOrEquals("positions.length",e.length,3);for(var t=e.length,n=0,r=t-1,i=0;i<t;r=i++){var a=e[r],u=e[i];n+=a.x*u.y-u.x*a.y}return.5*n},computeWindingOrder2D:function(e){return 0<a.computeArea2D(e)?i.COUNTER_CLOCKWISE:i.CLOCKWISE},triangulate:function(e,t){return L.Check.defined("positions",e),n(R.Cartesian2.packArray(e),t,2)}},P=new R.Cartesian3,I=new R.Cartesian3,B=new R.Cartesian3,O=new R.Cartesian3,S=new R.Cartesian3,A=new R.Cartesian3,q=new R.Cartesian3;a.computeSubdivision=function(e,t,n,r){r=T.defaultValue(r,W.CesiumMath.RADIANS_PER_DEGREE),L.Check.typeOf.object("ellipsoid",e),L.Check.defined("positions",t),L.Check.defined("indices",n),L.Check.typeOf.number.greaterThanOrEquals("indices.length",n.length,3),L.Check.typeOf.number.equals("indices.length % 3","0",n.length%3,0),L.Check.typeOf.number.greaterThan("granularity",r,0);for(var i=n.slice(0),a=t.length,u=new Array(3*a),x=0,o=0;o<a;o++){var s=t[o];u[x++]=s.x,u[x++]=s.y,u[x++]=s.z}for(var h=[],p={},f=e.maximumRadius,r=W.CesiumMath.chordLength(r,f),l=r*r;0<i.length;){var y,c,v=i.pop(),d=i.pop(),C=i.pop(),m=R.Cartesian3.fromArray(u,3*C,P),g=R.Cartesian3.fromArray(u,3*d,I),b=R.Cartesian3.fromArray(u,3*v,B),w=R.Cartesian3.multiplyByScalar(R.Cartesian3.normalize(m,O),f,O),E=R.Cartesian3.multiplyByScalar(R.Cartesian3.normalize(g,S),f,S),M=R.Cartesian3.multiplyByScalar(R.Cartesian3.normalize(b,A),f,A),Z=R.Cartesian3.magnitudeSquared(R.Cartesian3.subtract(w,E,q)),E=R.Cartesian3.magnitudeSquared(R.Cartesian3.subtract(E,M,q)),M=R.Cartesian3.magnitudeSquared(R.Cartesian3.subtract(M,w,q)),w=Math.max(Z,E,M);l<w?Z===w?(o=p[y=Math.min(C,d)+" "+Math.max(C,d)],T.defined(o)||(c=R.Cartesian3.add(m,g,q),R.Cartesian3.multiplyByScalar(c,.5,c),u.push(c.x,c.y,c.z),o=u.length/3-1,p[y]=o),i.push(C,o,v),i.push(o,d,v)):E===w?(o=p[y=Math.min(d,v)+" "+Math.max(d,v)],T.defined(o)||(c=R.Cartesian3.add(g,b,q),R.Cartesian3.multiplyByScalar(c,.5,c),u.push(c.x,c.y,c.z),o=u.length/3-1,p[y]=o),i.push(d,o,C),i.push(o,v,C)):M===w&&(o=p[y=Math.min(v,C)+" "+Math.max(v,C)],T.defined(o)||(c=R.Cartesian3.add(b,m,q),R.Cartesian3.multiplyByScalar(c,.5,c),u.push(c.x,c.y,c.z),o=u.length/3-1,p[y]=o),i.push(v,o,d),i.push(o,C,d)):(h.push(C),h.push(d),h.push(v))}return new G.Geometry({attributes:{position:new G.GeometryAttribute({componentDatatype:k.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})},indices:h,primitiveType:G.PrimitiveType.TRIANGLES})};var N=new R.Cartographic,U=new R.Cartographic,_=new R.Cartographic,K=new R.Cartographic;a.computeRhumbLineSubdivision=function(e,t,n,r){r=T.defaultValue(r,W.CesiumMath.RADIANS_PER_DEGREE),L.Check.typeOf.object("ellipsoid",e),L.Check.defined("positions",t),L.Check.defined("indices",n),L.Check.typeOf.number.greaterThanOrEquals("indices.length",n.length,3),L.Check.typeOf.number.equals("indices.length % 3","0",n.length%3,0),L.Check.typeOf.number.greaterThan("granularity",r,0);for(var i=n.slice(0),a=t.length,u=new Array(3*a),x=0,o=0;o<a;o++){var s=t[o];u[x++]=s.x,u[x++]=s.y,u[x++]=s.z}for(var h=[],p={},n=e.maximumRadius,f=W.CesiumMath.chordLength(r,n),l=new D.EllipsoidRhumbLine(void 0,void 0,e),y=new D.EllipsoidRhumbLine(void 0,void 0,e),c=new D.EllipsoidRhumbLine(void 0,void 0,e);0<i.length;){var v=i.pop(),d=i.pop(),C=i.pop(),m=R.Cartesian3.fromArray(u,3*C,P),g=R.Cartesian3.fromArray(u,3*d,I),b=R.Cartesian3.fromArray(u,3*v,B),w=e.cartesianToCartographic(m,N),E=e.cartesianToCartographic(g,U),M=e.cartesianToCartographic(b,_);l.setEndPoints(w,E);var Z=l.surfaceDistance;y.setEndPoints(E,M);m=y.surfaceDistance;c.setEndPoints(M,w);var O,S,A,z,g=c.surfaceDistance,b=Math.max(Z,m,g);f<b?Z===b?(o=p[O=Math.min(C,d)+" "+Math.max(C,d)],T.defined(o)||(S=l.interpolateUsingFraction(.5,K),A=.5*(w.height+E.height),z=R.Cartesian3.fromRadians(S.longitude,S.latitude,A,e,q),u.push(z.x,z.y,z.z),o=u.length/3-1,p[O]=o),i.push(C,o,v),i.push(o,d,v)):m===b?(o=p[O=Math.min(d,v)+" "+Math.max(d,v)],T.defined(o)||(S=y.interpolateUsingFraction(.5,K),A=.5*(E.height+M.height),z=R.Cartesian3.fromRadians(S.longitude,S.latitude,A,e,q),u.push(z.x,z.y,z.z),o=u.length/3-1,p[O]=o),i.push(d,o,C),i.push(o,v,C)):g===b&&(o=p[O=Math.min(v,C)+" "+Math.max(v,C)],T.defined(o)||(S=c.interpolateUsingFraction(.5,K),A=.5*(M.height+w.height),z=R.Cartesian3.fromRadians(S.longitude,S.latitude,A,e,q),u.push(z.x,z.y,z.z),o=u.length/3-1,p[O]=o),i.push(v,o,d),i.push(o,C,d)):(h.push(C),h.push(d),h.push(v))}return new G.Geometry({attributes:{position:new G.GeometryAttribute({componentDatatype:k.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})},indices:h,primitiveType:G.PrimitiveType.TRIANGLES})},a.scaleToGeodeticHeight=function(e,t,n,r){n=T.defaultValue(n,R.Ellipsoid.WGS84);var i=l,a=y;if(t=T.defaultValue(t,0),r=T.defaultValue(r,!0),T.defined(e))for(var u=e.length,x=0;x<u;x+=3)R.Cartesian3.fromArray(e,x,a),r&&(a=n.scaleToGeodeticSurface(a,a)),0!==t&&(i=n.geodeticSurfaceNormal(a,i),R.Cartesian3.multiplyByScalar(i,t,i),R.Cartesian3.add(a,i,a)),e[x]=a.x,e[x+1]=a.y,e[x+2]=a.z;return e},e.PolygonPipeline=a,e.WindingOrder=i});
//# sourceMappingURL=PolygonPipeline-6a47f72e.js.map
