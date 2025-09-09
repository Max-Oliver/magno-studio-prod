import { u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { mergeProps, useSSRContext, resolveComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { a as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, L as Lines } from "./loader-jCTjqXsl.js";
import { _ as _sfc_main$5 } from "./Navbar-s8ZtskbF.js";
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3, d as _imports_4, e as _imports_5, f as _imports_6, g as _imports_7, h as _imports_8 } from "./9-BZgkfcQ_.js";
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
const _sfc_main$1 = {
  __name: "Interactive",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "inter-links-center section-padding" }, _attrs))}><div class="container-xxl"><div class="row"><div class="col-12 d-flex align-items-center"><div class="links-text"><ul class="rest"><li data-tab="tab-1"><h2 class="fz-80"><span class="num">01.</span><a href="/dark/project1"><span class="text f-bold">Digital Retouch</span></a></h2></li><li data-tab="tab-2"><h2 class="fz-80"><span class="num">02.</span><a href="/dark/project2"><span class="text f-bold">Earthmade Aroma</span></a></h2></li><li data-tab="tab-3"><h2 class="fz-80"><span class="num">03.</span><a href="/dark/project3"><span class="text f-bold">Bank Rebranding</span></a></h2></li><li data-tab="tab-4"><h2 class="fz-80"><span class="num">04.</span><a href="/dark/project4"><span class="text f-bold">Day Starter</span></a></h2></li><li data-tab="tab-5"><h2 class="fz-80"><span class="num">05.</span><a href="/dark/project5"><span class="text f-bold">Blue Adobe MAX</span></a></h2></li><li data-tab="tab-6"><h2 class="fz-80"><span class="num">06.</span><a href="/dark/project6"><span class="text f-bold">Carved Wood</span></a></h2></li><li data-tab="tab-7"><h2 class="fz-80"><span class="num">07.</span><a href="/dark/project3"><span class="text f-bold">Viclone</span></a></h2></li><li data-tab="tab-8"><h2 class="fz-80"><span class="num">08.</span><a href="/dark/project4"><span class="text f-bold">Blom Air Purifier</span></a></h2></li><li data-tab="tab-9"><h2 class="fz-80"><span class="num">09.</span><a href="/dark/project5"><span class="text f-bold">Avocado Cutter</span></a></h2></li></ul></div></div></div></div><div class="links-img"><div class="img" id="tab-1" data-overlay-dark="3"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="img" id="tab-2" data-overlay-dark="3"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="img" id="tab-3" data-overlay-dark="3"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="img" id="tab-4" data-overlay-dark="3"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="img" id="tab-5" data-overlay-dark="3"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="img" id="tab-6" data-overlay-dark="3"><img${ssrRenderAttr("src", _imports_5)} alt=""></div><div class="img" id="tab-7" data-overlay-dark="3"><img${ssrRenderAttr("src", _imports_6)} alt=""></div><div class="img" id="tab-8" data-overlay-dark="3"><img${ssrRenderAttr("src", _imports_7)} alt=""></div><div class="img" id="tab-9" data-overlay-dark="3"><img${ssrRenderAttr("src", _imports_8)} alt=""></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/interactive-full/Interactive.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "showcase-interactive-full",
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
      const _component_Header = resolveComponent("Header");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/showcase-interactive-full.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=showcase-interactive-full-CUDygLSL.js.map
