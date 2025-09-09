import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$8 } from "./Footer-HHcXPl2n.js";
import { a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, L as Lines } from "./loader-CCDLJnCr.js";
import { _ as _sfc_main$6 } from "./Navbar-PkxgO9SJ.js";
import { _ as _sfc_main$7 } from "./Next-fe2lfVpA.js";
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
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-project6 section-padding" }, _attrs))}><div class="container-xl"><div class="info d-flex align-items-center mb-10"><div><span class="category">Apps</span><span class="category">Design</span></div><div class="date">August 7, 2023</div></div><h1 class="fz-80">TH3 Web Design</h1></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/project6/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + __publicAssetsURL("light/assets/imgs/works/projects/4/1.jpg");
const _imports_1 = "" + __publicAssetsURL("light/assets/imgs/works/projects/4/2.jpg");
const _imports_2 = "" + __publicAssetsURL("light/assets/imgs/works/projects/4/3.jpg");
const _sfc_main$1 = {
  __name: "Works",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-padding pt-0" }, _attrs))}><div class="container-xl"><div class="row lg-marg"><div class="col-lg-6"><div class="imgs md-mb80"><div class="mb-30"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="mb-30"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div></div><div class="col-lg-6"><div class="sticky_item"><div class="text"><h2 class="mb-30">The Challenge</h2><h5 class="mb-30 line-height-40"> The goal is there are many variations of passages of but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. </h5><p class="fz-18"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. </p></div><div class="info pt-80 mt-80 bord-thin-top"><div class="row"><div class="col-md-6"><div class="item mb-30"><span class="opacity-8 mb-5">Category :</span><h6>Development</h6></div></div><div class="col-md-6"><div class="item mb-30"><span class="opacity-8 mb-5">Client :</span><h6>Envato</h6></div></div><div class="col-md-6"><div class="item mb-30"><span class="opacity-8 mb-5">Start Date :</span><h6>7 August 2021</h6></div></div><div class="col-md-6"><div class="item"><span class="opacity-8 mb-5">Designer :</span><h6>UiCamp</h6></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/project6/Works.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "project6",
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
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(Header), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$8), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/project6.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=project6-BCcOv9lJ.js.map
