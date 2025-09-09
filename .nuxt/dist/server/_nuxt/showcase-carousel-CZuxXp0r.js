import { u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { a as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, L as Lines } from "./loader-jCTjqXsl.js";
import { _ as _sfc_main$5 } from "./Navbar-s8ZtskbF.js";
import { S as Swiper, a as SwiperSlide } from "./swiper-slide-Dn_WuJYw.js";
import "ssr-window";
import { M as Mousewheel } from "./mousewheel-CagCHlsm.js";
import { N as Navigation } from "./navigation-nPzHIgEI.js";
import { P as Pagination } from "./pagination-AbguOEcP.js";
import { C as Controller, E as EffectFade } from "./effect-fade-CEYgk8Ge.js";
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
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const mainSwiper = ref(null);
    const childSwiper = ref(null);
    const setMainSwiper = (swiper) => {
      mainSwiper.value = swiper;
    };
    const setChildSwiper = (swiper) => {
      childSwiper.value = swiper;
    };
    const swiperOptions = {
      modules: [Navigation, Pagination, Controller, Mousewheel],
      spaceBetween: 30,
      slidesPerView: 1,
      direction: "vertical",
      loop: true,
      loopedSlides: 4,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      mousewheel: true,
      speed: 1500
      // controller: {
      //   by: 'container',
      //   control: childSwiper,
      // },
    };
    const swiperOptionsImg = {
      modules: [Navigation, Pagination, Controller, EffectFade, Mousewheel],
      spaceBetween: 80,
      slidesPerView: 2,
      centeredSlides: true,
      loop: true,
      loopedSlides: 4,
      mousewheel: true,
      speed: 1500,
      // controller: {
      //   by: 'container',
      //   control: mainSwiper,
      // },
      navigation: {
        nextEl: ".carousel-slider .swiper-controls .swiper-button-next",
        prevEl: ".carousel-slider .swiper-controls .swiper-button-prev"
      },
      pagination: {
        el: ".carousel-slider .swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
          return '<span class="' + className + '"><svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16"><circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"stroke-opacity="1" stroke-width="1px"></circle><circle cx="8" cy="8" r="3" fill="#FFF"></circle></svg></span>';
        }
      },
      keyboard: {
        enabled: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 2
        }
      }
    };
    watch([mainSwiper, childSwiper], () => {
      if (mainSwiper.value && childSwiper.value) {
        mainSwiper.value.on("slideChangeTransitionStart", function() {
          childSwiper.value.slideTo(mainSwiper.value.activeIndex);
        });
        childSwiper.value.on("transitionStart", function() {
          mainSwiper.value.slideTo(childSwiper.value.activeIndex);
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header carousel-slider valign" }, _attrs))}><div class="full-width"><div class="gallery-img"><div class="swiper-container">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(swiperOptionsImg, { onSwiper: setChildSwiper }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img" data-background="/dark/assets/imgs/works/full/1.jpg" data-overlay-dark="3"${_scopeId2}><a href="/dark/project1"${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img",
                      "data-background": "/dark/assets/imgs/works/full/1.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("a", { href: "/dark/project1" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img" data-background="/dark/assets/imgs/works/full/2.jpg" data-overlay-dark="3"${_scopeId2}><a href="/dark/project2"${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img",
                      "data-background": "/dark/assets/imgs/works/full/2.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("a", { href: "/dark/project2" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img" data-background="/dark/assets/imgs/works/full/3.jpg" data-overlay-dark="3"${_scopeId2}><a href="/dark/project3"${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img",
                      "data-background": "/dark/assets/imgs/works/full/3.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("a", { href: "/dark/project3" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img" data-background="/dark/assets/imgs/works/full/5.jpg" data-overlay-dark="3"${_scopeId2}><a href="/dark/project5"${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img",
                      "data-background": "/dark/assets/imgs/works/full/5.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("a", { href: "/dark/project5" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img" data-background="/dark/assets/imgs/works/full/6.jpg" data-overlay-dark="3"${_scopeId2}><a href="/dark/project6"${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img",
                      "data-background": "/dark/assets/imgs/works/full/6.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("a", { href: "/dark/project6" })
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
                    class: "bg-img",
                    "data-background": "/dark/assets/imgs/works/full/1.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("a", { href: "/dark/project1" })
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bg-img",
                    "data-background": "/dark/assets/imgs/works/full/2.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("a", { href: "/dark/project2" })
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bg-img",
                    "data-background": "/dark/assets/imgs/works/full/3.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("a", { href: "/dark/project3" })
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bg-img",
                    "data-background": "/dark/assets/imgs/works/full/5.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("a", { href: "/dark/project5" })
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "bg-img",
                    "data-background": "/dark/assets/imgs/works/full/6.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("a", { href: "/dark/project6" })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="gallery-text"><div class="swiper-container">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({ onInit: setMainSwiper }, swiperOptions, { class: "swiper-container swiper-container-initialized swiper-container-vertical" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text"${_scopeId2}><h4${_scopeId2}>Avocado Cutter</h4><h6${_scopeId2}><span${_scopeId2}>Digital Design</span></h6></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text" }, [
                      createVNode("h4", null, "Avocado Cutter"),
                      createVNode("h6", null, [
                        createVNode("span", null, "Digital Design")
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
                  _push3(`<div class="text"${_scopeId2}><h4${_scopeId2}>The joy of music</h4><h6${_scopeId2}><span${_scopeId2}>Branding</span></h6></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text" }, [
                      createVNode("h4", null, "The joy of music"),
                      createVNode("h6", null, [
                        createVNode("span", null, "Branding")
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
                  _push3(`<div class="text"${_scopeId2}><h4${_scopeId2}>Bank Rebranding</h4><h6${_scopeId2}><span${_scopeId2}>Digital Design</span></h6></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text" }, [
                      createVNode("h4", null, "Bank Rebranding"),
                      createVNode("h6", null, [
                        createVNode("span", null, "Digital Design")
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
                  _push3(`<div class="text"${_scopeId2}><h4${_scopeId2}>Carved Wood</h4><h6${_scopeId2}><span${_scopeId2}>art Design</span></h6></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text" }, [
                      createVNode("h4", null, "Carved Wood"),
                      createVNode("h6", null, [
                        createVNode("span", null, "art Design")
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
                  _push3(`<div class="text"${_scopeId2}><h4${_scopeId2}>Blom Air purifier</h4><h6${_scopeId2}><span${_scopeId2}>Digital Design</span></h6></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text" }, [
                      createVNode("h4", null, "Blom Air purifier"),
                      createVNode("h6", null, [
                        createVNode("span", null, "Digital Design")
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
                  _push3(`<div class="text"${_scopeId2}><h4${_scopeId2}>Avocado Cutter</h4><h6${_scopeId2}><span${_scopeId2}>Digital Design</span></h6></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text" }, [
                      createVNode("h4", null, "Avocado Cutter"),
                      createVNode("h6", null, [
                        createVNode("span", null, "Digital Design")
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
                  createVNode("div", { class: "text" }, [
                    createVNode("h4", null, "Avocado Cutter"),
                    createVNode("h6", null, [
                      createVNode("span", null, "Digital Design")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text" }, [
                    createVNode("h4", null, "The joy of music"),
                    createVNode("h6", null, [
                      createVNode("span", null, "Branding")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text" }, [
                    createVNode("h4", null, "Bank Rebranding"),
                    createVNode("h6", null, [
                      createVNode("span", null, "Digital Design")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text" }, [
                    createVNode("h4", null, "Carved Wood"),
                    createVNode("h6", null, [
                      createVNode("span", null, "art Design")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text" }, [
                    createVNode("h4", null, "Blom Air purifier"),
                    createVNode("h6", null, [
                      createVNode("span", null, "Digital Design")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text" }, [
                    createVNode("h4", null, "Avocado Cutter"),
                    createVNode("h6", null, [
                      createVNode("span", null, "Digital Design")
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
      _push(`</div></div><div class="swiper-controls"><div class="swiper-button-next swiper-nav-ctrl cursor-pointer"><div><span>Next Slide</span></div><div><i class="fas fa-chevron-right"></i></div></div><div class="swiper-button-prev swiper-nav-ctrl cursor-pointer"><div><i class="fas fa-chevron-left"></i></div><div><span>Prev Slide</span></div></div></div><div class="swiper-pagination"></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/showcase-carousel/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "showcase-carousel",
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
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/showcase-carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=showcase-carousel-CZuxXp0r.js.map
