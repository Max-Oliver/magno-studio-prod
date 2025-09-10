import { u as useHead } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { useSSRContext, unref, defineComponent, computed } from 'vue';
import { ssrRenderComponent, ssrRenderTeleport, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines } from './loader-CbuutFIZ.mjs';
import { _ as _sfc_main$5, a as _sfc_main$4, b as _sfc_main$2$2, c as _sfc_main$1$2, M as Marquee, d as _sfc_main$6, e as _sfc_main$6$1 } from './Team-DRKPaMIn.mjs';
import { F as Footer } from './Footer-D7Ud-kLX.mjs';
import { _ as _sfc_main$3 } from './Header-BcwWVYEG.mjs';
import { MessageCircle } from 'lucide-vue-next';
import { a as useRuntimeConfig } from '../server.mjs';
import { N as Navbar } from './Navbar-BiS-uGPY.mjs';
import '@unhead/shared';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import './swiper-slide-Dn_WuJYw.mjs';
import 'ssr-window';
import 'dom7';
import './team-D6p_iKBL.mjs';
import './thumbs-CKJP-nvG.mjs';
import './mousewheel-CagCHlsm.mjs';
import './navigation-nPzHIgEI.mjs';
import './pagination-AbguOEcP.mjs';
import 'vue-router';

const useWhatsapp = () => {
  const config = useRuntimeConfig();
  const sanitize = (val) => (val || "").replace(/\D/g, "");
  const buildUrl = (number, text) => {
    const digits = sanitize(typeof number === "string" ? number : String(config.public.whatsappNumber || ""));
    const base = `https://wa.me/${digits}`;
    const querySource = typeof text === "string" ? text : typeof config.public.whatsappText === "string" ? config.public.whatsappText : "";
    const query = (querySource || "").trim();
    return query ? `${base}?text=${encodeURIComponent(query)}` : base;
  };
  return { buildUrl };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WhatsAppFloat",
  __ssrInlineRender: true,
  props: {
    number: {},
    text: {},
    bottom: { default: 85 },
    right: { default: 25 },
    left: { default: void 0 },
    bgClass: { default: "bg-green-500 hover:bg-green-600" }
  },
  setup(__props) {
    const props = __props;
    const { buildUrl } = useWhatsapp();
    const whatsappUrl = computed(() => buildUrl(props.number, props.text));
    const styleOffsets = computed(() => {
      const bottom = `calc(env(safe-area-inset-bottom, 0px) + ${props.bottom}px)`;
      const horizontal = (val) => val != null ? `${val}px` : void 0;
      return {
        position: "fixed",
        bottom,
        right: props.left == null ? horizontal(props.right) : void 0,
        left: props.left != null ? horizontal(props.left) : void 0
      };
    });
    const bgClass = computed(() => props.bgClass);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<a${ssrRenderAttr("href", whatsappUrl.value)} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" class="${ssrRenderClass([bgClass.value, "fixed z-[100000] transition-transform duration-300 hover:scale-110 whatsapp-fab"])}" style="${ssrRenderStyle(styleOffsets.value)}">`);
        _push2(ssrRenderComponent(unref(MessageCircle), { size: 28 }, null, _parent));
        _push2(`</a>`);
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/WhatsAppFloat.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/dark/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/dark/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/dark/assets/css/style.css" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(ssrRenderComponent(unref(Navbar), null, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><main class="main-bg o-hidden">`);
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Marquee), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), { debug: true }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C8Np9wf0.mjs.map
