import { mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { S as Swiper, a as SwiperSlide } from "./swiper-slide-Dn_WuJYw.js";
import "ssr-window";
import { N as Navigation } from "./navigation-nPzHIgEI.js";
import { d as data } from "./testimonials-Dfj7txv4.js";
const _sfc_main = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-arrow-control .swiper-button-next",
        nextEl: ".swiper-arrow-control .swiper-button-prev"
      },
      spaceBetween: 30,
      loop: true
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "testimonials-crev section-padding pb-0 bg-img",
        "data-background": "/light/assets/imgs/background/2.jpg",
        "data-overlay-dark": "5"
      }, _attrs))}><div class="container"><div class="row justify-content-end"><div class="col-lg-10"><div class="sec-head mb-80"><h2 class="fw-600 fz-70"> What <br> People <span class="fw-200">Say?</span></h2></div></div></div><div class="row"><div class="col-lg-11 position-re"><div class="testim-swiper testim1">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-testim",
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
                    _push3(`<div class="item d-flex align-items-center"${_scopeId2}><div${_scopeId2}><div class="fit-img circle"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div></div><div class="content ml-100"${_scopeId2}><div class="text"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="256.721" height="208.227" viewBox="0 0 256.721 208.227" id="null" class="qout-svg"${_scopeId2}><path id="Path_76570" data-name="Path 76570" d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#fff" stroke-width="1" opacity="0.322"${_scopeId2}></path></svg><h4${_scopeId2}>${ssrInterpolate(item.desc)}</h4></div><div class="info d-flex align-items-center pt-40 mt-40 bord-thin-top"${_scopeId2}><div${_scopeId2}><h5${_scopeId2}>${ssrInterpolate(item.name)}</h5><span class="sub-title main-color"${_scopeId2}>${ssrInterpolate(item.subName)}</span></div><div class="ml-auto"${_scopeId2}><div class="rate-stars fz-14"${_scopeId2}><span class="rate main-color"${_scopeId2}><i class="fas fa-star"${_scopeId2}></i><i class="fas fa-star"${_scopeId2}></i><i class="fas fa-star"${_scopeId2}></i><i class="fas fa-star"${_scopeId2}></i><i class="fas fa-star"${_scopeId2}></i></span></div></div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item d-flex align-items-center" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "fit-img circle" }, [
                            createVNode("img", {
                              src: item.img,
                              alt: ""
                            }, null, 8, ["src"])
                          ])
                        ]),
                        createVNode("div", { class: "content ml-100" }, [
                          createVNode("div", { class: "text" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "256.721",
                              height: "208.227",
                              viewBox: "0 0 256.721 208.227",
                              id: "null",
                              class: "qout-svg"
                            }, [
                              createVNode("path", {
                                id: "Path_76570",
                                "data-name": "Path 76570",
                                d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                                transform: "translate(121.55 640.568)",
                                fill: "none",
                                stroke: "#fff",
                                "stroke-width": "1",
                                opacity: "0.322"
                              })
                            ])),
                            createVNode("h4", null, toDisplayString(item.desc), 1)
                          ]),
                          createVNode("div", { class: "info d-flex align-items-center pt-40 mt-40 bord-thin-top" }, [
                            createVNode("div", null, [
                              createVNode("h5", null, toDisplayString(item.name), 1),
                              createVNode("span", { class: "sub-title main-color" }, toDisplayString(item.subName), 1)
                            ]),
                            createVNode("div", { class: "ml-auto" }, [
                              createVNode("div", { class: "rate-stars fz-14" }, [
                                createVNode("span", { class: "rate main-color" }, [
                                  createVNode("i", { class: "fas fa-star" }),
                                  createVNode("i", { class: "fas fa-star" }),
                                  createVNode("i", { class: "fas fa-star" }),
                                  createVNode("i", { class: "fas fa-star" }),
                                  createVNode("i", { class: "fas fa-star" })
                                ])
                              ])
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (item, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), { key: i }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item d-flex align-items-center" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "fit-img circle" }, [
                          createVNode("img", {
                            src: item.img,
                            alt: ""
                          }, null, 8, ["src"])
                        ])
                      ]),
                      createVNode("div", { class: "content ml-100" }, [
                        createVNode("div", { class: "text" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "256.721",
                            height: "208.227",
                            viewBox: "0 0 256.721 208.227",
                            id: "null",
                            class: "qout-svg"
                          }, [
                            createVNode("path", {
                              id: "Path_76570",
                              "data-name": "Path 76570",
                              d: "M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z",
                              transform: "translate(121.55 640.568)",
                              fill: "none",
                              stroke: "#fff",
                              "stroke-width": "1",
                              opacity: "0.322"
                            })
                          ])),
                          createVNode("h4", null, toDisplayString(item.desc), 1)
                        ]),
                        createVNode("div", { class: "info d-flex align-items-center pt-40 mt-40 bord-thin-top" }, [
                          createVNode("div", null, [
                            createVNode("h5", null, toDisplayString(item.name), 1),
                            createVNode("span", { class: "sub-title main-color" }, toDisplayString(item.subName), 1)
                          ]),
                          createVNode("div", { class: "ml-auto" }, [
                            createVNode("div", { class: "rate-stars fz-14" }, [
                              createVNode("span", { class: "rate main-color" }, [
                                createVNode("i", { class: "fas fa-star" }),
                                createVNode("i", { class: "fas fa-star" }),
                                createVNode("i", { class: "fas fa-star" }),
                                createVNode("i", { class: "fas fa-star" }),
                                createVNode("i", { class: "fas fa-star" })
                              ])
                            ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/FAQS/Testimonials.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Testimonials-R3bg0S0F.js.map
