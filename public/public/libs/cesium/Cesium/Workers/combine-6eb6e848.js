define(["exports","./defaultValue-040c41f9"],(function(e,t){"use strict";e.combine=function e(n,o,f){f=t.defaultValue(f,!1);const r={},i=t.defined(n),a=t.defined(o);let c,s,u;if(i)for(c in n)n.hasOwnProperty(c)&&(s=n[c],a&&f&&"object"==typeof s&&o.hasOwnProperty(c)?(u=o[c],r[c]="object"==typeof u?e(s,u,f):s):r[c]=s);if(a)for(c in o)o.hasOwnProperty(c)&&!r.hasOwnProperty(c)&&(u=o[c],r[c]=u);return r}}));