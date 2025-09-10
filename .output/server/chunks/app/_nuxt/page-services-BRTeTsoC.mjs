import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$9 } from './Footer-Bov6VySB.mjs';
import { _ as _sfc_main$6, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines } from './loader-CCDLJnCr.mjs';
import { _ as _sfc_main$7 } from './Navbar-DzEBLQao.mjs';
import { _ as _sfc_main$8 } from './Testimonials-R3bg0S0F.mjs';
import { _ as _imports_1 } from './arrow-right-6v-aF8S3.mjs';
import { d as data } from './services-BWFoP_gg.mjs';
import { _ as _imports_0, a as _imports_1$1 } from './shape03-cQYczURg.mjs';
import { _ as _imports_0$1, a as _imports_2, b as _imports_3, c as _imports_4 } from './6-ChE1ZHq7.mjs';
import { B as Blog } from './Blog-Dcf7bOyW.mjs';
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

const _sfc_main$5 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header bg-img section-padding",
        "data-background": "/light/assets/imgs/header/b5.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1 class="fz-100 text-u">Services.</h1><div class="mt-15"><a href="/light/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Services</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/services/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-boxs section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Specialize</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> What We <span class="fw-200">Offer</span></h2></div></div><div class="row pt-30"><!--[-->`);
      ssrRenderList(unref(data), (item, i) => {
        _push(`<div class="col-lg-3 col-md-6 items"><div class="item-box bg md-mb50"><div class="icon mb-40 opacity-5"><img${ssrRenderAttr("src", item.img)} alt=""></div><h5 class="mb-15 text-u">${ssrInterpolate(item.title.split(" ")[0])} <br> ${ssrInterpolate(item.title.split(" ")[1])}</h5><p>${ssrInterpolate(item.desc)}</p><a${ssrRenderAttr("href", item.link)} class="rmore mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon-img-20 ml-5"></a></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/services/Services.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="main-marq xlrg o-hidden"><div class="slide-har st1"><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/services/Marquee.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Marquee = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "price-hr section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5 valign"><div class="cont full-width md-mb50"><div><h6 class="sub-title main-color mb-15 wow fadeIn"> Over 150.000+ Clients </h6><h3 class="d-slideup wow"><span class="sideup-text"><span class="up-text">Affordable pricing.</span></span><span class="sideup-text"><span class="up-text">Easy scaling.</span></span></h3><div class="text mt-20"><p> We grow your brands through bold service we\u2019re providing fusce vulputate eleifend sapien. Etiam sollicitudin, ipsum. </p></div><ul class="rest list-arrow mt-30 pt-30 bord-thin-top"><li><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="#14cf93"></path></svg></span><h6 class="inline fw-400">Amazing communication.</h6></li><li class="mt-10"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="#14cf93"></path></svg></span><h6 class="inline fw-400"> Best trendinf designing experience. </h6></li><li class="mt-10"><span class="icon"><svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="#14cf93"></path></svg></span><h6 class="inline fw-400">Email &amp; Live chat.</h6></li></ul></div></div></div><div class="col-lg-6 offset-lg-1 valign"><div class="full-width"><div class="item sub-bg radius-10 d-flex align-items-center mb-30"><div class="type"><div class="icon-img-60 mb-10"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><h5 class="fw-600">Advanced</h5></div><div class="cont ml-50"><ul class="dot-list rest"><li class="mb-10">Guarenteed quality control</li><li class="mb-10">Top quality service</li><li class="mb-10">Best experts at your lease</li><li>7 days free</li></ul></div><div class="mount ml-auto text-center"><h3 class="numb-font"><span class="fz-20">$</span> 19</h3><div><a href="/light/page-contact" class="butn butn-md butn-bord radius-30"><span class="fz-13">Sign Up</span></a></div></div></div><div class="item main-colorbg radius-10 text-dark d-flex align-items-center"><div class="type"><div class="icon-img-60 mb-10"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div><h5 class="fw-600">Enterprise</h5></div><div class="cont ml-50"><ul class="dot-list rest"><li class="mb-10">Guarenteed quality control</li><li class="mb-10">Top quality service</li><li class="mb-10">Best experts at your lease</li><li>7 days free</li></ul></div><div class="mount ml-auto text-center"><h3 class="numb-font"><span class="fz-20">$</span> 49</h3><div><a href="/light/page-contact" class="butn butn-md butn-bord text-dark radius-30"><span class="fz-13">Sign Up</span></a></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/services/Price.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Price = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "process section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Process</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600"> Business <span class="fw-200">Development</span></h2><div class="ml-auto"><a href="/light/page-about2" class="go-more"><span class="text">View More</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row md-marg"><div class="col-lg-3 col-md-6 item md-mb50"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><h5 class="mb-15">Research</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/light/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon-img-20 ml-5"></a></div></div><div class="col-lg-3 col-md-6 item md-mb50"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><h5 class="mb-15">Concept</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/light/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon-img-20 ml-5"></a></div></div><div class="col-lg-3 col-md-6 item sm-mb50"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><h5 class="mb-15">Implement</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/light/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon-img-20 ml-5"></a></div></div><div class="col-lg-3 col-md-6 item"><div class="icon-img-60 mb-30"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><h5 class="mb-15">Handover</h5><p> Clarifying and translating insights into foundation and creative approach </p><div class="o-hidden"><a href="/light/page-about2" class="rmore to-in mt-30"><span class="sub-title">Read More</span><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon-img-20 ml-5"></a></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/services/Process.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Process = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "page-services",
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
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(Marquee), null, null, _parent));
      _push(ssrRenderComponent(unref(Price), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent));
      _push(ssrRenderComponent(unref(Process), null, null, _parent));
      _push(ssrRenderComponent(unref(Blog), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$9), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/old/light/page-services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=page-services-BRTeTsoC.mjs.map
