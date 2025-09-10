import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$6 } from "./Footer-DLrBKTQx.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, L as Lines } from "./loader-CbuutFIZ.js";
import { _ as _sfc_main$5 } from "./Navbar-DP9J-Bvz.js";
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
const _imports_0 = "" + __publicAssetsURL("dark/assets/imgs/404.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header page-header-error section-padding valign" }, _attrs))}><div class="container"><div class="text-center"><div class="row justify-content-center"><div class="col-lg-5"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="text mt-40"><h2 class="mb-10">Page not found</h2><p>Sorry, but the page you are looking for does not exist.</p><a href="/dark/home-main" class="butn butn-md butn-bg main-colorbg text-dark radius-30 mt-30"><span class="text">Back to Home</span></a></div></div></div></div></div><div class="main-marq"><div class="slide-har st1"><div class="box"><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div></div><div class="box"><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div><div class="item"><h4 class="d-flex align-items-center fw-800"><span>Error 404</span></h4></div></div></div></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/error404/Error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Error = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "page-error404",
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
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(Error), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/old/dark/page-error404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=page-error404-CvDiwWUz.js.map
