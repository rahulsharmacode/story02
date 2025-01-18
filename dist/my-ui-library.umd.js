(function(D,U){typeof exports=="object"&&typeof module<"u"?U(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],U):(D=typeof globalThis<"u"?globalThis:D||self,U(D.MyUILibrary={},D.React))})(this,function(D,U){"use strict";function _e(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var N={exports:{}},V={exports:{}},b={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le;function Re(){if(le)return b;le=1;var o=typeof Symbol=="function"&&Symbol.for,C=o?Symbol.for("react.element"):60103,P=o?Symbol.for("react.portal"):60106,f=o?Symbol.for("react.fragment"):60107,E=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,O=o?Symbol.for("react.provider"):60109,y=o?Symbol.for("react.context"):60110,_=o?Symbol.for("react.async_mode"):60111,S=o?Symbol.for("react.concurrent_mode"):60111,T=o?Symbol.for("react.forward_ref"):60112,g=o?Symbol.for("react.suspense"):60113,x=o?Symbol.for("react.suspense_list"):60120,w=o?Symbol.for("react.memo"):60115,M=o?Symbol.for("react.lazy"):60116,R=o?Symbol.for("react.block"):60121,I=o?Symbol.for("react.fundamental"):60117,q=o?Symbol.for("react.responder"):60118,B=o?Symbol.for("react.scope"):60119;function j(t){if(typeof t=="object"&&t!==null){var W=t.$$typeof;switch(W){case C:switch(t=t.type,t){case _:case S:case f:case a:case E:case g:return t;default:switch(t=t&&t.$$typeof,t){case y:case T:case M:case w:case O:return t;default:return W}}case P:return W}}}function A(t){return j(t)===S}return b.AsyncMode=_,b.ConcurrentMode=S,b.ContextConsumer=y,b.ContextProvider=O,b.Element=C,b.ForwardRef=T,b.Fragment=f,b.Lazy=M,b.Memo=w,b.Portal=P,b.Profiler=a,b.StrictMode=E,b.Suspense=g,b.isAsyncMode=function(t){return A(t)||j(t)===_},b.isConcurrentMode=A,b.isContextConsumer=function(t){return j(t)===y},b.isContextProvider=function(t){return j(t)===O},b.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===C},b.isForwardRef=function(t){return j(t)===T},b.isFragment=function(t){return j(t)===f},b.isLazy=function(t){return j(t)===M},b.isMemo=function(t){return j(t)===w},b.isPortal=function(t){return j(t)===P},b.isProfiler=function(t){return j(t)===a},b.isStrictMode=function(t){return j(t)===E},b.isSuspense=function(t){return j(t)===g},b.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===f||t===S||t===a||t===E||t===g||t===x||typeof t=="object"&&t!==null&&(t.$$typeof===M||t.$$typeof===w||t.$$typeof===O||t.$$typeof===y||t.$$typeof===T||t.$$typeof===I||t.$$typeof===q||t.$$typeof===B||t.$$typeof===R)},b.typeOf=j,b}var m={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye;function Ce(){return ye||(ye=1,process.env.NODE_ENV!=="production"&&function(){var o=typeof Symbol=="function"&&Symbol.for,C=o?Symbol.for("react.element"):60103,P=o?Symbol.for("react.portal"):60106,f=o?Symbol.for("react.fragment"):60107,E=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,O=o?Symbol.for("react.provider"):60109,y=o?Symbol.for("react.context"):60110,_=o?Symbol.for("react.async_mode"):60111,S=o?Symbol.for("react.concurrent_mode"):60111,T=o?Symbol.for("react.forward_ref"):60112,g=o?Symbol.for("react.suspense"):60113,x=o?Symbol.for("react.suspense_list"):60120,w=o?Symbol.for("react.memo"):60115,M=o?Symbol.for("react.lazy"):60116,R=o?Symbol.for("react.block"):60121,I=o?Symbol.for("react.fundamental"):60117,q=o?Symbol.for("react.responder"):60118,B=o?Symbol.for("react.scope"):60119;function j(r){return typeof r=="string"||typeof r=="function"||r===f||r===S||r===a||r===E||r===g||r===x||typeof r=="object"&&r!==null&&(r.$$typeof===M||r.$$typeof===w||r.$$typeof===O||r.$$typeof===y||r.$$typeof===T||r.$$typeof===I||r.$$typeof===q||r.$$typeof===B||r.$$typeof===R)}function A(r){if(typeof r=="object"&&r!==null){var Y=r.$$typeof;switch(Y){case C:var X=r.type;switch(X){case _:case S:case f:case a:case E:case g:return X;default:var Oe=X&&X.$$typeof;switch(Oe){case y:case T:case M:case w:case O:return Oe;default:return Y}}case P:return Y}}}var t=_,W=S,ne=y,oe=O,ie=C,ae=T,H=f,ue=M,se=w,F=P,ce=a,k=E,L=g,J=!1;function fe(r){return J||(J=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),e(r)||A(r)===_}function e(r){return A(r)===S}function n(r){return A(r)===y}function l(r){return A(r)===O}function s(r){return typeof r=="object"&&r!==null&&r.$$typeof===C}function i(r){return A(r)===T}function p(r){return A(r)===f}function u(r){return A(r)===M}function c(r){return A(r)===w}function d(r){return A(r)===P}function h(r){return A(r)===a}function v(r){return A(r)===E}function $(r){return A(r)===g}m.AsyncMode=t,m.ConcurrentMode=W,m.ContextConsumer=ne,m.ContextProvider=oe,m.Element=ie,m.ForwardRef=ae,m.Fragment=H,m.Lazy=ue,m.Memo=se,m.Portal=F,m.Profiler=ce,m.StrictMode=k,m.Suspense=L,m.isAsyncMode=fe,m.isConcurrentMode=e,m.isContextConsumer=n,m.isContextProvider=l,m.isElement=s,m.isForwardRef=i,m.isFragment=p,m.isLazy=u,m.isMemo=c,m.isPortal=d,m.isProfiler=h,m.isStrictMode=v,m.isSuspense=$,m.isValidElementType=j,m.typeOf=A}()),m}var pe;function de(){return pe||(pe=1,process.env.NODE_ENV==="production"?V.exports=Re():V.exports=Ce()),V.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var G,ve;function xe(){if(ve)return G;ve=1;var o=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;function f(a){if(a==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function E(){try{if(!Object.assign)return!1;var a=new String("abc");if(a[5]="de",Object.getOwnPropertyNames(a)[0]==="5")return!1;for(var O={},y=0;y<10;y++)O["_"+String.fromCharCode(y)]=y;var _=Object.getOwnPropertyNames(O).map(function(T){return O[T]});if(_.join("")!=="0123456789")return!1;var S={};return"abcdefghijklmnopqrst".split("").forEach(function(T){S[T]=T}),Object.keys(Object.assign({},S)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return G=E()?Object.assign:function(a,O){for(var y,_=f(a),S,T=1;T<arguments.length;T++){y=Object(arguments[T]);for(var g in y)C.call(y,g)&&(_[g]=y[g]);if(o){S=o(y);for(var x=0;x<S.length;x++)P.call(y,S[x])&&(_[S[x]]=y[S[x]])}}return _},G}var K,be;function Z(){if(be)return K;be=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return K=o,K}var Q,me;function Te(){return me||(me=1,Q=Function.call.bind(Object.prototype.hasOwnProperty)),Q}var ee,he;function we(){if(he)return ee;he=1;var o=function(){};if(process.env.NODE_ENV!=="production"){var C=Z(),P={},f=Te();o=function(a){var O="Warning: "+a;typeof console<"u"&&console.error(O);try{throw new Error(O)}catch{}}}function E(a,O,y,_,S){if(process.env.NODE_ENV!=="production"){for(var T in a)if(f(a,T)){var g;try{if(typeof a[T]!="function"){var x=Error((_||"React class")+": "+y+" type `"+T+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof a[T]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw x.name="Invariant Violation",x}g=a[T](O,T,_,y,null,C)}catch(M){g=M}if(g&&!(g instanceof Error)&&o((_||"React class")+": type specification of "+y+" `"+T+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof g+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),g instanceof Error&&!(g.message in P)){P[g.message]=!0;var w=S?S():"";o("Failed "+y+" type: "+g.message+(w??""))}}}}return E.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(P={})},ee=E,ee}var re,Ee;function Ae(){if(Ee)return re;Ee=1;var o=de(),C=xe(),P=Z(),f=Te(),E=we(),a=function(){};process.env.NODE_ENV!=="production"&&(a=function(y){var _="Warning: "+y;typeof console<"u"&&console.error(_);try{throw new Error(_)}catch{}});function O(){return null}return re=function(y,_){var S=typeof Symbol=="function"&&Symbol.iterator,T="@@iterator";function g(e){var n=e&&(S&&e[S]||e[T]);if(typeof n=="function")return n}var x="<<anonymous>>",w={array:q("array"),bigint:q("bigint"),bool:q("boolean"),func:q("function"),number:q("number"),object:q("object"),string:q("string"),symbol:q("symbol"),any:B(),arrayOf:j,element:A(),elementType:t(),instanceOf:W,node:ae(),objectOf:oe,oneOf:ne,oneOfType:ie,shape:ue,exact:se};function M(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function R(e,n){this.message=e,this.data=n&&typeof n=="object"?n:{},this.stack=""}R.prototype=Error.prototype;function I(e){if(process.env.NODE_ENV!=="production")var n={},l=0;function s(p,u,c,d,h,v,$){if(d=d||x,v=v||c,$!==P){if(_){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var Y=d+":"+c;!n[Y]&&l<3&&(a("You are manually calling a React.PropTypes validation function for the `"+v+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[Y]=!0,l++)}}return u[c]==null?p?u[c]===null?new R("The "+h+" `"+v+"` is marked as required "+("in `"+d+"`, but its value is `null`.")):new R("The "+h+" `"+v+"` is marked as required in "+("`"+d+"`, but its value is `undefined`.")):null:e(u,c,d,h,v)}var i=s.bind(null,!1);return i.isRequired=s.bind(null,!0),i}function q(e){function n(l,s,i,p,u,c){var d=l[s],h=k(d);if(h!==e){var v=L(d);return new R("Invalid "+p+" `"+u+"` of type "+("`"+v+"` supplied to `"+i+"`, expected ")+("`"+e+"`."),{expectedType:e})}return null}return I(n)}function B(){return I(O)}function j(e){function n(l,s,i,p,u){if(typeof e!="function")return new R("Property `"+u+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var c=l[s];if(!Array.isArray(c)){var d=k(c);return new R("Invalid "+p+" `"+u+"` of type "+("`"+d+"` supplied to `"+i+"`, expected an array."))}for(var h=0;h<c.length;h++){var v=e(c,h,i,p,u+"["+h+"]",P);if(v instanceof Error)return v}return null}return I(n)}function A(){function e(n,l,s,i,p){var u=n[l];if(!y(u)){var c=k(u);return new R("Invalid "+i+" `"+p+"` of type "+("`"+c+"` supplied to `"+s+"`, expected a single ReactElement."))}return null}return I(e)}function t(){function e(n,l,s,i,p){var u=n[l];if(!o.isValidElementType(u)){var c=k(u);return new R("Invalid "+i+" `"+p+"` of type "+("`"+c+"` supplied to `"+s+"`, expected a single ReactElement type."))}return null}return I(e)}function W(e){function n(l,s,i,p,u){if(!(l[s]instanceof e)){var c=e.name||x,d=fe(l[s]);return new R("Invalid "+p+" `"+u+"` of type "+("`"+d+"` supplied to `"+i+"`, expected ")+("instance of `"+c+"`."))}return null}return I(n)}function ne(e){if(!Array.isArray(e))return process.env.NODE_ENV!=="production"&&(arguments.length>1?a("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):a("Invalid argument supplied to oneOf, expected an array.")),O;function n(l,s,i,p,u){for(var c=l[s],d=0;d<e.length;d++)if(M(c,e[d]))return null;var h=JSON.stringify(e,function($,r){var Y=L(r);return Y==="symbol"?String(r):r});return new R("Invalid "+p+" `"+u+"` of value `"+String(c)+"` "+("supplied to `"+i+"`, expected one of "+h+"."))}return I(n)}function oe(e){function n(l,s,i,p,u){if(typeof e!="function")return new R("Property `"+u+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var c=l[s],d=k(c);if(d!=="object")return new R("Invalid "+p+" `"+u+"` of type "+("`"+d+"` supplied to `"+i+"`, expected an object."));for(var h in c)if(f(c,h)){var v=e(c,h,i,p,u+"."+h,P);if(v instanceof Error)return v}return null}return I(n)}function ie(e){if(!Array.isArray(e))return process.env.NODE_ENV!=="production"&&a("Invalid argument supplied to oneOfType, expected an instance of array."),O;for(var n=0;n<e.length;n++){var l=e[n];if(typeof l!="function")return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+J(l)+" at index "+n+"."),O}function s(i,p,u,c,d){for(var h=[],v=0;v<e.length;v++){var $=e[v],r=$(i,p,u,c,d,P);if(r==null)return null;r.data&&f(r.data,"expectedType")&&h.push(r.data.expectedType)}var Y=h.length>0?", expected one of type ["+h.join(", ")+"]":"";return new R("Invalid "+c+" `"+d+"` supplied to "+("`"+u+"`"+Y+"."))}return I(s)}function ae(){function e(n,l,s,i,p){return F(n[l])?null:new R("Invalid "+i+" `"+p+"` supplied to "+("`"+s+"`, expected a ReactNode."))}return I(e)}function H(e,n,l,s,i){return new R((e||"React class")+": "+n+" type `"+l+"."+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function ue(e){function n(l,s,i,p,u){var c=l[s],d=k(c);if(d!=="object")return new R("Invalid "+p+" `"+u+"` of type `"+d+"` "+("supplied to `"+i+"`, expected `object`."));for(var h in e){var v=e[h];if(typeof v!="function")return H(i,p,u,h,L(v));var $=v(c,h,i,p,u+"."+h,P);if($)return $}return null}return I(n)}function se(e){function n(l,s,i,p,u){var c=l[s],d=k(c);if(d!=="object")return new R("Invalid "+p+" `"+u+"` of type `"+d+"` "+("supplied to `"+i+"`, expected `object`."));var h=C({},l[s],e);for(var v in h){var $=e[v];if(f(e,v)&&typeof $!="function")return H(i,p,u,v,L($));if(!$)return new R("Invalid "+p+" `"+u+"` key `"+v+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(l[s],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(e),null,"  "));var r=$(c,v,i,p,u+"."+v,P);if(r)return r}return null}return I(n)}function F(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(F);if(e===null||y(e))return!0;var n=g(e);if(n){var l=n.call(e),s;if(n!==e.entries){for(;!(s=l.next()).done;)if(!F(s.value))return!1}else for(;!(s=l.next()).done;){var i=s.value;if(i&&!F(i[1]))return!1}}else return!1;return!0;default:return!1}}function ce(e,n){return e==="symbol"?!0:n?n["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&n instanceof Symbol:!1}function k(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":ce(n,e)?"symbol":n}function L(e){if(typeof e>"u"||e===null)return""+e;var n=k(e);if(n==="object"){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function J(e){var n=L(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}function fe(e){return!e.constructor||!e.constructor.name?x:e.constructor.name}return w.checkPropTypes=E,w.resetWarningCache=E.resetWarningCache,w.PropTypes=w,w},re}var te,ge;function je(){if(ge)return te;ge=1;var o=Z();function C(){}function P(){}return P.resetWarningCache=C,te=function(){function f(O,y,_,S,T,g){if(g!==o){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}f.isRequired=f;function E(){return f}var a={array:f,bigint:f,bool:f,func:f,number:f,object:f,string:f,symbol:f,any:f,arrayOf:E,element:f,elementType:f,instanceOf:E,node:f,objectOf:E,oneOf:E,oneOfType:E,shape:E,exact:E,checkPropTypes:P,resetWarningCache:C};return a.PropTypes=a,a},te}var Se;function Ie(){if(Se)return N.exports;if(Se=1,process.env.NODE_ENV!=="production"){var o=de(),C=!0;N.exports=Ae()(o.isElement,C)}else N.exports=je()();return N.exports}var $e=Ie();const z=_e($e),Pe=({primary:o=!1,backgroundColor:C=null,size:P="medium",label:f,...E})=>{const a=o?"storybook-button--primary":"storybook-button--secondary";return U.createElement("button",{type:"button",className:["storybook-button",`storybook-button--${P}`,a].join(" "),style:C&&{backgroundColor:C},...E},f)};Pe.propTypes={primary:z.bool,backgroundColor:z.string,size:z.oneOf(["small","medium","large"]),label:z.string.isRequired,onClick:z.func},D.Button=Pe,Object.defineProperty(D,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=my-ui-library.umd.js.map
