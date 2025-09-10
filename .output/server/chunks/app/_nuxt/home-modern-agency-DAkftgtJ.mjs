import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, onUnmounted, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$c, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines } from './loader-CCDLJnCr.mjs';
import { _ as _sfc_main$d } from './Navbar-DzEBLQao.mjs';
import { _ as _imports_0 } from './03-ChmKl91R.mjs';
import { i as isInView } from './isInView-VXyFXDVH.mjs';
import { _ as _imports_0$2, a as _imports_2$2 } from './3-hVDirBa9.mjs';
import { _ as _imports_1$3 } from './author-DIkYSGQ7.mjs';
import { _ as _imports_0$1, a as _imports_1, b as _imports_2, c as _imports_3, d as _imports_4 } from './05-Dd0T5s0G.mjs';
import { S as Swiper2, a as SwiperSlide } from './swiper-slide-Dn_WuJYw.mjs';
import { _ as _sfc_main$e } from './Footer-Bov6VySB.mjs';
import { N as Navigation } from './navigation-nPzHIgEI.mjs';
import { P as Pagination } from './pagination-AbguOEcP.mjs';
import { P as Parallax } from './parallax-BKGKvm66.mjs';
import { _ as _imports_1$1 } from './arrow-right-6v-aF8S3.mjs';
import { d as data$1 } from './services-BWFoP_gg.mjs';
import { _ as _imports_1$2, a as _imports_3$1, b as _imports_4$1 } from './2-enjK3PBR.mjs';
import { _ as _imports_2$1 } from './02-BiO2H9wf.mjs';
import { d as data$2 } from './team-CnJGwuLU.mjs';
import { d as data$3 } from './testimonials-Dfj7txv4.mjs';
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

const _sfc_main$b = {
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "about-crev section-padding position-re" }, _attrs))}><div class="container"><div class="row lg-marg"><div class="col-lg-6"><div class="left-block mt-100 md-mb50"><div class="d-flex align-items-center"><div><div class="info"><h6> Sam <br> Peterson </h6><p class="nowrap">Ceo Manager</p></div></div><div><div class="img fit-img radius-30"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div></div><div class="mz-shap"><svg height="100%" viewBox="0 0 610 547" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 546.015H211.63C211.635 546.015 211.638 546.011 211.638 546.007V546.007C211.638 546.003 211.642 545.999 211.646 545.999H592.691C601.786 545.999 609.158 538.627 609.158 529.533L609.157 251.366C609.157 242.272 601.785 234.899 592.691 234.899H401.097C392.003 234.899 384.631 227.527 384.631 218.433V112.465C384.631 103.371 377.259 95.999 368.164 95.999H214.466C205.372 95.999 198 88.6268 198 79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 282.659 176.011 290.031 166.917 290.031H116.134H116.134H16.5634C7.46936 290.031 0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 469.762 116.134 478.856V529.548Z" fill="#1d1d1d"></path></svg></div></div></div><div class="col-lg-6 valign"><div class="content full-width"><div class="sec-head mb-30"><h6 class="sub-title mb-15 main-color">Our Skills</h6><h2>The ultmiate guide to marketing success.</h2></div><div class="row justify-content-end"><div class="col-lg-11"><div class="text"><p> We shifted our talents to frontier science because we wanted our work to have tangible, human-positive impact. Also, we get front row seats to the future. </p></div><div class="mt-50"><div class="skills-box"><div class="skill-item mb-40"><h5 class="sub-title mb-15">UI / UX Design</h5><div class="skill-progress"><div class="progres" data-value="90%"></div></div></div><div class="skill-item"><h5 class="sub-title mb-15">Apps Development</h5><div class="skill-progress"><div class="progres" data-value="80%"></div></div></div></div></div></div></div></div></div></div></div><div class="line-overlay opacity-7"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></section>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-agency/About.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list-half section-padding sub-bg" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Blog</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600">Read Latest <span class="fw-200">News</span></h2><div class="ml-auto"><a href="/light/blog-list2" class="go-more"><span class="text">View all posts</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-6"><div class="item main-bg md-mb50"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1$3)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/light/blog-list">Marketing</a></div><h5><a href="/light/blog-details"> Free advertising for your online business. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div><div class="col-lg-6"><div class="item main-bg"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_2$2)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1$3)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/light/blog-list">Marketing</a><a href="/light/blog-list">Design</a></div><h5><a href="/light/blog-details"> Business meeting 2023 in San Francisco. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-agency/Blog.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$9 = {
  __name: "Brands",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      speed: 600,
      loop: true,
      breakpoints: {
        // when window width is >= 640px
        640: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: false
        },
        // when window width is >= 768px
        600: {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: false
        },
        // when window width is >= 1200px
        1200: {
          loop: true,
          slidesPerView: 5,
          spaceBetween: 40,
          centeredSlides: false
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "clients-carso2" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-11"><div class="swiper5">`);
      _push(ssrRenderComponent(unref(Swiper2), mergeProps({
        id: "content-carousel-container-unq-clients",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><a href="#0"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId2}></a></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("a", { href: "#0" }, [
                          createVNode("img", {
                            src: _imports_0$1,
                            alt: ""
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><a href="#0"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId2}></a></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("a", { href: "#0" }, [
                          createVNode("img", {
                            src: _imports_1,
                            alt: ""
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><a href="#0"${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId2}></a></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("a", { href: "#0" }, [
                          createVNode("img", {
                            src: _imports_2,
                            alt: ""
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><a href="#0"${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId2}></a></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("a", { href: "#0" }, [
                          createVNode("img", {
                            src: _imports_3,
                            alt: ""
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><a href="#0"${_scopeId2}><img${ssrRenderAttr("src", _imports_4)} alt=""${_scopeId2}></a></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("a", { href: "#0" }, [
                          createVNode("img", {
                            src: _imports_4,
                            alt: ""
                          })
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "swiper-slide" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><a href="#0"${_scopeId2}><img${ssrRenderAttr("src", _imports_4)} alt=""${_scopeId2}></a></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("a", { href: "#0" }, [
                          createVNode("img", {
                            src: _imports_4,
                            alt: ""
                          })
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
              createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("a", { href: "#0" }, [
                        createVNode("img", {
                          src: _imports_0$1,
                          alt: ""
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("a", { href: "#0" }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: ""
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("a", { href: "#0" }, [
                        createVNode("img", {
                          src: _imports_2,
                          alt: ""
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("a", { href: "#0" }, [
                        createVNode("img", {
                          src: _imports_3,
                          alt: ""
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("a", { href: "#0" }, [
                        createVNode("img", {
                          src: _imports_4,
                          alt: ""
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "swiper-slide" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("a", { href: "#0" }, [
                        createVNode("img", {
                          src: _imports_4,
                          alt: ""
                        })
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
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-agency/Brands.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation, Parallax, Pagination],
      spaceBetween: 30,
      speed: 600,
      navigation: {
        nextEl: ".slider-contro .swiper-button-next",
        prevEl: ".slider-contro .swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "slider slider-prlx" }, _attrs))}><div class="swiper-container parallax-slider">`);
      _push(ssrRenderComponent(unref(Swiper2), mergeProps({
        effect: "Parallax",
        class: "swiper-container parallax-slider"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-img valign" data-background="/light/assets/imgs/header/full/1.jpg" data-overlay-dark="4"${_scopeId2}><div class="container"${_scopeId2}><div class="caption text-center"${_scopeId2}><h2 class="mb-30" data-swiper-parallax="-2000"${_scopeId2}>We Create</h2><h1${_scopeId2}><span data-swiper-parallax="-1000"${_scopeId2}>Awoseme Design</span></h1></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img valign",
                      "data-background": "/light/assets/imgs/header/full/1.jpg",
                      "data-overlay-dark": "4"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "caption text-center" }, [
                          createVNode("h2", {
                            class: "mb-30",
                            "data-swiper-parallax": "-2000"
                          }, "We Create"),
                          createVNode("h1", null, [
                            createVNode("span", { "data-swiper-parallax": "-1000" }, "Awoseme Design")
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
                  _push3(`<div class="bg-img valign" data-background="/light/assets/imgs/header/full/3.jpg" data-overlay-dark="4"${_scopeId2}><div class="container"${_scopeId2}><div class="caption text-center"${_scopeId2}><h2 class="mb-30" data-swiper-parallax="-2000"${_scopeId2}> We Create Impactful </h2><h1${_scopeId2}><span data-swiper-parallax="-1000"${_scopeId2}>Digital Experiences</span></h1></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img valign",
                      "data-background": "/light/assets/imgs/header/full/3.jpg",
                      "data-overlay-dark": "4"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "caption text-center" }, [
                          createVNode("h2", {
                            class: "mb-30",
                            "data-swiper-parallax": "-2000"
                          }, " We Create Impactful "),
                          createVNode("h1", null, [
                            createVNode("span", { "data-swiper-parallax": "-1000" }, "Digital Experiences")
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
                  _push3(`<div class="bg-img valign" data-background="/light/assets/imgs/header/full/4.jpg" data-overlay-dark="4"${_scopeId2}><div class="container"${_scopeId2}><div class="caption text-center"${_scopeId2}><h2 class="mb-30" data-swiper-parallax="-2000"${_scopeId2}>Elevate your</h2><h1${_scopeId2}><span data-swiper-parallax="-1000"${_scopeId2}>Brand &amp; Fuel Growth</span></h1></div></div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-img valign",
                      "data-background": "/light/assets/imgs/header/full/4.jpg",
                      "data-overlay-dark": "4"
                    }, [
                      createVNode("div", { class: "container" }, [
                        createVNode("div", { class: "caption text-center" }, [
                          createVNode("h2", {
                            class: "mb-30",
                            "data-swiper-parallax": "-2000"
                          }, "Elevate your"),
                          createVNode("h1", null, [
                            createVNode("span", { "data-swiper-parallax": "-1000" }, "Brand & Fuel Growth")
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
                    "data-background": "/light/assets/imgs/header/full/1.jpg",
                    "data-overlay-dark": "4"
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "caption text-center" }, [
                        createVNode("h2", {
                          class: "mb-30",
                          "data-swiper-parallax": "-2000"
                        }, "We Create"),
                        createVNode("h1", null, [
                          createVNode("span", { "data-swiper-parallax": "-1000" }, "Awoseme Design")
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
                    "data-background": "/light/assets/imgs/header/full/3.jpg",
                    "data-overlay-dark": "4"
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "caption text-center" }, [
                        createVNode("h2", {
                          class: "mb-30",
                          "data-swiper-parallax": "-2000"
                        }, " We Create Impactful "),
                        createVNode("h1", null, [
                          createVNode("span", { "data-swiper-parallax": "-1000" }, "Digital Experiences")
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
                    "data-background": "/light/assets/imgs/header/full/4.jpg",
                    "data-overlay-dark": "4"
                  }, [
                    createVNode("div", { class: "container" }, [
                      createVNode("div", { class: "caption text-center" }, [
                        createVNode("h2", {
                          class: "mb-30",
                          "data-swiper-parallax": "-2000"
                        }, "Elevate your"),
                        createVNode("h1", null, [
                          createVNode("span", { "data-swiper-parallax": "-1000" }, "Brand & Fuel Growth")
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
      _push(`</div><div class="slider-contro main-bg"><div class="swiper-button-prev swiper-nav-ctrl cursor-pointer"><div><span>Prev</span></div></div><div class="ml-30 mr-30"><span>/</span></div><div class="swiper-button-next swiper-nav-ctrl cursor-pointer"><div><span>Next</span></div></div><div class="shap-left-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-right-top"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></div><div class="swiper-pagination"></div></header>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-agency/Header.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "marquee-skew" }, _attrs))}><div class="container-fluid rest"><div class="row"><div class="col-12"><div class="main-marq lrg"><div class="slide-har st1"><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box non-strok"><div class="item"><h4 class="d-flex align-items-center"><span>UI-UX Experience</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Digital Marketing</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Product Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Mobile Solutions</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-agency/Marquee.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Marquee = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "numbers" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-4 col-md-6"><div class="item d-flex align-items-center justify-content-center md-mb50"><h2 class="fz-80 line-height-1">52</h2><span class="sub-title opacity-7 ml-30"> Projects <br> Completed </span></div></div><div class="col-lg-4 col-md-6"><div class="item d-flex align-items-center justify-content-center md-mb50"><h2 class="fz-80 line-height-1">34</h2><span class="sub-title opacity-7 ml-30"> Team <br> Members </span></div></div><div class="col-lg-4 col-md-6"><div class="item d-flex align-items-center justify-content-center"><h2 class="fz-80 line-height-1">6k<span class="fz-50">+</span></h2><span class="sub-title opacity-7 ml-30"> Customers <br> Satisfaction </span></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-agency/Number.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Number = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const data = [
  {
    img: "/light/assets/imgs/works/3/0.jpg",
    title: "Branding",
    subTitle: "Artboard Studio",
    link: "/light/project1"
  },
  {
    img: "/light/assets/imgs/works/3/1.jpg",
    title: "Branding",
    subTitle: "Artboard Studio",
    link: "/light/project2"
  },
  {
    img: "/light/assets/imgs/works/3/2.jpg",
    title: "Branding",
    subTitle: "Artboard Studio",
    link: "/light/project3"
  },
  {
    img: "/light/assets/imgs/works/3/3.jpg",
    title: "Branding",
    subTitle: "Artboard Studio",
    link: "/light/project4"
  },
  {
    img: "/light/assets/imgs/works/3/4.jpg",
    title: "Branding",
    subTitle: "Artboard Studio",
    link: "/light/project5"
  },
  {
    img: "/light/assets/imgs/works/3/4.jpg",
    title: "Branding",
    subTitle: "Artboard Studio",
    link: "/light/project5"
  }
];
const _sfc_main$5 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      modules: [Navigation],
      speed: 600,
      slidesPerView: 5,
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-control .swiper-button-next",
        prevEl: ".swiper-arrow-control .swiper-button-prev"
      },
      breakpoints: {
        640: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: false
        },
        768: {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: false
        },
        1e3: {
          slidesPerView: 5,
          spaceBetween: 30,
          loop: true
          // slidesPerView: 5,
          // centeredSlides: false,
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-carsouel section-padding position-re o-hidden" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Portfolio</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> Featured <span class="fw-200">projects</span></h2><div class="ml-auto"><div class="swiper-arrow-control"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div></div><div class="container-fluid rest"><div class="row"><div class="col-12"><div class="work-crus work-crus5 out">`);
      _push(ssrRenderComponent(unref(Swiper2), mergeProps({ id: "content-carousel-container-unq-w" }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}><div class="cont"${_scopeId2}><span class="mb-5"${_scopeId2}>${ssrInterpolate(item.title)}</span><h6 class="fz-18"${_scopeId2}>${ssrInterpolate(item.subTitle)}</h6></div><a${ssrRenderAttr("href", item.link)} class="plink"${_scopeId2}></a></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "img" }, [
                          createVNode("img", {
                            src: item.img,
                            alt: ""
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "cont" }, [
                            createVNode("span", { class: "mb-5" }, toDisplayString(item.title), 1),
                            createVNode("h6", { class: "fz-18" }, toDisplayString(item.subTitle), 1)
                          ]),
                          createVNode("a", {
                            href: item.link,
                            class: "plink"
                          }, null, 8, ["href"])
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
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img" }, [
                        createVNode("img", {
                          src: item.img,
                          alt: ""
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "cont" }, [
                          createVNode("span", { class: "mb-5" }, toDisplayString(item.title), 1),
                          createVNode("h6", { class: "fz-18" }, toDisplayString(item.subTitle), 1)
                        ]),
                        createVNode("a", {
                          href: item.link,
                          class: "plink"
                        }, null, 8, ["href"])
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
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-agency/Portfolio.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services section-padding pb-0" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Specialize</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> What We <span class="fw-200">Offer</span></h2><div class="ml-auto"><a href="/light/page-services2" class="go-more"><span class="text">View all services</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data$1), (item, i) => {
        _push(`<div class="col-md-6"><div class="item-box2 mb-30"><div class="icon mb-40"><img${ssrRenderAttr("src", item.img)} alt=""></div><h5 class="mb-15">${ssrInterpolate(item.title)}</h5><p>${ssrInterpolate(item.desc)}</p><a${ssrRenderAttr("href", item.link)} class="rmore"><div class="arrow"><img${ssrRenderAttr("src", _imports_1$1)} alt="" class="icon-img-20"></div><div class="shap-left-top"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div><div class="shap-right-bottom"><svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11"><path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1a1a1a"></path></svg></div></a></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-agency/Services.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ServicesTab",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-tab section-padding mb-80" }, _attrs))}><div class="container"><div class="row lg-marg" id="tabs"><div class="col-lg-6 valign"><div class="serv-tab-cont md-mb80"><div class="tab-content current" id="tabs-1"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="cont sub-bg"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", _imports_1$2)} alt=""></div><div class="text"><p> We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web. </p></div><a href="/light/page-services" class="mt-30"><span class="mr-15">Read More</span><i class="fas fa-long-arrow-alt-right"></i></a></div></div></div><div class="tab-content" id="tabs-2"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_2$1)} alt=""></div><div class="cont sub-bg"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", _imports_3$1)} alt=""></div><div class="text"><p> We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web. </p></div><a href="/light/page-services" class="mt-30"><span class="mr-15">Read More</span><i class="fas fa-long-arrow-alt-right"></i></a></div></div></div><div class="tab-content" id="tabs-3"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="cont sub-bg"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", _imports_4$1)} alt=""></div><div class="text"><p> We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web. </p></div><a href="/light/page-services" class="mt-30"><span class="mr-15">Read More</span><i class="fas fa-long-arrow-alt-right"></i></a></div></div></div><div class="tab-content" id="tabs-4"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="cont sub-bg"><div class="icon-img-60 mb-40"><img${ssrRenderAttr("src", _imports_1$2)} alt=""></div><div class="text"><p> We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web. </p></div><a href="/light/page-services" class="mt-30"><span class="mr-15">Read More</span><i class="fas fa-long-arrow-alt-right"></i></a></div></div></div></div></div><div class="col-lg-6 valign"><div class="serv-tab-link tab-links full-width pt-40"><div class="sec-head mb-30"><h6 class="sub-title mb-15 main-color">Who we are?</h6><h2>The ultmiate guide to marketing success.</h2></div><div class="row justify-content-end"><div class="col-lg-11"><div class="text mb-50"><p> We shifted our talents to frontier science because we wanted our work to have tangible. we get front row seats to the future. </p></div><ul class="rest"><li class="item-link current mb-15" data-tab="tabs-1"><h3><span class="fz-18 opacity-7 mr-15">01</span> About Us </h3></li><li class="item-link mb-15" data-tab="tabs-2"><h3><span class="fz-18 opacity-7 mr-15">02</span> Our Mission </h3></li><li class="item-link mb-15" data-tab="tabs-3"><h3><span class="fz-18 opacity-7 mr-15">03</span> Our Vision </h3></li><li class="item-link" data-tab="tabs-4"><h3><span class="fz-18 opacity-7 mr-15">04</span> Achievements </h3></li></ul></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-agency/ServicesTab.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Team</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600">Meet our <span class="fw-200">legends</span></h2><div class="ml-auto"><a href="/light/page-team" class="go-more"><span class="text">Join to us</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data$2), (item, i) => {
        _push(`<div class="col-lg-4"><div class="item md-mb50"><div class="img"><img${ssrRenderAttr("src", item.img)} alt=""><div class="info"><span class="fz-12">${ssrInterpolate(item.subName)}</span><h6 class="fz-18">${ssrInterpolate(item.name)}</h6></div></div><div class="social"><div class="links"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-behance"></i></a><a href="#0"><i class="fab fa-instagram"></i></a></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-agency/Team.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
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
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "testimonials-crev section-padding pb-0 bg-img",
        "data-background": "/light/assets/imgs/background/2.jpg",
        "data-overlay-dark": "5"
      }, _attrs))}><div class="container"><div class="row justify-content-end"><div class="col-lg-10"><div class="sec-head mb-80"><h2 class="fw-600 fz-70"> What <br> People <span class="fw-200">Say?</span></h2></div></div></div><div class="row"><div class="col-lg-11 position-re"><div class="testim-swiper testim1" data-carousel="swiper" data-loop="true" data-space="30">`);
      _push(ssrRenderComponent(unref(Swiper2), mergeProps({
        id: "content-carousel-container-unq-testim",
        class: "swiper-container",
        "data-swiper": "container"
      }, swiperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data$3), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="item d-flex align-items-center"${_scopeId2}><div${_scopeId2}><div class="fit-img circle"${_scopeId2}><img${ssrRenderAttr("src", item.img)} alt=""${_scopeId2}></div></div><div class="content ml-100"${_scopeId2}><div class="text"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="256.721" height="208.227" viewBox="0 0 256.721 208.227" id="null" class="qout-svg"${_scopeId2}><path id="Path_76570" data-name="Path 76570" d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#fff" stroke-width="1" opacity="0.322"${_scopeId2}></path></svg><h4${_scopeId2}>${ssrInterpolate(item.desc)}</h4></div><div class="info d-flex align-items-center pt-40 mt-40 bord-thin-top"${_scopeId2}><div${_scopeId2}><h5${_scopeId2}>${ssrInterpolate(item.name)}</h5><span class="sub-title main-color"${_scopeId2}>${ssrInterpolate(item.name)}</span></div><div class="ml-auto"${_scopeId2}><div class="rate-stars fz-14"${_scopeId2}><span class="rate main-color"${_scopeId2}><i class="fas fa-star"${_scopeId2}></i><i class="fas fa-star"${_scopeId2}></i><i class="fas fa-star"${_scopeId2}></i><i class="fas fa-star"${_scopeId2}></i><i class="fas fa-star"${_scopeId2}></i></span></div></div></div></div></div>`);
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
                              createVNode("span", { class: "sub-title main-color" }, toDisplayString(item.name), 1)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data$3), (item, i) => {
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
                            createVNode("span", { class: "sub-title main-color" }, toDisplayString(item.name), 1)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/modern-agency/Testimonials.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "home-modern-agency",
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
      _push(ssrRenderComponent(unref(_sfc_main$c), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$d), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent));
      _push(ssrRenderComponent(unref(Number), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(Marquee), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$9), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Blog), null, null, _parent));
      _push(`</main><div>`);
      _push(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/old/light/home-modern-agency.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-modern-agency-DAkftgtJ.mjs.map
