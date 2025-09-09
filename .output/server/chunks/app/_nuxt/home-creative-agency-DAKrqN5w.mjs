import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, onUnmounted } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$c, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines, c as _imports_0 } from './loader-jCTjqXsl.mjs';
import { _ as _imports_1 } from './author-CbTf732r.mjs';
import { _ as _imports_0$1, a as _imports_1$2, b as _imports_2$1, c as _imports_3, d as _imports_4 } from './05-Ry52bwAK.mjs';
import { _ as _imports_2 } from './02-D3NKgtkr.mjs';
import { _ as _imports_0$2 } from './03-DYXBsvJS.mjs';
import { _ as _imports_0$3 } from './2-U3Hs8MEd.mjs';
import { _ as _sfc_main$d } from './Navbar-Ya8JvfXw.mjs';
import { _ as _imports_1$1 } from './arrow-right-BVYbsUuS.mjs';
import { d as data } from './works1-BLClJLAs.mjs';
import { S as Swiper2, a as SwiperSlide } from './swiper-slide-Dn_WuJYw.mjs';
import { N as Navigation } from './navigation-nPzHIgEI.mjs';
import { d as data$1 } from './services-Gdc-2V7P.mjs';
import { i as isInView } from './isInView-VXyFXDVH.mjs';
import { d as data$2 } from './testimonials-Dq-BK1h4.mjs';
import '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'ssr-window';
import 'dom7';

const _sfc_main$b = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list-crev section-padding sub-bg" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Blog</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600">Read Latest <span class="fw-200">News</span></h2><div class="ml-auto"><a href="/dark/blog-list" class="go-more"><span class="text">View all posts</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="item sub-bg2 wow fadeInUp" data-wow-delay=".1s"><div class="row"><div class="col-lg-3"><div class="info md-mb30"><div class="d-flex align-items-center"><div class="author"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="author-info"><span class="fz-13 opacity-8 mb-5">Posted by</span><h6 class="fz-18">Olivia Rhye</h6></div></div></div></div><div class="col-lg-6"><div class="cont"><h5 class="mb-10 underline"><a href="/dark/blog-details"> The Highly Creative UI/UX Workflow from a Silicon Valley. </a></h5><div class="tags"><a href="/dark/blog-classic">Design</a><a href="/dark/blog-classic">Marketing</a></div></div></div><div class="col-lg-3 d-flex align-items-center justify-end"><div class="ml-auto"><span class="date sub-title fz-13 opacity-8 mb-30"> 6 August 2022 </span></div></div></div><div class="background bg-img valign text-center" data-background="/dark/assets/imgs/blog/blog1.jpg" data-overlay-dark="4"><div class="more ontop full-width"><a href="/dark/blog-details"><span> Read More <i class="fas fa-arrow-right ml-10"></i></span></a></div></div></div><div class="item wow fadeInUp" data-wow-delay=".3s"><div class="row"><div class="col-lg-3"><div class="info md-mb30"><div class="d-flex align-items-center"><div class="author"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="author-info"><span class="fz-13 opacity-8 mb-5">Posted by</span><h6 class="fz-18">Olivia Rhye</h6></div></div></div></div><div class="col-lg-6"><div class="cont"><h5 class="mb-10 underline"><a href="/dark/blog-details"> Creativo J\xF3venes: a Lead Designer&#39;s UI/UX Core Checklist. </a></h5><div class="tags"><a href="/dark/blog-classic">Design</a><a href="/dark/blog-classic">Marketing</a></div></div></div><div class="col-lg-3 d-flex align-items-center justify-end"><div class="ml-auto"><span class="date sub-title fz-13 opacity-8 mb-30"> 6 August 2022 </span></div></div></div><div class="background bg-img valign text-center" data-background="/dark/assets/imgs/blog/blog2.jpg" data-overlay-dark="4"><div class="more ontop full-width"><a href="/dark/blog-details"><span> Read More <i class="fas fa-arrow-right ml-10"></i></span></a></div></div></div><div class="item sub-bg2 wow fadeInUp" data-wow-delay=".5s"><div class="row"><div class="col-lg-3"><div class="info md-mb30"><div class="d-flex align-items-center"><div class="author"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="author-info"><span class="fz-13 opacity-8 mb-5">Posted by</span><h6 class="fz-18">Olivia Rhye</h6></div></div></div></div><div class="col-lg-6"><div class="cont"><h5 class="mb-10 underline"><a href="/dark/blog-details"> Definitive Guide to Make a Daily More Productive Working Flow. </a></h5><div class="tags"><a href="/dark/blog-classic">Design</a><a href="/dark/blog-classic">Marketing</a></div></div></div><div class="col-lg-3 d-flex align-items-center justify-end"><div class="ml-auto"><span class="date sub-title fz-13 opacity-8 mb-30"> 6 August 2022 </span></div></div></div><div class="background bg-img valign text-center" data-background="/dark/assets/imgs/blog/blog4.jpg" data-overlay-dark="4"><div class="more ontop full-width"><a href="/dark/blog-details"><span> Read More <i class="fas fa-arrow-right ml-10"></i></span></a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-agency/Blog.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "brands-crev section-padding pt-0" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6 mt-100 order-md-2"><div class="row"><div class="col-6 item ontop"><div class="img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><span class="top-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-6 item"><div class="img"><img${ssrRenderAttr("src", _imports_1$2)} alt=""></div><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div></div></div><div class="col-lg-5 offset-lg-1 md-hide"><div class="sec-head nocurve"><div class="ontop"><h6 class="sub-title main-color mb-15">Special Thanks To</h6><h3 class="fw-600 text-u ls1"> All our <span class="fw-200">partners</span></h3></div></div></div><div class="col-12 order-md-1"><div class="row"><div class="col-lg-3 col-6 item empty"><div class="text"><h2 class="fz-80">6k<span class="fz-30">+</span></h2><h6 class="sub-title">Satisfied Clients</h6></div><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-lg-3 col-6 item"><div class="img"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></div><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-lg-3 col-6 item ontop"><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><span class="top-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-lg-3 col-6 item"><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div></div></div></div></div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-agency/Brands.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Brands = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$9 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "clean-footer crev bg-img",
        "data-background": "/dark/asstes/imgs/header/bg1.jpg",
        "data-overlay-dark": "10"
      }, _attrs))}><div class="container pb-40 section-padding ontop"><div class="cal-action pb-50 mb-80 bord-thin-bottom"><h2 class="fz-120 line-height-1 d-rotate wow"><span class="rotate-text"><a href="/dark/page-contact3"> Let\u2019s Contact <span class="ml-30 fz-70 ti-arrow-top-right"></span></a></span></h2></div><div class="row"><div class="col-lg-3"><div class="logo icon-img-100"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-lg-4"><div class="column"><div class="mb-40"><h6 class="sub-title mb-30">Address</h6><h5 class="opacity-8"> 5919 Trussville <br> Crossings Pkwy, Birmingham </h5></div><a href="#0" class="underline"><span class="fz-22 main-color">+2 456 (343) 24 45</span></a></div></div><div class="col-lg-2 offset-lg-1"><div class="column"><h6 class="sub-title mb-30">Useful Links</h6><ul class="rest fz-14"><li class="mb-15"><a href="/dark/page-about">About</a></li><li class="mb-15"><a href="/dark/page-services">Services</a></li><li class="mb-15"><a href="/dark/blog-list2">Blog</a></li><li><a href="/dark/page-contact">Contact</a></li></ul></div></div><div class="col-lg-2"><div class="column"><h6 class="sub-title mb-30">Support</h6><ul class="rest fz-14"><li class="mb-15"><a href="/dark/page-FAQS">FAQS</a></li><li class="mb-15"><a href="/dark/page-about">Term &amp; Conditions</a></li><li class="mb-15"><a href="/dark/page-about">Privacy policy</a></li><li><a href="/dark/page-about">Help</a></li></ul></div></div></div><div class="d-flex align-items-center pt-30 pb-30 mt-80 bord-thin-top"><div><ul class="rest d-flex align-items-center"><li class="hover-this cursor-pointer"><a href="#0" class="hover-anim"><i class="fab fa-facebook-f"></i></a></li><li class="hover-this cursor-pointer ml-30"><a href="#0" class="hover-anim"><i class="fab fa-dribbble"></i></a></li><li class="hover-this cursor-pointer ml-30"><a href="#0" class="hover-anim"><i class="fab fa-linkedin-in"></i></a></li><li class="hover-this cursor-pointer ml-30"><a href="#0" class="hover-anim"><i class="fab fa-instagram"></i></a></li></ul></div><div class="ml-auto"><p class="fz-14"> \xA9 2024 InFolio is Proudly Powered by <span class="underline main-color"><a href="https://themeforest.net/user/UiCamp" target="_blank"> UiCamp </a></span></p></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-agency/Footer.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "crev-agency-header" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-3 left-clumn"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div><h2 class="fz-80">6K<span class="fz-40">+</span></h2><h6 class="sub-title">Satisfied Clients</h6></div></div><div class="col-lg-6 valign center-clumn"><div><div class="caption main-bg"><h1 class="text-u">We design unique digital experience</h1></div><div class="row justify-content-center mt-30"><div class="col-md-9"><p> Our team of experts is dedicated to helping you achieve your digital goals. From website design and development to SEO, PPC advertising, and social media marketing. </p></div></div></div></div><div class="col-lg-3 right-clumn"><div class="text-center"><div class="circle-button"><a href="https://youtu.be/AzwC6umvd1s" class="vid"><div class="rotate-circle fz-30 text-u"><svg class="textcircle" viewBox="0 0 500 500"><defs><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path></defs><text><textPath xlinkHref="#textcircle" textLength="900"> Explore More - Explore More - </textPath></text></svg></div><div class="icon"><i class="fas fa-play"></i></div></a></div></div><div class="img"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></div></div></div></div></header>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-agency/Header.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "img-scale" }, _attrs))}><div class="image" data-overlay-dark="4"><div class="img"><img id="grow"${ssrRenderAttr("src", _imports_0$3)} data-speed="0.2" data-lag="0" alt=""></div><div class="text-u text-center ontop"><h2 class="fz-70 fw-600"> Boost Your <span class="fw-300">Business</span> Up <br><span class="fw-300">Ranking </span> High Lavel </h2></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-agency/ImageScale.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ImageScale = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "marquee bord-thin-bottom pt-30 pb-30 o-hidden" }, _attrs))}><div class="container-fluid"><div class="main-marq md-text text-u"><div class="slide-har st1"><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-agency/Marquee.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Marquee = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "numbers" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-4 col-md-6"><div class="item d-flex align-items-center justify-content-center md-mb50"><h2 class="fz-80 line-height-1">52</h2><span class="sub-title opacity-7 ml-30"> Projects <br> Completed </span></div></div><div class="col-lg-4 col-md-6"><div class="item d-flex align-items-center justify-content-center md-mb50"><h2 class="fz-80 line-height-1">34</h2><span class="sub-title opacity-7 ml-30"> Team <br> Members </span></div></div><div class="col-lg-4 col-md-6"><div class="item d-flex align-items-center justify-content-center"><h2 class="fz-80 line-height-1">6k<span class="fz-50">+</span></h2><span class="sub-title opacity-7 ml-30"> Customers <br> Satisfaction </span></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-agency/Numbers.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Numbers = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".swiper-arrow-control .swiper-button-next",
        prevEl: ".swiper-arrow-control .swiper-button-prev"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-carsouel section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> Our featured <span class="fw-200">projects</span></h2><div class="ml-auto"><div class="swiper-arrow-control"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div><div class="work-swiper-auto">`);
      _push(ssrRenderComponent(unref(Swiper2), mergeProps({
        id: "content-carousel-container-unq-work",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div><div class="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom"${_scopeId2}><div${_scopeId2}><h5${_scopeId2}>${ssrInterpolate(item.title)}</h5><p${_scopeId2}>${ssrInterpolate(item.subTitle)}</p></div><div class="ml-auto"${_scopeId2}><a${ssrRenderAttr("href", item.link)} class="rmore"${_scopeId2}><img${ssrRenderAttr("src", _imports_1$1)} alt="" class="icon-img-20"${_scopeId2}></a></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: item.img,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom" }, [
                          createVNode("div", null, [
                            createVNode("h5", null, toDisplayString(item.title), 1),
                            createVNode("p", null, toDisplayString(item.subTitle), 1)
                          ]),
                          createVNode("div", { class: "ml-auto" }, [
                            createVNode("a", {
                              href: item.link,
                              class: "rmore"
                            }, [
                              createVNode("img", {
                                src: _imports_1$1,
                                alt: "",
                                class: "icon-img-20"
                              })
                            ], 8, ["href"])
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img" }, [
                        createVNode("img", {
                          src: item.img,
                          alt: ""
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom" }, [
                        createVNode("div", null, [
                          createVNode("h5", null, toDisplayString(item.title), 1),
                          createVNode("p", null, toDisplayString(item.subTitle), 1)
                        ]),
                        createVNode("div", { class: "ml-auto" }, [
                          createVNode("a", {
                            href: item.link,
                            class: "rmore"
                          }, [
                            createVNode("img", {
                              src: _imports_1$1,
                              alt: "",
                              class: "icon-img-20"
                            })
                          ], 8, ["href"])
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
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-agency/Portfolio.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-boxs section-padding pb-0" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Specialize</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> What We Have <span class="fw-200">to Offer</span></h2><div class="ml-auto"><a href="/dark/page-services" class="go-more"><span class="text">View all services</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row pt-30"><!--[-->`);
      ssrRenderList(unref(data$1), (item, i) => {
        _push(`<div class="col-lg-3 col-md-6 items"><div class="item-box bg md-mb50"><div class="icon mb-40 opacity-5"><img${ssrRenderAttr("src", item.img)} alt=""></div><h5 class="mb-15 text-u">${ssrInterpolate(item.title.split(" ")[0])} <br> ${ssrInterpolate(item.title.split(" ")[1])}</h5><p>${ssrInterpolate(item.desc)}</p><a${ssrRenderAttr("href", item.link)} class="rmore mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_1$1)} alt="" class="icon-img-20 ml-5"></a></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-agency/Services.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "skills-img section-padding position-re" }, _attrs))}><div class="container"><div class="row justify-content-between"><div class="col-lg-5"><div class="img md-mb50"><img${ssrRenderAttr("src", _imports_2)} alt="" class="radius-30"><div class="curv-title main-bg"><h6 class="sub-title">Efficient Tasking</h6><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></div></div></div><div class="col-lg-6 valign"><div class="content full-width"><div class="sec-head mb-30"><h6 class="sub-title mb-15 main-color">Our Skills</h6><h2 class="text-u">The ultmiate guide to marketing success.</h2></div><div class="row justify-content-end"><div class="col-lg-11"><div class="text"><p> We shifted our talents to frontier science because we wanted our work to have tangible, human-positive impact. Also, we get front row seats to the future. </p></div><div class="mt-50"><div class="skills-box"><div class="skill-item mb-40"><h5 class="sub-title mb-15">UI / UX Design</h5><div class="skill-progress"><div class="progres" data-value="90%"></div></div></div><div class="skill-item"><h5 class="sub-title mb-15">Apps Development</h5><div class="skill-progress"><div class="progres" data-value="80%"></div></div></div></div></div><div class="mt-80"><a href="#0" class="butn-circle-text d-flex align-items-center"><h6 class="text">Try it for free</h6><div><span class="circle"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path></svg></span></div></a></div></div></div></div></div></div></div><div class="line-overlay"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-agency/Skills.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation],
      spaceBetween: 30,
      slidesPerView: 1,
      speed: 1e3,
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-control .swiper-button-next",
        prevEl: ".swiper-arrow-control .swiper-button-prev"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="sec-head"><h6 class="sub-title main-color mb-15">Testimonials</h6><h3 class="fw-600">What People <span class="fw-200">Say?</span></h3></div></div><div class="col-lg-8 position-re"><div class="testim-swiper" data-carousel="swiper" data-loop="true" data-space="30">`);
      _push(ssrRenderComponent(unref(Swiper2), mergeProps({
        id: "content-carousel-container-unq-testim",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data$2).slice(0, 2), (item, i) => {
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data$2).slice(0, 2), (item, i) => {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-agency/Testimonials.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "home-creative-agency",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/dark/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/dark/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/dark/assets/css/style.css" }
      ]
      // script: [{ src: '/dark/assets/js/smoother-script.js', defer: true }],
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$c), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$d), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg pt-80 o-hidden">`);
      _push(ssrRenderComponent(unref(Header), null, null, _parent));
      _push(ssrRenderComponent(unref(Marquee), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Numbers), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Brands), null, null, _parent));
      _push(ssrRenderComponent(unref(ImageScale), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$9), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/home-creative-agency.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-creative-agency-DAKrqN5w.mjs.map
