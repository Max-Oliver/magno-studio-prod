import { ref, watch, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { S as Swiper, a as SwiperSlide } from "./swiper-slide-Dn_WuJYw.js";
import "ssr-window";
import { T as Thumb, K as Keyboard } from "./thumbs-CKJP-nvG.js";
import { M as Mousewheel } from "./mousewheel-CagCHlsm.js";
import { N as Navigation } from "./navigation-nPzHIgEI.js";
import { P as Pagination } from "./pagination-AbguOEcP.js";
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const galleryImg = ref(null);
    const galleryText = ref(null);
    const swiperGalleryTextOptions = {
      modules: [Mousewheel, Thumb],
      spaceBetween: 100,
      centeredSlides: true,
      onSwiper(swiper) {
        galleryText.value = swiper;
      },
      slidesPerView: 2,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      loopedSlides: 4,
      mousewheel: true,
      speed: 1500,
      breakpoints: {
        0: {
          spaceBetween: 10,
          slidesPerView: 1,
          centeredSlides: false
        },
        640: {
          spaceBetween: 30,
          slidesPerView: 1,
          centeredSlides: false
        },
        768: {
          spaceBetween: 50,
          slidesPerView: 1,
          centeredSlides: false
        },
        1024: {
          spaceBetween: 100,
          slidesPerView: 2,
          centeredSlides: true
        }
      },
      thumbs: {
        swiper: galleryImg.value
      }
    };
    const swiperGalleryImageOptions = {
      modules: [Navigation, Keyboard, Mousewheel, Pagination, Thumb],
      onSwiper(swiper) {
        galleryImg.value = swiper;
      },
      spaceBetween: 0,
      centeredSlides: true,
      loopedSlides: 4,
      mousewheel: true,
      speed: 1500,
      navigation: {
        nextEl: ".half-slider .swiper-controls .swiper-button-next",
        prevEl: ".half-slider .swiper-controls .swiper-button-prev"
      },
      pagination: {
        el: ".half-slider .swiper-pagination",
        clickable: true,
        renderBullet: function(_, className) {
          return '<span class="' + className + '"><svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16"><circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"stroke-opacity="1" stroke-width="1px"></circle><circle cx="8" cy="8" r="3" fill="#FFF"></circle></svg></span>';
        }
      },
      keyboard: {
        enabled: true
      },
      thumbs: {
        swiper: galleryText.value
      }
    };
    watch([galleryImg, galleryText], () => {
      if (galleryImg.value && galleryText.value) {
        galleryImg.value.on("slideChangeTransitionStart", function() {
          galleryText.value.slideTo(galleryImg.value.activeIndex);
        });
        galleryText.value.on("transitionStart", function() {
          galleryImg.value.slideTo(galleryText.value.activeIndex);
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header half-slider" }, _attrs))}><div class="gallery-img"><div class="swiper-container">`);
      _push(ssrRenderComponent(unref(Swiper), swiperGalleryImageOptions, {
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
                  _push3(`<div class="bg-img" data-background="/dark/assets/imgs/works/full/4.jpg" data-overlay-dark="3"${_scopeId2}><a href="/dark/project4"${_scopeId2}></a></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img",
                      "data-background": "/dark/assets/imgs/works/full/4.jpg",
                      "data-overlay-dark": "3"
                    }, [
                      createVNode("a", { href: "/dark/project4" })
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
                    "data-background": "/dark/assets/imgs/works/full/4.jpg",
                    "data-overlay-dark": "3"
                  }, [
                    createVNode("a", { href: "/dark/project4" })
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
      _push(ssrRenderComponent(unref(Swiper), mergeProps(swiperGalleryTextOptions, { class: "swiper-container swiper-container-initialized swiper-container-horizontal" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text cursor-pointer"${_scopeId2}><h6${_scopeId2}><span${_scopeId2}> Digital Design</span></h6><h4 class="f-bold"${_scopeId2}>Avocado Cutter</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text cursor-pointer" }, [
                      createVNode("h6", null, [
                        createVNode("span", null, " Digital Design")
                      ]),
                      createVNode("h4", { class: "f-bold" }, "Avocado Cutter")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text cursor-pointer"${_scopeId2}><h6${_scopeId2}><span${_scopeId2}> Digital Design</span></h6><h4 class="f-bold"${_scopeId2}>Avocado Cutter</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text cursor-pointer" }, [
                      createVNode("h6", null, [
                        createVNode("span", null, " Digital Design")
                      ]),
                      createVNode("h4", { class: "f-bold" }, "Avocado Cutter")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text cursor-pointer"${_scopeId2}><h6${_scopeId2}><span${_scopeId2}> Digital Design</span></h6><h4 class="f-bold"${_scopeId2}>Avocado Cutter</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text cursor-pointer" }, [
                      createVNode("h6", null, [
                        createVNode("span", null, " Digital Design")
                      ]),
                      createVNode("h4", { class: "f-bold" }, "Avocado Cutter")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text cursor-pointer"${_scopeId2}><h6${_scopeId2}><span${_scopeId2}> Digital Design</span></h6><h4 class="f-bold"${_scopeId2}>Avocado Cutter</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text cursor-pointer" }, [
                      createVNode("h6", null, [
                        createVNode("span", null, " Digital Design")
                      ]),
                      createVNode("h4", { class: "f-bold" }, "Avocado Cutter")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text cursor-pointer"${_scopeId2}><h6${_scopeId2}><span${_scopeId2}> Digital Design</span></h6><h4 class="f-bold"${_scopeId2}>Avocado Cutter</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text cursor-pointer" }, [
                      createVNode("h6", null, [
                        createVNode("span", null, " Digital Design")
                      ]),
                      createVNode("h4", { class: "f-bold" }, "Avocado Cutter")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text cursor-pointer"${_scopeId2}><h6${_scopeId2}><span${_scopeId2}> Product Development</span></h6><h4 class="f-bold"${_scopeId2}>Beru AI</h4></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text cursor-pointer" }, [
                      createVNode("h6", null, [
                        createVNode("span", null, " Product Development")
                      ]),
                      createVNode("h4", { class: "f-bold" }, "Beru AI")
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
                  createVNode("div", { class: "text cursor-pointer" }, [
                    createVNode("h6", null, [
                      createVNode("span", null, " Digital Design")
                    ]),
                    createVNode("h4", { class: "f-bold" }, "Avocado Cutter")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text cursor-pointer" }, [
                    createVNode("h6", null, [
                      createVNode("span", null, " Digital Design")
                    ]),
                    createVNode("h4", { class: "f-bold" }, "Avocado Cutter")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text cursor-pointer" }, [
                    createVNode("h6", null, [
                      createVNode("span", null, " Digital Design")
                    ]),
                    createVNode("h4", { class: "f-bold" }, "Avocado Cutter")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text cursor-pointer" }, [
                    createVNode("h6", null, [
                      createVNode("span", null, " Digital Design")
                    ]),
                    createVNode("h4", { class: "f-bold" }, "Avocado Cutter")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text cursor-pointer" }, [
                    createVNode("h6", null, [
                      createVNode("span", null, " Digital Design")
                    ]),
                    createVNode("h4", { class: "f-bold" }, "Avocado Cutter")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text cursor-pointer" }, [
                    createVNode("h6", null, [
                      createVNode("span", null, " Product Development")
                    ]),
                    createVNode("h4", { class: "f-bold" }, "Beru AI")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="swiper-controls"><div class="swiper-button-next swiper-nav-ctrl cursor-pointer"><div><span>Next Slide</span></div><div><i class="fas fa-chevron-right"></i></div></div><div class="swiper-button-prev swiper-nav-ctrl cursor-pointer"><div><i class="fas fa-chevron-left"></i></div><div><span>Prev Slide</span></div></div></div><div class="swiper-pagination"></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/showcase-half-slider/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Header-BcwWVYEG.js.map
