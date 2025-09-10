import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps, ref, onUnmounted, withCtx, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$e, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines, c as _imports_0$1 } from './loader-CCDLJnCr.mjs';
import { d as data } from './services-BWFoP_gg.mjs';
import { _ as _imports_0$4 } from './2-DrRViv9P.mjs';
import { _ as _imports_0$2 } from './1-BDb2Kgk4.mjs';
import { _ as _imports_1$2, a as _imports_2$2 } from './3-BSUExDzr.mjs';
import { _ as _imports_3$2, a as _imports_4$1 } from './5-DMyCZjQB.mjs';
import { _ as _imports_0$5 } from './2-BbDbBgPU.mjs';
import { _ as _imports_0$3 } from './03-ChmKl91R.mjs';
import { i as isInView } from './isInView-VXyFXDVH.mjs';
import { S as Swiper2, a as SwiperSlide } from './swiper-slide-Dn_WuJYw.mjs';
import { N as Navigation } from './navigation-nPzHIgEI.mjs';
import { d as data$1 } from './testimonials-Dfj7txv4.mjs';
import { _ as _imports_0$6, a as _imports_2$3 } from './3-hVDirBa9.mjs';
import { _ as _imports_1$3 } from './author-DIkYSGQ7.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '../server.mjs';
import 'vue-router';
import 'ssr-window';
import 'dom7';

const _sfc_main$d = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "services-crev section-padding",
        "data-scroll-index": "1"
      }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Specialize</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> What We <span class="fw-200"> Offer</span></h2><div class="ml-auto"><a href="/light/page-services" class="go-more"><span class="text">View all Services</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data), (item, i) => {
        _push(`<div class="col-lg-6"><div class="item-box mb-30"><div class="d-flex align-items-end"><div><span class="num fz-20">01.</span><div class="icon mr-80"><img${ssrRenderAttr("src", item.img)} alt=""></div></div><div><h5>${ssrInterpolate(item.title)}</h5><div class="text mt-30"><p class="mb-80">${ssrInterpolate(item.desc)}</p></div><a${ssrRenderAttr("href", item.link)}><span>View More</span><span class="icon ti-arrow-top-right"></span></a></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-startup/Services.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "startup-header",
        "data-scroll-index": "0"
      }, _attrs))}><div class="valign bg-img" data-background="/light/assets/imgs/background/1.jpg" data-overlay-dark="5"><div class="container pt-40"><div class="caption"><div class="lg-text fw-600"><div class="text d-flex align-items-center"><span>We create</span></div><div class="text">impactful</div><div class="text">digital experiences</div></div><p> We combine forward-thinking design with modern technology to tell stories that transform and grow our partners brands. </p></div></div></div></header>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-startup/Header.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="navbar navbar-expand-lg nav-crev"><div class="container"><a class="logo icon-img-100" href="#"><img${ssrRenderAttr("src", _imports_0$1)} alt="logo"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"><i class="fas fa-bars"></i></span></button><div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="0"><span class="rolling-text">Home</span></a></li><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="1"><span class="rolling-text">Services</span></a></li><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="2"><span class="rolling-text">About</span></a></li><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="3"><span class="rolling-text">Portfolio</span></a></li><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="4"><span class="rolling-text">Team</span></a></li><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="5"><span class="rolling-text">Blog</span></a></li><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="6"><span class="rolling-text">Contact</span></a></li></ul></div><div class="topnav"><div class="menu-icon cursor-pointer"><span class="icon ti-align-right"></span></div></div></div></nav><div class="${ssrRenderClass(`hamenu one-scroll ${isOpen.value && "open"}`)}"><div class="logo icon-img-100"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="close-menu cursor-pointer ti-close"></div><div class="container"><div class="row"><div class="col-lg-2"><div class="menu-text"><div class="text"><h2>Menu</h2></div></div></div><div class="col-lg-7"><div class="menu-links"><ul class="main-menu rest"><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Home"> Home </span><i></i></div></div><div class="sub-menu"><ul><li><a href="/light/home-main" class="sub-link"> Main Home </a></li><li><a href="/light/home-startup-onepage" class="sub-link"> Modern Startup </a></li><li><a href="/light/home-creative-agency" class="sub-link"> Creative Agency </a></li><li><a href="/light/home-modern-agency" class="sub-link"> Modern Agency </a></li><li><a href="/light/home-creative-portfolio" class="sub-link"> Creative Portfolio </a></li><li><a href="/light/home-digital-agency" class="sub-link"> Digital Agency </a></li><li><a href="/light/home-freelancer" class="sub-link"> Freelancer </a></li><li><a href="/light/home-personal-vcard" class="sub-link"> Personal vCard </a></li><li><a href="/light/home-minimal-portfolio" class="sub-link"> Minimal Portfolio </a></li><li><a href="/light/home-asymmetric-portfolio" class="sub-link"> Asymmetric Portfolio </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Pages"> Pages </span><i></i></div></div><div class="sub-menu no-bord"><ul><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="About Us"> About Us </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/page-about" class="sub-link"> About Us v1 </a></li><li><a href="/light/page-about2" class="sub-link"> About Us v2 </a></li><li><a href="/light/page-about3" class="sub-link"> About Us v3 </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Services"> Services </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/page-services" class="sub-link"> Services v1 </a></li><li><a href="/light/page-services2" class="sub-link"> Services v2 </a></li><li><a href="/light/page-services-details" class="sub-link"> Services Details </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Contact"> Contact </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/page-contact" class="sub-link"> Contact v1 </a></li><li><a href="/light/page-contact2" class="sub-link"> Contact v2 </a></li><li><a href="/light/page-contact3" class="sub-link"> Contact v3 </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Team"> Team </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/page-team" class="sub-link"> Our Team </a></li><li><a href="/light/page-team-single" class="sub-link"> Team Details </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Others"> Others </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/page-FAQS" class="sub-link"> FAQS </a></li><li><a href="/light/page-error-404" class="sub-link"> Error 404 </a></li></ul></div></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Portfolio"> Portfolio </span><i></i></div></div><div class="sub-menu no-bord"><ul><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Portfolio Type"> Portfolio Type </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/portfolio-standard" class="sub-link"> Standerd </a></li><li><a href="/light/portfolio-gallery" class="sub-link"> Gallery </a></li><li><a href="/light/portfolio-metro" class="sub-link"> Metro </a></li><li><a href="/light/portfolio-masonry" class="sub-link"> Masonry </a></li><li><a href="/light/portfolio-caption-cursor" class="sub-link"> Caption Cursor </a></li><li><a href="/light/portfolio-outline" class="sub-link"> Outline </a></li><li><a href="/light/portfolio-parallax" class="sub-link"> Parallax </a></li><li><a href="/light/portfolio-sticky" class="sub-link"> Sticky </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Showcases"> Showcases </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/showcase-fullscreen" class="sub-link"> Parallax Slider </a></li><li><a href="/light/showcase-carousel" class="sub-link"> Showcase Carousel </a></li><li><a href="/light/showcase-half-slider" class="sub-link"> Creative Slider </a></li><li><a href="/light/showcase-interactive-full" class="sub-link"> Interactive Full </a></li><li><a href="/light/showcase-interactive-center" class="sub-link"> Interactive Center </a></li><li><a href="/light/showcase-interactive-vertical" class="sub-link"> Interactive Vertical </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Portfolio Single"> Portfolio Single </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/project1" class="sub-link"> project1 </a></li><li><a href="/light/project2" class="sub-link"> project2 </a></li><li><a href="/light/project3" class="sub-link"> project3 </a></li><li><a href="/light/project4" class="sub-link"> project4 </a></li><li><a href="/light/project5" class="sub-link"> project5 </a></li><li><a href="/light/project6" class="sub-link"> project6 </a></li></ul></div></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Blogs"> Blogs </span><i></i></div></div><div class="sub-menu"><ul><li><a class="sub-link" href="/light/blog-classic"> Standard </a></li><li><a class="sub-link" href="/light/blog-list"> Blog List </a></li><li><a class="sub-link" href="/light/blog-list2"> Blog List 2 </a></li><li><a class="sub-link" href="/light/blog-details"> Blog Details </a></li></ul></div></li><li><div class="o-hidden"><a href="/light/page-contact3" class="link"><span class="fill-text" data-text="Contact Us"> Contact Us </span></a></div></li></ul></div></div><div class="col-lg-3"><div class="cont-info"><div class="item mb-50"><h6 class="sub-title mb-15 opacity-7">Address</h6><h5> 541 Melville Geek, <br> Palo Alto, CA 94301 </h5></div><div class="item mb-50"><h6 class="sub-title mb-15 opacity-7">Social Media</h6><ul class="rest social-text"><li class="mb-10"><a href="#0" class="hover-this"><span class="hover-anim">Facebook</span></a></li><li class="mb-10"><a href="#0" class="hover-this"><span class="hover-anim">Twitter</span></a></li><li class="mb-10"><a href="#0" class="hover-this"><span class="hover-anim">LinkedIn</span></a></li><li><a href="#0" class="hover-this"><span class="hover-anim">Instagram</span></a></li></ul></div><div class="item mb-40"><h6 class="sub-title mb-15 opacity-7">Contact Us</h6><h5><a href="#0">Hello@email.com</a></h5><h5 class="underline mt-10"><a href="#0">+1 840 841 25 69</a></h5></div></div></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-startup/Navbar.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "about",
    "data-scroll-index": "2"
  }, _attrs))}><div class="container section-padding bord-thin-top"><div class="row md-marg"><div class="col-lg-6"><div class="cont md-mb50"><h6 class="sub-title main-color mb-15">Who We Are</h6><h3> Our team consists ofnpractitioners who have years of experience in launching &amp; managing projects. </h3><div class="d-flex align-items-end mt-100"><div><a href="/light/page-about3" class="d-flex align-items-end"><span class="sub-title nowrap">About Us</span><span class="fz-70 line-height-45 ti-arrow-top-right"></span></a></div><div class="ml-80"><p> With our low code solution you can model your process automation by yourself. This will increase your productivity in real time and bring all-around flexibility and best-in-class quality. </p></div></div></div></div><div class="col-lg-6"><div class="img-vid"><img${ssrRenderAttr("src", _imports_0$4)} alt=""><div class="curv-butn main-bg"><a href="https://youtu.be/AzwC6umvd1s" class="vid"><div class="icon"><i class="fas fa-play"></i></div></a><div class="shap-left-top"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></div></div></div></div></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-startup/About.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="main-marq lrg o-hidden"><div class="slide-har st1"><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-startup/Marquee.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Marquee = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$8 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "portfolio-tab crev section-padding",
        "data-scroll-index": "3"
      }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> Featured <span class="fw-200">projects</span></h2><div class="ml-auto"><a href="/light/portfolio-outline" class="go-more"><span class="text">View all Works</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-5 d-flex align-items-center justify-content-center"><div class="glry-img"><div id="tab-1" class="bg-img tab-img current" data-background="/light/assets/imgs/works/1/1.jpg"></div><div id="tab-2" class="bg-img tab-img" data-background="/light/assets/imgs/works/1/2.jpg"></div><div id="tab-3" class="bg-img tab-img" data-background="/light/assets/imgs/works/1/3.jpg"></div><div id="tab-4" class="bg-img tab-img" data-background="/light/assets/imgs/works/1/4.jpg"></div><div id="tab-5" class="bg-img tab-img" data-background="/light/assets/imgs/works/1/5.jpg"></div></div></div><div class="col-lg-6 offset-lg-1 content"><div class="cluom mb-30 current" data-tab="tab-1"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Iridescent Wallpapers</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/light/project6"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-2"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Proof Template</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_1$2)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/light/project5"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-3"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Ledge Phone</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_2$2)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/light/project4"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-4"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Frame Sans</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_3$2)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/light/project3"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom" data-tab="tab-5"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>Modern Minimalist</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_4$1)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/light/project2"> View Project <i class="ml-15 ti-arrow-top-right"></i></a></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-startup/Portfolio.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "in-box mb-15" }, _attrs))}><div class="img-scale"><div class="image" data-overlay-dark="4"><div class="img"><img id="grow"${ssrRenderAttr("src", _imports_0$5)} data-speed="0.2" data-lag="0" alt=""><a href="https://youtu.be/AzwC6umvd1s" class="vid vid-circle d-flex align-items-center justify-content-center"><span class="icon fz-50 ti-control-play"></span></a></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-startup/ImageScale.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ImageScale = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_1$1 = "" + publicAssetsURL("light/assets/imgs/team/1.jpg");
const _imports_2$1 = "" + publicAssetsURL("light/assets/imgs/team/2.jpg");
const _imports_3$1 = "" + publicAssetsURL("light/assets/imgs/team/3.jpg");
const _sfc_main$6 = {
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    function handleShowProgressValues() {
      isInView({
        selector: ".skill-progress .progres",
        isElements: true,
        callback: (element) => {
          element.style.width = element.getAttribute("data-value");
        }
      });
    }
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleShowProgressValues);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "about-crev section-padding sub-bg position-re ontop",
        "data-scroll-index": "4"
      }, _attrs))}><div class="container"><div class="row lg-marg"><div class="col-lg-6"><div class="left-block mt-100 md-mb50"><div class="d-flex align-items-center"><div><div class="info"><h6> Sam <br> Peterson </h6><p class="nowrap">Ceo Manager</p></div></div><div><div class="img fit-img radius-30"><img${ssrRenderAttr("src", _imports_0$3)} alt=""></div></div></div><div class="mz-shap"><svg height="100%" viewBox="0 0 610 547" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 546.015H211.63C211.635 546.015 211.638 546.011 211.638 546.007V546.007C211.638 546.003 211.642 545.999 211.646 545.999H592.691C601.786 545.999 609.158 538.627 609.158 529.533L609.157 251.366C609.157 242.272 601.785 234.899 592.691 234.899H401.097C392.003 234.899 384.631 227.527 384.631 218.433V112.465C384.631 103.371 377.259 95.999 368.164 95.999H214.466C205.372 95.999 198 88.6268 198 79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 282.659 176.011 290.031 166.917 290.031H116.134H116.134H16.5634C7.46936 290.031 0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 469.762 116.134 478.856V529.548Z" fill="#1a1a1a"></path></svg></div></div></div><div class="col-lg-6 valign"><div class="content full-width"><div class="sec-head mb-30"><h6 class="sub-title mb-15 main-color">Our Skills</h6><h2>The ultmiate guide to marketing success.</h2></div><div class="row justify-content-end"><div class="col-lg-11"><div class="text"><p> We shifted our talents to frontier science because we wanted our work to have tangible, human-positive impact. Also, we get front row seats to the future. </p></div><div class="mt-50"><div class="skills-box"><div class="skill-item mb-40"><h5 class="sub-title mb-15">UI / UX Design</h5><div class="skill-progress"><div class="progres" data-value="90%"></div></div></div><div class="skill-item"><h5 class="sub-title mb-15">Apps Development</h5><div class="skill-progress"><div class="progres" data-value="80%"></div></div></div></div></div></div></div></div></div></div><div class="team section-padding pb-0"><div class="row"><div class="col-lg-4"><div class="item md-mb50"><div class="img"><img${ssrRenderAttr("src", _imports_1$1)} alt=""><div class="info"><span class="fz-12">Web Designer</span><h6 class="fz-18">Robert De Niro</h6></div></div><div class="social"><div class="links"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-behance"></i></a><a href="#0"><i class="fab fa-instagram"></i></a></div></div></div></div><div class="col-lg-4"><div class="item md-mb50"><div class="img"><img${ssrRenderAttr("src", _imports_2$1)} alt=""><div class="info"><span class="fz-12">Web Designer</span><h6 class="fz-18">Brendan Fraser</h6></div></div><div class="social"><div class="links"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-behance"></i></a><a href="#0"><i class="fab fa-instagram"></i></a></div></div></div></div><div class="col-lg-4"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_3$1)} alt=""><div class="info"><span class="fz-12">Web Designer</span><h6 class="fz-18">Brendan Fraser</h6></div></div><div class="social"><div class="links"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-behance"></i></a><a href="#0"><i class="fab fa-instagram"></i></a></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-startup/Skills.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation],
      spaceBetween: 30,
      speed: 1e3,
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-control .swiper-button-next",
        prevEl: ".swiper-arrow-control .swiper-button-prev"
      },
      breakpoints: {
        640: {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: false
        },
        768: {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: false
        },
        1200: {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: false
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="sec-head"><h6 class="sub-title main-color mb-15">Testimonials</h6><h3 class="fw-600">What People <span class="fw-200">Say?</span></h3></div></div><div class="col-lg-8 position-re"><div class="testim-swiper">`);
      _push(ssrRenderComponent(unref(Swiper2), mergeProps({
        id: "content-carousel-container-unq-testim",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data$1), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item"${_scopeId2}><div class="content"${_scopeId2}><div class="text"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="256.721" height="208.227" viewBox="0 0 256.721 208.227" class="qout-svg"${_scopeId2}><path data-name="Path" d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#fff" stroke-width="1" opacity="0.322"${_scopeId2}></path></svg><p class="fz-30"${_scopeId2}>${ssrInterpolate(item.desc)}</p></div><div class="info d-flex align-items-center pt-40 mt-40 bord-thin-top"${_scopeId2}><div${_scopeId2}><div class="fit-img circle"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div></div><div class="ml-20"${_scopeId2}><h5${_scopeId2}>${ssrInterpolate(item.name)}</h5><span class="sub-title main-color"${_scopeId2}>${ssrInterpolate(item.subName)}</span></div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "content" }, [
                          createVNode("div", { class: "text" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "256.721",
                              height: "208.227",
                              viewBox: "0 0 256.721 208.227",
                              class: "qout-svg"
                            }, [
                              createVNode("path", {
                                "data-name": "Path",
                                d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                                transform: "translate(121.55 640.568)",
                                fill: "none",
                                stroke: "#fff",
                                "stroke-width": "1",
                                opacity: "0.322"
                              })
                            ])),
                            createVNode("p", { class: "fz-30" }, toDisplayString(item.desc), 1)
                          ]),
                          createVNode("div", { class: "info d-flex align-items-center pt-40 mt-40 bord-thin-top" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "fit-img circle" }, [
                                createVNode("img", {
                                  src: item.img,
                                  alt: ""
                                }, null, 8, ["src"])
                              ])
                            ]),
                            createVNode("div", { class: "ml-20" }, [
                              createVNode("h5", null, toDisplayString(item.name), 1),
                              createVNode("span", { class: "sub-title main-color" }, toDisplayString(item.subName), 1)
                            ])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data$1), (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "content" }, [
                        createVNode("div", { class: "text" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "256.721",
                            height: "208.227",
                            viewBox: "0 0 256.721 208.227",
                            class: "qout-svg"
                          }, [
                            createVNode("path", {
                              "data-name": "Path",
                              d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                              transform: "translate(121.55 640.568)",
                              fill: "none",
                              stroke: "#fff",
                              "stroke-width": "1",
                              opacity: "0.322"
                            })
                          ])),
                          createVNode("p", { class: "fz-30" }, toDisplayString(item.desc), 1)
                        ]),
                        createVNode("div", { class: "info d-flex align-items-center pt-40 mt-40 bord-thin-top" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "fit-img circle" }, [
                              createVNode("img", {
                                src: item.img,
                                alt: ""
                              }, null, 8, ["src"])
                            ])
                          ]),
                          createVNode("div", { class: "ml-20" }, [
                            createVNode("h5", null, toDisplayString(item.name), 1),
                            createVNode("span", { class: "sub-title main-color" }, toDisplayString(item.subName), 1)
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="swiper-arrow-control control-abslout"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div><div class="small-line"><div class="line-overlay"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-startup/Testimonials.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("light/assets/imgs/brands/b1.png");
const _imports_1 = "" + publicAssetsURL("light/assets/imgs/brands/b2.png");
const _imports_2 = "" + publicAssetsURL("light/assets/imgs/brands/b3.png");
const _imports_3 = "" + publicAssetsURL("light/assets/imgs/brands/b4.png");
const _imports_4 = "" + publicAssetsURL("light/assets/imgs/brands/b6.png");
const _sfc_main$4 = {
  __name: "Clients",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      speed: 500,
      loop: true,
      breakpoints: {
        // when window width is >= 640px
        500: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: false
        },
        // when window width is >= 768px
        700: {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: false
        },
        // when window width is >= 1200px
        1e3: {
          loop: true,
          slidesPerView: 5,
          spaceBetween: 30,
          centeredSlides: true
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "clients-carso section-padding pt-0" }, _attrs))}><div class="container"><div class="sec-bottom mb-100"><div class="main-bg d-flex align-items-center"><h6 class="fz-14 fw-400"> More than <span class="fw-600">200+ companies</span> trusted us worldwide </h6></div></div><div class="swiper5" data-carousel="swiper" data-items="5" data-loop="true" data-space="40">`);
      _push(ssrRenderComponent(unref(Swiper2), mergeProps({
        id: "content-carousel-container-unq-clients",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: ""
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: ""
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("img", {
                          src: _imports_2,
                          alt: ""
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("img", {
                          src: _imports_3,
                          alt: ""
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><img${ssrRenderAttr("src", _imports_4)} alt=""${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("img", {
                          src: _imports_4,
                          alt: ""
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: ""
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: ""
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("img", {
                        src: _imports_2,
                        alt: ""
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("img", {
                        src: _imports_3,
                        alt: ""
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("img", {
                        src: _imports_4,
                        alt: ""
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-startup/Clients.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "blog-list-half section-padding sub-bg",
    "data-scroll-index": "5"
  }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Blog</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600">Read Latest <span class="fw-200">News</span></h2><div class="ml-auto"><a href="/light/blog-list2" class="go-more"><span class="text">View all posts</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-6"><div class="item main-bg md-mb50"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_0$6)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1$3)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/light/blog-list">Marketing</a></div><h5><a href="/light/blog-details"> Free advertising for your online business. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div><div class="col-lg-6"><div class="item main-bg"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_2$3)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1$3)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/light/blog-list">Marketing</a><a href="/light/blog-list">Design</a></div><h5><a href="/light/blog-details"> Business meeting 2023 in San Francisco. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-startup/Blog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "contact section-padding",
    "data-scroll-index": "6"
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4 valign"><div class="sec-head info-box full-width md-mb80"><div class="phone fz-30 fw-600 underline main-color"><a href="#0">+1 840 841 25 69</a></div><div class="morinfo mt-50 pb-30 bord-thin-bottom"><h6 class="mb-15">Address</h6><p>Bes\xF2s 1, 08174 Sant Cugat del Vall\xE8s, Barcelona</p></div><div class="morinfo mt-30 pb-30 bord-thin-bottom"><h6 class="mb-15">Email</h6><p>Support@uithemez.com</p></div><div class="social-icon-circle mt-50"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-dribbble"></i></a><a href="#0"><i class="fab fa-behance"></i></a><a href="#0"><i class="fab fa-instagram"></i></a></div></div></div><div class="col-lg-7 offset-lg-1 valign"><div class="full-width"><div class="sec-head mb-50"><h6 class="sub-title main-color mb-15">Let&#39;s Chat</h6><h3 class="text-u ls1"> Send a <span class="fw-200">message</span></h3></div><form id="contact-form" class="form2" method="post" action="contact.php"><div class="messages"></div><div class="controls row"><div class="col-lg-6"><div class="form-group mb-30"><input id="form_name" type="text" name="name" placeholder="Name" required></div></div><div class="col-lg-6"><div class="form-group mb-30"><input id="form_email" type="email" name="email" placeholder="Email" required></div></div><div class="col-12"><div class="form-group mb-30"><input id="form_subject" type="text" name="subject" placeholder="Subject"></div></div><div class="col-12"><div class="form-group"><textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea></div><div class="mt-30"><button type="submit" class="butn butn-full butn-bord radius-30"><span class="text">Let&#39;s Talk</span></button></div></div></div></form></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-startup/Contact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "min-footer sub-bg pt-30 pb-30" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4 col-md-6 md-mb15"><div class="logo icon-img-100"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div><div class="col-lg-4 order-md-3"><div class="text-center"><p class="fz-14"> \xA9 2024 InFolio is Proudly Powered by <span class="underline main-color"><a href="https://themeforest.net/user/UiCamp" target="_blank"> UiCamp </a></span></p></div></div><div class="col-lg-4 col-md-6 order-md-2 md-mb15"><div class="links d-flex justify-content-end"><ul class="rest d-flex align-items-center"><li><a href="/light/page-FAQS">FAQ</a></li><li class="ml-30"><a href="/light/page-about3">Careers</a></li><li class="ml-30"><a href="/light/page-contact3">Contact Us</a></li></ul></div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-startup/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "home-startup-onepage",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/light/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/light/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/light/assets/css/style.css" }
      ]
      // script: [{ src: '/light/assets/js/smoother-script.js', defer: true }],
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg o-hidden">`);
      _push(ssrRenderComponent(unref(_sfc_main$c), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$d), null, null, _parent));
      _push(ssrRenderComponent(unref(About), null, null, _parent));
      _push(ssrRenderComponent(unref(Marquee), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent));
      _push(ssrRenderComponent(unref(ImageScale), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(Blog), null, null, _parent));
      _push(ssrRenderComponent(unref(Contact), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/old/light/home-startup-onepage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-startup-onepage-3icckt7e.mjs.map
