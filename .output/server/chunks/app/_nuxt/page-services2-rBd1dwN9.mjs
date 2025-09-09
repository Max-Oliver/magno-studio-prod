import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './Footer-Bov6VySB.mjs';
import { _ as _sfc_main$5, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines } from './loader-CCDLJnCr.mjs';
import { _ as _sfc_main$6 } from './Navbar-DzEBLQao.mjs';
import { _ as _sfc_main$7 } from './Testimonials-R3bg0S0F.mjs';
import { B as Blog } from './Blog-Dcf7bOyW.mjs';
import { _ as _imports_0 } from './1-BDb2Kgk4.mjs';
import { _ as _imports_1, a as _imports_2 } from './3-BSUExDzr.mjs';
import { _ as _imports_3, a as _imports_4 } from './5-DMyCZjQB.mjs';
import { _ as _imports_0$1 } from './2-DrRViv9P.mjs';
import { _ as _imports_0$2, a as _imports_1$1, b as _imports_2$1, c as _imports_3$1, d as _imports_4$1 } from './05-Dd0T5s0G.mjs';
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
import './swiper-slide-Dn_WuJYw.mjs';
import 'ssr-window';
import 'dom7';
import './navigation-nPzHIgEI.mjs';
import './testimonials-Dfj7txv4.mjs';
import './3-hVDirBa9.mjs';
import './author-DIkYSGQ7.mjs';

const _sfc_main$4 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "header page-header-cerv bg-img section-padding",
        "data-background": "/light/assets/imgs/header/2.jpg",
        "data-overlay-dark": "4"
      }, _attrs))}><div class="container pt-100 ontop"><div class="text-center"><h1 class="fz-100">Our Services.</h1><div class="mt-15"><a href="/light/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Services</span></div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/services2/Header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-tab crev section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Specialize</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> What We <span class="fw-200">Offer</span></h2></div></div><div class="row"><div class="col-lg-5 d-flex align-items-center justify-content-center"><div class="glry-img"><div id="tab-1" class="bg-img tab-img current" data-background="/light/assets/imgs/works/1/1.jpg"></div><div id="tab-2" class="bg-img tab-img" data-background="/light/assets/imgs/works/1/2.jpg"></div><div id="tab-3" class="bg-img tab-img" data-background="/light/assets/imgs/works/1/3.jpg"></div><div id="tab-4" class="bg-img tab-img" data-background="/light/assets/imgs/works/1/4.jpg"></div><div id="tab-5" class="bg-img tab-img" data-background="/light/assets/imgs/works/1/5.jpg"></div></div></div><div class="col-lg-6 offset-lg-1 content"><div class="cluom mb-30 current" data-tab="tab-1"><div class="info"><h6 class="sub-title opacity-7">Development</h6><h4>Web Developments</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/light/page-services-details"> View Details <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-2"><div class="info"><h6 class="sub-title opacity-7">UI-UX Design</h6><h4>UI / UX Designing</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/light/page-services-details"> View Details <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-3"><div class="info"><h6 class="sub-title opacity-7">Marketing</h6><h4>Digital Marketing</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/light/page-services-details"> View Details <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-4"><div class="info"><h6 class="sub-title opacity-7">Graphic Design</h6><h4>Product Design</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/light/page-services-details"> View Details <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom" data-tab="tab-5"><div class="info"><h6 class="sub-title opacity-7">Marketing</h6><h4>Digital Marketing</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/light/page-services-details"> View Details <i class="ml-15 ti-arrow-top-right"></i></a></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/services2/Services.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "MainFeat",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "main-feat section-padding bg-img",
        "data-background": "/light/assets/imgs/header/bg-4.png",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container"><div class="sec-head mb-80"><div class="row justify-content-between"><div class="col-lg-6 md-mb50"><h6 class="sub-title main-color mb-15">Our Services</h6><h2 class="fw-600 fz-70"> What We Can Do For <span class="fw-300">Our Clients</span></h2></div><div class="col-lg-5 d-flex align-items-end"><div class="text full-width pb-40 bord-thin-bottom"><p> Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people </p></div></div></div></div><div class="row justify-content-between"><div class="col-lg-6"><div class="img md-mb50"><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="radius-15"></div></div><div class="col-lg-5"><div class="row"><div class="col-md-6"><div class="item mb-50"><h5 class="mb-15">UI-UX Design</h5><ul class="rest dot-list"><li class="mb-10">Website Design</li><li class="mb-10">UI/UX Design</li><li class="mb-10">Mobile App Development</li><li>Animations</li></ul></div><div class="item sm-mb50"><h5 class="mb-15">Developments</h5><ul class="rest dot-list"><li class="mb-10">Website Design</li><li class="mb-10">UI/UX Design</li><li class="mb-10">Mobile App Development</li><li>Animations</li></ul></div></div><div class="col-md-6"><div class="item mb-50"><h5 class="mb-15">Product Design</h5><ul class="rest dot-list"><li class="mb-10">Website Design</li><li class="mb-10">UI/UX Design</li><li class="mb-10">Mobile App Development</li><li>Animations</li></ul></div><div class="item"><h5 class="mb-15">Content</h5><ul class="rest dot-list"><li class="mb-10">Website Design</li><li class="mb-10">UI/UX Design</li><li class="mb-10">Mobile App Development</li><li>Animations</li></ul></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/services2/MainFeat.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "brands-crev simple section-padding pb-0" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6 mt-100 order-md-2"><div class="row"><div class="col-6 item ontop"><div class="img"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></div><span class="top-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-6 item"><div class="img"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div></div></div><div class="col-lg-5 offset-lg-1 md-hide"><div class="sec-head nocurve"><div class="ontop"><h6 class="sub-title main-color mb-15">Special Thanks To</h6><h3 class="fw-600 text-u ls1"> All our <span class="fw-200">partners</span></h3></div></div></div><div class="col-12 order-md-1"><div class="row"><div class="col-lg-3 col-6 item empty"><div class="text"><h2 class="fz-80">6k<span class="fz-30">+</span></h2><h6 class="sub-title">Satisfied Clients</h6></div><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-lg-3 col-6 item"><div class="img"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></div><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-lg-3 col-6 item ontop"><div class="img"><img${ssrRenderAttr("src", _imports_3$1)} alt=""></div><span class="top-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-lg-3 col-6 item"><div class="img"><img${ssrRenderAttr("src", _imports_4$1)} alt=""></div><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/services2/Brands.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Brands = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "page-services2",
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
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
      _push(ssrRenderComponent(unref(Brands), null, null, _parent));
      _push(ssrRenderComponent(unref(Blog), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/page-services2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=page-services2-rBd1dwN9.mjs.map
