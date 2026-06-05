const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-Dy3t1zRp.js","assets/LoginView-DT5h1Y-B.css","assets/MainMenuView-Dctqhk2t.js","assets/MainMenuView-CIdMjLNV.css","assets/NewGameView-B8iMx9Bq.js","assets/useAudio-B7qwIDlw.js","assets/NewGameView-BP7pI5zh.css","assets/HelpView-ChG20BzO.js","assets/cards-DMoeknHU.js","assets/HelpView-BTPa4vXG.css","assets/LogsView-CUTeXA7-.js","assets/LogsView-DpLHDEBr.css","assets/JoinView-UgPmTxkU.js","assets/JoinView-BZNvgJTw.css","assets/GameView-GdU8qSMM.js","assets/GameView-xCAf00Du.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const le={},mn=[],it=()=>{},Ua=()=>!1,Xr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Qr=e=>e.startsWith("onUpdate:"),ve=Object.assign,_i=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hu=Object.prototype.hasOwnProperty,se=(e,t)=>hu.call(e,t),U=Array.isArray,_n=e=>pr(e)==="[object Map]",On=e=>pr(e)==="[object Set]",Zi=e=>pr(e)==="[object Date]",K=e=>typeof e=="function",de=e=>typeof e=="string",He=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",Fa=e=>(te(e)||K(e))&&K(e.then)&&K(e.catch),Ba=Object.prototype.toString,pr=e=>Ba.call(e),pu=e=>pr(e).slice(8,-1),Va=e=>pr(e)==="[object Object]",Zr=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,$n=mi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),es=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},gu=/-\w/g,Ae=es(e=>e.replace(gu,t=>t.slice(1).toUpperCase())),mu=/\B([A-Z])/g,an=es(e=>e.replace(mu,"-$1").toLowerCase()),ts=es(e=>e.charAt(0).toUpperCase()+e.slice(1)),Es=es(e=>e?`on${ts(e)}`:""),rt=(e,t)=>!Object.is(e,t),Rr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ha=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ns=e=>{const t=parseFloat(e);return isNaN(t)?e:t},_u=e=>{const t=de(e)?Number(e):NaN;return isNaN(t)?e:t};let eo;const rs=()=>eo||(eo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vi(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=de(r)?Eu(r):vi(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(de(e)||te(e))return e}const vu=/;(?![^(]*\))/g,yu=/:([^]+)/,bu=/\/\*[^]*?\*\//g;function Eu(e){const t={};return e.replace(bu,"").split(vu).forEach(n=>{if(n){const r=n.split(yu);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function yi(e){let t="";if(de(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=yi(e[n]);r&&(t+=r+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Iu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wu=mi(Iu);function ja(e){return!!e||e===""}function Su(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Nn(e[r],t[r]);return n}function Nn(e,t){if(e===t)return!0;let n=Zi(e),r=Zi(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=He(e),r=He(t),n||r)return e===t;if(n=U(e),r=U(t),n||r)return n&&r?Su(e,t):!1;if(n=te(e),r=te(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!Nn(e[o],t[o]))return!1}}return String(e)===String(t)}function bi(e,t){return e.findIndex(n=>Nn(n,t))}const $a=e=>!!(e&&e.__v_isRef===!0),Tu=e=>de(e)?e:e==null?"":U(e)||te(e)&&(e.toString===Ba||!K(e.toString))?$a(e)?Tu(e.value):JSON.stringify(e,Wa,2):String(e),Wa=(e,t)=>$a(t)?Wa(e,t.value):_n(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Is(r,i)+" =>"]=s,n),{})}:On(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Is(n))}:He(t)?Is(t):te(t)&&!U(t)&&!Va(t)?String(t):t,Is=(e,t="")=>{var n;return He(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _e;class Ka{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&_e&&(_e.active?(this.parent=_e,this.index=(_e.scopes||(_e.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=_e;try{return _e=this,t()}finally{_e=n}}}on(){++this._on===1&&(this.prevScope=_e,_e=this)}off(){if(this._on>0&&--this._on===0){if(_e===this)_e=this.prevScope;else{let t=_e;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ga(e){return new Ka(e)}function za(){return _e}function Cu(e,t=!1){_e&&_e.cleanups.push(e)}let ue;const ws=new WeakSet;class qa{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_e&&(_e.active?_e.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ws.has(this)&&(ws.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ya(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,to(this),Xa(this);const t=ue,n=We;ue=this,We=!0;try{return this.fn()}finally{Qa(this),ue=t,We=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)wi(t);this.deps=this.depsTail=void 0,to(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ws.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ks(this)&&this.run()}get dirty(){return Ks(this)}}let Ja=0,Wn,Kn;function Ya(e,t=!1){if(e.flags|=8,t){e.next=Kn,Kn=e;return}e.next=Wn,Wn=e}function Ei(){Ja++}function Ii(){if(--Ja>0)return;if(Kn){let t=Kn;for(Kn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Wn;){let t=Wn;for(Wn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Xa(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Qa(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),wi(r),Au(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Ks(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Za(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Za(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===tr)||(e.globalVersion=tr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ks(e))))return;e.flags|=2;const t=e.dep,n=ue,r=We;ue=e,We=!0;try{Xa(e);const s=e.fn(e._value);(t.version===0||rt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ue=n,We=r,Qa(e),e.flags&=-3}}function wi(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)wi(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Au(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let We=!0;const ec=[];function Et(){ec.push(We),We=!1}function It(){const e=ec.pop();We=e===void 0?!0:e}function to(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ue;ue=void 0;try{t()}finally{ue=n}}}let tr=0;class Ru{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Si{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ue||!We||ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ue)n=this.activeLink=new Ru(ue,this),ue.deps?(n.prevDep=ue.depsTail,ue.depsTail.nextDep=n,ue.depsTail=n):ue.deps=ue.depsTail=n,tc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ue.depsTail,n.nextDep=void 0,ue.depsTail.nextDep=n,ue.depsTail=n,ue.deps===n&&(ue.deps=r)}return n}trigger(t){this.version++,tr++,this.notify(t)}notify(t){Ei();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ii()}}}function tc(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)tc(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const xr=new WeakMap,nn=Symbol(""),Gs=Symbol(""),nr=Symbol("");function be(e,t,n){if(We&&ue){let r=xr.get(e);r||xr.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Si),s.map=r,s.key=n),s.track()}}function mt(e,t,n,r,s,i){const o=xr.get(e);if(!o){tr++;return}const a=c=>{c&&c.trigger()};if(Ei(),t==="clear")o.forEach(a);else{const c=U(e),l=c&&Zr(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,h)=>{(h==="length"||h===nr||!He(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(nr)),t){case"add":c?l&&a(o.get("length")):(a(o.get(nn)),_n(e)&&a(o.get(Gs)));break;case"delete":c||(a(o.get(nn)),_n(e)&&a(o.get(Gs)));break;case"set":_n(e)&&a(o.get(nn));break}}Ii()}function Pu(e,t){const n=xr.get(e);return n&&n.get(t)}function fn(e){const t=X(e);return t===e?t:(be(t,"iterate",nr),Me(e)?t:t.map(Ke))}function ss(e){return be(e=X(e),"iterate",nr),e}function et(e,t){return wt(e)?wn(ot(e)?Ke(t):t):Ke(t)}const Ou={__proto__:null,[Symbol.iterator](){return Ss(this,Symbol.iterator,e=>et(this,e))},concat(...e){return fn(this).concat(...e.map(t=>U(t)?fn(t):t))},entries(){return Ss(this,"entries",e=>(e[1]=et(this,e[1]),e))},every(e,t){return ft(this,"every",e,t,void 0,arguments)},filter(e,t){return ft(this,"filter",e,t,n=>n.map(r=>et(this,r)),arguments)},find(e,t){return ft(this,"find",e,t,n=>et(this,n),arguments)},findIndex(e,t){return ft(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ft(this,"findLast",e,t,n=>et(this,n),arguments)},findLastIndex(e,t){return ft(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ft(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ts(this,"includes",e)},indexOf(...e){return Ts(this,"indexOf",e)},join(e){return fn(this).join(e)},lastIndexOf(...e){return Ts(this,"lastIndexOf",e)},map(e,t){return ft(this,"map",e,t,void 0,arguments)},pop(){return xn(this,"pop")},push(...e){return xn(this,"push",e)},reduce(e,...t){return no(this,"reduce",e,t)},reduceRight(e,...t){return no(this,"reduceRight",e,t)},shift(){return xn(this,"shift")},some(e,t){return ft(this,"some",e,t,void 0,arguments)},splice(...e){return xn(this,"splice",e)},toReversed(){return fn(this).toReversed()},toSorted(e){return fn(this).toSorted(e)},toSpliced(...e){return fn(this).toSpliced(...e)},unshift(...e){return xn(this,"unshift",e)},values(){return Ss(this,"values",e=>et(this,e))}};function Ss(e,t,n){const r=ss(e),s=r[t]();return r!==e&&!Me(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Nu=Array.prototype;function ft(e,t,n,r,s,i){const o=ss(e),a=o!==e&&!Me(e),c=o[t];if(c!==Nu[t]){const f=c.apply(e,i);return a?Ke(f):f}let l=n;o!==e&&(a?l=function(f,h){return n.call(this,et(e,f),h,e)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,e)}));const u=c.call(o,l,r);return a&&s?s(u):u}function no(e,t,n,r){const s=ss(e),i=s!==e&&!Me(e);let o=n,a=!1;s!==e&&(i?(a=r.length===0,o=function(l,u,f){return a&&(a=!1,l=et(e,l)),n.call(this,l,et(e,u),f,e)}):n.length>3&&(o=function(l,u,f){return n.call(this,l,u,f,e)}));const c=s[t](o,...r);return a?et(e,c):c}function Ts(e,t,n){const r=X(e);be(r,"iterate",nr);const s=r[t](...n);return(s===-1||s===!1)&&is(n[0])?(n[0]=X(n[0]),r[t](...n)):s}function xn(e,t,n=[]){Et(),Ei();const r=X(e)[t].apply(e,n);return Ii(),It(),r}const ku=mi("__proto__,__v_isRef,__isVue"),nc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(He));function Du(e){He(e)||(e=String(e));const t=X(this);return be(t,"has",e),t.hasOwnProperty(e)}class rc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?$u:ac:i?oc:ic).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=U(t);if(!s){let c;if(o&&(c=Ou[n]))return c;if(n==="hasOwnProperty")return Du}const a=Reflect.get(t,n,fe(t)?t:r);if((He(n)?nc.has(n):ku(n))||(s||be(t,"get",n),i))return a;if(fe(a)){const c=o&&Zr(n)?a:a.value;return s&&te(c)?qs(c):c}return te(a)?s?qs(a):gr(a):a}}class sc extends rc{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];const o=U(t)&&Zr(n);if(!this._isShallow){const l=wt(i);if(!Me(r)&&!wt(r)&&(i=X(i),r=X(r)),!o&&fe(i)&&!fe(r))return l||(i.value=r),!0}const a=o?Number(n)<t.length:se(t,n),c=Reflect.set(t,n,r,fe(t)?t:s);return t===X(s)&&(a?rt(r,i)&&mt(t,"set",n,r):mt(t,"add",n,r)),c}deleteProperty(t,n){const r=se(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&mt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!He(n)||!nc.has(n))&&be(t,"has",n),r}ownKeys(t){return be(t,"iterate",U(t)?"length":nn),Reflect.ownKeys(t)}}class Lu extends rc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const xu=new sc,Mu=new Lu,Uu=new sc(!0);const zs=e=>e,Sr=e=>Reflect.getPrototypeOf(e);function Fu(e,t,n){return function(...r){const s=this.__v_raw,i=X(s),o=_n(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?zs:t?wn:Ke;return!t&&be(i,"iterate",c?Gs:nn),ve(Object.create(l),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Tr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Bu(e,t){const n={get(s){const i=this.__v_raw,o=X(i),a=X(s);e||(rt(s,a)&&be(o,"get",s),be(o,"get",a));const{has:c}=Sr(o),l=t?zs:e?wn:Ke;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&be(X(s),"iterate",nn),s.size},has(s){const i=this.__v_raw,o=X(i),a=X(s);return e||(rt(s,a)&&be(o,"has",s),be(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=X(a),l=t?zs:e?wn:Ke;return!e&&be(c,"iterate",nn),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return ve(n,e?{add:Tr("add"),set:Tr("set"),delete:Tr("delete"),clear:Tr("clear")}:{add(s){const i=X(this),o=Sr(i),a=X(s),c=!t&&!Me(s)&&!wt(s)?a:s;return o.has.call(i,c)||rt(s,c)&&o.has.call(i,s)||rt(a,c)&&o.has.call(i,a)||(i.add(c),mt(i,"add",c,c)),this},set(s,i){!t&&!Me(i)&&!wt(i)&&(i=X(i));const o=X(this),{has:a,get:c}=Sr(o);let l=a.call(o,s);l||(s=X(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?rt(i,u)&&mt(o,"set",s,i):mt(o,"add",s,i),this},delete(s){const i=X(this),{has:o,get:a}=Sr(i);let c=o.call(i,s);c||(s=X(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&mt(i,"delete",s,void 0),l},clear(){const s=X(this),i=s.size!==0,o=s.clear();return i&&mt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Fu(s,e,t)}),n}function Ti(e,t){const n=Bu(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(se(n,s)&&s in r?n:r,s,i)}const Vu={get:Ti(!1,!1)},Hu={get:Ti(!1,!0)},ju={get:Ti(!0,!1)};const ic=new WeakMap,oc=new WeakMap,ac=new WeakMap,$u=new WeakMap;function Wu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gr(e){return wt(e)?e:Ci(e,!1,xu,Vu,ic)}function cc(e){return Ci(e,!1,Uu,Hu,oc)}function qs(e){return Ci(e,!0,Mu,ju,ac)}function Ci(e,t,n,r,s){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=s.get(e);if(i)return i;const o=Wu(pu(e));if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function ot(e){return wt(e)?ot(e.__v_raw):!!(e&&e.__v_isReactive)}function wt(e){return!!(e&&e.__v_isReadonly)}function Me(e){return!!(e&&e.__v_isShallow)}function is(e){return e?!!e.__v_raw:!1}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function Ai(e){return!se(e,"__v_skip")&&Object.isExtensible(e)&&Ha(e,"__v_skip",!0),e}const Ke=e=>te(e)?gr(e):e,wn=e=>te(e)?qs(e):e;function fe(e){return e?e.__v_isRef===!0:!1}function Ri(e){return lc(e,!1)}function Ku(e){return lc(e,!0)}function lc(e,t){return fe(e)?e:new Gu(e,t)}class Gu{constructor(t,n){this.dep=new Si,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:X(t),this._value=n?t:Ke(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Me(t)||wt(t);t=r?t:X(t),rt(t,n)&&(this._rawValue=t,this._value=r?t:Ke(t),this.dep.trigger())}}function rn(e){return fe(e)?e.value:e}const zu={get:(e,t,n)=>t==="__v_raw"?e:rn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function uc(e){return ot(e)?e:new Proxy(e,zu)}function qu(e){const t=U(e)?new Array(e.length):{};for(const n in e)t[n]=fc(e,n);return t}class Ju{constructor(t,n,r){this._object=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=He(n)?n:String(n),this._raw=X(t);let s=!0,i=t;if(!U(t)||He(this._key)||!Zr(this._key))do s=!is(i)||Me(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=rn(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&fe(this._raw[this._key])){const n=this._object[this._key];if(fe(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return Pu(this._raw,this._key)}}class Yu{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Xu(e,t,n){return fe(e)?e:K(e)?new Yu(e):te(e)&&arguments.length>1?fc(e,t,n):Ri(e)}function fc(e,t,n){return new Ju(e,t,n)}class Qu{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Si(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=tr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ue!==this)return Ya(this,!0),!0}get value(){const t=this.dep.track();return Za(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Zu(e,t,n=!1){let r,s;return K(e)?r=e:(r=e.get,s=e.set),new Qu(r,s,n)}const Cr={},Mr=new WeakMap;let Qt;function ef(e,t=!1,n=Qt){if(n){let r=Mr.get(n);r||Mr.set(n,r=[]),r.push(e)}}function tf(e,t,n=le){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=O=>s?O:Me(O)||s===!1||s===0?_t(O,1):_t(O);let u,f,h,g,I=!1,w=!1;if(fe(e)?(f=()=>e.value,I=Me(e)):ot(e)?(f=()=>l(e),I=!0):U(e)?(w=!0,I=e.some(O=>ot(O)||Me(O)),f=()=>e.map(O=>{if(fe(O))return O.value;if(ot(O))return l(O);if(K(O))return c?c(O,2):O()})):K(e)?t?f=c?()=>c(e,2):e:f=()=>{if(h){Et();try{h()}finally{It()}}const O=Qt;Qt=u;try{return c?c(e,3,[g]):e(g)}finally{Qt=O}}:f=it,t&&s){const O=f,H=s===!0?1/0:s;f=()=>_t(O(),H)}const M=za(),x=()=>{u.stop(),M&&M.active&&_i(M.effects,u)};if(i&&t){const O=t;t=(...H)=>{O(...H),x()}}let T=w?new Array(e.length).fill(Cr):Cr;const k=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(t){const H=u.run();if(s||I||(w?H.some((ee,q)=>rt(ee,T[q])):rt(H,T))){h&&h();const ee=Qt;Qt=u;try{const q=[H,T===Cr?void 0:w&&T[0]===Cr?[]:T,g];T=H,c?c(t,3,q):t(...q)}finally{Qt=ee}}}else u.run()};return a&&a(k),u=new qa(f),u.scheduler=o?()=>o(k,!1):k,g=O=>ef(O,!1,u),h=u.onStop=()=>{const O=Mr.get(u);if(O){if(c)c(O,4);else for(const H of O)H();Mr.delete(u)}},t?r?k(!0):T=u.run():o?o(k.bind(null,!0),!0):u.run(),x.pause=u.pause.bind(u),x.resume=u.resume.bind(u),x.stop=x,x}function _t(e,t=1/0,n){if(t<=0||!te(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,fe(e))_t(e.value,t,n);else if(U(e))for(let r=0;r<e.length;r++)_t(e[r],t,n);else if(On(e)||_n(e))e.forEach(r=>{_t(r,t,n)});else if(Va(e)){for(const r in e)_t(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&_t(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mr(e,t,n,r){try{return r?e(...r):e()}catch(s){os(s,t,n)}}function je(e,t,n,r){if(K(e)){const s=mr(e,t,n,r);return s&&Fa(s)&&s.catch(i=>{os(i,t,n)}),s}if(U(e)){const s=[];for(let i=0;i<e.length;i++)s.push(je(e[i],t,n,r));return s}}function os(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||le;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,c,l)===!1)return}a=a.parent}if(i){Et(),mr(i,null,10,[e,c,l]),It();return}}nf(e,n,s,r,o)}function nf(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Te=[];let Ze=-1;const vn=[];let Dt=null,hn=0;const dc=Promise.resolve();let Ur=null;function as(e){const t=Ur||dc;return e?t.then(this?e.bind(this):e):t}function rf(e){let t=Ze+1,n=Te.length;for(;t<n;){const r=t+n>>>1,s=Te[r],i=rr(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Pi(e){if(!(e.flags&1)){const t=rr(e),n=Te[Te.length-1];!n||!(e.flags&2)&&t>=rr(n)?Te.push(e):Te.splice(rf(t),0,e),e.flags|=1,hc()}}function hc(){Ur||(Ur=dc.then(gc))}function sf(e){U(e)?vn.push(...e):Dt&&e.id===-1?Dt.splice(hn+1,0,e):e.flags&1||(vn.push(e),e.flags|=1),hc()}function ro(e,t,n=Ze+1){for(;n<Te.length;n++){const r=Te[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Te.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function pc(e){if(vn.length){const t=[...new Set(vn)].sort((n,r)=>rr(n)-rr(r));if(vn.length=0,Dt){Dt.push(...t);return}for(Dt=t,hn=0;hn<Dt.length;hn++){const n=Dt[hn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Dt=null,hn=0}}const rr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function gc(e){try{for(Ze=0;Ze<Te.length;Ze++){const t=Te[Ze];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),mr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ze<Te.length;Ze++){const t=Te[Ze];t&&(t.flags&=-2)}Ze=-1,Te.length=0,pc(),Ur=null,(Te.length||vn.length)&&gc()}}let Le=null,mc=null;function Fr(e){const t=Le;return Le=e,mc=e&&e.type.__scopeId||null,t}function of(e,t=Le,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Hr(-1);const i=Fr(t);let o;try{o=e(...s)}finally{Fr(i),r._d&&Hr(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function vv(e,t){if(Le===null)return e;const n=ds(Le),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=le]=t[s];i&&(K(i)&&(i={mounted:i,updated:i}),i.deep&&_t(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function zt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Et(),je(c,n,8,[e.el,a,e,t]),It())}}function Pr(e,t){if(Ee){let n=Ee.provides;const r=Ee.parent&&Ee.parent.provides;r===n&&(n=Ee.provides=Object.create(r)),n[e]=t}}function Ve(e,t,n=!1){const r=Li();if(r||sn){let s=sn?sn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(r&&r.proxy):t}}function af(){return!!(Li()||sn)}const cf=Symbol.for("v-scx"),lf=()=>Ve(cf);function yv(e,t){return Oi(e,null,t)}function Gn(e,t,n){return Oi(e,t,n)}function Oi(e,t,n=le){const{immediate:r,deep:s,flush:i,once:o}=n,a=ve({},n),c=t&&r||!t&&i!=="post";let l;if(or){if(i==="sync"){const g=lf();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=it,g.resume=it,g.pause=it,g}}const u=Ee;a.call=(g,I,w)=>je(g,u,I,w);let f=!1;i==="post"?a.scheduler=g=>{Oe(g,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,I)=>{I?g():Pi(g)}),a.augmentJob=g=>{t&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const h=tf(e,t,a);return or&&(l?l.push(h):c&&h()),h}function uf(e,t,n){const r=this.proxy,s=de(e)?e.includes(".")?_c(r,e):()=>r[e]:e.bind(r,r);let i;K(t)?i=t:(i=t.handler,n=t);const o=_r(this),a=Oi(s,i.bind(r),n);return o(),a}function _c(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ff=Symbol("_vte"),vc=e=>e.__isTeleport,Be=Symbol("_leaveCb"),Mn=Symbol("_enterCb");function df(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ac(()=>{e.isMounted=!0}),Rc(()=>{e.isUnmounting=!0}),e}const Fe=[Function,Array],yc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},bc=e=>{const t=e.subTree;return t.component?bc(t.component):t},hf={name:"BaseTransition",props:yc,setup(e,{slots:t}){const n=Li(),r=df();return()=>{const s=t.default&&wc(t.default(),!0),i=s&&s.length?Ec(s):n.subTree?ad():void 0;if(!i)return;const o=X(e),{mode:a}=o;if(r.isLeaving)return Cs(i);const c=so(i);if(!c)return Cs(i);let l=Js(c,o,r,n,f=>l=f);c.type!==Ce&&sr(c,l);let u=n.subTree&&so(n.subTree);if(u&&u.type!==Ce&&!en(u,c)&&bc(n).type!==Ce){let f=Js(u,o,r,n);if(sr(u,f),a==="out-in"&&c.type!==Ce)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Cs(i);a==="in-out"&&c.type!==Ce?f.delayLeave=(h,g,I)=>{const w=Ic(r,u);w[String(u.key)]=u,h[Be]=()=>{g(),h[Be]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{I(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function Ec(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ce){t=n;break}}return t}const pf=hf;function Ic(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Js(e,t,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:g,onAfterLeave:I,onLeaveCancelled:w,onBeforeAppear:M,onAppear:x,onAfterAppear:T,onAppearCancelled:k}=t,O=String(e.key),H=Ic(n,e),ee=(A,$)=>{A&&je(A,r,9,$)},q=(A,$)=>{const Q=$[1];ee(A,$),U(A)?A.every(N=>N.length<=1)&&Q():A.length<=1&&Q()},G={mode:o,persisted:a,beforeEnter(A){let $=c;if(!n.isMounted)if(i)$=M||c;else return;A[Be]&&A[Be](!0);const Q=H[O];Q&&en(e,Q)&&Q.el[Be]&&Q.el[Be](),ee($,[A])},enter(A){if(H[O]===e)return;let $=l,Q=u,N=f;if(!n.isMounted)if(i)$=x||l,Q=T||u,N=k||f;else return;let J=!1;A[Mn]=Ie=>{J||(J=!0,Ie?ee(N,[A]):ee(Q,[A]),G.delayedLeave&&G.delayedLeave(),A[Mn]=void 0)};const pe=A[Mn].bind(null,!1);$?q($,[A,pe]):pe()},leave(A,$){const Q=String(e.key);if(A[Mn]&&A[Mn](!0),n.isUnmounting)return $();ee(h,[A]);let N=!1;A[Be]=pe=>{N||(N=!0,$(),pe?ee(w,[A]):ee(I,[A]),A[Be]=void 0,H[Q]===e&&delete H[Q])};const J=A[Be].bind(null,!1);H[Q]=e,g?q(g,[A,J]):J()},clone(A){const $=Js(A,t,n,r,s);return s&&s($),$}};return G}function Cs(e){if(cs(e))return e=$t(e),e.children=null,e}function so(e){if(!cs(e))return vc(e.type)&&e.children?Ec(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&K(n.default))return n.default()}}function sr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,sr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function wc(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===tt?(o.patchFlag&128&&s++,r=r.concat(wc(o.children,t,a))):(t||o.type!==Ce)&&r.push(a!=null?$t(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Sc(e,t){return K(e)?ve({name:e.name},t,{setup:e}):e}function Tc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function io(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Br=new WeakMap;function zn(e,t,n,r,s=!1){if(U(e)){e.forEach((w,M)=>zn(w,t&&(U(t)?t[M]:t),n,r,s));return}if(qn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&zn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?ds(r.component):r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState,h=X(f),g=f===le?Ua:w=>io(u,w)?!1:se(h,w),I=(w,M)=>!(M&&io(u,M));if(l!=null&&l!==c){if(oo(t),de(l))u[l]=null,g(l)&&(f[l]=null);else if(fe(l)){const w=t;I(l,w.k)&&(l.value=null),w.k&&(u[w.k]=null)}}if(K(c))mr(c,a,12,[o,u]);else{const w=de(c),M=fe(c);if(w||M){const x=()=>{if(e.f){const T=w?g(c)?f[c]:u[c]:I()||!e.k?c.value:u[e.k];if(s)U(T)&&_i(T,i);else if(U(T))T.includes(i)||T.push(i);else if(w)u[c]=[i],g(c)&&(f[c]=u[c]);else{const k=[i];I(c,e.k)&&(c.value=k),e.k&&(u[e.k]=k)}}else w?(u[c]=o,g(c)&&(f[c]=o)):M&&(I(c,e.k)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){const T=()=>{x(),Br.delete(e)};T.id=-1,Br.set(e,T),Oe(T,n)}else oo(e),x()}}}function oo(e){const t=Br.get(e);t&&(t.flags|=8,Br.delete(e))}rs().requestIdleCallback;rs().cancelIdleCallback;const qn=e=>!!e.type.__asyncLoader,cs=e=>e.type.__isKeepAlive;function gf(e,t){Cc(e,"a",t)}function mf(e,t){Cc(e,"da",t)}function Cc(e,t,n=Ee){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ls(t,r,n),n){let s=n.parent;for(;s&&s.parent;)cs(s.parent.vnode)&&_f(r,t,n,s),s=s.parent}}function _f(e,t,n,r){const s=ls(t,e,r,!0);Pc(()=>{_i(r[t],s)},n)}function ls(e,t,n=Ee,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Et();const a=_r(n),c=je(t,n,e,o);return a(),It(),c});return r?s.unshift(i):s.push(i),i}}const Ct=e=>(t,n=Ee)=>{(!or||e==="sp")&&ls(e,(...r)=>t(...r),n)},vf=Ct("bm"),Ac=Ct("m"),yf=Ct("bu"),bf=Ct("u"),Rc=Ct("bum"),Pc=Ct("um"),Ef=Ct("sp"),If=Ct("rtg"),wf=Ct("rtc");function Sf(e,t=Ee){ls("ec",e,t)}const Tf="components";function Cf(e,t){return Rf(Tf,e,!0,t)||e}const Af=Symbol.for("v-ndc");function Rf(e,t,n=!0,r=!1){const s=Le||Ee;if(s){const i=s.type;{const a=md(i,!1);if(a&&(a===t||a===Ae(t)||a===ts(Ae(t))))return i}const o=ao(s[e]||i[e],t)||ao(s.appContext[e],t);return!o&&r?i:o}}function ao(e,t){return e&&(e[t]||e[Ae(t)]||e[ts(Ae(t))])}function bv(e,t,n,r){let s;const i=n,o=U(e);if(o||de(e)){const a=o&&ot(e);let c=!1,l=!1;a&&(c=!Me(e),l=wt(e),e=ss(e)),s=new Array(e.length);for(let u=0,f=e.length;u<f;u++)s[u]=t(c?l?wn(Ke(e[u])):Ke(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,i)}else if(te(e))if(e[Symbol.iterator])s=Array.from(e,(a,c)=>t(a,c,void 0,i));else{const a=Object.keys(e);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=t(e[u],u,c,i)}}else s=[];return s}const Ys=e=>e?Xc(e)?ds(e):Ys(e.parent):null,Jn=ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ys(e.parent),$root:e=>Ys(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Nc(e),$forceUpdate:e=>e.f||(e.f=()=>{Pi(e.update)}),$nextTick:e=>e.n||(e.n=as.bind(e.proxy)),$watch:e=>uf.bind(e)}),As=(e,t)=>e!==le&&!e.__isScriptSetup&&se(e,t),Pf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(As(r,t))return o[t]=1,r[t];if(s!==le&&se(s,t))return o[t]=2,s[t];if(se(i,t))return o[t]=3,i[t];if(n!==le&&se(n,t))return o[t]=4,n[t];Xs&&(o[t]=0)}}const l=Jn[t];let u,f;if(l)return t==="$attrs"&&be(e.attrs,"get",""),l(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==le&&se(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,se(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return As(s,t)?(s[t]=n,!0):r!==le&&se(r,t)?(r[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:i,type:o}},a){let c;return!!(n[a]||e!==le&&a[0]!=="$"&&se(e,a)||As(t,a)||se(i,a)||se(r,a)||se(Jn,a)||se(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function co(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Xs=!0;function Of(e){const t=Nc(e),n=e.proxy,r=e.ctx;Xs=!1,t.beforeCreate&&lo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:I,activated:w,deactivated:M,beforeDestroy:x,beforeUnmount:T,destroyed:k,unmounted:O,render:H,renderTracked:ee,renderTriggered:q,errorCaptured:G,serverPrefetch:A,expose:$,inheritAttrs:Q,components:N,directives:J,filters:pe}=t;if(l&&Nf(l,r,null),o)for(const z in o){const ne=o[z];K(ne)&&(r[z]=ne.bind(n))}if(s){const z=s.call(n,n);te(z)&&(e.data=gr(z))}if(Xs=!0,i)for(const z in i){const ne=i[z],ut=K(ne)?ne.bind(n,n):K(ne.get)?ne.get.bind(n,n):it,Rt=!K(ne)&&K(ne.set)?ne.set.bind(n):it,qe=De({get:ut,set:Rt});Object.defineProperty(r,z,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Pe=>qe.value=Pe})}if(a)for(const z in a)Oc(a[z],r,n,z);if(c){const z=K(c)?c.call(n):c;Reflect.ownKeys(z).forEach(ne=>{Pr(ne,z[ne])})}u&&lo(u,e,"c");function oe(z,ne){U(ne)?ne.forEach(ut=>z(ut.bind(n))):ne&&z(ne.bind(n))}if(oe(vf,f),oe(Ac,h),oe(yf,g),oe(bf,I),oe(gf,w),oe(mf,M),oe(Sf,G),oe(wf,ee),oe(If,q),oe(Rc,T),oe(Pc,O),oe(Ef,A),U($))if($.length){const z=e.exposed||(e.exposed={});$.forEach(ne=>{Object.defineProperty(z,ne,{get:()=>n[ne],set:ut=>n[ne]=ut,enumerable:!0})})}else e.exposed||(e.exposed={});H&&e.render===it&&(e.render=H),Q!=null&&(e.inheritAttrs=Q),N&&(e.components=N),J&&(e.directives=J),A&&Tc(e)}function Nf(e,t,n=it){U(e)&&(e=Qs(e));for(const r in e){const s=e[r];let i;te(s)?"default"in s?i=Ve(s.from||r,s.default,!0):i=Ve(s.from||r):i=Ve(s),fe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function lo(e,t,n){je(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oc(e,t,n,r){let s=r.includes(".")?_c(n,r):()=>n[r];if(de(e)){const i=t[e];K(i)&&Gn(s,i)}else if(K(e))Gn(s,e.bind(n));else if(te(e))if(U(e))e.forEach(i=>Oc(i,t,n,r));else{const i=K(e.handler)?e.handler.bind(n):t[e.handler];K(i)&&Gn(s,i,e)}}function Nc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Vr(c,l,o,!0)),Vr(c,t,o)),te(t)&&i.set(t,c),c}function Vr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Vr(e,i,n,!0),s&&s.forEach(o=>Vr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=kf[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const kf={data:uo,props:fo,emits:fo,methods:Bn,computed:Bn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Bn,directives:Bn,watch:Lf,provide:uo,inject:Df};function uo(e,t){return t?e?function(){return ve(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function Df(e,t){return Bn(Qs(e),Qs(t))}function Qs(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function Bn(e,t){return e?ve(Object.create(null),e,t):t}function fo(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:ve(Object.create(null),co(e),co(t??{})):t}function Lf(e,t){if(!e)return t;if(!t)return e;const n=ve(Object.create(null),e);for(const r in t)n[r]=we(e[r],t[r]);return n}function kc(){return{app:null,config:{isNativeTag:Ua,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xf=0;function Mf(e,t){return function(r,s=null){K(r)||(r=ve({},r)),s!=null&&!te(s)&&(s=null);const i=kc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:xf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:vd,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(l,...f)):K(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,h){if(!c){const g=l._ceVNode||Ne(r,s);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),e(g,u,h),c=!0,l._container=u,u.__vue_app__=l,ds(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(je(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=sn;sn=l;try{return u()}finally{sn=f}}};return l}}let sn=null;const Uf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ae(t)}Modifiers`]||e[`${an(t)}Modifiers`];function Ff(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||le;let s=n;const i=t.startsWith("update:"),o=i&&Uf(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>de(u)?u.trim():u)),o.number&&(s=n.map(ns)));let a,c=r[a=Es(t)]||r[a=Es(Ae(t))];!c&&i&&(c=r[a=Es(an(t))]),c&&je(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,je(l,e,6,s)}}const Bf=new WeakMap;function Dc(e,t,n=!1){const r=n?Bf:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!K(e)){const c=l=>{const u=Dc(l,t,!0);u&&(a=!0,ve(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(te(e)&&r.set(e,null),null):(U(i)?i.forEach(c=>o[c]=null):ve(o,i),te(e)&&r.set(e,o),o)}function us(e,t){return!e||!Xr(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,an(t))||se(e,t))}function ho(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:h,setupState:g,ctx:I,inheritAttrs:w}=e,M=Fr(e);let x,T;try{if(n.shapeFlag&4){const O=s||r,H=O;x=nt(l.call(H,O,u,f,g,h,I)),T=a}else{const O=t;x=nt(O.length>1?O(f,{attrs:a,slots:o,emit:c}):O(f,null)),T=t.props?a:Vf(a)}}catch(O){Yn.length=0,os(O,e,1),x=Ne(Ce)}let k=x;if(T&&w!==!1){const O=Object.keys(T),{shapeFlag:H}=k;O.length&&H&7&&(i&&O.some(Qr)&&(T=Hf(T,i)),k=$t(k,T,!1,!0))}return n.dirs&&(k=$t(k,null,!1,!0),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&sr(k,n.transition),x=k,Fr(M),x}const Vf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Xr(n))&&((t||(t={}))[n]=e[n]);return t},Hf=(e,t)=>{const n={};for(const r in e)(!Qr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function jf(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?po(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Lc(o,r,h)&&!us(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?po(r,o,l):!0:!!o;return!1}function po(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Lc(t,e,i)&&!us(n,i))return!0}return!1}function Lc(e,t,n){const r=e[n],s=t[n];return n==="style"&&te(r)&&te(s)?!Nn(r,s):r!==s}function $f({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const xc={},Mc=()=>Object.create(xc),Uc=e=>Object.getPrototypeOf(e)===xc;function Wf(e,t,n,r=!1){const s={},i=Mc();e.propsDefaults=Object.create(null),Fc(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:cc(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Kf(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=X(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(us(e.emitsOptions,h))continue;const g=t[h];if(c)if(se(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const I=Ae(h);s[I]=Zs(c,a,I,g,e,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{Fc(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!se(t,f)&&((u=an(f))===f||!se(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Zs(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!se(t,f))&&(delete i[f],l=!0)}l&&mt(e.attrs,"set","")}function Fc(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if($n(c))continue;const l=t[c];let u;s&&se(s,u=Ae(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:us(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=X(n),l=a||le;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Zs(s,c,f,l[f],e,!se(l,f))}}return o}function Zs(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=se(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&K(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=_r(s);r=l[n]=c.call(null,t),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===an(n))&&(r=!0))}return r}const Gf=new WeakMap;function Bc(e,t,n=!1){const r=n?Gf:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!K(e)){const u=f=>{c=!0;const[h,g]=Bc(f,t,!0);ve(o,h),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return te(e)&&r.set(e,mn),mn;if(U(i))for(let u=0;u<i.length;u++){const f=Ae(i[u]);go(f)&&(o[f]=le)}else if(i)for(const u in i){const f=Ae(u);if(go(f)){const h=i[u],g=o[f]=U(h)||K(h)?{type:h}:ve({},h),I=g.type;let w=!1,M=!0;if(U(I))for(let x=0;x<I.length;++x){const T=I[x],k=K(T)&&T.name;if(k==="Boolean"){w=!0;break}else k==="String"&&(M=!1)}else w=K(I)&&I.name==="Boolean";g[0]=w,g[1]=M,(w||se(g,"default"))&&a.push(f)}}const l=[o,a];return te(e)&&r.set(e,l),l}function go(e){return e[0]!=="$"&&!$n(e)}const Ni=e=>e==="_"||e==="_ctx"||e==="$stable",ki=e=>U(e)?e.map(nt):[nt(e)],zf=(e,t,n)=>{if(t._n)return t;const r=of((...s)=>ki(t(...s)),n);return r._c=!1,r},Vc=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ni(s))continue;const i=e[s];if(K(i))t[s]=zf(s,i,r);else if(i!=null){const o=ki(i);t[s]=()=>o}}},Hc=(e,t)=>{const n=ki(t);e.slots.default=()=>n},jc=(e,t,n)=>{for(const r in t)(n||!Ni(r))&&(e[r]=t[r])},qf=(e,t,n)=>{const r=e.slots=Mc();if(e.vnode.shapeFlag&32){const s=t._;s?(jc(r,t,n),n&&Ha(r,"_",s,!0)):Vc(t,r)}else t&&Hc(e,t)},Jf=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=le;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:jc(s,t,n):(i=!t.$stable,Vc(t,s)),o=t}else t&&(Hc(e,t),o={default:1});if(i)for(const a in s)!Ni(a)&&o[a]==null&&delete s[a]},Oe=ed;function Yf(e){return Xf(e)}function Xf(e,t){const n=rs();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=it,insertStaticContent:I}=e,w=(d,p,m,v=null,b=null,_=null,R=void 0,C=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!en(d,p)&&(v=y(d),Pe(d,b,_,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:E,ref:V,shapeFlag:D}=p;switch(E){case fs:M(d,p,m,v);break;case Ce:x(d,p,m,v);break;case Ps:d==null&&T(p,m,v,R);break;case tt:N(d,p,m,v,b,_,R,C,S);break;default:D&1?H(d,p,m,v,b,_,R,C,S):D&6?J(d,p,m,v,b,_,R,C,S):(D&64||D&128)&&E.process(d,p,m,v,b,_,R,C,S,F)}V!=null&&b?zn(V,d&&d.ref,_,p||d,!p):V==null&&d&&d.ref!=null&&zn(d.ref,null,_,d,!0)},M=(d,p,m,v)=>{if(d==null)r(p.el=a(p.children),m,v);else{const b=p.el=d.el;p.children!==d.children&&l(b,p.children)}},x=(d,p,m,v)=>{d==null?r(p.el=c(p.children||""),m,v):p.el=d.el},T=(d,p,m,v)=>{[d.el,d.anchor]=I(d.children,p,m,v,d.el,d.anchor)},k=({el:d,anchor:p},m,v)=>{let b;for(;d&&d!==p;)b=h(d),r(d,m,v),d=b;r(p,m,v)},O=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),s(d),d=m;s(p)},H=(d,p,m,v,b,_,R,C,S)=>{if(p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),d==null)ee(p,m,v,b,_,R,C,S);else{const E=d.el&&d.el._isVueCE?d.el:null;try{E&&E._beginPatch(),A(d,p,b,_,R,C,S)}finally{E&&E._endPatch()}}},ee=(d,p,m,v,b,_,R,C)=>{let S,E;const{props:V,shapeFlag:D,transition:B,dirs:W}=d;if(S=d.el=o(d.type,_,V&&V.is,V),D&8?u(S,d.children):D&16&&G(d.children,S,null,v,b,Rs(d,_),R,C),W&&zt(d,null,v,"created"),q(S,d,d.scopeId,R,v),V){for(const ae in V)ae!=="value"&&!$n(ae)&&i(S,ae,null,V[ae],_,v);"value"in V&&i(S,"value",null,V.value,_),(E=V.onVnodeBeforeMount)&&Qe(E,v,d)}W&&zt(d,null,v,"beforeMount");const Z=Qf(b,B);Z&&B.beforeEnter(S),r(S,p,m),((E=V&&V.onVnodeMounted)||Z||W)&&Oe(()=>{try{E&&Qe(E,v,d),Z&&B.enter(S),W&&zt(d,null,v,"mounted")}finally{}},b)},q=(d,p,m,v,b)=>{if(m&&g(d,m),v)for(let _=0;_<v.length;_++)g(d,v[_]);if(b){let _=b.subTree;if(p===_||Gc(_.type)&&(_.ssContent===p||_.ssFallback===p)){const R=b.vnode;q(d,R,R.scopeId,R.slotScopeIds,b.parent)}}},G=(d,p,m,v,b,_,R,C,S=0)=>{for(let E=S;E<d.length;E++){const V=d[E]=C?gt(d[E]):nt(d[E]);w(null,V,p,m,v,b,_,R,C)}},A=(d,p,m,v,b,_,R)=>{const C=p.el=d.el;let{patchFlag:S,dynamicChildren:E,dirs:V}=p;S|=d.patchFlag&16;const D=d.props||le,B=p.props||le;let W;if(m&&qt(m,!1),(W=B.onVnodeBeforeUpdate)&&Qe(W,m,p,d),V&&zt(p,d,m,"beforeUpdate"),m&&qt(m,!0),(D.innerHTML&&B.innerHTML==null||D.textContent&&B.textContent==null)&&u(C,""),E?$(d.dynamicChildren,E,C,m,v,Rs(p,b),_):R||ne(d,p,C,null,m,v,Rs(p,b),_,!1),S>0){if(S&16)Q(C,D,B,m,b);else if(S&2&&D.class!==B.class&&i(C,"class",null,B.class,b),S&4&&i(C,"style",D.style,B.style,b),S&8){const Z=p.dynamicProps;for(let ae=0;ae<Z.length;ae++){const ie=Z[ae],ge=D[ie],ye=B[ie];(ye!==ge||ie==="value")&&i(C,ie,ge,ye,b,m)}}S&1&&d.children!==p.children&&u(C,p.children)}else!R&&E==null&&Q(C,D,B,m,b);((W=B.onVnodeUpdated)||V)&&Oe(()=>{W&&Qe(W,m,p,d),V&&zt(p,d,m,"updated")},v)},$=(d,p,m,v,b,_,R)=>{for(let C=0;C<p.length;C++){const S=d[C],E=p[C],V=S.el&&(S.type===tt||!en(S,E)||S.shapeFlag&198)?f(S.el):m;w(S,E,V,null,v,b,_,R,!0)}},Q=(d,p,m,v,b)=>{if(p!==m){if(p!==le)for(const _ in p)!$n(_)&&!(_ in m)&&i(d,_,p[_],null,b,v);for(const _ in m){if($n(_))continue;const R=m[_],C=p[_];R!==C&&_!=="value"&&i(d,_,C,R,b,v)}"value"in m&&i(d,"value",p.value,m.value,b)}},N=(d,p,m,v,b,_,R,C,S)=>{const E=p.el=d?d.el:a(""),V=p.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:B,slotScopeIds:W}=p;W&&(C=C?C.concat(W):W),d==null?(r(E,m,v),r(V,m,v),G(p.children||[],m,V,b,_,R,C,S)):D>0&&D&64&&B&&d.dynamicChildren&&d.dynamicChildren.length===B.length?($(d.dynamicChildren,B,m,b,_,R,C),(p.key!=null||b&&p===b.subTree)&&$c(d,p,!0)):ne(d,p,m,V,b,_,R,C,S)},J=(d,p,m,v,b,_,R,C,S)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?b.ctx.activate(p,m,v,R,S):pe(p,m,v,b,_,R,S):Ie(d,p,S)},pe=(d,p,m,v,b,_,R)=>{const C=d.component=fd(d,v,b);if(cs(d)&&(C.ctx.renderer=F),dd(C,!1,R),C.asyncDep){if(b&&b.registerDep(C,oe,R),!d.el){const S=C.subTree=Ne(Ce);x(null,S,p,m),d.placeholder=S.el}}else oe(C,d,p,m,b,_,R)},Ie=(d,p,m)=>{const v=p.component=d.component;if(jf(d,p,m))if(v.asyncDep&&!v.asyncResolved){z(v,p,m);return}else v.next=p,v.update();else p.el=d.el,v.vnode=p},oe=(d,p,m,v,b,_,R)=>{const C=()=>{if(d.isMounted){let{next:D,bu:B,u:W,parent:Z,vnode:ae}=d;{const Ye=Wc(d);if(Ye){D&&(D.el=ae.el,z(d,D,R)),Ye.asyncDep.then(()=>{Oe(()=>{d.isUnmounted||E()},b)});return}}let ie=D,ge;qt(d,!1),D?(D.el=ae.el,z(d,D,R)):D=ae,B&&Rr(B),(ge=D.props&&D.props.onVnodeBeforeUpdate)&&Qe(ge,Z,D,ae),qt(d,!0);const ye=ho(d),Je=d.subTree;d.subTree=ye,w(Je,ye,f(Je.el),y(Je),d,b,_),D.el=ye.el,ie===null&&$f(d,ye.el),W&&Oe(W,b),(ge=D.props&&D.props.onVnodeUpdated)&&Oe(()=>Qe(ge,Z,D,ae),b)}else{let D;const{el:B,props:W}=p,{bm:Z,m:ae,parent:ie,root:ge,type:ye}=d,Je=qn(p);qt(d,!1),Z&&Rr(Z),!Je&&(D=W&&W.onVnodeBeforeMount)&&Qe(D,ie,p),qt(d,!0);{ge.ce&&ge.ce._hasShadowRoot()&&ge.ce._injectChildStyle(ye,d.parent?d.parent.type:void 0);const Ye=d.subTree=ho(d);w(null,Ye,m,v,d,b,_),p.el=Ye.el}if(ae&&Oe(ae,b),!Je&&(D=W&&W.onVnodeMounted)){const Ye=p;Oe(()=>Qe(D,ie,Ye),b)}(p.shapeFlag&256||ie&&qn(ie.vnode)&&ie.vnode.shapeFlag&256)&&d.a&&Oe(d.a,b),d.isMounted=!0,p=m=v=null}};d.scope.on();const S=d.effect=new qa(C);d.scope.off();const E=d.update=S.run.bind(S),V=d.job=S.runIfDirty.bind(S);V.i=d,V.id=d.uid,S.scheduler=()=>Pi(V),qt(d,!0),E()},z=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,Kf(d,p.props,v,m),Jf(d,p.children,m),Et(),ro(d),It()},ne=(d,p,m,v,b,_,R,C,S=!1)=>{const E=d&&d.children,V=d?d.shapeFlag:0,D=p.children,{patchFlag:B,shapeFlag:W}=p;if(B>0){if(B&128){Rt(E,D,m,v,b,_,R,C,S);return}else if(B&256){ut(E,D,m,v,b,_,R,C,S);return}}W&8?(V&16&&Ue(E,b,_),D!==E&&u(m,D)):V&16?W&16?Rt(E,D,m,v,b,_,R,C,S):Ue(E,b,_,!0):(V&8&&u(m,""),W&16&&G(D,m,v,b,_,R,C,S))},ut=(d,p,m,v,b,_,R,C,S)=>{d=d||mn,p=p||mn;const E=d.length,V=p.length,D=Math.min(E,V);let B;for(B=0;B<D;B++){const W=p[B]=S?gt(p[B]):nt(p[B]);w(d[B],W,m,null,b,_,R,C,S)}E>V?Ue(d,b,_,!0,!1,D):G(p,m,v,b,_,R,C,S,D)},Rt=(d,p,m,v,b,_,R,C,S)=>{let E=0;const V=p.length;let D=d.length-1,B=V-1;for(;E<=D&&E<=B;){const W=d[E],Z=p[E]=S?gt(p[E]):nt(p[E]);if(en(W,Z))w(W,Z,m,null,b,_,R,C,S);else break;E++}for(;E<=D&&E<=B;){const W=d[D],Z=p[B]=S?gt(p[B]):nt(p[B]);if(en(W,Z))w(W,Z,m,null,b,_,R,C,S);else break;D--,B--}if(E>D){if(E<=B){const W=B+1,Z=W<V?p[W].el:v;for(;E<=B;)w(null,p[E]=S?gt(p[E]):nt(p[E]),m,Z,b,_,R,C,S),E++}}else if(E>B)for(;E<=D;)Pe(d[E],b,_,!0),E++;else{const W=E,Z=E,ae=new Map;for(E=Z;E<=B;E++){const ke=p[E]=S?gt(p[E]):nt(p[E]);ke.key!=null&&ae.set(ke.key,E)}let ie,ge=0;const ye=B-Z+1;let Je=!1,Ye=0;const Ln=new Array(ye);for(E=0;E<ye;E++)Ln[E]=0;for(E=W;E<=D;E++){const ke=d[E];if(ge>=ye){Pe(ke,b,_,!0);continue}let Xe;if(ke.key!=null)Xe=ae.get(ke.key);else for(ie=Z;ie<=B;ie++)if(Ln[ie-Z]===0&&en(ke,p[ie])){Xe=ie;break}Xe===void 0?Pe(ke,b,_,!0):(Ln[Xe-Z]=E+1,Xe>=Ye?Ye=Xe:Je=!0,w(ke,p[Xe],m,null,b,_,R,C,S),ge++)}const Yi=Je?Zf(Ln):mn;for(ie=Yi.length-1,E=ye-1;E>=0;E--){const ke=Z+E,Xe=p[ke],Xi=p[ke+1],Qi=ke+1<V?Xi.el||Kc(Xi):v;Ln[E]===0?w(null,Xe,m,Qi,b,_,R,C,S):Je&&(ie<0||E!==Yi[ie]?qe(Xe,m,Qi,2):ie--)}}},qe=(d,p,m,v,b=null)=>{const{el:_,type:R,transition:C,children:S,shapeFlag:E}=d;if(E&6){qe(d.component.subTree,p,m,v);return}if(E&128){d.suspense.move(p,m,v);return}if(E&64){R.move(d,p,m,F);return}if(R===tt){r(_,p,m);for(let D=0;D<S.length;D++)qe(S[D],p,m,v);r(d.anchor,p,m);return}if(R===Ps){k(d,p,m);return}if(v!==2&&E&1&&C)if(v===0)C.persisted&&!_[Be]?r(_,p,m):(C.beforeEnter(_),r(_,p,m),Oe(()=>C.enter(_),b));else{const{leave:D,delayLeave:B,afterLeave:W}=C,Z=()=>{d.ctx.isUnmounted?s(_):r(_,p,m)},ae=()=>{const ie=_._isLeaving||!!_[Be];_._isLeaving&&_[Be](!0),C.persisted&&!ie?Z():D(_,()=>{Z(),W&&W()})};B?B(_,Z,ae):ae()}else r(_,p,m)},Pe=(d,p,m,v=!1,b=!1)=>{const{type:_,props:R,ref:C,children:S,dynamicChildren:E,shapeFlag:V,patchFlag:D,dirs:B,cacheIndex:W,memo:Z}=d;if(D===-2&&(b=!1),C!=null&&(Et(),zn(C,null,m,d,!0),It()),W!=null&&(p.renderCache[W]=void 0),V&256){p.ctx.deactivate(d);return}const ae=V&1&&B,ie=!qn(d);let ge;if(ie&&(ge=R&&R.onVnodeBeforeUnmount)&&Qe(ge,p,d),V&6)Gt(d.component,m,v);else{if(V&128){d.suspense.unmount(m,v);return}ae&&zt(d,null,p,"beforeUnmount"),V&64?d.type.remove(d,p,m,F,v):E&&!E.hasOnce&&(_!==tt||D>0&&D&64)?Ue(E,p,m,!1,!0):(_===tt&&D&384||!b&&V&16)&&Ue(S,p,m),v&&ln(d)}const ye=Z!=null&&W==null;(ie&&(ge=R&&R.onVnodeUnmounted)||ae||ye)&&Oe(()=>{ge&&Qe(ge,p,d),ae&&zt(d,null,p,"unmounted"),ye&&(d.el=null)},m)},ln=d=>{const{type:p,el:m,anchor:v,transition:b}=d;if(p===tt){un(m,v);return}if(p===Ps){O(d);return}const _=()=>{s(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:R,delayLeave:C}=b,S=()=>R(m,_);C?C(d.el,_,S):S()}else _()},un=(d,p)=>{let m;for(;d!==p;)m=h(d),s(d),d=m;s(p)},Gt=(d,p,m)=>{const{bum:v,scope:b,job:_,subTree:R,um:C,m:S,a:E}=d;mo(S),mo(E),v&&Rr(v),b.stop(),_&&(_.flags|=8,Pe(R,d,p,m)),C&&Oe(C,p),Oe(()=>{d.isUnmounted=!0},p)},Ue=(d,p,m,v=!1,b=!1,_=0)=>{for(let R=_;R<d.length;R++)Pe(d[R],p,m,v,b)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),m=p&&p[ff];return m?h(m):p};let L=!1;const P=(d,p,m)=>{let v;d==null?p._vnode&&(Pe(p._vnode,null,null,!0),v=p._vnode.component):w(p._vnode||null,d,p,null,null,null,m),p._vnode=d,L||(L=!0,ro(v),pc(),L=!1)},F={p:w,um:Pe,m:qe,r:ln,mt:pe,mc:G,pc:ne,pbc:$,n:y,o:e};return{render:P,hydrate:void 0,createApp:Mf(P)}}function Rs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function qt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Qf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $c(e,t,n=!1){const r=e.children,s=t.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=gt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&$c(o,a)),a.type===fs&&(a.patchFlag===-1&&(a=s[i]=gt(a)),a.el=o.el),a.type===Ce&&!a.el&&(a.el=o.el)}}function Zf(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Wc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Wc(t)}function mo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Kc(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Kc(t.subTree):null}const Gc=e=>e.__isSuspense;function ed(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):sf(e)}const tt=Symbol.for("v-fgt"),fs=Symbol.for("v-txt"),Ce=Symbol.for("v-cmt"),Ps=Symbol.for("v-stc"),Yn=[];let xe=null;function zc(e=!1){Yn.push(xe=e?null:[])}function td(){Yn.pop(),xe=Yn[Yn.length-1]||null}let ir=1;function Hr(e,t=!1){ir+=e,e<0&&xe&&t&&(xe.hasOnce=!0)}function qc(e){return e.dynamicChildren=ir>0?xe||mn:null,td(),ir>0&&xe&&xe.push(e),e}function nd(e,t,n,r,s,i){return qc(Yc(e,t,n,r,s,i,!0))}function rd(e,t,n,r,s){return qc(Ne(e,t,n,r,s,!0))}function jr(e){return e?e.__v_isVNode===!0:!1}function en(e,t){return e.type===t.type&&e.key===t.key}const Jc=({key:e})=>e??null,Or=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||fe(e)||K(e)?{i:Le,r:e,k:t,f:!!n}:e:null);function Yc(e,t=null,n=null,r=0,s=null,i=e===tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jc(t),ref:t&&Or(t),scopeId:mc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Le};return a?(Di(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),ir>0&&!o&&xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xe.push(c),c}const Ne=sd;function sd(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Af)&&(e=Ce),jr(e)){const a=$t(e,t,!0);return n&&Di(a,n),ir>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(e)]=a:xe.push(a)),a.patchFlag=-2,a}if(_d(e)&&(e=e.__vccOpts),t){t=id(t);let{class:a,style:c}=t;a&&!de(a)&&(t.class=yi(a)),te(c)&&(is(c)&&!U(c)&&(c=ve({},c)),t.style=vi(c))}const o=de(e)?1:Gc(e)?128:vc(e)?64:te(e)?4:K(e)?2:0;return Yc(e,t,n,r,s,o,i,!0)}function id(e){return e?is(e)||Uc(e)?ve({},e):e:null}function $t(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?cd(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Jc(l),ref:t&&t.ref?n&&i?U(i)?i.concat(Or(t)):[i,Or(t)]:Or(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==tt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$t(e.ssContent),ssFallback:e.ssFallback&&$t(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&sr(u,c.clone(u)),u}function od(e=" ",t=0){return Ne(fs,null,e,t)}function ad(e="",t=!1){return t?(zc(),rd(Ce,null,e)):Ne(Ce,null,e)}function nt(e){return e==null||typeof e=="boolean"?Ne(Ce):U(e)?Ne(tt,null,e.slice()):jr(e)?gt(e):Ne(fs,null,String(e))}function gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$t(e)}function Di(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Di(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Uc(t)?t._ctx=Le:s===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[od(t)]):n=8);e.children=t,e.shapeFlag|=n}function cd(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=yi([t.class,r.class]));else if(s==="style")t.style=vi([t.style,r.style]);else if(Xr(s)){const i=t[s],o=r[s];o&&i!==o&&!(U(i)&&i.includes(o))?t[s]=i?[].concat(i,o):o:o==null&&i==null&&!Qr(s)&&(t[s]=o)}else s!==""&&(t[s]=r[s])}return t}function Qe(e,t,n,r=null){je(e,t,7,[n,r])}const ld=kc();let ud=0;function fd(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||ld,i={uid:ud++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ka(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bc(r,s),emitsOptions:Dc(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ff.bind(null,i),e.ce&&e.ce(i),i}let Ee=null;const Li=()=>Ee||Le;let $r,ei;{const e=rs(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};$r=t("__VUE_INSTANCE_SETTERS__",n=>Ee=n),ei=t("__VUE_SSR_SETTERS__",n=>or=n)}const _r=e=>{const t=Ee;return $r(e),e.scope.on(),()=>{e.scope.off(),$r(t)}},_o=()=>{Ee&&Ee.scope.off(),$r(null)};function Xc(e){return e.vnode.shapeFlag&4}let or=!1;function dd(e,t=!1,n=!1){t&&ei(t);const{props:r,children:s}=e.vnode,i=Xc(e);Wf(e,r,i,t),qf(e,s,n||t);const o=i?hd(e,t):void 0;return t&&ei(!1),o}function hd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Pf);const{setup:r}=n;if(r){Et();const s=e.setupContext=r.length>1?gd(e):null,i=_r(e),o=mr(r,e,0,[e.props,s]),a=Fa(o);if(It(),i(),(a||e.sp)&&!qn(e)&&Tc(e),a){if(o.then(_o,_o),t)return o.then(c=>{vo(e,c)}).catch(c=>{os(c,e,0)});e.asyncDep=o}else vo(e,o)}else Qc(e)}function vo(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=uc(t)),Qc(e)}function Qc(e,t,n){const r=e.type;e.render||(e.render=r.render||it);{const s=_r(e);Et();try{Of(e)}finally{It(),s()}}}const pd={get(e,t){return be(e,"get",""),e[t]}};function gd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,pd),slots:e.slots,emit:e.emit,expose:t}}function ds(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(uc(Ai(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jn)return Jn[n](e)},has(t,n){return n in t||n in Jn}})):e.proxy}function md(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function _d(e){return K(e)&&"__vccOpts"in e}const De=(e,t)=>Zu(e,t,or);function xi(e,t,n){try{Hr(-1);const r=arguments.length;return r===2?te(t)&&!U(t)?jr(t)?Ne(e,null,[t]):Ne(e,t):Ne(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&jr(n)&&(n=[n]),Ne(e,t,n))}finally{Hr(1)}}const vd="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ti;const yo=typeof window<"u"&&window.trustedTypes;if(yo)try{ti=yo.createPolicy("vue",{createHTML:e=>e})}catch{}const Zc=ti?e=>ti.createHTML(e):e=>e,yd="http://www.w3.org/2000/svg",bd="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,bo=pt&&pt.createElement("template"),Ed={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?pt.createElementNS(yd,e):t==="mathml"?pt.createElementNS(bd,e):n?pt.createElement(e,{is:n}):pt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{bo.innerHTML=Zc(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=bo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pt="transition",Un="animation",ar=Symbol("_vtc"),el={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Id=ve({},yc,el),wd=e=>(e.displayName="Transition",e.props=Id,e),Ev=wd((e,{slots:t})=>xi(pf,Sd(e),t)),Jt=(e,t=[])=>{U(e)?e.forEach(n=>n(...t)):e&&e(...t)},Eo=e=>e?U(e)?e.some(t=>t.length>1):e.length>1:!1;function Sd(e){const t={};for(const N in e)N in el||(t[N]=e[N]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,I=Td(s),w=I&&I[0],M=I&&I[1],{onBeforeEnter:x,onEnter:T,onEnterCancelled:k,onLeave:O,onLeaveCancelled:H,onBeforeAppear:ee=x,onAppear:q=T,onAppearCancelled:G=k}=t,A=(N,J,pe,Ie)=>{N._enterCancelled=Ie,Yt(N,J?u:a),Yt(N,J?l:o),pe&&pe()},$=(N,J)=>{N._isLeaving=!1,Yt(N,f),Yt(N,g),Yt(N,h),J&&J()},Q=N=>(J,pe)=>{const Ie=N?q:T,oe=()=>A(J,N,pe);Jt(Ie,[J,oe]),Io(()=>{Yt(J,N?c:i),dt(J,N?u:a),Eo(Ie)||wo(J,r,w,oe)})};return ve(t,{onBeforeEnter(N){Jt(x,[N]),dt(N,i),dt(N,o)},onBeforeAppear(N){Jt(ee,[N]),dt(N,c),dt(N,l)},onEnter:Q(!1),onAppear:Q(!0),onLeave(N,J){N._isLeaving=!0;const pe=()=>$(N,J);dt(N,f),N._enterCancelled?(dt(N,h),Co(N)):(Co(N),dt(N,h)),Io(()=>{N._isLeaving&&(Yt(N,f),dt(N,g),Eo(O)||wo(N,r,M,pe))}),Jt(O,[N,pe])},onEnterCancelled(N){A(N,!1,void 0,!0),Jt(k,[N])},onAppearCancelled(N){A(N,!0,void 0,!0),Jt(G,[N])},onLeaveCancelled(N){$(N),Jt(H,[N])}})}function Td(e){if(e==null)return null;if(te(e))return[Os(e.enter),Os(e.leave)];{const t=Os(e);return[t,t]}}function Os(e){return _u(e)}function dt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[ar]||(e[ar]=new Set)).add(t)}function Yt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[ar];n&&(n.delete(t),n.size||(e[ar]=void 0))}function Io(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Cd=0;function wo(e,t,n,r){const s=e._endId=++Cd,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Ad(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,h),i()},h=g=>{g.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),e.addEventListener(l,h)}function Ad(e,t){const n=window.getComputedStyle(e),r=I=>(n[I]||"").split(", "),s=r(`${Pt}Delay`),i=r(`${Pt}Duration`),o=So(s,i),a=r(`${Un}Delay`),c=r(`${Un}Duration`),l=So(a,c);let u=null,f=0,h=0;t===Pt?o>0&&(u=Pt,f=o,h=i.length):t===Un?l>0&&(u=Un,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?Pt:Un:null,h=u?u===Pt?i.length:c.length:0);const g=u===Pt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Pt}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:g}}function So(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>To(n)+To(e[r])))}function To(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Co(e){return(e?e.ownerDocument:document).body.offsetHeight}function Rd(e,t,n){const r=e[ar];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ao=Symbol("_vod"),Pd=Symbol("_vsh"),Od=Symbol(""),Nd=/(?:^|;)\s*display\s*:/;function kd(e,t,n){const r=e.style,s=de(n);let i=!1;if(n&&!s){if(t)if(de(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Vn(r,a,"")}else for(const o in t)n[o]==null&&Vn(r,o,"");for(const o in n){o==="display"&&(i=!0);const a=n[o];a!=null?Ld(e,o,!de(t)&&t?t[o]:void 0,a)||Vn(r,o,a):Vn(r,o,"")}}else if(s){if(t!==n){const o=r[Od];o&&(n+=";"+o),r.cssText=n,i=Nd.test(n)}}else t&&e.removeAttribute("style");Ao in e&&(e[Ao]=i?r.display:"",e[Pd]&&(r.display="none"))}const Ro=/\s*!important$/;function Vn(e,t,n){if(U(n))n.forEach(r=>Vn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Dd(e,t);Ro.test(n)?e.setProperty(an(r),n.replace(Ro,""),"important"):e[r]=n}}const Po=["Webkit","Moz","ms"],Ns={};function Dd(e,t){const n=Ns[t];if(n)return n;let r=Ae(t);if(r!=="filter"&&r in e)return Ns[t]=r;r=ts(r);for(let s=0;s<Po.length;s++){const i=Po[s]+r;if(i in e)return Ns[t]=i}return t}function Ld(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&de(r)&&n===r}const Oo="http://www.w3.org/1999/xlink";function No(e,t,n,r,s,i=wu(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Oo,t.slice(6,t.length)):e.setAttributeNS(Oo,t,n):n==null||i&&!ja(n)?e.removeAttribute(t):e.setAttribute(t,i?"":He(n)?String(n):n)}function ko(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Zc(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=ja(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function xt(e,t,n,r){e.addEventListener(t,n,r)}function xd(e,t,n,r){e.removeEventListener(t,n,r)}const Do=Symbol("_vei");function Md(e,t,n,r,s=null){const i=e[Do]||(e[Do]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=Ud(t);if(r){const l=i[t]=Vd(r,s);xt(e,a,l,c)}else o&&(xd(e,a,o,c),i[t]=void 0)}}const Lo=/(?:Once|Passive|Capture)$/;function Ud(e){let t;if(Lo.test(e)){t={};let r;for(;r=e.match(Lo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):an(e.slice(2)),t]}let ks=0;const Fd=Promise.resolve(),Bd=()=>ks||(Fd.then(()=>ks=0),ks=Date.now());function Vd(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(U(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),a=[r];for(let c=0;c<o.length&&!r._stopped;c++){const l=o[c];l&&je(l,t,5,a)}}else je(s,t,5,[r])};return n.value=e,n.attached=Bd(),n}const xo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hd=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?Rd(e,r,o):t==="style"?kd(e,n,r):Xr(t)?Qr(t)||Md(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jd(e,t,r,o))?(ko(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&No(e,t,r,o,i,t!=="value")):e._isVueCE&&($d(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!de(r)))?ko(e,Ae(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),No(e,t,r,o))};function jd(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&xo(t)&&K(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xo(t)&&de(n)?!1:t in e}function $d(e,t){const n=e._def.props;if(!n)return!1;const r=Ae(t);return Array.isArray(n)?n.some(s=>Ae(s)===r):Object.keys(n).some(s=>Ae(s)===r)}const Sn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return U(t)?n=>Rr(t,n):t};function Wd(e){e.target.composing=!0}function Mo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const bt=Symbol("_assign");function Uo(e,t,n){return t&&(e=e.trim()),n&&(e=ns(e)),e}const Iv={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[bt]=Sn(s);const i=r||s.props&&s.props.type==="number";xt(e,t?"change":"input",o=>{o.target.composing||e[bt](Uo(e.value,n,i))}),(n||i)&&xt(e,"change",()=>{e.value=Uo(e.value,n,i)}),t||(xt(e,"compositionstart",Wd),xt(e,"compositionend",Mo),xt(e,"change",Mo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(e[bt]=Sn(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?ns(e.value):e.value,c=t??"";if(a===c)return;const l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===c)||(e.value=c)}},wv={deep:!0,created(e,t,n){e[bt]=Sn(n),xt(e,"change",()=>{const r=e._modelValue,s=cr(e),i=e.checked,o=e[bt];if(U(r)){const a=bi(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(On(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(tl(e,i))})},mounted:Fo,beforeUpdate(e,t,n){e[bt]=Sn(n),Fo(e,t,n)}};function Fo(e,{value:t,oldValue:n},r){e._modelValue=t;let s;if(U(t))s=bi(t,r.props.value)>-1;else if(On(t))s=t.has(r.props.value);else{if(t===n)return;s=Nn(t,tl(e,!0))}e.checked!==s&&(e.checked=s)}const Sv={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=On(t);xt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?ns(cr(o)):cr(o));e[bt](e.multiple?s?new Set(i):i:i[0]),e._assigning=!0,as(()=>{e._assigning=!1})}),e[bt]=Sn(r)},mounted(e,{value:t}){Bo(e,t)},beforeUpdate(e,t,n){e[bt]=Sn(n)},updated(e,{value:t}){e._assigning||Bo(e,t)}};function Bo(e,t){const n=e.multiple,r=U(t);if(!(n&&!r&&!On(t))){for(let s=0,i=e.options.length;s<i;s++){const o=e.options[s],a=cr(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=t.some(l=>String(l)===String(a)):o.selected=bi(t,a)>-1}else o.selected=t.has(a);else if(Nn(cr(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function cr(e){return"_value"in e?e._value:e.value}function tl(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Kd=["ctrl","shift","alt","meta"],Gd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Kd.some(n=>e[`${n}Key`]&&!t.includes(n))},Tv=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const a=Gd[t[o]];if(a&&a(s,t))return}return e(s,...i)})},zd=ve({patchProp:Hd},Ed);let Vo;function qd(){return Vo||(Vo=Yf(zd))}const Jd=(...e)=>{const t=qd().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Xd(r);if(!s)return;const i=t._component;!K(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Yd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Yd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Xd(e){return de(e)?document.querySelector(e):e}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let nl;const hs=e=>nl=e,rl=Symbol();function ni(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Xn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Xn||(Xn={}));function Qd(){const e=Ga(!0),t=e.run(()=>Ri({}));let n=[],r=[];const s=Ai({install(i){hs(s),s._a=i,i.provide(rl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const sl=()=>{};function Ho(e,t,n,r=sl){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&za()&&Cu(s),s}function dn(e,...t){e.slice().forEach(n=>{n(...t)})}const Zd=e=>e(),jo=Symbol(),Ds=Symbol();function ri(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];ni(s)&&ni(r)&&e.hasOwnProperty(n)&&!fe(r)&&!ot(r)?e[n]=ri(s,r):e[n]=r}return e}const eh=Symbol();function th(e){return!ni(e)||!e.hasOwnProperty(eh)}const{assign:kt}=Object;function nh(e){return!!(fe(e)&&e.effect)}function rh(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=qu(n.state.value[e]);return kt(u,i,Object.keys(o||{}).reduce((f,h)=>(f[h]=Ai(De(()=>{hs(n);const g=n._s.get(e);return o[h].call(g,g)})),f),{}))}return c=il(e,l,t,n,r,!0),c}function il(e,t,n={},r,s,i){let o;const a=kt({actions:{}},n),c={deep:!0};let l,u,f=[],h=[],g;const I=r.state.value[e];!i&&!I&&(r.state.value[e]={});let w;function M(G){let A;l=u=!1,typeof G=="function"?(G(r.state.value[e]),A={type:Xn.patchFunction,storeId:e,events:g}):(ri(r.state.value[e],G),A={type:Xn.patchObject,payload:G,storeId:e,events:g});const $=w=Symbol();as().then(()=>{w===$&&(l=!0)}),u=!0,dn(f,A,r.state.value[e])}const x=i?function(){const{state:A}=n,$=A?A():{};this.$patch(Q=>{kt(Q,$)})}:sl;function T(){o.stop(),f=[],h=[],r._s.delete(e)}const k=(G,A="")=>{if(jo in G)return G[Ds]=A,G;const $=function(){hs(r);const Q=Array.from(arguments),N=[],J=[];function pe(z){N.push(z)}function Ie(z){J.push(z)}dn(h,{args:Q,name:$[Ds],store:H,after:pe,onError:Ie});let oe;try{oe=G.apply(this&&this.$id===e?this:H,Q)}catch(z){throw dn(J,z),z}return oe instanceof Promise?oe.then(z=>(dn(N,z),z)).catch(z=>(dn(J,z),Promise.reject(z))):(dn(N,oe),oe)};return $[jo]=!0,$[Ds]=A,$},O={_p:r,$id:e,$onAction:Ho.bind(null,h),$patch:M,$reset:x,$subscribe(G,A={}){const $=Ho(f,G,A.detached,()=>Q()),Q=o.run(()=>Gn(()=>r.state.value[e],N=>{(A.flush==="sync"?u:l)&&G({storeId:e,type:Xn.direct,events:g},N)},kt({},c,A)));return $},$dispose:T},H=gr(O);r._s.set(e,H);const q=(r._a&&r._a.runWithContext||Zd)(()=>r._e.run(()=>(o=Ga()).run(()=>t({action:k}))));for(const G in q){const A=q[G];if(fe(A)&&!nh(A)||ot(A))i||(I&&th(A)&&(fe(A)?A.value=I[G]:ri(A,I[G])),r.state.value[e][G]=A);else if(typeof A=="function"){const $=k(A,G);q[G]=$,a.actions[G]=A}}return kt(H,q),kt(X(H),q),Object.defineProperty(H,"$state",{get:()=>r.state.value[e],set:G=>{M(A=>{kt(A,G)})}}),r._p.forEach(G=>{kt(H,o.run(()=>G({store:H,app:r._a,pinia:r,options:a})))}),I&&i&&n.hydrate&&n.hydrate(H.$state,I),l=!0,u=!0,H}/*! #__NO_SIDE_EFFECTS__ */function Cv(e,t,n){let r,s;const i=typeof t=="function";r=e,s=i?n:t;function o(a,c){const l=af();return a=a||(l?Ve(rl,null):null),a&&hs(a),a=nl,a._s.has(r)||(i?il(r,t,s,a):rh(r,s,a)),a._s.get(r)}return o.$id=r,o}function Av(e){{const t=X(e),n={};for(const r in t){const s=t[r];s.effect?n[r]=De({get:()=>e[r],set(i){e[r]=i}}):(fe(s)||ot(s))&&(n[r]=Xu(e,r))}return n}}const sh=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},ih={class:"app-root"},oh={__name:"App",setup(e){return(t,n)=>{const r=Cf("router-view");return zc(),nd("div",ih,[Ne(r)])}}},ah=sh(oh,[["__scopeId","data-v-327732a5"]]),ch="modulepreload",lh=function(e){return"/WatchingSecretly/"+e},$o={},Xt=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=lh(c),c in $o)return;$o[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":ch,l||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((h,g)=>{f.addEventListener("load",h),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const pn=typeof document<"u";function ol(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function uh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ol(e.default)}const re=Object.assign;function Ls(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ge(s)?s.map(e):e(s)}return n}const Qn=()=>{},Ge=Array.isArray;function Wo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const al=/#/g,fh=/&/g,dh=/\//g,hh=/=/g,ph=/\?/g,cl=/\+/g,gh=/%5B/g,mh=/%5D/g,ll=/%5E/g,_h=/%60/g,ul=/%7B/g,vh=/%7C/g,fl=/%7D/g,yh=/%20/g;function Mi(e){return e==null?"":encodeURI(""+e).replace(vh,"|").replace(gh,"[").replace(mh,"]")}function bh(e){return Mi(e).replace(ul,"{").replace(fl,"}").replace(ll,"^")}function si(e){return Mi(e).replace(cl,"%2B").replace(yh,"+").replace(al,"%23").replace(fh,"%26").replace(_h,"`").replace(ul,"{").replace(fl,"}").replace(ll,"^")}function Eh(e){return si(e).replace(hh,"%3D")}function Ih(e){return Mi(e).replace(al,"%23").replace(ph,"%3F")}function wh(e){return Ih(e).replace(dh,"%2F")}function lr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Sh=/\/$/,Th=e=>e.replace(Sh,"");function xs(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=t.slice(0,c),i=t.slice(c,a>0?a:t.length),s=e(i.slice(1))),a>=0&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Ph(r??t,n),{fullPath:r+i+o,path:r,query:s,hash:lr(o)}}function Ch(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ko(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ah(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Tn(t.matched[r],n.matched[s])&&dl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Tn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function dl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Rh(e[n],t[n]))return!1;return!0}function Rh(e,t){return Ge(e)?Go(e,t):Ge(t)?Go(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Go(e,t){return Ge(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ph(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ii=function(e){return e.pop="pop",e.push="push",e}({}),Ms=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function Oh(e){if(!e)if(pn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Th(e)}const Nh=/^[^#]+#/;function kh(e,t){return e.replace(Nh,"#")+t}function Dh(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ps=()=>({left:window.scrollX,top:window.scrollY});function Lh(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Dh(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function zo(e,t){return(history.state?history.state.position-t:-1)+e}const oi=new Map;function xh(e,t){oi.set(e,t)}function Mh(e){const t=oi.get(e);return oi.delete(e),t}function Uh(e){return typeof e=="string"||e&&typeof e=="object"}function hl(e){return typeof e=="string"||typeof e=="symbol"}let he=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const pl=Symbol("");he.MATCHER_NOT_FOUND+"",he.NAVIGATION_GUARD_REDIRECT+"",he.NAVIGATION_ABORTED+"",he.NAVIGATION_CANCELLED+"",he.NAVIGATION_DUPLICATED+"";function Cn(e,t){return re(new Error,{type:e,[pl]:!0},t)}function ht(e,t){return e instanceof Error&&pl in e&&(t==null||!!(e.type&t))}const Fh=["params","query","hash"];function Bh(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Fh)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Vh(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(cl," "),i=s.indexOf("="),o=lr(i<0?s:s.slice(0,i)),a=i<0?null:lr(s.slice(i+1));if(o in t){let c=t[o];Ge(c)||(c=t[o]=[c]),c.push(a)}else t[o]=a}return t}function qo(e){let t="";for(let n in e){const r=e[n];if(n=Eh(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ge(r)?r.map(s=>s&&si(s)):[r&&si(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Hh(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ge(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const jh=Symbol(""),Jo=Symbol(""),gs=Symbol(""),Ui=Symbol(""),ai=Symbol("");function Fn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Lt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(Cn(he.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?c(h):Uh(h)?c(Cn(he.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(h=>c(h))})}function Us(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(ol(c)){const l=(c.__vccOpts||c)[t];l&&i.push(Lt(l,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=uh(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[t];return h&&Lt(h,n,r,o,a,s)()}))}}return i}function $h(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>Tn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Tn(l,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Wh=()=>location.protocol+"//"+location.host;function gl(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let o=s.includes(e.slice(i))?e.slice(i).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),Ko(a,"")}return Ko(n,e)+r+s}function Kh(e,t,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=gl(e,location),I=n.value,w=t.value;let M=0;if(h){if(n.value=g,t.value=h,o&&o===I){o=null;return}M=w?h.position-w.position:0}else r(g);s.forEach(x=>{x(n.value,I,{delta:M,type:ii.pop,direction:M?M>0?Ms.forward:Ms.back:Ms.unknown})})};function c(){o=n.value}function l(h){s.push(h);const g=()=>{const I=s.indexOf(h);I>-1&&s.splice(I,1)};return i.push(g),g}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(re({},h.state,{scroll:ps()}),"")}}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:l,destroy:f}}function Yo(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ps():null}}function Gh(e){const{history:t,location:n}=window,r={value:gl(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Wh()+e+c;try{t[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){i(c,re({},t.state,Yo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position}),!0),r.value=c}function a(c,l){const u=re({},s.value,t.state,{forward:c,scroll:ps()});i(u.current,u,!0),i(c,re({},Yo(r.value,c,null),{position:u.position+1},l),!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function zh(e){e=Oh(e);const t=Gh(e),n=Kh(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:e,go:r,createHref:kh.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function qh(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),zh(e)}let tn=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var me=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(me||{});const Jh={type:tn.Static,value:""},Yh=/[a-zA-Z0-9_]/;function Xh(e){if(!e)return[[]];if(e==="/")return[[Jh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=me.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===me.Static?i.push({type:tn.Static,value:l}):n===me.Param||n===me.ParamRegExp||n===me.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:tn.Param,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==me.ParamRegExp){r=n,n=me.EscapeNext;continue}switch(n){case me.Static:c==="/"?(l&&f(),o()):c===":"?(f(),n=me.Param):h();break;case me.EscapeNext:h(),n=r;break;case me.Param:c==="("?n=me.ParamRegExp:Yh.test(c)?h():(f(),n=me.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case me.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=me.ParamRegExpEnd:u+=c;break;case me.ParamRegExpEnd:f(),n=me.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===me.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}const Xo="[^/]+?",Qh={sensitive:!1,strict:!1,start:!0,end:!0};var Se=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(Se||{});const Zh=/[.+*?^${}()[\]/\\]/g;function ep(e,t){const n=re({},Qh,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[Se.Root];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let g=Se.Segment+(n.sensitive?Se.BonusCaseSensitive:0);if(h.type===tn.Static)f||(s+="/"),s+=h.value.replace(Zh,"\\$&"),g+=Se.Static;else if(h.type===tn.Param){const{value:I,repeatable:w,optional:M,regexp:x}=h;i.push({name:I,repeatable:w,optional:M});const T=x||Xo;if(T!==Xo){g+=Se.BonusCustomRegExp;try{`${T}`}catch(O){throw new Error(`Invalid custom RegExp for param "${I}" (${T}): `+O.message)}}let k=w?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;f||(k=M&&l.length<2?`(?:/${k})`:"/"+k),M&&(k+="?"),s+=k,g+=Se.Dynamic,M&&(g+=Se.BonusOptional),w&&(g+=Se.BonusRepeatable),T===".*"&&(g+=Se.BonusWildcard)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=Se.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",I=i[h-1];f[I.name]=g&&I.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===tn.Static)u+=g.value;else if(g.type===tn.Param){const{value:I,repeatable:w,optional:M}=g,x=I in l?l[I]:"";if(Ge(x)&&!w)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const T=Ge(x)?x.join("/"):x;if(!T)if(M)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);u+=T}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function tp(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Se.Static+Se.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Se.Static+Se.Segment?1:-1:0}function ml(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=tp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Qo(r))return 1;if(Qo(s))return-1}return s.length-r.length}function Qo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const np={strict:!1,end:!0,sensitive:!1};function rp(e,t,n){const r=ep(Xh(e.path),n),s=re(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function sp(e,t){const n=[],r=new Map;t=Wo(np,t);function s(f){return r.get(f)}function i(f,h,g){const I=!g,w=ea(f);w.aliasOf=g&&g.record;const M=Wo(t,f),x=[w];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const H of O)x.push(ea(re({},w,{components:g?g.record.components:w.components,path:H,aliasOf:g?g.record:w})))}let T,k;for(const O of x){const{path:H}=O;if(h&&H[0]!=="/"){const ee=h.record.path,q=ee[ee.length-1]==="/"?"":"/";O.path=h.record.path+(H&&q+H)}if(T=rp(O,h,M),g?g.alias.push(T):(k=k||T,k!==T&&k.alias.push(T),I&&f.name&&!ta(T)&&o(f.name)),_l(T)&&c(T),w.children){const ee=w.children;for(let q=0;q<ee.length;q++)i(ee[q],T,g&&g.children[q])}g=g||T}return k?()=>{o(k)}:Qn}function o(f){if(hl(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const h=ap(f,n);n.splice(h,0,f),f.record.name&&!ta(f)&&r.set(f.record.name,f)}function l(f,h){let g,I={},w,M;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Cn(he.MATCHER_NOT_FOUND,{location:f});M=g.record.name,I=re(Zo(h.params,g.keys.filter(k=>!k.optional).concat(g.parent?g.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),f.params&&Zo(f.params,g.keys.map(k=>k.name))),w=g.stringify(I)}else if(f.path!=null)w=f.path,g=n.find(k=>k.re.test(w)),g&&(I=g.parse(w),M=g.record.name);else{if(g=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!g)throw Cn(he.MATCHER_NOT_FOUND,{location:f,currentLocation:h});M=g.record.name,I=re({},h.params,f.params),w=g.stringify(I)}const x=[];let T=g;for(;T;)x.unshift(T.record),T=T.parent;return{name:M,path:w,params:I,matched:x,meta:op(x)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Zo(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ea(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ip(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ip(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ta(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function op(e){return e.reduce((t,n)=>re(t,n.meta),{})}function ap(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;ml(e,t[i])<0?r=i:n=i+1}const s=cp(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function cp(e){let t=e;for(;t=t.parent;)if(_l(t)&&ml(e,t)===0)return t}function _l({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function na(e){const t=Ve(gs),n=Ve(Ui),r=De(()=>{const c=rn(e.to);return t.resolve(c)}),s=De(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Tn.bind(null,u));if(h>-1)return h;const g=ra(c[l-2]);return l>1&&ra(u)===g&&f[f.length-1].path!==g?f.findIndex(Tn.bind(null,c[l-2])):h}),i=De(()=>s.value>-1&&hp(n.params,r.value.params)),o=De(()=>s.value>-1&&s.value===n.matched.length-1&&dl(n.params,r.value.params));function a(c={}){if(dp(c)){const l=t[rn(e.replace)?"replace":"push"](rn(e.to)).catch(Qn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:De(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function lp(e){return e.length===1?e[0]:e}const up=Sc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:na,setup(e,{slots:t}){const n=gr(na(e)),{options:r}=Ve(gs),s=De(()=>({[sa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[sa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&lp(t.default(n));return e.custom?i:xi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),fp=up;function dp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function hp(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ge(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function ra(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const sa=(e,t,n)=>e??t??n,pp=Sc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ve(ai),s=De(()=>e.route||r.value),i=Ve(Jo,0),o=De(()=>{let l=rn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=De(()=>s.value.matched[o.value]);Pr(Jo,De(()=>o.value+1)),Pr(jh,a),Pr(ai,s);const c=Ri();return Gn(()=>[c.value,a.value,e.name],([l,u,f],[h,g,I])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Tn(u,g)||!h)&&(u.enterCallbacks[f]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,h=f&&f.components[u];if(!h)return ia(n.default,{Component:h,route:l});const g=f.props[u],I=g?g===!0?l.params:typeof g=="function"?g(l):g:null,M=xi(h,re({},I,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return ia(n.default,{Component:M,route:l})||M}}});function ia(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const gp=pp;function mp(e){const t=sp(e.routes,e),n=e.parseQuery||Vh,r=e.stringifyQuery||qo,s=e.history,i=Fn(),o=Fn(),a=Fn(),c=Ku(Ot);let l=Ot;pn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ls.bind(null,y=>""+y),f=Ls.bind(null,wh),h=Ls.bind(null,lr);function g(y,L){let P,F;return hl(y)?(P=t.getRecordMatcher(y),F=L):F=y,t.addRoute(F,P)}function I(y){const L=t.getRecordMatcher(y);L&&t.removeRoute(L)}function w(){return t.getRoutes().map(y=>y.record)}function M(y){return!!t.getRecordMatcher(y)}function x(y,L){if(L=re({},L||c.value),typeof y=="string"){const m=xs(n,y,L.path),v=t.resolve({path:m.path},L),b=s.createHref(m.fullPath);return re(m,v,{params:h(v.params),hash:lr(m.hash),redirectedFrom:void 0,href:b})}let P;if(y.path!=null)P=re({},y,{path:xs(n,y.path,L.path).path});else{const m=re({},y.params);for(const v in m)m[v]==null&&delete m[v];P=re({},y,{params:f(m)}),L.params=f(L.params)}const F=t.resolve(P,L),Y=y.hash||"";F.params=u(h(F.params));const d=Ch(r,re({},y,{hash:bh(Y),path:F.path})),p=s.createHref(d);return re({fullPath:d,hash:Y,query:r===qo?Hh(y.query):y.query||{}},F,{redirectedFrom:void 0,href:p})}function T(y){return typeof y=="string"?xs(n,y,c.value.path):re({},y)}function k(y,L){if(l!==y)return Cn(he.NAVIGATION_CANCELLED,{from:L,to:y})}function O(y){return q(y)}function H(y){return O(re(T(y),{replace:!0}))}function ee(y,L){const P=y.matched[y.matched.length-1];if(P&&P.redirect){const{redirect:F}=P;let Y=typeof F=="function"?F(y,L):F;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=T(Y):{path:Y},Y.params={}),re({query:y.query,hash:y.hash,params:Y.path!=null?{}:y.params},Y)}}function q(y,L){const P=l=x(y),F=c.value,Y=y.state,d=y.force,p=y.replace===!0,m=ee(P,F);if(m)return q(re(T(m),{state:typeof m=="object"?re({},Y,m.state):Y,force:d,replace:p}),L||P);const v=P;v.redirectedFrom=L;let b;return!d&&Ah(r,F,P)&&(b=Cn(he.NAVIGATION_DUPLICATED,{to:v,from:F}),qe(F,F,!0,!1)),(b?Promise.resolve(b):$(v,F)).catch(_=>ht(_)?ht(_,he.NAVIGATION_GUARD_REDIRECT)?_:Rt(_):ne(_,v,F)).then(_=>{if(_){if(ht(_,he.NAVIGATION_GUARD_REDIRECT))return q(re({replace:p},T(_.to),{state:typeof _.to=="object"?re({},Y,_.to.state):Y,force:d}),L||v)}else _=N(v,F,!0,p,Y);return Q(v,F,_),_})}function G(y,L){const P=k(y,L);return P?Promise.reject(P):Promise.resolve()}function A(y){const L=un.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(y):y()}function $(y,L){let P;const[F,Y,d]=$h(y,L);P=Us(F.reverse(),"beforeRouteLeave",y,L);for(const m of F)m.leaveGuards.forEach(v=>{P.push(Lt(v,y,L))});const p=G.bind(null,y,L);return P.push(p),Ue(P).then(()=>{P=[];for(const m of i.list())P.push(Lt(m,y,L));return P.push(p),Ue(P)}).then(()=>{P=Us(Y,"beforeRouteUpdate",y,L);for(const m of Y)m.updateGuards.forEach(v=>{P.push(Lt(v,y,L))});return P.push(p),Ue(P)}).then(()=>{P=[];for(const m of d)if(m.beforeEnter)if(Ge(m.beforeEnter))for(const v of m.beforeEnter)P.push(Lt(v,y,L));else P.push(Lt(m.beforeEnter,y,L));return P.push(p),Ue(P)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),P=Us(d,"beforeRouteEnter",y,L,A),P.push(p),Ue(P))).then(()=>{P=[];for(const m of o.list())P.push(Lt(m,y,L));return P.push(p),Ue(P)}).catch(m=>ht(m,he.NAVIGATION_CANCELLED)?m:Promise.reject(m))}function Q(y,L,P){a.list().forEach(F=>A(()=>F(y,L,P)))}function N(y,L,P,F,Y){const d=k(y,L);if(d)return d;const p=L===Ot,m=pn?history.state:{};P&&(F||p?s.replace(y.fullPath,re({scroll:p&&m&&m.scroll},Y)):s.push(y.fullPath,Y)),c.value=y,qe(y,L,P,p),Rt()}let J;function pe(){J||(J=s.listen((y,L,P)=>{if(!Gt.listening)return;const F=x(y),Y=ee(F,Gt.currentRoute.value);if(Y){q(re(Y,{replace:!0,force:!0}),F).catch(Qn);return}l=F;const d=c.value;pn&&xh(zo(d.fullPath,P.delta),ps()),$(F,d).catch(p=>ht(p,he.NAVIGATION_ABORTED|he.NAVIGATION_CANCELLED)?p:ht(p,he.NAVIGATION_GUARD_REDIRECT)?(q(re(T(p.to),{force:!0}),F).then(m=>{ht(m,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&!P.delta&&P.type===ii.pop&&s.go(-1,!1)}).catch(Qn),Promise.reject()):(P.delta&&s.go(-P.delta,!1),ne(p,F,d))).then(p=>{p=p||N(F,d,!1),p&&(P.delta&&!ht(p,he.NAVIGATION_CANCELLED)?s.go(-P.delta,!1):P.type===ii.pop&&ht(p,he.NAVIGATION_ABORTED|he.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),Q(F,d,p)}).catch(Qn)}))}let Ie=Fn(),oe=Fn(),z;function ne(y,L,P){Rt(y);const F=oe.list();return F.length?F.forEach(Y=>Y(y,L,P)):console.error(y),Promise.reject(y)}function ut(){return z&&c.value!==Ot?Promise.resolve():new Promise((y,L)=>{Ie.add([y,L])})}function Rt(y){return z||(z=!y,pe(),Ie.list().forEach(([L,P])=>y?P(y):L()),Ie.reset()),y}function qe(y,L,P,F){const{scrollBehavior:Y}=e;if(!pn||!Y)return Promise.resolve();const d=!P&&Mh(zo(y.fullPath,0))||(F||!P)&&history.state&&history.state.scroll||null;return as().then(()=>Y(y,L,d)).then(p=>p&&Lh(p)).catch(p=>ne(p,y,L))}const Pe=y=>s.go(y);let ln;const un=new Set,Gt={currentRoute:c,listening:!0,addRoute:g,removeRoute:I,clearRoutes:t.clearRoutes,hasRoute:M,getRoutes:w,resolve:x,options:e,push:O,replace:H,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:oe.add,isReady:ut,install(y){y.component("RouterLink",fp),y.component("RouterView",gp),y.config.globalProperties.$router=Gt,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>rn(c)}),pn&&!ln&&c.value===Ot&&(ln=!0,O(s.location).catch(F=>{}));const L={};for(const F in Ot)Object.defineProperty(L,F,{get:()=>c.value[F],enumerable:!0});y.provide(gs,Gt),y.provide(Ui,cc(L)),y.provide(ai,c);const P=y.unmount;un.add(y),y.unmount=function(){un.delete(y),un.size<1&&(l=Ot,J&&J(),J=null,c.value=Ot,ln=!1,z=!1),P()}}};function Ue(y){return y.reduce((L,P)=>L.then(()=>A(P)),Promise.resolve())}return Gt}function Rv(){return Ve(gs)}function Pv(e){return Ve(Ui)}const _p=()=>{};var oa={};/**
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
 */const vl=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},vp=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},yl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),r.push(n[u],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):vp(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new yp;const h=i<<2|a>>4;if(r.push(h),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const I=l<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class yp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bp=function(e){const t=vl(e);return yl.encodeByteArray(t,!0)},bl=function(e){return bp(e).replace(/\./g,"")},El=function(e){try{return yl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ep(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ip=()=>Ep().__FIREBASE_DEFAULTS__,wp=()=>{if(typeof process>"u"||typeof oa>"u")return;const e=oa.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Sp=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&El(e[1]);return t&&JSON.parse(t)},Fi=()=>{try{return _p()||Ip()||wp()||Sp()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Tp=e=>{var t,n;return(n=(t=Fi())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Il=()=>{var e;return(e=Fi())===null||e===void 0?void 0:e.config},wl=e=>{var t;return(t=Fi())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Cp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ms(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ap(e){return(await fetch(e,{credentials:"include"})).ok}const Zn={};function Rp(){const e={prod:[],emulator:[]};for(const t of Object.keys(Zn))Zn[t]?e.emulator.push(t):e.prod.push(t);return e}function Pp(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let aa=!1;function Op(e,t){if(typeof window>"u"||typeof document>"u"||!ms(window.location.host)||Zn[e]===t||Zn[e]||aa)return;Zn[e]=t;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",i=Rp().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,g){h.setAttribute("width","24"),h.setAttribute("id",g),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function l(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{aa=!0,o()},h}function u(h,g){h.setAttribute("id",g),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function f(){const h=Pp(r),g=n("text"),I=document.getElementById(g)||document.createElement("span"),w=n("learnmore"),M=document.getElementById(w)||document.createElement("a"),x=n("preprendIcon"),T=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const k=h.element;a(k),u(M,w);const O=l();c(T,x),k.append(T,I,M,O),document.body.appendChild(k)}i?(I.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Np(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function kp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Dp(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Lp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xp(){const e=Re();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Mp(){try{return typeof indexedDB=="object"}catch{return!1}}function Up(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Fp="FirebaseError";class Wt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Fp,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Bp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Wt(s,a,r)}}function Bp(e,t){return e.replace(Vp,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Vp=/\{\$([^}]+)}/g;function Hp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function An(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(ca(i)&&ca(o)){if(!An(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ca(e){return e!==null&&typeof e=="object"}/**
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
 */function yr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Hn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function jn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function jp(e,t){const n=new $p(e,t);return n.subscribe.bind(n)}class $p{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Wp(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Fs),s.error===void 0&&(s.error=Fs),s.complete===void 0&&(s.complete=Fs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wp(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Fs(){}/**
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
 */function At(e){return e&&e._delegate?e._delegate:e}class Rn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class Kp{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Cp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zp(t))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zt){return this.instances.has(t)}getOptions(t=Zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gp(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Zt){return this.component?this.component.multipleInstances?t:Zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gp(e){return e===Zt?void 0:e}function zp(e){return e.instantiationMode==="EAGER"}/**
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
 */class qp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Kp(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ce||(ce={}));const Jp={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Yp=ce.INFO,Xp={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Qp=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Xp[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Sl{constructor(t){this.name=t,this._logLevel=Yp,this._logHandler=Qp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ce))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Jp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...t),this._logHandler(this,ce.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...t),this._logHandler(this,ce.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...t),this._logHandler(this,ce.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...t),this._logHandler(this,ce.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...t),this._logHandler(this,ce.ERROR,...t)}}const Zp=(e,t)=>t.some(n=>e instanceof n);let la,ua;function eg(){return la||(la=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tg(){return ua||(ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tl=new WeakMap,ci=new WeakMap,Cl=new WeakMap,Bs=new WeakMap,Bi=new WeakMap;function ng(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Vt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Tl.set(n,e)}).catch(()=>{}),Bi.set(t,e),t}function rg(e){if(ci.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ci.set(e,t)}let li={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ci.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Cl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function sg(e){li=e(li)}function ig(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Vs(this),t,...n);return Cl.set(r,t.sort?t.sort():[t]),Vt(r)}:tg().includes(e)?function(...t){return e.apply(Vs(this),t),Vt(Tl.get(this))}:function(...t){return Vt(e.apply(Vs(this),t))}}function og(e){return typeof e=="function"?ig(e):(e instanceof IDBTransaction&&rg(e),Zp(e,eg())?new Proxy(e,li):e)}function Vt(e){if(e instanceof IDBRequest)return ng(e);if(Bs.has(e))return Bs.get(e);const t=og(e);return t!==e&&(Bs.set(e,t),Bi.set(t,e)),t}const Vs=e=>Bi.get(e);function ag(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Vt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Vt(o.result),c.oldVersion,c.newVersion,Vt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const cg=["get","getKey","getAll","getAllKeys","count"],lg=["put","add","delete","clear"],Hs=new Map;function fa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Hs.get(t))return Hs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=lg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Hs.set(t,i),i}sg(e=>({...e,get:(t,n,r)=>fa(t,n)||e.get(t,n,r),has:(t,n)=>!!fa(t,n)||e.has(t,n)}));/**
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
 */class ug{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fg(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ui="@firebase/app",da="0.13.2";/**
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
 */const St=new Sl("@firebase/app"),dg="@firebase/app-compat",hg="@firebase/analytics-compat",pg="@firebase/analytics",gg="@firebase/app-check-compat",mg="@firebase/app-check",_g="@firebase/auth",vg="@firebase/auth-compat",yg="@firebase/database",bg="@firebase/data-connect",Eg="@firebase/database-compat",Ig="@firebase/functions",wg="@firebase/functions-compat",Sg="@firebase/installations",Tg="@firebase/installations-compat",Cg="@firebase/messaging",Ag="@firebase/messaging-compat",Rg="@firebase/performance",Pg="@firebase/performance-compat",Og="@firebase/remote-config",Ng="@firebase/remote-config-compat",kg="@firebase/storage",Dg="@firebase/storage-compat",Lg="@firebase/firestore",xg="@firebase/ai",Mg="@firebase/firestore-compat",Ug="firebase",Fg="11.10.0";/**
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
 */const fi="[DEFAULT]",Bg={[ui]:"fire-core",[dg]:"fire-core-compat",[pg]:"fire-analytics",[hg]:"fire-analytics-compat",[mg]:"fire-app-check",[gg]:"fire-app-check-compat",[_g]:"fire-auth",[vg]:"fire-auth-compat",[yg]:"fire-rtdb",[bg]:"fire-data-connect",[Eg]:"fire-rtdb-compat",[Ig]:"fire-fn",[wg]:"fire-fn-compat",[Sg]:"fire-iid",[Tg]:"fire-iid-compat",[Cg]:"fire-fcm",[Ag]:"fire-fcm-compat",[Rg]:"fire-perf",[Pg]:"fire-perf-compat",[Og]:"fire-rc",[Ng]:"fire-rc-compat",[kg]:"fire-gcs",[Dg]:"fire-gcs-compat",[Lg]:"fire-fst",[Mg]:"fire-fst-compat",[xg]:"fire-vertex","fire-js":"fire-js",[Ug]:"fire-js-all"};/**
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
 */const Wr=new Map,Vg=new Map,di=new Map;function ha(e,t){try{e.container.addComponent(t)}catch(n){St.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ur(e){const t=e.name;if(di.has(t))return St.debug(`There were multiple attempts to register component ${t}.`),!1;di.set(t,e);for(const n of Wr.values())ha(n,e);for(const n of Vg.values())ha(n,e);return!0}function Al(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function st(e){return e==null?!1:e.settings!==void 0}/**
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
 */const Hg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new vr("app","Firebase",Hg);/**
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
 */class jg{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const br=Fg;function Rl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:fi,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Ht.create("bad-app-name",{appName:String(s)});if(n||(n=Il()),!n)throw Ht.create("no-options");const i=Wr.get(s);if(i){if(An(n,i.options)&&An(r,i.config))return i;throw Ht.create("duplicate-app",{appName:s})}const o=new qp(s);for(const c of di.values())o.addComponent(c);const a=new jg(n,r,o);return Wr.set(s,a),a}function $g(e=fi){const t=Wr.get(e);if(!t&&e===fi&&Il())return Rl();if(!t)throw Ht.create("no-app",{appName:e});return t}function yn(e,t,n){var r;let s=(r=Bg[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),St.warn(a.join(" "));return}ur(new Rn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Wg="firebase-heartbeat-database",Kg=1,fr="firebase-heartbeat-store";let js=null;function Pl(){return js||(js=ag(Wg,Kg,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(fr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ht.create("idb-open",{originalErrorMessage:e.message})})),js}async function Gg(e){try{const n=(await Pl()).transaction(fr),r=await n.objectStore(fr).get(Ol(e));return await n.done,r}catch(t){if(t instanceof Wt)St.warn(t.message);else{const n=Ht.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});St.warn(n.message)}}}async function pa(e,t){try{const r=(await Pl()).transaction(fr,"readwrite");await r.objectStore(fr).put(t,Ol(e)),await r.done}catch(n){if(n instanceof Wt)St.warn(n.message);else{const r=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});St.warn(r.message)}}}function Ol(e){return`${e.name}!${e.options.appId}`}/**
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
 */const zg=1024,qg=30;class Jg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ga();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>qg){const o=Qg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){St.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ga(),{heartbeatsToSend:r,unsentEntries:s}=Yg(this._heartbeatsCache.heartbeats),i=bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return St.warn(n),""}}}function ga(){return new Date().toISOString().substring(0,10)}function Yg(e,t=zg){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ma(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ma(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Xg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mp()?Up().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ma(e){return bl(JSON.stringify({version:2,heartbeats:e})).length}function Qg(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function Zg(e){ur(new Rn("platform-logger",t=>new ug(t),"PRIVATE")),ur(new Rn("heartbeat",t=>new Jg(t),"PRIVATE")),yn(ui,da,e),yn(ui,da,"esm2017"),yn("fire-js","")}Zg("");var em="firebase",tm="11.10.0";/**
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
 */yn(em,tm,"app");function Vi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Nl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nm=Nl,kl=new vr("auth","Firebase",Nl());/**
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
 */const Kr=new Sl("@firebase/auth");function rm(e,...t){Kr.logLevel<=ce.WARN&&Kr.warn(`Auth (${br}): ${e}`,...t)}function Nr(e,...t){Kr.logLevel<=ce.ERROR&&Kr.error(`Auth (${br}): ${e}`,...t)}/**
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
 */function ze(e,...t){throw Hi(e,...t)}function at(e,...t){return Hi(e,...t)}function Dl(e,t,n){const r=Object.assign(Object.assign({},nm()),{[t]:n});return new vr("auth","Firebase",r).create(t,{appName:e.name})}function jt(e){return Dl(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hi(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return kl.create(e,...t)}function j(e,t,...n){if(!e)throw Hi(t,...n)}function vt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Nr(t),new Error(t)}function Tt(e,t){e||vt(t)}/**
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
 */function hi(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function sm(){return _a()==="http:"||_a()==="https:"}function _a(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function im(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sm()||Dp()||"connection"in navigator)?navigator.onLine:!0}function om(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Er{constructor(t,n){this.shortDelay=t,this.longDelay=n,Tt(n>t,"Short delay should be less than long delay!"),this.isMobile=Np()||Lp()}get(){return im()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ji(e,t){Tt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Ll{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const am={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lm=new Er(3e4,6e4);function cn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Kt(e,t,n,r,s={}){return xl(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=yr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:c},i);return kp()||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&ms(e.emulatorConfig.host)&&(l.credentials="include"),Ll.fetch()(await Ml(e,e.config.apiHost,n,a),l)})}async function xl(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},am),t);try{const s=new fm(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ar(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ar(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ar(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Dl(e,u,l);ze(e,u)}}catch(s){if(s instanceof Wt)throw s;ze(e,"network-request-failed",{message:String(s)})}}async function _s(e,t,n,r,s={}){const i=await Kt(e,t,n,r,s);return"mfaPendingCredential"in i&&ze(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ml(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?ji(e.config,s):`${e.config.apiScheme}://${s}`;return cm.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function um(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),lm.get())})}}function Ar(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=at(e,t,r);return s.customData._tokenResponse=n,s}function va(e){return e!==void 0&&e.enterprise!==void 0}class dm{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return um(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function hm(e,t){return Kt(e,"GET","/v2/recaptchaConfig",cn(e,t))}/**
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
 */async function pm(e,t){return Kt(e,"POST","/v1/accounts:delete",t)}async function Gr(e,t){return Kt(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function er(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function gm(e,t=!1){const n=At(e),r=await n.getIdToken(t),s=$i(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:er($s(s.auth_time)),issuedAtTime:er($s(s.iat)),expirationTime:er($s(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $s(e){return Number(e)*1e3}function $i(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Nr("JWT malformed, contained fewer than 3 sections"),null;try{const s=El(n);return s?JSON.parse(s):(Nr("Failed to decode base64 JWT payload"),null)}catch(s){return Nr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ya(e){const t=$i(e);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function dr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Wt&&mm(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function mm({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class _m{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pi{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=er(this.lastLoginAt),this.creationTime=er(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await dr(e,Gr(n,{idToken:r}));j(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Ul(i.providerUserInfo):[],a=ym(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new pi(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function vm(e){const t=At(e);await zr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ym(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Ul(e){return e.map(t=>{var{providerId:n}=t,r=Vi(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function bm(e,t){const n=await xl(e,{},async()=>{const r=yr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=await Ml(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return e.emulatorConfig&&ms(e.emulatorConfig.host)&&(c.credentials="include"),Ll.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Em(e,t){return Kt(e,"POST","/v2/accounts:revokeToken",cn(e,t))}/**
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
 */class bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ya(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){j(t.length!==0,"internal-error");const n=ya(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await bm(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new bn;return r&&(j(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new bn,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
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
 */function Nt(e,t){j(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class $e{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Vi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _m(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await dr(this,this.stsTokenManager.getToken(this.auth,t));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return gm(this,t)}reload(){return vm(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new $e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await zr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject(jt(this.auth));const t=await this.getIdToken();return await dr(this,pm(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,T=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:O,isAnonymous:H,providerData:ee,stsTokenManager:q}=n;j(k&&q,t,"internal-error");const G=bn.fromJSON(this.name,q);j(typeof k=="string",t,"internal-error"),Nt(f,t.name),Nt(h,t.name),j(typeof O=="boolean",t,"internal-error"),j(typeof H=="boolean",t,"internal-error"),Nt(g,t.name),Nt(I,t.name),Nt(w,t.name),Nt(M,t.name),Nt(x,t.name),Nt(T,t.name);const A=new $e({uid:k,auth:t,email:h,emailVerified:O,displayName:f,isAnonymous:H,photoURL:I,phoneNumber:g,tenantId:w,stsTokenManager:G,createdAt:x,lastLoginAt:T});return ee&&Array.isArray(ee)&&(A.providerData=ee.map($=>Object.assign({},$))),M&&(A._redirectEventId=M),A}static async _fromIdTokenResponse(t,n,r=!1){const s=new bn;s.updateFromServerResponse(n);const i=new $e({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await zr(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ul(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new bn;a.updateFromIdToken(r);const c=new $e({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const ba=new Map;function yt(e){Tt(e instanceof Function,"Expected a class definition");let t=ba.get(e);return t?(Tt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ba.set(e,t),t)}/**
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
 */class Fl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Fl.type="NONE";const Ea=Fl;/**
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
 */function kr(e,t,n){return`firebase:${e}:${t}:${n}`}class En{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=kr(this.userKey,s.apiKey,i),this.fullPersistenceKey=kr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Gr(this.auth,{idToken:t}).catch(()=>{});return n?$e._fromGetAccountInfoResponse(this.auth,n,t):null}return $e._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new En(yt(Ea),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||yt(Ea);const o=kr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const h=await Gr(t,{idToken:u}).catch(()=>{});if(!h)break;f=await $e._fromGetAccountInfoResponse(t,h,u)}else f=$e._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new En(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new En(i,t,r))}}/**
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
 */function Ia(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(jl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Bl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Wl(t))return"Blackberry";if(Kl(t))return"Webos";if(Vl(t))return"Safari";if((t.includes("chrome/")||Hl(t))&&!t.includes("edge/"))return"Chrome";if($l(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bl(e=Re()){return/firefox\//i.test(e)}function Vl(e=Re()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Hl(e=Re()){return/crios\//i.test(e)}function jl(e=Re()){return/iemobile/i.test(e)}function $l(e=Re()){return/android/i.test(e)}function Wl(e=Re()){return/blackberry/i.test(e)}function Kl(e=Re()){return/webos/i.test(e)}function Wi(e=Re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Im(e=Re()){var t;return Wi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function wm(){return xp()&&document.documentMode===10}function Gl(e=Re()){return Wi(e)||$l(e)||Kl(e)||Wl(e)||/windows phone/i.test(e)||jl(e)}/**
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
 */function zl(e,t=[]){let n;switch(e){case"Browser":n=Ia(Re());break;case"Worker":n=`${Ia(Re())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${br}/${r}`}/**
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
 */class Sm{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Tm(e,t={}){return Kt(e,"GET","/v2/passwordPolicy",cn(e,t))}/**
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
 */const Cm=6;class Am{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Cm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class Rm{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wa(this),this.idTokenSubscription=new wa(this),this.beforeStateQueue=new Sm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await En.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Gr(this,{idToken:t}),r=await $e._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(st(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await zr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=om()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(st(this.app))return Promise.reject(jt(this));const n=t?At(t):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject(jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return st(this.app)?Promise.reject(jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Tm(this),n=new Am(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new vr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Em(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&yt(t)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=zl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;if(st(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&rm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kn(e){return At(e)}class wa{constructor(t){this.auth=t,this.observer=null,this.addObserver=jp(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pm(e){vs=e}function ql(e){return vs.loadJS(e)}function Om(){return vs.recaptchaEnterpriseScript}function Nm(){return vs.gapiScript}function km(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class Dm{constructor(){this.enterprise=new Lm}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class Lm{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const xm="recaptcha-enterprise",Jl="NO_RECAPTCHA";class Mm{constructor(t){this.type=xm,this.auth=kn(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{hm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new dm(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;va(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(Jl)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Dm().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&va(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Om();c.length!==0&&(c+=a),ql(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Sa(e,t,n,r=!1,s=!1){const i=new Mm(e);let o;if(s)o=Jl;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ta(e,t,n,r,s){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Sa(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Sa(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(o)})}/**
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
 */function Um(e,t){const n=Al(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(An(i,t??{}))return s;ze(s,"already-initialized")}return n.initialize({options:t})}function Fm(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Bm(e,t,n){const r=kn(e);j(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=Yl(t),{host:o,port:a}=Vm(t),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(An(l,r.config.emulator)&&An(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ms(o)?(Ap(`${i}//${o}${c}`),Op("Auth",!0)):Hm()}function Yl(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Vm(e){const t=Yl(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ca(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ca(o)}}}function Ca(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Hm(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Ki{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return vt("not implemented")}_getIdTokenResponse(t){return vt("not implemented")}_linkToIdToken(t,n){return vt("not implemented")}_getReauthenticationResolver(t){return vt("not implemented")}}async function jm(e,t){return Kt(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function $m(e,t){return _s(e,"POST","/v1/accounts:signInWithPassword",cn(e,t))}/**
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
 */async function Wm(e,t){return _s(e,"POST","/v1/accounts:signInWithEmailLink",cn(e,t))}async function Km(e,t){return _s(e,"POST","/v1/accounts:signInWithEmailLink",cn(e,t))}/**
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
 */class hr extends Ki{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new hr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new hr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ta(t,n,"signInWithPassword",$m);case"emailLink":return Wm(t,{email:this._email,oobCode:this._password});default:ze(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ta(t,r,"signUpPassword",jm);case"emailLink":return Km(t,{idToken:n,email:this._email,oobCode:this._password});default:ze(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function In(e,t){return _s(e,"POST","/v1/accounts:signInWithIdp",cn(e,t))}/**
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
 */const Gm="http://localhost";class on extends Ki{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new on(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Vi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new on(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return In(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,In(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,In(t,n)}buildRequest(){const t={requestUri:Gm,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=yr(n)}return t}}/**
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
 */function zm(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qm(e){const t=Hn(jn(e)).link,n=t?Hn(jn(t)).deep_link_id:null,r=Hn(jn(e)).deep_link_id;return(r?Hn(jn(r)).link:null)||r||n||t||e}class Gi{constructor(t){var n,r,s,i,o,a;const c=Hn(jn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=zm((s=c.mode)!==null&&s!==void 0?s:null);j(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=qm(t);try{return new Gi(n)}catch{return null}}}/**
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
 */class Dn{constructor(){this.providerId=Dn.PROVIDER_ID}static credential(t,n){return hr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Gi.parseLink(n);return j(r,"argument-error"),hr._fromEmailAndCode(t,r.code,r.tenantId)}}Dn.PROVIDER_ID="password";Dn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Dn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ir extends Xl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Mt extends Ir{constructor(){super("facebook.com")}static credential(t){return on._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mt.credential(t.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
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
 */class Ut extends Ir{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return on._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
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
 */class Ft extends Ir{constructor(){super("github.com")}static credential(t){return on._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ft.credential(t.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
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
 */class Bt extends Ir{constructor(){super("twitter.com")}static credential(t,n){return on._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
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
 */class Pn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await $e._fromIdTokenResponse(t,r,s),o=Aa(r);return new Pn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Aa(r);return new Pn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Aa(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class qr extends Wt{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new qr(t,n,r,s)}}function Ql(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qr._fromErrorAndOperation(e,i,t,r):i})}async function Jm(e,t,n=!1){const r=await dr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Pn._forOperation(e,"link",r)}/**
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
 */async function Ym(e,t,n=!1){const{auth:r}=e;if(st(r.app))return Promise.reject(jt(r));const s="reauthenticate";try{const i=await dr(e,Ql(r,s,t,e),n);j(i.idToken,r,"internal-error");const o=$i(i.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(e.uid===a,r,"user-mismatch"),Pn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),i}}/**
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
 */async function Zl(e,t,n=!1){if(st(e.app))return Promise.reject(jt(e));const r="signIn",s=await Ql(e,r,t),i=await Pn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Xm(e,t){return Zl(kn(e),t)}/**
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
 */async function Qm(e){const t=kn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function Zm(e,t,n){return st(e.app)?Promise.reject(jt(e)):Xm(At(e),Dn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qm(e),r})}function e_(e,t,n,r){return At(e).onIdTokenChanged(t,n,r)}function t_(e,t,n){return At(e).beforeAuthStateChanged(t,n)}function n_(e,t,n,r){return At(e).onAuthStateChanged(t,n,r)}function r_(e){return At(e).signOut()}const Jr="__sak";/**
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
 */class eu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jr,"1"),this.storage.removeItem(Jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const s_=1e3,i_=10;class tu extends eu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gl(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);wm()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,i_):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},s_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}tu.type="LOCAL";const o_=tu;/**
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
 */class nu extends eu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}nu.type="SESSION";const ru=nu;/**
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
 */function a_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ys{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new ys(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await a_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ys.receivers=[];/**
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
 */function zi(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class c_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=zi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ct(){return window}function l_(e){ct().location.href=e}/**
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
 */function su(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function u_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function d_(){return su()?self:null}/**
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
 */const iu="firebaseLocalStorageDb",h_=1,Yr="firebaseLocalStorage",ou="fbase_key";class wr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bs(e,t){return e.transaction([Yr],t?"readwrite":"readonly").objectStore(Yr)}function p_(){const e=indexedDB.deleteDatabase(iu);return new wr(e).toPromise()}function gi(){const e=indexedDB.open(iu,h_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Yr,{keyPath:ou})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Yr)?t(r):(r.close(),await p_(),t(await gi()))})})}async function Ra(e,t,n){const r=bs(e,!0).put({[ou]:t,value:n});return new wr(r).toPromise()}async function g_(e,t){const n=bs(e,!1).get(t),r=await new wr(n).toPromise();return r===void 0?null:r.value}function Pa(e,t){const n=bs(e,!0).delete(t);return new wr(n).toPromise()}const m_=800,__=3;class au{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>__)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return su()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ys._getInstance(d_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await u_(),!this.activeServiceWorker)return;this.sender=new c_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||f_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await gi();return await Ra(t,Jr,"1"),await Pa(t,Jr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ra(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>g_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pa(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=bs(s,!1).getAll();return new wr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),m_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}au.type="LOCAL";const v_=au;new Er(3e4,6e4);/**
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
 */function y_(e,t){return t?yt(t):(j(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class qi extends Ki{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return In(t,this._buildIdpRequest())}_linkToIdToken(t,n){return In(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return In(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function b_(e){return Zl(e.auth,new qi(e),e.bypassAuthState)}function E_(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),Ym(n,new qi(e),e.bypassAuthState)}async function I_(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),Jm(n,new qi(e),e.bypassAuthState)}/**
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
 */class cu{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return b_;case"linkViaPopup":case"linkViaRedirect":return I_;case"reauthViaPopup":case"reauthViaRedirect":return E_;default:ze(this.auth,"internal-error")}}resolve(t){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const w_=new Er(2e3,1e4);class gn extends cu{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const t=zi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,w_.get())};t()}}gn.currentPopupAction=null;/**
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
 */const S_="pendingRedirect",Dr=new Map;class T_ extends cu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Dr.get(this.auth._key());if(!t){try{const r=await C_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Dr.set(this.auth._key(),t)}return this.bypassAuthState||Dr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function C_(e,t){const n=P_(t),r=R_(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function A_(e,t){Dr.set(e._key(),t)}function R_(e){return yt(e._redirectPersistence)}function P_(e){return kr(S_,e.config.apiKey,e.name)}async function O_(e,t,n=!1){if(st(e.app))return Promise.reject(jt(e));const r=kn(e),s=y_(r,t),o=await new T_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const N_=10*60*1e3;class k_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!D_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!lu(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=N_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oa(t))}saveEventToCache(t){this.cachedEventUids.add(Oa(t)),this.lastProcessedEventTime=Date.now()}}function Oa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function lu({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function D_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lu(e);default:return!1}}/**
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
 */async function L_(e,t={}){return Kt(e,"GET","/v1/projects",t)}/**
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
 */const x_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,M_=/^https?/;async function U_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await L_(e);for(const n of t)try{if(F_(n))return}catch{}ze(e,"unauthorized-domain")}function F_(e){const t=hi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!M_.test(n))return!1;if(x_.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const B_=new Er(3e4,6e4);function Na(){const e=ct().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function V_(e){return new Promise((t,n)=>{var r,s,i;function o(){Na(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Na(),n(at(e,"network-request-failed"))},timeout:B_.get()})}if(!((s=(r=ct().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=ct().gapi)===null||i===void 0)&&i.load)o();else{const a=km("iframefcb");return ct()[a]=()=>{gapi.load?o():n(at(e,"network-request-failed"))},ql(`${Nm()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Lr=null,t})}let Lr=null;function H_(e){return Lr=Lr||V_(e),Lr}/**
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
 */const j_=new Er(5e3,15e3),$_="__/auth/iframe",W_="emulator/auth/iframe",K_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},G_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function z_(e){const t=e.config;j(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ji(t,W_):`https://${e.config.authDomain}/${$_}`,r={apiKey:t.apiKey,appName:e.name,v:br},s=G_.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${yr(r).slice(1)}`}async function q_(e){const t=await H_(e),n=ct().gapi;return j(n,e,"internal-error"),t.open({where:document.body,url:z_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:K_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=at(e,"network-request-failed"),a=ct().setTimeout(()=>{i(o)},j_.get());function c(){ct().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const J_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y_=500,X_=600,Q_="_blank",Z_="http://localhost";class ka{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ev(e,t,n,r=Y_,s=X_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},J_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Re().toLowerCase();n&&(a=Hl(l)?Q_:n),Bl(l)&&(t=t||Z_,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,I])=>`${h}${g}=${I},`,"");if(Im(l)&&a!=="_self")return tv(t||"",a),new ka(null);const f=window.open(t||"",a,u);j(f,e,"popup-blocked");try{f.focus()}catch{}return new ka(f)}function tv(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nv="__/auth/handler",rv="emulator/auth/handler",sv=encodeURIComponent("fac");async function Da(e,t,n,r,s,i){j(e.config.authDomain,e,"auth-domain-config-required"),j(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:br,eventId:s};if(t instanceof Xl){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Hp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof Ir){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${sv}=${encodeURIComponent(c)}`:"";return`${iv(e)}?${yr(a).slice(1)}${l}`}function iv({config:e}){return e.emulator?ji(e,rv):`https://${e.authDomain}/${nv}`}/**
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
 */const Ws="webStorageSupport";class ov{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ru,this._completeRedirectFn=O_,this._overrideRedirectResult=A_}async _openPopup(t,n,r,s){var i;Tt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Da(t,n,r,hi(),s);return ev(t,o,zi())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Da(t,n,r,hi(),s);return l_(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Tt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await q_(t),r=new k_(t);return n.register("authEvent",s=>(j(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ws,{type:Ws},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ws];o!==void 0&&n(!!o),ze(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=U_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gl()||Vl()||Wi()}}const av=ov;var La="@firebase/auth",xa="1.10.8";/**
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
 */class cv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lv(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uv(e){ur(new Rn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zl(e)},l=new Rm(r,s,i,c);return Fm(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ur(new Rn("auth-internal",t=>{const n=kn(t.getProvider("auth").getImmediate());return(r=>new cv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(La,xa,lv(e)),yn(La,xa,"esm2017")}/**
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
 */const fv=5*60,dv=wl("authIdTokenMaxAge")||fv;let Ma=null;const hv=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dv)return;const s=n==null?void 0:n.token;Ma!==s&&(Ma=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pv(e=$g()){const t=Al(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Um(e,{popupRedirectResolver:av,persistence:[v_,o_,ru]}),r=wl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=hv(i.toString());t_(n,o,()=>o(n.currentUser)),e_(n,a=>o(a))}}const s=Tp("auth");return s&&Bm(n,`http://${s}`),n}function gv(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Pm({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=at("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uv("Browser");const uu={apiKey:"AIzaSyD0mA5L4ljZsvzei1yQ5Hm3hRsgyjdsKbk",authDomain:"watchingsecretly-328c7.firebaseapp.com",projectId:"watchingsecretly-328c7",appId:"1:22152448573:web:4a23f9de5b982fb43cb854"},fu=!!uu.apiKey;fu||console.warn("[firebase] VITE_FIREBASE_* が未設定です。frontend/.env を作成してください。");let lt=null;if(fu){const e=Rl(uu);lt=pv(e)}async function Ov(e,t){if(!lt)throw new Error("Firebase が未設定です（.env を確認）");return(await Zm(lt,e,t)).user}async function Nv(){lt&&await r_(lt)}function mv(){return new Promise(e=>{if(!lt){e(null);return}const t=n_(lt,n=>{t(),e(n)})})}async function kv(){return!lt||!lt.currentUser?null:lt.currentUser.getIdToken()}const _v=[{path:"/",name:"login",component:()=>Xt(()=>import("./LoginView-Dy3t1zRp.js"),__vite__mapDeps([0,1]))},{path:"/menu",name:"menu",component:()=>Xt(()=>import("./MainMenuView-Dctqhk2t.js"),__vite__mapDeps([2,3])),meta:{requiresAuth:!0}},{path:"/new-game",name:"new-game",component:()=>Xt(()=>import("./NewGameView-B8iMx9Bq.js"),__vite__mapDeps([4,5,6])),meta:{requiresAuth:!0}},{path:"/help",name:"help",component:()=>Xt(()=>import("./HelpView-ChG20BzO.js"),__vite__mapDeps([7,8,9]))},{path:"/admin/logs",name:"logs",component:()=>Xt(()=>import("./LogsView-CUTeXA7-.js"),__vite__mapDeps([10,11])),meta:{requiresAuth:!0}},{path:"/join/:gameId/:playerOrder?",name:"join",component:()=>Xt(()=>import("./JoinView-UgPmTxkU.js"),__vite__mapDeps([12,5,13]))},{path:"/game/:gameId/:playerOrder",name:"game",component:()=>Xt(()=>import("./GameView-GdU8qSMM.js"),__vite__mapDeps([14,8,5,15]))}],du=mp({history:qh(),routes:_v});du.beforeEach(async e=>e.meta.requiresAuth&&!await mv()?{name:"login"}:!0);const Ji=Jd(ah);Ji.use(Qd());Ji.use(du);Ji.mount("#app");export{Cv as A,of as B,Av as C,yv as D,rd as E,tt as F,Ev as T,sh as _,Yc as a,ad as b,nd as c,Tv as d,Ac as e,rn as f,mv as g,Nv as h,Gn as i,Pc as j,Sv as k,Ov as l,bv as m,De as n,zc as o,Ne as p,wv as q,Ri as r,od as s,Tu as t,Rv as u,Iv as v,vv as w,yi as x,kv as y,Pv as z};
