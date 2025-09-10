import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, L as Lines, N as Navbar, F as Footer } from "./Navbar-C3Ganfut.js";
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
const _sfc_main$2 = {
  __name: "PortfolioHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header-cerv bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/2.jpg",
        "data-overlay-dark": "4"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1 class="fz-100">Our Magic</h1><div class="mt-15"><a href="/">Home</a><span class="padding-rl-20">|</span><span class="main-color">Works</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/portfolio-metro/PortfolioHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "" + __publicAssetsURL("dark/assets/imgs/works/stand/1.jpg");
const _imports_1 = "" + __publicAssetsURL("dark/assets/imgs/works/stand/2.jpg");
const _imports_2 = "" + __publicAssetsURL("dark/assets/imgs/works/stand/3.jpg");
const _imports_3 = "" + __publicAssetsURL("dark/assets/imgs/works/stand/4.jpg");
const _imports_4 = "" + __publicAssetsURL("dark/assets/imgs/works/stand/5.jpg");
const _imports_5 = "" + __publicAssetsURL("dark/assets/imgs/works/stand/6.jpg");
const _imports_6 = "" + __publicAssetsURL("dark/assets/imgs/works/stand/7.jpg");
const _imports_7 = "" + __publicAssetsURL("dark/assets/imgs/works/stand/8.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-metro section-padding pt-40 sub-bg" }, _attrs))}><div class="container-xl"><div class="row xxlg-marg justify-content-between"><div class="col-lg-8 col-md-6"><div class="item mt-140"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="cont d-flex align-items-center mt-20"><h5 class="fz-22"><a href="#">Aevoe</a></h5><p class="ml-auto"><a href="#">Branding</a></p></div></div></div><div class="col-lg-4 col-md-6"><div class="item mt-140"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="cont d-flex align-items-center mt-20"><h5 class="fz-22"><a href="#">Digital Design</a></h5><p class="ml-auto"><a href="#">Branding</a></p></div></div></div><div class="col-lg-4 col-md-6"><div class="item mt-140"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="cont d-flex align-items-center mt-20"><h5 class="fz-22"><a href="#">Nice guy</a></h5><p class="ml-auto"><a href="#">Photography</a></p></div></div></div><div class="col-lg-8 col-md-6"><div class="item mt-140"><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="cont d-flex align-items-center mt-20"><h5 class="fz-22"><a href="#">Digital Design</a></h5><p class="ml-auto"><a href="#">Branding</a></p></div></div></div><div class="col-lg-8 col-md-6"><div class="item mt-140"><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="cont d-flex align-items-center mt-20"><h5 class="fz-22"><a href="#">Digital Design</a></h5><p class="ml-auto"><a href="#">Branding</a></p></div></div></div><div class="col-lg-4 col-md-6"><div class="item mt-140"><div class="img"><img${ssrRenderAttr("src", _imports_5)} alt=""></div><div class="cont d-flex align-items-center mt-20"><h5 class="fz-22"><a href="#">Digital Design</a></h5><p class="ml-auto"><a href="#">Branding</a></p></div></div></div><div class="col-lg-4 col-md-6"><div class="item mt-140"><div class="img"><img${ssrRenderAttr("src", _imports_6)} alt=""></div><div class="cont d-flex align-items-center mt-20"><h5 class="fz-22"><a href="#">Digital Design</a></h5><p class="ml-auto"><a href="#">Branding</a></p></div></div></div><div class="col-lg-8 col-md-6"><div class="item mt-140"><div class="img"><img${ssrRenderAttr("src", _imports_7)} alt=""></div><div class="cont d-flex align-items-center mt-20"><h5 class="fz-22"><a href="#">Digital Design</a></h5><p class="ml-auto"><a href="#">Branding</a></p></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/portfolio-metro/Portfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Portfolio = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
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
//# sourceMappingURL=works-C2JAyXqj.js.map
