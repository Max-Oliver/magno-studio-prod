import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$4, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines, c as _imports_0 } from './loader-jCTjqXsl.mjs';
import { _ as _sfc_main$5 } from './Navbar-Ya8JvfXw.mjs';
import { S as Swiper2, a as SwiperSlide } from './swiper-slide-Dn_WuJYw.mjs';
import { N as Navigation } from './navigation-nPzHIgEI.mjs';
import { d as data } from './testimonials-Dq-BK1h4.mjs';
import { _ as _imports_0$1, a as _imports_1, b as _imports_2, c as _imports_3, d as _imports_4, e as _imports_5, f as _imports_6, g as _imports_7 } from './h4-cnGjy4yC.mjs';
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

const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: "clean-footer crev bg-img",
    "data-background": "/dark/assets/imgs/header/bg1.jpg",
    "data-overlay-dark": "10"
  }, _attrs))}><div class="container pb-40 section-padding ontop"><div class="cal-action pb-50 mb-80 bord-thin-bottom"><h2 class="fz-120 line-height-1 d-rotate wow"><span class="rotate-text"><a href="/dark/page-contact3"> Let\u2019s Contact <span class="ml-30 fz-70 ti-arrow-top-right"></span></a></span></h2></div><div class="row"><div class="col-lg-3"><div class="logo icon-img-100"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-lg-4"><div class="column"><div class="mb-40"><h6 class="sub-title mb-30">Address</h6><h5 class="opacity-8"> 5919 Trussville <br> Crossings Pkwy, Birmingham </h5></div><a href="#0" class="underline"><span class="fz-22 main-color">+2 456 (343) 24 45</span></a></div></div><div class="col-lg-2 offset-lg-1"><div class="column"><h6 class="sub-title mb-30">Useful Links</h6><ul class="rest fz-14"><li class="mb-15"><a href="/dark/page-about">About</a></li><li class="mb-15"><a href="/dark/page-services">Services</a></li><li class="mb-15"><a href="/dark/blog-list2">Blog</a></li><li><a href="/dark/page-contact">Contact</a></li></ul></div></div><div class="col-lg-2"><div class="column"><h6 class="sub-title mb-30">Support</h6><ul class="rest fz-14"><li class="mb-15"><a href="/dark/page-FAQS">FAQS</a></li><li class="mb-15"><a href="/dark/page-about">Term &amp; Conditions</a></li><li class="mb-15"><a href="/dark/page-about">Privacy policy</a></li><li><a href="/dark/page-about">Help</a></li></ul></div></div></div><div class="d-flex align-items-center pt-30 pb-30 mt-80 bord-thin-top"><div><ul class="rest d-flex align-items-center"><li class="hover-this cursor-pointer"><a href="#0" class="hover-anim"><i class="fab fa-facebook-f"></i></a></li><li class="hover-this cursor-pointer ml-30"><a href="#0" class="hover-anim"><i class="fab fa-dribbble"></i></a></li><li class="hover-this cursor-pointer ml-30"><a href="#0" class="hover-anim"><i class="fab fa-linkedin-in"></i></a></li><li class="hover-this cursor-pointer ml-30"><a href="#0" class="hover-anim"><i class="fab fa-instagram"></i></a></li></ul></div><div class="ml-auto"><p class="fz-14"> \xA9 2024 InFolio is Proudly Powered by <span class="underline main-color"><a href="https://themeforest.net/user/UiCamp" target="_blank"> UiCamp </a></span></p></div></div></div></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/minimal-portfolio/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="sec-head"><h6 class="sub-title main-color mb-15">Testimonials</h6><h3 class="fw-600">What People <span class="fw-200">Say?</span></h3></div></div><div class="col-lg-8 position-re"><div class="testim-swiper">`);
      _push(ssrRenderComponent(unref(Swiper2), mergeProps({
        id: "content-carousel-container-unq-testim",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data).slice(0, 2), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: "{i}" }, {
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data).slice(0, 2), (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: "{i}" }, {
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
      _push(`</div><div class="swiper-arrow-control control-abslout"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/minimal-portfolio/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-minimal section-padding pb-0" }, _attrs))}><div class="container mt-100"><div class="row"><div class="col-12"><div class="sec-head mb-80"><div class="text"><h1 class="fz-80"> Crafting digital products, <span class="opacity-7 d-block">brands &amp; experience</span></h1></div></div></div></div><div class="gallery2 row stand-marg"><div class="col-lg-6 items"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""><div class="cont d-flex align-items-center"><div><h5><a href="/dark/project1">Nice guy with a smile</a></h5></div><div class="ml-auto"><p><a href="/dark/portfolio-metro">Graphic Designing</a></p></div></div></div></div></div><div class="col-lg-3 items width2"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""><div class="cont"><h5><a href="/dark/project2">A Nice guy</a></h5><p><a href="/dark/portfolio-metro">Graphic Design</a></p></div></div></div></div><div class="col-lg-3 items width2"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""><div class="cont"><h5><a href="/dark/project3">A Nice guy</a></h5><p><a href="/dark/portfolio-metro">Graphic Design</a></p></div></div></div></div><div class="col-lg-3 items width2"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""><div class="cont"><h5><a href="/dark/project4">A Nice guy</a></h5><p><a href="/dark/portfolio-metro">Graphic Design</a></p></div></div></div></div><div class="col-lg-3 items width2"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""><div class="cont"><h5><a href="/dark/project6">A Nice guy</a></h5><p><a href="/dark/portfolio-metro">Graphic Design</a></p></div></div></div></div><div class="col-lg-6 items"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", _imports_5)} alt=""><div class="cont d-flex align-items-center"><div><h5><a href="/dark/project3">Nice guy with a smile</a></h5></div><div class="ml-auto"><p><a href="/dark/portfolio-metro">Graphic Designing</a></p></div></div></div></div></div><div class="col-lg-6 items"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", _imports_6)} alt=""><div class="cont d-flex align-items-center"><div><h5><a href="/dark/project4">Nice guy with a smile</a></h5></div><div class="ml-auto"><p><a href="/dark/portfolio-metro">Graphic Designing</a></p></div></div></div></div></div><div class="col-lg-6 items"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", _imports_7)} alt=""><div class="cont d-flex align-items-center"><div><h5><a href="/dark/project5">Nice guy with a smile</a></h5></div><div class="ml-auto"><p><a href="/dark/portfolio-metro">Graphic Designing</a></p></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/minimal-portfolio/portfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Portfolio = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "home-minimal-portfolio",
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
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(Portfolio), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`</main></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/home-minimal-portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-minimal-portfolio-CVaOscJW.mjs.map
