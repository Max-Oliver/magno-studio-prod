import { mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, defineComponent, computed, ref, provide, createElementBlock } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { S as Swiper, a as SwiperSlide } from "./swiper-slide-Dn_WuJYw.js";
import "ssr-window";
import { _ as _imports_0$1 } from "./loader-jCTjqXsl.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { d as useI18n } from "../server.mjs";
import { d as data$1 } from "./team-D6p_iKBL.js";
const data = [
  "/dark/assets/imgs/brands/b1.png",
  "/dark/assets/imgs/brands/b2.png",
  "/dark/assets/imgs/brands/b3.png",
  "/dark/assets/imgs/brands/b4.png",
  "/dark/assets/imgs/brands/b6.png"
];
const _sfc_main$7 = {
  __name: "Clients",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperOptions = {
      speed: 500,
      loop: true,
      breakpoints: {
        // when window width is >= 640px
        500: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: false
        },
        // when window width is >= 768px
        700: {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: false
        },
        // when window width is >= 1200px
        1e3: {
          loop: true,
          slidesPerView: 5,
          spaceBetween: 30,
          centeredSlides: true
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "clients-carso section-padding pt-0 sub-bg" }, _attrs))}><div class="container"><div class="sec-bottom mb-100"><div class="sub-bg d-flex align-items-center"><h6 class="fz-14 fw-400"> Más de <span class="fw-600">10+ empresas</span> confían en nosotros en todo el mundo </h6></div></div><div class="swiper5" data-carousel="swiper">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        id: "content-carousel-container-unq-clients",
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
                    _push3(`<div class="item"${_scopeId2}><div class="img icon-img-100"${_scopeId2}><img${ssrRenderAttr("src", item)} alt=""${_scopeId2}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("div", { class: "img icon-img-100" }, [
                          createVNode("img", {
                            src: item,
                            alt: ""
                          }, null, 8, ["src"])
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
                      createVNode("div", { class: "img icon-img-100" }, [
                        createVNode("img", {
                          src: item,
                          alt: ""
                        }, null, 8, ["src"])
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
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Clients.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "footer",
        "aria-labelledby": "footer-heading"
      }, _attrs))} data-v-ac4c434e><div class="footer__overlay" data-v-ac4c434e></div><div class="footer__container" data-v-ac4c434e><div class="footer__cta" data-v-ac4c434e><h2 id="footer-heading" class="footer__title" data-v-ac4c434e><a href="/contact" class="footer__titleLink" data-v-ac4c434e><span data-v-ac4c434e>Let’s Contact </span><svg viewBox="0 0 24 24" class="footer__arrow" data-v-ac4c434e><path fill="currentColor" d="M5 19L19 5M19 5H9M19 5v10" data-v-ac4c434e></path></svg></a></h2></div><div class="footer__grid" data-v-ac4c434e><div data-v-ac4c434e><img${ssrRenderAttr("src", _imports_0$1)} alt="Magno Studio" class="footer__logo" data-v-ac4c434e></div><div data-v-ac4c434e><h6 class="footer__label" data-v-ac4c434e>Address</h6><address class="footer__address" data-v-ac4c434e> Miami Boulevard 2<br data-v-ac4c434e>Punta del Este, Uruguay </address></div><nav aria-label="Primary" data-v-ac4c434e><ul class="menu-col" data-v-ac4c434e><li data-v-ac4c434e><a class="u-underline is-active" href="/" data-v-ac4c434e>Home</a></li><li data-v-ac4c434e><a class="u-underline" href="/work" data-v-ac4c434e>Work</a></li><li data-v-ac4c434e><a class="u-underline" href="/studio" data-v-ac4c434e>Studio</a></li></ul></nav><nav aria-label="Social" data-v-ac4c434e><ul class="menu-col" data-v-ac4c434e><li data-v-ac4c434e><a class="u-underline" href="https://instagram.com/magnocreative" target="_blank" rel="noreferrer" data-v-ac4c434e>Instagram</a></li><li data-v-ac4c434e><a class="u-underline" href="https://behance.net/magnocreative" target="_blank" rel="noreferrer" data-v-ac4c434e>Behance</a></li></ul></nav></div></div></footer>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Footer.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-ac4c434e"]]);
const _sfc_main$5 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "startup-header",
        "data-scroll-index": "0"
      }, _attrs))}><div class="valign bg-img" data-background="/dark/assets/imgs/background/1.jpg" data-overlay-dark="5"><div class="container pt-40"><div class="caption"><div class="lg-text fw-600"><div class="text d-flex align-items-center"><span>${ssrInterpolate(unref(t)("hero.line_1"))}</span></div><div class="text">${ssrInterpolate(unref(t)("hero.line_2"))}</div><div class="text">${ssrInterpolate(unref(t)("hero.line_3"))}</div></div><p>${ssrInterpolate(unref(t)("hero.paragraph"))}</p></div></div></div></header>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    computed(() => t("intro.headline"));
    const marquee = computed(() => t("intro.marquee"));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro section-padding position-re" }, _attrs))}><div class="container"><div class="row justify-content-between"><div class="col-lg-6"><div class="cont"><h4 class="d-slideup wow"><span class="sideup-text"><span class="up-text">${ssrInterpolate(unref(t)("intro.headline_1"))}</span></span><span class="sideup-text"><span class="up-text">${ssrInterpolate(unref(t)("intro.headline_2"))}</span></span><span class="sideup-text"><span class="up-text">${ssrInterpolate(unref(t)("intro.headline_3"))} <span class="underline"><a href="/dark/home/contact" class="main-color">${ssrInterpolate(unref(t)("intro.headline_cta"))}</a></span></span></span></h4><div class="exp mt-80 md-mb15"><h2 class="fz-70 numb-font">${ssrInterpolate(unref(t)("intro.years_amount"))} <span class="sub-title main-font opacity-7 ml-15">${ssrInterpolate(unref(t)("intro.years_label"))}</span></h2></div></div></div><div class="col-lg-5"><div class="text"><p>${ssrInterpolate(unref(t)("intro.paragraph"))}</p></div><div class="main-marq o-hidden mt-100"><div class="slide-har st1"><!--[-->`);
      ssrRenderList(2, (n) => {
        _push(`<div class="box"><!--[-->`);
        ssrRenderList(marquee.value, (item, i) => {
          _push(`<div class="item"><h4 class="d-flex align-items-center"><span>${ssrInterpolate(item)}</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div></div></div><div class="line-overlay"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Intro.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="main-marq xlrg mb-50 mt-50 o-hidden"><div class="slide-har st1"><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>MVP Product Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Visual Identity</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Branding Strategy</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>SaaS Products</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Web Development</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>AI Powered Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Community Management</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Marquee.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Marquee = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + __publicAssetsURL("dark/assets/imgs/intro/04.jpg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const titleLines = computed(() => t("servicesIntro.titleLines"));
    const stats = computed(() => t("servicesIntro.stats"));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "skills-img-crev pb-50" }, _attrs))}><div class="container"><div class="row justify-content-between"><div class="col-lg-4 offset-lg-1 valign"><div class="img md-mb80"><div class="rotate-butn-vid"><a href="https://youtu.be/AzwC6umvd1s" class="vid d-flex align-items-center"><div class="icon"><i class="fas fa-play main-color"></i></div><span class="sub-title ml-15">${ssrInterpolate(unref(t)("servicesIntro.watch"))}</span></a></div><img${ssrRenderAttr("src", _imports_0)} alt="" class="radius-30"></div></div><div class="col-lg-6 valign"><div class="content full-width"><div class="sec-head mb-50"><h6 class="sub-title mb-15 main-color">${ssrInterpolate(unref(t)("servicesIntro.why"))}</h6><h2 class="d-slideup wow"><span class="sideup-text"><span class="up-text">${ssrInterpolate(titleLines.value[0])}</span></span><span class="sideup-text"><span class="up-text">${ssrInterpolate(titleLines.value[1])}</span></span></h2></div><div class="row justify-content-end"><div class="col-lg-11"><div class="text"><p>${ssrInterpolate(unref(t)("servicesIntro.paragraph"))}</p></div><div class="row mt-50 pt-50 bord-thin-top"><div class="col-sm-6"><div class="item d-flex align-items-center sm-mb30"><h2 class="fz-60 line-height-1"><span class="numb-count">${ssrInterpolate(stats.value.projects_value)}</span></h2><span class="sub-title opacity-7 ml-30">${ssrInterpolate(stats.value.projects_label[0])} <br> ${ssrInterpolate(stats.value.projects_label[1])}</span></div></div><div class="col-sm-6"><div class="item d-flex align-items-center"><h2 class="fz-60 line-height-1"><span class="numb-count">${ssrInterpolate(stats.value.satisfaction_value)}</span>${ssrInterpolate(stats.value.satisfaction_unit)}</h2><span class="sub-title opacity-7 ml-30">${ssrInterpolate(stats.value.satisfaction_label[0])} <br> ${ssrInterpolate(stats.value.satisfaction_label[1])}</span></div></div></div></div></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Services.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const enData = [
  {
    img: "/dark/assets/imgs/serv-icons/1.svg",
    title: "Branding & Identity",
    desc: "Logos, palettes, guidelines and full identity systems that stand out.",
    link: "/dark/home/works"
  },
  {
    img: "/dark/assets/imgs/serv-icons/2.svg",
    title: "Web Design",
    desc: "Modern, fast and accessible websites with delightful micro-interactions.",
    link: "/dark/home/works"
  },
  {
    img: "/dark/assets/imgs/serv-icons/3.svg",
    title: "Web Development",
    desc: "Next.js, WordPress/Elementor and Lovable for speed with craft.",
    link: "/dark/home/works"
  },
  {
    img: "/dark/assets/imgs/serv-icons/4.svg",
    title: "Product Design",
    desc: "UX/UI for apps & webapps driven by research and business goals.",
    link: "/dark/home/works"
  }
];
const esData = [
  {
    img: "/dark/assets/imgs/serv-icons/1.svg",
    title: "Branding & Identidad",
    desc: "Logos, paletas, manuales y sistemas de identidad que destacan.",
    link: "/dark/home/works"
  },
  {
    img: "/dark/assets/imgs/serv-icons/2.svg",
    title: "Diseño Web",
    desc: "Sitios modernos, veloces y accesibles con micro-interacciones.",
    link: "/dark/home/works"
  },
  {
    img: "/dark/assets/imgs/serv-icons/3.svg",
    title: "Desarrollo Web",
    desc: "Next.js, WordPress/Elementor y Lovable para velocidad con calidad.",
    link: "/dark/home/works"
  },
  {
    img: "/dark/assets/imgs/serv-icons/4.svg",
    title: "Product Design",
    desc: "UX/UI para apps y webapps orientado a investigación y negocio.",
    link: "/dark/home/works"
  }
];
const _sfc_main$1 = {
  __name: "Services2",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, current } = useI18n();
    computed(() => current === "es" ? esData : enData);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">${ssrInterpolate(unref(t)("services2.eyebrow"))}</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 d-rotate wow"><span class="rotate-text">${ssrInterpolate(unref(t)("services2.title_a"))} <span class="fw-200">${ssrInterpolate(unref(t)("services2.title_b"))}</span></span></h2><div class="ml-auto"><div class="swiper-arrow-control"><div class="swiper-button-prev"><span class="ti-arrow-left"></span></div><div class="swiper-button-next"><span class="ti-arrow-right"></span></div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row"${_scopeId}><!--[-->`);
            ssrRenderList(3, (n) => {
              _push2(`<div class="col-md-4 mb-30"${_scopeId}><div class="item-box radius-15"${_scopeId}>...</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "row" }, [
                (openBlock(), createBlock(Fragment, null, renderList(3, (n) => {
                  return createVNode("div", {
                    class: "col-md-4 mb-30",
                    key: "sk-" + n
                  }, [
                    createVNode("div", { class: "item-box radius-15" }, "...")
                  ]);
                }), 64))
              ])
            ];
          }
        })
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Services2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Team</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 d-rotate wow"><span class="rotate-text"> Meet our <span class="fw-200">legends</span></span></h2><div class="ml-auto"><a href="/dark/page-team" class="go-more"><span class="text">Join to us</span><span class="icon ti-arrow-top-right"></span></a></div></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data$1), (item, i) => {
        _push(`<div class="col-lg-4"><div class="item md-mb50"><div class="img"><img${ssrRenderAttr("src", item.img)} alt=""><div class="info"><span class="fz-12">${ssrInterpolate(item.subName)}</span><h6 class="fz-18">${ssrInterpolate(item.name)}</h6></div></div><div class="social"><div class="links"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-behance"></i></a><a href="#0"><i class="fab fa-instagram"></i></a></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  Footer as F,
  Marquee as M,
  _sfc_main$5 as _,
  _sfc_main$4 as a,
  _sfc_main$2 as b,
  _sfc_main$1 as c,
  _sfc_main as d,
  _sfc_main$7 as e
};
//# sourceMappingURL=Team-loB0aZZX.js.map
