import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { useSSRContext, unref, defineComponent, computed, onUnmounted, ref } from 'vue';
import { ssrRenderComponent, ssrRenderTeleport, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$3, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines, c as _imports_0 } from './loader-jCTjqXsl.mjs';
import { _ as _sfc_main$5, a as _sfc_main$4, b as _sfc_main$2$2, c as _sfc_main$1$2, M as Marquee, d as _sfc_main$7, e as _sfc_main$7$1, F as Footer } from './Team-loB0aZZX.mjs';
import { _ as _sfc_main$6 } from './Header-BcwWVYEG.mjs';
import { MessageCircle } from 'lucide-vue-next';
import { d as useI18n, a as useRuntimeConfig } from '../server.mjs';
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/WhatsAppFloat.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { current, setLocale, t } = useI18n();
    function handleScroll() {
      const bodyScroll = (void 0).scrollY;
      const navbar = (void 0).querySelector(".navbar");
      if (bodyScroll > 300)
        navbar.classList.add("nav-scroll");
      else
        navbar.classList.remove("nav-scroll");
    }
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleScroll);
    });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="navbar navbar-expand-lg bord blur" data-v-bd27e410><div class="container" data-v-bd27e410><a class="logo icon-img-100" href="#" data-v-bd27e410><img${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-bd27e410></a><div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" data-v-bd27e410><ul class="navbar-nav" data-v-bd27e410><li class="nav-item dropdown" data-v-bd27e410><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/dark/home/home" role="button" aria-haspopup="true" aria-expanded="false" data-v-bd27e410><span class="rolling-text" data-v-bd27e410>${ssrInterpolate(unref(t)("nav.home"))}</span></a></li><li class="nav-item dropdown" data-v-bd27e410><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/dark/home/works" role="button" aria-haspopup="true" aria-expanded="false" data-v-bd27e410><span class="rolling-text" data-v-bd27e410>${ssrInterpolate(unref(t)("nav.works"))}</span></a></li><li class="nav-item" data-v-bd27e410><a class="nav-link" href="/dark/home/contact" data-v-bd27e410><span class="rolling-text" data-v-bd27e410>${ssrInterpolate(unref(t)("nav.connect"))}</span></a></li></ul></div><div class="topnav flex items-center gap-1" data-v-bd27e410><div class="lang-toggle mt-3 cursor-pointer gap-1"${ssrRenderAttr("aria-label", `Cambiar idioma a ${unref(current) === "es" ? "Ingl\xE9s" : "Espa\xF1ol"}`)} data-v-bd27e410><span class="${ssrRenderClass(["fi", unref(current) === "es" ? "fi-uy h-3" : "fi-us"])}" data-v-bd27e410></span><span class="text-xs rolling-text cursor-pointer" data-v-bd27e410>${ssrInterpolate(unref(current) === "es" ? "Esp" : "Eng")}</span></div><div class="menu-icon cursor-pointer" data-v-bd27e410><span class="icon ti-align-right" data-v-bd27e410></span></div></div></div></nav><div class="${ssrRenderClass(`hamenu ${isOpen.value && "open"}`)}" data-v-bd27e410><div class="logo icon-img-100" data-v-bd27e410><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-bd27e410></div><div class="close-menu cursor-pointer ti-close" data-v-bd27e410></div><div class="container" data-v-bd27e410><div class="row" data-v-bd27e410><div class="col-lg-2" data-v-bd27e410><div class="menu-text" data-v-bd27e410><div class="text" data-v-bd27e410><h2 data-v-bd27e410>Menu</h2></div></div></div><div class="col-lg-7" data-v-bd27e410><div class="menu-links" data-v-bd27e410><ul class="main-menu rest" data-v-bd27e410><li data-v-bd27e410><div class="o-hidden" data-v-bd27e410><div class="link cursor-pointer dmenu" data-v-bd27e410><a href="/dark/home/home" class="sub-link" data-v-bd27e410><span class="fill-text" data-text="Home" data-v-bd27e410> Home </span><i data-v-bd27e410></i></a></div></div></li><li data-v-bd27e410><div class="o-hidden" data-v-bd27e410><div class="link cursor-pointer dmenu" data-v-bd27e410><a href="/dark/home/works" class="sub-link" data-v-bd27e410><span class="fill-text" data-text="Works" data-v-bd27e410> Works </span><i data-v-bd27e410></i></a></div></div></li><li data-v-bd27e410><div class="o-hidden" data-v-bd27e410><a href="/dark/home/contact" class="link" data-v-bd27e410><span class="fill-text" data-text="Contact Us" data-v-bd27e410> Contact Us </span></a></div></li></ul></div></div><div class="col-lg-3" data-v-bd27e410><div class="cont-info" data-v-bd27e410><div class="item mb-50" data-v-bd27e410><h6 class="sub-title mb-15 opacity-7" data-v-bd27e410>Address</h6><h5 data-v-bd27e410> Miami Boulebard 2, <br data-v-bd27e410> Punta del Este, Uruguay </h5></div><div class="item mb-50" data-v-bd27e410><h6 class="sub-title mb-15 opacity-7" data-v-bd27e410>Social Media</h6><ul class="rest social-text" data-v-bd27e410><li data-v-bd27e410><a href="https://instagram.com/magnocreative" class="hover-this" data-v-bd27e410><span class="hover-anim" data-v-bd27e410>Instagram</span></a></li><li class="mb-10" data-v-bd27e410><a href="https://behance.net/magnocreative" class="hover-this" data-v-bd27e410><span class="hover-anim" data-v-bd27e410>Behance</span></a></li></ul></div><div class="item mb-40" data-v-bd27e410><h6 class="sub-title mb-15 opacity-7" data-v-bd27e410>Contact Us</h6><h5 data-v-bd27e410><a href="#0" data-v-bd27e410>hello@magnocreative.es</a></h5><h5 class="underline mt-10" data-v-bd27e410><a href="#0" data-v-bd27e410> WhatsApp!</a></h5></div></div></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bd27e410"]]);
const _sfc_main = {
  __name: "home",
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
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
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
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$7$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), { debug: true }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/home/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-CyoOn5B_.mjs.map
