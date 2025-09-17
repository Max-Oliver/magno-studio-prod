import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { mergeProps, unref, useSSRContext, defineComponent } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, L as Lines, N as Navbar, c as _sfc_main$6, F as Footer } from "./WhatsAppFloat-BTMLDWbB.js";
import { u as useI18n } from "../server.mjs";
import "@unhead/shared";
import "lucide-vue-next";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
const _sfc_main$2 = {
  __name: "PortfolioHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header-cerv bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/2.jpg",
        "data-overlay-dark": "4"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1 class="fz-100">${ssrInterpolate(unref(t)("portfolio.title"))}</h1><div class="mt-15"><a href="/">${ssrInterpolate(unref(t)("portfolio.tab_a"))}</a><span class="padding-rl-20">|</span><span class="main-color">${ssrInterpolate(unref(t)("portfolio.tab_b"))}</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/portfolio-metro/PortfolioHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/beru/beru.jpg");
const _imports_1 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/beru/beru-post-1.jpg");
const _imports_2 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/beru/beru-post-2.jpg");
const _imports_3 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/beru/beru-web.jpg");
const _imports_4 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/esteña/mock-up-2.jpg");
const _imports_5 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/esteña/mobile/mock-mobi-1.jpg");
const _imports_6 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/esteña/mobile/mock-mobi-2.jpg");
const _imports_7 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/esteña/mock-up-3.jpg");
const _imports_8 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/urban-code/desktop/portfolio.jpg");
const _imports_9 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/urban-code/mobile/logo.jpg");
const _imports_10 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/urban-code/mobile/post-1.jpg");
const _imports_11 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/urban-code/desktop/slider-2.jpg");
const _imports_12 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/pachu/Desktop/slider.jpg");
const _imports_13 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/pachu/Mobile/mock-2.jpg");
const _imports_14 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/pachu/Mobile/mock-1.jpg");
const _imports_15 = "" + __publicAssetsURL("dark/assets/imgs/portfolio-slider/pachu/Desktop/social-media.jpg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-metro section-padding pt-40" }, _attrs))} data-v-7bf25364><div class="container-xl" data-v-7bf25364><div class="row xxlg-marg justify-content-between" data-v-7bf25364><div class="col-lg-8 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Beru AI</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>MVP Desarrollo de Producto</a></p></div></div></div><div class="col-lg-4 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Redes Sociales</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Diseño de Post</a></p></div></div></div><div class="col-lg-4 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Redes Sociales</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Diseño de Post</a></p></div></div></div><div class="col-lg-8 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Diseño UI</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Desarrollo Web</a></p></div></div></div><div class="col-lg-8 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Diseño Logotipo</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Identidad Visual</a></p></div></div></div><div class="col-lg-4 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Diseños de Post</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Redes Sociales</a></p></div></div></div><div class="col-lg-4 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_6)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Diseños de Post</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Redes Sociales</a></p></div></div></div><div class="col-lg-8 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Papeleria Corporativa</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Identidad Visual</a></p></div></div></div><div class="col-lg-8 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_8)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Diseño Logotipo</a><a href="#" data-v-7bf25364>Diseños de Post</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Identidad Visual</a><a href="#" data-v-7bf25364>Redes Sociales</a></p></div></div></div><div class="col-lg-4 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_9)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Diseño Logotipo</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Identidad Visual</a></p></div></div></div><div class="col-lg-4 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_10)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Diseños de Post</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Redes Sociales</a></p></div></div></div><div class="col-lg-8 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_11)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Papeleria Corporativa</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Identidad Visual</a></p></div></div></div><div class="col-lg-8 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_12)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Diseño Ploteable</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Identidad Visual</a></p></div></div></div></div><div class="col-lg-4 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_13)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Diseño de Carteleria</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Identidad Visual</a></p></div></div></div><div class="col-lg-4 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_14)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Diseños de Papeleria</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Identidad Visual</a></p></div></div></div><div class="col-lg-8 col-md-6" data-v-7bf25364><div class="item mt-140" data-v-7bf25364><div class="img" data-v-7bf25364><img${ssrRenderAttr("src", _imports_15)} alt="" data-v-7bf25364></div><div class="cont d-flex align-items-center mt-20" data-v-7bf25364><h5 class="fz-22" data-v-7bf25364><a href="#" data-v-7bf25364>Diseños de Post</a></h5><p class="ml-auto" data-v-7bf25364><a href="#" data-v-7bf25364>Redes Sociales</a></p></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/portfolio-metro/Portfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Portfolio = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7bf25364"]]);
const _sfc_main = {
  __name: "works",
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
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(Navbar), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Portfolio), null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home/works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=works-TND5y3EE.js.map
