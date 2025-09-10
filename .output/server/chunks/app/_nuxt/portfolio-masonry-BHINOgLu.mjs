import { u as useHead } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$3, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines } from './loader-CCDLJnCr.mjs';
import { _ as _sfc_main$4 } from './Navbar-PkxgO9SJ.mjs';
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3, d as _imports_4, e as _imports_5, f as _imports_6, g as _imports_7 } from './h4-BIfHyAMt.mjs';
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
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "header page-header bg-img section-padding",
        "data-background": "/light/assets/imgs/header/bg1.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1>Portfolio Masonry.</h1><div class="mt-15"><a href="/light/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Portfolio</span></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/portfolio-masonry/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-minimal section-padding sub-bg" }, _attrs))}><div class="container-xxl"><div class="row"><div class="filtering col-12 mb-50 text-center"><div class="filter"><span class="text">Filter By :</span><span data-filter="*" class="active"> Show All </span><span data-filter=".art">Art</span><span data-filter=".brand">Branding</span><span data-filter=".design">Design</span><span data-filter=".marketing">Marketing</span></div></div></div><div class="gallery2 row sm-marg"><div class="col-lg-6 items design brand"><div class="item mt-10"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""><div class="cont inline d-flex align-items-center"><div><h5><a href="/light/project3">Nice guy with a smile</a></h5></div><div class="ml-auto"><p><a href="/light/portfolio-standard">Graphic Designing</a></p></div></div></div></div></div><div class="col-lg-3 items width2 brand marketing"><div class="item mt-10"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""><div class="cont"><h5><a href="/light/project3">A Nice guy</a></h5><p><a href="/light/portfolio-standard">Graphic Design</a></p></div></div></div></div><div class="col-lg-3 items width2 art design"><div class="item mt-10"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""><div class="cont"><h5><a href="/light/project3">A Nice guy</a></h5><p><a href="/light/portfolio-standard">Graphic Design</a></p></div></div></div></div><div class="col-lg-3 items width2 brand"><div class="item mt-10"><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""><div class="cont"><h5><a href="/light/project3">A Nice guy</a></h5><p><a href="/light/portfolio-standard">Graphic Design</a></p></div></div></div></div><div class="col-lg-3 items width2 design"><div class="item mt-10"><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""><div class="cont"><h5><a href="/light/project3">A Nice guy</a></h5><p><a href="/light/portfolio-standard">Graphic Design</a></p></div></div></div></div><div class="col-lg-6 items art marketing"><div class="item mt-10"><div class="img"><img${ssrRenderAttr("src", _imports_5)} alt=""><div class="cont inline d-flex align-items-center"><div><h5><a href="/light/project3">Nice guy with a smile</a></h5></div><div class="ml-auto"><p><a href="/light/portfolio-standard">Graphic Designing</a></p></div></div></div></div></div><div class="col-lg-6 items design marketing"><div class="item mt-10"><div class="img"><img${ssrRenderAttr("src", _imports_6)} alt=""><div class="cont inline d-flex align-items-center"><div><h5><a href="/light/project3">Nice guy with a smile</a></h5></div><div class="ml-auto"><p><a href="/light/portfolio-standard">Graphic Designing</a></p></div></div></div></div></div><div class="col-lg-6 items"><div class="item mt-10"><div class="img"><img${ssrRenderAttr("src", _imports_7)} alt=""><div class="cont inline d-flex align-items-center"><div><h5><a href="/light/project3">Nice guy with a smile</a></h5></div><div class="ml-auto"><p><a href="/light/portfolio-standard">Graphic Designing</a></p></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/portfolio-masonry/Portfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "portfolio-masonry",
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
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/old/light/portfolio-masonry.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=portfolio-masonry-BHINOgLu.mjs.map
