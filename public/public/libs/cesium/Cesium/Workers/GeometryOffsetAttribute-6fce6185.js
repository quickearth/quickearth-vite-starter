define(["exports","./Check-5e798bbf","./when-208fe5b0"],function(e,u,d){"use strict";var t=Object.freeze({NONE:0,TOP:1,ALL:2});e.GeometryOffsetAttribute=t,e.arrayFill=function(e,t,f,n){if(u.Check.defined("array",e),u.Check.defined("value",t),d.defined(f)&&u.Check.typeOf.number("start",f),d.defined(n)&&u.Check.typeOf.number("end",n),"function"==typeof e.fill)return e.fill(t,f,n);for(var r=e.length>>>0,a=(f=d.defaultValue(f,0))<0?Math.max(r+f,0):Math.min(f,r),i=(n=d.defaultValue(n,r))<0?Math.max(r+n,0):Math.min(n,r);a<i;)e[a]=t,a++;return e}});
//# sourceMappingURL=GeometryOffsetAttribute-6fce6185.js.map
