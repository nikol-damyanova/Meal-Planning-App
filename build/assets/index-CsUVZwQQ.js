(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function A_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Wd={exports:{}},el={},Gd={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy;function rI(){if(Vy)return Oe;Vy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),w=Symbol.iterator;function T(j){return j===null||typeof j!="object"?null:(j=w&&j[w]||j["@@iterator"],typeof j=="function"?j:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,V={};function L(j,J,pe){this.props=j,this.context=J,this.refs=V,this.updater=pe||R}L.prototype.isReactComponent={},L.prototype.setState=function(j,J){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,J,"setState")},L.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function $(){}$.prototype=L.prototype;function G(j,J,pe){this.props=j,this.context=J,this.refs=V,this.updater=pe||R}var W=G.prototype=new $;W.constructor=G,M(W,L.prototype),W.isPureReactComponent=!0;var Q=Array.isArray,re=Object.prototype.hasOwnProperty,K={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(j,J,pe){var be,ae={},Te=null,Ie=null;if(J!=null)for(be in J.ref!==void 0&&(Ie=J.ref),J.key!==void 0&&(Te=""+J.key),J)re.call(J,be)&&!P.hasOwnProperty(be)&&(ae[be]=J[be]);var Se=arguments.length-2;if(Se===1)ae.children=pe;else if(1<Se){for(var Be=Array(Se),ot=0;ot<Se;ot++)Be[ot]=arguments[ot+2];ae.children=Be}if(j&&j.defaultProps)for(be in Se=j.defaultProps,Se)ae[be]===void 0&&(ae[be]=Se[be]);return{$$typeof:n,type:j,key:Te,ref:Ie,props:ae,_owner:K.current}}function A(j,J){return{$$typeof:n,type:j.type,key:J,ref:j.ref,props:j.props,_owner:j._owner}}function N(j){return typeof j=="object"&&j!==null&&j.$$typeof===n}function b(j){var J={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(pe){return J[pe]})}var D=/\/+/g;function C(j,J){return typeof j=="object"&&j!==null&&j.key!=null?b(""+j.key):J.toString(36)}function Z(j,J,pe,be,ae){var Te=typeof j;(Te==="undefined"||Te==="boolean")&&(j=null);var Ie=!1;if(j===null)Ie=!0;else switch(Te){case"string":case"number":Ie=!0;break;case"object":switch(j.$$typeof){case n:case e:Ie=!0}}if(Ie)return Ie=j,ae=ae(Ie),j=be===""?"."+C(Ie,0):be,Q(ae)?(pe="",j!=null&&(pe=j.replace(D,"$&/")+"/"),Z(ae,J,pe,"",function(ot){return ot})):ae!=null&&(N(ae)&&(ae=A(ae,pe+(!ae.key||Ie&&Ie.key===ae.key?"":(""+ae.key).replace(D,"$&/")+"/")+j)),J.push(ae)),1;if(Ie=0,be=be===""?".":be+":",Q(j))for(var Se=0;Se<j.length;Se++){Te=j[Se];var Be=be+C(Te,Se);Ie+=Z(Te,J,pe,Be,ae)}else if(Be=T(j),typeof Be=="function")for(j=Be.call(j),Se=0;!(Te=j.next()).done;)Te=Te.value,Be=be+C(Te,Se++),Ie+=Z(Te,J,pe,Be,ae);else if(Te==="object")throw J=String(j),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return Ie}function Ce(j,J,pe){if(j==null)return j;var be=[],ae=0;return Z(j,be,"","",function(Te){return J.call(pe,Te,ae++)}),be}function Pe(j){if(j._status===-1){var J=j._result;J=J(),J.then(function(pe){(j._status===0||j._status===-1)&&(j._status=1,j._result=pe)},function(pe){(j._status===0||j._status===-1)&&(j._status=2,j._result=pe)}),j._status===-1&&(j._status=0,j._result=J)}if(j._status===1)return j._result.default;throw j._result}var xe={current:null},ie={transition:null},ye={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:ie,ReactCurrentOwner:K};function le(){throw Error("act(...) is not supported in production builds of React.")}return Oe.Children={map:Ce,forEach:function(j,J,pe){Ce(j,function(){J.apply(this,arguments)},pe)},count:function(j){var J=0;return Ce(j,function(){J++}),J},toArray:function(j){return Ce(j,function(J){return J})||[]},only:function(j){if(!N(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Oe.Component=L,Oe.Fragment=t,Oe.Profiler=o,Oe.PureComponent=G,Oe.StrictMode=i,Oe.Suspense=f,Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,Oe.act=le,Oe.cloneElement=function(j,J,pe){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var be=M({},j.props),ae=j.key,Te=j.ref,Ie=j._owner;if(J!=null){if(J.ref!==void 0&&(Te=J.ref,Ie=K.current),J.key!==void 0&&(ae=""+J.key),j.type&&j.type.defaultProps)var Se=j.type.defaultProps;for(Be in J)re.call(J,Be)&&!P.hasOwnProperty(Be)&&(be[Be]=J[Be]===void 0&&Se!==void 0?Se[Be]:J[Be])}var Be=arguments.length-2;if(Be===1)be.children=pe;else if(1<Be){Se=Array(Be);for(var ot=0;ot<Be;ot++)Se[ot]=arguments[ot+2];be.children=Se}return{$$typeof:n,type:j.type,key:ae,ref:Te,props:be,_owner:Ie}},Oe.createContext=function(j){return j={$$typeof:c,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:a,_context:j},j.Consumer=j},Oe.createElement=I,Oe.createFactory=function(j){var J=I.bind(null,j);return J.type=j,J},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(j){return{$$typeof:d,render:j}},Oe.isValidElement=N,Oe.lazy=function(j){return{$$typeof:_,_payload:{_status:-1,_result:j},_init:Pe}},Oe.memo=function(j,J){return{$$typeof:g,type:j,compare:J===void 0?null:J}},Oe.startTransition=function(j){var J=ie.transition;ie.transition={};try{j()}finally{ie.transition=J}},Oe.unstable_act=le,Oe.useCallback=function(j,J){return xe.current.useCallback(j,J)},Oe.useContext=function(j){return xe.current.useContext(j)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(j){return xe.current.useDeferredValue(j)},Oe.useEffect=function(j,J){return xe.current.useEffect(j,J)},Oe.useId=function(){return xe.current.useId()},Oe.useImperativeHandle=function(j,J,pe){return xe.current.useImperativeHandle(j,J,pe)},Oe.useInsertionEffect=function(j,J){return xe.current.useInsertionEffect(j,J)},Oe.useLayoutEffect=function(j,J){return xe.current.useLayoutEffect(j,J)},Oe.useMemo=function(j,J){return xe.current.useMemo(j,J)},Oe.useReducer=function(j,J,pe){return xe.current.useReducer(j,J,pe)},Oe.useRef=function(j){return xe.current.useRef(j)},Oe.useState=function(j){return xe.current.useState(j)},Oe.useSyncExternalStore=function(j,J,pe){return xe.current.useSyncExternalStore(j,J,pe)},Oe.useTransition=function(){return xe.current.useTransition()},Oe.version="18.3.1",Oe}var Fy;function Tl(){return Fy||(Fy=1,Gd.exports=rI()),Gd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy;function iI(){if(jy)return el;jy=1;var n=Tl(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,g){var _,w={},T=null,R=null;g!==void 0&&(T=""+g),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(R=f.ref);for(_ in f)i.call(f,_)&&!a.hasOwnProperty(_)&&(w[_]=f[_]);if(d&&d.defaultProps)for(_ in f=d.defaultProps,f)w[_]===void 0&&(w[_]=f[_]);return{$$typeof:e,type:d,key:T,ref:R,props:w,_owner:o.current}}return el.Fragment=t,el.jsx=c,el.jsxs=c,el}var Uy;function sI(){return Uy||(Uy=1,Wd.exports=iI()),Wd.exports}var S=sI(),Zu={},Kd={exports:{}},en={},Qd={exports:{}},Yd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By;function oI(){return By||(By=1,(function(n){function e(ie,ye){var le=ie.length;ie.push(ye);e:for(;0<le;){var j=le-1>>>1,J=ie[j];if(0<o(J,ye))ie[j]=ye,ie[le]=J,le=j;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var ye=ie[0],le=ie.pop();if(le!==ye){ie[0]=le;e:for(var j=0,J=ie.length,pe=J>>>1;j<pe;){var be=2*(j+1)-1,ae=ie[be],Te=be+1,Ie=ie[Te];if(0>o(ae,le))Te<J&&0>o(Ie,ae)?(ie[j]=Ie,ie[Te]=le,j=Te):(ie[j]=ae,ie[be]=le,j=be);else if(Te<J&&0>o(Ie,le))ie[j]=Ie,ie[Te]=le,j=Te;else break e}}return ye}function o(ie,ye){var le=ie.sortIndex-ye.sortIndex;return le!==0?le:ie.id-ye.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var f=[],g=[],_=1,w=null,T=3,R=!1,M=!1,V=!1,L=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(ie){for(var ye=t(g);ye!==null;){if(ye.callback===null)i(g);else if(ye.startTime<=ie)i(g),ye.sortIndex=ye.expirationTime,e(f,ye);else break;ye=t(g)}}function Q(ie){if(V=!1,W(ie),!M)if(t(f)!==null)M=!0,Pe(re);else{var ye=t(g);ye!==null&&xe(Q,ye.startTime-ie)}}function re(ie,ye){M=!1,V&&(V=!1,$(I),I=-1),R=!0;var le=T;try{for(W(ye),w=t(f);w!==null&&(!(w.expirationTime>ye)||ie&&!b());){var j=w.callback;if(typeof j=="function"){w.callback=null,T=w.priorityLevel;var J=j(w.expirationTime<=ye);ye=n.unstable_now(),typeof J=="function"?w.callback=J:w===t(f)&&i(f),W(ye)}else i(f);w=t(f)}if(w!==null)var pe=!0;else{var be=t(g);be!==null&&xe(Q,be.startTime-ye),pe=!1}return pe}finally{w=null,T=le,R=!1}}var K=!1,P=null,I=-1,A=5,N=-1;function b(){return!(n.unstable_now()-N<A)}function D(){if(P!==null){var ie=n.unstable_now();N=ie;var ye=!0;try{ye=P(!0,ie)}finally{ye?C():(K=!1,P=null)}}else K=!1}var C;if(typeof G=="function")C=function(){G(D)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,Ce=Z.port2;Z.port1.onmessage=D,C=function(){Ce.postMessage(null)}}else C=function(){L(D,0)};function Pe(ie){P=ie,K||(K=!0,C())}function xe(ie,ye){I=L(function(){ie(n.unstable_now())},ye)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){M||R||(M=!0,Pe(re))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(ie){switch(T){case 1:case 2:case 3:var ye=3;break;default:ye=T}var le=T;T=ye;try{return ie()}finally{T=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,ye){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var le=T;T=ie;try{return ye()}finally{T=le}},n.unstable_scheduleCallback=function(ie,ye,le){var j=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?j+le:j):le=j,ie){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=le+J,ie={id:_++,callback:ye,priorityLevel:ie,startTime:le,expirationTime:J,sortIndex:-1},le>j?(ie.sortIndex=le,e(g,ie),t(f)===null&&ie===t(g)&&(V?($(I),I=-1):V=!0,xe(Q,le-j))):(ie.sortIndex=J,e(f,ie),M||R||(M=!0,Pe(re))),ie},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(ie){var ye=T;return function(){var le=T;T=ye;try{return ie.apply(this,arguments)}finally{T=le}}}})(Yd)),Yd}var zy;function aI(){return zy||(zy=1,Qd.exports=oI()),Qd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy;function lI(){if(qy)return en;qy=1;var n=Tl(),e=aI();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},w={};function T(r){return f.call(w,r)?!0:f.call(_,r)?!1:g.test(r)?w[r]=!0:(_[r]=!0,!1)}function R(r,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function M(r,s,l,h){if(s===null||typeof s>"u"||R(r,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function V(r,s,l,h,p,y,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=y,this.removeEmptyString=E}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){L[r]=new V(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];L[s]=new V(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){L[r]=new V(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){L[r]=new V(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){L[r]=new V(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){L[r]=new V(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){L[r]=new V(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){L[r]=new V(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){L[r]=new V(r,5,!1,r.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function G(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace($,G);L[s]=new V(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace($,G);L[s]=new V(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace($,G);L[s]=new V(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){L[r]=new V(r,1,!1,r.toLowerCase(),null,!1,!1)}),L.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){L[r]=new V(r,1,!1,r.toLowerCase(),null,!0,!0)});function W(r,s,l,h){var p=L.hasOwnProperty(s)?L[s]:null;(p!==null?p.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,p,h)&&(l=null),h||p===null?T(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):p.mustUseProperty?r[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,h=p.attributeNamespace,l===null?r.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?r.setAttributeNS(h,s,l):r.setAttribute(s,l))))}var Q=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),K=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),b=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),ie=Symbol.iterator;function ye(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var le=Object.assign,j;function J(r){if(j===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);j=s&&s[1]||""}return`
`+j+r}var pe=!1;function be(r,s){if(!r||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(q){var h=q}Reflect.construct(r,[],s)}else{try{s.call()}catch(q){h=q}r.call(s.prototype)}else{try{throw Error()}catch(q){h=q}r()}}catch(q){if(q&&h&&typeof q.stack=="string"){for(var p=q.stack.split(`
`),y=h.stack.split(`
`),E=p.length-1,x=y.length-1;1<=E&&0<=x&&p[E]!==y[x];)x--;for(;1<=E&&0<=x;E--,x--)if(p[E]!==y[x]){if(E!==1||x!==1)do if(E--,x--,0>x||p[E]!==y[x]){var O=`
`+p[E].replace(" at new "," at ");return r.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",r.displayName)),O}while(1<=E&&0<=x);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?J(r):""}function ae(r){switch(r.tag){case 5:return J(r.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return r=be(r.type,!1),r;case 11:return r=be(r.type.render,!1),r;case 1:return r=be(r.type,!0),r;default:return""}}function Te(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case K:return"Portal";case A:return"Profiler";case I:return"StrictMode";case C:return"Suspense";case Z:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case b:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case D:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ce:return s=r.displayName||null,s!==null?s:Te(r.type)||"Memo";case Pe:s=r._payload,r=r._init;try{return Te(r(s))}catch{}}return null}function Ie(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Se(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Be(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ot(r){var s=Be(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,y=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return p.call(this)},set:function(E){h=""+E,y.call(this,E)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(E){h=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Tr(r){r._valueTracker||(r._valueTracker=ot(r))}function Ms(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return r&&(h=Be(r)?r.checked?"true":"false":r.value),r=h,r!==l?(s.setValue(r),!0):!1}function Qr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ui(r,s){var l=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function Os(r,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Se(s.value!=null?s.value:l),r._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function oa(r,s){s=s.checked,s!=null&&W(r,"checked",s,!1)}function aa(r,s){oa(r,s);var l=Se(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ls(r,s.type,l):s.hasOwnProperty("defaultValue")&&Ls(r,s.type,Se(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Fl(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Ls(r,s,l){(s!=="number"||Qr(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var Ir=Array.isArray;function Sr(r,s,l,h){if(r=r.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<r.length;l++)p=s.hasOwnProperty("$"+r[l].value),r[l].selected!==p&&(r[l].selected=p),p&&h&&(r[l].defaultSelected=!0)}else{for(l=""+Se(l),s=null,p=0;p<r.length;p++){if(r[p].value===l){r[p].selected=!0,h&&(r[p].defaultSelected=!0);return}s!==null||r[p].disabled||(s=r[p])}s!==null&&(s.selected=!0)}}function la(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Vs(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Ir(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:Se(l)}}function Fs(r,s){var l=Se(s.value),h=Se(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),h!=null&&(r.defaultValue=""+h)}function ua(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function yt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?yt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var kr,ca=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,p){MSApp.execUnsafeLocalFunction(function(){return r(s,l,h,p)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=kr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Yr(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zi=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(r){zi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Bi[s]=Bi[r]})});function ha(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Bi.hasOwnProperty(r)&&Bi[r]?(""+s).trim():s+"px"}function da(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=ha(l,s[l],h);l==="float"&&(l="cssFloat"),h?r.setProperty(l,p):r[l]=p}}var fa=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pa(r,s){if(s){if(fa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ga(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=null;function js(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Us=null,yn=null,Jn=null;function Bs(r){if(r=ja(r)){if(typeof Us!="function")throw Error(t(280));var s=r.stateNode;s&&(s=pu(s),Us(r.stateNode,r.type,s))}}function Xn(r){yn?Jn?Jn.push(r):Jn=[r]:yn=r}function ma(){if(yn){var r=yn,s=Jn;if(Jn=yn=null,Bs(r),s)for(r=0;r<s.length;r++)Bs(s[r])}}function $i(r,s){return r(s)}function ya(){}var Ar=!1;function va(r,s,l){if(Ar)return r(s,l);Ar=!0;try{return $i(r,s,l)}finally{Ar=!1,(yn!==null||Jn!==null)&&(ya(),ma())}}function lt(r,s){var l=r.stateNode;if(l===null)return null;var h=pu(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var zs=!1;if(d)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){zs=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{zs=!1}function Hi(r,s,l,h,p,y,E,x,O){var q=Array.prototype.slice.call(arguments,3);try{s.apply(l,q)}catch(te){this.onError(te)}}var Wi=!1,qs=null,bn=!1,_a=null,wh={onError:function(r){Wi=!0,qs=r}};function $s(r,s,l,h,p,y,E,x,O){Wi=!1,qs=null,Hi.apply(wh,arguments)}function jl(r,s,l,h,p,y,E,x,O){if($s.apply(this,arguments),Wi){if(Wi){var q=qs;Wi=!1,qs=null}else throw Error(t(198));bn||(bn=!0,_a=q)}}function Dn(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function Gi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Mn(r){if(Dn(r)!==r)throw Error(t(188))}function Ul(r){var s=r.alternate;if(!s){if(s=Dn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,h=s;;){var p=l.return;if(p===null)break;var y=p.alternate;if(y===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===l)return Mn(p),r;if(y===h)return Mn(p),s;y=y.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=y;else{for(var E=!1,x=p.child;x;){if(x===l){E=!0,l=p,h=y;break}if(x===h){E=!0,h=p,l=y;break}x=x.sibling}if(!E){for(x=y.child;x;){if(x===l){E=!0,l=y,h=p;break}if(x===h){E=!0,h=y,l=p;break}x=x.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function wa(r){return r=Ul(r),r!==null?Hs(r):null}function Hs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Hs(r);if(s!==null)return s;r=r.sibling}return null}var Ws=e.unstable_scheduleCallback,Ea=e.unstable_cancelCallback,Bl=e.unstable_shouldYield,Eh=e.unstable_requestPaint,Ge=e.unstable_now,zl=e.unstable_getCurrentPriorityLevel,Ki=e.unstable_ImmediatePriority,Jr=e.unstable_UserBlockingPriority,vn=e.unstable_NormalPriority,Ta=e.unstable_LowPriority,ql=e.unstable_IdlePriority,Qi=null,on=null;function $l(r){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Qi,r,void 0,(r.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:Wl,Ia=Math.log,Hl=Math.LN2;function Wl(r){return r>>>=0,r===0?32:31-(Ia(r)/Hl|0)|0}var Gs=64,Ks=4194304;function Xr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Yi(r,s){var l=r.pendingLanes;if(l===0)return 0;var h=0,p=r.suspendedLanes,y=r.pingedLanes,E=l&268435455;if(E!==0){var x=E&~p;x!==0?h=Xr(x):(y&=E,y!==0&&(h=Xr(y)))}else E=l&~p,E!==0?h=Xr(E):y!==0&&(h=Xr(y));if(h===0)return 0;if(s!==0&&s!==h&&(s&p)===0&&(p=h&-h,y=s&-s,p>=y||p===16&&(y&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)l=31-qt(s),p=1<<l,h|=r[l],s&=~p;return h}function Th(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cr(r,s){for(var l=r.suspendedLanes,h=r.pingedLanes,p=r.expirationTimes,y=r.pendingLanes;0<y;){var E=31-qt(y),x=1<<E,O=p[E];O===-1?((x&l)===0||(x&h)!==0)&&(p[E]=Th(x,s)):O<=s&&(r.expiredLanes|=x),y&=~x}}function an(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Ji(){var r=Gs;return Gs<<=1,(Gs&4194240)===0&&(Gs=64),r}function Zr(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function ei(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-qt(s),r[s]=l}function We(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<l;){var p=31-qt(l),y=1<<p;s[p]=0,h[p]=-1,r[p]=-1,l&=~y}}function ti(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var h=31-qt(l),p=1<<h;p&s|r[h]&s&&(r[h]|=s),l&=~p}}var Fe=0;function ni(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Gl,Qs,Kl,Ql,Yl,Sa=!1,Zn=[],Rt=null,On=null,Ln=null,ri=new Map,_n=new Map,er=[],Ih="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jl(r,s){switch(r){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":ri.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(s.pointerId)}}function Gt(r,s,l,h,p,y){return r===null||r.nativeEvent!==y?(r={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:y,targetContainers:[p]},s!==null&&(s=ja(s),s!==null&&Qs(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),r)}function Sh(r,s,l,h,p){switch(s){case"focusin":return Rt=Gt(Rt,r,s,l,h,p),!0;case"dragenter":return On=Gt(On,r,s,l,h,p),!0;case"mouseover":return Ln=Gt(Ln,r,s,l,h,p),!0;case"pointerover":var y=p.pointerId;return ri.set(y,Gt(ri.get(y)||null,r,s,l,h,p)),!0;case"gotpointercapture":return y=p.pointerId,_n.set(y,Gt(_n.get(y)||null,r,s,l,h,p)),!0}return!1}function Xl(r){var s=ns(r.target);if(s!==null){var l=Dn(s);if(l!==null){if(s=l.tag,s===13){if(s=Gi(l),s!==null){r.blockedOn=s,Yl(r.priority,function(){Kl(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Rr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=Ys(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var h=new l.constructor(l.type,l);qi=h,l.target.dispatchEvent(h),qi=null}else return s=ja(l),s!==null&&Qs(s),r.blockedOn=l,!1;s.shift()}return!0}function Xi(r,s,l){Rr(r)&&l.delete(s)}function Zl(){Sa=!1,Rt!==null&&Rr(Rt)&&(Rt=null),On!==null&&Rr(On)&&(On=null),Ln!==null&&Rr(Ln)&&(Ln=null),ri.forEach(Xi),_n.forEach(Xi)}function Vn(r,s){r.blockedOn===s&&(r.blockedOn=null,Sa||(Sa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zl)))}function Fn(r){function s(p){return Vn(p,r)}if(0<Zn.length){Vn(Zn[0],r);for(var l=1;l<Zn.length;l++){var h=Zn[l];h.blockedOn===r&&(h.blockedOn=null)}}for(Rt!==null&&Vn(Rt,r),On!==null&&Vn(On,r),Ln!==null&&Vn(Ln,r),ri.forEach(s),_n.forEach(s),l=0;l<er.length;l++)h=er[l],h.blockedOn===r&&(h.blockedOn=null);for(;0<er.length&&(l=er[0],l.blockedOn===null);)Xl(l),l.blockedOn===null&&er.shift()}var Pr=Q.ReactCurrentBatchConfig,ii=!0;function Ze(r,s,l,h){var p=Fe,y=Pr.transition;Pr.transition=null;try{Fe=1,ka(r,s,l,h)}finally{Fe=p,Pr.transition=y}}function kh(r,s,l,h){var p=Fe,y=Pr.transition;Pr.transition=null;try{Fe=4,ka(r,s,l,h)}finally{Fe=p,Pr.transition=y}}function ka(r,s,l,h){if(ii){var p=Ys(r,s,l,h);if(p===null)Lh(r,s,h,Zi,l),Jl(r,h);else if(Sh(p,r,s,l,h))h.stopPropagation();else if(Jl(r,h),s&4&&-1<Ih.indexOf(r)){for(;p!==null;){var y=ja(p);if(y!==null&&Gl(y),y=Ys(r,s,l,h),y===null&&Lh(r,s,h,Zi,l),y===p)break;p=y}p!==null&&h.stopPropagation()}else Lh(r,s,h,null,l)}}var Zi=null;function Ys(r,s,l,h){if(Zi=null,r=js(h),r=ns(r),r!==null)if(s=Dn(r),s===null)r=null;else if(l=s.tag,l===13){if(r=Gi(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Zi=r,null}function Aa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zl()){case Ki:return 1;case Jr:return 4;case vn:case Ta:return 16;case ql:return 536870912;default:return 16}default:return 16}}var ln=null,Js=null,Kt=null;function Ca(){if(Kt)return Kt;var r,s=Js,l=s.length,h,p="value"in ln?ln.value:ln.textContent,y=p.length;for(r=0;r<l&&s[r]===p[r];r++);var E=l-r;for(h=1;h<=E&&s[l-h]===p[y-h];h++);return Kt=p.slice(r,1<h?1-h:void 0)}function Xs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function tr(){return!0}function Ra(){return!1}function Pt(r){function s(l,h,p,y,E){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=y,this.target=E,this.currentTarget=null;for(var x in r)r.hasOwnProperty(x)&&(l=r[x],this[x]=l?l(y):y[x]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?tr:Ra,this.isPropagationStopped=Ra,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),s}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=Pt(jn),nr=le({},jn,{view:0,detail:0}),Ah=Pt(nr),eo,xr,si,es=le({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==si&&(si&&r.type==="mousemove"?(eo=r.screenX-si.screenX,xr=r.screenY-si.screenY):xr=eo=0,si=r),eo)},movementY:function(r){return"movementY"in r?r.movementY:xr}}),to=Pt(es),Pa=le({},es,{dataTransfer:0}),eu=Pt(Pa),no=le({},nr,{relatedTarget:0}),ro=Pt(no),tu=le({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nr=Pt(tu),nu=le({},jn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),ru=Pt(nu),iu=le({},jn,{data:0}),xa=Pt(iu),io={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},su={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ou(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=su[r])?!!s[r]:!1}function rr(){return ou}var u=le({},nr,{key:function(r){if(r.key){var s=io[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Xs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?$t[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rr,charCode:function(r){return r.type==="keypress"?Xs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Xs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Pt(u),v=le({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),k=Pt(v),U=le({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rr}),H=Pt(U),oe=le({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),He=Pt(oe),_t=le({},es,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),je=Pt(_t),It=[9,13,27,32],dt=d&&"CompositionEvent"in window,wn=null;d&&"documentMode"in document&&(wn=document.documentMode);var un=d&&"TextEvent"in window&&!wn,ts=d&&(!dt||wn&&8<wn&&11>=wn),so=" ",Ng=!1;function bg(r,s){switch(r){case"keyup":return It.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dg(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var oo=!1;function eT(r,s){switch(r){case"compositionend":return Dg(s);case"keypress":return s.which!==32?null:(Ng=!0,so);case"textInput":return r=s.data,r===so&&Ng?null:r;default:return null}}function tT(r,s){if(oo)return r==="compositionend"||!dt&&bg(r,s)?(r=Ca(),Kt=Js=ln=null,oo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ts&&s.locale!=="ko"?null:s.data;default:return null}}var nT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mg(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!nT[r.type]:s==="textarea"}function Og(r,s,l,h){Xn(h),s=hu(s,"onChange"),0<s.length&&(l=new Zs("onChange","change",null,l,h),r.push({event:l,listeners:s}))}var Na=null,ba=null;function rT(r){Zg(r,0)}function au(r){var s=ho(r);if(Ms(s))return r}function iT(r,s){if(r==="change")return s}var Lg=!1;if(d){var Ch;if(d){var Rh="oninput"in document;if(!Rh){var Vg=document.createElement("div");Vg.setAttribute("oninput","return;"),Rh=typeof Vg.oninput=="function"}Ch=Rh}else Ch=!1;Lg=Ch&&(!document.documentMode||9<document.documentMode)}function Fg(){Na&&(Na.detachEvent("onpropertychange",jg),ba=Na=null)}function jg(r){if(r.propertyName==="value"&&au(ba)){var s=[];Og(s,ba,r,js(r)),va(rT,s)}}function sT(r,s,l){r==="focusin"?(Fg(),Na=s,ba=l,Na.attachEvent("onpropertychange",jg)):r==="focusout"&&Fg()}function oT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return au(ba)}function aT(r,s){if(r==="click")return au(s)}function lT(r,s){if(r==="input"||r==="change")return au(s)}function uT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Un=typeof Object.is=="function"?Object.is:uT;function Da(r,s){if(Un(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(s,p)||!Un(r[p],s[p]))return!1}return!0}function Ug(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Bg(r,s){var l=Ug(r);r=0;for(var h;l;){if(l.nodeType===3){if(h=r+l.textContent.length,r<=s&&h>=s)return{node:l,offset:s-r};r=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Ug(l)}}function zg(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?zg(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function qg(){for(var r=window,s=Qr();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=Qr(r.document)}return s}function Ph(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function cT(r){var s=qg(),l=r.focusedElem,h=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&zg(l.ownerDocument.documentElement,l)){if(h!==null&&Ph(l)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var p=l.textContent.length,y=Math.min(h.start,p);h=h.end===void 0?y:Math.min(h.end,p),!r.extend&&y>h&&(p=h,h=y,y=p),p=Bg(l,y);var E=Bg(l,h);p&&E&&(r.rangeCount!==1||r.anchorNode!==p.node||r.anchorOffset!==p.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),r.removeAllRanges(),y>h?(r.addRange(s),r.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var hT=d&&"documentMode"in document&&11>=document.documentMode,ao=null,xh=null,Ma=null,Nh=!1;function $g(r,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nh||ao==null||ao!==Qr(h)||(h=ao,"selectionStart"in h&&Ph(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ma&&Da(Ma,h)||(Ma=h,h=hu(xh,"onSelect"),0<h.length&&(s=new Zs("onSelect","select",null,s,l),r.push({event:s,listeners:h}),s.target=ao)))}function lu(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var lo={animationend:lu("Animation","AnimationEnd"),animationiteration:lu("Animation","AnimationIteration"),animationstart:lu("Animation","AnimationStart"),transitionend:lu("Transition","TransitionEnd")},bh={},Hg={};d&&(Hg=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function uu(r){if(bh[r])return bh[r];if(!lo[r])return r;var s=lo[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in Hg)return bh[r]=s[l];return r}var Wg=uu("animationend"),Gg=uu("animationiteration"),Kg=uu("animationstart"),Qg=uu("transitionend"),Yg=new Map,Jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(r,s){Yg.set(r,s),a(s,[r])}for(var Dh=0;Dh<Jg.length;Dh++){var Mh=Jg[Dh],dT=Mh.toLowerCase(),fT=Mh[0].toUpperCase()+Mh.slice(1);oi(dT,"on"+fT)}oi(Wg,"onAnimationEnd"),oi(Gg,"onAnimationIteration"),oi(Kg,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(Qg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function Xg(r,s,l){var h=r.type||"unknown-event";r.currentTarget=l,jl(h,s,void 0,r),r.currentTarget=null}function Zg(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var h=r[l],p=h.event;h=h.listeners;e:{var y=void 0;if(s)for(var E=h.length-1;0<=E;E--){var x=h[E],O=x.instance,q=x.currentTarget;if(x=x.listener,O!==y&&p.isPropagationStopped())break e;Xg(p,x,q),y=O}else for(E=0;E<h.length;E++){if(x=h[E],O=x.instance,q=x.currentTarget,x=x.listener,O!==y&&p.isPropagationStopped())break e;Xg(p,x,q),y=O}}}if(bn)throw r=_a,bn=!1,_a=null,r}function Ye(r,s){var l=s[zh];l===void 0&&(l=s[zh]=new Set);var h=r+"__bubble";l.has(h)||(em(s,r,2,!1),l.add(h))}function Oh(r,s,l){var h=0;s&&(h|=4),em(l,r,h,s)}var cu="_reactListening"+Math.random().toString(36).slice(2);function La(r){if(!r[cu]){r[cu]=!0,i.forEach(function(l){l!=="selectionchange"&&(pT.has(l)||Oh(l,!1,r),Oh(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[cu]||(s[cu]=!0,Oh("selectionchange",!1,s))}}function em(r,s,l,h){switch(Aa(s)){case 1:var p=Ze;break;case 4:p=kh;break;default:p=ka}l=p.bind(null,s,l,r),p=void 0,!zs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),h?p!==void 0?r.addEventListener(s,l,{capture:!0,passive:p}):r.addEventListener(s,l,!0):p!==void 0?r.addEventListener(s,l,{passive:p}):r.addEventListener(s,l,!1)}function Lh(r,s,l,h,p){var y=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var E=h.tag;if(E===3||E===4){var x=h.stateNode.containerInfo;if(x===p||x.nodeType===8&&x.parentNode===p)break;if(E===4)for(E=h.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===p||O.nodeType===8&&O.parentNode===p))return;E=E.return}for(;x!==null;){if(E=ns(x),E===null)return;if(O=E.tag,O===5||O===6){h=y=E;continue e}x=x.parentNode}}h=h.return}va(function(){var q=y,te=js(l),ne=[];e:{var ee=Yg.get(r);if(ee!==void 0){var ce=Zs,fe=r;switch(r){case"keypress":if(Xs(l)===0)break e;case"keydown":case"keyup":ce=m;break;case"focusin":fe="focus",ce=ro;break;case"focusout":fe="blur",ce=ro;break;case"beforeblur":case"afterblur":ce=ro;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=to;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=eu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=H;break;case Wg:case Gg:case Kg:ce=Nr;break;case Qg:ce=He;break;case"scroll":ce=Ah;break;case"wheel":ce=je;break;case"copy":case"cut":case"paste":ce=ru;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=k}var ge=(s&4)!==0,ut=!ge&&r==="scroll",B=ge?ee!==null?ee+"Capture":null:ee;ge=[];for(var F=q,z;F!==null;){z=F;var se=z.stateNode;if(z.tag===5&&se!==null&&(z=se,B!==null&&(se=lt(F,B),se!=null&&ge.push(Va(F,se,z)))),ut)break;F=F.return}0<ge.length&&(ee=new ce(ee,fe,null,l,te),ne.push({event:ee,listeners:ge}))}}if((s&7)===0){e:{if(ee=r==="mouseover"||r==="pointerover",ce=r==="mouseout"||r==="pointerout",ee&&l!==qi&&(fe=l.relatedTarget||l.fromElement)&&(ns(fe)||fe[br]))break e;if((ce||ee)&&(ee=te.window===te?te:(ee=te.ownerDocument)?ee.defaultView||ee.parentWindow:window,ce?(fe=l.relatedTarget||l.toElement,ce=q,fe=fe?ns(fe):null,fe!==null&&(ut=Dn(fe),fe!==ut||fe.tag!==5&&fe.tag!==6)&&(fe=null)):(ce=null,fe=q),ce!==fe)){if(ge=to,se="onMouseLeave",B="onMouseEnter",F="mouse",(r==="pointerout"||r==="pointerover")&&(ge=k,se="onPointerLeave",B="onPointerEnter",F="pointer"),ut=ce==null?ee:ho(ce),z=fe==null?ee:ho(fe),ee=new ge(se,F+"leave",ce,l,te),ee.target=ut,ee.relatedTarget=z,se=null,ns(te)===q&&(ge=new ge(B,F+"enter",fe,l,te),ge.target=z,ge.relatedTarget=ut,se=ge),ut=se,ce&&fe)t:{for(ge=ce,B=fe,F=0,z=ge;z;z=uo(z))F++;for(z=0,se=B;se;se=uo(se))z++;for(;0<F-z;)ge=uo(ge),F--;for(;0<z-F;)B=uo(B),z--;for(;F--;){if(ge===B||B!==null&&ge===B.alternate)break t;ge=uo(ge),B=uo(B)}ge=null}else ge=null;ce!==null&&tm(ne,ee,ce,ge,!1),fe!==null&&ut!==null&&tm(ne,ut,fe,ge,!0)}}e:{if(ee=q?ho(q):window,ce=ee.nodeName&&ee.nodeName.toLowerCase(),ce==="select"||ce==="input"&&ee.type==="file")var me=iT;else if(Mg(ee))if(Lg)me=lT;else{me=oT;var we=sT}else(ce=ee.nodeName)&&ce.toLowerCase()==="input"&&(ee.type==="checkbox"||ee.type==="radio")&&(me=aT);if(me&&(me=me(r,q))){Og(ne,me,l,te);break e}we&&we(r,ee,q),r==="focusout"&&(we=ee._wrapperState)&&we.controlled&&ee.type==="number"&&Ls(ee,"number",ee.value)}switch(we=q?ho(q):window,r){case"focusin":(Mg(we)||we.contentEditable==="true")&&(ao=we,xh=q,Ma=null);break;case"focusout":Ma=xh=ao=null;break;case"mousedown":Nh=!0;break;case"contextmenu":case"mouseup":case"dragend":Nh=!1,$g(ne,l,te);break;case"selectionchange":if(hT)break;case"keydown":case"keyup":$g(ne,l,te)}var Ee;if(dt)e:{switch(r){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else oo?bg(r,l)&&(Re="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(Re="onCompositionStart");Re&&(ts&&l.locale!=="ko"&&(oo||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&oo&&(Ee=Ca()):(ln=te,Js="value"in ln?ln.value:ln.textContent,oo=!0)),we=hu(q,Re),0<we.length&&(Re=new xa(Re,r,null,l,te),ne.push({event:Re,listeners:we}),Ee?Re.data=Ee:(Ee=Dg(l),Ee!==null&&(Re.data=Ee)))),(Ee=un?eT(r,l):tT(r,l))&&(q=hu(q,"onBeforeInput"),0<q.length&&(te=new xa("onBeforeInput","beforeinput",null,l,te),ne.push({event:te,listeners:q}),te.data=Ee))}Zg(ne,s)})}function Va(r,s,l){return{instance:r,listener:s,currentTarget:l}}function hu(r,s){for(var l=s+"Capture",h=[];r!==null;){var p=r,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=lt(r,l),y!=null&&h.unshift(Va(r,y,p)),y=lt(r,s),y!=null&&h.push(Va(r,y,p))),r=r.return}return h}function uo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function tm(r,s,l,h,p){for(var y=s._reactName,E=[];l!==null&&l!==h;){var x=l,O=x.alternate,q=x.stateNode;if(O!==null&&O===h)break;x.tag===5&&q!==null&&(x=q,p?(O=lt(l,y),O!=null&&E.unshift(Va(l,O,x))):p||(O=lt(l,y),O!=null&&E.push(Va(l,O,x)))),l=l.return}E.length!==0&&r.push({event:s,listeners:E})}var gT=/\r\n?/g,mT=/\u0000|\uFFFD/g;function nm(r){return(typeof r=="string"?r:""+r).replace(gT,`
`).replace(mT,"")}function du(r,s,l){if(s=nm(s),nm(r)!==s&&l)throw Error(t(425))}function fu(){}var Vh=null,Fh=null;function jh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Uh=typeof setTimeout=="function"?setTimeout:void 0,yT=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,vT=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(r){return rm.resolve(null).then(r).catch(_T)}:Uh;function _T(r){setTimeout(function(){throw r})}function Bh(r,s){var l=s,h=0;do{var p=l.nextSibling;if(r.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){r.removeChild(p),Fn(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Fn(s)}function ai(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function im(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var co=Math.random().toString(36).slice(2),ir="__reactFiber$"+co,Fa="__reactProps$"+co,br="__reactContainer$"+co,zh="__reactEvents$"+co,wT="__reactListeners$"+co,ET="__reactHandles$"+co;function ns(r){var s=r[ir];if(s)return s;for(var l=r.parentNode;l;){if(s=l[br]||l[ir]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=im(r);r!==null;){if(l=r[ir])return l;r=im(r)}return s}r=l,l=r.parentNode}return null}function ja(r){return r=r[ir]||r[br],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ho(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function pu(r){return r[Fa]||null}var qh=[],fo=-1;function li(r){return{current:r}}function Je(r){0>fo||(r.current=qh[fo],qh[fo]=null,fo--)}function Ke(r,s){fo++,qh[fo]=r.current,r.current=s}var ui={},Ot=li(ui),Qt=li(!1),rs=ui;function po(r,s){var l=r.type.contextTypes;if(!l)return ui;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in l)p[y]=s[y];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=p),p}function Yt(r){return r=r.childContextTypes,r!=null}function gu(){Je(Qt),Je(Ot)}function sm(r,s,l){if(Ot.current!==ui)throw Error(t(168));Ke(Ot,s),Ke(Qt,l)}function om(r,s,l){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in s))throw Error(t(108,Ie(r)||"Unknown",p));return le({},l,h)}function mu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ui,rs=Ot.current,Ke(Ot,r),Ke(Qt,Qt.current),!0}function am(r,s,l){var h=r.stateNode;if(!h)throw Error(t(169));l?(r=om(r,s,rs),h.__reactInternalMemoizedMergedChildContext=r,Je(Qt),Je(Ot),Ke(Ot,r)):Je(Qt),Ke(Qt,l)}var Dr=null,yu=!1,$h=!1;function lm(r){Dr===null?Dr=[r]:Dr.push(r)}function TT(r){yu=!0,lm(r)}function ci(){if(!$h&&Dr!==null){$h=!0;var r=0,s=Fe;try{var l=Dr;for(Fe=1;r<l.length;r++){var h=l[r];do h=h(!0);while(h!==null)}Dr=null,yu=!1}catch(p){throw Dr!==null&&(Dr=Dr.slice(r+1)),Ws(Ki,ci),p}finally{Fe=s,$h=!1}}return null}var go=[],mo=0,vu=null,_u=0,En=[],Tn=0,is=null,Mr=1,Or="";function ss(r,s){go[mo++]=_u,go[mo++]=vu,vu=r,_u=s}function um(r,s,l){En[Tn++]=Mr,En[Tn++]=Or,En[Tn++]=is,is=r;var h=Mr;r=Or;var p=32-qt(h)-1;h&=~(1<<p),l+=1;var y=32-qt(s)+p;if(30<y){var E=p-p%5;y=(h&(1<<E)-1).toString(32),h>>=E,p-=E,Mr=1<<32-qt(s)+p|l<<p|h,Or=y+r}else Mr=1<<y|l<<p|h,Or=r}function Hh(r){r.return!==null&&(ss(r,1),um(r,1,0))}function Wh(r){for(;r===vu;)vu=go[--mo],go[mo]=null,_u=go[--mo],go[mo]=null;for(;r===is;)is=En[--Tn],En[Tn]=null,Or=En[--Tn],En[Tn]=null,Mr=En[--Tn],En[Tn]=null}var cn=null,hn=null,et=!1,Bn=null;function cm(r,s){var l=An(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function hm(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,cn=r,hn=ai(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,cn=r,hn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=is!==null?{id:Mr,overflow:Or}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=An(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,cn=r,hn=null,!0):!1;default:return!1}}function Gh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Kh(r){if(et){var s=hn;if(s){var l=s;if(!hm(r,s)){if(Gh(r))throw Error(t(418));s=ai(l.nextSibling);var h=cn;s&&hm(r,s)?cm(h,l):(r.flags=r.flags&-4097|2,et=!1,cn=r)}}else{if(Gh(r))throw Error(t(418));r.flags=r.flags&-4097|2,et=!1,cn=r}}}function dm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;cn=r}function wu(r){if(r!==cn)return!1;if(!et)return dm(r),et=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!jh(r.type,r.memoizedProps)),s&&(s=hn)){if(Gh(r))throw fm(),Error(t(418));for(;s;)cm(r,s),s=ai(s.nextSibling)}if(dm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){hn=ai(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}hn=null}}else hn=cn?ai(r.stateNode.nextSibling):null;return!0}function fm(){for(var r=hn;r;)r=ai(r.nextSibling)}function yo(){hn=cn=null,et=!1}function Qh(r){Bn===null?Bn=[r]:Bn.push(r)}var IT=Q.ReactCurrentBatchConfig;function Ua(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,r));var p=h,y=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===y?s.ref:(s=function(E){var x=p.refs;E===null?delete x[y]:x[y]=E},s._stringRef=y,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Eu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function pm(r){var s=r._init;return s(r._payload)}function gm(r){function s(B,F){if(r){var z=B.deletions;z===null?(B.deletions=[F],B.flags|=16):z.push(F)}}function l(B,F){if(!r)return null;for(;F!==null;)s(B,F),F=F.sibling;return null}function h(B,F){for(B=new Map;F!==null;)F.key!==null?B.set(F.key,F):B.set(F.index,F),F=F.sibling;return B}function p(B,F){return B=vi(B,F),B.index=0,B.sibling=null,B}function y(B,F,z){return B.index=z,r?(z=B.alternate,z!==null?(z=z.index,z<F?(B.flags|=2,F):z):(B.flags|=2,F)):(B.flags|=1048576,F)}function E(B){return r&&B.alternate===null&&(B.flags|=2),B}function x(B,F,z,se){return F===null||F.tag!==6?(F=Ud(z,B.mode,se),F.return=B,F):(F=p(F,z),F.return=B,F)}function O(B,F,z,se){var me=z.type;return me===P?te(B,F,z.props.children,se,z.key):F!==null&&(F.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Pe&&pm(me)===F.type)?(se=p(F,z.props),se.ref=Ua(B,F,z),se.return=B,se):(se=Hu(z.type,z.key,z.props,null,B.mode,se),se.ref=Ua(B,F,z),se.return=B,se)}function q(B,F,z,se){return F===null||F.tag!==4||F.stateNode.containerInfo!==z.containerInfo||F.stateNode.implementation!==z.implementation?(F=Bd(z,B.mode,se),F.return=B,F):(F=p(F,z.children||[]),F.return=B,F)}function te(B,F,z,se,me){return F===null||F.tag!==7?(F=fs(z,B.mode,se,me),F.return=B,F):(F=p(F,z),F.return=B,F)}function ne(B,F,z){if(typeof F=="string"&&F!==""||typeof F=="number")return F=Ud(""+F,B.mode,z),F.return=B,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case re:return z=Hu(F.type,F.key,F.props,null,B.mode,z),z.ref=Ua(B,null,F),z.return=B,z;case K:return F=Bd(F,B.mode,z),F.return=B,F;case Pe:var se=F._init;return ne(B,se(F._payload),z)}if(Ir(F)||ye(F))return F=fs(F,B.mode,z,null),F.return=B,F;Eu(B,F)}return null}function ee(B,F,z,se){var me=F!==null?F.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return me!==null?null:x(B,F,""+z,se);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case re:return z.key===me?O(B,F,z,se):null;case K:return z.key===me?q(B,F,z,se):null;case Pe:return me=z._init,ee(B,F,me(z._payload),se)}if(Ir(z)||ye(z))return me!==null?null:te(B,F,z,se,null);Eu(B,z)}return null}function ce(B,F,z,se,me){if(typeof se=="string"&&se!==""||typeof se=="number")return B=B.get(z)||null,x(F,B,""+se,me);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case re:return B=B.get(se.key===null?z:se.key)||null,O(F,B,se,me);case K:return B=B.get(se.key===null?z:se.key)||null,q(F,B,se,me);case Pe:var we=se._init;return ce(B,F,z,we(se._payload),me)}if(Ir(se)||ye(se))return B=B.get(z)||null,te(F,B,se,me,null);Eu(F,se)}return null}function fe(B,F,z,se){for(var me=null,we=null,Ee=F,Re=F=0,At=null;Ee!==null&&Re<z.length;Re++){Ee.index>Re?(At=Ee,Ee=null):At=Ee.sibling;var qe=ee(B,Ee,z[Re],se);if(qe===null){Ee===null&&(Ee=At);break}r&&Ee&&qe.alternate===null&&s(B,Ee),F=y(qe,F,Re),we===null?me=qe:we.sibling=qe,we=qe,Ee=At}if(Re===z.length)return l(B,Ee),et&&ss(B,Re),me;if(Ee===null){for(;Re<z.length;Re++)Ee=ne(B,z[Re],se),Ee!==null&&(F=y(Ee,F,Re),we===null?me=Ee:we.sibling=Ee,we=Ee);return et&&ss(B,Re),me}for(Ee=h(B,Ee);Re<z.length;Re++)At=ce(Ee,B,Re,z[Re],se),At!==null&&(r&&At.alternate!==null&&Ee.delete(At.key===null?Re:At.key),F=y(At,F,Re),we===null?me=At:we.sibling=At,we=At);return r&&Ee.forEach(function(_i){return s(B,_i)}),et&&ss(B,Re),me}function ge(B,F,z,se){var me=ye(z);if(typeof me!="function")throw Error(t(150));if(z=me.call(z),z==null)throw Error(t(151));for(var we=me=null,Ee=F,Re=F=0,At=null,qe=z.next();Ee!==null&&!qe.done;Re++,qe=z.next()){Ee.index>Re?(At=Ee,Ee=null):At=Ee.sibling;var _i=ee(B,Ee,qe.value,se);if(_i===null){Ee===null&&(Ee=At);break}r&&Ee&&_i.alternate===null&&s(B,Ee),F=y(_i,F,Re),we===null?me=_i:we.sibling=_i,we=_i,Ee=At}if(qe.done)return l(B,Ee),et&&ss(B,Re),me;if(Ee===null){for(;!qe.done;Re++,qe=z.next())qe=ne(B,qe.value,se),qe!==null&&(F=y(qe,F,Re),we===null?me=qe:we.sibling=qe,we=qe);return et&&ss(B,Re),me}for(Ee=h(B,Ee);!qe.done;Re++,qe=z.next())qe=ce(Ee,B,Re,qe.value,se),qe!==null&&(r&&qe.alternate!==null&&Ee.delete(qe.key===null?Re:qe.key),F=y(qe,F,Re),we===null?me=qe:we.sibling=qe,we=qe);return r&&Ee.forEach(function(nI){return s(B,nI)}),et&&ss(B,Re),me}function ut(B,F,z,se){if(typeof z=="object"&&z!==null&&z.type===P&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case re:e:{for(var me=z.key,we=F;we!==null;){if(we.key===me){if(me=z.type,me===P){if(we.tag===7){l(B,we.sibling),F=p(we,z.props.children),F.return=B,B=F;break e}}else if(we.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Pe&&pm(me)===we.type){l(B,we.sibling),F=p(we,z.props),F.ref=Ua(B,we,z),F.return=B,B=F;break e}l(B,we);break}else s(B,we);we=we.sibling}z.type===P?(F=fs(z.props.children,B.mode,se,z.key),F.return=B,B=F):(se=Hu(z.type,z.key,z.props,null,B.mode,se),se.ref=Ua(B,F,z),se.return=B,B=se)}return E(B);case K:e:{for(we=z.key;F!==null;){if(F.key===we)if(F.tag===4&&F.stateNode.containerInfo===z.containerInfo&&F.stateNode.implementation===z.implementation){l(B,F.sibling),F=p(F,z.children||[]),F.return=B,B=F;break e}else{l(B,F);break}else s(B,F);F=F.sibling}F=Bd(z,B.mode,se),F.return=B,B=F}return E(B);case Pe:return we=z._init,ut(B,F,we(z._payload),se)}if(Ir(z))return fe(B,F,z,se);if(ye(z))return ge(B,F,z,se);Eu(B,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,F!==null&&F.tag===6?(l(B,F.sibling),F=p(F,z),F.return=B,B=F):(l(B,F),F=Ud(z,B.mode,se),F.return=B,B=F),E(B)):l(B,F)}return ut}var vo=gm(!0),mm=gm(!1),Tu=li(null),Iu=null,_o=null,Yh=null;function Jh(){Yh=_o=Iu=null}function Xh(r){var s=Tu.current;Je(Tu),r._currentValue=s}function Zh(r,s,l){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===l)break;r=r.return}}function wo(r,s){Iu=r,Yh=_o=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Jt=!0),r.firstContext=null)}function In(r){var s=r._currentValue;if(Yh!==r)if(r={context:r,memoizedValue:s,next:null},_o===null){if(Iu===null)throw Error(t(308));_o=r,Iu.dependencies={lanes:0,firstContext:r}}else _o=_o.next=r;return s}var os=null;function ed(r){os===null?os=[r]:os.push(r)}function ym(r,s,l,h){var p=s.interleaved;return p===null?(l.next=l,ed(s)):(l.next=p.next,p.next=l),s.interleaved=l,Lr(r,h)}function Lr(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var hi=!1;function td(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Vr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function di(r,s,l){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(ze&2)!==0){var p=h.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),h.pending=s,Lr(r,l)}return p=h.interleaved,p===null?(s.next=s,ed(h)):(s.next=p.next,p.next=s),h.interleaved=s,Lr(r,l)}function Su(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,ti(r,l)}}function _m(r,s){var l=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?p=y=E:y=y.next=E,l=l.next}while(l!==null);y===null?p=y=s:y=y.next=s}else p=y=s;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:h.shared,effects:h.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function ku(r,s,l,h){var p=r.updateQueue;hi=!1;var y=p.firstBaseUpdate,E=p.lastBaseUpdate,x=p.shared.pending;if(x!==null){p.shared.pending=null;var O=x,q=O.next;O.next=null,E===null?y=q:E.next=q,E=O;var te=r.alternate;te!==null&&(te=te.updateQueue,x=te.lastBaseUpdate,x!==E&&(x===null?te.firstBaseUpdate=q:x.next=q,te.lastBaseUpdate=O))}if(y!==null){var ne=p.baseState;E=0,te=q=O=null,x=y;do{var ee=x.lane,ce=x.eventTime;if((h&ee)===ee){te!==null&&(te=te.next={eventTime:ce,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var fe=r,ge=x;switch(ee=s,ce=l,ge.tag){case 1:if(fe=ge.payload,typeof fe=="function"){ne=fe.call(ce,ne,ee);break e}ne=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=ge.payload,ee=typeof fe=="function"?fe.call(ce,ne,ee):fe,ee==null)break e;ne=le({},ne,ee);break e;case 2:hi=!0}}x.callback!==null&&x.lane!==0&&(r.flags|=64,ee=p.effects,ee===null?p.effects=[x]:ee.push(x))}else ce={eventTime:ce,lane:ee,tag:x.tag,payload:x.payload,callback:x.callback,next:null},te===null?(q=te=ce,O=ne):te=te.next=ce,E|=ee;if(x=x.next,x===null){if(x=p.shared.pending,x===null)break;ee=x,x=ee.next,ee.next=null,p.lastBaseUpdate=ee,p.shared.pending=null}}while(!0);if(te===null&&(O=ne),p.baseState=O,p.firstBaseUpdate=q,p.lastBaseUpdate=te,s=p.shared.interleaved,s!==null){p=s;do E|=p.lane,p=p.next;while(p!==s)}else y===null&&(p.shared.lanes=0);us|=E,r.lanes=E,r.memoizedState=ne}}function wm(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Ba={},sr=li(Ba),za=li(Ba),qa=li(Ba);function as(r){if(r===Ba)throw Error(t(174));return r}function nd(r,s){switch(Ke(qa,s),Ke(za,r),Ke(sr,Ba),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:vt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=vt(s,r)}Je(sr),Ke(sr,s)}function Eo(){Je(sr),Je(za),Je(qa)}function Em(r){as(qa.current);var s=as(sr.current),l=vt(s,r.type);s!==l&&(Ke(za,r),Ke(sr,l))}function rd(r){za.current===r&&(Je(sr),Je(za))}var nt=li(0);function Au(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var id=[];function sd(){for(var r=0;r<id.length;r++)id[r]._workInProgressVersionPrimary=null;id.length=0}var Cu=Q.ReactCurrentDispatcher,od=Q.ReactCurrentBatchConfig,ls=0,rt=null,wt=null,St=null,Ru=!1,$a=!1,Ha=0,ST=0;function Lt(){throw Error(t(321))}function ad(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!Un(r[l],s[l]))return!1;return!0}function ld(r,s,l,h,p,y){if(ls=y,rt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Cu.current=r===null||r.memoizedState===null?RT:PT,r=l(h,p),$a){y=0;do{if($a=!1,Ha=0,25<=y)throw Error(t(301));y+=1,St=wt=null,s.updateQueue=null,Cu.current=xT,r=l(h,p)}while($a)}if(Cu.current=Nu,s=wt!==null&&wt.next!==null,ls=0,St=wt=rt=null,Ru=!1,s)throw Error(t(300));return r}function ud(){var r=Ha!==0;return Ha=0,r}function or(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?rt.memoizedState=St=r:St=St.next=r,St}function Sn(){if(wt===null){var r=rt.alternate;r=r!==null?r.memoizedState:null}else r=wt.next;var s=St===null?rt.memoizedState:St.next;if(s!==null)St=s,wt=r;else{if(r===null)throw Error(t(310));wt=r,r={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},St===null?rt.memoizedState=St=r:St=St.next=r}return St}function Wa(r,s){return typeof s=="function"?s(r):s}function cd(r){var s=Sn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=wt,p=h.baseQueue,y=l.pending;if(y!==null){if(p!==null){var E=p.next;p.next=y.next,y.next=E}h.baseQueue=p=y,l.pending=null}if(p!==null){y=p.next,h=h.baseState;var x=E=null,O=null,q=y;do{var te=q.lane;if((ls&te)===te)O!==null&&(O=O.next={lane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),h=q.hasEagerState?q.eagerState:r(h,q.action);else{var ne={lane:te,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null};O===null?(x=O=ne,E=h):O=O.next=ne,rt.lanes|=te,us|=te}q=q.next}while(q!==null&&q!==y);O===null?E=h:O.next=x,Un(h,s.memoizedState)||(Jt=!0),s.memoizedState=h,s.baseState=E,s.baseQueue=O,l.lastRenderedState=h}if(r=l.interleaved,r!==null){p=r;do y=p.lane,rt.lanes|=y,us|=y,p=p.next;while(p!==r)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function hd(r){var s=Sn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=l.dispatch,p=l.pending,y=s.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do y=r(y,E.action),E=E.next;while(E!==p);Un(y,s.memoizedState)||(Jt=!0),s.memoizedState=y,s.baseQueue===null&&(s.baseState=y),l.lastRenderedState=y}return[y,h]}function Tm(){}function Im(r,s){var l=rt,h=Sn(),p=s(),y=!Un(h.memoizedState,p);if(y&&(h.memoizedState=p,Jt=!0),h=h.queue,dd(Am.bind(null,l,h,r),[r]),h.getSnapshot!==s||y||St!==null&&St.memoizedState.tag&1){if(l.flags|=2048,Ga(9,km.bind(null,l,h,p,s),void 0,null),kt===null)throw Error(t(349));(ls&30)!==0||Sm(l,s,p)}return p}function Sm(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function km(r,s,l,h){s.value=l,s.getSnapshot=h,Cm(s)&&Rm(r)}function Am(r,s,l){return l(function(){Cm(s)&&Rm(r)})}function Cm(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!Un(r,l)}catch{return!0}}function Rm(r){var s=Lr(r,1);s!==null&&Hn(s,r,1,-1)}function Pm(r){var s=or();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:r},s.queue=r,r=r.dispatch=CT.bind(null,rt,r),[s.memoizedState,r]}function Ga(r,s,l,h){return r={tag:r,create:s,destroy:l,deps:h,next:null},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(h=l.next,l.next=r,r.next=h,s.lastEffect=r)),r}function xm(){return Sn().memoizedState}function Pu(r,s,l,h){var p=or();rt.flags|=r,p.memoizedState=Ga(1|s,l,void 0,h===void 0?null:h)}function xu(r,s,l,h){var p=Sn();h=h===void 0?null:h;var y=void 0;if(wt!==null){var E=wt.memoizedState;if(y=E.destroy,h!==null&&ad(h,E.deps)){p.memoizedState=Ga(s,l,y,h);return}}rt.flags|=r,p.memoizedState=Ga(1|s,l,y,h)}function Nm(r,s){return Pu(8390656,8,r,s)}function dd(r,s){return xu(2048,8,r,s)}function bm(r,s){return xu(4,2,r,s)}function Dm(r,s){return xu(4,4,r,s)}function Mm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Om(r,s,l){return l=l!=null?l.concat([r]):null,xu(4,4,Mm.bind(null,s,r),l)}function fd(){}function Lm(r,s){var l=Sn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&ad(s,h[1])?h[0]:(l.memoizedState=[r,s],r)}function Vm(r,s){var l=Sn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&ad(s,h[1])?h[0]:(r=r(),l.memoizedState=[r,s],r)}function Fm(r,s,l){return(ls&21)===0?(r.baseState&&(r.baseState=!1,Jt=!0),r.memoizedState=l):(Un(l,s)||(l=Ji(),rt.lanes|=l,us|=l,r.baseState=!0),s)}function kT(r,s){var l=Fe;Fe=l!==0&&4>l?l:4,r(!0);var h=od.transition;od.transition={};try{r(!1),s()}finally{Fe=l,od.transition=h}}function jm(){return Sn().memoizedState}function AT(r,s,l){var h=mi(r);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Um(r))Bm(s,l);else if(l=ym(r,s,l,h),l!==null){var p=Wt();Hn(l,r,h,p),zm(l,s,h)}}function CT(r,s,l){var h=mi(r),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Um(r))Bm(s,p);else{var y=r.alternate;if(r.lanes===0&&(y===null||y.lanes===0)&&(y=s.lastRenderedReducer,y!==null))try{var E=s.lastRenderedState,x=y(E,l);if(p.hasEagerState=!0,p.eagerState=x,Un(x,E)){var O=s.interleaved;O===null?(p.next=p,ed(s)):(p.next=O.next,O.next=p),s.interleaved=p;return}}catch{}finally{}l=ym(r,s,p,h),l!==null&&(p=Wt(),Hn(l,r,h,p),zm(l,s,h))}}function Um(r){var s=r.alternate;return r===rt||s!==null&&s===rt}function Bm(r,s){$a=Ru=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function zm(r,s,l){if((l&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,ti(r,l)}}var Nu={readContext:In,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},RT={readContext:In,useCallback:function(r,s){return or().memoizedState=[r,s===void 0?null:s],r},useContext:In,useEffect:Nm,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,Pu(4194308,4,Mm.bind(null,s,r),l)},useLayoutEffect:function(r,s){return Pu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Pu(4,2,r,s)},useMemo:function(r,s){var l=or();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var h=or();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=AT.bind(null,rt,r),[h.memoizedState,r]},useRef:function(r){var s=or();return r={current:r},s.memoizedState=r},useState:Pm,useDebugValue:fd,useDeferredValue:function(r){return or().memoizedState=r},useTransition:function(){var r=Pm(!1),s=r[0];return r=kT.bind(null,r[1]),or().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var h=rt,p=or();if(et){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),kt===null)throw Error(t(349));(ls&30)!==0||Sm(h,s,l)}p.memoizedState=l;var y={value:l,getSnapshot:s};return p.queue=y,Nm(Am.bind(null,h,y,r),[r]),h.flags|=2048,Ga(9,km.bind(null,h,y,l,s),void 0,null),l},useId:function(){var r=or(),s=kt.identifierPrefix;if(et){var l=Or,h=Mr;l=(h&~(1<<32-qt(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ha++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=ST++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},PT={readContext:In,useCallback:Lm,useContext:In,useEffect:dd,useImperativeHandle:Om,useInsertionEffect:bm,useLayoutEffect:Dm,useMemo:Vm,useReducer:cd,useRef:xm,useState:function(){return cd(Wa)},useDebugValue:fd,useDeferredValue:function(r){var s=Sn();return Fm(s,wt.memoizedState,r)},useTransition:function(){var r=cd(Wa)[0],s=Sn().memoizedState;return[r,s]},useMutableSource:Tm,useSyncExternalStore:Im,useId:jm,unstable_isNewReconciler:!1},xT={readContext:In,useCallback:Lm,useContext:In,useEffect:dd,useImperativeHandle:Om,useInsertionEffect:bm,useLayoutEffect:Dm,useMemo:Vm,useReducer:hd,useRef:xm,useState:function(){return hd(Wa)},useDebugValue:fd,useDeferredValue:function(r){var s=Sn();return wt===null?s.memoizedState=r:Fm(s,wt.memoizedState,r)},useTransition:function(){var r=hd(Wa)[0],s=Sn().memoizedState;return[r,s]},useMutableSource:Tm,useSyncExternalStore:Im,useId:jm,unstable_isNewReconciler:!1};function zn(r,s){if(r&&r.defaultProps){s=le({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function pd(r,s,l,h){s=r.memoizedState,l=l(h,s),l=l==null?s:le({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var bu={isMounted:function(r){return(r=r._reactInternals)?Dn(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var h=Wt(),p=mi(r),y=Vr(h,p);y.payload=s,l!=null&&(y.callback=l),s=di(r,y,p),s!==null&&(Hn(s,r,p,h),Su(s,r,p))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var h=Wt(),p=mi(r),y=Vr(h,p);y.tag=1,y.payload=s,l!=null&&(y.callback=l),s=di(r,y,p),s!==null&&(Hn(s,r,p,h),Su(s,r,p))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Wt(),h=mi(r),p=Vr(l,h);p.tag=2,s!=null&&(p.callback=s),s=di(r,p,h),s!==null&&(Hn(s,r,h,l),Su(s,r,h))}};function qm(r,s,l,h,p,y,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,y,E):s.prototype&&s.prototype.isPureReactComponent?!Da(l,h)||!Da(p,y):!0}function $m(r,s,l){var h=!1,p=ui,y=s.contextType;return typeof y=="object"&&y!==null?y=In(y):(p=Yt(s)?rs:Ot.current,h=s.contextTypes,y=(h=h!=null)?po(r,p):ui),s=new s(l,y),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=bu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=p,r.__reactInternalMemoizedMaskedChildContext=y),s}function Hm(r,s,l,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==r&&bu.enqueueReplaceState(s,s.state,null)}function gd(r,s,l,h){var p=r.stateNode;p.props=l,p.state=r.memoizedState,p.refs={},td(r);var y=s.contextType;typeof y=="object"&&y!==null?p.context=In(y):(y=Yt(s)?rs:Ot.current,p.context=po(r,y)),p.state=r.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(pd(r,s,y,l),p.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&bu.enqueueReplaceState(p,p.state,null),ku(r,l,p,h),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308)}function To(r,s){try{var l="",h=s;do l+=ae(h),h=h.return;while(h);var p=l}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:r,source:s,stack:p,digest:null}}function md(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function yd(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var NT=typeof WeakMap=="function"?WeakMap:Map;function Wm(r,s,l){l=Vr(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){ju||(ju=!0,bd=h),yd(r,s)},l}function Gm(r,s,l){l=Vr(-1,l),l.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var p=s.value;l.payload=function(){return h(p)},l.callback=function(){yd(r,s)}}var y=r.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){yd(r,s),typeof h!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),l}function Km(r,s,l){var h=r.pingCache;if(h===null){h=r.pingCache=new NT;var p=new Set;h.set(s,p)}else p=h.get(s),p===void 0&&(p=new Set,h.set(s,p));p.has(l)||(p.add(l),r=HT.bind(null,r,s,l),s.then(r,r))}function Qm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Ym(r,s,l,h,p){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Vr(-1,1),s.tag=2,di(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=p,r)}var bT=Q.ReactCurrentOwner,Jt=!1;function Ht(r,s,l,h){s.child=r===null?mm(s,null,l,h):vo(s,r.child,l,h)}function Jm(r,s,l,h,p){l=l.render;var y=s.ref;return wo(s,p),h=ld(r,s,l,h,y,p),l=ud(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~p,Fr(r,s,p)):(et&&l&&Hh(s),s.flags|=1,Ht(r,s,h,p),s.child)}function Xm(r,s,l,h,p){if(r===null){var y=l.type;return typeof y=="function"&&!jd(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=y,Zm(r,s,y,h,p)):(r=Hu(l.type,null,h,s,s.mode,p),r.ref=s.ref,r.return=s,s.child=r)}if(y=r.child,(r.lanes&p)===0){var E=y.memoizedProps;if(l=l.compare,l=l!==null?l:Da,l(E,h)&&r.ref===s.ref)return Fr(r,s,p)}return s.flags|=1,r=vi(y,h),r.ref=s.ref,r.return=s,s.child=r}function Zm(r,s,l,h,p){if(r!==null){var y=r.memoizedProps;if(Da(y,h)&&r.ref===s.ref)if(Jt=!1,s.pendingProps=h=y,(r.lanes&p)!==0)(r.flags&131072)!==0&&(Jt=!0);else return s.lanes=r.lanes,Fr(r,s,p)}return vd(r,s,l,h,p)}function ey(r,s,l){var h=s.pendingProps,p=h.children,y=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(So,dn),dn|=l;else{if((l&1073741824)===0)return r=y!==null?y.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ke(So,dn),dn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=y!==null?y.baseLanes:l,Ke(So,dn),dn|=h}else y!==null?(h=y.baseLanes|l,s.memoizedState=null):h=l,Ke(So,dn),dn|=h;return Ht(r,s,p,l),s.child}function ty(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function vd(r,s,l,h,p){var y=Yt(l)?rs:Ot.current;return y=po(s,y),wo(s,p),l=ld(r,s,l,h,y,p),h=ud(),r!==null&&!Jt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~p,Fr(r,s,p)):(et&&h&&Hh(s),s.flags|=1,Ht(r,s,l,p),s.child)}function ny(r,s,l,h,p){if(Yt(l)){var y=!0;mu(s)}else y=!1;if(wo(s,p),s.stateNode===null)Mu(r,s),$m(s,l,h),gd(s,l,h,p),h=!0;else if(r===null){var E=s.stateNode,x=s.memoizedProps;E.props=x;var O=E.context,q=l.contextType;typeof q=="object"&&q!==null?q=In(q):(q=Yt(l)?rs:Ot.current,q=po(s,q));var te=l.getDerivedStateFromProps,ne=typeof te=="function"||typeof E.getSnapshotBeforeUpdate=="function";ne||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(x!==h||O!==q)&&Hm(s,E,h,q),hi=!1;var ee=s.memoizedState;E.state=ee,ku(s,h,E,p),O=s.memoizedState,x!==h||ee!==O||Qt.current||hi?(typeof te=="function"&&(pd(s,l,te,h),O=s.memoizedState),(x=hi||qm(s,l,x,h,ee,O,q))?(ne||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=O),E.props=h,E.state=O,E.context=q,h=x):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{E=s.stateNode,vm(r,s),x=s.memoizedProps,q=s.type===s.elementType?x:zn(s.type,x),E.props=q,ne=s.pendingProps,ee=E.context,O=l.contextType,typeof O=="object"&&O!==null?O=In(O):(O=Yt(l)?rs:Ot.current,O=po(s,O));var ce=l.getDerivedStateFromProps;(te=typeof ce=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(x!==ne||ee!==O)&&Hm(s,E,h,O),hi=!1,ee=s.memoizedState,E.state=ee,ku(s,h,E,p);var fe=s.memoizedState;x!==ne||ee!==fe||Qt.current||hi?(typeof ce=="function"&&(pd(s,l,ce,h),fe=s.memoizedState),(q=hi||qm(s,l,q,h,ee,fe,O)||!1)?(te||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(h,fe,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(h,fe,O)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||x===r.memoizedProps&&ee===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||x===r.memoizedProps&&ee===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=fe),E.props=h,E.state=fe,E.context=O,h=q):(typeof E.componentDidUpdate!="function"||x===r.memoizedProps&&ee===r.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||x===r.memoizedProps&&ee===r.memoizedState||(s.flags|=1024),h=!1)}return _d(r,s,l,h,y,p)}function _d(r,s,l,h,p,y){ty(r,s);var E=(s.flags&128)!==0;if(!h&&!E)return p&&am(s,l,!1),Fr(r,s,y);h=s.stateNode,bT.current=s;var x=E&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&E?(s.child=vo(s,r.child,null,y),s.child=vo(s,null,x,y)):Ht(r,s,x,y),s.memoizedState=h.state,p&&am(s,l,!0),s.child}function ry(r){var s=r.stateNode;s.pendingContext?sm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&sm(r,s.context,!1),nd(r,s.containerInfo)}function iy(r,s,l,h,p){return yo(),Qh(p),s.flags|=256,Ht(r,s,l,h),s.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function Ed(r){return{baseLanes:r,cachePool:null,transitions:null}}function sy(r,s,l){var h=s.pendingProps,p=nt.current,y=!1,E=(s.flags&128)!==0,x;if((x=E)||(x=r!==null&&r.memoizedState===null?!1:(p&2)!==0),x?(y=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(p|=1),Ke(nt,p&1),r===null)return Kh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=h.children,r=h.fallback,y?(h=s.mode,y=s.child,E={mode:"hidden",children:E},(h&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=E):y=Wu(E,h,0,null),r=fs(r,h,l,null),y.return=s,r.return=s,y.sibling=r,s.child=y,s.child.memoizedState=Ed(l),s.memoizedState=wd,r):Td(s,E));if(p=r.memoizedState,p!==null&&(x=p.dehydrated,x!==null))return DT(r,s,E,h,x,p,l);if(y){y=h.fallback,E=s.mode,p=r.child,x=p.sibling;var O={mode:"hidden",children:h.children};return(E&1)===0&&s.child!==p?(h=s.child,h.childLanes=0,h.pendingProps=O,s.deletions=null):(h=vi(p,O),h.subtreeFlags=p.subtreeFlags&14680064),x!==null?y=vi(x,y):(y=fs(y,E,l,null),y.flags|=2),y.return=s,h.return=s,h.sibling=y,s.child=h,h=y,y=s.child,E=r.child.memoizedState,E=E===null?Ed(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},y.memoizedState=E,y.childLanes=r.childLanes&~l,s.memoizedState=wd,h}return y=r.child,r=y.sibling,h=vi(y,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=h,s.memoizedState=null,h}function Td(r,s){return s=Wu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Du(r,s,l,h){return h!==null&&Qh(h),vo(s,r.child,null,l),r=Td(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function DT(r,s,l,h,p,y,E){if(l)return s.flags&256?(s.flags&=-257,h=md(Error(t(422))),Du(r,s,E,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(y=h.fallback,p=s.mode,h=Wu({mode:"visible",children:h.children},p,0,null),y=fs(y,p,E,null),y.flags|=2,h.return=s,y.return=s,h.sibling=y,s.child=h,(s.mode&1)!==0&&vo(s,r.child,null,E),s.child.memoizedState=Ed(E),s.memoizedState=wd,y);if((s.mode&1)===0)return Du(r,s,E,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var x=h.dgst;return h=x,y=Error(t(419)),h=md(y,h,void 0),Du(r,s,E,h)}if(x=(E&r.childLanes)!==0,Jt||x){if(h=kt,h!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|E))!==0?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,Lr(r,p),Hn(h,r,p,-1))}return Fd(),h=md(Error(t(421))),Du(r,s,E,h)}return p.data==="$?"?(s.flags|=128,s.child=r.child,s=WT.bind(null,r),p._reactRetry=s,null):(r=y.treeContext,hn=ai(p.nextSibling),cn=s,et=!0,Bn=null,r!==null&&(En[Tn++]=Mr,En[Tn++]=Or,En[Tn++]=is,Mr=r.id,Or=r.overflow,is=s),s=Td(s,h.children),s.flags|=4096,s)}function oy(r,s,l){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Zh(r.return,s,l)}function Id(r,s,l,h,p){var y=r.memoizedState;y===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=h,y.tail=l,y.tailMode=p)}function ay(r,s,l){var h=s.pendingProps,p=h.revealOrder,y=h.tail;if(Ht(r,s,h.children,l),h=nt.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&oy(r,l,s);else if(r.tag===19)oy(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(Ke(nt,h),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)r=l.alternate,r!==null&&Au(r)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Id(s,!1,p,l,y);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(r=p.alternate,r!==null&&Au(r)===null){s.child=p;break}r=p.sibling,p.sibling=l,l=p,p=r}Id(s,!0,l,null,y);break;case"together":Id(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Mu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Fr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),us|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=vi(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=vi(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function MT(r,s,l){switch(s.tag){case 3:ry(s),yo();break;case 5:Em(s);break;case 1:Yt(s.type)&&mu(s);break;case 4:nd(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,p=s.memoizedProps.value;Ke(Tu,h._currentValue),h._currentValue=p;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Ke(nt,nt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?sy(r,s,l):(Ke(nt,nt.current&1),r=Fr(r,s,l),r!==null?r.sibling:null);Ke(nt,nt.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(r.flags&128)!==0){if(h)return ay(r,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ke(nt,nt.current),h)break;return null;case 22:case 23:return s.lanes=0,ey(r,s,l)}return Fr(r,s,l)}var ly,Sd,uy,cy;ly=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Sd=function(){},uy=function(r,s,l,h){var p=r.memoizedProps;if(p!==h){r=s.stateNode,as(sr.current);var y=null;switch(l){case"input":p=Ui(r,p),h=Ui(r,h),y=[];break;case"select":p=le({},p,{value:void 0}),h=le({},h,{value:void 0}),y=[];break;case"textarea":p=la(r,p),h=la(r,h),y=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=fu)}pa(l,h);var E;l=null;for(q in p)if(!h.hasOwnProperty(q)&&p.hasOwnProperty(q)&&p[q]!=null)if(q==="style"){var x=p[q];for(E in x)x.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else q!=="dangerouslySetInnerHTML"&&q!=="children"&&q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&q!=="autoFocus"&&(o.hasOwnProperty(q)?y||(y=[]):(y=y||[]).push(q,null));for(q in h){var O=h[q];if(x=p?.[q],h.hasOwnProperty(q)&&O!==x&&(O!=null||x!=null))if(q==="style")if(x){for(E in x)!x.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in O)O.hasOwnProperty(E)&&x[E]!==O[E]&&(l||(l={}),l[E]=O[E])}else l||(y||(y=[]),y.push(q,l)),l=O;else q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,x=x?x.__html:void 0,O!=null&&x!==O&&(y=y||[]).push(q,O)):q==="children"?typeof O!="string"&&typeof O!="number"||(y=y||[]).push(q,""+O):q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&(o.hasOwnProperty(q)?(O!=null&&q==="onScroll"&&Ye("scroll",r),y||x===O||(y=[])):(y=y||[]).push(q,O))}l&&(y=y||[]).push("style",l);var q=y;(s.updateQueue=q)&&(s.flags|=4)}},cy=function(r,s,l,h){l!==h&&(s.flags|=4)};function Ka(r,s){if(!et)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Vt(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,h=0;if(s)for(var p=r.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=r,p=p.sibling;else for(p=r.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=r,p=p.sibling;return r.subtreeFlags|=h,r.childLanes=l,s}function OT(r,s,l){var h=s.pendingProps;switch(Wh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(s),null;case 1:return Yt(s.type)&&gu(),Vt(s),null;case 3:return h=s.stateNode,Eo(),Je(Qt),Je(Ot),sd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(wu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Bn!==null&&(Od(Bn),Bn=null))),Sd(r,s),Vt(s),null;case 5:rd(s);var p=as(qa.current);if(l=s.type,r!==null&&s.stateNode!=null)uy(r,s,l,h,p),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Vt(s),null}if(r=as(sr.current),wu(s)){h=s.stateNode,l=s.type;var y=s.memoizedProps;switch(h[ir]=s,h[Fa]=y,r=(s.mode&1)!==0,l){case"dialog":Ye("cancel",h),Ye("close",h);break;case"iframe":case"object":case"embed":Ye("load",h);break;case"video":case"audio":for(p=0;p<Oa.length;p++)Ye(Oa[p],h);break;case"source":Ye("error",h);break;case"img":case"image":case"link":Ye("error",h),Ye("load",h);break;case"details":Ye("toggle",h);break;case"input":Os(h,y),Ye("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!y.multiple},Ye("invalid",h);break;case"textarea":Vs(h,y),Ye("invalid",h)}pa(l,y),p=null;for(var E in y)if(y.hasOwnProperty(E)){var x=y[E];E==="children"?typeof x=="string"?h.textContent!==x&&(y.suppressHydrationWarning!==!0&&du(h.textContent,x,r),p=["children",x]):typeof x=="number"&&h.textContent!==""+x&&(y.suppressHydrationWarning!==!0&&du(h.textContent,x,r),p=["children",""+x]):o.hasOwnProperty(E)&&x!=null&&E==="onScroll"&&Ye("scroll",h)}switch(l){case"input":Tr(h),Fl(h,y,!0);break;case"textarea":Tr(h),ua(h);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(h.onclick=fu)}h=p,s.updateQueue=h,h!==null&&(s.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=yt(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=E.createElement(l,{is:h.is}):(r=E.createElement(l),l==="select"&&(E=r,h.multiple?E.multiple=!0:h.size&&(E.size=h.size))):r=E.createElementNS(r,l),r[ir]=s,r[Fa]=h,ly(r,s,!1,!1),s.stateNode=r;e:{switch(E=ga(l,h),l){case"dialog":Ye("cancel",r),Ye("close",r),p=h;break;case"iframe":case"object":case"embed":Ye("load",r),p=h;break;case"video":case"audio":for(p=0;p<Oa.length;p++)Ye(Oa[p],r);p=h;break;case"source":Ye("error",r),p=h;break;case"img":case"image":case"link":Ye("error",r),Ye("load",r),p=h;break;case"details":Ye("toggle",r),p=h;break;case"input":Os(r,h),p=Ui(r,h),Ye("invalid",r);break;case"option":p=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},p=le({},h,{value:void 0}),Ye("invalid",r);break;case"textarea":Vs(r,h),p=la(r,h),Ye("invalid",r);break;default:p=h}pa(l,p),x=p;for(y in x)if(x.hasOwnProperty(y)){var O=x[y];y==="style"?da(r,O):y==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&ca(r,O)):y==="children"?typeof O=="string"?(l!=="textarea"||O!=="")&&Yr(r,O):typeof O=="number"&&Yr(r,""+O):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(o.hasOwnProperty(y)?O!=null&&y==="onScroll"&&Ye("scroll",r):O!=null&&W(r,y,O,E))}switch(l){case"input":Tr(r),Fl(r,h,!1);break;case"textarea":Tr(r),ua(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Se(h.value));break;case"select":r.multiple=!!h.multiple,y=h.value,y!=null?Sr(r,!!h.multiple,y,!1):h.defaultValue!=null&&Sr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(r.onclick=fu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Vt(s),null;case 6:if(r&&s.stateNode!=null)cy(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=as(qa.current),as(sr.current),wu(s)){if(h=s.stateNode,l=s.memoizedProps,h[ir]=s,(y=h.nodeValue!==l)&&(r=cn,r!==null))switch(r.tag){case 3:du(h.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&du(h.nodeValue,l,(r.mode&1)!==0)}y&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[ir]=s,s.stateNode=h}return Vt(s),null;case 13:if(Je(nt),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(et&&hn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)fm(),yo(),s.flags|=98560,y=!1;else if(y=wu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!y)throw Error(t(318));if(y=s.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[ir]=s}else yo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Vt(s),y=!1}else Bn!==null&&(Od(Bn),Bn=null),y=!0;if(!y)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(nt.current&1)!==0?Et===0&&(Et=3):Fd())),s.updateQueue!==null&&(s.flags|=4),Vt(s),null);case 4:return Eo(),Sd(r,s),r===null&&La(s.stateNode.containerInfo),Vt(s),null;case 10:return Xh(s.type._context),Vt(s),null;case 17:return Yt(s.type)&&gu(),Vt(s),null;case 19:if(Je(nt),y=s.memoizedState,y===null)return Vt(s),null;if(h=(s.flags&128)!==0,E=y.rendering,E===null)if(h)Ka(y,!1);else{if(Et!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(E=Au(r),E!==null){for(s.flags|=128,Ka(y,!1),h=E.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)y=l,r=h,y.flags&=14680066,E=y.alternate,E===null?(y.childLanes=0,y.lanes=r,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=E.childLanes,y.lanes=E.lanes,y.child=E.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=E.memoizedProps,y.memoizedState=E.memoizedState,y.updateQueue=E.updateQueue,y.type=E.type,r=E.dependencies,y.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Ke(nt,nt.current&1|2),s.child}r=r.sibling}y.tail!==null&&Ge()>ko&&(s.flags|=128,h=!0,Ka(y,!1),s.lanes=4194304)}else{if(!h)if(r=Au(E),r!==null){if(s.flags|=128,h=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ka(y,!0),y.tail===null&&y.tailMode==="hidden"&&!E.alternate&&!et)return Vt(s),null}else 2*Ge()-y.renderingStartTime>ko&&l!==1073741824&&(s.flags|=128,h=!0,Ka(y,!1),s.lanes=4194304);y.isBackwards?(E.sibling=s.child,s.child=E):(l=y.last,l!==null?l.sibling=E:s.child=E,y.last=E)}return y.tail!==null?(s=y.tail,y.rendering=s,y.tail=s.sibling,y.renderingStartTime=Ge(),s.sibling=null,l=nt.current,Ke(nt,h?l&1|2:l&1),s):(Vt(s),null);case 22:case 23:return Vd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(dn&1073741824)!==0&&(Vt(s),s.subtreeFlags&6&&(s.flags|=8192)):Vt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function LT(r,s){switch(Wh(s),s.tag){case 1:return Yt(s.type)&&gu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Eo(),Je(Qt),Je(Ot),sd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return rd(s),null;case 13:if(Je(nt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));yo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Je(nt),null;case 4:return Eo(),null;case 10:return Xh(s.type._context),null;case 22:case 23:return Vd(),null;case 24:return null;default:return null}}var Ou=!1,Ft=!1,VT=typeof WeakSet=="function"?WeakSet:Set,de=null;function Io(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){at(r,s,h)}else l.current=null}function kd(r,s,l){try{l()}catch(h){at(r,s,h)}}var hy=!1;function FT(r,s){if(Vh=ii,r=qg(),Ph(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,y=h.focusNode;h=h.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var E=0,x=-1,O=-1,q=0,te=0,ne=r,ee=null;t:for(;;){for(var ce;ne!==l||p!==0&&ne.nodeType!==3||(x=E+p),ne!==y||h!==0&&ne.nodeType!==3||(O=E+h),ne.nodeType===3&&(E+=ne.nodeValue.length),(ce=ne.firstChild)!==null;)ee=ne,ne=ce;for(;;){if(ne===r)break t;if(ee===l&&++q===p&&(x=E),ee===y&&++te===h&&(O=E),(ce=ne.nextSibling)!==null)break;ne=ee,ee=ne.parentNode}ne=ce}l=x===-1||O===-1?null:{start:x,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for(Fh={focusedElem:r,selectionRange:l},ii=!1,de=s;de!==null;)if(s=de,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,de=r;else for(;de!==null;){s=de;try{var fe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(fe!==null){var ge=fe.memoizedProps,ut=fe.memoizedState,B=s.stateNode,F=B.getSnapshotBeforeUpdate(s.elementType===s.type?ge:zn(s.type,ge),ut);B.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var z=s.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(se){at(s,s.return,se)}if(r=s.sibling,r!==null){r.return=s.return,de=r;break}de=s.return}return fe=hy,hy=!1,fe}function Qa(r,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&r)===r){var y=p.destroy;p.destroy=void 0,y!==void 0&&kd(s,l,y)}p=p.next}while(p!==h)}}function Lu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Ad(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function dy(r){var s=r.alternate;s!==null&&(r.alternate=null,dy(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[ir],delete s[Fa],delete s[zh],delete s[wT],delete s[ET])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function fy(r){return r.tag===5||r.tag===3||r.tag===4}function py(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||fy(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Cd(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=fu));else if(h!==4&&(r=r.child,r!==null))for(Cd(r,s,l),r=r.sibling;r!==null;)Cd(r,s,l),r=r.sibling}function Rd(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Rd(r,s,l),r=r.sibling;r!==null;)Rd(r,s,l),r=r.sibling}var xt=null,qn=!1;function fi(r,s,l){for(l=l.child;l!==null;)gy(r,s,l),l=l.sibling}function gy(r,s,l){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Qi,l)}catch{}switch(l.tag){case 5:Ft||Io(l,s);case 6:var h=xt,p=qn;xt=null,fi(r,s,l),xt=h,qn=p,xt!==null&&(qn?(r=xt,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):xt.removeChild(l.stateNode));break;case 18:xt!==null&&(qn?(r=xt,l=l.stateNode,r.nodeType===8?Bh(r.parentNode,l):r.nodeType===1&&Bh(r,l),Fn(r)):Bh(xt,l.stateNode));break;case 4:h=xt,p=qn,xt=l.stateNode.containerInfo,qn=!0,fi(r,s,l),xt=h,qn=p;break;case 0:case 11:case 14:case 15:if(!Ft&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var y=p,E=y.destroy;y=y.tag,E!==void 0&&((y&2)!==0||(y&4)!==0)&&kd(l,s,E),p=p.next}while(p!==h)}fi(r,s,l);break;case 1:if(!Ft&&(Io(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(x){at(l,s,x)}fi(r,s,l);break;case 21:fi(r,s,l);break;case 22:l.mode&1?(Ft=(h=Ft)||l.memoizedState!==null,fi(r,s,l),Ft=h):fi(r,s,l);break;default:fi(r,s,l)}}function my(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new VT),s.forEach(function(h){var p=GT.bind(null,r,h);l.has(h)||(l.add(h),h.then(p,p))})}}function $n(r,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var y=r,E=s,x=E;e:for(;x!==null;){switch(x.tag){case 5:xt=x.stateNode,qn=!1;break e;case 3:xt=x.stateNode.containerInfo,qn=!0;break e;case 4:xt=x.stateNode.containerInfo,qn=!0;break e}x=x.return}if(xt===null)throw Error(t(160));gy(y,E,p),xt=null,qn=!1;var O=p.alternate;O!==null&&(O.return=null),p.return=null}catch(q){at(p,s,q)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)yy(s,r),s=s.sibling}function yy(r,s){var l=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if($n(s,r),ar(r),h&4){try{Qa(3,r,r.return),Lu(3,r)}catch(ge){at(r,r.return,ge)}try{Qa(5,r,r.return)}catch(ge){at(r,r.return,ge)}}break;case 1:$n(s,r),ar(r),h&512&&l!==null&&Io(l,l.return);break;case 5:if($n(s,r),ar(r),h&512&&l!==null&&Io(l,l.return),r.flags&32){var p=r.stateNode;try{Yr(p,"")}catch(ge){at(r,r.return,ge)}}if(h&4&&(p=r.stateNode,p!=null)){var y=r.memoizedProps,E=l!==null?l.memoizedProps:y,x=r.type,O=r.updateQueue;if(r.updateQueue=null,O!==null)try{x==="input"&&y.type==="radio"&&y.name!=null&&oa(p,y),ga(x,E);var q=ga(x,y);for(E=0;E<O.length;E+=2){var te=O[E],ne=O[E+1];te==="style"?da(p,ne):te==="dangerouslySetInnerHTML"?ca(p,ne):te==="children"?Yr(p,ne):W(p,te,ne,q)}switch(x){case"input":aa(p,y);break;case"textarea":Fs(p,y);break;case"select":var ee=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var ce=y.value;ce!=null?Sr(p,!!y.multiple,ce,!1):ee!==!!y.multiple&&(y.defaultValue!=null?Sr(p,!!y.multiple,y.defaultValue,!0):Sr(p,!!y.multiple,y.multiple?[]:"",!1))}p[Fa]=y}catch(ge){at(r,r.return,ge)}}break;case 6:if($n(s,r),ar(r),h&4){if(r.stateNode===null)throw Error(t(162));p=r.stateNode,y=r.memoizedProps;try{p.nodeValue=y}catch(ge){at(r,r.return,ge)}}break;case 3:if($n(s,r),ar(r),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Fn(s.containerInfo)}catch(ge){at(r,r.return,ge)}break;case 4:$n(s,r),ar(r);break;case 13:$n(s,r),ar(r),p=r.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(Nd=Ge())),h&4&&my(r);break;case 22:if(te=l!==null&&l.memoizedState!==null,r.mode&1?(Ft=(q=Ft)||te,$n(s,r),Ft=q):$n(s,r),ar(r),h&8192){if(q=r.memoizedState!==null,(r.stateNode.isHidden=q)&&!te&&(r.mode&1)!==0)for(de=r,te=r.child;te!==null;){for(ne=de=te;de!==null;){switch(ee=de,ce=ee.child,ee.tag){case 0:case 11:case 14:case 15:Qa(4,ee,ee.return);break;case 1:Io(ee,ee.return);var fe=ee.stateNode;if(typeof fe.componentWillUnmount=="function"){h=ee,l=ee.return;try{s=h,fe.props=s.memoizedProps,fe.state=s.memoizedState,fe.componentWillUnmount()}catch(ge){at(h,l,ge)}}break;case 5:Io(ee,ee.return);break;case 22:if(ee.memoizedState!==null){wy(ne);continue}}ce!==null?(ce.return=ee,de=ce):wy(ne)}te=te.sibling}e:for(te=null,ne=r;;){if(ne.tag===5){if(te===null){te=ne;try{p=ne.stateNode,q?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(x=ne.stateNode,O=ne.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,x.style.display=ha("display",E))}catch(ge){at(r,r.return,ge)}}}else if(ne.tag===6){if(te===null)try{ne.stateNode.nodeValue=q?"":ne.memoizedProps}catch(ge){at(r,r.return,ge)}}else if((ne.tag!==22&&ne.tag!==23||ne.memoizedState===null||ne===r)&&ne.child!==null){ne.child.return=ne,ne=ne.child;continue}if(ne===r)break e;for(;ne.sibling===null;){if(ne.return===null||ne.return===r)break e;te===ne&&(te=null),ne=ne.return}te===ne&&(te=null),ne.sibling.return=ne.return,ne=ne.sibling}}break;case 19:$n(s,r),ar(r),h&4&&my(r);break;case 21:break;default:$n(s,r),ar(r)}}function ar(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(fy(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(Yr(p,""),h.flags&=-33);var y=py(r);Rd(r,y,p);break;case 3:case 4:var E=h.stateNode.containerInfo,x=py(r);Cd(r,x,E);break;default:throw Error(t(161))}}catch(O){at(r,r.return,O)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function jT(r,s,l){de=r,vy(r)}function vy(r,s,l){for(var h=(r.mode&1)!==0;de!==null;){var p=de,y=p.child;if(p.tag===22&&h){var E=p.memoizedState!==null||Ou;if(!E){var x=p.alternate,O=x!==null&&x.memoizedState!==null||Ft;x=Ou;var q=Ft;if(Ou=E,(Ft=O)&&!q)for(de=p;de!==null;)E=de,O=E.child,E.tag===22&&E.memoizedState!==null?Ey(p):O!==null?(O.return=E,de=O):Ey(p);for(;y!==null;)de=y,vy(y),y=y.sibling;de=p,Ou=x,Ft=q}_y(r)}else(p.subtreeFlags&8772)!==0&&y!==null?(y.return=p,de=y):_y(r)}}function _y(r){for(;de!==null;){var s=de;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ft||Lu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Ft)if(l===null)h.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:zn(s.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var y=s.updateQueue;y!==null&&wm(s,y,h);break;case 3:var E=s.updateQueue;if(E!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}wm(s,E,l)}break;case 5:var x=s.stateNode;if(l===null&&s.flags&4){l=x;var O=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&l.focus();break;case"img":O.src&&(l.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var q=s.alternate;if(q!==null){var te=q.memoizedState;if(te!==null){var ne=te.dehydrated;ne!==null&&Fn(ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||s.flags&512&&Ad(s)}catch(ee){at(s,s.return,ee)}}if(s===r){de=null;break}if(l=s.sibling,l!==null){l.return=s.return,de=l;break}de=s.return}}function wy(r){for(;de!==null;){var s=de;if(s===r){de=null;break}var l=s.sibling;if(l!==null){l.return=s.return,de=l;break}de=s.return}}function Ey(r){for(;de!==null;){var s=de;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Lu(4,s)}catch(O){at(s,l,O)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var p=s.return;try{h.componentDidMount()}catch(O){at(s,p,O)}}var y=s.return;try{Ad(s)}catch(O){at(s,y,O)}break;case 5:var E=s.return;try{Ad(s)}catch(O){at(s,E,O)}}}catch(O){at(s,s.return,O)}if(s===r){de=null;break}var x=s.sibling;if(x!==null){x.return=s.return,de=x;break}de=s.return}}var UT=Math.ceil,Vu=Q.ReactCurrentDispatcher,Pd=Q.ReactCurrentOwner,kn=Q.ReactCurrentBatchConfig,ze=0,kt=null,ft=null,Nt=0,dn=0,So=li(0),Et=0,Ya=null,us=0,Fu=0,xd=0,Ja=null,Xt=null,Nd=0,ko=1/0,jr=null,ju=!1,bd=null,pi=null,Uu=!1,gi=null,Bu=0,Xa=0,Dd=null,zu=-1,qu=0;function Wt(){return(ze&6)!==0?Ge():zu!==-1?zu:zu=Ge()}function mi(r){return(r.mode&1)===0?1:(ze&2)!==0&&Nt!==0?Nt&-Nt:IT.transition!==null?(qu===0&&(qu=Ji()),qu):(r=Fe,r!==0||(r=window.event,r=r===void 0?16:Aa(r.type)),r)}function Hn(r,s,l,h){if(50<Xa)throw Xa=0,Dd=null,Error(t(185));ei(r,l,h),((ze&2)===0||r!==kt)&&(r===kt&&((ze&2)===0&&(Fu|=l),Et===4&&yi(r,Nt)),Zt(r,h),l===1&&ze===0&&(s.mode&1)===0&&(ko=Ge()+500,yu&&ci()))}function Zt(r,s){var l=r.callbackNode;Cr(r,s);var h=Yi(r,r===kt?Nt:0);if(h===0)l!==null&&Ea(l),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(l!=null&&Ea(l),s===1)r.tag===0?TT(Iy.bind(null,r)):lm(Iy.bind(null,r)),vT(function(){(ze&6)===0&&ci()}),l=null;else{switch(ni(h)){case 1:l=Ki;break;case 4:l=Jr;break;case 16:l=vn;break;case 536870912:l=ql;break;default:l=vn}l=Ny(l,Ty.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function Ty(r,s){if(zu=-1,qu=0,(ze&6)!==0)throw Error(t(327));var l=r.callbackNode;if(Ao()&&r.callbackNode!==l)return null;var h=Yi(r,r===kt?Nt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=$u(r,h);else{s=h;var p=ze;ze|=2;var y=ky();(kt!==r||Nt!==s)&&(jr=null,ko=Ge()+500,hs(r,s));do try{qT();break}catch(x){Sy(r,x)}while(!0);Jh(),Vu.current=y,ze=p,ft!==null?s=0:(kt=null,Nt=0,s=Et)}if(s!==0){if(s===2&&(p=an(r),p!==0&&(h=p,s=Md(r,p))),s===1)throw l=Ya,hs(r,0),yi(r,h),Zt(r,Ge()),l;if(s===6)yi(r,h);else{if(p=r.current.alternate,(h&30)===0&&!BT(p)&&(s=$u(r,h),s===2&&(y=an(r),y!==0&&(h=y,s=Md(r,y))),s===1))throw l=Ya,hs(r,0),yi(r,h),Zt(r,Ge()),l;switch(r.finishedWork=p,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:ds(r,Xt,jr);break;case 3:if(yi(r,h),(h&130023424)===h&&(s=Nd+500-Ge(),10<s)){if(Yi(r,0)!==0)break;if(p=r.suspendedLanes,(p&h)!==h){Wt(),r.pingedLanes|=r.suspendedLanes&p;break}r.timeoutHandle=Uh(ds.bind(null,r,Xt,jr),s);break}ds(r,Xt,jr);break;case 4:if(yi(r,h),(h&4194240)===h)break;for(s=r.eventTimes,p=-1;0<h;){var E=31-qt(h);y=1<<E,E=s[E],E>p&&(p=E),h&=~y}if(h=p,h=Ge()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*UT(h/1960))-h,10<h){r.timeoutHandle=Uh(ds.bind(null,r,Xt,jr),h);break}ds(r,Xt,jr);break;case 5:ds(r,Xt,jr);break;default:throw Error(t(329))}}}return Zt(r,Ge()),r.callbackNode===l?Ty.bind(null,r):null}function Md(r,s){var l=Ja;return r.current.memoizedState.isDehydrated&&(hs(r,s).flags|=256),r=$u(r,s),r!==2&&(s=Xt,Xt=l,s!==null&&Od(s)),r}function Od(r){Xt===null?Xt=r:Xt.push.apply(Xt,r)}function BT(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],y=p.getSnapshot;p=p.value;try{if(!Un(y(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function yi(r,s){for(s&=~xd,s&=~Fu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-qt(s),h=1<<l;r[l]=-1,s&=~h}}function Iy(r){if((ze&6)!==0)throw Error(t(327));Ao();var s=Yi(r,0);if((s&1)===0)return Zt(r,Ge()),null;var l=$u(r,s);if(r.tag!==0&&l===2){var h=an(r);h!==0&&(s=h,l=Md(r,h))}if(l===1)throw l=Ya,hs(r,0),yi(r,s),Zt(r,Ge()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ds(r,Xt,jr),Zt(r,Ge()),null}function Ld(r,s){var l=ze;ze|=1;try{return r(s)}finally{ze=l,ze===0&&(ko=Ge()+500,yu&&ci())}}function cs(r){gi!==null&&gi.tag===0&&(ze&6)===0&&Ao();var s=ze;ze|=1;var l=kn.transition,h=Fe;try{if(kn.transition=null,Fe=1,r)return r()}finally{Fe=h,kn.transition=l,ze=s,(ze&6)===0&&ci()}}function Vd(){dn=So.current,Je(So)}function hs(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,yT(l)),ft!==null)for(l=ft.return;l!==null;){var h=l;switch(Wh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&gu();break;case 3:Eo(),Je(Qt),Je(Ot),sd();break;case 5:rd(h);break;case 4:Eo();break;case 13:Je(nt);break;case 19:Je(nt);break;case 10:Xh(h.type._context);break;case 22:case 23:Vd()}l=l.return}if(kt=r,ft=r=vi(r.current,null),Nt=dn=s,Et=0,Ya=null,xd=Fu=us=0,Xt=Ja=null,os!==null){for(s=0;s<os.length;s++)if(l=os[s],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,y=l.pending;if(y!==null){var E=y.next;y.next=p,h.next=E}l.pending=h}os=null}return r}function Sy(r,s){do{var l=ft;try{if(Jh(),Cu.current=Nu,Ru){for(var h=rt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Ru=!1}if(ls=0,St=wt=rt=null,$a=!1,Ha=0,Pd.current=null,l===null||l.return===null){Et=1,Ya=s,ft=null;break}e:{var y=r,E=l.return,x=l,O=s;if(s=Nt,x.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var q=O,te=x,ne=te.tag;if((te.mode&1)===0&&(ne===0||ne===11||ne===15)){var ee=te.alternate;ee?(te.updateQueue=ee.updateQueue,te.memoizedState=ee.memoizedState,te.lanes=ee.lanes):(te.updateQueue=null,te.memoizedState=null)}var ce=Qm(E);if(ce!==null){ce.flags&=-257,Ym(ce,E,x,y,s),ce.mode&1&&Km(y,q,s),s=ce,O=q;var fe=s.updateQueue;if(fe===null){var ge=new Set;ge.add(O),s.updateQueue=ge}else fe.add(O);break e}else{if((s&1)===0){Km(y,q,s),Fd();break e}O=Error(t(426))}}else if(et&&x.mode&1){var ut=Qm(E);if(ut!==null){(ut.flags&65536)===0&&(ut.flags|=256),Ym(ut,E,x,y,s),Qh(To(O,x));break e}}y=O=To(O,x),Et!==4&&(Et=2),Ja===null?Ja=[y]:Ja.push(y),y=E;do{switch(y.tag){case 3:y.flags|=65536,s&=-s,y.lanes|=s;var B=Wm(y,O,s);_m(y,B);break e;case 1:x=O;var F=y.type,z=y.stateNode;if((y.flags&128)===0&&(typeof F.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(pi===null||!pi.has(z)))){y.flags|=65536,s&=-s,y.lanes|=s;var se=Gm(y,x,s);_m(y,se);break e}}y=y.return}while(y!==null)}Cy(l)}catch(me){s=me,ft===l&&l!==null&&(ft=l=l.return);continue}break}while(!0)}function ky(){var r=Vu.current;return Vu.current=Nu,r===null?Nu:r}function Fd(){(Et===0||Et===3||Et===2)&&(Et=4),kt===null||(us&268435455)===0&&(Fu&268435455)===0||yi(kt,Nt)}function $u(r,s){var l=ze;ze|=2;var h=ky();(kt!==r||Nt!==s)&&(jr=null,hs(r,s));do try{zT();break}catch(p){Sy(r,p)}while(!0);if(Jh(),ze=l,Vu.current=h,ft!==null)throw Error(t(261));return kt=null,Nt=0,Et}function zT(){for(;ft!==null;)Ay(ft)}function qT(){for(;ft!==null&&!Bl();)Ay(ft)}function Ay(r){var s=xy(r.alternate,r,dn);r.memoizedProps=r.pendingProps,s===null?Cy(r):ft=s,Pd.current=null}function Cy(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=OT(l,s,dn),l!==null){ft=l;return}}else{if(l=LT(l,s),l!==null){l.flags&=32767,ft=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Et=6,ft=null;return}}if(s=s.sibling,s!==null){ft=s;return}ft=s=r}while(s!==null);Et===0&&(Et=5)}function ds(r,s,l){var h=Fe,p=kn.transition;try{kn.transition=null,Fe=1,$T(r,s,l,h)}finally{kn.transition=p,Fe=h}return null}function $T(r,s,l,h){do Ao();while(gi!==null);if((ze&6)!==0)throw Error(t(327));l=r.finishedWork;var p=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var y=l.lanes|l.childLanes;if(We(r,y),r===kt&&(ft=kt=null,Nt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Uu||(Uu=!0,Ny(vn,function(){return Ao(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=kn.transition,kn.transition=null;var E=Fe;Fe=1;var x=ze;ze|=4,Pd.current=null,FT(r,l),yy(l,r),cT(Fh),ii=!!Vh,Fh=Vh=null,r.current=l,jT(l),Eh(),ze=x,Fe=E,kn.transition=y}else r.current=l;if(Uu&&(Uu=!1,gi=r,Bu=p),y=r.pendingLanes,y===0&&(pi=null),$l(l.stateNode),Zt(r,Ge()),s!==null)for(h=r.onRecoverableError,l=0;l<s.length;l++)p=s[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(ju)throw ju=!1,r=bd,bd=null,r;return(Bu&1)!==0&&r.tag!==0&&Ao(),y=r.pendingLanes,(y&1)!==0?r===Dd?Xa++:(Xa=0,Dd=r):Xa=0,ci(),null}function Ao(){if(gi!==null){var r=ni(Bu),s=kn.transition,l=Fe;try{if(kn.transition=null,Fe=16>r?16:r,gi===null)var h=!1;else{if(r=gi,gi=null,Bu=0,(ze&6)!==0)throw Error(t(331));var p=ze;for(ze|=4,de=r.current;de!==null;){var y=de,E=y.child;if((de.flags&16)!==0){var x=y.deletions;if(x!==null){for(var O=0;O<x.length;O++){var q=x[O];for(de=q;de!==null;){var te=de;switch(te.tag){case 0:case 11:case 15:Qa(8,te,y)}var ne=te.child;if(ne!==null)ne.return=te,de=ne;else for(;de!==null;){te=de;var ee=te.sibling,ce=te.return;if(dy(te),te===q){de=null;break}if(ee!==null){ee.return=ce,de=ee;break}de=ce}}}var fe=y.alternate;if(fe!==null){var ge=fe.child;if(ge!==null){fe.child=null;do{var ut=ge.sibling;ge.sibling=null,ge=ut}while(ge!==null)}}de=y}}if((y.subtreeFlags&2064)!==0&&E!==null)E.return=y,de=E;else e:for(;de!==null;){if(y=de,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:Qa(9,y,y.return)}var B=y.sibling;if(B!==null){B.return=y.return,de=B;break e}de=y.return}}var F=r.current;for(de=F;de!==null;){E=de;var z=E.child;if((E.subtreeFlags&2064)!==0&&z!==null)z.return=E,de=z;else e:for(E=F;de!==null;){if(x=de,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:Lu(9,x)}}catch(me){at(x,x.return,me)}if(x===E){de=null;break e}var se=x.sibling;if(se!==null){se.return=x.return,de=se;break e}de=x.return}}if(ze=p,ci(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Qi,r)}catch{}h=!0}return h}finally{Fe=l,kn.transition=s}}return!1}function Ry(r,s,l){s=To(l,s),s=Wm(r,s,1),r=di(r,s,1),s=Wt(),r!==null&&(ei(r,1,s),Zt(r,s))}function at(r,s,l){if(r.tag===3)Ry(r,r,l);else for(;s!==null;){if(s.tag===3){Ry(s,r,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(pi===null||!pi.has(h))){r=To(l,r),r=Gm(s,r,1),s=di(s,r,1),r=Wt(),s!==null&&(ei(s,1,r),Zt(s,r));break}}s=s.return}}function HT(r,s,l){var h=r.pingCache;h!==null&&h.delete(s),s=Wt(),r.pingedLanes|=r.suspendedLanes&l,kt===r&&(Nt&l)===l&&(Et===4||Et===3&&(Nt&130023424)===Nt&&500>Ge()-Nd?hs(r,0):xd|=l),Zt(r,s)}function Py(r,s){s===0&&((r.mode&1)===0?s=1:(s=Ks,Ks<<=1,(Ks&130023424)===0&&(Ks=4194304)));var l=Wt();r=Lr(r,s),r!==null&&(ei(r,s,l),Zt(r,l))}function WT(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),Py(r,l)}function GT(r,s){var l=0;switch(r.tag){case 13:var h=r.stateNode,p=r.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Py(r,l)}var xy;xy=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||Qt.current)Jt=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return Jt=!1,MT(r,s,l);Jt=(r.flags&131072)!==0}else Jt=!1,et&&(s.flags&1048576)!==0&&um(s,_u,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Mu(r,s),r=s.pendingProps;var p=po(s,Ot.current);wo(s,l),p=ld(null,s,h,r,p,l);var y=ud();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yt(h)?(y=!0,mu(s)):y=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,td(s),p.updater=bu,s.stateNode=p,p._reactInternals=s,gd(s,h,r,l),s=_d(null,s,h,!0,y,l)):(s.tag=0,et&&y&&Hh(s),Ht(null,s,p,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Mu(r,s),r=s.pendingProps,p=h._init,h=p(h._payload),s.type=h,p=s.tag=QT(h),r=zn(h,r),p){case 0:s=vd(null,s,h,r,l);break e;case 1:s=ny(null,s,h,r,l);break e;case 11:s=Jm(null,s,h,r,l);break e;case 14:s=Xm(null,s,h,zn(h.type,r),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:zn(h,p),vd(r,s,h,p,l);case 1:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:zn(h,p),ny(r,s,h,p,l);case 3:e:{if(ry(s),r===null)throw Error(t(387));h=s.pendingProps,y=s.memoizedState,p=y.element,vm(r,s),ku(s,h,null,l);var E=s.memoizedState;if(h=E.element,y.isDehydrated)if(y={element:h,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=y,s.memoizedState=y,s.flags&256){p=To(Error(t(423)),s),s=iy(r,s,h,l,p);break e}else if(h!==p){p=To(Error(t(424)),s),s=iy(r,s,h,l,p);break e}else for(hn=ai(s.stateNode.containerInfo.firstChild),cn=s,et=!0,Bn=null,l=mm(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(yo(),h===p){s=Fr(r,s,l);break e}Ht(r,s,h,l)}s=s.child}return s;case 5:return Em(s),r===null&&Kh(s),h=s.type,p=s.pendingProps,y=r!==null?r.memoizedProps:null,E=p.children,jh(h,p)?E=null:y!==null&&jh(h,y)&&(s.flags|=32),ty(r,s),Ht(r,s,E,l),s.child;case 6:return r===null&&Kh(s),null;case 13:return sy(r,s,l);case 4:return nd(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=vo(s,null,h,l):Ht(r,s,h,l),s.child;case 11:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:zn(h,p),Jm(r,s,h,p,l);case 7:return Ht(r,s,s.pendingProps,l),s.child;case 8:return Ht(r,s,s.pendingProps.children,l),s.child;case 12:return Ht(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,p=s.pendingProps,y=s.memoizedProps,E=p.value,Ke(Tu,h._currentValue),h._currentValue=E,y!==null)if(Un(y.value,E)){if(y.children===p.children&&!Qt.current){s=Fr(r,s,l);break e}}else for(y=s.child,y!==null&&(y.return=s);y!==null;){var x=y.dependencies;if(x!==null){E=y.child;for(var O=x.firstContext;O!==null;){if(O.context===h){if(y.tag===1){O=Vr(-1,l&-l),O.tag=2;var q=y.updateQueue;if(q!==null){q=q.shared;var te=q.pending;te===null?O.next=O:(O.next=te.next,te.next=O),q.pending=O}}y.lanes|=l,O=y.alternate,O!==null&&(O.lanes|=l),Zh(y.return,l,s),x.lanes|=l;break}O=O.next}}else if(y.tag===10)E=y.type===s.type?null:y.child;else if(y.tag===18){if(E=y.return,E===null)throw Error(t(341));E.lanes|=l,x=E.alternate,x!==null&&(x.lanes|=l),Zh(E,l,s),E=y.sibling}else E=y.child;if(E!==null)E.return=y;else for(E=y;E!==null;){if(E===s){E=null;break}if(y=E.sibling,y!==null){y.return=E.return,E=y;break}E=E.return}y=E}Ht(r,s,p.children,l),s=s.child}return s;case 9:return p=s.type,h=s.pendingProps.children,wo(s,l),p=In(p),h=h(p),s.flags|=1,Ht(r,s,h,l),s.child;case 14:return h=s.type,p=zn(h,s.pendingProps),p=zn(h.type,p),Xm(r,s,h,p,l);case 15:return Zm(r,s,s.type,s.pendingProps,l);case 17:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:zn(h,p),Mu(r,s),s.tag=1,Yt(h)?(r=!0,mu(s)):r=!1,wo(s,l),$m(s,h,p),gd(s,h,p,l),_d(null,s,h,!0,r,l);case 19:return ay(r,s,l);case 22:return ey(r,s,l)}throw Error(t(156,s.tag))};function Ny(r,s){return Ws(r,s)}function KT(r,s,l,h){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(r,s,l,h){return new KT(r,s,l,h)}function jd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function QT(r){if(typeof r=="function")return jd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===D)return 11;if(r===Ce)return 14}return 2}function vi(r,s){var l=r.alternate;return l===null?(l=An(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function Hu(r,s,l,h,p,y){var E=2;if(h=r,typeof r=="function")jd(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case P:return fs(l.children,p,y,s);case I:E=8,p|=8;break;case A:return r=An(12,l,s,p|2),r.elementType=A,r.lanes=y,r;case C:return r=An(13,l,s,p),r.elementType=C,r.lanes=y,r;case Z:return r=An(19,l,s,p),r.elementType=Z,r.lanes=y,r;case xe:return Wu(l,p,y,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:E=10;break e;case b:E=9;break e;case D:E=11;break e;case Ce:E=14;break e;case Pe:E=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=An(E,l,s,p),s.elementType=r,s.type=h,s.lanes=y,s}function fs(r,s,l,h){return r=An(7,r,h,s),r.lanes=l,r}function Wu(r,s,l,h){return r=An(22,r,h,s),r.elementType=xe,r.lanes=l,r.stateNode={isHidden:!1},r}function Ud(r,s,l){return r=An(6,r,null,s),r.lanes=l,r}function Bd(r,s,l){return s=An(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function YT(r,s,l,h,p){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zr(0),this.expirationTimes=Zr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zr(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function zd(r,s,l,h,p,y,E,x,O){return r=new YT(r,s,l,x,O),s===1?(s=1,y===!0&&(s|=8)):s=0,y=An(3,null,null,s),r.current=y,y.stateNode=r,y.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},td(y),r}function JT(r,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:h==null?null:""+h,children:r,containerInfo:s,implementation:l}}function by(r){if(!r)return ui;r=r._reactInternals;e:{if(Dn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(Yt(l))return om(r,l,s)}return s}function Dy(r,s,l,h,p,y,E,x,O){return r=zd(l,h,!0,r,p,y,E,x,O),r.context=by(null),l=r.current,h=Wt(),p=mi(l),y=Vr(h,p),y.callback=s??null,di(l,y,p),r.current.lanes=p,ei(r,p,h),Zt(r,h),r}function Gu(r,s,l,h){var p=s.current,y=Wt(),E=mi(p);return l=by(l),s.context===null?s.context=l:s.pendingContext=l,s=Vr(y,E),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=di(p,s,E),r!==null&&(Hn(r,p,E,y),Su(r,p,E)),E}function Ku(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function My(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function qd(r,s){My(r,s),(r=r.alternate)&&My(r,s)}function XT(){return null}var Oy=typeof reportError=="function"?reportError:function(r){console.error(r)};function $d(r){this._internalRoot=r}Qu.prototype.render=$d.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Gu(r,s,null,null)},Qu.prototype.unmount=$d.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;cs(function(){Gu(null,r,null,null)}),s[br]=null}};function Qu(r){this._internalRoot=r}Qu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ql();r={blockedOn:null,target:r,priority:s};for(var l=0;l<er.length&&s!==0&&s<er[l].priority;l++);er.splice(l,0,r),l===0&&Xl(r)}};function Hd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Yu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Ly(){}function ZT(r,s,l,h,p){if(p){if(typeof h=="function"){var y=h;h=function(){var q=Ku(E);y.call(q)}}var E=Dy(s,h,r,0,null,!1,!1,"",Ly);return r._reactRootContainer=E,r[br]=E.current,La(r.nodeType===8?r.parentNode:r),cs(),E}for(;p=r.lastChild;)r.removeChild(p);if(typeof h=="function"){var x=h;h=function(){var q=Ku(O);x.call(q)}}var O=zd(r,0,!1,null,null,!1,!1,"",Ly);return r._reactRootContainer=O,r[br]=O.current,La(r.nodeType===8?r.parentNode:r),cs(function(){Gu(s,O,l,h)}),O}function Ju(r,s,l,h,p){var y=l._reactRootContainer;if(y){var E=y;if(typeof p=="function"){var x=p;p=function(){var O=Ku(E);x.call(O)}}Gu(s,E,r,p)}else E=ZT(l,s,r,p,h);return Ku(E)}Gl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=Xr(s.pendingLanes);l!==0&&(ti(s,l|1),Zt(s,Ge()),(ze&6)===0&&(ko=Ge()+500,ci()))}break;case 13:cs(function(){var h=Lr(r,1);if(h!==null){var p=Wt();Hn(h,r,1,p)}}),qd(r,1)}},Qs=function(r){if(r.tag===13){var s=Lr(r,134217728);if(s!==null){var l=Wt();Hn(s,r,134217728,l)}qd(r,134217728)}},Kl=function(r){if(r.tag===13){var s=mi(r),l=Lr(r,s);if(l!==null){var h=Wt();Hn(l,r,s,h)}qd(r,s)}},Ql=function(){return Fe},Yl=function(r,s){var l=Fe;try{return Fe=r,s()}finally{Fe=l}},Us=function(r,s,l){switch(s){case"input":if(aa(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==r&&h.form===r.form){var p=pu(h);if(!p)throw Error(t(90));Ms(h),aa(h,p)}}}break;case"textarea":Fs(r,l);break;case"select":s=l.value,s!=null&&Sr(r,!!l.multiple,s,!1)}},$i=Ld,ya=cs;var eI={usingClientEntryPoint:!1,Events:[ja,ho,pu,Xn,ma,Ld]},Za={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tI={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Q.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=wa(r),r===null?null:r.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||XT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{Qi=Xu.inject(tI),on=Xu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eI,en.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(s))throw Error(t(200));return JT(r,s,null,l)},en.createRoot=function(r,s){if(!Hd(r))throw Error(t(299));var l=!1,h="",p=Oy;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=zd(r,1,!1,null,null,l,!1,h,p),r[br]=s.current,La(r.nodeType===8?r.parentNode:r),new $d(s)},en.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=wa(s),r=r===null?null:r.stateNode,r},en.flushSync=function(r){return cs(r)},en.hydrate=function(r,s,l){if(!Yu(s))throw Error(t(200));return Ju(null,r,s,!0,l)},en.hydrateRoot=function(r,s,l){if(!Hd(r))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,y="",E=Oy;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),s=Dy(s,null,r,1,l??null,p,!1,y,E),r[br]=s.current,La(r),h)for(r=0;r<h.length;r++)l=h[r],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Qu(s)},en.render=function(r,s,l){if(!Yu(s))throw Error(t(200));return Ju(null,r,s,!1,l)},en.unmountComponentAtNode=function(r){if(!Yu(r))throw Error(t(40));return r._reactRootContainer?(cs(function(){Ju(null,null,r,!1,function(){r._reactRootContainer=null,r[br]=null})}),!0):!1},en.unstable_batchedUpdates=Ld,en.unstable_renderSubtreeIntoContainer=function(r,s,l,h){if(!Yu(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Ju(r,s,l,!1,h)},en.version="18.3.1-next-f1338f8080-20240426",en}var $y;function uI(){if($y)return Kd.exports;$y=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Kd.exports=lI(),Kd.exports}var Hy;function cI(){if(Hy)return Zu;Hy=1;var n=uI();return Zu.createRoot=n.createRoot,Zu.hydrateRoot=n.hydrateRoot,Zu}var hI=cI(),ve=Tl();const dI=()=>{};var Wy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},fI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],c=n[t++],d=n[t++],f=((o&7)<<18|(a&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(f>>10)),e[i++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},R_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const a=n[o],c=o+1<n.length,d=c?n[o+1]:0,f=o+2<n.length,g=f?n[o+2]:0,_=a>>2,w=(a&3)<<4|d>>4;let T=(d&15)<<2|g>>6,R=g&63;f||(R=64,c||(T=64)),i.push(t[_],t[w],t[T],t[R])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(C_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):fI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const g=o<n.length?t[n.charAt(o)]:64;++o;const w=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||g==null||w==null)throw new pI;const T=a<<2|d>>4;if(i.push(T),g!==64){const R=d<<4&240|g>>2;if(i.push(R),w!==64){const M=g<<6&192|w;i.push(M)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gI=function(n){const e=C_(n);return R_.encodeByteArray(e,!0)},wc=function(n){return gI(n).replace(/\./g,"")},P_=function(n){try{return R_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=()=>mI().__FIREBASE_DEFAULTS__,vI=()=>{if(typeof process>"u"||typeof Wy>"u")return;const n=Wy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_I=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&P_(n[1]);return e&&JSON.parse(e)},$c=()=>{try{return dI()||yI()||vI()||_I()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},x_=n=>{var e,t;return(t=(e=$c())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},wI=n=>{const e=x_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},N_=()=>{var n;return(n=$c())===null||n===void 0?void 0:n.config},b_=n=>{var e;return(e=$c())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function D_(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[wc(JSON.stringify(t)),wc(JSON.stringify(c)),""].join(".")}const ll={};function II(){const n={prod:[],emulator:[]};for(const e of Object.keys(ll))ll[e]?n.emulator.push(e):n.prod.push(e);return n}function SI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Gy=!1;function M_(n,e){if(typeof window>"u"||typeof document>"u"||!Qo(window.location.host)||ll[n]===e||ll[n]||Gy)return;ll[n]=e;function t(T){return`__firebase__banner__${T}`}const i="__firebase__banner",a=II().prod.length>0;function c(){const T=document.getElementById(i);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,R){T.setAttribute("width","24"),T.setAttribute("id",R),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function g(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Gy=!0,c()},T}function _(T,R){T.setAttribute("id",R),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){const T=SI(i),R=t("text"),M=document.getElementById(R)||document.createElement("span"),V=t("learnmore"),L=document.getElementById(V)||document.createElement("a"),$=t("preprendIcon"),G=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const W=T.element;d(W),_(L,V);const Q=g();f(G,$),W.append(G,M,L,Q),document.body.appendChild(W)}a?(M.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function AI(){var n;const e=(n=$c())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function RI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PI(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xI(){return!AI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rp(){try{return typeof indexedDB=="object"}catch{return!1}}function Pp(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}function O_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="FirebaseError";class Yn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=NI,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?bI(a,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new Yn(o,d,i)}}function bI(n,e){return n.replace(DI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const DI=/\{\$([^}]+)}/g;function MI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function mr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const a=n[o],c=e[o];if(Ky(a)&&Ky(c)){if(!mr(a,c))return!1}else if(a!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Ky(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function nl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,a]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function rl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function OI(n,e){const t=new LI(n,e);return t.subscribe.bind(t)}class LI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");VI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Jd),o.error===void 0&&(o.error=Jd),o.complete===void 0&&(o.complete=Jd);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Jd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=1e3,jI=2,UI=14400*1e3,BI=.5;function Qy(n,e=FI,t=jI){const i=e*Math.pow(t,n),o=Math.round(BI*i*(Math.random()-.5)*2);return Math.min(UI,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n){return n&&n._delegate?n._delegate:n}class Kn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new EI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($I(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});i.resolve(a)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&e(c,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:qI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qI(n){return n===ps?void 0:n}function $I(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Le||(Le={}));const WI={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},GI=Le.INFO,KI={[Le.DEBUG]:"log",[Le.VERBOSE]:"log",[Le.INFO]:"info",[Le.WARN]:"warn",[Le.ERROR]:"error"},QI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=KI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hc{constructor(e){this.name=e,this._logLevel=GI,this._logHandler=QI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Le.DEBUG,...e),this._logHandler(this,Le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Le.VERBOSE,...e),this._logHandler(this,Le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Le.INFO,...e),this._logHandler(this,Le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Le.WARN,...e),this._logHandler(this,Le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Le.ERROR,...e),this._logHandler(this,Le.ERROR,...e)}}const YI=(n,e)=>e.some(t=>n instanceof t);let Yy,Jy;function JI(){return Yy||(Yy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XI(){return Jy||(Jy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const L_=new WeakMap,Yf=new WeakMap,V_=new WeakMap,Xd=new WeakMap,xp=new WeakMap;function ZI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Ai(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&L_.set(t,n)}).catch(()=>{}),xp.set(e,n),e}function eS(n){if(Yf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Yf.set(n,e)}let Jf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||V_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ai(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function tS(n){Jf=n(Jf)}function nS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Zd(this),e,...t);return V_.set(i,e.sort?e.sort():[e]),Ai(i)}:XI().includes(n)?function(...e){return n.apply(Zd(this),e),Ai(L_.get(this))}:function(...e){return Ai(n.apply(Zd(this),e))}}function rS(n){return typeof n=="function"?nS(n):(n instanceof IDBTransaction&&eS(n),YI(n,JI())?new Proxy(n,Jf):n)}function Ai(n){if(n instanceof IDBRequest)return ZI(n);if(Xd.has(n))return Xd.get(n);const e=rS(n);return e!==n&&(Xd.set(n,e),xp.set(e,n)),e}const Zd=n=>xp.get(n);function F_(n,e,{blocked:t,upgrade:i,blocking:o,terminated:a}={}){const c=indexedDB.open(n,e),d=Ai(c);return i&&c.addEventListener("upgradeneeded",f=>{i(Ai(c.result),f.oldVersion,f.newVersion,Ai(c.transaction),f)}),t&&c.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),o&&f.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const iS=["get","getKey","getAll","getAllKeys","count"],sS=["put","add","delete","clear"],ef=new Map;function Xy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ef.get(e))return ef.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=sS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||iS.includes(t)))return;const a=async function(c,...d){const f=this.transaction(c,o?"readwrite":"readonly");let g=f.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),o&&f.done]))[0]};return ef.set(e,a),a}tS(n=>({...n,get:(e,t,i)=>Xy(e,t)||n.get(e,t,i),has:(e,t)=>!!Xy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(aS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function aS(n){const e=n.getComponent();return e?.type==="VERSION"}const Xf="@firebase/app",Zy="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Hc("@firebase/app"),lS="@firebase/app-compat",uS="@firebase/analytics-compat",cS="@firebase/analytics",hS="@firebase/app-check-compat",dS="@firebase/app-check",fS="@firebase/auth",pS="@firebase/auth-compat",gS="@firebase/database",mS="@firebase/data-connect",yS="@firebase/database-compat",vS="@firebase/functions",_S="@firebase/functions-compat",wS="@firebase/installations",ES="@firebase/installations-compat",TS="@firebase/messaging",IS="@firebase/messaging-compat",SS="@firebase/performance",kS="@firebase/performance-compat",AS="@firebase/remote-config",CS="@firebase/remote-config-compat",RS="@firebase/storage",PS="@firebase/storage-compat",xS="@firebase/firestore",NS="@firebase/ai",bS="@firebase/firestore-compat",DS="firebase",MS="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="[DEFAULT]",OS={[Xf]:"fire-core",[lS]:"fire-core-compat",[cS]:"fire-analytics",[uS]:"fire-analytics-compat",[dS]:"fire-app-check",[hS]:"fire-app-check-compat",[fS]:"fire-auth",[pS]:"fire-auth-compat",[gS]:"fire-rtdb",[mS]:"fire-data-connect",[yS]:"fire-rtdb-compat",[vS]:"fire-fn",[_S]:"fire-fn-compat",[wS]:"fire-iid",[ES]:"fire-iid-compat",[TS]:"fire-fcm",[IS]:"fire-fcm-compat",[SS]:"fire-perf",[kS]:"fire-perf-compat",[AS]:"fire-rc",[CS]:"fire-rc-compat",[RS]:"fire-gcs",[PS]:"fire-gcs-compat",[xS]:"fire-fst",[bS]:"fire-fst-compat",[NS]:"fire-vertex","fire-js":"fire-js",[DS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new Map,LS=new Map,ep=new Map;function ev(n,e){try{n.container.addComponent(e)}catch(t){$r.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yr(n){const e=n.name;if(ep.has(e))return $r.debug(`There were multiple attempts to register component ${e}.`),!1;ep.set(e,n);for(const t of Ec.values())ev(t,n);for(const t of LS.values())ev(t,n);return!0}function Rs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ci=new Cs("app","Firebase",VS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ci.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=MS;function j_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Zf,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Ci.create("bad-app-name",{appName:String(o)});if(t||(t=N_()),!t)throw Ci.create("no-options");const a=Ec.get(o);if(a){if(mr(t,a.options)&&mr(i,a.config))return a;throw Ci.create("duplicate-app",{appName:o})}const c=new HI(o);for(const f of ep.values())c.addComponent(f);const d=new FS(t,i,c);return Ec.set(o,d),d}function Np(n=Zf){const e=Ec.get(n);if(!e&&n===Zf&&N_())return j_();if(!e)throw Ci.create("no-app",{appName:n});return e}function Rn(n,e,t){var i;let o=(i=OS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$r.warn(d.join(" "));return}yr(new Kn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="firebase-heartbeat-database",US=1,gl="firebase-heartbeat-store";let tf=null;function U_(){return tf||(tf=F_(jS,US,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(gl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ci.create("idb-open",{originalErrorMessage:n.message})})),tf}async function BS(n){try{const t=(await U_()).transaction(gl),i=await t.objectStore(gl).get(B_(n));return await t.done,i}catch(e){if(e instanceof Yn)$r.warn(e.message);else{const t=Ci.create("idb-get",{originalErrorMessage:e?.message});$r.warn(t.message)}}}async function tv(n,e){try{const i=(await U_()).transaction(gl,"readwrite");await i.objectStore(gl).put(e,B_(n)),await i.done}catch(t){if(t instanceof Yn)$r.warn(t.message);else{const i=Ci.create("idb-set",{originalErrorMessage:t?.message});$r.warn(i.message)}}}function B_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=1024,qS=30;class $S{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new WS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=nv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>qS){const c=GS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){$r.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nv(),{heartbeatsToSend:i,unsentEntries:o}=HS(this._heartbeatsCache.heartbeats),a=wc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return $r.warn(t),""}}}function nv(){return new Date().toISOString().substring(0,10)}function HS(n,e=zS){const t=[];let i=n.slice();for(const o of n){const a=t.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),rv(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),rv(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class WS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rp()?Pp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await BS(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return tv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return tv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function rv(n){return wc(JSON.stringify({version:2,heartbeats:n})).length}function GS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(n){yr(new Kn("platform-logger",e=>new oS(e),"PRIVATE")),yr(new Kn("heartbeat",e=>new $S(e),"PRIVATE")),Rn(Xf,Zy,n),Rn(Xf,Zy,"esm2017"),Rn("fire-js","")}KS("");function bp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function z_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QS=z_,q_=new Cs("auth","Firebase",z_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new Hc("@firebase/auth");function YS(n,...e){Tc.logLevel<=Le.WARN&&Tc.warn(`Auth (${Yo}): ${n}`,...e)}function cc(n,...e){Tc.logLevel<=Le.ERROR&&Tc.error(`Auth (${Yo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(n,...e){throw Mp(n,...e)}function Gn(n,...e){return Mp(n,...e)}function Dp(n,e,t){const i=Object.assign(Object.assign({},QS()),{[e]:t});return new Cs("auth","Firebase",i).create(e,{appName:n.name})}function cr(n){return Dp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $_(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&xn(n,"argument-error"),Dp(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return q_.create(n,...e)}function ke(n,e,...t){if(!n)throw Mp(e,...t)}function Br(n){const e="INTERNAL ASSERTION FAILED: "+n;throw cc(e),new Error(e)}function Hr(n,e){n||Br(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function JS(){return iv()==="http:"||iv()==="https:"}function iv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JS()||Cp()||"connection"in navigator)?navigator.onLine:!0}function ZS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Hr(t>e,"Short delay should be less than long delay!"),this.isMobile=kI()||RI()}get(){return XS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(n,e){Hr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nk=new Sl(3e4,6e4);function Kr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function wr(n,e,t,i,o={}){return W_(n,o,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const d=Il(Object.assign({key:n.config.apiKey},c)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:f},a);return CI()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Qo(n.emulatorConfig.host)&&(g.credentials="include"),H_.fetch()(await G_(n,n.config.apiHost,t,d),g)})}async function W_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},ek),e);try{const o=new ik(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw ec(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const d=a.ok?c.errorMessage:c.error.message,[f,g]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw ec(n,"credential-already-in-use",c);if(f==="EMAIL_EXISTS")throw ec(n,"email-already-in-use",c);if(f==="USER_DISABLED")throw ec(n,"user-disabled",c);const _=i[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Dp(n,_,g);xn(n,_)}}catch(o){if(o instanceof Yn)throw o;xn(n,"network-request-failed",{message:String(o)})}}async function kl(n,e,t,i,o={}){const a=await wr(n,e,t,i,o);return"mfaPendingCredential"in a&&xn(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function G_(n,e,t,i){const o=`${e}${t}?${i}`,a=n,c=a.config.emulator?Op(n.config,o):`${n.config.apiScheme}://${o}`;return tk.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function rk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ik{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Gn(this.auth,"network-request-failed")),nk.get())})}}function ec(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Gn(n,e,i);return o.customData._tokenResponse=t,o}function sv(n){return n!==void 0&&n.enterprise!==void 0}class sk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return rk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ok(n,e){return wr(n,"GET","/v2/recaptchaConfig",Kr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(n,e){return wr(n,"POST","/v1/accounts:delete",e)}async function Ic(n,e){return wr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lk(n,e=!1){const t=it(n),i=await t.getIdToken(e),o=Lp(i);ke(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a?.sign_in_provider;return{claims:o,token:i,authTime:ul(nf(o.auth_time)),issuedAtTime:ul(nf(o.iat)),expirationTime:ul(nf(o.exp)),signInProvider:c||null,signInSecondFactor:a?.sign_in_second_factor||null}}function nf(n){return Number(n)*1e3}function Lp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return cc("JWT malformed, contained fewer than 3 sections"),null;try{const o=P_(t);return o?JSON.parse(o):(cc("Failed to decode base64 JWT payload"),null)}catch(o){return cc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function ov(n){const e=Lp(n);return ke(e,"internal-error"),ke(typeof e.exp<"u","internal-error"),ke(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Yn&&uk(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function uk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ul(this.lastLoginAt),this.creationTime=ul(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Uo(n,Ic(t,{idToken:i}));ke(o?.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?K_(a.providerUserInfo):[],d=dk(n.providerData,c),f=n.isAnonymous,g=!(n.email&&a.passwordHash)&&!d?.length,_=f?g:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new np(a.createdAt,a.lastLoginAt),isAnonymous:_};Object.assign(n,w)}async function hk(n){const e=it(n);await Sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dk(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function K_(n){return n.map(e=>{var{providerId:t}=e,i=bp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fk(n,e){const t=await W_(n,{},async()=>{const i=Il({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,c=await G_(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:i};return n.emulatorConfig&&Qo(n.emulatorConfig.host)&&(f.credentials="include"),H_.fetch()(c,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pk(n,e){return wr(n,"POST","/v2/accounts:revokeToken",Kr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ke(e.idToken,"internal-error"),ke(typeof e.idToken<"u","internal-error"),ke(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ov(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ke(e.length!==0,"internal-error");const t=ov(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:a}=await fk(e,t);this.updateTokensAndExpiration(i,o,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:a}=t,c=new Mo;return i&&(ke(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(ke(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(ke(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return Br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(n,e){ke(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Wn{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,a=bp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ck(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new np(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return ke(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return lk(this,e)}reload(){return hk(this)}_assign(e){this!==e&&(ke(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Sc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(cr(this.auth));const e=await this.getIdToken();return await Uo(this,ak(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,a,c,d,f,g,_;const w=(i=t.displayName)!==null&&i!==void 0?i:void 0,T=(o=t.email)!==null&&o!==void 0?o:void 0,R=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,M=(c=t.photoURL)!==null&&c!==void 0?c:void 0,V=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,$=(g=t.createdAt)!==null&&g!==void 0?g:void 0,G=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:W,emailVerified:Q,isAnonymous:re,providerData:K,stsTokenManager:P}=t;ke(W&&P,e,"internal-error");const I=Mo.fromJSON(this.name,P);ke(typeof W=="string",e,"internal-error"),wi(w,e.name),wi(T,e.name),ke(typeof Q=="boolean",e,"internal-error"),ke(typeof re=="boolean",e,"internal-error"),wi(R,e.name),wi(M,e.name),wi(V,e.name),wi(L,e.name),wi($,e.name),wi(G,e.name);const A=new Wn({uid:W,auth:e,email:T,emailVerified:Q,displayName:w,isAnonymous:re,photoURL:M,phoneNumber:R,tenantId:V,stsTokenManager:I,createdAt:$,lastLoginAt:G});return K&&Array.isArray(K)&&(A.providerData=K.map(N=>Object.assign({},N))),L&&(A._redirectEventId=L),A}static async _fromIdTokenResponse(e,t,i=!1){const o=new Mo;o.updateFromServerResponse(t);const a=new Wn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Sc(a),a}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ke(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?K_(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!a?.length,d=new Mo;d.updateFromIdToken(i);const f=new Wn({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new np(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!a?.length};return Object.assign(f,g),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=new Map;function zr(n){Hr(n instanceof Function,"Expected a class definition");let e=av.get(n);return e?(Hr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,av.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Q_.type="NONE";const lv=Q_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(n,e,t){return`firebase:${n}:${e}:${t}`}class Oo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:a}=this.auth;this.fullUserKey=hc(this.userKey,o.apiKey,a),this.fullPersistenceKey=hc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ic(this.auth,{idToken:e}).catch(()=>{});return t?Wn._fromGetAccountInfoResponse(this.auth,t,e):null}return Wn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Oo(zr(lv),e,i);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=o[0]||zr(lv);const c=hc(i,e.config.apiKey,e.name);let d=null;for(const g of t)try{const _=await g._get(c);if(_){let w;if(typeof _=="string"){const T=await Ic(e,{idToken:_}).catch(()=>{});if(!T)break;w=await Wn._fromGetAccountInfoResponse(e,T,_)}else w=Wn._fromJSON(e,_);g!==a&&(d=w),a=g;break}}catch{}const f=o.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Oo(a,e,i):(a=f[0],d&&await a._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==a)try{await g._remove(c)}catch{}})),new Oo(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Y_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tw(e))return"Blackberry";if(nw(e))return"Webos";if(J_(e))return"Safari";if((e.includes("chrome/")||X_(e))&&!e.includes("edge/"))return"Chrome";if(ew(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function Y_(n=zt()){return/firefox\//i.test(n)}function J_(n=zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function X_(n=zt()){return/crios\//i.test(n)}function Z_(n=zt()){return/iemobile/i.test(n)}function ew(n=zt()){return/android/i.test(n)}function tw(n=zt()){return/blackberry/i.test(n)}function nw(n=zt()){return/webos/i.test(n)}function Vp(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gk(n=zt()){var e;return Vp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mk(){return PI()&&document.documentMode===10}function rw(n=zt()){return Vp(n)||ew(n)||nw(n)||tw(n)||/windows phone/i.test(n)||Z_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(n,e=[]){let t;switch(n){case"Browser":t=uv(zt());break;case"Worker":t=`${uv(zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Yo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((c,d)=>{try{const f=e(a);c(f)}catch(f){d(f)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vk(n,e={}){return wr(n,"GET","/v2/passwordPolicy",Kr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=6;class wk{constructor(e){var t,i,o,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:_k,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,a,c,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(i=f.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(o=f.containsLowercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(c=f.containsNumericCharacter)!==null&&c!==void 0?c:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cv(this),this.idTokenSubscription=new cv(this),this.beforeStateQueue=new yk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=zr(t)),this._initializationPromise=this.queue(async()=>{var i,o,a;if(!this._deleted&&(this.persistenceManager=await Oo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ic(this,{idToken:e}),i=await Wn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(nn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o?._redirectEventId,f=await this.tryRedirectSignIn(e);(!c||c===d)&&f?.user&&(o=f.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Sc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(cr(this));const t=e?it(e):null;return t&&ke(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ke(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vk(this),t=new wk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await pk(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&zr(e)||this._popupRedirectResolver;ke(t,this,"argument-error"),this.redirectPersistenceManager=await Oo.create(this,[zr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(d,this,"internal-error"),d.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,i,o);return()=>{c=!0,f()}}else{const f=e.addObserver(t);return()=>{c=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&YS(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Er(n){return it(n)}class cv{constructor(e){this.auth=e,this.observer=null,this.addObserver=OI(t=>this.observer=t)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tk(n){Wc=n}function sw(n){return Wc.loadJS(n)}function Ik(){return Wc.recaptchaEnterpriseScript}function Sk(){return Wc.gapiScript}function kk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Ak{constructor(){this.enterprise=new Ck}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ck{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Rk="recaptcha-enterprise",ow="NO_RECAPTCHA";class Pk{constructor(e){this.type=Rk,this.auth=Er(e)}async verify(e="verify",t=!1){async function i(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,d)=>{ok(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new sk(f);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,c(g.siteKey)}}).catch(f=>{d(f)})})}function o(a,c,d){const f=window.grecaptcha;sv(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(g=>{c(g)}).catch(()=>{c(ow)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ak().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{i(this.auth).then(d=>{if(!t&&sv(window.grecaptcha))o(d,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let f=Ik();f.length!==0&&(f+=d),sw(f).then(()=>{o(d,a,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function hv(n,e,t,i=!1,o=!1){const a=new Pk(n);let c;if(o)c=ow;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function kc(n,e,t,i,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await hv(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await hv(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(n,e){const t=Rs(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(mr(a,e??{}))return o;xn(o,"already-initialized")}return t.initialize({options:e})}function Nk(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(zr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function bk(n,e,t){const i=Er(n);ke(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,a=aw(e),{host:c,port:d}=Dk(e),f=d===null?"":`:${d}`,g={url:`${a}//${c}${f}/`},_=Object.freeze({host:c,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ke(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ke(mr(g,i.config.emulator)&&mr(_,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=_,i.settings.appVerificationDisabledForTesting=!0,Qo(c)?(D_(`${a}//${c}${f}`),M_("Auth",!0)):Mk()}function aw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Dk(n){const e=aw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const a=o[1];return{host:a,port:dv(i.substr(a.length+1))}}else{const[a,c]=i.split(":");return{host:a,port:dv(c)}}}function dv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Mk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Br("not implemented")}_getIdTokenResponse(e){return Br("not implemented")}_linkToIdToken(e,t){return Br("not implemented")}_getReauthenticationResolver(e){return Br("not implemented")}}async function Ok(n,e){return wr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(n,e){return kl(n,"POST","/v1/accounts:signInWithPassword",Kr(n,e))}async function Vk(n,e){return wr(n,"POST","/v1/accounts:sendOobCode",Kr(n,e))}async function Fk(n,e){return Vk(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(n,e){return kl(n,"POST","/v1/accounts:signInWithEmailLink",Kr(n,e))}async function Uk(n,e){return kl(n,"POST","/v1/accounts:signInWithEmailLink",Kr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends Fp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ml(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ml(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kc(e,t,"signInWithPassword",Lk);case"emailLink":return jk(e,{email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kc(e,i,"signUpPassword",Ok);case"emailLink":return Uk(e,{idToken:t,email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(n,e){return kl(n,"POST","/v1/accounts:signInWithIdp",Kr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk="http://localhost";class ws extends Fp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):xn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,a=bp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new ws(i,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Lo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Lo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Lo(e,t)}buildRequest(){const e={requestUri:Bk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Il(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qk(n){const e=nl(rl(n)).link,t=e?nl(rl(e)).deep_link_id:null,i=nl(rl(n)).deep_link_id;return(i?nl(rl(i)).link:null)||i||t||e||n}class jp{constructor(e){var t,i,o,a,c,d;const f=nl(rl(e)),g=(t=f.apiKey)!==null&&t!==void 0?t:null,_=(i=f.oobCode)!==null&&i!==void 0?i:null,w=zk((o=f.mode)!==null&&o!==void 0?o:null);ke(g&&_&&w,"argument-error"),this.apiKey=g,this.operation=w,this.code=_,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=f.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=qk(e);try{return new jp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.providerId=Jo.PROVIDER_ID}static credential(e,t){return ml._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=jp.parseLink(t);return ke(i,"argument-error"),ml._fromEmailAndCode(e,i.code,i.tenantId)}}Jo.PROVIDER_ID="password";Jo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends Gc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Al{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ti.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ws._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ur.credential(t,i)}catch{return null}}}Ur.GOOGLE_SIGN_IN_METHOD="google.com";Ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Al{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.GITHUB_SIGN_IN_METHOD="github.com";Ii.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Al{constructor(){super("twitter.com")}static credential(e,t){return ws._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Si.credential(t,i)}catch{return null}}}Si.TWITTER_SIGN_IN_METHOD="twitter.com";Si.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(n,e){return kl(n,"POST","/v1/accounts:signUp",Kr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const a=await Wn._fromIdTokenResponse(e,i,o),c=fv(i);return new Es({user:a,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=fv(i);return new Es({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function fv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends Yn{constructor(e,t,i,o){var a;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Ac.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Ac(e,t,i,o)}}function lw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ac._fromErrorAndOperation(n,a,e,i):a})}async function Hk(n,e,t=!1){const i=await Uo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Es._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(n,e,t=!1){const{auth:i}=n;if(nn(i.app))return Promise.reject(cr(i));const o="reauthenticate";try{const a=await Uo(n,lw(i,o,e,n),t);ke(a.idToken,i,"internal-error");const c=Lp(a.idToken);ke(c,i,"internal-error");const{sub:d}=c;return ke(n.uid===d,i,"user-mismatch"),Es._forOperation(n,o,a)}catch(a){throw a?.code==="auth/user-not-found"&&xn(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(n,e,t=!1){if(nn(n.app))return Promise.reject(cr(n));const i="signIn",o=await lw(n,i,e),a=await Es._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(a.user),a}async function Gk(n,e){return uw(Er(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cw(n){const e=Er(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Kk(n,e,t){const i=Er(n);await kc(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Fk)}async function Qk(n,e,t){if(nn(n.app))return Promise.reject(cr(n));const i=Er(n),c=await kc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$k).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&cw(n),f}),d=await Es._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function Yk(n,e,t){return nn(n.app)?Promise.reject(cr(n)):Gk(it(n),Jo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&cw(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(n,e){return wr(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=it(n),a={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Uo(i,Jk(i.auth,a));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:f})=>f==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function Zk(n,e,t,i){return it(n).onIdTokenChanged(e,t,i)}function eA(n,e,t){return it(n).beforeAuthStateChanged(e,t)}function tA(n,e,t,i){return it(n).onAuthStateChanged(e,t,i)}function nA(n){return it(n).signOut()}const Cc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cc,"1"),this.storage.removeItem(Cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=1e3,iA=10;class dw extends hw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,f)=>{this.notifyListeners(c,f)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);mk()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,iA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},rA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dw.type="LOCAL";const sA=dw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw extends hw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fw.type="SESSION";const pw=fw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Kc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async g=>g(t.origin,a)),f=await oA(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((d,f)=>{const g=Up("",20);o.port1.start();const _=setTimeout(()=>{f(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(w){const T=w;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(_),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(_),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(){return window}function lA(n){hr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(){return typeof hr().WorkerGlobalScope<"u"&&typeof hr().importScripts=="function"}async function uA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cA(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function hA(){return gw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="firebaseLocalStorageDb",dA=1,Rc="firebaseLocalStorage",yw="fbase_key";class Cl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qc(n,e){return n.transaction([Rc],e?"readwrite":"readonly").objectStore(Rc)}function fA(){const n=indexedDB.deleteDatabase(mw);return new Cl(n).toPromise()}function rp(){const n=indexedDB.open(mw,dA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Rc,{keyPath:yw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Rc)?e(i):(i.close(),await fA(),e(await rp()))})})}async function pv(n,e,t){const i=Qc(n,!0).put({[yw]:e,value:t});return new Cl(i).toPromise()}async function pA(n,e){const t=Qc(n,!1).get(e),i=await new Cl(t).toPromise();return i===void 0?null:i.value}function gv(n,e){const t=Qc(n,!0).delete(e);return new Cl(t).toPromise()}const gA=800,mA=3;class vw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>mA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(hA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await uA(),!this.activeServiceWorker)return;this.sender=new aA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rp();return await pv(e,Cc,"1"),await gv(e,Cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>pv(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>pA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>gv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=Qc(o,!1).getAll();return new Cl(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vw.type="LOCAL";const yA=vw;new Sl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(n,e){return e?zr(e):(ke(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp extends Fp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Lo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Lo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vA(n){return uw(n.auth,new zp(n),n.bypassAuthState)}function _A(n){const{auth:e,user:t}=n;return ke(t,e,"internal-error"),Wk(t,new zp(n),n.bypassAuthState)}async function wA(n){const{auth:e,user:t}=n;return ke(t,e,"internal-error"),Hk(t,new zp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,t,i,o,a=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:a,error:c,type:d}=e;if(c){this.reject(c);return}const f={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vA;case"linkViaPopup":case"linkViaRedirect":return wA;case"reauthViaPopup":case"reauthViaRedirect":return _A;default:xn(this.auth,"internal-error")}}resolve(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=new Sl(2e3,1e4);async function TA(n,e,t){if(nn(n.app))return Promise.reject(Gn(n,"operation-not-supported-in-this-environment"));const i=Er(n);$_(n,e,Gc);const o=Bp(i,t);return new gs(i,"signInViaPopup",e,o).executeNotNull()}class gs extends _w{constructor(e,t,i,o,a){super(e,t,o,a),this.provider=i,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ke(e,this.auth,"internal-error"),e}async onExecution(){Hr(this.filter.length===1,"Popup operations only handle one event");const e=Up();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EA.get())};e()}}gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="pendingRedirect",dc=new Map;class SA extends _w{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=dc.get(this.auth._key());if(!e){try{const i=await kA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}dc.set(this.auth._key(),e)}return this.bypassAuthState||dc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kA(n,e){const t=Ew(e),i=ww(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}async function AA(n,e){return ww(n)._set(Ew(e),"true")}function CA(n,e){dc.set(n._key(),e)}function ww(n){return zr(n._redirectPersistence)}function Ew(n){return hc(IA,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(n,e,t){return PA(n,e,t)}async function PA(n,e,t){if(nn(n.app))return Promise.reject(cr(n));const i=Er(n);$_(n,e,Gc),await i._initializationPromise;const o=Bp(i,t);return await AA(o,i),o._openRedirect(i,e,"signInViaRedirect")}async function xA(n,e,t=!1){if(nn(n.app))return Promise.reject(cr(n));const i=Er(n),o=Bp(i,e),c=await new SA(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=600*1e3;class bA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Tw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Gn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NA&&this.cachedEventUids.clear(),this.cachedEventUids.has(mv(e))}saveEventToCache(e){this.cachedEventUids.add(mv(e)),this.lastProcessedEventTime=Date.now()}}function mv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Tw({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function DA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MA(n,e={}){return wr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LA=/^https?/;async function VA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await MA(n);for(const t of e)try{if(FA(t))return}catch{}xn(n,"unauthorized-domain")}function FA(n){const e=tp(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!LA.test(t))return!1;if(OA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=new Sl(3e4,6e4);function yv(){const n=hr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function UA(n){return new Promise((e,t)=>{var i,o,a;function c(){yv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yv(),t(Gn(n,"network-request-failed"))},timeout:jA.get()})}if(!((o=(i=hr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=hr().gapi)===null||a===void 0)&&a.load)c();else{const d=kk("iframefcb");return hr()[d]=()=>{gapi.load?c():t(Gn(n,"network-request-failed"))},sw(`${Sk()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw fc=null,e})}let fc=null;function BA(n){return fc=fc||UA(n),fc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=new Sl(5e3,15e3),qA="__/auth/iframe",$A="emulator/auth/iframe",HA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GA(n){const e=n.config;ke(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Op(e,$A):`https://${n.config.authDomain}/${qA}`,i={apiKey:e.apiKey,appName:n.name,v:Yo},o=WA.get(n.config.apiHost);o&&(i.eid=o);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${Il(i).slice(1)}`}async function KA(n){const e=await BA(n),t=hr().gapi;return ke(t,n,"internal-error"),e.open({where:document.body,url:GA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HA,dontclear:!0},i=>new Promise(async(o,a)=>{await i.restyle({setHideOnLeave:!1});const c=Gn(n,"network-request-failed"),d=hr().setTimeout(()=>{a(c)},zA.get());function f(){hr().clearTimeout(d),o(i)}i.ping(f).then(f,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YA=500,JA=600,XA="_blank",ZA="http://localhost";class vv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eC(n,e,t,i=YA,o=JA){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const f=Object.assign(Object.assign({},QA),{width:i.toString(),height:o.toString(),top:a,left:c}),g=zt().toLowerCase();t&&(d=X_(g)?XA:t),Y_(g)&&(e=e||ZA,f.scrollbars="yes");const _=Object.entries(f).reduce((T,[R,M])=>`${T}${R}=${M},`,"");if(gk(g)&&d!=="_self")return tC(e||"",d),new vv(null);const w=window.open(e||"",d,_);ke(w,n,"popup-blocked");try{w.focus()}catch{}return new vv(w)}function tC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="__/auth/handler",rC="emulator/auth/handler",iC=encodeURIComponent("fac");async function _v(n,e,t,i,o,a){ke(n.config.authDomain,n,"auth-domain-config-required"),ke(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Yo,eventId:o};if(e instanceof Gc){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",MI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,w]of Object.entries({}))c[_]=w}if(e instanceof Al){const _=e.getScopes().filter(w=>w!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const f=await n._getAppCheckToken(),g=f?`#${iC}=${encodeURIComponent(f)}`:"";return`${sC(n)}?${Il(d).slice(1)}${g}`}function sC({config:n}){return n.emulator?Op(n,rC):`https://${n.authDomain}/${nC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="webStorageSupport";class oC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pw,this._completeRedirectFn=xA,this._overrideRedirectResult=CA}async _openPopup(e,t,i,o){var a;Hr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await _v(e,t,i,tp(),o);return eC(e,c,Up())}async _openRedirect(e,t,i,o){await this._originValidation(e);const a=await _v(e,t,i,tp(),o);return lA(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Hr(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await KA(e),i=new bA(e);return t.register("authEvent",o=>(ke(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rf,{type:rf},o=>{var a;const c=(a=o?.[0])===null||a===void 0?void 0:a[rf];c!==void 0&&t(!!c),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=VA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rw()||J_()||Vp()}}const aC=oC;var wv="@firebase/auth",Ev="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cC(n){yr(new Kn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;ke(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const f={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iw(n)},g=new Ek(i,o,a,f);return Nk(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),yr(new Kn("auth-internal",e=>{const t=Er(e.getProvider("auth").getImmediate());return(i=>new lC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(wv,Ev,uC(n)),Rn(wv,Ev,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=300,dC=b_("authIdTokenMaxAge")||hC;let Tv=null;const fC=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>dC)return;const o=t?.token;Tv!==o&&(Tv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function pC(n=Np()){const e=Rs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xk(n,{popupRedirectResolver:aC,persistence:[yA,sA,pw]}),i=b_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const c=fC(a.toString());eA(t,c,()=>c(t.currentUser)),Zk(t,d=>c(d))}}const o=x_("auth");return o&&bk(t,`http://${o}`),t}function gC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Tk({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const a=Gn("internal-error");a.customData=o,t(a)},i.type="text/javascript",i.charset="UTF-8",gC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cC("Browser");/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yC=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),Iv=n=>{const e=yC(n);return e.charAt(0).toUpperCase()+e.slice(1)},Iw=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=ve.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:a,iconNode:c,...d},f)=>ve.createElement("svg",{ref:f,...vC,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:Iw("lucide",o),...d},[...c.map(([g,_])=>ve.createElement(g,_)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(n,e)=>{const t=ve.forwardRef(({className:i,...o},a)=>ve.createElement(_C,{ref:a,iconNode:e,className:Iw(`lucide-${mC(Iv(n))}`,`lucide-${n}`,i),...o}));return t.displayName=Iv(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Sw=tt("arrow-left",wC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],TC=tt("calendar-days",EC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],qp=tt("calendar",IC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],kC=tt("camera",SC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ip=tt("check",AC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],kw=tt("chevron-left",CC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Aw=tt("chevron-right",RC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],xC=tt("copy",PC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],bC=tt("house",NC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Cw=tt("link",DC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],OC=tt("list",MC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],VC=tt("lock",LC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],jC=tt("log-out",FC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],BC=tt("mail",UC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],sp=tt("moon",zC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Sv=tt("pen",qC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],HC=tt("plus",$C);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],GC=tt("qr-code",WC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],QC=tt("shopping-cart",KC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],op=tt("sun",YC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Rw=tt("trash-2",JC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Pc=tt("user",XC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],$p=tt("users",ZC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yc=tt("x",e2);var t2="firebase",n2="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn(t2,n2,"app");const Pw="@firebase/installations",Hp="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=1e4,Nw=`w:${Hp}`,bw="FIS_v2",r2="https://firebaseinstallations.googleapis.com/v1",i2=3600*1e3,s2="installations",o2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ts=new Cs(s2,o2,a2);function Dw(n){return n instanceof Yn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw({projectId:n}){return`${r2}/projects/${n}/installations`}function Ow(n){return{token:n.token,requestStatus:2,expiresIn:u2(n.expiresIn),creationTime:Date.now()}}async function Lw(n,e){const i=(await e.json()).error;return Ts.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Vw({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function l2(n,{refreshToken:e}){const t=Vw(n);return t.append("Authorization",c2(e)),t}async function Fw(n){const e=await n();return e.status>=500&&e.status<600?n():e}function u2(n){return Number(n.replace("s","000"))}function c2(n){return`${bw} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h2({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Mw(n),o=Vw(n),a=e.getImmediate({optional:!0});if(a){const g=await a.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const c={fid:t,authVersion:bw,appId:n.appId,sdkVersion:Nw},d={method:"POST",headers:o,body:JSON.stringify(c)},f=await Fw(()=>fetch(i,d));if(f.ok){const g=await f.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:Ow(g.authToken)}}else throw await Lw("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=/^[cdef][\w-]{21}$/,ap="";function p2(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=g2(n);return f2.test(t)?t:ap}catch{return ap}}function g2(n){return d2(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=new Map;function Bw(n,e){const t=Jc(n);zw(t,e),m2(t,e)}function zw(n,e){const t=Uw.get(n);if(t)for(const i of t)i(e)}function m2(n,e){const t=y2();t&&t.postMessage({key:n,fid:e}),v2()}let ms=null;function y2(){return!ms&&"BroadcastChannel"in self&&(ms=new BroadcastChannel("[Firebase] FID Change"),ms.onmessage=n=>{zw(n.data.key,n.data.fid)}),ms}function v2(){Uw.size===0&&ms&&(ms.close(),ms=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="firebase-installations-database",w2=1,Is="firebase-installations-store";let sf=null;function Wp(){return sf||(sf=F_(_2,w2,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Is)}}})),sf}async function xc(n,e){const t=Jc(n),o=(await Wp()).transaction(Is,"readwrite"),a=o.objectStore(Is),c=await a.get(t);return await a.put(e,t),await o.done,(!c||c.fid!==e.fid)&&Bw(n,e.fid),e}async function qw(n){const e=Jc(n),i=(await Wp()).transaction(Is,"readwrite");await i.objectStore(Is).delete(e),await i.done}async function Xc(n,e){const t=Jc(n),o=(await Wp()).transaction(Is,"readwrite"),a=o.objectStore(Is),c=await a.get(t),d=e(c);return d===void 0?await a.delete(t):await a.put(d,t),await o.done,d&&(!c||c.fid!==d.fid)&&Bw(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(n){let e;const t=await Xc(n.appConfig,i=>{const o=E2(i),a=T2(n,o);return e=a.registrationPromise,a.installationEntry});return t.fid===ap?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function E2(n){const e=n||{fid:p2(),registrationStatus:0};return $w(e)}function T2(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ts.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=I2(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:S2(n)}:{installationEntry:e}}async function I2(n,e){try{const t=await h2(n,e);return xc(n.appConfig,t)}catch(t){throw Dw(t)&&t.customData.serverCode===409?await qw(n.appConfig):await xc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function S2(n){let e=await kv(n.appConfig);for(;e.registrationStatus===1;)await jw(100),e=await kv(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Gp(n);return i||t}return e}function kv(n){return Xc(n,e=>{if(!e)throw Ts.create("installation-not-found");return $w(e)})}function $w(n){return k2(n)?{fid:n.fid,registrationStatus:0}:n}function k2(n){return n.registrationStatus===1&&n.registrationTime+xw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2({appConfig:n,heartbeatServiceProvider:e},t){const i=C2(n,t),o=l2(n,t),a=e.getImmediate({optional:!0});if(a){const g=await a.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const c={installation:{sdkVersion:Nw,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(c)},f=await Fw(()=>fetch(i,d));if(f.ok){const g=await f.json();return Ow(g)}else throw await Lw("Generate Auth Token",f)}function C2(n,{fid:e}){return`${Mw(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(n,e=!1){let t;const i=await Xc(n.appConfig,a=>{if(!Hw(a))throw Ts.create("not-registered");const c=a.authToken;if(!e&&x2(c))return a;if(c.requestStatus===1)return t=R2(n,e),a;{if(!navigator.onLine)throw Ts.create("app-offline");const d=b2(a);return t=P2(n,d),d}});return t?await t:i.authToken}async function R2(n,e){let t=await Av(n.appConfig);for(;t.authToken.requestStatus===1;)await jw(100),t=await Av(n.appConfig);const i=t.authToken;return i.requestStatus===0?Kp(n,e):i}function Av(n){return Xc(n,e=>{if(!Hw(e))throw Ts.create("not-registered");const t=e.authToken;return D2(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function P2(n,e){try{const t=await A2(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await xc(n.appConfig,i),t}catch(t){if(Dw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await qw(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xc(n.appConfig,i)}throw t}}function Hw(n){return n!==void 0&&n.registrationStatus===2}function x2(n){return n.requestStatus===2&&!N2(n)}function N2(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+i2}function b2(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function D2(n){return n.requestStatus===1&&n.requestTime+xw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M2(n){const e=n,{installationEntry:t,registrationPromise:i}=await Gp(e);return i?i.catch(console.error):Kp(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O2(n,e=!1){const t=n;return await L2(t),(await Kp(t,e)).token}async function L2(n){const{registrationPromise:e}=await Gp(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(n){if(!n||!n.options)throw of("App Configuration");if(!n.name)throw of("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw of(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function of(n){return Ts.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="installations",F2="installations-internal",j2=n=>{const e=n.getProvider("app").getImmediate(),t=V2(e),i=Rs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},U2=n=>{const e=n.getProvider("app").getImmediate(),t=Rs(e,Ww).getImmediate();return{getId:()=>M2(t),getToken:o=>O2(t,o)}};function B2(){yr(new Kn(Ww,j2,"PUBLIC")),yr(new Kn(F2,U2,"PRIVATE"))}B2();Rn(Pw,Hp);Rn(Pw,Hp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="analytics",z2="firebase_id",q2="origin",$2=60*1e3,H2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Hc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pn=new Cs("analytics","Analytics",W2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(n){if(!n.startsWith(Qp)){const e=pn.create("invalid-gtag-resource",{gtagURL:n});return sn.warn(e.message),""}return n}function Gw(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function K2(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Q2(n,e){const t=K2("firebase-js-sdk-policy",{createScriptURL:G2}),i=document.createElement("script"),o=`${Qp}?l=${n}&id=${e}`;i.src=t?t?.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function Y2(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function J2(n,e,t,i,o,a){const c=i[o];try{if(c)await e[c];else{const f=(await Gw(t)).find(g=>g.measurementId===o);f&&await e[f.appId]}}catch(d){sn.error(d)}n("config",o,a)}async function X2(n,e,t,i,o){try{let a=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const d=await Gw(t);for(const f of c){const g=d.find(w=>w.measurementId===f),_=g&&e[g.appId];if(_)a.push(_);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),n("event",i,o||{})}catch(a){sn.error(a)}}function Z2(n,e,t,i){async function o(a,...c){try{if(a==="event"){const[d,f]=c;await X2(n,e,t,d,f)}else if(a==="config"){const[d,f]=c;await J2(n,e,t,i,d,f)}else if(a==="consent"){const[d,f]=c;n("consent",d,f)}else if(a==="get"){const[d,f,g]=c;n("get",d,f,g)}else if(a==="set"){const[d]=c;n("set",d)}else n(a,...c)}catch(d){sn.error(d)}}return o}function eR(n,e,t,i,o){let a=function(...c){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(a=window[o]),window[o]=Z2(a,n,e,t),{gtagCore:a,wrappedGtag:window[o]}}function tR(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Qp)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=30,rR=1e3;class iR{constructor(e={},t=rR){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Kw=new iR;function sR(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function oR(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:sR(i)},a=H2.replace("{app-id}",t),c=await fetch(a,o);if(c.status!==200&&c.status!==304){let d="";try{const f=await c.json();!((e=f.error)===null||e===void 0)&&e.message&&(d=f.error.message)}catch{}throw pn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function aR(n,e=Kw,t){const{appId:i,apiKey:o,measurementId:a}=n.options;if(!i)throw pn.create("no-app-id");if(!o){if(a)return{measurementId:a,appId:i};throw pn.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new cR;return setTimeout(async()=>{d.abort()},$2),Qw({appId:i,apiKey:o,measurementId:a},c,d,e)}async function Qw(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=Kw){var a;const{appId:c,measurementId:d}=n;try{await lR(i,e)}catch(f){if(d)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`),{appId:c,measurementId:d};throw f}try{const f=await oR(n);return o.deleteThrottleMetadata(c),f}catch(f){const g=f;if(!uR(g)){if(o.deleteThrottleMetadata(c),d)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:c,measurementId:d};throw f}const _=Number((a=g?.customData)===null||a===void 0?void 0:a.httpStatus)===503?Qy(t,o.intervalMillis,nR):Qy(t,o.intervalMillis),w={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return o.setThrottleMetadata(c,w),sn.debug(`Calling attemptFetch again in ${_} millis`),Qw(n,w,i,o)}}function lR(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),a=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(a),i(pn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function uR(n){if(!(n instanceof Yn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class cR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function hR(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const a=await e,c=Object.assign(Object.assign({},i),{send_to:a});n("event",t,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(){if(Rp())try{await Pp()}catch(n){return sn.warn(pn.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return sn.warn(pn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fR(n,e,t,i,o,a,c){var d;const f=aR(n);f.then(R=>{t[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>sn.error(R)),e.push(f);const g=dR().then(R=>{if(R)return i.getId()}),[_,w]=await Promise.all([f,g]);tR(a)||Q2(a,_.measurementId),o("js",new Date);const T=(d=c?.config)!==null&&d!==void 0?d:{};return T[q2]="firebase",T.update=!0,w!=null&&(T[z2]=w),o("config",_.measurementId,T),_.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.app=e}_delete(){return delete cl[this.app.options.appId],Promise.resolve()}}let cl={},Cv=[];const Rv={};let af="dataLayer",gR="gtag",Pv,Yw,xv=!1;function mR(){const n=[];if(Cp()&&n.push("This is a browser extension environment."),O_()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=pn.create("invalid-analytics-context",{errorInfo:e});sn.warn(t.message)}}function yR(n,e,t){mR();const i=n.options.appId;if(!i)throw pn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pn.create("no-api-key");if(cl[i]!=null)throw pn.create("already-exists",{id:i});if(!xv){Y2(af);const{wrappedGtag:a,gtagCore:c}=eR(cl,Cv,Rv,af,gR);Yw=a,Pv=c,xv=!0}return cl[i]=fR(n,Cv,Rv,e,Pv,af,t),new pR(n)}function vR(n=Np()){n=it(n);const e=Rs(n,Nc);return e.isInitialized()?e.getImmediate():_R(n)}function _R(n,e={}){const t=Rs(n,Nc);if(t.isInitialized()){const o=t.getImmediate();if(mr(e,t.getOptions()))return o;throw pn.create("already-initialized")}return t.initialize({options:e})}async function wR(){if(Cp()||!O_()||!Rp())return!1;try{return await Pp()}catch{return!1}}function ER(n,e,t,i){n=it(n),hR(Yw,cl[n.app.options.appId],e,t,i).catch(o=>sn.error(o))}const Nv="@firebase/analytics",bv="0.10.17";function TR(){yr(new Kn(Nc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return yR(i,o,t)},"PUBLIC")),yr(new Kn("analytics-internal",n,"PRIVATE")),Rn(Nv,bv),Rn(Nv,bv,"esm2017");function n(e){try{const t=e.getProvider(Nc).getImmediate();return{logEvent:(i,o,a)=>ER(t,i,o,a)}}catch(t){throw pn.create("interop-component-reg-failed",{reason:t})}}}TR();var Dv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ri,Jw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function A(){}A.prototype=I.prototype,P.D=I.prototype,P.prototype=new A,P.prototype.constructor=P,P.C=function(N,b,D){for(var C=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)C[Z-2]=arguments[Z];return I.prototype[b].apply(N,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,I,A){A||(A=0);var N=Array(16);if(typeof I=="string")for(var b=0;16>b;++b)N[b]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(b=0;16>b;++b)N[b]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=P.g[0],A=P.g[1],b=P.g[2];var D=P.g[3],C=I+(D^A&(b^D))+N[0]+3614090360&4294967295;I=A+(C<<7&4294967295|C>>>25),C=D+(b^I&(A^b))+N[1]+3905402710&4294967295,D=I+(C<<12&4294967295|C>>>20),C=b+(A^D&(I^A))+N[2]+606105819&4294967295,b=D+(C<<17&4294967295|C>>>15),C=A+(I^b&(D^I))+N[3]+3250441966&4294967295,A=b+(C<<22&4294967295|C>>>10),C=I+(D^A&(b^D))+N[4]+4118548399&4294967295,I=A+(C<<7&4294967295|C>>>25),C=D+(b^I&(A^b))+N[5]+1200080426&4294967295,D=I+(C<<12&4294967295|C>>>20),C=b+(A^D&(I^A))+N[6]+2821735955&4294967295,b=D+(C<<17&4294967295|C>>>15),C=A+(I^b&(D^I))+N[7]+4249261313&4294967295,A=b+(C<<22&4294967295|C>>>10),C=I+(D^A&(b^D))+N[8]+1770035416&4294967295,I=A+(C<<7&4294967295|C>>>25),C=D+(b^I&(A^b))+N[9]+2336552879&4294967295,D=I+(C<<12&4294967295|C>>>20),C=b+(A^D&(I^A))+N[10]+4294925233&4294967295,b=D+(C<<17&4294967295|C>>>15),C=A+(I^b&(D^I))+N[11]+2304563134&4294967295,A=b+(C<<22&4294967295|C>>>10),C=I+(D^A&(b^D))+N[12]+1804603682&4294967295,I=A+(C<<7&4294967295|C>>>25),C=D+(b^I&(A^b))+N[13]+4254626195&4294967295,D=I+(C<<12&4294967295|C>>>20),C=b+(A^D&(I^A))+N[14]+2792965006&4294967295,b=D+(C<<17&4294967295|C>>>15),C=A+(I^b&(D^I))+N[15]+1236535329&4294967295,A=b+(C<<22&4294967295|C>>>10),C=I+(b^D&(A^b))+N[1]+4129170786&4294967295,I=A+(C<<5&4294967295|C>>>27),C=D+(A^b&(I^A))+N[6]+3225465664&4294967295,D=I+(C<<9&4294967295|C>>>23),C=b+(I^A&(D^I))+N[11]+643717713&4294967295,b=D+(C<<14&4294967295|C>>>18),C=A+(D^I&(b^D))+N[0]+3921069994&4294967295,A=b+(C<<20&4294967295|C>>>12),C=I+(b^D&(A^b))+N[5]+3593408605&4294967295,I=A+(C<<5&4294967295|C>>>27),C=D+(A^b&(I^A))+N[10]+38016083&4294967295,D=I+(C<<9&4294967295|C>>>23),C=b+(I^A&(D^I))+N[15]+3634488961&4294967295,b=D+(C<<14&4294967295|C>>>18),C=A+(D^I&(b^D))+N[4]+3889429448&4294967295,A=b+(C<<20&4294967295|C>>>12),C=I+(b^D&(A^b))+N[9]+568446438&4294967295,I=A+(C<<5&4294967295|C>>>27),C=D+(A^b&(I^A))+N[14]+3275163606&4294967295,D=I+(C<<9&4294967295|C>>>23),C=b+(I^A&(D^I))+N[3]+4107603335&4294967295,b=D+(C<<14&4294967295|C>>>18),C=A+(D^I&(b^D))+N[8]+1163531501&4294967295,A=b+(C<<20&4294967295|C>>>12),C=I+(b^D&(A^b))+N[13]+2850285829&4294967295,I=A+(C<<5&4294967295|C>>>27),C=D+(A^b&(I^A))+N[2]+4243563512&4294967295,D=I+(C<<9&4294967295|C>>>23),C=b+(I^A&(D^I))+N[7]+1735328473&4294967295,b=D+(C<<14&4294967295|C>>>18),C=A+(D^I&(b^D))+N[12]+2368359562&4294967295,A=b+(C<<20&4294967295|C>>>12),C=I+(A^b^D)+N[5]+4294588738&4294967295,I=A+(C<<4&4294967295|C>>>28),C=D+(I^A^b)+N[8]+2272392833&4294967295,D=I+(C<<11&4294967295|C>>>21),C=b+(D^I^A)+N[11]+1839030562&4294967295,b=D+(C<<16&4294967295|C>>>16),C=A+(b^D^I)+N[14]+4259657740&4294967295,A=b+(C<<23&4294967295|C>>>9),C=I+(A^b^D)+N[1]+2763975236&4294967295,I=A+(C<<4&4294967295|C>>>28),C=D+(I^A^b)+N[4]+1272893353&4294967295,D=I+(C<<11&4294967295|C>>>21),C=b+(D^I^A)+N[7]+4139469664&4294967295,b=D+(C<<16&4294967295|C>>>16),C=A+(b^D^I)+N[10]+3200236656&4294967295,A=b+(C<<23&4294967295|C>>>9),C=I+(A^b^D)+N[13]+681279174&4294967295,I=A+(C<<4&4294967295|C>>>28),C=D+(I^A^b)+N[0]+3936430074&4294967295,D=I+(C<<11&4294967295|C>>>21),C=b+(D^I^A)+N[3]+3572445317&4294967295,b=D+(C<<16&4294967295|C>>>16),C=A+(b^D^I)+N[6]+76029189&4294967295,A=b+(C<<23&4294967295|C>>>9),C=I+(A^b^D)+N[9]+3654602809&4294967295,I=A+(C<<4&4294967295|C>>>28),C=D+(I^A^b)+N[12]+3873151461&4294967295,D=I+(C<<11&4294967295|C>>>21),C=b+(D^I^A)+N[15]+530742520&4294967295,b=D+(C<<16&4294967295|C>>>16),C=A+(b^D^I)+N[2]+3299628645&4294967295,A=b+(C<<23&4294967295|C>>>9),C=I+(b^(A|~D))+N[0]+4096336452&4294967295,I=A+(C<<6&4294967295|C>>>26),C=D+(A^(I|~b))+N[7]+1126891415&4294967295,D=I+(C<<10&4294967295|C>>>22),C=b+(I^(D|~A))+N[14]+2878612391&4294967295,b=D+(C<<15&4294967295|C>>>17),C=A+(D^(b|~I))+N[5]+4237533241&4294967295,A=b+(C<<21&4294967295|C>>>11),C=I+(b^(A|~D))+N[12]+1700485571&4294967295,I=A+(C<<6&4294967295|C>>>26),C=D+(A^(I|~b))+N[3]+2399980690&4294967295,D=I+(C<<10&4294967295|C>>>22),C=b+(I^(D|~A))+N[10]+4293915773&4294967295,b=D+(C<<15&4294967295|C>>>17),C=A+(D^(b|~I))+N[1]+2240044497&4294967295,A=b+(C<<21&4294967295|C>>>11),C=I+(b^(A|~D))+N[8]+1873313359&4294967295,I=A+(C<<6&4294967295|C>>>26),C=D+(A^(I|~b))+N[15]+4264355552&4294967295,D=I+(C<<10&4294967295|C>>>22),C=b+(I^(D|~A))+N[6]+2734768916&4294967295,b=D+(C<<15&4294967295|C>>>17),C=A+(D^(b|~I))+N[13]+1309151649&4294967295,A=b+(C<<21&4294967295|C>>>11),C=I+(b^(A|~D))+N[4]+4149444226&4294967295,I=A+(C<<6&4294967295|C>>>26),C=D+(A^(I|~b))+N[11]+3174756917&4294967295,D=I+(C<<10&4294967295|C>>>22),C=b+(I^(D|~A))+N[2]+718787259&4294967295,b=D+(C<<15&4294967295|C>>>17),C=A+(D^(b|~I))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(b+(C<<21&4294967295|C>>>11))&4294967295,P.g[2]=P.g[2]+b&4294967295,P.g[3]=P.g[3]+D&4294967295}i.prototype.u=function(P,I){I===void 0&&(I=P.length);for(var A=I-this.blockSize,N=this.B,b=this.h,D=0;D<I;){if(b==0)for(;D<=A;)o(this,P,D),D+=this.blockSize;if(typeof P=="string"){for(;D<I;)if(N[b++]=P.charCodeAt(D++),b==this.blockSize){o(this,N),b=0;break}}else for(;D<I;)if(N[b++]=P[D++],b==this.blockSize){o(this,N),b=0;break}}this.h=b,this.o+=I},i.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;var A=8*this.o;for(I=P.length-8;I<P.length;++I)P[I]=A&255,A/=256;for(this.u(P),P=Array(16),I=A=0;4>I;++I)for(var N=0;32>N;N+=8)P[A++]=this.g[I]>>>N&255;return P};function a(P,I){var A=d;return Object.prototype.hasOwnProperty.call(A,P)?A[P]:A[P]=I(P)}function c(P,I){this.h=I;for(var A=[],N=!0,b=P.length-1;0<=b;b--){var D=P[b]|0;N&&D==I||(A[b]=D,N=!1)}this.g=A}var d={};function f(P){return-128<=P&&128>P?a(P,function(I){return new c([I|0],0>I?-1:0)}):new c([P|0],0>P?-1:0)}function g(P){if(isNaN(P)||!isFinite(P))return w;if(0>P)return L(g(-P));for(var I=[],A=1,N=0;P>=A;N++)I[N]=P/A|0,A*=4294967296;return new c(I,0)}function _(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return L(_(P.substring(1),I));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=g(Math.pow(I,8)),N=w,b=0;b<P.length;b+=8){var D=Math.min(8,P.length-b),C=parseInt(P.substring(b,b+D),I);8>D?(D=g(Math.pow(I,D)),N=N.j(D).add(g(C))):(N=N.j(A),N=N.add(g(C)))}return N}var w=f(0),T=f(1),R=f(16777216);n=c.prototype,n.m=function(){if(V(this))return-L(this).m();for(var P=0,I=1,A=0;A<this.g.length;A++){var N=this.i(A);P+=(0<=N?N:4294967296+N)*I,I*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(M(this))return"0";if(V(this))return"-"+L(this).toString(P);for(var I=g(Math.pow(P,6)),A=this,N="";;){var b=Q(A,I).g;A=$(A,b.j(I));var D=((0<A.g.length?A.g[0]:A.h)>>>0).toString(P);if(A=b,M(A))return D+N;for(;6>D.length;)D="0"+D;N=D+N}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function M(P){if(P.h!=0)return!1;for(var I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function V(P){return P.h==-1}n.l=function(P){return P=$(this,P),V(P)?-1:M(P)?0:1};function L(P){for(var I=P.g.length,A=[],N=0;N<I;N++)A[N]=~P.g[N];return new c(A,~P.h).add(T)}n.abs=function(){return V(this)?L(this):this},n.add=function(P){for(var I=Math.max(this.g.length,P.g.length),A=[],N=0,b=0;b<=I;b++){var D=N+(this.i(b)&65535)+(P.i(b)&65535),C=(D>>>16)+(this.i(b)>>>16)+(P.i(b)>>>16);N=C>>>16,D&=65535,C&=65535,A[b]=C<<16|D}return new c(A,A[A.length-1]&-2147483648?-1:0)};function $(P,I){return P.add(L(I))}n.j=function(P){if(M(this)||M(P))return w;if(V(this))return V(P)?L(this).j(L(P)):L(L(this).j(P));if(V(P))return L(this.j(L(P)));if(0>this.l(R)&&0>P.l(R))return g(this.m()*P.m());for(var I=this.g.length+P.g.length,A=[],N=0;N<2*I;N++)A[N]=0;for(N=0;N<this.g.length;N++)for(var b=0;b<P.g.length;b++){var D=this.i(N)>>>16,C=this.i(N)&65535,Z=P.i(b)>>>16,Ce=P.i(b)&65535;A[2*N+2*b]+=C*Ce,G(A,2*N+2*b),A[2*N+2*b+1]+=D*Ce,G(A,2*N+2*b+1),A[2*N+2*b+1]+=C*Z,G(A,2*N+2*b+1),A[2*N+2*b+2]+=D*Z,G(A,2*N+2*b+2)}for(N=0;N<I;N++)A[N]=A[2*N+1]<<16|A[2*N];for(N=I;N<2*I;N++)A[N]=0;return new c(A,0)};function G(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function W(P,I){this.g=P,this.h=I}function Q(P,I){if(M(I))throw Error("division by zero");if(M(P))return new W(w,w);if(V(P))return I=Q(L(P),I),new W(L(I.g),L(I.h));if(V(I))return I=Q(P,L(I)),new W(L(I.g),I.h);if(30<P.g.length){if(V(P)||V(I))throw Error("slowDivide_ only works with positive integers.");for(var A=T,N=I;0>=N.l(P);)A=re(A),N=re(N);var b=K(A,1),D=K(N,1);for(N=K(N,2),A=K(A,2);!M(N);){var C=D.add(N);0>=C.l(P)&&(b=b.add(A),D=C),N=K(N,1),A=K(A,1)}return I=$(P,b.j(I)),new W(b,I)}for(b=w;0<=P.l(I);){for(A=Math.max(1,Math.floor(P.m()/I.m())),N=Math.ceil(Math.log(A)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),D=g(A),C=D.j(I);V(C)||0<C.l(P);)A-=N,D=g(A),C=D.j(I);M(D)&&(D=T),b=b.add(D),P=$(P,C)}return new W(b,P)}n.A=function(P){return Q(this,P).h},n.and=function(P){for(var I=Math.max(this.g.length,P.g.length),A=[],N=0;N<I;N++)A[N]=this.i(N)&P.i(N);return new c(A,this.h&P.h)},n.or=function(P){for(var I=Math.max(this.g.length,P.g.length),A=[],N=0;N<I;N++)A[N]=this.i(N)|P.i(N);return new c(A,this.h|P.h)},n.xor=function(P){for(var I=Math.max(this.g.length,P.g.length),A=[],N=0;N<I;N++)A[N]=this.i(N)^P.i(N);return new c(A,this.h^P.h)};function re(P){for(var I=P.g.length+1,A=[],N=0;N<I;N++)A[N]=P.i(N)<<1|P.i(N-1)>>>31;return new c(A,P.h)}function K(P,I){var A=I>>5;I%=32;for(var N=P.g.length-A,b=[],D=0;D<N;D++)b[D]=0<I?P.i(D+A)>>>I|P.i(D+A+1)<<32-I:P.i(D+A);return new c(b,P.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Jw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=_,Ri=c}).apply(typeof Dv<"u"?Dv:typeof self<"u"?self:typeof window<"u"?window:{});var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xw,il,Zw,pc,lp,e1,t1,n1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof tc=="object"&&tc];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var k=0;k<u.length-1;k++){var U=u[k];if(!(U in v))break e;v=v[U]}u=u[u.length-1],k=v[u],m=m(k),m!=k&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function a(u,m){u instanceof String&&(u+="");var v=0,k=!1,U={next:function(){if(!k&&v<u.length){var H=v++;return{value:m(H,u[H]),done:!1}}return k=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return a(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function f(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function g(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function _(u,m,v){return u.call.apply(u.bind,arguments)}function w(u,m,v){if(!u)throw Error();if(2<arguments.length){var k=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,k),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function T(u,m,v){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,T.apply(null,arguments)}function R(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var k=v.slice();return k.push.apply(k,arguments),u.apply(this,k)}}function M(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(k,U,H){for(var oe=Array(arguments.length-2),He=2;He<arguments.length;He++)oe[He-2]=arguments[He];return m.prototype[U].apply(k,oe)}}function V(u){const m=u.length;if(0<m){const v=Array(m);for(let k=0;k<m;k++)v[k]=u[k];return v}return[]}function L(u,m){for(let v=1;v<arguments.length;v++){const k=arguments[v];if(f(k)){const U=u.length||0,H=k.length||0;u.length=U+H;for(let oe=0;oe<H;oe++)u[U+oe]=k[oe]}else u.push(k)}}class ${constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function G(u){return/^[\s\xa0]*$/.test(u)}function W(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function Q(u){return Q[" "](u),u}Q[" "]=function(){};var re=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function K(u,m,v){for(const k in u)m.call(v,u[k],k,u)}function P(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function I(u){const m={};for(const v in u)m[v]=u[v];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let v,k;for(let U=1;U<arguments.length;U++){k=arguments[U];for(v in k)u[v]=k[v];for(let H=0;H<A.length;H++)v=A[H],Object.prototype.hasOwnProperty.call(k,v)&&(u[v]=k[v])}}function b(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function D(u){d.setTimeout(()=>{throw u},0)}function C(){var u=ye;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Z{constructor(){this.h=this.g=null}add(m,v){const k=Ce.get();k.set(m,v),this.h?this.h.next=k:this.g=k,this.h=k}}var Ce=new $(()=>new Pe,u=>u.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,ie=!1,ye=new Z,le=()=>{const u=d.Promise.resolve(void 0);xe=()=>{u.then(j)}};var j=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(v){D(v)}var m=Ce;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ie=!1};function J(){this.s=this.s,this.C=this.C}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var be=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};d.addEventListener("test",v,m),d.removeEventListener("test",v,m)}catch{}return u})();function ae(u,m){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,k=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(re){e:{try{Q(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,k?(this.clientX=k.clientX!==void 0?k.clientX:k.pageX,this.clientY=k.clientY!==void 0?k.clientY:k.pageY,this.screenX=k.screenX||0,this.screenY=k.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Te[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&ae.aa.h.call(this)}}M(ae,pe);var Te={2:"touch",3:"pen",4:"mouse"};ae.prototype.h=function(){ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ie="closure_listenable_"+(1e6*Math.random()|0),Se=0;function Be(u,m,v,k,U){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!k,this.ha=U,this.key=++Se,this.da=this.fa=!1}function ot(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Tr(u){this.src=u,this.g={},this.h=0}Tr.prototype.add=function(u,m,v,k,U){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var oe=Qr(u,m,k,U);return-1<oe?(m=u[oe],v||(m.fa=!1)):(m=new Be(m,this.src,H,!!k,U),m.fa=v,u.push(m)),m};function Ms(u,m){var v=m.type;if(v in u.g){var k=u.g[v],U=Array.prototype.indexOf.call(k,m,void 0),H;(H=0<=U)&&Array.prototype.splice.call(k,U,1),H&&(ot(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Qr(u,m,v,k){for(var U=0;U<u.length;++U){var H=u[U];if(!H.da&&H.listener==m&&H.capture==!!v&&H.ha==k)return U}return-1}var Ui="closure_lm_"+(1e6*Math.random()|0),Os={};function oa(u,m,v,k,U){if(Array.isArray(m)){for(var H=0;H<m.length;H++)oa(u,m[H],v,k,U);return null}return v=ua(v),u&&u[Ie]?u.K(m,v,g(k)?!!k.capture:!1,U):aa(u,m,v,!1,k,U)}function aa(u,m,v,k,U,H){if(!m)throw Error("Invalid event type");var oe=g(U)?!!U.capture:!!U,He=Vs(u);if(He||(u[Ui]=He=new Tr(u)),v=He.add(m,v,k,oe,H),v.proxy)return v;if(k=Fl(),v.proxy=k,k.src=u,k.listener=v,u.addEventListener)be||(U=oe),U===void 0&&(U=!1),u.addEventListener(m.toString(),k,U);else if(u.attachEvent)u.attachEvent(Sr(m.toString()),k);else if(u.addListener&&u.removeListener)u.addListener(k);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Fl(){function u(v){return m.call(u.src,u.listener,v)}const m=la;return u}function Ls(u,m,v,k,U){if(Array.isArray(m))for(var H=0;H<m.length;H++)Ls(u,m[H],v,k,U);else k=g(k)?!!k.capture:!!k,v=ua(v),u&&u[Ie]?(u=u.i,m=String(m).toString(),m in u.g&&(H=u.g[m],v=Qr(H,v,k,U),-1<v&&(ot(H[v]),Array.prototype.splice.call(H,v,1),H.length==0&&(delete u.g[m],u.h--)))):u&&(u=Vs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Qr(m,v,k,U)),(v=-1<u?m[u]:null)&&Ir(v))}function Ir(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ie])Ms(m.i,u);else{var v=u.type,k=u.proxy;m.removeEventListener?m.removeEventListener(v,k,u.capture):m.detachEvent?m.detachEvent(Sr(v),k):m.addListener&&m.removeListener&&m.removeListener(k),(v=Vs(m))?(Ms(v,u),v.h==0&&(v.src=null,m[Ui]=null)):ot(u)}}}function Sr(u){return u in Os?Os[u]:Os[u]="on"+u}function la(u,m){if(u.da)u=!0;else{m=new ae(m,this);var v=u.listener,k=u.ha||u.src;u.fa&&Ir(u),u=v.call(k,m)}return u}function Vs(u){return u=u[Ui],u instanceof Tr?u:null}var Fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ua(u){return typeof u=="function"?u:(u[Fs]||(u[Fs]=function(m){return u.handleEvent(m)}),u[Fs])}function yt(){J.call(this),this.i=new Tr(this),this.M=this,this.F=null}M(yt,J),yt.prototype[Ie]=!0,yt.prototype.removeEventListener=function(u,m,v,k){Ls(this,u,m,v,k)};function vt(u,m){var v,k=u.F;if(k)for(v=[];k;k=k.F)v.push(k);if(u=u.M,k=m.type||m,typeof m=="string")m=new pe(m,u);else if(m instanceof pe)m.target=m.target||u;else{var U=m;m=new pe(k,u),N(m,U)}if(U=!0,v)for(var H=v.length-1;0<=H;H--){var oe=m.g=v[H];U=kr(oe,k,!0,m)&&U}if(oe=m.g=u,U=kr(oe,k,!0,m)&&U,U=kr(oe,k,!1,m)&&U,v)for(H=0;H<v.length;H++)oe=m.g=v[H],U=kr(oe,k,!1,m)&&U}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],k=0;k<v.length;k++)ot(v[k]);delete u.g[m],u.h--}}this.F=null},yt.prototype.K=function(u,m,v,k){return this.i.add(String(u),m,!1,v,k)},yt.prototype.L=function(u,m,v,k){return this.i.add(String(u),m,!0,v,k)};function kr(u,m,v,k){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,H=0;H<m.length;++H){var oe=m[H];if(oe&&!oe.da&&oe.capture==v){var He=oe.listener,_t=oe.ha||oe.src;oe.fa&&Ms(u.i,oe),U=He.call(_t,k)!==!1&&U}}return U&&!k.defaultPrevented}function ca(u,m,v){if(typeof u=="function")v&&(u=T(u,v));else if(u&&typeof u.handleEvent=="function")u=T(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function Yr(u){u.g=ca(()=>{u.g=null,u.i&&(u.i=!1,Yr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Bi extends J{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Yr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zi(u){J.call(this),this.h=u,this.g={}}M(zi,J);var ha=[];function da(u){K(u.g,function(m,v){this.g.hasOwnProperty(v)&&Ir(m)},u),u.g={}}zi.prototype.N=function(){zi.aa.N.call(this),da(this)},zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fa=d.JSON.stringify,pa=d.JSON.parse,ga=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function qi(){}qi.prototype.h=null;function js(u){return u.h||(u.h=u.i())}function Us(){}var yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Jn(){pe.call(this,"d")}M(Jn,pe);function Bs(){pe.call(this,"c")}M(Bs,pe);var Xn={},ma=null;function $i(){return ma=ma||new yt}Xn.La="serverreachability";function ya(u){pe.call(this,Xn.La,u)}M(ya,pe);function Ar(u){const m=$i();vt(m,new ya(m))}Xn.STAT_EVENT="statevent";function va(u,m){pe.call(this,Xn.STAT_EVENT,u),this.stat=m}M(va,pe);function lt(u){const m=$i();vt(m,new va(m,u))}Xn.Ma="timingevent";function zs(u,m){pe.call(this,Xn.Ma,u),this.size=m}M(zs,pe);function Nn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Hi(){this.g=!0}Hi.prototype.xa=function(){this.g=!1};function Wi(u,m,v,k,U,H){u.info(function(){if(u.g)if(H)for(var oe="",He=H.split("&"),_t=0;_t<He.length;_t++){var je=He[_t].split("=");if(1<je.length){var It=je[0];je=je[1];var dt=It.split("_");oe=2<=dt.length&&dt[1]=="type"?oe+(It+"="+je+"&"):oe+(It+"=redacted&")}}else oe=null;else oe=H;return"XMLHTTP REQ ("+k+") [attempt "+U+"]: "+m+`
`+v+`
`+oe})}function qs(u,m,v,k,U,H,oe){u.info(function(){return"XMLHTTP RESP ("+k+") [ attempt "+U+"]: "+m+`
`+v+`
`+H+" "+oe})}function bn(u,m,v,k){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+wh(u,v)+(k?" "+k:"")})}function _a(u,m){u.info(function(){return"TIMEOUT: "+m})}Hi.prototype.info=function(){};function wh(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var k=v[u];if(!(2>k.length)){var U=k[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var oe=1;oe<U.length;oe++)U[oe]=""}}}}return fa(v)}catch{return m}}var $s={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dn;function Gi(){}M(Gi,qi),Gi.prototype.g=function(){return new XMLHttpRequest},Gi.prototype.i=function(){return{}},Dn=new Gi;function Mn(u,m,v,k){this.j=u,this.i=m,this.l=v,this.R=k||1,this.U=new zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ul}function Ul(){this.i=null,this.g="",this.h=!1}var wa={},Hs={};function Ws(u,m,v){u.L=1,u.v=ti(an(m)),u.m=v,u.P=!0,Ea(u,null)}function Ea(u,m){u.F=Date.now(),Ge(u),u.A=an(u.v);var v=u.A,k=u.R;Array.isArray(k)||(k=[String(k)]),ri(v.i,"t",k),u.C=0,v=u.j.J,u.h=new Ul,u.g=iu(u.j,v?m:null,!u.m),0<u.O&&(u.M=new Bi(T(u.Y,u,u.g),u.O)),m=u.U,v=u.g,k=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(ha[0]=U.toString()),U=ha);for(var H=0;H<U.length;H++){var oe=oa(v,U[H],k||m.handleEvent,!1,m.h||m);if(!oe)break;m.g[oe.key]=oe}m=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Ar(),Wi(u.i,u.u,u.A,u.l,u.R,u.m)}Mn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Kt(u)==3?m.j():this.Y(u)},Mn.prototype.Y=function(u){try{if(u==this.g)e:{const dt=Kt(this.g);var m=this.g.Ba();const wn=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||Ca(this.g)))){this.J||dt!=4||m==7||(m==8||0>=wn?Ar(3):Ar(2)),Ki(this);var v=this.g.Z();this.X=v;t:if(Bl(this)){var k=Ca(this.g);u="";var U=k.length,H=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vn(this),Jr(this);var oe="";break t}this.h.i=new d.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(k[m],{stream:!(H&&m==U-1)});k.length=0,this.h.g+=u,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=v==200,qs(this.i,this.u,this.A,this.l,this.R,dt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var He,_t=this.g;if((He=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(He)){var je=He;break t}}je=null}if(v=je)bn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ta(this,v);else{this.o=!1,this.s=3,lt(12),vn(this),Jr(this);break e}}if(this.P){v=!0;let un;for(;!this.J&&this.C<oe.length;)if(un=Eh(this,oe),un==Hs){dt==4&&(this.s=4,lt(14),v=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(un==wa){this.s=4,lt(15),bn(this.i,this.l,oe,"[Invalid Chunk]"),v=!1;break}else bn(this.i,this.l,un,null),Ta(this,un);if(Bl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||oe.length!=0||this.h.h||(this.s=1,lt(16),v=!1),this.o=this.o&&v,!v)bn(this.i,this.l,oe,"[Invalid Chunked Response]"),vn(this),Jr(this);else if(0<oe.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),Pa(It),It.M=!0,lt(11))}}else bn(this.i,this.l,oe,null),Ta(this,oe);dt==4&&vn(this),this.o&&!this.J&&(dt==4?ro(this.j,this):(this.o=!1,Ge(this)))}else Xs(this.g),v==400&&0<oe.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),vn(this),Jr(this)}}}catch{}finally{}};function Bl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Eh(u,m){var v=u.C,k=m.indexOf(`
`,v);return k==-1?Hs:(v=Number(m.substring(v,k)),isNaN(v)?wa:(k+=1,k+v>m.length?Hs:(m=m.slice(k,k+v),u.C=k+v,m)))}Mn.prototype.cancel=function(){this.J=!0,vn(this)};function Ge(u){u.S=Date.now()+u.I,zl(u,u.I)}function zl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Nn(T(u.ba,u),m)}function Ki(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Mn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(_a(this.i,this.A),this.L!=2&&(Ar(),lt(17)),vn(this),this.s=2,Jr(this)):zl(this,this.S-u)};function Jr(u){u.j.G==0||u.J||ro(u.j,u)}function vn(u){Ki(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,da(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Ta(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||qt(v.h,u))){if(!u.K&&qt(v.h,u)&&v.G==3){try{var k=v.Da.g.parse(m)}catch{k=null}if(Array.isArray(k)&&k.length==3){var U=k;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)no(v),jn(v);else break e;to(v),lt(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=Nn(T(v.Za,v),6e3));if(1>=$l(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Nr(v,11)}else if((u.K||v.g==u)&&no(v),!G(m))for(U=v.Da.g.parse(m),m=0;m<U.length;m++){let je=U[m];if(v.T=je[0],je=je[1],v.G==2)if(je[0]=="c"){v.K=je[1],v.ia=je[2];const It=je[3];It!=null&&(v.la=It,v.j.info("VER="+v.la));const dt=je[4];dt!=null&&(v.Aa=dt,v.j.info("SVER="+v.Aa));const wn=je[5];wn!=null&&typeof wn=="number"&&0<wn&&(k=1.5*wn,v.L=k,v.j.info("backChannelRequestTimeoutMs_="+k)),k=v;const un=u.g;if(un){const ts=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ts){var H=k.h;H.g||ts.indexOf("spdy")==-1&&ts.indexOf("quic")==-1&&ts.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Ia(H,H.h),H.h=null))}if(k.D){const so=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;so&&(k.ya=so,We(k.I,k.D,so))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),k=v;var oe=u;if(k.qa=ru(k,k.J?k.ia:null,k.W),oe.K){Hl(k.h,oe);var He=oe,_t=k.L;_t&&(He.I=_t),He.B&&(Ki(He),Ge(He)),k.g=oe}else es(k);0<v.i.length&&nr(v)}else je[0]!="stop"&&je[0]!="close"||Nr(v,7);else v.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?Nr(v,7):Pt(v):je[0]!="noop"&&v.l&&v.l.ta(je),v.v=0)}}Ar(4)}catch{}}var ql=class{constructor(u,m){this.g=u,this.map=m}};function Qi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function on(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function $l(u){return u.h?1:u.g?u.g.size:0}function qt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Ia(u,m){u.g?u.g.add(m):u.h=m}function Hl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Qi.prototype.cancel=function(){if(this.i=Wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Wl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return V(u.i)}function Gs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(f(u)){for(var m=[],v=u.length,k=0;k<v;k++)m.push(u[k]);return m}m=[],v=0;for(k in u)m[v++]=u[k];return m}function Ks(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(f(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const k in u)m[v++]=k;return m}}}function Xr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(f(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=Ks(u),k=Gs(u),U=k.length,H=0;H<U;H++)m.call(void 0,k[H],v&&v[H],u)}var Yi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Th(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var k=u[v].indexOf("="),U=null;if(0<=k){var H=u[v].substring(0,k);U=u[v].substring(k+1)}else H=u[v];m(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Cr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Cr){this.h=u.h,Ji(this,u.j),this.o=u.o,this.g=u.g,Zr(this,u.s),this.l=u.l;var m=u.i,v=new Zn;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),ei(this,v),this.m=u.m}else u&&(m=String(u).match(Yi))?(this.h=!1,Ji(this,m[1]||"",!0),this.o=Fe(m[2]||""),this.g=Fe(m[3]||"",!0),Zr(this,m[4]),this.l=Fe(m[5]||"",!0),ei(this,m[6]||"",!0),this.m=Fe(m[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}Cr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ni(m,Qs,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ni(m,Qs,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(ni(v,v.charAt(0)=="/"?Ql:Kl,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",ni(v,Sa)),u.join("")};function an(u){return new Cr(u)}function Ji(u,m,v){u.j=v?Fe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Zr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ei(u,m,v){m instanceof Zn?(u.i=m,er(u.i,u.h)):(v||(m=ni(m,Yl)),u.i=new Zn(m,u.h))}function We(u,m,v){u.i.set(m,v)}function ti(u){return We(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Fe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ni(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,Gl),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Gl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Qs=/[#\/\?@]/g,Kl=/[#\?:]/g,Ql=/[#\?]/g,Yl=/[#\?@]/g,Sa=/#/g;function Zn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&Th(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=Zn.prototype,n.add=function(u,m){Rt(this),this.i=null,u=_n(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function On(u,m){Rt(u),m=_n(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ln(u,m){return Rt(u),m=_n(u,m),u.g.has(m)}n.forEach=function(u,m){Rt(this),this.g.forEach(function(v,k){v.forEach(function(U){u.call(m,U,k,this)},this)},this)},n.na=function(){Rt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let k=0;k<m.length;k++){const U=u[k];for(let H=0;H<U.length;H++)v.push(m[k])}return v},n.V=function(u){Rt(this);let m=[];if(typeof u=="string")Ln(this,u)&&(m=m.concat(this.g.get(_n(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return Rt(this),this.i=null,u=_n(this,u),Ln(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ri(u,m,v){On(u,m),0<v.length&&(u.i=null,u.g.set(_n(u,m),V(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var k=m[v];const H=encodeURIComponent(String(k)),oe=this.V(k);for(k=0;k<oe.length;k++){var U=H;oe[k]!==""&&(U+="="+encodeURIComponent(String(oe[k]))),u.push(U)}}return this.i=u.join("&")};function _n(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function er(u,m){m&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(v,k){var U=k.toLowerCase();k!=U&&(On(this,k),ri(this,U,v))},u)),u.j=m}function Ih(u,m){const v=new Hi;if(d.Image){const k=new Image;k.onload=R(Gt,v,"TestLoadImage: loaded",!0,m,k),k.onerror=R(Gt,v,"TestLoadImage: error",!1,m,k),k.onabort=R(Gt,v,"TestLoadImage: abort",!1,m,k),k.ontimeout=R(Gt,v,"TestLoadImage: timeout",!1,m,k),d.setTimeout(function(){k.ontimeout&&k.ontimeout()},1e4),k.src=u}else m(!1)}function Jl(u,m){const v=new Hi,k=new AbortController,U=setTimeout(()=>{k.abort(),Gt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:k.signal}).then(H=>{clearTimeout(U),H.ok?Gt(v,"TestPingServer: ok",!0,m):Gt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Gt(v,"TestPingServer: error",!1,m)})}function Gt(u,m,v,k,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),k(v)}catch{}}function Sh(){this.g=new ga}function Xl(u,m,v){const k=v||"";try{Xr(u,function(U,H){let oe=U;g(U)&&(oe=fa(U)),m.push(k+H+"="+encodeURIComponent(oe))})}catch(U){throw m.push(k+"type="+encodeURIComponent("_badmap")),U}}function Rr(u){this.l=u.Ub||null,this.j=u.eb||!1}M(Rr,qi),Rr.prototype.g=function(){return new Xi(this.l,this.j)},Rr.prototype.i=(function(u){return function(){return u}})({});function Xi(u,m){yt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(Xi,yt),n=Xi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Fn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Zl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Zl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Vn(this):Fn(this),this.readyState==3&&Zl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Vn(this))},n.Qa=function(u){this.g&&(this.response=u,Vn(this))},n.ga=function(){this.g&&Vn(this)};function Vn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Fn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function Fn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Pr(u){let m="";return K(u,function(v,k){m+=k,m+=":",m+=v,m+=`\r
`}),m}function ii(u,m,v){e:{for(k in v){var k=!1;break e}k=!0}k||(v=Pr(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):We(u,m,v))}function Ze(u){yt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(Ze,yt);var kh=/^https?$/i,ka=["POST","PUT"];n=Ze.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,k){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dn.g(),this.v=this.o?js(this.o):js(Dn),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(H){Zi(this,H);return}if(u=v||"",v=new Map(this.headers),k)if(Object.getPrototypeOf(k)===Object.prototype)for(var U in k)v.set(U,k[U]);else if(typeof k.keys=="function"&&typeof k.get=="function")for(const H of k.keys())v.set(H,k.get(H));else throw Error("Unknown input type for opt_headers: "+String(k));k=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),U=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ka,m,void 0))||k||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,oe]of v)this.g.setRequestHeader(H,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Js(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){Zi(this,H)}};function Zi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Ys(u),ln(u)}function Ys(u){u.A||(u.A=!0,vt(u,"complete"),vt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,vt(this,"complete"),vt(this,"abort"),ln(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ln(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Aa(this):this.bb())},n.bb=function(){Aa(this)};function Aa(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Kt(u)!=4||u.Z()!=2)){if(u.u&&Kt(u)==4)ca(u.Ea,0,u);else if(vt(u,"readystatechange"),Kt(u)==4){u.h=!1;try{const oe=u.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var k;if(k=oe===0){var U=String(u.D).match(Yi)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),k=!kh.test(U?U.toLowerCase():"")}v=k}if(v)vt(u,"complete"),vt(u,"success");else{u.m=6;try{var H=2<Kt(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",Ys(u)}}finally{ln(u)}}}}function ln(u,m){if(u.g){Js(u);const v=u.g,k=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||vt(u,"ready");try{v.onreadystatechange=k}catch{}}}function Js(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Kt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),pa(m)}};function Ca(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Xs(u){const m={};u=(u.g&&2<=Kt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let k=0;k<u.length;k++){if(G(u[k]))continue;var v=b(u[k]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=m[U]||[];m[U]=H,H.push(v)}P(m,function(k){return k.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function tr(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function Ra(u){this.Aa=0,this.i=[],this.j=new Hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tr("baseRetryDelayMs",5e3,u),this.cb=tr("retryDelaySeedMs",1e4,u),this.Wa=tr("forwardChannelMaxRetries",2,u),this.wa=tr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Qi(u&&u.concurrentRequestLimit),this.Da=new Sh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ra.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,k){lt(0),this.W=u,this.H=m||{},v&&k!==void 0&&(this.H.OSID=v,this.H.OAID=k),this.F=this.X,this.I=ru(this,null,this.W),nr(this)};function Pt(u){if(Zs(u),u.G==3){var m=u.U++,v=an(u.I);if(We(v,"SID",u.K),We(v,"RID",m),We(v,"TYPE","terminate"),xr(u,v),m=new Mn(u,u.j,m),m.L=2,m.v=ti(an(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=m.v,v=!0),v||(m.g=iu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ge(m)}nu(u)}function jn(u){u.g&&(Pa(u),u.g.cancel(),u.g=null)}function Zs(u){jn(u),u.u&&(d.clearTimeout(u.u),u.u=null),no(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function nr(u){if(!on(u.h)&&!u.s){u.s=!0;var m=u.Ga;xe||le(),ie||(xe(),ie=!0),ye.add(m,u),u.B=0}}function Ah(u,m){return $l(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Nn(T(u.Ga,u,m),tu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new Mn(this,this.j,u);let H=this.o;if(this.S&&(H?(H=I(H),N(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var k=this.i[v];if("__data__"in k.map&&(k=k.map.__data__,typeof k=="string")){k=k.length;break t}k=void 0}if(k===void 0)break;if(m+=k,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=si(this,U,m),v=an(this.I),We(v,"RID",u),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),xr(this,v),H&&(this.O?m="headers="+encodeURIComponent(String(Pr(H)))+"&"+m:this.m&&ii(v,this.m,H)),Ia(this.h,U),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",m),We(v,"SID","null"),U.T=!0,Ws(U,v,null)):Ws(U,v,m),this.G=2}}else this.G==3&&(u?eo(this,u):this.i.length==0||on(this.h)||eo(this))};function eo(u,m){var v;m?v=m.l:v=u.U++;const k=an(u.I);We(k,"SID",u.K),We(k,"RID",v),We(k,"AID",u.T),xr(u,k),u.m&&u.o&&ii(k,u.m,u.o),v=new Mn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=si(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Ia(u.h,v),Ws(v,k,m)}function xr(u,m){u.H&&K(u.H,function(v,k){We(m,k,v)}),u.l&&Xr({},function(v,k){We(m,k,v)})}function si(u,m,v){v=Math.min(u.i.length,v);var k=u.l?T(u.l.Na,u.l,u):null;e:{var U=u.i;let H=-1;for(;;){const oe=["count="+v];H==-1?0<v?(H=U[0].g,oe.push("ofs="+H)):H=0:oe.push("ofs="+H);let He=!0;for(let _t=0;_t<v;_t++){let je=U[_t].g;const It=U[_t].map;if(je-=H,0>je)H=Math.max(0,U[_t].g-100),He=!1;else try{Xl(It,oe,"req"+je+"_")}catch{k&&k(It)}}if(He){k=oe.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,k}function es(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;xe||le(),ie||(xe(),ie=!0),ye.add(m,u),u.v=0}}function to(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Nn(T(u.Fa,u),tu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,eu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Nn(T(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),jn(this),eu(this))};function Pa(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function eu(u){u.g=new Mn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=an(u.qa);We(m,"RID","rpc"),We(m,"SID",u.K),We(m,"AID",u.T),We(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&We(m,"TO",u.ja),We(m,"TYPE","xmlhttp"),xr(u,m),u.m&&u.o&&ii(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=ti(an(m)),v.m=null,v.P=!0,Ea(v,u)}n.Za=function(){this.C!=null&&(this.C=null,jn(this),to(this),lt(19))};function no(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function ro(u,m){var v=null;if(u.g==m){no(u),Pa(u),u.g=null;var k=2}else if(qt(u.h,m))v=m.D,Hl(u.h,m),k=1;else return;if(u.G!=0){if(m.o)if(k==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;k=$i(),vt(k,new zs(k,v)),nr(u)}else es(u);else if(U=m.s,U==3||U==0&&0<m.X||!(k==1&&Ah(u,m)||k==2&&to(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),U){case 1:Nr(u,5);break;case 4:Nr(u,10);break;case 3:Nr(u,6);break;default:Nr(u,2)}}}function tu(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function Nr(u,m){if(u.j.info("Error code "+m),m==2){var v=T(u.fb,u),k=u.Xa;const U=!k;k=new Cr(k||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ji(k,"https"),ti(k),U?Ih(k.toString(),v):Jl(k.toString(),v)}else lt(2);u.G=0,u.l&&u.l.sa(m),nu(u),Zs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function nu(u){if(u.G=0,u.ka=[],u.l){const m=Wl(u.h);(m.length!=0||u.i.length!=0)&&(L(u.ka,m),L(u.ka,u.i),u.h.i.length=0,V(u.i),u.i.length=0),u.l.ra()}}function ru(u,m,v){var k=v instanceof Cr?an(v):new Cr(v);if(k.g!="")m&&(k.g=m+"."+k.g),Zr(k,k.s);else{var U=d.location;k=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var H=new Cr(null);k&&Ji(H,k),m&&(H.g=m),U&&Zr(H,U),v&&(H.l=v),k=H}return v=u.D,m=u.ya,v&&m&&We(k,v,m),We(k,"VER",u.la),xr(u,k),k}function iu(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ze(new Rr({eb:v})):new Ze(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xa(){}n=xa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function io(){}io.prototype.g=function(u,m){return new $t(u,m)};function $t(u,m){yt.call(this),this.g=new Ra(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!G(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!G(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new rr(this)}M($t,yt),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Pt(this.g)},$t.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=fa(u),u=v);m.i.push(new ql(m.Ya++,u)),m.G==3&&nr(m)},$t.prototype.N=function(){this.g.l=null,delete this.j,Pt(this.g),delete this.g,$t.aa.N.call(this)};function su(u){Jn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}M(su,Jn);function ou(){Bs.call(this),this.status=1}M(ou,Bs);function rr(u){this.g=u}M(rr,xa),rr.prototype.ua=function(){vt(this.g,"a")},rr.prototype.ta=function(u){vt(this.g,new su(u))},rr.prototype.sa=function(u){vt(this.g,new ou)},rr.prototype.ra=function(){vt(this.g,"b")},io.prototype.createWebChannel=io.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,n1=function(){return new io},t1=function(){return $i()},e1=Xn,lp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$s.NO_ERROR=0,$s.TIMEOUT=8,$s.HTTP_ERROR=6,pc=$s,jl.COMPLETE="complete",Zw=jl,Us.EventType=yn,yn.OPEN="a",yn.CLOSE="b",yn.ERROR="c",yn.MESSAGE="d",yt.prototype.listen=yt.prototype.K,il=Us,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,Xw=Ze}).apply(typeof tc<"u"?tc:typeof self<"u"?self:typeof window<"u"?window:{});const Mv="@firebase/firestore",Ov="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Hc("@firebase/firestore");function Po(){return Ss.logLevel}function he(n,...e){if(Ss.logLevel<=Le.DEBUG){const t=e.map(Yp);Ss.debug(`Firestore (${Xo}): ${n}`,...t)}}function Wr(n,...e){if(Ss.logLevel<=Le.ERROR){const t=e.map(Yp);Ss.error(`Firestore (${Xo}): ${n}`,...t)}}function xi(n,...e){if(Ss.logLevel<=Le.WARN){const t=e.map(Yp);Ss.warn(`Firestore (${Xo}): ${n}`,...t)}}function Yp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,r1(n,i,t)}function r1(n,e,t){let i=`FIRESTORE (${Xo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Wr(i),new Error(i)}function $e(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||r1(e,o,i)}function De(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Yn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class SR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class kR{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0,42304);let i=this.i;const o=f=>this.i!==i?(i=this.i,t(f)):Promise.resolve();let a=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new qr,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const f=a;e.enqueueRetryable((async()=>{await f.promise,await o(this.currentUser)}))},d=f=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((f=>d(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new qr)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?($e(typeof i.accessToken=="string",31837,{l:i}),new i1(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class AR{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class CR{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new AR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Lv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$e(this.o===void 0,3512);const i=a=>{a.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>i(a)))};const o=a=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>o(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Lv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?($e(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Lv(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=PR(40);for(let a=0;a<o.length;++a)i.length<20&&o[a]<t&&(i+=e.charAt(o[a]%62))}return i}}function Me(n,e){return n<e?-1:n>e?1:0}function up(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Me(i,o);{const a=s1(),c=xR(a.encode(Vv(n,t)),a.encode(Vv(e,t)));return c!==0?c:Me(i,o)}}t+=i>65535?2:1}return Me(n.length,e.length)}function Vv(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function xR(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Me(n[t],e[t]);return Me(n.length,e.length)}function Bo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="__name__";class ur{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Ae(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ur.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ur?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const a=ur.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Me(e.length,t.length)}static compareSegments(e,t){const i=ur.isNumericId(e),o=ur.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?ur.extractNumericId(e).compare(ur.extractNumericId(t)):up(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ri.fromString(e.substring(4,e.length-2))}}class Qe extends ur{construct(e,t,i){return new Qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ue(Y.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Qe(t)}static emptyPath(){return new Qe([])}}const NR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends ur{construct(e,t,i){return new Dt(e,t,i)}static isValidIdentifier(e){return NR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fv}static keyField(){return new Dt([Fv])}static fromServerFormat(e){const t=[];let i="",o=0;const a=()=>{if(i.length===0)throw new ue(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ue(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[o+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ue(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=f,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(a(),o++)}if(a(),c)throw new ue(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(Qe.fromString(e))}static fromName(e){return new _e(Qe.fromString(e).popFirst(5))}static empty(){return new _e(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new Qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(n,e,t){if(!t)throw new ue(Y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function bR(n,e,t,i){if(e===!0&&i===!0)throw new ue(Y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function jv(n){if(!_e.isDocumentKey(n))throw new ue(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Uv(n){if(_e.isDocumentKey(n))throw new ue(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function a1(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Zc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae(12329,{type:typeof n})}function vr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zc(n);throw new ue(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Rl(n,e){if(!a1(n))throw new ue(Y.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,a="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const c=n[i];if(o&&typeof c!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(a!==void 0&&c!==a.value){t=`Expected '${i}' field to equal '${a.value}'`;break}}if(t)throw new ue(Y.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=-62135596800,zv=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*zv);return new Xe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Bv)throw new ue(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zv}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Rl(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Bv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:mt("string",Xe._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{static fromTimestamp(e){return new Ne(e)}static min(){return new Ne(new Xe(0,0))}static max(){return new Ne(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=-1;function DR(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ne.fromTimestamp(i===1e9?new Xe(t+1,0):new Xe(t,i));return new Ni(o,_e.empty(),e)}function MR(n){return new Ni(n.readTime,n.key,yl)}class Ni{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ni(Ne.min(),_e.empty(),yl)}static max(){return new Ni(Ne.max(),_e.empty(),yl)}}function OR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:Me(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(n){if(n.code!==Y.FAILED_PRECONDITION||n.message!==LR)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new X(((i,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof X?t:X.resolve(t)}catch(t){return X.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):X.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):X.reject(t)}static resolve(e){return new X(((t,i)=>{t(e)}))}static reject(e){return new X(((t,i)=>{i(e)}))}static waitFor(e){return new X(((t,i)=>{let o=0,a=0,c=!1;e.forEach((d=>{++o,d.next((()=>{++a,c&&a===o&&t()}),(f=>i(f)))})),c=!0,a===o&&t()}))}static or(e){let t=X.resolve(!1);for(const i of e)t=t.next((o=>o?X.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,a)=>{i.push(t.call(this,o,a))})),this.waitFor(i)}static mapArray(e,t){return new X(((i,o)=>{const a=e.length,c=new Array(a);let d=0;for(let f=0;f<a;f++){const g=f;t(e[g]).next((_=>{c[g]=_,++d,d===a&&i(c)}),(_=>o(_)))}}))}static doWhile(e,t){return new X(((i,o)=>{const a=()=>{e()===!0?t().next((()=>{a()}),o):i()};a()}))}}function FR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ea(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}eh.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=-1;function th(n){return n==null}function bc(n){return n===0&&1/n==-1/0}function jR(n){return typeof n=="number"&&Number.isInteger(n)&&!bc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1="";function UR(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=qv(e)),e=BR(n.get(t),e);return qv(e)}function BR(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case l1:t+="";break;default:t+=a}}return t}function qv(n){return n+l1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Fi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function u1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.comparator=e,this.root=t||bt.EMPTY}insert(e,t){return new st(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nc(this.root,e,this.comparator,!1)}getReverseIterator(){return new nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nc(this.root,e,this.comparator,!0)}}class nc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?i(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,t,i,o,a){this.key=e,this.value=t,this.color=i??bt.RED,this.left=o??bt.EMPTY,this.right=a??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,a){return new bt(e??this.key,t??this.value,i??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const a=i(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,i),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return bt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,i,o,a){return this}insert(e,t,i){return new bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Hv(this.data.getIterator())}getIteratorFrom(e){return new Hv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Tt(this.comparator);return t.data=e,t}}class Hv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new fn([])}unionWith(e){let t=new Tt(Dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new c1("Invalid base64 string: "+a):a}})(e);return new Mt(t)}static fromUint8Array(e){const t=(function(o){let a="";for(let c=0;c<o.length;++c)a+=String.fromCharCode(o[c]);return a})(e);return new Mt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const zR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bi(n){if($e(!!n,39018),typeof n=="string"){let e=0;const t=zR.exec(n);if($e(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Di(n){return typeof n=="string"?Mt.fromBase64String(n):Mt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="server_timestamp",d1="__type__",f1="__previous_value__",p1="__local_write_time__";function Zp(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[d1])===null||t===void 0?void 0:t.stringValue)===h1}function nh(n){const e=n.mapValue.fields[f1];return Zp(e)?nh(e):e}function vl(n){const e=bi(n.mapValue.fields[p1].timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,t,i,o,a,c,d,f,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=g,this.isUsingEmulator=_}}const Dc="(default)";class _l{constructor(e,t){this.projectId=e,this.database=t||Dc}static empty(){return new _l("","")}get isDefaultDatabase(){return this.database===Dc}isEqual(e){return e instanceof _l&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1="__type__",$R="__max__",rc={mapValue:{}},m1="__vector__",Mc="value";function Mi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zp(n)?4:WR(n)?9007199254740991:HR(n)?10:11:Ae(28295,{value:n})}function _r(n,e){if(n===e)return!0;const t=Mi(n);if(t!==Mi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return vl(n).isEqual(vl(e));case 3:return(function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const c=bi(o.timestampValue),d=bi(a.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,a){return Di(o.bytesValue).isEqual(Di(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,a){return ct(o.geoPointValue.latitude)===ct(a.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(a.geoPointValue.longitude)})(n,e);case 2:return(function(o,a){if("integerValue"in o&&"integerValue"in a)return ct(o.integerValue)===ct(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const c=ct(o.doubleValue),d=ct(a.doubleValue);return c===d?bc(c)===bc(d):isNaN(c)&&isNaN(d)}return!1})(n,e);case 9:return Bo(n.arrayValue.values||[],e.arrayValue.values||[],_r);case 10:case 11:return(function(o,a){const c=o.mapValue.fields||{},d=a.mapValue.fields||{};if($v(c)!==$v(d))return!1;for(const f in c)if(c.hasOwnProperty(f)&&(d[f]===void 0||!_r(c[f],d[f])))return!1;return!0})(n,e);default:return Ae(52216,{left:n})}}function wl(n,e){return(n.values||[]).find((t=>_r(t,e)))!==void 0}function zo(n,e){if(n===e)return 0;const t=Mi(n),i=Mi(e);if(t!==i)return Me(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Me(n.booleanValue,e.booleanValue);case 2:return(function(a,c){const d=ct(a.integerValue||a.doubleValue),f=ct(c.integerValue||c.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1})(n,e);case 3:return Wv(n.timestampValue,e.timestampValue);case 4:return Wv(vl(n),vl(e));case 5:return up(n.stringValue,e.stringValue);case 6:return(function(a,c){const d=Di(a),f=Di(c);return d.compareTo(f)})(n.bytesValue,e.bytesValue);case 7:return(function(a,c){const d=a.split("/"),f=c.split("/");for(let g=0;g<d.length&&g<f.length;g++){const _=Me(d[g],f[g]);if(_!==0)return _}return Me(d.length,f.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,c){const d=Me(ct(a.latitude),ct(c.latitude));return d!==0?d:Me(ct(a.longitude),ct(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Gv(n.arrayValue,e.arrayValue);case 10:return(function(a,c){var d,f,g,_;const w=a.fields||{},T=c.fields||{},R=(d=w[Mc])===null||d===void 0?void 0:d.arrayValue,M=(f=T[Mc])===null||f===void 0?void 0:f.arrayValue,V=Me(((g=R?.values)===null||g===void 0?void 0:g.length)||0,((_=M?.values)===null||_===void 0?void 0:_.length)||0);return V!==0?V:Gv(R,M)})(n.mapValue,e.mapValue);case 11:return(function(a,c){if(a===rc.mapValue&&c===rc.mapValue)return 0;if(a===rc.mapValue)return 1;if(c===rc.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),g=c.fields||{},_=Object.keys(g);f.sort(),_.sort();for(let w=0;w<f.length&&w<_.length;++w){const T=up(f[w],_[w]);if(T!==0)return T;const R=zo(d[f[w]],g[_[w]]);if(R!==0)return R}return Me(f.length,_.length)})(n.mapValue,e.mapValue);default:throw Ae(23264,{le:t})}}function Wv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Me(n,e);const t=bi(n),i=bi(e),o=Me(t.seconds,i.seconds);return o!==0?o:Me(t.nanos,i.nanos)}function Gv(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const a=zo(t[o],i[o]);if(a)return a}return Me(t.length,i.length)}function qo(n){return cp(n)}function cp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=bi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Di(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return _e.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const a of t.values||[])o?o=!1:i+=",",i+=cp(a);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const c of i)a?a=!1:o+=",",o+=`${c}:${cp(t.fields[c])}`;return o+"}"})(n.mapValue):Ae(61005,{value:n})}function gc(n){switch(Mi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=nh(n);return e?16+gc(e):16;case 5:return 2*n.stringValue.length;case 6:return Di(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,a)=>o+gc(a)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Fi(i.fields,((a,c)=>{o+=a.length+gc(c)})),o})(n.mapValue);default:throw Ae(13486,{value:n})}}function Kv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function hp(n){return!!n&&"integerValue"in n}function eg(n){return!!n&&"arrayValue"in n}function Qv(n){return!!n&&"nullValue"in n}function Yv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mc(n){return!!n&&"mapValue"in n}function HR(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[g1])===null||t===void 0?void 0:t.stringValue)===m1}function hl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Fi(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=hl(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=hl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function WR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===$R}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!mc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hl(t)}setAll(e){let t=Dt.emptyPath(),i={},o=[];e.forEach(((c,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=hl(c):o.push(d.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,i,o)}delete(e){const t=this.field(e.popLast());mc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _r(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];mc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Fi(t,((o,a)=>e[o]=a));for(const o of i)delete e[o]}clone(){return new rn(hl(this.value))}}function y1(n){const e=[];return Fi(n.fields,((t,i)=>{const o=new Dt([t]);if(mc(i)){const a=y1(i.mapValue).fields;if(a.length===0)e.push(o);else for(const c of a)e.push(o.child(c))}else e.push(o)})),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,i,o,a,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=a,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Bt(e,0,Ne.min(),Ne.min(),Ne.min(),rn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Ne.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ne.min(),Ne.min(),rn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ne.min(),Ne.min(),rn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t){this.position=e,this.inclusive=t}}function Jv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const a=e[o],c=n.position[o];if(a.field.isKeyField()?i=_e.comparator(_e.fromName(c.referenceValue),t.key):i=zo(c,t.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function Xv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_r(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t="asc"){this.field=e,this.dir=t}}function GR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{}class gt extends v1{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new QR(e,t,i):t==="array-contains"?new XR(e,i):t==="in"?new ZR(e,i):t==="not-in"?new eP(e,i):t==="array-contains-any"?new tP(e,i):new gt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new YR(e,i):new JR(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zo(t,this.value)):t!==null&&Mi(this.value)===Mi(t)&&this.matchesComparison(zo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends v1{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Qn(e,t)}matches(e){return _1(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function _1(n){return n.op==="and"}function w1(n){return KR(n)&&_1(n)}function KR(n){for(const e of n.filters)if(e instanceof Qn)return!1;return!0}function dp(n){if(n instanceof gt)return n.field.canonicalString()+n.op.toString()+qo(n.value);if(w1(n))return n.filters.map((e=>dp(e))).join(",");{const e=n.filters.map((t=>dp(t))).join(",");return`${n.op}(${e})`}}function E1(n,e){return n instanceof gt?(function(i,o){return o instanceof gt&&i.op===o.op&&i.field.isEqual(o.field)&&_r(i.value,o.value)})(n,e):n instanceof Qn?(function(i,o){return o instanceof Qn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((a,c,d)=>a&&E1(c,o.filters[d])),!0):!1})(n,e):void Ae(19439)}function T1(n){return n instanceof gt?(function(t){return`${t.field.canonicalString()} ${t.op} ${qo(t.value)}`})(n):n instanceof Qn?(function(t){return t.op.toString()+" {"+t.getFilters().map(T1).join(" ,")+"}"})(n):"Filter"}class QR extends gt{constructor(e,t,i){super(e,t,i),this.key=_e.fromName(i.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class YR extends gt{constructor(e,t){super(e,"in",t),this.keys=I1("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class JR extends gt{constructor(e,t){super(e,"not-in",t),this.keys=I1("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function I1(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>_e.fromName(i.referenceValue)))}class XR extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return eg(t)&&wl(t.arrayValue,this.value)}}class ZR extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&wl(this.value.arrayValue,t)}}class eP extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(wl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!wl(this.value.arrayValue,t)}}class tP extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!eg(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>wl(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t=null,i=[],o=[],a=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=a,this.startAt=c,this.endAt=d,this.Pe=null}}function Zv(n,e=null,t=[],i=[],o=null,a=null,c=null){return new nP(n,e,t,i,o,a,c)}function tg(n){const e=De(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>dp(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(a){return a.field.canonicalString()+a.dir})(i))).join(","),th(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>qo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>qo(i))).join(",")),e.Pe=t}return e.Pe}function ng(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!GR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!E1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Xv(n.startAt,e.startAt)&&Xv(n.endAt,e.endAt)}function fp(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t=null,i=[],o=[],a=null,c="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=a,this.limitType=c,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function rP(n,e,t,i,o,a,c,d){return new Pl(n,e,t,i,o,a,c,d)}function rg(n){return new Pl(n)}function e0(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function S1(n){return n.collectionGroup!==null}function dl(n){const e=De(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Tt(Dt.comparator);return c.filters.forEach((f=>{f.getFlattenedFilters().forEach((g=>{g.isInequality()&&(d=d.add(g.field))}))})),d})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Lc(a,i))})),t.has(Dt.keyField().canonicalString())||e.Te.push(new Lc(Dt.keyField(),i))}return e.Te}function dr(n){const e=De(n);return e.Ie||(e.Ie=iP(e,dl(n))),e.Ie}function iP(n,e){if(n.limitType==="F")return Zv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const a=o.dir==="desc"?"asc":"desc";return new Lc(o.field,a)}));const t=n.endAt?new Oc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Oc(n.startAt.position,n.startAt.inclusive):null;return Zv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function pp(n,e){const t=n.filters.concat([e]);return new Pl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function gp(n,e,t){return new Pl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function rh(n,e){return ng(dr(n),dr(e))&&n.limitType===e.limitType}function k1(n){return`${tg(dr(n))}|lt:${n.limitType}`}function xo(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>T1(o))).join(", ")}]`),th(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>qo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>qo(o))).join(",")),`Target(${i})`})(dr(n))}; limitType=${n.limitType})`}function ih(n,e){return e.isFoundDocument()&&(function(i,o){const a=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):_e.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)})(n,e)&&(function(i,o){for(const a of dl(i))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const a of i.filters)if(!a.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,d,f){const g=Jv(c,d,f);return c.inclusive?g<=0:g<0})(i.startAt,dl(i),o)||i.endAt&&!(function(c,d,f){const g=Jv(c,d,f);return c.inclusive?g>=0:g>0})(i.endAt,dl(i),o))})(n,e)}function sP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function A1(n){return(e,t)=>{let i=!1;for(const o of dl(n)){const a=oP(o,e,t);if(a!==0)return a;i=i||o.field.isKeyField()}return 0}}function oP(n,e,t){const i=n.field.isKeyField()?_e.comparator(e.key,t.key):(function(a,c,d){const f=c.data.field(a),g=d.data.field(a);return f!==null&&g!==null?zo(f,g):Ae(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ae(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,a]of i)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Fi(this.inner,((t,i)=>{for(const[o,a]of i)e(o,a)}))}isEmpty(){return u1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=new st(_e.comparator);function Gr(){return aP}const C1=new st(_e.comparator);function sl(...n){let e=C1;for(const t of n)e=e.insert(t.key,t);return e}function R1(n){let e=C1;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ys(){return fl()}function P1(){return fl()}function fl(){return new Ps((n=>n.toString()),((n,e)=>n.isEqual(e)))}const lP=new st(_e.comparator),uP=new Tt(_e.comparator);function Ve(...n){let e=uP;for(const t of n)e=e.add(t);return e}const cP=new Tt(Me);function hP(){return cP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bc(e)?"-0":e}}function x1(n){return{integerValue:""+n}}function dP(n,e){return jR(e)?x1(e):ig(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this._=void 0}}function fP(n,e,t){return n instanceof Vc?(function(o,a){const c={fields:{[d1]:{stringValue:h1},[p1]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&Zp(a)&&(a=nh(a)),a&&(c.fields[f1]=a),{mapValue:c}})(t,e):n instanceof $o?b1(n,e):n instanceof Ho?D1(n,e):(function(o,a){const c=N1(o,a),d=t0(c)+t0(o.Ee);return hp(c)&&hp(o.Ee)?x1(d):ig(o.serializer,d)})(n,e)}function pP(n,e,t){return n instanceof $o?b1(n,e):n instanceof Ho?D1(n,e):t}function N1(n,e){return n instanceof Fc?(function(i){return hp(i)||(function(a){return!!a&&"doubleValue"in a})(i)})(e)?e:{integerValue:0}:null}class Vc extends sh{}class $o extends sh{constructor(e){super(),this.elements=e}}function b1(n,e){const t=M1(e);for(const i of n.elements)t.some((o=>_r(o,i)))||t.push(i);return{arrayValue:{values:t}}}class Ho extends sh{constructor(e){super(),this.elements=e}}function D1(n,e){let t=M1(e);for(const i of n.elements)t=t.filter((o=>!_r(o,i)));return{arrayValue:{values:t}}}class Fc extends sh{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function t0(n){return ct(n.integerValue||n.doubleValue)}function M1(n){return eg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,t){this.field=e,this.transform=t}}function gP(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof $o&&o instanceof $o||i instanceof Ho&&o instanceof Ho?Bo(i.elements,o.elements,_r):i instanceof Fc&&o instanceof Fc?_r(i.Ee,o.Ee):i instanceof Vc&&o instanceof Vc})(n.transform,e.transform)}class mP{constructor(e,t){this.version=e,this.transformResults=t}}class gn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class oh{}function L1(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sg(n.key,gn.none()):new xl(n.key,n.data,gn.none());{const t=n.data,i=rn.empty();let o=new Tt(Dt.comparator);for(let a of e.fields)if(!o.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?i.delete(a):i.set(a,c),o=o.add(a)}return new ji(n.key,i,new fn(o.toArray()),gn.none())}}function yP(n,e,t){n instanceof xl?(function(o,a,c){const d=o.value.clone(),f=r0(o.fieldTransforms,a,c.transformResults);d.setAll(f),a.convertToFoundDocument(c.version,d).setHasCommittedMutations()})(n,e,t):n instanceof ji?(function(o,a,c){if(!yc(o.precondition,a))return void a.convertToUnknownDocument(c.version);const d=r0(o.fieldTransforms,a,c.transformResults),f=a.data;f.setAll(V1(o)),f.setAll(d),a.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):(function(o,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function pl(n,e,t,i){return n instanceof xl?(function(a,c,d,f){if(!yc(a.precondition,c))return d;const g=a.value.clone(),_=i0(a.fieldTransforms,f,c);return g.setAll(_),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,i):n instanceof ji?(function(a,c,d,f){if(!yc(a.precondition,c))return d;const g=i0(a.fieldTransforms,f,c),_=c.data;return _.setAll(V1(a)),_.setAll(g),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((w=>w.field)))})(n,e,t,i):(function(a,c,d){return yc(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d})(n,e,t)}function vP(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),a=N1(i.transform,o||null);a!=null&&(t===null&&(t=rn.empty()),t.set(i.field,a))}return t||null}function n0(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Bo(i,o,((a,c)=>gP(a,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class xl extends oh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ji extends oh{constructor(e,t,i,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function V1(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function r0(n,e,t){const i=new Map;$e(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const a=n[o],c=a.transform,d=e.data.field(a.field);i.set(a.field,pP(c,d,t[o]))}return i}function i0(n,e,t){const i=new Map;for(const o of n){const a=o.transform,c=t.data.field(o.field);i.set(o.field,fP(a,c,e))}return i}class sg extends oh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _P extends oh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&yP(a,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=pl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=pl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=P1();return this.mutations.forEach((o=>{const a=e.get(o.key),c=a.overlayedDocument;let d=this.applyToLocalView(c,a.mutatedFields);d=t.has(o.key)?null:d;const f=L1(c,d);f!==null&&i.set(o.key,f),c.isValidDocument()||c.convertToNoDocument(Ne.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&Bo(this.mutations,e.mutations,((t,i)=>n0(t,i)))&&Bo(this.baseMutations,e.baseMutations,((t,i)=>n0(t,i)))}}class og{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){$e(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=(function(){return lP})();const a=e.mutations;for(let c=0;c<a.length;c++)o=o.insert(a[c].key,i[c].version);return new og(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,Ue;function IP(n){switch(n){case Y.OK:return Ae(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return Ae(15467,{code:n})}}function F1(n){if(n===void 0)return Wr("GRPC error has no .code"),Y.UNKNOWN;switch(n){case pt.OK:return Y.OK;case pt.CANCELLED:return Y.CANCELLED;case pt.UNKNOWN:return Y.UNKNOWN;case pt.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case pt.INTERNAL:return Y.INTERNAL;case pt.UNAVAILABLE:return Y.UNAVAILABLE;case pt.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case pt.NOT_FOUND:return Y.NOT_FOUND;case pt.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case pt.ABORTED:return Y.ABORTED;case pt.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case pt.DATA_LOSS:return Y.DATA_LOSS;default:return Ae(39323,{code:n})}}(Ue=pt||(pt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=new Ri([4294967295,4294967295],0);function s0(n){const e=s1().encode(n),t=new Jw;return t.update(e),new Uint8Array(t.digest())}function o0(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ri([t,i],0),new Ri([o,a],0)]}class ag{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ol(`Invalid padding: ${t}`);if(i<0)throw new ol(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ol(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ol(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ri.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Ri.fromNumber(i)));return o.compare(SP)===1&&(o=new Ri([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=s0(e),[i,o]=o0(t);for(let a=0;a<this.hashCount;a++){const c=this.pe(i,o,a);if(!this.ye(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new ag(a,o,t);return i.forEach((d=>c.insert(d))),c}insert(e){if(this.fe===0)return;const t=s0(e),[i,o]=o0(t);for(let a=0;a<this.hashCount;a++){const c=this.pe(i,o,a);this.we(c)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ol extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t,i,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Nl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new ah(Ne.min(),o,new st(Me),Gr(),Ve())}}class Nl{constructor(e,t,i,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Nl(i,t,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class j1{constructor(e,t){this.targetId=e,this.De=t}}class U1{constructor(e,t,i=Mt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class a0{constructor(){this.ve=0,this.Ce=l0(),this.Fe=Mt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ve(),t=Ve(),i=Ve();return this.Ce.forEach(((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ae(38017,{changeType:a})}})),new Nl(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=l0()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,$e(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class kP{constructor(e){this.We=e,this.Ge=new Map,this.ze=Gr(),this.je=ic(),this.Je=ic(),this.He=new st(Me)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:Ae(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((i,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const a=o.target;if(fp(a))if(i===0){const c=new _e(a.path);this.Xe(t,c,Bt.newNoDocument(c,Ne.min()))}else $e(i===1,20013,{expectedCount:i});else{const c=this.ot(t);if(c!==i){const d=this._t(e),f=d?this.ut(d,e,c):1;if(f!==0){this.rt(t);const g=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=t;let c,d;try{c=Di(i).toUint8Array()}catch(f){if(f instanceof c1)return xi("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new ag(c,o,a)}catch(f){return xi(f instanceof ol?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach((a=>{const c=this.We.lt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((a,c)=>{const d=this.st(c);if(d){if(a.current&&fp(d.target)){const f=new _e(d.target.path);this.Tt(f).has(c)||this.It(c,f)||this.Xe(c,f,Bt.newNoDocument(f,e))}a.Ne&&(t.set(c,a.Le()),a.ke())}}));let i=Ve();this.Je.forEach(((a,c)=>{let d=!0;c.forEachWhile((f=>{const g=this.st(f);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(i=i.add(a))})),this.ze.forEach(((a,c)=>c.setReadTime(e)));const o=new ah(e,t,this.He,this.ze,i);return this.ze=Gr(),this.je=ic(),this.Je=ic(),this.He=new st(Me),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new a0,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Tt(Me),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Tt(Me),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new a0),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ic(){return new st(_e.comparator)}function l0(){return new st(_e.comparator)}const AP={asc:"ASCENDING",desc:"DESCENDING"},CP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RP={and:"AND",or:"OR"};class PP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mp(n,e){return n.useProto3Json||th(e)?e:{value:e}}function jc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function B1(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xP(n,e){return jc(n,e.toTimestamp())}function fr(n){return $e(!!n,49232),Ne.fromTimestamp((function(t){const i=bi(t);return new Xe(i.seconds,i.nanos)})(n))}function lg(n,e){return yp(n,e).canonicalString()}function yp(n,e){const t=(function(o){return new Qe(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function z1(n){const e=Qe.fromString(n);return $e(G1(e),10190,{key:e.toString()}),e}function vp(n,e){return lg(n.databaseId,e.path)}function lf(n,e){const t=z1(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e($1(t))}function q1(n,e){return lg(n.databaseId,e)}function NP(n){const e=z1(n);return e.length===4?Qe.emptyPath():$1(e)}function _p(n){return new Qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $1(n){return $e(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function u0(n,e,t){return{name:vp(n,e),fields:t.value.mapValue.fields}}function bP(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ae(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=(function(g,_){return g.useProto3Json?($e(_===void 0||typeof _=="string",58123),Mt.fromBase64String(_||"")):($e(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Mt.fromUint8Array(_||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&(function(g){const _=g.code===void 0?Y.UNKNOWN:F1(g.code);return new ue(_,g.message||"")})(c);t=new U1(i,o,a,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=lf(n,i.document.name),a=fr(i.document.updateTime),c=i.document.createTime?fr(i.document.createTime):Ne.min(),d=new rn({mapValue:{fields:i.document.fields}}),f=Bt.newFoundDocument(o,a,c,d),g=i.targetIds||[],_=i.removedTargetIds||[];t=new vc(g,_,f.key,f)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=lf(n,i.document),a=i.readTime?fr(i.readTime):Ne.min(),c=Bt.newNoDocument(o,a),d=i.removedTargetIds||[];t=new vc([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=lf(n,i.document),a=i.removedTargetIds||[];t=new vc([],a,o,null)}else{if(!("filter"in e))return Ae(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:a}=i,c=new TP(o,a),d=i.targetId;t=new j1(d,c)}}return t}function DP(n,e){let t;if(e instanceof xl)t={update:u0(n,e.key,e.value)};else if(e instanceof sg)t={delete:vp(n,e.key)};else if(e instanceof ji)t={update:u0(n,e.key,e.data),updateMask:zP(e.fieldMask)};else{if(!(e instanceof _P))return Ae(16599,{Rt:e.type});t={verify:vp(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(a,c){const d=c.transform;if(d instanceof Vc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof $o)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Ho)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Fc)return{fieldPath:c.field.canonicalString(),increment:d.Ee};throw Ae(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,a){return a.updateTime!==void 0?{updateTime:xP(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ae(27497)})(n,e.precondition)),t}function MP(n,e){return n&&n.length>0?($e(e!==void 0,14353),n.map((t=>(function(o,a){let c=o.updateTime?fr(o.updateTime):fr(a);return c.isEqual(Ne.min())&&(c=fr(a)),new mP(c,o.transformResults||[])})(t,e)))):[]}function OP(n,e){return{documents:[q1(n,e.path)]}}function LP(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=q1(n,o);const a=(function(g){if(g.length!==0)return W1(Qn.create(g,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const c=(function(g){if(g.length!==0)return g.map((_=>(function(T){return{field:No(T.field),direction:jP(T.dir)}})(_)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=mp(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{Vt:t,parent:o}}function VP(n){let e=NP(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){$e(i===1,65062);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let a=[];t.where&&(a=(function(w){const T=H1(w);return T instanceof Qn&&w1(T)?T.getFilters():[T]})(t.where));let c=[];t.orderBy&&(c=(function(w){return w.map((T=>(function(M){return new Lc(bo(M.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(T)))})(t.orderBy));let d=null;t.limit&&(d=(function(w){let T;return T=typeof w=="object"?w.value:w,th(T)?null:T})(t.limit));let f=null;t.startAt&&(f=(function(w){const T=!!w.before,R=w.values||[];return new Oc(R,T)})(t.startAt));let g=null;return t.endAt&&(g=(function(w){const T=!w.before,R=w.values||[];return new Oc(R,T)})(t.endAt)),rP(e,o,c,a,d,"F",f,g)}function FP(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function H1(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=bo(t.unaryFilter.field);return gt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=bo(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=bo(t.unaryFilter.field);return gt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=bo(t.unaryFilter.field);return gt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(n):n.fieldFilter!==void 0?(function(t){return gt.create(bo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Qn.create(t.compositeFilter.filters.map((i=>H1(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(t.compositeFilter.op))})(n):Ae(30097,{filter:n})}function jP(n){return AP[n]}function UP(n){return CP[n]}function BP(n){return RP[n]}function No(n){return{fieldPath:n.canonicalString()}}function bo(n){return Dt.fromServerFormat(n.fieldPath)}function W1(n){return n instanceof gt?(function(t){if(t.op==="=="){if(Yv(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NAN"}};if(Qv(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Yv(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NOT_NAN"}};if(Qv(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:No(t.field),op:UP(t.op),value:t.value}}})(n):n instanceof Qn?(function(t){const i=t.getFilters().map((o=>W1(o)));return i.length===1?i[0]:{compositeFilter:{op:BP(t.op),filters:i}}})(n):Ae(54877,{filter:n})}function zP(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function G1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t,i,o,a=Ne.min(),c=Ne.min(),d=Mt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new ki(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.gt=e}}function $P(n){const e=VP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?gp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(){this.Dn=new WP}addToCollectionParentIndex(e,t){return this.Dn.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(Ni.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(Ni.min())}updateCollectionGroup(e,t,i){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}}class WP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Tt(Qe.comparator),a=!o.has(i);return this.index[t]=o.add(i),a}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Tt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},K1=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(K1,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Wo(0)}static ur(){return new Wo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="LruGarbageCollector",GP=1048576;function d0([n,e],[t,i]){const o=Me(n,t);return o===0?Me(e,i):o}class KP{constructor(e){this.Tr=e,this.buffer=new Tt(d0),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();d0(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class QP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){he(h0,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ea(t)?he(h0,"Ignoring IndexedDB error during garbage collection: ",t):await Zo(t)}await this.Rr(3e5)}))}}class YP{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return X.resolve(eh.ue);const i=new KP(t);return this.Vr.forEachTarget(e,(o=>i.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>i.Er(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(c0)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),c0):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,a,c,d,f,g;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,c=Date.now(),this.nthSequenceNumber(e,o)))).next((w=>(i=w,d=Date.now(),this.removeTargets(e,i,t)))).next((w=>(a=w,f=Date.now(),this.removeOrphanedDocuments(e,i)))).next((w=>(g=Date.now(),Po()<=Le.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-_}ms
	Determined least recently used ${o} in `+(d-c)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${w} documents in `+(g-f)+`ms
Total Duration: ${g-_}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:w}))))}}function JP(n,e){return new YP(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(){this.changes=new Ps((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?X.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&pl(i.mutation,o,fn.empty(),Xe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Ve()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Ve()){const o=ys();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((a=>{let c=sl();return a.forEach(((d,f)=>{c=c.insert(d,f.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=ys();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Ve())))}populateOverlays(e,t,i){const o=[];return i.forEach((a=>{t.has(a)||o.push(a)})),this.documentOverlayCache.getOverlays(e,o).next((a=>{a.forEach(((c,d)=>{t.set(c,d)}))}))}computeViews(e,t,i,o){let a=Gr();const c=fl(),d=(function(){return fl()})();return t.forEach(((f,g)=>{const _=i.get(g.key);o.has(g.key)&&(_===void 0||_.mutation instanceof ji)?a=a.insert(g.key,g):_!==void 0?(c.set(g.key,_.mutation.getFieldMask()),pl(_.mutation,g,_.mutation.getFieldMask(),Xe.now())):c.set(g.key,fn.empty())})),this.recalculateAndSaveOverlays(e,a).next((f=>(f.forEach(((g,_)=>c.set(g,_))),t.forEach(((g,_)=>{var w;return d.set(g,new ZP(_,(w=c.get(g))!==null&&w!==void 0?w:null))})),d)))}recalculateAndSaveOverlays(e,t){const i=fl();let o=new st(((c,d)=>c-d)),a=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const d of c)d.keys().forEach((f=>{const g=t.get(f);if(g===null)return;let _=i.get(f)||fn.empty();_=d.applyToLocalView(g,_),i.set(f,_);const w=(o.get(d.batchId)||Ve()).add(f);o=o.insert(d.batchId,w)}))})).next((()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),g=f.key,_=f.value,w=P1();_.forEach((T=>{if(!a.has(T)){const R=L1(t.get(T),i.get(T));R!==null&&w.set(T,R),a=a.add(T)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,w))}return X.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(c){return _e.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):S1(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((a=>{const c=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-a.size):X.resolve(ys());let d=yl,f=a;return c.next((g=>X.forEach(g,((_,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(_)?X.resolve():this.remoteDocumentCache.getEntry(e,_).next((T=>{f=f.insert(_,T)}))))).next((()=>this.populateOverlays(e,g,a))).next((()=>this.computeViews(e,f,g,Ve()))).next((_=>({batchId:d,changes:R1(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((i=>{let o=sl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const a=t.collectionGroup;let c=sl();return this.indexManager.getCollectionParents(e,a).next((d=>X.forEach(d,(f=>{const g=(function(w,T){return new Pl(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,g,i,o).next((_=>{_.forEach(((w,T)=>{c=c.insert(w,T)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,a,o)))).next((c=>{a.forEach(((f,g)=>{const _=g.getKey();c.get(_)===null&&(c=c.insert(_,Bt.newInvalidDocument(_)))}));let d=sl();return c.forEach(((f,g)=>{const _=a.get(f);_!==void 0&&pl(_.mutation,g,fn.empty(),Xe.now()),ih(t,g)&&(d=d.insert(f,g))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return X.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:fr(o.createTime)}})(t)),X.resolve()}getNamedQuery(e,t){return X.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:$P(o.bundledQuery),readTime:fr(o.readTime)}})(t)),X.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(){this.overlays=new st(_e.comparator),this.kr=new Map}getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ys();return X.forEach(t,(o=>this.getOverlay(e,o).next((a=>{a!==null&&i.set(o,a)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,a)=>{this.wt(e,t,a)})),X.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(i)),X.resolve()}getOverlaysForCollection(e,t,i){const o=ys(),a=t.length+1,c=new _e(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const f=d.getNext().value,g=f.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===a&&f.largestBatchId>i&&o.set(f.getKey(),f)}return X.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let a=new st(((g,_)=>g-_));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>i){let _=a.get(g.largestBatchId);_===null&&(_=ys(),a=a.insert(g.largestBatchId,_)),_.set(g.getKey(),g)}}const d=ys(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((g,_)=>d.set(g,_))),!(d.size()>=o)););return X.resolve(d)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new EP(t,i));let a=this.kr.get(t);a===void 0&&(a=Ve(),this.kr.set(t,a)),this.kr.set(t,a.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(){this.sessionToken=Mt.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.qr=new Tt(Ct.Qr),this.$r=new Tt(Ct.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Ct(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Ct(e,t))}Gr(e,t){e.forEach((i=>this.removeReference(i,t)))}zr(e){const t=new _e(new Qe([])),i=new Ct(t,e),o=new Ct(t,e+1),a=[];return this.$r.forEachInRange([i,o],(c=>{this.Wr(c),a.push(c.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new _e(new Qe([])),i=new Ct(t,e),o=new Ct(t,e+1);let a=Ve();return this.$r.forEachInRange([i,o],(c=>{a=a.add(c.key)})),a}containsKey(e){const t=new Ct(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ct{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return _e.comparator(e.key,t.key)||Me(e.Hr,t.Hr)}static Ur(e,t){return Me(e.Hr,t.Hr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Tt(Ct.Qr)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new wP(a,t,i,o);this.mutationQueue.push(c);for(const d of o)this.Yr=this.Yr.add(new Ct(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return X.resolve(c)}lookupMutationBatch(e,t){return X.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),a=o<0?0:o;return X.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Xp:this.er-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([i,o],(c=>{const d=this.Zr(c.Hr);a.push(d)})),X.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Tt(Me);return t.forEach((o=>{const a=new Ct(o,0),c=new Ct(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,c],(d=>{i=i.add(d.Hr)}))})),X.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let a=i;_e.isDocumentKey(a)||(a=a.child(""));const c=new Ct(new _e(a),0);let d=new Tt(Me);return this.Yr.forEachWhile((f=>{const g=f.key.path;return!!i.isPrefixOf(g)&&(g.length===o&&(d=d.add(f.Hr)),!0)}),c),X.resolve(this.ei(d))}ei(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){$e(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return X.forEach(t.mutations,(o=>{const a=new Ct(o.key,t.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=i}))}rr(e){}containsKey(e,t){const i=new Ct(t,0),o=this.Yr.firstAfterOrEqual(i);return X.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.ni=e,this.docs=(function(){return new st(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),a=o?o.size:0,c=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return X.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=Gr();return t.forEach((o=>{const a=this.docs.get(o);i=i.insert(o,a?a.document.mutableCopy():Bt.newInvalidDocument(o))})),X.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let a=Gr();const c=t.path,d=new _e(c.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:g,value:{document:_}}=f.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||OR(MR(_),i)<=0||(o.has(_.key)||ih(t,_))&&(a=a.insert(_.key,_.mutableCopy()))}return X.resolve(a)}getAllFromCollectionGroup(e,t,i,o){Ae(9500)}ri(e,t){return X.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new ox(this)}getSize(e){return X.resolve(this.size)}}class ox extends XP{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)})),X.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this.persistence=e,this.ii=new Ps((t=>tg(t)),ng),this.lastRemoteSnapshotVersion=Ne.min(),this.highestTargetId=0,this.si=0,this.oi=new ug,this.targetCount=0,this._i=Wo.ar()}forEachTarget(e,t){return this.ii.forEach(((i,o)=>t(o))),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),X.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Wo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.hr(t),X.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,i){let o=0;const a=[];return this.ii.forEach(((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.ii.delete(c),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),X.waitFor(a).next((()=>o))}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return X.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),X.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach((c=>{a.push(o.markPotentiallyOrphaned(e,c))})),X.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),X.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return X.resolve(i)}containsKey(e,t){return X.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,t){this.ai={},this.overlays={},this.ui=new eh(0),this.ci=!1,this.ci=!0,this.li=new rx,this.referenceDelegate=e(this),this.hi=new ax(this),this.indexManager=new HP,this.remoteDocumentCache=(function(o){return new sx(o)})((i=>this.referenceDelegate.Pi(i))),this.serializer=new qP(t),this.Ti=new tx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new ix(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){he("MemoryPersistence","Starting transaction:",e);const o=new lx(this.ui.next());return this.referenceDelegate.Ii(),i(o).next((a=>this.referenceDelegate.di(o).next((()=>a)))).toPromise().then((a=>(o.raiseOnCommittedEvent(),a)))}Ei(e,t){return X.or(Object.values(this.ai).map((i=>()=>i.containsKey(e,t))))}}class lx extends VR{constructor(e){super(),this.currentSequenceNumber=e}}class cg{constructor(e){this.persistence=e,this.Ai=new ug,this.Ri=null}static Vi(e){return new cg(e)}get mi(){if(this.Ri)return this.Ri;throw Ae(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),X.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),X.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((a=>this.mi.add(a.toString())))})).next((()=>i.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.mi,(i=>{const o=_e.fromPath(i);return this.fi(e,o).next((a=>{a||t.removeEntry(o,Ne.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return X.or([()=>X.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Uc{constructor(e,t){this.persistence=e,this.gi=new Ps((i=>UR(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=JP(this,t)}static Vi(e,t){return new Uc(e,t)}Ii(){}di(e){return X.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}yr(e){let t=0;return this.gr(e,(i=>{t++})).next((()=>t))}gr(e,t){return X.forEach(this.gi,((i,o)=>this.Sr(e,i,o).next((a=>a?X.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ri(e,(c=>this.Sr(e,c,t).next((d=>{d||(i++,a.removeEntry(c,Ne.min()))})))).next((()=>a.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),X.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),X.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),X.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=gc(e.data.value)),t}Sr(e,t,i){return X.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return X.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Ve(),o=Ve();for(const a of t.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new hg(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return xI()?8:FR(zt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const a={result:null};return this.ps(e,t).next((c=>{a.result=c})).next((()=>{if(!a.result)return this.ys(e,t,o,i).next((c=>{a.result=c}))})).next((()=>{if(a.result)return;const c=new ux;return this.ws(e,t,c).next((d=>{if(a.result=d,this.Rs)return this.Ss(e,t,c,d.size)}))})).next((()=>a.result))}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(Po()<=Le.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",xo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),X.resolve()):(Po()<=Le.DEBUG&&he("QueryEngine","Query:",xo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(Po()<=Le.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",xo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dr(t))):X.resolve())}ps(e,t){if(e0(t))return X.resolve(null);let i=dr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=gp(t,null,"F"),i=dr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((a=>{const c=Ve(...a);return this.gs.getDocuments(e,c).next((d=>this.indexManager.getMinOffset(e,i).next((f=>{const g=this.bs(t,d);return this.Ds(t,g,c,f.readTime)?this.ps(e,gp(t,null,"F")):this.vs(e,g,t,f)}))))})))))}ys(e,t,i,o){return e0(t)||o.isEqual(Ne.min())?X.resolve(null):this.gs.getDocuments(e,i).next((a=>{const c=this.bs(t,a);return this.Ds(t,c,i,o)?X.resolve(null):(Po()<=Le.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),xo(t)),this.vs(e,c,t,DR(o,yl)).next((d=>d)))}))}bs(e,t){let i=new Tt(A1(e));return t.forEach(((o,a)=>{ih(e,a)&&(i=i.add(a))})),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ws(e,t,i){return Po()<=Le.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",xo(t)),this.gs.getDocumentsMatchingQuery(e,t,Ni.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next((a=>(t.forEach((c=>{a=a.insert(c.key,c)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="LocalStore",hx=3e8;class dx{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new st(Me),this.Ms=new Ps((a=>tg(a)),ng),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ex(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function fx(n,e,t,i){return new dx(n,e,t,i)}async function Y1(n,e){const t=De(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((a=>(o=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(i)))).next((a=>{const c=[],d=[];let f=Ve();for(const g of o){c.push(g.batchId);for(const _ of g.mutations)f=f.add(_.key)}for(const g of a){d.push(g.batchId);for(const _ of g.mutations)f=f.add(_.key)}return t.localDocuments.getDocuments(i,f).next((g=>({Bs:g,removedBatchIds:c,addedBatchIds:d})))}))}))}function px(n,e){const t=De(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(d,f,g,_){const w=g.batch,T=w.keys();let R=X.resolve();return T.forEach((M=>{R=R.next((()=>_.getEntry(f,M))).next((V=>{const L=g.docVersions.get(M);$e(L!==null,48541),V.version.compareTo(L)<0&&(w.applyToRemoteDocument(V,g),V.isValidDocument()&&(V.setReadTime(g.commitVersion),_.addEntry(V)))}))})),R.next((()=>d.mutationQueue.removeMutationBatch(f,w)))})(t,i,e,a).next((()=>a.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(d){let f=Ve();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(f=f.add(d.batch.mutations[g].key));return f})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function J1(n){const e=De(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function gx(n,e){const t=De(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const d=[];e.targetChanges.forEach(((_,w)=>{const T=o.get(w);if(!T)return;d.push(t.hi.removeMatchingKeys(a,_.removedDocuments,w).next((()=>t.hi.addMatchingKeys(a,_.addedDocuments,w))));let R=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(w)!==null?R=R.withResumeToken(Mt.EMPTY_BYTE_STRING,Ne.min()).withLastLimboFreeSnapshotVersion(Ne.min()):_.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(_.resumeToken,i)),o=o.insert(w,R),(function(V,L,$){return V.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=hx?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(T,R,_)&&d.push(t.hi.updateTargetData(a,R))}));let f=Gr(),g=Ve();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,_))})),d.push(mx(a,c,e.documentUpdates).next((_=>{f=_.Ls,g=_.ks}))),!i.isEqual(Ne.min())){const _=t.hi.getLastRemoteSnapshotVersion(a).next((w=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,i)));d.push(_)}return X.waitFor(d).next((()=>c.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,f,g))).next((()=>f))})).then((a=>(t.Fs=o,a)))}function mx(n,e,t){let i=Ve(),o=Ve();return t.forEach((a=>i=i.add(a))),e.getEntries(n,i).next((a=>{let c=Gr();return t.forEach(((d,f)=>{const g=a.get(d);f.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(d)),f.isNoDocument()&&f.version.isEqual(Ne.min())?(e.removeEntry(d,f.readTime),c=c.insert(d,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||f.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(f),c=c.insert(d,f)):he(dg,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",f.version)})),{Ls:c,ks:o}}))}function yx(n,e){const t=De(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Xp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function vx(n,e){const t=De(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.hi.getTargetData(i,e).next((a=>a?(o=a,X.resolve(o)):t.hi.allocateTargetId(i).next((c=>(o=new ki(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i}))}async function wp(n,e,t){const i=De(n),o=i.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",a,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!ea(c))throw c;he(dg,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function f0(n,e,t){const i=De(n);let o=Ne.min(),a=Ve();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(f,g,_){const w=De(f),T=w.Ms.get(_);return T!==void 0?X.resolve(w.Fs.get(T)):w.hi.getTargetData(g,_)})(i,c,dr(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(c,d.targetId).next((f=>{a=f}))})).next((()=>i.Cs.getDocumentsMatchingQuery(c,e,t?o:Ne.min(),t?a:Ve()))).next((d=>(_x(i,sP(e),d),{documents:d,qs:a})))))}function _x(n,e,t){let i=n.xs.get(e)||Ne.min();t.forEach(((o,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)})),n.xs.set(e,i)}class p0{constructor(){this.activeTargetIds=hP()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wx{constructor(){this.Fo=new p0,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new p0,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="ConnectivityMonitor";class m0{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){he(g0,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){he(g0,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc=null;function Ep(){return sc===null?sc=(function(){return 268435456+Math.round(2147483648*Math.random())})():sc++,"0x"+sc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="RestConnection",Tx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ix{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===Dc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,a){const c=Ep(),d=this.Go(e,t.toUriEncodedString());he(uf,`Sending RPC '${e}' ${c}:`,d,i);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,o,a);const{host:g}=new URL(d),_=Qo(g);return this.jo(e,d,f,i,_).then((w=>(he(uf,`Received RPC '${e}' ${c}: `,w),w)),(w=>{throw xi(uf,`RPC '${e}' ${c} failed with error: `,w,"url: ",d,"request:",i),w}))}Jo(e,t,i,o,a,c){return this.Wo(e,t,i,o,a)}zo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Xo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,a)=>e[a]=o)),i&&i.headers.forEach(((o,a)=>e[a]=o))}Go(e,t){const i=Tx[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection";class kx extends Ix{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,a){const c=Ep();return new Promise(((d,f)=>{const g=new Xw;g.setWithCredentials(!0),g.listenOnce(Zw.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case pc.NO_ERROR:const w=g.getResponseJson();he(jt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(w)),d(w);break;case pc.TIMEOUT:he(jt,`RPC '${e}' ${c} timed out`),f(new ue(Y.DEADLINE_EXCEEDED,"Request time out"));break;case pc.HTTP_ERROR:const T=g.getStatus();if(he(jt,`RPC '${e}' ${c} failed with status:`,T,"response text:",g.getResponseText()),T>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const M=R?.error;if(M&&M.status&&M.message){const V=(function($){const G=$.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(G)>=0?G:Y.UNKNOWN})(M.status);f(new ue(V,M.message))}else f(new ue(Y.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new ue(Y.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{c_:e,streamId:c,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{he(jt,`RPC '${e}' ${c} completed.`)}}));const _=JSON.stringify(o);he(jt,`RPC '${e}' ${c} sending request:`,o),g.send(t,"POST",_,i,15)}))}P_(e,t,i){const o=Ep(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=n1(),d=t1(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const _=a.join("");he(jt,`Creating RPC '${e}' stream ${o}: ${_}`,f);const w=c.createWebChannel(_,f);this.T_(w);let T=!1,R=!1;const M=new Sx({Ho:L=>{R?he(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(T||(he(jt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),T=!0),he(jt,`RPC '${e}' stream ${o} sending:`,L),w.send(L))},Yo:()=>w.close()}),V=(L,$,G)=>{L.listen($,(W=>{try{G(W)}catch(Q){setTimeout((()=>{throw Q}),0)}}))};return V(w,il.EventType.OPEN,(()=>{R||(he(jt,`RPC '${e}' stream ${o} transport opened.`),M.s_())})),V(w,il.EventType.CLOSE,(()=>{R||(R=!0,he(jt,`RPC '${e}' stream ${o} transport closed`),M.__(),this.I_(w))})),V(w,il.EventType.ERROR,(L=>{R||(R=!0,xi(jt,`RPC '${e}' stream ${o} transport errored. Name:`,L.name,"Message:",L.message),M.__(new ue(Y.UNAVAILABLE,"The operation could not be completed")))})),V(w,il.EventType.MESSAGE,(L=>{var $;if(!R){const G=L.data[0];$e(!!G,16349);const W=G,Q=W?.error||(($=W[0])===null||$===void 0?void 0:$.error);if(Q){he(jt,`RPC '${e}' stream ${o} received error:`,Q);const re=Q.status;let K=(function(A){const N=pt[A];if(N!==void 0)return F1(N)})(re),P=Q.message;K===void 0&&(K=Y.INTERNAL,P="Unknown error status: "+re+" with message "+Q.message),R=!0,M.__(new ue(K,P)),w.close()}else he(jt,`RPC '${e}' stream ${o} received:`,G),M.a_(G)}})),V(d,e1.STAT_EVENT,(L=>{L.stat===lp.PROXY?he(jt,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===lp.NOPROXY&&he(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{M.o_()}),0),M}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function cf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(n){return new PP(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,t,i=1e3,o=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&he("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="PersistentStream";class Z1{constructor(e,t,i,o,a,c,d,f){this.Fi=e,this.w_=i,this.S_=o,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new X1(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Wr(t.toString()),Wr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.b_===t&&this.W_(i,o)}),(i=>{e((()=>{const o=new ue(Y.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)}))}))}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.e_((()=>{i((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{i((()=>this.G_(o)))})),this.stream.onMessage((o=>{i((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return he(y0,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(he(y0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ax extends Z1{constructor(e,t,i,o,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=bP(this.serializer,e),i=(function(a){if(!("targetChange"in a))return Ne.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?Ne.min():c.readTime?fr(c.readTime):Ne.min()})(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=_p(this.serializer),t.addTarget=(function(a,c){let d;const f=c.target;if(d=fp(f)?{documents:OP(a,f)}:{query:LP(a,f).Vt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=B1(a,c.resumeToken);const g=mp(a,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ne.min())>0){d.readTime=jc(a,c.snapshotVersion.toTimestamp());const g=mp(a,c.expectedCount);g!==null&&(d.expectedCount=g)}return d})(this.serializer,e);const i=FP(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=_p(this.serializer),t.removeTarget=e,this.k_(t)}}class Cx extends Z1{constructor(e,t,i,o,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return $e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){$e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=MP(e.writeResults,e.commitTime),i=fr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=_p(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>DP(this.serializer,i)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{}class Px extends Rx{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ue(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Wo(e,yp(t,i),o,a,c))).catch((a=>{throw a.name==="FirebaseError"?(a.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ue(Y.UNKNOWN,a.toString())}))}Jo(e,t,i,o,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,d])=>this.connection.Jo(e,yp(t,i),o,c,d,a))).catch((c=>{throw c.name==="FirebaseError"?(c.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue(Y.UNKNOWN,c.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class xx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Wr(t),this._a=!1):he("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="RemoteStore";class Nx{constructor(e,t,i,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((c=>{i.enqueueAndForget((async()=>{xs(this)&&(he(ks,"Restarting streams for network reachability change."),await(async function(f){const g=De(f);g.Ia.add(4),await bl(g),g.Aa.set("Unknown"),g.Ia.delete(4),await uh(g)})(this))}))})),this.Aa=new xx(i,o)}}async function uh(n){if(xs(n))for(const e of n.da)await e(!0)}async function bl(n){for(const e of n.da)await e(!1)}function eE(n,e){const t=De(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),mg(t)?gg(t):ta(t).x_()&&pg(t,e))}function fg(n,e){const t=De(n),i=ta(t);t.Ta.delete(e),i.x_()&&tE(t,e),t.Ta.size===0&&(i.x_()?i.B_():xs(t)&&t.Aa.set("Unknown"))}function pg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ne.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ta(n).H_(e)}function tE(n,e){n.Ra.$e(e),ta(n).Y_(e)}function gg(n){n.Ra=new kP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ta(n).start(),n.Aa.aa()}function mg(n){return xs(n)&&!ta(n).M_()&&n.Ta.size>0}function xs(n){return De(n).Ia.size===0}function nE(n){n.Ra=void 0}async function bx(n){n.Aa.set("Online")}async function Dx(n){n.Ta.forEach(((e,t)=>{pg(n,e)}))}async function Mx(n,e){nE(n),mg(n)?(n.Aa.la(e),gg(n)):n.Aa.set("Unknown")}async function Ox(n,e,t){if(n.Aa.set("Online"),e instanceof U1&&e.state===2&&e.cause)try{await(async function(o,a){const c=a.cause;for(const d of a.targetIds)o.Ta.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.Ta.delete(d),o.Ra.removeTarget(d))})(n,e)}catch(i){he(ks,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Bc(n,i)}else if(e instanceof vc?n.Ra.Ye(e):e instanceof j1?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ne.min()))try{const i=await J1(n.localStore);t.compareTo(i)>=0&&await(function(a,c){const d=a.Ra.Pt(c);return d.targetChanges.forEach(((f,g)=>{if(f.resumeToken.approximateByteSize()>0){const _=a.Ta.get(g);_&&a.Ta.set(g,_.withResumeToken(f.resumeToken,c))}})),d.targetMismatches.forEach(((f,g)=>{const _=a.Ta.get(f);if(!_)return;a.Ta.set(f,_.withResumeToken(Mt.EMPTY_BYTE_STRING,_.snapshotVersion)),tE(a,f);const w=new ki(_.target,f,g,_.sequenceNumber);pg(a,w)})),a.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(i){he(ks,"Failed to raise snapshot:",i),await Bc(n,i)}}async function Bc(n,e,t){if(!ea(e))throw e;n.Ia.add(1),await bl(n),n.Aa.set("Offline"),t||(t=()=>J1(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{he(ks,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await uh(n)}))}function rE(n,e){return e().catch((t=>Bc(n,t,e)))}async function ch(n){const e=De(n),t=Oi(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Xp;for(;Lx(e);)try{const o=await yx(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,Vx(e,o)}catch(o){await Bc(e,o)}iE(e)&&sE(e)}function Lx(n){return xs(n)&&n.Pa.length<10}function Vx(n,e){n.Pa.push(e);const t=Oi(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function iE(n){return xs(n)&&!Oi(n).M_()&&n.Pa.length>0}function sE(n){Oi(n).start()}async function Fx(n){Oi(n).na()}async function jx(n){const e=Oi(n);for(const t of n.Pa)e.X_(t.mutations)}async function Ux(n,e,t){const i=n.Pa.shift(),o=og.from(i,e,t);await rE(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await ch(n)}async function Bx(n,e){e&&Oi(n).Z_&&await(async function(i,o){if((function(c){return IP(c)&&c!==Y.ABORTED})(o.code)){const a=i.Pa.shift();Oi(i).N_(),await rE(i,(()=>i.remoteSyncer.rejectFailedWrite(a.batchId,o))),await ch(i)}})(n,e),iE(n)&&sE(n)}async function v0(n,e){const t=De(n);t.asyncQueue.verifyOperationInProgress(),he(ks,"RemoteStore received new credentials");const i=xs(t);t.Ia.add(3),await bl(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await uh(t)}async function zx(n,e){const t=De(n);e?(t.Ia.delete(2),await uh(t)):e||(t.Ia.add(2),await bl(t),t.Aa.set("Unknown"))}function ta(n){return n.Va||(n.Va=(function(t,i,o){const a=De(t);return a.ia(),new Ax(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:bx.bind(null,n),e_:Dx.bind(null,n),n_:Mx.bind(null,n),J_:Ox.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),mg(n)?gg(n):n.Aa.set("Unknown")):(await n.Va.stop(),nE(n))}))),n.Va}function Oi(n){return n.ma||(n.ma=(function(t,i,o){const a=De(t);return a.ia(),new Cx(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Fx.bind(null,n),n_:Bx.bind(null,n),ea:jx.bind(null,n),ta:Ux.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await ch(n)):(await n.ma.stop(),n.Pa.length>0&&(he(ks,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t,i,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=a,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,a){const c=Date.now()+i,d=new yg(e,t,c,o,a);return d.start(i),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vg(n,e){if(Wr("AsyncQueue",`${e}: ${n}`),ea(n))return new ue(Y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{static emptySet(e){return new Vo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||_e.comparator(t.key,i.key):(t,i)=>_e.comparator(t.key,i.key),this.keyedMap=sl(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Vo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(){this.fa=new st(_e.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Ae(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Go{constructor(e,t,i,o,a,c,d,f,g){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=g}static fromInitialDocuments(e,t,i,o,a){const c=[];return t.forEach((d=>{c.push({type:0,doc:d})})),new Go(e,t,Vo.emptySet(t),c,i,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class $x{constructor(){this.queries=w0(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=De(t),a=o.queries;o.queries=w0(),a.forEach(((c,d)=>{for(const f of d.wa)f.onError(i)}))})(this,new ue(Y.ABORTED,"Firestore shutting down"))}}function w0(){return new Ps((n=>k1(n)),rh)}async function oE(n,e){const t=De(n);let i=3;const o=e.query;let a=t.queries.get(o);a?!a.Sa()&&e.ba()&&(i=2):(a=new qx,i=e.ba()?0:1);try{switch(i){case 0:a.ya=await t.onListen(o,!0);break;case 1:a.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=vg(c,`Initialization of query '${xo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&_g(t)}async function aE(n,e){const t=De(n),i=e.query;let o=3;const a=t.queries.get(i);if(a){const c=a.wa.indexOf(e);c>=0&&(a.wa.splice(c,1),a.wa.length===0?o=e.ba()?0:1:!a.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Hx(n,e){const t=De(n);let i=!1;for(const o of e){const a=o.query,c=t.queries.get(a);if(c){for(const d of c.wa)d.Ca(o)&&(i=!0);c.ya=o}}i&&_g(t)}function Wx(n,e,t){const i=De(n),o=i.queries.get(e);if(o)for(const a of o.wa)a.onError(t);i.queries.delete(e)}function _g(n){n.Da.forEach((e=>{e.next()}))}var Tp,E0;(E0=Tp||(Tp={})).Fa="default",E0.Cache="cache";class lE{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Go(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Tp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.key=e}}class cE{constructor(e){this.key=e}}class Gx{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ve(),this.mutatedKeys=Ve(),this.Xa=A1(e),this.eu=new Vo(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new _0,o=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const f=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,w)=>{const T=o.get(_),R=ih(this.query,w)?w:null,M=!!T&&this.mutatedKeys.has(T.key),V=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let L=!1;T&&R?T.data.isEqual(R.data)?M!==V&&(i.track({type:3,doc:R}),L=!0):this.iu(T,R)||(i.track({type:2,doc:R}),L=!0,(f&&this.Xa(R,f)>0||g&&this.Xa(R,g)<0)&&(d=!0)):!T&&R?(i.track({type:0,doc:R}),L=!0):T&&!R&&(i.track({type:1,doc:T}),L=!0,(f||g)&&(d=!0)),L&&(R?(c=c.add(R),a=V?a.add(_):a.delete(_)):(c=c.delete(_),a=a.delete(_)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),a=a.delete(_.key),i.track({type:1,doc:_})}return{eu:c,ru:i,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort(((_,w)=>(function(R,M){const V=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{At:L})}};return V(R)-V(M)})(_.type,w.type)||this.Xa(_.doc,w.doc))),this.su(i),o=o!=null&&o;const d=t&&!o?this.ou():[],f=this.Za.size===0&&this.current&&!o?1:0,g=f!==this.Ya;return this.Ya=f,c.length!==0||g?{snapshot:new Go(this.query,e.eu,a,c,e.mutatedKeys,f===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new _0,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ve(),this.eu.forEach((i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))}));const t=[];return e.forEach((i=>{this.Za.has(i)||t.push(new cE(i))})),this.Za.forEach((i=>{e.has(i)||t.push(new uE(i))})),t}uu(e){this.Ha=e.qs,this.Za=Ve();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Go.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const wg="SyncEngine";class Kx{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Qx{constructor(e){this.key=e,this.lu=!1}}class Yx{constructor(e,t,i,o,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new Ps((d=>k1(d)),rh),this.Tu=new Map,this.Iu=new Set,this.du=new st(_e.comparator),this.Eu=new Map,this.Au=new ug,this.Ru={},this.Vu=new Map,this.mu=Wo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Jx(n,e,t=!0){const i=mE(n);let o;const a=i.Pu.get(e);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.cu()):o=await hE(i,e,t,!0),o}async function Xx(n,e){const t=mE(n);await hE(t,e,!0,!1)}async function hE(n,e,t,i){const o=await vx(n.localStore,dr(e)),a=o.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let d;return i&&(d=await Zx(n,e,a,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&eE(n.remoteStore,o),d}async function Zx(n,e,t,i,o){n.gu=(w,T,R)=>(async function(V,L,$,G){let W=L.view.nu($);W.Ds&&(W=await f0(V.localStore,L.query,!1).then((({documents:P})=>L.view.nu(P,W))));const Q=G&&G.targetChanges.get(L.targetId),re=G&&G.targetMismatches.get(L.targetId)!=null,K=L.view.applyChanges(W,V.isPrimaryClient,Q,re);return I0(V,L.targetId,K._u),K.snapshot})(n,w,T,R);const a=await f0(n.localStore,e,!0),c=new Gx(e,a.qs),d=c.nu(a.documents),f=Nl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),g=c.applyChanges(d,n.isPrimaryClient,f);I0(n,t,g._u);const _=new Kx(e,t,c);return n.Pu.set(e,_),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),g.snapshot}async function eN(n,e,t){const i=De(n),o=i.Pu.get(e),a=i.Tu.get(o.targetId);if(a.length>1)return i.Tu.set(o.targetId,a.filter((c=>!rh(c,e)))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await wp(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&fg(i.remoteStore,o.targetId),Ip(i,o.targetId)})).catch(Zo)):(Ip(i,o.targetId),await wp(i.localStore,o.targetId,!0))}async function tN(n,e){const t=De(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),fg(t.remoteStore,i.targetId))}async function nN(n,e,t){const i=uN(n);try{const o=await(function(c,d){const f=De(c),g=Xe.now(),_=d.reduce(((R,M)=>R.add(M.key)),Ve());let w,T;return f.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let M=Gr(),V=Ve();return f.Os.getEntries(R,_).next((L=>{M=L,M.forEach((($,G)=>{G.isValidDocument()||(V=V.add($))}))})).next((()=>f.localDocuments.getOverlayedDocuments(R,M))).next((L=>{w=L;const $=[];for(const G of d){const W=vP(G,w.get(G.key).overlayedDocument);W!=null&&$.push(new ji(G.key,W,y1(W.value.mapValue),gn.exists(!0)))}return f.mutationQueue.addMutationBatch(R,g,$,d)})).next((L=>{T=L;const $=L.applyToLocalDocumentSet(w,V);return f.documentOverlayCache.saveOverlays(R,L.batchId,$)}))})).then((()=>({batchId:T.batchId,changes:R1(w)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,d,f){let g=c.Ru[c.currentUser.toKey()];g||(g=new st(Me)),g=g.insert(d,f),c.Ru[c.currentUser.toKey()]=g})(i,o.batchId,t),await Dl(i,o.changes),await ch(i.remoteStore)}catch(o){const a=vg(o,"Failed to persist write");t.reject(a)}}async function dE(n,e){const t=De(n);try{const i=await gx(t.localStore,e);e.targetChanges.forEach(((o,a)=>{const c=t.Eu.get(a);c&&($e(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.lu=!0:o.modifiedDocuments.size>0?$e(c.lu,14607):o.removedDocuments.size>0&&($e(c.lu,42227),c.lu=!1))})),await Dl(t,i,e)}catch(i){await Zo(i)}}function T0(n,e,t){const i=De(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach(((a,c)=>{const d=c.view.va(e);d.snapshot&&o.push(d.snapshot)})),(function(c,d){const f=De(c);f.onlineState=d;let g=!1;f.queries.forEach(((_,w)=>{for(const T of w.wa)T.va(d)&&(g=!0)})),g&&_g(f)})(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function rN(n,e,t){const i=De(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),a=o&&o.key;if(a){let c=new st(_e.comparator);c=c.insert(a,Bt.newNoDocument(a,Ne.min()));const d=Ve().add(a),f=new ah(Ne.min(),new Map,new st(Me),c,d);await dE(i,f),i.du=i.du.remove(a),i.Eu.delete(e),Eg(i)}else await wp(i.localStore,e,!1).then((()=>Ip(i,e,t))).catch(Zo)}async function iN(n,e){const t=De(n),i=e.batch.batchId;try{const o=await px(t.localStore,e);pE(t,i,null),fE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Dl(t,o)}catch(o){await Zo(o)}}async function sN(n,e,t){const i=De(n);try{const o=await(function(c,d){const f=De(c);return f.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let _;return f.mutationQueue.lookupMutationBatch(g,d).next((w=>($e(w!==null,37113),_=w.keys(),f.mutationQueue.removeMutationBatch(g,w)))).next((()=>f.mutationQueue.performConsistencyCheck(g))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(g,_,d))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_))).next((()=>f.localDocuments.getDocuments(g,_)))}))})(i.localStore,e);pE(i,e,t),fE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Dl(i,o)}catch(o){await Zo(o)}}function fE(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function pE(n,e,t){const i=De(n);let o=i.Ru[i.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function Ip(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((i=>{n.Au.containsKey(i)||gE(n,i)}))}function gE(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(fg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Eg(n))}function I0(n,e,t){for(const i of t)i instanceof uE?(n.Au.addReference(i.key,e),oN(n,i)):i instanceof cE?(he(wg,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||gE(n,i.key)):Ae(19791,{yu:i})}function oN(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(he(wg,"New document in limbo: "+t),n.Iu.add(i),Eg(n))}function Eg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new _e(Qe.fromString(e)),i=n.mu.next();n.Eu.set(i,new Qx(t)),n.du=n.du.insert(t,i),eE(n.remoteStore,new ki(dr(rg(t.path)),i,"TargetPurposeLimboResolution",eh.ue))}}async function Dl(n,e,t){const i=De(n),o=[],a=[],c=[];i.Pu.isEmpty()||(i.Pu.forEach(((d,f)=>{c.push(i.gu(f,e,t).then((g=>{var _;if((g||t)&&i.isPrimaryClient){const w=g?!g.fromCache:(_=t?.targetChanges.get(f.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(g){o.push(g);const w=hg.Es(f.targetId,g);a.push(w)}})))})),await Promise.all(c),i.hu.J_(o),await(async function(f,g){const _=De(f);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>X.forEach(g,(T=>X.forEach(T.Is,(R=>_.persistence.referenceDelegate.addReference(w,T.targetId,R))).next((()=>X.forEach(T.ds,(R=>_.persistence.referenceDelegate.removeReference(w,T.targetId,R)))))))))}catch(w){if(!ea(w))throw w;he(dg,"Failed to update sequence numbers: "+w)}for(const w of g){const T=w.targetId;if(!w.fromCache){const R=_.Fs.get(T),M=R.snapshotVersion,V=R.withLastLimboFreeSnapshotVersion(M);_.Fs=_.Fs.insert(T,V)}}})(i.localStore,a))}async function aN(n,e){const t=De(n);if(!t.currentUser.isEqual(e)){he(wg,"User change. New user:",e.toKey());const i=await Y1(t.localStore,e);t.currentUser=e,(function(a,c){a.Vu.forEach((d=>{d.forEach((f=>{f.reject(new ue(Y.CANCELLED,c))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Dl(t,i.Bs)}}function lN(n,e){const t=De(n),i=t.Eu.get(e);if(i&&i.lu)return Ve().add(i.key);{let o=Ve();const a=t.Tu.get(e);if(!a)return o;for(const c of a){const d=t.Pu.get(c);o=o.unionWith(d.view.tu)}return o}}function mE(n){const e=De(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rN.bind(null,e),e.hu.J_=Hx.bind(null,e.eventManager),e.hu.pu=Wx.bind(null,e.eventManager),e}function uN(n){const e=De(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sN.bind(null,e),e}class zc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lh(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return fx(this.persistence,new cx,e.initialUser,this.serializer)}Du(e){return new Q1(cg.Vi,this.serializer)}bu(e){return new wx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zc.provider={build:()=>new zc};class cN extends zc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){$e(this.persistence.referenceDelegate instanceof Uc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new QP(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new Q1((i=>Uc.Vi(i,t)),this.serializer)}}class Sp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>T0(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=aN.bind(null,this.syncEngine),await zx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new $x})()}createDatastore(e){const t=lh(e.databaseInfo.databaseId),i=(function(a){return new kx(a)})(e.databaseInfo);return(function(a,c,d,f){return new Px(a,c,d,f)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,a,c,d){return new Nx(i,o,a,c,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>T0(this.syncEngine,t,0)),(function(){return m0.C()?new m0:new Ex})())}createSyncEngine(e,t){return(function(o,a,c,d,f,g,_){const w=new Yx(o,a,c,d,f,g);return _&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const a=De(o);he(ks,"RemoteStore shutting down."),a.Ia.add(5),await bl(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Sp.provider={build:()=>new Sp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Wr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="FirestoreClient";class hN{constructor(e,t,i,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=Jp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,(async c=>{he(Li,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(he(Li,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=vg(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function hf(n,e){n.asyncQueue.verifyOperationInProgress(),he(Li,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await Y1(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>{xi("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{he("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{xi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),n._offlineComponents=e}async function S0(n,e){n.asyncQueue.verifyOperationInProgress();const t=await dN(n);he(Li,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>v0(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>v0(e.remoteStore,o))),n._onlineComponents=e}async function dN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he(Li,"Using user provided OfflineComponentProvider");try{await hf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;xi("Error using user provided cache. Falling back to memory cache: "+t),await hf(n,new zc)}}else he(Li,"Using default OfflineComponentProvider"),await hf(n,new cN(void 0));return n._offlineComponents}async function vE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he(Li,"Using user provided OnlineComponentProvider"),await S0(n,n._uninitializedComponentsProvider._online)):(he(Li,"Using default OnlineComponentProvider"),await S0(n,new Sp))),n._onlineComponents}function fN(n){return vE(n).then((e=>e.syncEngine))}async function _E(n){const e=await vE(n),t=e.eventManager;return t.onListen=Jx.bind(null,e.syncEngine),t.onUnlisten=eN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Xx.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tN.bind(null,e.syncEngine),t}function pN(n,e,t={}){const i=new qr;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,d,f,g){const _=new yE({next:T=>{_.Ou(),c.enqueueAndForget((()=>aE(a,w)));const R=T.docs.has(d);!R&&T.fromCache?g.reject(new ue(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&T.fromCache&&f&&f.source==="server"?g.reject(new ue(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new lE(rg(d.path),_,{includeMetadataChanges:!0,ka:!0});return oE(a,w)})(await _E(n),n.asyncQueue,e,t,i))),i.promise}function gN(n,e,t={}){const i=new qr;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,d,f,g){const _=new yE({next:T=>{_.Ou(),c.enqueueAndForget((()=>aE(a,w))),T.fromCache&&f.source==="server"?g.reject(new ue(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),w=new lE(d,_,{includeMetadataChanges:!0,ka:!0});return oE(a,w)})(await _E(n),n.asyncQueue,e,t,i))),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="firestore.googleapis.com",A0=!0;class C0{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=EE,this.ssl=A0}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:A0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=K1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<GP)throw new ue(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ue(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ue(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ue(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new C0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new C0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new IR;switch(i.type){case"firstParty":return new CR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ue(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=k0.get(t);i&&(he("ComponentProvider","Removing Datastore"),k0.delete(t),i.terminate())})(this),Promise.resolve()}}function mN(n,e,t,i={}){var o;n=vr(n,hh);const a=Qo(e),c=n._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(D_(`https://${f}`),M_("Firestore",!0)),c.host!==EE&&c.host!==f&&xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:f,ssl:a,emulatorOptions:i});if(!mr(g,d)&&(n._setSettings(g),i.mockUserToken)){let _,w;if(typeof i.mockUserToken=="string")_=i.mockUserToken,w=Ut.MOCK_USER;else{_=TI(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new ue(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Ut(T)}n._authCredentials=new SR(new i1(_,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new na(this.firestore,e,this._query)}}class ht{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}toJSON(){return{type:ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Rl(t,ht._jsonSchema))return new ht(e,i||null,new _e(Qe.fromString(t.referencePath)))}}ht._jsonSchemaVersion="firestore/documentReference/1.0",ht._jsonSchema={type:mt("string",ht._jsonSchemaVersion),referencePath:mt("string")};class Pi extends na{constructor(e,t,i){super(e,t,rg(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new _e(e))}withConverter(e){return new Pi(this.firestore,e,this._path)}}function yN(n,e,...t){if(n=it(n),o1("collection","path",e),n instanceof hh){const i=Qe.fromString(e,...t);return Uv(i),new Pi(n,null,i)}{if(!(n instanceof ht||n instanceof Pi))throw new ue(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return Uv(i),new Pi(n.firestore,null,i)}}function dh(n,e,...t){if(n=it(n),arguments.length===1&&(e=Jp.newId()),o1("doc","path",e),n instanceof hh){const i=Qe.fromString(e,...t);return jv(i),new ht(n,null,new _e(i))}{if(!(n instanceof ht||n instanceof Pi))throw new ue(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return jv(i),new ht(n.firestore,n instanceof Pi?n.converter:null,new _e(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="AsyncQueue";class P0{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new X1(this,"async_queue_retry"),this.oc=()=>{const i=cf();i&&he(R0,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=cf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=cf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new qr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ea(e))throw e;he(R0,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((i=>{throw this.tc=i,this.nc=!1,Wr("INTERNAL UNHANDLED ERROR: ",x0(i)),i})).then((i=>(this.nc=!1,i))))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=yg.createAndSchedule(this,e,t,i,(a=>this.lc(a)));return this.ec.push(o),o}ac(){this.tc&&Ae(47125,{hc:x0(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function x0(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ra extends hh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new P0,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new P0(e),this._firestoreClient=void 0,await e}}}function vN(n,e){const t=typeof n=="object"?n:Np(),i=typeof n=="string"?n:Dc,o=Rs(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const a=wI("firestore");a&&mN(o,...a)}return o}function fh(n){if(n._terminated)throw new ue(Y.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_N(n),n._firestoreClient}function _N(n){var e,t,i;const o=n._freezeSettings(),a=(function(d,f,g,_){return new qR(d,f,g,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,wE(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new hN(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(d){const f=d?._online.build();return{_offline:d?._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cn(Mt.fromBase64String(e))}catch(t){throw new ue(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Cn(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Rl(e,Cn._jsonSchema))return Cn.fromBase64String(e.bytes)}}Cn._jsonSchemaVersion="firestore/bytes/1.0",Cn._jsonSchema={type:mt("string",Cn._jsonSchemaVersion),bytes:mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pr._jsonSchemaVersion}}static fromJSON(e){if(Rl(e,pr._jsonSchema))return new pr(e.latitude,e.longitude)}}pr._jsonSchemaVersion="firestore/geoPoint/1.0",pr._jsonSchema={type:mt("string",pr._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==o[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:gr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Rl(e,gr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new gr(e.vectorValues);throw new ue(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gr._jsonSchemaVersion="firestore/vectorValue/1.0",gr._jsonSchema={type:mt("string",gr._jsonSchemaVersion),vectorValues:mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=/^__.*__$/;class EN{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new ji(e,this.data,this.fieldMask,t,this.fieldTransforms):new xl(e,this.data,t,this.fieldTransforms)}}class TE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new ji(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function IE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{Ec:n})}}class ph{constructor(e,t,i,o,a,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ph(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return qc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(IE(this.Ec)&&wN.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class TN{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||lh(e)}Dc(e,t,i,o=!1){return new ph({Ec:e,methodName:t,bc:i,path:Dt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gh(n){const e=n._freezeSettings(),t=lh(n._databaseId);return new TN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function SE(n,e,t,i,o,a={}){const c=n.Dc(a.merge||a.mergeFields?2:0,e,t,o);Sg("Data must be an object, but it was:",c,i);const d=RE(i,c);let f,g;if(a.merge)f=new fn(c.fieldMask),g=c.fieldTransforms;else if(a.mergeFields){const _=[];for(const w of a.mergeFields){const T=kp(e,w,t);if(!c.contains(T))throw new ue(Y.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);xE(_,T)||_.push(T)}f=new fn(_),g=c.fieldTransforms.filter((w=>f.covers(w.field)))}else f=null,g=c.fieldTransforms;return new EN(new rn(d),f,g)}class mh extends Ol{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mh}}function kE(n,e,t){return new ph({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Tg extends Ol{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=kE(this,e,!0),i=this.vc.map((a=>Ns(a,t))),o=new $o(i);return new O1(e.path,o)}isEqual(e){return e instanceof Tg&&mr(this.vc,e.vc)}}class Ig extends Ol{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=kE(this,e,!0),i=this.vc.map((a=>Ns(a,t))),o=new Ho(i);return new O1(e.path,o)}isEqual(e){return e instanceof Ig&&mr(this.vc,e.vc)}}function AE(n,e,t,i){const o=n.Dc(1,e,t);Sg("Data must be an object, but it was:",o,i);const a=[],c=rn.empty();Fi(i,((f,g)=>{const _=kg(e,f,t);g=it(g);const w=o.gc(_);if(g instanceof mh)a.push(_);else{const T=Ns(g,w);T!=null&&(a.push(_),c.set(_,T))}}));const d=new fn(a);return new TE(c,d,o.fieldTransforms)}function CE(n,e,t,i,o,a){const c=n.Dc(1,e,t),d=[kp(e,i,t)],f=[o];if(a.length%2!=0)throw new ue(Y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(kp(e,a[T])),f.push(a[T+1]);const g=[],_=rn.empty();for(let T=d.length-1;T>=0;--T)if(!xE(g,d[T])){const R=d[T];let M=f[T];M=it(M);const V=c.gc(R);if(M instanceof mh)g.push(R);else{const L=Ns(M,V);L!=null&&(g.push(R),_.set(R,L))}}const w=new fn(g);return new TE(_,w,c.fieldTransforms)}function IN(n,e,t,i=!1){return Ns(t,n.Dc(i?4:3,e))}function Ns(n,e){if(PE(n=it(n)))return Sg("Unsupported field value:",e,n),RE(n,e);if(n instanceof Ol)return(function(i,o){if(!IE(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(o);a&&o.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(i,o){const a=[];let c=0;for(const d of i){let f=Ns(d,o.yc(c));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),c++}return{arrayValue:{values:a}}})(n,e)}return(function(i,o){if((i=it(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return dP(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=Xe.fromDate(i);return{timestampValue:jc(o.serializer,a)}}if(i instanceof Xe){const a=new Xe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:jc(o.serializer,a)}}if(i instanceof pr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Cn)return{bytesValue:B1(o.serializer,i._byteString)};if(i instanceof ht){const a=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(a))throw o.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:lg(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof gr)return(function(c,d){return{mapValue:{fields:{[g1]:{stringValue:m1},[Mc]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw d.wc("VectorValues must only contain numeric values.");return ig(d.serializer,g)}))}}}}}})(i,o);throw o.wc(`Unsupported field value: ${Zc(i)}`)})(n,e)}function RE(n,e){const t={};return u1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fi(n,((i,o)=>{const a=Ns(o,e.Vc(i));a!=null&&(t[i]=a)})),{mapValue:{fields:t}}}function PE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Xe||n instanceof pr||n instanceof Cn||n instanceof ht||n instanceof Ol||n instanceof gr)}function Sg(n,e,t){if(!PE(t)||!a1(t)){const i=Zc(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function kp(n,e,t){if((e=it(e))instanceof Ml)return e._internalPath;if(typeof e=="string")return kg(n,e);throw qc("Field path arguments must be of type string or ",n,!1,void 0,t)}const SN=new RegExp("[~\\*/\\[\\]]");function kg(n,e,t){if(e.search(SN)>=0)throw qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ml(...e.split("."))._internalPath}catch{throw qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function qc(n,e,t,i,o){const a=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||c)&&(f+=" (found",a&&(f+=` in field ${i}`),c&&(f+=` in document ${o}`),f+=")"),new ue(Y.INVALID_ARGUMENT,d+n+f)}function xE(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,t,i,o,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ag("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class kN extends NE{data(){return super.data()}}function Ag(n,e){return typeof e=="string"?kg(n,e):e instanceof Ml?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cg{}class CN extends Cg{}function RN(n,e,...t){let i=[];e instanceof Cg&&i.push(e),i=i.concat(t),(function(a){const c=a.filter((f=>f instanceof Rg)).length,d=a.filter((f=>f instanceof yh)).length;if(c>1||c>0&&d>0)throw new ue(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class yh extends CN{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new yh(e,t,i)}_apply(e){const t=this._parse(e);return bE(e._query,t),new na(e.firestore,e.converter,pp(e._query,t))}_parse(e){const t=gh(e.firestore);return(function(a,c,d,f,g,_,w){let T;if(g.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new ue(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){b0(w,_);const M=[];for(const V of w)M.push(N0(f,a,V));T={arrayValue:{values:M}}}else T=N0(f,a,w)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||b0(w,_),T=IN(d,c,w,_==="in"||_==="not-in");return gt.create(g,_,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function PN(n,e,t){const i=e,o=Ag("where",n);return yh._create(o,i,t)}class Rg extends Cg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Rg(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,a){let c=o;const d=a.getFlattenedFilters();for(const f of d)bE(c,f),c=pp(c,f)})(e._query,t),new na(e.firestore,e.converter,pp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function N0(n,e,t){if(typeof(t=it(t))=="string"){if(t==="")throw new ue(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!S1(e)&&t.indexOf("/")!==-1)throw new ue(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Qe.fromString(t));if(!_e.isDocumentKey(i))throw new ue(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Kv(n,new _e(i))}if(t instanceof ht)return Kv(n,t._key);throw new ue(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zc(t)}.`)}function b0(n,e){if(!Array.isArray(n)||n.length===0)throw new ue(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bE(n,e){const t=(function(o,a){for(const c of o)for(const d of c.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ue(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class xN{convertValue(e,t="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Fi(e,((o,a)=>{i[o]=this.convertValue(a,t)})),i}convertVectorValue(e){var t,i,o;const a=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[Mc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map((c=>ct(c.doubleValue)));return new gr(a)}convertGeoPoint(e){return new pr(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=nh(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(vl(e));default:return null}}convertTimestamp(e){const t=bi(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Qe.fromString(e);$e(G1(i),9688,{name:e});const o=new _l(i.get(1),i.get(3)),a=new _e(i.popFirst(5));return o.isEqual(t)||Wr(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class al{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _s extends NE{constructor(e,t,i,o,a,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _c(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Ag("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_s._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_s._jsonSchemaVersion="firestore/documentSnapshot/1.0",_s._jsonSchema={type:mt("string",_s._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class _c extends _s{data(e={}){return super.data(e)}}class Fo{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new al(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new _c(this._firestore,this._userDataWriter,i.key,i,new al(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,a){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((d=>{const f=new _c(o._firestore,o._userDataWriter,d.doc.key,d.doc,new al(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const f=new _c(o._firestore,o._userDataWriter,d.doc.key,d.doc,new al(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,_=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),_=c.indexOf(d.doc.key)),{type:NN(d.type),doc:f,oldIndex:g,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),i.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function NN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n){n=vr(n,ht);const e=vr(n.firestore,ra);return pN(fh(e),n._key).then((t=>MN(e,n,t)))}Fo._jsonSchemaVersion="firestore/querySnapshot/1.0",Fo._jsonSchema={type:mt("string",Fo._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class ME extends xN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,t)}}function bN(n){n=vr(n,na);const e=vr(n.firestore,ra),t=fh(e),i=new ME(e);return AN(n._query),gN(t,n._query).then((o=>new Fo(e,i,n,o)))}function ia(n,e,t){n=vr(n,ht);const i=vr(n.firestore,ra),o=DE(n.converter,e,t);return Pg(i,[SE(gh(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,gn.none())])}function DN(n,e,t,...i){n=vr(n,ht);const o=vr(n.firestore,ra),a=gh(o);let c;return c=typeof(e=it(e))=="string"||e instanceof Ml?CE(a,"updateDoc",n._key,e,t,i):AE(a,"updateDoc",n._key,e),Pg(o,[c.toMutation(n._key,gn.exists(!0))])}function Pg(n,e){return(function(i,o){const a=new qr;return i.asyncQueue.enqueueAndForget((async()=>nN(await fN(i),o,a))),a.promise})(fh(n),e)}function MN(n,e,t){const i=t.docs.get(e._key),o=new ME(n);return new _s(n,o,e._key,i,new al(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=gh(e)}set(e,t,i){this._verifyNotCommitted();const o=df(e,this._firestore),a=DE(o.converter,t,i),c=SE(this._dataReader,"WriteBatch.set",o._key,a,o.converter!==null,i);return this._mutations.push(c.toMutation(o._key,gn.none())),this}update(e,t,i,...o){this._verifyNotCommitted();const a=df(e,this._firestore);let c;return c=typeof(t=it(t))=="string"||t instanceof Ml?CE(this._dataReader,"WriteBatch.update",a._key,t,i,o):AE(this._dataReader,"WriteBatch.update",a._key,t),this._mutations.push(c.toMutation(a._key,gn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=df(e,this._firestore);return this._mutations=this._mutations.concat(new sg(t._key,gn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ue(Y.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function df(n,e){if((n=it(n)).firestore!==e)throw new ue(Y.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function LN(...n){return new Tg("arrayUnion",n)}function OE(...n){return new Ig("arrayRemove",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(n){return fh(n=vr(n,ra)),new ON(n,(e=>Pg(n,e)))}(function(e,t=!0){(function(o){Xo=o})(Yo),yr(new Kn("firestore",((i,{instanceIdentifier:o,options:a})=>{const c=i.getProvider("app").getImmediate(),d=new ra(new kR(i.getProvider("auth-internal")),new RR(c,i.getProvider("app-check-internal")),(function(g,_){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ue(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _l(g.options.projectId,_)})(c,o),c);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),Rn(Mv,Ov,e),Rn(Mv,Ov,"esm2017")})();const Do={apiKey:"AIzaSyBjqYy4wbjOBBnpA4MqhjgdeEi9BSgk1Ik",authDomain:"mealplanner-25b37.firebaseapp.com",projectId:"mealplanner-25b37",storageBucket:"mealplanner-25b37.firebasestorage.app",messagingSenderId:"285617568583",appId:"1:285617568583:web:9778c2998e4c4d2b6eea62",measurementId:"G-E1KMT4L1XQ"},Ko=!!(Do.apiKey&&Do.authDomain&&Do.projectId&&Do.appId);let El=null;const Pn=Ko?pC(El=j_(Do)):null,Vi=Ko&&El?vN(El):null;(async()=>!Ko||!Do.measurementId||typeof window>"u"||!await wR()||!El?null:vR(El))();const Ap=new Ur;Ap.setCustomParameters({prompt:"select_account"});function Vl(){if(!Ko)throw new Error("Firebase environment variables are missing. Set the VITE_FIREBASE_* values before using auth.")}function vh(){if(!Vi)throw new Error("Firebase Firestore is not configured. Set the VITE_FIREBASE_* values first.")}function mn(){return new Date().toISOString()}function VE(n,e){return e?`group_${e}`:`user_${n}`}function sa(n){return vh(),dh(Vi,"users",n)}function As(n){return vh(),dh(Vi,"groups",n)}function FE(n,e){return vh(),dh(Vi,"mealPlans",VE(n,e))}function jE(n,e){return vh(),dh(Vi,"groceryLists",VE(n,e))}function VN(n,e){return e??n.displayName??n.email?.split("@")[0]??"User"}function FN(n,e){return e??n.photoURL??""}function jN(n){const e=n?.code;return e==="auth/popup-blocked"||e==="auth/popup-closed-by-user"||e==="auth/operation-not-supported-in-this-environment"}function UE(){return crypto.randomUUID().replace(/-/g,"").slice(0,12).toUpperCase()}async function UN(){if(Vl(),!Pn)throw new Error("Firebase Auth is not available.");try{return await TA(Pn,Ap)}catch(n){if(jN(n))return await RA(Pn,Ap),null;throw n}}async function BN(n,e){if(Vl(),!Pn)throw new Error("Firebase Auth is not available.");return Yk(Pn,n,e)}async function zN(n,e,t){if(Vl(),!Pn)throw new Error("Firebase Auth is not available.");const i=await Qk(Pn,n,e);return await Xk(i.user,{displayName:t}),await BE(i.user,{displayName:t}),i}async function qN(n){if(Vl(),!Pn)throw new Error("Firebase Auth is not available.");return Kk(Pn,n)}async function $N(){if(Pn)return nA(Pn)}async function vs(n){const e=await Ll(sa(n));return e.exists()?e.data():null}async function BE(n,e={}){const t=await vs(n.uid),i={uid:n.uid,email:n.email??t?.email??"",displayName:VN(n,e.displayName??t?.displayName),photoURL:FN(n,e.photoURL??t?.photoURL),groupId:e.groupId??t?.groupId??null,createdAt:t?.createdAt??mn(),updatedAt:mn()};return await ia(sa(n.uid),i,{merge:!0}),i}async function HN(n,e){await ia(sa(n),{displayName:e,updatedAt:mn()},{merge:!0})}async function ff(n,e){const t=await Ll(FE(n,e));return t.exists()?t.data().meals??{}:{}}async function WN(n,e,t){await ia(FE(n,e),{userId:n,groupId:e,meals:t,updatedAt:mn()},{merge:!0})}async function GN(n,e){const t=await Ll(jE(n,e));return t.exists()?t.data().items??[]:[]}async function KN(n,e,t){await ia(jE(n,e),{userId:n,groupId:e,items:t,updatedAt:mn()},{merge:!0})}async function zE(n,e){Vl();const t=crypto.randomUUID(),i=UE(),o=mn(),a={groupId:t,name:e,ownerId:n.uid,inviteCode:i,memberIds:[n.uid],createdAt:o,updatedAt:o};return await ia(As(t),a),await BE(n,{groupId:t}),a}async function _h(n){const e=await Ll(As(n));return e.exists()?e.data():null}async function qE(n){const e=UE();return await DN(As(n),{inviteCode:e,updatedAt:mn()}),e}async function D0(n,e){const t=RN(yN(Vi,"groups"),PN("inviteCode","==",e)),i=await bN(t);if(i.empty)throw new Error("Invite link is invalid or expired.");const o=i.docs[0].data(),c=(await vs(n))?.groupId??null,d=LE(Vi);return c&&c!==o.groupId&&d.update(As(c),{memberIds:OE(n),updatedAt:mn()}),d.update(As(o.groupId),{memberIds:LN(n),updatedAt:mn()}),d.set(sa(n),{groupId:o.groupId,updatedAt:mn()},{merge:!0}),await d.commit(),o}async function QN(n,e){await ia(As(n),{name:e,updatedAt:mn()},{merge:!0})}async function jo(n){const e=await _h(n);return e?(await Promise.all(e.memberIds.map(async i=>{const o=await Ll(sa(i));if(!o.exists())return null;const a=o.data();return{id:i,displayName:a.displayName||a.email||"User",email:a.email,photoURL:a.photoURL||"",isOwner:i===e.ownerId}}))).filter(i=>i!==null):[]}async function $E(n,e){if(!await _h(n))throw new Error("Group not found.");const i=LE(Vi);i.update(As(n),{memberIds:OE(e),updatedAt:mn()}),i.set(sa(e),{groupId:null,updatedAt:mn()},{merge:!0}),await i.commit()}function pf(n){return n instanceof Error?n.message:"Authentication failed. Please try again."}function YN({onBack:n,darkMode:e,onAuthenticated:t}){const[i,o]=ve.useState("signin"),[a,c]=ve.useState(""),[d,f]=ve.useState(""),[g,_]=ve.useState(""),[w,T]=ve.useState(""),[R,M]=ve.useState(""),[V,L]=ve.useState(!1),$=async()=>{if(!a||!d||!g){T("Please fill in all fields");return}L(!0),T(""),M("");try{const re=await zN(a,d,g);await t(re.user)}catch(re){console.error("Sign up error:",re),T(pf(re))}finally{L(!1)}},G=async()=>{if(!a||!d){T("Please enter email and password");return}L(!0),T(""),M("");try{const re=await BN(a,d);await t(re.user)}catch(re){console.error("Sign in error:",re),T(pf(re))}finally{L(!1)}},W=async()=>{L(!0),T(""),M("Opening Google sign-in popup...");try{const re=await UN();re?.user&&await t(re.user)}catch(re){console.error("Google sign in error:",re),T("Google sign in failed. Please check your Firebase Google provider setup.")}finally{L(!1)}},Q=async()=>{if(!a){T("Enter your email address first");return}L(!0),T(""),M("");try{await qN(a),M("Password reset email sent. Check your inbox."),o("signin")}catch(re){console.error("Password reset error:",re),T(pf(re))}finally{L(!1)}};return S.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 p-6 flex flex-col",children:[S.jsx("button",{onClick:n,className:"self-start p-2 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-lg transition-colors active:scale-95 mb-6",children:S.jsx(Sw,{className:"size-6 text-gray-600 dark:text-gray-300"})}),S.jsx("div",{className:"flex-1 flex items-center justify-center",children:S.jsxs("div",{className:"max-w-md w-full space-y-6",children:[S.jsxs("div",{className:"text-center",children:[S.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-2",children:i==="signin"?"Welcome Back":i==="signup"?"Create Account":"Reset Password"}),S.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:i==="signin"?"Sign in to access your meal plans":i==="signup"?"Join your family meal planner":"We will email you a link to reset your password"})]}),w&&S.jsx("div",{className:"bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4",children:S.jsx("p",{className:"text-red-600 dark:text-red-400 text-sm",children:w})}),R&&S.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4",children:S.jsx("p",{className:"text-blue-700 dark:text-blue-300 text-sm",children:R})}),S.jsxs("div",{className:"space-y-4",children:[i==="signup"&&S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Display Name"}),S.jsxs("div",{className:"relative",children:[S.jsx(Pc,{className:"absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400"}),S.jsx("input",{type:"text",value:g,onChange:re=>_(re.target.value),placeholder:"Your name",className:"w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Email"}),S.jsxs("div",{className:"relative",children:[S.jsx(BC,{className:"absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400"}),S.jsx("input",{type:"email",value:a,onChange:re=>c(re.target.value),placeholder:"you@example.com",className:"w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),i!=="reset"&&S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Password"}),S.jsxs("div",{className:"relative",children:[S.jsx(VC,{className:"absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400"}),S.jsx("input",{type:"password",value:d,onChange:re=>f(re.target.value),placeholder:"••••••••",className:"w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),S.jsx("button",{onClick:i==="signin"?G:i==="signup"?$:Q,disabled:V,className:"w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",children:V?"Please wait...":i==="signin"?"Sign In":i==="signup"?"Sign Up":"Send Reset Email"}),i!=="reset"&&S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"relative",children:[S.jsx("div",{className:"absolute inset-0 flex items-center",children:S.jsx("div",{className:"w-full border-t border-gray-200 dark:border-gray-600"})}),S.jsx("div",{className:"relative flex justify-center text-sm",children:S.jsx("span",{className:"px-2 bg-gradient-to-b from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 text-gray-500 dark:text-gray-400",children:"Or continue with"})})]}),S.jsxs("button",{onClick:W,disabled:V,className:"w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:[S.jsxs("svg",{className:"size-5",viewBox:"0 0 24 24",children:[S.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),S.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),S.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),S.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Google"]})]})]}),S.jsxs("div",{className:"text-center",children:[i!=="reset"?S.jsx("button",{onClick:()=>{o(i==="signin"?"signup":"signin"),T(""),M("")},className:"text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium",children:i==="signin"?"Don't have an account? Sign up":"Already have an account? Sign in"}):S.jsx("button",{onClick:()=>{o("signin"),T(""),M("")},className:"text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium",children:"Back to sign in"}),i==="signin"&&S.jsx("button",{onClick:()=>{o("reset"),T(""),M("")},className:"mt-3 block mx-auto text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",children:"Forgot password?"})]})]})})]})}function JN({selectedDate:n,mealPlan:e,onUpdateMeal:t,onBack:i}){const o=n.toLocaleDateString("en-US",{weekday:"long"}),a=n.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),c=(d,f)=>{t({...e,[d]:f})};return S.jsxs("div",{children:[S.jsxs("button",{onClick:i,className:"flex items-center gap-2 text-blue-500 dark:text-blue-400 mb-4 hover:text-blue-600 dark:hover:text-blue-300 transition-colors p-2 -ml-2 active:scale-95",children:[S.jsx(Sw,{className:"size-5"}),S.jsx("span",{className:"font-medium",children:"Back to Calendar"})]}),S.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 mb-4 shadow-sm",children:[S.jsx("h2",{className:"font-semibold text-gray-900 dark:text-white text-lg",children:o}),S.jsx("p",{className:"text-base text-gray-500 dark:text-gray-400 mt-1",children:a})]}),S.jsxs("div",{className:"space-y-4",children:[S.jsx(oc,{label:"Breakfast",value:e.breakfast,onChange:d=>c("breakfast",d),emoji:"🍳"}),S.jsx(oc,{label:"Lunch",value:e.lunch,onChange:d=>c("lunch",d),emoji:"🥗"}),S.jsx(oc,{label:"Dinner",value:e.dinner,onChange:d=>c("dinner",d),emoji:"🍽️"}),S.jsx(oc,{label:"Snacks",value:e.snacks,onChange:d=>c("snacks",d),emoji:"🍎"})]})]})}function oc({label:n,value:e,onChange:t,emoji:i}){return S.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm",children:[S.jsxs("label",{className:"flex items-center gap-2 mb-3 font-medium text-gray-700 dark:text-gray-300 text-base",children:[S.jsx("span",{className:"text-xl",children:i}),n]}),S.jsx("textarea",{value:e,onChange:o=>t(o.target.value),placeholder:`Enter ${n.toLowerCase()} plan...`,className:"w-full px-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base",rows:3})]})}var Co={},gf,M0;function XN(){return M0||(M0=1,gf=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),gf}var mf={},Ei={},O0;function bs(){if(O0)return Ei;O0=1;let n;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Ei.getSymbolSize=function(i){if(!i)throw new Error('"version" cannot be null or undefined');if(i<1||i>40)throw new Error('"version" should be in range from 1 to 40');return i*4+17},Ei.getSymbolTotalCodewords=function(i){return e[i]},Ei.getBCHDigit=function(t){let i=0;for(;t!==0;)i++,t>>>=1;return i},Ei.setToSJISFunction=function(i){if(typeof i!="function")throw new Error('"toSJISFunc" is not a valid function.');n=i},Ei.isKanjiModeEnabled=function(){return typeof n<"u"},Ei.toSJIS=function(i){return n(i)},Ei}var yf={},L0;function xg(){return L0||(L0=1,(function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}n.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},n.from=function(i,o){if(n.isValid(i))return i;try{return e(i)}catch{return o}}})(yf)),yf}var vf,V0;function ZN(){if(V0)return vf;V0=1;function n(){this.buffer=[],this.length=0}return n.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},vf=n,vf}var _f,F0;function e4(){if(F0)return _f;F0=1;function n(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return n.prototype.set=function(e,t,i,o){const a=e*this.size+t;this.data[a]=i,o&&(this.reservedBit[a]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},_f=n,_f}var wf={},j0;function t4(){return j0||(j0=1,(function(n){const e=bs().getSymbolSize;n.getRowColCoords=function(i){if(i===1)return[];const o=Math.floor(i/7)+2,a=e(i),c=a===145?26:Math.ceil((a-13)/(2*o-2))*2,d=[a-7];for(let f=1;f<o-1;f++)d[f]=d[f-1]-c;return d.push(6),d.reverse()},n.getPositions=function(i){const o=[],a=n.getRowColCoords(i),c=a.length;for(let d=0;d<c;d++)for(let f=0;f<c;f++)d===0&&f===0||d===0&&f===c-1||d===c-1&&f===0||o.push([a[d],a[f]]);return o}})(wf)),wf}var Ef={},U0;function n4(){if(U0)return Ef;U0=1;const n=bs().getSymbolSize,e=7;return Ef.getPositions=function(i){const o=n(i);return[[0,0],[o-e,0],[0,o-e]]},Ef}var Tf={},B0;function r4(){return B0||(B0=1,(function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};n.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},n.from=function(o){return n.isValid(o)?parseInt(o,10):void 0},n.getPenaltyN1=function(o){const a=o.size;let c=0,d=0,f=0,g=null,_=null;for(let w=0;w<a;w++){d=f=0,g=_=null;for(let T=0;T<a;T++){let R=o.get(w,T);R===g?d++:(d>=5&&(c+=e.N1+(d-5)),g=R,d=1),R=o.get(T,w),R===_?f++:(f>=5&&(c+=e.N1+(f-5)),_=R,f=1)}d>=5&&(c+=e.N1+(d-5)),f>=5&&(c+=e.N1+(f-5))}return c},n.getPenaltyN2=function(o){const a=o.size;let c=0;for(let d=0;d<a-1;d++)for(let f=0;f<a-1;f++){const g=o.get(d,f)+o.get(d,f+1)+o.get(d+1,f)+o.get(d+1,f+1);(g===4||g===0)&&c++}return c*e.N2},n.getPenaltyN3=function(o){const a=o.size;let c=0,d=0,f=0;for(let g=0;g<a;g++){d=f=0;for(let _=0;_<a;_++)d=d<<1&2047|o.get(g,_),_>=10&&(d===1488||d===93)&&c++,f=f<<1&2047|o.get(_,g),_>=10&&(f===1488||f===93)&&c++}return c*e.N3},n.getPenaltyN4=function(o){let a=0;const c=o.data.length;for(let f=0;f<c;f++)a+=o.data[f];return Math.abs(Math.ceil(a*100/c/5)-10)*e.N4};function t(i,o,a){switch(i){case n.Patterns.PATTERN000:return(o+a)%2===0;case n.Patterns.PATTERN001:return o%2===0;case n.Patterns.PATTERN010:return a%3===0;case n.Patterns.PATTERN011:return(o+a)%3===0;case n.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(a/3))%2===0;case n.Patterns.PATTERN101:return o*a%2+o*a%3===0;case n.Patterns.PATTERN110:return(o*a%2+o*a%3)%2===0;case n.Patterns.PATTERN111:return(o*a%3+(o+a)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}n.applyMask=function(o,a){const c=a.size;for(let d=0;d<c;d++)for(let f=0;f<c;f++)a.isReserved(f,d)||a.xor(f,d,t(o,f,d))},n.getBestMask=function(o,a){const c=Object.keys(n.Patterns).length;let d=0,f=1/0;for(let g=0;g<c;g++){a(g),n.applyMask(g,o);const _=n.getPenaltyN1(o)+n.getPenaltyN2(o)+n.getPenaltyN3(o)+n.getPenaltyN4(o);n.applyMask(g,o),_<f&&(f=_,d=g)}return d}})(Tf)),Tf}var ac={},z0;function HE(){if(z0)return ac;z0=1;const n=xg(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return ac.getBlocksCount=function(o,a){switch(a){case n.L:return e[(o-1)*4+0];case n.M:return e[(o-1)*4+1];case n.Q:return e[(o-1)*4+2];case n.H:return e[(o-1)*4+3];default:return}},ac.getTotalCodewordsCount=function(o,a){switch(a){case n.L:return t[(o-1)*4+0];case n.M:return t[(o-1)*4+1];case n.Q:return t[(o-1)*4+2];case n.H:return t[(o-1)*4+3];default:return}},ac}var If={},tl={},q0;function i4(){if(q0)return tl;q0=1;const n=new Uint8Array(512),e=new Uint8Array(256);return(function(){let i=1;for(let o=0;o<255;o++)n[o]=i,e[i]=o,i<<=1,i&256&&(i^=285);for(let o=255;o<512;o++)n[o]=n[o-255]})(),tl.log=function(i){if(i<1)throw new Error("log("+i+")");return e[i]},tl.exp=function(i){return n[i]},tl.mul=function(i,o){return i===0||o===0?0:n[e[i]+e[o]]},tl}var $0;function s4(){return $0||($0=1,(function(n){const e=i4();n.mul=function(i,o){const a=new Uint8Array(i.length+o.length-1);for(let c=0;c<i.length;c++)for(let d=0;d<o.length;d++)a[c+d]^=e.mul(i[c],o[d]);return a},n.mod=function(i,o){let a=new Uint8Array(i);for(;a.length-o.length>=0;){const c=a[0];for(let f=0;f<o.length;f++)a[f]^=e.mul(o[f],c);let d=0;for(;d<a.length&&a[d]===0;)d++;a=a.slice(d)}return a},n.generateECPolynomial=function(i){let o=new Uint8Array([1]);for(let a=0;a<i;a++)o=n.mul(o,new Uint8Array([1,e.exp(a)]));return o}})(If)),If}var Sf,H0;function o4(){if(H0)return Sf;H0=1;const n=s4();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(i){this.degree=i,this.genPoly=n.generateECPolynomial(this.degree)},e.prototype.encode=function(i){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(i.length+this.degree);o.set(i);const a=n.mod(o,this.genPoly),c=this.degree-a.length;if(c>0){const d=new Uint8Array(this.degree);return d.set(a,c),d}return a},Sf=e,Sf}var kf={},Af={},Cf={},W0;function WE(){return W0||(W0=1,Cf.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Cf}var lr={},G0;function GE(){if(G0)return lr;G0=1;const n="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;lr.KANJI=new RegExp(t,"g"),lr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),lr.BYTE=new RegExp(i,"g"),lr.NUMERIC=new RegExp(n,"g"),lr.ALPHANUMERIC=new RegExp(e,"g");const o=new RegExp("^"+t+"$"),a=new RegExp("^"+n+"$"),c=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return lr.testKanji=function(f){return o.test(f)},lr.testNumeric=function(f){return a.test(f)},lr.testAlphanumeric=function(f){return c.test(f)},lr}var K0;function Ds(){return K0||(K0=1,(function(n){const e=WE(),t=GE();n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(a,c){if(!a.ccBits)throw new Error("Invalid mode: "+a);if(!e.isValid(c))throw new Error("Invalid version: "+c);return c>=1&&c<10?a.ccBits[0]:c<27?a.ccBits[1]:a.ccBits[2]},n.getBestModeForData=function(a){return t.testNumeric(a)?n.NUMERIC:t.testAlphanumeric(a)?n.ALPHANUMERIC:t.testKanji(a)?n.KANJI:n.BYTE},n.toString=function(a){if(a&&a.id)return a.id;throw new Error("Invalid mode")},n.isValid=function(a){return a&&a.bit&&a.ccBits};function i(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+o)}}n.from=function(a,c){if(n.isValid(a))return a;try{return i(a)}catch{return c}}})(Af)),Af}var Q0;function a4(){return Q0||(Q0=1,(function(n){const e=bs(),t=HE(),i=xg(),o=Ds(),a=WE(),c=7973,d=e.getBCHDigit(c);function f(T,R,M){for(let V=1;V<=40;V++)if(R<=n.getCapacity(V,M,T))return V}function g(T,R){return o.getCharCountIndicator(T,R)+4}function _(T,R){let M=0;return T.forEach(function(V){const L=g(V.mode,R);M+=L+V.getBitsLength()}),M}function w(T,R){for(let M=1;M<=40;M++)if(_(T,M)<=n.getCapacity(M,R,o.MIXED))return M}n.from=function(R,M){return a.isValid(R)?parseInt(R,10):M},n.getCapacity=function(R,M,V){if(!a.isValid(R))throw new Error("Invalid QR Code version");typeof V>"u"&&(V=o.BYTE);const L=e.getSymbolTotalCodewords(R),$=t.getTotalCodewordsCount(R,M),G=(L-$)*8;if(V===o.MIXED)return G;const W=G-g(V,R);switch(V){case o.NUMERIC:return Math.floor(W/10*3);case o.ALPHANUMERIC:return Math.floor(W/11*2);case o.KANJI:return Math.floor(W/13);case o.BYTE:default:return Math.floor(W/8)}},n.getBestVersionForData=function(R,M){let V;const L=i.from(M,i.M);if(Array.isArray(R)){if(R.length>1)return w(R,L);if(R.length===0)return 1;V=R[0]}else V=R;return f(V.mode,V.getLength(),L)},n.getEncodedBits=function(R){if(!a.isValid(R)||R<7)throw new Error("Invalid QR Code version");let M=R<<12;for(;e.getBCHDigit(M)-d>=0;)M^=c<<e.getBCHDigit(M)-d;return R<<12|M}})(kf)),kf}var Rf={},Y0;function l4(){if(Y0)return Rf;Y0=1;const n=bs(),e=1335,t=21522,i=n.getBCHDigit(e);return Rf.getEncodedBits=function(a,c){const d=a.bit<<3|c;let f=d<<10;for(;n.getBCHDigit(f)-i>=0;)f^=e<<n.getBCHDigit(f)-i;return(d<<10|f)^t},Rf}var Pf={},xf,J0;function u4(){if(J0)return xf;J0=1;const n=Ds();function e(t){this.mode=n.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(i){return 10*Math.floor(i/3)+(i%3?i%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(i){let o,a,c;for(o=0;o+3<=this.data.length;o+=3)a=this.data.substr(o,3),c=parseInt(a,10),i.put(c,10);const d=this.data.length-o;d>0&&(a=this.data.substr(o),c=parseInt(a,10),i.put(c,d*3+1))},xf=e,xf}var Nf,X0;function c4(){if(X0)return Nf;X0=1;const n=Ds(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(i){this.mode=n.ALPHANUMERIC,this.data=i}return t.getBitsLength=function(o){return 11*Math.floor(o/2)+6*(o%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(o){let a;for(a=0;a+2<=this.data.length;a+=2){let c=e.indexOf(this.data[a])*45;c+=e.indexOf(this.data[a+1]),o.put(c,11)}this.data.length%2&&o.put(e.indexOf(this.data[a]),6)},Nf=t,Nf}var bf,Z0;function h4(){if(Z0)return bf;Z0=1;const n=Ds();function e(t){this.mode=n.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(i){return i*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let i=0,o=this.data.length;i<o;i++)t.put(this.data[i],8)},bf=e,bf}var Df,e_;function d4(){if(e_)return Df;e_=1;const n=Ds(),e=bs();function t(i){this.mode=n.KANJI,this.data=i}return t.getBitsLength=function(o){return o*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let o;for(o=0;o<this.data.length;o++){let a=e.toSJIS(this.data[o]);if(a>=33088&&a<=40956)a-=33088;else if(a>=57408&&a<=60351)a-=49472;else throw new Error("Invalid SJIS character: "+this.data[o]+`
Make sure your charset is UTF-8`);a=(a>>>8&255)*192+(a&255),i.put(a,13)}},Df=t,Df}var Mf={exports:{}},t_;function f4(){return t_||(t_=1,(function(n){var e={single_source_shortest_paths:function(t,i,o){var a={},c={};c[i]=0;var d=e.PriorityQueue.make();d.push(i,0);for(var f,g,_,w,T,R,M,V,L;!d.empty();){f=d.pop(),g=f.value,w=f.cost,T=t[g]||{};for(_ in T)T.hasOwnProperty(_)&&(R=T[_],M=w+R,V=c[_],L=typeof c[_]>"u",(L||V>M)&&(c[_]=M,d.push(_,M),a[_]=g))}if(typeof o<"u"&&typeof c[o]>"u"){var $=["Could not find a path from ",i," to ",o,"."].join("");throw new Error($)}return a},extract_shortest_path_from_predecessor_list:function(t,i){for(var o=[],a=i;a;)o.push(a),t[a],a=t[a];return o.reverse(),o},find_path:function(t,i,o){var a=e.single_source_shortest_paths(t,i,o);return e.extract_shortest_path_from_predecessor_list(a,o)},PriorityQueue:{make:function(t){var i=e.PriorityQueue,o={},a;t=t||{};for(a in i)i.hasOwnProperty(a)&&(o[a]=i[a]);return o.queue=[],o.sorter=t.sorter||i.default_sorter,o},default_sorter:function(t,i){return t.cost-i.cost},push:function(t,i){var o={value:t,cost:i};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e})(Mf)),Mf.exports}var n_;function p4(){return n_||(n_=1,(function(n){const e=Ds(),t=u4(),i=c4(),o=h4(),a=d4(),c=GE(),d=bs(),f=f4();function g($){return unescape(encodeURIComponent($)).length}function _($,G,W){const Q=[];let re;for(;(re=$.exec(W))!==null;)Q.push({data:re[0],index:re.index,mode:G,length:re[0].length});return Q}function w($){const G=_(c.NUMERIC,e.NUMERIC,$),W=_(c.ALPHANUMERIC,e.ALPHANUMERIC,$);let Q,re;return d.isKanjiModeEnabled()?(Q=_(c.BYTE,e.BYTE,$),re=_(c.KANJI,e.KANJI,$)):(Q=_(c.BYTE_KANJI,e.BYTE,$),re=[]),G.concat(W,Q,re).sort(function(P,I){return P.index-I.index}).map(function(P){return{data:P.data,mode:P.mode,length:P.length}})}function T($,G){switch(G){case e.NUMERIC:return t.getBitsLength($);case e.ALPHANUMERIC:return i.getBitsLength($);case e.KANJI:return a.getBitsLength($);case e.BYTE:return o.getBitsLength($)}}function R($){return $.reduce(function(G,W){const Q=G.length-1>=0?G[G.length-1]:null;return Q&&Q.mode===W.mode?(G[G.length-1].data+=W.data,G):(G.push(W),G)},[])}function M($){const G=[];for(let W=0;W<$.length;W++){const Q=$[W];switch(Q.mode){case e.NUMERIC:G.push([Q,{data:Q.data,mode:e.ALPHANUMERIC,length:Q.length},{data:Q.data,mode:e.BYTE,length:Q.length}]);break;case e.ALPHANUMERIC:G.push([Q,{data:Q.data,mode:e.BYTE,length:Q.length}]);break;case e.KANJI:G.push([Q,{data:Q.data,mode:e.BYTE,length:g(Q.data)}]);break;case e.BYTE:G.push([{data:Q.data,mode:e.BYTE,length:g(Q.data)}])}}return G}function V($,G){const W={},Q={start:{}};let re=["start"];for(let K=0;K<$.length;K++){const P=$[K],I=[];for(let A=0;A<P.length;A++){const N=P[A],b=""+K+A;I.push(b),W[b]={node:N,lastCount:0},Q[b]={};for(let D=0;D<re.length;D++){const C=re[D];W[C]&&W[C].node.mode===N.mode?(Q[C][b]=T(W[C].lastCount+N.length,N.mode)-T(W[C].lastCount,N.mode),W[C].lastCount+=N.length):(W[C]&&(W[C].lastCount=N.length),Q[C][b]=T(N.length,N.mode)+4+e.getCharCountIndicator(N.mode,G))}}re=I}for(let K=0;K<re.length;K++)Q[re[K]].end=0;return{map:Q,table:W}}function L($,G){let W;const Q=e.getBestModeForData($);if(W=e.from(G,Q),W!==e.BYTE&&W.bit<Q.bit)throw new Error('"'+$+'" cannot be encoded with mode '+e.toString(W)+`.
 Suggested mode is: `+e.toString(Q));switch(W===e.KANJI&&!d.isKanjiModeEnabled()&&(W=e.BYTE),W){case e.NUMERIC:return new t($);case e.ALPHANUMERIC:return new i($);case e.KANJI:return new a($);case e.BYTE:return new o($)}}n.fromArray=function(G){return G.reduce(function(W,Q){return typeof Q=="string"?W.push(L(Q,null)):Q.data&&W.push(L(Q.data,Q.mode)),W},[])},n.fromString=function(G,W){const Q=w(G,d.isKanjiModeEnabled()),re=M(Q),K=V(re,W),P=f.find_path(K.map,"start","end"),I=[];for(let A=1;A<P.length-1;A++)I.push(K.table[P[A]].node);return n.fromArray(R(I))},n.rawSplit=function(G){return n.fromArray(w(G,d.isKanjiModeEnabled()))}})(Pf)),Pf}var r_;function g4(){if(r_)return mf;r_=1;const n=bs(),e=xg(),t=ZN(),i=e4(),o=t4(),a=n4(),c=r4(),d=HE(),f=o4(),g=a4(),_=l4(),w=Ds(),T=p4();function R(K,P){const I=K.size,A=a.getPositions(P);for(let N=0;N<A.length;N++){const b=A[N][0],D=A[N][1];for(let C=-1;C<=7;C++)if(!(b+C<=-1||I<=b+C))for(let Z=-1;Z<=7;Z++)D+Z<=-1||I<=D+Z||(C>=0&&C<=6&&(Z===0||Z===6)||Z>=0&&Z<=6&&(C===0||C===6)||C>=2&&C<=4&&Z>=2&&Z<=4?K.set(b+C,D+Z,!0,!0):K.set(b+C,D+Z,!1,!0))}}function M(K){const P=K.size;for(let I=8;I<P-8;I++){const A=I%2===0;K.set(I,6,A,!0),K.set(6,I,A,!0)}}function V(K,P){const I=o.getPositions(P);for(let A=0;A<I.length;A++){const N=I[A][0],b=I[A][1];for(let D=-2;D<=2;D++)for(let C=-2;C<=2;C++)D===-2||D===2||C===-2||C===2||D===0&&C===0?K.set(N+D,b+C,!0,!0):K.set(N+D,b+C,!1,!0)}}function L(K,P){const I=K.size,A=g.getEncodedBits(P);let N,b,D;for(let C=0;C<18;C++)N=Math.floor(C/3),b=C%3+I-8-3,D=(A>>C&1)===1,K.set(N,b,D,!0),K.set(b,N,D,!0)}function $(K,P,I){const A=K.size,N=_.getEncodedBits(P,I);let b,D;for(b=0;b<15;b++)D=(N>>b&1)===1,b<6?K.set(b,8,D,!0):b<8?K.set(b+1,8,D,!0):K.set(A-15+b,8,D,!0),b<8?K.set(8,A-b-1,D,!0):b<9?K.set(8,15-b-1+1,D,!0):K.set(8,15-b-1,D,!0);K.set(A-8,8,1,!0)}function G(K,P){const I=K.size;let A=-1,N=I-1,b=7,D=0;for(let C=I-1;C>0;C-=2)for(C===6&&C--;;){for(let Z=0;Z<2;Z++)if(!K.isReserved(N,C-Z)){let Ce=!1;D<P.length&&(Ce=(P[D]>>>b&1)===1),K.set(N,C-Z,Ce),b--,b===-1&&(D++,b=7)}if(N+=A,N<0||I<=N){N-=A,A=-A;break}}}function W(K,P,I){const A=new t;I.forEach(function(Z){A.put(Z.mode.bit,4),A.put(Z.getLength(),w.getCharCountIndicator(Z.mode,K)),Z.write(A)});const N=n.getSymbolTotalCodewords(K),b=d.getTotalCodewordsCount(K,P),D=(N-b)*8;for(A.getLengthInBits()+4<=D&&A.put(0,4);A.getLengthInBits()%8!==0;)A.putBit(0);const C=(D-A.getLengthInBits())/8;for(let Z=0;Z<C;Z++)A.put(Z%2?17:236,8);return Q(A,K,P)}function Q(K,P,I){const A=n.getSymbolTotalCodewords(P),N=d.getTotalCodewordsCount(P,I),b=A-N,D=d.getBlocksCount(P,I),C=A%D,Z=D-C,Ce=Math.floor(A/D),Pe=Math.floor(b/D),xe=Pe+1,ie=Ce-Pe,ye=new f(ie);let le=0;const j=new Array(D),J=new Array(D);let pe=0;const be=new Uint8Array(K.buffer);for(let Be=0;Be<D;Be++){const ot=Be<Z?Pe:xe;j[Be]=be.slice(le,le+ot),J[Be]=ye.encode(j[Be]),le+=ot,pe=Math.max(pe,ot)}const ae=new Uint8Array(A);let Te=0,Ie,Se;for(Ie=0;Ie<pe;Ie++)for(Se=0;Se<D;Se++)Ie<j[Se].length&&(ae[Te++]=j[Se][Ie]);for(Ie=0;Ie<ie;Ie++)for(Se=0;Se<D;Se++)ae[Te++]=J[Se][Ie];return ae}function re(K,P,I,A){let N;if(Array.isArray(K))N=T.fromArray(K);else if(typeof K=="string"){let Ce=P;if(!Ce){const Pe=T.rawSplit(K);Ce=g.getBestVersionForData(Pe,I)}N=T.fromString(K,Ce||40)}else throw new Error("Invalid data");const b=g.getBestVersionForData(N,I);if(!b)throw new Error("The amount of data is too big to be stored in a QR Code");if(!P)P=b;else if(P<b)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+b+`.
`);const D=W(P,I,N),C=n.getSymbolSize(P),Z=new i(C);return R(Z,P),M(Z),V(Z,P),$(Z,I,0),P>=7&&L(Z,P),G(Z,D),isNaN(A)&&(A=c.getBestMask(Z,$.bind(null,Z,I))),c.applyMask(A,Z),$(Z,I,A),{modules:Z,version:P,errorCorrectionLevel:I,maskPattern:A,segments:N}}return mf.create=function(P,I){if(typeof P>"u"||P==="")throw new Error("No input text");let A=e.M,N,b;return typeof I<"u"&&(A=e.from(I.errorCorrectionLevel,e.M),N=g.from(I.version),b=c.from(I.maskPattern),I.toSJISFunc&&n.setToSJISFunction(I.toSJISFunc)),re(P,N,A,b)},mf}var Of={},Lf={},i_;function KE(){return i_||(i_=1,(function(n){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let i=t.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+t);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(a){return[a,a]}))),i.length===6&&i.push("F","F");const o=parseInt(i.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+i.slice(0,6).join("")}}n.getOptions=function(i){i||(i={}),i.color||(i.color={});const o=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,a=i.width&&i.width>=21?i.width:void 0,c=i.scale||4;return{width:a,scale:a?4:c,margin:o,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},n.getScale=function(i,o){return o.width&&o.width>=i+o.margin*2?o.width/(i+o.margin*2):o.scale},n.getImageWidth=function(i,o){const a=n.getScale(i,o);return Math.floor((i+o.margin*2)*a)},n.qrToImageData=function(i,o,a){const c=o.modules.size,d=o.modules.data,f=n.getScale(c,a),g=Math.floor((c+a.margin*2)*f),_=a.margin*f,w=[a.color.light,a.color.dark];for(let T=0;T<g;T++)for(let R=0;R<g;R++){let M=(T*g+R)*4,V=a.color.light;if(T>=_&&R>=_&&T<g-_&&R<g-_){const L=Math.floor((T-_)/f),$=Math.floor((R-_)/f);V=w[d[L*c+$]?1:0]}i[M++]=V.r,i[M++]=V.g,i[M++]=V.b,i[M]=V.a}}})(Lf)),Lf}var s_;function m4(){return s_||(s_=1,(function(n){const e=KE();function t(o,a,c){o.clearRect(0,0,a.width,a.height),a.style||(a.style={}),a.height=c,a.width=c,a.style.height=c+"px",a.style.width=c+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(a,c,d){let f=d,g=c;typeof f>"u"&&(!c||!c.getContext)&&(f=c,c=void 0),c||(g=i()),f=e.getOptions(f);const _=e.getImageWidth(a.modules.size,f),w=g.getContext("2d"),T=w.createImageData(_,_);return e.qrToImageData(T.data,a,f),t(w,g,_),w.putImageData(T,0,0),g},n.renderToDataURL=function(a,c,d){let f=d;typeof f>"u"&&(!c||!c.getContext)&&(f=c,c=void 0),f||(f={});const g=n.render(a,c,f),_=f.type||"image/png",w=f.rendererOpts||{};return g.toDataURL(_,w.quality)}})(Of)),Of}var Vf={},o_;function y4(){if(o_)return Vf;o_=1;const n=KE();function e(o,a){const c=o.a/255,d=a+'="'+o.hex+'"';return c<1?d+" "+a+'-opacity="'+c.toFixed(2).slice(1)+'"':d}function t(o,a,c){let d=o+a;return typeof c<"u"&&(d+=" "+c),d}function i(o,a,c){let d="",f=0,g=!1,_=0;for(let w=0;w<o.length;w++){const T=Math.floor(w%a),R=Math.floor(w/a);!T&&!g&&(g=!0),o[w]?(_++,w>0&&T>0&&o[w-1]||(d+=g?t("M",T+c,.5+R+c):t("m",f,0),f=0,g=!1),T+1<a&&o[w+1]||(d+=t("h",_),_=0)):f++}return d}return Vf.render=function(a,c,d){const f=n.getOptions(c),g=a.modules.size,_=a.modules.data,w=g+f.margin*2,T=f.color.light.a?"<path "+e(f.color.light,"fill")+' d="M0 0h'+w+"v"+w+'H0z"/>':"",R="<path "+e(f.color.dark,"stroke")+' d="'+i(_,g,f.margin)+'"/>',M='viewBox="0 0 '+w+" "+w+'"',L='<svg xmlns="http://www.w3.org/2000/svg" '+(f.width?'width="'+f.width+'" height="'+f.width+'" ':"")+M+' shape-rendering="crispEdges">'+T+R+`</svg>
`;return typeof d=="function"&&d(null,L),L},Vf}var a_;function v4(){if(a_)return Co;a_=1;const n=XN(),e=g4(),t=m4(),i=y4();function o(a,c,d,f,g){const _=[].slice.call(arguments,1),w=_.length,T=typeof _[w-1]=="function";if(!T&&!n())throw new Error("Callback required as last argument");if(T){if(w<2)throw new Error("Too few arguments provided");w===2?(g=d,d=c,c=f=void 0):w===3&&(c.getContext&&typeof g>"u"?(g=f,f=void 0):(g=f,f=d,d=c,c=void 0))}else{if(w<1)throw new Error("Too few arguments provided");return w===1?(d=c,c=f=void 0):w===2&&!c.getContext&&(f=d,d=c,c=void 0),new Promise(function(R,M){try{const V=e.create(d,f);R(a(V,c,f))}catch(V){M(V)}})}try{const R=e.create(d,f);g(null,a(R,c,f))}catch(R){g(R)}}return Co.create=e.create,Co.toCanvas=o.bind(null,t.render),Co.toDataURL=o.bind(null,t.renderToDataURL),Co.toString=o.bind(null,function(a,c,d){return i.render(a,d)}),Co}var _4=v4();const w4=A_(_4);function l_({onClose:n,user:e,profile:t,onProfileChange:i}){const[o,a]=ve.useState([]),[c,d]=ve.useState(null),[f,g]=ve.useState(!1),[_,w]=ve.useState(""),[T,R]=ve.useState(""),[M,V]=ve.useState(!0),[L,$]=ve.useState(!1);ve.useEffect(()=>{W()},[t?.groupId,e?.uid]);const G=async I=>{const A=`${window.location.origin}?invite=${I}`;w(A),R(await w4.toDataURL(A))},W=async()=>{try{if(!t?.groupId){d(null),a([]),g(!1),w(""),R("");return}const I=await _h(t.groupId);if(!I){d(null),a([]),g(!1),w(""),R("");return}d(I),g(I.ownerId===e?.uid),a(await jo(t.groupId)),await G(I.inviteCode)}catch(I){console.error("Failed to load members:",I)}finally{V(!1)}},Q=async()=>{if(e){V(!0);try{const I=await zE(e,localStorage.getItem("groupName")||"My Family Group"),A=await loadUserProfile(e.uid);i(A),d(I),g(!0),a(await jo(I.groupId)),await G(I.inviteCode)}catch(I){console.error("Failed to create group:",I)}finally{V(!1)}}},re=async()=>{if(!c){await Q();return}try{const I=await qE(c.groupId);await G(I)}catch(I){console.error("Failed to generate invite:",I)}},K=async I=>{if(c&&confirm("Are you sure you want to remove this member?"))try{await $E(c.groupId,I),a(await jo(c.groupId))}catch(A){console.error("Failed to revoke access:",A)}},P=async()=>{await navigator.clipboard.writeText(_),$(!0),setTimeout(()=>$(!1),2e3)};return S.jsx("div",{className:"fixed inset-0 bg-black/50 z-50 flex items-end",children:S.jsxs("div",{className:"bg-white dark:bg-gray-800 w-full rounded-t-3xl max-h-[90vh] flex flex-col animate-slide-up max-w-md mx-auto",children:[S.jsxs("div",{className:"flex items-center justify-between p-5 border-b dark:border-gray-700",children:[S.jsxs("h2",{className:"font-semibold text-gray-900 dark:text-white text-lg flex items-center gap-2",children:[S.jsx($p,{className:"size-5"}),"Family Group"]}),S.jsx("button",{onClick:n,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95",children:S.jsx(Yc,{className:"size-6 dark:text-gray-300"})})]}),S.jsxs("div",{className:"flex-1 p-5 overflow-y-auto space-y-6",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"font-medium text-gray-900 dark:text-white mb-3",children:"Members"}),M?S.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Loading..."}):S.jsx("div",{className:"space-y-2",children:o.map(I=>S.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 rounded-xl p-4 flex items-center justify-between",children:[S.jsxs("div",{children:[S.jsxs("p",{className:"font-medium text-gray-900 dark:text-white",children:[I.displayName,I.isOwner&&S.jsx("span",{className:"ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded",children:"Owner"})]}),S.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:I.email})]}),f&&!I.isOwner&&S.jsx("button",{onClick:()=>K(I.id),className:"p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors",children:S.jsx(Rw,{className:"size-4"})})]},I.id))})]}),c?S.jsxs("div",{children:[S.jsx("h3",{className:"font-medium text-gray-900 dark:text-white mb-3",children:"Invite Family Members"}),_?S.jsxs("div",{className:"space-y-4",children:[T&&S.jsx("div",{className:"bg-white p-4 rounded-xl flex justify-center",children:S.jsx("img",{src:T,alt:"Invite QR Code",className:"w-48 h-48"})}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("input",{type:"text",value:_,readOnly:!0,className:"flex-1 px-3 py-2 text-sm border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl"}),S.jsx("button",{onClick:P,className:"px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-colors active:scale-95",children:L?S.jsx(ip,{className:"size-5 text-green-500"}):S.jsx(xC,{className:"size-5 text-gray-600 dark:text-gray-300"})})]}),S.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 text-center",children:"Share this link or QR code with family members"}),S.jsx("button",{onClick:re,className:"w-full text-blue-500 dark:text-blue-400 py-2 text-sm font-medium",children:"Generate New Link"})]}):S.jsxs("button",{onClick:re,className:"w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors active:scale-95 flex items-center justify-center gap-2",children:[S.jsx(Cw,{className:"size-5"}),"Generate Invite Link"]})]}):S.jsxs("div",{className:"space-y-3 rounded-2xl bg-gray-50 dark:bg-gray-700 p-4",children:[S.jsx("h3",{className:"font-medium text-gray-900 dark:text-white",children:"Create a Family Group"}),S.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Create a group first, then generate an invite link to share with family members."}),S.jsx("button",{onClick:Q,className:"w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors active:scale-95",children:"Create Group"})]})]}),S.jsx("div",{className:"p-5 border-t dark:border-gray-700 bg-white dark:bg-gray-800",children:S.jsx("button",{onClick:n,className:"w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors active:scale-95",children:"Close"})})]})})}function u_({onClose:n,userId:e,groupId:t}){const[i,o]=ve.useState([]),[a,c]=ve.useState(""),[d,f]=ve.useState(!0),[g,_]=ve.useState(!1),w=ve.useRef(null);ve.useEffect(()=>{T()},[t,e]);const T=async()=>{try{const W=await GN(e,t);o(W.filter(Q=>!Q.checked))}catch(W){console.error("Error loading grocery items:",W)}finally{f(!1)}},R=async W=>{_(!0);try{await KN(e,t,W)}catch(Q){console.error("Error saving grocery items:",Q)}finally{_(!1)}},M=W=>{w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{R(W)},500)},V=()=>{if(!a.trim())return;const W={id:Date.now().toString()+Math.random().toString(),text:a.trim(),checked:!1},Q=[...i,W];o(Q),c(""),M(Q)},L=W=>{W.key==="Enter"&&V()},$=W=>{if(!i.find(K=>K.id===W))return;const re=i.map(K=>K.id===W?{...K,checked:!0}:K);R(re),setTimeout(()=>{const K=i.filter(P=>P.id!==W);o(K)},300)},G=()=>{w.current&&clearTimeout(w.current),R(i).then(()=>{n()})};return ve.useEffect(()=>()=>{w.current&&clearTimeout(w.current)},[]),S.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:S.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col",children:[S.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[S.jsxs("div",{children:[S.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Shared Grocery List"}),S.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:["All family members can edit",g&&S.jsx("span",{className:"ml-2",children:"• Saving..."})]})]}),S.jsx("button",{onClick:G,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors","aria-label":"Close",children:S.jsx(Yc,{className:"size-6 text-gray-600 dark:text-gray-400"})})]}),S.jsx("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700",children:S.jsxs("div",{className:"flex gap-2",children:[S.jsx("input",{type:"text",value:a,onChange:W=>c(W.target.value),onKeyPress:L,placeholder:"Add a new grocery item...",className:"flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"}),S.jsxs("button",{onClick:V,className:"px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-colors active:scale-95 flex items-center gap-2 flex-shrink-0",children:[S.jsx(HC,{className:"size-5"}),S.jsx("span",{className:"hidden sm:inline",children:"Add"})]})]})}),S.jsx("div",{className:"flex-1 p-6 overflow-y-auto",children:d?S.jsx("div",{className:"flex items-center justify-center h-full",children:S.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Loading..."})}):i.length===0?S.jsx("div",{className:"flex items-center justify-center h-full",children:S.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"No items yet. Add your first grocery item above!"})}):S.jsx("div",{className:"space-y-3",children:i.map(W=>S.jsxs("div",{className:"flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all",children:[S.jsx("button",{onClick:()=>$(W.id),className:"flex-shrink-0 w-8 h-8 rounded-full border-3 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-green-500 dark:hover:border-green-500 transition-all active:scale-95 flex items-center justify-center group","aria-label":"Check item",children:S.jsx("div",{className:"w-5 h-5 rounded-full bg-transparent group-hover:bg-green-500 transition-colors"})}),S.jsx("p",{className:"flex-1 text-gray-900 dark:text-white text-lg",children:W.text})]},W.id))})})]})})}function c_({notes:n,onNotesChange:e,onClose:t}){return S.jsx("div",{className:"fixed inset-0 bg-black/50 z-50 flex items-end",children:S.jsxs("div",{className:"bg-white dark:bg-gray-800 w-full rounded-t-3xl max-h-[90vh] flex flex-col animate-slide-up max-w-md mx-auto",children:[S.jsxs("div",{className:"flex items-center justify-between p-5 border-b dark:border-gray-700",children:[S.jsx("h2",{className:"font-semibold text-gray-900 dark:text-white text-lg",children:"Grocery List"}),S.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95",children:S.jsx(Yc,{className:"size-6 dark:text-gray-300"})})]}),S.jsx("div",{className:"flex-1 p-5 overflow-y-auto",children:S.jsx("textarea",{value:n,onChange:i=>e(i.target.value),placeholder:`Write your grocery list here...

Example:
• Eggs
• Milk
• Bread
• Chicken breast
• Fresh vegetables`,className:"w-full h-full min-h-[400px] px-4 py-3 text-base border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"})}),S.jsx("div",{className:"p-5 border-t dark:border-gray-700 bg-white dark:bg-gray-800",children:S.jsx("button",{onClick:t,className:"w-full bg-green-500 dark:bg-green-600 text-white py-4 rounded-xl font-medium hover:bg-green-600 dark:hover:bg-green-700 transition-colors active:scale-95",children:"Done"})})]})})}var Ro={},Ff={exports:{}},jf,h_;function E4(){if(h_)return jf;h_=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return jf=n,jf}var Uf,d_;function T4(){if(d_)return Uf;d_=1;var n=E4();function e(){}function t(){}return t.resetWarningCache=e,Uf=function(){function i(c,d,f,g,_,w){if(w!==n){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}i.isRequired=i;function o(){return i}var a={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return a.PropTypes=a,a},Uf}var f_;function QE(){return f_||(f_=1,Ff.exports=T4()()),Ff.exports}var Bf,p_;function YE(){return p_||(p_=1,Bf={L:1,M:0,Q:3,H:2}),Bf}var zf,g_;function JE(){return g_||(g_=1,zf={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}),zf}var qf,m_;function I4(){if(m_)return qf;m_=1;var n=JE();function e(t){this.mode=n.MODE_8BIT_BYTE,this.data=t}return e.prototype={getLength:function(t){return this.data.length},write:function(t){for(var i=0;i<this.data.length;i++)t.put(this.data.charCodeAt(i),8)}},qf=e,qf}var $f,y_;function S4(){if(y_)return $f;y_=1;var n=YE();function e(t,i){this.totalCount=t,this.dataCount=i}return e.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e.getRSBlocks=function(t,i){var o=e.getRsBlockTable(t,i);if(o==null)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+i);for(var a=o.length/3,c=new Array,d=0;d<a;d++)for(var f=o[d*3+0],g=o[d*3+1],_=o[d*3+2],w=0;w<f;w++)c.push(new e(g,_));return c},e.getRsBlockTable=function(t,i){switch(i){case n.L:return e.RS_BLOCK_TABLE[(t-1)*4+0];case n.M:return e.RS_BLOCK_TABLE[(t-1)*4+1];case n.Q:return e.RS_BLOCK_TABLE[(t-1)*4+2];case n.H:return e.RS_BLOCK_TABLE[(t-1)*4+3];default:return}},$f=e,$f}var Hf,v_;function k4(){if(v_)return Hf;v_=1;function n(){this.buffer=new Array,this.length=0}return n.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(var i=0;i<t;i++)this.putBit((e>>>t-i-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Hf=n,Hf}var Wf,__;function XE(){if(__)return Wf;__=1;for(var n={glog:function(t){if(t<1)throw new Error("glog("+t+")");return n.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return n.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},e=0;e<8;e++)n.EXP_TABLE[e]=1<<e;for(var e=8;e<256;e++)n.EXP_TABLE[e]=n.EXP_TABLE[e-4]^n.EXP_TABLE[e-5]^n.EXP_TABLE[e-6]^n.EXP_TABLE[e-8];for(var e=0;e<255;e++)n.LOG_TABLE[n.EXP_TABLE[e]]=e;return Wf=n,Wf}var Gf,w_;function ZE(){if(w_)return Gf;w_=1;var n=XE();function e(t,i){if(t.length==null)throw new Error(t.length+"/"+i);for(var o=0;o<t.length&&t[o]==0;)o++;this.num=new Array(t.length-o+i);for(var a=0;a<t.length-o;a++)this.num[a]=t[a+o]}return e.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var i=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var a=0;a<t.getLength();a++)i[o+a]^=n.gexp(n.glog(this.get(o))+n.glog(t.get(a)));return new e(i,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var i=n.glog(this.get(0))-n.glog(t.get(0)),o=new Array(this.getLength()),a=0;a<this.getLength();a++)o[a]=this.get(a);for(var a=0;a<t.getLength();a++)o[a]^=n.gexp(n.glog(t.get(a))+i);return new e(o,0).mod(t)}},Gf=e,Gf}var Kf,E_;function A4(){if(E_)return Kf;E_=1;var n=JE(),e=ZE(),t=XE(),i={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},o={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var c=a<<10;o.getBCHDigit(c)-o.getBCHDigit(o.G15)>=0;)c^=o.G15<<o.getBCHDigit(c)-o.getBCHDigit(o.G15);return(a<<10|c)^o.G15_MASK},getBCHTypeNumber:function(a){for(var c=a<<12;o.getBCHDigit(c)-o.getBCHDigit(o.G18)>=0;)c^=o.G18<<o.getBCHDigit(c)-o.getBCHDigit(o.G18);return a<<12|c},getBCHDigit:function(a){for(var c=0;a!=0;)c++,a>>>=1;return c},getPatternPosition:function(a){return o.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,c,d){switch(a){case i.PATTERN000:return(c+d)%2==0;case i.PATTERN001:return c%2==0;case i.PATTERN010:return d%3==0;case i.PATTERN011:return(c+d)%3==0;case i.PATTERN100:return(Math.floor(c/2)+Math.floor(d/3))%2==0;case i.PATTERN101:return c*d%2+c*d%3==0;case i.PATTERN110:return(c*d%2+c*d%3)%2==0;case i.PATTERN111:return(c*d%3+(c+d)%2)%2==0;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var c=new e([1],0),d=0;d<a;d++)c=c.multiply(new e([1,t.gexp(d)],0));return c},getLengthInBits:function(a,c){if(1<=c&&c<10)switch(a){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:return 8;case n.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(c<27)switch(a){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else if(c<41)switch(a){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}else throw new Error("type:"+c)},getLostPoint:function(a){for(var c=a.getModuleCount(),d=0,f=0;f<c;f++)for(var g=0;g<c;g++){for(var _=0,w=a.isDark(f,g),T=-1;T<=1;T++)if(!(f+T<0||c<=f+T))for(var R=-1;R<=1;R++)g+R<0||c<=g+R||T==0&&R==0||w==a.isDark(f+T,g+R)&&_++;_>5&&(d+=3+_-5)}for(var f=0;f<c-1;f++)for(var g=0;g<c-1;g++){var M=0;a.isDark(f,g)&&M++,a.isDark(f+1,g)&&M++,a.isDark(f,g+1)&&M++,a.isDark(f+1,g+1)&&M++,(M==0||M==4)&&(d+=3)}for(var f=0;f<c;f++)for(var g=0;g<c-6;g++)a.isDark(f,g)&&!a.isDark(f,g+1)&&a.isDark(f,g+2)&&a.isDark(f,g+3)&&a.isDark(f,g+4)&&!a.isDark(f,g+5)&&a.isDark(f,g+6)&&(d+=40);for(var g=0;g<c;g++)for(var f=0;f<c-6;f++)a.isDark(f,g)&&!a.isDark(f+1,g)&&a.isDark(f+2,g)&&a.isDark(f+3,g)&&a.isDark(f+4,g)&&!a.isDark(f+5,g)&&a.isDark(f+6,g)&&(d+=40);for(var V=0,g=0;g<c;g++)for(var f=0;f<c;f++)a.isDark(f,g)&&V++;var L=Math.abs(100*V/c/c-50)/5;return d+=L*10,d}};return Kf=o,Kf}var Qf,T_;function C4(){if(T_)return Qf;T_=1;var n=I4(),e=S4(),t=k4(),i=A4(),o=ZE();function a(d,f){this.typeNumber=d,this.errorCorrectLevel=f,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var c=a.prototype;return c.addData=function(d){var f=new n(d);this.dataList.push(f),this.dataCache=null},c.isDark=function(d,f){if(d<0||this.moduleCount<=d||f<0||this.moduleCount<=f)throw new Error(d+","+f);return this.modules[d][f]},c.getModuleCount=function(){return this.moduleCount},c.make=function(){if(this.typeNumber<1){var d=1;for(d=1;d<40;d++){for(var f=e.getRSBlocks(d,this.errorCorrectLevel),g=new t,_=0,w=0;w<f.length;w++)_+=f[w].dataCount;for(var w=0;w<this.dataList.length;w++){var T=this.dataList[w];g.put(T.mode,4),g.put(T.getLength(),i.getLengthInBits(T.mode,d)),T.write(g)}if(g.getLengthInBits()<=_*8)break}this.typeNumber=d}this.makeImpl(!1,this.getBestMaskPattern())},c.makeImpl=function(d,f){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var g=0;g<this.moduleCount;g++){this.modules[g]=new Array(this.moduleCount);for(var _=0;_<this.moduleCount;_++)this.modules[g][_]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(d,f),this.typeNumber>=7&&this.setupTypeNumber(d),this.dataCache==null&&(this.dataCache=a.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,f)},c.setupPositionProbePattern=function(d,f){for(var g=-1;g<=7;g++)if(!(d+g<=-1||this.moduleCount<=d+g))for(var _=-1;_<=7;_++)f+_<=-1||this.moduleCount<=f+_||(0<=g&&g<=6&&(_==0||_==6)||0<=_&&_<=6&&(g==0||g==6)||2<=g&&g<=4&&2<=_&&_<=4?this.modules[d+g][f+_]=!0:this.modules[d+g][f+_]=!1)},c.getBestMaskPattern=function(){for(var d=0,f=0,g=0;g<8;g++){this.makeImpl(!0,g);var _=i.getLostPoint(this);(g==0||d>_)&&(d=_,f=g)}return f},c.createMovieClip=function(d,f,g){var _=d.createEmptyMovieClip(f,g),w=1;this.make();for(var T=0;T<this.modules.length;T++)for(var R=T*w,M=0;M<this.modules[T].length;M++){var V=M*w,L=this.modules[T][M];L&&(_.beginFill(0,100),_.moveTo(V,R),_.lineTo(V+w,R),_.lineTo(V+w,R+w),_.lineTo(V,R+w),_.endFill())}return _},c.setupTimingPattern=function(){for(var d=8;d<this.moduleCount-8;d++)this.modules[d][6]==null&&(this.modules[d][6]=d%2==0);for(var f=8;f<this.moduleCount-8;f++)this.modules[6][f]==null&&(this.modules[6][f]=f%2==0)},c.setupPositionAdjustPattern=function(){for(var d=i.getPatternPosition(this.typeNumber),f=0;f<d.length;f++)for(var g=0;g<d.length;g++){var _=d[f],w=d[g];if(this.modules[_][w]==null)for(var T=-2;T<=2;T++)for(var R=-2;R<=2;R++)T==-2||T==2||R==-2||R==2||T==0&&R==0?this.modules[_+T][w+R]=!0:this.modules[_+T][w+R]=!1}},c.setupTypeNumber=function(d){for(var f=i.getBCHTypeNumber(this.typeNumber),g=0;g<18;g++){var _=!d&&(f>>g&1)==1;this.modules[Math.floor(g/3)][g%3+this.moduleCount-8-3]=_}for(var g=0;g<18;g++){var _=!d&&(f>>g&1)==1;this.modules[g%3+this.moduleCount-8-3][Math.floor(g/3)]=_}},c.setupTypeInfo=function(d,f){for(var g=this.errorCorrectLevel<<3|f,_=i.getBCHTypeInfo(g),w=0;w<15;w++){var T=!d&&(_>>w&1)==1;w<6?this.modules[w][8]=T:w<8?this.modules[w+1][8]=T:this.modules[this.moduleCount-15+w][8]=T}for(var w=0;w<15;w++){var T=!d&&(_>>w&1)==1;w<8?this.modules[8][this.moduleCount-w-1]=T:w<9?this.modules[8][15-w-1+1]=T:this.modules[8][15-w-1]=T}this.modules[this.moduleCount-8][8]=!d},c.mapData=function(d,f){for(var g=-1,_=this.moduleCount-1,w=7,T=0,R=this.moduleCount-1;R>0;R-=2)for(R==6&&R--;;){for(var M=0;M<2;M++)if(this.modules[_][R-M]==null){var V=!1;T<d.length&&(V=(d[T]>>>w&1)==1);var L=i.getMask(f,_,R-M);L&&(V=!V),this.modules[_][R-M]=V,w--,w==-1&&(T++,w=7)}if(_+=g,_<0||this.moduleCount<=_){_-=g,g=-g;break}}},a.PAD0=236,a.PAD1=17,a.createData=function(d,f,g){for(var _=e.getRSBlocks(d,f),w=new t,T=0;T<g.length;T++){var R=g[T];w.put(R.mode,4),w.put(R.getLength(),i.getLengthInBits(R.mode,d)),R.write(w)}for(var M=0,T=0;T<_.length;T++)M+=_[T].dataCount;if(w.getLengthInBits()>M*8)throw new Error("code length overflow. ("+w.getLengthInBits()+">"+M*8+")");for(w.getLengthInBits()+4<=M*8&&w.put(0,4);w.getLengthInBits()%8!=0;)w.putBit(!1);for(;!(w.getLengthInBits()>=M*8||(w.put(a.PAD0,8),w.getLengthInBits()>=M*8));)w.put(a.PAD1,8);return a.createBytes(w,_)},a.createBytes=function(d,f){for(var g=0,_=0,w=0,T=new Array(f.length),R=new Array(f.length),M=0;M<f.length;M++){var V=f[M].dataCount,L=f[M].totalCount-V;_=Math.max(_,V),w=Math.max(w,L),T[M]=new Array(V);for(var $=0;$<T[M].length;$++)T[M][$]=255&d.buffer[$+g];g+=V;var G=i.getErrorCorrectPolynomial(L),W=new o(T[M],G.getLength()-1),Q=W.mod(G);R[M]=new Array(G.getLength()-1);for(var $=0;$<R[M].length;$++){var re=$+Q.getLength()-R[M].length;R[M][$]=re>=0?Q.get(re):0}}for(var K=0,$=0;$<f.length;$++)K+=f[$].totalCount;for(var P=new Array(K),I=0,$=0;$<_;$++)for(var M=0;M<f.length;M++)$<T[M].length&&(P[I++]=T[M][$]);for(var $=0;$<w;$++)for(var M=0;M<f.length;M++)$<R[M].length&&(P[I++]=R[M][$]);return P},Qf=a,Qf}var lc={},I_;function R4(){if(I_)return lc;I_=1,Object.defineProperty(lc,"__esModule",{value:!0});var n=Object.assign||function(g){for(var _=1;_<arguments.length;_++){var w=arguments[_];for(var T in w)Object.prototype.hasOwnProperty.call(w,T)&&(g[T]=w[T])}return g},e=QE(),t=a(e),i=Tl(),o=a(i);function a(g){return g&&g.__esModule?g:{default:g}}function c(g,_){var w={};for(var T in g)_.indexOf(T)>=0||Object.prototype.hasOwnProperty.call(g,T)&&(w[T]=g[T]);return w}var d={bgColor:t.default.oneOfType([t.default.object,t.default.string]).isRequired,bgD:t.default.string.isRequired,fgColor:t.default.oneOfType([t.default.object,t.default.string]).isRequired,fgD:t.default.string.isRequired,size:t.default.number.isRequired,title:t.default.string,viewBoxSize:t.default.number.isRequired,xmlns:t.default.string},f=(0,i.forwardRef)(function(g,_){var w=g.bgColor,T=g.bgD,R=g.fgD,M=g.fgColor,V=g.size,L=g.title,$=g.viewBoxSize,G=g.xmlns,W=G===void 0?"http://www.w3.org/2000/svg":G,Q=c(g,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize","xmlns"]);return o.default.createElement("svg",n({},Q,{height:V,ref:_,viewBox:"0 0 "+$+" "+$,width:V,xmlns:W}),L?o.default.createElement("title",null,L):null,o.default.createElement("path",{d:T,fill:w}),o.default.createElement("path",{d:R,fill:M}))});return f.displayName="QRCodeSvg",f.propTypes=d,lc.default=f,lc}var S_;function P4(){if(S_)return Ro;S_=1,Object.defineProperty(Ro,"__esModule",{value:!0}),Ro.QRCode=void 0;var n=Object.assign||function(V){for(var L=1;L<arguments.length;L++){var $=arguments[L];for(var G in $)Object.prototype.hasOwnProperty.call($,G)&&(V[G]=$[G])}return V},e=QE(),t=w(e),i=YE(),o=w(i),a=C4(),c=w(a),d=Tl(),f=w(d),g=R4(),_=w(g);function w(V){return V&&V.__esModule?V:{default:V}}function T(V,L){var $={};for(var G in V)L.indexOf(G)>=0||Object.prototype.hasOwnProperty.call(V,G)&&($[G]=V[G]);return $}var R={bgColor:t.default.oneOfType([t.default.object,t.default.string]),fgColor:t.default.oneOfType([t.default.object,t.default.string]),level:t.default.string,size:t.default.number,value:t.default.string.isRequired},M=(0,d.forwardRef)(function(V,L){var $=V.bgColor,G=$===void 0?"#FFFFFF":$,W=V.fgColor,Q=W===void 0?"#000000":W,re=V.level,K=re===void 0?"L":re,P=V.size,I=P===void 0?256:P,A=V.value,N=T(V,["bgColor","fgColor","level","size","value"]),b=new c.default(-1,o.default[K]);b.addData(A),b.make();var D=b.modules;return f.default.createElement(_.default,n({},N,{bgColor:G,bgD:D.map(function(C,Z){return C.map(function(Ce,Pe){return Ce?"":"M "+Pe+" "+Z+" l 1 0 0 1 -1 0 Z"}).join(" ")}).join(" "),fgColor:Q,fgD:D.map(function(C,Z){return C.map(function(Ce,Pe){return Ce?"M "+Pe+" "+Z+" l 1 0 0 1 -1 0 Z":""}).join(" ")}).join(" "),ref:L,size:I,viewBoxSize:D.length}))});return Ro.QRCode=M,M.displayName="QRCode",M.propTypes=R,Ro.default=M,Ro}var x4=P4();const N4=A_(x4);function b4({onClose:n,darkMode:e,user:t,profile:i,onProfileChange:o,onSignOut:a}){const[c,d]=ve.useState("My Family Group"),[f,g]=ve.useState(!1),[_,w]=ve.useState(""),[T,R]=ve.useState(t?.displayName||t?.email||"User"),[M,V]=ve.useState(!1),[L,$]=ve.useState(""),[G,W]=ve.useState(t?.photoURL||""),[Q,re]=ve.useState(""),[K,P]=ve.useState(!1),[I,A]=ve.useState([]),[N,b]=ve.useState(!1),[D,C]=ve.useState(null);ve.useEffect(()=>{Z()},[i?.groupId,t?.uid]);const Z=async()=>{const ae=localStorage.getItem("groupName"),Te=localStorage.getItem("displayName"),Ie=localStorage.getItem("profilePicture");if(ae&&d(ae),Te&&R(Te),Ie&&W(Ie),!i?.groupId){C(null),A([]),re("");return}const Se=await _h(i.groupId);Se&&(C(Se),d(Se.name),A(await jo(Se.groupId)),re(`${window.location.origin}?invite=${Se.inviteCode}`))},Ce=async()=>{if(!t)return null;const ae=await zE(t,c||"My Family Group"),Te=await vs(t.uid);return o(Te),C(ae),re(`${window.location.origin}?invite=${ae.inviteCode}`),A(await jo(ae.groupId)),ae},Pe=async()=>{try{const ae=D??await Ce();if(!ae)return;const Te=await qE(ae.groupId);re(`${window.location.origin}?invite=${Te}`)}catch(ae){console.error("Failed to generate invite link:",ae)}},xe=async()=>{D&&A(await jo(D.groupId))},ie=async ae=>{if(D&&confirm("Are you sure you want to remove this member from the group?")){b(!0);try{await $E(D.groupId,ae),await xe()}catch(Te){console.error("Failed to remove member:",Te)}finally{b(!1)}}},ye=ae=>{const Te=ae.target.files?.[0];if(!Te)return;const Ie=new FileReader;Ie.onloadend=()=>{const Se=Ie.result;W(Se),localStorage.setItem("profilePicture",Se)},Ie.readAsDataURL(Te)},le=()=>{d(_),localStorage.setItem("groupName",_),D&&QN(D.groupId,_),g(!1)},j=()=>{R(L),localStorage.setItem("displayName",L),t&&(HN(t.uid,L),o(i&&{...i,displayName:L})),V(!1)},J=()=>{const ae=document.createElement("textarea");ae.value=Q,ae.style.position="fixed",ae.style.left="-999999px",document.body.appendChild(ae),ae.select();try{document.execCommand("copy"),alert("Invite link copied to clipboard!")}catch(Te){console.error("Failed to copy:",Te);const Ie=document.querySelector("input[readonly]");Ie&&(Ie.select(),alert("Please press Ctrl+C (or Cmd+C on Mac) to copy the link"))}finally{document.body.removeChild(ae)}},pe=async()=>{b(!0);try{if(!await Ce())return;await xe(),P(!0)}catch(ae){console.error("Failed to create group:",ae)}finally{b(!1)}},be=!!(D||i?.groupId);return S.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:S.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl",children:[S.jsxs("div",{className:"sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-5 flex items-center justify-between z-10",children:[S.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Group Management"}),S.jsx("button",{onClick:n,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95",children:S.jsx(Yc,{className:"size-6 dark:text-gray-300"})})]}),S.jsxs("div",{className:"p-6 space-y-6",children:[S.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-700 dark:to-gray-700 rounded-2xl p-6",children:[S.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Your Profile"}),S.jsxs("div",{className:"flex items-start gap-6",children:[S.jsxs("div",{className:"relative",children:[S.jsx("div",{className:"w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center overflow-hidden",children:G?S.jsx("img",{src:G,alt:"Profile",className:"w-full h-full object-cover"}):S.jsx(Pc,{className:"size-12 text-gray-400"})}),S.jsxs("label",{className:"absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 p-2 rounded-full cursor-pointer transition-colors active:scale-95 shadow-lg",children:[S.jsx(kC,{className:"size-4 text-white"}),S.jsx("input",{type:"file",accept:"image/*",onChange:ye,className:"hidden"})]})]}),S.jsxs("div",{className:"flex-1 space-y-3",children:[S.jsxs("div",{children:[S.jsx("label",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Display Name"}),M?S.jsxs("div",{className:"flex gap-2 mt-1",children:[S.jsx("input",{type:"text",value:L,onChange:ae=>$(ae.target.value),className:"flex-1 px-3 py-2 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg",autoFocus:!0}),S.jsx("button",{onClick:j,className:"p-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors active:scale-95",children:S.jsx(ip,{className:"size-5 text-white"})})]}):S.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[S.jsx("p",{className:"text-gray-900 dark:text-white font-medium",children:T}),S.jsx("button",{onClick:()=>{$(T),V(!0)},className:"p-1 hover:bg-white/50 dark:hover:bg-gray-600 rounded-lg transition-colors active:scale-95",children:S.jsx(Sv,{className:"size-4 text-gray-500 dark:text-gray-400"})})]})]}),S.jsxs("div",{children:[S.jsx("label",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Email"}),S.jsx("p",{className:"text-gray-900 dark:text-white mt-1 break-all",children:t?.email})]})]})]})]}),S.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 rounded-2xl p-6",children:[S.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-3",children:"Group Name"}),!be&&S.jsxs("div",{className:"mb-4 space-y-3",children:[S.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Create a family group to share meal plans and grocery lists."}),S.jsx("button",{onClick:pe,disabled:N,className:"w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition-colors active:scale-95 disabled:opacity-50",children:"Create Group"})]}),f?S.jsxs("div",{className:"flex gap-2",children:[S.jsx("input",{type:"text",value:_,onChange:ae=>w(ae.target.value),className:"flex-1 px-4 py-2 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg",autoFocus:!0}),S.jsx("button",{onClick:le,className:"px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors active:scale-95",children:S.jsx(ip,{className:"size-5"})})]}):S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsx("p",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:D?.name||c}),S.jsx("button",{onClick:()=>{w(D?.name||c),g(!0)},className:"p-2 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors active:scale-95",children:S.jsx(Sv,{className:"size-5 text-gray-500 dark:text-gray-400"})})]})]}),S.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 rounded-2xl p-6",children:[S.jsxs("div",{className:"flex items-center justify-between mb-4",children:[S.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Invite Family Members"}),S.jsxs("button",{onClick:()=>P(!K),className:"px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors active:scale-95",children:[K?"Hide":"Show"," Invite Options"]})]}),K&&be&&S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-xl",children:[S.jsxs("h4",{className:"font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2",children:[S.jsx(GC,{className:"size-5"}),"Scan QR Code"]}),S.jsx("div",{className:"flex justify-center p-4 bg-white rounded-lg",children:S.jsx(N4,{value:Q,size:200})})]}),S.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-xl",children:[S.jsxs("h4",{className:"font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2",children:[S.jsx(Cw,{className:"size-5"}),"Share Link"]}),S.jsxs("div",{className:"flex gap-2",children:[S.jsx("input",{type:"text",value:Q,readOnly:!0,className:"flex-1 px-4 py-2 border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-sm"}),S.jsx("button",{onClick:J,className:"px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors active:scale-95",children:"Copy"})]})]}),S.jsx("button",{onClick:Pe,className:"w-full text-blue-500 dark:text-blue-400 py-2 text-sm font-medium",children:"Generate New Link"})]})]}),S.jsxs("div",{className:"bg-gray-50 dark:bg-gray-700 rounded-2xl p-6",children:[S.jsxs("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2",children:[S.jsx($p,{className:"size-5"}),"Family Members (",I.length,")"]}),I.length===0?S.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-center py-4",children:"No family members yet. Share an invite link to add members!"}):S.jsx("div",{className:"space-y-2",children:I.map(ae=>S.jsxs("div",{className:"flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-xl",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center overflow-hidden",children:ae.photoURL?S.jsx("img",{src:ae.photoURL,alt:ae.displayName,className:"w-full h-full object-cover"}):S.jsx(Pc,{className:"size-5 text-gray-400"})}),S.jsxs("div",{children:[S.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:ae.displayName}),S.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:ae.email})]})]}),D?.ownerId===t?.uid&&!ae.isOwner&&S.jsx("button",{onClick:()=>ie(ae.id),disabled:N,className:"p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors active:scale-95 disabled:opacity-50",children:S.jsx(Rw,{className:"size-5 text-red-500"})})]},ae.id))})]}),S.jsxs("button",{onClick:a,className:"w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition-colors active:scale-95 flex items-center justify-center gap-2",children:[S.jsx(jC,{className:"size-5"}),"Sign Out"]})]})]})})}function k_({onNavigate:n,onGoToAuth:e,onContinueWithoutAccount:t,darkMode:i}){return S.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 p-6 flex flex-col items-center justify-center",children:S.jsxs("div",{className:"max-w-md w-full space-y-8",children:[S.jsx("div",{className:"flex justify-center",children:S.jsx("div",{className:"bg-gradient-to-br from-blue-500 to-green-500 p-6 rounded-3xl shadow-lg",children:S.jsx(qp,{className:"size-16 text-white"})})}),S.jsxs("div",{className:"text-center space-y-3",children:[S.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white",children:"Meal Planner"}),S.jsx("p",{className:"text-gray-600 dark:text-gray-300 text-lg",children:"Plan your meals, manage groceries, and share with family"})]}),S.jsxs("div",{className:"space-y-4 pt-4",children:[S.jsx("button",{onClick:t,className:"w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-4 rounded-2xl font-semibold text-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors active:scale-95 shadow-md",children:"Try without an Account"}),S.jsx("button",{onClick:e,className:"w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-green-600 transition-colors active:scale-95 shadow-md",children:"Sign In"}),S.jsx("p",{className:"text-center text-sm text-gray-500 dark:text-gray-400 px-4",children:"Signing in allows for family groups, sharing grocery lists, and collaborative meal planning"})]})]})})}function D4({onNavigate:n,isAuthenticated:e,darkMode:t,user:i,profile:o,onGoToAuth:a,onToggleDarkMode:c}){const f=localStorage.getItem("displayName")||o?.displayName||i?.displayName||i?.email||"User",_=localStorage.getItem("profilePicture")||o?.photoURL||i?.photoURL||"",w=[{id:"monthView",icon:qp,title:"Monthly View",description:"View meals by month",gradient:"from-blue-500 to-blue-600"},{id:"weekView",icon:TC,title:"Weekly View",description:"View meals by week",gradient:"from-purple-500 to-purple-600"},{id:"groceryList",icon:QC,title:"Grocery List",description:"Manage shopping items",gradient:"from-green-500 to-green-600"},{id:"groupManagement",icon:$p,title:"Make New Group",description:e?"Manage family group":"Login required",gradient:"from-orange-500 to-orange-600"}];return S.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 p-6",children:S.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[S.jsxs("div",{className:"mt-6 flex items-center justify-between",children:[S.jsx("button",{onClick:c,className:"p-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full shadow-md transition-colors active:scale-95","aria-label":"Toggle dark mode",children:t?S.jsx(op,{className:"size-6 text-yellow-400"}):S.jsx(sp,{className:"size-6 text-gray-600"})}),e?S.jsxs("div",{className:"flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-2xl shadow-md",children:[S.jsx("div",{className:"w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center overflow-hidden",children:_?S.jsx("img",{src:_,alt:f,className:"w-full h-full object-cover"}):S.jsx(Pc,{className:"size-6 text-gray-400"})}),S.jsx("div",{children:S.jsx("p",{className:"font-semibold text-gray-900 dark:text-white",children:f})})]}):S.jsx("button",{onClick:a,className:"bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-2xl font-semibold shadow-md hover:from-blue-600 hover:to-green-600 transition-colors active:scale-95",children:"Sign In"})]}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:w.map(T=>{const R=T.icon;return S.jsxs("button",{onClick:()=>n(T.id),className:"group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all active:scale-95 overflow-hidden",children:[S.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${T.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity`}),S.jsxs("div",{className:"relative flex flex-col items-center text-center space-y-3",children:[S.jsx("div",{className:`bg-gradient-to-br ${T.gradient} p-4 rounded-2xl`,children:S.jsx(R,{className:"size-8 text-white"})}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:T.title}),S.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:T.description})]})]})]},T.id)})})]})})}function M4({selectedDate:n,onDateChange:e,onDayClick:t,mealData:i}){const o=n.getFullYear(),a=n.getMonth(),c=["January","February","March","April","May","June","July","August","September","October","November","December"],d=new Date(o,a+1,0).getDate(),f=new Date(o,a,1).getDay(),g=()=>{e(new Date(o,a-1,1))},_=()=>{e(new Date(o,a+1,1))},w=R=>{const V=new Date(o,a,R).toISOString().split("T")[0],L=i[V];return!!(L&&(L.breakfast||L.lunch||L.dinner||L.snacks))},T=[];for(let R=0;R<f;R++)T.push(S.jsx("div",{className:"aspect-square"},`empty-${R}`));for(let R=1;R<=d;R++){const M=new Date(o,a,R),V=new Date().getDate()===R&&new Date().getMonth()===a&&new Date().getFullYear()===o;T.push(S.jsxs("button",{onClick:()=>t(M),className:`aspect-square rounded-xl flex flex-col items-center justify-center relative transition-colors active:scale-95 ${V?"bg-blue-100 dark:bg-blue-900 border-2 border-blue-500":"bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"}`,children:[S.jsx("span",{className:`text-base ${V?"font-bold text-blue-600 dark:text-blue-400":"text-gray-700 dark:text-gray-300"}`,children:R}),w(R)&&S.jsx("div",{className:"absolute bottom-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"})]},R))}return S.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm",children:[S.jsxs("div",{className:"flex items-center justify-between mb-4",children:[S.jsx("button",{onClick:g,className:"p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95",children:S.jsx(kw,{className:"size-6 dark:text-gray-300"})}),S.jsxs("h2",{className:"font-semibold text-gray-900 dark:text-white text-lg",children:[c[a]," ",o]}),S.jsx("button",{onClick:_,className:"p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95",children:S.jsx(Aw,{className:"size-6 dark:text-gray-300"})})]}),S.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:["S","M","T","W","T","F","S"].map((R,M)=>S.jsx("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400 font-medium py-2",children:R},M))}),S.jsx("div",{className:"grid grid-cols-7 gap-2",children:T})]})}function O4({selectedDate:n,onDateChange:e,mealData:t,onUpdateMeal:i}){const a=(w=>{const T=new Date(w),R=T.getDay(),M=T.getDate()-R,V=[];for(let L=0;L<7;L++){const $=new Date(T);$.setDate(M+L),V.push($)}return V})(n),c=()=>{const w=new Date(n);w.setDate(w.getDate()-7),e(w)},d=()=>{const w=new Date(n);w.setDate(w.getDate()+7),e(w)},f=w=>{const T=w.toISOString().split("T")[0];return t[T]||{breakfast:"",lunch:"",dinner:"",snacks:""}},g=a[0].toLocaleDateString("en-US",{month:"short",day:"numeric"}),_=a[6].toLocaleDateString("en-US",{month:"short",day:"numeric"});return S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center justify-between mb-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm",children:[S.jsx("button",{onClick:c,className:"p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95",children:S.jsx(kw,{className:"size-6 dark:text-gray-300"})}),S.jsxs("h2",{className:"font-semibold text-gray-900 dark:text-white text-base",children:[g," - ",_]}),S.jsx("button",{onClick:d,className:"p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors active:scale-95",children:S.jsx(Aw,{className:"size-6 dark:text-gray-300"})})]}),S.jsx("div",{className:"space-y-4",children:a.map((w,T)=>{if(T===0)return null;const R=w.toLocaleDateString("en-US",{weekday:"long"}),M=w.toLocaleDateString("en-US",{month:"short",day:"numeric"}),V=f(w),L=new Date().toISOString().split("T")[0]===w.toISOString().split("T")[0];return S.jsx(L4,{dayName:R,dateString:M,mealPlan:V,onUpdateMeal:$=>i(w,$),isToday:L},w.toISOString())})})]})}function L4({dayName:n,dateString:e,mealPlan:t,onUpdateMeal:i,isToday:o}){const a=(c,d)=>{i({...t,[c]:d})};return S.jsxs("div",{className:`bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm ${o?"ring-2 ring-blue-500":""}`,children:[S.jsxs("div",{className:"flex items-center justify-between mb-4",children:[S.jsx("h3",{className:`font-semibold text-base ${o?"text-blue-600 dark:text-blue-400":"text-gray-900 dark:text-white"}`,children:n}),S.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:e})]}),S.jsxs("div",{className:"space-y-3",children:[S.jsx(uc,{label:"🍳 Breakfast",value:t.breakfast,onChange:c=>a("breakfast",c)}),S.jsx(uc,{label:"🥗 Lunch",value:t.lunch,onChange:c=>a("lunch",c)}),S.jsx(uc,{label:"🍽️ Dinner",value:t.dinner,onChange:c=>a("dinner",c)}),S.jsx(uc,{label:"🍎 Snacks",value:t.snacks,onChange:c=>a("snacks",c)})]})]})}function uc({label:n,value:e,onChange:t}){return S.jsxs("div",{className:"flex flex-col gap-2",children:[S.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400 font-medium",children:n}),S.jsx("input",{type:"text",value:e,onChange:i=>t(i.target.value),placeholder:"Enter meal...",className:"w-full px-3 py-2.5 text-base border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})}function V4(){const[n,e]=ve.useState("landing"),[t,i]=ve.useState(!0),[o,a]=ve.useState(new Date),[c,d]=ve.useState(()=>{const Z=localStorage.getItem("mealPlanner_mealData");return Z?JSON.parse(Z):{}}),[f,g]=ve.useState(()=>localStorage.getItem("mealPlanner_groceryNotes")||""),[_,w]=ve.useState(!1),[T,R]=ve.useState(!1),[M,V]=ve.useState(!1),[L,$]=ve.useState(()=>localStorage.getItem("mealPlanner_darkMode")==="true"),[G,W]=ve.useState(null),[Q,re]=ve.useState(null),[K,P]=ve.useState(!1);ve.useEffect(()=>{const Z=new URLSearchParams(window.location.search).get("invite");Z&&localStorage.setItem("pendingInvite",Z);const Ce=tA(Pn,async Pe=>{if(!Pe){W(null),re(null),P(!1),e("landing"),i(!1);return}try{let xe=await vs(Pe.uid);xe||(xe={uid:Pe.uid,email:Pe.email??"",displayName:Pe.displayName??Pe.email?.split("@")[0]??"User",photoURL:Pe.photoURL??"",groupId:null,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()});const ie=localStorage.getItem("pendingInvite");if(ie)try{await D0(Pe.uid,ie),localStorage.removeItem("pendingInvite"),window.history.replaceState({},"",window.location.pathname),xe=await vs(Pe.uid)??xe}catch(ye){console.error("Failed to join invited group:",ye)}W(Pe),re(xe),P(!0),d(await ff(Pe.uid,xe.groupId)),e("menu")}catch(xe){console.error("Failed to restore auth state:",xe),W(Pe),P(!0),e("menu")}finally{i(!1)}});return()=>Ce()},[]);const I=async Z=>{try{let Ce=await vs(Z.uid);Ce||(Ce={uid:Z.uid,email:Z.email??"",displayName:Z.displayName??Z.email?.split("@")[0]??"User",photoURL:Z.photoURL??"",groupId:null,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()});const Pe=localStorage.getItem("pendingInvite");if(Pe)try{await D0(Z.uid,Pe),localStorage.removeItem("pendingInvite"),window.history.replaceState({},"",window.location.pathname),Ce=await vs(Z.uid)??Ce}catch(xe){console.error("Failed to join invited group:",xe)}W(Z),re(Ce),P(!0),d(await ff(Z.uid,Ce.groupId)),e("menu")}catch(Ce){console.error("Failed to restore auth state:",Ce),W(Z),P(!0),e("menu")}finally{i(!1)}};ve.useEffect(()=>{G&&K&&(async()=>{const Z=await ff(G.uid,Q?.groupId??null);d(Z)})()},[K,Q?.groupId,G]),ve.useEffect(()=>{localStorage.setItem("mealPlanner_mealData",JSON.stringify(c))},[c]),ve.useEffect(()=>{localStorage.setItem("mealPlanner_groceryNotes",f)},[f]),ve.useEffect(()=>{localStorage.setItem("mealPlanner_darkMode",L.toString())},[L]),ve.useEffect(()=>{localStorage.setItem("currentView",n)},[n]);const A=async()=>{await $N(),localStorage.removeItem("pendingInvite"),W(null),re(null),P(!1),e("landing")},N=Z=>{a(Z),e("day")},b=(Z,Ce)=>{const Pe=Z.toISOString().split("T")[0];d(xe=>{const ie={...xe,[Pe]:Ce};return G&&WN(G.uid,Q?.groupId??null,ie),ie})},D=Z=>{const Ce=Z.toISOString().split("T")[0];return c[Ce]||{breakfast:"",lunch:"",dinner:"",snacks:""}},C=Z=>{if(Z==="groupManagement"){if(!K){alert("This feature requires you to log in. Please sign in to create and manage family groups.");return}e("groupManagement");return}if(Z==="monthView"){e("month");return}if(Z==="weekView"){e("week");return}Z==="groceryList"&&(K?R(!0):w(!0))};return t?S.jsx("div",{className:L?"dark":"",children:S.jsx("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center",children:S.jsxs("div",{className:"text-center",children:[S.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"}),S.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Loading..."})]})})}):n==="landing"?S.jsxs("div",{className:L?"dark":"",children:[S.jsx("div",{className:"fixed top-4 right-4 z-50",children:S.jsx("button",{onClick:()=>$(!L),className:"p-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full shadow-lg transition-colors active:scale-95","aria-label":"Toggle dark mode",children:L?S.jsx(op,{className:"size-6 text-yellow-400"}):S.jsx(sp,{className:"size-6 text-gray-600"})})}),S.jsx(k_,{onNavigate:()=>{},onGoToAuth:()=>{Ko?e("auth"):alert("Firebase is not configured yet. The app will run in local mode until you add the VITE_FIREBASE_* values.")},onContinueWithoutAccount:()=>{localStorage.setItem("localMode","true"),e("menu")},darkMode:L})]}):n==="auth"?Ko?S.jsx("div",{className:L?"dark":"",children:S.jsx(YN,{onBack:()=>e("landing"),darkMode:L,onAuthenticated:I})}):S.jsx("div",{className:L?"dark":"",children:S.jsx(k_,{onNavigate:()=>{},onGoToAuth:()=>{},onContinueWithoutAccount:()=>e("menu"),darkMode:L,debugMessage:authDebugMessage})}):n==="menu"?S.jsxs("div",{className:L?"dark":"",children:[S.jsx(D4,{onNavigate:C,isAuthenticated:K,darkMode:L,user:G,profile:Q,onGoToAuth:()=>e("auth"),onToggleDarkMode:()=>$(!L)}),_&&S.jsx(c_,{notes:f,onNotesChange:g,onClose:()=>w(!1)}),T&&K&&S.jsx(u_,{onClose:()=>R(!1),userId:G?.uid??"",groupId:Q?.groupId??null,onOpenFamilyGroup:()=>{R(!1),V(!0)}}),M&&K&&S.jsx(l_,{onClose:()=>V(!1),user:G,profile:Q,onProfileChange:re})]}):n==="groupManagement"&&K?S.jsx("div",{className:L?"dark":"",children:S.jsx(b4,{onClose:()=>e("menu"),darkMode:L,user:G,profile:Q,onProfileChange:re,onSignOut:A})}):S.jsx("div",{className:L?"dark":"",children:S.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 max-w-md mx-auto",children:[S.jsx("div",{className:"bg-white dark:bg-gray-800 border-b dark:border-gray-700 sticky top-0 z-10",children:S.jsxs("div",{className:"px-4 py-4",children:[S.jsxs("div",{className:"flex items-center justify-between mb-4",children:[S.jsx("button",{onClick:()=>e("menu"),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors active:scale-95","aria-label":"Home",children:S.jsx(bC,{className:"size-6 text-gray-600 dark:text-gray-300"})}),S.jsx("h1",{className:"text-center flex-1 dark:text-white",children:"Meal Planner"}),S.jsx("button",{onClick:()=>$(!L),className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors active:scale-95","aria-label":"Toggle dark mode",children:L?S.jsx(op,{className:"size-6 text-yellow-400"}):S.jsx(sp,{className:"size-6 text-gray-600"})})]}),S.jsxs("div",{className:"flex gap-2",children:[S.jsxs("button",{onClick:()=>e("month"),className:`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${n==="month"?"bg-blue-500 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:[S.jsx(qp,{className:"size-5"}),"Monthly"]}),S.jsxs("button",{onClick:()=>e("week"),className:`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${n==="week"?"bg-blue-500 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:[S.jsx(OC,{className:"size-5"}),"Weekly"]})]})]})}),S.jsxs("div",{className:"px-4 py-4",children:[n==="month"&&S.jsx(M4,{selectedDate:o,onDateChange:a,onDayClick:N,mealData:c}),n==="week"&&S.jsx(O4,{selectedDate:o,onDateChange:a,mealData:c,onUpdateMeal:b}),n==="day"&&S.jsx(JN,{selectedDate:o,mealPlan:D(o),onUpdateMeal:Z=>b(o,Z),onBack:()=>e("month")})]}),S.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-50 dark:from-gray-900 via-gray-50 dark:via-gray-900 to-transparent pointer-events-none max-w-md mx-auto",children:S.jsx("button",{onClick:()=>K?R(!0):w(!0),className:"w-full bg-green-500 dark:bg-green-600 text-white py-4 rounded-xl shadow-lg font-medium hover:bg-green-600 dark:hover:bg-green-700 transition-colors pointer-events-auto active:scale-95",children:"Grocery List"})}),_&&S.jsx(c_,{notes:f,onNotesChange:g,onClose:()=>w(!1)}),T&&K&&S.jsx(u_,{onClose:()=>R(!1),userId:G?.uid??"",groupId:Q?.groupId??null,onOpenFamilyGroup:()=>{R(!1),V(!0)}}),M&&K&&S.jsx(l_,{onClose:()=>V(!1),user:G,profile:Q,onProfileChange:re})]})})}hI.createRoot(document.getElementById("root")).render(S.jsx(V4,{}));
