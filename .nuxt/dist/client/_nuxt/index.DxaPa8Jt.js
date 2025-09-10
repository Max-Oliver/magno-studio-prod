import{u as $}from"./_plugin-vue_export-helper.CY4ZXvM2.js";import{_ as C,a as v,b as x,L as k}from"./loader.Zaet0Eas.js";import{_ as y,a as S,b as z,c as U,M as A,d as B,e as T}from"./Team.CRc_bU9M.js";import{F}from"./Footer.LK4GTdoN.js";import{_ as L}from"./Header.DgxcqJ5o.js";import{g as f,l as M,d as N,c as d,t as b,H as q,x as u,z as o,F as r,I,J as j,T as E,o as H,v as O,G as P}from"./entry.CKf-3ss5.js";import{N as R}from"./Navbar.vhkXzDeS.js";import"./scrollToTop.DfK2wIu9.js";import"./swiper-slide.CGMqFBiq.js";import"./loadBackgroudImages.8zUmHKob.js";import"./arrow-right.eDUTMx6t.js";import"./navigation.BGHqFne2.js";import"./team.CdFBF0q8.js";import"./thumbs.BwZynrz_.js";import"./mousewheel.82DsGJZM.js";import"./pagination.B_muOtwK.js";/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),V=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,s)=>s?s.toUpperCase():a.toLowerCase()),Z=t=>{const e=V(t);return e.charAt(0).toUpperCase()+e.slice(1)},D=(...t)=>t.filter((e,a,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===a).join(" ").trim(),g=t=>t==="";/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=({name:t,iconNode:e,absoluteStrokeWidth:a,"absolute-stroke-width":s,strokeWidth:n,"stroke-width":p,size:i=m.width,color:l=m.stroke,...c},{slots:h})=>f("svg",{...m,...c,width:i,height:i,stroke:l,"stroke-width":g(a)||g(s)||a===!0||s===!0?Number(n||p||m["stroke-width"])*24/Number(i):n||p||m["stroke-width"],class:D("lucide",c.class,...t?[`lucide-${_(Z(t))}-icon`,`lucide-${_(t)}`]:["lucide-icon"])},[...e.map(w=>f(...w)),...h.default?[h.default()]:[]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(t,e)=>(a,{slots:s,attrs:n})=>f(G,{...n,...a,iconNode:e,name:t},s);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=J("message-circle",[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]),X=()=>{const t=M(),e=s=>(s||"").replace(/\D/g,"");return{buildUrl:(s,n)=>{const i=`https://wa.me/${e(typeof s=="string"?s:String(t.public.whatsappNumber||""))}`,c=((typeof n=="string"?n:typeof t.public.whatsappText=="string"?t.public.whatsappText:"")||"").trim();return c?`${i}?text=${encodeURIComponent(c)}`:i}}},Y=["href"],K=N({__name:"WhatsAppFloat",props:{number:{},text:{},bottom:{default:85},right:{default:25},left:{default:void 0},bgClass:{default:"bg-green-500 hover:bg-green-600"}},setup(t){const e=t,{buildUrl:a}=X(),s=d(()=>a(e.number,e.text)),n=d(()=>{const i=`calc(env(safe-area-inset-bottom, 0px) + ${e.bottom}px)`,l=c=>c!=null?`${c}px`:void 0;return{position:"fixed",bottom:i,right:e.left==null?l(e.right):void 0,left:e.left!=null?l(e.left):void 0}}),p=d(()=>e.bgClass);return(i,l)=>(b(),q(E,{to:"body"},[u("a",{href:s.value,target:"_blank",rel:"noopener noreferrer","aria-label":"Contactar por WhatsApp",class:I(["fixed z-[100000] transition-transform duration-300 hover:scale-110 whatsapp-fab",p.value]),style:j(n.value)},[o(r(Q),{size:28})],14,Y)]))}}),W={id:"smooth-wrapper"},ee={id:"smooth-content"},te={class:"main-bg o-hidden"},be={__name:"index",setup(t){return $({link:[{rel:"stylesheet",href:"/dark/assets/css/plugins.css"},{rel:"stylesheet",href:"/dark/assets/css/satoshi.css"},{rel:"stylesheet",href:"/dark/assets/css/style.css"}]}),H(()=>{gsap.registerPlugin(ScrollTrigger,ScrollSmoother),ScrollTrigger.normalizeScroll(!0),ScrollSmoother.create({smooth:2,effects:!0})}),(e,a)=>(b(),O(P,null,[o(r(C)),o(r(v)),o(r(x)),o(r(k)),o(r(R)),u("div",W,[u("div",ee,[u("main",te,[o(r(y)),o(r(S)),o(r(z)),o(r(U)),o(r(A)),o(r(L)),o(r(B)),o(r(T)),o(r(K),{debug:!0})]),o(r(F))])])],64))}};export{be as default};
