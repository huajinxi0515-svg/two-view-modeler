(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();var id={exports:{}},$o={};var e0;function OM(){if(e0)return $o;e0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var d in l)d!=="key"&&(f[d]=l[d])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:f}}return $o.Fragment=e,$o.jsx=i,$o.jsxs=i,$o}var n0;function LM(){return n0||(n0=1,id.exports=OM()),id.exports}var Qt=LM(),ad={exports:{}},ue={};var i0;function IM(){if(i0)return ue;i0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),y=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function F(N,lt,W){this.props=N,this.context=lt,this.refs=E,this.updater=W||C}F.prototype.isReactComponent={},F.prototype.setState=function(N,lt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,lt,"setState")},F.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function L(){}L.prototype=F.prototype;function D(N,lt,W){this.props=N,this.context=lt,this.refs=E,this.updater=W||C}var Y=D.prototype=new L;Y.constructor=D,M(Y,F.prototype),Y.isPureReactComponent=!0;var G=Array.isArray;function H(){}var q={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function R(N,lt,W){var st=W.ref;return{$$typeof:o,type:N,key:lt,ref:st!==void 0?st:null,props:W}}function X(N,lt){return R(N.type,lt,N.props)}function ut(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function J(N){var lt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(W){return lt[W]})}var P=/\/+/g;function $(N,lt){return typeof N=="object"&&N!==null&&N.key!=null?J(""+N.key):lt.toString(36)}function U(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(H,H):(N.status="pending",N.then(function(lt){N.status==="pending"&&(N.status="fulfilled",N.value=lt)},function(lt){N.status==="pending"&&(N.status="rejected",N.reason=lt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function V(N,lt,W,st,yt){var Nt=typeof N;(Nt==="undefined"||Nt==="boolean")&&(N=null);var bt=!1;if(N===null)bt=!0;else switch(Nt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(N.$$typeof){case o:case e:bt=!0;break;case v:return bt=N._init,V(bt(N._payload),lt,W,st,yt)}}if(bt)return yt=yt(N),bt=st===""?"."+$(N,0):st,G(yt)?(W="",bt!=null&&(W=bt.replace(P,"$&/")+"/"),V(yt,lt,W,"",function(z){return z})):yt!=null&&(ut(yt)&&(yt=X(yt,W+(yt.key==null||N&&N.key===yt.key?"":(""+yt.key).replace(P,"$&/")+"/")+bt)),lt.push(yt)),1;bt=0;var xt=st===""?".":st+":";if(G(N))for(var Kt=0;Kt<N.length;Kt++)st=N[Kt],Nt=xt+$(st,Kt),bt+=V(st,lt,W,Nt,yt);else if(Kt=x(N),typeof Kt=="function")for(N=Kt.call(N),Kt=0;!(st=N.next()).done;)st=st.value,Nt=xt+$(st,Kt++),bt+=V(st,lt,W,Nt,yt);else if(Nt==="object"){if(typeof N.then=="function")return V(U(N),lt,W,st,yt);throw lt=String(N),Error("Objects are not valid as a React child (found: "+(lt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":lt)+"). If you meant to render a collection of children, use an array instead.")}return bt}function B(N,lt,W){if(N==null)return N;var st=[],yt=0;return V(N,st,"","",function(Nt){return lt.call(W,Nt,yt++)}),st}function ct(N){if(N._status===-1){var lt=N._result,W=lt();W.then(function(st){(N._status===0||N._status===-1)&&(N._status=1,N._result=st,W.status===void 0&&(W.status="fulfilled",W.value=st))},function(st){(N._status===0||N._status===-1)&&(N._status=2,N._result=st,W.status===void 0&&(W.status="rejected",W.reason=st))}),N._status===-1&&(N._status=0,N._result=W)}if(N._status===1)return N._result.default;throw N._result}var dt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var lt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(lt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function vt(N){var lt=q.T,W={};W.types=lt!==null?lt.types:null,q.T=W;try{var st=N(),yt=q.S;yt!==null&&yt(W,st),typeof st=="object"&&st!==null&&typeof st.then=="function"&&st.then(H,dt)}catch(Nt){dt(Nt)}finally{lt!==null&&W.types!==null&&(lt.types=W.types),q.T=lt}}function wt(N){var lt=q.T;if(lt!==null){var W=lt.types;W===null?lt.types=[N]:W.indexOf(N)===-1&&W.push(N)}else vt(wt.bind(null,N))}var Vt={map:B,forEach:function(N,lt,W){B(N,function(){lt.apply(this,arguments)},W)},count:function(N){var lt=0;return B(N,function(){lt++}),lt},toArray:function(N){return B(N,function(lt){return lt})||[]},only:function(N){if(!ut(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ue.Activity=p,ue.Children=Vt,ue.Component=F,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=D,ue.StrictMode=r,ue.Suspense=_,ue.ViewTransition=S,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,ue.__COMPILER_RUNTIME={__proto__:null,c:function(N){return q.H.useMemoCache(N)}},ue.addTransitionType=wt,ue.cache=function(N){return function(){return N.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(N,lt,W){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var st=M({},N.props),yt=N.key;if(lt!=null)for(Nt in lt.key!==void 0&&(yt=""+lt.key),lt)!w.call(lt,Nt)||Nt==="key"||Nt==="__self"||Nt==="__source"||Nt==="ref"&&lt.ref===void 0||(st[Nt]=lt[Nt]);var Nt=arguments.length-2;if(Nt===1)st.children=W;else if(1<Nt){for(var bt=Array(Nt),xt=0;xt<Nt;xt++)bt[xt]=arguments[xt+2];st.children=bt}return R(N.type,yt,st)},ue.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:f,_context:N},N},ue.createElement=function(N,lt,W){var st,yt={},Nt=null;if(lt!=null)for(st in lt.key!==void 0&&(Nt=""+lt.key),lt)w.call(lt,st)&&st!=="key"&&st!=="__self"&&st!=="__source"&&(yt[st]=lt[st]);var bt=arguments.length-2;if(bt===1)yt.children=W;else if(1<bt){for(var xt=Array(bt),Kt=0;Kt<bt;Kt++)xt[Kt]=arguments[Kt+2];yt.children=xt}if(N&&N.defaultProps)for(st in bt=N.defaultProps,bt)yt[st]===void 0&&(yt[st]=bt[st]);return R(N,Nt,yt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(N){return{$$typeof:d,render:N}},ue.isValidElement=ut,ue.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:ct}},ue.memo=function(N,lt){return{$$typeof:m,type:N,compare:lt===void 0?null:lt}},ue.startTransition=vt,ue.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},ue.use=function(N){return q.H.use(N)},ue.useActionState=function(N,lt,W){return q.H.useActionState(N,lt,W)},ue.useCallback=function(N,lt){return q.H.useCallback(N,lt)},ue.useContext=function(N){return q.H.useContext(N)},ue.useDebugValue=function(){},ue.useDeferredValue=function(N,lt){return q.H.useDeferredValue(N,lt)},ue.useEffect=function(N,lt){return q.H.useEffect(N,lt)},ue.useEffectEvent=function(N){return q.H.useEffectEvent(N)},ue.useId=function(){return q.H.useId()},ue.useImperativeHandle=function(N,lt,W){return q.H.useImperativeHandle(N,lt,W)},ue.useInsertionEffect=function(N,lt){return q.H.useInsertionEffect(N,lt)},ue.useLayoutEffect=function(N,lt){return q.H.useLayoutEffect(N,lt)},ue.useMemo=function(N,lt){return q.H.useMemo(N,lt)},ue.useOptimistic=function(N,lt){return q.H.useOptimistic(N,lt)},ue.useReducer=function(N,lt,W){return q.H.useReducer(N,lt,W)},ue.useRef=function(N){return q.H.useRef(N)},ue.useState=function(N){return q.H.useState(N)},ue.useSyncExternalStore=function(N,lt,W){return q.H.useSyncExternalStore(N,lt,W)},ue.useTransition=function(){return q.H.useTransition()},ue.version="19.3.1",ue}var a0;function Ip(){return a0||(a0=1,ad.exports=IM()),ad.exports}var BM=Ip(),sd={exports:{}},tl={},rd={exports:{}},od={};var s0;function PM(){return s0||(s0=1,(function(o){function e(U,V){var B=U.length;U.push(V);t:for(;0<B;){var ct=B-1>>>1,dt=U[ct];if(0<l(dt,V))U[ct]=V,U[B]=dt,B=ct;else break t}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var V=U[0],B=U.pop();if(B!==V){U[0]=B;t:for(var ct=0,dt=U.length,vt=dt>>>1;ct<vt;){var wt=2*(ct+1)-1,Vt=U[wt],N=wt+1,lt=U[N];if(0>l(Vt,B))N<dt&&0>l(lt,Vt)?(U[ct]=lt,U[N]=B,ct=N):(U[ct]=Vt,U[wt]=B,ct=wt);else if(N<dt&&0>l(lt,B))U[ct]=lt,U[N]=B,ct=N;else break t}}return V}function l(U,V){var B=U.sortIndex-V.sortIndex;return B!==0?B:U.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var _=[],m=[],v=1,p=null,S=3,y=!1,x=!1,C=!1,M=!1,E=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(U){for(var V=i(m);V!==null;){if(V.callback===null)r(m);else if(V.startTime<=U)r(m),V.sortIndex=V.expirationTime,e(_,V);else break;V=i(m)}}function Y(U){if(C=!1,D(U),!x)if(i(_)!==null)x=!0,G||(G=!0,ut());else{var V=i(m);V!==null&&$(Y,V.startTime-U)}}var G=!1,H=-1,q=5,w=-1;function R(){return M?!0:!(o.unstable_now()-w<q)}function X(){if(M=!1,G){var U=o.unstable_now();w=U;var V=!0;try{t:{x=!1,C&&(C=!1,F(H),H=-1),y=!0;var B=S;try{e:{for(D(U),p=i(_);p!==null&&!(p.expirationTime>U&&R());){var ct=p.callback;if(typeof ct=="function"){p.callback=null,S=p.priorityLevel;var dt=ct(p.expirationTime<=U);if(U=o.unstable_now(),typeof dt=="function"){p.callback=dt,D(U),V=!0;break e}p===i(_)&&r(_),D(U)}else r(_);p=i(_)}if(p!==null)V=!0;else{var vt=i(m);vt!==null&&$(Y,vt.startTime-U),V=!1}}break t}finally{p=null,S=B,y=!1}V=void 0}}finally{V?ut():G=!1}}}var ut;if(typeof L=="function")ut=function(){L(X)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,P=J.port2;J.port1.onmessage=X,ut=function(){P.postMessage(null)}}else ut=function(){E(X,0)};function $(U,V){H=E(function(){U(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(U){switch(S){case 1:case 2:case 3:var V=3;break;default:V=S}var B=S;S=V;try{return U()}finally{S=B}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(U,V){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var B=S;S=U;try{return V()}finally{S=B}},o.unstable_scheduleCallback=function(U,V,B){var ct=o.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ct+B:ct):B=ct,U){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=B+dt,U={id:v++,callback:V,priorityLevel:U,startTime:B,expirationTime:dt,sortIndex:-1},B>ct?(U.sortIndex=B,e(m,U),i(_)===null&&U===i(m)&&(C?(F(H),H=-1):C=!0,$(Y,B-ct))):(U.sortIndex=dt,e(_,U),x||y||(x=!0,G||(G=!0,ut()))),U},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(U){var V=S;return function(){var B=S;S=V;try{return U.apply(this,arguments)}finally{S=B}}}})(od)),od}var r0;function zM(){return r0||(r0=1,rd.exports=PM()),rd.exports}var ld={exports:{}},Dn={};var o0;function FM(){if(o0)return Dn;o0=1;var o=Ip();function e(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,p,S){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:y===h?h:""+y,children:v,containerInfo:p,implementation:S}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.browser=function(v){return{$$typeof:f,_reason:v}},Dn.createPortal=function(v,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return d(v,p,null,S)},Dn.flushSync=function(v){var p=_.T,S=r.p;try{if(_.T=null,r.p=2,v)return v()}finally{_.T=p,r.p=S,r.d.f()}},Dn.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(v,p))},Dn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},Dn.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var S=p.as,y=m(S,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,C=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?r.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:C}):S==="script"&&r.d.X(v,{crossOrigin:y,integrity:x,fetchPriority:C,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=m(p.as,p.crossOrigin);r.d.M(v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&r.d.M(v)},Dn.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,y=m(S,p.crossOrigin);r.d.L(v,S,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(v,p){if(typeof v=="string")if(p){var S=m(p.as,p.crossOrigin);r.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else r.d.m(v)},Dn.requestFormReset=function(v){r.d.r(v)},Dn.unstable_batchedUpdates=function(v,p){return v(p)},Dn.useFormState=function(v,p,S){return _.H.useFormState(v,p,S)},Dn.useFormStatus=function(){return _.H.useHostTransitionStatus()},Dn.version="19.3.1",Dn}var l0;function HM(){if(l0)return ld.exports;l0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ld.exports=FM(),ld.exports}var u0;function GM(){if(u0)return tl;u0=1;var o=zM(),e=Ip(),i=HM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return _(u),t;if(c===s)return _(u),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=c;else{for(var g=!1,A=u.child;A;){if(A===a){g=!0,a=u,s=c;break}if(A===s){g=!0,s=u,a=c;break}A=A.sibling}if(!g){for(A=c.child;A;){if(A===a){g=!0,a=c,s=u;break}if(A===s){g=!0,s=c,a=u;break}A=A.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function p(t,n,a,s,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,a,s,u,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function y(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function x(t){var n=[null,null],a=S(t);return a===null||C(n,t,a.child,{foundSelf:!1}),n}function C(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var E=null,F=null;function L(t,n,a){return t===a?!0:t===n?(E=t,!0):!1}function D(t,n,a){return t===a?(F=t,!1):t===n?(F!==null&&(E=t),!0):!1}function Y(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function G(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var c=n;c;c=a(c))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var H=Object.assign,q=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),ut=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),$=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),vt=Symbol.for("react.activity"),wt=Symbol.for("react.legacy_hidden"),Vt=Symbol.for("react.memo_cache_sentinel"),N=Symbol.for("react.view_transition"),lt=Symbol.for("react.recoverable"),W=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Symbol.for("react.client.reference");function Nt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===yt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case J:return"Profiler";case ut:return"StrictMode";case V:return"Suspense";case B:return"SuspenseList";case vt:return"Activity";case N:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case $:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ct:return n=t.displayName||null,n!==null?n:Nt(t.type)||"Memo";case dt:n=t._payload,t=t._init;try{return Nt(t(n))}catch{}}return null}var bt=Array.isArray,xt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Kt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},He=[],oe=-1;function $t(t){return{current:t}}function Lt(t){0>oe||(t.current=He[oe],He[oe]=null,oe--)}function se(t,n){oe++,He[oe]=t.current,t.current=n}var Ht=$t(null),le=$t(null),Ye=$t(null),Je=$t(null);function O(t,n){switch(se(Ye,n),se(le,t),se(Ht,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?cv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=cv(n),t=fv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Ht),se(Ht,t)}function T(){Lt(Ht),Lt(le),Lt(Ye)}function rt(t){var n=t.memoizedState;n!==null&&(Lr._currentValue=n.memoizedState,se(Je,t)),n=Ht.current;var a=fv(n,t.type);n!==a&&(se(le,t),se(Ht,a))}function gt(t){le.current===t&&(Lt(Ht),Lt(le)),Je.current===t&&(Lt(Je),Lr._currentValue=z)}var St,pt;function Yt(t){if(St===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);St=n&&n[1]||"",pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+St+t+pt}var Rt=!1;function Wt(t,n){if(!t||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(Ot){var K=Ot}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(Ot){K=Ot}_t=!1;try{var at=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_t=!0,new t}finally{_t&&(at!==void 0?Object.defineProperty(t.prototype,"props",at):delete t.prototype.props)}}}else{try{throw Error()}catch(Ot){K=Ot}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(Ot){if(Ot&&K&&typeof Ot.stack=="string")return[Ot.stack,K.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),g=c[0],A=c[1];if(g&&A){var I=g.split(`
`),Z=A.split(`
`);for(u=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;u<Z.length&&!Z[u].includes("DetermineComponentFrameRoot");)u++;if(s===I.length||u===Z.length)for(s=I.length-1,u=Z.length-1;1<=s&&0<=u&&I[s]!==Z[u];)u--;for(;1<=s&&0<=u;s--,u--)if(I[s]!==Z[u]){if(s!==1||u!==1)do if(s--,u--,0>u||I[s]!==Z[u]){var ot=`
`+I[s].replace(" at new "," at ");return t.displayName&&ot.includes("<anonymous>")&&(ot=ot.replace("<anonymous>",t.displayName)),ot}while(1<=s&&0<=u);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Yt(a):""}function Zt(t,n){switch(t.tag){case 26:case 27:case 5:return Yt(t.type);case 16:return Yt("Lazy");case 13:return t.child!==n&&n!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return Wt(t.type,!1);case 11:return Wt(t.type.render,!1);case 1:return Wt(t.type,!0);case 31:return Yt("Activity");case 30:return Yt("ViewTransition");default:return""}}function Tt(t){try{var n="",a=null;do n+=Zt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var It=Object.prototype.hasOwnProperty,ae=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,he=o.unstable_requestPaint,k=o.unstable_now,Ct=o.unstable_getCurrentPriorityLevel,Ut=o.unstable_ImmediatePriority,kt=o.unstable_UserBlockingPriority,Mt=o.unstable_NormalPriority,Et=o.unstable_LowPriority,qt=o.unstable_IdlePriority,ce=o.log,Ge=o.unstable_setDisableYieldValue,xe=null,$e=null;function pn(t){if(typeof ce=="function"&&Ge(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(xe,t)}catch{}}var Un=Math.clz32?Math.clz32:vl,ea=Math.log,lo=Math.LN2;function vl(t){return t>>>=0,t===0?32:31-(ea(t)/lo|0)|0}var fs=256,na=262144,hs=4194304;function li(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ds(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~c,s!==0?u=li(s):(g&=A,g!==0?u=li(g):a||(a=A&~t,a!==0&&(u=li(a))))):(A=s&~c,A!==0?u=li(A):g!==0?u=li(g):a||(a=s&~t,a!==0&&(u=li(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function Ca(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function El(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Un(a),u=1<<s;n|=t[s],a&=~u}return n}function Dc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sl(){var t=hs;return hs<<=1,(hs&62914560)===0&&(hs=4194304),t}function uo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ps(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Uc(t,n,a,s,u,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,Z=t.hiddenUpdates;for(a=g&~a;0<a;){var ot=31-Un(a),_t=1<<ot;A[ot]=0,I[ot]=-1;var K=Z[ot];if(K!==null)for(Z[ot]=null,ot=0;ot<K.length;ot++){var at=K[ot];at!==null&&(at.lane&=-536870913)}a&=~_t}s!==0&&b(t,s,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~n))}function b(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Un(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function tt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Un(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function ft(t,n){var a=n&-n;return a=(a&42)!==0?1:ht(a),(a&(t.suspendedLanes|n))!==0?0:a}function ht(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function et(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=Kt.p;return t!==0?t:(t=window.event,t===void 0?32:Kv(t.type))}function Pt(t,n){var a=Kt.p;try{return Kt.p=t,n()}finally{Kt.p=a}}var Ft=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Ft,Xt="__reactProps$"+Ft,ie="__reactContainer$"+Ft,ee="__reactEvents$"+Ft,Ee="__reactListeners$"+Ft,Ie="__reactHandles$"+Ft,je="__reactResources$"+Ft,Ne="__reactMarker$"+Ft,Re="__reactLoad$"+Ft;function ne(t){delete t[Dt],delete t[Xt],delete t[Ee],delete t[Ie]}function Oe(t){var n;if(n=t[Dt])return n;for(var a=t.parentNode;a;){if(n=a[ie]||a[Dt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Rv(t);t!==null;){if(a=t[Dt])return a;t=Rv(t)}return n}t=a,a=t.parentNode}return null}function _e(t){if(t=t[Dt]||t[ie]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function jn(t){var n=t[je];return n||(n=t[je]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function we(t){t[Ne]=!0}function ba(t){t[Re]=void 0}var Ke=new Set,Bn={};function ln(t,n){nn(t,n),nn(t+"Capture",n)}function nn(t,n){for(Bn[t]=n,t=0;t<n.length;t++)Ke.add(n[t])}var Nn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),js={},Li={};function ZE(t){return It.call(Li,t)?!0:It.call(js,t)?!1:Nn.test(t)?Li[t]=!0:(js[t]=!0,!1)}var De=!1;function Wp(){var t=De;return De=!1,t}function yl(t,n,a){if(ZE(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Ml(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ia(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function Zn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $E(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,c=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,c.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Nc(t){if(!t._valueTracker){var n=jp(t)?"checked":"value";t._valueTracker=$E(t,n,""+t[n])}}function Zp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=jp(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var tS=/[\n"\\]/g;function ui(t){return t.replace(tS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oc(t,n,a,s,u,c,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Zn(n)):t.value!==""+Zn(n)&&(t.value=""+Zn(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Lc(t,Zn(t.value)):Lc(t,Zn(n)):a!=null?Lc(t,Zn(a)):s!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Zn(A):t.removeAttribute("name")}function $p(t,n,a,s,u,c,g,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Nc(t);return}a=a!=null?""+Zn(a):"",n=n!=null?""+Zn(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Nc(t)}function Lc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Zs(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Zn(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function tm(t,n,a){if(n!=null&&(n=""+Zn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Zn(a):""}function em(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(bt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Zn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Nc(t)}function $s(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var eS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||eS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function im(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",De=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(nm(t,u,s),De=!0)}else for(var c in n)n.hasOwnProperty(c)&&nm(t,c,n[c])}function Ic(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),iS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(t){return iS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ii(){}var Bc=null;function Pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tr=null,er=null;function am(t){var n=_e(t);if(n&&(t=n.stateNode)){var a=t[Xt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Oc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ui(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[Xt]||null;if(!u)throw Error(r(90));Oc(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Zp(s)}break t;case"textarea":tm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Zs(t,!!a.multiple,n,!1)}}}var zc=!1;function sm(t,n,a){if(zc)return t(n,a);zc=!0;try{var s=t(n);return s}finally{if(zc=!1,(tr!==null||er!==null)&&(xu(),tr&&(n=tr,t=er,er=tr=null,am(n),t)))for(n=0;n<t.length;n++)am(t[n])}}function co(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Xt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=!1;if(aa)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Fc=!1}var Ra=null,Hc=null,Al=null;function rm(){if(Al)return Al;var t,n=Hc,a=n.length,s,u="value"in Ra?Ra.value:Ra.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[c-s];s++);return Al=u.slice(t,1<s?1-s:void 0)}function Tl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Cl(){return!0}function om(){return!1}function Pn(t){function n(a,s,u,c,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Cl:om,this.isPropagationStopped=om,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),n}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=Pn(wa),ho=H({},wa,{view:0,detail:0}),aS=Pn(ho),Gc,Vc,po,Rl=H({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(Gc=t.screenX-po.screenX,Vc=t.screenY-po.screenY):Vc=Gc=0,po=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),lm=Pn(Rl),sS=H({},Rl,{dataTransfer:0}),rS=Pn(sS),oS=H({},ho,{relatedTarget:0}),Qc=Pn(oS),lS=H({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),uS=Pn(lS),cS=H({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fS=Pn(cS),hS=H({},wa,{data:0}),um=Pn(hS),dS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=mS[t])?!!n[t]:!1}function kc(){return gS}var _S=H({},ho,{key:function(t){if(t.key){var n=dS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vS=Pn(_S),ES=H({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cm=Pn(ES),SS=H({},wa,{submitter:0}),yS=Pn(SS),MS=H({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),xS=Pn(MS),AS=H({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),TS=Pn(AS),CS=H({},Rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bS=Pn(CS),RS=H({},wa,{newState:0,oldState:0,source:0}),wS=Pn(RS),DS=[9,13,27,32],Yc=aa&&"CompositionEvent"in window,mo=null;aa&&"documentMode"in document&&(mo=document.documentMode);var US=aa&&"TextEvent"in window&&!mo,fm=aa&&(!Yc||mo&&8<mo&&11>=mo),hm=" ",dm=!1;function pm(t,n){switch(t){case"keyup":return DS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var nr=!1;function NS(t,n){switch(t){case"compositionend":return mm(n);case"keypress":return n.which!==32?null:(dm=!0,hm);case"textInput":return t=n.data,t===hm&&dm?null:t;default:return null}}function OS(t,n){if(nr)return t==="compositionend"||!Yc&&pm(t,n)?(t=rm(),Al=Hc=Ra=null,nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fm&&n.locale!=="ko"?null:n.data;default:return null}}var LS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!LS[t.type]:n==="textarea"}function _m(t,n,a,s){tr?er?er.push(s):er=[s]:tr=s,n=wu(n,"onChange"),0<n.length&&(a=new bl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var go=null,_o=null;function IS(t){av(t,0)}function wl(t){var n=mn(t);if(Zp(n))return t}function vm(t,n){if(t==="change")return n}var Em=!1;if(aa){var Xc;if(aa){var Jc="oninput"in document;if(!Jc){var Sm=document.createElement("div");Sm.setAttribute("oninput","return;"),Jc=typeof Sm.oninput=="function"}Xc=Jc}else Xc=!1;Em=Xc&&(!document.documentMode||9<document.documentMode)}function ym(){go&&(go.detachEvent("onpropertychange",Mm),_o=go=null)}function Mm(t){if(t.propertyName==="value"&&wl(_o)){var n=[];_m(n,_o,t,Pc(t)),sm(IS,n)}}function BS(t,n,a){t==="focusin"?(ym(),go=n,_o=a,go.attachEvent("onpropertychange",Mm)):t==="focusout"&&ym()}function PS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(_o)}function zS(t,n){if(t==="click")return wl(n)}function FS(t,n){if(t==="input"||t==="change")return wl(n)}function HS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:HS;function vo(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!It.call(n,u)||!$n(t[u],n[u]))return!1}return!0}function Kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Am(t,n){var a=xm(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=xm(a)}}function Tm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Tm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Cm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kc(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kc(t.document)}return n}function qc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var GS=aa&&"documentMode"in document&&11>=document.documentMode,ir=null,Wc=null,Eo=null,jc=!1;function bm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jc||ir==null||ir!==Kc(s)||(s=ir,"selectionStart"in s&&qc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Eo&&vo(Eo,s)||(Eo=s,s=wu(Wc,"onSelect"),0<s.length&&(n=new bl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=ir)))}function ms(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ar={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},Zc={},Rm={};aa&&(Rm=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function gs(t){if(Zc[t])return Zc[t];if(!ar[t])return t;var n=ar[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rm)return Zc[t]=n[a];return t}var wm=gs("animationend"),Dm=gs("animationiteration"),Um=gs("animationstart"),VS=gs("transitionrun"),QS=gs("transitionstart"),kS=gs("transitioncancel"),Nm=gs("transitionend"),Om=new Map,$c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$c.push("scrollEnd");function yi(t,n){Om.set(t,n),ln(n,[t])}var YS=0;function sa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ti.identifierPrefix;var a=YS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Lm(t){if(t==null||typeof t=="string")return t;var n=null,a=Ar;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function ra(t,n){return t=Lm(t),n=Lm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],sr=0,tf=0;function Ul(){for(var t=sr,n=tf=sr=0;n<t;){var a=ci[n];ci[n++]=null;var s=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var c=ci[n];if(ci[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}c!==0&&Im(a,u,c)}}function Nl(t,n,a,s){ci[sr++]=t,ci[sr++]=n,ci[sr++]=a,ci[sr++]=s,tf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function ef(t,n,a,s){return Nl(t,n,a,s),Ol(t)}function _s(t,n){return Nl(t,null,null,n),Ol(t)}function Im(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-Un(a),t=c.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),c):null}function Ol(t){if(50<Go)throw Go=0,Mu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var rr={};function XS(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,n,a,s){return new XS(t,n,a,s)}function nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,n){var a=t.alternate;return a===null?(a=Vn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Bm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ll(t,n,a,s,u,c){var g=0;if(s=t,typeof s=="function")nf(s)&&(g=1);else if(typeof s=="string")g=SM(t,a,Ht.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case vt:return t=Vn(31,a,n,u),t.elementType=vt,t.lanes=c,t;case X:return vs(a.children,u,c,n);case ut:g=8,u|=24;break;case J:return t=Vn(12,a,n,u|2),t.elementType=J,t.lanes=c,t;case V:return t=Vn(13,a,n,u),t.elementType=V,t.lanes=c,t;case B:return t=Vn(19,a,n,u),t.elementType=B,t.lanes=c,t;case wt:case N:return t=u|32,t=Vn(30,a,n,t),t.elementType=N,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case $:g=10;break t;case P:g=9;break t;case U:g=11;break t;case ct:g=14;break t;case dt:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Vn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=c,n}function vs(t,n,a,s){return t=Vn(7,t,s,n),t.lanes=a,t}function af(t,n,a){return t=Vn(6,t,null,n),t.lanes=a,t}function Pm(t){var n=Vn(18,null,null,0);return n.stateNode=t,n}function sf(t,n,a){return n=Vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var zm=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var a=zm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Tt(n)},zm.set(t,n),n)}return{value:t,source:n,stack:Tt(n)}}var or=[],lr=0,Il=null,So=0,hi=[],di=0,Da=null,Bi=1,Pi="";function la(t,n){or[lr++]=So,or[lr++]=Il,Il=t,So=n}function Fm(t,n,a){hi[di++]=Bi,hi[di++]=Pi,hi[di++]=Da,Da=t;var s=Bi;t=Pi;var u=32-Un(s)-1;s&=~(1<<u),a+=1;var c=32-Un(n)+u;if(30<c){var g=u-u%5;c=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Bi=1<<32-Un(n)+u|a<<u|s,Pi=c+t}else Bi=1<<c|a<<u|s,Pi=t}function Bl(t){t.return!==null&&(la(t,1),Fm(t,1,0))}function rf(t){for(;t===Il;)Il=or[--lr],or[lr]=null,So=or[--lr],or[lr]=null;for(;t===Da;)Da=hi[--di],hi[di]=null,Pi=hi[--di],hi[di]=null,Bi=hi[--di],hi[di]=null}function Hm(t,n){hi[di++]=Bi,hi[di++]=Pi,hi[di++]=Da,Bi=n.id,Pi=n.overflow,Da=t}var Sn=null,qe=null,ve=!1,Ua=null,pi=!1,of=Error(r(519));function Na(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(fi(n,t)),of}function Gm(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Dt]=t,n[Xt]=s,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<Qo.length;a++)ye(Qo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),$p(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),em(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||lv(n.textContent,a)?(s.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),s.onScroll!=null&&ye("scroll",n),s.onScrollEnd!=null&&ye("scrollend",n),s.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||Na(t,!0)}function Pl(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Sn=Sn.return}}function ur(t){if(t!==Sn)return!1;if(!ve)return Pl(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ph(t.type,t.memoizedProps)),a=!a),a&&qe&&Na(t),Pl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qe=bv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));qe=bv(t)}else n===27?(n=qe,Ka(t.type)?(t=Xh,Xh=null,qe=t):qe=n):qe=Sn?gi(t.stateNode.nextSibling):null;return!0}function Es(){qe=Sn=null,ve=!1}function lf(){var t=Ua;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Ua=null),t}function yo(t){Ua===null?Ua=[t]:Ua.push(t)}var uf=$t(null),Ss=null,ua=null;function Oa(t,n,a){se(uf,n._currentValue),n._currentValue=a}function ca(t){t._currentValue=uf.current,Lt(uf)}function zl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function cf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var g=u.child;c=c.firstContext;t:for(;c!==null;){var A=c;c=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){c.lanes|=a,A=c.alternate,A!==null&&(A.lanes|=a),zl(c.return,a,t),s||(g=null);break t}c=A.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),zl(g,a,t),g=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,g=u.alternate,g!==null&&(g.lanes|=a),zl(u.return,a,t),g=u.child,g=g!==null?g.sibling:null):g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function ys(t,n,a,s){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var A=u.type;$n(u.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(u===Je.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Lr):t=[Lr])}u=u.return}return t!==null&&cf(n,t,a,s),n.flags|=262144,t!==null}function Fl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ms(t){Ss=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Vm(Ss,t)}function Hl(t,n){return Ss===null&&Ms(t),Vm(t,n)}function Vm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(r(308));ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ua=ua.next=n;return a}var JS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},KS=o.unstable_scheduleCallback,qS=o.unstable_NormalPriority,un={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ff(){return{controller:new JS,data:new Map,refCount:0}}function Mo(t){t.refCount--,t.refCount===0&&KS(qS,function(){t.controller.abort()})}function Qm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var xo=null;function WS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Ao=null,hf=0,xs=0,cr=null;function jS(t,n){if(Ao===null){var a=Ao=[];hf=0,xs=Rh(),cr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return hf++,n.then(km,km),n}function km(){if(--hf===0&&(xo=null,Ao!==null)){cr!==null&&(cr.status="fulfilled");var t=Ao;Ao=null,xs=0,cr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ZS(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Ym=xt.S;xt.S=function(t,n){if(P_=k(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jS(t,n),xo!==null)for(var a=Rr;a!==null;)Qm(a,xo),a=a.next;if(a=t.types,a!==null){for(var s=Rr;s!==null;)Qm(s,a),s=s.next;if(xs!==0){s=xo,s===null&&(s=xo=[]);for(var u=0;u<a.length;u++){var c=a[u];s.indexOf(c)===-1&&s.push(c)}}}Ym!==null&&Ym(t,n)};var As=$t(null);function df(){var t=As.current;return t!==null?t:Xe.pooledCache}function Gl(t,n){n===null?se(As,As.current):se(As,n.pool)}function Xm(){var t=df();return t===null?null:{parent:un._currentValue,pool:t}}var fr=Error(r(460)),pf=Error(r(474)),Vl=Error(r(542)),Ql={then:function(){}};function Jm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Km(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wm(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wm(t),t}throw Cs=n,fr}}function Ts(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,fr):a}}var Cs=null;function qm(){if(Cs===null)throw Error(r(459));var t=Cs;return Cs=null,t}function Wm(t){if(t===fr||t===Vl)throw Error(r(483))}var hr=null,To=0;function kl(t){var n=To;return To+=1,hr===null&&(hr=[]),Km(hr,t,n)}function La(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Yl(t,n){throw n.$$typeof===q?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function jm(t){function n(j,Q){if(t){var nt=j.deletions;nt===null?(j.deletions=[Q],j.flags|=16):nt.push(Q)}}function a(j,Q){if(!t)return null;for(;Q!==null;)n(j,Q),Q=Q.sibling;return null}function s(j){for(var Q=new Map;j!==null;)j.key===null?Q.set(j.index,j):Q.set(j.key,j),j=j.sibling;return Q}function u(j,Q){return j=oa(j,Q),j.index=0,j.sibling=null,j}function c(j,Q,nt){return j.index=nt,t?(nt=j.alternate,nt!==null?(nt=nt.index,nt<Q?(j.flags|=2,Q):nt):(j.flags|=134217730,Q)):(j.flags|=1048576,Q)}function g(j){return t&&j.alternate===null&&(j.flags|=134217730),j}function A(j,Q,nt,mt){return Q===null||Q.tag!==6?(Q=af(nt,j.mode,mt),Q.return=j,Q):(Q=u(Q,nt),Q.return=j,Q)}function I(j,Q,nt,mt){var Gt=nt.type;return Gt===X?(j=ot(j,Q,nt.props.children,mt,nt.key),La(j,nt),j):Q!==null&&(Q.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===dt&&Ts(Gt)===Q.type)?(Q=u(Q,nt.props),La(Q,nt),Q.return=j,Q):(Q=Ll(nt.type,nt.key,nt.props,null,j.mode,mt),La(Q,nt),Q.return=j,Q)}function Z(j,Q,nt,mt){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==nt.containerInfo||Q.stateNode.implementation!==nt.implementation?(Q=sf(nt,j.mode,mt),Q.return=j,Q):(Q=u(Q,nt.children||[]),Q.return=j,Q)}function ot(j,Q,nt,mt,Gt){return Q===null||Q.tag!==7?(Q=vs(nt,j.mode,mt,Gt),Q.return=j,Q):(Q=u(Q,nt),Q.return=j,Q)}function _t(j,Q,nt){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=af(""+Q,j.mode,nt),Q.return=j,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case w:return nt=Ll(Q.type,Q.key,Q.props,null,j.mode,nt),La(nt,Q),nt.return=j,nt;case R:return Q=sf(Q,j.mode,nt),Q.return=j,Q;case dt:return Q=Ts(Q),_t(j,Q,nt)}if(bt(Q)||st(Q))return Q=vs(Q,j.mode,nt,null),Q.return=j,Q;if(typeof Q.then=="function")return _t(j,kl(Q),nt);if(Q.$$typeof===$)return _t(j,Hl(j,Q),nt);Yl(j,Q)}return null}function K(j,Q,nt,mt){var Gt=Q!==null?Q.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Gt!==null?null:A(j,Q,""+nt,mt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case w:return nt.key===Gt?I(j,Q,nt,mt):null;case R:return nt.key===Gt?Z(j,Q,nt,mt):null;case dt:return nt=Ts(nt),K(j,Q,nt,mt)}if(bt(nt)||st(nt))return Gt!==null?null:ot(j,Q,nt,mt,null);if(typeof nt.then=="function")return K(j,Q,kl(nt),mt);if(nt.$$typeof===$)return K(j,Q,Hl(j,nt),mt);Yl(j,nt)}return null}function at(j,Q,nt,mt,Gt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(nt)||null,A(Q,j,""+mt,Gt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case w:return j=j.get(mt.key===null?nt:mt.key)||null,I(Q,j,mt,Gt);case R:return j=j.get(mt.key===null?nt:mt.key)||null,Z(Q,j,mt,Gt);case dt:return mt=Ts(mt),at(j,Q,nt,mt,Gt)}if(bt(mt)||st(mt))return j=j.get(nt)||null,ot(Q,j,mt,Gt,null);if(typeof mt.then=="function")return at(j,Q,nt,kl(mt),Gt);if(mt.$$typeof===$)return at(j,Q,nt,Hl(Q,mt),Gt);Yl(Q,mt)}return null}function Ot(j,Q,nt,mt){for(var Gt=null,Te=null,te=Q,re=Q=0,hn=null;te!==null&&re<nt.length;re++){te.index>re?(hn=te,te=null):hn=te.sibling;var Ce=K(j,te,nt[re],mt);if(Ce===null){te===null&&(te=hn);break}t&&te&&Ce.alternate===null&&n(j,te),Q=c(Ce,Q,re),Te===null?Gt=Ce:Te.sibling=Ce,Te=Ce,te=hn}if(re===nt.length)return a(j,te),ve&&la(j,re),Gt;if(te===null){for(;re<nt.length;re++)te=_t(j,nt[re],mt),te!==null&&(Q=c(te,Q,re),Te===null?Gt=te:Te.sibling=te,Te=te);return ve&&la(j,re),Gt}for(te=s(te);re<nt.length;re++)hn=at(te,j,re,nt[re],mt),hn!==null&&(t&&(Ce=hn.alternate,Ce!==null&&te.delete(Ce.key===null?re:Ce.key)),Q=c(hn,Q,re),Te===null?Gt=hn:Te.sibling=hn,Te=hn);return t&&te.forEach(function($a){return n(j,$a)}),ve&&la(j,re),Gt}function Jt(j,Q,nt,mt){if(nt==null)throw Error(r(151));for(var Gt=null,Te=null,te=Q,re=Q=0,hn=null,Ce=nt.next();te!==null&&!Ce.done;re++,Ce=nt.next()){te.index>re?(hn=te,te=null):hn=te.sibling;var $a=K(j,te,Ce.value,mt);if($a===null){te===null&&(te=hn);break}t&&te&&$a.alternate===null&&n(j,te),Q=c($a,Q,re),Te===null?Gt=$a:Te.sibling=$a,Te=$a,te=hn}if(Ce.done)return a(j,te),ve&&la(j,re),Gt;if(te===null){for(;!Ce.done;re++,Ce=nt.next())Ce=_t(j,Ce.value,mt),Ce!==null&&(Q=c(Ce,Q,re),Te===null?Gt=Ce:Te.sibling=Ce,Te=Ce);return ve&&la(j,re),Gt}for(te=s(te);!Ce.done;re++,Ce=nt.next())Ce=at(te,j,re,Ce.value,mt),Ce!==null&&(t&&(hn=Ce.alternate,hn!==null&&te.delete(hn.key===null?re:hn.key)),Q=c(Ce,Q,re),Te===null?Gt=Ce:Te.sibling=Ce,Te=Ce);return t&&te.forEach(function(NM){return n(j,NM)}),ve&&la(j,re),Gt}function pe(j,Q,nt,mt){if(typeof nt=="object"&&nt!==null&&nt.type===X&&nt.key===null&&nt.props.ref===void 0&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case w:t:{for(var Gt=nt.key;Q!==null;){if(Q.key===Gt){if(Gt=nt.type,Gt===X){if(Q.tag===7){a(j,Q.sibling),mt=u(Q,nt.props.children),La(mt,nt),mt.return=j,j=mt;break t}}else if(Q.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===dt&&Ts(Gt)===Q.type){a(j,Q.sibling),mt=u(Q,nt.props),La(mt,nt),mt.return=j,j=mt;break t}a(j,Q);break}else n(j,Q);Q=Q.sibling}nt.type===X?(mt=vs(nt.props.children,j.mode,mt,nt.key),La(mt,nt),mt.return=j,j=mt):(mt=Ll(nt.type,nt.key,nt.props,null,j.mode,mt),La(mt,nt),mt.return=j,j=mt)}return g(j);case R:t:{for(Gt=nt.key;Q!==null;){if(Q.key===Gt)if(Q.tag===4&&Q.stateNode.containerInfo===nt.containerInfo&&Q.stateNode.implementation===nt.implementation){a(j,Q.sibling),mt=u(Q,nt.children||[]),mt.return=j,j=mt;break t}else{a(j,Q);break}else n(j,Q);Q=Q.sibling}mt=sf(nt,j.mode,mt),mt.return=j,j=mt}return g(j);case dt:return nt=Ts(nt),pe(j,Q,nt,mt)}if(bt(nt))return Ot(j,Q,nt,mt);if(st(nt)){if(Gt=st(nt),typeof Gt!="function")throw Error(r(150));return nt=Gt.call(nt),Jt(j,Q,nt,mt)}if(typeof nt.then=="function")return pe(j,Q,kl(nt),mt);if(nt.$$typeof===$)return pe(j,Q,Hl(j,nt),mt);Yl(j,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,Q!==null&&Q.tag===6?(a(j,Q.sibling),mt=u(Q,nt),mt.return=j,j=mt):(a(j,Q),mt=af(nt,j.mode,mt),mt.return=j,j=mt),g(j)):a(j,Q)}return function(j,Q,nt,mt){try{To=0;var Gt=pe(j,Q,nt,mt);return hr=null,Gt}catch(te){if(te===fr||te===Vl)throw te;var Te=Vn(29,te,null,j.mode);return Te.lanes=mt,Te.return=j,Te}}}var bs=jm(!0),Zm=jm(!1),Ia=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Le&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Ol(t),Im(t,null,a),n}return Nl(t,s,n,a),Ol(t)}function Co(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,tt(t,a)}}function _f(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var vf=!1;function bo(){if(vf){var t=cr;if(t!==null)throw t}}function Ro(t,n,a,s){vf=!1;var u=t.updateQueue;Ia=!1;var c=u.firstBaseUpdate,g=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,Z=I.next;I.next=null,g===null?c=Z:g.next=Z,g=I;var ot=t.alternate;ot!==null&&(ot=ot.updateQueue,A=ot.lastBaseUpdate,A!==g&&(A===null?ot.firstBaseUpdate=Z:A.next=Z,ot.lastBaseUpdate=I))}if(c!==null){var _t=u.baseState;g=0,ot=Z=I=null,A=c;do{var K=A.lane&-536870913,at=K!==A.lane;if(at?(Ae&K)===K:(s&K)===K){K!==0&&K===xs&&(vf=!0),ot!==null&&(ot=ot.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ot=t,Jt=A;K=n;var pe=a;switch(Jt.tag){case 1:if(Ot=Jt.payload,typeof Ot=="function"){_t=Ot.call(pe,_t,K);break t}_t=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=Jt.payload,K=typeof Ot=="function"?Ot.call(pe,_t,K):Ot,K==null)break t;_t=H({},_t,K);break t;case 2:Ia=!0}}K=A.callback,K!==null&&(t.flags|=64,at&&(t.flags|=8192),at=u.callbacks,at===null?u.callbacks=[K]:at.push(K))}else at={lane:K,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ot===null?(Z=ot=at,I=_t):ot=ot.next=at,g|=K;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;at=A,A=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);ot===null&&(I=_t),u.baseState=I,u.firstBaseUpdate=Z,u.lastBaseUpdate=ot,c===null&&(u.shared.lanes=0),ka|=g,t.lanes=g,t.memoizedState=_t}}function $m(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function tg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)$m(a[t],n)}var za=$t(null),Xl=$t(0);function eg(t,n){t=ma,se(Xl,t),se(za,n),ma=t|n.baseLanes}function Ef(){se(Xl,ma),se(za,za.current)}function Sf(){ma=Xl.current,Lt(za),Lt(Xl)}var Cn=$t(null),On=null;function Fa(t){var n=t.alternate;se(bn,bn.current&1),se(Cn,t),On===null&&(n===null||za.current!==null||n.memoizedState!==null)&&(On=t)}function yf(t){se(bn,bn.current),se(Cn,t),On===null&&(On=t)}function ng(t){t.tag===22?(se(bn,bn.current),se(Cn,t),On===null&&(On=t)):Ha()}function Ha(){se(bn,bn.current),se(Cn,Cn.current)}function ti(t){Lt(Cn),On===t&&(On=null),Lt(bn)}var bn=$t(0);function wo(t,n){se(Cn,Cn.current),se(bn,n)}function Mf(t){Lt(bn),Lt(Cn),On===t&&(On=null)}function Jl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kh(a)||Yh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,de=null,Ve=null,cn=null,Kl=!1,dr=!1,Rs=!1,ql=0,Do=0,pr=null,$S=0;function an(){throw Error(r(321))}function xf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!$n(t[a],n[a]))return!1;return!0}function Af(t,n,a,s,u,c){return fa=c,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xt.H=t===null||t.memoizedState===null?Fg:Hg,Rs=!1,c=a(s,u),Rs=!1,dr&&(c=ag(n,a,s,u)),ig(t),c}function ig(t){xt.H=nu;var n=Ve!==null&&Ve.next!==null;if(fa=0,cn=Ve=de=null,Kl=!1,Do=0,pr=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&Fl(t)&&(fn=!0))}function ag(t,n,a,s){de=t;var u=0;do{if(dr&&(pr=null),Do=0,dr=!1,25<=u)throw Error(r(301));if(u+=1,cn=Ve=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}xt.H=oy,c=n(a,s)}while(dr);return c}function ty(){var t=xt.H,n=t.useState()[0];return n=typeof n.then=="function"?Uo(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(de.flags|=1024),n}function Tf(){var t=ql!==0;return ql=0,t}function Cf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function bf(t){if(Kl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Kl=!1}fa=0,cn=Ve=de=null,dr=!1,Do=ql=0,pr=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?de.memoizedState=cn=t:cn=cn.next=t,cn}function on(){if(Ve===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=cn===null?de.memoizedState:cn.next;if(n!==null)cn=n,Ve=t;else{if(t===null)throw de.alternate===null?Error(r(467)):Error(r(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},cn===null?de.memoizedState=cn=t:cn=cn.next=t}return cn}function Wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uo(t){var n=Do;return Do+=1,pr===null&&(pr=[]),t=Km(pr,t,n),n=de,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,xt.H=n===null||n.memoizedState===null?Fg:Hg),t}function jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Uo(t);if(t.$$typeof===lt)return;if(t.$$typeof===$)return Tn(t)}throw Error(r(438,String(t)))}function Rf(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Wl(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=Vt;return n.index++,a}function ha(t,n){return typeof n=="function"?n(t):n}function Zl(t){var n=on();return wf(n,Ve,t)}function wf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,c=s.pending;if(c!==null){if(u!==null){var g=u.next;u.next=c.next,c.next=g}n.baseQueue=u=c,s.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var A=g=null,I=null,Z=n,ot=!1;do{var _t=Z.lane&-536870913;if(_t!==Z.lane?(Ae&_t)===_t:(fa&_t)===_t){var K=Z.revertLane;if(K===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),_t===xs&&(ot=!0);else if((fa&K)===K){Z=Z.next,K===xs&&(ot=!0);continue}else _t={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},I===null?(A=I=_t,g=c):I=I.next=_t,de.lanes|=K,ka|=K;_t=Z.action,Rs&&a(c,_t),c=Z.hasEagerState?Z.eagerState:a(c,_t)}else K={lane:_t,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},I===null?(A=I=K,g=c):I=I.next=K,de.lanes|=_t,ka|=_t;Z=Z.next}while(Z!==null&&Z!==n);if(I===null?g=c:I.next=A,!$n(c,t.memoizedState)&&(fn=!0,ot&&(a=cr,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=I,s.lastRenderedState=c}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Df(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do c=t(c,g.action),g=g.next;while(g!==u);$n(c,n.memoizedState)||(fn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function sg(t,n,a){var s=de,u=on(),c=ve;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!$n((Ve||u).memoizedState,a);if(g&&(u.memoizedState=a,fn=!0),u=u.queue,Of(lg.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||g||cn!==null&&(cn.memoizedState.tag&1)!==0,mr(t?9:8,{destroy:void 0},og.bind(null,s,u,a,n),null),t){if(s.flags|=2048,Xe===null)throw Error(r(349));c||(fa&127)!==0||rg(s,n,a)}return a}function rg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Wl(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function og(t,n,a,s){n.value=a,n.getSnapshot=s,ug(n)&&cg(t)}function lg(t,n,a){return a(function(){ug(n)&&cg(t)})}function ug(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!$n(t,a)}catch{return!0}}function cg(t){var n=_s(t,2);n!==null&&Xn(n,t,2)}function Uf(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),Rs){pn(!0);try{a()}finally{pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},n}function fg(t,n,a,s){return t.baseState=a,wf(t,Ve,typeof s=="function"?s:ha)}function ey(t,n,a,s,u){if(eu(t))throw Error(r(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};xt.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,hg(n,c)):(c.next=a.next,n.pending=a.next=c)}}function hg(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var c=xt.T,g={};g.types=c!==null?c.types:null,xt.T=g;try{var A=a(u,s),I=xt.S;I!==null&&I(g,A),dg(t,n,A)}catch(Z){Nf(t,n,Z)}finally{c!==null&&g.types!==null&&(c.types=g.types),xt.T=c}}else try{c=a(u,s),dg(t,n,c)}catch(Z){Nf(t,n,Z)}}function dg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){pg(t,n,s)},function(s){return Nf(t,n,s)}):pg(t,n,a)}function pg(t,n,a){n.status="fulfilled",n.value=a,mg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,hg(t,a)))}function Nf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,mg(n),n=n.next;while(n!==s)}t.action=null}function mg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function gg(t,n){return n}function _g(t,n){if(ve){var a=Xe.formState;if(a!==null){t:{var s=de;if(ve){if(qe){e:{for(var u=qe,c=pi;u.nodeType!==8;){if(!c){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){qe=gi(u.nextSibling),s=u.data==="F!";break t}}Na(s)}s=!1}s&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gg,lastRenderedState:n},a.queue=s,a=Bg.bind(null,de,s),s.dispatch=a,s=Uf(!1),c=zf.bind(null,de,!1,s.queue),s=zn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=ey.bind(null,de,u,c,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function vg(t){var n=on();return Eg(n,Ve,t)}function Eg(t,n,a){if(n=wf(t,n,gg)[0],t=Zl(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Uo(n)}catch(g){throw g===fr?Vl:g}else s=n;n=on();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,mr(9,{destroy:void 0},ny.bind(null,u,a),null)),[s,c,t]}function ny(t,n){t.action=n}function Sg(t){var n=on(),a=Ve;if(a!==null)return Eg(n,a,t);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function mr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=Wl(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function yg(){return on().memoizedState}function $l(t,n,a,s){var u=zn();de.flags|=t,u.memoizedState=mr(1|n,{destroy:void 0},a,s===void 0?null:s)}function tu(t,n,a,s){var u=on();s=s===void 0?null:s;var c=u.memoizedState.inst;Ve!==null&&s!==null&&xf(s,Ve.memoizedState.deps)?u.memoizedState=mr(n,c,a,s):(de.flags|=t,u.memoizedState=mr(1|n,c,a,s))}function Mg(t,n){$l(8390656,8,t,n)}function Of(t,n){tu(2048,8,t,n)}function iy(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=Wl(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function xg(t){var n=on().memoizedState;return iy({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Ag(t,n){return tu(4,2,t,n)}function Tg(t,n){return tu(4,4,t,n)}function Cg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function bg(t,n,a){a=a!=null?a.concat([t]):null,tu(4,4,Cg.bind(null,n,t),a)}function Lf(){}function Rg(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&xf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function wg(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&xf(n,s[1]))return s[0];if(s=t(),Rs){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[s,n],s}function If(t,n,a){return a===void 0||(fa&1073741824)!==0&&(Ae&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=F_(),de.lanes|=t,ka|=t,a)}function Dg(t,n,a,s){return $n(a,n)?a:za.current!==null?(t=If(t,a,s),$n(t,n)||(fn=!0),t):(fa&106)===0||(fa&1073741824)!==0&&(Ae&261930)===0?(fn=!0,t.memoizedState=a):(t=F_(),de.lanes|=t,ka|=t,n)}function Ug(t,n,a,s,u){var c=Kt.p;Kt.p=c!==0&&8>c?c:8;var g=xt.T,A={};A.types=g!==null?g.types:null,xt.T=A,zf(t,!1,n,a);try{var I=u(),Z=xt.S;if(Z!==null&&Z(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ot=ZS(I,s);No(t,n,ot,ai(t))}else No(t,n,s,ai(t))}catch(_t){No(t,n,{then:function(){},status:"rejected",reason:_t},ai())}finally{Kt.p=c,g!==null&&A.types!==null&&(g.types=A.types),xt.T=g}}function ay(){}function Bf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Ng(t).queue;Ug(t,u,n,z,a===null?ay:function(){return Og(t),a(s)})}function Ng(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Og(t){var n=Ng(t);n.next===null&&(n=t.alternate.memoizedState),No(t,n.next.queue,{},ai())}function Pf(){return Tn(Lr)}function Lg(){return on().memoizedState}function Ig(){return on().memoizedState}function sy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();t=Ba(a);var s=Pa(n,t,a);s!==null&&(Xn(s,n,a),Co(s,n,a)),n={cache:ff()},t.payload=n;return}n=n.return}}function ry(t,n,a){var s=ai();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},eu(t)?Pg(n,a):(a=ef(t,n,a,s),a!==null&&(Xn(a,t,s),zg(a,n,s)))}function Bg(t,n,a){var s=ai();No(t,n,a,s)}function No(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(eu(t))Pg(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,A=c(g,a);if(u.hasEagerState=!0,u.eagerState=A,$n(A,g))return Nl(t,n,u,0),Xe===null&&Ul(),!1}catch{}if(a=ef(t,n,u,s),a!==null)return Xn(a,t,s),zg(a,n,s),!0}return!1}function zf(t,n,a,s){if(s={lane:2,revertLane:Rh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},eu(t)){if(n)throw Error(r(479))}else n=ef(t,a,s,2),n!==null&&Xn(n,t,2)}function eu(t){var n=t.alternate;return t===de||n!==null&&n===de}function Pg(t,n){dr=Kl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function zg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,tt(t,a)}}var nu={readContext:Tn,use:jl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},Fg={readContext:Tn,use:jl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Mg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,$l(4194308,4,Cg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return $l(4194308,4,t,n)},useInsertionEffect:function(t,n){$l(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var s=t();if(Rs){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=zn();if(a!==void 0){var u=a(n);if(Rs){pn(!0);try{a(n)}finally{pn(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=ry.bind(null,de,t),[s.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=Uf(t);var n=t.queue,a=Bg.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Lf,useDeferredValue:function(t,n){var a=zn();return If(a,t,n)},useTransition:function(){var t=Uf(!1);return t=Ug.bind(null,de,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=de,u=zn();if(ve){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(Ae&127)!==0||rg(s,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,Mg(lg.bind(null,s,c,t),[t]),s.flags|=2048,mr(9,{destroy:void 0},og.bind(null,s,c,a,n),null),a},useId:function(){var t=zn(),n=Xe.identifierPrefix;if(ve){var a=Pi,s=Bi;a=(s&~(1<<32-Un(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ql++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=$S++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Pf,useFormState:_g,useActionState:_g,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=zf.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:Rf,useCacheRefresh:function(){return zn().memoizedState=sy.bind(null,de)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Hg={readContext:Tn,use:jl,useCallback:Rg,useContext:Tn,useEffect:Of,useImperativeHandle:bg,useInsertionEffect:Ag,useLayoutEffect:Tg,useMemo:wg,useReducer:Zl,useRef:yg,useState:function(){return Zl(ha)},useDebugValue:Lf,useDeferredValue:function(t,n){var a=on();return Dg(a,Ve.memoizedState,t,n)},useTransition:function(){var t=Zl(ha)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Uo(t),n]},useSyncExternalStore:sg,useId:Lg,useHostTransitionStatus:Pf,useFormState:vg,useActionState:vg,useOptimistic:function(t,n){var a=on();return fg(a,Ve,t,n)},useMemoCache:Rf,useCacheRefresh:Ig,useEffectEvent:xg},oy={readContext:Tn,use:jl,useCallback:Rg,useContext:Tn,useEffect:Of,useImperativeHandle:bg,useInsertionEffect:Ag,useLayoutEffect:Tg,useMemo:wg,useReducer:Df,useRef:yg,useState:function(){return Df(ha)},useDebugValue:Lf,useDeferredValue:function(t,n){var a=on();return Ve===null?If(a,t,n):Dg(a,Ve.memoizedState,t,n)},useTransition:function(){var t=Df(ha)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Uo(t),n]},useSyncExternalStore:sg,useId:Lg,useHostTransitionStatus:Pf,useFormState:Sg,useActionState:Sg,useOptimistic:function(t,n){var a=on();return Ve!==null?fg(a,Ve,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:Ig,useEffectEvent:xg};function Ff(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:H({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Hf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ai(),u=Ba(s);u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,s),n!==null&&(Xn(n,t,s),Co(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ai(),u=Ba(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,s),n!==null&&(Xn(n,t,s),Co(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ai(),s=Ba(a);s.tag=2,n!=null&&(s.callback=n),n=Pa(t,s,a),n!==null&&(Xn(n,t,a),Co(n,t,a))}};function Gg(t,n,a,s,u,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,g):n.prototype&&n.prototype.isPureReactComponent?!vo(a,s)||!vo(u,c):!0}function Vg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Hf.enqueueReplaceState(n,n.state,null)}function ws(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=H({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Qg(t){Dl(t)}function kg(t){console.error(t)}function Yg(t){Dl(t)}function iu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Xg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Gf(t,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){iu(t,n)},a}function Jg(t){return t=Ba(t),t.tag=3,t}function Kg(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=s.value;t.payload=function(){return u(c)},t.callback=function(){Xg(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Xg(n,a,s),typeof u!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function ly(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&ys(n,a,u,!0),a=Cn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return On===null?Au():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Th(t,s,u)),!1;case 22:return a.flags|=65536,s===Ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Th(t,s,u)),!1}throw Error(r(435,a.tag))}return Th(t,s,u),Au(),!1}if(ve)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==of&&(t=Error(r(422),{cause:s}),yo(fi(t,a)))):(s!==of&&(n=Error(r(423),{cause:s}),yo(fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=fi(s,a),u=Gf(t.stateNode,s,u),_f(t,u),sn!==4&&(sn=2)),!1;var c=Error(r(520),{cause:s});if(c=fi(c,a),Ho===null?Ho=[c]:Ho.push(c),sn!==4&&(sn=2),n===null)return!0;s=fi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Gf(a.stateNode,s,t),_f(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ya===null||!Ya.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Jg(u),Kg(u,t,a,s),_f(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Vf=Error(r(461)),fn=!1;function gn(t,n,a,s){n.child=t===null?Zm(n,null,a,s):bs(n,t.child,a,s)}function qg(t,n,a,s,u){a=a.render;var c=n.ref;if("ref"in s){var g={};for(var A in s)A!=="ref"&&(g[A]=s[A])}else g=s;return Ms(n),s=Af(t,n,a,g,c,u),A=Tf(),t!==null&&!fn?(Cf(t,n,u),da(t,n,u)):(ve&&A&&Bl(n),n.flags|=1,gn(t,n,s,u),n.child)}function Wg(t,n,a,s,u){if(t===null){var c=a.type;return typeof c=="function"&&!nf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,jg(t,n,c,s,u)):(t=Ll(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!Wf(t,u)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:vo,a(g,s)&&t.ref===n.ref)return da(t,n,u)}return n.flags|=1,t=oa(c,s),t.ref=n.ref,t.return=n,n.child=t}function jg(t,n,a,s,u){if(t!==null){var c=t.memoizedProps;if(vo(c,s)&&t.ref===n.ref)if(fn=!1,n.pendingProps=s=c,Wf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,da(t,n,u)}return Qf(t,n,a,s,u)}function Zg(t,n,a,s){var u=s.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~c}else s=0,n.child=null;return $g(t,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gl(n,c!==null?c.cachePool:null),c!==null?eg(n,c):Ef(),ng(n);else return s=n.lanes=536870912,$g(t,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(Gl(n,c.cachePool),eg(n,c),Ha(),n.memoizedState=null):(t!==null&&Gl(n,null),Ef(),Ha());return gn(t,n,u,a),n.child}function Oo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $g(t,n,a,s,u){var c=df();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Gl(n,null),Ef(),ng(n),t!==null&&ys(t,n,s,!0),n.childLanes=u,null}function au(t,n){return n=su({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function t_(t,n,a){return bs(n,t.child,null,a),t=au(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function uy(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(s.mode==="hidden")return t=au(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Oo(null,t);if(yf(n),(t=qe)?(t=Cv(t,pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Bi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Pm(t),a.return=n,n.child=a,Sn=n,qe=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return au(n,s)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(yf(n),u)if(n.flags&256)n.flags&=-257,n=t_(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||ys(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(za.current===null){if(s=Xe,s!==null&&(g=ft(s,a),g!==0&&g!==c.retryLane))throw c.retryLane=g,_s(t,g),Xn(s,t,g),Vf;Au()}n=t_(t,n,a)}else t=c.treeContext,qe=gi(g.nextSibling),Sn=n,ve=!0,Ua=null,pi=!1,t!==null&&Hm(n,t),n=au(n,s),n.flags|=134221824;return n}return t=oa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function gr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Qf(t,n,a,s,u){return Ms(n),a=Af(t,n,a,s,void 0,u),s=Tf(),t!==null&&!fn?(Cf(t,n,u),da(t,n,u)):(ve&&s&&Bl(n),n.flags|=1,gn(t,n,a,u),n.child)}function e_(t,n,a,s,u,c){return Ms(n),n.updateQueue=null,a=ag(n,s,a,u),ig(t),s=Tf(),t!==null&&!fn?(Cf(t,n,c),da(t,n,c)):(ve&&s&&Bl(n),n.flags|=1,gn(t,n,a,c),n.child)}function n_(t,n,a,s,u){if(Ms(n),n.stateNode===null){var c=rr,g=a.contextType;typeof g=="object"&&g!==null&&(c=Tn(g)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Hf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},mf(n),g=a.contextType,c.context=typeof g=="object"&&g!==null?Tn(g):rr,c.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Ff(n,a,g,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&Hf.enqueueReplaceState(c,c.state,null),Ro(n,s,c,u),bo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){c=n.stateNode;var A=n.memoizedProps,I=ws(a,A);c.props=I;var Z=c.context,ot=a.contextType;g=rr,typeof ot=="object"&&ot!==null&&(g=Tn(ot));var _t=a.getDerivedStateFromProps;ot=typeof _t=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ot||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||Z!==g)&&Vg(n,c,s,g),Ia=!1;var K=n.memoizedState;c.state=K,Ro(n,s,c,u),bo(),Z=n.memoizedState,A||K!==Z||Ia?(typeof _t=="function"&&(Ff(n,a,_t,s),Z=n.memoizedState),(I=Ia||Gg(n,a,I,s,K,Z,g))?(ot||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Z),c.props=s,c.state=Z,c.context=g,s=I):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,gf(t,n),g=n.memoizedProps,ot=ws(a,g),c.props=ot,_t=n.pendingProps,K=c.context,Z=a.contextType,I=rr,typeof Z=="object"&&Z!==null&&(I=Tn(Z)),A=a.getDerivedStateFromProps,(Z=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==_t||K!==I)&&Vg(n,c,s,I),Ia=!1,K=n.memoizedState,c.state=K,Ro(n,s,c,u),bo();var at=n.memoizedState;g!==_t||K!==at||Ia||t!==null&&t.dependencies!==null&&Fl(t.dependencies)?(typeof A=="function"&&(Ff(n,a,A,s),at=n.memoizedState),(ot=Ia||Gg(n,a,ot,s,K,at,I)||t!==null&&t.dependencies!==null&&Fl(t.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,at,I),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,at,I)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&K===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&K===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=at),c.props=s,c.state=at,c.context=I,s=ot):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&K===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&K===t.memoizedState||(n.flags|=1024),s=!1)}return c=s,gr(t,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&s?(n.child=bs(n,t.child,null,u),n.child=bs(n,null,a,u)):gn(t,n,a,u),n.memoizedState=c.state,t=n.child):t=da(t,n,u),t}function i_(t,n,a,s){return Es(),n.flags|=256,gn(t,n,a,s),n.child}var kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yf(t){return{baseLanes:t,cachePool:Xm()}}function Xf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function a_(t,n,a){var s=n.pendingProps,u=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(bn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(u?Fa(n):Ha(),(t=qe)?(t=Cv(t,pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Bi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Pm(t),a.return=n,n.child=a,Sn=n,qe=null)):t=null,t===null)throw Na(n);return Yh(t)?n.lanes=32:n.lanes=536870912,null}return c=s.children,s=s.fallback,u?(Ha(),u=n.mode,c=su({mode:"hidden",children:c},u),s=vs(s,u,a,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=Yf(a),s.childLanes=Xf(t,g,a),n.memoizedState=kf,Oo(null,s)):(Fa(n),Jf(n,c))}var A=t.memoizedState;if(A!==null){var I=A.dehydrated;if(I!==null)return cy(t,n,c,g,s,I,A,a)}return u?(Ha(),u=s.fallback,c=n.mode,A=t.child,I=A.sibling,s=oa(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&1206910976,I!==null?u=oa(I,u):(u=vs(u,c,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,Oo(null,s),s=n.child,u=t.child.memoizedState,u===null?u=Yf(a):(c=u.cachePool,c!==null?(A=un._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=Xm(),u={baseLanes:u.baseLanes|a,cachePool:c}),s.memoizedState=u,s.childLanes=Xf(t,g,a),n.memoizedState=kf,Oo(t.child,s)):(Fa(n),a=t.child,t=a.sibling,a=oa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Jf(t,n){return n=su({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function su(t,n){return t=Vn(22,t,null,n),t.lanes=0,t}function ru(t,n,a){return bs(n,t.child,null,a),t=Jf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function cy(t,n,a,s,u,c,g,A){if(a)return n.flags&256?(Fa(n),n.flags&=-257,ru(t,n,A)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,null):(Ha(),c=u.fallback,g=n.mode,u=su({mode:"visible",children:u.children},g),c=vs(c,g,A,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,bs(n,t.child,null,A),u=n.child,u.memoizedState=Yf(A),u.childLanes=Xf(t,s,A),n.memoizedState=kf,Oo(null,u));if(Fa(n),Yh(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var I=s.dgst;return s=I,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,yo({value:u,source:null,stack:null})),ru(t,n,A)}if(fn||ys(t,n,A,!1),s=(A&t.childLanes)!==0,fn||s){if(za.current!==null)return ru(t,n,A);if(s=Xe,s!==null&&(u=ft(s,A),u!==0&&u!==g.retryLane))throw g.retryLane=u,_s(t,u),Xn(s,t,u),Vf;return kh(c)||Au(),ru(t,n,A)}return kh(c)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,qe=gi(c.nextSibling),Sn=n,ve=!0,Ua=null,pi=!1,t!==null&&Hm(n,t),n=Jf(n,u.children),n.flags|=134221824,n)}function s_(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),zl(t.return,n,a)}function r_(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&Jl(a)===null&&(n=t),t=t.sibling}return n}function ou(t,n,a,s,u,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=c)}function Kf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function qf(t,n,a){var s=n.pendingProps,u=s.revealOrder,c=s.tail;s=s.children;var g=bn.current;if(n.flags&128)return wo(n,g),null;var A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,wo(n,g),u==="backwards"&&t!==null?(Kf(t),gn(t,n,s,a),Kf(t)):gn(t,n,s,a),s=ve?So:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&s_(t,a,n);else if(t.tag===19)s_(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=r_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Kf(n)),ou(n,!0,u,null,c,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Jl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}ou(n,!0,a,null,c,s);break;case"together":ou(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=r_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ou(n,!1,u,a,c,s)}return n.child}function o_(t,n,a){var s=n.pendingProps;return Oa(n,n.type,s.value),gn(t,n,s.children,a),n.child}function da(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ys(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=oa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=oa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Wf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Fl(t)))}function fy(t,n,a){switch(n.tag){case 3:O(n,n.stateNode.containerInfo),Oa(n,un,t.memoizedState.cache),Es();break;case 27:case 5:rt(n);break;case 4:O(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,yf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Fa(n),n.flags|=128,null;s=ys(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?a_(t,n,a):(Fa(n),t=da(t,n,a),t!==null?t.sibling:null)}Fa(n);break;case 19:if(n.flags&128)return qf(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(ys(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return qf(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),wo(n,bn.current),s)break;return null;case 22:return n.lanes=0,Zg(t,n,a,n.pendingProps);case 24:Oa(n,un,t.memoizedState.cache)}return da(t,n,a)}function l_(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Wf(t,a)&&(n.flags&128)===0)return fn=!1,fy(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,ve&&(n.flags&1048576)!==0&&Fm(n,So,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Ts(n.elementType),n.type=t,typeof t=="function")nf(t)?(s=ws(t,s),n.tag=1,n=n_(null,n,t,s,a)):(n.tag=0,n=Qf(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=qg(null,n,t,s,a);break t}else if(u===ct){n.tag=14,n=Wg(null,n,t,s,a);break t}else if(u===$){n.tag=10,n.type=t,n=o_(null,n,a);break t}}throw n=Nt(t)||t,Error(r(306,n,""))}}return n;case 0:return Qf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=ws(s,n.pendingProps),n_(t,n,s,u,a);case 3:t:{if(O(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;u=c.element,gf(t,n),Ro(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Oa(n,un,s),s!==c.cache&&cf(n,[un],a,!0),bo(),s=g.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=i_(t,n,s,a);break t}else if(s!==u){u=fi(Error(r(424)),n),yo(u),n=i_(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,qe=gi(t.firstChild),Sn=n,ve=!0,Ua=null,pi=!0,a=Zm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Es(),s===u){n=da(t,n,a);break t}gn(t,n,s,a)}n=n.child}return n;case 26:return gr(t,n),t===null?(a=Ov(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(n.stateNode=hv(n.type,n.pendingProps,Ye.current,n)):n.memoizedState=Ov(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return rt(n),t===null&&ve&&(s=n.stateNode=wv(n.type,n.pendingProps,Ye.current),Sn=n,pi=!0,u=qe,Ka(n.type)?(Xh=u,qe=gi(s.firstChild)):qe=u),gn(t,n,n.pendingProps.children,a),gr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((u=s=qe)&&(s=sM(s,n.type,n.pendingProps,pi),s!==null?(n.stateNode=s,Sn=n,qe=gi(s.firstChild),pi=!1,u=!0):u=!1),u||Na(n)),rt(n),u=n.type,c=n.pendingProps,g=t!==null?t.memoizedProps:null,s=c.children,Ph(u,c)?s=null:g!==null&&Ph(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Af(t,n,ty,null,null,a),Lr._currentValue=u),gr(t,n),gn(t,n,s,a),n.child;case 6:return t===null&&ve&&((t=a=qe)&&(a=rM(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Sn=n,qe=null,t=!0):t=!1),t||Na(n)),null;case 13:return a_(t,n,a);case 4:return O(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=bs(n,null,s,a):gn(t,n,s,a),n.child;case 11:return qg(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,gr(t,n),gn(t,n,s,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return o_(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,Ms(n),u=Tn(u),s=s(u),n.flags|=1,gn(t,n,s,a),n.child;case 14:return Wg(t,n,n.type,n.pendingProps,a);case 15:return jg(t,n,n.type,n.pendingProps,a);case 19:return qf(t,n,a);case 31:return uy(t,n,a);case 22:return Zg(t,n,a,n.pendingProps);case 24:return Ms(n),s=Tn(un),t===null?(u=df(),u===null&&(u=Xe,c=ff(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:s,cache:u},mf(n),Oa(n,un,u)):((t.lanes&a)!==0&&(gf(t,n),Ro(n,null,null,a),bo()),u=t.memoizedState,c=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,un,s)):(s=c.cache,Oa(n,un,s),s!==u.cache&&cf(n,[un],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:ve&&Bl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:gr(t,n),gn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function pa(t){t.flags|=4}function jf(t,n,a,s,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?Pv(n,s):Pv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Q_())t.flags|=8192;else throw Cs=Ql,pf}else t.flags&=-16777217}function u_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!zv(n))if(Q_())t.flags|=8192;else throw Cs=Ql,pf}function lu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Sl():536870912,t.lanes|=n,yr|=n)}function Lo(t,n){if(!ve)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function hy(t,n,a){var s=n.pendingProps;switch(rf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ca(un),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ur(n)?pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lf())),We(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(pa(n),c!==null?(We(n),u_(n,c)):(We(n),jf(n,u,null,s,a))):c?c!==t.memoizedState?(pa(n),We(n),u_(n,c)):(We(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&pa(n),We(n),jf(n,u,t,s,a)),null;case 27:if(gt(n),a=Ye.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),n.subtreeFlags&=-33554433,null}t=Ht.current,ur(n)?Gm(n):(t=wv(u,s,a),n.stateNode=t,pa(n))}return We(n),n.subtreeFlags&=-33554433,null;case 5:if(gt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),n.subtreeFlags&=-33554433,null}if(c=Ht.current,ur(n))Gm(n);else{var g=Yo(Ye.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}c[Dt]=n,c[Xt]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;t:switch(wn(c,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&pa(n)}}return We(n),n.subtreeFlags&=-33554433,jf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ye.current,ur(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Dt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||lv(t.nodeValue,a)),t||Na(n,!0)}else t=Yo(t).createTextNode(s),t[Dt]=n,n.stateNode=t}return We(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=ur(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Dt]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),t=!1}else a=lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(r(558))}return We(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ur(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Dt]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),lu(n,n.updateQueue),We(n),null);case 4:return T(),t===null&&Nh(n.stateNode.containerInfo),n.flags|=67108864,We(n),null;case 10:return ca(n.type),We(n),null;case 19:if(Mf(n),s=n.memoizedState,s===null)return We(n),null;if(u=(n.flags&128)!==0,c=s.rendering,c===null)if(u)Lo(s,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=Jl(t),c!==null){for(n.flags|=128,Lo(s,!1),t=c.updateQueue,n.updateQueue=t,lu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Bm(a,t),a=a.sibling;return wo(n,bn.current&1|2),ve&&la(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&k()>Su&&(n.flags|=128,u=!0,Lo(s,!1),n.lanes=4194304)}else{if(!u)if(t=Jl(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,lu(n,t),Lo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!c.alternate&&!ve)return We(n),null}else 2*k()-s.renderingStartTime>Su&&a!==536870912&&(n.flags|=128,u=!0,Lo(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=k(),t.sibling=null,c=bn.current,c=u?c&1|2:c&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||ve?wo(n,c):(a=c,se(Cn,n),se(bn,a),On===null&&(On=n)),ve&&la(n,s.treeForkCount),t}return We(n),null;case 22:case 23:return ti(n),Sf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&lu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Lt(As),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(un),We(n),null;case 25:return null;case 30:return n.flags|=33554432,We(n),null}throw Error(r(156,n.tag))}function dy(t,n){switch(rf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ca(un),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return gt(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(r(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Mf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return ca(n.type),null;case 22:case 23:return ti(n),Sf(),t!==null&&Lt(As),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ca(un),null;case 25:return null;default:return null}}function c_(t,n){switch(rf(n),n.tag){case 3:ca(un),T();break;case 26:case 27:case 5:gt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Mf(n);break;case 10:ca(n.type);break;case 22:case 23:ti(n),Sf(),t!==null&&Lt(As);break;case 24:ca(un)}}function Io(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var c=a.create,g=a.inst;s=c(),g.destroy=s}a=a.next}while(a!==u)}}catch(A){ze(n,n.return,A)}}function Ga(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var c=u.next;s=c;do{if((s.tag&t)===t){var g=s.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,u=n;var I=a,Z=A;try{Z()}catch(ot){ze(u,I,ot)}}}s=s.next}while(s!==c)}}catch(ot){ze(n,n.return,ot)}}function f_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{tg(n,a)}catch(s){ze(t,t.return,s)}}}function h_(t,n,a){a.props=ws(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){ze(t,n,s)}}function zi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,c=sa(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=Ev(c)),s=u.ref;break;case 7:if(t.stateNode===null){var g=new si(t);p(t.child,!1,iM,g,void 0,void 0),t.stateNode=g}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(A){ze(t,n,A)}}function Rn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){ze(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(t,n,u)}else a.current=null}function uu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Tv(t.stateNode,n[a])}function d_(t){for(var n=t.return;n!==null&&($f(n)&&Tv(t.stateNode,n.stateNode),!Zf(n));)n=n.return}function Bo(t){for(var n=t.return;n!==null&&($f(n)&&aM(t.stateNode,n.stateNode),!Zf(n));)n=n.return}function Zf(t){return t.tag===5||t.tag===3||t.tag===27}function $f(t){return t&&t.tag===7&&t.stateNode!==null}function th(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){ze(t,t.return,u)}}function eh(t,n,a){try{var s=t.stateNode;Fy(s,t.type,a,n),s[Xt]=n}catch(u){ze(t,t.return,u)}}function p_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ka(t.type)||t.tag===4}function nh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||p_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii)),uu(t,s),De=!0;else if(u!==4&&(u===27&&(uu(t,s),s=null,Ka(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(ih(t,n,a,s),t=t.sibling;t!==null;)ih(t,n,a,s),t=t.sibling}function cu(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),uu(t,s),De=!0;else if(u!==4&&(u===27&&(uu(t,s),s=null,Ka(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(cu(t,n,a,s),t=t.sibling;t!==null;)cu(t,n,a,s),t=t.sibling}function m_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,s,a),n[Dt]=t,n[Xt]=a}catch(c){ze(t,t.return,c)}}var fu=!1,ei=null;function g_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(fu=!0)}var Fi=null;function __(){var t=Fi;return Fi=null,t}var Qn=0;function _r(t,n,a,s,u){return Qn=0,v_(t.child,n,a,s,u)}function v_(t,n,a,s,u){for(var c=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(s!==null){var A=Hh(g);s.push(A),A.view&&(c=!0)}else c||Hh(g).view&&(c=!0);fu=!0,_v(g,Qn===0?n:n+"_"+Qn,a),Qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||v_(t.child,n,a,s,u)&&(c=!0));t=t.sibling}return c}function Hi(t,n){for(;t!==null;)t.tag===5?vv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Hi(t.child,n)),t=t.sibling}function hu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(hu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ra(n.default,n.share),n!=="none"&&(_r(t,a,n,null,!1)||Hi(t.child,!1))}t=t.sibling}}function ah(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=sa(s,a),c=ra(s.default,a.paired?s.share:s.enter);c!=="none"?_r(t,u,c,null,!1)?(hu(t),a.paired||n||Tr(t,s.onEnter)):Hi(t.child,!1):hu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ah(t,n),t=t.sibling;else hu(t)}function sh(t){if(ei!==null&&ei.size!==0){var n=ei;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var c=ra(a.default,a.share);if(c!=="none"&&(_r(t,s,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,Tr(t,a.onShare)):Hi(t.child,!1)),n.delete(s),n.size===0)break}}}sh(t)}t=t.sibling}}}function rh(t){if(t.tag===30){var n=t.memoizedProps,a=sa(n,t.stateNode),s=ei!==null?ei.get(a):void 0,u=ra(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(_r(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,ei.delete(a),Tr(t,n.onShare)):Tr(t,n.onExit):Hi(t.child,!1)),ei!==null&&sh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)rh(t),t=t.sibling;else ei!==null&&sh(t)}function E_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=sa(n,t.stateNode);n=ra(n.default,n.update),t.flags&=-5,n!=="none"&&_r(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&E_(t);t=t.sibling}}function oh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Hi(t.child,!1))}oh(t)}t=t.sibling}}function du(t){if(t.tag===30)t.stateNode.paired=null,Hi(t.child,!1),oh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)du(t),t=t.sibling;else oh(t)}function S_(t){for(t=t.child;t!==null;)t.tag===30?Hi(t.child,!1):(t.subtreeFlags&33554432)!==0&&S_(t),t=t.sibling}function lh(t,n,a,s,u,c,g){for(var A=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(c!==null&&Qn<c.length){var Z=c[Qn],ot=Hh(I);(Z.view||ot.view)&&(A=!0);var _t;if(_t=(t.flags&4)===0)if(ot.clip)_t=!0;else{_t=Z.rect;var K=ot.rect;_t=_t.y!==K.y||_t.x!==K.x||_t.height!==K.height||_t.width!==K.width}_t&&(t.flags|=4),ot.abs?ot=!Z.abs:(Z=Z.rect,ot=ot.rect,ot=Z.height!==ot.height||Z.width!==ot.width),ot&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&_v(I,Qn===0?a:a+"_"+Qn,u),A&&(t.flags&4)!==0||(Fi===null&&(Fi=[]),Fi.push(I,Qn===0?s:s+"_"+Qn,n.memoizedProps)),Qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:lh(t,n.child,a,s,u,c,g)&&(A=!0));n=n.sibling}return A}function y_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=sa(a,s),c=ra(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,s=t;var A=t.child;Qn=0,u=lh(s,A,u,u,c,g,!1),(t.flags&4)!==0&&u&&Tr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&y_(t);t=t.sibling}}var yn=!1,Be=!1,Gi=!1,uh=!1,M_=typeof WeakSet=="function"?WeakSet:Set,Mn=null,Vi=!1,Po=!1,pu=!1,ch=!1;function py(t,n,a){if(t=t.containerInfo,Ih=Ir,t=Cm(t),qc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var c=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break t}var A=0,I=-1,Z=-1,ot=0,_t=0,K=t,at=null;e:for(;;){for(var Ot;K!==s||c!==0&&K.nodeType!==3||(I=A+c),K!==g||u!==0&&K.nodeType!==3||(Z=A+u),K.nodeType===3&&(A+=K.nodeValue.length),(Ot=K.firstChild)!==null;)at=K,K=Ot;for(;;){if(K===t)break e;if(at===s&&++ot===c&&(I=A),at===g&&++_t===u&&(Z=A),(Ot=K.nextSibling)!==null)break;K=at,at=K.parentNode}K=Ot}s=I===-1||Z===-1?null:{start:I,end:Z}}else s=null}s=s||{start:0,end:0}}else s=null;for(Bh={focusedElem:t,selectionRange:s},Ir=!1,a=(a&335544064)===a,Mn=n,n=a?9270:1024;Mn!==null;){if(t=Mn,a&&(s=t.deletions,s!==null))for(c=0;c<s.length;c++)a&&rh(s[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&g_(t),mu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&rh(s),mu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&g_(t),mu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Mn=s):(a&&E_(t),mu(a))}}ei=null}function mu(t){for(;Mn!==null;){var n=Mn,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var c=n.stateNode;try{var g=ws(n.type,u);a=c.getSnapshotBeforeUpdate(g,s),c.__reactInternalSnapshotBeforeUpdate=a}catch(A){ze(n,n.return,A)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Qh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Qh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=sa(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=ra(u.default,u.update),u!=="none"&&_r(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Mn=s;break}Mn=n.return}}function x_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(t,a),s&4&&Io(5,a);break;case 1:if(Qi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){ze(a,a.return,g)}else{var u=ws(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){ze(a,a.return,g)}}s&64&&f_(a),s&512&&zi(a,a.return);break;case 3:if(Qi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{tg(t,n)}catch(g){ze(a,a.return,g)}}break;case 27:n===null&&s&4&&m_(a);case 26:case 5:Qi(t,a),n===null&&s&4&&th(a),s&512&&zi(a,a.return);break;case 12:Qi(t,a);break;case 31:Qi(t,a),s&4&&b_(t,a);break;case 13:Qi(t,a),s&4&&R_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Cy.bind(null,a),oM(t,a))));break;case 22:if(s=a.memoizedState!==null||yn,!s){var c=n!==null&&n.memoizedState!==null||Be;n=yn,u=Be,yn=s,(Be=c)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ai(t,a,s)):Qi(t,a),yn=n,Be=u}break;case 30:Qi(t,a),s&512&&zi(a,a.return);break;case 7:s&512&&zi(a,a.return);default:Qi(t,a)}}function fh(t,n){for(t=t.child;t!==null;)A_(t,n),t=t.sibling}function A_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,g=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(I){ze(t,t.return,I)}hh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,De=!0}catch(I){ze(t,t.return,I)}break;case 18:try{var A=t.stateNode;n?gv(A,!0):gv(t.stateNode,!1)}catch(I){ze(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&fh(t,n);break;default:fh(t,n)}}function hh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:A_(a,s);break t;case 22:a.memoizedState===null&&hh(a,s);break t;default:hh(a,s)}}t=t.sibling}}function T_(t){var n=t.alternate;n!==null&&(t.alternate=null,T_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ne(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ze=null,kn=!1;function Mi(t,n,a){for(a=a.child;a!==null;)C_(t,n,a),a=a.sibling}function C_(t,n,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(xe,a)}catch{}switch(a.tag){case 26:Be||Rn(a,n),Mi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Be&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||Rn(a,n),Bo(a);var s=Ze,u=kn;Ka(a.type)&&(Ze=a.stateNode,kn=!1),Mi(t,n,a),Dv(a.stateNode,a.type,a.memoizedProps),Ze=s,kn=u;break;case 5:Be||Rn(a,n),Bo(a);case 6:if(a.tag===6&&Bo(a),s=Ze,u=kn,Ze=null,Mi(t,n,a),Ze=s,kn=u,Ze!==null)if(kn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode),De=!0}catch(c){ze(a,n,c)}else try{Ze.removeChild(a.stateNode),De=!0}catch(c){ze(a,n,c)}break;case 18:Ze!==null&&(kn?(t=Ze,mv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Br(t)):mv(Ze,a.stateNode));break;case 4:s=Ze,u=kn,Ze=a.stateNode.containerInfo,kn=!0,Mi(t,n,a),Ze=s,kn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),Be||Ga(4,a,n),Mi(t,n,a);break;case 1:Be||(Rn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&h_(a,n,s)),Mi(t,n,a);break;case 21:Mi(t,n,a);break;case 22:Be=(s=Be)||a.memoizedState!==null,Mi(t,n,a),Be=s;break;case 30:Rn(a,n),Mi(t,n,a);break;case 7:Be||Rn(a,n),Mi(t,n,a);break;default:Mi(t,n,a)}}function b_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Br(t)}catch(a){ze(n,n.return,a)}}}function R_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Br(t)}catch(a){ze(n,n.return,a)}}function my(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new M_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new M_),n;default:throw Error(r(435,t.tag))}}function gu(t,n){var a=my(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=by.bind(null,t,s);s.then(u,u)}})}function Fn(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var c=s[u],g=t,A=n,I=A;t:for(;I!==null;){switch(I.tag){case 27:if(Ka(I.type)){Ze=I.stateNode,kn=!1;break t}break;case 5:Ze=I.stateNode,kn=!1;break t;case 3:case 4:Ze=I.stateNode.containerInfo,kn=!0;break t}I=I.return}if(Ze===null)throw Error(r(160));C_(g,A,c),Ze=null,kn=!1,g=c.alternate,g!==null&&(g.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)w_(n,t,a),n=n.sibling}var xi=null;function w_(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var g=s[c];g.ref.impl=g.nextImpl}Fn(n,t,a),Hn(t),u&4&&(Ga(3,t,t.return),Io(3,t),Ga(5,t,t.return));break;case 1:Fn(n,t,a),Hn(t),u&512&&(Be||s===null||Rn(s,s.return)),u&64&&yn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=xi,Fn(n,t,a),Hn(t),u&512&&(Be||s===null||Rn(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(yn)t.stateNode=hv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[Ne]||s[Dt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),wn(s,n,a),s[Dt]=t,we(s),n=s;break t;case"link":if(c=Bv("link","href",u).get(n+(a.href||""))){for(g=0;g<c.length;g++)if(s=c[g],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(g,1);break e}}s=u.createElement(n),wn(s,n,a),u.head.appendChild(s);break;case"meta":if(c=Bv("meta","content",u).get(n+(a.content||""))){for(g=0;g<c.length;g++)if(s=c[g],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(g,1);break e}}s=u.createElement(n),wn(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[Dt]=t,we(s),n=s}t.stateNode=n}else yn||Wh(c,t.type,t.stateNode);else t.stateNode=Iv(c,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||Be||n.parentNode.removeChild(n)):u.count--,a===null?yn||Wh(c,t.type,t.stateNode):Iv(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&eh(t,t.memoizedProps,s.memoizedProps);break;case 27:Fn(n,t,a),Hn(t),u&512&&(Be||s===null||Rn(s,s.return)),s!==null&&u&4&&eh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(c=Gi,Gi=!1,Fn(n,t,a),Gi=c,Hn(t),u&512&&(Be||s===null||Rn(s,s.return)),t.flags&32){n=t.stateNode;try{$s(n,""),De=!0}catch(ot){ze(t,t.return,ot)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,eh(t,n,s!==null?s.memoizedProps:n)),u&1024&&(uh=!0);break;case 6:if(Fn(n,t,a),Hn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,De=!0}catch(ot){ze(t,t.return,ot)}}break;case 3:if(De=!1,Uu=null,c=xi,xi=Xo(n.containerInfo),Fn(n,t,a),xi=c,Hn(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Br(n.containerInfo)}catch(ot){ze(t,t.return,ot)}uh&&(uh=!1,D_(t)),De=!1;break;case 4:u=Gi,Gi=yn,s=Wp(),c=xi,xi=Xo(t.stateNode.containerInfo),Fn(n,t,a),Hn(t),xi=c,De&&Po&&(pu=!0),De=s,Gi=u;break;case 12:Fn(n,t,a),Hn(t);break;case 31:Fn(n,t,a),Hn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,gu(t,n)));break;case 13:Fn(n,t,a),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Eu=k()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,gu(t,n)));break;case 22:c=t.memoizedState!==null,g=s!==null&&s.memoizedState!==null;var A=yn,I=Be,Z=Gi;yn=A||c,Gi=Z||c,Be=I||g,Fn(n,t,a),Be=I,Gi=Z,yn=A,Hn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||s===null||g||yn||Be||(n=g||Be,a=yn,s=Be,yn=c||yn,Be=n,Va(t,2),yn=a,Be=s),!c&&Gi||fh(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,gu(t,a))));break;case 19:Fn(n,t,a),Hn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,gu(t,n)));break;case 30:u&512&&(Be||s===null||Rn(s,s.return)),u=Wp(),c=Po,g=(a&335544064)===a,A=t.memoizedProps,Po=g&&ra(A.default,A.update)!=="none",Fn(n,t,a),Hn(t),g&&s!==null&&De&&(t.flags|=4),Po=c,De=u;break;case 21:break;case 7:u&512&&(Be||s===null||Rn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Fn(n,t,a),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(p_(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if($f(u)){var c=u.stateNode;s===null?s=[c]:s.push(c)}if(Zf(u))break;u=u.return}var g=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var A=a.stateNode,I=nh(t);cu(t,I,A,g);break;case 5:var Z=a.stateNode;a.flags&32&&($s(Z,""),a.flags&=-33);var ot=nh(t);cu(t,ot,Z,g);break;case 3:case 4:var _t=a.stateNode.containerInfo,K=nh(t);ih(t,K,_t,g);break;default:throw Error(r(161))}}catch(at){ze(t,t.return,at)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function D_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;D_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ir=!0,n.reset(),Ir=!1),t=t.sibling}}function vr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)U_(n,t),n=n.sibling;else y_(n)}function U_(t,n){var a=t.alternate;if(a===null)ah(t,!1);else switch(t.tag){case 3:if(ch=Vi=!1,__(),vr(n,t),!Vi&&!pu){if(t=Fi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];vv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ch=!0}Fi=null;break;case 5:vr(n,t);break;case 4:s=Vi,Vi=!1,vr(n,t),Vi&&(pu=!0),Vi=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?ah(t,!1):vr(n,t));break;case 30:s=Vi,u=__(),Vi=!1,vr(n,t),Vi&&(t.flags|=4);var c=t.memoizedProps,g=t.stateNode;n=sa(c,g),g=sa(a.memoizedProps,g);var A=ra(c.default,c.update);A==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Qn=0,n=lh(t,a,n,g,A,c,!0),Qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Tr(t,t.memoizedProps.onUpdate),Fi=u):u!==null&&(u.push.apply(u,Fi),Fi=u),Vi=(t.flags&32)!==0?!0:s;break;default:vr(n,t)}}function Qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)x_(t,n.alternate,n),n=n.sibling}function Va(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:Ga(4,a,a.return),Va(a,s);break;case 1:Rn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&h_(a,a.return,u),Va(a,s);break;case 27:(s&2)!==0&&Dv(a.stateNode,a.type,a.memoizedProps);case 5:Rn(a,a.return),a.tag!==5&&a.tag!==27||Bo(a),Va(a,s);break;case 6:Bo(a);break;case 26:Rn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Be||u.parentNode.removeChild(u),Va(a,s);break;case 22:a.memoizedState===null&&Va(a,s);break;case 30:Rn(a,a.return),Va(a,s);break;case 7:Rn(a,a.return);default:Va(a,s)}t=t.sibling}}function Ai(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,c=n,g=c.flags,A=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ai(u,c,a),Io(4,c);break;case 1:if(Ai(u,c,a),s=c,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){ze(s,s.return,ot)}if(s=c,u=s.updateQueue,u!==null){var I=s.stateNode;try{var Z=u.shared.hiddenCallbacks;if(Z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<Z.length;u++)$m(Z[u],I)}catch(ot){ze(s,s.return,ot)}}A&&g&64&&f_(c),zi(c,c.return);break;case 27:(a&2)!==0&&m_(c);case 5:c.tag!==5&&c.tag!==27||d_(c),Ai(u,c,a),A&&s===null&&g&4&&th(c),zi(c,c.return);break;case 6:d_(c);break;case 26:I=c.stateNode,c.memoizedState!==null||I===null||yn||Wh(Xo(I.ownerDocument),c.type,I),Ai(u,c,a),A&&s===null&&g&4&&th(c),zi(c,c.return);break;case 12:Ai(u,c,a);break;case 31:Ai(u,c,a),A&&g&4&&b_(u,c);break;case 13:Ai(u,c,a),A&&g&4&&R_(u,c);break;case 22:c.memoizedState===null&&Ai(u,c,a),zi(c,c.return);break;case 30:Ai(u,c,a),zi(c,c.return);break;case 7:zi(c,c.return);default:Ai(u,c,a)}n=n.sibling}}function dh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Mo(a))}function ph(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t))}function mi(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)N_(t,n,a,s),n=n.sibling;else u&&S_(n)}function N_(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&du(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:mi(t,n,a,s),c&2048&&Io(9,n);break;case 1:mi(t,n,a,s);break;case 3:mi(t,n,a,s),u&&ch&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Mo(c)));break;case 12:if(c&2048){mi(t,n,a,s),c=n.stateNode;try{var g=n.memoizedProps,A=g.id,I=g.onPostCommit;typeof I=="function"&&I(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(Z){ze(n,n.return,Z)}}else mi(t,n,a,s);break;case 31:mi(t,n,a,s);break;case 13:mi(t,n,a,s);break;case 23:break;case 22:g=n.stateNode,A=n.alternate,n.memoizedState!==null?(u&&A!==null&&A.memoizedState===null&&du(A),g._visibility&2?mi(t,n,a,s):zo(t,n)):(u&&A!==null&&A.memoizedState!==null&&du(n),g._visibility&2?mi(t,n,a,s):(g._visibility|=2,Er(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),c&2048&&dh(A,n);break;case 24:mi(t,n,a,s),c&2048&&ph(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&(Hi(c.child,!0),Hi(n.child,!0))),mi(t,n,a,s);break;default:mi(t,n,a,s)}}function Er(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,g=n,A=a,I=s,Z=g.flags;switch(g.tag){case 0:case 11:case 15:Er(c,g,A,I,u),Io(8,g);break;case 23:break;case 22:var ot=g.stateNode;g.memoizedState!==null?ot._visibility&2?Er(c,g,A,I,u):zo(c,g):(ot._visibility|=2,Er(c,g,A,I,u)),u&&Z&2048&&dh(g.alternate,g);break;case 24:Er(c,g,A,I,u),u&&Z&2048&&ph(g.alternate,g);break;default:Er(c,g,A,I,u)}n=n.sibling}}function zo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:zo(a,s),u&2048&&dh(s.alternate,s);break;case 24:zo(a,s),u&2048&&ph(s.alternate,s);break;default:zo(a,s)}n=n.sibling}}var Ds=8192;function Us(t,n,a){if(t.subtreeFlags&Ds)for(t=t.child;t!==null;)O_(t,n,a),t=t.sibling}function O_(t,n,a){switch(t.tag){case 26:Us(t,n,a),t.flags&Ds&&(t.memoizedState!==null?yM(a,xi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Hv(a,t)));break;case 5:Us(t,n,a),t.flags&Ds&&(t=t.stateNode,(n&335544128)===n&&Hv(a,t));break;case 3:case 4:var s=xi;xi=Xo(t.stateNode.containerInfo),Us(t,n,a),xi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Ds,Ds=16777216,Us(t,n,a),Ds=s):Us(t,n,a));break;case 30:if((t.flags&Ds)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,ei===null&&(ei=new Map),ei.set(s,u)}Us(t,n,a);break;default:Us(t,n,a)}}function L_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,B_(s,t)}L_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)I_(t),t=t.sibling}function I_(t){switch(t.tag){case 0:case 11:case 15:Fo(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:Fo(t);break;case 12:Fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,_u(t)):Fo(t);break;default:Fo(t)}}function _u(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,B_(s,t)}L_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),_u(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,_u(n));break;default:_u(n)}t=t.sibling}}function B_(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Mo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Mn=s;else t:for(a=t;Mn!==null;){s=Mn;var u=s.sibling,c=s.return;if(T_(s),s===a){Mn=null;break t}if(u!==null){u.return=c,Mn=u;break t}Mn=c}}}var gy={getCacheForType:function(t){var n=Tn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(un).controller.signal}},_y=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,Se=null,Ae=0,Pe=0,ni=null,Qa=!1,Sr=!1,mh=!1,ma=0,sn=0,ka=0,Ns=0,vu=0,ii=0,yr=0,Ho=null,Yn=null,gh=!1,Eu=0,P_=0,Su=1/0,yu=null,Ya=null,tn=0,Ti=null,Os=null,ki=0,_h=0,vh=null,z_=null,Mr=null,xr=null,Ar=null,Go=0,Mu=null;function ai(){return(Le&2)!==0&&Ae!==0?Ae&-Ae:xt.T!==null?Rh():At()}function F_(){if(ii===0)if((Ae&536870912)===0||ve){var t=na;na<<=1,(na&3932160)===0&&(na=262144),ii=t}else ii=536870912;return t=Cn.current,t!==null&&(t.flags|=32),ii}function Tr(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=Ev(sa(t.memoizedProps,a))),xr===null&&(xr=[]),xr.push(n.bind(null,s))}}function Xn(t,n,a){(t===Xe&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(Cr(t,0),Xa(t,Ae,ii,!1)),ps(t,a),((Le&2)===0||t!==Xe)&&(t===Xe&&((Le&2)===0&&(Ns|=a),sn===4&&Xa(t,Ae,ii,!1)),Yi(t))}function H_(t,n,a){if((Le&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ca(t,n),u=s?Sy(t,n):Sh(t,n,!0),c=s;do{if(u===0){Sr&&!s&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!vy(a)){u=Sh(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;u=Ho;var I=A.current.memoizedState.isDehydrated;if(I&&(Cr(A,g).flags|=256),g=Sh(A,g,!1),g!==2&&g!==6){if(mh&&!I){A.errorRecoveryDisabledLanes|=c,Ns|=c,u=4;break t}c=Yn,Yn=u,c!==null&&(Yn===null?Yn=c:Yn.push.apply(Yn,c))}u=g}if(c=!1,u!==2)continue}}if(u===1){Cr(t,0),Xa(t,n,0,!0);break}t:{switch(s=t,c=u,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Xa(s,n,ii,!Qa);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Eu+300-k(),10<u)){if(Xa(s,n,ii,!Qa),ds(s,0,!0)!==0)break t;ki=n,s.timeoutHandle=Fh(G_.bind(null,s,a,Yn,yu,gh,n,ii,Ns,yr,Qa,c,"Throttled",-0,0),u);break t}G_(s,a,Yn,yu,gh,n,ii,Ns,yr,Qa,c,null,-0,0)}}break}while(!0);Yi(t)}function G_(t,n,a,s,u,c,g,A,I,Z,ot,_t,K,at){t.timeoutHandle=-1;var Ot=n.subtreeFlags,Jt=(c&335544064)===c;if(_t=null,(Jt||Ot&8192||(Ot&16785408)===16785408)&&(_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},ei=null,O_(n,c,_t),Jt&&(Ot=_t,Jt=t.containerInfo,Jt=(Jt.nodeType===9?Jt:Jt.ownerDocument).__reactViewTransition,Jt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=qo.bind(Ot),Jt.finished.then(Ot,Ot))),Ot=(c&62914560)===c?Eu-k():(c&4194048)===c?P_-k():0,Ot=MM(_t,Ot),Ot!==null)){ki=c,t.cancelPendingCommit=Ot(q_.bind(null,t,n,c,a,s,u,g,A,I,Z,ot,_t,null,K,at)),Xa(t,c,g,!Z);return}q_(t,n,c,a,s,u,g,A,I,Z,ot,_t)}function vy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],c=u.getSnapshot;u=u.value;try{if(!$n(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,s){n=El(t,n),n&=~vu,n&=~Ns,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var c=31-Un(u),g=1<<c;s[c]=-1,u&=~g}a!==0&&b(t,a,n)}function xu(){return(Le&6)===0?(Vo(0),!1):!0}function Eh(){if(Se!==null){if(Pe===0)var t=Se.return;else t=Se,ua=Ss=null,bf(t),hr=null,To=0,t=Se;for(;t!==null;)c_(t.alternate,t),t=t.return;Se=null}}function Cr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Vy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ki=0,Eh(),Xe=t,Se=a=oa(t.current,null),Ae=n,Pe=0,ni=null,Qa=!1,Sr=Ca(t,n),mh=!1,yr=ii=vu=Ns=ka=sn=0,Yn=Ho=null,gh=!1,ma=El(t,n),Ul(),a}function V_(t,n){de=null,xt.H=nu,n===fr||n===Vl?(n=qm(),Pe=3):n===pf?(n=qm(),Pe=4):Pe=n===Vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,Se===null&&(sn=1,iu(t,fi(n,t.current)))}function Q_(){var t=Cn.current;return t===null?!0:(Ae&4194048)===Ae?On===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?t===On:!1}function k_(){var t=xt.H;return xt.H=nu,t===null?nu:t}function Y_(){var t=xt.A;return xt.A=gy,t}function Au(){sn=4,Qa||(Ae&4194048)!==Ae&&Cn.current!==null||(Sr=!0),(ka&134217727)===0&&(Ns&134217727)===0||Xe===null||Xa(Xe,Ae,ii,!1)}function Sh(t,n,a){var s=Le;Le|=2;var u=k_(),c=Y_();(Xe!==t||Ae!==n)&&(yu=null,Cr(t,n)),n=!1;var g=sn;t:do try{if(Pe!==0&&Se!==null){var A=Se,I=ni;switch(Pe){case 8:Eh(),g=6;break t;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var Z=Pe;if(Pe=0,ni=null,br(t,A,I,Z),a&&Sr){g=0;break t}break;default:Z=Pe,Pe=0,ni=null,br(t,A,I,Z)}}Ey(),g=sn;break}catch(ot){V_(t,ot)}while(!0);return n&&t.shellSuspendCounter++,ua=Ss=null,Le=s,xt.H=u,xt.A=c,Se===null&&(Xe=null,Ae=0,Ul()),g}function Ey(){for(;Se!==null;)X_(Se)}function Sy(t,n){var a=Le;Le|=2;var s=k_(),u=Y_();Xe!==t||Ae!==n?(yu=null,Su=k()+500,Cr(t,n)):Sr=Ca(t,n);t:do try{if(Pe!==0&&Se!==null){n=Se;var c=ni;e:switch(Pe){case 1:Pe=0,ni=null,br(t,n,c,1);break;case 2:case 9:if(Jm(c)){Pe=0,ni=null,J_(n);break}n=function(){Pe!==2&&Pe!==9||Xe!==t||(Pe=7),Yi(t)},c.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Jm(c)?(Pe=0,ni=null,J_(n)):(Pe=0,ni=null,br(t,n,c,7));break;case 5:var g=null;switch(Se.tag){case 26:g=Se.memoizedState;case 5:case 27:var A=Se;if(g?zv(g):A.stateNode.complete){Pe=0,ni=null;var I=A.sibling;if(I!==null)Se=I;else{var Z=A.return;Z!==null?(Se=Z,Tu(Z)):Se=null}break e}}Pe=0,ni=null,br(t,n,c,5);break;case 6:Pe=0,ni=null,br(t,n,c,6);break;case 8:Eh(),sn=6;break t;default:throw Error(r(462))}}yy();break}catch(ot){V_(t,ot)}while(!0);return ua=Ss=null,xt.H=s,xt.A=u,Le=a,Se!==null?0:(Xe=null,Ae=0,Ul(),sn)}function yy(){for(;Se!==null&&!Bt();)X_(Se)}function X_(t){var n=l_(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?Tu(t):Se=n}function J_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=e_(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=e_(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:bf(n);var s=n;s===Sn&&(ve?(Pl(s),s.tag===5&&s.stateNode!=null&&(qe=s.stateNode)):(Pl(s),ve=!0));default:c_(a,n),n=Se=Bm(n,ma),n=l_(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?Tu(t):Se=n}function br(t,n,a,s){ua=Ss=null,bf(n),hr=null,To=0;var u=n.return;try{if(ly(t,u,n,a,Ae)){sn=1,iu(t,fi(a,t.current)),Se=null;return}}catch(c){if(u!==null)throw Se=u,c;sn=1,iu(t,fi(a,t.current)),Se=null;return}n.flags&32768?(ve||s===1?t=!0:Sr||(Ae&536870912)!==0?t=!1:(Qa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Cn.current,s!==null&&s.tag===13&&(s.flags|=16384))),K_(n,t)):Tu(n)}function Tu(t){var n=t;do{if((n.flags&32768)!==0){K_(n,Qa);return}t=n.return;var a=hy(n.alternate,n,ma);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);sn===0&&(sn=5)}function K_(t,n){do{var a=dy(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);sn=6,Se=null}function q_(t,n,a,s,u,c,g,A,I,Z,ot,_t){t.cancelPendingCommit=null;do Cu();while(tn!==0);if((Le&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Xe&&(Se=Xe=null,Ae=0),Os=n,Ti=t,ki=a,vh=u,z_=s,My(t,n,a,g,A,I,_t)}}function My(t,n,a,s,u,c,g){var A=n.lanes|n.childLanes;if(_h=A,A|=tf,Uc(t,a,A,s,u,c),xr=null,(a&335544064)===a?(Ar=WS(t),s=10262):(Ar=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,Ry(Mt,function(){return Ah(),null})):(t.callbackNode=null,t.callbackPriority=0),fu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=xt.T,xt.T=null,u=Kt.p,Kt.p=2,c=Le,Le|=4;try{py(t,n,a)}finally{Le=c,Kt.p=u,xt.T=s}}tn=1,fu?Mr=Ky(g,t.containerInfo,Ar,yh,Mh,Ay,xh,Ah,xy):(yh(),Mh(),xh())}function xy(t){if(tn!==0){var n=Ti.onRecoverableError;n(t,{componentStack:null})}}function Ay(){tn===3&&(tn=0,U_(Os,Ti),tn=4)}function yh(){if(tn===1){tn=0;var t=Ti,n=Os,a=ki,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=xt.T,xt.T=null;var u=Kt.p;Kt.p=2;var c=Le;Le|=4;try{Po=pu=!1,w_(n,t,a),a=Bh;var g=Cm(t.containerInfo),A=a.focusedElem,I=a.selectionRange;if(g!==A&&A&&A.ownerDocument&&Tm(A.ownerDocument.documentElement,A)){if(I!==null&&qc(A)){var Z=I.start,ot=I.end;if(ot===void 0&&(ot=Z),"selectionStart"in A)A.selectionStart=Z,A.selectionEnd=Math.min(ot,A.value.length);else{var _t=A.ownerDocument||document,K=_t&&_t.defaultView||window;if(K.getSelection){var at=K.getSelection(),Ot=A.textContent.length,Jt=Math.min(I.start,Ot),pe=I.end===void 0?Jt:Math.min(I.end,Ot);!at.extend&&Jt>pe&&(g=pe,pe=Jt,Jt=g);var j=Am(A,Jt),Q=Am(A,pe);if(j&&Q&&(at.rangeCount!==1||at.anchorNode!==j.node||at.anchorOffset!==j.offset||at.focusNode!==Q.node||at.focusOffset!==Q.offset)){var nt=_t.createRange();nt.setStart(j.node,j.offset),at.removeAllRanges(),Jt>pe?(at.addRange(nt),at.extend(Q.node,Q.offset)):(nt.setEnd(Q.node,Q.offset),at.addRange(nt))}}}}for(_t=[],at=A;at=at.parentNode;)at.nodeType===1&&_t.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var mt=_t[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Ir=!!Ih,Bh=Ih=null}finally{Le=c,Kt.p=u,xt.T=s}}t.current=n,tn=2}}function Mh(){if(tn===2){tn=0;var t=Ti,n=Os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=xt.T,xt.T=null;var s=Kt.p;Kt.p=2;var u=Le;Le|=4;try{x_(t,n.alternate,n)}finally{Le=u,Kt.p=s,xt.T=a}}tn=3}}function xh(){if(tn===4||tn===3){tn=0;var t=Mr;Mr=null,he();var n=Ti,a=Os,s=ki,u=z_,c=(s&335544064)===s?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?tn=5:(tn=0,Os=Ti=null,W_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(Ya=null),et(s),a=a.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(xe,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=xt.T,c=Kt.p,Kt.p=2,xt.T=null;try{for(var g=n.onRecoverableError,A=0;A<u.length;A++){var I=u[A];g(I.value,{componentStack:I.stack})}}finally{xt.T=a,Kt.p=c}}if(u=xr,g=Ar,Ar=null,u!==null&&(xr=null,g===null&&(g=[]),t!==null))for(I=0;I<u.length;I++)a=(0,u[I])(g),a!==void 0&&t.finished.finally(a);(ki&3)!==0&&Cu(),Yi(n),c=n.pendingLanes,(s&261930)!==0&&(c&42)!==0?n===Mu?Go++:(Go=0,Mu=n):(Go=0,Mu=null),Vo(0)}}function W_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Mo(n)))}function Cu(){return Mr!==null&&(Mr.skipTransition(),Mr=null),yh(),Mh(),xh(),Ah()}function Ah(){if(tn!==5)return!1;var t=Ti,n=_h;_h=0;var a=et(ki),s=xt.T,u=Kt.p;try{Kt.p=32>a?32:a,xt.T=null,a=vh,vh=null;var c=Ti,g=ki;if(tn=0,Os=Ti=null,ki=0,(Le&6)!==0)throw Error(r(331));var A=Le;if(Le|=4,I_(c.current),N_(c,c.current,g,a),Le=A,Vo(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(xe,c)}catch{}return!0}finally{Kt.p=u,xt.T=s,W_(t,n)}}function j_(t,n,a){n=fi(a,n),n=Gf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(ps(t,2),Yi(t))}function ze(t,n,a){if(t.tag===3)j_(t,t,a);else for(;n!==null;){if(n.tag===3){j_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ya===null||!Ya.has(s))){t=fi(a,t),a=Jg(2),s=Pa(n,a,2),s!==null&&(Kg(a,s,n,t),ps(s,2),Yi(s));break}}n=n.return}}function Th(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new _y;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(mh=!0,u.add(a),t=Ty.bind(null,t,n,a),n.then(t,t))}function Ty(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(Ae&a)===a&&((sn===4||sn===3&&(Ae&62914560)===Ae&&300>k()-Eu)&&(Le&2)===0?Cr(t,0):vu|=a,yr===Ae&&(yr=0)),Yi(t)}function Z_(t,n){n===0&&(n=Sl()),t=_s(t,n),t!==null&&(ps(t,n),Yi(t))}function Cy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Z_(t,a)}function by(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Z_(t,a)}function Ry(t,n){return ae(t,n)}var Rr=null,wr=null,Ch=!1,bu=!1,bh=!1,Ja=0;function Yi(t){t!==wr&&t.next===null&&(wr===null?Rr=wr=t:wr=wr.next=t),bu=!0,Ch||(Ch=!0,Dy())}function Vo(t,n){if(!bh&&bu){bh=!0;do for(var a=!1,s=Rr;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var c=0;else{var g=s.suspendedLanes,A=s.pingedLanes;c=(1<<31-Un(42|t)+1)-1,c&=u&~(g&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,nv(s,c))}else c=Ae,c=ds(s,s===Xe?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Ca(s,c)||(a=!0,nv(s,c));s=s.next}while(a);bh=!1}}function wy(){$_()}function $_(){bu=Ch=!1;var t=0;Ja!==0&&Gy()&&(t=Ja);for(var n=k(),a=null,s=Rr;s!==null;){var u=s.next,c=tv(s,n);c===0?(s.next=null,a===null?Rr=u:a.next=u,u===null&&(wr=a)):(a=s,(t!==0||(c&3)!==0)&&(bu=!0)),s=u}tn!==0&&tn!==5||Vo(t),Ja!==0&&(Ja=0)}function tv(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-Un(c),A=1<<g,I=u[g];I===-1?((A&a)===0||(A&s)!==0)&&(u[g]=Dc(A,n)):I<=n&&(t.expiredLanes|=A),c&=~A}if(n=Xe,a=Ae,a=ds(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&jt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ca(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&jt(s),et(a)){case 2:case 8:a=kt;break;case 32:a=Mt;break;case 268435456:a=qt;break;default:a=Mt}return s=ev.bind(null,t),a=ae(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&jt(s),t.callbackPriority=2,t.callbackNode=null,2}function ev(t,n){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Cu()&&t.callbackNode!==a)return null;var s=Ae;return s=ds(t,t===Xe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(H_(t,s,n),tv(t,k()),t.callbackNode!=null&&t.callbackNode===a?ev.bind(null,t):null)}function nv(t,n){if(Cu())return null;H_(t,n,!0)}function Dy(){Qy(function(){(Le&6)!==0?ae(Ut,wy):$_()})}function Rh(){if(Ja===0){var t=xs;t===0&&(t=fs,fs<<=1,(fs&261888)===0&&(fs=256)),Ja=t}return Ja}function iv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xl(t)}function Uy(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var c=iv((u[Xt]||null).action),g=s.submitter;g&&(n=(n=g[Xt]||null)?iv(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var A=new bl("action","action",null,s,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ja!==0){var I=new FormData(u,g);Bf(a,{pending:!0,data:I,method:u.method,action:c},null,I)}}else typeof c=="function"&&(A.preventDefault(),I=new FormData(u,g),Bf(a,{pending:!0,data:I,method:u.method,action:c},c,I))},currentTarget:u}]})}}for(var wh=0;wh<$c.length;wh++){var Dh=$c[wh],Ny=Dh.toLowerCase(),Oy=Dh[0].toUpperCase()+Dh.slice(1);yi(Ny,"on"+Oy)}yi(wm,"onAnimationEnd"),yi(Dm,"onAnimationIteration"),yi(Um,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(VS,"onTransitionRun"),yi(QS,"onTransitionStart"),yi(kS,"onTransitionCancel"),yi(Nm,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qo));function av(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var g=s.length-1;0<=g;g--){var A=s[g],I=A.instance,Z=A.currentTarget;if(A=A.listener,I!==c&&u.isPropagationStopped())break t;c=A,u.currentTarget=Z;try{c(u)}catch(ot){Dl(ot)}u.currentTarget=null,c=I}else for(g=0;g<s.length;g++){if(A=s[g],I=A.instance,Z=A.currentTarget,A=A.listener,I!==c&&u.isPropagationStopped())break t;c=A,u.currentTarget=Z;try{c(u)}catch(ot){Dl(ot)}u.currentTarget=null,c=I}}}}function ye(t,n){var a=n[ee];a===void 0&&(a=n[ee]=new Set);var s=t+"__bubble";a.has(s)||(sv(n,t,2,!1),a.add(s))}function Uh(t,n,a){var s=0;n&&(s|=4),sv(a,t,s,n)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function Nh(t){if(!t[Ru]){t[Ru]=!0,Ke.forEach(function(a){a!=="selectionchange"&&(Ly.has(a)||Uh(a,!1,t),Uh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ru]||(n[Ru]=!0,Uh("selectionchange",!1,n))}}function sv(t,n,a,s){switch(Kv(n)){case 2:var u=CM;break;case 8:u=bM;break;default:u=Zh}a=u.bind(null,n,a,t),u=void 0,!Fc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Oh(t,n,a,s,u){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var A=s.stateNode.containerInfo;if(A===u)break;if(g===4)for(g=s.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;A!==null;){if(g=Oe(A),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){s=c=g;continue t}A=A.parentNode}}s=s.return}sm(function(){var Z=c,ot=Pc(a),_t=[];t:{var K=Om.get(t);if(K!==void 0){var at=bl,Ot=t;switch(t){case"keypress":if(Tl(a)===0)break t;case"keydown":case"keyup":at=vS;break;case"focusin":Ot="focus",at=Qc;break;case"focusout":Ot="blur",at=Qc;break;case"beforeblur":case"afterblur":at=Qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=rS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=xS;break;case wm:case Dm:case Um:at=uS;break;case Nm:at=TS;break;case"scroll":case"scrollend":at=aS;break;case"wheel":at=bS;break;case"copy":case"cut":case"paste":at=fS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=cm;break;case"submit":at=yS;break;case"toggle":case"beforetoggle":at=wS}var Jt=(n&4)!==0,pe=!Jt&&(t==="scroll"||t==="scrollend"),j=Jt?K!==null?K+"Capture":null:K;Jt=[];for(var Q=Z,nt;Q!==null;){var mt=Q;if(nt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||nt===null||j===null||(mt=co(Q,j),mt!=null&&Jt.push(ko(Q,mt,nt))),pe)break;Q=Q.return}0<Jt.length&&(K=new at(K,Ot,null,a,ot),_t.push({event:K,listeners:Jt}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",K=t==="mouseout"||t==="pointerout",at&&a!==Bc&&(Ot=a.relatedTarget||a.fromElement)&&(Oe(Ot)||Ot[ie]))break t;(K||at)&&(Ot=ot.window===ot?ot:(at=ot.ownerDocument)?at.defaultView||at.parentWindow:window,K?(at=a.relatedTarget||a.toElement,K=Z,at=at?Oe(at):null,at!==null&&(pe=f(at),Jt=at.tag,at!==pe||Jt!==5&&Jt!==27&&Jt!==6)&&(at=null)):(K=null,at=Z),K!==at&&(Jt=lm,mt="onMouseLeave",j="onMouseEnter",Q="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=cm,mt="onPointerLeave",j="onPointerEnter",Q="pointer"),pe=K==null?Ot:mn(K),nt=at==null?Ot:mn(at),Ot=new Jt(mt,Q+"leave",K,a,ot),Ot.target=pe,Ot.relatedTarget=nt,mt=null,Oe(ot)===Z&&(Jt=new Jt(j,Q+"enter",at,a,ot),Jt.target=nt,Jt.relatedTarget=pe,mt=Jt),pe=mt,Jt=K&&at?G(K,at,Iy):null,K!==null&&rv(_t,Ot,K,Jt,!1),at!==null&&pe!==null&&rv(_t,pe,at,Jt,!0)))}t:{if(K=Z?mn(Z):window,at=K.nodeName&&K.nodeName.toLowerCase(),at==="select"||at==="input"&&K.type==="file")var Gt=vm;else if(gm(K))if(Em)Gt=FS;else{Gt=PS;var Te=BS}else at=K.nodeName,!at||at.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?Z&&Ic(Z.elementType)&&(Gt=vm):Gt=zS;if(Gt&&(Gt=Gt(t,Z))){_m(_t,Gt,a,ot);break t}Te&&Te(t,K,Z)}switch(Te=Z?mn(Z):window,t){case"focusin":(gm(Te)||Te.contentEditable==="true")&&(ir=Te,Wc=Z,Eo=null);break;case"focusout":Eo=Wc=ir=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,bm(_t,a,ot);break;case"selectionchange":if(GS)break;case"keydown":case"keyup":bm(_t,a,ot)}var te;if(Yc)t:{switch(t){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else nr?pm(t,a)&&(re="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(fm&&a.locale!=="ko"&&(nr||re!=="onCompositionStart"?re==="onCompositionEnd"&&nr&&(te=rm()):(Ra=ot,Hc="value"in Ra?Ra.value:Ra.textContent,nr=!0)),Te=wu(Z,re),0<Te.length&&(re=new um(re,t,null,a,ot),_t.push({event:re,listeners:Te}),te?re.data=te:(te=mm(a),te!==null&&(re.data=te)))),(te=US?NS(t,a):OS(t,a))&&(re=wu(Z,"onBeforeInput"),0<re.length&&(Te=new um("onBeforeInput","beforeinput",null,a,ot),_t.push({event:Te,listeners:re}),Te.data=te)),Uy(_t,t,Z,a,ot)}av(_t,n)})}function ko(t,n,a){return{instance:t,listener:n,currentTarget:a}}function wu(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=co(t,a),u!=null&&s.unshift(ko(t,u,c)),u=co(t,n),u!=null&&s.push(ko(t,u,c))),t.tag===3)return s;t=t.return}return[]}function Iy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function rv(t,n,a,s,u){for(var c=n._reactName,g=[];a!==null&&a!==s;){var A=a,I=A.alternate,Z=A.stateNode;if(A=A.tag,I!==null&&I===s)break;A!==5&&A!==26&&A!==27||Z===null||(I=Z,u?(Z=co(a,c),Z!=null&&g.unshift(ko(a,Z,I))):u||(Z=co(a,c),Z!=null&&g.push(ko(a,Z,I)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var By=/\r\n?/g,Py=/\u0000|\uFFFD/g;function ov(t){return(typeof t=="string"?t:""+t).replace(By,`
`).replace(Py,"")}function lv(t,n){return n=ov(n),ov(t)===n}function Fe(t,n,a,s,u,c){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||$s(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&$s(t,""+s);else return;break;case"className":Ml(t,"class",s);break;case"tabIndex":Ml(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ml(t,a,s);break;case"style":im(t,s,c);return;case"data":if(n!=="object"){Ml(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=xl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Fe(t,n,"name",u.name,u,null),Fe(t,n,"formEncType",u.formEncType,u,null),Fe(t,n,"formMethod",u.formMethod,u,null),Fe(t,n,"formTarget",u.formTarget,u,null)):(Fe(t,n,"encType",u.encType,u,null),Fe(t,n,"method",u.method,u,null),Fe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=xl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ii);return;case"onScroll":s!=null&&ye("scroll",t);return;case"onScrollEnd":s!=null&&ye("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=xl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ye("beforetoggle",t),ye("toggle",t),yl(t,"popover",s);break;case"xlinkActuate":ia(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ia(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ia(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ia(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ia(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ia(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ia(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ia(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ia(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":yl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=nS.get(a)||a,yl(t,a,s);else return}De=!0}function Lh(t,n,a,s,u,c){switch(a){case"style":im(t,s,c);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")$s(t,s);else if(typeof s=="number"||typeof s=="bigint")$s(t,""+s);else return;break;case"onScroll":s!=null&&ye("scroll",t);return;case"onScrollEnd":s!=null&&ye("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Ii);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Bn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[Xt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,s,u);break t}De=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):yl(t,a,s)}return}De=!0}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var s=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,c,g,a,null)}}u&&Fe(t,n,"srcSet",a.srcSet,a,null),s&&Fe(t,n,"src",a.src,a,null);return;case"input":ye("invalid",t);var A=c=g=u=null,I=null,Z=null;for(s in a)if(a.hasOwnProperty(s)){var ot=a[s];if(ot!=null)switch(s){case"name":u=ot;break;case"type":g=ot;break;case"checked":I=ot;break;case"defaultChecked":Z=ot;break;case"value":c=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:Fe(t,n,s,ot,a,null)}}$p(t,c,A,I,Z,g,u,!1);return;case"select":ye("invalid",t),s=g=c=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":c=A;break;case"defaultValue":g=A;break;case"multiple":s=A;default:Fe(t,n,u,A,a,null)}n=c,a=g,t.multiple=!!s,n!=null?Zs(t,!!s,n,!1):a!=null&&Zs(t,!!s,a,!0);return;case"textarea":ye("invalid",t),c=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":s=A;break;case"defaultValue":u=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Fe(t,n,g,A,a,null)}em(t,s,u,c);return;case"option":for(I in a)a.hasOwnProperty(I)&&(s=a[I],s!=null)&&(I==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Fe(t,n,I,s,a,null));return;case"dialog":ye("beforetoggle",t),ye("toggle",t),ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(s=0;s<Qo.length;s++)ye(Qo[s],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(s=a[Z],s!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,Z,s,a,null)}return;default:if(Ic(n)){for(ot in a)a.hasOwnProperty(ot)&&(s=a[ot],s!==void 0&&Lh(t,n,ot,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Fe(t,n,A,s,a,null))}var zy={};function Fy(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,g=null,A=null,I=null,Z=null,ot=null;for(at in a){var _t=a[at];if(a.hasOwnProperty(at)&&_t!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":I=_t;default:s.hasOwnProperty(at)||Fe(t,n,at,null,s,_t)}}for(var K in s){var at=s[K];if(_t=a[K],s.hasOwnProperty(K)&&(at!=null||_t!=null))switch(K){case"type":at!==_t&&(De=!0),c=at;break;case"name":at!==_t&&(De=!0),u=at;break;case"checked":at!==_t&&(De=!0),Z=at;break;case"defaultChecked":at!==_t&&(De=!0),ot=at;break;case"value":at!==_t&&(De=!0),g=at;break;case"defaultValue":at!==_t&&(De=!0),A=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==_t&&Fe(t,n,K,at,s,_t)}}Oc(t,g,A,I,Z,ot,c,u);return;case"select":at=g=A=K=null;for(c in a)if(I=a[c],a.hasOwnProperty(c)&&I!=null)switch(c){case"value":break;case"multiple":at=I;default:s.hasOwnProperty(c)||Fe(t,n,c,null,s,I)}for(u in s)if(c=s[u],I=a[u],s.hasOwnProperty(u)&&(c!=null||I!=null))switch(u){case"value":c!==I&&(De=!0),K=c;break;case"defaultValue":c!==I&&(De=!0),A=c;break;case"multiple":c!==I&&(De=!0),g=c;default:c!==I&&Fe(t,n,u,c,s,I)}n=A,a=g,s=at,K!=null?Zs(t,!!a,K,!1):!!s!=!!a&&(n!=null?Zs(t,!!a,n,!0):Zs(t,!!a,a?[]:"",!1));return;case"textarea":at=K=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Fe(t,n,A,null,s,u)}for(g in s)if(u=s[g],c=a[g],s.hasOwnProperty(g)&&(u!=null||c!=null))switch(g){case"value":u!==c&&(De=!0),K=u;break;case"defaultValue":u!==c&&(De=!0),at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==c&&Fe(t,n,g,u,s,c)}tm(t,K,at);return;case"option":for(var Ot in a)K=a[Ot],a.hasOwnProperty(Ot)&&K!=null&&!s.hasOwnProperty(Ot)&&(Ot==="selected"?t.selected=!1:Fe(t,n,Ot,null,s,K));for(I in s)K=s[I],at=a[I],s.hasOwnProperty(I)&&K!==at&&(K!=null||at!=null)&&(I==="selected"?(K!==at&&(De=!0),t.selected=K&&typeof K!="function"&&typeof K!="symbol"):Fe(t,n,I,K,s,at));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)K=a[Jt],a.hasOwnProperty(Jt)&&K!=null&&!s.hasOwnProperty(Jt)&&Fe(t,n,Jt,null,s,K);for(Z in s)if(K=s[Z],at=a[Z],s.hasOwnProperty(Z)&&K!==at&&(K!=null||at!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(r(137,n));break;default:Fe(t,n,Z,K,s,at)}return;default:if(Ic(n)){for(var pe in a)K=a[pe],a.hasOwnProperty(pe)&&K!==void 0&&!s.hasOwnProperty(pe)&&Lh(t,n,pe,void 0,s,K);for(ot in s)K=s[ot],at=a[ot],!s.hasOwnProperty(ot)||K===at||K===void 0&&at===void 0||Lh(t,n,ot,K,s,at);return}}for(var j in a)K=a[j],a.hasOwnProperty(j)&&K!=null&&!s.hasOwnProperty(j)&&Fe(t,n,j,null,s,K);for(_t in s)K=s[_t],at=a[_t],!s.hasOwnProperty(_t)||K===at||K==null&&at==null||Fe(t,n,_t,K,s,at)}function uv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],c=u.transferSize,g=u.initiatorType,A=u.duration;if(c&&A&&uv(g)){for(g=0,A=u.responseEnd,s+=1;s<a.length;s++){var I=a[s],Z=I.startTime;if(Z>A)break;var ot=I.transferSize,_t=I.initiatorType;ot&&uv(_t)&&(I=I.responseEnd,g+=ot*(I<A?1:(A-Z)/(I-Z)))}if(--s,n+=8*(c+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ih=null,Bh=null;function Yo(t){return t.nodeType===9?t:t.ownerDocument}function cv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function hv(t,n,a,s){return a=Yo(a).createElement(t),a[Dt]=s,a[Xt]=n,wn(a,t,n),we(a),a}function Ph(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zh=null;function Gy(){var t=window.event;return t&&t.type==="popstate"?t===zh?!1:(zh=t,!0):(zh=null,!1)}var Fh=typeof setTimeout=="function"?setTimeout:void 0,Vy=typeof clearTimeout=="function"?clearTimeout:void 0,dv=typeof Promise=="function"?Promise:void 0,pv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Fh,Qy=typeof queueMicrotask=="function"?queueMicrotask:typeof dv<"u"?function(t){return dv.resolve(null).then(t).catch(ky)}:Fh;function ky(t){setTimeout(function(){throw t})}function Ka(t){return t==="head"}function mv(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Br(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Jh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Jh(a);for(var c=a.firstChild;c;){var g=c.nextSibling,A=c.nodeName;c[Ne]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=g}}else a==="body"&&Jh(t.ownerDocument.body);a=u}while(a);Br(n)}function gv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function _v(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function vv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Yy(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Hh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Yy(n,a,t)}function Xy(t){return t.documentElement.clientHeight}function Jy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Ky(t,n,a,s,u,c,g,A,I){var Z=n.nodeType===9?n:n.ownerDocument;try{var ot=Z.startViewTransition({update:function(){var K=Z.defaultView,at=K.navigation&&K.navigation.transition,Ot=Z.fonts.status;s();var Jt=[];if(Ot==="loaded"&&(Xy(Z),Z.fonts.status==="loading"&&Jt.push(Z.fonts.ready)),Ot=Jt.length,t!==null)for(var pe=t.suspenseyImages,j=0,Q=0;Q<pe.length;Q++){var nt=pe[Q];if(!nt.complete){var mt=nt.getBoundingClientRect();if(0<mt.bottom&&0<mt.right&&mt.top<K.innerHeight&&mt.left<K.innerWidth){if(j+=Fv(nt),j>Nu){Jt.length=Ot;break}nt=new Promise(Jy.bind(nt)),Jt.push(nt)}}}if(0<Jt.length)return K=Promise.race([Promise.all(Jt),new Promise(function(Gt){return setTimeout(Gt,500)})]).then(u,u),(at?Promise.allSettled([at.finished,K]):K).then(c,c);if(u(),at)return at.finished.then(c,c);c()},types:a});Z.__reactViewTransition=ot;var _t=[];return ot.ready.then(function(){for(var K=Z.documentElement.getAnimations({subtree:!0}),at=0;at<K.length;at++){var Ot=K[at],Jt=Ot.effect,pe=Jt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){_t.push(Ot),Ot=Jt.getKeyframes();for(var j=pe=void 0,Q=!0,nt=0;nt<Ot.length;nt++){var mt=Ot[nt],Gt=mt.width;if(pe===void 0)pe=Gt;else if(pe!==Gt){Q=!1;break}if(Gt=mt.height,j===void 0)j=Gt;else if(j!==Gt){Q=!1;break}delete mt.width,delete mt.height,mt.transform==="none"&&delete mt.transform}Q&&pe!==void 0&&j!==void 0&&(Jt.setKeyframes(Ot),Q=getComputedStyle(Jt.target,Jt.pseudoElement),Q.width!==pe||Q.height!==j)&&(Q=Ot[0],Q.width=pe,Q.height=j,Q=Ot[Ot.length-1],Q.width=pe,Q.height=j,Jt.setKeyframes(Ot))}}g()},function(K){Z.__reactViewTransition===ot&&(Z.__reactViewTransition=null);try{typeof K=="object"&&K!==null&&K.name==="InvalidStateError"&&(K.message==="View transition was skipped because document visibility state is hidden."||K.message==="Skipping view transition because document visibility state has become hidden."||K.message==="Skipping view transition because viewport size changed."||K.message==="Transition was aborted because of invalid state")&&(K=null),K!==null&&I(K)}finally{s(),u(),g()}}),ot.finished.finally(function(){for(var K=0;K<_t.length;K++)_t[K].cancel();Z.__reactViewTransition===ot&&(Z.__reactViewTransition=null),A()}),ot}catch{return s(),u(),g(),null}}function Ls(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Ls.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:H({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Ls.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&s.push(a[u])}return s},Ls.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Ev(t){return{name:t,group:new Ls("group",t),imagePair:new Ls("image-pair",t),old:new Ls("old",t),new:new Ls("new",t)}}function si(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}si.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(yv(c,t,n,a)===-1){var g=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(I){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),s!==null&&(u=g.removeEventListener.bind(g,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=Dr(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:u}),p(this._fragmentFiber.child,!1,qy,t,A,s)}this._eventListeners=c}};function qy(t,n,a,s){return M(t).addEventListener(n,a,s),!1}si.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=yv(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var c=u.cleanup;u=Dr(u.optionsOrUseCapture),p(this._fragmentFiber.child,!1,Wy,t,a,u),s.splice(n,1),c!==null&&c()}};function Wy(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Dr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Sv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function yv(t,n,a,s){if(t.length===0)return-1;s=Sv(s);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&Sv(c.optionsOrUseCapture)===s)return u}return-1}si.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];s.addEventListener(c.type,c.attachedListener,Dr(c.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],s.removeEventListener(c.type,c.attachedListener,Dr(c.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},si.prototype.focus=function(t){p(this._fragmentFiber.child,!0,Mv,t,void 0,void 0)};function Mv(t,n){return t.tag===6?!1:(t=M(t),lM(t,n))}si.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,Gh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Mv(n[a],t);a--);};function Gh(t,n){return n.push(t),!1}si.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=M(t),t=Yo(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,jy,t,void 0,void 0))};function jy(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}si.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,Zy,t,void 0,void 0)};function Zy(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}si.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,$y,t,void 0,void 0);for(var a=n=0;a<Ci.length;a++){var s=Ci[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Ci[n++]=s}Ci.length=n}};function $y(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Ci=[],Vh=!1;function tM(t,n,a){Ci.push({fragmentInstance:t,observer:n,instance:a}),Vh||(Vh=!0,uM(function(){Vh=!1;var s=Ci;Ci=[];for(var u=0;u<s.length;u++){var c=s[u];c.observer.unobserve(c.instance)}}))}si.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,eM,t,void 0,void 0),t};function eM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}si.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},si.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];p(this._fragmentFiber.child,!1,Gh,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=x(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var c=y(this._fragmentFiber)?n.parentElement:s;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),A=u.compareDocumentPosition(t),I=g&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=s&&c&&g&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||c&&u===t||I||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||nM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function nM(t,n,a,s,u){var c=Oe(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=S(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=G(a,c,Y),n===null?n=!1:(p(n,!0,L,c,a),c=E,E=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===s)&&(n=G(s,c,Y),n===null?n=!1:(p(n,!0,D,c,s),c=E,F=E=null,n=c!==null)),n):!1}function xv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}si.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];p(this._fragmentFiber.child,!1,Gh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=x(this._fragmentFiber);if(s=a?s[1]||s[0]||S(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),xv(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=M(u),xv(u,a)):M(u).scrollIntoView(t),s+=a?-1:1}};function iM(t,n){return t=M(t),Av(t,n),!1}function Av(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function Tv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,Dr(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var g=0,A=0;A<Ci.length;A++){var I=Ci[A];(I.fragmentInstance!==n||I.observer!==c||I.instance!==t)&&(Ci[g++]=I)}Ci.length=g,c.observe(t)}),Av(t,n))}function aM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,Dr(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?tM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Qh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qh(a),ne(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function sM(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ne])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function rM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function Cv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function kh(t){return t.data==="$?"||t.data==="$~"}function Yh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function oM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Xh=null;function bv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Rv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function lM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function uM(t){pv(function(){pv(function(n){return t(n)})})}function wv(t,n,a){switch(n=Yo(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Dv(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&Fe(t,n,s,null,zy,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Ii&&(t.onclick=null),ne(t)}function Jh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ne(t)}var _i=new Map,Uv=new Set;function Xo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ga=Kt.d;Kt.d={f:cM,r:fM,D:hM,C:dM,L:pM,m:mM,X:_M,S:gM,M:vM};function cM(){var t=ga.f(),n=xu();return t||n}function fM(t){var n=_e(t);n!==null&&n.tag===5&&n.type==="form"?Og(n):ga.r(t)}var Ur=typeof document>"u"?null:document;function Nv(t,n,a){var s=Ur;if(s&&typeof n=="string"&&n){var u=ui(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Uv.has(u)||(Uv.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),wn(n,"link",t),we(n),s.head.appendChild(n)))}}function hM(t){ga.D(t),Nv("dns-prefetch",t,null)}function dM(t,n){ga.C(t,n),Nv("preconnect",t,n)}function pM(t,n,a){ga.L(t,n,a);var s=Ur;if(s&&t&&n){var u='link[rel="preload"][as="'+ui(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ui(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ui(a.imageSizes)+'"]')):u+='[href="'+ui(t)+'"]';var c=u;switch(n){case"style":c=Nr(t);break;case"script":c=Or(t)}if(!(_i.has(c)||(t=H({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),_i.set(c,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Jo(c))||n==="script"&&s.querySelector(Ko(c))))){var g=s.createElement("link");wn(g,"link",t),n==="style"&&(g[Re]=!0,g.onload=g.onerror=function(){ba(g)}),we(g),s.head.appendChild(g)}}}function mM(t,n){ga.m(t,n);var a=Ur;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ui(s)+'"][href="'+ui(t)+'"]',c=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Or(t)}if(!_i.has(c)&&(t=H({rel:"modulepreload",href:t},n),_i.set(c,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ko(c)))return}s=a.createElement("link"),wn(s,"link",t),we(s),a.head.appendChild(s)}}}function gM(t,n,a){ga.S(t,n,a);var s=Ur;if(s&&t){var u=jn(s).hoistableStyles,c=Nr(t);n=n||"default";var g=u.get(c);if(!g){var A={loading:0,preload:null};if(g=s.querySelector(Jo(c)))A.loading=5;else{t=H({rel:"stylesheet",href:t,"data-precedence":n},a),(a=_i.get(c))&&Kh(t,a);var I=g=s.createElement("link");we(I),wn(I,"link",t),I._p=new Promise(function(Z,ot){I.onload=Z,I.onerror=ot}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Du(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:A},u.set(c,g)}}}function _M(t,n){ga.X(t,n);var a=Ur;if(a&&t){var s=jn(a).hoistableScripts,u=Or(t),c=s.get(u);c||(c=a.querySelector(Ko(u)),c||(t=H({src:t,async:!0},n),(n=_i.get(u))&&qh(t,n),c=a.createElement("script"),we(c),wn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function vM(t,n){ga.M(t,n);var a=Ur;if(a&&t){var s=jn(a).hoistableScripts,u=Or(t),c=s.get(u);c||(c=a.querySelector(Ko(u)),c||(t=H({src:t,async:!0,type:"module"},n),(n=_i.get(u))&&qh(t,n),c=a.createElement("script"),we(c),wn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function Ov(t,n,a,s){var u=(u=Ye.current)?Xo(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Nr(a.href),n=jn(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Nr(a.href);var c=jn(u).hoistableStyles,g=c.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=u.querySelector(Jo(t)))?c._p||(g.instance=c,g.state.loading=5):(c=_i.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(t,c)),EM(u,t,c,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Or(a),n=jn(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Nr(t){return'href="'+ui(t)+'"'}function Jo(t){return'link[rel="stylesheet"]['+t+"]"}function Lv(t){return H({},t,{"data-precedence":t.precedence,precedence:null})}function EM(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Re]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Re]=!0,n.onload=n.onerror=ba.bind(null,n),wn(n,"link",a),we(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Or(t){return'[src="'+ui(t)+'"]'}function Ko(t){return"script[async]"+t}function Iv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ui(a.href)+'"]');if(s)return n.instance=s,we(s),s;var u=H({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),we(s),wn(s,"style",u),Du(s,a.precedence,t),n.instance=s;case"stylesheet":u=Nr(a.href);var c=t.querySelector(Jo(u));if(c)return n.state.loading|=4,n.instance=c,we(c),c;s=Lv(a),(u=_i.get(u))&&Kh(s,u),c=(t.ownerDocument||t).createElement("link"),we(c);var g=c;return g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),wn(c,"link",s),n.state.loading|=4,Du(c,a.precedence,t),n.instance=c;case"script":return c=Or(a.src),(u=t.querySelector(Ko(c)))?(n.instance=u,we(u),u):(s=a,(u=_i.get(c))&&(s=H({},a),qh(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),we(u),wn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Du(s,a.precedence,t));return n.instance}function Du(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,c=u,g=0;g<s.length;g++){var A=s[g];if(A.dataset.precedence===n)c=A;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Kh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function qh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Uu=null;function Bv(t,n,a){if(Uu===null){var s=new Map,u=Uu=new Map;u.set(a,s)}else u=Uu,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[Ne]||c[Dt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=t+g;var A=s.get(g);A?A.push(c):s.set(g,[c])}}return s}function Wh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function SM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Pv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function zv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Fv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Hv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Fv(n),t.suspenseyImages.push(n)),t=xM.bind(t),n.decode().then(t,t))}function yM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Nr(s.href),c=n.querySelector(Jo(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=qo.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,we(c);return}c=n.ownerDocument||n,s=Lv(s),(u=_i.get(u))&&Kh(s,u),c=c.createElement("link"),we(c);var g=c;g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),wn(c,"link",s),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=qo.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Nu=0;function MM(t,n){return t.stylesheets&&t.count===0&&Lu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Lu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Nu===0&&(Nu=62500*Hy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Lu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Nu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Gv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Lu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function qo(){this.count--,Gv(this)}function xM(){this.imgCount--,Gv(this)}var Ou=null;function Lu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ou=new Map,n.forEach(AM,t),Ou=null,qo.call(t))}function AM(t,n){if(!(n.state.loading&4)){var a=Ou.get(t);if(a)var s=a.get(null);else{a=new Map,Ou.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var g=u[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),c=a.get(g)||s,c===s&&a.set(null,u),a.set(g,u),this.count++,s=qo.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Lr={$$typeof:$,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function TM(t,n,a,s,u,c,g,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uo(0),this.hiddenUpdates=uo(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function Vv(t,n,a,s,u,c,g,A,I,Z,ot,_t){return t=new TM(t,n,a,g,I,Z,ot,_t,A),n=1,c===!0&&(n|=24),c=Vn(3,null,null,n),t.current=c,c.stateNode=t,n=ff(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},mf(c),t}function Qv(t){return t?(t=rr,t):rr}function kv(t,n,a,s,u,c){u=Qv(u),s.context===null?s.context=u:s.pendingContext=u,s=Ba(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=Pa(t,s,n),a!==null&&(Xn(a,t,n),Co(a,t,n))}function Yv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function jh(t,n){Yv(t,n),(t=t.alternate)&&Yv(t,n)}function Xv(t){if(t.tag===13||t.tag===31){var n=_s(t,67108864);n!==null&&Xn(n,t,67108864),jh(t,67108864)}}function Jv(t){if(t.tag===13||t.tag===31){var n=ai();n=ht(n);var a=_s(t,n);a!==null&&Xn(a,t,n),jh(t,n)}}var Ir=!0;function CM(t,n,a,s){var u=xt.T;xt.T=null;var c=Kt.p;try{Kt.p=2,Zh(t,n,a,s)}finally{Kt.p=c,xt.T=u}}function bM(t,n,a,s){var u=xt.T;xt.T=null;var c=Kt.p;try{Kt.p=8,Zh(t,n,a,s)}finally{Kt.p=c,xt.T=u}}function Zh(t,n,a,s){if(Ir){var u=$h(s);if(u===null)Oh(t,n,s,Iu,a),qv(t,s);else if(wM(u,t,n,a,s))s.stopPropagation();else if(qv(t,s),n&4&&-1<RM.indexOf(t)){for(;u!==null;){var c=_e(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=li(c.pendingLanes);if(g!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var I=1<<31-Un(g);A.entanglements[1]|=I,g&=~I}Yi(c),(Le&6)===0&&(Su=k()+500,Vo(0))}}break;case 31:case 13:A=_s(c,2),A!==null&&Xn(A,c,2),xu(),jh(c,2)}if(c=$h(s),c===null&&Oh(t,n,s,Iu,a),c===u)break;u=c}u!==null&&s.stopPropagation()}else Oh(t,n,s,null,a)}}function $h(t){return t=Pc(t),td(t)}var Iu=null;function td(t){if(Iu=null,t=Oe(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Iu=t,null}function Kv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case Ut:return 2;case kt:return 8;case Mt:case Et:return 32;case qt:return 268435456;default:return 32}default:return 32}}var ed=!1,qa=null,Wa=null,ja=null,Wo=new Map,jo=new Map,Za=[],RM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qv(t,n){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(n.pointerId)}}function Zo(t,n,a,s,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[u]},n!==null&&(n=_e(n),n!==null&&Xv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function wM(t,n,a,s,u){switch(n){case"focusin":return qa=Zo(qa,t,n,a,s,u),!0;case"dragenter":return Wa=Zo(Wa,t,n,a,s,u),!0;case"mouseover":return ja=Zo(ja,t,n,a,s,u),!0;case"pointerover":var c=u.pointerId;return Wo.set(c,Zo(Wo.get(c)||null,t,n,a,s,u)),!0;case"gotpointercapture":return c=u.pointerId,jo.set(c,Zo(jo.get(c)||null,t,n,a,s,u)),!0}return!1}function Wv(t){var n=Oe(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Pt(t.priority,function(){Jv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Pt(t.priority,function(){Jv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=$h(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Bc=s,a.target.dispatchEvent(s),Bc=null}else return n=_e(a),n!==null&&Xv(n),t.blockedOn=a,!1;n.shift()}return!0}function jv(t,n,a){Bu(t)&&a.delete(n)}function DM(){ed=!1,qa!==null&&Bu(qa)&&(qa=null),Wa!==null&&Bu(Wa)&&(Wa=null),ja!==null&&Bu(ja)&&(ja=null),Wo.forEach(jv),jo.forEach(jv)}function Pu(t,n){t.blockedOn===n&&(t.blockedOn=null,ed||(ed=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,DM)))}var zu=null;function Zv(t){zu!==t&&(zu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){zu===t&&(zu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(td(s||a)===null)continue;break}var c=_e(a);c!==null&&(t.splice(n,3),n-=3,Bf(c,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Br(t){function n(I){return Pu(I,t)}qa!==null&&Pu(qa,t),Wa!==null&&Pu(Wa,t),ja!==null&&Pu(ja,t),Wo.forEach(n),jo.forEach(n);for(var a=0;a<Za.length;a++){var s=Za[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Wv(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],c=a[s+1],g=u[Xt]||null;if(typeof c=="function")g||Zv(a);else if(g){var A=null;if(c&&c.hasAttribute("formAction")){if(u=c,g=c[Xt]||null)A=g.formAction;else if(td(u)!==null)continue}else A=g.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),Zv(a)}}}function $v(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function nd(t){this._internalRoot=t}Fu.prototype.render=nd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ai();kv(a,s,t,n,null,null)},Fu.prototype.unmount=nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;kv(t.current,2,null,t,null,null),xu(),n[ie]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var n=At();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&Wv(t)}};var t0=e.version;if(t0!=="19.3.1")throw Error(r(527,t0,"19.3.1"));Kt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var UM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:xt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hu.isDisabled&&Hu.supportsFiber)try{xe=Hu.inject(UM),$e=Hu}catch{}}return tl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Qg,c=kg,g=Yg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Vv(t,1,!1,null,null,a,s,null,u,c,g,$v),t[ie]=n.current,Nh(t),new nd(n)},tl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",c=Qg,g=kg,A=Yg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Vv(t,1,!0,n,a??null,s,u,I,c,g,A,$v),n.context=Qv(null),a=n.current,s=ai(),s=ht(s),u=Ba(s),u.callback=null,Pa(a,u,s),a=s,n.current.lanes=a,ps(n,a),Yi(n),t[ie]=n.current,Nh(t),new Fu(n)},tl.version="19.3.1",tl}var c0;function VM(){if(c0)return sd.exports;c0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),sd.exports=GM(),sd.exports}var QM=VM();const kM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAACJElEQVR4nO3TsRHDQBDEMFXx/XdqF6DokjMlAzObb8LrA+Rcvz4A3AkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROCVsI855i9YluEaTbYFmGaDbZlPUx4GmFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROC/iJMsydvizDNBtsiTLPBtqyECcwIE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChKAvGTfM6B+mCeAAAAAASUVORK5CYII=",YM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAACJElEQVR4nO3TsRHDQBDEMFXx/XdqF6DokjMlAzObb8LrA+Rcvz4A3AkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFoJcxzjtkrtkWYZoNtEabZYFvWw4SnESYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROC/iJMsydvizDNBtsiTLPBtqyECcwIE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChKAvLJeXvozd/BAAAAAASUVORK5CYII=",XM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAACXElEQVR4nO3TQQoCMRBFwTlF7n9T3QoKEhc9T1IFvQ+fvOsB5Fx3PwB4J0wIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChKCRMNda7sfjTMKMH2cSZvw403iYfGcvhBlkL4QZZC+EGWQvhBlkL4QZZC+EGWQvhBlkL4QZZC+EGWQvhBlkL4QZZC+EGWQvhBlkL4QZZC+EGWQvhBlkL4QZZC+EGWQvhBlkL4QZZC+EGWQvhBlkL4QZZC+EGWQvhBlkL4QZZC+EGWQvhBlkL4QZZC+EGWQvhBlkL4QZZC+EGWQvhBlkL4QZZC+EGWQvhBn0updr3RRhBt39+Zww+eDuz+eECXnChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFC0BFhOvfPN0WYzm3cFGE6t3FTRsIE9ggTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEoCenjA5/2pC/TAAAAABJRU5ErkJggg==",JM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAACJElEQVR4nO3TsRHDQBDEMFXx/XdqF6DokjMlAzObb8LrA+Rcvz4A3AkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFoJcxzjtkrtkWYZoNtEabZYFvWw4SnESYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROC/iJMsydvizDNBtsiTLPBtqyECcwIE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChKAvLJeXvozd/BAAAAAASUVORK5CYII=",KM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAAC6UlEQVR4nO3TQapbUQwFwb8K73+nyTQiZGAk7LZTBXf+0Dv98wvI+Xn3BwB/EyYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJc+HxeHj/eOwIc+Hd4y8/doS58O7xlx87wlwwxMk97ghzwRAn97gjzAVDnNzjjjAXDHFyjzvCXDDEyT3uCHPBECf3uCPMBUOc3OOOMBcMcXKPO8JcMMTJPe4Ic8EQJ/e4I8wFQ5zc444wFwxxco87wlwwxMk97ghzwRAn97gjzAVDnNzjjjAXDHFyjzvCXDDEyT3uCHPBECf3uCPMBUOc3OOOMBcMcXKPO8JcMMTJPe4Ic8EQJ/e4I8wFQ5zc444wFwxxco87wlwwxMk97ghzwRAn97gjzAVDnNzjjjAXDHFyjzvCXDDEyT3uCHPBECf3uCPMBUOc3OOOMBcMcXKPO8JcMMTJPe4Ic8EQJ/e4I8wFQ5zc485Lwvzzh33rw3++JMwP+2Fl7/4H3/SfhflhP6zs3f/gm/7zy8OETyNMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBD0X4TpeZ/8XkWYnvfEexVhet4T71VeEibwHGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQ9Bsbs8zofmhdDQAAAABJRU5ErkJggg==",qM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAACJElEQVR4nO3TsRHDQBDEMFXx/XdqF6DokjMlAzObb8LrA+Rcvz4A3AkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFoJcxzjtkrtkWYZoNtEabZYFvWw4SnESYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROC/iJMsydvizDNBtsiTLPBtqyECcwIE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChKAvLJeXvozd/BAAAAAASUVORK5CYII=",WM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAACxUlEQVR4nO3VQXLiQBQFQZ+C+990Zmk8WBqDkVTdnRnxNwRIbCrexx8g5+PqPwA8EiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAg6Jczb7fblgH2XhClU2JcIU6TwVS5MocIFYW59LlL4dGmYW98RKqvLhLn3G5GymmyYW78XKisYIsy954mUGQ0Z5tazhcoshg9z710iZVTThbn1XqEykqnD3PsfIqVsqTDvWVPKlg3zX0KlRJjfEClXE+YPCJWzCfMFIuVowvwla8oRhPlmIuUdhHkga8qrhHkikfJTwryINWWPMCNEyj1hBllThDkAka5HmIOxpmsQ5uBEOidhTsSazkOYExPpuIS5CGs6FmEuSqRtwsSaBgmTByK9njDZZU2vIUyeItJzCJOXWdPjCJO3Een7CJNDWNPfESanEOpzhMnpRPp/wuRyQn0kTHJEKkziVl1TYTKUVSIVJsOaeU2FyTRmilSYTGn0NRUmSxgtUmGynBHWVJgsrxioMOGOMGEAwoQoYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQtEaZzI99ZhOncE3cWYTr3xJ3llDCB5wgTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEoL+U9UfWxXGwrAAAAABJRU5ErkJggg==",jM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAACJElEQVR4nO3TsRHDQBDEMFXx/XdqF6DokjMlAzObb8LrA+Rcvz4A3AkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFoJcxzjtkrtkWYZoNtEabZYFvWw4SnESYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROC/iJMsydvizDNBtsiTLPBtqyECcwIE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChKAvLJeXvozd/BAAAAAASUVORK5CYII=",ZM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAADXklEQVR4nO3TYW4TMRhFUVbR/e8UJCSQEIU26WR8/fkcyb/jcd799h3I+bb6AsDfhAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQtAtYb69vSUP663eQHUzR4cpzrVW//flvRwfpjjXWP2f17dye5gF4lxrt/cX5o12G8cUO767MG+240h2tut7C3OBXceym53fWZiL7DyaHez+vsJcaPfxVE14V2EuNmFEJVPeU5gBU8a02qR3FGbEpFGtMO39hBkybVx3mfhuwoyZOLJXmvpewgyaOrarTX4nYUZNHt0Vpr+PMMOmj+9ZJ7yLMONOGOEjTnkPYW7glDF+5KR3EOYmThrle077fmFu5LRx/nLidwtzM6eN9LTv/UWYGzplrKd853uEuanpo53+fR8R5samjnfqdz1CmJubNuJp3/MsYQ4wZcxTvuMKwhxi91Hvfv+rCXOQXce9671fSZjD7Dby3e57F2EOtMvYd7nnCsIcqj76+v1WE+Zg1fFX71UizOFqEdTuUyXMA1RiqNxjB8I8xOooVv/+boR5kFVxiPJxwjzM3ZGI8jnCPNBdsYjyecI81KujEeXXCPNgr4pHlF8nzMNdHZEoryFMLotJlNcRJj99NSpRXkuY/PZsXKK8njD5w6ORifI1hMlfPhubKF9HmLzro+hE+VrC5J/+FZ8oX0+Y/Nd7EYry9YTJh0R5P2HyKaK8lzD5NG96H2FCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQdESYjrPzuYswHeeBcxdhOs4D5y63hAk8RpgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYE/QBHTs4x+9rB1QAAAABJRU5ErkJggg==",$M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAACJElEQVR4nO3TsRHDQBDEMFXx/XdqF6DokjMlAzObb8LrA+Rcvz4A3AkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFoJcxzjtkrtkWYZoNtEabZYFvWw4SnESYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROC/iJMsydvizDNBtsiTLPBtqyECcwIE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChKAvLJeXvozd/BAAAAAASUVORK5CYII=",tx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAADVUlEQVR4nO3WQW4bQQwAQb/C//+pA+QYR4mVyDtNbhUwZ81w2YDePoCct9MXAD4TJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQZeE+f7+nj+cd3oHSnsiTGFmnN6B0p4IU5wJp799bUcuD7NEmB3lbyHMA8p3u5PydxDmAeW73Un5OwjzgPJfqLuofwNhHlBfijuofwNhHlK/33b1+QvzkPr9tqvPX5iH1P9KbTZh9sI8ZMJybDVh9sI8aMIdN5owd2EeNOGOG02YuzAPmvCXapspMxfmQVOWZJMpMxfmYVPuucWUeQvzsCn33GLKvIV52JS/VhtMmrUwD5u0LNNNmrUwAyYtzFTTZizMgGlLM9G0GQszYtriTDJxtsKM+HV5pty7bupchRkydYmqJs9TmDFTF6lo8iyFGTR5oSqmz1CYQZP/ghVsmJ8wozYs1wlb5ibMsC1LdpVN8xJm3KZl+07b5iTMAbYt3attnI8wh9i4fK+wdS7CHOR3S7jpfc/YPgthDrN9Ib/iDjMQ5kB3WMxH7vJ2YQ52lyX9uNlbP4Q536OF3fLu7e97RJgL/Gl5p75/45ueIcxFNizzhje8gjAX+tty12Yy7b5XEOZi9YWv3+8kYd7AVwK4YlaVe0wgzJt5Jo7/md9Vv7OVMG/qX8L5rsNnwuQnIbYIk4dEeI4wIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAh6BZhOs7kcxVhOs4T5yrCdJwnzlUuCRN4jjAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwI+gFki7WeBCs9hwAAAABJRU5ErkJggg==",ex="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAACJElEQVR4nO3TsRHDQBDEMFXx/XdqF6DokjMlAzObb8LrA+Rcvz4A3AkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFoJcxzjtkrtkWYZoNtEabZYFvWw4SnESYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROC/iJMsydvizDNBtsiTLPBtqyECcwIE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChKAvLJeXvozd/BAAAAAASUVORK5CYII=",nx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAACJElEQVR4nO3TsRHDQBDEMFXx/XdqF6DokjMlAzObb8LrA+Rcvz4A3AkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROCVsI855i9YluEaTbYFmGaDbZlPUx4GmFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROC/iJMsydvizDNBtsiTLPBtqyECcwIE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChKAvGTfM6B+mCeAAAAAASUVORK5CYII=",ix="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAAEhElEQVR4nO3YW3LbWBBEQa9C+98p/CFF2BSfIECguyszwt9D3uojy/NnAcr5c/YHAK4JEwoSJhQkTChImFCQMKEgYUJBwoSChAkFCRMKEiYUJEwoSJhQkDChIGFCQcKEgoQJBQkTChImFCRMKEiYUJAwG/j6+tr8h16EWcweEYq1P2Ge7MgQhdqHMA92dDhC7UmYB6kURaXPwm3C/KAux9/lcyYR5gd0P/Dun38CYe5o2kFP+z6dCHMHCceb8B0rEeYGicea+J3PIMw3pR9n+vf/NGGu5CAveY/PEOYKDvA+b7MvYb7I4T3njfYjzCcc23rebDthPuDA3uftthHmHQ5rO2/4PmH+4pj2503XE+Z/HNDneNt1hPnD4XyeN36dMH84luOI8zlhivIU3vyx+DD99D6Pd78vOkxRnsv73ydMR3Eqcd4WG6ZjqMMW1yLD9FO6HntcigtTlDXZ5VJ8mNQhzn+iwjR6fTb6FhOmn8Z92Ck4TOryQzQkzPSRO0rfTJiUlbzb+DCTx+0ueTthUlrqdqPDFGV/qRsKk9JSNxwbZuqgEyVuKUzKS9wyIkz6S9tzZJiJP2GnS9tUmLSQtum4MNMGTJK0rTBpI2nb0WEyT8q+wqSVlL81R4WZMlqylI2FSTsJG48Nk7kSdhYm7STsPCZMv8bmSNhamLSTsPXIMJlv+t7CpKXpewuTlqbvPSLMhH9zcGn65sKkpembjwuTHJN3FyZtTd5dmLQ1eXdh0tbk3YVJW5N3FyZtTd5dmLQ1eXdh0tbk3YVJW5N3FyZtTd5dmLQ1eXdh0tbk3YVJW5N3HxfmxJG4Nn1zYdLS9M1HhLkM/7WGa9P3FiYtTd9bmLQ0fe+RYU4di28JWwuTdhK2HhPmEvDrDd8SdhYm7STsPDbMyaOlS9hYmLSSsvGoMJeQn6bJhNlUwmjJUvYdHeb08dIkbStM2kjadlyYS9iAKdI2FSYtpG06Mswl6H8SpEjbMyLMlDGnStxSmJSXuOXYMJfQQadJ3VCYlJa64egwl+Bhp0jdTpiUlbzd+DCX8IE7S95NmJSUvllEmIuhW/m9VeJesWEmjt2FnYLCXAzego2+RYW5GL40v9X8Ex9m8viV2OVSXJiLIyjJHpciw1wcQim2uBYb5uIgSvDby23CdBSn8f73RYe5OI5Teff74sNcHMgpvPljwvzhUI7jt5TnhPnDsRzDO79GmP+5dTQOZx/edh1h/uKA9udN1xPmDQ5pP97yPcJ8wFG9z9ttI8wnHNh63mw7Yb7Aob3OW+1DmCs4uvu8zb6EuZIDvOZN9ifMN9w7xLRj9A6fI8wNHh3m1ONM/M5nEOZGzw51yrGmfM8qhLmTVw632/FO/E5dCPMDuh9z988/gTA/qNPfOJ0+awJhHuTVwz8igEqfhduEebC1UWwN5Oj/HvsQ5om2RPOpP9QgzGJEyCLMHkSYR5hQkDChIGFCQcKEgoQJBQkTChImFCRMKEiYUJAwoSBhQkHChIKECQUJEwoSJhQkTChImFCQMKEgYUJBwoSChAkF/QU3DUHQxqvDCQAAAABJRU5ErkJggg==",ax="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAACJElEQVR4nO3TsRHDQBDEMFXx/XdqF6DokjMlAzObb8LrA+Rcvz4A3AkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROCVsI855i9YluEaTbYFmGaDbZlPUx4GmFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROC/iJMsydvizDNBtsiTLPBtqyECcwIE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChKAvGTfM6B+mCeAAAAAASUVORK5CYII=",sx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACsCAYAAABvqdCxAAADNUlEQVR4nO3bW2ocMRBAUa/C+99p8hdIYmcyr9ZV6RyoT49Loq8bDPPxA8j5WL0A8DdhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYEXRLm5+enMSPmKsI05o65ijCNuWOucnmYsBthQpAwIUiYECRMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwuRbpS/xnkaY/ObRb9m759cS5uGeCVGo7yPMgz0TmDjfS5iHemVQ4nw9YR7mingE+jxhHuTKYMT5HGEeYkUo4nycMA+xMg5x3k+YByhEUdhhJ8IcrvS2quyxA2EOVoqyuE+ZMAcrRlDcqUiYg1XvoLpXiTAHq96Bt+Ztwhyq/PCXd6sQ5lD1h7+8W4Ewh6qfv/6HYzVhDrTDQ7/DjisJc6BdHvoddlxFmAPtcvZd9lxBmAPtcvZd9lxBmAPtcvZd9lxBmAPtcvZd9lxBmAPtcvZd9lxBmAP5r+z+hDnQDmHusONKwhyqfn5h/pswh6o/+OXdCoQ5VDnM8m4VwhysegfCvE2Yg1XvoLpXiTAHK76ZijsVCXOwPyNYfRe1fcqEOVwphsoeOxDmAQpBFHbYiTAPsTKM0lt7F8I8xKo4RPkYYR7kq0jedT9X/q6JhHmYK4IR5fOEeaDvwnnmvt7xmScT5sFuxXTr7p79eb4nzMP9T1yPDo8TJr+IsUOYfEmMawkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBB0RJjG7DxXEaYxd8xVhGnMHXOVS8IE7iNMCBImBAkTgoQJQcKEIGFCkDAhSJgQJEwIEiYECROChAlBwoQgYUKQMCFImBAkTAgSJgQJE4KECUHChCBhQpAwIUiYECRMCBImBAkTgn4Cx4y6W8z93t0AAAAASUVORK5CYII=";const Bp="180",Zr={ROTATE:0,DOLLY:1,PAN:2},ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rx=0,f0=1,ox=2,EE=1,lx=2,Ma=3,us=0,qn=1,xa=2,os=0,$r=1,h0=2,d0=3,p0=4,ux=5,Vs=100,cx=101,fx=102,hx=103,dx=104,px=200,mx=201,gx=202,_x=203,kd=204,Yd=205,vx=206,Ex=207,Sx=208,yx=209,Mx=210,xx=211,Ax=212,Tx=213,Cx=214,Xd=0,Jd=1,Kd=2,eo=3,qd=4,Wd=5,jd=6,Zd=7,SE=0,bx=1,Rx=2,ls=0,wx=1,Dx=2,Ux=3,Nx=4,Ox=5,Lx=6,Ix=7,yE=300,no=301,io=302,$d=303,tp=304,Tc=306,ep=1e3,Ys=1001,np=1002,Ni=1003,Bx=1004,Gu=1005,Ki=1006,ud=1007,Xs=1008,Zi=1009,ME=1010,xE=1011,ul=1012,Pp=1013,Js=1014,Aa=1015,pl=1016,zp=1017,Fp=1018,cl=1020,AE=35902,TE=35899,CE=1021,bE=1022,Ui=1023,fl=1026,hl=1027,RE=1028,Hp=1029,wE=1030,Gp=1031,Vp=1033,mc=33776,gc=33777,_c=33778,vc=33779,ip=35840,ap=35841,sp=35842,rp=35843,op=36196,lp=37492,up=37496,cp=37808,fp=37809,hp=37810,dp=37811,pp=37812,mp=37813,gp=37814,_p=37815,vp=37816,Ep=37817,Sp=37818,yp=37819,Mp=37820,xp=37821,Ap=36492,Tp=36494,Cp=36495,bp=36283,Rp=36284,wp=36285,Dp=36286,Px=3200,zx=3201,DE=0,Fx=1,rs="",Ei="srgb",ao="srgb-linear",Sc="linear",Qe="srgb",Pr=7680,m0=519,Hx=512,Gx=513,Vx=514,UE=515,Qx=516,kx=517,Yx=518,Xx=519,g0=35044,_0="300 es",qi=2e3,yc=2001;class Ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ll=Math.PI/180,Up=180/Math.PI;function ml(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Me(o,e,i){return Math.max(e,Math.min(i,o))}function Jx(o,e){return(o%e+e)%e}function cd(o,e,i){return(1-i)*o+i*e}function el(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Kx={DEG2RAD:ll};class fe{constructor(e=0,i=0){fe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*l+e.x,this.y=f*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ks{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,h,d){let _=r[l+0],m=r[l+1],v=r[l+2],p=r[l+3];const S=f[h+0],y=f[h+1],x=f[h+2],C=f[h+3];if(d===0){e[i+0]=_,e[i+1]=m,e[i+2]=v,e[i+3]=p;return}if(d===1){e[i+0]=S,e[i+1]=y,e[i+2]=x,e[i+3]=C;return}if(p!==C||_!==S||m!==y||v!==x){let M=1-d;const E=_*S+m*y+v*x+p*C,F=E>=0?1:-1,L=1-E*E;if(L>Number.EPSILON){const Y=Math.sqrt(L),G=Math.atan2(Y,E*F);M=Math.sin(M*G)/Y,d=Math.sin(d*G)/Y}const D=d*F;if(_=_*M+S*D,m=m*M+y*D,v=v*M+x*D,p=p*M+C*D,M===1-d){const Y=1/Math.sqrt(_*_+m*m+v*v+p*p);_*=Y,m*=Y,v*=Y,p*=Y}}e[i]=_,e[i+1]=m,e[i+2]=v,e[i+3]=p}static multiplyQuaternionsFlat(e,i,r,l,f,h){const d=r[l],_=r[l+1],m=r[l+2],v=r[l+3],p=f[h],S=f[h+1],y=f[h+2],x=f[h+3];return e[i]=d*x+v*p+_*y-m*S,e[i+1]=_*x+v*S+m*p-d*y,e[i+2]=m*x+v*y+d*S-_*p,e[i+3]=v*x-d*p-_*S-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,h=e._order,d=Math.cos,_=Math.sin,m=d(r/2),v=d(l/2),p=d(f/2),S=_(r/2),y=_(l/2),x=_(f/2);switch(h){case"XYZ":this._x=S*v*p+m*y*x,this._y=m*y*p-S*v*x,this._z=m*v*x+S*y*p,this._w=m*v*p-S*y*x;break;case"YXZ":this._x=S*v*p+m*y*x,this._y=m*y*p-S*v*x,this._z=m*v*x-S*y*p,this._w=m*v*p+S*y*x;break;case"ZXY":this._x=S*v*p-m*y*x,this._y=m*y*p+S*v*x,this._z=m*v*x+S*y*p,this._w=m*v*p-S*y*x;break;case"ZYX":this._x=S*v*p-m*y*x,this._y=m*y*p+S*v*x,this._z=m*v*x-S*y*p,this._w=m*v*p+S*y*x;break;case"YZX":this._x=S*v*p+m*y*x,this._y=m*y*p+S*v*x,this._z=m*v*x-S*y*p,this._w=m*v*p-S*y*x;break;case"XZY":this._x=S*v*p-m*y*x,this._y=m*y*p-S*v*x,this._z=m*v*x+S*y*p,this._w=m*v*p+S*y*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],h=i[1],d=i[5],_=i[9],m=i[2],v=i[6],p=i[10],S=r+d+p;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(v-_)*y,this._y=(f-m)*y,this._z=(h-l)*y}else if(r>d&&r>p){const y=2*Math.sqrt(1+r-d-p);this._w=(v-_)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(f+m)/y}else if(d>p){const y=2*Math.sqrt(1+d-r-p);this._w=(f-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(_+v)/y}else{const y=2*Math.sqrt(1+p-r-d);this._w=(h-l)/y,this._x=(f+m)/y,this._y=(_+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,h=e._w,d=i._x,_=i._y,m=i._z,v=i._w;return this._x=r*v+h*d+l*m-f*_,this._y=l*v+h*_+f*d-r*m,this._z=f*v+h*m+r*_-l*d,this._w=h*v-r*d-l*_-f*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=f,this;const _=1-d*d;if(_<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*f+i*this._z,this.normalize(),this}const m=Math.sqrt(_),v=Math.atan2(m,d),p=Math.sin((1-i)*v)/m,S=Math.sin(i*v)/m;return this._w=h*p+this._w*S,this._x=r*p+this._x*S,this._y=l*p+this._y*S,this._z=f*p+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(e=0,i=0,r=0){it.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(v0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(v0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,h=e.y,d=e.z,_=e.w,m=2*(h*l-d*r),v=2*(d*i-f*l),p=2*(f*r-h*i);return this.x=i+_*m+h*p-d*v,this.y=r+_*v+d*m-f*p,this.z=l+_*p+f*v-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,h=i.x,d=i.y,_=i.z;return this.x=l*_-f*d,this.y=f*h-r*_,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return fd.copy(this).projectOnVector(e),this.sub(fd)}reflect(e){return this.sub(fd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fd=new it,v0=new Ks;class me{constructor(e,i,r,l,f,h,d,_,m){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,_,m)}set(e,i,r,l,f,h,d,_,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=f,v[5]=_,v[6]=r,v[7]=h,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[3],_=r[6],m=r[1],v=r[4],p=r[7],S=r[2],y=r[5],x=r[8],C=l[0],M=l[3],E=l[6],F=l[1],L=l[4],D=l[7],Y=l[2],G=l[5],H=l[8];return f[0]=h*C+d*F+_*Y,f[3]=h*M+d*L+_*G,f[6]=h*E+d*D+_*H,f[1]=m*C+v*F+p*Y,f[4]=m*M+v*L+p*G,f[7]=m*E+v*D+p*H,f[2]=S*C+y*F+x*Y,f[5]=S*M+y*L+x*G,f[8]=S*E+y*D+x*H,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],_=e[6],m=e[7],v=e[8];return i*h*v-i*d*m-r*f*v+r*d*_+l*f*m-l*h*_}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],_=e[6],m=e[7],v=e[8],p=v*h-d*m,S=d*_-v*f,y=m*f-h*_,x=i*p+r*S+l*y;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/x;return e[0]=p*C,e[1]=(l*m-v*r)*C,e[2]=(d*r-l*h)*C,e[3]=S*C,e[4]=(v*i-l*_)*C,e[5]=(l*f-d*i)*C,e[6]=y*C,e[7]=(r*_-m*i)*C,e[8]=(h*i-r*f)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,h,d){const _=Math.cos(f),m=Math.sin(f);return this.set(r*_,r*m,-r*(_*h+m*d)+h+e,-l*m,l*_,-l*(-m*h+_*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(hd.makeScale(e,i)),this}rotate(e){return this.premultiply(hd.makeRotation(-e)),this}translate(e,i){return this.premultiply(hd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hd=new me;function NE(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Mc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function qx(){const o=Mc("canvas");return o.style.display="block",o}const E0={};function dl(o){o in E0||(E0[o]=!0,console.warn(o))}function Wx(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const S0=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y0=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jx(){const o={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Qe&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Qe&&(l.r=to(l.r),l.g=to(l.g),l.b=to(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rs?Sc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return dl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return dl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ao]:{primaries:e,whitePoint:r,transfer:Sc,toXYZ:S0,fromXYZ:y0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:e,whitePoint:r,transfer:Qe,toXYZ:S0,fromXYZ:y0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),o}const Ue=jx();function Ta(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function to(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let zr;class Zx{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{zr===void 0&&(zr=Mc("canvas")),zr.width=e.width,zr.height=e.height;const l=zr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=zr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Mc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=Ta(f[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ta(i[r]/255)*255):i[r]=Ta(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $x=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?f.push(dd(l[h].image)):f.push(dd(l[h]))}else f=dd(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function dd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Zx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tA=0;const pd=new it;class Wn extends Ws{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,r=Ys,l=Ys,f=Ki,h=Xs,d=Ui,_=Zi,m=Wn.DEFAULT_ANISOTROPY,v=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tA++}),this.uuid=ml(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=_,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pd).x}get height(){return this.source.getSize(pd).y}get depth(){return this.source.getSize(pd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ep:e.x=e.x-Math.floor(e.x);break;case Ys:e.x=e.x<0?0:1;break;case np:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ep:e.y=e.y-Math.floor(e.y);break;case Ys:e.y=e.y<0?0:1;break;case np:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=yE;Wn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const _=e.elements,m=_[0],v=_[4],p=_[8],S=_[1],y=_[5],x=_[9],C=_[2],M=_[6],E=_[10];if(Math.abs(v-S)<.01&&Math.abs(p-C)<.01&&Math.abs(x-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(p+C)<.1&&Math.abs(x+M)<.1&&Math.abs(m+y+E-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,D=(y+1)/2,Y=(E+1)/2,G=(v+S)/4,H=(p+C)/4,q=(x+M)/4;return L>D&&L>Y?L<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(L),l=G/r,f=H/r):D>Y?D<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(D),r=G/l,f=q/l):Y<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(Y),r=H/f,l=q/f),this.set(r,l,f,i),this}let F=Math.sqrt((M-x)*(M-x)+(p-C)*(p-C)+(S-v)*(S-v));return Math.abs(F)<.001&&(F=1),this.x=(M-x)/F,this.y=(p-C)/F,this.z=(S-v)/F,this.w=Math.acos((m+y+E-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this.w=Me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this.w=Me(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eA extends Ws{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new Wn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ki,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Qp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qs extends eA{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class OE extends Wn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=Ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nA extends Wn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=Ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gl{constructor(e=new it(1/0,1/0,1/0),i=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,bi):bi.fromBufferAttribute(f,h),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Vu.copy(r.boundingBox)),Vu.applyMatrix4(e.matrixWorld),this.union(Vu)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nl),Qu.subVectors(this.max,nl),Fr.subVectors(e.a,nl),Hr.subVectors(e.b,nl),Gr.subVectors(e.c,nl),ts.subVectors(Hr,Fr),es.subVectors(Gr,Hr),Is.subVectors(Fr,Gr);let i=[0,-ts.z,ts.y,0,-es.z,es.y,0,-Is.z,Is.y,ts.z,0,-ts.x,es.z,0,-es.x,Is.z,0,-Is.x,-ts.y,ts.x,0,-es.y,es.x,0,-Is.y,Is.x,0];return!md(i,Fr,Hr,Gr,Qu)||(i=[1,0,0,0,1,0,0,0,1],!md(i,Fr,Hr,Gr,Qu))?!1:(ku.crossVectors(ts,es),i=[ku.x,ku.y,ku.z],md(i,Fr,Hr,Gr,Qu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new it,new it,new it,new it,new it,new it,new it,new it],bi=new it,Vu=new gl,Fr=new it,Hr=new it,Gr=new it,ts=new it,es=new it,Is=new it,nl=new it,Qu=new it,ku=new it,Bs=new it;function md(o,e,i,r,l){for(let f=0,h=o.length-3;f<=h;f+=3){Bs.fromArray(o,f);const d=l.x*Math.abs(Bs.x)+l.y*Math.abs(Bs.y)+l.z*Math.abs(Bs.z),_=e.dot(Bs),m=i.dot(Bs),v=r.dot(Bs);if(Math.max(-Math.max(_,m,v),Math.min(_,m,v))>d)return!1}return!0}const iA=new gl,il=new it,gd=new it;class Cc{constructor(e=new it,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):iA.setFromPoints(e).getCenter(r);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);const i=il.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(il,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(il.copy(e.center).add(gd)),this.expandByPoint(il.copy(e.center).sub(gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new it,_d=new it,Yu=new it,ns=new it,vd=new it,Xu=new it,Ed=new it;class bc{constructor(e=new it,i=new it(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=va.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){_d.copy(e).add(i).multiplyScalar(.5),Yu.copy(i).sub(e).normalize(),ns.copy(this.origin).sub(_d);const f=e.distanceTo(i)*.5,h=-this.direction.dot(Yu),d=ns.dot(this.direction),_=-ns.dot(Yu),m=ns.lengthSq(),v=Math.abs(1-h*h);let p,S,y,x;if(v>0)if(p=h*_-d,S=h*d-_,x=f*v,p>=0)if(S>=-x)if(S<=x){const C=1/v;p*=C,S*=C,y=p*(p+h*S+2*d)+S*(h*p+S+2*_)+m}else S=f,p=Math.max(0,-(h*S+d)),y=-p*p+S*(S+2*_)+m;else S=-f,p=Math.max(0,-(h*S+d)),y=-p*p+S*(S+2*_)+m;else S<=-x?(p=Math.max(0,-(-h*f+d)),S=p>0?-f:Math.min(Math.max(-f,-_),f),y=-p*p+S*(S+2*_)+m):S<=x?(p=0,S=Math.min(Math.max(-f,-_),f),y=S*(S+2*_)+m):(p=Math.max(0,-(h*f+d)),S=p>0?f:Math.min(Math.max(-f,-_),f),y=-p*p+S*(S+2*_)+m);else S=h>0?-f:f,p=Math.max(0,-(h*S+d)),y=-p*p+S*(S+2*_)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,p),l&&l.copy(_d).addScaledVector(Yu,S),y}intersectSphere(e,i){va.subVectors(e.center,this.origin);const r=va.dot(this.direction),l=va.dot(va)-r*r,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),d=r-h,_=r+h;return _<0?null:d<0?this.at(_,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,h,d,_;const m=1/this.direction.x,v=1/this.direction.y,p=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),v>=0?(f=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(f=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),r>h||f>l||((f>r||isNaN(r))&&(r=f),(h<l||isNaN(l))&&(l=h),p>=0?(d=(e.min.z-S.z)*p,_=(e.max.z-S.z)*p):(d=(e.max.z-S.z)*p,_=(e.min.z-S.z)*p),r>_||d>l)||((d>r||r!==r)&&(r=d),(_<l||l!==l)&&(l=_),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,i,r,l,f){vd.subVectors(i,e),Xu.subVectors(r,e),Ed.crossVectors(vd,Xu);let h=this.direction.dot(Ed),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ns.subVectors(this.origin,e);const _=d*this.direction.dot(Xu.crossVectors(ns,Xu));if(_<0)return null;const m=d*this.direction.dot(vd.cross(ns));if(m<0||_+m>h)return null;const v=-d*ns.dot(Ed);return v<0?null:this.at(v/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,r,l,f,h,d,_,m,v,p,S,y,x,C,M){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,_,m,v,p,S,y,x,C,M)}set(e,i,r,l,f,h,d,_,m,v,p,S,y,x,C,M){const E=this.elements;return E[0]=e,E[4]=i,E[8]=r,E[12]=l,E[1]=f,E[5]=h,E[9]=d,E[13]=_,E[2]=m,E[6]=v,E[10]=p,E[14]=S,E[3]=y,E[7]=x,E[11]=C,E[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Vr.setFromMatrixColumn(e,0).length(),f=1/Vr.setFromMatrixColumn(e,1).length(),h=1/Vr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),_=Math.cos(l),m=Math.sin(l),v=Math.cos(f),p=Math.sin(f);if(e.order==="XYZ"){const S=h*v,y=h*p,x=d*v,C=d*p;i[0]=_*v,i[4]=-_*p,i[8]=m,i[1]=y+x*m,i[5]=S-C*m,i[9]=-d*_,i[2]=C-S*m,i[6]=x+y*m,i[10]=h*_}else if(e.order==="YXZ"){const S=_*v,y=_*p,x=m*v,C=m*p;i[0]=S+C*d,i[4]=x*d-y,i[8]=h*m,i[1]=h*p,i[5]=h*v,i[9]=-d,i[2]=y*d-x,i[6]=C+S*d,i[10]=h*_}else if(e.order==="ZXY"){const S=_*v,y=_*p,x=m*v,C=m*p;i[0]=S-C*d,i[4]=-h*p,i[8]=x+y*d,i[1]=y+x*d,i[5]=h*v,i[9]=C-S*d,i[2]=-h*m,i[6]=d,i[10]=h*_}else if(e.order==="ZYX"){const S=h*v,y=h*p,x=d*v,C=d*p;i[0]=_*v,i[4]=x*m-y,i[8]=S*m+C,i[1]=_*p,i[5]=C*m+S,i[9]=y*m-x,i[2]=-m,i[6]=d*_,i[10]=h*_}else if(e.order==="YZX"){const S=h*_,y=h*m,x=d*_,C=d*m;i[0]=_*v,i[4]=C-S*p,i[8]=x*p+y,i[1]=p,i[5]=h*v,i[9]=-d*v,i[2]=-m*v,i[6]=y*p+x,i[10]=S-C*p}else if(e.order==="XZY"){const S=h*_,y=h*m,x=d*_,C=d*m;i[0]=_*v,i[4]=-p,i[8]=m*v,i[1]=S*p+C,i[5]=h*v,i[9]=y*p-x,i[2]=x*p-y,i[6]=d*v,i[10]=C*p+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aA,e,sA)}lookAt(e,i,r){const l=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),is.crossVectors(r,ri),is.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),is.crossVectors(r,ri)),is.normalize(),Ju.crossVectors(ri,is),l[0]=is.x,l[4]=Ju.x,l[8]=ri.x,l[1]=is.y,l[5]=Ju.y,l[9]=ri.y,l[2]=is.z,l[6]=Ju.z,l[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[4],_=r[8],m=r[12],v=r[1],p=r[5],S=r[9],y=r[13],x=r[2],C=r[6],M=r[10],E=r[14],F=r[3],L=r[7],D=r[11],Y=r[15],G=l[0],H=l[4],q=l[8],w=l[12],R=l[1],X=l[5],ut=l[9],J=l[13],P=l[2],$=l[6],U=l[10],V=l[14],B=l[3],ct=l[7],dt=l[11],vt=l[15];return f[0]=h*G+d*R+_*P+m*B,f[4]=h*H+d*X+_*$+m*ct,f[8]=h*q+d*ut+_*U+m*dt,f[12]=h*w+d*J+_*V+m*vt,f[1]=v*G+p*R+S*P+y*B,f[5]=v*H+p*X+S*$+y*ct,f[9]=v*q+p*ut+S*U+y*dt,f[13]=v*w+p*J+S*V+y*vt,f[2]=x*G+C*R+M*P+E*B,f[6]=x*H+C*X+M*$+E*ct,f[10]=x*q+C*ut+M*U+E*dt,f[14]=x*w+C*J+M*V+E*vt,f[3]=F*G+L*R+D*P+Y*B,f[7]=F*H+L*X+D*$+Y*ct,f[11]=F*q+L*ut+D*U+Y*dt,f[15]=F*w+L*J+D*V+Y*vt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],h=e[1],d=e[5],_=e[9],m=e[13],v=e[2],p=e[6],S=e[10],y=e[14],x=e[3],C=e[7],M=e[11],E=e[15];return x*(+f*_*p-l*m*p-f*d*S+r*m*S+l*d*y-r*_*y)+C*(+i*_*y-i*m*S+f*h*S-l*h*y+l*m*v-f*_*v)+M*(+i*m*p-i*d*y-f*h*p+r*h*y+f*d*v-r*m*v)+E*(-l*d*v-i*_*p+i*d*S+l*h*p-r*h*S+r*_*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],_=e[6],m=e[7],v=e[8],p=e[9],S=e[10],y=e[11],x=e[12],C=e[13],M=e[14],E=e[15],F=p*M*m-C*S*m+C*_*y-d*M*y-p*_*E+d*S*E,L=x*S*m-v*M*m-x*_*y+h*M*y+v*_*E-h*S*E,D=v*C*m-x*p*m+x*d*y-h*C*y-v*d*E+h*p*E,Y=x*p*_-v*C*_-x*d*S+h*C*S+v*d*M-h*p*M,G=i*F+r*L+l*D+f*Y;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/G;return e[0]=F*H,e[1]=(C*S*f-p*M*f-C*l*y+r*M*y+p*l*E-r*S*E)*H,e[2]=(d*M*f-C*_*f+C*l*m-r*M*m-d*l*E+r*_*E)*H,e[3]=(p*_*f-d*S*f-p*l*m+r*S*m+d*l*y-r*_*y)*H,e[4]=L*H,e[5]=(v*M*f-x*S*f+x*l*y-i*M*y-v*l*E+i*S*E)*H,e[6]=(x*_*f-h*M*f-x*l*m+i*M*m+h*l*E-i*_*E)*H,e[7]=(h*S*f-v*_*f+v*l*m-i*S*m-h*l*y+i*_*y)*H,e[8]=D*H,e[9]=(x*p*f-v*C*f-x*r*y+i*C*y+v*r*E-i*p*E)*H,e[10]=(h*C*f-x*d*f+x*r*m-i*C*m-h*r*E+i*d*E)*H,e[11]=(v*d*f-h*p*f-v*r*m+i*p*m+h*r*y-i*d*y)*H,e[12]=Y*H,e[13]=(v*C*l-x*p*l+x*r*S-i*C*S-v*r*M+i*p*M)*H,e[14]=(x*d*l-h*C*l-x*r*_+i*C*_+h*r*M-i*d*M)*H,e[15]=(h*p*l-v*d*l+v*r*_-i*p*_-h*r*S+i*d*S)*H,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,h=e.x,d=e.y,_=e.z,m=f*h,v=f*d;return this.set(m*h+r,m*d-l*_,m*_+l*d,0,m*d+l*_,v*d+r,v*_-l*h,0,m*_-l*d,v*_+l*h,f*_*_+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,h){return this.set(1,r,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,h=i._y,d=i._z,_=i._w,m=f+f,v=h+h,p=d+d,S=f*m,y=f*v,x=f*p,C=h*v,M=h*p,E=d*p,F=_*m,L=_*v,D=_*p,Y=r.x,G=r.y,H=r.z;return l[0]=(1-(C+E))*Y,l[1]=(y+D)*Y,l[2]=(x-L)*Y,l[3]=0,l[4]=(y-D)*G,l[5]=(1-(S+E))*G,l[6]=(M+F)*G,l[7]=0,l[8]=(x+L)*H,l[9]=(M-F)*H,l[10]=(1-(S+C))*H,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=Vr.set(l[0],l[1],l[2]).length();const h=Vr.set(l[4],l[5],l[6]).length(),d=Vr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Ri.copy(this);const m=1/f,v=1/h,p=1/d;return Ri.elements[0]*=m,Ri.elements[1]*=m,Ri.elements[2]*=m,Ri.elements[4]*=v,Ri.elements[5]*=v,Ri.elements[6]*=v,Ri.elements[8]*=p,Ri.elements[9]*=p,Ri.elements[10]*=p,i.setFromRotationMatrix(Ri),r.x=f,r.y=h,r.z=d,this}makePerspective(e,i,r,l,f,h,d=qi,_=!1){const m=this.elements,v=2*f/(i-e),p=2*f/(r-l),S=(i+e)/(i-e),y=(r+l)/(r-l);let x,C;if(_)x=f/(h-f),C=h*f/(h-f);else if(d===qi)x=-(h+f)/(h-f),C=-2*h*f/(h-f);else if(d===yc)x=-h/(h-f),C=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=p,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=x,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,f,h,d=qi,_=!1){const m=this.elements,v=2/(i-e),p=2/(r-l),S=-(i+e)/(i-e),y=-(r+l)/(r-l);let x,C;if(_)x=1/(h-f),C=h/(h-f);else if(d===qi)x=-2/(h-f),C=-(h+f)/(h-f);else if(d===yc)x=-1/(h-f),C=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=p,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=x,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Vr=new it,Ri=new en,aA=new it(0,0,0),sA=new it(1,1,1),is=new it,Ju=new it,ri=new it,M0=new en,x0=new Ks;class $i{constructor(e=0,i=0,r=0,l=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],h=l[4],d=l[8],_=l[1],m=l[5],v=l[9],p=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(_,m)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(Me(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-p,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return M0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(M0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return x0.setFromEuler(this),this.setFromQuaternion(x0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class kp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rA=0;const A0=new it,Qr=new Ks,Ea=new en,Ku=new it,al=new it,oA=new it,lA=new Ks,T0=new it(1,0,0),C0=new it(0,1,0),b0=new it(0,0,1),R0={type:"added"},uA={type:"removed"},kr={type:"childadded",child:null},Sd={type:"childremoved",child:null};class An extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new it,i=new $i,r=new Ks,l=new it(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new me}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Qr.setFromAxisAngle(e,i),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,i){return Qr.setFromAxisAngle(e,i),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(T0,e)}rotateY(e){return this.rotateOnAxis(C0,e)}rotateZ(e){return this.rotateOnAxis(b0,e)}translateOnAxis(e,i){return A0.copy(e).applyQuaternion(this.quaternion),this.position.add(A0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(T0,e)}translateY(e){return this.translateOnAxis(C0,e)}translateZ(e){return this.translateOnAxis(b0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ku.copy(e):Ku.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(al,Ku,this.up):Ea.lookAt(Ku,al,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Qr.setFromRotationMatrix(Ea),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(R0),kr.child=e,this.dispatchEvent(kr),kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(uA),Sd.child=e,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(R0),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,e,oA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,lA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(d,_){return d[_.uuid]===void 0&&(d[_.uuid]=_.toJSON(e)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const _=d.shapes;if(Array.isArray(_))for(let m=0,v=_.length;m<v;m++){const p=_[m];f(e.shapes,p)}else f(e.shapes,_)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let _=0,m=this.material.length;_<m;_++)d.push(f(e.materials,this.material[_]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const _=this.animations[d];l.animations.push(f(e.animations,_))}}if(i){const d=h(e.geometries),_=h(e.materials),m=h(e.textures),v=h(e.images),p=h(e.shapes),S=h(e.skeletons),y=h(e.animations),x=h(e.nodes);d.length>0&&(r.geometries=d),_.length>0&&(r.materials=_),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),p.length>0&&(r.shapes=p),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),x.length>0&&(r.nodes=x)}return r.object=l,r;function h(d){const _=[];for(const m in d){const v=d[m];delete v.metadata,_.push(v)}return _}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}An.DEFAULT_UP=new it(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new it,Sa=new it,yd=new it,ya=new it,Yr=new it,Xr=new it,w0=new it,Md=new it,xd=new it,Ad=new it,Td=new rn,Cd=new rn,bd=new rn;class Si{constructor(e=new it,i=new it,r=new it){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),wi.subVectors(e,i),l.cross(wi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){wi.subVectors(l,i),Sa.subVectors(r,i),yd.subVectors(e,i);const h=wi.dot(wi),d=wi.dot(Sa),_=wi.dot(yd),m=Sa.dot(Sa),v=Sa.dot(yd),p=h*m-d*d;if(p===0)return f.set(0,0,0),null;const S=1/p,y=(m*_-d*v)*S,x=(h*v-d*_)*S;return f.set(1-y-x,x,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(e,i,r,l,f,h,d,_){return this.getBarycoord(e,i,r,l,ya)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,ya.x),_.addScaledVector(h,ya.y),_.addScaledVector(d,ya.z),_)}static getInterpolatedAttribute(e,i,r,l,f,h){return Td.setScalar(0),Cd.setScalar(0),bd.setScalar(0),Td.fromBufferAttribute(e,i),Cd.fromBufferAttribute(e,r),bd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Td,f.x),h.addScaledVector(Cd,f.y),h.addScaledVector(bd,f.z),h}static isFrontFacing(e,i,r,l){return wi.subVectors(r,i),Sa.subVectors(e,i),wi.cross(Sa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),wi.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Si.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return Si.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let h,d;Yr.subVectors(l,r),Xr.subVectors(f,r),Md.subVectors(e,r);const _=Yr.dot(Md),m=Xr.dot(Md);if(_<=0&&m<=0)return i.copy(r);xd.subVectors(e,l);const v=Yr.dot(xd),p=Xr.dot(xd);if(v>=0&&p<=v)return i.copy(l);const S=_*p-v*m;if(S<=0&&_>=0&&v<=0)return h=_/(_-v),i.copy(r).addScaledVector(Yr,h);Ad.subVectors(e,f);const y=Yr.dot(Ad),x=Xr.dot(Ad);if(x>=0&&y<=x)return i.copy(f);const C=y*m-_*x;if(C<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(Xr,d);const M=v*x-y*p;if(M<=0&&p-v>=0&&y-x>=0)return w0.subVectors(f,l),d=(p-v)/(p-v+(y-x)),i.copy(l).addScaledVector(w0,d);const E=1/(M+C+S);return h=C*E,d=S*E,i.copy(r).addScaledVector(Yr,h).addScaledVector(Xr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const LE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},qu={h:0,s:0,l:0};function Rd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class be{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ue.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ue.workingColorSpace){if(e=Jx(e,1),i=Me(i,0,1),r=Me(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=Rd(h,f,e+1/3),this.g=Rd(h,f,e),this.b=Rd(h,f,e-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(e,i=Ei){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ei){const r=LE[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return Ue.workingToColorSpace(In.copy(this),e),Math.round(Me(In.r*255,0,255))*65536+Math.round(Me(In.g*255,0,255))*256+Math.round(Me(In.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.workingToColorSpace(In.copy(this),i);const r=In.r,l=In.g,f=In.b,h=Math.max(r,l,f),d=Math.min(r,l,f);let _,m;const v=(d+h)/2;if(d===h)_=0,m=0;else{const p=h-d;switch(m=v<=.5?p/(h+d):p/(2-h-d),h){case r:_=(l-f)/p+(l<f?6:0);break;case l:_=(f-r)/p+2;break;case f:_=(r-l)/p+4;break}_/=6}return e.h=_,e.s=m,e.l=v,e}getRGB(e,i=Ue.workingColorSpace){return Ue.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Ei){Ue.workingToColorSpace(In.copy(this),e);const i=In.r,r=In.g,l=In.b;return e!==Ei?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(as),this.setHSL(as.h+e,as.s+i,as.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(as),e.getHSL(qu);const r=cd(as.h,qu.h,i),l=cd(as.s,qu.s,i),f=cd(as.l,qu.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new be;be.NAMES=LE;let cA=0;class ro extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cA++}),this.uuid=ml(),this.name="",this.type="Material",this.blending=$r,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Yd,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(r.blending=this.blending),this.side!==us&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==kd&&(r.blendSrc=this.blendSrc),this.blendDst!==Yd&&(r.blendDst=this.blendDst),this.blendEquation!==Vs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const h=[];for(const d in f){const _=f[d];delete _.metadata,h.push(_)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class IE extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=SE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new it,Wu=new fe;let fA=0;class ji{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fA++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=g0,this.updateRanges=[],this.gpuType=Aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Wu.fromBufferAttribute(this,i),Wu.applyMatrix3(e),this.setXY(i,Wu.x,Wu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=el(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Jn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=el(i,this.array)),i}setX(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=el(i,this.array)),i}setY(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=el(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=el(i,this.array)),i}setW(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),r=Jn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),r=Jn(r,this.array),l=Jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),r=Jn(r,this.array),l=Jn(l,this.array),f=Jn(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==g0&&(e.usage=this.usage),e}}class BE extends ji{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class PE extends ji{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Oi extends ji{constructor(e,i,r){super(new Float32Array(e),i,r)}}let hA=0;const vi=new en,wd=new An,Jr=new it,oi=new gl,sl=new gl,xn=new it;class ta extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hA++}),this.uuid=ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(NE(e)?PE:BE)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new me().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,i,r){return vi.makeTranslation(e,i,r),this.applyMatrix4(vi),this}scale(e,i,r){return vi.makeScale(e,i,r),this.applyMatrix4(vi),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Oi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];oi.setFromBufferAttribute(f),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(e){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];sl.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(oi.min,sl.min),oi.expandByPoint(xn),xn.addVectors(oi.max,sl.max),oi.expandByPoint(xn)):(oi.expandByPoint(sl.min),oi.expandByPoint(sl.max))}oi.getCenter(r);let l=0;for(let f=0,h=e.count;f<h;f++)xn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],_=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)xn.fromBufferAttribute(d,m),_&&(Jr.fromBufferAttribute(e,m),xn.add(Jr)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],_=[];for(let q=0;q<r.count;q++)d[q]=new it,_[q]=new it;const m=new it,v=new it,p=new it,S=new fe,y=new fe,x=new fe,C=new it,M=new it;function E(q,w,R){m.fromBufferAttribute(r,q),v.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),S.fromBufferAttribute(f,q),y.fromBufferAttribute(f,w),x.fromBufferAttribute(f,R),v.sub(m),p.sub(m),y.sub(S),x.sub(S);const X=1/(y.x*x.y-x.x*y.y);isFinite(X)&&(C.copy(v).multiplyScalar(x.y).addScaledVector(p,-y.y).multiplyScalar(X),M.copy(p).multiplyScalar(y.x).addScaledVector(v,-x.x).multiplyScalar(X),d[q].add(C),d[w].add(C),d[R].add(C),_[q].add(M),_[w].add(M),_[R].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let q=0,w=F.length;q<w;++q){const R=F[q],X=R.start,ut=R.count;for(let J=X,P=X+ut;J<P;J+=3)E(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const L=new it,D=new it,Y=new it,G=new it;function H(q){Y.fromBufferAttribute(l,q),G.copy(Y);const w=d[q];L.copy(w),L.sub(Y.multiplyScalar(Y.dot(w))).normalize(),D.crossVectors(G,w);const X=D.dot(_[q])<0?-1:1;h.setXYZW(q,L.x,L.y,L.z,X)}for(let q=0,w=F.length;q<w;++q){const R=F[q],X=R.start,ut=R.count;for(let J=X,P=X+ut;J<P;J+=3)H(e.getX(J+0)),H(e.getX(J+1)),H(e.getX(J+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ji(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new it,f=new it,h=new it,d=new it,_=new it,m=new it,v=new it,p=new it;if(e)for(let S=0,y=e.count;S<y;S+=3){const x=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,x),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),v.subVectors(h,f),p.subVectors(l,f),v.cross(p),d.fromBufferAttribute(r,x),_.fromBufferAttribute(r,C),m.fromBufferAttribute(r,M),d.add(v),_.add(v),m.add(v),r.setXYZ(x,d.x,d.y,d.z),r.setXYZ(C,_.x,_.y,_.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),f.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,f),p.subVectors(l,f),v.cross(p),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(d,_){const m=d.array,v=d.itemSize,p=d.normalized,S=new m.constructor(_.length*v);let y=0,x=0;for(let C=0,M=_.length;C<M;C++){d.isInterleavedBufferAttribute?y=_[C]*d.data.stride+d.offset:y=_[C]*v;for(let E=0;E<v;E++)S[x++]=m[y++]}return new ji(S,v,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ta,r=this.index.array,l=this.attributes;for(const d in l){const _=l[d],m=e(_,r);i.setAttribute(d,m)}const f=this.morphAttributes;for(const d in f){const _=[],m=f[d];for(let v=0,p=m.length;v<p;v++){const S=m[v],y=e(S,r);_.push(y)}i.morphAttributes[d]=_}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,_=h.length;d<_;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const m in _)_[m]!==void 0&&(e[m]=_[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const _ in r){const m=r[_];e.data.attributes[_]=m.toJSON(e.data)}const l={};let f=!1;for(const _ in this.morphAttributes){const m=this.morphAttributes[_],v=[];for(let p=0,S=m.length;p<S;p++){const y=m[p];v.push(y.toJSON(e.data))}v.length>0&&(l[_]=v,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const f=e.morphAttributes;for(const m in f){const v=[],p=f[m];for(let S=0,y=p.length;S<y;S++)v.push(p[S].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,v=h.length;m<v;m++){const p=h[m];this.addGroup(p.start,p.count,p.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const _=e.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D0=new en,Ps=new bc,ju=new Cc,U0=new it,Zu=new it,$u=new it,tc=new it,Dd=new it,ec=new it,N0=new it,nc=new it;class Wi extends An{constructor(e=new ta,i=new IE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){ec.set(0,0,0);for(let _=0,m=f.length;_<m;_++){const v=d[_],p=f[_];v!==0&&(Dd.fromBufferAttribute(p,e),h?ec.addScaledVector(Dd,v):ec.addScaledVector(Dd.sub(i),v))}i.add(ec)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ju.copy(r.boundingSphere),ju.applyMatrix4(f),Ps.copy(e.ray).recast(e.near),!(ju.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(ju,U0)===null||Ps.origin.distanceToSquared(U0)>(e.far-e.near)**2))&&(D0.copy(f).invert(),Ps.copy(e.ray).applyMatrix4(D0),!(r.boundingBox!==null&&Ps.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Ps)))}_computeIntersections(e,i,r){let l;const f=this.geometry,h=this.material,d=f.index,_=f.attributes.position,m=f.attributes.uv,v=f.attributes.uv1,p=f.attributes.normal,S=f.groups,y=f.drawRange;if(d!==null)if(Array.isArray(h))for(let x=0,C=S.length;x<C;x++){const M=S[x],E=h[M.materialIndex],F=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=F,Y=L;D<Y;D+=3){const G=d.getX(D),H=d.getX(D+1),q=d.getX(D+2);l=ic(this,E,e,r,m,v,p,G,H,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const x=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=x,E=C;M<E;M+=3){const F=d.getX(M),L=d.getX(M+1),D=d.getX(M+2);l=ic(this,h,e,r,m,v,p,F,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(_!==void 0)if(Array.isArray(h))for(let x=0,C=S.length;x<C;x++){const M=S[x],E=h[M.materialIndex],F=Math.max(M.start,y.start),L=Math.min(_.count,Math.min(M.start+M.count,y.start+y.count));for(let D=F,Y=L;D<Y;D+=3){const G=D,H=D+1,q=D+2;l=ic(this,E,e,r,m,v,p,G,H,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const x=Math.max(0,y.start),C=Math.min(_.count,y.start+y.count);for(let M=x,E=C;M<E;M+=3){const F=M,L=M+1,D=M+2;l=ic(this,h,e,r,m,v,p,F,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function dA(o,e,i,r,l,f,h,d){let _;if(e.side===qn?_=r.intersectTriangle(h,f,l,!0,d):_=r.intersectTriangle(l,f,h,e.side===us,d),_===null)return null;nc.copy(d),nc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(nc);return m<i.near||m>i.far?null:{distance:m,point:nc.clone(),object:o}}function ic(o,e,i,r,l,f,h,d,_,m){o.getVertexPosition(d,Zu),o.getVertexPosition(_,$u),o.getVertexPosition(m,tc);const v=dA(o,e,i,r,Zu,$u,tc,N0);if(v){const p=new it;Si.getBarycoord(N0,Zu,$u,tc,p),l&&(v.uv=Si.getInterpolatedAttribute(l,d,_,m,p,new fe)),f&&(v.uv1=Si.getInterpolatedAttribute(f,d,_,m,p,new fe)),h&&(v.normal=Si.getInterpolatedAttribute(h,d,_,m,p,new it),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:_,c:m,normal:new it,materialIndex:0};Si.getNormal(Zu,$u,tc,S.normal),v.face=S,v.barycoord=p}return v}class _l extends ta{constructor(e=1,i=1,r=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:h};const d=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const _=[],m=[],v=[],p=[];let S=0,y=0;x("z","y","x",-1,-1,r,i,e,h,f,0),x("z","y","x",1,-1,r,i,-e,h,f,1),x("x","z","y",1,1,e,r,i,l,h,2),x("x","z","y",1,-1,e,r,-i,l,h,3),x("x","y","z",1,-1,e,i,r,l,f,4),x("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(_),this.setAttribute("position",new Oi(m,3)),this.setAttribute("normal",new Oi(v,3)),this.setAttribute("uv",new Oi(p,2));function x(C,M,E,F,L,D,Y,G,H,q,w){const R=D/H,X=Y/q,ut=D/2,J=Y/2,P=G/2,$=H+1,U=q+1;let V=0,B=0;const ct=new it;for(let dt=0;dt<U;dt++){const vt=dt*X-J;for(let wt=0;wt<$;wt++){const Vt=wt*R-ut;ct[C]=Vt*F,ct[M]=vt*L,ct[E]=P,m.push(ct.x,ct.y,ct.z),ct[C]=0,ct[M]=0,ct[E]=G>0?1:-1,v.push(ct.x,ct.y,ct.z),p.push(wt/H),p.push(1-dt/q),V+=1}}for(let dt=0;dt<q;dt++)for(let vt=0;vt<H;vt++){const wt=S+vt+$*dt,Vt=S+vt+$*(dt+1),N=S+(vt+1)+$*(dt+1),lt=S+(vt+1)+$*dt;_.push(wt,Vt,lt),_.push(Vt,N,lt),B+=6}d.addGroup(y,B,w),y+=B,S+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Gn(o){const e={};for(let i=0;i<o.length;i++){const r=so(o[i]);for(const l in r)e[l]=r[l]}return e}function pA(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function zE(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const mA={clone:so,merge:Gn};var gA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_A=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gA,this.fragmentShader=_A,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=pA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class FE extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new it,O0=new fe,L0=new fe;class Di extends FE{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Up*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Up*2*Math.atan(Math.tan(ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,i){return this.getViewBounds(e,O0,L0),i.subVectors(L0,O0)}setViewOffset(e,i,r,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ll*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const _=h.fullWidth,m=h.fullHeight;f+=h.offsetX*l/_,i-=h.offsetY*r/m,l*=h.width/_,r*=h.height/m}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Kr=-90,qr=1;class vA extends An{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Di(Kr,qr,e,i);l.layers=this.layers,this.add(l);const f=new Di(Kr,qr,e,i);f.layers=this.layers,this.add(f);const h=new Di(Kr,qr,e,i);h.layers=this.layers,this.add(h);const d=new Di(Kr,qr,e,i);d.layers=this.layers,this.add(d);const _=new Di(Kr,qr,e,i);_.layers=this.layers,this.add(_);const m=new Di(Kr,qr,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,h,d,_]=i;for(const m of i)this.remove(m);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(e===yc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,_,m,v]=this.children,p=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,_),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(p,S,y),e.xr.enabled=x,r.texture.needsPMREMUpdate=!0}}class HE extends Wn{constructor(e=[],i=no,r,l,f,h,d,_,m,v){super(e,i,r,l,f,h,d,_,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EA extends qs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new HE(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new _l(5,5,5),f=new cs({name:"CubemapFromEquirect",uniforms:so(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:os});f.uniforms.tEquirect.value=i;const h=new Wi(l,f),d=i.minFilter;return i.minFilter===Xs&&(i.minFilter=Ki),new vA(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(f)}}class ac extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SA={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,h=null;const d=this._targetRay,_=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),E=this._getHandJoint(m,C);M!==null&&(E.matrix.fromArray(M.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=M.radius),E.visible=M!==null}const v=m.joints["index-finger-tip"],p=m.joints["thumb-tip"],S=v.position.distanceTo(p.position),y=.02,x=.005;m.inputState.pinching&&S>y+x?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=y-x&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else _!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(SA)))}return d!==null&&(d.visible=l!==null),_!==null&&(_.visible=f!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new ac;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class yA extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Nd=new it,MA=new it,xA=new me;class Xi{constructor(e=new it(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Nd.subVectors(r,i).cross(MA.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Nd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||xA.getNormalMatrix(e),l=this.coplanarPoint(Nd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new Cc,AA=new fe(.5,.5),sc=new it;class Yp{constructor(e=new Xi,i=new Xi,r=new Xi,l=new Xi,f=new Xi,h=new Xi){this.planes=[e,i,r,l,f,h]}set(e,i,r,l,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=qi,r=!1){const l=this.planes,f=e.elements,h=f[0],d=f[1],_=f[2],m=f[3],v=f[4],p=f[5],S=f[6],y=f[7],x=f[8],C=f[9],M=f[10],E=f[11],F=f[12],L=f[13],D=f[14],Y=f[15];if(l[0].setComponents(m-h,y-v,E-x,Y-F).normalize(),l[1].setComponents(m+h,y+v,E+x,Y+F).normalize(),l[2].setComponents(m+d,y+p,E+C,Y+L).normalize(),l[3].setComponents(m-d,y-p,E-C,Y-L).normalize(),r)l[4].setComponents(_,S,M,D).normalize(),l[5].setComponents(m-_,y-S,E-M,Y-D).normalize();else if(l[4].setComponents(m-_,y-S,E-M,Y-D).normalize(),i===qi)l[5].setComponents(m+_,y+S,E+M,Y+D).normalize();else if(i===yc)l[5].setComponents(_,S,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const i=AA.distanceTo(e.center);return zs.radius=.7071067811865476+i,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(sc.x=l.normal.x>0?e.max.x:e.min.x,sc.y=l.normal.y>0?e.max.y:e.min.y,sc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class GE extends ro{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xc=new it,Ac=new it,I0=new en,rl=new bc,rc=new Cc,Od=new it,B0=new it;class TA extends An{constructor(e=new ta,i=new GE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,f=i.count;l<f;l++)xc.fromBufferAttribute(i,l-1),Ac.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=xc.distanceTo(Ac);e.setAttribute("lineDistance",new Oi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,f=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),rc.copy(r.boundingSphere),rc.applyMatrix4(l),rc.radius+=f,e.ray.intersectsSphere(rc)===!1)return;I0.copy(l).invert(),rl.copy(e.ray).applyMatrix4(I0);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),_=d*d,m=this.isLineSegments?2:1,v=r.index,S=r.attributes.position;if(v!==null){const y=Math.max(0,h.start),x=Math.min(v.count,h.start+h.count);for(let C=y,M=x-1;C<M;C+=m){const E=v.getX(C),F=v.getX(C+1),L=oc(this,e,rl,_,E,F,C);L&&i.push(L)}if(this.isLineLoop){const C=v.getX(x-1),M=v.getX(y),E=oc(this,e,rl,_,C,M,x-1);E&&i.push(E)}}else{const y=Math.max(0,h.start),x=Math.min(S.count,h.start+h.count);for(let C=y,M=x-1;C<M;C+=m){const E=oc(this,e,rl,_,C,C+1,C);E&&i.push(E)}if(this.isLineLoop){const C=oc(this,e,rl,_,x-1,y,x-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function oc(o,e,i,r,l,f,h){const d=o.geometry.attributes.position;if(xc.fromBufferAttribute(d,l),Ac.fromBufferAttribute(d,f),i.distanceSqToSegment(xc,Ac,Od,B0)>r)return;Od.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(Od);if(!(m<e.near||m>e.far))return{distance:m,point:B0.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const P0=new it,z0=new it;class CA extends TA{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,f=i.count;l<f;l+=2)P0.fromBufferAttribute(i,l),z0.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+P0.distanceTo(z0);e.setAttribute("lineDistance",new Oi(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class VE extends Wn{constructor(e,i,r=Js,l,f,h,d=Ni,_=Ni,m,v=fl,p=1){if(v!==fl&&v!==hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:p};super(S,l,f,h,d,_,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class QE extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const lc=new it,uc=new it,Ld=new it,cc=new Si;class bA extends ta{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),f=Math.cos(ll*i),h=e.getIndex(),d=e.getAttribute("position"),_=h?h.count:d.count,m=[0,0,0],v=["a","b","c"],p=new Array(3),S={},y=[];for(let x=0;x<_;x+=3){h?(m[0]=h.getX(x),m[1]=h.getX(x+1),m[2]=h.getX(x+2)):(m[0]=x,m[1]=x+1,m[2]=x+2);const{a:C,b:M,c:E}=cc;if(C.fromBufferAttribute(d,m[0]),M.fromBufferAttribute(d,m[1]),E.fromBufferAttribute(d,m[2]),cc.getNormal(Ld),p[0]=`${Math.round(C.x*l)},${Math.round(C.y*l)},${Math.round(C.z*l)}`,p[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,p[2]=`${Math.round(E.x*l)},${Math.round(E.y*l)},${Math.round(E.z*l)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let F=0;F<3;F++){const L=(F+1)%3,D=p[F],Y=p[L],G=cc[v[F]],H=cc[v[L]],q=`${D}_${Y}`,w=`${Y}_${D}`;w in S&&S[w]?(Ld.dot(S[w].normal)<=f&&(y.push(G.x,G.y,G.z),y.push(H.x,H.y,H.z)),S[w]=null):q in S||(S[q]={index0:m[F],index1:m[L],normal:Ld.clone()})}}for(const x in S)if(S[x]){const{index0:C,index1:M}=S[x];lc.fromBufferAttribute(d,C),uc.fromBufferAttribute(d,M),y.push(lc.x,lc.y,lc.z),y.push(uc.x,uc.y,uc.z)}this.setAttribute("position",new Oi(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Rc extends ta{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,h=i/2,d=Math.floor(r),_=Math.floor(l),m=d+1,v=_+1,p=e/d,S=i/_,y=[],x=[],C=[],M=[];for(let E=0;E<v;E++){const F=E*S-h;for(let L=0;L<m;L++){const D=L*p-f;x.push(D,-F,0),C.push(0,0,1),M.push(L/d),M.push(1-E/_)}}for(let E=0;E<_;E++)for(let F=0;F<d;F++){const L=F+m*E,D=F+m*(E+1),Y=F+1+m*(E+1),G=F+1+m*E;y.push(L,D,G),y.push(D,Y,G)}this.setIndex(y),this.setAttribute("position",new Oi(x,3)),this.setAttribute("normal",new Oi(C,3)),this.setAttribute("uv",new Oi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.width,e.height,e.widthSegments,e.heightSegments)}}class RA extends ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=DE,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wA extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Px,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DA extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class kE extends An{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class UA extends kE{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Id=new en,F0=new it,H0=new it;class NA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Zi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yp,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;F0.setFromMatrixPosition(e.matrixWorld),i.position.copy(F0),H0.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(H0),i.updateMatrixWorld(),Id.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Id,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Id)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xp extends FE{constructor(e=-1,i=1,r=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=l+i,_=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,h=f+m*this.view.width,d-=v*this.view.offsetY,_=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class OA extends NA{constructor(){super(new Xp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LA extends kE{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new OA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class IA extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const G0=new en;class BA{constructor(e,i,r=0,l=1/0){this.ray=new bc(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new kp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return G0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(G0),this}intersectObject(e,i=!0,r=[]){return Np(e,this,r,i),r.sort(V0),r}intersectObjects(e,i=!0,r=[]){for(let l=0,f=e.length;l<f;l++)Np(e[l],this,r,i);return r.sort(V0),r}}function V0(o,e){return o.distance-e.distance}function Np(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)Np(f[h],e,i,!0)}}class Q0{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class PA extends Ws{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function k0(o,e,i,r){const l=zA(r);switch(i){case CE:return o*e;case RE:return o*e/l.components*l.byteLength;case Hp:return o*e/l.components*l.byteLength;case wE:return o*e*2/l.components*l.byteLength;case Gp:return o*e*2/l.components*l.byteLength;case bE:return o*e*3/l.components*l.byteLength;case Ui:return o*e*4/l.components*l.byteLength;case Vp:return o*e*4/l.components*l.byteLength;case mc:case gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _c:case vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ap:case rp:return Math.max(o,16)*Math.max(e,8)/4;case ip:case sp:return Math.max(o,8)*Math.max(e,8)/2;case op:case lp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case up:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case fp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case hp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case dp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case pp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case mp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case gp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case _p:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case vp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case yp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case xp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ap:case Tp:case Cp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case bp:case Rp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case wp:case Dp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function zA(o){switch(o){case Zi:case ME:return{byteLength:1,components:1};case ul:case xE:case pl:return{byteLength:2,components:1};case zp:case Fp:return{byteLength:2,components:4};case Js:case Pp:case Aa:return{byteLength:4,components:1};case AE:case TE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bp);function YE(){let o=null,e=!1,i=null,r=null;function l(f,h){i(f,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function FA(o){const e=new WeakMap;function i(d,_){const m=d.array,v=d.usage,p=m.byteLength,S=o.createBuffer();o.bindBuffer(_,S),o.bufferData(_,m,v),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:p}}function r(d,_,m){const v=_.array,p=_.updateRanges;if(o.bindBuffer(m,d),p.length===0)o.bufferSubData(m,0,v);else{p.sort((y,x)=>y.start-x.start);let S=0;for(let y=1;y<p.length;y++){const x=p[S],C=p[y];C.start<=x.start+x.count+1?x.count=Math.max(x.count,C.start+C.count-x.start):(++S,p[S]=C)}p.length=S+1;for(let y=0,x=p.length;y<x;y++){const C=p[y];o.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}_.clearUpdateRanges()}_.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const _=e.get(d);_&&(o.deleteBuffer(_.buffer),e.delete(d))}function h(d,_){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,_));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,_),m.version=d.version}}return{get:l,remove:f,update:h}}var HA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,VA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$A=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gT="gl_FragColor = linearToOutputTexel( gl_FragColor );",_T=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ST=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,OT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_C=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,MC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$C=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ab=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ob=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_b=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:HA,alphahash_pars_fragment:GA,alphamap_fragment:VA,alphamap_pars_fragment:QA,alphatest_fragment:kA,alphatest_pars_fragment:YA,aomap_fragment:XA,aomap_pars_fragment:JA,batching_pars_vertex:KA,batching_vertex:qA,begin_vertex:WA,beginnormal_vertex:jA,bsdfs:ZA,iridescence_fragment:$A,bumpmap_pars_fragment:tT,clipping_planes_fragment:eT,clipping_planes_pars_fragment:nT,clipping_planes_pars_vertex:iT,clipping_planes_vertex:aT,color_fragment:sT,color_pars_fragment:rT,color_pars_vertex:oT,color_vertex:lT,common:uT,cube_uv_reflection_fragment:cT,defaultnormal_vertex:fT,displacementmap_pars_vertex:hT,displacementmap_vertex:dT,emissivemap_fragment:pT,emissivemap_pars_fragment:mT,colorspace_fragment:gT,colorspace_pars_fragment:_T,envmap_fragment:vT,envmap_common_pars_fragment:ET,envmap_pars_fragment:ST,envmap_pars_vertex:yT,envmap_physical_pars_fragment:NT,envmap_vertex:MT,fog_vertex:xT,fog_pars_vertex:AT,fog_fragment:TT,fog_pars_fragment:CT,gradientmap_pars_fragment:bT,lightmap_pars_fragment:RT,lights_lambert_fragment:wT,lights_lambert_pars_fragment:DT,lights_pars_begin:UT,lights_toon_fragment:OT,lights_toon_pars_fragment:LT,lights_phong_fragment:IT,lights_phong_pars_fragment:BT,lights_physical_fragment:PT,lights_physical_pars_fragment:zT,lights_fragment_begin:FT,lights_fragment_maps:HT,lights_fragment_end:GT,logdepthbuf_fragment:VT,logdepthbuf_pars_fragment:QT,logdepthbuf_pars_vertex:kT,logdepthbuf_vertex:YT,map_fragment:XT,map_pars_fragment:JT,map_particle_fragment:KT,map_particle_pars_fragment:qT,metalnessmap_fragment:WT,metalnessmap_pars_fragment:jT,morphinstance_vertex:ZT,morphcolor_vertex:$T,morphnormal_vertex:tC,morphtarget_pars_vertex:eC,morphtarget_vertex:nC,normal_fragment_begin:iC,normal_fragment_maps:aC,normal_pars_fragment:sC,normal_pars_vertex:rC,normal_vertex:oC,normalmap_pars_fragment:lC,clearcoat_normal_fragment_begin:uC,clearcoat_normal_fragment_maps:cC,clearcoat_pars_fragment:fC,iridescence_pars_fragment:hC,opaque_fragment:dC,packing:pC,premultiplied_alpha_fragment:mC,project_vertex:gC,dithering_fragment:_C,dithering_pars_fragment:vC,roughnessmap_fragment:EC,roughnessmap_pars_fragment:SC,shadowmap_pars_fragment:yC,shadowmap_pars_vertex:MC,shadowmap_vertex:xC,shadowmask_pars_fragment:AC,skinbase_vertex:TC,skinning_pars_vertex:CC,skinning_vertex:bC,skinnormal_vertex:RC,specularmap_fragment:wC,specularmap_pars_fragment:DC,tonemapping_fragment:UC,tonemapping_pars_fragment:NC,transmission_fragment:OC,transmission_pars_fragment:LC,uv_pars_fragment:IC,uv_pars_vertex:BC,uv_vertex:PC,worldpos_vertex:zC,background_vert:FC,background_frag:HC,backgroundCube_vert:GC,backgroundCube_frag:VC,cube_vert:QC,cube_frag:kC,depth_vert:YC,depth_frag:XC,distanceRGBA_vert:JC,distanceRGBA_frag:KC,equirect_vert:qC,equirect_frag:WC,linedashed_vert:jC,linedashed_frag:ZC,meshbasic_vert:$C,meshbasic_frag:tb,meshlambert_vert:eb,meshlambert_frag:nb,meshmatcap_vert:ib,meshmatcap_frag:ab,meshnormal_vert:sb,meshnormal_frag:rb,meshphong_vert:ob,meshphong_frag:lb,meshphysical_vert:ub,meshphysical_frag:cb,meshtoon_vert:fb,meshtoon_frag:hb,points_vert:db,points_frag:pb,shadow_vert:mb,shadow_frag:gb,sprite_vert:_b,sprite_frag:vb},zt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Ji={basic:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new be(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Gn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Gn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new be(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Gn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Gn([zt.points,zt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Gn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Gn([zt.common,zt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Gn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Gn([zt.sprite,zt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Gn([zt.common,zt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Gn([zt.lights,zt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ji.physical={uniforms:Gn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const fc={r:0,b:0,g:0},Fs=new $i,Eb=new en;function Sb(o,e,i,r,l,f,h){const d=new be(0);let _=f===!0?0:1,m,v,p=null,S=0,y=null;function x(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function C(L){let D=!1;const Y=x(L);Y===null?E(d,_):Y&&Y.isColor&&(E(Y,1),D=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(L,D){const Y=x(D);Y&&(Y.isCubeTexture||Y.mapping===Tc)?(v===void 0&&(v=new Wi(new _l(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:so(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,H,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Fs.copy(D.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,Y.isCubeTexture&&Y.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),v.material.uniforms.envMap.value=Y,v.material.uniforms.flipEnvMap.value=Y.isCubeTexture&&Y.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Eb.makeRotationFromEuler(Fs)),v.material.toneMapped=Ue.getTransfer(Y.colorSpace)!==Qe,(p!==Y||S!==Y.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,p=Y,S=Y.version,y=o.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):Y&&Y.isTexture&&(m===void 0&&(m=new Wi(new Rc(2,2),new cs({name:"BackgroundMaterial",uniforms:so(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=Y,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ue.getTransfer(Y.colorSpace)!==Qe,Y.matrixAutoUpdate===!0&&Y.updateMatrix(),m.material.uniforms.uvTransform.value.copy(Y.matrix),(p!==Y||S!==Y.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,p=Y,S=Y.version,y=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function E(L,D){L.getRGB(fc,zE(o)),r.buffers.color.setClear(fc.r,fc.g,fc.b,D,h)}function F(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),_=D,E(d,_)},getClearAlpha:function(){return _},setClearAlpha:function(L){_=L,E(d,_)},render:C,addToRenderList:M,dispose:F}}function yb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let f=l,h=!1;function d(R,X,ut,J,P){let $=!1;const U=p(J,ut,X);f!==U&&(f=U,m(f.object)),$=y(R,J,ut,P),$&&x(R,J,ut,P),P!==null&&e.update(P,o.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,D(R,X,ut,J),P!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function _(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function p(R,X,ut){const J=ut.wireframe===!0;let P=r[R.id];P===void 0&&(P={},r[R.id]=P);let $=P[X.id];$===void 0&&($={},P[X.id]=$);let U=$[J];return U===void 0&&(U=S(_()),$[J]=U),U}function S(R){const X=[],ut=[],J=[];for(let P=0;P<i;P++)X[P]=0,ut[P]=0,J[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ut,attributeDivisors:J,object:R,attributes:{},index:null}}function y(R,X,ut,J){const P=f.attributes,$=X.attributes;let U=0;const V=ut.getAttributes();for(const B in V)if(V[B].location>=0){const dt=P[B];let vt=$[B];if(vt===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(vt=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(vt=R.instanceColor)),dt===void 0||dt.attribute!==vt||vt&&dt.data!==vt.data)return!0;U++}return f.attributesNum!==U||f.index!==J}function x(R,X,ut,J){const P={},$=X.attributes;let U=0;const V=ut.getAttributes();for(const B in V)if(V[B].location>=0){let dt=$[B];dt===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(dt=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(dt=R.instanceColor));const vt={};vt.attribute=dt,dt&&dt.data&&(vt.data=dt.data),P[B]=vt,U++}f.attributes=P,f.attributesNum=U,f.index=J}function C(){const R=f.newAttributes;for(let X=0,ut=R.length;X<ut;X++)R[X]=0}function M(R){E(R,0)}function E(R,X){const ut=f.newAttributes,J=f.enabledAttributes,P=f.attributeDivisors;ut[R]=1,J[R]===0&&(o.enableVertexAttribArray(R),J[R]=1),P[R]!==X&&(o.vertexAttribDivisor(R,X),P[R]=X)}function F(){const R=f.newAttributes,X=f.enabledAttributes;for(let ut=0,J=X.length;ut<J;ut++)X[ut]!==R[ut]&&(o.disableVertexAttribArray(ut),X[ut]=0)}function L(R,X,ut,J,P,$,U){U===!0?o.vertexAttribIPointer(R,X,ut,P,$):o.vertexAttribPointer(R,X,ut,J,P,$)}function D(R,X,ut,J){C();const P=J.attributes,$=ut.getAttributes(),U=X.defaultAttributeValues;for(const V in $){const B=$[V];if(B.location>=0){let ct=P[V];if(ct===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(ct=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(ct=R.instanceColor)),ct!==void 0){const dt=ct.normalized,vt=ct.itemSize,wt=e.get(ct);if(wt===void 0)continue;const Vt=wt.buffer,N=wt.type,lt=wt.bytesPerElement,W=N===o.INT||N===o.UNSIGNED_INT||ct.gpuType===Pp;if(ct.isInterleavedBufferAttribute){const st=ct.data,yt=st.stride,Nt=ct.offset;if(st.isInstancedInterleavedBuffer){for(let bt=0;bt<B.locationSize;bt++)E(B.location+bt,st.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let bt=0;bt<B.locationSize;bt++)M(B.location+bt);o.bindBuffer(o.ARRAY_BUFFER,Vt);for(let bt=0;bt<B.locationSize;bt++)L(B.location+bt,vt/B.locationSize,N,dt,yt*lt,(Nt+vt/B.locationSize*bt)*lt,W)}else{if(ct.isInstancedBufferAttribute){for(let st=0;st<B.locationSize;st++)E(B.location+st,ct.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let st=0;st<B.locationSize;st++)M(B.location+st);o.bindBuffer(o.ARRAY_BUFFER,Vt);for(let st=0;st<B.locationSize;st++)L(B.location+st,vt/B.locationSize,N,dt,vt*lt,vt/B.locationSize*st*lt,W)}}else if(U!==void 0){const dt=U[V];if(dt!==void 0)switch(dt.length){case 2:o.vertexAttrib2fv(B.location,dt);break;case 3:o.vertexAttrib3fv(B.location,dt);break;case 4:o.vertexAttrib4fv(B.location,dt);break;default:o.vertexAttrib1fv(B.location,dt)}}}}F()}function Y(){q();for(const R in r){const X=r[R];for(const ut in X){const J=X[ut];for(const P in J)v(J[P].object),delete J[P];delete X[ut]}delete r[R]}}function G(R){if(r[R.id]===void 0)return;const X=r[R.id];for(const ut in X){const J=X[ut];for(const P in J)v(J[P].object),delete J[P];delete X[ut]}delete r[R.id]}function H(R){for(const X in r){const ut=r[X];if(ut[R.id]===void 0)continue;const J=ut[R.id];for(const P in J)v(J[P].object),delete J[P];delete ut[R.id]}}function q(){w(),h=!0,f!==l&&(f=l,m(f.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:w,dispose:Y,releaseStatesOfGeometry:G,releaseStatesOfProgram:H,initAttributes:C,enableAttribute:M,disableUnusedAttributes:F}}function Mb(o,e,i){let r;function l(m){r=m}function f(m,v){o.drawArrays(r,m,v),i.update(v,r,1)}function h(m,v,p){p!==0&&(o.drawArraysInstanced(r,m,v,p),i.update(v,r,p))}function d(m,v,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,p);let y=0;for(let x=0;x<p;x++)y+=v[x];i.update(y,r,1)}function _(m,v,p,S){if(p===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<m.length;x++)h(m[x],v[x],S[x]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,v,0,S,0,p);let x=0;for(let C=0;C<p;C++)x+=v[C]*S[C];i.update(x,r,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=_}function xb(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(H){return!(H!==Ui&&r.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const q=H===pl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==Zi&&r.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Aa&&!q)}function _(H){if(H==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=_(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const p=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Y=x>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:p,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:x,maxTextureSize:C,maxCubemapSize:M,maxAttributes:E,maxVertexUniforms:F,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:Y,maxSamples:G}}function Ab(o){const e=this;let i=null,r=0,l=!1,f=!1;const h=new Xi,d=new me,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(p,S){const y=p.length!==0||S||r!==0||l;return l=S,r=p.length,y},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,S){i=v(p,S,0)},this.setState=function(p,S,y){const x=p.clippingPlanes,C=p.clipIntersection,M=p.clipShadows,E=o.get(p);if(!l||x===null||x.length===0||f&&!M)f?v(null):m();else{const F=f?0:r,L=F*4;let D=E.clippingState||null;_.value=D,D=v(x,S,L,y);for(let Y=0;Y!==L;++Y)D[Y]=i[Y];E.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function m(){_.value!==i&&(_.value=i,_.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(p,S,y,x){const C=p!==null?p.length:0;let M=null;if(C!==0){if(M=_.value,x!==!0||M===null){const E=y+C*4,F=S.matrixWorldInverse;d.getNormalMatrix(F),(M===null||M.length<E)&&(M=new Float32Array(E));for(let L=0,D=y;L!==C;++L,D+=4)h.copy(p[L]).applyMatrix4(F,d),h.normal.toArray(M,D),M[D+3]=h.constant}_.value=M,_.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function Tb(o){let e=new WeakMap;function i(h,d){return d===$d?h.mapping=no:d===tp&&(h.mapping=io),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===$d||d===tp)if(e.has(h)){const _=e.get(h).texture;return i(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const m=new EA(_.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const jr=4,Y0=[.125,.215,.35,.446,.526,.582],Qs=20,Bd=new Xp,X0=new be;let Pd=null,zd=0,Fd=0,Hd=!1;const Gs=(1+Math.sqrt(5))/2,Wr=1/Gs,J0=[new it(-Gs,Wr,0),new it(Gs,Wr,0),new it(-Wr,0,Gs),new it(Wr,0,Gs),new it(0,Gs,-Wr),new it(0,Gs,Wr),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],Cb=new it;class K0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,f={}){const{size:h=256,position:d=Cb}=f;Pd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(e,r,l,_,d),i>0&&this._blur(_,0,0,i),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=W0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pd,zd,Fd),this._renderer.xr.enabled=Hd,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:pl,format:Ui,colorSpace:ao,depthBuffer:!1},l=q0(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q0(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bb(f)),this._blurMaterial=Rb(f,e,i)}return l}_compileMaterial(e){const i=new Wi(this._lodPlanes[0],e);this._renderer.compile(i,Bd)}_sceneToCubeUV(e,i,r,l,f){const _=new Di(90,1,i,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],p=this._renderer,S=p.autoClear,y=p.toneMapping;p.getClearColor(X0),p.toneMapping=ls,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(l),p.clearDepth(),p.setRenderTarget(null));const C=new IE({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),M=new Wi(new _l,C);let E=!1;const F=e.background;F?F.isColor&&(C.color.copy(F),e.background=null,E=!0):(C.color.copy(X0),E=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(_.up.set(0,m[L],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+v[L],f.y,f.z)):D===1?(_.up.set(0,0,m[L]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+v[L],f.z)):(_.up.set(0,m[L],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+v[L]));const Y=this._cubeSize;hc(l,D*Y,L>2?Y:0,Y,Y),p.setRenderTarget(l),E&&p.render(M,_),p.render(e,_)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=y,p.autoClear=S,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===no||e.mapping===io;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=j0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=W0());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new Wi(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const _=this._cubeSize;hc(i,0,0,3*_,2*_),r.setRenderTarget(i),r.render(h,Bd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=J0[(l-f-1)%J0.length];this._blur(e,f-1,f,h,d)}i.autoClear=r}_blur(e,i,r,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",f),this._halfBlur(h,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,h,d){const _=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,p=new Wi(this._lodPlanes[l],m),S=m.uniforms,y=this._sizeLods[r]-1,x=isFinite(f)?Math.PI/(2*y):2*Math.PI/(2*Qs-1),C=f/x,M=isFinite(f)?1+Math.floor(v*C):Qs;M>Qs&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Qs}`);const E=[];let F=0;for(let H=0;H<Qs;++H){const q=H/C,w=Math.exp(-q*q/2);E.push(w),H===0?F+=w:H<M&&(F+=2*w)}for(let H=0;H<E.length;H++)E[H]=E[H]/F;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=E,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=x,S.mipInt.value=L-r;const D=this._sizeLods[l],Y=3*D*(l>L-jr?l-L+jr:0),G=4*(this._cubeSize-D);hc(i,Y,G,3*D,2*D),_.setRenderTarget(i),_.render(p,Bd)}}function bb(o){const e=[],i=[],r=[];let l=o;const f=o-jr+1+Y0.length;for(let h=0;h<f;h++){const d=Math.pow(2,l);i.push(d);let _=1/d;h>o-jr?_=Y0[h-o+jr-1]:h===0&&(_=0),r.push(_);const m=1/(d-2),v=-m,p=1+m,S=[v,v,p,v,p,p,v,v,p,p,v,p],y=6,x=6,C=3,M=2,E=1,F=new Float32Array(C*x*y),L=new Float32Array(M*x*y),D=new Float32Array(E*x*y);for(let G=0;G<y;G++){const H=G%3*2/3-1,q=G>2?0:-1,w=[H,q,0,H+2/3,q,0,H+2/3,q+1,0,H,q,0,H+2/3,q+1,0,H,q+1,0];F.set(w,C*x*G),L.set(S,M*x*G);const R=[G,G,G,G,G,G];D.set(R,E*x*G)}const Y=new ta;Y.setAttribute("position",new ji(F,C)),Y.setAttribute("uv",new ji(L,M)),Y.setAttribute("faceIndex",new ji(D,E)),e.push(Y),l>jr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function q0(o,e,i){const r=new qs(o,e,i);return r.texture.mapping=Tc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function Rb(o,e,i){const r=new Float32Array(Qs),l=new it(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Jp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function W0(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function j0(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function Jp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wb(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const _=d.mapping,m=_===$d||_===tp,v=_===no||_===io;if(m||v){let p=e.get(d);const S=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new K0(o)),p=m?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const y=d.image;return m&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new K0(o)),p=m?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function l(d){let _=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&_++;return _===m}function f(d){const _=d.target;_.removeEventListener("dispose",f);const m=e.get(_);m!==void 0&&(e.delete(_),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Db(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&dl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Ub(o,e,i,r){const l={},f=new WeakMap;function h(p){const S=p.target;S.index!==null&&e.remove(S.index);for(const x in S.attributes)e.remove(S.attributes[x]);S.removeEventListener("dispose",h),delete l[S.id];const y=f.get(S);y&&(e.remove(y),f.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(p,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function _(p){const S=p.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function m(p){const S=[],y=p.index,x=p.attributes.position;let C=0;if(y!==null){const F=y.array;C=y.version;for(let L=0,D=F.length;L<D;L+=3){const Y=F[L+0],G=F[L+1],H=F[L+2];S.push(Y,G,G,H,H,Y)}}else if(x!==void 0){const F=x.array;C=x.version;for(let L=0,D=F.length/3-1;L<D;L+=3){const Y=L+0,G=L+1,H=L+2;S.push(Y,G,G,H,H,Y)}}else return;const M=new(NE(S)?PE:BE)(S,1);M.version=C;const E=f.get(p);E&&e.remove(E),f.set(p,M)}function v(p){const S=f.get(p);if(S){const y=p.index;y!==null&&S.version<y.version&&m(p)}else m(p);return f.get(p)}return{get:d,update:_,getWireframeAttribute:v}}function Nb(o,e,i){let r;function l(S){r=S}let f,h;function d(S){f=S.type,h=S.bytesPerElement}function _(S,y){o.drawElements(r,y,f,S*h),i.update(y,r,1)}function m(S,y,x){x!==0&&(o.drawElementsInstanced(r,y,f,S*h,x),i.update(y,r,x))}function v(S,y,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,f,S,0,x);let M=0;for(let E=0;E<x;E++)M+=y[E];i.update(M,r,1)}function p(S,y,x,C){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<S.length;E++)m(S[E]/h,y[E],C[E]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,f,S,0,C,0,x);let E=0;for(let F=0;F<x;F++)E+=y[F]*C[F];i.update(E,r,1)}}this.setMode=l,this.setIndex=d,this.render=_,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=p}function Ob(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Lb(o,e,i){const r=new WeakMap,l=new rn;function f(h,d,_){const m=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=v!==void 0?v.length:0;let S=r.get(d);if(S===void 0||S.count!==p){let w=function(){H.dispose(),r.delete(d),d.removeEventListener("dispose",w)};S!==void 0&&S.texture.dispose();const y=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],E=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let L=0;y===!0&&(L=1),x===!0&&(L=2),C===!0&&(L=3);let D=d.attributes.position.count*L,Y=1;D>e.maxTextureSize&&(Y=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const G=new Float32Array(D*Y*4*p),H=new OE(G,D,Y,p);H.type=Aa,H.needsUpdate=!0;const q=L*4;for(let R=0;R<p;R++){const X=M[R],ut=E[R],J=F[R],P=D*Y*4*R;for(let $=0;$<X.count;$++){const U=$*q;y===!0&&(l.fromBufferAttribute(X,$),G[P+U+0]=l.x,G[P+U+1]=l.y,G[P+U+2]=l.z,G[P+U+3]=0),x===!0&&(l.fromBufferAttribute(ut,$),G[P+U+4]=l.x,G[P+U+5]=l.y,G[P+U+6]=l.z,G[P+U+7]=0),C===!0&&(l.fromBufferAttribute(J,$),G[P+U+8]=l.x,G[P+U+9]=l.y,G[P+U+10]=l.z,G[P+U+11]=J.itemSize===4?l.w:1)}}S={count:p,texture:H,size:new fe(D,Y)},r.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let y=0;for(let C=0;C<m.length;C++)y+=m[C];const x=d.morphTargetsRelative?1:1-y;_.getUniforms().setValue(o,"morphTargetBaseInfluence",x),_.getUniforms().setValue(o,"morphTargetInfluences",m)}_.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),_.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function Ib(o,e,i,r){let l=new WeakMap;function f(_){const m=r.render.frame,v=_.geometry,p=e.get(_,v);if(l.get(p)!==m&&(e.update(p),l.set(p,m)),_.isInstancedMesh&&(_.hasEventListener("dispose",d)===!1&&_.addEventListener("dispose",d),l.get(_)!==m&&(i.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&i.update(_.instanceColor,o.ARRAY_BUFFER),l.set(_,m))),_.isSkinnedMesh){const S=_.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return p}function h(){l=new WeakMap}function d(_){const m=_.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:f,dispose:h}}const XE=new Wn,Z0=new VE(1,1),JE=new OE,KE=new nA,qE=new HE,$0=[],tE=[],eE=new Float32Array(16),nE=new Float32Array(9),iE=new Float32Array(4);function oo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=$0[l];if(f===void 0&&(f=new Float32Array(l),$0[l]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function vn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function En(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function wc(o,e){let i=tE[e];i===void 0&&(i=new Int32Array(e),tE[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function Bb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function Pb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2fv(this.addr,e),En(i,e)}}function zb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;o.uniform3fv(this.addr,e),En(i,e)}}function Fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4fv(this.addr,e),En(i,e)}}function Hb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),En(i,e)}else{if(vn(i,r))return;iE.set(r),o.uniformMatrix2fv(this.addr,!1,iE),En(i,r)}}function Gb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),En(i,e)}else{if(vn(i,r))return;nE.set(r),o.uniformMatrix3fv(this.addr,!1,nE),En(i,r)}}function Vb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),En(i,e)}else{if(vn(i,r))return;eE.set(r),o.uniformMatrix4fv(this.addr,!1,eE),En(i,r)}}function Qb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function kb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2iv(this.addr,e),En(i,e)}}function Yb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3iv(this.addr,e),En(i,e)}}function Xb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4iv(this.addr,e),En(i,e)}}function Jb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Kb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2uiv(this.addr,e),En(i,e)}}function qb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3uiv(this.addr,e),En(i,e)}}function Wb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4uiv(this.addr,e),En(i,e)}}function jb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(Z0.compareFunction=UE,f=Z0):f=XE,i.setTexture2D(e||f,l)}function Zb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||KE,l)}function $b(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||qE,l)}function t1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||JE,l)}function e1(o){switch(o){case 5126:return Bb;case 35664:return Pb;case 35665:return zb;case 35666:return Fb;case 35674:return Hb;case 35675:return Gb;case 35676:return Vb;case 5124:case 35670:return Qb;case 35667:case 35671:return kb;case 35668:case 35672:return Yb;case 35669:case 35673:return Xb;case 5125:return Jb;case 36294:return Kb;case 36295:return qb;case 36296:return Wb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return t1}}function n1(o,e){o.uniform1fv(this.addr,e)}function i1(o,e){const i=oo(e,this.size,2);o.uniform2fv(this.addr,i)}function a1(o,e){const i=oo(e,this.size,3);o.uniform3fv(this.addr,i)}function s1(o,e){const i=oo(e,this.size,4);o.uniform4fv(this.addr,i)}function r1(o,e){const i=oo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function o1(o,e){const i=oo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function l1(o,e){const i=oo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function u1(o,e){o.uniform1iv(this.addr,e)}function c1(o,e){o.uniform2iv(this.addr,e)}function f1(o,e){o.uniform3iv(this.addr,e)}function h1(o,e){o.uniform4iv(this.addr,e)}function d1(o,e){o.uniform1uiv(this.addr,e)}function p1(o,e){o.uniform2uiv(this.addr,e)}function m1(o,e){o.uniform3uiv(this.addr,e)}function g1(o,e){o.uniform4uiv(this.addr,e)}function _1(o,e,i){const r=this.cache,l=e.length,f=wc(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),En(r,f));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||XE,f[h])}function v1(o,e,i){const r=this.cache,l=e.length,f=wc(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),En(r,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||KE,f[h])}function E1(o,e,i){const r=this.cache,l=e.length,f=wc(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),En(r,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||qE,f[h])}function S1(o,e,i){const r=this.cache,l=e.length,f=wc(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),En(r,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||JE,f[h])}function y1(o){switch(o){case 5126:return n1;case 35664:return i1;case 35665:return a1;case 35666:return s1;case 35674:return r1;case 35675:return o1;case 35676:return l1;case 5124:case 35670:return u1;case 35667:case 35671:return c1;case 35668:case 35672:return f1;case 35669:case 35673:return h1;case 5125:return d1;case 36294:return p1;case 36295:return m1;case 36296:return g1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return S1}}class M1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=e1(i.type)}}class x1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=y1(i.type)}}class A1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const d=l[f];d.setValue(e,i[d.id],r)}}}const Gd=/(\w+)(\])?(\[|\.)?/g;function aE(o,e){o.seq.push(e),o.map[e.id]=e}function T1(o,e,i){const r=o.name,l=r.length;for(Gd.lastIndex=0;;){const f=Gd.exec(r),h=Gd.lastIndex;let d=f[1];const _=f[2]==="]",m=f[3];if(_&&(d=d|0),m===void 0||m==="["&&h+2===l){aE(i,m===void 0?new M1(d,o,e):new x1(d,o,e));break}else{let p=i.map[d];p===void 0&&(p=new A1(d),aE(i,p)),i=p}}}class Ec{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),h=e.getUniformLocation(i,f.name);T1(f,h,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,h=i.length;f!==h;++f){const d=i[f],_=r[d.id];_.needsUpdate!==!1&&d.setValue(e,_.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function sE(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const C1=37297;let b1=0;function R1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const rE=new me;function w1(o){Ue._getMatrix(rE,Ue.workingColorSpace,o);const e=`mat3( ${rE.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case Sc:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function oE(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+R1(o.getShaderSource(e),d)}else return f}function D1(o,e){const i=w1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function U1(o,e){let i;switch(e){case wx:i="Linear";break;case Dx:i="Reinhard";break;case Ux:i="Cineon";break;case Nx:i="ACESFilmic";break;case Lx:i="AgX";break;case Ix:i="Neutral";break;case Ox:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const dc=new it;function N1(){Ue.getLuminanceCoefficients(dc);const o=dc.x.toFixed(4),e=dc.y.toFixed(4),i=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function L1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function I1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function ol(o){return o!==""}function lE(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uE(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Op(o){return o.replace(B1,z1)}const P1=new Map;function z1(o,e){let i=ge[e];if(i===void 0){const r=P1.get(e);if(r!==void 0)i=ge[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Op(i)}const F1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cE(o){return o.replace(F1,H1)}function H1(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function fE(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===EE?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ma&&(e="SHADOWMAP_TYPE_VSM"),e}function V1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q1(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===io&&(e="ENVMAP_MODE_REFRACTION"),e}function k1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case SE:e="ENVMAP_BLENDING_MULTIPLY";break;case bx:e="ENVMAP_BLENDING_MIX";break;case Rx:e="ENVMAP_BLENDING_ADD";break}return e}function Y1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function X1(o,e,i,r){const l=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const _=G1(i),m=V1(i),v=Q1(i),p=k1(i),S=Y1(i),y=O1(i),x=L1(f),C=l.createProgram();let M,E,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x].filter(ol).join(`
`),M.length>0&&(M+=`
`),E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x].filter(ol).join(`
`),E.length>0&&(E+=`
`)):(M=[fE(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),E=[fE(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,x,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+p:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ls?"#define TONE_MAPPING":"",i.toneMapping!==ls?ge.tonemapping_pars_fragment:"",i.toneMapping!==ls?U1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,D1("linearToOutputTexel",i.outputColorSpace),N1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ol).join(`
`)),h=Op(h),h=lE(h,i),h=uE(h,i),d=Op(d),d=lE(d,i),d=uE(d,i),h=cE(h),d=cE(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,E=["#define varying in",i.glslVersion===_0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===_0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const L=F+M+h,D=F+E+d,Y=sE(l,l.VERTEX_SHADER,L),G=sE(l,l.FRAGMENT_SHADER,D);l.attachShader(C,Y),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function H(X){if(o.debug.checkShaderErrors){const ut=l.getProgramInfoLog(C)||"",J=l.getShaderInfoLog(Y)||"",P=l.getShaderInfoLog(G)||"",$=ut.trim(),U=J.trim(),V=P.trim();let B=!0,ct=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(B=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,Y,G);else{const dt=oE(l,Y,"vertex"),vt=oE(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+$+`
`+dt+`
`+vt)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(U===""||V==="")&&(ct=!1);ct&&(X.diagnostics={runnable:B,programLog:$,vertexShader:{log:U,prefix:M},fragmentShader:{log:V,prefix:E}})}l.deleteShader(Y),l.deleteShader(G),q=new Ec(l,C),w=I1(l,C)}let q;this.getUniforms=function(){return q===void 0&&H(this),q};let w;this.getAttributes=function(){return w===void 0&&H(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,C1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=b1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=Y,this.fragmentShader=G,this}let J1=0;class K1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new q1(e),i.set(e,r)),r}}class q1{constructor(e){this.id=J1++,this.code=e,this.usedTimes=0}}function W1(o,e,i,r,l,f,h){const d=new kp,_=new K1,m=new Set,v=[],p=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return m.add(w),w===0?"uv":`uv${w}`}function M(w,R,X,ut,J){const P=ut.fog,$=J.geometry,U=w.isMeshStandardMaterial?ut.environment:null,V=(w.isMeshStandardMaterial?i:e).get(w.envMap||U),B=V&&V.mapping===Tc?V.image.height:null,ct=x[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,vt=dt!==void 0?dt.length:0;let wt=0;$.morphAttributes.position!==void 0&&(wt=1),$.morphAttributes.normal!==void 0&&(wt=2),$.morphAttributes.color!==void 0&&(wt=3);let Vt,N,lt,W;if(ct){const xe=Ji[ct];Vt=xe.vertexShader,N=xe.fragmentShader}else Vt=w.vertexShader,N=w.fragmentShader,_.update(w),lt=_.getVertexShaderID(w),W=_.getFragmentShaderID(w);const st=o.getRenderTarget(),yt=o.state.buffers.depth.getReversed(),Nt=J.isInstancedMesh===!0,bt=J.isBatchedMesh===!0,xt=!!w.map,Kt=!!w.matcap,z=!!V,He=!!w.aoMap,oe=!!w.lightMap,$t=!!w.bumpMap,Lt=!!w.normalMap,se=!!w.displacementMap,Ht=!!w.emissiveMap,le=!!w.metalnessMap,Ye=!!w.roughnessMap,Je=w.anisotropy>0,O=w.clearcoat>0,T=w.dispersion>0,rt=w.iridescence>0,gt=w.sheen>0,St=w.transmission>0,pt=Je&&!!w.anisotropyMap,Yt=O&&!!w.clearcoatMap,Rt=O&&!!w.clearcoatNormalMap,Wt=O&&!!w.clearcoatRoughnessMap,Zt=rt&&!!w.iridescenceMap,Tt=rt&&!!w.iridescenceThicknessMap,It=gt&&!!w.sheenColorMap,ae=gt&&!!w.sheenRoughnessMap,jt=!!w.specularMap,Bt=!!w.specularColorMap,he=!!w.specularIntensityMap,k=St&&!!w.transmissionMap,Ct=St&&!!w.thicknessMap,Ut=!!w.gradientMap,kt=!!w.alphaMap,Mt=w.alphaTest>0,Et=!!w.alphaHash,qt=!!w.extensions;let ce=ls;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Ge={shaderID:ct,shaderType:w.type,shaderName:w.name,vertexShader:Vt,fragmentShader:N,defines:w.defines,customVertexShaderID:lt,customFragmentShaderID:W,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:bt,batchingColor:bt&&J._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&J.instanceColor!==null,instancingMorph:Nt&&J.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:st===null?o.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ao,alphaToCoverage:!!w.alphaToCoverage,map:xt,matcap:Kt,envMap:z,envMapMode:z&&V.mapping,envMapCubeUVHeight:B,aoMap:He,lightMap:oe,bumpMap:$t,normalMap:Lt,displacementMap:S&&se,emissiveMap:Ht,normalMapObjectSpace:Lt&&w.normalMapType===Fx,normalMapTangentSpace:Lt&&w.normalMapType===DE,metalnessMap:le,roughnessMap:Ye,anisotropy:Je,anisotropyMap:pt,clearcoat:O,clearcoatMap:Yt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:rt,iridescenceMap:Zt,iridescenceThicknessMap:Tt,sheen:gt,sheenColorMap:It,sheenRoughnessMap:ae,specularMap:jt,specularColorMap:Bt,specularIntensityMap:he,transmission:St,transmissionMap:k,thicknessMap:Ct,gradientMap:Ut,opaque:w.transparent===!1&&w.blending===$r&&w.alphaToCoverage===!1,alphaMap:kt,alphaTest:Mt,alphaHash:Et,combine:w.combine,mapUv:xt&&C(w.map.channel),aoMapUv:He&&C(w.aoMap.channel),lightMapUv:oe&&C(w.lightMap.channel),bumpMapUv:$t&&C(w.bumpMap.channel),normalMapUv:Lt&&C(w.normalMap.channel),displacementMapUv:se&&C(w.displacementMap.channel),emissiveMapUv:Ht&&C(w.emissiveMap.channel),metalnessMapUv:le&&C(w.metalnessMap.channel),roughnessMapUv:Ye&&C(w.roughnessMap.channel),anisotropyMapUv:pt&&C(w.anisotropyMap.channel),clearcoatMapUv:Yt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:It&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:ae&&C(w.sheenRoughnessMap.channel),specularMapUv:jt&&C(w.specularMap.channel),specularColorMapUv:Bt&&C(w.specularColorMap.channel),specularIntensityMapUv:he&&C(w.specularIntensityMap.channel),transmissionMapUv:k&&C(w.transmissionMap.channel),thicknessMapUv:Ct&&C(w.thicknessMap.channel),alphaMapUv:kt&&C(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Lt||Je),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!$.attributes.uv&&(xt||kt),fog:!!P,useFog:w.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:yt,skinning:J.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:wt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:xt&&w.map.isVideoTexture===!0&&Ue.getTransfer(w.map.colorSpace)===Qe,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(w.emissiveMap.colorSpace)===Qe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===xa,flipSided:w.side===qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:qt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&w.extensions.multiDraw===!0||bt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ge.vertexUv1s=m.has(1),Ge.vertexUv2s=m.has(2),Ge.vertexUv3s=m.has(3),m.clear(),Ge}function E(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const X in w.defines)R.push(X),R.push(w.defines[X]);return w.isRawShaderMaterial===!1&&(F(R,w),L(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function F(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function L(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const R=x[w.type];let X;if(R){const ut=Ji[R];X=mA.clone(ut.uniforms)}else X=w.uniforms;return X}function Y(w,R){let X;for(let ut=0,J=v.length;ut<J;ut++){const P=v[ut];if(P.cacheKey===R){X=P,++X.usedTimes;break}}return X===void 0&&(X=new X1(o,R,w,f),v.push(X)),X}function G(w){if(--w.usedTimes===0){const R=v.indexOf(w);v[R]=v[v.length-1],v.pop(),w.destroy()}}function H(w){_.remove(w)}function q(){_.dispose()}return{getParameters:M,getProgramCacheKey:E,getUniforms:D,acquireProgram:Y,releaseProgram:G,releaseShaderCache:H,programs:v,dispose:q}}function j1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,_){o.get(h)[d]=_}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function Z1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function hE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function dE(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function h(p,S,y,x,C,M){let E=o[e];return E===void 0?(E={id:p.id,object:p,geometry:S,material:y,groupOrder:x,renderOrder:p.renderOrder,z:C,group:M},o[e]=E):(E.id=p.id,E.object=p,E.geometry=S,E.material=y,E.groupOrder=x,E.renderOrder=p.renderOrder,E.z=C,E.group=M),e++,E}function d(p,S,y,x,C,M){const E=h(p,S,y,x,C,M);y.transmission>0?r.push(E):y.transparent===!0?l.push(E):i.push(E)}function _(p,S,y,x,C,M){const E=h(p,S,y,x,C,M);y.transmission>0?r.unshift(E):y.transparent===!0?l.unshift(E):i.unshift(E)}function m(p,S){i.length>1&&i.sort(p||Z1),r.length>1&&r.sort(S||hE),l.length>1&&l.sort(S||hE)}function v(){for(let p=e,S=o.length;p<S;p++){const y=o[p];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:d,unshift:_,finish:v,sort:m}}function $1(){let o=new WeakMap;function e(r,l){const f=o.get(r);let h;return f===void 0?(h=new dE,o.set(r,[h])):l>=f.length?(h=new dE,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function tR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new it,color:new be};break;case"SpotLight":i={position:new it,direction:new it,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new it,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new it,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new it,halfWidth:new it,halfHeight:new it};break}return o[e.id]=i,i}}}function eR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let nR=0;function iR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function aR(o){const e=new tR,i=eR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new it);const l=new it,f=new en,h=new en;function d(m){let v=0,p=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,x=0,C=0,M=0,E=0,F=0,L=0,D=0,Y=0,G=0,H=0;m.sort(iR);for(let w=0,R=m.length;w<R;w++){const X=m[w],ut=X.color,J=X.intensity,P=X.distance,$=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)v+=ut.r*J,p+=ut.g*J,S+=ut.b*J;else if(X.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(X.sh.coefficients[U],J);H++}else if(X.isDirectionalLight){const U=e.get(X);if(U.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const V=X.shadow,B=i.get(X);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,r.directionalShadow[y]=B,r.directionalShadowMap[y]=$,r.directionalShadowMatrix[y]=X.shadow.matrix,F++}r.directional[y]=U,y++}else if(X.isSpotLight){const U=e.get(X);U.position.setFromMatrixPosition(X.matrixWorld),U.color.copy(ut).multiplyScalar(J),U.distance=P,U.coneCos=Math.cos(X.angle),U.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),U.decay=X.decay,r.spot[C]=U;const V=X.shadow;if(X.map&&(r.spotLightMap[Y]=X.map,Y++,V.updateMatrices(X),X.castShadow&&G++),r.spotLightMatrix[C]=V.matrix,X.castShadow){const B=i.get(X);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,r.spotShadow[C]=B,r.spotShadowMap[C]=$,D++}C++}else if(X.isRectAreaLight){const U=e.get(X);U.color.copy(ut).multiplyScalar(J),U.halfWidth.set(X.width*.5,0,0),U.halfHeight.set(0,X.height*.5,0),r.rectArea[M]=U,M++}else if(X.isPointLight){const U=e.get(X);if(U.color.copy(X.color).multiplyScalar(X.intensity),U.distance=X.distance,U.decay=X.decay,X.castShadow){const V=X.shadow,B=i.get(X);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,B.shadowCameraNear=V.camera.near,B.shadowCameraFar=V.camera.far,r.pointShadow[x]=B,r.pointShadowMap[x]=$,r.pointShadowMatrix[x]=X.shadow.matrix,L++}r.point[x]=U,x++}else if(X.isHemisphereLight){const U=e.get(X);U.skyColor.copy(X.color).multiplyScalar(J),U.groundColor.copy(X.groundColor).multiplyScalar(J),r.hemi[E]=U,E++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=zt.LTC_FLOAT_1,r.rectAreaLTC2=zt.LTC_FLOAT_2):(r.rectAreaLTC1=zt.LTC_HALF_1,r.rectAreaLTC2=zt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=p,r.ambient[2]=S;const q=r.hash;(q.directionalLength!==y||q.pointLength!==x||q.spotLength!==C||q.rectAreaLength!==M||q.hemiLength!==E||q.numDirectionalShadows!==F||q.numPointShadows!==L||q.numSpotShadows!==D||q.numSpotMaps!==Y||q.numLightProbes!==H)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=x,r.hemi.length=E,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+Y-G,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=H,q.directionalLength=y,q.pointLength=x,q.spotLength=C,q.rectAreaLength=M,q.hemiLength=E,q.numDirectionalShadows=F,q.numPointShadows=L,q.numSpotShadows=D,q.numSpotMaps=Y,q.numLightProbes=H,r.version=nR++)}function _(m,v){let p=0,S=0,y=0,x=0,C=0;const M=v.matrixWorldInverse;for(let E=0,F=m.length;E<F;E++){const L=m[E];if(L.isDirectionalLight){const D=r.directional[p];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),p++}else if(L.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const D=r.rectArea[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),h.identity(),f.copy(L.matrixWorld),f.premultiply(M),h.extractRotation(f),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),x++}else if(L.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),S++}else if(L.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(M),C++}}}return{setup:d,setupView:_,state:r}}function pE(o){const e=new aR(o),i=[],r=[];function l(v){m.camera=v,i.length=0,r.length=0}function f(v){i.push(v)}function h(v){r.push(v)}function d(){e.setup(i)}function _(v){e.setupView(i,v)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:_,pushLight:f,pushShadow:h}}function sR(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let d;return h===void 0?(d=new pE(o),e.set(l,[d])):f>=h.length?(d=new pE(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const rR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lR(o,e,i){let r=new Yp;const l=new fe,f=new fe,h=new rn,d=new wA({depthPacking:zx}),_=new DA,m={},v=i.maxTextureSize,p={[us]:qn,[qn]:us,[xa]:xa},S=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:rR,fragmentShader:oR}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const x=new ta;x.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Wi(x,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=EE;let E=this.type;this.render=function(G,H,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),ut=o.state;ut.setBlending(os),ut.buffers.depth.getReversed()===!0?ut.buffers.color.setClear(0,0,0,0):ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const J=E!==Ma&&this.type===Ma,P=E===Ma&&this.type!==Ma;for(let $=0,U=G.length;$<U;$++){const V=G[$],B=V.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const ct=B.getFrameExtents();if(l.multiply(ct),f.copy(B.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(f.x=Math.floor(v/ct.x),l.x=f.x*ct.x,B.mapSize.x=f.x),l.y>v&&(f.y=Math.floor(v/ct.y),l.y=f.y*ct.y,B.mapSize.y=f.y)),B.map===null||J===!0||P===!0){const vt=this.type!==Ma?{minFilter:Ni,magFilter:Ni}:{};B.map!==null&&B.map.dispose(),B.map=new qs(l.x,l.y,vt),B.map.texture.name=V.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const dt=B.getViewportCount();for(let vt=0;vt<dt;vt++){const wt=B.getViewport(vt);h.set(f.x*wt.x,f.y*wt.y,f.x*wt.z,f.y*wt.w),ut.viewport(h),B.updateMatrices(V,vt),r=B.getFrustum(),D(H,q,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===Ma&&F(B,q),B.needsUpdate=!1}E=this.type,M.needsUpdate=!1,o.setRenderTarget(w,R,X)};function F(G,H){const q=e.update(C);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new qs(l.x,l.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(H,null,q,S,C,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(H,null,q,y,C,null)}function L(G,H,q,w){let R=null;const X=q.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(X!==void 0)R=X;else if(R=q.isPointLight===!0?_:d,o.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const ut=R.uuid,J=H.uuid;let P=m[ut];P===void 0&&(P={},m[ut]=P);let $=P[J];$===void 0&&($=R.clone(),P[J]=$,H.addEventListener("dispose",Y)),R=$}if(R.visible=H.visible,R.wireframe=H.wireframe,w===Ma?R.side=H.shadowSide!==null?H.shadowSide:H.side:R.side=H.shadowSide!==null?H.shadowSide:p[H.side],R.alphaMap=H.alphaMap,R.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,R.map=H.map,R.clipShadows=H.clipShadows,R.clippingPlanes=H.clippingPlanes,R.clipIntersection=H.clipIntersection,R.displacementMap=H.displacementMap,R.displacementScale=H.displacementScale,R.displacementBias=H.displacementBias,R.wireframeLinewidth=H.wireframeLinewidth,R.linewidth=H.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ut=o.properties.get(R);ut.light=q}return R}function D(G,H,q,w,R){if(G.visible===!1)return;if(G.layers.test(H.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&R===Ma)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,G.matrixWorld);const J=e.update(G),P=G.material;if(Array.isArray(P)){const $=J.groups;for(let U=0,V=$.length;U<V;U++){const B=$[U],ct=P[B.materialIndex];if(ct&&ct.visible){const dt=L(G,ct,w,R);G.onBeforeShadow(o,G,H,q,J,dt,B),o.renderBufferDirect(q,null,J,dt,G,B),G.onAfterShadow(o,G,H,q,J,dt,B)}}}else if(P.visible){const $=L(G,P,w,R);G.onBeforeShadow(o,G,H,q,J,$,null),o.renderBufferDirect(q,null,J,$,G,null),G.onAfterShadow(o,G,H,q,J,$,null)}}const ut=G.children;for(let J=0,P=ut.length;J<P;J++)D(ut[J],H,q,w,R)}function Y(G){G.target.removeEventListener("dispose",Y);for(const q in m){const w=m[q],R=G.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const uR={[Xd]:Jd,[Kd]:jd,[qd]:Zd,[eo]:Wd,[Jd]:Xd,[jd]:Kd,[Zd]:qd,[Wd]:eo};function cR(o,e){function i(){let k=!1;const Ct=new rn;let Ut=null;const kt=new rn(0,0,0,0);return{setMask:function(Mt){Ut!==Mt&&!k&&(o.colorMask(Mt,Mt,Mt,Mt),Ut=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,Et,qt,ce,Ge){Ge===!0&&(Mt*=ce,Et*=ce,qt*=ce),Ct.set(Mt,Et,qt,ce),kt.equals(Ct)===!1&&(o.clearColor(Mt,Et,qt,ce),kt.copy(Ct))},reset:function(){k=!1,Ut=null,kt.set(-1,0,0,0)}}}function r(){let k=!1,Ct=!1,Ut=null,kt=null,Mt=null;return{setReversed:function(Et){if(Ct!==Et){const qt=e.get("EXT_clip_control");Et?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Ct=Et;const ce=Mt;Mt=null,this.setClear(ce)}},getReversed:function(){return Ct},setTest:function(Et){Et?st(o.DEPTH_TEST):yt(o.DEPTH_TEST)},setMask:function(Et){Ut!==Et&&!k&&(o.depthMask(Et),Ut=Et)},setFunc:function(Et){if(Ct&&(Et=uR[Et]),kt!==Et){switch(Et){case Xd:o.depthFunc(o.NEVER);break;case Jd:o.depthFunc(o.ALWAYS);break;case Kd:o.depthFunc(o.LESS);break;case eo:o.depthFunc(o.LEQUAL);break;case qd:o.depthFunc(o.EQUAL);break;case Wd:o.depthFunc(o.GEQUAL);break;case jd:o.depthFunc(o.GREATER);break;case Zd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}kt=Et}},setLocked:function(Et){k=Et},setClear:function(Et){Mt!==Et&&(Ct&&(Et=1-Et),o.clearDepth(Et),Mt=Et)},reset:function(){k=!1,Ut=null,kt=null,Mt=null,Ct=!1}}}function l(){let k=!1,Ct=null,Ut=null,kt=null,Mt=null,Et=null,qt=null,ce=null,Ge=null;return{setTest:function(xe){k||(xe?st(o.STENCIL_TEST):yt(o.STENCIL_TEST))},setMask:function(xe){Ct!==xe&&!k&&(o.stencilMask(xe),Ct=xe)},setFunc:function(xe,$e,pn){(Ut!==xe||kt!==$e||Mt!==pn)&&(o.stencilFunc(xe,$e,pn),Ut=xe,kt=$e,Mt=pn)},setOp:function(xe,$e,pn){(Et!==xe||qt!==$e||ce!==pn)&&(o.stencilOp(xe,$e,pn),Et=xe,qt=$e,ce=pn)},setLocked:function(xe){k=xe},setClear:function(xe){Ge!==xe&&(o.clearStencil(xe),Ge=xe)},reset:function(){k=!1,Ct=null,Ut=null,kt=null,Mt=null,Et=null,qt=null,ce=null,Ge=null}}}const f=new i,h=new r,d=new l,_=new WeakMap,m=new WeakMap;let v={},p={},S=new WeakMap,y=[],x=null,C=!1,M=null,E=null,F=null,L=null,D=null,Y=null,G=null,H=new be(0,0,0),q=0,w=!1,R=null,X=null,ut=null,J=null,P=null;const $=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,V=0;const B=o.getParameter(o.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),U=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),U=V>=2);let ct=null,dt={};const vt=o.getParameter(o.SCISSOR_BOX),wt=o.getParameter(o.VIEWPORT),Vt=new rn().fromArray(vt),N=new rn().fromArray(wt);function lt(k,Ct,Ut,kt){const Mt=new Uint8Array(4),Et=o.createTexture();o.bindTexture(k,Et),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let qt=0;qt<Ut;qt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,kt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Ct+qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return Et}const W={};W[o.TEXTURE_2D]=lt(o.TEXTURE_2D,o.TEXTURE_2D,1),W[o.TEXTURE_CUBE_MAP]=lt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[o.TEXTURE_2D_ARRAY]=lt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),W[o.TEXTURE_3D]=lt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),st(o.DEPTH_TEST),h.setFunc(eo),$t(!1),Lt(f0),st(o.CULL_FACE),He(os);function st(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function yt(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function Nt(k,Ct){return p[k]!==Ct?(o.bindFramebuffer(k,Ct),p[k]=Ct,k===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=Ct),k===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function bt(k,Ct){let Ut=y,kt=!1;if(k){Ut=S.get(Ct),Ut===void 0&&(Ut=[],S.set(Ct,Ut));const Mt=k.textures;if(Ut.length!==Mt.length||Ut[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,qt=Mt.length;Et<qt;Et++)Ut[Et]=o.COLOR_ATTACHMENT0+Et;Ut.length=Mt.length,kt=!0}}else Ut[0]!==o.BACK&&(Ut[0]=o.BACK,kt=!0);kt&&o.drawBuffers(Ut)}function xt(k){return x!==k?(o.useProgram(k),x=k,!0):!1}const Kt={[Vs]:o.FUNC_ADD,[cx]:o.FUNC_SUBTRACT,[fx]:o.FUNC_REVERSE_SUBTRACT};Kt[hx]=o.MIN,Kt[dx]=o.MAX;const z={[px]:o.ZERO,[mx]:o.ONE,[gx]:o.SRC_COLOR,[kd]:o.SRC_ALPHA,[Mx]:o.SRC_ALPHA_SATURATE,[Sx]:o.DST_COLOR,[vx]:o.DST_ALPHA,[_x]:o.ONE_MINUS_SRC_COLOR,[Yd]:o.ONE_MINUS_SRC_ALPHA,[yx]:o.ONE_MINUS_DST_COLOR,[Ex]:o.ONE_MINUS_DST_ALPHA,[xx]:o.CONSTANT_COLOR,[Ax]:o.ONE_MINUS_CONSTANT_COLOR,[Tx]:o.CONSTANT_ALPHA,[Cx]:o.ONE_MINUS_CONSTANT_ALPHA};function He(k,Ct,Ut,kt,Mt,Et,qt,ce,Ge,xe){if(k===os){C===!0&&(yt(o.BLEND),C=!1);return}if(C===!1&&(st(o.BLEND),C=!0),k!==ux){if(k!==M||xe!==w){if((E!==Vs||D!==Vs)&&(o.blendEquation(o.FUNC_ADD),E=Vs,D=Vs),xe)switch(k){case $r:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case h0:o.blendFunc(o.ONE,o.ONE);break;case d0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case p0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case $r:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case h0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case d0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case p0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}F=null,L=null,Y=null,G=null,H.set(0,0,0),q=0,M=k,w=xe}return}Mt=Mt||Ct,Et=Et||Ut,qt=qt||kt,(Ct!==E||Mt!==D)&&(o.blendEquationSeparate(Kt[Ct],Kt[Mt]),E=Ct,D=Mt),(Ut!==F||kt!==L||Et!==Y||qt!==G)&&(o.blendFuncSeparate(z[Ut],z[kt],z[Et],z[qt]),F=Ut,L=kt,Y=Et,G=qt),(ce.equals(H)===!1||Ge!==q)&&(o.blendColor(ce.r,ce.g,ce.b,Ge),H.copy(ce),q=Ge),M=k,w=!1}function oe(k,Ct){k.side===xa?yt(o.CULL_FACE):st(o.CULL_FACE);let Ut=k.side===qn;Ct&&(Ut=!Ut),$t(Ut),k.blending===$r&&k.transparent===!1?He(os):He(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),f.setMask(k.colorWrite);const kt=k.stencilWrite;d.setTest(kt),kt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ht(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?st(o.SAMPLE_ALPHA_TO_COVERAGE):yt(o.SAMPLE_ALPHA_TO_COVERAGE)}function $t(k){R!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),R=k)}function Lt(k){k!==rx?(st(o.CULL_FACE),k!==X&&(k===f0?o.cullFace(o.BACK):k===ox?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):yt(o.CULL_FACE),X=k}function se(k){k!==ut&&(U&&o.lineWidth(k),ut=k)}function Ht(k,Ct,Ut){k?(st(o.POLYGON_OFFSET_FILL),(J!==Ct||P!==Ut)&&(o.polygonOffset(Ct,Ut),J=Ct,P=Ut)):yt(o.POLYGON_OFFSET_FILL)}function le(k){k?st(o.SCISSOR_TEST):yt(o.SCISSOR_TEST)}function Ye(k){k===void 0&&(k=o.TEXTURE0+$-1),ct!==k&&(o.activeTexture(k),ct=k)}function Je(k,Ct,Ut){Ut===void 0&&(ct===null?Ut=o.TEXTURE0+$-1:Ut=ct);let kt=dt[Ut];kt===void 0&&(kt={type:void 0,texture:void 0},dt[Ut]=kt),(kt.type!==k||kt.texture!==Ct)&&(ct!==Ut&&(o.activeTexture(Ut),ct=Ut),o.bindTexture(k,Ct||W[k]),kt.type=k,kt.texture=Ct)}function O(){const k=dt[ct];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(k){Vt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Vt.copy(k))}function ae(k){N.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),N.copy(k))}function jt(k,Ct){let Ut=m.get(Ct);Ut===void 0&&(Ut=new WeakMap,m.set(Ct,Ut));let kt=Ut.get(k);kt===void 0&&(kt=o.getUniformBlockIndex(Ct,k.name),Ut.set(k,kt))}function Bt(k,Ct){const kt=m.get(Ct).get(k);_.get(Ct)!==kt&&(o.uniformBlockBinding(Ct,kt,k.__bindingPointIndex),_.set(Ct,kt))}function he(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ct=null,dt={},p={},S=new WeakMap,y=[],x=null,C=!1,M=null,E=null,F=null,L=null,D=null,Y=null,G=null,H=new be(0,0,0),q=0,w=!1,R=null,X=null,ut=null,J=null,P=null,Vt.set(0,0,o.canvas.width,o.canvas.height),N.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:st,disable:yt,bindFramebuffer:Nt,drawBuffers:bt,useProgram:xt,setBlending:He,setMaterial:oe,setFlipSided:$t,setCullFace:Lt,setLineWidth:se,setPolygonOffset:Ht,setScissorTest:le,activeTexture:Ye,bindTexture:Je,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:rt,texImage2D:Zt,texImage3D:Tt,updateUBOMapping:jt,uniformBlockBinding:Bt,texStorage2D:Rt,texStorage3D:Wt,texSubImage2D:gt,texSubImage3D:St,compressedTexSubImage2D:pt,compressedTexSubImage3D:Yt,scissor:It,viewport:ae,reset:he}}function fR(o,e,i,r,l,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new fe,v=new WeakMap;let p;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,T){return y?new OffscreenCanvas(O,T):Mc("canvas")}function C(O,T,rt){let gt=1;const St=Je(O);if((St.width>rt||St.height>rt)&&(gt=rt/Math.max(St.width,St.height)),gt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const pt=Math.floor(gt*St.width),Yt=Math.floor(gt*St.height);p===void 0&&(p=x(pt,Yt));const Rt=T?x(pt,Yt):p;return Rt.width=pt,Rt.height=Yt,Rt.getContext("2d").drawImage(O,0,0,pt,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+pt+"x"+Yt+")."),Rt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),O;return O}function M(O){return O.generateMipmaps}function E(O){o.generateMipmap(O)}function F(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(O,T,rt,gt,St=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let pt=T;if(T===o.RED&&(rt===o.FLOAT&&(pt=o.R32F),rt===o.HALF_FLOAT&&(pt=o.R16F),rt===o.UNSIGNED_BYTE&&(pt=o.R8)),T===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(pt=o.R8UI),rt===o.UNSIGNED_SHORT&&(pt=o.R16UI),rt===o.UNSIGNED_INT&&(pt=o.R32UI),rt===o.BYTE&&(pt=o.R8I),rt===o.SHORT&&(pt=o.R16I),rt===o.INT&&(pt=o.R32I)),T===o.RG&&(rt===o.FLOAT&&(pt=o.RG32F),rt===o.HALF_FLOAT&&(pt=o.RG16F),rt===o.UNSIGNED_BYTE&&(pt=o.RG8)),T===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(pt=o.RG8UI),rt===o.UNSIGNED_SHORT&&(pt=o.RG16UI),rt===o.UNSIGNED_INT&&(pt=o.RG32UI),rt===o.BYTE&&(pt=o.RG8I),rt===o.SHORT&&(pt=o.RG16I),rt===o.INT&&(pt=o.RG32I)),T===o.RGB_INTEGER&&(rt===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),rt===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),rt===o.UNSIGNED_INT&&(pt=o.RGB32UI),rt===o.BYTE&&(pt=o.RGB8I),rt===o.SHORT&&(pt=o.RGB16I),rt===o.INT&&(pt=o.RGB32I)),T===o.RGBA_INTEGER&&(rt===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),rt===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),rt===o.UNSIGNED_INT&&(pt=o.RGBA32UI),rt===o.BYTE&&(pt=o.RGBA8I),rt===o.SHORT&&(pt=o.RGBA16I),rt===o.INT&&(pt=o.RGBA32I)),T===o.RGB&&(rt===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),rt===o.UNSIGNED_INT_10F_11F_11F_REV&&(pt=o.R11F_G11F_B10F)),T===o.RGBA){const Yt=St?Sc:Ue.getTransfer(gt);rt===o.FLOAT&&(pt=o.RGBA32F),rt===o.HALF_FLOAT&&(pt=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(pt=Yt===Qe?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function D(O,T){let rt;return O?T===null||T===Js||T===cl?rt=o.DEPTH24_STENCIL8:T===Aa?rt=o.DEPTH32F_STENCIL8:T===ul&&(rt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Js||T===cl?rt=o.DEPTH_COMPONENT24:T===Aa?rt=o.DEPTH_COMPONENT32F:T===ul&&(rt=o.DEPTH_COMPONENT16),rt}function Y(O,T){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ni&&O.minFilter!==Ki?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function G(O){const T=O.target;T.removeEventListener("dispose",G),q(T),T.isVideoTexture&&v.delete(T)}function H(O){const T=O.target;T.removeEventListener("dispose",H),R(T)}function q(O){const T=r.get(O);if(T.__webglInit===void 0)return;const rt=O.source,gt=S.get(rt);if(gt){const St=gt[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(O),Object.keys(gt).length===0&&S.delete(rt)}r.remove(O)}function w(O){const T=r.get(O);o.deleteTexture(T.__webglTexture);const rt=O.source,gt=S.get(rt);delete gt[T.__cacheKey],h.memory.textures--}function R(O){const T=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(T.__webglFramebuffer[gt]))for(let St=0;St<T.__webglFramebuffer[gt].length;St++)o.deleteFramebuffer(T.__webglFramebuffer[gt][St]);else o.deleteFramebuffer(T.__webglFramebuffer[gt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[gt])}else{if(Array.isArray(T.__webglFramebuffer))for(let gt=0;gt<T.__webglFramebuffer.length;gt++)o.deleteFramebuffer(T.__webglFramebuffer[gt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let gt=0;gt<T.__webglColorRenderbuffer.length;gt++)T.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[gt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const rt=O.textures;for(let gt=0,St=rt.length;gt<St;gt++){const pt=r.get(rt[gt]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),r.remove(rt[gt])}r.remove(O)}let X=0;function ut(){X=0}function J(){const O=X;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),X+=1,O}function P(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function $(O,T){const rt=r.get(O);if(O.isVideoTexture&&le(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&rt.__version!==O.version){const gt=O.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(rt,O,T);return}}else O.isExternalTexture&&(rt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+T)}function U(O,T){const rt=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&rt.__version!==O.version){W(rt,O,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+T)}function V(O,T){const rt=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&rt.__version!==O.version){W(rt,O,T);return}i.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+T)}function B(O,T){const rt=r.get(O);if(O.version>0&&rt.__version!==O.version){st(rt,O,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+T)}const ct={[ep]:o.REPEAT,[Ys]:o.CLAMP_TO_EDGE,[np]:o.MIRRORED_REPEAT},dt={[Ni]:o.NEAREST,[Bx]:o.NEAREST_MIPMAP_NEAREST,[Gu]:o.NEAREST_MIPMAP_LINEAR,[Ki]:o.LINEAR,[ud]:o.LINEAR_MIPMAP_NEAREST,[Xs]:o.LINEAR_MIPMAP_LINEAR},vt={[Hx]:o.NEVER,[Xx]:o.ALWAYS,[Gx]:o.LESS,[UE]:o.LEQUAL,[Vx]:o.EQUAL,[Yx]:o.GEQUAL,[Qx]:o.GREATER,[kx]:o.NOTEQUAL};function wt(O,T){if(T.type===Aa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ki||T.magFilter===ud||T.magFilter===Gu||T.magFilter===Xs||T.minFilter===Ki||T.minFilter===ud||T.minFilter===Gu||T.minFilter===Xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,ct[T.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,ct[T.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,ct[T.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,dt[T.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,dt[T.minFilter]),T.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,vt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ni||T.minFilter!==Gu&&T.minFilter!==Xs||T.type===Aa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const rt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Vt(O,T){let rt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",G));const gt=T.source;let St=S.get(gt);St===void 0&&(St={},S.set(gt,St));const pt=P(T);if(pt!==O.__cacheKey){St[pt]===void 0&&(St[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,rt=!0),St[pt].usedTimes++;const Yt=St[O.__cacheKey];Yt!==void 0&&(St[O.__cacheKey].usedTimes--,Yt.usedTimes===0&&w(T)),O.__cacheKey=pt,O.__webglTexture=St[pt].texture}return rt}function N(O,T,rt){return Math.floor(Math.floor(O/rt)/T)}function lt(O,T,rt,gt){const pt=O.updateRanges;if(pt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,rt,gt,T.data);else{pt.sort((Tt,It)=>Tt.start-It.start);let Yt=0;for(let Tt=1;Tt<pt.length;Tt++){const It=pt[Yt],ae=pt[Tt],jt=It.start+It.count,Bt=N(ae.start,T.width,4),he=N(It.start,T.width,4);ae.start<=jt+1&&Bt===he&&N(ae.start+ae.count-1,T.width,4)===Bt?It.count=Math.max(It.count,ae.start+ae.count-It.start):(++Yt,pt[Yt]=ae)}pt.length=Yt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),Zt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Tt=0,It=pt.length;Tt<It;Tt++){const ae=pt[Tt],jt=Math.floor(ae.start/4),Bt=Math.ceil(ae.count/4),he=jt%T.width,k=Math.floor(jt/T.width),Ct=Bt,Ut=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,he),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,he,k,Ct,Ut,rt,gt,T.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Zt)}}function W(O,T,rt){let gt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=o.TEXTURE_3D);const St=Vt(O,T),pt=T.source;i.bindTexture(gt,O.__webglTexture,o.TEXTURE0+rt);const Yt=r.get(pt);if(pt.version!==Yt.__version||St===!0){i.activeTexture(o.TEXTURE0+rt);const Rt=Ue.getPrimaries(Ue.workingColorSpace),Wt=T.colorSpace===rs?null:Ue.getPrimaries(T.colorSpace),Zt=T.colorSpace===rs||Rt===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Tt=C(T.image,!1,l.maxTextureSize);Tt=Ye(T,Tt);const It=f.convert(T.format,T.colorSpace),ae=f.convert(T.type);let jt=L(T.internalFormat,It,ae,T.colorSpace,T.isVideoTexture);wt(gt,T);let Bt;const he=T.mipmaps,k=T.isVideoTexture!==!0,Ct=Yt.__version===void 0||St===!0,Ut=pt.dataReady,kt=Y(T,Tt);if(T.isDepthTexture)jt=D(T.format===hl,T.type),Ct&&(k?i.texStorage2D(o.TEXTURE_2D,1,jt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,It,ae,null));else if(T.isDataTexture)if(he.length>0){k&&Ct&&i.texStorage2D(o.TEXTURE_2D,kt,jt,he[0].width,he[0].height);for(let Mt=0,Et=he.length;Mt<Et;Mt++)Bt=he[Mt],k?Ut&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Bt.width,Bt.height,It,ae,Bt.data):i.texImage2D(o.TEXTURE_2D,Mt,jt,Bt.width,Bt.height,0,It,ae,Bt.data);T.generateMipmaps=!1}else k?(Ct&&i.texStorage2D(o.TEXTURE_2D,kt,jt,Tt.width,Tt.height),Ut&&lt(T,Tt,It,ae)):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,It,ae,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,jt,he[0].width,he[0].height,Tt.depth);for(let Mt=0,Et=he.length;Mt<Et;Mt++)if(Bt=he[Mt],T.format!==Ui)if(It!==null)if(k){if(Ut)if(T.layerUpdates.size>0){const qt=k0(Bt.width,Bt.height,T.format,T.type);for(const ce of T.layerUpdates){const Ge=Bt.data.subarray(ce*qt/Bt.data.BYTES_PER_ELEMENT,(ce+1)*qt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ce,Bt.width,Bt.height,1,It,Ge)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Bt.width,Bt.height,Tt.depth,It,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,jt,Bt.width,Bt.height,Tt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ut&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Bt.width,Bt.height,Tt.depth,It,ae,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,jt,Bt.width,Bt.height,Tt.depth,0,It,ae,Bt.data)}else{k&&Ct&&i.texStorage2D(o.TEXTURE_2D,kt,jt,he[0].width,he[0].height);for(let Mt=0,Et=he.length;Mt<Et;Mt++)Bt=he[Mt],T.format!==Ui?It!==null?k?Ut&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Bt.width,Bt.height,It,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,jt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ut&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Bt.width,Bt.height,It,ae,Bt.data):i.texImage2D(o.TEXTURE_2D,Mt,jt,Bt.width,Bt.height,0,It,ae,Bt.data)}else if(T.isDataArrayTexture)if(k){if(Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,jt,Tt.width,Tt.height,Tt.depth),Ut)if(T.layerUpdates.size>0){const Mt=k0(Tt.width,Tt.height,T.format,T.type);for(const Et of T.layerUpdates){const qt=Tt.data.subarray(Et*Mt/Tt.data.BYTES_PER_ELEMENT,(Et+1)*Mt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Et,Tt.width,Tt.height,1,It,ae,qt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,ae,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,It,ae,Tt.data);else if(T.isData3DTexture)k?(Ct&&i.texStorage3D(o.TEXTURE_3D,kt,jt,Tt.width,Tt.height,Tt.depth),Ut&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,ae,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,It,ae,Tt.data);else if(T.isFramebufferTexture){if(Ct)if(k)i.texStorage2D(o.TEXTURE_2D,kt,jt,Tt.width,Tt.height);else{let Mt=Tt.width,Et=Tt.height;for(let qt=0;qt<kt;qt++)i.texImage2D(o.TEXTURE_2D,qt,jt,Mt,Et,0,It,ae,null),Mt>>=1,Et>>=1}}else if(he.length>0){if(k&&Ct){const Mt=Je(he[0]);i.texStorage2D(o.TEXTURE_2D,kt,jt,Mt.width,Mt.height)}for(let Mt=0,Et=he.length;Mt<Et;Mt++)Bt=he[Mt],k?Ut&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,It,ae,Bt):i.texImage2D(o.TEXTURE_2D,Mt,jt,It,ae,Bt);T.generateMipmaps=!1}else if(k){if(Ct){const Mt=Je(Tt);i.texStorage2D(o.TEXTURE_2D,kt,jt,Mt.width,Mt.height)}Ut&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,ae,Tt)}else i.texImage2D(o.TEXTURE_2D,0,jt,It,ae,Tt);M(T)&&E(gt),Yt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function st(O,T,rt){if(T.image.length!==6)return;const gt=Vt(O,T),St=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+rt);const pt=r.get(St);if(St.version!==pt.__version||gt===!0){i.activeTexture(o.TEXTURE0+rt);const Yt=Ue.getPrimaries(Ue.workingColorSpace),Rt=T.colorSpace===rs?null:Ue.getPrimaries(T.colorSpace),Wt=T.colorSpace===rs||Yt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Zt=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,It=[];for(let Et=0;Et<6;Et++)!Zt&&!Tt?It[Et]=C(T.image[Et],!0,l.maxCubemapSize):It[Et]=Tt?T.image[Et].image:T.image[Et],It[Et]=Ye(T,It[Et]);const ae=It[0],jt=f.convert(T.format,T.colorSpace),Bt=f.convert(T.type),he=L(T.internalFormat,jt,Bt,T.colorSpace),k=T.isVideoTexture!==!0,Ct=pt.__version===void 0||gt===!0,Ut=St.dataReady;let kt=Y(T,ae);wt(o.TEXTURE_CUBE_MAP,T);let Mt;if(Zt){k&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,he,ae.width,ae.height);for(let Et=0;Et<6;Et++){Mt=It[Et].mipmaps;for(let qt=0;qt<Mt.length;qt++){const ce=Mt[qt];T.format!==Ui?jt!==null?k?Ut&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt,0,0,ce.width,ce.height,jt,ce.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt,he,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt,0,0,ce.width,ce.height,jt,Bt,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt,he,ce.width,ce.height,0,jt,Bt,ce.data)}}}else{if(Mt=T.mipmaps,k&&Ct){Mt.length>0&&kt++;const Et=Je(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,he,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Tt){k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,It[Et].width,It[Et].height,jt,Bt,It[Et].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,he,It[Et].width,It[Et].height,0,jt,Bt,It[Et].data);for(let qt=0;qt<Mt.length;qt++){const Ge=Mt[qt].image[Et].image;k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt+1,0,0,Ge.width,Ge.height,jt,Bt,Ge.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt+1,he,Ge.width,Ge.height,0,jt,Bt,Ge.data)}}else{k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,jt,Bt,It[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,he,jt,Bt,It[Et]);for(let qt=0;qt<Mt.length;qt++){const ce=Mt[qt];k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt+1,0,0,jt,Bt,ce.image[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,qt+1,he,jt,Bt,ce.image[Et])}}}M(T)&&E(o.TEXTURE_CUBE_MAP),pt.__version=St.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function yt(O,T,rt,gt,St,pt){const Yt=f.convert(rt.format,rt.colorSpace),Rt=f.convert(rt.type),Wt=L(rt.internalFormat,Yt,Rt,rt.colorSpace),Zt=r.get(T),Tt=r.get(rt);if(Tt.__renderTarget=T,!Zt.__hasExternalTextures){const It=Math.max(1,T.width>>pt),ae=Math.max(1,T.height>>pt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,pt,Wt,It,ae,T.depth,0,Yt,Rt,null):i.texImage2D(St,pt,Wt,It,ae,0,Yt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,St,Tt.__webglTexture,0,se(T)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,St,Tt.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(O,T,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,O),T.depthBuffer){const gt=T.depthTexture,St=gt&&gt.isDepthTexture?gt.type:null,pt=D(T.stencilBuffer,St),Yt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=se(T);Ht(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,pt,T.width,T.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,pt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Yt,o.RENDERBUFFER,O)}else{const gt=T.textures;for(let St=0;St<gt.length;St++){const pt=gt[St],Yt=f.convert(pt.format,pt.colorSpace),Rt=f.convert(pt.type),Wt=L(pt.internalFormat,Yt,Rt,pt.colorSpace),Zt=se(T);rt&&Ht(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Wt,T.width,T.height):Ht(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Zt,Wt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function bt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(T.depthTexture);gt.__renderTarget=T,(!gt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const St=gt.__webglTexture,pt=se(T);if(T.depthTexture.format===fl)Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(T.depthTexture.format===hl)Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function xt(O){const T=r.get(O),rt=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const gt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){const St=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",St)};gt.addEventListener("dispose",St),T.__depthDisposeCallback=St}T.__boundDepthTexture=gt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");const gt=O.texture.mipmaps;gt&&gt.length>0?bt(T.__webglFramebuffer[0],O):bt(T.__webglFramebuffer,O)}else if(rt){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=o.createRenderbuffer(),Nt(T.__webglDepthbuffer[gt],O,!1);else{const St=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,pt)}}else{const gt=O.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Nt(T.__webglDepthbuffer,O,!1);else{const St=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,pt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(O,T,rt){const gt=r.get(O);T!==void 0&&yt(gt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&xt(O)}function z(O){const T=O.texture,rt=r.get(O),gt=r.get(T);O.addEventListener("dispose",H);const St=O.textures,pt=O.isWebGLCubeRenderTarget===!0,Yt=St.length>1;if(Yt||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=T.version,h.memory.textures++),pt){rt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){rt.__webglFramebuffer[Rt]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)rt.__webglFramebuffer[Rt][Wt]=o.createFramebuffer()}else rt.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)rt.__webglFramebuffer[Rt]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(Yt)for(let Rt=0,Wt=St.length;Rt<Wt;Rt++){const Zt=r.get(St[Rt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Ht(O)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<St.length;Rt++){const Wt=St[Rt];rt.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[Rt]);const Zt=f.convert(Wt.format,Wt.colorSpace),Tt=f.convert(Wt.type),It=L(Wt.internalFormat,Zt,Tt,Wt.colorSpace,O.isXRRenderTarget===!0),ae=se(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,ae,It,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,rt.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),Nt(rt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),wt(o.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)yt(rt.__webglFramebuffer[Rt][Wt],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt);else yt(rt.__webglFramebuffer[Rt],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(T)&&E(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Rt=0,Wt=St.length;Rt<Wt;Rt++){const Zt=St[Rt],Tt=r.get(Zt);let It=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(It=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(It,Tt.__webglTexture),wt(It,Zt),yt(rt.__webglFramebuffer,O,Zt,o.COLOR_ATTACHMENT0+Rt,It,0),M(Zt)&&E(It)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Rt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,gt.__webglTexture),wt(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)yt(rt.__webglFramebuffer[Wt],O,T,o.COLOR_ATTACHMENT0,Rt,Wt);else yt(rt.__webglFramebuffer,O,T,o.COLOR_ATTACHMENT0,Rt,0);M(T)&&E(Rt),i.unbindTexture()}O.depthBuffer&&xt(O)}function He(O){const T=O.textures;for(let rt=0,gt=T.length;rt<gt;rt++){const St=T[rt];if(M(St)){const pt=F(O),Yt=r.get(St).__webglTexture;i.bindTexture(pt,Yt),E(pt),i.unbindTexture()}}}const oe=[],$t=[];function Lt(O){if(O.samples>0){if(Ht(O)===!1){const T=O.textures,rt=O.width,gt=O.height;let St=o.COLOR_BUFFER_BIT;const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Yt=r.get(O),Rt=T.length>1;if(Rt)for(let Zt=0;Zt<T.length;Zt++)i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const Wt=O.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Zt=0;Zt<T.length;Zt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Zt]);const Tt=r.get(T[Zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,rt,gt,0,0,rt,gt,St,o.NEAREST),_===!0&&(oe.length=0,$t.length=0,oe.push(o.COLOR_ATTACHMENT0+Zt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(oe.push(pt),$t.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,$t)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,oe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Zt=0;Zt<T.length;Zt++){i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Zt]);const Tt=r.get(T[Zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,Tt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&_){const T=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function se(O){return Math.min(l.maxSamples,O.samples)}function Ht(O){const T=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function le(O){const T=h.render.frame;v.get(O)!==T&&(v.set(O,T),O.update())}function Ye(O,T){const rt=O.colorSpace,gt=O.format,St=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||rt!==ao&&rt!==rs&&(Ue.getTransfer(rt)===Qe?(gt!==Ui||St!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),T}function Je(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=ut,this.setTexture2D=$,this.setTexture2DArray=U,this.setTexture3D=V,this.setTextureCube=B,this.rebindTextures=Kt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Ht}function hR(o,e){function i(r,l=rs){let f;const h=Ue.getTransfer(l);if(r===Zi)return o.UNSIGNED_BYTE;if(r===zp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Fp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===AE)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===TE)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===ME)return o.BYTE;if(r===xE)return o.SHORT;if(r===ul)return o.UNSIGNED_SHORT;if(r===Pp)return o.INT;if(r===Js)return o.UNSIGNED_INT;if(r===Aa)return o.FLOAT;if(r===pl)return o.HALF_FLOAT;if(r===CE)return o.ALPHA;if(r===bE)return o.RGB;if(r===Ui)return o.RGBA;if(r===fl)return o.DEPTH_COMPONENT;if(r===hl)return o.DEPTH_STENCIL;if(r===RE)return o.RED;if(r===Hp)return o.RED_INTEGER;if(r===wE)return o.RG;if(r===Gp)return o.RG_INTEGER;if(r===Vp)return o.RGBA_INTEGER;if(r===mc||r===gc||r===_c||r===vc)if(h===Qe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===mc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_c)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===mc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_c)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ip||r===ap||r===sp||r===rp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===ip)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ap)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===op||r===lp||r===up)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===op||r===lp)return h===Qe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===up)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cp||r===fp||r===hp||r===dp||r===pp||r===mp||r===gp||r===_p||r===vp||r===Ep||r===Sp||r===yp||r===Mp||r===xp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===cp)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fp)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hp)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dp)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pp)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mp)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gp)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_p)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vp)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ep)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sp)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yp)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mp)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xp)return h===Qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ap||r===Tp||r===Cp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Ap)return h===Qe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Tp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bp||r===Rp||r===wp||r===Dp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===bp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Rp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const dR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new QE(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new cs({vertexShader:dR,fragmentShader:pR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wi(new Rc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gR extends Ws{constructor(e,i){super();const r=this;let l=null,f=1,h=null,d="local-floor",_=1,m=null,v=null,p=null,S=null,y=null,x=null;const C=typeof XRWebGLBinding<"u",M=new mR,E={},F=i.getContextAttributes();let L=null,D=null;const Y=[],G=[],H=new fe;let q=null;const w=new Di;w.viewport=new rn;const R=new Di;R.viewport=new rn;const X=[w,R],ut=new IA;let J=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let st=Y[W];return st===void 0&&(st=new Ud,Y[W]=st),st.getTargetRaySpace()},this.getControllerGrip=function(W){let st=Y[W];return st===void 0&&(st=new Ud,Y[W]=st),st.getGripSpace()},this.getHand=function(W){let st=Y[W];return st===void 0&&(st=new Ud,Y[W]=st),st.getHandSpace()};function $(W){const st=G.indexOf(W.inputSource);if(st===-1)return;const yt=Y[st];yt!==void 0&&(yt.update(W.inputSource,W.frame,m||h),yt.dispatchEvent({type:W.type,data:W.inputSource}))}function U(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",V);for(let W=0;W<Y.length;W++){const st=G[W];st!==null&&(G[W]=null,Y[W].disconnect(st))}J=null,P=null,M.reset();for(const W in E)delete E[W];e.setRenderTarget(L),y=null,S=null,p=null,l=null,D=null,lt.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){f=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return p===null&&C&&(p=new XRWebGLBinding(l,i)),p},this.getFrame=function(){return x},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",U),l.addEventListener("inputsourceschange",V),F.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(H),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Nt=null,bt=null;F.depth&&(bt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=F.stencil?hl:fl,Nt=F.stencil?cl:Js);const xt={colorFormat:i.RGBA8,depthFormat:bt,scaleFactor:f};p=this.getBinding(),S=p.createProjectionLayer(xt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new qs(S.textureWidth,S.textureHeight,{format:Ui,type:Zi,depthTexture:new VE(S.textureWidth,S.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const yt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:f};y=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new qs(y.framebufferWidth,y.framebufferHeight,{format:Ui,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(_),m=null,h=await l.requestReferenceSpace(d),lt.setContext(l),lt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(W){for(let st=0;st<W.removed.length;st++){const yt=W.removed[st],Nt=G.indexOf(yt);Nt>=0&&(G[Nt]=null,Y[Nt].disconnect(yt))}for(let st=0;st<W.added.length;st++){const yt=W.added[st];let Nt=G.indexOf(yt);if(Nt===-1){for(let xt=0;xt<Y.length;xt++)if(xt>=G.length){G.push(yt),Nt=xt;break}else if(G[xt]===null){G[xt]=yt,Nt=xt;break}if(Nt===-1)break}const bt=Y[Nt];bt&&bt.connect(yt)}}const B=new it,ct=new it;function dt(W,st,yt){B.setFromMatrixPosition(st.matrixWorld),ct.setFromMatrixPosition(yt.matrixWorld);const Nt=B.distanceTo(ct),bt=st.projectionMatrix.elements,xt=yt.projectionMatrix.elements,Kt=bt[14]/(bt[10]-1),z=bt[14]/(bt[10]+1),He=(bt[9]+1)/bt[5],oe=(bt[9]-1)/bt[5],$t=(bt[8]-1)/bt[0],Lt=(xt[8]+1)/xt[0],se=Kt*$t,Ht=Kt*Lt,le=Nt/(-$t+Lt),Ye=le*-$t;if(st.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ye),W.translateZ(le),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),bt[10]===-1)W.projectionMatrix.copy(st.projectionMatrix),W.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Je=Kt+le,O=z+le,T=se-Ye,rt=Ht+(Nt-Ye),gt=He*z/O*Je,St=oe*z/O*Je;W.projectionMatrix.makePerspective(T,rt,gt,St,Je,O),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function vt(W,st){st===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(st.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let st=W.near,yt=W.far;M.texture!==null&&(M.depthNear>0&&(st=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),ut.near=R.near=w.near=st,ut.far=R.far=w.far=yt,(J!==ut.near||P!==ut.far)&&(l.updateRenderState({depthNear:ut.near,depthFar:ut.far}),J=ut.near,P=ut.far),ut.layers.mask=W.layers.mask|6,w.layers.mask=ut.layers.mask&3,R.layers.mask=ut.layers.mask&5;const Nt=W.parent,bt=ut.cameras;vt(ut,Nt);for(let xt=0;xt<bt.length;xt++)vt(bt[xt],Nt);bt.length===2?dt(ut,w,R):ut.projectionMatrix.copy(w.projectionMatrix),wt(W,ut,Nt)};function wt(W,st,yt){yt===null?W.matrix.copy(st.matrixWorld):(W.matrix.copy(yt.matrixWorld),W.matrix.invert(),W.matrix.multiply(st.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(st.projectionMatrix),W.projectionMatrixInverse.copy(st.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Up*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return ut},this.getFoveation=function(){if(!(S===null&&y===null))return _},this.setFoveation=function(W){_=W,S!==null&&(S.fixedFoveation=W),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(ut)},this.getCameraTexture=function(W){return E[W]};let Vt=null;function N(W,st){if(v=st.getViewerPose(m||h),x=st,v!==null){const yt=v.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let Nt=!1;yt.length!==ut.cameras.length&&(ut.cameras.length=0,Nt=!0);for(let z=0;z<yt.length;z++){const He=yt[z];let oe=null;if(y!==null)oe=y.getViewport(He);else{const Lt=p.getViewSubImage(S,He);oe=Lt.viewport,z===0&&(e.setRenderTargetTextures(D,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(D))}let $t=X[z];$t===void 0&&($t=new Di,$t.layers.enable(z),$t.viewport=new rn,X[z]=$t),$t.matrix.fromArray(He.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(He.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(oe.x,oe.y,oe.width,oe.height),z===0&&(ut.matrix.copy($t.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale)),Nt===!0&&ut.cameras.push($t)}const bt=l.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){p=r.getBinding();const z=p.getDepthInformation(yt[0]);z&&z.isValid&&z.texture&&M.init(z,l.renderState)}if(bt&&bt.includes("camera-access")&&C){e.state.unbindTexture(),p=r.getBinding();for(let z=0;z<yt.length;z++){const He=yt[z].camera;if(He){let oe=E[He];oe||(oe=new QE,E[He]=oe);const $t=p.getCameraImage(He);oe.sourceTexture=$t}}}}for(let yt=0;yt<Y.length;yt++){const Nt=G[yt],bt=Y[yt];Nt!==null&&bt!==void 0&&bt.update(Nt,st,m||h)}Vt&&Vt(W,st),st.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:st}),x=null}const lt=new YE;lt.setAnimationLoop(N),this.setAnimationLoop=function(W){Vt=W},this.dispose=function(){}}}const Hs=new $i,_R=new en;function vR(o,e){function i(M,E){M.matrixAutoUpdate===!0&&M.updateMatrix(),E.value.copy(M.matrix)}function r(M,E){E.color.getRGB(M.fogColor.value,zE(o)),E.isFog?(M.fogNear.value=E.near,M.fogFar.value=E.far):E.isFogExp2&&(M.fogDensity.value=E.density)}function l(M,E,F,L,D){E.isMeshBasicMaterial||E.isMeshLambertMaterial?f(M,E):E.isMeshToonMaterial?(f(M,E),p(M,E)):E.isMeshPhongMaterial?(f(M,E),v(M,E)):E.isMeshStandardMaterial?(f(M,E),S(M,E),E.isMeshPhysicalMaterial&&y(M,E,D)):E.isMeshMatcapMaterial?(f(M,E),x(M,E)):E.isMeshDepthMaterial?f(M,E):E.isMeshDistanceMaterial?(f(M,E),C(M,E)):E.isMeshNormalMaterial?f(M,E):E.isLineBasicMaterial?(h(M,E),E.isLineDashedMaterial&&d(M,E)):E.isPointsMaterial?_(M,E,F,L):E.isSpriteMaterial?m(M,E):E.isShadowMaterial?(M.color.value.copy(E.color),M.opacity.value=E.opacity):E.isShaderMaterial&&(E.uniformsNeedUpdate=!1)}function f(M,E){M.opacity.value=E.opacity,E.color&&M.diffuse.value.copy(E.color),E.emissive&&M.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity),E.map&&(M.map.value=E.map,i(E.map,M.mapTransform)),E.alphaMap&&(M.alphaMap.value=E.alphaMap,i(E.alphaMap,M.alphaMapTransform)),E.bumpMap&&(M.bumpMap.value=E.bumpMap,i(E.bumpMap,M.bumpMapTransform),M.bumpScale.value=E.bumpScale,E.side===qn&&(M.bumpScale.value*=-1)),E.normalMap&&(M.normalMap.value=E.normalMap,i(E.normalMap,M.normalMapTransform),M.normalScale.value.copy(E.normalScale),E.side===qn&&M.normalScale.value.negate()),E.displacementMap&&(M.displacementMap.value=E.displacementMap,i(E.displacementMap,M.displacementMapTransform),M.displacementScale.value=E.displacementScale,M.displacementBias.value=E.displacementBias),E.emissiveMap&&(M.emissiveMap.value=E.emissiveMap,i(E.emissiveMap,M.emissiveMapTransform)),E.specularMap&&(M.specularMap.value=E.specularMap,i(E.specularMap,M.specularMapTransform)),E.alphaTest>0&&(M.alphaTest.value=E.alphaTest);const F=e.get(E),L=F.envMap,D=F.envMapRotation;L&&(M.envMap.value=L,Hs.copy(D),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),M.envMapRotation.value.setFromMatrix4(_R.makeRotationFromEuler(Hs)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=E.reflectivity,M.ior.value=E.ior,M.refractionRatio.value=E.refractionRatio),E.lightMap&&(M.lightMap.value=E.lightMap,M.lightMapIntensity.value=E.lightMapIntensity,i(E.lightMap,M.lightMapTransform)),E.aoMap&&(M.aoMap.value=E.aoMap,M.aoMapIntensity.value=E.aoMapIntensity,i(E.aoMap,M.aoMapTransform))}function h(M,E){M.diffuse.value.copy(E.color),M.opacity.value=E.opacity,E.map&&(M.map.value=E.map,i(E.map,M.mapTransform))}function d(M,E){M.dashSize.value=E.dashSize,M.totalSize.value=E.dashSize+E.gapSize,M.scale.value=E.scale}function _(M,E,F,L){M.diffuse.value.copy(E.color),M.opacity.value=E.opacity,M.size.value=E.size*F,M.scale.value=L*.5,E.map&&(M.map.value=E.map,i(E.map,M.uvTransform)),E.alphaMap&&(M.alphaMap.value=E.alphaMap,i(E.alphaMap,M.alphaMapTransform)),E.alphaTest>0&&(M.alphaTest.value=E.alphaTest)}function m(M,E){M.diffuse.value.copy(E.color),M.opacity.value=E.opacity,M.rotation.value=E.rotation,E.map&&(M.map.value=E.map,i(E.map,M.mapTransform)),E.alphaMap&&(M.alphaMap.value=E.alphaMap,i(E.alphaMap,M.alphaMapTransform)),E.alphaTest>0&&(M.alphaTest.value=E.alphaTest)}function v(M,E){M.specular.value.copy(E.specular),M.shininess.value=Math.max(E.shininess,1e-4)}function p(M,E){E.gradientMap&&(M.gradientMap.value=E.gradientMap)}function S(M,E){M.metalness.value=E.metalness,E.metalnessMap&&(M.metalnessMap.value=E.metalnessMap,i(E.metalnessMap,M.metalnessMapTransform)),M.roughness.value=E.roughness,E.roughnessMap&&(M.roughnessMap.value=E.roughnessMap,i(E.roughnessMap,M.roughnessMapTransform)),E.envMap&&(M.envMapIntensity.value=E.envMapIntensity)}function y(M,E,F){M.ior.value=E.ior,E.sheen>0&&(M.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),M.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap&&(M.sheenColorMap.value=E.sheenColorMap,i(E.sheenColorMap,M.sheenColorMapTransform)),E.sheenRoughnessMap&&(M.sheenRoughnessMap.value=E.sheenRoughnessMap,i(E.sheenRoughnessMap,M.sheenRoughnessMapTransform))),E.clearcoat>0&&(M.clearcoat.value=E.clearcoat,M.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap&&(M.clearcoatMap.value=E.clearcoatMap,i(E.clearcoatMap,M.clearcoatMapTransform)),E.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,i(E.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),E.clearcoatNormalMap&&(M.clearcoatNormalMap.value=E.clearcoatNormalMap,i(E.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===qn&&M.clearcoatNormalScale.value.negate())),E.dispersion>0&&(M.dispersion.value=E.dispersion),E.iridescence>0&&(M.iridescence.value=E.iridescence,M.iridescenceIOR.value=E.iridescenceIOR,M.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap&&(M.iridescenceMap.value=E.iridescenceMap,i(E.iridescenceMap,M.iridescenceMapTransform)),E.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=E.iridescenceThicknessMap,i(E.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),E.transmission>0&&(M.transmission.value=E.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),E.transmissionMap&&(M.transmissionMap.value=E.transmissionMap,i(E.transmissionMap,M.transmissionMapTransform)),M.thickness.value=E.thickness,E.thicknessMap&&(M.thicknessMap.value=E.thicknessMap,i(E.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=E.attenuationDistance,M.attenuationColor.value.copy(E.attenuationColor)),E.anisotropy>0&&(M.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap&&(M.anisotropyMap.value=E.anisotropyMap,i(E.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=E.specularIntensity,M.specularColor.value.copy(E.specularColor),E.specularColorMap&&(M.specularColorMap.value=E.specularColorMap,i(E.specularColorMap,M.specularColorMapTransform)),E.specularIntensityMap&&(M.specularIntensityMap.value=E.specularIntensityMap,i(E.specularIntensityMap,M.specularIntensityMapTransform))}function x(M,E){E.matcap&&(M.matcap.value=E.matcap)}function C(M,E){const F=e.get(E).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function ER(o,e,i,r){let l={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(F,L){const D=L.program;r.uniformBlockBinding(F,D)}function m(F,L){let D=l[F.id];D===void 0&&(x(F),D=v(F),l[F.id]=D,F.addEventListener("dispose",M));const Y=L.program;r.updateUBOMapping(F,Y);const G=e.render.frame;f[F.id]!==G&&(S(F),f[F.id]=G)}function v(F){const L=p();F.__bindingPointIndex=L;const D=o.createBuffer(),Y=F.__size,G=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,Y,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,D),D}function p(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const L=l[F.id],D=F.uniforms,Y=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let G=0,H=D.length;G<H;G++){const q=Array.isArray(D[G])?D[G]:[D[G]];for(let w=0,R=q.length;w<R;w++){const X=q[w];if(y(X,G,w,Y)===!0){const ut=X.__offset,J=Array.isArray(X.value)?X.value:[X.value];let P=0;for(let $=0;$<J.length;$++){const U=J[$],V=C(U);typeof U=="number"||typeof U=="boolean"?(X.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,ut+P,X.__data)):U.isMatrix3?(X.__data[0]=U.elements[0],X.__data[1]=U.elements[1],X.__data[2]=U.elements[2],X.__data[3]=0,X.__data[4]=U.elements[3],X.__data[5]=U.elements[4],X.__data[6]=U.elements[5],X.__data[7]=0,X.__data[8]=U.elements[6],X.__data[9]=U.elements[7],X.__data[10]=U.elements[8],X.__data[11]=0):(U.toArray(X.__data,P),P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ut,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(F,L,D,Y){const G=F.value,H=L+"_"+D;if(Y[H]===void 0)return typeof G=="number"||typeof G=="boolean"?Y[H]=G:Y[H]=G.clone(),!0;{const q=Y[H];if(typeof G=="number"||typeof G=="boolean"){if(q!==G)return Y[H]=G,!0}else if(q.equals(G)===!1)return q.copy(G),!0}return!1}function x(F){const L=F.uniforms;let D=0;const Y=16;for(let H=0,q=L.length;H<q;H++){const w=Array.isArray(L[H])?L[H]:[L[H]];for(let R=0,X=w.length;R<X;R++){const ut=w[R],J=Array.isArray(ut.value)?ut.value:[ut.value];for(let P=0,$=J.length;P<$;P++){const U=J[P],V=C(U),B=D%Y,ct=B%V.boundary,dt=B+ct;D+=ct,dt!==0&&Y-dt<V.storage&&(D+=Y-dt),ut.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=D,D+=V.storage}}}const G=D%Y;return G>0&&(D+=Y-G),F.__size=D,F.__cache={},this}function C(F){const L={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(L.boundary=4,L.storage=4):F.isVector2?(L.boundary=8,L.storage=8):F.isVector3||F.isColor?(L.boundary=16,L.storage=12):F.isVector4?(L.boundary=16,L.storage=16):F.isMatrix3?(L.boundary=48,L.storage=48):F.isMatrix4?(L.boundary=64,L.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),L}function M(F){const L=F.target;L.removeEventListener("dispose",M);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete f[L.id]}function E(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},f={}}return{bind:_,update:m,dispose:E}}class SR{constructor(e={}){const{canvas:i=qx(),context:r=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const x=new Uint32Array(4),C=new Int32Array(4);let M=null,E=null;const F=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ls,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let Y=!1;this._outputColorSpace=Ei;let G=0,H=0,q=null,w=-1,R=null;const X=new rn,ut=new rn;let J=null;const P=new be(0);let $=0,U=i.width,V=i.height,B=1,ct=null,dt=null;const vt=new rn(0,0,U,V),wt=new rn(0,0,U,V);let Vt=!1;const N=new Yp;let lt=!1,W=!1;const st=new en,yt=new it,Nt=new rn,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Kt(){return q===null?B:1}let z=r;function He(b,tt){return i.getContext(b,tt)}try{const b={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:_,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bp}`),i.addEventListener("webglcontextlost",Ut,!1),i.addEventListener("webglcontextrestored",kt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),z===null){const tt="webgl2";if(z=He(tt,b),z===null)throw He(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let oe,$t,Lt,se,Ht,le,Ye,Je,O,T,rt,gt,St,pt,Yt,Rt,Wt,Zt,Tt,It,ae,jt,Bt,he;function k(){oe=new Db(z),oe.init(),jt=new hR(z,oe),$t=new xb(z,oe,e,jt),Lt=new cR(z,oe),$t.reversedDepthBuffer&&S&&Lt.buffers.depth.setReversed(!0),se=new Ob(z),Ht=new j1,le=new fR(z,oe,Lt,Ht,$t,jt,se),Ye=new Tb(D),Je=new wb(D),O=new FA(z),Bt=new yb(z,O),T=new Ub(z,O,se,Bt),rt=new Ib(z,T,O,se),Tt=new Lb(z,$t,le),Rt=new Ab(Ht),gt=new W1(D,Ye,Je,oe,$t,Bt,Rt),St=new vR(D,Ht),pt=new $1,Yt=new sR(oe),Zt=new Sb(D,Ye,Je,Lt,rt,y,_),Wt=new lR(D,rt,$t),he=new ER(z,se,$t,Lt),It=new Mb(z,oe,se),ae=new Nb(z,oe,se),se.programs=gt.programs,D.capabilities=$t,D.extensions=oe,D.properties=Ht,D.renderLists=pt,D.shadowMap=Wt,D.state=Lt,D.info=se}k();const Ct=new gR(D,z);this.xr=Ct,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(U,V,!1))},this.getSize=function(b){return b.set(U,V)},this.setSize=function(b,tt,ft=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,V=tt,i.width=Math.floor(b*B),i.height=Math.floor(tt*B),ft===!0&&(i.style.width=b+"px",i.style.height=tt+"px"),this.setViewport(0,0,b,tt)},this.getDrawingBufferSize=function(b){return b.set(U*B,V*B).floor()},this.setDrawingBufferSize=function(b,tt,ft){U=b,V=tt,B=ft,i.width=Math.floor(b*ft),i.height=Math.floor(tt*ft),this.setViewport(0,0,b,tt)},this.getCurrentViewport=function(b){return b.copy(X)},this.getViewport=function(b){return b.copy(vt)},this.setViewport=function(b,tt,ft,ht){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,tt,ft,ht),Lt.viewport(X.copy(vt).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(wt)},this.setScissor=function(b,tt,ft,ht){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,tt,ft,ht),Lt.scissor(ut.copy(wt).multiplyScalar(B).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(b){Lt.setScissorTest(Vt=b)},this.setOpaqueSort=function(b){ct=b},this.setTransparentSort=function(b){dt=b},this.getClearColor=function(b){return b.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(b=!0,tt=!0,ft=!0){let ht=0;if(b){let et=!1;if(q!==null){const At=q.texture.format;et=At===Vp||At===Gp||At===Hp}if(et){const At=q.texture.type,Pt=At===Zi||At===Js||At===ul||At===cl||At===zp||At===Fp,Ft=Zt.getClearColor(),Dt=Zt.getClearAlpha(),Xt=Ft.r,ie=Ft.g,ee=Ft.b;Pt?(x[0]=Xt,x[1]=ie,x[2]=ee,x[3]=Dt,z.clearBufferuiv(z.COLOR,0,x)):(C[0]=Xt,C[1]=ie,C[2]=ee,C[3]=Dt,z.clearBufferiv(z.COLOR,0,C))}else ht|=z.COLOR_BUFFER_BIT}tt&&(ht|=z.DEPTH_BUFFER_BIT),ft&&(ht|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ut,!1),i.removeEventListener("webglcontextrestored",kt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),Zt.dispose(),pt.dispose(),Yt.dispose(),Ht.dispose(),Ye.dispose(),Je.dispose(),rt.dispose(),Bt.dispose(),he.dispose(),gt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",pn),Ct.removeEventListener("sessionend",Un),ea.stop()};function Ut(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const b=se.autoReset,tt=Wt.enabled,ft=Wt.autoUpdate,ht=Wt.needsUpdate,et=Wt.type;k(),se.autoReset=b,Wt.enabled=tt,Wt.autoUpdate=ft,Wt.needsUpdate=ht,Wt.type=et}function Mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Et(b){const tt=b.target;tt.removeEventListener("dispose",Et),qt(tt)}function qt(b){ce(b),Ht.remove(b)}function ce(b){const tt=Ht.get(b).programs;tt!==void 0&&(tt.forEach(function(ft){gt.releaseProgram(ft)}),b.isShaderMaterial&&gt.releaseShaderCache(b))}this.renderBufferDirect=function(b,tt,ft,ht,et,At){tt===null&&(tt=bt);const Pt=et.isMesh&&et.matrixWorld.determinant()<0,Ft=El(b,tt,ft,ht,et);Lt.setMaterial(ht,Pt);let Dt=ft.index,Xt=1;if(ht.wireframe===!0){if(Dt=T.getWireframeAttribute(ft),Dt===void 0)return;Xt=2}const ie=ft.drawRange,ee=ft.attributes.position;let Ee=ie.start*Xt,Ie=(ie.start+ie.count)*Xt;At!==null&&(Ee=Math.max(Ee,At.start*Xt),Ie=Math.min(Ie,(At.start+At.count)*Xt)),Dt!==null?(Ee=Math.max(Ee,0),Ie=Math.min(Ie,Dt.count)):ee!=null&&(Ee=Math.max(Ee,0),Ie=Math.min(Ie,ee.count));const je=Ie-Ee;if(je<0||je===1/0)return;Bt.setup(et,ht,Ft,ft,Dt);let Ne,Re=It;if(Dt!==null&&(Ne=O.get(Dt),Re=ae,Re.setIndex(Ne)),et.isMesh)ht.wireframe===!0?(Lt.setLineWidth(ht.wireframeLinewidth*Kt()),Re.setMode(z.LINES)):Re.setMode(z.TRIANGLES);else if(et.isLine){let ne=ht.linewidth;ne===void 0&&(ne=1),Lt.setLineWidth(ne*Kt()),et.isLineSegments?Re.setMode(z.LINES):et.isLineLoop?Re.setMode(z.LINE_LOOP):Re.setMode(z.LINE_STRIP)}else et.isPoints?Re.setMode(z.POINTS):et.isSprite&&Re.setMode(z.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)dl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Re.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const ne=et._multiDrawStarts,Oe=et._multiDrawCounts,_e=et._multiDrawCount,mn=Dt?O.get(Dt).bytesPerElement:1,jn=Ht.get(ht).currentProgram.getUniforms();for(let we=0;we<_e;we++)jn.setValue(z,"_gl_DrawID",we),Re.render(ne[we]/mn,Oe[we])}else if(et.isInstancedMesh)Re.renderInstances(Ee,je,et.count);else if(ft.isInstancedBufferGeometry){const ne=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Oe=Math.min(ft.instanceCount,ne);Re.renderInstances(Ee,je,Oe)}else Re.render(Ee,je)};function Ge(b,tt,ft){b.transparent===!0&&b.side===xa&&b.forceSinglePass===!1?(b.side=qn,b.needsUpdate=!0,li(b,tt,ft),b.side=us,b.needsUpdate=!0,li(b,tt,ft),b.side=xa):li(b,tt,ft)}this.compile=function(b,tt,ft=null){ft===null&&(ft=b),E=Yt.get(ft),E.init(tt),L.push(E),ft.traverseVisible(function(et){et.isLight&&et.layers.test(tt.layers)&&(E.pushLight(et),et.castShadow&&E.pushShadow(et))}),b!==ft&&b.traverseVisible(function(et){et.isLight&&et.layers.test(tt.layers)&&(E.pushLight(et),et.castShadow&&E.pushShadow(et))}),E.setupLights();const ht=new Set;return b.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const At=et.material;if(At)if(Array.isArray(At))for(let Pt=0;Pt<At.length;Pt++){const Ft=At[Pt];Ge(Ft,ft,et),ht.add(Ft)}else Ge(At,ft,et),ht.add(At)}),E=L.pop(),ht},this.compileAsync=function(b,tt,ft=null){const ht=this.compile(b,tt,ft);return new Promise(et=>{function At(){if(ht.forEach(function(Pt){Ht.get(Pt).currentProgram.isReady()&&ht.delete(Pt)}),ht.size===0){et(b);return}setTimeout(At,10)}oe.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let xe=null;function $e(b){xe&&xe(b)}function pn(){ea.stop()}function Un(){ea.start()}const ea=new YE;ea.setAnimationLoop($e),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(b){xe=b,Ct.setAnimationLoop(b),b===null?ea.stop():ea.start()},Ct.addEventListener("sessionstart",pn),Ct.addEventListener("sessionend",Un),this.render=function(b,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(tt),tt=Ct.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,tt,q),E=Yt.get(b,L.length),E.init(tt),L.push(E),st.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),N.setFromProjectionMatrix(st,qi,tt.reversedDepth),W=this.localClippingEnabled,lt=Rt.init(this.clippingPlanes,W),M=pt.get(b,F.length),M.init(),F.push(M),Ct.enabled===!0&&Ct.isPresenting===!0){const At=D.xr.getDepthSensingMesh();At!==null&&lo(At,tt,-1/0,D.sortObjects)}lo(b,tt,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(ct,dt),xt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,xt&&Zt.addToRenderList(M,b),this.info.render.frame++,lt===!0&&Rt.beginShadows();const ft=E.state.shadowsArray;Wt.render(ft,b,tt),lt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=M.opaque,et=M.transmissive;if(E.setupLights(),tt.isArrayCamera){const At=tt.cameras;if(et.length>0)for(let Pt=0,Ft=At.length;Pt<Ft;Pt++){const Dt=At[Pt];fs(ht,et,b,Dt)}xt&&Zt.render(b);for(let Pt=0,Ft=At.length;Pt<Ft;Pt++){const Dt=At[Pt];vl(M,b,Dt,Dt.viewport)}}else et.length>0&&fs(ht,et,b,tt),xt&&Zt.render(b),vl(M,b,tt);q!==null&&H===0&&(le.updateMultisampleRenderTarget(q),le.updateRenderTargetMipmap(q)),b.isScene===!0&&b.onAfterRender(D,b,tt),Bt.resetDefaultState(),w=-1,R=null,L.pop(),L.length>0?(E=L[L.length-1],lt===!0&&Rt.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,F.pop(),F.length>0?M=F[F.length-1]:M=null};function lo(b,tt,ft,ht){if(b.visible===!1)return;if(b.layers.test(tt.layers)){if(b.isGroup)ft=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(tt);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||N.intersectsSprite(b)){ht&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(st);const Pt=rt.update(b),Ft=b.material;Ft.visible&&M.push(b,Pt,Ft,ft,Nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||N.intersectsObject(b))){const Pt=rt.update(b),Ft=b.material;if(ht&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Nt.copy(Pt.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(st)),Array.isArray(Ft)){const Dt=Pt.groups;for(let Xt=0,ie=Dt.length;Xt<ie;Xt++){const ee=Dt[Xt],Ee=Ft[ee.materialIndex];Ee&&Ee.visible&&M.push(b,Pt,Ee,ft,Nt.z,ee)}}else Ft.visible&&M.push(b,Pt,Ft,ft,Nt.z,null)}}const At=b.children;for(let Pt=0,Ft=At.length;Pt<Ft;Pt++)lo(At[Pt],tt,ft,ht)}function vl(b,tt,ft,ht){const et=b.opaque,At=b.transmissive,Pt=b.transparent;E.setupLightsView(ft),lt===!0&&Rt.setGlobalState(D.clippingPlanes,ft),ht&&Lt.viewport(X.copy(ht)),et.length>0&&na(et,tt,ft),At.length>0&&na(At,tt,ft),Pt.length>0&&na(Pt,tt,ft),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function fs(b,tt,ft,ht){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[ht.id]===void 0&&(E.state.transmissionRenderTarget[ht.id]=new qs(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?pl:Zi,minFilter:Xs,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const At=E.state.transmissionRenderTarget[ht.id],Pt=ht.viewport||X;At.setSize(Pt.z*D.transmissionResolutionScale,Pt.w*D.transmissionResolutionScale);const Ft=D.getRenderTarget(),Dt=D.getActiveCubeFace(),Xt=D.getActiveMipmapLevel();D.setRenderTarget(At),D.getClearColor(P),$=D.getClearAlpha(),$<1&&D.setClearColor(16777215,.5),D.clear(),xt&&Zt.render(ft);const ie=D.toneMapping;D.toneMapping=ls;const ee=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),E.setupLightsView(ht),lt===!0&&Rt.setGlobalState(D.clippingPlanes,ht),na(b,ft,ht),le.updateMultisampleRenderTarget(At),le.updateRenderTargetMipmap(At),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Ie=0,je=tt.length;Ie<je;Ie++){const Ne=tt[Ie],Re=Ne.object,ne=Ne.geometry,Oe=Ne.material,_e=Ne.group;if(Oe.side===xa&&Re.layers.test(ht.layers)){const mn=Oe.side;Oe.side=qn,Oe.needsUpdate=!0,hs(Re,ft,ht,ne,Oe,_e),Oe.side=mn,Oe.needsUpdate=!0,Ee=!0}}Ee===!0&&(le.updateMultisampleRenderTarget(At),le.updateRenderTargetMipmap(At))}D.setRenderTarget(Ft,Dt,Xt),D.setClearColor(P,$),ee!==void 0&&(ht.viewport=ee),D.toneMapping=ie}function na(b,tt,ft){const ht=tt.isScene===!0?tt.overrideMaterial:null;for(let et=0,At=b.length;et<At;et++){const Pt=b[et],Ft=Pt.object,Dt=Pt.geometry,Xt=Pt.group;let ie=Pt.material;ie.allowOverride===!0&&ht!==null&&(ie=ht),Ft.layers.test(ft.layers)&&hs(Ft,tt,ft,Dt,ie,Xt)}}function hs(b,tt,ft,ht,et,At){b.onBeforeRender(D,tt,ft,ht,et,At),b.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),et.onBeforeRender(D,tt,ft,ht,b,At),et.transparent===!0&&et.side===xa&&et.forceSinglePass===!1?(et.side=qn,et.needsUpdate=!0,D.renderBufferDirect(ft,tt,ht,et,b,At),et.side=us,et.needsUpdate=!0,D.renderBufferDirect(ft,tt,ht,et,b,At),et.side=xa):D.renderBufferDirect(ft,tt,ht,et,b,At),b.onAfterRender(D,tt,ft,ht,et,At)}function li(b,tt,ft){tt.isScene!==!0&&(tt=bt);const ht=Ht.get(b),et=E.state.lights,At=E.state.shadowsArray,Pt=et.state.version,Ft=gt.getParameters(b,et.state,At,tt,ft),Dt=gt.getProgramCacheKey(Ft);let Xt=ht.programs;ht.environment=b.isMeshStandardMaterial?tt.environment:null,ht.fog=tt.fog,ht.envMap=(b.isMeshStandardMaterial?Je:Ye).get(b.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&b.envMap===null?tt.environmentRotation:b.envMapRotation,Xt===void 0&&(b.addEventListener("dispose",Et),Xt=new Map,ht.programs=Xt);let ie=Xt.get(Dt);if(ie!==void 0){if(ht.currentProgram===ie&&ht.lightsStateVersion===Pt)return Ca(b,Ft),ie}else Ft.uniforms=gt.getUniforms(b),b.onBeforeCompile(Ft,D),ie=gt.acquireProgram(Ft,Dt),Xt.set(Dt,ie),ht.uniforms=Ft.uniforms;const ee=ht.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ee.clippingPlanes=Rt.uniform),Ca(b,Ft),ht.needsLights=Sl(b),ht.lightsStateVersion=Pt,ht.needsLights&&(ee.ambientLightColor.value=et.state.ambient,ee.lightProbe.value=et.state.probe,ee.directionalLights.value=et.state.directional,ee.directionalLightShadows.value=et.state.directionalShadow,ee.spotLights.value=et.state.spot,ee.spotLightShadows.value=et.state.spotShadow,ee.rectAreaLights.value=et.state.rectArea,ee.ltc_1.value=et.state.rectAreaLTC1,ee.ltc_2.value=et.state.rectAreaLTC2,ee.pointLights.value=et.state.point,ee.pointLightShadows.value=et.state.pointShadow,ee.hemisphereLights.value=et.state.hemi,ee.directionalShadowMap.value=et.state.directionalShadowMap,ee.directionalShadowMatrix.value=et.state.directionalShadowMatrix,ee.spotShadowMap.value=et.state.spotShadowMap,ee.spotLightMatrix.value=et.state.spotLightMatrix,ee.spotLightMap.value=et.state.spotLightMap,ee.pointShadowMap.value=et.state.pointShadowMap,ee.pointShadowMatrix.value=et.state.pointShadowMatrix),ht.currentProgram=ie,ht.uniformsList=null,ie}function ds(b){if(b.uniformsList===null){const tt=b.currentProgram.getUniforms();b.uniformsList=Ec.seqWithValue(tt.seq,b.uniforms)}return b.uniformsList}function Ca(b,tt){const ft=Ht.get(b);ft.outputColorSpace=tt.outputColorSpace,ft.batching=tt.batching,ft.batchingColor=tt.batchingColor,ft.instancing=tt.instancing,ft.instancingColor=tt.instancingColor,ft.instancingMorph=tt.instancingMorph,ft.skinning=tt.skinning,ft.morphTargets=tt.morphTargets,ft.morphNormals=tt.morphNormals,ft.morphColors=tt.morphColors,ft.morphTargetsCount=tt.morphTargetsCount,ft.numClippingPlanes=tt.numClippingPlanes,ft.numIntersection=tt.numClipIntersection,ft.vertexAlphas=tt.vertexAlphas,ft.vertexTangents=tt.vertexTangents,ft.toneMapping=tt.toneMapping}function El(b,tt,ft,ht,et){tt.isScene!==!0&&(tt=bt),le.resetTextureUnits();const At=tt.fog,Pt=ht.isMeshStandardMaterial?tt.environment:null,Ft=q===null?D.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ao,Dt=(ht.isMeshStandardMaterial?Je:Ye).get(ht.envMap||Pt),Xt=ht.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ie=!!ft.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),ee=!!ft.morphAttributes.position,Ee=!!ft.morphAttributes.normal,Ie=!!ft.morphAttributes.color;let je=ls;ht.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(je=D.toneMapping);const Ne=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Re=Ne!==void 0?Ne.length:0,ne=Ht.get(ht),Oe=E.state.lights;if(lt===!0&&(W===!0||b!==R)){const nn=b===R&&ht.id===w;Rt.setState(ht,b,nn)}let _e=!1;ht.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Oe.state.version||ne.outputColorSpace!==Ft||et.isBatchedMesh&&ne.batching===!1||!et.isBatchedMesh&&ne.batching===!0||et.isBatchedMesh&&ne.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&ne.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&ne.instancing===!1||!et.isInstancedMesh&&ne.instancing===!0||et.isSkinnedMesh&&ne.skinning===!1||!et.isSkinnedMesh&&ne.skinning===!0||et.isInstancedMesh&&ne.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&ne.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&ne.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&ne.instancingMorph===!1&&et.morphTexture!==null||ne.envMap!==Dt||ht.fog===!0&&ne.fog!==At||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Rt.numPlanes||ne.numIntersection!==Rt.numIntersection)||ne.vertexAlphas!==Xt||ne.vertexTangents!==ie||ne.morphTargets!==ee||ne.morphNormals!==Ee||ne.morphColors!==Ie||ne.toneMapping!==je||ne.morphTargetsCount!==Re)&&(_e=!0):(_e=!0,ne.__version=ht.version);let mn=ne.currentProgram;_e===!0&&(mn=li(ht,tt,et));let jn=!1,we=!1,ba=!1;const Ke=mn.getUniforms(),Bn=ne.uniforms;if(Lt.useProgram(mn.program)&&(jn=!0,we=!0,ba=!0),ht.id!==w&&(w=ht.id,we=!0),jn||R!==b){Lt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ke.setValue(z,"projectionMatrix",b.projectionMatrix),Ke.setValue(z,"viewMatrix",b.matrixWorldInverse);const Nn=Ke.map.cameraPosition;Nn!==void 0&&Nn.setValue(z,yt.setFromMatrixPosition(b.matrixWorld)),$t.logarithmicDepthBuffer&&Ke.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&Ke.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,we=!0,ba=!0)}if(et.isSkinnedMesh){Ke.setOptional(z,et,"bindMatrix"),Ke.setOptional(z,et,"bindMatrixInverse");const nn=et.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Ke.setValue(z,"boneTexture",nn.boneTexture,le))}et.isBatchedMesh&&(Ke.setOptional(z,et,"batchingTexture"),Ke.setValue(z,"batchingTexture",et._matricesTexture,le),Ke.setOptional(z,et,"batchingIdTexture"),Ke.setValue(z,"batchingIdTexture",et._indirectTexture,le),Ke.setOptional(z,et,"batchingColorTexture"),et._colorsTexture!==null&&Ke.setValue(z,"batchingColorTexture",et._colorsTexture,le));const ln=ft.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Tt.update(et,ft,mn),(we||ne.receiveShadow!==et.receiveShadow)&&(ne.receiveShadow=et.receiveShadow,Ke.setValue(z,"receiveShadow",et.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Bn.envMap.value=Dt,Bn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&tt.environment!==null&&(Bn.envMapIntensity.value=tt.environmentIntensity),we&&(Ke.setValue(z,"toneMappingExposure",D.toneMappingExposure),ne.needsLights&&Dc(Bn,ba),At&&ht.fog===!0&&St.refreshFogUniforms(Bn,At),St.refreshMaterialUniforms(Bn,ht,B,V,E.state.transmissionRenderTarget[b.id]),Ec.upload(z,ds(ne),Bn,le)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Ec.upload(z,ds(ne),Bn,le),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&Ke.setValue(z,"center",et.center),Ke.setValue(z,"modelViewMatrix",et.modelViewMatrix),Ke.setValue(z,"normalMatrix",et.normalMatrix),Ke.setValue(z,"modelMatrix",et.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const nn=ht.uniformsGroups;for(let Nn=0,js=nn.length;Nn<js;Nn++){const Li=nn[Nn];he.update(Li,mn),he.bind(Li,mn)}}return mn}function Dc(b,tt){b.ambientLightColor.needsUpdate=tt,b.lightProbe.needsUpdate=tt,b.directionalLights.needsUpdate=tt,b.directionalLightShadows.needsUpdate=tt,b.pointLights.needsUpdate=tt,b.pointLightShadows.needsUpdate=tt,b.spotLights.needsUpdate=tt,b.spotLightShadows.needsUpdate=tt,b.rectAreaLights.needsUpdate=tt,b.hemisphereLights.needsUpdate=tt}function Sl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(b,tt,ft){const ht=Ht.get(b);ht.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),Ht.get(b.texture).__webglTexture=tt,Ht.get(b.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:ft,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,tt){const ft=Ht.get(b);ft.__webglFramebuffer=tt,ft.__useDefaultFramebuffer=tt===void 0};const uo=z.createFramebuffer();this.setRenderTarget=function(b,tt=0,ft=0){q=b,G=tt,H=ft;let ht=!0,et=null,At=!1,Pt=!1;if(b){const Dt=Ht.get(b);if(Dt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(z.FRAMEBUFFER,null),ht=!1;else if(Dt.__webglFramebuffer===void 0)le.setupRenderTarget(b);else if(Dt.__hasExternalTextures)le.rebindTextures(b,Ht.get(b.texture).__webglTexture,Ht.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ee=b.depthTexture;if(Dt.__boundDepthTexture!==ee){if(ee!==null&&Ht.has(ee)&&(b.width!==ee.image.width||b.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(b)}}const Xt=b.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);const ie=Ht.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ie[tt])?et=ie[tt][ft]:et=ie[tt],At=!0):b.samples>0&&le.useMultisampledRTT(b)===!1?et=Ht.get(b).__webglMultisampledFramebuffer:Array.isArray(ie)?et=ie[ft]:et=ie,X.copy(b.viewport),ut.copy(b.scissor),J=b.scissorTest}else X.copy(vt).multiplyScalar(B).floor(),ut.copy(wt).multiplyScalar(B).floor(),J=Vt;if(ft!==0&&(et=uo),Lt.bindFramebuffer(z.FRAMEBUFFER,et)&&ht&&Lt.drawBuffers(b,et),Lt.viewport(X),Lt.scissor(ut),Lt.setScissorTest(J),At){const Dt=Ht.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt.__webglTexture,ft)}else if(Pt){const Dt=tt;for(let Xt=0;Xt<b.textures.length;Xt++){const ie=Ht.get(b.textures[Xt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Xt,ie.__webglTexture,ft,Dt)}}else if(b!==null&&ft!==0){const Dt=Ht.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Dt.__webglTexture,ft)}w=-1},this.readRenderTargetPixels=function(b,tt,ft,ht,et,At,Pt,Ft=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt){Lt.bindFramebuffer(z.FRAMEBUFFER,Dt);try{const Xt=b.textures[Ft],ie=Xt.format,ee=Xt.type;if(!$t.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=b.width-ht&&ft>=0&&ft<=b.height-et&&(b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ft),z.readPixels(tt,ft,ht,et,jt.convert(ie),jt.convert(ee),At))}finally{const Xt=q!==null?Ht.get(q).__webglFramebuffer:null;Lt.bindFramebuffer(z.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(b,tt,ft,ht,et,At,Pt,Ft=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt)if(tt>=0&&tt<=b.width-ht&&ft>=0&&ft<=b.height-et){Lt.bindFramebuffer(z.FRAMEBUFFER,Dt);const Xt=b.textures[Ft],ie=Xt.format,ee=Xt.type;if(!$t.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.bufferData(z.PIXEL_PACK_BUFFER,At.byteLength,z.STREAM_READ),b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ft),z.readPixels(tt,ft,ht,et,jt.convert(ie),jt.convert(ee),0);const Ie=q!==null?Ht.get(q).__webglFramebuffer:null;Lt.bindFramebuffer(z.FRAMEBUFFER,Ie);const je=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Wx(z,je,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ee),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,At),z.deleteBuffer(Ee),z.deleteSync(je),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,tt=null,ft=0){const ht=Math.pow(2,-ft),et=Math.floor(b.image.width*ht),At=Math.floor(b.image.height*ht),Pt=tt!==null?tt.x:0,Ft=tt!==null?tt.y:0;le.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,ft,0,0,Pt,Ft,et,At),Lt.unbindTexture()};const ps=z.createFramebuffer(),Uc=z.createFramebuffer();this.copyTextureToTexture=function(b,tt,ft=null,ht=null,et=0,At=null){At===null&&(et!==0?(dl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=et,et=0):At=0);let Pt,Ft,Dt,Xt,ie,ee,Ee,Ie,je;const Ne=b.isCompressedTexture?b.mipmaps[At]:b.image;if(ft!==null)Pt=ft.max.x-ft.min.x,Ft=ft.max.y-ft.min.y,Dt=ft.isBox3?ft.max.z-ft.min.z:1,Xt=ft.min.x,ie=ft.min.y,ee=ft.isBox3?ft.min.z:0;else{const ln=Math.pow(2,-et);Pt=Math.floor(Ne.width*ln),Ft=Math.floor(Ne.height*ln),b.isDataArrayTexture?Dt=Ne.depth:b.isData3DTexture?Dt=Math.floor(Ne.depth*ln):Dt=1,Xt=0,ie=0,ee=0}ht!==null?(Ee=ht.x,Ie=ht.y,je=ht.z):(Ee=0,Ie=0,je=0);const Re=jt.convert(tt.format),ne=jt.convert(tt.type);let Oe;tt.isData3DTexture?(le.setTexture3D(tt,0),Oe=z.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(le.setTexture2DArray(tt,0),Oe=z.TEXTURE_2D_ARRAY):(le.setTexture2D(tt,0),Oe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,tt.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,tt.unpackAlignment);const _e=z.getParameter(z.UNPACK_ROW_LENGTH),mn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),jn=z.getParameter(z.UNPACK_SKIP_PIXELS),we=z.getParameter(z.UNPACK_SKIP_ROWS),ba=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ne.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ne.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Xt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ie),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ee);const Ke=b.isDataArrayTexture||b.isData3DTexture,Bn=tt.isDataArrayTexture||tt.isData3DTexture;if(b.isDepthTexture){const ln=Ht.get(b),nn=Ht.get(tt),Nn=Ht.get(ln.__renderTarget),js=Ht.get(nn.__renderTarget);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,js.__webglFramebuffer);for(let Li=0;Li<Dt;Li++)Ke&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ht.get(b).__webglTexture,et,ee+Li),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ht.get(tt).__webglTexture,At,je+Li)),z.blitFramebuffer(Xt,ie,Pt,Ft,Ee,Ie,Pt,Ft,z.DEPTH_BUFFER_BIT,z.NEAREST);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(et!==0||b.isRenderTargetTexture||Ht.has(b)){const ln=Ht.get(b),nn=Ht.get(tt);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,ps),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Uc);for(let Nn=0;Nn<Dt;Nn++)Ke?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ln.__webglTexture,et,ee+Nn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ln.__webglTexture,et),Bn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nn.__webglTexture,At,je+Nn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nn.__webglTexture,At),et!==0?z.blitFramebuffer(Xt,ie,Pt,Ft,Ee,Ie,Pt,Ft,z.COLOR_BUFFER_BIT,z.NEAREST):Bn?z.copyTexSubImage3D(Oe,At,Ee,Ie,je+Nn,Xt,ie,Pt,Ft):z.copyTexSubImage2D(Oe,At,Ee,Ie,Xt,ie,Pt,Ft);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Bn?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(Oe,At,Ee,Ie,je,Pt,Ft,Dt,Re,ne,Ne.data):tt.isCompressedArrayTexture?z.compressedTexSubImage3D(Oe,At,Ee,Ie,je,Pt,Ft,Dt,Re,Ne.data):z.texSubImage3D(Oe,At,Ee,Ie,je,Pt,Ft,Dt,Re,ne,Ne):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,At,Ee,Ie,Pt,Ft,Re,ne,Ne.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,At,Ee,Ie,Ne.width,Ne.height,Re,Ne.data):z.texSubImage2D(z.TEXTURE_2D,At,Ee,Ie,Pt,Ft,Re,ne,Ne);z.pixelStorei(z.UNPACK_ROW_LENGTH,_e),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,jn),z.pixelStorei(z.UNPACK_SKIP_ROWS,we),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ba),At===0&&tt.generateMipmaps&&z.generateMipmap(Oe),Lt.unbindTexture()},this.initRenderTarget=function(b){Ht.get(b).__webglFramebuffer===void 0&&le.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?le.setTextureCube(b,0):b.isData3DTexture?le.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?le.setTexture2DArray(b,0):le.setTexture2D(b,0),Lt.unbindTexture()},this.resetState=function(){G=0,H=0,q=null,Lt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const mE={type:"change"},Kp={type:"start"},WE={type:"end"},pc=new bc,gE=new Xi,yR=Math.cos(70*Kx.DEG2RAD),_n=new it,Kn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vd=1e-6;class MR extends PA{constructor(e,i=null){super(e,i),this.state=ke.NONE,this.target=new it,this.cursor=new it,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN},this.touches={ONE:ks.ROTATE,TWO:ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new it,this._lastQuaternion=new Ks,this._lastTargetPosition=new it,this._quat=new Ks().setFromUnitVectors(e.up,new it(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Q0,this._sphericalDelta=new Q0,this._scale=1,this._panOffset=new it,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new it,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=AR.bind(this),this._onPointerDown=xR.bind(this),this._onPointerUp=TR.bind(this),this._onContextMenu=NR.bind(this),this._onMouseWheel=RR.bind(this),this._onKeyDown=wR.bind(this),this._onTouchStart=DR.bind(this),this._onTouchMove=UR.bind(this),this._onMouseDown=CR.bind(this),this._onMouseMove=bR.bind(this),this._interceptControlDown=OR.bind(this),this._interceptControlUp=LR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mE),this.update(),this.state=ke.NONE}update(e=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Kn:r>Math.PI&&(r-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const _=d-h;this.object.position.addScaledVector(this._dollyDirection,_),this.object.updateMatrixWorld(),f=!!_}else if(this.object.isOrthographicCamera){const d=new it(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const _=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=_!==this.object.zoom;const m=new it(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(pc.origin.copy(this.object.position),pc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pc.direction))<yR?this.object.lookAt(this.target):(gE.setFromNormalAndCoplanarPoint(this.object.up,this.target),pc.intersectPlane(gE,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>Vd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vd||this._lastTargetPosition.distanceToSquared(this.target)>Vd?(this.dispatchEvent(mE),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kn/60*this.autoRotateSpeed*e:Kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-e),this._panOffset.add(_n)}_panUp(e,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(e),this._panOffset.add(_n)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let f=_n.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=e-r.left,f=i-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),l=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(l,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new fe,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function xR(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function AR(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function TR(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(WE),this.state=ke.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function CR(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Zr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=ke.DOLLY;break;case Zr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ke.ROTATE}break;case Zr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(Kp)}function bR(o){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function RR(o){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(o.preventDefault(),this.dispatchEvent(Kp),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(WE))}function wR(o){this.enabled!==!1&&this._handleKeyDown(o)}function DR(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case ks.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=ke.TOUCH_ROTATE;break;case ks.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case ks.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=ke.TOUCH_DOLLY_PAN;break;case ks.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(Kp)}function UR(o){switch(this._trackPointer(o),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=ke.NONE}}function NR(o){this.enabled!==!1&&o.preventDefault()}function OR(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function LR(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _E=([o,e,i],[r,l,f])=>[e*f-i*l,i*r-o*f,o*l-e*r],Lp=o=>{const e=Math.hypot(...o)||1;return o.map(i=>i/e)},jE={等轴测:[1,1,1],主视:[0,0,1],俯视:[0,1,0],左视:[-1,0,0],右视:[1,0,0],后视:[0,0,-1],仰视:[0,-1,0]};function IR(o){const e=Lp(o),i=Math.abs(e[1])>.9999?[0,0,-Math.sign(e[1])]:[0,1,0],r=Lp(_E(i,e));return[r,_E(e,r),e]}class BR{constructor(e){this.canvas=e;try{this.renderer=new SR({canvas:e,antialias:!0,preserveDrawingBuffer:!0})}catch{throw Error("无法初始化 WebGL 2。请使用支持 WebGL 2 的浏览器并重新加载。")}this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.localClippingEnabled=!0,this.scene=new yA,this.scene.background=new be("#e6f0ef"),this.camera=new Xp(-1,1,1,-1,.01,100),this.camera.position.set(2,2,2),this.controls=new MR(this.camera,e),this.controls.enablePan=!1,this.controls.minZoom=.35,this.controls.maxZoom=8,this.controls.touches.TWO=ks.DOLLY_PAN,this.controls.addEventListener("change",()=>this.draw()),this.scene.add(new UA(15859706,6322296,2.1));const i=new LA(16777215,2.2);i.position.set(1,2,3),this.scene.add(i),this.wire=!1,this.radius=1,this.ray=new BA,this.plane=new Xi(new it(-1,0,0),1),this.reset(),new ResizeObserver(()=>this.draw()).observe(e),e.addEventListener("webglcontextlost",l=>{l.preventDefault(),e.dispatchEvent(new Event("viewererror"))}),e.addEventListener("webglcontextrestored",()=>this.draw());let r;e.addEventListener("pointerdown",l=>{l.isPrimary&&(r=[l.clientX,l.clientY])}),e.addEventListener("pointerup",l=>{r&&l.isPrimary&&Math.hypot(l.clientX-r[0],l.clientY-r[1])<5&&this.pick(l.clientX,l.clientY),r=null})}cut(e){this.mesh&&(this.plane.constant=(e/100-.5)*this.width,this.mesh.material.clippingPlanes=e>=100?[]:[this.plane],this.edges.material.clippingPlanes=this.mesh.material.clippingPlanes,this.draw())}pick(e,i){if(!this.mesh)return;const r=this.canvas.getBoundingClientRect();this.ray.setFromCamera(new fe((e-r.left)/r.width*2-1,1-(i-r.top)/r.height*2),this.camera);const l=this.ray.intersectObject(this.mesh,!1).find(p=>!this.mesh.material.clippingPlanes?.length||this.plane.distanceToPoint(p.point)>=0);if(!l)return;const f=this.mesh.geometry,h=f.getAttribute("position"),d=new Xi().setFromNormalAndCoplanarPoint(l.face.normal,l.point),_=new Map,m=p=>p.toArray().map(S=>S.toFixed(6)).join(","),v=f.index.array;for(let p=0;p<v.length;p+=3){const S=[v[p],v[p+1],v[p+2]].map(y=>new it().fromBufferAttribute(h,y));S.some(y=>Math.abs(d.distanceToPoint(y))>1e-6)||S.forEach((y,x)=>{const C=S[(x+1)%3],M=[m(y),m(C)].sort().join("|");_.has(M)?_.delete(M):_.set(M,[y,C])})}this.onPick?.([..._.values()].map(p=>p.map(S=>S.clone().add(this.center).toArray())))}reset(){this.camera.zoom=1,this.direction("等轴测")}direction(e){const i=jE[e];this.camera.position.set(...Lp(i)).multiplyScalar(4),this.camera.up.set(...IR(i)[1]),this.controls.target.set(0,0,0),this.camera.lookAt(0,0,0),this.draw()}setModel(e){if(this.mesh&&(this.scene.remove(this.mesh),this.edges.geometry.dispose(),this.edges.material.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null),!e){this.draw();return}const i=new ta;i.setAttribute("position",new Oi(e.vertices,3)),i.setIndex(e.indices),i.computeVertexNormals(),i.computeBoundingBox(),this.center=i.boundingBox.getCenter(new it),this.width=i.boundingBox.max.x-i.boundingBox.min.x,i.center(),i.computeBoundingSphere(),this.radius=Math.max(i.boundingSphere.radius,.01),this.mesh=new Wi(i,new RA({color:2663566,roughness:.72,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})),this.edges=new CA(new bA(i),new GE({color:2181963})),this.mesh.add(this.edges),this.scene.add(this.mesh),this.reset()}draw(){const e=Math.max(1,this.canvas.clientWidth),i=Math.max(1,this.canvas.clientHeight),r=e/i,l=this.radius/.79;this.camera.left=-l*Math.max(1,r),this.camera.right=-this.camera.left,this.camera.top=l*Math.max(1,1/r),this.camera.bottom=-this.camera.top,this.camera.updateProjectionMatrix(),this.edges&&(this.edges.visible=this.wire);const f=this.renderer.getSize(new fe);(f.x!==e||f.y!==i)&&this.renderer.setSize(e,i,!1),this.renderer.render(this.scene,this.camera)}}function qp({width:o,height:e,data:i},r=145){const l=[];for(let f=0;f<e;f++)for(let h=0;h<o;h++){const d=(f*o+h)*4;i[d+3]>100&&i[d]*.299+i[d+1]*.587+i[d+2]*.114<r&&l.push([h,f])}return l}function PR(o){const{width:e,height:i,data:r}=o,l=[];for(let y=0;y<i;y++)for(let x=0;x<e;x++){const C=(y*e+x)*4;r[C+3]>100&&r[C+2]-r[C]>18&&r[C+2]-r[C+1]>3&&r[C+1]-r[C]>7&&l.push([x,y])}const f=l.length>e*i*.007,h=f?l:qp(o),d=[new Uint32Array(e),new Uint32Array(i)];h.forEach(y=>y.forEach((x,C)=>d[C][x]++));let _=null;d.forEach((y,x)=>{let C=0;const M=Math.max(2,Math.round(y.length*.025));for(let E=0;E<y.length;E++){C+=y[E];const F=E/y.length,L=Math.min(C,h.length-C)/Math.max(1,h.length);if(F<.25||F>.75||L<.16)continue;const D=y.slice(E-M,E+M+1).reduce((H,q)=>H+q,0),Y=L*2-Math.abs(F-.5)*.8-D/Math.max(1,h.length)*28,G=f?.006:.012;D<h.length*G&&(!_||Y>_.score)&&(_={axis:x,t:F,score:Y})}});const{axis:m,t:v}=_??{axis:1,t:.5},p={x:.01,y:.01,w:.98,h:.98},S={...p};return m===0?(p.w=v-.01,S.x=v,S.w=.99-v):(p.h=v-.01,S.y=v,S.h=.99-v),{crops:[p,S],axis:m,automatic:!!_}}function zR(o){const{width:e,height:i}=o,r=qp(o);if(r.length<50||r.length>e*i*.3)return 0;const l=_=>{const m=_*Math.PI/180,v=Math.cos(m),p=Math.sin(m),S=new Uint32Array(i+e*2);for(const[y,x]of r)S[Math.round(p*y+v*x)+e]++;return S.reduce((y,x)=>y+x*x,0)},f=l(0);let h=f,d=0;for(let _=-12;_<=12;_++){const m=l(_);m>h&&(h=m,d=_)}return h>f*1.12?d:0}function FR(o){const{width:e,height:i}=o,r=Array.from({length:i},()=>[]);qp(o).forEach(([x,C])=>r[C].push(x));const l=r.map((x,C)=>[C,x.at(-1)-x[0],(x.at(-1)+x[0])/2]).filter(([,x])=>x>e*.45);if(l.length<i*.38)return 0;const f=l[0][0],h=l.at(-1)[0];if(h-f<i*.38)return 0;const d=Math.max(4,Math.floor(l.length*.18)),_=x=>x.sort((C,M)=>C-M)[Math.floor(x.length/2)],m=_(l.slice(d,d*2).map(([,x])=>x)),v=_(l.slice(-d*2,-d).map(([,x])=>x)),p=(m+v)/2;if(l.some(([,x])=>Math.abs(x-p)>p*.2))return 0;const S=(v-m)*i/(Math.max(1,h-f)*.55),y=Math.round(-50*S/p);return Math.abs(y)<3||Math.abs(y)>20?0:y}function HR(o){const{width:e,height:i,data:r}=o;let l=0,f=0;for(let d=0;d<r.length;d+=4){const _=(r[d]+r[d+1]+r[d+2])/3;_<105?l++:_<195&&f++}const h=e*i;return l/h>.32?"画面较暗，请避开阴影。":l/h<.004?"线条偏淡或画面太空，请靠近图纸拍摄。":f>l*2.5&&f/h>.09?"线条边缘过渡较宽，请检查对焦和光线。":""}let GR;function VR(){return GR??=new Promise((o,e)=>{const i=indexedDB.open("two-view-modeler",1);i.onupgradeneeded=()=>i.result.createObjectStore("workspace"),i.onsuccess=()=>o(i.result),i.onerror=()=>e(i.error)})}async function Qd(o,e){const i=await VR();return new Promise((r,l)=>{const f=i.transaction("workspace",o==="get"?"readonly":"readwrite"),h=f.objectStore("workspace"),d=o==="get"?h.get("current"):o==="put"?h.put(e,"current"):h.delete("current");f.oncomplete=()=>r(d.result),f.onabort=()=>l(f.error),f.onerror=()=>l(f.error)})}function QR(o){const{vertices:e,indices:i}=o,r=new ArrayBuffer(84+i.length/3*50),l=new DataView(r);l.setUint32(80,i.length/3,!0);for(let f=0;f<i.length;f+=3){const[h,d,_]=i.slice(f,f+3).map(x=>e.slice(x*3,x*3+3)),m=d.map((x,C)=>x-h[C]),v=_.map((x,C)=>x-h[C]),p=[m[1]*v[2]-m[2]*v[1],m[2]*v[0]-m[0]*v[2],m[0]*v[1]-m[1]*v[0]],S=Math.hypot(...p)||1,y=84+f/3*50;[...p.map(x=>x/S),...h,...d,..._].forEach((x,C)=>l.setFloat32(y+C*4,x,!0))}return new Blob([r],{type:"model/stl"})}function vE(o,e){const i=URL.createObjectURL(o),r=document.createElement("a");r.href=i,r.download=e,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function kR(){const o=J=>document.getElementById(J),e=o("status"),i=o("analyze");let r,l,f=0,h=!1,d=[],_=0,m,v=0,p=!1;const S=new WeakMap;try{r=new BR(o("model"))}catch(J){o("empty").textContent=J.message}o("model").addEventListener("viewererror",()=>{const J=o("empty");J.hidden=!1,J.textContent="WebGL 连接中断，请重新加载页面。"});const y=J=>{e.textContent=J};function x(){f++,l&&(l.terminate(),l=null),h&&(h=!1,i.disabled=!1),o("cancel").hidden=!0,r?.setModel(null),o("empty").hidden=!1,d=[],_=0,o("candidates").replaceChildren(),o("snapshot").disabled=o("stl").disabled=!0,o("section").disabled=!0,o("construction").textContent="",r&&(o("empty").textContent="生成后可在这里旋转模型"),y("调整完毕后点击“分析并生成”。"),R()}const C=[["tilt","倾斜",-20,20,0],["perspective","透视",-25,25,0],["threshold","阈值",60,225,145]];class M{constructor(P,$){this.name=P,this.resetCrop(),this.rotation=0;const U=document.createElement("div");U.className="editor",U.innerHTML="<h3>"+P+'</h3><label class="file">拍照 / 选图<input type="file" accept="image/*,.heic,.heif" aria-label="'+P+'拍照或选图"></label><canvas width="360" height="270" aria-label="'+P+'裁剪预览"></canvas><button type="button">旋转 90°</button><button type="button" data-auto>自动校正</button>'+C.map(([B,ct,dt,vt,wt])=>'<label class="range">'+ct+" <output>"+wt+'</output><input type="range" data-key="'+B+'" min="'+dt+'" max="'+vt+'" value="'+wt+'"></label>').join(""),o("editors").append(U),this.el=U,this.canvas=U.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),U.querySelector("input").onchange=B=>{$(B.target.files[0],[this]),B.target.value=""},U.querySelector("button").onclick=()=>{this.image&&(this.rotation=(this.rotation+90)%360,this.resetCrop(),this.change())},U.querySelector("[data-auto]").onclick=()=>{if(!this.image)return;const B=zR(this.pixels());if(this.setValue("tilt",Math.max(-20,Math.min(20,this.value("tilt")+B))),this.rotation%180===0){const ct=FR(this.pixels())/this.crop.h*(this.rotation===180?-1:1);this.setValue("perspective",Math.round(Math.max(-25,Math.min(25,this.value("perspective")+ct))))}this.change()},U.querySelectorAll("[data-key]").forEach(B=>B.oninput=()=>{B.previousElementSibling.value=B.value,this.change()});const V=B=>{const ct=this.canvas.getBoundingClientRect();return[(B.clientX-ct.left)*360/ct.width,(B.clientY-ct.top)*270/ct.height]};this.canvas.onpointerdown=B=>{if(!this.image)return;const[ct,dt]=V(B),vt=this.bounds(),[wt,Vt]=[(ct-vt.x)/vt.w,(dt-vt.y)/vt.h],N=this.crop,lt=Math.hypot((wt-N.x-N.w)*vt.w,(Vt-N.y-N.h)*vt.h)<18;lt||wt>=N.x&&wt<=N.x+N.w&&Vt>=N.y&&Vt<=N.y+N.h?(this.drag={x:wt,y:Vt,c:{...N},handle:lt},this.canvas.setPointerCapture(B.pointerId)):wt>=0&&wt<1&&Vt>=0&&Vt<1&&(N.x=Math.max(0,Math.min(1-N.w,wt-N.w/2)),N.y=Math.max(0,Math.min(1-N.h,Vt-N.h/2)),this.change())},this.canvas.onpointermove=B=>{if(!this.drag)return;const[ct,dt]=V(B),vt=this.bounds(),wt=this.drag,Vt=(ct-vt.x)/vt.w-wt.x,N=(dt-vt.y)/vt.h-wt.y,lt=this.crop,W=(st,yt,Nt)=>Math.max(yt,Math.min(Nt,st));wt.handle?(lt.w=W(wt.c.w+Vt,.07,1-lt.x),lt.h=W(wt.c.h+N,.07,1-lt.y)):(lt.x=W(wt.c.x+Vt,0,1-lt.w),lt.y=W(wt.c.y+N,0,1-lt.h)),this.change()},this.canvas.onpointerup=this.canvas.onpointercancel=this.canvas.onlostpointercapture=()=>{this.drag=null},this.draw()}value(P){return Number(this.el.querySelector("[data-key="+P+"]").value)}setValue(P,$){const U=this.el.querySelector("[data-key="+P+"]");U.value=$,U.previousElementSibling.value=$}resetCrop(P={x:.01,y:.01,w:.98,h:.98}){this.crop={...P}}load(P,$){this.image=P,this.rotation=0,this.resetCrop($),this.change()}change(){this.overlay=null,this.picked=null,x(),this.draw()}bounds(){const P=this.rotation%180?[this.image.height,this.image.width]:[this.image.width,this.image.height],$=Math.min(360/P[0],270/P[1]),U=P[0]*$,V=P[1]*$;return{x:(360-U)/2,y:(270-V)/2,w:U,h:V}}render(P,$,U,V,B){P.save(),P.translate($+V/2,U+B/2),P.rotate((this.rotation+this.value("tilt"))*Math.PI/180);const ct=this.rotation%180,dt=ct?B:V,vt=ct?V:B,wt=this.value("perspective")/100;if(wt)for(let Vt=0;Vt<vt;Vt++){const N=1+wt*(2*Vt/vt-1);P.drawImage(this.image,0,Vt/vt*this.image.height,this.image.width,Math.min(1.08,vt-Vt)/vt*this.image.height,-dt*N/2,-vt/2+Vt,dt*N,Math.min(1.08,vt-Vt))}else P.drawImage(this.image,-dt/2,-vt/2,dt,vt);P.restore()}draw(){const P=this.ctx;if(P.clearRect(0,0,360,270),!this.image){P.fillStyle="#486666",P.font="18px sans-serif",P.textAlign="center",P.fillText("等待导入",180,143);return}const $=this.bounds(),U=this.crop;this.render(P,$.x,$.y,$.w,$.h);const V=$.x+U.x*$.w,B=$.y+U.y*$.h,ct=U.w*$.w,dt=U.h*$.h;if(P.strokeStyle="#00b98c",P.lineWidth=3,P.strokeRect(V,B,ct,dt),P.fillStyle="#007a61",P.fillRect(V+ct-9,B+dt-9,12,12),this.overlay){const{data:vt,width:wt,height:Vt}=this.overlay;P.strokeStyle="#dc4a1d",P.lineWidth=2;for(const N of vt.upper?[vt.upper,vt.lower]:[])P.beginPath(),N.forEach((lt,W)=>P[W?"lineTo":"moveTo"](V+(vt.l+W)/wt*ct,B+lt/Vt*dt)),P.stroke();for(const N of vt.transverse??[]){const lt=vt.l+N*(vt.r-vt.l);P.beginPath(),P.moveTo(V+lt/wt*ct,B+vt.t/Vt*dt),P.lineTo(V+lt/wt*ct,B+vt.b/Vt*dt),P.stroke()}!vt.upper&&vt.l!==void 0&&P.strokeRect(V+vt.l/wt*ct,B+vt.t/Vt*dt,(vt.r-vt.l)/wt*ct,(vt.b-vt.t)/Vt*dt);for(const N of vt.circles??(vt.circle?[vt.circle]:[]))P.beginPath(),P.ellipse(V+N.x/wt*ct,B+N.y/Vt*dt,N.rad/wt*ct,N.rad/Vt*dt,0,0,2*Math.PI),P.stroke();this.picked?.length&&(P.strokeStyle="#6627ad",P.lineWidth=3,P.beginPath(),this.picked.forEach(N=>N.forEach(([lt,W],st)=>P[st?"lineTo":"moveTo"](V+lt/wt*ct,B+W/Vt*dt))),P.stroke())}}pixels(){const P=this.bounds(),$=this.crop,U=600/Math.max(P.w*$.w,P.h*$.h),V=document.createElement("canvas");V.width=Math.round(P.w*$.w*U),V.height=Math.round(P.h*$.h*U);const B=V.getContext("2d",{willReadFrequently:!0});return B.fillStyle="#fff",B.fillRect(0,0,V.width,V.height),this.render(B,-$.x*P.w*U,-$.y*P.h*U,P.w*U,P.h*U),B.getImageData(0,0,V.width,V.height)}}let E=0;async function F(J,P){if(!J)return;const $=++E;x();for(const V of P)V.loadStamp=$,V.image=null,V.overlay=null,V.draw();y("正在读取照片…");const U=URL.createObjectURL(J);try{const V=new Image;if(V.src=U,await V.decode(),!P.some(W=>W.loadStamp===$))return;const B=document.createElement("canvas"),ct=Math.min(1,1800/Math.max(V.width,V.height));B.width=Math.max(1,Math.round(V.width*ct)),B.height=Math.max(1,Math.round(V.height*ct)),B.getContext("2d").drawImage(V,0,0,B.width,B.height);const dt=document.createElement("canvas"),vt=Math.min(1,180/Math.max(B.width,B.height));dt.width=Math.max(1,Math.round(B.width*vt)),dt.height=Math.max(1,Math.round(B.height*vt));const wt=dt.getContext("2d");wt.drawImage(B,0,0,dt.width,dt.height);const Vt=wt.getImageData(0,0,dt.width,dt.height),N=P.length===2?PR(Vt):null;P.forEach((W,st)=>{W.loadStamp===$&&W.load(B,N?.crops[st])});const lt=N?(N.automatic?"已按留白"+(N.axis?"上下":"左右")+"分图。":"默认上下各取一半。")+"请核对主视图和俯视图，必要时调整裁剪。":"照片已读入。请检查轮廓是否完整。";y([lt,HR(Vt)].filter(Boolean).join(`
`))}catch{P.some(V=>V.loadStamp===$)&&y("无法读取这张照片。若是 HEIC，请在手机上转为 JPEG 或 PNG 后重试。")}finally{URL.revokeObjectURL(U)}}const L=["主视图","俯视图"].map(J=>new M(J,F)),D=()=>({scale:Number(o("align-width").value)/100,offset:Number(o("align-center").value)/100});function Y(){o("width-value").value=o("align-width").value+"%",o("center-value").value=o("align-center").value+"%"}for(const J of["align-width","align-center"])o(J).oninput=()=>{Y(),x()};const G=Object.assign({"./samples/01-box-front.png":kM,"./samples/01-box-top.png":YM,"./samples/03-step-front.png":XM,"./samples/03-step-top.png":JM,"./samples/04-boss-front.png":KM,"./samples/04-boss-top.png":qM,"./samples/06-slope-front.png":WM,"./samples/06-slope-top.png":jM,"./samples/09-v-groove-front.png":ZM,"./samples/09-v-groove-top.png":$M,"./samples/10-u-groove-front.png":tx,"./samples/10-u-groove-top.png":ex,"./samples/11-cylinder-front.png":nx,"./samples/11-cylinder-top.png":ix,"./samples/13-hole-unknown-front.png":ax,"./samples/13-hole-unknown-top.png":sx}),H={"01-box":"长方体","03-step":"阶梯体","04-boss":"凸台","06-slope":"斜面","09-v-groove":"V 形槽","10-u-groove":"U 形槽","11-cylinder":"圆柱","13-hole-unknown":"孔深不确定的圆孔"};for(const[J,P]of Object.entries(H))o("practice").append(new Option(P,J));o("practice-load").onclick=async()=>{const J=o("practice").value;try{await Promise.all(["front","top"].map(async(P,$)=>{const U=await fetch(G["./samples/"+J+"-"+P+".png"]);if(!U.ok)throw Error();await F(await U.blob(),[L[$]])}))}catch{y("练习样例加载失败。请刷新页面后重试。")}},r&&(r.onPick=J=>{d[_]&&L.forEach(($,U)=>{const V=$.overlay?.data;if(!V)return;const[B,ct,dt]=V.l===void 0?[V.circle.x-V.circle.rad,V.circle.y-V.circle.rad,2*V.circle.rad]:[V.l,V.t,V.r-V.l],{scale:vt,offset:wt}=D();$.picked=J.map(Vt=>Vt.map(([N,lt,W])=>U?[B+((N-.5-wt)/vt+.5)*dt,ct+W*dt/vt]:[B+N*dt,V.b-lt*dt])),$.draw()})}),o("section").oninput=J=>r?.cut(Number(J.currentTarget.value));function q(J){return J.bracket?"先建立带两孔的圆角底座，再加上圆弧耳板。耳板上的孔沿底座深度方向穿过。":J.type.includes("槽")?"先确定两侧平台和底面，再沿深度方向移除槽口范围内的材料。":J.type.includes("孔")?"先确定矩形块体，再沿俯视图圆心向下移除圆柱形材料。":J.type.includes("斜")?"先确定底面和厚度，再用主视图中的斜边确定斜切面。":J.type.includes("阶梯")||J.type.includes("凸台")?"先定位台阶分界，再根据各段的高度或深度形成平台。":J.type==="圆柱"?"俯视图给出圆形截面，主视图给出圆柱的高度。":"两张图共用宽度，主视图给出高度，俯视图给出深度。"}function w(J){return S.has(J)||S.set(J,new Promise(P=>J.toBlob(P,"image/png"))),S.get(J)}function R(J=360){if(p)return;clearTimeout(m);const P=++v;m=setTimeout(async()=>{try{const $=await Promise.all(L.map(async U=>({crop:{...U.crop},rotation:U.rotation,settings:Object.fromEntries(C.map(([V])=>[V,U.value(V)])),overlay:U.overlay,photo:U.image?await w(U.image):null})));if(P!==v||p)return;$.some(U=>U.photo)&&await Qd("put",{inputs:$,candidates:d,selected:_,alignment:D()})}catch{o("storage-note").textContent="本地保存不可用，照片仍可用于当前页面。"}},J)}function X(J,P=0){d=J;const $=U=>{_=U;const V=d[U];r.setModel(V),o("empty").hidden=!0,L.forEach(ct=>{ct.picked=null,ct.draw()}),o("snapshot").disabled=o("stl").disabled=!1,o("section").value="100",o("section").disabled=!1,o("construction").textContent=q(V),[...o("candidates").children].forEach((ct,dt)=>ct.setAttribute("aria-pressed",String(dt===U)));const B=V.bracket?"已从两图拟合圆弧、底座和三个孔位。模型按通孔解释，孔深请对照原图虚线核实。":d.length>1?"不确定区域在圆孔底部。盲孔候选仅示意一个可能深度。":V.round?"已拟合两个方向的几何约束。隐藏结构仍可能存在歧义。":"两个输入方向的轮廓检查通过。隐藏结构仍可能存在歧义。";y(V.type+`
`+B),R(0)};o("candidates").replaceChildren(),J.length>1&&J.forEach((U,V)=>{const B=document.createElement("button");B.textContent=U.type,B.onclick=()=>$(V),o("candidates").append(B)}),$(P)}async function ut(){const J=f;try{const P=await Qd("get");if(!P||J!==f||p)return;const $=await Promise.all(P.inputs.map(async U=>{if(!U.photo)return null;const V=new Image,B=URL.createObjectURL(U.photo);try{V.src=B,await V.decode();const ct=document.createElement("canvas");return ct.width=V.width,ct.height=V.height,ct.getContext("2d").drawImage(V,0,0),S.set(ct,Promise.resolve(U.photo)),ct}finally{URL.revokeObjectURL(B)}}));if(J!==f||p)return;P.alignment&&(o("align-width").value=Math.round(P.alignment.scale*100),o("align-center").value=Math.round(P.alignment.offset*100),Y()),L.forEach((U,V)=>{const B=P.inputs[V];U.image=$[V],U.rotation=B.rotation,U.crop=B.crop,U.overlay=B.overlay;for(const[ct,dt]of Object.entries(B.settings))U.setValue(ct,dt);U.draw()}),r&&P.candidates.length?X(P.candidates,P.selected):y("已恢复本地照片，可继续调整或重新分析。")}catch{o("storage-note").textContent="无法恢复本地题目，可重新导入照片。"}}o("clear").onclick=async()=>{p=!0,v++,clearTimeout(m),o("align-width").value="100",o("align-center").value="0",Y();for(const J of L)J.loadStamp=0,J.image=null,J.overlay=null,J.draw();x();try{await Qd("delete"),y("本地题目已清除。")}catch{y("无法清除浏览器存储，请在浏览器设置中删除本站数据。")}finally{p=!1}},o("snapshot").onclick=()=>o("model").toBlob(J=>{J&&vE(J,"两视图模型.png")}),o("stl").onclick=()=>{d[_]&&vE(QR(d[_]),"两视图模型.stl")},o("both").onchange=J=>{F(J.target.files[0],L),J.target.value=""},o("capture").onchange=o("both").onchange,o("swap").onclick=()=>{L.forEach(P=>{P.loadStamp=0}),["image","crop","rotation"].forEach(P=>{[L[0][P],L[1][P]]=[L[1][P],L[0][P]]});for(const[P]of C){const[$,U]=L.map(V=>V.el.querySelector("[data-key="+P+"]"));[$.value,U.value]=[U.value,$.value],[$.previousElementSibling.value,U.previousElementSibling.value]=[$.value,U.value]}L.forEach(P=>P.change())};for(const J of Object.keys(jE)){const P=document.createElement("button");P.textContent=J,P.onclick=()=>r?.direction(J),o("directions").append(P)}o("reset").onclick=()=>r?.reset(),o("cancel").onclick=()=>{x(),y("已取消分析。可调整视图后重新生成。")},o("wire").onclick=J=>{r&&(r.wire=!r.wire,J.currentTarget.setAttribute("aria-pressed",String(r.wire)),r.draw())},i.onclick=()=>{if(L.some(P=>!P.image)){y("请先导入主视图和俯视图。");return}x(),L.forEach(P=>{P.overlay=null,P.draw()});const J=f;try{const P=L.map(U=>U.pixels());l=new Worker(new URL(""+new URL("worker-RvB6zYmz.js",import.meta.url).href,import.meta.url),{type:"module"}),h=!0,i.disabled=!0,o("cancel").hidden=!1,y("正在提取轮廓并生成模型…");const $=()=>{l?.terminate(),l=null,h=!1,i.disabled=!1,o("cancel").hidden=!0};l.onmessage=({data:U})=>{if(J===f){if(U.progress){y(U.progress);return}if($(),U.overlays.forEach((V,B)=>{L[B].overlay={data:V,width:P[B].width,height:P[B].height},L[B].draw()}),U.error){R(),y(U.error+`
请检查橙色轮廓，调整裁剪、倾斜或阈值后重试。`);return}if(!r){y("识别完成，但 WebGL 不可用。请换浏览器后重试。");return}U.thresholds&&L.forEach((V,B)=>V.setValue("threshold",U.thresholds[B])),X(U.candidates),U.thresholds&&(e.textContent+=`
已提高偏淡视图的阈值并重新验证。`)}},l.onerror=()=>{$(),y("分析模块无法启动。请通过本地 HTTP 服务打开网站后重试。")},l.postMessage({images:P,thresholds:L.map(U=>U.value("threshold")),alignment:D()},P.map(U=>U.data.buffer))}catch(P){l?.terminate(),l=null,h=!1,i.disabled=!1,o("cancel").hidden=!0,y("无法分析图像："+P.message)}},ut()}function YR(){return BM.useEffect(()=>{kR()},[]),Qt.jsxs(Qt.Fragment,{children:[Qt.jsxs("header",{children:[Qt.jsx("div",{className:"mark",children:"◇"}),Qt.jsxs("div",{children:[Qt.jsx("strong",{children:"两视图建模"}),Qt.jsx("small",{children:"机械制图练习"})]})]}),Qt.jsxs("main",{children:[Qt.jsxs("section",{className:"intro",children:[Qt.jsx("h1",{children:"从图纸观察三维结构"}),Qt.jsx("p",{children:"导入主视图与俯视图，生成可旋转的基础模型。照片仅在当前浏览器处理。"})]}),Qt.jsxs("div",{className:"layout",children:[Qt.jsxs("section",{className:"panel inputs",children:[Qt.jsx("h2",{children:"准备视图"}),Qt.jsxs("label",{className:"file",children:["导入一张双视图照片",Qt.jsx("input",{id:"both",type:"file",accept:"image/*,.heic,.heif"})]}),Qt.jsxs("label",{className:"file",children:["拍摄双视图",Qt.jsx("input",{id:"capture",type:"file",accept:"image/*",capture:"environment"})]}),Qt.jsx("p",{className:"hint",children:"也可以分别选图。拖动选框内部可移动，拖动右下角可缩放。两个轮廓按左右端点自动对齐。"}),Qt.jsx("div",{id:"editors"}),Qt.jsx("button",{id:"swap",children:"互换主视图与俯视图"}),Qt.jsxs("details",{children:[Qt.jsx("summary",{children:"微调两视图对齐"}),Qt.jsxs("label",{className:"range",children:["俯视图宽度 ",Qt.jsx("output",{id:"width-value",children:"100%"}),Qt.jsx("input",{id:"align-width",type:"range",min:"94",max:"106",defaultValue:"100"})]}),Qt.jsxs("label",{className:"range",children:["俯视图中心偏移 ",Qt.jsx("output",{id:"center-value",children:"0%"}),Qt.jsx("input",{id:"align-center",type:"range",min:"-4",max:"4",defaultValue:"0"})]}),Qt.jsx("p",{className:"hint",children:"以主视图为基准。偏移过大时，请检查两个裁剪框是否包含完整轮廓。"})]}),Qt.jsx("button",{id:"analyze",className:"primary",children:"分析并生成"}),Qt.jsx("button",{id:"cancel",hidden:!0,children:"取消分析"}),Qt.jsx("p",{id:"status",role:"status","aria-live":"polite",children:"请导入两张视图，或从同一张照片分别裁剪。"}),Qt.jsx("p",{id:"storage-note",className:"hint",children:"当前题目保存在此浏览器。"}),Qt.jsx("button",{id:"clear",children:"清除本地题目"}),Qt.jsxs("details",{children:[Qt.jsx("summary",{children:"练习样例"}),Qt.jsxs("label",{children:["题目 ",Qt.jsx("select",{id:"practice"})]}),Qt.jsx("button",{id:"practice-load",children:"载入练习"})]})]}),Qt.jsxs("section",{className:"panel result",children:[Qt.jsx("h2",{children:"三维模型"}),Qt.jsxs("div",{className:"viewport",children:[Qt.jsx("canvas",{id:"model","aria-label":"三维模型"}),Qt.jsx("p",{id:"empty",children:"生成后可在这里旋转模型"})]}),Qt.jsx("div",{id:"candidates","aria-label":"候选模型"}),Qt.jsx("div",{id:"directions"}),Qt.jsxs("div",{className:"actions",children:[Qt.jsx("button",{id:"reset",children:"重置"}),Qt.jsx("button",{id:"wire","aria-pressed":"false",children:"实体边线"})]}),Qt.jsxs("div",{className:"actions",children:[Qt.jsx("button",{id:"snapshot",disabled:!0,children:"保存截图"}),Qt.jsx("button",{id:"stl",disabled:!0,children:"导出 STL"})]}),Qt.jsxs("label",{className:"hint",children:["剖切位置 ",Qt.jsx("input",{id:"section",type:"range",min:"0",max:"100",defaultValue:"100",disabled:!0})]}),Qt.jsx("p",{className:"hint",children:"拖动旋转，双指或滚轮缩放。点按表面可查看它在两张图纸中的投影。"}),Qt.jsx("p",{id:"construction",className:"hint"}),Qt.jsxs("details",{children:[Qt.jsx("summary",{children:"制图术语"}),Qt.jsxs("dl",{children:[Qt.jsx("dt",{children:"正投影"}),Qt.jsx("dd",{children:"投影线垂直于投影面。主视和俯视共用同一宽度方向。"}),Qt.jsx("dt",{children:"虚线"}),Qt.jsx("dd",{children:"表示该方向上被实体遮挡的棱线或孔轮廓。"}),Qt.jsx("dt",{children:"贯通槽"}),Qt.jsx("dd",{children:"槽从一端延伸至另一端，两端均开放。"})]})]})]})]})]})]})}QM.createRoot(document.getElementById("root")).render(Qt.jsx(YR,{}));"serviceWorker"in navigator&&navigator.serviceWorker.register("./offline.js").catch(()=>{});
