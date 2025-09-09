import { u as useHead } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines } from './loader-jCTjqXsl.mjs';
import { _ as _sfc_main$3 } from './Navbar-s8ZtskbF.mjs';
import { S as Swiper2, a as SwiperSlide } from './swiper-slide-Dn_WuJYw.mjs';
import { M as Mousewheel } from './mousewheel-CagCHlsm.mjs';
import { N as Navigation } from './navigation-nPzHIgEI.mjs';
import { P as Pagination } from './pagination-AbguOEcP.mjs';
import { P as Parallax } from './parallax-BKGKvm66.mjs';
import { A as Autoplay } from './autoplay-DSIcKA1j.mjs';
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

const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation, Autoplay, Parallax, Pagination, Mousewheel],
      speed: 1500,
      autoplay: {
        delay: 5e3
      },
      mousewheel: true,
      parallax: true,
      loop: true,
      onSwiper(swiper) {
        for (let i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].querySelector(".bg-img").setAttribute("data-swiper-parallax", 0.75 * swiper.width);
        }
      },
      onResize(swiper) {
        swiper.update();
      },
      pagination: {
        el: ".full-showcase .parallax-slider .swiper-pagination",
        clickable: true,
        renderBullet(_, className) {
          return '<span class="' + className + '"><svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16"><circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"stroke-opacity="1" stroke-width="1px"></circle><circle cx="8" cy="8" r="3" fill="#FFF"></circle></svg></span>';
        }
      },
      navigation: {
        nextEl: ".full-showcase .parallax-slider .swiper-button-next",
        prevEl: ".full-showcase .parallax-slider .swiper-button-prev"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header full-showcase" }, _attrs))}><div class="swiper-container parallax-slider">`);
      _push(ssrRenderComponent(unref(Swiper2), swiperOptions, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img valign" data-background="assets/imgs/works/full/1.jpg" data-overlay-dark="3"${_scopeId2}><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-lg-11 offset-lg-1"${_scopeId2}><div class="caption"${_scopeId2}><h6 class="sub-title mb-30" data-swiper-parallax="-1000"${_scopeId2}> \xA9 2023 <br${_scopeId2}> Branding </h6><h1${_scopeId2}><a href="/project1"${_scopeId2}><span data-swiper-parallax="-2000"${_scopeId2}>Retouch Photo</span></a></h1></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img valign",
                      "data-background": "assets/imgs/works/full/1.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                            createVNode("div", { class: "caption" }, [
                              createVNode("h6", {
                                class: "sub-title mb-30",
                                "data-swiper-parallax": "-1000"
                              }, [
                                createTextVNode(" \xA9 2023 "),
                                createVNode("br"),
                                createTextVNode(" Branding ")
                              ]),
                              createVNode("h1", null, [
                                createVNode("a", { href: "/project1" }, [
                                  createVNode("span", { "data-swiper-parallax": "-2000" }, "Retouch Photo")
                                ])
                              ])
                            ])
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
                  _push3(`<div class="bg-img valign" data-background="assets/imgs/works/full/2.jpg" data-overlay-dark="3"${_scopeId2}><div class="container"${_scopeId2}><div class="row"${_scopeId2}><div class="col-lg-11 offset-lg-1"${_scopeId2}><div class="caption"${_scopeId2}><h6 class="sub-title mb-30" data-swiper-parallax="-1000"${_scopeId2}> \xA9 2023 <br${_scopeId2}> Branding </h6><h1${_scopeId2}><a href="/project6"${_scopeId2}><span data-swiper-parallax="-2000"${_scopeId2}>Earthmade</span><br${_scopeId2}><span data-swiper-parallax="-3000"${_scopeId2}>Aroma box</span></a></h1></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img valign",
                      "data-background": "assets/imgs/works/full/2.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                            createVNode("div", { class: "caption" }, [
                              createVNode("h6", {
                                class: "sub-title mb-30",
                                "data-swiper-parallax": "-1000"
                              }, [
                                createTextVNode(" \xA9 2023 "),
                                createVNode("br"),
                                createTextVNode(" Branding ")
                              ]),
                              createVNode("h1", null, [
                                createVNode("a", { href: "/project6" }, [
                                  createVNode("span", { "data-swiper-parallax": "-2000" }, "Earthmade"),
                                  createVNode("br"),
                                  createVNode("span", { "data-swiper-parallax": "-3000" }, "Aroma box")
                                ])
                              ])
                            ])
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
                  createVNode("div", {
                    class: "bg-img valign",
                    "data-background": "assets/imgs/works/full/1.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                          createVNode("div", { class: "caption" }, [
                            createVNode("h6", {
                              class: "sub-title mb-30",
                              "data-swiper-parallax": "-1000"
                            }, [
                              createTextVNode(" \xA9 2023 "),
                              createVNode("br"),
                              createTextVNode(" Branding ")
                            ]),
                            createVNode("h1", null, [
                              createVNode("a", { href: "/project1" }, [
                                createVNode("span", { "data-swiper-parallax": "-2000" }, "Retouch Photo")
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bg-img valign",
                    "data-background": "assets/imgs/works/full/2.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-11 offset-lg-1" }, [
                          createVNode("div", { class: "caption" }, [
                            createVNode("h6", {
                              class: "sub-title mb-30",
                              "data-swiper-parallax": "-1000"
                            }, [
                              createTextVNode(" \xA9 2023 "),
                              createVNode("br"),
                              createTextVNode(" Branding ")
                            ]),
                            createVNode("h1", null, [
                              createVNode("a", { href: "/project6" }, [
                                createVNode("span", { "data-swiper-parallax": "-2000" }, "Earthmade"),
                                createVNode("br"),
                                createVNode("span", { "data-swiper-parallax": "-3000" }, "Aroma box")
                              ])
                            ])
                          ])
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
      _push(`<div class="swiper-controls"><div class="swiper-button-next swiper-nav-ctrl cursor-pointer"><div><span>Next Slide</span></div><div><i class="fas fa-chevron-right"></i></div></div><div class="swiper-button-prev swiper-nav-ctrl cursor-pointer"><div><i class="fas fa-chevron-left"></i></div><div><span>Prev Slide</span></div></div></div><div class="swiper-pagination"></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/showcase-fullscreen/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "showcase-fullscreen",
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
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/showcase-fullscreen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=showcase-fullscreen-DVRCBXlJ.mjs.map
