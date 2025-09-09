import { u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { a as _sfc_main$1, b as _sfc_main$2, c as _sfc_main$3, L as Lines } from "./loader-jCTjqXsl.js";
import { _ as _sfc_main$4 } from "./Navbar-s8ZtskbF.js";
import { _ as _sfc_main$5 } from "./Header-BcwWVYEG.js";
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
import "./swiper-slide-Dn_WuJYw.js";
import "ssr-window";
import "dom7";
import "./thumbs-CKJP-nvG.js";
import "./mousewheel-CagCHlsm.js";
import "./navigation-nPzHIgEI.js";
import "./pagination-AbguOEcP.js";
const _sfc_main = {
  __name: "showcase-half-slider",
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
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/showcase-half-slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=showcase-half-slider-DiseF486.js.map
