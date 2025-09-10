import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps, onUnmounted, ref, withCtx, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$b, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines, c as _imports_0 } from './loader-CbuutFIZ.mjs';
import { _ as _imports_0$1, a as _imports_1, b as _imports_2$1, c as _imports_3 } from './s4-Fkpan4SZ.mjs';
import { i as isInView } from './isInView-VXyFXDVH.mjs';
import { _ as _imports_1$1 } from './arrow-right-BVYbsUuS.mjs';
import { d as data } from './services-Gdc-2V7P.mjs';
import { _ as _imports_1$2, a as _imports_2$2 } from './3-Bn4yLYcT.mjs';
import { S as Swiper2, a as SwiperSlide } from './swiper-slide-Dn_WuJYw.mjs';
import { d as data$1 } from './testimonials-Dq-BK1h4.mjs';
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

const _sfc_main$a = {
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
      _push(`<!--[--><nav class="navbar navbar-expand-lg bord blur"><div class="container"><a class="logo icon-img-100" href="#"><img${ssrRenderAttr("src", _imports_0)} alt="logo"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"><i class="fas fa-bars"></i></span></button><div class="topnav"><div class="menu-icon cursor-pointer"><span class="icon ti-align-right"></span></div></div></div></nav><div class="${ssrRenderClass(`hamenu one-scroll ${isOpen.value && "open"}`)}"><div class="logo icon-img-100"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="close-menu cursor-pointer ti-close"></div><div class="container"><div class="row"><div class="col-lg-2"><div class="menu-text"><div class="text"><h2>Menu</h2></div></div></div><div class="col-lg-7"><div class="menu-links"><ul class="main-menu rest"><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Home"> Home </span><i></i></div></div><div class="sub-menu"><ul><li><a href="/dark/home-main" class="sub-link"> Main Home </a></li><li><a href="/dark/home-startup-onepage" class="sub-link"> Modern Startup </a></li><li><a href="/dark/home-creative-agency" class="sub-link"> Creative Agency </a></li><li><a href="/dark/home-modern-agency" class="sub-link"> Modern Agency </a></li><li><a href="/dark/home-creative-portfolio" class="sub-link"> Creative Portfolio </a></li><li><a href="/dark/home-digital-agency" class="sub-link"> Digital Agency </a></li><li><a href="/dark/home-freelancer" class="sub-link"> Freelancer </a></li><li><a href="/dark/home-personal-vcard" class="sub-link"> Personal vCard </a></li><li><a href="/dark/home-minimal-portfolio" class="sub-link"> Minimal Portfolio </a></li><li><a href="/dark/home-asymmetric-portfolio" class="sub-link"> Asymmetric Portfolio </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Pages"> Pages </span><i></i></div></div><div class="sub-menu no-bord"><ul><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="About Us"> About Us </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/page-about" class="sub-link"> About Us v1 </a></li><li><a href="/dark/page-about2" class="sub-link"> About Us v2 </a></li><li><a href="/dark/page-about3" class="sub-link"> About Us v3 </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Services"> Services </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/page-services" class="sub-link"> Services v1 </a></li><li><a href="/dark/page-services2" class="sub-link"> Services v2 </a></li><li><a href="/dark/page-services-details" class="sub-link"> Services Details </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Contact"> Contact </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/page-contact" class="sub-link"> Contact v1 </a></li><li><a href="/dark/page-contact2" class="sub-link"> Contact v2 </a></li><li><a href="/dark/page-contact3" class="sub-link"> Contact v3 </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Team"> Team </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/page-team" class="sub-link"> Our Team </a></li><li><a href="/dark/page-team-single" class="sub-link"> Team Details </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Others"> Others </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/page-FAQS" class="sub-link"> FAQS </a></li><li><a href="/dark/page-error-404" class="sub-link"> Error 404 </a></li></ul></div></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Portfolio"> Portfolio </span><i></i></div></div><div class="sub-menu no-bord"><ul><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Portfolio Type"> Portfolio Type </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/portfolio-standard" class="sub-link"> Standerd </a></li><li><a href="/dark/portfolio-gallery" class="sub-link"> Gallery </a></li><li><a href="/dark/portfolio-metro" class="sub-link"> Metro </a></li><li><a href="/dark/portfolio-masonry" class="sub-link"> Masonry </a></li><li><a href="/dark/portfolio-caption-cursor" class="sub-link"> Caption Cursor </a></li><li><a href="/dark/portfolio-outline" class="sub-link"> Outline </a></li><li><a href="/dark/portfolio-parallax" class="sub-link"> Parallax </a></li><li><a href="/dark/portfolio-sticky" class="sub-link"> Sticky </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Showcases"> Showcases </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/showcase-fullscreen" class="sub-link"> Parallax Slider </a></li><li><a href="/dark/showcase-carousel" class="sub-link"> Showcase Carousel </a></li><li><a href="/dark/showcase-half-slider" class="sub-link"> Creative Slider </a></li><li><a href="/dark/showcase-interactive-full" class="sub-link"> Interactive Full </a></li><li><a href="/dark/showcase-interactive-center" class="sub-link"> Interactive Center </a></li><li><a href="/dark/showcase-interactive-vertical" class="sub-link"> Interactive Vertical </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Portfolio Single"> Portfolio Single </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/dark/project1" class="sub-link"> project1 </a></li><li><a href="/dark/project2" class="sub-link"> project2 </a></li><li><a href="/dark/project3" class="sub-link"> project3 </a></li><li><a href="/dark/project4" class="sub-link"> project4 </a></li><li><a href="/dark/project5" class="sub-link"> project5 </a></li><li><a href="/dark/project6" class="sub-link"> project6 </a></li></ul></div></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Blogs"> Blogs </span><i></i></div></div><div class="sub-menu"><ul><li><a class="sub-link" href="/dark/blog-classic"> Standard </a></li><li><a class="sub-link" href="/dark/blog-list"> Blog List </a></li><li><a class="sub-link" href="/dark/blog-list2"> Blog List 2 </a></li><li><a class="sub-link" href="/dark/blog-details"> Blog Details </a></li></ul></div></li><li><div class="o-hidden"><a href="/dark/page-contact3" class="link"><span class="fill-text" data-text="Contact Us"> Contact Us </span></a></div></li></ul></div></div><div class="col-lg-3"><div class="cont-info"><div class="item mb-50"><h6 class="sub-title mb-15 opacity-7">Address</h6><h5> 541 Melville Geek, <br> Palo Alto, CA 94301 </h5></div><div class="item mb-50"><h6 class="sub-title mb-15 opacity-7">Social Media</h6><ul class="rest social-text"><li class="mb-10"><a href="#0" class="hover-this"><span class="hover-anim">Facebook</span></a></li><li class="mb-10"><a href="#0" class="hover-this"><span class="hover-anim">Twitter</span></a></li><li class="mb-10"><a href="#0" class="hover-this"><span class="hover-anim">LinkedIn</span></a></li><li><a href="#0" class="hover-this"><span class="hover-anim">Instagram</span></a></li></ul></div><div class="item mb-40"><h6 class="sub-title mb-15 opacity-7">Contact Us</h6><h5><a href="#0">Hello@email.com</a></h5><h5 class="underline mt-10"><a href="#0">+1 840 841 25 69</a></h5></div></div></div></div></div></div> &gt; <!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/personal-vcard/Navbar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "intro-card section-padding",
    "data-scroll-index": "0"
  }, _attrs))}><div class="caption"><span class="mb-30 fw-200 fz-22">Hello, I&#39;m</span><h2 class="text-u ls1 mb-40"> Matthew <span class="botm d-block">Perry</span></h2><span class="mb-30 fw-200 fz-22">Industry Certified</span><h2 class="text-u ls1"> Graphic <span class="botm d-block">Designer</span></h2></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/personal-vcard/Intro.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$8 = {
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
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "my-skills section-padding bord-thin-top",
        "data-scroll-index": "1"
      }, _attrs))}><div class="sec-head mb-50"><h3>My <span class="fw-200">Skills</span></h3></div><div class="row"><div class="col-md-6"><div class="item mb-30"><div class="d-flex align-items-center mb-30"><div class="mr-30"><div class="img icon-img-40"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div><div><h6 class="fz-18">UI / UX Design</h6></div></div><div class="skill-progress"><span class="progres" data-value="95%"></span></div><span class="value">95%</span></div></div><div class="col-md-6"><div class="item mb-30"><div class="d-flex align-items-center mb-30"><div class="mr-30"><div class="img icon-img-40"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div><h6 class="fz-18">Development</h6></div></div><div class="skill-progress"><span class="progres" data-value="90%"></span></div><span class="value">90%</span></div></div><div class="col-md-6"><div class="item sm-mb30"><div class="d-flex align-items-center mb-30"><div class="mr-30"><div class="img icon-img-40"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></div></div><div><h6 class="fz-18">Graphic Design</h6></div></div><div class="skill-progress"><span class="progres" data-value="85%"></span></div><span class="value">85%</span></div></div><div class="col-md-6"><div class="item"><div class="d-flex align-items-center mb-30"><div class="mr-30"><div class="img icon-img-40"><img${ssrRenderAttr("src", _imports_3)} alt=""></div></div><div><h6 class="fz-18">WordPress</h6></div></div><div class="skill-progress"><span class="progres" data-value="78%"></span></div><span class="value">78%</span></div></div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/personal-vcard/Skills.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "resume section-padding bord-thin-top",
    "data-scroll-index": "2"
  }, _attrs))}><div class="sec-head mb-50"><h3>Working <span class="fw-200">Experience</span></h3></div><div><div class="resume-clumn"><div class="items mb-40"><h6 class="date fz-14">2018 - Present</h6><h5> Art Director <span class="fw-200 ml-15">[ at UiCamp ]</span></h5><div class="row"><div class="col-md-10"><p class="mt-15 fz-14"> Crafting captivating digital experiences that put users at the heart of the design. Elevate your product to increased. </p></div></div></div><div class="items mb-40"><h6 class="date fz-14">2015 - 2017</h6><h5> Front-end Developer <span class="fw-200 ml-15">[ at Envato Market ]</span></h5><div class="row"><div class="col-md-10"><p class="mt-15 fz-14"> Crafting captivating digital experiences that put users at the heart of the design. Elevate your product to increased. </p></div></div></div><div class="items"><h6 class="date fz-14">2010 - 2014</h6><h5> Bachelor&#39;s Degree in Design <span class="fw-200 ml-15">[ US RMIT University ]</span></h5><div class="row"><div class="col-md-10"><p class="mt-15 fz-14"> Crafting captivating digital experiences that put users at the heart of the design. Elevate your product to increased. </p></div></div></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/personal-vcard/Resume.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Resume = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$6 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "services section-padding bord-thin-top",
        "data-scroll-index": "3"
      }, _attrs))}><div class="sec-head mb-50"><h3>My <span class="fw-200">Specializations</span></h3></div><div class="row sm-marg"><!--[-->`);
      ssrRenderList(unref(data), (item, i) => {
        _push(`<div class="col-md-6"><div class="item-box2 mb-10"><div><div class="icon mb-40"><img${ssrRenderAttr("src", item.img)} alt=""></div></div><div><h5 class="mb-15">${ssrInterpolate(item.title)}</h5><p>${ssrInterpolate(item.desc)}</p></div><a${ssrRenderAttr("href", item.link)} class="rmore"><div class="arrow"><img${ssrRenderAttr("src", _imports_1$1)} alt="" class="icon-img-20"></div><div class="shap-left-top"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></a></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/personal-vcard/Services.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_2 = "" + publicAssetsURL("dark/assets/imgs/works/1/h2.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "work-minimal section-padding bord-thin-top",
    "data-scroll-index": "4"
  }, _attrs))}><div class="sec-head mb-50"><h3>My <span class="fw-200">Portfolio</span></h3></div><div class="gallery row sm-marg"><div class="items col-md-6"><div class="item mb-10"><div class="img"><img${ssrRenderAttr("src", _imports_1$2)} alt=""><div class="cont"><h5><a href="/dark/project1">Nice guy with a smile</a></h5><p><a href="/dark/portfolio-gallery">Graphic Design</a></p></div></div></div></div><div class="items col-md-6"><div class="item mb-10"><div class="img"><img${ssrRenderAttr("src", _imports_2$2)} alt=""><div class="cont"><h5><a href="/dark/project1">Nice guy with a smile</a></h5><p><a href="/dark/portfolio-gallery">Graphic Design</a></p></div></div></div></div><div class="items col-12"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""><div class="cont d-flex align-items-center"><div><h5><a href="/dark/project1">Nice guy with a smile</a></h5></div><div class="ml-auto"><p><a href="/dark/portfolio-gallery">Graphic Design</a></p></div></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/personal-vcard/Portfolio.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Portfolio = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "testimonials section-padding bord-thin-top",
        "data-scroll-index": "5"
      }, _attrs))}><div class="sec-head mb-50"><h3>The <span class="fw-200">Testimonials</span></h3></div><div class="testim-swiper" data-carousel="swiper" data-loop="true">`);
      _push(ssrRenderComponent(unref(Swiper2), {
        id: "content-carousel-container-unq-testim",
        class: "swiper-container",
        "data-swiper": "container",
        loop: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data$1).slice(0, 2), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item"${_scopeId2}><div class="content"${_scopeId2}><div class="text"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="256.721" height="208.227" viewBox="0 0 256.721 208.227" class="qout-svg"${_scopeId2}><path data-name="Path" d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#fff" stroke-width="1" opacity="0.322"${_scopeId2}></path></svg><p class="fz-22"${_scopeId2}>${ssrInterpolate(item.desc)}</p></div><div class="info mt-40"${_scopeId2}><h5${_scopeId2}>${ssrInterpolate(item.name)}</h5><span class="sub-title fw-200"${_scopeId2}>${ssrInterpolate(item.subName)}</span></div></div></div>`);
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
                            createVNode("p", { class: "fz-22" }, toDisplayString(item.desc), 1)
                          ]),
                          createVNode("div", { class: "info mt-40" }, [
                            createVNode("h5", null, toDisplayString(item.name), 1),
                            createVNode("span", { class: "sub-title fw-200" }, toDisplayString(item.subName), 1)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data$1).slice(0, 2), (item, i) => {
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
                          createVNode("p", { class: "fz-22" }, toDisplayString(item.desc), 1)
                        ]),
                        createVNode("div", { class: "info mt-40" }, [
                          createVNode("h5", null, toDisplayString(item.name), 1),
                          createVNode("span", { class: "sub-title fw-200" }, toDisplayString(item.subName), 1)
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
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/personal-vcard/Testimonials.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "contact section-padding bord-thin-top",
    "data-scroll-index": "6"
  }, _attrs))}><div class="sec-head mb-50"><h3>Get <span class="fw-200">In Touch</span></h3></div><div class="contact-form"><form id="contact-form" method="post" action="contact.php"><div class="messages"></div><div class="controls row"><div class="col-lg-6"><div class="form-group mb-30"><input id="form_name" type="text" name="name" placeholder="Name" required></div></div><div class="col-lg-6"><div class="form-group mb-30"><input id="form_email" type="email" name="email" placeholder="Email" required></div></div><div class="col-12"><div class="form-group mb-30"><input id="form_subject" type="text" name="subject" placeholder="Subject"></div></div><div class="col-12"><div class="form-group"><textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea></div><div class="mt-30"><button type="submit" class="butn butn-md butn-bord full-width text-center radius-10"><span class="fz-18 text-u ls1">Let&#39;s Talk</span></button></div></div></div></form></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/personal-vcard/Contact.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "min-footer sub-bg pt-30 pb-30" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4 col-md-6 md-mb15"><div class="logo icon-img-100"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-lg-4 order-md-3"><div class="text-center"><p class="fz-14"> \xA9 2024 InFolio is Proudly Powered by <span class="underline main-color"><a href="https://themeforest.net/user/UiCamp" target="_blank"> UiCamp </a></span></p></div></div><div class="col-lg-4 col-md-6 order-md-2 md-mb15"><div class="links d-flex justify-content-end"><ul class="rest d-flex align-items-center"><li><a href="/dark/page-FAQS">FAQ</a></li><li class="ml-30"><a href="/dark/page-about3">Careers</a></li><li class="ml-30"><a href="/dark/page-contact3">Contact Us</a></li></ul></div></div></div></div></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/personal-vcard/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "VcardPage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "smooth-wrapper",
        class: "bg-img vcard-bg",
        "data-background": "/dark/assets/imgs/intro/vcard0.png"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$a), null, null, _parent));
      _push(`<div id="smooth-content"><main><section class="container"><div class="row justify-content-end"><div class="col-lg-6 bord-thin-top">`);
      _push(ssrRenderComponent(unref(Intro), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent));
      _push(ssrRenderComponent(unref(Resume), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(Portfolio), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(Contact), null, null, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/personal-vcard/VcardPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "home-personal-vcard",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/dark/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/dark/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/dark/assets/css/style.css" }
      ],
      script: [{ src: "/dark/assets/js/smoother-script.js", defer: true }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/old/dark/home-personal-vcard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-personal-vcard-D2hFNRLs.mjs.map
