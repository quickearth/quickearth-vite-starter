define(["exports","./Math-56f06cd5"],function(r,l){"use strict";var t={computePositions:function(r,t,e,a,i){for(var n=.5*r,o=-n,r=a+a,s=new Float64Array(3*(i?2*r:r)),c=0,u=0,f=i?3*r:0,h=i?3*(r+a):3*a,y=0;y<a;y++){var M=y/a*l.CesiumMath.TWO_PI,d=Math.cos(M),m=Math.sin(M),v=d*e,M=m*e,d=d*t,m=m*t;s[u+f]=v,s[u+f+1]=M,s[u+f+2]=o,s[u+h]=d,s[u+h+1]=m,s[u+h+2]=n,u+=3,i&&(s[c++]=v,s[c++]=M,s[c++]=o,s[c++]=d,s[c++]=m,s[c++]=n)}return s}};r.CylinderGeometryLibrary=t});
//# sourceMappingURL=CylinderGeometryLibrary-2189d3bf.js.map
