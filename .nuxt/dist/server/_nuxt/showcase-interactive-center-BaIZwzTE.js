import { u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { mergeProps, unref, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { a as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, L as Lines } from "./loader-CCDLJnCr.js";
import { _ as _sfc_main$5 } from "./Navbar-PkxgO9SJ.js";
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
const data = [
  {
    img: "/light/assets/imgs/works/full/1.jpg",
    link: "/light/project1",
    title: "Avocado Cutter",
    subTitle: "Digital Design"
  },
  {
    img: "/light/assets/imgs/works/full/2.jpg",
    link: "/light/project2",
    title: "The joy of music",
    subTitle: "Branding"
  },
  {
    img: "/light/assets/imgs/works/full/3.jpg",
    link: "/light/project3",
    title: "Bank Rebranding",
    subTitle: "Branding"
  },
  {
    img: "/light/assets/imgs/works/full/5.jpg",
    link: "/light/project5",
    title: "Carved Wood",
    subTitle: "Product Design"
  },
  {
    img: "/light/assets/imgs/works/full/6.jpg",
    link: "/light/project4",
    title: "Blom Air purifier",
    subTitle: "Digital Art"
  }
];
const _sfc_main$1 = {
  __name: "Interactive",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "interactive-center" }, _attrs))}><div class="container text-center"><!--[-->`);
      ssrRenderList(unref(data), (item, i) => {
        _push(`<div class="item-d item block" data-fx="1"><a${ssrRenderAttr("href", item.link)} class="block__link"><div class="hover-i"><img${ssrRenderAttr("src", item.img)} alt="" class="item-im"></div><div class="cont"><h4 class="f-bold">${ssrInterpolate(item.title)}</h4><p>${ssrInterpolate(item.subTitle)}</p></div></a></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/showcase-interactive-center/Interactive.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "showcase-interactive-center",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/showcase-interactive-center.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=showcase-interactive-center-BaIZwzTE.js.map
