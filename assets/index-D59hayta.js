const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-Wy-RdDEn.js","assets/LoginView-DT5h1Y-B.css","assets/MainMenuView-CIO7e3PM.js","assets/MainMenuView-B8XsMeri.css","assets/NewGameView-uJDdtnFt.js","assets/api-D0rrYTJr.js","assets/NewGameView-Bo0ARN5Q.css","assets/HelpView-ClYr41Dm.js","assets/cards-DMoeknHU.js","assets/HelpView-BTPa4vXG.css","assets/JoinView-CcP5lSn-.js","assets/JoinView-Cvj6iw6G.css","assets/GameView-UdTXcTj7.js","assets/GameView-BoAHMr1o.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const le={},gn=[],it=()=>{},xa=()=>!1,Yr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Xr=e=>e.startsWith("onUpdate:"),ve=Object.assign,_i=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},uu=Object.prototype.hasOwnProperty,se=(e,t)=>uu.call(e,t),B=Array.isArray,mn=e=>ur(e)==="[object Map]",Qr=e=>ur(e)==="[object Set]",Qi=e=>ur(e)==="[object Date]",K=e=>typeof e=="function",de=e=>typeof e=="string",Ve=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",Ma=e=>(te(e)||K(e))&&K(e.then)&&K(e.catch),Ua=Object.prototype.toString,ur=e=>Ua.call(e),fu=e=>ur(e).slice(8,-1),Fa=e=>ur(e)==="[object Object]",Zr=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Hn=mi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),es=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},du=/-\w/g,Ae=es(e=>e.replace(du,t=>t.slice(1).toUpperCase())),hu=/\B([A-Z])/g,sn=es(e=>e.replace(hu,"-$1").toLowerCase()),ts=es(e=>e.charAt(0).toUpperCase()+e.slice(1)),Es=es(e=>e?`on${ts(e)}`:""),rt=(e,t)=>!Object.is(e,t),Tr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ba=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ns=e=>{const t=parseFloat(e);return isNaN(t)?e:t},pu=e=>{const t=de(e)?Number(e):NaN;return isNaN(t)?e:t};let Zi;const rs=()=>Zi||(Zi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vi(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=de(r)?vu(r):vi(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(de(e)||te(e))return e}const gu=/;(?![^(]*\))/g,mu=/:([^]+)/,_u=/\/\*[^]*?\*\//g;function vu(e){const t={};return e.replace(_u,"").split(gu).forEach(n=>{if(n){const r=n.split(mu);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function yi(e){let t="";if(de(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=yi(e[n]);r&&(t+=r+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const yu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bu=mi(yu);function Ha(e){return!!e||e===""}function Eu(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=fr(e[r],t[r]);return n}function fr(e,t){if(e===t)return!0;let n=Qi(e),r=Qi(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Ve(e),r=Ve(t),n||r)return e===t;if(n=B(e),r=B(t),n||r)return n&&r?Eu(e,t):!1;if(n=te(e),r=te(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!fr(e[o],t[o]))return!1}}return String(e)===String(t)}function Iu(e,t){return e.findIndex(n=>fr(n,t))}const Va=e=>!!(e&&e.__v_isRef===!0),wu=e=>de(e)?e:e==null?"":B(e)||te(e)&&(e.toString===Ua||!K(e.toString))?Va(e)?wu(e.value):JSON.stringify(e,ja,2):String(e),ja=(e,t)=>Va(t)?ja(e,t.value):mn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Is(r,i)+" =>"]=s,n),{})}:Qr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Is(n))}:Ve(t)?Is(t):te(t)&&!B(t)&&!Fa(t)?String(t):t,Is=(e,t="")=>{var n;return Ve(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _e;class $a{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&_e&&(_e.active?(this.parent=_e,this.index=(_e.scopes||(_e.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=_e;try{return _e=this,t()}finally{_e=n}}}on(){++this._on===1&&(this.prevScope=_e,_e=this)}off(){if(this._on>0&&--this._on===0){if(_e===this)_e=this.prevScope;else{let t=_e;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Wa(e){return new $a(e)}function Ka(){return _e}function Su(e,t=!1){_e&&_e.cleanups.push(e)}let ue;const ws=new WeakSet;class Ga{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_e&&(_e.active?_e.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ws.has(this)&&(ws.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,eo(this),Ja(this);const t=ue,n=We;ue=this,We=!0;try{return this.fn()}finally{Ya(this),ue=t,We=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ii(t);this.deps=this.depsTail=void 0,eo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ws.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ks(this)&&this.run()}get dirty(){return Ks(this)}}let za=0,Vn,jn;function qa(e,t=!1){if(e.flags|=8,t){e.next=jn,jn=e;return}e.next=Vn,Vn=e}function bi(){za++}function Ei(){if(--za>0)return;if(jn){let t=jn;for(jn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Vn;){let t=Vn;for(Vn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Ja(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ya(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ii(r),Tu(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Ks(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Xa(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Xa(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Qn)||(e.globalVersion=Qn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ks(e))))return;e.flags|=2;const t=e.dep,n=ue,r=We;ue=e,We=!0;try{Ja(e);const s=e.fn(e._value);(t.version===0||rt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ue=n,We=r,Ya(e),e.flags&=-3}}function Ii(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ii(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Tu(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let We=!0;const Qa=[];function bt(){Qa.push(We),We=!1}function Et(){const e=Qa.pop();We=e===void 0?!0:e}function eo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ue;ue=void 0;try{t()}finally{ue=n}}}let Qn=0;class Cu{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ue||!We||ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ue)n=this.activeLink=new Cu(ue,this),ue.deps?(n.prevDep=ue.depsTail,ue.depsTail.nextDep=n,ue.depsTail=n):ue.deps=ue.depsTail=n,Za(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ue.depsTail,n.nextDep=void 0,ue.depsTail.nextDep=n,ue.depsTail=n,ue.deps===n&&(ue.deps=r)}return n}trigger(t){this.version++,Qn++,this.notify(t)}notify(t){bi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ei()}}}function Za(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Za(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const kr=new WeakMap,en=Symbol(""),Gs=Symbol(""),Zn=Symbol("");function be(e,t,n){if(We&&ue){let r=kr.get(e);r||kr.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new wi),s.map=r,s.key=n),s.track()}}function mt(e,t,n,r,s,i){const o=kr.get(e);if(!o){Qn++;return}const a=c=>{c&&c.trigger()};if(bi(),t==="clear")o.forEach(a);else{const c=B(e),l=c&&Zr(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,h)=>{(h==="length"||h===Zn||!Ve(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Zn)),t){case"add":c?l&&a(o.get("length")):(a(o.get(en)),mn(e)&&a(o.get(Gs)));break;case"delete":c||(a(o.get(en)),mn(e)&&a(o.get(Gs)));break;case"set":mn(e)&&a(o.get(en));break}}Ei()}function Au(e,t){const n=kr.get(e);return n&&n.get(t)}function ln(e){const t=X(e);return t===e?t:(be(t,"iterate",Zn),Me(e)?t:t.map(Ke))}function ss(e){return be(e=X(e),"iterate",Zn),e}function et(e,t){return It(e)?wn(ot(e)?Ke(t):t):Ke(t)}const Ru={__proto__:null,[Symbol.iterator](){return Ss(this,Symbol.iterator,e=>et(this,e))},concat(...e){return ln(this).concat(...e.map(t=>B(t)?ln(t):t))},entries(){return Ss(this,"entries",e=>(e[1]=et(this,e[1]),e))},every(e,t){return ft(this,"every",e,t,void 0,arguments)},filter(e,t){return ft(this,"filter",e,t,n=>n.map(r=>et(this,r)),arguments)},find(e,t){return ft(this,"find",e,t,n=>et(this,n),arguments)},findIndex(e,t){return ft(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ft(this,"findLast",e,t,n=>et(this,n),arguments)},findLastIndex(e,t){return ft(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ft(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ts(this,"includes",e)},indexOf(...e){return Ts(this,"indexOf",e)},join(e){return ln(this).join(e)},lastIndexOf(...e){return Ts(this,"lastIndexOf",e)},map(e,t){return ft(this,"map",e,t,void 0,arguments)},pop(){return kn(this,"pop")},push(...e){return kn(this,"push",e)},reduce(e,...t){return to(this,"reduce",e,t)},reduceRight(e,...t){return to(this,"reduceRight",e,t)},shift(){return kn(this,"shift")},some(e,t){return ft(this,"some",e,t,void 0,arguments)},splice(...e){return kn(this,"splice",e)},toReversed(){return ln(this).toReversed()},toSorted(e){return ln(this).toSorted(e)},toSpliced(...e){return ln(this).toSpliced(...e)},unshift(...e){return kn(this,"unshift",e)},values(){return Ss(this,"values",e=>et(this,e))}};function Ss(e,t,n){const r=ss(e),s=r[t]();return r!==e&&!Me(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Pu=Array.prototype;function ft(e,t,n,r,s,i){const o=ss(e),a=o!==e&&!Me(e),c=o[t];if(c!==Pu[t]){const f=c.apply(e,i);return a?Ke(f):f}let l=n;o!==e&&(a?l=function(f,h){return n.call(this,et(e,f),h,e)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,e)}));const u=c.call(o,l,r);return a&&s?s(u):u}function to(e,t,n,r){const s=ss(e),i=s!==e&&!Me(e);let o=n,a=!1;s!==e&&(i?(a=r.length===0,o=function(l,u,f){return a&&(a=!1,l=et(e,l)),n.call(this,l,et(e,u),f,e)}):n.length>3&&(o=function(l,u,f){return n.call(this,l,u,f,e)}));const c=s[t](o,...r);return a?et(e,c):c}function Ts(e,t,n){const r=X(e);be(r,"iterate",Zn);const s=r[t](...n);return(s===-1||s===!1)&&is(n[0])?(n[0]=X(n[0]),r[t](...n)):s}function kn(e,t,n=[]){bt(),bi();const r=X(e)[t].apply(e,n);return Ei(),Et(),r}const Ou=mi("__proto__,__v_isRef,__isVue"),ec=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ve));function Nu(e){Ve(e)||(e=String(e));const t=X(this);return be(t,"has",e),t.hasOwnProperty(e)}class tc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Vu:ic:i?sc:rc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=B(t);if(!s){let c;if(o&&(c=Ru[n]))return c;if(n==="hasOwnProperty")return Nu}const a=Reflect.get(t,n,fe(t)?t:r);if((Ve(n)?ec.has(n):Ou(n))||(s||be(t,"get",n),i))return a;if(fe(a)){const c=o&&Zr(n)?a:a.value;return s&&te(c)?qs(c):c}return te(a)?s?qs(a):dr(a):a}}class nc extends tc{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];const o=B(t)&&Zr(n);if(!this._isShallow){const l=It(i);if(!Me(r)&&!It(r)&&(i=X(i),r=X(r)),!o&&fe(i)&&!fe(r))return l||(i.value=r),!0}const a=o?Number(n)<t.length:se(t,n),c=Reflect.set(t,n,r,fe(t)?t:s);return t===X(s)&&(a?rt(r,i)&&mt(t,"set",n,r):mt(t,"add",n,r)),c}deleteProperty(t,n){const r=se(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&mt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Ve(n)||!ec.has(n))&&be(t,"has",n),r}ownKeys(t){return be(t,"iterate",B(t)?"length":en),Reflect.ownKeys(t)}}class ku extends tc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Du=new nc,Lu=new ku,xu=new nc(!0);const zs=e=>e,Er=e=>Reflect.getPrototypeOf(e);function Mu(e,t,n){return function(...r){const s=this.__v_raw,i=X(s),o=mn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?zs:t?wn:Ke;return!t&&be(i,"iterate",c?Gs:en),ve(Object.create(l),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Ir(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Uu(e,t){const n={get(s){const i=this.__v_raw,o=X(i),a=X(s);e||(rt(s,a)&&be(o,"get",s),be(o,"get",a));const{has:c}=Er(o),l=t?zs:e?wn:Ke;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&be(X(s),"iterate",en),s.size},has(s){const i=this.__v_raw,o=X(i),a=X(s);return e||(rt(s,a)&&be(o,"has",s),be(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=X(a),l=t?zs:e?wn:Ke;return!e&&be(c,"iterate",en),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return ve(n,e?{add:Ir("add"),set:Ir("set"),delete:Ir("delete"),clear:Ir("clear")}:{add(s){const i=X(this),o=Er(i),a=X(s),c=!t&&!Me(s)&&!It(s)?a:s;return o.has.call(i,c)||rt(s,c)&&o.has.call(i,s)||rt(a,c)&&o.has.call(i,a)||(i.add(c),mt(i,"add",c,c)),this},set(s,i){!t&&!Me(i)&&!It(i)&&(i=X(i));const o=X(this),{has:a,get:c}=Er(o);let l=a.call(o,s);l||(s=X(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?rt(i,u)&&mt(o,"set",s,i):mt(o,"add",s,i),this},delete(s){const i=X(this),{has:o,get:a}=Er(i);let c=o.call(i,s);c||(s=X(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&mt(i,"delete",s,void 0),l},clear(){const s=X(this),i=s.size!==0,o=s.clear();return i&&mt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Mu(s,e,t)}),n}function Si(e,t){const n=Uu(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(se(n,s)&&s in r?n:r,s,i)}const Fu={get:Si(!1,!1)},Bu={get:Si(!1,!0)},Hu={get:Si(!0,!1)};const rc=new WeakMap,sc=new WeakMap,ic=new WeakMap,Vu=new WeakMap;function ju(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dr(e){return It(e)?e:Ti(e,!1,Du,Fu,rc)}function oc(e){return Ti(e,!1,xu,Bu,sc)}function qs(e){return Ti(e,!0,Lu,Hu,ic)}function Ti(e,t,n,r,s){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=s.get(e);if(i)return i;const o=ju(fu(e));if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function ot(e){return It(e)?ot(e.__v_raw):!!(e&&e.__v_isReactive)}function It(e){return!!(e&&e.__v_isReadonly)}function Me(e){return!!(e&&e.__v_isShallow)}function is(e){return e?!!e.__v_raw:!1}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function Ci(e){return!se(e,"__v_skip")&&Object.isExtensible(e)&&Ba(e,"__v_skip",!0),e}const Ke=e=>te(e)?dr(e):e,wn=e=>te(e)?qs(e):e;function fe(e){return e?e.__v_isRef===!0:!1}function Ai(e){return ac(e,!1)}function $u(e){return ac(e,!0)}function ac(e,t){return fe(e)?e:new Wu(e,t)}class Wu{constructor(t,n){this.dep=new wi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:X(t),this._value=n?t:Ke(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Me(t)||It(t);t=r?t:X(t),rt(t,n)&&(this._rawValue=t,this._value=r?t:Ke(t),this.dep.trigger())}}function tn(e){return fe(e)?e.value:e}const Ku={get:(e,t,n)=>t==="__v_raw"?e:tn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function cc(e){return ot(e)?e:new Proxy(e,Ku)}function Gu(e){const t=B(e)?new Array(e.length):{};for(const n in e)t[n]=lc(e,n);return t}class zu{constructor(t,n,r){this._object=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Ve(n)?n:String(n),this._raw=X(t);let s=!0,i=t;if(!B(t)||Ve(this._key)||!Zr(this._key))do s=!is(i)||Me(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=tn(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&fe(this._raw[this._key])){const n=this._object[this._key];if(fe(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return Au(this._raw,this._key)}}class qu{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ju(e,t,n){return fe(e)?e:K(e)?new qu(e):te(e)&&arguments.length>1?lc(e,t,n):Ai(e)}function lc(e,t,n){return new zu(e,t,n)}class Yu{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new wi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ue!==this)return qa(this,!0),!0}get value(){const t=this.dep.track();return Xa(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Xu(e,t,n=!1){let r,s;return K(e)?r=e:(r=e.get,s=e.set),new Yu(r,s,n)}const wr={},Dr=new WeakMap;let Jt;function Qu(e,t=!1,n=Jt){if(n){let r=Dr.get(n);r||Dr.set(n,r=[]),r.push(e)}}function Zu(e,t,n=le){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=O=>s?O:Me(O)||s===!1||s===0?_t(O,1):_t(O);let u,f,h,g,I=!1,w=!1;if(fe(e)?(f=()=>e.value,I=Me(e)):ot(e)?(f=()=>l(e),I=!0):B(e)?(w=!0,I=e.some(O=>ot(O)||Me(O)),f=()=>e.map(O=>{if(fe(O))return O.value;if(ot(O))return l(O);if(K(O))return c?c(O,2):O()})):K(e)?t?f=c?()=>c(e,2):e:f=()=>{if(h){bt();try{h()}finally{Et()}}const O=Jt;Jt=u;try{return c?c(e,3,[g]):e(g)}finally{Jt=O}}:f=it,t&&s){const O=f,V=s===!0?1/0:s;f=()=>_t(O(),V)}const M=Ka(),x=()=>{u.stop(),M&&M.active&&_i(M.effects,u)};if(i&&t){const O=t;t=(...V)=>{O(...V),x()}}let T=w?new Array(e.length).fill(wr):wr;const k=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(t){const V=u.run();if(s||I||(w?V.some((ee,q)=>rt(ee,T[q])):rt(V,T))){h&&h();const ee=Jt;Jt=u;try{const q=[V,T===wr?void 0:w&&T[0]===wr?[]:T,g];T=V,c?c(t,3,q):t(...q)}finally{Jt=ee}}}else u.run()};return a&&a(k),u=new Ga(f),u.scheduler=o?()=>o(k,!1):k,g=O=>Qu(O,!1,u),h=u.onStop=()=>{const O=Dr.get(u);if(O){if(c)c(O,4);else for(const V of O)V();Dr.delete(u)}},t?r?k(!0):T=u.run():o?o(k.bind(null,!0),!0):u.run(),x.pause=u.pause.bind(u),x.resume=u.resume.bind(u),x.stop=x,x}function _t(e,t=1/0,n){if(t<=0||!te(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,fe(e))_t(e.value,t,n);else if(B(e))for(let r=0;r<e.length;r++)_t(e[r],t,n);else if(Qr(e)||mn(e))e.forEach(r=>{_t(r,t,n)});else if(Fa(e)){for(const r in e)_t(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&_t(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hr(e,t,n,r){try{return r?e(...r):e()}catch(s){os(s,t,n)}}function je(e,t,n,r){if(K(e)){const s=hr(e,t,n,r);return s&&Ma(s)&&s.catch(i=>{os(i,t,n)}),s}if(B(e)){const s=[];for(let i=0;i<e.length;i++)s.push(je(e[i],t,n,r));return s}}function os(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||le;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,c,l)===!1)return}a=a.parent}if(i){bt(),hr(i,null,10,[e,c,l]),Et();return}}ef(e,n,s,r,o)}function ef(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Te=[];let Ze=-1;const _n=[];let kt=null,dn=0;const uc=Promise.resolve();let Lr=null;function as(e){const t=Lr||uc;return e?t.then(this?e.bind(this):e):t}function tf(e){let t=Ze+1,n=Te.length;for(;t<n;){const r=t+n>>>1,s=Te[r],i=er(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Ri(e){if(!(e.flags&1)){const t=er(e),n=Te[Te.length-1];!n||!(e.flags&2)&&t>=er(n)?Te.push(e):Te.splice(tf(t),0,e),e.flags|=1,fc()}}function fc(){Lr||(Lr=uc.then(hc))}function nf(e){B(e)?_n.push(...e):kt&&e.id===-1?kt.splice(dn+1,0,e):e.flags&1||(_n.push(e),e.flags|=1),fc()}function no(e,t,n=Ze+1){for(;n<Te.length;n++){const r=Te[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Te.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function dc(e){if(_n.length){const t=[...new Set(_n)].sort((n,r)=>er(n)-er(r));if(_n.length=0,kt){kt.push(...t);return}for(kt=t,dn=0;dn<kt.length;dn++){const n=kt[dn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}kt=null,dn=0}}const er=e=>e.id==null?e.flags&2?-1:1/0:e.id;function hc(e){try{for(Ze=0;Ze<Te.length;Ze++){const t=Te[Ze];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),hr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ze<Te.length;Ze++){const t=Te[Ze];t&&(t.flags&=-2)}Ze=-1,Te.length=0,dc(),Lr=null,(Te.length||_n.length)&&hc()}}let Le=null,pc=null;function xr(e){const t=Le;return Le=e,pc=e&&e.type.__scopeId||null,t}function rf(e,t=Le,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Fr(-1);const i=xr(t);let o;try{o=e(...s)}finally{xr(i),r._d&&Fr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function mv(e,t){if(Le===null)return e;const n=ds(Le),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=le]=t[s];i&&(K(i)&&(i={mounted:i,updated:i}),i.deep&&_t(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Kt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(bt(),je(c,n,8,[e.el,a,e,t]),Et())}}function Cr(e,t){if(Ee){let n=Ee.provides;const r=Ee.parent&&Ee.parent.provides;r===n&&(n=Ee.provides=Object.create(r)),n[e]=t}}function He(e,t,n=!1){const r=Di();if(r||nn){let s=nn?nn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(r&&r.proxy):t}}function sf(){return!!(Di()||nn)}const of=Symbol.for("v-scx"),af=()=>He(of);function _v(e,t){return Pi(e,null,t)}function $n(e,t,n){return Pi(e,t,n)}function Pi(e,t,n=le){const{immediate:r,deep:s,flush:i,once:o}=n,a=ve({},n),c=t&&r||!t&&i!=="post";let l;if(rr){if(i==="sync"){const g=af();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=it,g.resume=it,g.pause=it,g}}const u=Ee;a.call=(g,I,w)=>je(g,u,I,w);let f=!1;i==="post"?a.scheduler=g=>{Oe(g,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,I)=>{I?g():Ri(g)}),a.augmentJob=g=>{t&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const h=Zu(e,t,a);return rr&&(l?l.push(h):c&&h()),h}function cf(e,t,n){const r=this.proxy,s=de(e)?e.includes(".")?gc(r,e):()=>r[e]:e.bind(r,r);let i;K(t)?i=t:(i=t.handler,n=t);const o=pr(this),a=Pi(s,i.bind(r),n);return o(),a}function gc(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const lf=Symbol("_vte"),mc=e=>e.__isTeleport,Be=Symbol("_leaveCb"),Dn=Symbol("_enterCb");function uf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tc(()=>{e.isMounted=!0}),Cc(()=>{e.isUnmounting=!0}),e}const Fe=[Function,Array],_c={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},vc=e=>{const t=e.subTree;return t.component?vc(t.component):t},ff={name:"BaseTransition",props:_c,setup(e,{slots:t}){const n=Di(),r=uf();return()=>{const s=t.default&&Ec(t.default(),!0),i=s&&s.length?yc(s):n.subTree?id():void 0;if(!i)return;const o=X(e),{mode:a}=o;if(r.isLeaving)return Cs(i);const c=ro(i);if(!c)return Cs(i);let l=Js(c,o,r,n,f=>l=f);c.type!==Ce&&tr(c,l);let u=n.subTree&&ro(n.subTree);if(u&&u.type!==Ce&&!Xt(u,c)&&vc(n).type!==Ce){let f=Js(u,o,r,n);if(tr(u,f),a==="out-in"&&c.type!==Ce)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Cs(i);a==="in-out"&&c.type!==Ce?f.delayLeave=(h,g,I)=>{const w=bc(r,u);w[String(u.key)]=u,h[Be]=()=>{g(),h[Be]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{I(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function yc(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ce){t=n;break}}return t}const df=ff;function bc(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Js(e,t,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:g,onAfterLeave:I,onLeaveCancelled:w,onBeforeAppear:M,onAppear:x,onAfterAppear:T,onAppearCancelled:k}=t,O=String(e.key),V=bc(n,e),ee=(A,$)=>{A&&je(A,r,9,$)},q=(A,$)=>{const Q=$[1];ee(A,$),B(A)?A.every(N=>N.length<=1)&&Q():A.length<=1&&Q()},G={mode:o,persisted:a,beforeEnter(A){let $=c;if(!n.isMounted)if(i)$=M||c;else return;A[Be]&&A[Be](!0);const Q=V[O];Q&&Xt(e,Q)&&Q.el[Be]&&Q.el[Be](),ee($,[A])},enter(A){if(V[O]===e)return;let $=l,Q=u,N=f;if(!n.isMounted)if(i)$=x||l,Q=T||u,N=k||f;else return;let J=!1;A[Dn]=Ie=>{J||(J=!0,Ie?ee(N,[A]):ee(Q,[A]),G.delayedLeave&&G.delayedLeave(),A[Dn]=void 0)};const pe=A[Dn].bind(null,!1);$?q($,[A,pe]):pe()},leave(A,$){const Q=String(e.key);if(A[Dn]&&A[Dn](!0),n.isUnmounting)return $();ee(h,[A]);let N=!1;A[Be]=pe=>{N||(N=!0,$(),pe?ee(w,[A]):ee(I,[A]),A[Be]=void 0,V[Q]===e&&delete V[Q])};const J=A[Be].bind(null,!1);V[Q]=e,g?q(g,[A,J]):J()},clone(A){const $=Js(A,t,n,r,s);return s&&s($),$}};return G}function Cs(e){if(cs(e))return e=Vt(e),e.children=null,e}function ro(e){if(!cs(e))return mc(e.type)&&e.children?yc(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&K(n.default))return n.default()}}function tr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,tr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ec(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===tt?(o.patchFlag&128&&s++,r=r.concat(Ec(o.children,t,a))):(t||o.type!==Ce)&&r.push(a!=null?Vt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ic(e,t){return K(e)?ve({name:e.name},t,{setup:e}):e}function wc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function so(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Mr=new WeakMap;function Wn(e,t,n,r,s=!1){if(B(e)){e.forEach((w,M)=>Wn(w,t&&(B(t)?t[M]:t),n,r,s));return}if(Kn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Wn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?ds(r.component):r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState,h=X(f),g=f===le?xa:w=>so(u,w)?!1:se(h,w),I=(w,M)=>!(M&&so(u,M));if(l!=null&&l!==c){if(io(t),de(l))u[l]=null,g(l)&&(f[l]=null);else if(fe(l)){const w=t;I(l,w.k)&&(l.value=null),w.k&&(u[w.k]=null)}}if(K(c))hr(c,a,12,[o,u]);else{const w=de(c),M=fe(c);if(w||M){const x=()=>{if(e.f){const T=w?g(c)?f[c]:u[c]:I()||!e.k?c.value:u[e.k];if(s)B(T)&&_i(T,i);else if(B(T))T.includes(i)||T.push(i);else if(w)u[c]=[i],g(c)&&(f[c]=u[c]);else{const k=[i];I(c,e.k)&&(c.value=k),e.k&&(u[e.k]=k)}}else w?(u[c]=o,g(c)&&(f[c]=o)):M&&(I(c,e.k)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){const T=()=>{x(),Mr.delete(e)};T.id=-1,Mr.set(e,T),Oe(T,n)}else io(e),x()}}}function io(e){const t=Mr.get(e);t&&(t.flags|=8,Mr.delete(e))}rs().requestIdleCallback;rs().cancelIdleCallback;const Kn=e=>!!e.type.__asyncLoader,cs=e=>e.type.__isKeepAlive;function hf(e,t){Sc(e,"a",t)}function pf(e,t){Sc(e,"da",t)}function Sc(e,t,n=Ee){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ls(t,r,n),n){let s=n.parent;for(;s&&s.parent;)cs(s.parent.vnode)&&gf(r,t,n,s),s=s.parent}}function gf(e,t,n,r){const s=ls(t,e,r,!0);Ac(()=>{_i(r[t],s)},n)}function ls(e,t,n=Ee,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{bt();const a=pr(n),c=je(t,n,e,o);return a(),Et(),c});return r?s.unshift(i):s.push(i),i}}const Tt=e=>(t,n=Ee)=>{(!rr||e==="sp")&&ls(e,(...r)=>t(...r),n)},mf=Tt("bm"),Tc=Tt("m"),_f=Tt("bu"),vf=Tt("u"),Cc=Tt("bum"),Ac=Tt("um"),yf=Tt("sp"),bf=Tt("rtg"),Ef=Tt("rtc");function If(e,t=Ee){ls("ec",e,t)}const wf="components";function Sf(e,t){return Cf(wf,e,!0,t)||e}const Tf=Symbol.for("v-ndc");function Cf(e,t,n=!0,r=!1){const s=Le||Ee;if(s){const i=s.type;{const a=pd(i,!1);if(a&&(a===t||a===Ae(t)||a===ts(Ae(t))))return i}const o=oo(s[e]||i[e],t)||oo(s.appContext[e],t);return!o&&r?i:o}}function oo(e,t){return e&&(e[t]||e[Ae(t)]||e[ts(Ae(t))])}function vv(e,t,n,r){let s;const i=n,o=B(e);if(o||de(e)){const a=o&&ot(e);let c=!1,l=!1;a&&(c=!Me(e),l=It(e),e=ss(e)),s=new Array(e.length);for(let u=0,f=e.length;u<f;u++)s[u]=t(c?l?wn(Ke(e[u])):Ke(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,i)}else if(te(e))if(e[Symbol.iterator])s=Array.from(e,(a,c)=>t(a,c,void 0,i));else{const a=Object.keys(e);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=t(e[u],u,c,i)}}else s=[];return s}const Ys=e=>e?Jc(e)?ds(e):Ys(e.parent):null,Gn=ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ys(e.parent),$root:e=>Ys(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Pc(e),$forceUpdate:e=>e.f||(e.f=()=>{Ri(e.update)}),$nextTick:e=>e.n||(e.n=as.bind(e.proxy)),$watch:e=>cf.bind(e)}),As=(e,t)=>e!==le&&!e.__isScriptSetup&&se(e,t),Af={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(As(r,t))return o[t]=1,r[t];if(s!==le&&se(s,t))return o[t]=2,s[t];if(se(i,t))return o[t]=3,i[t];if(n!==le&&se(n,t))return o[t]=4,n[t];Xs&&(o[t]=0)}}const l=Gn[t];let u,f;if(l)return t==="$attrs"&&be(e.attrs,"get",""),l(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==le&&se(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,se(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return As(s,t)?(s[t]=n,!0):r!==le&&se(r,t)?(r[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:i,type:o}},a){let c;return!!(n[a]||e!==le&&a[0]!=="$"&&se(e,a)||As(t,a)||se(i,a)||se(r,a)||se(Gn,a)||se(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ao(e){return B(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Xs=!0;function Rf(e){const t=Pc(e),n=e.proxy,r=e.ctx;Xs=!1,t.beforeCreate&&co(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:I,activated:w,deactivated:M,beforeDestroy:x,beforeUnmount:T,destroyed:k,unmounted:O,render:V,renderTracked:ee,renderTriggered:q,errorCaptured:G,serverPrefetch:A,expose:$,inheritAttrs:Q,components:N,directives:J,filters:pe}=t;if(l&&Pf(l,r,null),o)for(const z in o){const ne=o[z];K(ne)&&(r[z]=ne.bind(n))}if(s){const z=s.call(n,n);te(z)&&(e.data=dr(z))}if(Xs=!0,i)for(const z in i){const ne=i[z],ut=K(ne)?ne.bind(n,n):K(ne.get)?ne.get.bind(n,n):it,At=!K(ne)&&K(ne.set)?ne.set.bind(n):it,qe=De({get:ut,set:At});Object.defineProperty(r,z,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Pe=>qe.value=Pe})}if(a)for(const z in a)Rc(a[z],r,n,z);if(c){const z=K(c)?c.call(n):c;Reflect.ownKeys(z).forEach(ne=>{Cr(ne,z[ne])})}u&&co(u,e,"c");function oe(z,ne){B(ne)?ne.forEach(ut=>z(ut.bind(n))):ne&&z(ne.bind(n))}if(oe(mf,f),oe(Tc,h),oe(_f,g),oe(vf,I),oe(hf,w),oe(pf,M),oe(If,G),oe(Ef,ee),oe(bf,q),oe(Cc,T),oe(Ac,O),oe(yf,A),B($))if($.length){const z=e.exposed||(e.exposed={});$.forEach(ne=>{Object.defineProperty(z,ne,{get:()=>n[ne],set:ut=>n[ne]=ut,enumerable:!0})})}else e.exposed||(e.exposed={});V&&e.render===it&&(e.render=V),Q!=null&&(e.inheritAttrs=Q),N&&(e.components=N),J&&(e.directives=J),A&&wc(e)}function Pf(e,t,n=it){B(e)&&(e=Qs(e));for(const r in e){const s=e[r];let i;te(s)?"default"in s?i=He(s.from||r,s.default,!0):i=He(s.from||r):i=He(s),fe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function co(e,t,n){je(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Rc(e,t,n,r){let s=r.includes(".")?gc(n,r):()=>n[r];if(de(e)){const i=t[e];K(i)&&$n(s,i)}else if(K(e))$n(s,e.bind(n));else if(te(e))if(B(e))e.forEach(i=>Rc(i,t,n,r));else{const i=K(e.handler)?e.handler.bind(n):t[e.handler];K(i)&&$n(s,i,e)}}function Pc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Ur(c,l,o,!0)),Ur(c,t,o)),te(t)&&i.set(t,c),c}function Ur(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Ur(e,i,n,!0),s&&s.forEach(o=>Ur(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Of[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Of={data:lo,props:uo,emits:uo,methods:Mn,computed:Mn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Mn,directives:Mn,watch:kf,provide:lo,inject:Nf};function lo(e,t){return t?e?function(){return ve(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function Nf(e,t){return Mn(Qs(e),Qs(t))}function Qs(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function Mn(e,t){return e?ve(Object.create(null),e,t):t}function uo(e,t){return e?B(e)&&B(t)?[...new Set([...e,...t])]:ve(Object.create(null),ao(e),ao(t??{})):t}function kf(e,t){if(!e)return t;if(!t)return e;const n=ve(Object.create(null),e);for(const r in t)n[r]=we(e[r],t[r]);return n}function Oc(){return{app:null,config:{isNativeTag:xa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Df=0;function Lf(e,t){return function(r,s=null){K(r)||(r=ve({},r)),s!=null&&!te(s)&&(s=null);const i=Oc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Df++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:md,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(l,...f)):K(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,h){if(!c){const g=l._ceVNode||Ne(r,s);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),e(g,u,h),c=!0,l._container=u,u.__vue_app__=l,ds(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(je(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=nn;nn=l;try{return u()}finally{nn=f}}};return l}}let nn=null;const xf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ae(t)}Modifiers`]||e[`${sn(t)}Modifiers`];function Mf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||le;let s=n;const i=t.startsWith("update:"),o=i&&xf(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>de(u)?u.trim():u)),o.number&&(s=n.map(ns)));let a,c=r[a=Es(t)]||r[a=Es(Ae(t))];!c&&i&&(c=r[a=Es(sn(t))]),c&&je(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,je(l,e,6,s)}}const Uf=new WeakMap;function Nc(e,t,n=!1){const r=n?Uf:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!K(e)){const c=l=>{const u=Nc(l,t,!0);u&&(a=!0,ve(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(te(e)&&r.set(e,null),null):(B(i)?i.forEach(c=>o[c]=null):ve(o,i),te(e)&&r.set(e,o),o)}function us(e,t){return!e||!Yr(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,sn(t))||se(e,t))}function fo(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:h,setupState:g,ctx:I,inheritAttrs:w}=e,M=xr(e);let x,T;try{if(n.shapeFlag&4){const O=s||r,V=O;x=nt(l.call(V,O,u,f,g,h,I)),T=a}else{const O=t;x=nt(O.length>1?O(f,{attrs:a,slots:o,emit:c}):O(f,null)),T=t.props?a:Ff(a)}}catch(O){zn.length=0,os(O,e,1),x=Ne(Ce)}let k=x;if(T&&w!==!1){const O=Object.keys(T),{shapeFlag:V}=k;O.length&&V&7&&(i&&O.some(Xr)&&(T=Bf(T,i)),k=Vt(k,T,!1,!0))}return n.dirs&&(k=Vt(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&tr(k,n.transition),x=k,xr(M),x}const Ff=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yr(n))&&((t||(t={}))[n]=e[n]);return t},Bf=(e,t)=>{const n={};for(const r in e)(!Xr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Hf(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ho(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(kc(o,r,h)&&!us(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ho(r,o,l):!0:!!o;return!1}function ho(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(kc(t,e,i)&&!us(n,i))return!0}return!1}function kc(e,t,n){const r=e[n],s=t[n];return n==="style"&&te(r)&&te(s)?!fr(r,s):r!==s}function Vf({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Dc={},Lc=()=>Object.create(Dc),xc=e=>Object.getPrototypeOf(e)===Dc;function jf(e,t,n,r=!1){const s={},i=Lc();e.propsDefaults=Object.create(null),Mc(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:oc(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function $f(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=X(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(us(e.emitsOptions,h))continue;const g=t[h];if(c)if(se(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const I=Ae(h);s[I]=Zs(c,a,I,g,e,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{Mc(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!se(t,f)&&((u=sn(f))===f||!se(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Zs(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!se(t,f))&&(delete i[f],l=!0)}l&&mt(e.attrs,"set","")}function Mc(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Hn(c))continue;const l=t[c];let u;s&&se(s,u=Ae(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:us(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=X(n),l=a||le;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Zs(s,c,f,l[f],e,!se(l,f))}}return o}function Zs(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=se(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&K(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=pr(s);r=l[n]=c.call(null,t),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===sn(n))&&(r=!0))}return r}const Wf=new WeakMap;function Uc(e,t,n=!1){const r=n?Wf:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!K(e)){const u=f=>{c=!0;const[h,g]=Uc(f,t,!0);ve(o,h),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return te(e)&&r.set(e,gn),gn;if(B(i))for(let u=0;u<i.length;u++){const f=Ae(i[u]);po(f)&&(o[f]=le)}else if(i)for(const u in i){const f=Ae(u);if(po(f)){const h=i[u],g=o[f]=B(h)||K(h)?{type:h}:ve({},h),I=g.type;let w=!1,M=!0;if(B(I))for(let x=0;x<I.length;++x){const T=I[x],k=K(T)&&T.name;if(k==="Boolean"){w=!0;break}else k==="String"&&(M=!1)}else w=K(I)&&I.name==="Boolean";g[0]=w,g[1]=M,(w||se(g,"default"))&&a.push(f)}}const l=[o,a];return te(e)&&r.set(e,l),l}function po(e){return e[0]!=="$"&&!Hn(e)}const Oi=e=>e==="_"||e==="_ctx"||e==="$stable",Ni=e=>B(e)?e.map(nt):[nt(e)],Kf=(e,t,n)=>{if(t._n)return t;const r=rf((...s)=>Ni(t(...s)),n);return r._c=!1,r},Fc=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Oi(s))continue;const i=e[s];if(K(i))t[s]=Kf(s,i,r);else if(i!=null){const o=Ni(i);t[s]=()=>o}}},Bc=(e,t)=>{const n=Ni(t);e.slots.default=()=>n},Hc=(e,t,n)=>{for(const r in t)(n||!Oi(r))&&(e[r]=t[r])},Gf=(e,t,n)=>{const r=e.slots=Lc();if(e.vnode.shapeFlag&32){const s=t._;s?(Hc(r,t,n),n&&Ba(r,"_",s,!0)):Fc(t,r)}else t&&Bc(e,t)},zf=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=le;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Hc(s,t,n):(i=!t.$stable,Fc(t,s)),o=t}else t&&(Bc(e,t),o={default:1});if(i)for(const a in s)!Oi(a)&&o[a]==null&&delete s[a]},Oe=Qf;function qf(e){return Jf(e)}function Jf(e,t){const n=rs();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=it,insertStaticContent:I}=e,w=(d,p,m,v=null,b=null,_=null,R=void 0,C=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Xt(d,p)&&(v=y(d),Pe(d,b,_,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:E,ref:H,shapeFlag:D}=p;switch(E){case fs:M(d,p,m,v);break;case Ce:x(d,p,m,v);break;case Ps:d==null&&T(p,m,v,R);break;case tt:N(d,p,m,v,b,_,R,C,S);break;default:D&1?V(d,p,m,v,b,_,R,C,S):D&6?J(d,p,m,v,b,_,R,C,S):(D&64||D&128)&&E.process(d,p,m,v,b,_,R,C,S,U)}H!=null&&b?Wn(H,d&&d.ref,_,p||d,!p):H==null&&d&&d.ref!=null&&Wn(d.ref,null,_,d,!0)},M=(d,p,m,v)=>{if(d==null)r(p.el=a(p.children),m,v);else{const b=p.el=d.el;p.children!==d.children&&l(b,p.children)}},x=(d,p,m,v)=>{d==null?r(p.el=c(p.children||""),m,v):p.el=d.el},T=(d,p,m,v)=>{[d.el,d.anchor]=I(d.children,p,m,v,d.el,d.anchor)},k=({el:d,anchor:p},m,v)=>{let b;for(;d&&d!==p;)b=h(d),r(d,m,v),d=b;r(p,m,v)},O=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),s(d),d=m;s(p)},V=(d,p,m,v,b,_,R,C,S)=>{if(p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),d==null)ee(p,m,v,b,_,R,C,S);else{const E=d.el&&d.el._isVueCE?d.el:null;try{E&&E._beginPatch(),A(d,p,b,_,R,C,S)}finally{E&&E._endPatch()}}},ee=(d,p,m,v,b,_,R,C)=>{let S,E;const{props:H,shapeFlag:D,transition:F,dirs:W}=d;if(S=d.el=o(d.type,_,H&&H.is,H),D&8?u(S,d.children):D&16&&G(d.children,S,null,v,b,Rs(d,_),R,C),W&&Kt(d,null,v,"created"),q(S,d,d.scopeId,R,v),H){for(const ae in H)ae!=="value"&&!Hn(ae)&&i(S,ae,null,H[ae],_,v);"value"in H&&i(S,"value",null,H.value,_),(E=H.onVnodeBeforeMount)&&Qe(E,v,d)}W&&Kt(d,null,v,"beforeMount");const Z=Yf(b,F);Z&&F.beforeEnter(S),r(S,p,m),((E=H&&H.onVnodeMounted)||Z||W)&&Oe(()=>{try{E&&Qe(E,v,d),Z&&F.enter(S),W&&Kt(d,null,v,"mounted")}finally{}},b)},q=(d,p,m,v,b)=>{if(m&&g(d,m),v)for(let _=0;_<v.length;_++)g(d,v[_]);if(b){let _=b.subTree;if(p===_||Wc(_.type)&&(_.ssContent===p||_.ssFallback===p)){const R=b.vnode;q(d,R,R.scopeId,R.slotScopeIds,b.parent)}}},G=(d,p,m,v,b,_,R,C,S=0)=>{for(let E=S;E<d.length;E++){const H=d[E]=C?gt(d[E]):nt(d[E]);w(null,H,p,m,v,b,_,R,C)}},A=(d,p,m,v,b,_,R)=>{const C=p.el=d.el;let{patchFlag:S,dynamicChildren:E,dirs:H}=p;S|=d.patchFlag&16;const D=d.props||le,F=p.props||le;let W;if(m&&Gt(m,!1),(W=F.onVnodeBeforeUpdate)&&Qe(W,m,p,d),H&&Kt(p,d,m,"beforeUpdate"),m&&Gt(m,!0),(D.innerHTML&&F.innerHTML==null||D.textContent&&F.textContent==null)&&u(C,""),E?$(d.dynamicChildren,E,C,m,v,Rs(p,b),_):R||ne(d,p,C,null,m,v,Rs(p,b),_,!1),S>0){if(S&16)Q(C,D,F,m,b);else if(S&2&&D.class!==F.class&&i(C,"class",null,F.class,b),S&4&&i(C,"style",D.style,F.style,b),S&8){const Z=p.dynamicProps;for(let ae=0;ae<Z.length;ae++){const ie=Z[ae],ge=D[ie],ye=F[ie];(ye!==ge||ie==="value")&&i(C,ie,ge,ye,b,m)}}S&1&&d.children!==p.children&&u(C,p.children)}else!R&&E==null&&Q(C,D,F,m,b);((W=F.onVnodeUpdated)||H)&&Oe(()=>{W&&Qe(W,m,p,d),H&&Kt(p,d,m,"updated")},v)},$=(d,p,m,v,b,_,R)=>{for(let C=0;C<p.length;C++){const S=d[C],E=p[C],H=S.el&&(S.type===tt||!Xt(S,E)||S.shapeFlag&198)?f(S.el):m;w(S,E,H,null,v,b,_,R,!0)}},Q=(d,p,m,v,b)=>{if(p!==m){if(p!==le)for(const _ in p)!Hn(_)&&!(_ in m)&&i(d,_,p[_],null,b,v);for(const _ in m){if(Hn(_))continue;const R=m[_],C=p[_];R!==C&&_!=="value"&&i(d,_,C,R,b,v)}"value"in m&&i(d,"value",p.value,m.value,b)}},N=(d,p,m,v,b,_,R,C,S)=>{const E=p.el=d?d.el:a(""),H=p.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:F,slotScopeIds:W}=p;W&&(C=C?C.concat(W):W),d==null?(r(E,m,v),r(H,m,v),G(p.children||[],m,H,b,_,R,C,S)):D>0&&D&64&&F&&d.dynamicChildren&&d.dynamicChildren.length===F.length?($(d.dynamicChildren,F,m,b,_,R,C),(p.key!=null||b&&p===b.subTree)&&Vc(d,p,!0)):ne(d,p,m,H,b,_,R,C,S)},J=(d,p,m,v,b,_,R,C,S)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?b.ctx.activate(p,m,v,R,S):pe(p,m,v,b,_,R,S):Ie(d,p,S)},pe=(d,p,m,v,b,_,R)=>{const C=d.component=ld(d,v,b);if(cs(d)&&(C.ctx.renderer=U),ud(C,!1,R),C.asyncDep){if(b&&b.registerDep(C,oe,R),!d.el){const S=C.subTree=Ne(Ce);x(null,S,p,m),d.placeholder=S.el}}else oe(C,d,p,m,b,_,R)},Ie=(d,p,m)=>{const v=p.component=d.component;if(Hf(d,p,m))if(v.asyncDep&&!v.asyncResolved){z(v,p,m);return}else v.next=p,v.update();else p.el=d.el,v.vnode=p},oe=(d,p,m,v,b,_,R)=>{const C=()=>{if(d.isMounted){let{next:D,bu:F,u:W,parent:Z,vnode:ae}=d;{const Ye=jc(d);if(Ye){D&&(D.el=ae.el,z(d,D,R)),Ye.asyncDep.then(()=>{Oe(()=>{d.isUnmounted||E()},b)});return}}let ie=D,ge;Gt(d,!1),D?(D.el=ae.el,z(d,D,R)):D=ae,F&&Tr(F),(ge=D.props&&D.props.onVnodeBeforeUpdate)&&Qe(ge,Z,D,ae),Gt(d,!0);const ye=fo(d),Je=d.subTree;d.subTree=ye,w(Je,ye,f(Je.el),y(Je),d,b,_),D.el=ye.el,ie===null&&Vf(d,ye.el),W&&Oe(W,b),(ge=D.props&&D.props.onVnodeUpdated)&&Oe(()=>Qe(ge,Z,D,ae),b)}else{let D;const{el:F,props:W}=p,{bm:Z,m:ae,parent:ie,root:ge,type:ye}=d,Je=Kn(p);Gt(d,!1),Z&&Tr(Z),!Je&&(D=W&&W.onVnodeBeforeMount)&&Qe(D,ie,p),Gt(d,!0);{ge.ce&&ge.ce._hasShadowRoot()&&ge.ce._injectChildStyle(ye,d.parent?d.parent.type:void 0);const Ye=d.subTree=fo(d);w(null,Ye,m,v,d,b,_),p.el=Ye.el}if(ae&&Oe(ae,b),!Je&&(D=W&&W.onVnodeMounted)){const Ye=p;Oe(()=>Qe(D,ie,Ye),b)}(p.shapeFlag&256||ie&&Kn(ie.vnode)&&ie.vnode.shapeFlag&256)&&d.a&&Oe(d.a,b),d.isMounted=!0,p=m=v=null}};d.scope.on();const S=d.effect=new Ga(C);d.scope.off();const E=d.update=S.run.bind(S),H=d.job=S.runIfDirty.bind(S);H.i=d,H.id=d.uid,S.scheduler=()=>Ri(H),Gt(d,!0),E()},z=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,$f(d,p.props,v,m),zf(d,p.children,m),bt(),no(d),Et()},ne=(d,p,m,v,b,_,R,C,S=!1)=>{const E=d&&d.children,H=d?d.shapeFlag:0,D=p.children,{patchFlag:F,shapeFlag:W}=p;if(F>0){if(F&128){At(E,D,m,v,b,_,R,C,S);return}else if(F&256){ut(E,D,m,v,b,_,R,C,S);return}}W&8?(H&16&&Ue(E,b,_),D!==E&&u(m,D)):H&16?W&16?At(E,D,m,v,b,_,R,C,S):Ue(E,b,_,!0):(H&8&&u(m,""),W&16&&G(D,m,v,b,_,R,C,S))},ut=(d,p,m,v,b,_,R,C,S)=>{d=d||gn,p=p||gn;const E=d.length,H=p.length,D=Math.min(E,H);let F;for(F=0;F<D;F++){const W=p[F]=S?gt(p[F]):nt(p[F]);w(d[F],W,m,null,b,_,R,C,S)}E>H?Ue(d,b,_,!0,!1,D):G(p,m,v,b,_,R,C,S,D)},At=(d,p,m,v,b,_,R,C,S)=>{let E=0;const H=p.length;let D=d.length-1,F=H-1;for(;E<=D&&E<=F;){const W=d[E],Z=p[E]=S?gt(p[E]):nt(p[E]);if(Xt(W,Z))w(W,Z,m,null,b,_,R,C,S);else break;E++}for(;E<=D&&E<=F;){const W=d[D],Z=p[F]=S?gt(p[F]):nt(p[F]);if(Xt(W,Z))w(W,Z,m,null,b,_,R,C,S);else break;D--,F--}if(E>D){if(E<=F){const W=F+1,Z=W<H?p[W].el:v;for(;E<=F;)w(null,p[E]=S?gt(p[E]):nt(p[E]),m,Z,b,_,R,C,S),E++}}else if(E>F)for(;E<=D;)Pe(d[E],b,_,!0),E++;else{const W=E,Z=E,ae=new Map;for(E=Z;E<=F;E++){const ke=p[E]=S?gt(p[E]):nt(p[E]);ke.key!=null&&ae.set(ke.key,E)}let ie,ge=0;const ye=F-Z+1;let Je=!1,Ye=0;const Nn=new Array(ye);for(E=0;E<ye;E++)Nn[E]=0;for(E=W;E<=D;E++){const ke=d[E];if(ge>=ye){Pe(ke,b,_,!0);continue}let Xe;if(ke.key!=null)Xe=ae.get(ke.key);else for(ie=Z;ie<=F;ie++)if(Nn[ie-Z]===0&&Xt(ke,p[ie])){Xe=ie;break}Xe===void 0?Pe(ke,b,_,!0):(Nn[Xe-Z]=E+1,Xe>=Ye?Ye=Xe:Je=!0,w(ke,p[Xe],m,null,b,_,R,C,S),ge++)}const Ji=Je?Xf(Nn):gn;for(ie=Ji.length-1,E=ye-1;E>=0;E--){const ke=Z+E,Xe=p[ke],Yi=p[ke+1],Xi=ke+1<H?Yi.el||$c(Yi):v;Nn[E]===0?w(null,Xe,m,Xi,b,_,R,C,S):Je&&(ie<0||E!==Ji[ie]?qe(Xe,m,Xi,2):ie--)}}},qe=(d,p,m,v,b=null)=>{const{el:_,type:R,transition:C,children:S,shapeFlag:E}=d;if(E&6){qe(d.component.subTree,p,m,v);return}if(E&128){d.suspense.move(p,m,v);return}if(E&64){R.move(d,p,m,U);return}if(R===tt){r(_,p,m);for(let D=0;D<S.length;D++)qe(S[D],p,m,v);r(d.anchor,p,m);return}if(R===Ps){k(d,p,m);return}if(v!==2&&E&1&&C)if(v===0)C.persisted&&!_[Be]?r(_,p,m):(C.beforeEnter(_),r(_,p,m),Oe(()=>C.enter(_),b));else{const{leave:D,delayLeave:F,afterLeave:W}=C,Z=()=>{d.ctx.isUnmounted?s(_):r(_,p,m)},ae=()=>{const ie=_._isLeaving||!!_[Be];_._isLeaving&&_[Be](!0),C.persisted&&!ie?Z():D(_,()=>{Z(),W&&W()})};F?F(_,Z,ae):ae()}else r(_,p,m)},Pe=(d,p,m,v=!1,b=!1)=>{const{type:_,props:R,ref:C,children:S,dynamicChildren:E,shapeFlag:H,patchFlag:D,dirs:F,cacheIndex:W,memo:Z}=d;if(D===-2&&(b=!1),C!=null&&(bt(),Wn(C,null,m,d,!0),Et()),W!=null&&(p.renderCache[W]=void 0),H&256){p.ctx.deactivate(d);return}const ae=H&1&&F,ie=!Kn(d);let ge;if(ie&&(ge=R&&R.onVnodeBeforeUnmount)&&Qe(ge,p,d),H&6)Wt(d.component,m,v);else{if(H&128){d.suspense.unmount(m,v);return}ae&&Kt(d,null,p,"beforeUnmount"),H&64?d.type.remove(d,p,m,U,v):E&&!E.hasOnce&&(_!==tt||D>0&&D&64)?Ue(E,p,m,!1,!0):(_===tt&&D&384||!b&&H&16)&&Ue(S,p,m),v&&an(d)}const ye=Z!=null&&W==null;(ie&&(ge=R&&R.onVnodeUnmounted)||ae||ye)&&Oe(()=>{ge&&Qe(ge,p,d),ae&&Kt(d,null,p,"unmounted"),ye&&(d.el=null)},m)},an=d=>{const{type:p,el:m,anchor:v,transition:b}=d;if(p===tt){cn(m,v);return}if(p===Ps){O(d);return}const _=()=>{s(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:R,delayLeave:C}=b,S=()=>R(m,_);C?C(d.el,_,S):S()}else _()},cn=(d,p)=>{let m;for(;d!==p;)m=h(d),s(d),d=m;s(p)},Wt=(d,p,m)=>{const{bum:v,scope:b,job:_,subTree:R,um:C,m:S,a:E}=d;go(S),go(E),v&&Tr(v),b.stop(),_&&(_.flags|=8,Pe(R,d,p,m)),C&&Oe(C,p),Oe(()=>{d.isUnmounted=!0},p)},Ue=(d,p,m,v=!1,b=!1,_=0)=>{for(let R=_;R<d.length;R++)Pe(d[R],p,m,v,b)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),m=p&&p[lf];return m?h(m):p};let L=!1;const P=(d,p,m)=>{let v;d==null?p._vnode&&(Pe(p._vnode,null,null,!0),v=p._vnode.component):w(p._vnode||null,d,p,null,null,null,m),p._vnode=d,L||(L=!0,no(v),dc(),L=!1)},U={p:w,um:Pe,m:qe,r:an,mt:pe,mc:G,pc:ne,pbc:$,n:y,o:e};return{render:P,hydrate:void 0,createApp:Lf(P)}}function Rs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Gt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Yf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Vc(e,t,n=!1){const r=e.children,s=t.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=gt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Vc(o,a)),a.type===fs&&(a.patchFlag===-1&&(a=s[i]=gt(a)),a.el=o.el),a.type===Ce&&!a.el&&(a.el=o.el)}}function Xf(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function jc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:jc(t)}function go(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function $c(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?$c(t.subTree):null}const Wc=e=>e.__isSuspense;function Qf(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):nf(e)}const tt=Symbol.for("v-fgt"),fs=Symbol.for("v-txt"),Ce=Symbol.for("v-cmt"),Ps=Symbol.for("v-stc"),zn=[];let xe=null;function Kc(e=!1){zn.push(xe=e?null:[])}function Zf(){zn.pop(),xe=zn[zn.length-1]||null}let nr=1;function Fr(e,t=!1){nr+=e,e<0&&xe&&t&&(xe.hasOnce=!0)}function Gc(e){return e.dynamicChildren=nr>0?xe||gn:null,Zf(),nr>0&&xe&&xe.push(e),e}function ed(e,t,n,r,s,i){return Gc(qc(e,t,n,r,s,i,!0))}function td(e,t,n,r,s){return Gc(Ne(e,t,n,r,s,!0))}function Br(e){return e?e.__v_isVNode===!0:!1}function Xt(e,t){return e.type===t.type&&e.key===t.key}const zc=({key:e})=>e??null,Ar=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||fe(e)||K(e)?{i:Le,r:e,k:t,f:!!n}:e:null);function qc(e,t=null,n=null,r=0,s=null,i=e===tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zc(t),ref:t&&Ar(t),scopeId:pc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Le};return a?(ki(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),nr>0&&!o&&xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xe.push(c),c}const Ne=nd;function nd(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Tf)&&(e=Ce),Br(e)){const a=Vt(e,t,!0);return n&&ki(a,n),nr>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(e)]=a:xe.push(a)),a.patchFlag=-2,a}if(gd(e)&&(e=e.__vccOpts),t){t=rd(t);let{class:a,style:c}=t;a&&!de(a)&&(t.class=yi(a)),te(c)&&(is(c)&&!B(c)&&(c=ve({},c)),t.style=vi(c))}const o=de(e)?1:Wc(e)?128:mc(e)?64:te(e)?4:K(e)?2:0;return qc(e,t,n,r,s,o,i,!0)}function rd(e){return e?is(e)||xc(e)?ve({},e):e:null}function Vt(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?od(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&zc(l),ref:t&&t.ref?n&&i?B(i)?i.concat(Ar(t)):[i,Ar(t)]:Ar(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==tt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vt(e.ssContent),ssFallback:e.ssFallback&&Vt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&tr(u,c.clone(u)),u}function sd(e=" ",t=0){return Ne(fs,null,e,t)}function id(e="",t=!1){return t?(Kc(),td(Ce,null,e)):Ne(Ce,null,e)}function nt(e){return e==null||typeof e=="boolean"?Ne(Ce):B(e)?Ne(tt,null,e.slice()):Br(e)?gt(e):Ne(fs,null,String(e))}function gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Vt(e)}function ki(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),ki(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!xc(t)?t._ctx=Le:s===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[sd(t)]):n=8);e.children=t,e.shapeFlag|=n}function od(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=yi([t.class,r.class]));else if(s==="style")t.style=vi([t.style,r.style]);else if(Yr(s)){const i=t[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))?t[s]=i?[].concat(i,o):o:o==null&&i==null&&!Xr(s)&&(t[s]=o)}else s!==""&&(t[s]=r[s])}return t}function Qe(e,t,n,r=null){je(e,t,7,[n,r])}const ad=Oc();let cd=0;function ld(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||ad,i={uid:cd++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $a(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uc(r,s),emitsOptions:Nc(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Mf.bind(null,i),e.ce&&e.ce(i),i}let Ee=null;const Di=()=>Ee||Le;let Hr,ei;{const e=rs(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Hr=t("__VUE_INSTANCE_SETTERS__",n=>Ee=n),ei=t("__VUE_SSR_SETTERS__",n=>rr=n)}const pr=e=>{const t=Ee;return Hr(e),e.scope.on(),()=>{e.scope.off(),Hr(t)}},mo=()=>{Ee&&Ee.scope.off(),Hr(null)};function Jc(e){return e.vnode.shapeFlag&4}let rr=!1;function ud(e,t=!1,n=!1){t&&ei(t);const{props:r,children:s}=e.vnode,i=Jc(e);jf(e,r,i,t),Gf(e,s,n||t);const o=i?fd(e,t):void 0;return t&&ei(!1),o}function fd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Af);const{setup:r}=n;if(r){bt();const s=e.setupContext=r.length>1?hd(e):null,i=pr(e),o=hr(r,e,0,[e.props,s]),a=Ma(o);if(Et(),i(),(a||e.sp)&&!Kn(e)&&wc(e),a){if(o.then(mo,mo),t)return o.then(c=>{_o(e,c)}).catch(c=>{os(c,e,0)});e.asyncDep=o}else _o(e,o)}else Yc(e)}function _o(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=cc(t)),Yc(e)}function Yc(e,t,n){const r=e.type;e.render||(e.render=r.render||it);{const s=pr(e);bt();try{Rf(e)}finally{Et(),s()}}}const dd={get(e,t){return be(e,"get",""),e[t]}};function hd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,dd),slots:e.slots,emit:e.emit,expose:t}}function ds(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(cc(Ci(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Gn)return Gn[n](e)},has(t,n){return n in t||n in Gn}})):e.proxy}function pd(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function gd(e){return K(e)&&"__vccOpts"in e}const De=(e,t)=>Xu(e,t,rr);function Li(e,t,n){try{Fr(-1);const r=arguments.length;return r===2?te(t)&&!B(t)?Br(t)?Ne(e,null,[t]):Ne(e,t):Ne(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Br(n)&&(n=[n]),Ne(e,t,n))}finally{Fr(1)}}const md="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ti;const vo=typeof window<"u"&&window.trustedTypes;if(vo)try{ti=vo.createPolicy("vue",{createHTML:e=>e})}catch{}const Xc=ti?e=>ti.createHTML(e):e=>e,_d="http://www.w3.org/2000/svg",vd="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,yo=pt&&pt.createElement("template"),yd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?pt.createElementNS(_d,e):t==="mathml"?pt.createElementNS(vd,e):n?pt.createElement(e,{is:n}):pt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{yo.innerHTML=Xc(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=yo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Rt="transition",Ln="animation",sr=Symbol("_vtc"),Qc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},bd=ve({},_c,Qc),Ed=e=>(e.displayName="Transition",e.props=bd,e),yv=Ed((e,{slots:t})=>Li(df,Id(e),t)),zt=(e,t=[])=>{B(e)?e.forEach(n=>n(...t)):e&&e(...t)},bo=e=>e?B(e)?e.some(t=>t.length>1):e.length>1:!1;function Id(e){const t={};for(const N in e)N in Qc||(t[N]=e[N]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,I=wd(s),w=I&&I[0],M=I&&I[1],{onBeforeEnter:x,onEnter:T,onEnterCancelled:k,onLeave:O,onLeaveCancelled:V,onBeforeAppear:ee=x,onAppear:q=T,onAppearCancelled:G=k}=t,A=(N,J,pe,Ie)=>{N._enterCancelled=Ie,qt(N,J?u:a),qt(N,J?l:o),pe&&pe()},$=(N,J)=>{N._isLeaving=!1,qt(N,f),qt(N,g),qt(N,h),J&&J()},Q=N=>(J,pe)=>{const Ie=N?q:T,oe=()=>A(J,N,pe);zt(Ie,[J,oe]),Eo(()=>{qt(J,N?c:i),dt(J,N?u:a),bo(Ie)||Io(J,r,w,oe)})};return ve(t,{onBeforeEnter(N){zt(x,[N]),dt(N,i),dt(N,o)},onBeforeAppear(N){zt(ee,[N]),dt(N,c),dt(N,l)},onEnter:Q(!1),onAppear:Q(!0),onLeave(N,J){N._isLeaving=!0;const pe=()=>$(N,J);dt(N,f),N._enterCancelled?(dt(N,h),To(N)):(To(N),dt(N,h)),Eo(()=>{N._isLeaving&&(qt(N,f),dt(N,g),bo(O)||Io(N,r,M,pe))}),zt(O,[N,pe])},onEnterCancelled(N){A(N,!1,void 0,!0),zt(k,[N])},onAppearCancelled(N){A(N,!0,void 0,!0),zt(G,[N])},onLeaveCancelled(N){$(N),zt(V,[N])}})}function wd(e){if(e==null)return null;if(te(e))return[Os(e.enter),Os(e.leave)];{const t=Os(e);return[t,t]}}function Os(e){return pu(e)}function dt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[sr]||(e[sr]=new Set)).add(t)}function qt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[sr];n&&(n.delete(t),n.size||(e[sr]=void 0))}function Eo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Sd=0;function Io(e,t,n,r){const s=e._endId=++Sd,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Td(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,h),i()},h=g=>{g.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),e.addEventListener(l,h)}function Td(e,t){const n=window.getComputedStyle(e),r=I=>(n[I]||"").split(", "),s=r(`${Rt}Delay`),i=r(`${Rt}Duration`),o=wo(s,i),a=r(`${Ln}Delay`),c=r(`${Ln}Duration`),l=wo(a,c);let u=null,f=0,h=0;t===Rt?o>0&&(u=Rt,f=o,h=i.length):t===Ln?l>0&&(u=Ln,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?Rt:Ln:null,h=u?u===Rt?i.length:c.length:0);const g=u===Rt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Rt}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:g}}function wo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>So(n)+So(e[r])))}function So(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function To(e){return(e?e.ownerDocument:document).body.offsetHeight}function Cd(e,t,n){const r=e[sr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Co=Symbol("_vod"),Ad=Symbol("_vsh"),Rd=Symbol(""),Pd=/(?:^|;)\s*display\s*:/;function Od(e,t,n){const r=e.style,s=de(n);let i=!1;if(n&&!s){if(t)if(de(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Un(r,a,"")}else for(const o in t)n[o]==null&&Un(r,o,"");for(const o in n){o==="display"&&(i=!0);const a=n[o];a!=null?kd(e,o,!de(t)&&t?t[o]:void 0,a)||Un(r,o,a):Un(r,o,"")}}else if(s){if(t!==n){const o=r[Rd];o&&(n+=";"+o),r.cssText=n,i=Pd.test(n)}}else t&&e.removeAttribute("style");Co in e&&(e[Co]=i?r.display:"",e[Ad]&&(r.display="none"))}const Ao=/\s*!important$/;function Un(e,t,n){if(B(n))n.forEach(r=>Un(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Nd(e,t);Ao.test(n)?e.setProperty(sn(r),n.replace(Ao,""),"important"):e[r]=n}}const Ro=["Webkit","Moz","ms"],Ns={};function Nd(e,t){const n=Ns[t];if(n)return n;let r=Ae(t);if(r!=="filter"&&r in e)return Ns[t]=r;r=ts(r);for(let s=0;s<Ro.length;s++){const i=Ro[s]+r;if(i in e)return Ns[t]=i}return t}function kd(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&de(r)&&n===r}const Po="http://www.w3.org/1999/xlink";function Oo(e,t,n,r,s,i=bu(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Po,t.slice(6,t.length)):e.setAttributeNS(Po,t,n):n==null||i&&!Ha(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ve(n)?String(n):n)}function No(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Xc(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Ha(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Qt(e,t,n,r){e.addEventListener(t,n,r)}function Dd(e,t,n,r){e.removeEventListener(t,n,r)}const ko=Symbol("_vei");function Ld(e,t,n,r,s=null){const i=e[ko]||(e[ko]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=xd(t);if(r){const l=i[t]=Fd(r,s);Qt(e,a,l,c)}else o&&(Dd(e,a,o,c),i[t]=void 0)}}const Do=/(?:Once|Passive|Capture)$/;function xd(e){let t;if(Do.test(e)){t={};let r;for(;r=e.match(Do);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):sn(e.slice(2)),t]}let ks=0;const Md=Promise.resolve(),Ud=()=>ks||(Md.then(()=>ks=0),ks=Date.now());function Fd(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(B(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),a=[r];for(let c=0;c<o.length&&!r._stopped;c++){const l=o[c];l&&je(l,t,5,a)}}else je(s,t,5,[r])};return n.value=e,n.attached=Ud(),n}const Lo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Bd=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?Cd(e,r,o):t==="style"?Od(e,n,r):Yr(t)?Xr(t)||Ld(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hd(e,t,r,o))?(No(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Oo(e,t,r,o,i,t!=="value")):e._isVueCE&&(Vd(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!de(r)))?No(e,Ae(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Oo(e,t,r,o))};function Hd(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Lo(t)&&K(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Lo(t)&&de(n)?!1:t in e}function Vd(e,t){const n=e._def.props;if(!n)return!1;const r=Ae(t);return Array.isArray(n)?n.some(s=>Ae(s)===r):Object.keys(n).some(s=>Ae(s)===r)}const Vr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return B(t)?n=>Tr(t,n):t};function jd(e){e.target.composing=!0}function xo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const vn=Symbol("_assign");function Mo(e,t,n){return t&&(e=e.trim()),n&&(e=ns(e)),e}const bv={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[vn]=Vr(s);const i=r||s.props&&s.props.type==="number";Qt(e,t?"change":"input",o=>{o.target.composing||e[vn](Mo(e.value,n,i))}),(n||i)&&Qt(e,"change",()=>{e.value=Mo(e.value,n,i)}),t||(Qt(e,"compositionstart",jd),Qt(e,"compositionend",xo),Qt(e,"change",xo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(e[vn]=Vr(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?ns(e.value):e.value,c=t??"";if(a===c)return;const l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===c)||(e.value=c)}},Ev={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=Qr(t);Qt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?ns(jr(o)):jr(o));e[vn](e.multiple?s?new Set(i):i:i[0]),e._assigning=!0,as(()=>{e._assigning=!1})}),e[vn]=Vr(r)},mounted(e,{value:t}){Uo(e,t)},beforeUpdate(e,t,n){e[vn]=Vr(n)},updated(e,{value:t}){e._assigning||Uo(e,t)}};function Uo(e,t){const n=e.multiple,r=B(t);if(!(n&&!r&&!Qr(t))){for(let s=0,i=e.options.length;s<i;s++){const o=e.options[s],a=jr(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=t.some(l=>String(l)===String(a)):o.selected=Iu(t,a)>-1}else o.selected=t.has(a);else if(fr(jr(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function jr(e){return"_value"in e?e._value:e.value}const $d=["ctrl","shift","alt","meta"],Wd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>$d.some(n=>e[`${n}Key`]&&!t.includes(n))},Iv=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const a=Wd[t[o]];if(a&&a(s,t))return}return e(s,...i)})},Kd=ve({patchProp:Bd},yd);let Fo;function Gd(){return Fo||(Fo=qf(Kd))}const zd=(...e)=>{const t=Gd().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Jd(r);if(!s)return;const i=t._component;!K(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,qd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function qd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Jd(e){return de(e)?document.querySelector(e):e}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Zc;const hs=e=>Zc=e,el=Symbol();function ni(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var qn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(qn||(qn={}));function Yd(){const e=Wa(!0),t=e.run(()=>Ai({}));let n=[],r=[];const s=Ci({install(i){hs(s),s._a=i,i.provide(el,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const tl=()=>{};function Bo(e,t,n,r=tl){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Ka()&&Su(s),s}function un(e,...t){e.slice().forEach(n=>{n(...t)})}const Xd=e=>e(),Ho=Symbol(),Ds=Symbol();function ri(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];ni(s)&&ni(r)&&e.hasOwnProperty(n)&&!fe(r)&&!ot(r)?e[n]=ri(s,r):e[n]=r}return e}const Qd=Symbol();function Zd(e){return!ni(e)||!e.hasOwnProperty(Qd)}const{assign:Nt}=Object;function eh(e){return!!(fe(e)&&e.effect)}function th(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=Gu(n.state.value[e]);return Nt(u,i,Object.keys(o||{}).reduce((f,h)=>(f[h]=Ci(De(()=>{hs(n);const g=n._s.get(e);return o[h].call(g,g)})),f),{}))}return c=nl(e,l,t,n,r,!0),c}function nl(e,t,n={},r,s,i){let o;const a=Nt({actions:{}},n),c={deep:!0};let l,u,f=[],h=[],g;const I=r.state.value[e];!i&&!I&&(r.state.value[e]={});let w;function M(G){let A;l=u=!1,typeof G=="function"?(G(r.state.value[e]),A={type:qn.patchFunction,storeId:e,events:g}):(ri(r.state.value[e],G),A={type:qn.patchObject,payload:G,storeId:e,events:g});const $=w=Symbol();as().then(()=>{w===$&&(l=!0)}),u=!0,un(f,A,r.state.value[e])}const x=i?function(){const{state:A}=n,$=A?A():{};this.$patch(Q=>{Nt(Q,$)})}:tl;function T(){o.stop(),f=[],h=[],r._s.delete(e)}const k=(G,A="")=>{if(Ho in G)return G[Ds]=A,G;const $=function(){hs(r);const Q=Array.from(arguments),N=[],J=[];function pe(z){N.push(z)}function Ie(z){J.push(z)}un(h,{args:Q,name:$[Ds],store:V,after:pe,onError:Ie});let oe;try{oe=G.apply(this&&this.$id===e?this:V,Q)}catch(z){throw un(J,z),z}return oe instanceof Promise?oe.then(z=>(un(N,z),z)).catch(z=>(un(J,z),Promise.reject(z))):(un(N,oe),oe)};return $[Ho]=!0,$[Ds]=A,$},O={_p:r,$id:e,$onAction:Bo.bind(null,h),$patch:M,$reset:x,$subscribe(G,A={}){const $=Bo(f,G,A.detached,()=>Q()),Q=o.run(()=>$n(()=>r.state.value[e],N=>{(A.flush==="sync"?u:l)&&G({storeId:e,type:qn.direct,events:g},N)},Nt({},c,A)));return $},$dispose:T},V=dr(O);r._s.set(e,V);const q=(r._a&&r._a.runWithContext||Xd)(()=>r._e.run(()=>(o=Wa()).run(()=>t({action:k}))));for(const G in q){const A=q[G];if(fe(A)&&!eh(A)||ot(A))i||(I&&Zd(A)&&(fe(A)?A.value=I[G]:ri(A,I[G])),r.state.value[e][G]=A);else if(typeof A=="function"){const $=k(A,G);q[G]=$,a.actions[G]=A}}return Nt(V,q),Nt(X(V),q),Object.defineProperty(V,"$state",{get:()=>r.state.value[e],set:G=>{M(A=>{Nt(A,G)})}}),r._p.forEach(G=>{Nt(V,o.run(()=>G({store:V,app:r._a,pinia:r,options:a})))}),I&&i&&n.hydrate&&n.hydrate(V.$state,I),l=!0,u=!0,V}/*! #__NO_SIDE_EFFECTS__ */function wv(e,t,n){let r,s;const i=typeof t=="function";r=e,s=i?n:t;function o(a,c){const l=sf();return a=a||(l?He(el,null):null),a&&hs(a),a=Zc,a._s.has(r)||(i?nl(r,t,s,a):th(r,s,a)),a._s.get(r)}return o.$id=r,o}function Sv(e){{const t=X(e),n={};for(const r in t){const s=t[r];s.effect?n[r]=De({get:()=>e[r],set(i){e[r]=i}}):(fe(s)||ot(s))&&(n[r]=Ju(e,r))}return n}}const nh=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},rh={class:"app-root"},sh={__name:"App",setup(e){return(t,n)=>{const r=Sf("router-view");return Kc(),ed("div",rh,[Ne(r)])}}},ih=nh(sh,[["__scopeId","data-v-327732a5"]]),oh="modulepreload",ah=function(e){return"/WatchingSecretly/"+e},Vo={},fn=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=ah(c),c in Vo)return;Vo[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":oh,l||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((h,g)=>{f.addEventListener("load",h),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const hn=typeof document<"u";function rl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ch(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&rl(e.default)}const re=Object.assign;function Ls(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ge(s)?s.map(e):e(s)}return n}const Jn=()=>{},Ge=Array.isArray;function jo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const sl=/#/g,lh=/&/g,uh=/\//g,fh=/=/g,dh=/\?/g,il=/\+/g,hh=/%5B/g,ph=/%5D/g,ol=/%5E/g,gh=/%60/g,al=/%7B/g,mh=/%7C/g,cl=/%7D/g,_h=/%20/g;function xi(e){return e==null?"":encodeURI(""+e).replace(mh,"|").replace(hh,"[").replace(ph,"]")}function vh(e){return xi(e).replace(al,"{").replace(cl,"}").replace(ol,"^")}function si(e){return xi(e).replace(il,"%2B").replace(_h,"+").replace(sl,"%23").replace(lh,"%26").replace(gh,"`").replace(al,"{").replace(cl,"}").replace(ol,"^")}function yh(e){return si(e).replace(fh,"%3D")}function bh(e){return xi(e).replace(sl,"%23").replace(dh,"%3F")}function Eh(e){return bh(e).replace(uh,"%2F")}function ir(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Ih=/\/$/,wh=e=>e.replace(Ih,"");function xs(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=t.slice(0,c),i=t.slice(c,a>0?a:t.length),s=e(i.slice(1))),a>=0&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Ah(r??t,n),{fullPath:r+i+o,path:r,query:s,hash:ir(o)}}function Sh(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function $o(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Th(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Sn(t.matched[r],n.matched[s])&&ll(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Sn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ll(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Ch(e[n],t[n]))return!1;return!0}function Ch(e,t){return Ge(e)?Wo(e,t):Ge(t)?Wo(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Wo(e,t){return Ge(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ah(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ii=function(e){return e.pop="pop",e.push="push",e}({}),Ms=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function Rh(e){if(!e)if(hn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),wh(e)}const Ph=/^[^#]+#/;function Oh(e,t){return e.replace(Ph,"#")+t}function Nh(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ps=()=>({left:window.scrollX,top:window.scrollY});function kh(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Nh(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ko(e,t){return(history.state?history.state.position-t:-1)+e}const oi=new Map;function Dh(e,t){oi.set(e,t)}function Lh(e){const t=oi.get(e);return oi.delete(e),t}function xh(e){return typeof e=="string"||e&&typeof e=="object"}function ul(e){return typeof e=="string"||typeof e=="symbol"}let he=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const fl=Symbol("");he.MATCHER_NOT_FOUND+"",he.NAVIGATION_GUARD_REDIRECT+"",he.NAVIGATION_ABORTED+"",he.NAVIGATION_CANCELLED+"",he.NAVIGATION_DUPLICATED+"";function Tn(e,t){return re(new Error,{type:e,[fl]:!0},t)}function ht(e,t){return e instanceof Error&&fl in e&&(t==null||!!(e.type&t))}const Mh=["params","query","hash"];function Uh(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Mh)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Fh(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(il," "),i=s.indexOf("="),o=ir(i<0?s:s.slice(0,i)),a=i<0?null:ir(s.slice(i+1));if(o in t){let c=t[o];Ge(c)||(c=t[o]=[c]),c.push(a)}else t[o]=a}return t}function Go(e){let t="";for(let n in e){const r=e[n];if(n=yh(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ge(r)?r.map(s=>s&&si(s)):[r&&si(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Bh(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ge(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Hh=Symbol(""),zo=Symbol(""),gs=Symbol(""),Mi=Symbol(""),ai=Symbol("");function xn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Dt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(Tn(he.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?c(h):xh(h)?c(Tn(he.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(h=>c(h))})}function Us(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(rl(c)){const l=(c.__vccOpts||c)[t];l&&i.push(Dt(l,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=ch(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[t];return h&&Dt(h,n,r,o,a,s)()}))}}return i}function Vh(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>Sn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Sn(l,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let jh=()=>location.protocol+"//"+location.host;function dl(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let o=s.includes(e.slice(i))?e.slice(i).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),$o(a,"")}return $o(n,e)+r+s}function $h(e,t,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=dl(e,location),I=n.value,w=t.value;let M=0;if(h){if(n.value=g,t.value=h,o&&o===I){o=null;return}M=w?h.position-w.position:0}else r(g);s.forEach(x=>{x(n.value,I,{delta:M,type:ii.pop,direction:M?M>0?Ms.forward:Ms.back:Ms.unknown})})};function c(){o=n.value}function l(h){s.push(h);const g=()=>{const I=s.indexOf(h);I>-1&&s.splice(I,1)};return i.push(g),g}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(re({},h.state,{scroll:ps()}),"")}}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:l,destroy:f}}function qo(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ps():null}}function Wh(e){const{history:t,location:n}=window,r={value:dl(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:jh()+e+c;try{t[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){i(c,re({},t.state,qo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position}),!0),r.value=c}function a(c,l){const u=re({},s.value,t.state,{forward:c,scroll:ps()});i(u.current,u,!0),i(c,re({},qo(r.value,c,null),{position:u.position+1},l),!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Kh(e){e=Rh(e);const t=Wh(e),n=$h(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:e,go:r,createHref:Oh.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Gh(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Kh(e)}let Zt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var me=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(me||{});const zh={type:Zt.Static,value:""},qh=/[a-zA-Z0-9_]/;function Jh(e){if(!e)return[[]];if(e==="/")return[[zh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=me.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===me.Static?i.push({type:Zt.Static,value:l}):n===me.Param||n===me.ParamRegExp||n===me.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Zt.Param,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==me.ParamRegExp){r=n,n=me.EscapeNext;continue}switch(n){case me.Static:c==="/"?(l&&f(),o()):c===":"?(f(),n=me.Param):h();break;case me.EscapeNext:h(),n=r;break;case me.Param:c==="("?n=me.ParamRegExp:qh.test(c)?h():(f(),n=me.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case me.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=me.ParamRegExpEnd:u+=c;break;case me.ParamRegExpEnd:f(),n=me.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===me.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}const Jo="[^/]+?",Yh={sensitive:!1,strict:!1,start:!0,end:!0};var Se=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Se||{});const Xh=/[.+*?^${}()[\]/\\]/g;function Qh(e,t){const n=re({},Yh,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[Se.Root];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let g=Se.Segment+(n.sensitive?Se.BonusCaseSensitive:0);if(h.type===Zt.Static)f||(s+="/"),s+=h.value.replace(Xh,"\\$&"),g+=Se.Static;else if(h.type===Zt.Param){const{value:I,repeatable:w,optional:M,regexp:x}=h;i.push({name:I,repeatable:w,optional:M});const T=x||Jo;if(T!==Jo){g+=Se.BonusCustomRegExp;try{`${T}`}catch(O){throw new Error(`Invalid custom RegExp for param "${I}" (${T}): `+O.message)}}let k=w?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;f||(k=M&&l.length<2?`(?:/${k})`:"/"+k),M&&(k+="?"),s+=k,g+=Se.Dynamic,M&&(g+=Se.BonusOptional),w&&(g+=Se.BonusRepeatable),T===".*"&&(g+=Se.BonusWildcard)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=Se.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",I=i[h-1];f[I.name]=g&&I.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===Zt.Static)u+=g.value;else if(g.type===Zt.Param){const{value:I,repeatable:w,optional:M}=g,x=I in l?l[I]:"";if(Ge(x)&&!w)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const T=Ge(x)?x.join("/"):x;if(!T)if(M)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);u+=T}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Zh(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Se.Static+Se.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Se.Static+Se.Segment?1:-1:0}function hl(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Zh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Yo(r))return 1;if(Yo(s))return-1}return s.length-r.length}function Yo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ep={strict:!1,end:!0,sensitive:!1};function tp(e,t,n){const r=Qh(Jh(e.path),n),s=re(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function np(e,t){const n=[],r=new Map;t=jo(ep,t);function s(f){return r.get(f)}function i(f,h,g){const I=!g,w=Qo(f);w.aliasOf=g&&g.record;const M=jo(t,f),x=[w];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const V of O)x.push(Qo(re({},w,{components:g?g.record.components:w.components,path:V,aliasOf:g?g.record:w})))}let T,k;for(const O of x){const{path:V}=O;if(h&&V[0]!=="/"){const ee=h.record.path,q=ee[ee.length-1]==="/"?"":"/";O.path=h.record.path+(V&&q+V)}if(T=tp(O,h,M),g?g.alias.push(T):(k=k||T,k!==T&&k.alias.push(T),I&&f.name&&!Zo(T)&&o(f.name)),pl(T)&&c(T),w.children){const ee=w.children;for(let q=0;q<ee.length;q++)i(ee[q],T,g&&g.children[q])}g=g||T}return k?()=>{o(k)}:Jn}function o(f){if(ul(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const h=ip(f,n);n.splice(h,0,f),f.record.name&&!Zo(f)&&r.set(f.record.name,f)}function l(f,h){let g,I={},w,M;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Tn(he.MATCHER_NOT_FOUND,{location:f});M=g.record.name,I=re(Xo(h.params,g.keys.filter(k=>!k.optional).concat(g.parent?g.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),f.params&&Xo(f.params,g.keys.map(k=>k.name))),w=g.stringify(I)}else if(f.path!=null)w=f.path,g=n.find(k=>k.re.test(w)),g&&(I=g.parse(w),M=g.record.name);else{if(g=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!g)throw Tn(he.MATCHER_NOT_FOUND,{location:f,currentLocation:h});M=g.record.name,I=re({},h.params,f.params),w=g.stringify(I)}const x=[];let T=g;for(;T;)x.unshift(T.record),T=T.parent;return{name:M,path:w,params:I,matched:x,meta:sp(x)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Xo(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Qo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:rp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function rp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Zo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sp(e){return e.reduce((t,n)=>re(t,n.meta),{})}function ip(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;hl(e,t[i])<0?r=i:n=i+1}const s=op(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function op(e){let t=e;for(;t=t.parent;)if(pl(t)&&hl(e,t)===0)return t}function pl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ea(e){const t=He(gs),n=He(Mi),r=De(()=>{const c=tn(e.to);return t.resolve(c)}),s=De(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Sn.bind(null,u));if(h>-1)return h;const g=ta(c[l-2]);return l>1&&ta(u)===g&&f[f.length-1].path!==g?f.findIndex(Sn.bind(null,c[l-2])):h}),i=De(()=>s.value>-1&&fp(n.params,r.value.params)),o=De(()=>s.value>-1&&s.value===n.matched.length-1&&ll(n.params,r.value.params));function a(c={}){if(up(c)){const l=t[tn(e.replace)?"replace":"push"](tn(e.to)).catch(Jn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:De(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function ap(e){return e.length===1?e[0]:e}const cp=Ic({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ea,setup(e,{slots:t}){const n=dr(ea(e)),{options:r}=He(gs),s=De(()=>({[na(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[na(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&ap(t.default(n));return e.custom?i:Li("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),lp=cp;function up(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function fp(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ge(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function ta(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const na=(e,t,n)=>e??t??n,dp=Ic({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=He(ai),s=De(()=>e.route||r.value),i=He(zo,0),o=De(()=>{let l=tn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=De(()=>s.value.matched[o.value]);Cr(zo,De(()=>o.value+1)),Cr(Hh,a),Cr(ai,s);const c=Ai();return $n(()=>[c.value,a.value,e.name],([l,u,f],[h,g,I])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Sn(u,g)||!h)&&(u.enterCallbacks[f]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,h=f&&f.components[u];if(!h)return ra(n.default,{Component:h,route:l});const g=f.props[u],I=g?g===!0?l.params:typeof g=="function"?g(l):g:null,M=Li(h,re({},I,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return ra(n.default,{Component:M,route:l})||M}}});function ra(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const hp=dp;function pp(e){const t=np(e.routes,e),n=e.parseQuery||Fh,r=e.stringifyQuery||Go,s=e.history,i=xn(),o=xn(),a=xn(),c=$u(Pt);let l=Pt;hn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ls.bind(null,y=>""+y),f=Ls.bind(null,Eh),h=Ls.bind(null,ir);function g(y,L){let P,U;return ul(y)?(P=t.getRecordMatcher(y),U=L):U=y,t.addRoute(U,P)}function I(y){const L=t.getRecordMatcher(y);L&&t.removeRoute(L)}function w(){return t.getRoutes().map(y=>y.record)}function M(y){return!!t.getRecordMatcher(y)}function x(y,L){if(L=re({},L||c.value),typeof y=="string"){const m=xs(n,y,L.path),v=t.resolve({path:m.path},L),b=s.createHref(m.fullPath);return re(m,v,{params:h(v.params),hash:ir(m.hash),redirectedFrom:void 0,href:b})}let P;if(y.path!=null)P=re({},y,{path:xs(n,y.path,L.path).path});else{const m=re({},y.params);for(const v in m)m[v]==null&&delete m[v];P=re({},y,{params:f(m)}),L.params=f(L.params)}const U=t.resolve(P,L),Y=y.hash||"";U.params=u(h(U.params));const d=Sh(r,re({},y,{hash:vh(Y),path:U.path})),p=s.createHref(d);return re({fullPath:d,hash:Y,query:r===Go?Bh(y.query):y.query||{}},U,{redirectedFrom:void 0,href:p})}function T(y){return typeof y=="string"?xs(n,y,c.value.path):re({},y)}function k(y,L){if(l!==y)return Tn(he.NAVIGATION_CANCELLED,{from:L,to:y})}function O(y){return q(y)}function V(y){return O(re(T(y),{replace:!0}))}function ee(y,L){const P=y.matched[y.matched.length-1];if(P&&P.redirect){const{redirect:U}=P;let Y=typeof U=="function"?U(y,L):U;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=T(Y):{path:Y},Y.params={}),re({query:y.query,hash:y.hash,params:Y.path!=null?{}:y.params},Y)}}function q(y,L){const P=l=x(y),U=c.value,Y=y.state,d=y.force,p=y.replace===!0,m=ee(P,U);if(m)return q(re(T(m),{state:typeof m=="object"?re({},Y,m.state):Y,force:d,replace:p}),L||P);const v=P;v.redirectedFrom=L;let b;return!d&&Th(r,U,P)&&(b=Tn(he.NAVIGATION_DUPLICATED,{to:v,from:U}),qe(U,U,!0,!1)),(b?Promise.resolve(b):$(v,U)).catch(_=>ht(_)?ht(_,he.NAVIGATION_GUARD_REDIRECT)?_:At(_):ne(_,v,U)).then(_=>{if(_){if(ht(_,he.NAVIGATION_GUARD_REDIRECT))return q(re({replace:p},T(_.to),{state:typeof _.to=="object"?re({},Y,_.to.state):Y,force:d}),L||v)}else _=N(v,U,!0,p,Y);return Q(v,U,_),_})}function G(y,L){const P=k(y,L);return P?Promise.reject(P):Promise.resolve()}function A(y){const L=cn.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(y):y()}function $(y,L){let P;const[U,Y,d]=Vh(y,L);P=Us(U.reverse(),"beforeRouteLeave",y,L);for(const m of U)m.leaveGuards.forEach(v=>{P.push(Dt(v,y,L))});const p=G.bind(null,y,L);return P.push(p),Ue(P).then(()=>{P=[];for(const m of i.list())P.push(Dt(m,y,L));return P.push(p),Ue(P)}).then(()=>{P=Us(Y,"beforeRouteUpdate",y,L);for(const m of Y)m.updateGuards.forEach(v=>{P.push(Dt(v,y,L))});return P.push(p),Ue(P)}).then(()=>{P=[];for(const m of d)if(m.beforeEnter)if(Ge(m.beforeEnter))for(const v of m.beforeEnter)P.push(Dt(v,y,L));else P.push(Dt(m.beforeEnter,y,L));return P.push(p),Ue(P)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),P=Us(d,"beforeRouteEnter",y,L,A),P.push(p),Ue(P))).then(()=>{P=[];for(const m of o.list())P.push(Dt(m,y,L));return P.push(p),Ue(P)}).catch(m=>ht(m,he.NAVIGATION_CANCELLED)?m:Promise.reject(m))}function Q(y,L,P){a.list().forEach(U=>A(()=>U(y,L,P)))}function N(y,L,P,U,Y){const d=k(y,L);if(d)return d;const p=L===Pt,m=hn?history.state:{};P&&(U||p?s.replace(y.fullPath,re({scroll:p&&m&&m.scroll},Y)):s.push(y.fullPath,Y)),c.value=y,qe(y,L,P,p),At()}let J;function pe(){J||(J=s.listen((y,L,P)=>{if(!Wt.listening)return;const U=x(y),Y=ee(U,Wt.currentRoute.value);if(Y){q(re(Y,{replace:!0,force:!0}),U).catch(Jn);return}l=U;const d=c.value;hn&&Dh(Ko(d.fullPath,P.delta),ps()),$(U,d).catch(p=>ht(p,he.NAVIGATION_ABORTED|he.NAVIGATION_CANCELLED)?p:ht(p,he.NAVIGATION_GUARD_REDIRECT)?(q(re(T(p.to),{force:!0}),U).then(m=>{ht(m,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&!P.delta&&P.type===ii.pop&&s.go(-1,!1)}).catch(Jn),Promise.reject()):(P.delta&&s.go(-P.delta,!1),ne(p,U,d))).then(p=>{p=p||N(U,d,!1),p&&(P.delta&&!ht(p,he.NAVIGATION_CANCELLED)?s.go(-P.delta,!1):P.type===ii.pop&&ht(p,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),Q(U,d,p)}).catch(Jn)}))}let Ie=xn(),oe=xn(),z;function ne(y,L,P){At(y);const U=oe.list();return U.length?U.forEach(Y=>Y(y,L,P)):console.error(y),Promise.reject(y)}function ut(){return z&&c.value!==Pt?Promise.resolve():new Promise((y,L)=>{Ie.add([y,L])})}function At(y){return z||(z=!y,pe(),Ie.list().forEach(([L,P])=>y?P(y):L()),Ie.reset()),y}function qe(y,L,P,U){const{scrollBehavior:Y}=e;if(!hn||!Y)return Promise.resolve();const d=!P&&Lh(Ko(y.fullPath,0))||(U||!P)&&history.state&&history.state.scroll||null;return as().then(()=>Y(y,L,d)).then(p=>p&&kh(p)).catch(p=>ne(p,y,L))}const Pe=y=>s.go(y);let an;const cn=new Set,Wt={currentRoute:c,listening:!0,addRoute:g,removeRoute:I,clearRoutes:t.clearRoutes,hasRoute:M,getRoutes:w,resolve:x,options:e,push:O,replace:V,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:oe.add,isReady:ut,install(y){y.component("RouterLink",lp),y.component("RouterView",hp),y.config.globalProperties.$router=Wt,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>tn(c)}),hn&&!an&&c.value===Pt&&(an=!0,O(s.location).catch(U=>{}));const L={};for(const U in Pt)Object.defineProperty(L,U,{get:()=>c.value[U],enumerable:!0});y.provide(gs,Wt),y.provide(Mi,oc(L)),y.provide(ai,c);const P=y.unmount;cn.add(y),y.unmount=function(){cn.delete(y),cn.size<1&&(l=Pt,J&&J(),J=null,c.value=Pt,an=!1,z=!1),P()}}};function Ue(y){return y.reduce((L,P)=>L.then(()=>A(P)),Promise.resolve())}return Wt}function Tv(){return He(gs)}function Cv(e){return He(Mi)}const gp=()=>{};var sa={};/**
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
 */const gl=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},mp=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},ml={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),r.push(n[u],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(gl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):mp(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new _p;const h=i<<2|a>>4;if(r.push(h),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const I=l<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class _p extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vp=function(e){const t=gl(e);return ml.encodeByteArray(t,!0)},_l=function(e){return vp(e).replace(/\./g,"")},vl=function(e){try{return ml.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function yp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bp=()=>yp().__FIREBASE_DEFAULTS__,Ep=()=>{if(typeof process>"u"||typeof sa>"u")return;const e=sa.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ip=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&vl(e[1]);return t&&JSON.parse(t)},Ui=()=>{try{return gp()||bp()||Ep()||Ip()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},wp=e=>{var t,n;return(n=(t=Ui())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},yl=()=>{var e;return(e=Ui())===null||e===void 0?void 0:e.config},bl=e=>{var t;return(t=Ui())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Sp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ms(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Tp(e){return(await fetch(e,{credentials:"include"})).ok}const Yn={};function Cp(){const e={prod:[],emulator:[]};for(const t of Object.keys(Yn))Yn[t]?e.emulator.push(t):e.prod.push(t);return e}function Ap(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let ia=!1;function Rp(e,t){if(typeof window>"u"||typeof document>"u"||!ms(window.location.host)||Yn[e]===t||Yn[e]||ia)return;Yn[e]=t;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",i=Cp().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,g){h.setAttribute("width","24"),h.setAttribute("id",g),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function l(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{ia=!0,o()},h}function u(h,g){h.setAttribute("id",g),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function f(){const h=Ap(r),g=n("text"),I=document.getElementById(g)||document.createElement("span"),w=n("learnmore"),M=document.getElementById(w)||document.createElement("a"),x=n("preprendIcon"),T=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const k=h.element;a(k),u(M,w);const O=l();c(T,x),k.append(T,I,M,O),document.body.appendChild(k)}i?(I.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(T.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Op(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Np(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function kp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dp(){const e=Re();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Lp(){try{return typeof indexedDB=="object"}catch{return!1}}function xp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Mp="FirebaseError";class jt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Mp,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gr.prototype.create)}}class gr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Up(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new jt(s,a,r)}}function Up(e,t){return e.replace(Fp,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Fp=/\{\$([^}]+)}/g;function Bp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Cn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(oa(i)&&oa(o)){if(!Cn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function oa(e){return e!==null&&typeof e=="object"}/**
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
 */function mr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Fn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function Bn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Hp(e,t){const n=new Vp(e,t);return n.subscribe.bind(n)}class Vp{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jp(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Fs),s.error===void 0&&(s.error=Fs),s.complete===void 0&&(s.complete=Fs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jp(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Fs(){}/**
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
 */function Ct(e){return e&&e._delegate?e._delegate:e}class An{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class $p{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Sp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Kp(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wp(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wp(e){return e===Yt?void 0:e}function Kp(e){return e.instantiationMode==="EAGER"}/**
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
 */class Gp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new $p(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ce||(ce={}));const zp={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},qp=ce.INFO,Jp={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Yp=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Jp[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class El{constructor(t){this.name=t,this._logLevel=qp,this._logHandler=Yp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ce))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...t),this._logHandler(this,ce.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...t),this._logHandler(this,ce.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...t),this._logHandler(this,ce.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...t),this._logHandler(this,ce.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...t),this._logHandler(this,ce.ERROR,...t)}}const Xp=(e,t)=>t.some(n=>e instanceof n);let aa,ca;function Qp(){return aa||(aa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zp(){return ca||(ca=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Il=new WeakMap,ci=new WeakMap,wl=new WeakMap,Bs=new WeakMap,Fi=new WeakMap;function eg(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ft(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Il.set(n,e)}).catch(()=>{}),Fi.set(t,e),t}function tg(e){if(ci.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ci.set(e,t)}let li={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ci.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ng(e){li=e(li)}function rg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Hs(this),t,...n);return wl.set(r,t.sort?t.sort():[t]),Ft(r)}:Zp().includes(e)?function(...t){return e.apply(Hs(this),t),Ft(Il.get(this))}:function(...t){return Ft(e.apply(Hs(this),t))}}function sg(e){return typeof e=="function"?rg(e):(e instanceof IDBTransaction&&tg(e),Xp(e,Qp())?new Proxy(e,li):e)}function Ft(e){if(e instanceof IDBRequest)return eg(e);if(Bs.has(e))return Bs.get(e);const t=sg(e);return t!==e&&(Bs.set(e,t),Fi.set(t,e)),t}const Hs=e=>Fi.get(e);function ig(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Ft(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ft(o.result),c.oldVersion,c.newVersion,Ft(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const og=["get","getKey","getAll","getAllKeys","count"],ag=["put","add","delete","clear"],Vs=new Map;function la(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Vs.get(t))return Vs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=ag.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||og.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Vs.set(t,i),i}ng(e=>({...e,get:(t,n,r)=>la(t,n)||e.get(t,n,r),has:(t,n)=>!!la(t,n)||e.has(t,n)}));/**
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
 */class cg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lg(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ui="@firebase/app",ua="0.13.2";/**
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
 */const wt=new El("@firebase/app"),ug="@firebase/app-compat",fg="@firebase/analytics-compat",dg="@firebase/analytics",hg="@firebase/app-check-compat",pg="@firebase/app-check",gg="@firebase/auth",mg="@firebase/auth-compat",_g="@firebase/database",vg="@firebase/data-connect",yg="@firebase/database-compat",bg="@firebase/functions",Eg="@firebase/functions-compat",Ig="@firebase/installations",wg="@firebase/installations-compat",Sg="@firebase/messaging",Tg="@firebase/messaging-compat",Cg="@firebase/performance",Ag="@firebase/performance-compat",Rg="@firebase/remote-config",Pg="@firebase/remote-config-compat",Og="@firebase/storage",Ng="@firebase/storage-compat",kg="@firebase/firestore",Dg="@firebase/ai",Lg="@firebase/firestore-compat",xg="firebase",Mg="11.10.0";/**
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
 */const fi="[DEFAULT]",Ug={[ui]:"fire-core",[ug]:"fire-core-compat",[dg]:"fire-analytics",[fg]:"fire-analytics-compat",[pg]:"fire-app-check",[hg]:"fire-app-check-compat",[gg]:"fire-auth",[mg]:"fire-auth-compat",[_g]:"fire-rtdb",[vg]:"fire-data-connect",[yg]:"fire-rtdb-compat",[bg]:"fire-fn",[Eg]:"fire-fn-compat",[Ig]:"fire-iid",[wg]:"fire-iid-compat",[Sg]:"fire-fcm",[Tg]:"fire-fcm-compat",[Cg]:"fire-perf",[Ag]:"fire-perf-compat",[Rg]:"fire-rc",[Pg]:"fire-rc-compat",[Og]:"fire-gcs",[Ng]:"fire-gcs-compat",[kg]:"fire-fst",[Lg]:"fire-fst-compat",[Dg]:"fire-vertex","fire-js":"fire-js",[xg]:"fire-js-all"};/**
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
 */const $r=new Map,Fg=new Map,di=new Map;function fa(e,t){try{e.container.addComponent(t)}catch(n){wt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function or(e){const t=e.name;if(di.has(t))return wt.debug(`There were multiple attempts to register component ${t}.`),!1;di.set(t,e);for(const n of $r.values())fa(n,e);for(const n of Fg.values())fa(n,e);return!0}function Sl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function st(e){return e==null?!1:e.settings!==void 0}/**
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
 */const Bg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bt=new gr("app","Firebase",Bg);/**
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
 */class Hg{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
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
 */const _r=Mg;function Tl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:fi,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Bt.create("bad-app-name",{appName:String(s)});if(n||(n=yl()),!n)throw Bt.create("no-options");const i=$r.get(s);if(i){if(Cn(n,i.options)&&Cn(r,i.config))return i;throw Bt.create("duplicate-app",{appName:s})}const o=new Gp(s);for(const c of di.values())o.addComponent(c);const a=new Hg(n,r,o);return $r.set(s,a),a}function Vg(e=fi){const t=$r.get(e);if(!t&&e===fi&&yl())return Tl();if(!t)throw Bt.create("no-app",{appName:e});return t}function yn(e,t,n){var r;let s=(r=Ug[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),wt.warn(a.join(" "));return}or(new An(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const jg="firebase-heartbeat-database",$g=1,ar="firebase-heartbeat-store";let js=null;function Cl(){return js||(js=ig(jg,$g,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ar)}catch(n){console.warn(n)}}}}).catch(e=>{throw Bt.create("idb-open",{originalErrorMessage:e.message})})),js}async function Wg(e){try{const n=(await Cl()).transaction(ar),r=await n.objectStore(ar).get(Al(e));return await n.done,r}catch(t){if(t instanceof jt)wt.warn(t.message);else{const n=Bt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});wt.warn(n.message)}}}async function da(e,t){try{const r=(await Cl()).transaction(ar,"readwrite");await r.objectStore(ar).put(t,Al(e)),await r.done}catch(n){if(n instanceof jt)wt.warn(n.message);else{const r=Bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wt.warn(r.message)}}}function Al(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Kg=1024,Gg=30;class zg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ha();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Gg){const o=Yg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ha(),{heartbeatsToSend:r,unsentEntries:s}=qg(this._heartbeatsCache.heartbeats),i=_l(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return wt.warn(n),""}}}function ha(){return new Date().toISOString().substring(0,10)}function qg(e,t=Kg){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pa(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pa(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lp()?xp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Wg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return da(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return da(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function pa(e){return _l(JSON.stringify({version:2,heartbeats:e})).length}function Yg(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function Xg(e){or(new An("platform-logger",t=>new cg(t),"PRIVATE")),or(new An("heartbeat",t=>new zg(t),"PRIVATE")),yn(ui,ua,e),yn(ui,ua,"esm2017"),yn("fire-js","")}Xg("");var Qg="firebase",Zg="11.10.0";/**
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
 */yn(Qg,Zg,"app");function Bi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Rl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const em=Rl,Pl=new gr("auth","Firebase",Rl());/**
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
 */const Wr=new El("@firebase/auth");function tm(e,...t){Wr.logLevel<=ce.WARN&&Wr.warn(`Auth (${_r}): ${e}`,...t)}function Rr(e,...t){Wr.logLevel<=ce.ERROR&&Wr.error(`Auth (${_r}): ${e}`,...t)}/**
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
 */function ze(e,...t){throw Hi(e,...t)}function at(e,...t){return Hi(e,...t)}function Ol(e,t,n){const r=Object.assign(Object.assign({},em()),{[t]:n});return new gr("auth","Firebase",r).create(t,{appName:e.name})}function Ht(e){return Ol(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hi(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Pl.create(e,...t)}function j(e,t,...n){if(!e)throw Hi(t,...n)}function vt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Rr(t),new Error(t)}function St(e,t){e||vt(t)}/**
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
 */function hi(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function nm(){return ga()==="http:"||ga()==="https:"}function ga(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function rm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nm()||Np()||"connection"in navigator)?navigator.onLine:!0}function sm(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class vr{constructor(t,n){this.shortDelay=t,this.longDelay=n,St(n>t,"Short delay should be less than long delay!"),this.isMobile=Pp()||kp()}get(){return rm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vi(e,t){St(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Nl{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const im={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const om=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],am=new vr(3e4,6e4);function on(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $t(e,t,n,r,s={}){return kl(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=mr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:c},i);return Op()||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&ms(e.emulatorConfig.host)&&(l.credentials="include"),Nl.fetch()(await Dl(e,e.config.apiHost,n,a),l)})}async function kl(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},im),t);try{const s=new lm(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Sr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Sr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Sr(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ol(e,u,l);ze(e,u)}}catch(s){if(s instanceof jt)throw s;ze(e,"network-request-failed",{message:String(s)})}}async function _s(e,t,n,r,s={}){const i=await $t(e,t,n,r,s);return"mfaPendingCredential"in i&&ze(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function Dl(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?Vi(e.config,s):`${e.config.apiScheme}://${s}`;return om.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function cm(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),am.get())})}}function Sr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=at(e,t,r);return s.customData._tokenResponse=n,s}function ma(e){return e!==void 0&&e.enterprise!==void 0}class um{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return cm(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fm(e,t){return $t(e,"GET","/v2/recaptchaConfig",on(e,t))}/**
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
 */async function dm(e,t){return $t(e,"POST","/v1/accounts:delete",t)}async function Kr(e,t){return $t(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Xn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function hm(e,t=!1){const n=Ct(e),r=await n.getIdToken(t),s=ji(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xn($s(s.auth_time)),issuedAtTime:Xn($s(s.iat)),expirationTime:Xn($s(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $s(e){return Number(e)*1e3}function ji(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=vl(n);return s?JSON.parse(s):(Rr("Failed to decode base64 JWT payload"),null)}catch(s){return Rr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _a(e){const t=ji(e);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function cr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof jt&&pm(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function pm({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class gm{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pi{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xn(this.lastLoginAt),this.creationTime=Xn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await cr(e,Kr(n,{idToken:r}));j(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Ll(i.providerUserInfo):[],a=_m(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new pi(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function mm(e){const t=Ct(e);await Gr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _m(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Ll(e){return e.map(t=>{var{providerId:n}=t,r=Bi(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function vm(e,t){const n=await kl(e,{},async()=>{const r=mr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=await Dl(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return e.emulatorConfig&&ms(e.emulatorConfig.host)&&(c.credentials="include"),Nl.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ym(e,t){return $t(e,"POST","/v2/accounts:revokeToken",on(e,t))}/**
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
 */class bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):_a(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){j(t.length!==0,"internal-error");const n=_a(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vm(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new bn;return r&&(j(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new bn,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
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
 */function Ot(e,t){j(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class $e{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Bi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await cr(this,this.stsTokenManager.getToken(this.auth,t));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return hm(this,t)}reload(){return mm(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new $e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Gr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject(Ht(this.auth));const t=await this.getIdToken();return await cr(this,dm(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,T=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:O,isAnonymous:V,providerData:ee,stsTokenManager:q}=n;j(k&&q,t,"internal-error");const G=bn.fromJSON(this.name,q);j(typeof k=="string",t,"internal-error"),Ot(f,t.name),Ot(h,t.name),j(typeof O=="boolean",t,"internal-error"),j(typeof V=="boolean",t,"internal-error"),Ot(g,t.name),Ot(I,t.name),Ot(w,t.name),Ot(M,t.name),Ot(x,t.name),Ot(T,t.name);const A=new $e({uid:k,auth:t,email:h,emailVerified:O,displayName:f,isAnonymous:V,photoURL:I,phoneNumber:g,tenantId:w,stsTokenManager:G,createdAt:x,lastLoginAt:T});return ee&&Array.isArray(ee)&&(A.providerData=ee.map($=>Object.assign({},$))),M&&(A._redirectEventId=M),A}static async _fromIdTokenResponse(t,n,r=!1){const s=new bn;s.updateFromServerResponse(n);const i=new $e({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Gr(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ll(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new bn;a.updateFromIdToken(r);const c=new $e({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const va=new Map;function yt(e){St(e instanceof Function,"Expected a class definition");let t=va.get(e);return t?(St(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,va.set(e,t),t)}/**
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
 */class xl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}xl.type="NONE";const ya=xl;/**
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
 */function Pr(e,t,n){return`firebase:${e}:${t}:${n}`}class En{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Pr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Pr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Kr(this.auth,{idToken:t}).catch(()=>{});return n?$e._fromGetAccountInfoResponse(this.auth,n,t):null}return $e._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new En(yt(ya),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||yt(ya);const o=Pr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const h=await Kr(t,{idToken:u}).catch(()=>{});if(!h)break;f=await $e._fromGetAccountInfoResponse(t,h,u)}else f=$e._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new En(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new En(i,t,r))}}/**
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
 */function ba(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Bl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ml(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Vl(t))return"Blackberry";if(jl(t))return"Webos";if(Ul(t))return"Safari";if((t.includes("chrome/")||Fl(t))&&!t.includes("edge/"))return"Chrome";if(Hl(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ml(e=Re()){return/firefox\//i.test(e)}function Ul(e=Re()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Fl(e=Re()){return/crios\//i.test(e)}function Bl(e=Re()){return/iemobile/i.test(e)}function Hl(e=Re()){return/android/i.test(e)}function Vl(e=Re()){return/blackberry/i.test(e)}function jl(e=Re()){return/webos/i.test(e)}function $i(e=Re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function bm(e=Re()){var t;return $i(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Em(){return Dp()&&document.documentMode===10}function $l(e=Re()){return $i(e)||Hl(e)||jl(e)||Vl(e)||/windows phone/i.test(e)||Bl(e)}/**
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
 */function Wl(e,t=[]){let n;switch(e){case"Browser":n=ba(Re());break;case"Worker":n=`${ba(Re())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${_r}/${r}`}/**
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
 */class Im{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wm(e,t={}){return $t(e,"GET","/v2/passwordPolicy",on(e,t))}/**
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
 */const Sm=6;class Tm{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Sm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class Cm{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ea(this),this.idTokenSubscription=new Ea(this),this.beforeStateQueue=new Im(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await En.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Kr(this,{idToken:t}),r=await $e._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(st(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Gr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=sm()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(st(this.app))return Promise.reject(Ht(this));const n=t?Ct(t):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject(Ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return st(this.app)?Promise.reject(Ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await wm(this),n=new Tm(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new gr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ym(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&yt(t)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Wl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;if(st(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&tm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pn(e){return Ct(e)}class Ea{constructor(t){this.auth=t,this.observer=null,this.addObserver=Hp(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Am(e){vs=e}function Kl(e){return vs.loadJS(e)}function Rm(){return vs.recaptchaEnterpriseScript}function Pm(){return vs.gapiScript}function Om(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class Nm{constructor(){this.enterprise=new km}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class km{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const Dm="recaptcha-enterprise",Gl="NO_RECAPTCHA";class Lm{constructor(t){this.type=Dm,this.auth=Pn(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{fm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new um(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ma(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(Gl)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Nm().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ma(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Rm();c.length!==0&&(c+=a),Kl(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ia(e,t,n,r=!1,s=!1){const i=new Lm(e);let o;if(s)o=Gl;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function wa(e,t,n,r,s){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ia(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ia(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(o)})}/**
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
 */function xm(e,t){const n=Sl(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Cn(i,t??{}))return s;ze(s,"already-initialized")}return n.initialize({options:t})}function Mm(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Um(e,t,n){const r=Pn(e);j(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=zl(t),{host:o,port:a}=Fm(t),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(Cn(l,r.config.emulator)&&Cn(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ms(o)?(Tp(`${i}//${o}${c}`),Rp("Auth",!0)):Bm()}function zl(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fm(e){const t=zl(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Sa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Sa(o)}}}function Sa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Bm(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Wi{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return vt("not implemented")}_getIdTokenResponse(t){return vt("not implemented")}_linkToIdToken(t,n){return vt("not implemented")}_getReauthenticationResolver(t){return vt("not implemented")}}async function Hm(e,t){return $t(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Vm(e,t){return _s(e,"POST","/v1/accounts:signInWithPassword",on(e,t))}/**
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
 */async function jm(e,t){return _s(e,"POST","/v1/accounts:signInWithEmailLink",on(e,t))}async function $m(e,t){return _s(e,"POST","/v1/accounts:signInWithEmailLink",on(e,t))}/**
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
 */class lr extends Wi{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new lr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new lr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wa(t,n,"signInWithPassword",Vm);case"emailLink":return jm(t,{email:this._email,oobCode:this._password});default:ze(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wa(t,r,"signUpPassword",Hm);case"emailLink":return $m(t,{idToken:n,email:this._email,oobCode:this._password});default:ze(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function In(e,t){return _s(e,"POST","/v1/accounts:signInWithIdp",on(e,t))}/**
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
 */const Wm="http://localhost";class rn extends Wi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new rn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Bi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new rn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return In(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,In(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,In(t,n)}buildRequest(){const t={requestUri:Wm,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=mr(n)}return t}}/**
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
 */function Km(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gm(e){const t=Fn(Bn(e)).link,n=t?Fn(Bn(t)).deep_link_id:null,r=Fn(Bn(e)).deep_link_id;return(r?Fn(Bn(r)).link:null)||r||n||t||e}class Ki{constructor(t){var n,r,s,i,o,a;const c=Fn(Bn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Km((s=c.mode)!==null&&s!==void 0?s:null);j(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Gm(t);try{return new Ki(n)}catch{return null}}}/**
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
 */class On{constructor(){this.providerId=On.PROVIDER_ID}static credential(t,n){return lr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Ki.parseLink(n);return j(r,"argument-error"),lr._fromEmailAndCode(t,r.code,r.tenantId)}}On.PROVIDER_ID="password";On.EMAIL_PASSWORD_SIGN_IN_METHOD="password";On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ql{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yr extends ql{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Lt extends yr{constructor(){super("facebook.com")}static credential(t){return rn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Lt.credential(t.oauthAccessToken)}catch{return null}}}Lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lt.PROVIDER_ID="facebook.com";/**
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
 */class xt extends yr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return rn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return xt.credential(n,r)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
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
 */class Mt extends yr{constructor(){super("github.com")}static credential(t){return rn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mt.credential(t.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
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
 */class Ut extends yr{constructor(){super("twitter.com")}static credential(t,n){return rn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.TWITTER_SIGN_IN_METHOD="twitter.com";Ut.PROVIDER_ID="twitter.com";/**
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
 */class Rn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await $e._fromIdTokenResponse(t,r,s),o=Ta(r);return new Rn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Ta(r);return new Rn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Ta(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class zr extends jt{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new zr(t,n,r,s)}}function Jl(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zr._fromErrorAndOperation(e,i,t,r):i})}async function zm(e,t,n=!1){const r=await cr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Rn._forOperation(e,"link",r)}/**
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
 */async function qm(e,t,n=!1){const{auth:r}=e;if(st(r.app))return Promise.reject(Ht(r));const s="reauthenticate";try{const i=await cr(e,Jl(r,s,t,e),n);j(i.idToken,r,"internal-error");const o=ji(i.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(e.uid===a,r,"user-mismatch"),Rn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),i}}/**
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
 */async function Yl(e,t,n=!1){if(st(e.app))return Promise.reject(Ht(e));const r="signIn",s=await Jl(e,r,t),i=await Rn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Jm(e,t){return Yl(Pn(e),t)}/**
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
 */async function Ym(e){const t=Pn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function Xm(e,t,n){return st(e.app)?Promise.reject(Ht(e)):Jm(Ct(e),On.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ym(e),r})}function Qm(e,t,n,r){return Ct(e).onIdTokenChanged(t,n,r)}function Zm(e,t,n){return Ct(e).beforeAuthStateChanged(t,n)}function e_(e,t,n,r){return Ct(e).onAuthStateChanged(t,n,r)}function t_(e){return Ct(e).signOut()}const qr="__sak";/**
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
 */class Xl{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qr,"1"),this.storage.removeItem(qr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const n_=1e3,r_=10;class Ql extends Xl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$l(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Em()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,r_):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},n_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ql.type="LOCAL";const s_=Ql;/**
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
 */class Zl extends Xl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Zl.type="SESSION";const eu=Zl;/**
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
 */function i_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ys{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new ys(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await i_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ys.receivers=[];/**
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
 */function Gi(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class o_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Gi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ct(){return window}function a_(e){ct().location.href=e}/**
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
 */function tu(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function c_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function l_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function u_(){return tu()?self:null}/**
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
 */const nu="firebaseLocalStorageDb",f_=1,Jr="firebaseLocalStorage",ru="fbase_key";class br{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bs(e,t){return e.transaction([Jr],t?"readwrite":"readonly").objectStore(Jr)}function d_(){const e=indexedDB.deleteDatabase(nu);return new br(e).toPromise()}function gi(){const e=indexedDB.open(nu,f_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Jr,{keyPath:ru})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Jr)?t(r):(r.close(),await d_(),t(await gi()))})})}async function Ca(e,t,n){const r=bs(e,!0).put({[ru]:t,value:n});return new br(r).toPromise()}async function h_(e,t){const n=bs(e,!1).get(t),r=await new br(n).toPromise();return r===void 0?null:r.value}function Aa(e,t){const n=bs(e,!0).delete(t);return new br(n).toPromise()}const p_=800,g_=3;class su{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>g_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ys._getInstance(u_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await c_(),!this.activeServiceWorker)return;this.sender=new o_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||l_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await gi();return await Ca(t,qr,"1"),await Aa(t,qr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ca(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>h_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Aa(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=bs(s,!1).getAll();return new br(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),p_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}su.type="LOCAL";const m_=su;new vr(3e4,6e4);/**
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
 */function __(e,t){return t?yt(t):(j(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class zi extends Wi{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return In(t,this._buildIdpRequest())}_linkToIdToken(t,n){return In(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return In(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function v_(e){return Yl(e.auth,new zi(e),e.bypassAuthState)}function y_(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),qm(n,new zi(e),e.bypassAuthState)}async function b_(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),zm(n,new zi(e),e.bypassAuthState)}/**
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
 */class iu{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return v_;case"linkViaPopup":case"linkViaRedirect":return b_;case"reauthViaPopup":case"reauthViaRedirect":return y_;default:ze(this.auth,"internal-error")}}resolve(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const E_=new vr(2e3,1e4);class pn extends iu{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");const t=Gi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,E_.get())};t()}}pn.currentPopupAction=null;/**
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
 */const I_="pendingRedirect",Or=new Map;class w_ extends iu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Or.get(this.auth._key());if(!t){try{const r=await S_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Or.set(this.auth._key(),t)}return this.bypassAuthState||Or.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S_(e,t){const n=A_(t),r=C_(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function T_(e,t){Or.set(e._key(),t)}function C_(e){return yt(e._redirectPersistence)}function A_(e){return Pr(I_,e.config.apiKey,e.name)}async function R_(e,t,n=!1){if(st(e.app))return Promise.reject(Ht(e));const r=Pn(e),s=__(r,t),o=await new w_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const P_=10*60*1e3;class O_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!N_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!ou(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=P_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ra(t))}saveEventToCache(t){this.cachedEventUids.add(Ra(t)),this.lastProcessedEventTime=Date.now()}}function Ra(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ou({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function N_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ou(e);default:return!1}}/**
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
 */async function k_(e,t={}){return $t(e,"GET","/v1/projects",t)}/**
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
 */const D_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,L_=/^https?/;async function x_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await k_(e);for(const n of t)try{if(M_(n))return}catch{}ze(e,"unauthorized-domain")}function M_(e){const t=hi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!L_.test(n))return!1;if(D_.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const U_=new vr(3e4,6e4);function Pa(){const e=ct().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function F_(e){return new Promise((t,n)=>{var r,s,i;function o(){Pa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pa(),n(at(e,"network-request-failed"))},timeout:U_.get()})}if(!((s=(r=ct().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=ct().gapi)===null||i===void 0)&&i.load)o();else{const a=Om("iframefcb");return ct()[a]=()=>{gapi.load?o():n(at(e,"network-request-failed"))},Kl(`${Pm()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Nr=null,t})}let Nr=null;function B_(e){return Nr=Nr||F_(e),Nr}/**
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
 */const H_=new vr(5e3,15e3),V_="__/auth/iframe",j_="emulator/auth/iframe",$_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K_(e){const t=e.config;j(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Vi(t,j_):`https://${e.config.authDomain}/${V_}`,r={apiKey:t.apiKey,appName:e.name,v:_r},s=W_.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${mr(r).slice(1)}`}async function G_(e){const t=await B_(e),n=ct().gapi;return j(n,e,"internal-error"),t.open({where:document.body,url:K_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=at(e,"network-request-failed"),a=ct().setTimeout(()=>{i(o)},H_.get());function c(){ct().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const z_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q_=500,J_=600,Y_="_blank",X_="http://localhost";class Oa{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Q_(e,t,n,r=q_,s=J_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},z_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Re().toLowerCase();n&&(a=Fl(l)?Y_:n),Ml(l)&&(t=t||X_,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,I])=>`${h}${g}=${I},`,"");if(bm(l)&&a!=="_self")return Z_(t||"",a),new Oa(null);const f=window.open(t||"",a,u);j(f,e,"popup-blocked");try{f.focus()}catch{}return new Oa(f)}function Z_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ev="__/auth/handler",tv="emulator/auth/handler",nv=encodeURIComponent("fac");async function Na(e,t,n,r,s,i){j(e.config.authDomain,e,"auth-domain-config-required"),j(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:_r,eventId:s};if(t instanceof ql){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Bp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof yr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${nv}=${encodeURIComponent(c)}`:"";return`${rv(e)}?${mr(a).slice(1)}${l}`}function rv({config:e}){return e.emulator?Vi(e,tv):`https://${e.authDomain}/${ev}`}/**
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
 */const Ws="webStorageSupport";class sv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eu,this._completeRedirectFn=R_,this._overrideRedirectResult=T_}async _openPopup(t,n,r,s){var i;St((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Na(t,n,r,hi(),s);return Q_(t,o,Gi())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Na(t,n,r,hi(),s);return a_(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(St(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await G_(t),r=new O_(t);return n.register("authEvent",s=>(j(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ws,{type:Ws},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ws];o!==void 0&&n(!!o),ze(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return $l()||Ul()||$i()}}const iv=sv;var ka="@firebase/auth",Da="1.10.8";/**
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
 */class ov{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function av(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cv(e){or(new An("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wl(e)},l=new Cm(r,s,i,c);return Mm(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),or(new An("auth-internal",t=>{const n=Pn(t.getProvider("auth").getImmediate());return(r=>new ov(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(ka,Da,av(e)),yn(ka,Da,"esm2017")}/**
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
 */const lv=5*60,uv=bl("authIdTokenMaxAge")||lv;let La=null;const fv=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uv)return;const s=n==null?void 0:n.token;La!==s&&(La=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dv(e=Vg()){const t=Sl(e,"auth");if(t.isInitialized())return t.getImmediate();const n=xm(e,{popupRedirectResolver:iv,persistence:[m_,s_,eu]}),r=bl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=fv(i.toString());Zm(n,o,()=>o(n.currentUser)),Qm(n,a=>o(a))}}const s=wp("auth");return s&&Um(n,`http://${s}`),n}function hv(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Am({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=at("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",hv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cv("Browser");const au={apiKey:"AIzaSyD0mA5L4ljZsvzei1yQ5Hm3hRsgyjdsKbk",authDomain:"watchingsecretly-328c7.firebaseapp.com",projectId:"watchingsecretly-328c7",appId:"1:22152448573:web:4a23f9de5b982fb43cb854"},cu=!!au.apiKey;cu||console.warn("[firebase] VITE_FIREBASE_* が未設定です。frontend/.env を作成してください。");let lt=null;if(cu){const e=Tl(au);lt=dv(e)}async function Av(e,t){if(!lt)throw new Error("Firebase が未設定です（.env を確認）");return(await Xm(lt,e,t)).user}async function Rv(){lt&&await t_(lt)}function pv(){return new Promise(e=>{if(!lt){e(null);return}const t=e_(lt,n=>{t(),e(n)})})}async function Pv(){return!lt||!lt.currentUser?null:lt.currentUser.getIdToken()}const gv=[{path:"/",name:"login",component:()=>fn(()=>import("./LoginView-Wy-RdDEn.js"),__vite__mapDeps([0,1]))},{path:"/menu",name:"menu",component:()=>fn(()=>import("./MainMenuView-CIO7e3PM.js"),__vite__mapDeps([2,3])),meta:{requiresAuth:!0}},{path:"/new-game",name:"new-game",component:()=>fn(()=>import("./NewGameView-uJDdtnFt.js"),__vite__mapDeps([4,5,6])),meta:{requiresAuth:!0}},{path:"/help",name:"help",component:()=>fn(()=>import("./HelpView-ClYr41Dm.js"),__vite__mapDeps([7,8,9]))},{path:"/join/:gameId/:playerOrder?",name:"join",component:()=>fn(()=>import("./JoinView-CcP5lSn-.js"),__vite__mapDeps([10,5,11]))},{path:"/game/:gameId/:playerOrder",name:"game",component:()=>fn(()=>import("./GameView-UdTXcTj7.js"),__vite__mapDeps([12,8,5,13]))}],lu=pp({history:Gh(),routes:gv});lu.beforeEach(async e=>e.meta.requiresAuth&&!await pv()?{name:"login"}:!0);const qi=zd(ih);qi.use(Yd());qi.use(lu);qi.mount("#app");export{Sv as A,_v as B,td as C,Pv as D,tt as F,yv as T,nh as _,qc as a,id as b,ed as c,Iv as d,Tc as e,tn as f,pv as g,Rv as h,$n as i,Ac as j,Ev as k,Av as l,vv as m,De as n,Kc as o,Ne as p,yi as q,Ai as r,sd as s,wu as t,Tv as u,bv as v,mv as w,Cv as x,wv as y,rf as z};
