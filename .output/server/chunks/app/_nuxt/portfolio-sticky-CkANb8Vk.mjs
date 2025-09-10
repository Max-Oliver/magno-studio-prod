import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$3, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines } from './loader-CCDLJnCr.mjs';
import { _ as _sfc_main$4 } from './Navbar-PkxgO9SJ.mjs';
import { _ as _imports_0, a as _imports_2, b as _imports_3 } from './5-BU85YE7z.mjs';
import { _ as _imports_1 } from './arrow-right-6v-aF8S3.mjs';
import { _ as _imports_4 } from './7-BJOPMlBN.mjs';
import { _ as _sfc_main$5 } from './Footer-HHcXPl2n.mjs';
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

const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header bg-img section-padding",
        "data-background": "/light/assets/imgs/header/bg1.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1>Portfolio Sticky.</h1><div class="mt-15"><a href="/light/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Portfolio</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/portfolio-sticky/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-sticky section-padding pt-60 sub-bg" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-8 items"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-lg-4 items"><div class="cont"><div class="sticky-item"><h6 class="sub-title opacity-7 mb-10">Branding</h6><h5 class="mb-15">Aevoe Brand</h5><p> we have been using graphic design and websites to bring brands to life. </p><a href="/light/project6" class="rmore mt-30"><span class="sub-title">View Project</span><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon-img-20 ml-5"></a></div></div></div><div class="col-lg-4 items"><div class="cont"><div class="sticky-item"><h6 class="sub-title opacity-7 mb-10">Photography</h6><h5 class="mb-15">Nice guy</h5><p> we have been using graphic design and websites to bring brands to life. </p><a href="/light/project6" class="rmore mt-30"><span class="sub-title">View Project</span><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon-img-20 ml-5"></a></div></div></div><div class="col-lg-8 items"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div><div class="col-lg-8 items"><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div></div><div class="col-lg-4 items"><div class="cont"><div class="sticky-item"><h6 class="sub-title opacity-7 mb-10">Branding</h6><h5 class="mb-15">Digital Design</h5><p> we have been using graphic design and websites to bring brands to life. </p><a href="/light/project6" class="rmore mt-30"><span class="sub-title">View Project</span><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon-img-20 ml-5"></a></div></div></div><div class="col-lg-4 items"><div class="cont"><div class="sticky-item"><h6 class="sub-title opacity-7 mb-10">Branding</h6><h5 class="mb-15">Digital Design</h5><p> we have been using graphic design and websites to bring brands to life. </p><a href="/light/project6" class="rmore mt-30"><span class="sub-title">View Project</span><img${ssrRenderAttr("src", _imports_1)} alt="" class="icon-img-20 ml-5"></a></div></div></div><div class="col-lg-8 items"><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/portfolio-sticky/Portfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Portfolio = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "portfolio-sticky",
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
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Portfolio), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/old/light/portfolio-sticky.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=portfolio-sticky-CkANb8Vk.mjs.map
