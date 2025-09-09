import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { onUnmounted, mergeProps, useSSRContext, ref, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0$4, a as _sfc_main$b, b as _sfc_main$c, c as _sfc_main$d, L as Lines } from "./loader-jCTjqXsl.js";
import { _ as _imports_0$1 } from "./03-DYXBsvJS.js";
import { _ as _imports_0$2, a as _imports_1, b as _imports_2$1, c as _imports_3$1, d as _imports_4$1 } from "./05-Ry52bwAK.js";
import { i as isInView } from "./isInView-VXyFXDVH.js";
import { _ as _imports_0$3, a as _imports_1$1, b as _imports_2$2 } from "./c3-CdCIugB9.js";
import { _ as _imports_1$2 } from "./arrow-right-BVYbsUuS.js";
import { d as data } from "./team-D6p_iKBL.js";
import { S as Swiper, a as SwiperSlide } from "./swiper-slide-Dn_WuJYw.js";
import "ssr-window";
import { d as data$1 } from "./testimonials-Dq-BK1h4.js";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "dom7";
const _sfc_main$a = {
  __name: "About",
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-crev section-padding sub-bg radius-30 mt-15" }, _attrs))}><div class="sec-head"><div class="fixed-head main-bg"><h5 class="stroke">About Us</h5><div class="shap-right-top"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></div></div><div class="container"><div class="row lg-marg"><div class="col-lg-6"><div class="left-block mt-100 md-mb50"><div class="d-flex align-items-center"><div><div class="info"><h6> Sam <br> Peterson </h6><p class="nowrap">HR specialist</p></div></div><div><div class="img fit-img radius-30"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div></div><div class="mz-shap"><svg height="100%" viewBox="0 0 610 547" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 546.015H211.63C211.635 546.015 211.638 546.011 211.638 546.007V546.007C211.638 546.003 211.642 545.999 211.646 545.999H592.691C601.786 545.999 609.158 538.627 609.158 529.533L609.157 251.366C609.157 242.272 601.785 234.899 592.691 234.899H401.097C392.003 234.899 384.631 227.527 384.631 218.433V112.465C384.631 103.371 377.259 95.999 368.164 95.999H214.466C205.372 95.999 198 88.6268 198 79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 282.659 176.011 290.031 166.917 290.031H116.134H116.134H16.5634C7.46936 290.031 0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 469.762 116.134 478.856V529.548Z" fill="#1a1a1a"></path></svg></div></div></div><div class="col-lg-6 valign"><div class="content full-width"><div class="sec-head mb-30"><h6 class="sub-title mb-15 main-color">Our Skills</h6><h2>The ultmiate guide to marketing success.</h2></div><div class="text"><p> We shifted our talents to frontier science because we wanted our work to have tangible, human-positive impact. Also, we get front row seats to the future. </p></div><div class="mt-50"><div class="skills-box"><div class="skill-item mb-40"><h5 class="sub-title mb-15">UI / UX Design</h5><div class="skill-progress"><div class="progres" data-value="90%"></div></div></div><div class="skill-item"><h5 class="sub-title mb-15">Apps Development</h5><div class="skill-progress"><div class="progres" data-value="80%"></div></div></div></div></div></div></div></div></div><div class="brands-crev revers-bg simple section-padding pb-0"><div class="container"><div class="row"><div class="col-lg-6 mt-100 order-md-2"><div class="row"><div class="col-6 item ontop"><div class="img"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></div><span class="top-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-6 item"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div></div></div><div class="col-lg-5 offset-lg-1 md-hide"><div class="sec-head nocurve"><div class="ontop"><h6 class="sub-title main-color mb-15">Special Thanks To</h6><h3 class="fw-600 text-u ls1"> All our <span class="fw-200">partners</span></h3></div></div></div><div class="col-12 order-md-1"><div class="row"><div class="col-lg-3 col-6 item empty"><div class="text"><h2 class="fz-80">6k<span class="fz-30">+</span></h2><h6 class="sub-title">Satisfied Clients</h6></div><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-lg-3 col-6 item"><div class="img"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></div><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-lg-3 col-6 item ontop"><div class="img"><img${ssrRenderAttr("src", _imports_3$1)} alt=""></div><span class="top-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-left"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div><div class="col-lg-3 col-6 item"><div class="img"><img${ssrRenderAttr("src", _imports_4$1)} alt=""></div><span class="top-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span><span class="bottom-right"><svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-23 2xl:w-[3.2rem] h-auto"><rect y="11" width="23" height="0.671958" fill="white"></rect><rect x="12" width="23" height="0.671957" transform="rotate(90 12 0)" fill="white"></rect></svg></span></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-portfolio/About.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-crev section-padding sub-bg radius-30 mt-15" }, _attrs))}><div class="container"><div class="sec-head text-center mb-80"><h6 class="sub-title main-color mb-15">Latest News</h6><h2>Look at the articles</h2><div class="fixed-head main-bg"><h5 class="stroke">Blog</h5><div class="shap-right-top"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></div></div><div class="row"><div class="col-lg-4"><div class="item sub-bg2 md-mb50"><div class="img"><img${ssrRenderAttr("src", _imports_0$3)} alt=""><div class="tag sub-bg2"><span>Envato</span><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#222"></path></svg></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#222"></path></svg></div></div></div><div class="cont"><div class="date sub-title mb-10 opacity-7"><a href="/dark/blog-list">30 august 2021</a></div><h5><a href="/dark/blog-list"> Creative advertising in our life became a info noise </a></h5></div></div></div><div class="col-lg-4"><div class="item sub-bg2 md-mb50"><div class="img"><img${ssrRenderAttr("src", _imports_1$1)} alt=""><div class="tag sub-bg2"><span>Envato</span><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#222"></path></svg></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#222"></path></svg></div></div></div><div class="cont"><div class="date sub-title mb-10 opacity-7"><a href="/dark/blog-list">30 august 2021</a></div><h5><a href="/dark/blog-list"> Creative advertising in our life became a info noise </a></h5></div></div></div><div class="col-lg-4"><div class="item sub-bg2"><div class="img"><img${ssrRenderAttr("src", _imports_2$2)} alt=""><div class="tag sub-bg2"><span>Envato</span><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#222"></path></svg></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#222"></path></svg></div></div></div><div class="cont"><div class="date sub-title mb-10 opacity-7"><a href="/dark/blog-list">30 august 2021</a></div><h5><a href="/dark/blog-list"> We create some things for your success in growth </a></h5></div></div></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-portfolio/Blog.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "sub-bg radius-30 mt-15" }, _attrs))}><div class="container pb-40 pt-80 ontop"><div class="d-flex justify-content-center mb-30"><div class="logo icon-img-120"><img${ssrRenderAttr("src", _imports_0$4)} alt=""></div></div><div class="info-comp d-flex align-items-center justify-content-center pt-40 pb-40 bord-thin-bottom bord-thin-top"><div class="mr-30"><span class="icon main-color mr-10 ti-email"></span><span class="text">Support@Website.com</span></div><div class="mr-30"><span class="icon main-color mr-10 ti-mobile"></span><span class="text">+2 456 (343) 24 45</span></div><div><span class="icon main-color mr-10 ti-location-pin"></span><span class="text">Trussville 43 Crossings, Birmingham</span></div></div><div class="row sub-footer mt-40 pt-25 pb-25 main-bg radius-30 padding-rl-30"><div class="col-lg-4 col-md-6 md-mb15"><ul class="rest d-flex align-items-center"><li class="hover-this cursor-pointer"><a href="#0" class="hover-anim"><i class="fab fa-facebook-f"></i></a></li><li class="hover-this cursor-pointer ml-30"><a href="#0" class="hover-anim"><i class="fab fa-dribbble"></i></a></li><li class="hover-this cursor-pointer ml-30"><a href="#0" class="hover-anim"><i class="fab fa-linkedin-in"></i></a></li><li class="hover-this cursor-pointer ml-30"><a href="#0" class="hover-anim"><i class="fab fa-instagram"></i></a></li></ul></div><div class="col-lg-4 order-md-3"><div class="text-center"><p class="fz-14"> © 2024 InFolio is Proudly Powered by <span class="underline main-color"><a href="https://themeforest.net/user/UiCamp" target="_blank"> UiCamp </a></span></p></div></div><div class="col-lg-4 col-md-6 md-mb15 order-md-2"><div class="links d-flex justify-content-end"><ul class="rest d-flex align-items-center"><li><a href="/dark/page-FAQS">FAQ</a></li><li class="ml-30"><a href="/dark/page-about2">Careers</a></li><li class="ml-30"><a href="/dark/page-contact2">Contact Us</a></li></ul></div></div></div></div></footer>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-portfolio/Footer.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$7 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "crev-portfolio-header section-padding position-re" }, _attrs))}><div class="container pt-50 ontop"><div class="row"><div class="col-lg-10"><div class="caption"><h1> Branding and web design studio, driven by strategy &amp; innovation. <span class="underline main-color fz-30"><a href="/dark/page-contact2">Contact Us</a></span></h1><div class="row mt-30"><div class="col-lg-4"><div class="circle-button md-hide"><div class="rotate-circle fz-30 text-u"><svg class="textcircle opacity-7" viewBox="0 0 500 500"><defs><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path></defs><text><textPath xlinkHref="#textcircle" textLength="900"> Explore More - Explore More - </textPath></text></svg></div><div class="icon"><span class="ti-arrow-down fz-40"></span></div></div></div><div class="col-lg-7 valign"><div class="text"><p class="fz-18"> We combine forward-thinking design with modern technology to tell stories that transform and grow our partners brands. </p></div></div></div></div></div></div><div class="numb-fixed d-flex align-items-center"><div class="mr-30"><h2>54</h2><h6 class="sub-title fw-300 mt-10">Completed Works</h6></div><div><h2>08</h2><h6 class="sub-title fw-300 mt-10">Years Experience</h6></div></div></div><div class="bg-pattern bg-img opacity-4" data-background="/dark/assets/imgs/patterns/pattern2.png"></div></header>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-portfolio/Header.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "marquee-action section-padding sub-bg radius-30 mt-15 o-hidden" }, _attrs))}><div class="container-fluid"><div class="main-marq xlrg text-u"><div class="slide-har st1"><div class="box"><div class="item"><h4 class="d-flex align-items-center fw-800"><a href="/dark/page-contact2">Get In Touch</a><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><a href="/dark/page-contact2">Contact Us</a><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><a href="/dark/page-contact2">Get In Touch</a><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><a href="/dark/page-contact2">Contact Us</a><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><a href="/dark/page-contact2">Get In Touch</a><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><a href="/dark/page-contact2">Contact Us</a><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box"><div class="item"><h4 class="d-flex align-items-center fw-800"><a href="/dark/page-contact2">Get In Touch</a><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><a href="/dark/page-contact2">Contact Us</a><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><a href="/dark/page-contact2">Get In Touch</a><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><a href="/dark/page-contact2">Contact Us</a><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><a href="/dark/page-contact2">Get In Touch</a><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><a href="/dark/page-contact2">Contact Us</a><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-portfolio/Marquee.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Marquee = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$5 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    function handleScroll() {
      const bodyScroll = (void 0).scrollY;
      const navbar = (void 0).querySelector(".navbar");
      if (bodyScroll > 300)
        navbar.classList.add("nav-scroll");
      else
        navbar.classList.remove("nav-scroll");
    }
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleScroll);
    });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="navbar navbar-expand-lg pt-15"><div class="container"><a class="logo icon-img-100" href="#"><img${ssrRenderAttr("src", _imports_0$4)} alt="logo"></a><div class="topnav"><div class="menu-icon cursor-pointer"><span class="icon ti-align-right"></span></div></div></div></nav><div class="${ssrRenderClass(`hamenu one-scroll ${isOpen.value && "open"}`)}"><div class="logo icon-img-100"><img${ssrRenderAttr("src", _imports_0$4)} alt=""></div><div class="close-menu cursor-pointer ti-close"></div><div class="container"><div class="row"><div class="col-lg-2"><div class="menu-text"><div class="text"><h2>Menu</h2></div></div></div><div class="col-lg-7"><div class="menu-links"><ul class="main-menu rest"><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Home"> Home </span><i></i></div></div><div class="sub-menu"><ul><li><a href="/dark/home-main" class="sub-link"> Main Home </a></li><li><a href="/dark/home-startup-onepage" class="sub-link"> Modern Startup </a></li><li><a href="/dark/home-creative-agency" class="sub-link"> Creative Agency </a></li><li><a href="/dark/home-modern-agency" class="sub-link"> Modern Agency </a></li><li><a href="/dark/home-creative-portfolio" class="sub-link"> Creative Portfolio </a></li><li><a href="/dark/home-digital-agency" class="sub-link"> Digital Agency </a></li><li><a href="/dark/home-freelancer" class="sub-link"> Freelancer </a></li><li><a href="/dark/home-personal-vcard" class="sub-link"> Personal vCard </a></li><li><a href="/dark/home-minimal-portfolio" class="sub-link"> Minimal Portfolio </a></li><li><a href="/dark/home-asymmetric-portfolio" class="sub-link"> Asymmetric Portfolio </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Pages"> Pages </span><i></i></div></div><div class="sub-menu no-bord"><ul><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="About Us"> About Us </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/page-about" class="sub-link"> About Us v1 </a></li><li><a href="/dark/page-about2" class="sub-link"> About Us v2 </a></li><li><a href="/dark/page-about3" class="sub-link"> About Us v3 </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Services"> Services </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/page-services" class="sub-link"> Services v1 </a></li><li><a href="/dark/page-services2" class="sub-link"> Services v2 </a></li><li><a href="/dark/page-services-details" class="sub-link"> Services Details </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Contact"> Contact </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/page-contact" class="sub-link"> Contact v1 </a></li><li><a href="/dark/page-contact2" class="sub-link"> Contact v2 </a></li><li><a href="/dark/page-contact3" class="sub-link"> Contact v3 </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Team"> Team </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/page-team" class="sub-link"> Our Team </a></li><li><a href="/dark/page-team-single" class="sub-link"> Team Details </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Others"> Others </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/page-FAQS" class="sub-link"> FAQS </a></li><li><a href="/dark/page-error-404" class="sub-link"> Error 404 </a></li></ul></div></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Portfolio"> Portfolio </span><i></i></div></div><div class="sub-menu no-bord"><ul><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Portfolio Type"> Portfolio Type </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/portfolio-standard" class="sub-link"> Standerd </a></li><li><a href="/dark/portfolio-gallery" class="sub-link"> Gallery </a></li><li><a href="/dark/portfolio-metro" class="sub-link"> Metro </a></li><li><a href="/dark/portfolio-masonry" class="sub-link"> Masonry </a></li><li><a href="/dark/portfolio-caption-cursor" class="sub-link"> Caption Cursor </a></li><li><a href="/dark/portfolio-outline" class="sub-link"> Outline </a></li><li><a href="/dark/portfolio-parallax" class="sub-link"> Parallax </a></li><li><a href="/dark/portfolio-sticky" class="sub-link"> Sticky </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Showcases"> Showcases </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/showcase-fullscreen" class="sub-link"> Parallax Slider </a></li><li><a href="/dark/showcase-carousel" class="sub-link"> Showcase Carousel </a></li><li><a href="/dark/showcase-half-slider" class="sub-link"> Creative Slider </a></li><li><a href="/dark/showcase-interactive-full" class="sub-link"> Interactive Full </a></li><li><a href="/dark/showcase-interactive-center" class="sub-link"> Interactive Center </a></li><li><a href="/dark/showcase-interactive-vertical" class="sub-link"> Interactive Vertical </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Portfolio Single"> Portfolio Single </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/project1" class="sub-link"> project1 </a></li><li><a href="/dark/project2" class="sub-link"> project2 </a></li><li><a href="/dark/project3" class="sub-link"> project3 </a></li><li><a href="/dark/project4" class="sub-link"> project4 </a></li><li><a href="/dark/project5" class="sub-link"> project5 </a></li><li><a href="/dark/project6" class="sub-link"> project6 </a></li></ul></div></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Blogs"> Blogs </span><i></i></div></div><div class="sub-menu"><ul><li><a class="sub-link" href="/dark/blog-classic"> Standard </a></li><li><a class="sub-link" href="/dark/blog-list"> Blog List </a></li><li><a class="sub-link" href="/dark/blog-list2"> Blog List 2 </a></li><li><a class="sub-link" href="/dark/blog-details"> Blog Details </a></li></ul></div></li><li><div class="o-hidden"><a href="/dark/page-contact3" class="link"><span class="fill-text" data-text="Contact Us"> Contact Us </span></a></div></li></ul></div></div><div class="col-lg-3"><div class="cont-info"><div class="item mb-50"><h6 class="sub-title mb-15 opacity-7">Address</h6><h5> 541 Melville Geek, <br> Palo Alto, CA 94301 </h5></div><div class="item mb-50"><h6 class="sub-title mb-15 opacity-7">Social Media</h6><ul class="rest social-text"><li class="mb-10"><a href="#0" class="hover-this"><span class="hover-anim">Facebook</span></a></li><li class="mb-10"><a href="#0" class="hover-this"><span class="hover-anim">Twitter</span></a></li><li class="mb-10"><a href="#0" class="hover-this"><span class="hover-anim">LinkedIn</span></a></li><li><a href="#0" class="hover-this"><span class="hover-anim">Instagram</span></a></li></ul></div><div class="item mb-40"><h6 class="sub-title mb-15 opacity-7">Contact Us</h6><h5><a href="#0">Hello@email.com</a></h5><h5 class="underline mt-10"><a href="#0">+1 840 841 25 69</a></h5></div></div></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-portfolio/Navbar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = "" + __publicAssetsURL("dark/assets/imgs/works/2/1.jpg");
const _imports_2 = "" + __publicAssetsURL("dark/assets/imgs/works/2/2.jpg");
const _imports_3 = "" + __publicAssetsURL("dark/assets/imgs/works/2/3.jpg");
const _imports_4 = "" + __publicAssetsURL("dark/assets/imgs/works/2/4.jpg");
const _imports_5 = "" + __publicAssetsURL("dark/assets/imgs/works/2/5.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-clean section-padding pt-0" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5"><div class="item mb-30"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""><div class="cont d-flex align-items-center"><div><h5>Nice guy with a smile</h5><p>Graphic Designing</p></div><div class="ml-auto"><a href="/dark/project1" class="rmore"><img${ssrRenderAttr("src", _imports_1$2)} alt="" class="icon-img-20"></a></div></div></div></div></div><div class="col-lg-7"><div class="item mb-30"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""><div class="cont d-flex align-items-center"><div><h5>Nice guy with a smile</h5><p>Graphic Designing</p></div><div class="ml-auto"><a href="/dark/project2" class="rmore"><img${ssrRenderAttr("src", _imports_1$2)} alt="" class="icon-img-20"></a></div></div></div></div></div><div class="col-lg-4"><div class="item md-mb30"><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""><div class="cont d-flex align-items-center"><div><h5>Nice guy with a smile</h5><p>Graphic Designing</p></div><div class="ml-auto"><a href="/dark/project3" class="rmore"><img${ssrRenderAttr("src", _imports_1$2)} alt="" class="icon-img-20"></a></div></div></div></div></div><div class="col-lg-4"><div class="item md-mb30"><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""><div class="cont d-flex align-items-center"><div><h5>Nice guy with a smile</h5><p>Graphic Designing</p></div><div class="ml-auto"><a href="/dark/project4" class="rmore"><img${ssrRenderAttr("src", _imports_1$2)} alt="" class="icon-img-20"></a></div></div></div></div></div><div class="col-lg-4"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_5)} alt=""><div class="cont d-flex align-items-center"><div><h5>Nice guy with a smile</h5><p>Graphic Designing</p></div><div class="ml-auto"><a href="/dark/project5" class="rmore"><img${ssrRenderAttr("src", _imports_1$2)} alt="" class="icon-img-20"></a></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-portfolio/Portfolio.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Portfolio = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-dots section-padding sub-bg radius-30 mt-15" }, _attrs))}><div class="container"><div class="sec-head text-center mb-80"><h6 class="sub-title main-color mb-15">Our Specialize</h6><h2>What We Have to Offer</h2><div class="fixed-head main-bg"><h5 class="stroke">Services</h5><div class="shap-right-top"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></div></div><div class="row xlg-marg ontop"><div class="col-lg-4"><div class="item md-mb50"><h4 class="bg-img mb-30" data-background="/dark/assets/imgs/serv-img/1.jpg"> U </h4><h5>UI-UX Design</h5><div class="text mt-15"><p class="mb-30"> Help increase the traffic into your business via marketing online &amp; offline. </p><ul class="rest dot-list fz-18"><li class="mb-10">Website Design</li><li class="mb-10">UI/UX Design</li><li class="mb-10">Mobile App Development</li><li>Animations</li></ul></div></div></div><div class="col-lg-4"><div class="item md-mb50"><h4 class="bg-img mb-30" data-background="/dark/assets/imgs/serv-img/2.jpg"> B </h4><h5>Brand Strategy</h5><div class="text mt-15"><p class="mb-30"> Help increase the traffic into your business via marketing online &amp; offline. </p><ul class="rest dot-list fz-18"><li class="mb-10">Website Design</li><li class="mb-10">UI/UX Design</li><li class="mb-10">Mobile App Development</li><li>Animations</li></ul></div></div></div><div class="col-lg-4"><div class="item"><h4 class="bg-img mb-30" data-background="/dark/assets/imgs/serv-img/4.jpg"> S </h4><h5>SEO &amp; Marketing</h5><div class="text mt-15"><p class="mb-30"> Help increase the traffic into your business via marketing online &amp; offline. </p><ul class="rest dot-list fz-18"><li class="mb-10">Website Design</li><li class="mb-10">UI/UX Design</li><li class="mb-10">Mobile App Development</li><li>Animations</li></ul></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-portfolio/Services.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team section-padding sub-bg radius-30 mt-15" }, _attrs))}><div class="container"><div class="sec-head text-center mb-80"><h6 class="sub-title main-color mb-15">Our Team</h6><h2>Meet our legends</h2><div class="fixed-head main-bg"><h5 class="stroke">Team</h5><div class="shap-right-top"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data), (item, i) => {
        _push(`<div class="col-lg-4"><div class="item md-mb50"><div class="img"><img${ssrRenderAttr("src", item.img)} alt=""><div class="info"><span class="fz-12">${ssrInterpolate(item.subName)}</span><h6 class="fz-18">${ssrInterpolate(item.name)}</h6></div></div><div class="social"><div class="links"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-behance"></i></a><a href="#0"><i class="fab fa-instagram"></i></a></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-portfolio/Team.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      spaceBetween: 30,
      loop: true,
      breakpoints: { 800: { slidesPerView: 2 } }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testim-crev section-padding sub-bg radius-30 mt-15" }, _attrs))}><div class="container"><div class="sec-head text-center mb-80"><h6 class="sub-title main-color mb-15">Testimonials</h6><h2>What People Say?</h2><div class="fixed-head main-bg"><h5 class="stroke">Clients</h5><div class="shap-right-top"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></div></div><div class="testim-swiper2" data-carousel="swiper" data-loop="true" data-space="30">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(swiperOptions, {
        id: "content-carousel-container-unq-testim",
        class: "swiper-container",
        "data-swiper": "container"
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data$1).slice(0, 3), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item sub-bg2"${_scopeId2}><div class="content"${_scopeId2}><div class="rate-stars fz-14 sub-bg"${_scopeId2}><span class="rate main-color"${_scopeId2}><i class="fas fa-star"${_scopeId2}></i><i class="fas fa-star"${_scopeId2}></i><i class="fas fa-star"${_scopeId2}></i><i class="fas fa-star"${_scopeId2}></i><i class="fas fa-star"${_scopeId2}></i></span><div class="shap-left-top"${_scopeId2}><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"${_scopeId2}><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1d1d1d"${_scopeId2}></path></svg></div><div class="shap-right-bottom"${_scopeId2}><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"${_scopeId2}><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1d1d1d"${_scopeId2}></path></svg></div></div><svg xmlns="http://www.w3.org/2000/svg" width="256.721" height="208.227" viewBox="0 0 256.721 208.227" class="qout-svg"${_scopeId2}><path data-name="Path" d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#fff" stroke-width="1" opacity="0.322"${_scopeId2}></path></svg><div class="text"${_scopeId2}><span class="tag sub-title mb-15"${_scopeId2}> Design Quality </span><p${_scopeId2}>${ssrInterpolate(item.desc)}</p></div><div class="info mt-40"${_scopeId2}><div class="img-curv sub-bg"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div><div class="shap-left-top"${_scopeId2}><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"${_scopeId2}><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1d1d1d"${_scopeId2}></path></svg></div><div class="shap-right-bottom"${_scopeId2}><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"${_scopeId2}><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1d1d1d"${_scopeId2}></path></svg></div></div><div class="ml-30"${_scopeId2}><h6${_scopeId2}>${ssrInterpolate(item.name)}</h6><span class="sub-title main-color"${_scopeId2}>${ssrInterpolate(item.subName)}</span></div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item sub-bg2" }, [
                        createVNode("div", { class: "content" }, [
                          createVNode("div", { class: "rate-stars fz-14 sub-bg" }, [
                            createVNode("span", { class: "rate main-color" }, [
                              createVNode("i", { class: "fas fa-star" }),
                              createVNode("i", { class: "fas fa-star" }),
                              createVNode("i", { class: "fas fa-star" }),
                              createVNode("i", { class: "fas fa-star" }),
                              createVNode("i", { class: "fas fa-star" })
                            ]),
                            createVNode("div", { class: "shap-left-top" }, [
                              (openBlock(), createBlock("svg", {
                                viewBox: "0 0 11 11",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-11 h-11"
                              }, [
                                createVNode("path", {
                                  d: "M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z",
                                  fill: "#1d1d1d"
                                })
                              ]))
                            ]),
                            createVNode("div", { class: "shap-right-bottom" }, [
                              (openBlock(), createBlock("svg", {
                                viewBox: "0 0 11 11",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-11 h-11"
                              }, [
                                createVNode("path", {
                                  d: "M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z",
                                  fill: "#1d1d1d"
                                })
                              ]))
                            ])
                          ]),
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
                          createVNode("div", { class: "text" }, [
                            createVNode("span", { class: "tag sub-title mb-15" }, " Design Quality "),
                            createVNode("p", null, toDisplayString(item.desc), 1)
                          ]),
                          createVNode("div", { class: "info mt-40" }, [
                            createVNode("div", { class: "img-curv sub-bg" }, [
                              createVNode("div", { class: "img" }, [
                                createVNode("img", {
                                  src: item.img,
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", { class: "shap-left-top" }, [
                                (openBlock(), createBlock("svg", {
                                  viewBox: "0 0 11 11",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "w-11 h-11"
                                }, [
                                  createVNode("path", {
                                    d: "M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z",
                                    fill: "#1d1d1d"
                                  })
                                ]))
                              ]),
                              createVNode("div", { class: "shap-right-bottom" }, [
                                (openBlock(), createBlock("svg", {
                                  viewBox: "0 0 11 11",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "w-11 h-11"
                                }, [
                                  createVNode("path", {
                                    d: "M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z",
                                    fill: "#1d1d1d"
                                  })
                                ]))
                              ])
                            ]),
                            createVNode("div", { class: "ml-30" }, [
                              createVNode("h6", null, toDisplayString(item.name), 1),
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data$1).slice(0, 3), (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item sub-bg2" }, [
                      createVNode("div", { class: "content" }, [
                        createVNode("div", { class: "rate-stars fz-14 sub-bg" }, [
                          createVNode("span", { class: "rate main-color" }, [
                            createVNode("i", { class: "fas fa-star" }),
                            createVNode("i", { class: "fas fa-star" }),
                            createVNode("i", { class: "fas fa-star" }),
                            createVNode("i", { class: "fas fa-star" }),
                            createVNode("i", { class: "fas fa-star" })
                          ]),
                          createVNode("div", { class: "shap-left-top" }, [
                            (openBlock(), createBlock("svg", {
                              viewBox: "0 0 11 11",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "w-11 h-11"
                            }, [
                              createVNode("path", {
                                d: "M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z",
                                fill: "#1d1d1d"
                              })
                            ]))
                          ]),
                          createVNode("div", { class: "shap-right-bottom" }, [
                            (openBlock(), createBlock("svg", {
                              viewBox: "0 0 11 11",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "w-11 h-11"
                            }, [
                              createVNode("path", {
                                d: "M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z",
                                fill: "#1d1d1d"
                              })
                            ]))
                          ])
                        ]),
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
                        createVNode("div", { class: "text" }, [
                          createVNode("span", { class: "tag sub-title mb-15" }, " Design Quality "),
                          createVNode("p", null, toDisplayString(item.desc), 1)
                        ]),
                        createVNode("div", { class: "info mt-40" }, [
                          createVNode("div", { class: "img-curv sub-bg" }, [
                            createVNode("div", { class: "img" }, [
                              createVNode("img", {
                                src: item.img,
                                alt: ""
                              }, null, 8, ["src"])
                            ]),
                            createVNode("div", { class: "shap-left-top" }, [
                              (openBlock(), createBlock("svg", {
                                viewBox: "0 0 11 11",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-11 h-11"
                              }, [
                                createVNode("path", {
                                  d: "M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z",
                                  fill: "#1d1d1d"
                                })
                              ]))
                            ]),
                            createVNode("div", { class: "shap-right-bottom" }, [
                              (openBlock(), createBlock("svg", {
                                viewBox: "0 0 11 11",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "w-11 h-11"
                              }, [
                                createVNode("path", {
                                  d: "M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z",
                                  fill: "#1d1d1d"
                                })
                              ]))
                            ])
                          ]),
                          createVNode("div", { class: "ml-30" }, [
                            createVNode("h6", null, toDisplayString(item.name), 1),
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
      _push(`<div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/creative-portfolio/Testimonials.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "home-creative-portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "crev-portfolio"
      },
      link: [
        { rel: "stylesheet", href: "/dark/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/dark/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/dark/assets/css/style.css" }
      ]
      // script: [{ src: '/dark/assets/js/smoother-script.js', defer: true }],
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$c), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$d), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg pt-15"><div class="sub-bg radius-30 o-hidden">`);
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
      _push(ssrRenderComponent(unref(Portfolio), null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$a), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Marquee), null, null, _parent));
      _push(ssrRenderComponent(unref(Blog), null, null, _parent));
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`</main></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/home-creative-portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=home-creative-portfolio-CA620CA4.js.map
