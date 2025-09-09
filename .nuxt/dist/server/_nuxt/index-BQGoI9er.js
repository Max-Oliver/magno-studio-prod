import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { onUnmounted, mergeProps, useSSRContext, unref, withCtx, createVNode, openBlock, createBlock } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0$6, a as _sfc_main$b, b as _sfc_main$c, c as _sfc_main$d, L as Lines } from "./loader-jCTjqXsl.js";
import { S as Swiper, a as SwiperSlide } from "./swiper-slide-Dn_WuJYw.js";
import "ssr-window";
import { P as Pagination } from "./pagination-AbguOEcP.js";
import { N as Navigation } from "./navigation-nPzHIgEI.js";
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
  __name: "NavTop",
  __ssrInlineRender: true,
  setup(__props) {
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleScroll);
    });
    function handleScroll() {
      const bodyScroll = (void 0).scrollY;
      const navbar = (void 0).querySelector(".navbar");
      if (bodyScroll > 300)
        navbar.classList.add("nav-scroll");
      else
        navbar.classList.remove("nav-scroll");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg bord blur pt-15 pb-15" }, _attrs))}><div class="container d-block"><div class="row align-items-center"><div class="col-lg-4 col-6 md-hide"><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="0"> Demos </a></li><li class="nav-item"><a class="nav-link" href="#0" data-scroll-nav="1"> Pages </a></li><li class="nav-item"><a class="nav-link" href="https://uicamp.smartinnovates.net/docs/nuxtjs/"> Documentation </a></li></ul></div></div><div class="col-lg-4 col-6 text-center"><a class="logo icon-img-120" href="#"><img${ssrRenderAttr("src", _imports_0$6)} alt="logo"></a></div><div class="col-lg-4 col-6 d-flex"><div class="ml-auto"><a href="#0" class="butn butn-bord butn-md radius-30 fz-14"><span><i class="ti-shopping-cart mr-10"></i> Purchase Now </span></a></div></div></div></div></nav>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/landing-preview/NavTop.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const demos = [
  {
    theme: "dark",
    title: "Home Main",
    link: "/dark/home-main",
    image: "/landing-preview/img/demos/01.jpg"
  },
  {
    theme: "light",
    title: "Home Main (Light)",
    link: "/light/home-main",
    image: "/landing-preview/img/demos/1.jpg"
  },
  {
    theme: "dark",
    title: "Modern Startup",
    link: "/dark/home-startup-onepage",
    image: "/landing-preview/img/demos/02.jpg"
  },
  {
    theme: "light",
    title: "Modern Startup (Light)",
    link: "/light/home-startup-onepage",
    image: "/landing-preview/img/demos/2.jpg"
  },
  {
    theme: "dark",
    title: "Creative Agency",
    link: "/dark/home-creative-agency",
    image: "/landing-preview/img/demos/03.jpg"
  },
  {
    theme: "light",
    title: "Creative Agency (Light)",
    link: "/light/home-creative-agency",
    image: "/landing-preview/img/demos/3.jpg"
  },
  {
    theme: "dark",
    title: "Modern Agency",
    link: "/dark/home-modern-agency",
    image: "/landing-preview/img/demos/04.jpg"
  },
  {
    theme: "light",
    title: "Modern Agency (Light)",
    link: "/light/home-modern-agency",
    image: "/landing-preview/img/demos/4.jpg"
  },
  {
    theme: "dark",
    title: "Creative Portfolio",
    link: "/dark/home-creative-portfolio",
    image: "/landing-preview/img/demos/05.jpg"
  },
  {
    theme: "light",
    title: "Creative Portfolio (Light)",
    link: "/light/home-creative-portfolio",
    image: "/landing-preview/img/demos/5.jpg"
  },
  {
    theme: "dark",
    title: "Digital Agency",
    link: "/dark/home-digital-agency",
    image: "/landing-preview/img/demos/06.jpg"
  },
  {
    theme: "light",
    title: "Digital Agency (Light)",
    link: "/light/home-digital-agency",
    image: "/landing-preview/img/demos/6.jpg"
  },
  {
    theme: "dark",
    title: "Freelancer",
    link: "/dark/home-freelancer",
    image: "/landing-preview/img/demos/07.jpg"
  },
  {
    theme: "light",
    title: "Freelancer (Light)",
    link: "/light/home-freelancer",
    image: "/landing-preview/img/demos/7.jpg"
  },
  {
    theme: "dark",
    title: "Personal vCard",
    link: "/dark/home-personal-vcard",
    image: "/landing-preview/img/demos/08.jpg"
  },
  {
    theme: "light",
    title: "Personal vCard (Light)",
    link: "/light/home-personal-vcard",
    image: "/landing-preview/img/demos/8.jpg"
  },
  {
    theme: "dark",
    title: "Minimal Portfolio",
    link: "/dark/home-minimal-portfolio",
    image: "/landing-preview/img/demos/09.jpg"
  },
  {
    theme: "light",
    title: "Minimal Portfolio (Light)",
    link: "/light/home-minimal-portfolio",
    image: "/landing-preview/img/demos/9.jpg"
  },
  {
    theme: "dark",
    title: "Asymmetric Portfolio",
    link: "/dark/home-asymmetric-portfolio",
    image: "/landing-preview/img/demos/010.jpg"
  },
  {
    theme: "light",
    title: "Asymmetric Portfolio (Light)",
    link: "/light/home-asymmetric-portfolio",
    image: "/landing-preview/img/demos/10.jpg"
  }
];
const _sfc_main$9 = {
  __name: "GridDemos",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "demos section-padding pt-80 sub-bg2",
        "data-scroll-index": "0"
      }, _attrs))}><div class="container-xxl"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25"> Create a Professional Website! </h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="d-rotate wow md-mb15"><span class="rotate-text"><span class="spc-font">20+ pre-made </span><span> Home Pages.</span></span></h2><div class="ml-auto"><div class="filtering"><div class="filter"><span data-filter="*" class="active">All</span><span data-filter=".dark">Dark</span><span data-filter=".light">Light</span></div></div></div></div></div><div class="gallery row md-marg"><!--[-->`);
      ssrRenderList(unref(demos), (demo, index) => {
        _push(`<div class="${ssrRenderClass(`${demo.theme} col-lg-3 col-md-6 items`)}"><div class="item text-center"><a${ssrRenderAttr("href", demo.link)} target="_blank"><div class="img"><img${ssrRenderAttr("src", demo.image)}${ssrRenderAttr("alt", demo.title)}></div><h6 class="mt-15">${ssrInterpolate(demo.title)}</h6></a></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/landing-preview/GridDemos.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _imports_0$5 = "" + __publicAssetsURL("landing-preview/img/header/s1.jpg");
const _imports_1$3 = "" + __publicAssetsURL("landing-preview/img/header/s10.jpg");
const _imports_2$3 = "" + __publicAssetsURL("landing-preview/img/header/s3.jpg");
const _imports_3$3 = "" + __publicAssetsURL("landing-preview/img/header/s4.jpg");
const _imports_4$3 = "" + __publicAssetsURL("landing-preview/img/header/s5.jpg");
const _imports_5$3 = "" + __publicAssetsURL("landing-preview/img/header/s6.jpg");
const _imports_6$2 = "" + __publicAssetsURL("landing-preview/img/header/s7.jpg");
const _imports_7$2 = "" + __publicAssetsURL("landing-preview/img/header/s8.jpg");
const _imports_8$1 = "" + __publicAssetsURL("landing-preview/img/header/s9.jpg");
const _imports_9$1 = "" + __publicAssetsURL("landing-preview/img/header/s2.jpg");
const _sfc_main$8 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header land-header sub-bg2" }, _attrs))}><div class="container ontop"><div class="caption text-center"><h1> Creative <span class="spc-font">portfolio</span><span class="spc-font"> &amp; agency</span> Nuxtjs template </h1><h6 class="sub-title mt-15">Create a Professional Website Today!</h6></div></div><div class="imgs"><div class="curvtop sub-bg2"></div><div class="curvbotm sub-bg2"></div><div class="main-marq o-hidden mt-100"><div class="slide-har st1"><div class="box"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_0$5)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_1$3)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_2$3)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_3$3)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_4$3)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_5$3)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_6$2)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_7$2)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_8$1)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_9$1)} alt=""></div></div></div><div class="box"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_0$5)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_1$3)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_2$3)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_3$3)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_4$3)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_5$3)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_6$2)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_7$2)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_8$1)} alt=""></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_9$1)} alt=""></div></div></div></div></div></div></header>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/landing-preview/Header.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$4 = "" + __publicAssetsURL("landing-preview/img/resp.png");
const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "respo section-padding pt-40" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6"><div class="img md-mb50"><img${ssrRenderAttr("src", _imports_0$4)} alt=""></div></div><div class="col-lg-5 offset-lg-1 valign"><div class="cont"><h6 class="sub-title mb-15 main-color">Looks Amazing</h6><h2 class="mb-30"> Fully <span class="spc-font">responsive</span> <br><span class="spc-font"> design</span> for all devices </h2><p> InFolio automatically detects the screen size and adjust the content accordingly to provide fully responsive and optimised sites. </p><a href="#0" class="go-more mt-50"><span class="text main-color">Explore More</span><span class="icon ti-arrow-top-right"></span></a></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/landing-preview/Amazing.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Amazing = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$6 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="footer-container section-padding bg-img" data-background="/landing-preview/img/foter.jpg" data-overlay-dark="9"><div class="container ontop"><div class="row justify-content-center"><div class="col-lg-9"><div class="text-center"><span class="butn butn-md butn-bord-thin radius-30 mb-30"><span class="text">Hurry up!</span></span><h2 class="fz-70"> Get <span class="spc-font">InFolio</span> and Create a <span class="spc-font">Professional</span> Website Today! </h2><a href="#0" class="butn butn-bg butn-md radius-30 main-colorbg mt-30"><span><i class="ti-shopping-cart mr-10"></i> Purchase Now</span></a></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/landing-preview/Footer.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0$3 = "" + __publicAssetsURL("landing-preview/img/pages/1.jpg");
const _imports_1$2 = "" + __publicAssetsURL("landing-preview/img/pages/2.jpg");
const _imports_2$2 = "" + __publicAssetsURL("landing-preview/img/pages/3.jpg");
const _imports_3$2 = "" + __publicAssetsURL("landing-preview/img/pages/4.jpg");
const _imports_4$2 = "" + __publicAssetsURL("landing-preview/img/pages/5.jpg");
const _imports_5$2 = "" + __publicAssetsURL("landing-preview/img/pages/6.jpg");
const _imports_6$1 = "" + __publicAssetsURL("landing-preview/img/pages/7.jpg");
const _imports_7$1 = "" + __publicAssetsURL("landing-preview/img/pages/8.jpg");
const _imports_8 = "" + __publicAssetsURL("landing-preview/img/pages/9.jpg");
const _imports_9 = "" + __publicAssetsURL("landing-preview/img/pages/10.jpg");
const _imports_10 = "" + __publicAssetsURL("landing-preview/img/pages/11.jpg");
const _imports_11 = "" + __publicAssetsURL("landing-preview/img/pages/12.jpg");
const _sfc_main$5 = {
  __name: "InnerPages",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Pagination],
      spaceBetween: 30,
      speed: 1e3,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: false
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          centeredSlides: false
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
          centeredSlides: false
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "pages section-padding pb-0",
        "data-scroll-index": "1"
      }, _attrs))}><div class="container"><div class="sec-head mb-80"><div class="row align-items-end"><div class="col-lg-7"><h6 class="sub-title mb-15"><span class="main-color">50+ Inner Pages</span><span class="opacity-7">(Dark &amp; Light)</span></h6><h2 class="fw-600"> Explore some of <br><span class="spc-font">creative collection</span> inner pages </h2></div><div class="col-lg-5"><div class="text pb-15"><p> Enjoy a versatile collection of ready-made pages for various purposes. Create a unique and eye-catching website easily! </p></div></div></div></div><div class="swiper3">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-clients",
        class: "swiper-container",
        "data-swiper": "container swiper3"
      }, swiperOptions, { autoPlay: "" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><a href="dark/page-about" target="_blank"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$3)} alt=""${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("a", {
                        href: "dark/page-about",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: _imports_0$3,
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
                  _push3(`<div class="item"${_scopeId2}><a href="dark/page-about2" target="_blank"${_scopeId2}><img${ssrRenderAttr("src", _imports_1$2)} alt=""${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("a", {
                        href: "dark/page-about2",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: _imports_1$2,
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
                  _push3(`<div class="item"${_scopeId2}><a href="dark/page-about3" target="_blank"${_scopeId2}><img${ssrRenderAttr("src", _imports_2$2)} alt=""${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("a", {
                        href: "dark/page-about3",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: _imports_2$2,
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
                  _push3(`<div class="item"${_scopeId2}><a href="dark/page-services" target="_blank"${_scopeId2}><img${ssrRenderAttr("src", _imports_3$2)} alt=""${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("a", {
                        href: "dark/page-services",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: _imports_3$2,
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
                  _push3(`<div class="item"${_scopeId2}><a href="dark/page-services2" target="_blank"${_scopeId2}><img${ssrRenderAttr("src", _imports_4$2)} alt=""${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("a", {
                        href: "dark/page-services2",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: _imports_4$2,
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
                  _push3(`<div class="item"${_scopeId2}><a href="dark/page-services-details" target="_blank"${_scopeId2}><img${ssrRenderAttr("src", _imports_5$2)} alt=""${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("a", {
                        href: "dark/page-services-details",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: _imports_5$2,
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
                  _push3(`<div class="item"${_scopeId2}><a href="dark/page-contact" target="_blank"${_scopeId2}><img${ssrRenderAttr("src", _imports_6$1)} alt=""${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("a", {
                        href: "dark/page-contact",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: _imports_6$1,
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
                  _push3(`<div class="item"${_scopeId2}><a href="dark/page-contact2" target="_blank"${_scopeId2}><img${ssrRenderAttr("src", _imports_7$1)} alt=""${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("a", {
                        href: "dark/page-contact2",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: _imports_7$1,
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
                  _push3(`<div class="item"${_scopeId2}><a href="dark/page-contact3" target="_blank"${_scopeId2}><img${ssrRenderAttr("src", _imports_8)} alt=""${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("a", {
                        href: "dark/page-contact3",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: _imports_8,
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
                  _push3(`<div class="item"${_scopeId2}><a href="dark/page-team" target="_blank"${_scopeId2}><img${ssrRenderAttr("src", _imports_9)} alt=""${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("a", {
                        href: "dark/page-team",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: _imports_9,
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
                  _push3(`<div class="item"${_scopeId2}><a href="dark/page-team-single" target="_blank"${_scopeId2}><img${ssrRenderAttr("src", _imports_10)} alt=""${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("a", {
                        href: "dark/page-team-single",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: _imports_10,
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
                  _push3(`<div class="item"${_scopeId2}><a href="dark/page-FAQS" target="_blank"${_scopeId2}><img${ssrRenderAttr("src", _imports_11)} alt=""${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("a", {
                        href: "dark/page-FAQS",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: _imports_11,
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
                    createVNode("a", {
                      href: "dark/page-about",
                      target: "_blank"
                    }, [
                      createVNode("img", {
                        src: _imports_0$3,
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
                    createVNode("a", {
                      href: "dark/page-about2",
                      target: "_blank"
                    }, [
                      createVNode("img", {
                        src: _imports_1$2,
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
                    createVNode("a", {
                      href: "dark/page-about3",
                      target: "_blank"
                    }, [
                      createVNode("img", {
                        src: _imports_2$2,
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
                    createVNode("a", {
                      href: "dark/page-services",
                      target: "_blank"
                    }, [
                      createVNode("img", {
                        src: _imports_3$2,
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
                    createVNode("a", {
                      href: "dark/page-services2",
                      target: "_blank"
                    }, [
                      createVNode("img", {
                        src: _imports_4$2,
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
                    createVNode("a", {
                      href: "dark/page-services-details",
                      target: "_blank"
                    }, [
                      createVNode("img", {
                        src: _imports_5$2,
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
                    createVNode("a", {
                      href: "dark/page-contact",
                      target: "_blank"
                    }, [
                      createVNode("img", {
                        src: _imports_6$1,
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
                    createVNode("a", {
                      href: "dark/page-contact2",
                      target: "_blank"
                    }, [
                      createVNode("img", {
                        src: _imports_7$1,
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
                    createVNode("a", {
                      href: "dark/page-contact3",
                      target: "_blank"
                    }, [
                      createVNode("img", {
                        src: _imports_8,
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
                    createVNode("a", {
                      href: "dark/page-team",
                      target: "_blank"
                    }, [
                      createVNode("img", {
                        src: _imports_9,
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
                    createVNode("a", {
                      href: "dark/page-team-single",
                      target: "_blank"
                    }, [
                      createVNode("img", {
                        src: _imports_10,
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
                    createVNode("a", {
                      href: "dark/page-FAQS",
                      target: "_blank"
                    }, [
                      createVNode("img", {
                        src: _imports_11,
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/landing-preview/InnerPages.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0$2 = "" + __publicAssetsURL("landing-preview/img/works/l1.png");
const _imports_1$1 = "" + __publicAssetsURL("landing-preview/img/works/l2.png");
const _imports_2$1 = "" + __publicAssetsURL("landing-preview/img/works/l3.png");
const _imports_3$1 = "" + __publicAssetsURL("landing-preview/img/works/l4.png");
const _imports_4$1 = "" + __publicAssetsURL("landing-preview/img/works/l6.png");
const _imports_5$1 = "" + __publicAssetsURL("landing-preview/img/works/l5.png");
const _imports_6 = "" + __publicAssetsURL("landing-preview/img/works/layout.png");
const _imports_7 = "" + __publicAssetsURL("landing-preview/img/works/layout1.png");
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "uniq-portfolio section-padding position-re" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5 valign"><div class="text md-mb50"><h2 class="mb-30"><span class="spc-font">All Possible </span> <br> Portfolio Layouts </h2><p> With pre-defined layouts, you can create a portfolio of articles, images, or videos and show them in an organized and visually appealing way. </p><div class="thum-work mt-30"><div class="item"><a href="/dark/portfolio-standard" target="_blank"><img${ssrRenderAttr("src", _imports_0$2)} alt=""><span class="fz-14">Standerd</span></a></div><div class="item"><a href="/dark/portfolio-masonry" target="_blank"><img${ssrRenderAttr("src", _imports_1$1)} alt=""><span class="fz-14">Masonry</span></a></div><div class="item"><a href="/dark/portfolio-metro" target="_blank"><img${ssrRenderAttr("src", _imports_2$1)} alt=""><span class="fz-14">Metro</span></a></div><div class="item"><a href="/dark/portfolio-sticky" target="_blank"><img${ssrRenderAttr("src", _imports_3$1)} alt=""><span class="fz-14">Sticky</span></a></div><div class="item"><a href="/dark/portfolio-caption-cursor" target="_blank"><img${ssrRenderAttr("src", _imports_4$1)} alt=""><span class="fz-14">Caption Cursor</span></a></div><div class="item"><a href="/dark/portfolio-outline" target="_blank"><img${ssrRenderAttr("src", _imports_5$1)} alt=""><span class="fz-14">Outline</span></a></div></div></div></div><div class="col-lg-7"><div class="imgs"><img${ssrRenderAttr("src", _imports_6)} alt=""><img${ssrRenderAttr("src", _imports_7)} alt="" class="img-abslout" data-speed="1.2" data-lag="0"></div></div></div></div><div class="line-overlay opacity-5"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/landing-preview/Porfolios.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Porfolios = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0$1 = "" + __publicAssetsURL("landing-preview/img/showcase/1.jpg");
const _imports_1 = "" + __publicAssetsURL("landing-preview/img/showcase/2.jpg");
const _imports_2 = "" + __publicAssetsURL("landing-preview/img/showcase/3.jpg");
const _imports_3 = "" + __publicAssetsURL("landing-preview/img/showcase/4.jpg");
const _imports_4 = "" + __publicAssetsURL("landing-preview/img/showcase/5.jpg");
const _imports_5 = "" + __publicAssetsURL("landing-preview/img/showcase/6.jpg");
const _sfc_main$3 = {
  __name: "StartSection",
  __ssrInlineRender: true,
  setup(__props) {
    onUnmounted(() => {
      (void 0).removeEventListener("resize", handleResize);
    });
    function handleResize() {
      if ((void 0).innerWidth < 991 && (void 0).querySelector(".thecontainer").style.maxHeight) {
        (void 0).reload();
      } else if ((void 0).innerWidth > 991 && !(void 0).querySelector(".thecontainer").style.maxHeight) {
        gsap.registerPlugin(ScrollTrigger);
        let sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".thecontainer",
            pin: true,
            scrub: 1,
            end: () => {
              var _a;
              return "+=" + ((_a = (void 0).querySelector(".thecontainer")) == null ? void 0 : _a.offsetWidth);
            }
          }
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "works showcases thecontainer ontop sub-bg" }, _attrs))}><div class="text"><h2 class="text-bg">Showcases</h2></div><div class="panel"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="text-center"><h5>Fullscreen slider</h5></div><a href="/dark/showcase-fullscreen" class="plink" target="_blank"></a></div></div><div class="panel"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="text-center"><h5>Carousel Showcase</h5></div><a href="/dark/showcase-carousel" class="plink" target="_blank"></a></div></div><div class="panel"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="text-center"><h5>Creative slider</h5></div><a href="/dark/showcase-half-slider" class="plink" target="_blank"></a></div></div><div class="panel"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="text-center"><h5>Interactive Fullscreen</h5></div><a href="/dark/showcase-interactive-full" class="plink" target="_blank"></a></div></div><div class="panel"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="text-center"><h5>Interactive Center</h5></div><a href="/dark/showcase-interactive-center" class="plink" target="_blank"></a></div></div><div class="panel"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_5)} alt=""></div><div class="text-center"><h5>Interactive Vertical</h5></div><a href="/dark/showcase-interactive-vertical" class="plink" target="_blank"></a></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/landing-preview/StartSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "" + __publicAssetsURL("landing-preview/img/envato_logo.png");
const _sfc_main$2 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation],
      speed: 600,
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-control .swiper-button-next",
        prevEl: ".swiper-arrow-control .swiper-button-prev"
      },
      breakpoints: {
        // when window width is >= 640px
        640: {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: false
        },
        // when window width is >= 768px
        768: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 50,
          centeredSlides: false
        },
        // when window width is >= 1200px
        1200: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 100,
          centeredSlides: true
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testim-crev section-padding" }, _attrs))}><div class="container"><div class="testim-swiper2 testim2" data-carousel="swiper" data-loop="true" data-space="30">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-testim",
        class: "swiper-container",
        "data-swiper": "container swiper2"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item bord-box radius-15"${_scopeId2}><div class="content"${_scopeId2}><div class="text"${_scopeId2}><span class="tag sub-title mb-30 main-color"${_scopeId2}> Design Quality </span><p class="fz-16"${_scopeId2}> I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done. </p></div><div class="info mt-40"${_scopeId2}><div class="img-curv"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></div></div><div class="ml-20"${_scopeId2}><h6${_scopeId2}>charlie4282</h6><span class="sub-title opacity-7"${_scopeId2}> Envato Client </span></div><div class="ml-auto"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="256.721" height="208.227" viewBox="0 0 256.721 208.227" class="qout-svg"${_scopeId2}><path d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#fff" stroke-width="1" opacity="0.322"${_scopeId2}></path></svg></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item bord-box radius-15" }, [
                      createVNode("div", { class: "content" }, [
                        createVNode("div", { class: "text" }, [
                          createVNode("span", { class: "tag sub-title mb-30 main-color" }, " Design Quality "),
                          createVNode("p", { class: "fz-16" }, " I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done. ")
                        ]),
                        createVNode("div", { class: "info mt-40" }, [
                          createVNode("div", { class: "img-curv" }, [
                            createVNode("div", { class: "img" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: ""
                              })
                            ])
                          ]),
                          createVNode("div", { class: "ml-20" }, [
                            createVNode("h6", null, "charlie4282"),
                            createVNode("span", { class: "sub-title opacity-7" }, " Envato Client ")
                          ]),
                          createVNode("div", { class: "ml-auto" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "256.721",
                              height: "208.227",
                              viewBox: "0 0 256.721 208.227",
                              class: "qout-svg"
                            }, [
                              createVNode("path", {
                                d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                                transform: "translate(121.55 640.568)",
                                fill: "none",
                                stroke: "#fff",
                                "stroke-width": "1",
                                opacity: "0.322"
                              })
                            ]))
                          ])
                        ])
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
                  _push3(`<div class="item bord-box radius-15"${_scopeId2}><div class="content"${_scopeId2}><div class="text"${_scopeId2}><span class="tag sub-title mb-30 main-color"${_scopeId2}> Customizability </span><p class="fz-16"${_scopeId2}> This template has great customization ability and versatile for any insudtry or business. Clean and simple layouts with numerous options to customize to your liking. </p></div><div class="info mt-40"${_scopeId2}><div class="img-curv"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></div></div><div class="ml-20"${_scopeId2}><h6${_scopeId2}>olsonwinthrop</h6><span class="sub-title opacity-7"${_scopeId2}> Envato Client </span></div><div class="ml-auto"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="256.721" height="208.227" viewBox="0 0 256.721 208.227" class="qout-svg"${_scopeId2}><path d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#fff" stroke-width="1" opacity="0.322"${_scopeId2}></path></svg></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item bord-box radius-15" }, [
                      createVNode("div", { class: "content" }, [
                        createVNode("div", { class: "text" }, [
                          createVNode("span", { class: "tag sub-title mb-30 main-color" }, " Customizability "),
                          createVNode("p", { class: "fz-16" }, " This template has great customization ability and versatile for any insudtry or business. Clean and simple layouts with numerous options to customize to your liking. ")
                        ]),
                        createVNode("div", { class: "info mt-40" }, [
                          createVNode("div", { class: "img-curv" }, [
                            createVNode("div", { class: "img" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: ""
                              })
                            ])
                          ]),
                          createVNode("div", { class: "ml-20" }, [
                            createVNode("h6", null, "olsonwinthrop"),
                            createVNode("span", { class: "sub-title opacity-7" }, " Envato Client ")
                          ]),
                          createVNode("div", { class: "ml-auto" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "256.721",
                              height: "208.227",
                              viewBox: "0 0 256.721 208.227",
                              class: "qout-svg"
                            }, [
                              createVNode("path", {
                                d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                                transform: "translate(121.55 640.568)",
                                fill: "none",
                                stroke: "#fff",
                                "stroke-width": "1",
                                opacity: "0.322"
                              })
                            ]))
                          ])
                        ])
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
                  _push3(`<div class="item bord-box radius-15"${_scopeId2}><div class="content"${_scopeId2}><div class="text"${_scopeId2}><span class="tag sub-title mb-30 main-color"${_scopeId2}> Design Quality </span><p class="fz-16"${_scopeId2}> I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done. </p></div><div class="info mt-40"${_scopeId2}><div class="img-curv"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></div></div><div class="ml-20"${_scopeId2}><h6${_scopeId2}>charlie4282</h6><span class="sub-title opacity-7"${_scopeId2}> Envato Client </span></div><div class="ml-auto"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="256.721" height="208.227" viewBox="0 0 256.721 208.227" class="qout-svg"${_scopeId2}><path d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#fff" stroke-width="1" opacity="0.322"${_scopeId2}></path></svg></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item bord-box radius-15" }, [
                      createVNode("div", { class: "content" }, [
                        createVNode("div", { class: "text" }, [
                          createVNode("span", { class: "tag sub-title mb-30 main-color" }, " Design Quality "),
                          createVNode("p", { class: "fz-16" }, " I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done. ")
                        ]),
                        createVNode("div", { class: "info mt-40" }, [
                          createVNode("div", { class: "img-curv" }, [
                            createVNode("div", { class: "img" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: ""
                              })
                            ])
                          ]),
                          createVNode("div", { class: "ml-20" }, [
                            createVNode("h6", null, "charlie4282"),
                            createVNode("span", { class: "sub-title opacity-7" }, " Envato Client ")
                          ]),
                          createVNode("div", { class: "ml-auto" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "256.721",
                              height: "208.227",
                              viewBox: "0 0 256.721 208.227",
                              class: "qout-svg"
                            }, [
                              createVNode("path", {
                                d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                                transform: "translate(121.55 640.568)",
                                fill: "none",
                                stroke: "#fff",
                                "stroke-width": "1",
                                opacity: "0.322"
                              })
                            ]))
                          ])
                        ])
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
                  _push3(`<div class="item bord-box radius-15"${_scopeId2}><div class="content"${_scopeId2}><div class="text"${_scopeId2}><span class="tag sub-title mb-30 main-color"${_scopeId2}> Customizability </span><p class="fz-16"${_scopeId2}> This template has great customization ability and versatile for any insudtry or business. Clean and simple layouts with numerous options to customize to your liking. </p></div><div class="info mt-40"${_scopeId2}><div class="img-curv"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></div></div><div class="ml-20"${_scopeId2}><h6${_scopeId2}>olsonwinthrop</h6><span class="sub-title opacity-7"${_scopeId2}> Envato Client </span></div><div class="ml-auto"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="256.721" height="208.227" viewBox="0 0 256.721 208.227" class="qout-svg"${_scopeId2}><path d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#fff" stroke-width="1" opacity="0.322"${_scopeId2}></path></svg></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item bord-box radius-15" }, [
                      createVNode("div", { class: "content" }, [
                        createVNode("div", { class: "text" }, [
                          createVNode("span", { class: "tag sub-title mb-30 main-color" }, " Customizability "),
                          createVNode("p", { class: "fz-16" }, " This template has great customization ability and versatile for any insudtry or business. Clean and simple layouts with numerous options to customize to your liking. ")
                        ]),
                        createVNode("div", { class: "info mt-40" }, [
                          createVNode("div", { class: "img-curv" }, [
                            createVNode("div", { class: "img" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: ""
                              })
                            ])
                          ]),
                          createVNode("div", { class: "ml-20" }, [
                            createVNode("h6", null, "olsonwinthrop"),
                            createVNode("span", { class: "sub-title opacity-7" }, " Envato Client ")
                          ]),
                          createVNode("div", { class: "ml-auto" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "256.721",
                              height: "208.227",
                              viewBox: "0 0 256.721 208.227",
                              class: "qout-svg"
                            }, [
                              createVNode("path", {
                                d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                                transform: "translate(121.55 640.568)",
                                fill: "none",
                                stroke: "#fff",
                                "stroke-width": "1",
                                opacity: "0.322"
                              })
                            ]))
                          ])
                        ])
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
                  createVNode("div", { class: "item bord-box radius-15" }, [
                    createVNode("div", { class: "content" }, [
                      createVNode("div", { class: "text" }, [
                        createVNode("span", { class: "tag sub-title mb-30 main-color" }, " Design Quality "),
                        createVNode("p", { class: "fz-16" }, " I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done. ")
                      ]),
                      createVNode("div", { class: "info mt-40" }, [
                        createVNode("div", { class: "img-curv" }, [
                          createVNode("div", { class: "img" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: ""
                            })
                          ])
                        ]),
                        createVNode("div", { class: "ml-20" }, [
                          createVNode("h6", null, "charlie4282"),
                          createVNode("span", { class: "sub-title opacity-7" }, " Envato Client ")
                        ]),
                        createVNode("div", { class: "ml-auto" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "256.721",
                            height: "208.227",
                            viewBox: "0 0 256.721 208.227",
                            class: "qout-svg"
                          }, [
                            createVNode("path", {
                              d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                              transform: "translate(121.55 640.568)",
                              fill: "none",
                              stroke: "#fff",
                              "stroke-width": "1",
                              opacity: "0.322"
                            })
                          ]))
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item bord-box radius-15" }, [
                    createVNode("div", { class: "content" }, [
                      createVNode("div", { class: "text" }, [
                        createVNode("span", { class: "tag sub-title mb-30 main-color" }, " Customizability "),
                        createVNode("p", { class: "fz-16" }, " This template has great customization ability and versatile for any insudtry or business. Clean and simple layouts with numerous options to customize to your liking. ")
                      ]),
                      createVNode("div", { class: "info mt-40" }, [
                        createVNode("div", { class: "img-curv" }, [
                          createVNode("div", { class: "img" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: ""
                            })
                          ])
                        ]),
                        createVNode("div", { class: "ml-20" }, [
                          createVNode("h6", null, "olsonwinthrop"),
                          createVNode("span", { class: "sub-title opacity-7" }, " Envato Client ")
                        ]),
                        createVNode("div", { class: "ml-auto" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "256.721",
                            height: "208.227",
                            viewBox: "0 0 256.721 208.227",
                            class: "qout-svg"
                          }, [
                            createVNode("path", {
                              d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                              transform: "translate(121.55 640.568)",
                              fill: "none",
                              stroke: "#fff",
                              "stroke-width": "1",
                              opacity: "0.322"
                            })
                          ]))
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item bord-box radius-15" }, [
                    createVNode("div", { class: "content" }, [
                      createVNode("div", { class: "text" }, [
                        createVNode("span", { class: "tag sub-title mb-30 main-color" }, " Design Quality "),
                        createVNode("p", { class: "fz-16" }, " I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done. ")
                      ]),
                      createVNode("div", { class: "info mt-40" }, [
                        createVNode("div", { class: "img-curv" }, [
                          createVNode("div", { class: "img" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: ""
                            })
                          ])
                        ]),
                        createVNode("div", { class: "ml-20" }, [
                          createVNode("h6", null, "charlie4282"),
                          createVNode("span", { class: "sub-title opacity-7" }, " Envato Client ")
                        ]),
                        createVNode("div", { class: "ml-auto" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "256.721",
                            height: "208.227",
                            viewBox: "0 0 256.721 208.227",
                            class: "qout-svg"
                          }, [
                            createVNode("path", {
                              d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                              transform: "translate(121.55 640.568)",
                              fill: "none",
                              stroke: "#fff",
                              "stroke-width": "1",
                              opacity: "0.322"
                            })
                          ]))
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item bord-box radius-15" }, [
                    createVNode("div", { class: "content" }, [
                      createVNode("div", { class: "text" }, [
                        createVNode("span", { class: "tag sub-title mb-30 main-color" }, " Customizability "),
                        createVNode("p", { class: "fz-16" }, " This template has great customization ability and versatile for any insudtry or business. Clean and simple layouts with numerous options to customize to your liking. ")
                      ]),
                      createVNode("div", { class: "info mt-40" }, [
                        createVNode("div", { class: "img-curv" }, [
                          createVNode("div", { class: "img" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: ""
                            })
                          ])
                        ]),
                        createVNode("div", { class: "ml-20" }, [
                          createVNode("h6", null, "olsonwinthrop"),
                          createVNode("span", { class: "sub-title opacity-7" }, " Envato Client ")
                        ]),
                        createVNode("div", { class: "ml-auto" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "256.721",
                            height: "208.227",
                            viewBox: "0 0 256.721 208.227",
                            class: "qout-svg"
                          }, [
                            createVNode("path", {
                              d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                              transform: "translate(121.55 640.568)",
                              fill: "none",
                              stroke: "#fff",
                              "stroke-width": "1",
                              opacity: "0.322"
                            })
                          ]))
                        ])
                      ])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/landing-preview/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "o-hidden" }, _attrs))}><div class="container-fluid"><div class="row"><div class="col-12"><div class="main-marq lrg opacity-4"><div class="slide-har st1 strok"><div class="box"><div class="item"><h4>Lifetime Updates</h4></div><div class="item"><h4>Free Support</h4></div><div class="item"><h4>Lifetime Updates</h4></div><div class="item"><h4>Free Support</h4></div><div class="item"><h4>Lifetime Updates</h4></div><div class="item"><h4>Free Support</h4></div><div class="item"><h4>Lifetime Updates</h4></div><div class="item"><h4>Free Support</h4></div><div class="item"><h4>Lifetime Updates</h4></div></div><div class="box"><div class="item"><h4>Lifetime Updates</h4></div><div class="item"><h4>Free Support</h4></div><div class="item"><h4>Lifetime Updates</h4></div><div class="item"><h4>Free Support</h4></div><div class="item"><h4>Lifetime Updates</h4></div><div class="item"><h4>Free Support</h4></div><div class="item"><h4>Lifetime Updates</h4></div><div class="item"><h4>Free Support</h4></div><div class="item"><h4>Lifetime Updates</h4></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/landing-preview/Updates.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Updates = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/dark/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/dark/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/dark/assets/css/style.css" },
        { rel: "stylesheet", href: "/landing-preview/css/preview-style.css" }
      ]
      // script: [{ src: '/dark/assets/js/smoother-script.js', defer: true }],
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$c), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$d), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$a), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="sub-bg">`);
      _push(ssrRenderComponent(unref(Header), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$9), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(Porfolios), null, null, _parent));
      _push(ssrRenderComponent(unref(Amazing), null, null, _parent));
      _push(ssrRenderComponent(unref(Updates), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BQGoI9er.js.map
