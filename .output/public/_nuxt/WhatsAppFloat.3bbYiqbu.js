import{V as ar,f as we,g as T,u as Zt,n as te,o as B,c as K,a as f,t as E,i as A,d as pe,p as at,e as rt,_ as rr,h as De,I as ze,F as nr,m as or,y as Qt,q as sr,A as ir,J as lr,b as bt,w as fr,l as ur,$ as cr,a0 as dr,a1 as mr}from"./entry.DYwGsHQ7.js";import{_ as xe}from"./_plugin-vue_export-helper.C7mF41-N.js";const nt=""+globalThis.__publicAssetsURL("dark/assets/imgs/logo-light.png"),ot=()=>{const e=ar(),t=r=>(r||"").replace(/\D/g,"");return{buildUrl:(r,n)=>{const s=`https://wa.me/${t(typeof r=="string"?r:String(e.public.whatsappNumber||""))}`,l=((typeof n=="string"?n:typeof e.public.whatsappText=="string"?e.public.whatsappText:"")||"").trim();return l?`${s}?text=${encodeURIComponent(l)}`:s}}},q=e=>(at("data-v-238e4195"),e=e(),rt(),e),vr={class:"footer","aria-labelledby":"footer-heading"},hr=q(()=>f("div",{class:"footer__pattern","aria-hidden":"true"},null,-1)),pr=q(()=>f("div",{class:"footer__cap","aria-hidden":"true"},null,-1)),gr={class:"footer__container"},br={class:"sec-head"},yr={class:"sub-title main-color mb-25"},_r=q(()=>f("div",{class:"bord pt-10 bord-thin-top d-flex align-items-center"},null,-1)),wr={class:"footer__cta"},xr={id:"footer-heading",class:"footer__title"},Sr=["href"],kr=q(()=>f("span",{class:"fz-70 ti-arrow-top-right fab-ping"},null,-1)),Ar={class:"footer__grid"},Pr=q(()=>f("div",null,[f("img",{src:nt,alt:"Magno Studio",class:"footer__logo"})],-1)),Er={class:"footer__label"},Ir={class:"footer__address"},Or=q(()=>f("br",null,null,-1)),$r=["aria-label"],Cr={class:"menu-col"},Tr={class:"u-underline is-active",href:"/"},Fr={class:"u-underline",href:"/home/works"},jr={class:"u-underline",href:"/home/contact"},Nr=["aria-label"],Mr={class:"menu-col"},Lr=q(()=>f("i",{class:"fab fa-instagram mr-10"},null,-1)),Dr={class:"u-underline",href:"https://www.instagram.com/magnocreativee/",target:"_blank",rel:"noreferrer"},zr=q(()=>f("i",{class:"fab fa-facebook mr-10"},null,-1)),Rr={class:"u-underline",href:"https://www.facebook.com/people/MagnoStudio/61579703818795/",target:"_blank",rel:"noreferrer"},Wr=we({__name:"Footer",props:{number:{},text:{}},setup(e){const t=e,{buildUrl:a}=ot(),r=T(()=>a(t.number,t.text)),{t:n}=Zt();return te(()=>{const o=document.querySelector(".footer");o&&o.dataset.bg&&(o.style.backgroundImage=`url('${o.dataset.bg}')`)}),(o,s)=>(B(),K("footer",vr,[hr,pr,f("div",gr,[f("div",br,[f("h6",yr,E(A(n)("footer.cta_subtitle")),1),_r]),f("div",wr,[f("h2",xr,[f("a",{href:A(r),class:"footer__titleLink u-underline-2"},[f("span",null,E(A(n)("footer.cta_title")),1),kr],8,Sr)])]),f("div",Ar,[Pr,f("div",null,[f("h6",Er,E(A(n)("footer.address_label")),1),f("address",Ir,[pe(E(A(n)("footer.address_line1")),1),Or,pe(E(A(n)("footer.address_line2")),1)])]),f("nav",{"aria-label":A(n)("footer.aria_primary")},[f("ul",Cr,[f("li",null,[f("a",Tr,E(A(n)("links.home")),1)]),f("li",null,[f("a",Fr,E(A(n)("links.work")),1)]),f("li",null,[f("a",jr,E(A(n)("links.contact")),1)])])],8,$r),f("nav",{"aria-label":A(n)("footer.aria_social")},[f("ul",Mr,[f("li",null,[Lr,f("a",Dr,E(A(n)("social.instagram")),1)]),f("li",null,[zr,f("a",Rr,E(A(n)("social.behance")),1)])])],8,Nr)])])]))}}),jl=xe(Wr,[["__scopeId","data-v-238e4195"]]),Br={},Ur={class:"lines"},Hr=f("span",null,null,-1),Yr=f("span",null,null,-1),qr=f("span",null,null,-1),Gr=f("span",null,null,-1),Vr=f("span",null,null,-1),Xr=[Hr,Yr,qr,Gr,Vr];function Kr(e,t){return B(),K("div",Ur,Xr)}const Nl=xe(Br,[["render",Kr]]),Jr=()=>{let e=150,t=document.querySelector(".progress-wrap"),a=document.querySelector(".progress-wrap path"),r=a.getTotalLength();const n=()=>{let o=window.scrollY,s=document.documentElement.scrollHeight-window.innerHeight,i=r-o*r/s;a.style.strokeDashoffset=i};t&&(a.style.transition=a.style.WebkitTransition="none",a.style.strokeDasharray=r+" "+r,a.style.strokeDashoffset=r,a.getBoundingClientRect(),a.style.transition=a.style.WebkitTransition="stroke-dashoffset 10ms linear",n(),window.addEventListener("scroll",n),window.addEventListener("scroll",function(){window.pageYOffset>e?t.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),t.addEventListener("click",function(o){return o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},Zr={class:"progress-wrap cursor-pointer"},Qr=f("svg",{class:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102"},[f("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})],-1),en=[Qr],Ml={__name:"ProgressScroll",setup(e){return te(()=>{Jr()}),(t,a)=>(B(),K("div",Zr,en))}},tn={class:"cursor"},Ll={__name:"cusor",setup(e){return te(()=>{const t=document.querySelectorAll(".hover-this"),a=document.querySelector(".cursor"),r=function(o){const s=this.querySelector(".hover-anim"),{offsetX:i,offsetY:l}=o,{offsetWidth:u,offsetHeight:m}=this,v=25,_=i/u*(v*2)-v,b=l/m*(v*2)-v;s.style.transform=`translate(${_}px, ${b}px)`,o.type==="mouseleave"&&(s.style.transform="")},n=o=>{const{clientX:s,clientY:i}=o;a.style.left=s+"px",a.style.top=i+"px"};t.forEach(o=>o.addEventListener("mousemove",r)),t.forEach(o=>o.addEventListener("mouseleave",r)),window.addEventListener("mousemove",n),document.querySelectorAll("a, .cursor-pointer").forEach(o=>{o.addEventListener("mousemove",()=>{a.classList.add("cursor-active")}),o.addEventListener("mouseleave",()=>{a.classList.remove("cursor-active")})})}),(t,a)=>(B(),K("div",tn))}},an={class:"loader-wrap"},rn=f("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none"},[f("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})],-1),nn=f("div",{class:"loader-wrap-heading"},[f("span",null,[f("h2",{class:"load-text"},[f("span",null,"L"),f("span",null,"o"),f("span",null,"a"),f("span",null,"d"),f("span",null,"i"),f("span",null,"n"),f("span",null,"g")])])],-1),on=[rn,nn],Dl={__name:"loader",setup(e){return te(()=>{const t=document.getElementById("svg"),a=gsap.timeline(),r="M0 502S175 272 500 272s500 230 500 230V0H0Z",n="M0 2S175 1 500 1s500 1 500 1V0H0Z";a.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),a.to(t,{duration:.5,attr:{d:r},ease:"power2.easeIn"}).to(t,{duration:.5,attr:{d:n},ease:"power2.easeOut"}),a.to(".loader-wrap",{y:-1500}),a.to(".loader-wrap",{zIndex:-1,display:"none"}),a.from("header",{y:200},"-=1.5"),a.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")}),(t,a)=>(B(),K("div",an,on))}};function zl(e={}){var i;const t=e.selector??"[data-background], [data-bg-desktop], [data-bg-mobile]",a=e.mobileQuery??"(max-width: 768px)",r=(l,u)=>{const m=l.dataset;return u?m.bgMobile||m.background||m.bgDesktop||"":m.bgDesktop||m.background||m.bgMobile||""},n=l=>{document.querySelectorAll(t).forEach(m=>{const v=r(m,l);v&&(m.style.backgroundImage=`url('${v}')`)})},o=window.matchMedia(a);n(o.matches);const s=()=>n(o.matches);(i=o.addEventListener)==null||i.call(o,"change",s),window.addEventListener("resize",s,{passive:!0})}const z=e=>(at("data-v-33c9c261"),e=e(),rt(),e),sn={class:"navbar navbar-expand-lg bord blur"},ln={class:"container"},fn=z(()=>f("a",{class:"logo icon-img-100",href:"#"},[f("img",{src:nt,alt:"logo"})],-1)),un={class:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent"},cn={class:"navbar-nav"},dn={class:"nav-link",href:"/",role:"button","aria-haspopup":"true","aria-expanded":"false"},mn={class:"rolling-text"},vn={class:"nav-link",href:"/home/works",role:"button","aria-haspopup":"true","aria-expanded":"false"},hn={class:"rolling-text"},pn={class:"nav-link",href:"/home/contact"},gn={class:"rolling-text"},bn=z(()=>f("span",{class:"icon ti-align-right"},null,-1)),yn=[bn],_n=z(()=>f("div",{class:"logo icon-img-100"},[f("img",{src:nt,alt:""})],-1)),wn={class:"container"},xn={class:"row"},Sn=z(()=>f("div",{class:"col-lg-2"},[f("div",{class:"menu-text"},[f("div",{class:"text"},[f("h2",null,"Menu")])])],-1)),kn={class:"col-lg-7"},An={class:"menu-links"},Pn={class:"main-menu rest"},En={class:"o-hidden"},In={class:"link cursor-pointer dmenu"},On={href:"/",class:"sub-link"},$n=["data-text"],Cn=z(()=>f("i",null,null,-1)),Tn={class:"o-hidden"},Fn={class:"link cursor-pointer dmenu"},jn={href:"/home/works",class:"sub-link"},Nn=["data-text"],Mn=z(()=>f("i",null,null,-1)),Ln={class:"o-hidden"},Dn={href:"/home/contact",class:"link"},zn=["data-text"],Rn={class:"col-lg-3"},Wn={class:"cont-info"},Bn={class:"item mb-50"},Un={class:"sub-title mb-15 opacity-7"},Hn=z(()=>f("h5",null,[pe(" Miami Boulebard 2, "),f("br"),pe(" Punta del Este, Uruguay ")],-1)),Yn={class:"item mb-50"},qn={class:"sub-title mb-15 opacity-7"},Gn=or('<ul class="rest social-text" data-v-33c9c261><li data-v-33c9c261><i class="fab fa-instagram mr-10" data-v-33c9c261></i><a href="https://instagram.com/magnocreative" class="hover-this" data-v-33c9c261><span class="hover-anim" data-v-33c9c261>Instagram</span></a></li><li class="mb-10" data-v-33c9c261><i class="fab fa-behance mr-10" data-v-33c9c261></i><a href="https://behance.net/magnocreative" class="hover-this" data-v-33c9c261><span class="hover-anim" data-v-33c9c261>Behance</span></a></li></ul>',1),Vn={class:"item mb-40"},Xn={class:"sub-title mb-15 opacity-7"},Kn=z(()=>f("h5",null,[f("i",{class:"fa fa-envelope mr-10","aria-hidden":"true"}),f("a",{href:"/home/contact"},"hello@magnocreative.es")],-1)),Jn={class:"underline mt-10"},Zn=z(()=>f("i",{class:"fab fa-whatsapp mr-10"},null,-1)),Qn=["href"],eo=we({__name:"Navbar",props:{number:{},text:{}},setup(e){const{current:t,setLocale:a,t:r}=Zt();a("es");const n=e,{buildUrl:o}=ot(),s=T(()=>o(n.number,n.text));function i(){const g=window.scrollY,d=document.querySelector(".navbar");g>300?d==null||d.classList.add("nav-scroll"):d==null||d.classList.remove("nav-scroll")}function l(g){g.currentTarget.querySelector(".dropdown-menu").classList.add("show")}function u(g){g.currentTarget.querySelector(".dropdown-menu").classList.remove("show")}te(()=>{window.addEventListener("scroll",i)}),rr(()=>{window.removeEventListener("scroll",i)});const m=De(!1);function v(){const g=document.querySelector(".hamenu");m.value=!m.value,setTimeout(()=>{g&&g instanceof HTMLElement&&(g.style.left=m.value?"0":"-100%")},300)}function _(){const g=document.querySelector(".hamenu");m.value=!1,setTimeout(()=>{g&&g instanceof HTMLElement&&(g.style.left="-100%")},300)}function b(g){document.querySelectorAll("ul.main-menu li").forEach(d=>{d.classList.add("hoverd")}),g.currentTarget.classList.remove("hoverd")}function S(){document.querySelectorAll("ul.main-menu li").forEach(g=>g.classList.remove("hoverd"))}function y(g){const d=g.currentTarget.querySelector(".sub-menu"),p=g.currentTarget.querySelector(".sub-menu2");d&&(d.classList.contains("sub-open")&&p==null?(document.querySelectorAll(".sub-menu").forEach(x=>{x.classList.remove("sub-open"),x instanceof HTMLElement&&(x.style.maxHeight="0");const k=x.previousElementSibling;k&&k.children&&k.children[0]&&k.children[0].classList.remove("dopen")}),d.classList.remove("sub-open"),d instanceof HTMLElement&&(d.style.maxHeight="0"),d.previousElementSibling.children[0].classList.remove("dopen")):d.classList.contains("sub-open")||(p==null?(document.querySelectorAll(".sub-menu").forEach(x=>{x.classList.remove("sub-open"),x instanceof HTMLElement&&(x.style.maxHeight="0");const k=x.previousElementSibling;k&&k.children&&k.children[0]&&k.children[0].classList.remove("dopen")}),d.classList.add("sub-open"),d.style.maxHeight="450px",d.previousElementSibling.children[0].classList.add("dopen")):(d.classList.add("sub-open"),d.style.maxHeight="450px",d.previousElementSibling.children[0].classList.add("dopen"))))}return(g,d)=>(B(),K(nr,null,[f("nav",sn,[f("div",ln,[fn,f("div",un,[f("ul",cn,[f("li",{onMousemove:l,onMouseleave:u,class:"nav-item dropdown"},[f("a",dn,[f("span",mn,E(A(r)("nav.home")),1)])],32),f("li",{onMousemove:l,onMouseleave:u,class:"nav-item dropdown"},[f("a",vn,[f("span",hn,E(A(r)("nav.works")),1)])],32),f("li",{onMousemove:l,onMouseleave:u,class:"nav-item"},[f("a",pn,[f("span",gn,E(A(r)("nav.connect")),1)])],32)])]),f("div",{class:"topnav flex items-center gap-1"},[f("div",{onClick:v,class:"menu-icon cursor-pointer"},yn)])])]),f("div",{class:ze(`hamenu ${m.value&&"open"}`)},[_n,f("div",{onClick:_,class:"close-menu cursor-pointer ti-close"}),f("div",wn,[f("div",xn,[Sn,f("div",kn,[f("div",An,[f("ul",Pn,[f("li",{onClick:y,onMouseenter:b,onMouseleave:S},[f("div",En,[f("div",In,[f("a",On,[f("span",{class:"fill-text","data-text":A(r)("nav.home")},E(A(r)("nav.home")),9,$n),Cn])])])],32),f("li",{onClick:y,onMouseenter:b,onMouseleave:S},[f("div",Tn,[f("div",Fn,[f("a",jn,[f("span",{class:"fill-text","data-text":A(r)("nav.works")},E(A(r)("nav.works")),9,Nn),Mn])])])],32),f("li",{onClick:y,onMouseenter:b,onMouseleave:S},[f("div",Ln,[f("a",Dn,[f("span",{class:"fill-text","data-text":A(r)("nav.connect")},E(A(r)("nav.connect")),9,zn)])])],32)])])]),f("div",Rn,[f("div",Wn,[f("div",Bn,[f("h6",Un,E(A(r)("nav.address")),1),Hn]),f("div",Yn,[f("h6",qn,E(A(r)("nav.social")),1),Gn]),f("div",Vn,[f("h6",Xn,E(A(r)("nav.connect")),1),Kn,f("h5",Jn,[Zn,f("a",{href:s.value,target:"_blank",rel:"noopener noreferrer","aria-label":"Contactar por WhatsApp"}," WhatsApp! ",8,Qn)])])])])])])],2)],64))}}),Rl=xe(eo,[["__scopeId","data-v-33c9c261"]]);/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Re(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function to(e){if(Array.isArray(e))return e}function ao(e){if(Array.isArray(e))return Re(e)}function ro(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yt(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ea(r.key),r)}}function no(e,t,a){return t&&yt(e.prototype,t),a&&yt(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function me(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=st(e))||t&&e&&typeof e.length=="number"){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,s=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return s=l.done,l},e:function(l){i=!0,o=l},f:function(){try{s||a.return==null||a.return()}finally{if(i)throw o}}}}function w(e,t,a){return(t=ea(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function oo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function so(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,o,s,i=[],l=!0,u=!1;try{if(o=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=o.call(a)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(m){u=!0,n=m}finally{try{if(!l&&a.return!=null&&(s=a.return(),Object(s)!==s))return}finally{if(u)throw n}}return i}}function io(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _t(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?_t(Object(a),!0).forEach(function(r){w(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_t(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function Se(e,t){return to(e)||so(e,t)||st(e,t)||io()}function j(e){return ao(e)||oo(e)||st(e)||lo()}function fo(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ea(e){var t=fo(e,"string");return typeof t=="symbol"?t:t+""}function ge(e){"@babel/helpers - typeof";return ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ge(e)}function st(e,t){if(e){if(typeof e=="string")return Re(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Re(e,t):void 0}}var wt=function(){},it={},ta={},aa=null,ra={mark:wt,measure:wt};try{typeof window<"u"&&(it=window),typeof document<"u"&&(ta=document),typeof MutationObserver<"u"&&(aa=MutationObserver),typeof performance<"u"&&(ra=performance)}catch{}var uo=it.navigator||{},xt=uo.userAgent,St=xt===void 0?"":xt,U=it,P=ta,kt=aa,ce=ra;U.document;var R=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",na=~St.indexOf("MSIE")||~St.indexOf("Trident/"),$e,co=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,mo=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,oa={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},vo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],I="classic",le="duotone",ia="sharp",la="sharp-duotone",fa="chisel",ua="etch",ca="jelly",da="jelly-duo",ma="jelly-fill",va="notdog",ha="notdog-duo",pa="slab",ga="slab-press",ba="thumbprint",ya="whiteboard",ho="Classic",po="Duotone",go="Sharp",bo="Sharp Duotone",yo="Chisel",_o="Etch",wo="Jelly",xo="Jelly Duo",So="Jelly Fill",ko="Notdog",Ao="Notdog Duo",Po="Slab",Eo="Slab Press",Io="Thumbprint",Oo="Whiteboard",_a=[I,le,ia,la,fa,ua,ca,da,ma,va,ha,pa,ga,ba,ya];$e={},w(w(w(w(w(w(w(w(w(w($e,I,ho),le,po),ia,go),la,bo),fa,yo),ua,_o),ca,wo),da,xo),ma,So),va,ko),w(w(w(w(w($e,ha,Ao),pa,Po),ga,Eo),ba,Io),ya,Oo);var $o={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Co={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},To=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Fo={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},wa=["fak","fa-kit","fakd","fa-kit-duotone"],At={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},jo=["kit"],No="kit",Mo="kit-duotone",Lo="Kit",Do="Kit Duotone";w(w({},No,Lo),Mo,Do);var zo={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Ro={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Wo={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Pt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ce,de={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Bo=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Uo="classic",Ho="duotone",Yo="sharp",qo="sharp-duotone",Go="chisel",Vo="etch",Xo="jelly",Ko="jelly-duo",Jo="jelly-fill",Zo="notdog",Qo="notdog-duo",es="slab",ts="slab-press",as="thumbprint",rs="whiteboard",ns="Classic",os="Duotone",ss="Sharp",is="Sharp Duotone",ls="Chisel",fs="Etch",us="Jelly",cs="Jelly Duo",ds="Jelly Fill",ms="Notdog",vs="Notdog Duo",hs="Slab",ps="Slab Press",gs="Thumbprint",bs="Whiteboard";Ce={},w(w(w(w(w(w(w(w(w(w(Ce,Uo,ns),Ho,os),Yo,ss),qo,is),Go,ls),Vo,fs),Xo,us),Ko,cs),Jo,ds),Zo,ms),w(w(w(w(w(Ce,Qo,vs),es,hs),ts,ps),as,gs),rs,bs);var ys="kit",_s="kit-duotone",ws="Kit",xs="Kit Duotone";w(w({},ys,ws),_s,xs);var Ss={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},ks={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},We={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},As=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],xa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Bo,As),Ps=["solid","regular","light","thin","duotone","brands","semibold"],Sa=[1,2,3,4,5,6,7,8,9,10],Es=Sa.concat([11,12,13,14,15,16,17,18,19,20]),Is=["aw","fw","pull-left","pull-right"],Os=[].concat(j(Object.keys(ks)),Ps,Is,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",de.GROUP,de.SWAP_OPACITY,de.PRIMARY,de.SECONDARY]).concat(Sa.map(function(e){return"".concat(e,"x")})).concat(Es.map(function(e){return"w-".concat(e)})),$s={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},L="___FONT_AWESOME___",Be=16,ka="fa",Aa="svg-inline--fa",V="data-fa-i2svg",Ue="data-fa-pseudo-element",Cs="data-fa-pseudo-element-pending",lt="data-prefix",ft="data-icon",Et="fontawesome-i2svg",Ts="async",Fs=["HTML","HEAD","STYLE","SCRIPT"],Pa=["::before","::after",":before",":after"],Ea=function(){try{return!0}catch{return!1}}();function fe(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[I]}})}var Ia=c({},oa);Ia[I]=c(c(c(c({},{"fa-duotone":"duotone"}),oa[I]),At.kit),At["kit-duotone"]);var js=fe(Ia),He=c({},Fo);He[I]=c(c(c(c({},{duotone:"fad"}),He[I]),Pt.kit),Pt["kit-duotone"]);var It=fe(He),Ye=c({},We);Ye[I]=c(c({},Ye[I]),Wo.kit);var ut=fe(Ye),qe=c({},Ss);qe[I]=c(c({},qe[I]),zo.kit);fe(qe);var Ns=co,Oa="fa-layers-text",Ms=mo,Ls=c({},$o);fe(Ls);var Ds=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Te=vo,zs=[].concat(j(jo),j(Os)),oe=U.FontAwesomeConfig||{};function Rs(e){var t=P.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ws(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(P&&typeof P.querySelector=="function"){var Bs=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Bs.forEach(function(e){var t=Se(e,2),a=t[0],r=t[1],n=Ws(Rs(a));n!=null&&(oe[r]=n)})}var $a={styleDefault:"solid",familyDefault:I,cssPrefix:ka,replacementClass:Aa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};oe.familyPrefix&&(oe.cssPrefix=oe.familyPrefix);var ee=c(c({},$a),oe);ee.autoReplaceSvg||(ee.observeMutations=!1);var h={};Object.keys($a).forEach(function(e){Object.defineProperty(h,e,{enumerable:!0,set:function(a){ee[e]=a,se.forEach(function(r){return r(h)})},get:function(){return ee[e]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(t){ee.cssPrefix=t,se.forEach(function(a){return a(h)})},get:function(){return ee.cssPrefix}});U.FontAwesomeConfig=h;var se=[];function Us(e){return se.push(e),function(){se.splice(se.indexOf(e),1)}}var W=Be,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hs(e){if(!(!e||!R)){var t=P.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=P.head.childNodes,r=null,n=a.length-1;n>-1;n--){var o=a[n],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return P.head.insertBefore(t,r),e}}var Ys="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ot(){for(var e=12,t="";e-- >0;)t+=Ys[Math.random()*62|0];return t}function ae(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function ct(e){return e.classList?ae(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ca(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qs(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Ca(e[a]),'" ')},"").trim()}function ke(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function dt(e){return e.size!==N.size||e.x!==N.x||e.y!==N.y||e.rotate!==N.rotate||e.flipX||e.flipY}function Gs(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),i="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(i)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function Vs(e){var t=e.transform,a=e.width,r=a===void 0?Be:a,n=e.height,o=n===void 0?Be:n,s=e.startCentered,i=s===void 0?!1:s,l="";return i&&na?l+="translate(".concat(t.x/W-r/2,"em, ").concat(t.y/W-o/2,"em) "):i?l+="translate(calc(-50% + ".concat(t.x/W,"em), calc(-50% + ").concat(t.y/W,"em)) "):l+="translate(".concat(t.x/W,"em, ").concat(t.y/W,"em) "),l+="scale(".concat(t.size/W*(t.flipX?-1:1),", ").concat(t.size/W*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Xs=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Ta(){var e=ka,t=Aa,a=h.cssPrefix,r=h.replacementClass,n=Xs;if(a!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(t),"g");n=n.replace(o,".".concat(a,"-")).replace(s,"--".concat(a,"-")).replace(i,".".concat(r))}return n}var $t=!1;function Fe(){h.autoAddCss&&!$t&&(Hs(Ta()),$t=!0)}var Ks={mixout:function(){return{dom:{css:Ta,insertCss:Fe}}},hooks:function(){return{beforeDOMElementCreation:function(){Fe()},beforeI2svg:function(){Fe()}}}},D=U||{};D[L]||(D[L]={});D[L].styles||(D[L].styles={});D[L].hooks||(D[L].hooks={});D[L].shims||(D[L].shims=[]);var F=D[L],Fa=[],ja=function(){P.removeEventListener("DOMContentLoaded",ja),be=1,Fa.map(function(t){return t()})},be=!1;R&&(be=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),be||P.addEventListener("DOMContentLoaded",ja));function Js(e){R&&(be?setTimeout(e,0):Fa.push(e))}function ue(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,o=n===void 0?[]:n;return typeof e=="string"?Ca(e):"<".concat(t," ").concat(qs(r),">").concat(o.map(ue).join(""),"</").concat(t,">")}function Ct(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Zs=function(t,a){return function(r,n,o,s){return t.call(a,r,n,o,s)}},je=function(t,a,r,n){var o=Object.keys(t),s=o.length,i=n!==void 0?Zs(a,n):a,l,u,m;for(r===void 0?(l=1,m=t[o[0]]):(l=0,m=r);l<s;l++)u=o[l],m=i(m,t[u],u,t);return m};function Na(e){return j(e).length!==1?null:e.codePointAt(0).toString(16)}function Tt(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Ge(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,o=Tt(t);typeof F.hooks.addPack=="function"&&!n?F.hooks.addPack(e,Tt(t)):F.styles[e]=c(c({},F.styles[e]||{}),o),e==="fas"&&Ge("fa",t)}var ie=F.styles,Qs=F.shims,Ma=Object.keys(ut),ei=Ma.reduce(function(e,t){return e[t]=Object.keys(ut[t]),e},{}),mt=null,La={},Da={},za={},Ra={},Wa={};function ti(e){return~zs.indexOf(e)}function ai(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!ti(n)?n:null}var Ba=function(){var t=function(o){return je(ie,function(s,i,l){return s[l]=je(i,o,{}),s},{})};La=t(function(n,o,s){if(o[3]&&(n[o[3]]=s),o[2]){var i=o[2].filter(function(l){return typeof l=="number"});i.forEach(function(l){n[l.toString(16)]=s})}return n}),Da=t(function(n,o,s){if(n[s]=s,o[2]){var i=o[2].filter(function(l){return typeof l=="string"});i.forEach(function(l){n[l]=s})}return n}),Wa=t(function(n,o,s){var i=o[2];return n[s]=s,i.forEach(function(l){n[l]=s}),n});var a="far"in ie||h.autoFetchSvg,r=je(Qs,function(n,o){var s=o[0],i=o[1],l=o[2];return i==="far"&&!a&&(i="fas"),typeof s=="string"&&(n.names[s]={prefix:i,iconName:l}),typeof s=="number"&&(n.unicodes[s.toString(16)]={prefix:i,iconName:l}),n},{names:{},unicodes:{}});za=r.names,Ra=r.unicodes,mt=Ae(h.styleDefault,{family:h.familyDefault})};Us(function(e){mt=Ae(e.styleDefault,{family:h.familyDefault})});Ba();function vt(e,t){return(La[e]||{})[t]}function ri(e,t){return(Da[e]||{})[t]}function G(e,t){return(Wa[e]||{})[t]}function Ua(e){return za[e]||{prefix:null,iconName:null}}function ni(e){var t=Ra[e],a=vt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function H(){return mt}var Ha=function(){return{prefix:null,iconName:null,rest:[]}};function oi(e){var t=I,a=Ma.reduce(function(r,n){return r[n]="".concat(h.cssPrefix,"-").concat(n),r},{});return _a.forEach(function(r){(e.includes(a[r])||e.some(function(n){return ei[r].includes(n)}))&&(t=r)}),t}function Ae(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?I:a,n=js[r][e];if(r===le&&!e)return"fad";var o=It[r][e]||It[r][n],s=e in F.styles?e:null,i=o||s||null;return i}function si(e){var t=[],a=null;return e.forEach(function(r){var n=ai(h.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function Ft(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var jt=xa.concat(wa);function Pe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,o=Ft(e.filter(function(b){return jt.includes(b)})),s=Ft(e.filter(function(b){return!jt.includes(b)})),i=o.filter(function(b){return n=b,!sa.includes(b)}),l=Se(i,1),u=l[0],m=u===void 0?null:u,v=oi(o),_=c(c({},si(s)),{},{prefix:Ae(m,{family:v})});return c(c(c({},_),ui({values:e,family:v,styles:ie,config:h,canonical:_,givenPrefix:n})),ii(r,n,_))}function ii(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var o=t==="fa"?Ua(n):{},s=G(r,n);return n=o.iconName||s||n,r=o.prefix||r,r==="far"&&!ie.far&&ie.fas&&!h.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var li=_a.filter(function(e){return e!==I||e!==le}),fi=Object.keys(We).filter(function(e){return e!==I}).map(function(e){return Object.keys(We[e])}).flat();function ui(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,o=n===void 0?"":n,s=e.styles,i=s===void 0?{}:s,l=e.config,u=l===void 0?{}:l,m=a===le,v=t.includes("fa-duotone")||t.includes("fad"),_=u.familyDefault==="duotone",b=r.prefix==="fad"||r.prefix==="fa-duotone";if(!m&&(v||_||b)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&li.includes(a)){var S=Object.keys(i).find(function(g){return fi.includes(g)});if(S||u.autoFetchSvg){var y=To.get(a).defaultShortPrefixId;r.prefix=y,r.iconName=G(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||o==="fa")&&(r.prefix=H()||"fas"),r}var ci=function(){function e(){ro(this,e),this.definitions={}}return no(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(i){a.definitions[i]=c(c({},a.definitions[i]||{}),s[i]),Ge(i,s[i]);var l=ut[I][i];l&&Ge(l,s[i]),Ba()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(o){var s=n[o],i=s.prefix,l=s.iconName,u=s.icon,m=u[2];a[i]||(a[i]={}),m.length>0&&m.forEach(function(v){typeof v=="string"&&(a[i][v]=u)}),a[i][l]=u}),a}}])}(),Nt=[],Z={},Q={},di=Object.keys(Q);function mi(e,t){var a=t.mixoutsTo;return Nt=e,Z={},Object.keys(Q).forEach(function(r){di.indexOf(r)===-1&&delete Q[r]}),Nt.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(s){typeof n[s]=="function"&&(a[s]=n[s]),ge(n[s])==="object"&&Object.keys(n[s]).forEach(function(i){a[s]||(a[s]={}),a[s][i]=n[s][i]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Z[s]||(Z[s]=[]),Z[s].push(o[s])})}r.provides&&r.provides(Q)}),a}function Ve(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var o=Z[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function X(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=Z[e]||[];n.forEach(function(o){o.apply(null,a)})}function Y(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Q[e]?Q[e].apply(null,t):void 0}function Xe(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||H();if(t)return t=G(a,t)||t,Ct(Ya.definitions,a,t)||Ct(F.styles,a,t)}var Ya=new ci,vi=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,X("noAuto")},hi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(X("beforeI2svg",t),Y("pseudoElements2svg",t),Y("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,Js(function(){gi({autoReplaceSvgRoot:a}),X("watch",t)})}},pi={icon:function(t){if(t===null)return null;if(ge(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:G(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ae(t[0]);return{prefix:r,iconName:G(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(h.cssPrefix,"-"))>-1||t.match(Ns))){var n=Pe(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||H(),iconName:G(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var o=H();return{prefix:o,iconName:G(o,t)||t}}}},C={noAuto:vi,config:h,dom:hi,parse:pi,library:Ya,findIconDefinition:Xe,toHtml:ue},gi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?P:a;(Object.keys(F.styles).length>0||h.autoFetchSvg)&&R&&h.autoReplaceSvg&&C.dom.i2svg({node:r})};function Ee(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ue(r)})}}),Object.defineProperty(e,"node",{get:function(){if(R){var r=P.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function bi(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,o=e.styles,s=e.transform;if(dt(s)&&a.found&&!r.found){var i=a.width,l=a.height,u={x:i/l/2,y:.5};n.style=ke(c(c({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function yi(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(h.cssPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},n),{},{id:s}),children:r}]}]}function _i(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function ht(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,o=e.iconName,s=e.transform,i=e.symbol,l=e.maskId,u=e.extra,m=e.watchable,v=m===void 0?!1:m,_=r.found?r:a,b=_.width,S=_.height,y=[h.replacementClass,o?"".concat(h.cssPrefix,"-").concat(o):""].filter(function($){return u.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(u.classes).join(" "),g={children:[],attributes:c(c({},u.attributes),{},{"data-prefix":n,"data-icon":o,class:y,role:u.attributes.role||"img",viewBox:"0 0 ".concat(b," ").concat(S)})};!_i(u.attributes)&&!u.attributes["aria-hidden"]&&(g.attributes["aria-hidden"]="true"),v&&(g.attributes[V]="");var d=c(c({},g),{},{prefix:n,iconName:o,main:a,mask:r,maskId:l,transform:s,symbol:i,styles:c({},u.styles)}),p=r.found&&a.found?Y("generateAbstractMask",d)||{children:[],attributes:{}}:Y("generateAbstractIcon",d)||{children:[],attributes:{}},x=p.children,k=p.attributes;return d.children=x,d.attributes=k,i?yi(d):bi(d)}function Mt(e){var t=e.content,a=e.width,r=e.height,n=e.transform,o=e.extra,s=e.watchable,i=s===void 0?!1:s,l=c(c({},o.attributes),{},{class:o.classes.join(" ")});i&&(l[V]="");var u=c({},o.styles);dt(n)&&(u.transform=Vs({transform:n,startCentered:!0,width:a,height:r}),u["-webkit-transform"]=u.transform);var m=ke(u);m.length>0&&(l.style=m);var v=[];return v.push({tag:"span",attributes:l,children:[t]}),v}function wi(e){var t=e.content,a=e.extra,r=c(c({},a.attributes),{},{class:a.classes.join(" ")}),n=ke(a.styles);n.length>0&&(r.style=n);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),o}var Ne=F.styles;function Ke(e){var t=e[0],a=e[1],r=e.slice(4),n=Se(r,1),o=n[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(Te.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(Te.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(Te.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:a,icon:s}}var xi={found:!1,width:512,height:512};function Si(e,t){!Ea&&!h.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Je(e,t){var a=t;return t==="fa"&&h.styleDefault!==null&&(t=H()),new Promise(function(r,n){if(a==="fa"){var o=Ua(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Ne[t]&&Ne[t][e]){var s=Ne[t][e];return r(Ke(s))}Si(e,t),r(c(c({},xi),{},{icon:h.showMissingIcons&&e?Y("missingIconAbstract")||{}:{}}))})}var Lt=function(){},Ze=h.measurePerformance&&ce&&ce.mark&&ce.measure?ce:{mark:Lt,measure:Lt},ne='FA "7.0.1"',ki=function(t){return Ze.mark("".concat(ne," ").concat(t," begins")),function(){return qa(t)}},qa=function(t){Ze.mark("".concat(ne," ").concat(t," ends")),Ze.measure("".concat(ne," ").concat(t),"".concat(ne," ").concat(t," begins"),"".concat(ne," ").concat(t," ends"))},pt={begin:ki,end:qa},ve=function(){};function Dt(e){var t=e.getAttribute?e.getAttribute(V):null;return typeof t=="string"}function Ai(e){var t=e.getAttribute?e.getAttribute(lt):null,a=e.getAttribute?e.getAttribute(ft):null;return t&&a}function Pi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(h.replacementClass)}function Ei(){if(h.autoReplaceSvg===!0)return he.replace;var e=he[h.autoReplaceSvg];return e||he.replace}function Ii(e){return P.createElementNS("http://www.w3.org/2000/svg",e)}function Oi(e){return P.createElement(e)}function Ga(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?Ii:Oi:a;if(typeof e=="string")return P.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){n.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){n.appendChild(Ga(s,{ceFn:r}))}),n}function $i(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var he={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Ga(n),a)}),a.getAttribute(V)===null&&h.keepOriginalSource){var r=P.createComment($i(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~ct(a).indexOf(h.replacementClass))return he.replace(t);var n=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(i,l){return l===h.replacementClass||l.match(n)?i.toSvg.push(l):i.toNode.push(l),i},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(i){return ue(i)}).join(`
`);a.setAttribute(V,""),a.innerHTML=s}};function zt(e){e()}function Va(e,t){var a=typeof t=="function"?t:ve;if(e.length===0)a();else{var r=zt;h.mutateApproach===Ts&&(r=U.requestAnimationFrame||zt),r(function(){var n=Ei(),o=pt.begin("mutate");e.map(n),o(),a()})}}var gt=!1;function Xa(){gt=!0}function Qe(){gt=!1}var ye=null;function Rt(e){if(kt&&h.observeMutations){var t=e.treeCallback,a=t===void 0?ve:t,r=e.nodeCallback,n=r===void 0?ve:r,o=e.pseudoElementsCallback,s=o===void 0?ve:o,i=e.observeMutationsRoot,l=i===void 0?P:i;ye=new kt(function(u){if(!gt){var m=H();ae(u).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!Dt(v.addedNodes[0])&&(h.searchPseudoElements&&s(v.target),a(v.target)),v.type==="attributes"&&v.target.parentNode&&h.searchPseudoElements&&s([v.target],!0),v.type==="attributes"&&Dt(v.target)&&~Ds.indexOf(v.attributeName))if(v.attributeName==="class"&&Ai(v.target)){var _=Pe(ct(v.target)),b=_.prefix,S=_.iconName;v.target.setAttribute(lt,b||m),S&&v.target.setAttribute(ft,S)}else Pi(v.target)&&n(v.target)})}}),R&&ye.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ci(){ye&&ye.disconnect()}function Ti(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var o=n.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(r[s]=i.join(":").trim()),r},{})),a}function Fi(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=Pe(ct(e));return n.prefix||(n.prefix=H()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=ri(n.prefix,e.innerText)||vt(n.prefix,Na(e.innerText))),!n.iconName&&h.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function ji(e){var t=ae(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function Ni(){return{iconName:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Fi(e),r=a.iconName,n=a.prefix,o=a.rest,s=ji(e),i=Ve("parseNodeAttributes",{},e),l=t.styleParser?Ti(e):[];return c({iconName:r,prefix:n,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},i)}var Mi=F.styles;function Ka(e){var t=h.autoReplaceSvg==="nest"?Wt(e,{styleParser:!1}):Wt(e);return~t.extra.classes.indexOf(Oa)?Y("generateLayersText",e,t):Y("generateSvgReplacementMutation",e,t)}function Li(){return[].concat(j(wa),j(xa))}function Bt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var a=P.documentElement.classList,r=function(v){return a.add("".concat(Et,"-").concat(v))},n=function(v){return a.remove("".concat(Et,"-").concat(v))},o=h.autoFetchSvg?Li():sa.concat(Object.keys(Mi));o.includes("fa")||o.push("fa");var s=[".".concat(Oa,":not([").concat(V,"])")].concat(o.map(function(m){return".".concat(m,":not([").concat(V,"])")})).join(", ");if(s.length===0)return Promise.resolve();var i=[];try{i=ae(e.querySelectorAll(s))}catch{}if(i.length>0)r("pending"),n("complete");else return Promise.resolve();var l=pt.begin("onTree"),u=i.reduce(function(m,v){try{var _=Ka(v);_&&m.push(_)}catch(b){Ea||b.name==="MissingIcon"&&console.error(b)}return m},[]);return new Promise(function(m,v){Promise.all(u).then(function(_){Va(_,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),m()})}).catch(function(_){l(),v(_)})})}function Di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ka(e).then(function(a){a&&Va([a],t)})}function zi(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Xe(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:Xe(n||{})),e(r,c(c({},a),{},{mask:n}))}}var Ri=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?N:r,o=a.symbol,s=o===void 0?!1:o,i=a.mask,l=i===void 0?null:i,u=a.maskId,m=u===void 0?null:u,v=a.classes,_=v===void 0?[]:v,b=a.attributes,S=b===void 0?{}:b,y=a.styles,g=y===void 0?{}:y;if(t){var d=t.prefix,p=t.iconName,x=t.icon;return Ee(c({type:"icon"},t),function(){return X("beforeDOMElementCreation",{iconDefinition:t,params:a}),ht({icons:{main:Ke(x),mask:l?Ke(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:c(c({},N),n),symbol:s,maskId:m,extra:{attributes:S,styles:g,classes:_}})})}},Wi={mixout:function(){return{icon:zi(Ri)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Bt,a.nodeCallback=Di,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?P:r,o=a.callback,s=o===void 0?function(){}:o;return Bt(n,s)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,o=r.prefix,s=r.transform,i=r.symbol,l=r.mask,u=r.maskId,m=r.extra;return new Promise(function(v,_){Promise.all([Je(n,o),l.iconName?Je(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var S=Se(b,2),y=S[0],g=S[1];v([a,ht({icons:{main:y,mask:g},prefix:o,iconName:n,transform:s,symbol:i,maskId:u,extra:m,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,o=a.main,s=a.transform,i=a.styles,l=ke(i);l.length>0&&(n.style=l);var u;return dt(s)&&(u=Y("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:n}}}},Bi={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,o=n===void 0?[]:n;return Ee({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:a,params:r});var s=[];return a(function(i){Array.isArray(i)?i.map(function(l){s=s.concat(l.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(j(o)).join(" ")},children:s}]})}}}},Ui={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.title,o=n===void 0?null:n,s=r.classes,i=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,m=r.styles,v=m===void 0?{}:m;return Ee({type:"counter",content:a},function(){return X("beforeDOMElementCreation",{content:a,params:r}),wi({content:a.toString(),title:o,extra:{attributes:u,styles:v,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(j(i))}})})}}}},Hi={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,o=n===void 0?N:n,s=r.classes,i=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,m=r.styles,v=m===void 0?{}:m;return Ee({type:"text",content:a},function(){return X("beforeDOMElementCreation",{content:a,params:r}),Mt({content:a,transform:c(c({},N),o),extra:{attributes:u,styles:v,classes:["".concat(h.cssPrefix,"-layers-text")].concat(j(i))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,o=r.extra,s=null,i=null;if(na){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();s=u.width/l,i=u.height/l}return Promise.resolve([a,Mt({content:a.innerHTML,width:s,height:i,transform:n,extra:o,watchable:!0})])}}},Ja=new RegExp('"',"ug"),Ut=[1105920,1112319],Ht=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),Co),$s),Ro),et=Object.keys(Ht).reduce(function(e,t){return e[t.toLowerCase()]=Ht[t],e},{}),Yi=Object.keys(et).reduce(function(e,t){var a=et[t];return e[t]=a[900]||j(Object.entries(a))[0][1],e},{});function qi(e){var t=e.replace(Ja,"");return Na(j(t)[0]||"")}function Gi(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(Ja,""),n=r.codePointAt(0),o=n>=Ut[0]&&n<=Ut[1],s=r.length===2?r[0]===r[1]:!1;return o||s||t}function Vi(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(et[a]||{})[n]||Yi[a]}function Yt(e,t){var a="".concat(Cs).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var o=ae(e.children),s=o.filter(function(J){return J.getAttribute(Ue)===t})[0],i=U.getComputedStyle(e,t),l=i.getPropertyValue("font-family"),u=l.match(Ms),m=i.getPropertyValue("font-weight"),v=i.getPropertyValue("content");if(s&&!u)return e.removeChild(s),r();if(u&&v!=="none"&&v!==""){var _=i.getPropertyValue("content"),b=Vi(l,m),S=qi(_),y=u[0].startsWith("FontAwesome"),g=Gi(i),d=vt(b,S),p=d;if(y){var x=ni(S);x.iconName&&x.prefix&&(d=x.iconName,b=x.prefix)}if(d&&!g&&(!s||s.getAttribute(lt)!==b||s.getAttribute(ft)!==p)){e.setAttribute(a,p),s&&e.removeChild(s);var k=Ni(),$=k.extra;$.attributes[Ue]=t,Je(d,b).then(function(J){var re=ht(c(c({},k),{},{icons:{main:J,mask:Ha()},prefix:b,iconName:p,extra:$,watchable:!0})),Oe=P.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Oe,e.firstChild):e.appendChild(Oe),Oe.outerHTML=re.map(function(tr){return ue(tr)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function Xi(e){return Promise.all([Yt(e,"::before"),Yt(e,"::after")])}function Ki(e){return e.parentNode!==document.head&&!~Fs.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ue)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Ji=function(t){return!!t&&Pa.some(function(a){return t.includes(a)})},Zi=function(t){if(!t)return[];var a=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var n=me(r),o;try{for(n.s();!(o=n.n()).done;){var s=o.value;if(Ji(s)){var i=Pa.reduce(function(l,u){return l.replace(u,"")},s);i!==""&&i!=="*"&&a.add(i)}}}catch(l){n.e(l)}finally{n.f()}return a};function qt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(R){var a;if(t)a=e;else if(h.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=me(document.styleSheets),o;try{for(n.s();!(o=n.n()).done;){var s=o.value;try{var i=me(s.cssRules),l;try{for(i.s();!(l=i.n()).done;){var u=l.value,m=Zi(u.selectorText),v=me(m),_;try{for(v.s();!(_=v.n()).done;){var b=_.value;r.add(b)}}catch(y){v.e(y)}finally{v.f()}}}catch(y){i.e(y)}finally{i.f()}}catch(y){h.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(s.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){n.e(y)}finally{n.f()}if(!r.size)return;var S=Array.from(r).join(", ");try{a=e.querySelectorAll(S)}catch{}}return new Promise(function(y,g){var d=ae(a).filter(Ki).map(Xi),p=pt.begin("searchPseudoElements");Xa(),Promise.all(d).then(function(){p(),Qe(),y()}).catch(function(){p(),Qe(),g()})})}}var Qi={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=qt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?P:r;h.searchPseudoElements&&qt(n)}}},Gt=!1,el={mixout:function(){return{dom:{unwatch:function(){Xa(),Gt=!0}}}},hooks:function(){return{bootstrap:function(){Rt(Ve("mutationObserverCallbacks",{}))},noAuto:function(){Ci()},watch:function(a){var r=a.observeMutationsRoot;Gt?Qe():Rt(Ve("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Vt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var o=n.toLowerCase().split("-"),s=o[0],i=o.slice(1).join("-");if(s&&i==="h")return r.flipX=!0,r;if(s&&i==="v")return r.flipY=!0,r;if(i=parseFloat(i),isNaN(i))return r;switch(s){case"grow":r.size=r.size+i;break;case"shrink":r.size=r.size-i;break;case"left":r.x=r.x-i;break;case"right":r.x=r.x+i;break;case"up":r.y=r.y-i;break;case"down":r.y=r.y+i;break;case"rotate":r.rotate=r.rotate+i;break}return r},a)},tl={mixout:function(){return{parse:{transform:function(a){return Vt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Vt(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,o=a.containerWidth,s=a.iconWidth,i={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),m="rotate(".concat(n.rotate," 0 0)"),v={transform:"".concat(l," ").concat(u," ").concat(m)},_={transform:"translate(".concat(s/2*-1," -256)")},b={outer:i,inner:v,path:_};return{tag:"g",attributes:c({},b.outer),children:[{tag:"g",attributes:c({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:c(c({},r.icon.attributes),b.path)}]}]}}}},Me={x:0,y:0,width:"100%",height:"100%"};function Xt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function al(e){return e.tag==="g"?e.children:[e]}var rl={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),o=n?Pe(n.split(" ").map(function(s){return s.trim()})):Ha();return o.prefix||(o.prefix=H()),a.mask=o,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,o=a.main,s=a.mask,i=a.maskId,l=a.transform,u=o.width,m=o.icon,v=s.width,_=s.icon,b=Gs({transform:l,containerWidth:v,iconWidth:u}),S={tag:"rect",attributes:c(c({},Me),{},{fill:"white"})},y=m.children?{children:m.children.map(Xt)}:{},g={tag:"g",attributes:c({},b.inner),children:[Xt(c({tag:m.tag,attributes:c(c({},m.attributes),b.path)},y))]},d={tag:"g",attributes:c({},b.outer),children:[g]},p="mask-".concat(i||Ot()),x="clip-".concat(i||Ot()),k={tag:"mask",attributes:c(c({},Me),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,d]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:al(_)},k]};return r.push($,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(p,")")},Me)}),{children:r,attributes:n}}}},nl={provides:function(t){var a=!1;U.matchMedia&&(a=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:c(c({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=c(c({},o),{},{attributeName:"opacity"}),i={tag:"circle",attributes:c(c({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||i.children.push({tag:"animate",attributes:c(c({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(i),r.push({tag:"path",attributes:c(c({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:c(c({},s),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:c(c({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ol={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),o=n===null?!1:n===""?!0:n;return a.symbol=o,a}}}},sl=[Ks,Wi,Bi,Ui,Hi,Qi,el,tl,rl,nl,ol];mi(sl,{mixoutsTo:C});C.noAuto;C.config;var il=C.library;C.dom;var tt=C.parse;C.findIconDefinition;C.toHtml;var ll=C.icon;C.layer;C.text;C.counter;function O(e,t,a){return(t=dl(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Kt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Kt(Object(a),!0).forEach(function(r){O(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Kt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function fl(e,t){if(e==null)return{};var a,r,n=ul(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function ul(e,t){if(e==null)return{};var a={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;a[r]=e[r]}return a}function cl(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function dl(e){var t=cl(e,"string");return typeof t=="symbol"?t:t+""}function _e(e){"@babel/helpers - typeof";return _e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_e(e)}function Le(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?O({},e,t):{}}function ml(e){var t,a=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},O(O(O(O(O(O(O(O(O(O(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-rotate-by",e.rotateBy),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),O(O(O(O(t,"fa-flash",e.flash),"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse),"fa-width-auto",e.widthAuto));return Object.keys(a).map(function(r){return a[r]?r:null}).filter(function(r){return r})}var vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Za={exports:{}};(function(e){(function(t){var a=function(d,p,x){if(!u(p)||v(p)||_(p)||b(p)||l(p))return p;var k,$=0,J=0;if(m(p))for(k=[],J=p.length;$<J;$++)k.push(a(d,p[$],x));else{k={};for(var re in p)Object.prototype.hasOwnProperty.call(p,re)&&(k[d(re,x)]=a(d,p[re],x))}return k},r=function(d,p){p=p||{};var x=p.separator||"_",k=p.split||/(?=[A-Z])/;return d.split(k).join(x)},n=function(d){return S(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(p,x){return x?x.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},o=function(d){var p=n(d);return p.substr(0,1).toUpperCase()+p.substr(1)},s=function(d,p){return r(d,p).toLowerCase()},i=Object.prototype.toString,l=function(d){return typeof d=="function"},u=function(d){return d===Object(d)},m=function(d){return i.call(d)=="[object Array]"},v=function(d){return i.call(d)=="[object Date]"},_=function(d){return i.call(d)=="[object RegExp]"},b=function(d){return i.call(d)=="[object Boolean]"},S=function(d){return d=d-0,d===d},y=function(d,p){var x=p&&"process"in p?p.process:p;return typeof x!="function"?d:function(k,$){return x(k,d,$)}},g={camelize:n,decamelize:s,pascalize:o,depascalize:s,camelizeKeys:function(d,p){return a(y(n,p),d)},decamelizeKeys:function(d,p){return a(y(s,p),d,p)},pascalizeKeys:function(d,p){return a(y(o,p),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(vl)})(Za);var hl=Za.exports,pl=["class","style"];function gl(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var r=a.indexOf(":"),n=hl.camelize(a.slice(0,r)),o=a.slice(r+1).trim();return t[n]=o,t},{})}function bl(e){return e.split(/\s+/).reduce(function(t,a){return t[a]=!0,t},{})}function Qa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Qa(l)}),n=Object.keys(e.attributes||{}).reduce(function(l,u){var m=e.attributes[u];switch(u){case"class":l.class=bl(m);break;case"style":l.style=gl(m);break;default:l.attrs[u]=m}return l},{attrs:{},class:{},style:{}});a.class;var o=a.style,s=o===void 0?{}:o,i=fl(a,pl);return sr(e.tag,M(M(M({},t),{},{class:n.class,style:M(M({},n.style),s)},n.attrs),i),r)}var er=!1;try{er=!0}catch{}function yl(){if(!er&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Jt(e){if(e&&_e(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(tt.icon)return tt.icon(e);if(e===null)return null;if(_e(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var _l=we({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(t,a){var r=a.attrs,n=T(function(){return Jt(t.icon)}),o=T(function(){return Le("classes",ml(t))}),s=T(function(){return Le("transform",typeof t.transform=="string"?tt.transform(t.transform):t.transform)}),i=T(function(){return Le("mask",Jt(t.mask))}),l=T(function(){var m=M(M(M(M({},o.value),s.value),i.value),{},{symbol:t.symbol,maskId:t.maskId});return m.title=t.title,m.titleId=t.titleId,ll(n.value,m)});Qt(l,function(m){if(!m)return yl("Could not find one or more icon(s)",n.value,i.value)},{immediate:!0});var u=T(function(){return l.value?Qa(l.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var wl={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"]};const Ie=e=>(at("data-v-660eea15"),e=e(),rt(),e),xl=["data-visible"],Sl=Ie(()=>f("div",{class:"wpp-bubble__glow","aria-hidden":"true"},null,-1)),kl={class:"wpp-bubble__row"},Al=Ie(()=>f("div",{class:"wpp-bubble__avatar"},[f("span",{class:"wpp-badge"},"AI")],-1)),Pl={class:"wpp-bubble__msg"},El=Ie(()=>f("div",{class:"wpp-bubble__typing"},[f("span"),f("span"),f("span")],-1)),Il={class:"wpp-bubble__text"},Ol=Ie(()=>f("span",{class:"wpp-bubble__tail","aria-hidden":"true"},null,-1)),$l=["href"],Cl=we({__name:"WhatsAppFloat",props:{number:{},text:{},bottom:{default:85},right:{default:25},left:{default:void 0},bgClass:{default:"bgClass"},zIndex:{default:2147483e3},hideOnSelector:{default:"#contacto"},bubblePresentation:{default:"Hola Bienvenido!"},bubbleText:{default:"Agendamos una reunión sin costo?"},bubbleDelayMs:{default:1500},bubbleAutoHideMs:{default:8e3},bubbleHoverKeepMs:{default:2600}},setup(e){il.add(wl);const t=e,a=T(()=>t.left!=null),{buildUrl:r}=ot(),n=T(()=>r(t.number,t.text)),o=De(!0);let s=null;te(()=>{if(t.hideOnSelector){const y=document.querySelector(t.hideOnSelector);y&&(s=new IntersectionObserver(g=>{o.value=g[0].intersectionRatio<.2},{threshold:[0,.2,1]}),s.observe(y))}b()}),ir(()=>s==null?void 0:s.disconnect());const i=T(()=>{const y=`calc(env(safe-area-inset-bottom, 0px) + ${t.bottom}px)`,g=t.left==null?`calc(env(safe-area-inset-right, 0px) + ${t.right}px)`:void 0,d=t.left!=null?`calc(env(safe-area-inset-left, 0px) + ${t.left}px)`:void 0;return{position:"fixed","--fab-bottom":y,"--fab-right":g,"--fab-left":d,bottom:"var(--fab-bottom)",right:"var(--fab-right)",left:"var(--fab-left)",zIndex:String(t.zIndex)}}),l=T(()=>t.bgClass),u=De(!1);let m=null,v=null;function _(){m&&(clearTimeout(m),m=null),v&&(clearTimeout(v),v=null)}function b(){_(),m=window.setTimeout(()=>{o.value&&(u.value=!0,v=window.setTimeout(()=>u.value=!1,t.bubbleAutoHideMs))},t.bubbleDelayMs)}function S(y){y?(_(),u.value=!0):(_(),v=window.setTimeout(()=>u.value=!1,t.bubbleHoverKeepMs))}return Qt(o,y=>{y||(u.value=!1)}),(y,g)=>(B(),lr(mr,{to:"body"},[f("div",{class:"whatsapp-fab-wrap",style:dr(i.value),"data-visible":o.value,onMouseenter:g[0]||(g[0]=d=>S(!0)),onMouseleave:g[1]||(g[1]=d=>S(!1))},[bt(cr,{name:"bubbleX"},{default:fr(()=>[u.value?(B(),K("div",{key:0,class:ze(["wpp-bubble wpp-bubble--dark",[{"is-left":a.value,"from-left":a.value,"from-right":!a.value,"is-active":u.value}]]),role:"status","aria-live":"polite"},[Sl,f("div",kl,[Al,f("div",Pl,[El,f("div",Il,[f("span",null,E(y.bubblePresentation),1),f("span",null,E(y.bubbleText),1)])])]),Ol],2)):ur("",!0)]),_:1}),f("a",{href:n.value,target:"_blank",rel:"noopener noreferrer","aria-label":"Contactar por WhatsApp",class:ze(["whatsapp-fab transition-transform duration-300 hover:scale-110",l.value]),"data-whatsapp-fab":""},[bt(A(_l),{icon:["fab","whatsapp"]})],10,$l)],44,xl)]))}}),Wl=xe(Cl,[["__scopeId","data-v-660eea15"]]);export{jl as F,Nl as L,Rl as N,Wl as W,Dl as _,Ll as a,Ml as b,zl as l,ot as u};
