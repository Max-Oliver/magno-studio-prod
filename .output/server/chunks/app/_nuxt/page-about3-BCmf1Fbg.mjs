import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, onUnmounted, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$a } from './Footer-Bm73Q4r7.mjs';
import { _ as _sfc_main$8, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines } from './loader-CCDLJnCr.mjs';
import { _ as _sfc_main$9 } from './Navbar-DzEBLQao.mjs';
import { _ as _imports_0$4 } from './4-C11y4wKf.mjs';
import { _ as _imports_0 } from './01-B9eBkqps.mjs';
import { _ as _imports_0$1 } from './2-DrRViv9P.mjs';
import { _ as _imports_2 } from './02-BiO2H9wf.mjs';
import { _ as _imports_0$2 } from './03-ChmKl91R.mjs';
import { i as isInView } from './isInView-VXyFXDVH.mjs';
import { d as data } from './testimonials-Dfj7txv4.mjs';
import { S as Swiper2, a as SwiperSlide } from './swiper-slide-Dn_WuJYw.mjs';
import { N as Navigation } from './navigation-nPzHIgEI.mjs';
import { _ as _imports_0$3, a as _imports_1, b as _imports_2$1, c as _imports_3, d as _imports_4 } from './05-Dd0T5s0G.mjs';
import { _ as _imports_0$5, a as _imports_2$2 } from './3-hVDirBa9.mjs';
import { _ as _imports_1$1 } from './author-DIkYSGQ7.mjs';
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

const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "page-header section-padding" }, _attrs))}><div class="container pt-100"><div class="row"><div class="col-lg-10"><div class="caption"><h2> For more than 10 years, we have been using graphic design and websites to bring brands to life. InFolio is always on the lookout for talent. </h2><div class="mt-30"><a href="/light/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">About Us</span></div></div></div></div></div></header>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/about3/Header.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-intro position-re" }, _attrs))}><div class="container-fluid rest"><div class="img fit-img"><img${ssrRenderAttr("src", _imports_0$4)} alt=""></div></div><div class="container section-padding"><div class="row"><div class="col-lg-5"><h6 class="sub-title main-color">About Company</h6></div><div class="col-lg-7"><div class="text"><h4> Whether you are a development agency looking to outsource design work, a company in search of a Product Designer or Product Team, a marketing agency that needs a landing page, a startup that wants to launch an app, or an enterprise that plans to rebrand or redesign its website, we welcome any challenge with our arms wide open. </h4></div></div></div></div><div class="line-overlay"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/about3/Intro.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$5 = {
  __name: "Intro2",
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-intro-modern section-padding pt-0" }, _attrs))}><div class="container md-hide"><div class="row justify-content-center"><div class="col-lg-11"><div class="row"><div class="col-lg-3 valign"><div class="img1 fit-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-lg-5"><div class="img2 fit-img position-re o-hidden"><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-speed="0.2" data-lag="0"></div></div><div class="col-lg-4 d-flex align-items-end"><div class="full-width"><div class="img3 fit-img mb-30"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="img4 fit-img"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></div></div></div></div></div></div></div><div class="container mt-100"><div class="row justify-content-around"><div class="col-lg-5"><div class="cont"><h4> If you\u2019re looking for a specialist to build a meaningful digital project you can easily reach us by clicking <span class="underline"><a href="#0" class="main-color"> here </a></span></h4><div class="exp mt-80 md-mb15"><h2 class="fz-70"> 28 <span class="sub-title main-font opacity-7 ml-15"> Years of Experience </span></h2></div></div></div><div class="col-lg-5 valign"><div class="full-width"><div class="text"><p> Whether you are a development agency looking to outsource design work, a company in search of a Product Designer or Product Team, a marketing agency that needs. </p></div><div class="mt-50"><div class="skills-box"><div class="skill-item mb-40"><h5 class="sub-title mb-15">UI / UX Design</h5><div class="skill-progress"><div class="progres" data-value="90%"></div></div></div><div class="skill-item"><h5 class="sub-title mb-15">Apps Development</h5><div class="skill-progress"><div class="progres" data-value="80%"></div></div></div></div></div></div></div></div></div><div class="line-overlay"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/about3/Intro2.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const swperOptions = {
      modules: [Navigation],
      loop: true,
      spaceBetween: 30,
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
      }, swperOptions), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data).slice(0, 2), (item, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: i,
                class: "swiper-slide"
              }, {
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
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: i,
                  class: "swiper-slide"
                }, {
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
      _push(`</div><div class="swiper-arrow-control control-abslout"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div><div class="small-line"><div class="line-overlay"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/about3/Testimonials.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-tab bord-thin-bottom bord-thin-top" }, _attrs))}><div class="container-fluid rest"><div class="sec-head pb-30 pt-20 bord-thin-bottom"><div class="main-marq xlrg o-hidden"><div class="slide-har st1"><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>Meet Our Team</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Meet Our Team</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Meet Our Team</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Meet Our Team</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Meet Our Team</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>Meet Our Team</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Meet Our Team</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Meet Our Team</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Meet Our Team</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Meet Our Team</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></div><div class="row"><div class="col-lg-5 rest"><div class="glry-img"><div id="tab-1" class="bg-img tab-img current" data-background="/light/assets/imgs/team/1.jpg"></div><div id="tab-2" class="bg-img tab-img" data-background="/light/assets/imgs/team/2.jpg"></div><div id="tab-3" class="bg-img tab-img" data-background="/light/assets/imgs/team/3.jpg"></div><div id="tab-4" class="bg-img tab-img" data-background="/light/assets/imgs/team/4.jpg"></div><div id="tab-5" class="bg-img tab-img" data-background="/light/assets/imgs/team/3.jpg"></div></div></div><div class="col-lg-7 rest content"><div class="cluom current" data-tab="tab-1"><div class="info"><h6 class="sub-title opacity-7">Web Designer</h6><h4>Robert De Niro</h4></div><div class="more text-u ls1 fz-12"><a href="/light/page-team-single"> View More <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom" data-tab="tab-2"><div class="info"><h6 class="sub-title opacity-7">Project Manager</h6><h4>Brendan Fraser</h4></div><div class="more text-u ls1 fz-12"><a href="/light/page-team-single"> View More <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom" data-tab="tab-3"><div class="info"><h6 class="sub-title opacity-7">Web Developer</h6><h4>Brendan Fraser</h4></div><div class="more text-u ls1 fz-12"><a href="/light/page-team-single"> View More <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom" data-tab="tab-4"><div class="info"><h6 class="sub-title opacity-7">UI-UX Designer</h6><h4>Brendan Fraser</h4></div><div class="more text-u ls1 fz-12"><a href="/light/page-team-single"> View More <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom" data-tab="tab-5"><div class="info"><h6 class="sub-title opacity-7">SEO Manager</h6><h4>Brendan Fraser</h4></div><div class="more text-u ls1 fz-12"><a href="/light/page-team-single"> View More <i class="ml-15 ti-arrow-top-right"></i></a></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/about3/Team.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Brands",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      speed: 600,
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "clients-carso2" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-11"><div class="swiper5" data-carousel="swiper" data-items="5" data-loop="true" data-space="40">`);
      _push(ssrRenderComponent(unref(Swiper2), mergeProps(swiperOptions, {
        id: "content-carousel-container-unq-clients",
        class: "swiper-container",
        "data-swiper": "container"
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><a href="#0"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$3)} alt=""${_scopeId2}></a></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("a", { href: "#0" }, [
                          createVNode("img", {
                            src: _imports_0$3,
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
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
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
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><a href="#0"${_scopeId2}><img${ssrRenderAttr("src", _imports_2$1)} alt=""${_scopeId2}></a></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("a", { href: "#0" }, [
                          createVNode("img", {
                            src: _imports_2$1,
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
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
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
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
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
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("a", { href: "#0" }, [
                        createVNode("img", {
                          src: _imports_0$3,
                          alt: ""
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
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
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("div", { class: "img icon-img-100" }, [
                      createVNode("a", { href: "#0" }, [
                        createVNode("img", {
                          src: _imports_2$1,
                          alt: ""
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
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
              createVNode(unref(SwiperSlide), null, {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/about3/Brands.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list-half section-padding sub-bg" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Blog</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600">Read Latest <span class="fw-200">News</span></h2><div class="ml-auto"><a href="/light/blog-list2" class="go-more"><span class="text">View all posts</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><div class="col-lg-6"><div class="item main-bg md-mb50"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_0$5)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/light/blog-list">Marketing</a></div><h5><a href="/light/blog-details"> Free advertising for your online business. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div><div class="col-lg-6"><div class="item main-bg"><div class="row rest"><div class="col-lg-6 col-md-5 img rest"><img${ssrRenderAttr("src", _imports_2$2)} alt="" class="img-post"><div class="author d-flex align-items-center"><div><div class="fit-img icon-img-50 circle"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div></div><div class="ml-15 fz-14"><div><span class="opacity-7">Posted by</span><br> UiCamp </div></div></div></div><div class="col-lg-6 col-md-7 cont valign"><div class="full-width"><div class="tags mb-15"><a href="/light/blog-list">Marketing</a><a href="/light/blog-list">Design</a></div><h5><a href="/light/blog-details"> Business meeting 2023 in San Francisco. </a></h5><span class="date fz-12 ls1 text-u opacity-7 mt-80"> August 6, 2022 </span></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/about3/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "page-about3",
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
      _push(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$9), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$9), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(Header), null, null, _parent));
      _push(ssrRenderComponent(unref(Intro), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Blog), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$a), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/page-about3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=page-about3-BCmf1Fbg.mjs.map
