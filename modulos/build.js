!function(t){var e={};function n(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return t[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)n.d(r,u,function(e){return t[e]}.bind(null,u));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){var n;e=e||[];var r=(t=t||[]).length,u=e.length,i=[];for(n=0;n<r;)i[i.length]=t[n],n+=1;for(n=0;n<u;)i[i.length]=e[n],n+=1;return i}function u(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function i(t){return function e(n){return 0===arguments.length||u(n)?e:t.apply(this,arguments)}}function o(t){return function e(n,r){switch(arguments.length){case 0:return e;case 1:return u(n)?e:i((function(e){return t(n,e)}));default:return u(n)&&u(r)?e:u(n)?i((function(e){return t(e,r)})):u(r)?i((function(e){return t(n,e)})):t(n,r)}}}function a(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,u){return e.apply(this,arguments)};case 5:return function(t,n,r,u,i){return e.apply(this,arguments)};case 6:return function(t,n,r,u,i,o){return e.apply(this,arguments)};case 7:return function(t,n,r,u,i,o,a){return e.apply(this,arguments)};case 8:return function(t,n,r,u,i,o,a,c){return e.apply(this,arguments)};case 9:return function(t,n,r,u,i,o,a,c,f){return e.apply(this,arguments)};case 10:return function(t,n,r,u,i,o,a,c,f,s){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function c(t,e){return function(){return e.call(this,t.apply(this,arguments))}}function f(t){return function e(n,r,a){switch(arguments.length){case 0:return e;case 1:return u(n)?e:o((function(e,r){return t(n,e,r)}));case 2:return u(n)&&u(r)?e:u(n)?o((function(e,n){return t(e,r,n)})):u(r)?o((function(e,r){return t(n,e,r)})):i((function(e){return t(n,r,e)}));default:return u(n)&&u(r)&&u(a)?e:u(n)&&u(r)?o((function(e,n){return t(e,n,a)})):u(n)&&u(a)?o((function(e,n){return t(e,r,n)})):u(r)&&u(a)?o((function(e,r){return t(n,e,r)})):u(n)?i((function(e){return t(e,r,a)})):u(r)?i((function(e){return t(n,e,a)})):u(a)?i((function(e){return t(n,r,e)})):t(n,r,a)}}}n.r(e);var s=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function l(t){return"[object String]"===Object.prototype.toString.call(t)}var p=i((function(t){return!!s(t)||!!t&&("object"==typeof t&&(!l(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),y=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();var h=o((function(t,e){return a(t.length,(function(){return t.apply(e,arguments)}))}));function d(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function g(t,e,n,r){return t["@@transducer/result"](n[r](h(t["@@transducer/step"],t),e))}var v="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function m(t,e,n){if("function"==typeof t&&(t=function(t){return new y(t)}(t)),p(n))return function(t,e,n){for(var r=0,u=n.length;r<u;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}(t,e,n);if("function"==typeof n["fantasy-land/reduce"])return g(t,e,n,"fantasy-land/reduce");if(null!=n[v])return d(t,e,n[v]());if("function"==typeof n.next)return d(t,e,n);if("function"==typeof n.reduce)return g(t,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}var b=f(m);function _(t,e){return function(){var n=arguments.length;if(0===n)return e();var r=arguments[n-1];return s(r)||"function"!=typeof r[t]?e.apply(this,arguments):r[t].apply(r,Array.prototype.slice.call(arguments,0,n-1))}}var O=i(_("tail",f(_("slice",(function(t,e,n){return Array.prototype.slice.call(n,t,e)})))(1,1/0)));function S(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return a(arguments[0].length,b(c,arguments[0],O(arguments)))}var j=i((function(t){return l(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()}));function w(){if(0===arguments.length)throw new Error("compose requires at least one argument");return S.apply(this,j(arguments))}function A(t){return t}var x=i(A);function q(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function E(t,e,n){for(var r=0,u=n.length;r<u;){if(t(e,n[r]))return!0;r+=1}return!1}function P(t,e){return Object.prototype.hasOwnProperty.call(e,t)}var k="function"==typeof Object.is?Object.is:function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e},z=Object.prototype.toString,I=function(){return"[object Arguments]"===z.call(arguments)?function(t){return"[object Arguments]"===z.call(t)}:function(t){return P("callee",t)}}(),M=!{toString:null}.propertyIsEnumerable("toString"),U=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],T=function(){return arguments.propertyIsEnumerable("length")}(),B=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},C="function"!=typeof Object.keys||T?i((function(t){if(Object(t)!==t)return[];var e,n,r=[],u=T&&I(t);for(e in t)!P(e,t)||u&&"length"===e||(r[r.length]=e);if(M)for(n=U.length-1;n>=0;)P(e=U[n],t)&&!B(r,e)&&(r[r.length]=e),n-=1;return r})):i((function(t){return Object(t)!==t?[]:Object.keys(t)})),F=i((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));function N(t,e,n,r){var u=q(t);function i(t,e){return D(t,e,n.slice(),r.slice())}return!E((function(t,e){return!E(i,e,t)}),q(e),u)}function D(t,e,n,r){if(k(t,e))return!0;var u,i,o=F(t);if(o!==F(e))return!1;if(null==t||null==e)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof e["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e)&&"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof e.equals)return"function"==typeof t.equals&&t.equals(e)&&"function"==typeof e.equals&&e.equals(t);switch(o){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(i=String(u).match(/^function (\w*)/))?"":i[1]))return t===e;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof e||!k(t.valueOf(),e.valueOf()))return!1;break;case"Date":if(!k(t.valueOf(),e.valueOf()))return!1;break;case"Error":return t.name===e.name&&t.message===e.message;case"RegExp":if(t.source!==e.source||t.global!==e.global||t.ignoreCase!==e.ignoreCase||t.multiline!==e.multiline||t.sticky!==e.sticky||t.unicode!==e.unicode)return!1}for(var a=n.length-1;a>=0;){if(n[a]===t)return r[a]===e;a-=1}switch(o){case"Map":return t.size===e.size&&N(t.entries(),e.entries(),n.concat([t]),r.concat([e]));case"Set":return t.size===e.size&&N(t.values(),e.values(),n.concat([t]),r.concat([e]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var c=C(t);if(c.length!==C(e).length)return!1;var f=n.concat([t]),s=r.concat([e]);for(a=c.length-1;a>=0;){var l=c[a];if(!P(l,e)||!D(e[l],t[l],f,s))return!1;a-=1}return!0}var R=o((function(t,e){return D(t,e,[],[])}));function L(t,e){return function(t,e,n){var r,u;if("function"==typeof t.indexOf)switch(typeof e){case"number":if(0===e){for(r=1/e;n<t.length;){if(0===(u=t[n])&&1/u===r)return n;n+=1}return-1}if(e!=e){for(;n<t.length;){if("number"==typeof(u=t[n])&&u!=u)return n;n+=1}return-1}return t.indexOf(e,n);case"string":case"boolean":case"function":case"undefined":return t.indexOf(e,n);case"object":if(null===e)return t.indexOf(e,n)}for(;n<t.length;){if(R(t[n],e))return n;n+=1}return-1}(e,t,0)>=0}function W(t,e,n){var r,u=typeof t;switch(u){case"string":case"number":return 0===t&&1/t==-1/0?!!n._items["-0"]||(e&&(n._items["-0"]=!0),!1):null!==n._nativeSet?e?(r=n._nativeSet.size,n._nativeSet.add(t),n._nativeSet.size===r):n._nativeSet.has(t):u in n._items?t in n._items[u]||(e&&(n._items[u][t]=!0),!1):(e&&(n._items[u]={},n._items[u][t]=!0),!1);case"boolean":if(u in n._items){var i=t?1:0;return!!n._items[u][i]||(e&&(n._items[u][i]=!0),!1)}return e&&(n._items[u]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==n._nativeSet?e?(r=n._nativeSet.size,n._nativeSet.add(t),n._nativeSet.size===r):n._nativeSet.has(t):u in n._items?!!L(t,n._items[u])||(e&&n._items[u].push(t),!1):(e&&(n._items[u]=[t]),!1);case"undefined":return!!n._items[u]||(e&&(n._items[u]=!0),!1);case"object":if(null===t)return!!n._items.null||(e&&(n._items.null=!0),!1);default:return(u=Object.prototype.toString.call(t))in n._items?!!L(t,n._items[u])||(e&&n._items[u].push(t),!1):(e&&(n._items[u]=[t]),!1)}}var X=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return t.prototype.add=function(t){return!W(t,!0,this)},t.prototype.has=function(t){return W(t,!1,this)},t}(),G=o(w(o((function(t,e){for(var n,r,u=new X,i=[],o=0;o<e.length;)n=t(r=e[o]),u.add(n)&&i.push(r),o+=1;return i}))(x),r))([1,1,1,2,2,3,4,5,6,6],[5,6,6,6,7,7,8,9,10,1]);console.log(G)}]);