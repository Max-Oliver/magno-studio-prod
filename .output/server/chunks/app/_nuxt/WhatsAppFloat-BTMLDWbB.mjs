import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps, defineComponent, computed, ref, unref, onUnmounted } from 'vue';
import { ssrRenderAttrs, ssrRenderTeleport, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useI18n, b as useRuntimeConfig } from '../server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { MessageCircle } from 'lucide-vue-next';

const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/logo-light.png");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "footer",
        "aria-labelledby": "footer-heading"
      }, _attrs))} data-v-601017cf><div class="footer__overlay" data-v-601017cf></div><div class="footer__container" data-v-601017cf><div class="sec-head" data-v-601017cf><h6 class="sub-title main-color mb-25" data-v-601017cf>${ssrInterpolate(unref(t)("footer.cta_subtitle"))}</h6><div class="bord pt-10 bord-thin-top d-flex align-items-center" data-v-601017cf></div></div><div class="footer__cta" data-v-601017cf><h2 id="footer-heading" class="footer__title" data-v-601017cf><a href="/home/contact" class="footer__titleLink" data-v-601017cf><span data-v-601017cf>${ssrInterpolate(unref(t)("footer.cta_title"))}</span><span class="fz-70 ti-arrow-top-right" data-v-601017cf></span></a></h2></div><div class="footer__grid" data-v-601017cf><div data-v-601017cf><img${ssrRenderAttr("src", _imports_0)} alt="Magno Studio" class="footer__logo" data-v-601017cf></div><div data-v-601017cf><h6 class="footer__label" data-v-601017cf>${ssrInterpolate(unref(t)("footer.address_label"))}</h6><address class="footer__address" data-v-601017cf>${ssrInterpolate(unref(t)("footer.address_line1"))}<br data-v-601017cf>${ssrInterpolate(unref(t)("footer.address_line2"))}</address></div><nav${ssrRenderAttr("aria-label", unref(t)("footer.aria_primary"))} data-v-601017cf><ul class="menu-col" data-v-601017cf><li data-v-601017cf><a class="u-underline is-active" href="/" data-v-601017cf>${ssrInterpolate(unref(t)("links.home"))}</a></li><li data-v-601017cf><a class="u-underline" href="/home/works" data-v-601017cf>${ssrInterpolate(unref(t)("links.work"))}</a></li><li data-v-601017cf><a class="u-underline" href="/home/contact" data-v-601017cf>${ssrInterpolate(unref(t)("links.contact"))}</a></li></ul></nav><nav${ssrRenderAttr("aria-label", unref(t)("footer.aria_social"))} data-v-601017cf><ul class="menu-col" data-v-601017cf><li data-v-601017cf><a class="u-underline" href="https://www.instagram.com/magnocreativee/" target="_blank" rel="noreferrer" data-v-601017cf>${ssrInterpolate(unref(t)("social.instagram"))}</a></li><li data-v-601017cf><a class="u-underline" href="https://behance.net/magnocreativee" target="_blank" rel="noreferrer" data-v-601017cf>${ssrInterpolate(unref(t)("social.behance"))}</a></li></ul></nav></div></div></footer>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Footer.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-601017cf"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lines" }, _attrs))}><span></span><span></span><span></span><span></span><span></span></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/common/Lines.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Lines = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = {
  __name: "ProgressScroll",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "progress-wrap cursor-pointer" }, _attrs))}><svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102"><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path></svg></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/common/ProgressScroll.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "cusor",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor" }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/common/cusor.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "loader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader-wrap" }, _attrs))}><svg viewBox="0 0 1000 1000" preserveAspectRatio="none"><path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path></svg><div class="loader-wrap-heading"><span><h2 class="load-text"><span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span></h2></span></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/common/loader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
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
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    number: {},
    text: {}
  },
  setup(__props) {
    const { current, setLocale, t } = useI18n();
    setLocale("es");
    const props = __props;
    const { buildUrl } = useWhatsapp();
    const whatsappUrl = computed(() => buildUrl(props.number, props.text));
    function handleScroll() {
      const bodyScroll = (void 0).scrollY;
      const navbar = (void 0).querySelector(".navbar");
      if (bodyScroll > 300)
        navbar == null ? void 0 : navbar.classList.add("nav-scroll");
      else
        navbar == null ? void 0 : navbar.classList.remove("nav-scroll");
    }
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleScroll);
    });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="navbar navbar-expand-lg bord blur" data-v-5d661a5d><div class="container" data-v-5d661a5d><a class="logo icon-img-100" href="#" data-v-5d661a5d><img${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-5d661a5d></a><div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" data-v-5d661a5d><ul class="navbar-nav" data-v-5d661a5d><li class="nav-item dropdown" data-v-5d661a5d><a class="nav-link" href="/" role="button" aria-haspopup="true" aria-expanded="false" data-v-5d661a5d><span class="rolling-text" data-v-5d661a5d>${ssrInterpolate(unref(t)("nav.home"))}</span></a></li><li class="nav-item dropdown" data-v-5d661a5d><a class="nav-link" href="/home/works" role="button" aria-haspopup="true" aria-expanded="false" data-v-5d661a5d><span class="rolling-text" data-v-5d661a5d>${ssrInterpolate(unref(t)("nav.works"))}</span></a></li><li class="nav-item" data-v-5d661a5d><a class="nav-link" href="/home/contact" data-v-5d661a5d><span class="rolling-text" data-v-5d661a5d>${ssrInterpolate(unref(t)("nav.connect"))}</span></a></li></ul></div><div class="topnav flex items-center gap-1" data-v-5d661a5d><div class="menu-icon cursor-pointer" data-v-5d661a5d><span class="icon ti-align-right" data-v-5d661a5d></span></div></div></div></nav><div class="${ssrRenderClass(`hamenu ${isOpen.value && "open"}`)}" data-v-5d661a5d><div class="logo icon-img-100" data-v-5d661a5d><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-5d661a5d></div><div class="close-menu cursor-pointer ti-close" data-v-5d661a5d></div><div class="container" data-v-5d661a5d><div class="row" data-v-5d661a5d><div class="col-lg-2" data-v-5d661a5d><div class="menu-text" data-v-5d661a5d><div class="text" data-v-5d661a5d><h2 data-v-5d661a5d>Menu</h2></div></div></div><div class="col-lg-7" data-v-5d661a5d><div class="menu-links" data-v-5d661a5d><ul class="main-menu rest" data-v-5d661a5d><li data-v-5d661a5d><div class="o-hidden" data-v-5d661a5d><div class="link cursor-pointer dmenu" data-v-5d661a5d><a href="/" class="sub-link" data-v-5d661a5d><span class="fill-text"${ssrRenderAttr("data-text", unref(t)("nav.home"))} data-v-5d661a5d>${ssrInterpolate(unref(t)("nav.home"))}</span><i data-v-5d661a5d></i></a></div></div></li><li data-v-5d661a5d><div class="o-hidden" data-v-5d661a5d><div class="link cursor-pointer dmenu" data-v-5d661a5d><a href="/home/works" class="sub-link" data-v-5d661a5d><span class="fill-text"${ssrRenderAttr("data-text", unref(t)("nav.works"))} data-v-5d661a5d>${ssrInterpolate(unref(t)("nav.works"))}</span><i data-v-5d661a5d></i></a></div></div></li><li data-v-5d661a5d><div class="o-hidden" data-v-5d661a5d><a href="/home/contact" class="link" data-v-5d661a5d><span class="fill-text"${ssrRenderAttr("data-text", unref(t)("nav.connect"))} data-v-5d661a5d>${ssrInterpolate(unref(t)("nav.connect"))}</span></a></div></li></ul></div></div><div class="col-lg-3" data-v-5d661a5d><div class="cont-info" data-v-5d661a5d><div class="item mb-50" data-v-5d661a5d><h6 class="sub-title mb-15 opacity-7" data-v-5d661a5d>${ssrInterpolate(unref(t)("nav.address"))}</h6><h5 data-v-5d661a5d> Miami Boulebard 2, <br data-v-5d661a5d> Punta del Este, Uruguay </h5></div><div class="item mb-50" data-v-5d661a5d><h6 class="sub-title mb-15 opacity-7" data-v-5d661a5d>${ssrInterpolate(unref(t)("nav.social"))}</h6><ul class="rest social-text" data-v-5d661a5d><li data-v-5d661a5d><i class="fab fa-instagram mr-10" data-v-5d661a5d></i><a href="https://instagram.com/magnocreative" class="hover-this" data-v-5d661a5d><span class="hover-anim" data-v-5d661a5d>Instagram</span></a></li><li class="mb-10" data-v-5d661a5d><i class="fab fa-behance mr-10" data-v-5d661a5d></i><a href="https://behance.net/magnocreative" class="hover-this" data-v-5d661a5d><span class="hover-anim" data-v-5d661a5d>Behance</span></a></li></ul></div><div class="item mb-40" data-v-5d661a5d><h6 class="sub-title mb-15 opacity-7" data-v-5d661a5d>${ssrInterpolate(unref(t)("nav.connect"))}</h6><h5 data-v-5d661a5d><i class="fa fa-envelope mr-10" aria-hidden="true" data-v-5d661a5d></i><a href="/home/contact" data-v-5d661a5d>hello@magnocreative.es</a></h5><h5 class="underline mt-10" data-v-5d661a5d><i class="fab fa-whatsapp mr-10" data-v-5d661a5d></i><a${ssrRenderAttr("href", whatsappUrl.value)} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" data-v-5d661a5d> WhatsApp! </a></h5></div></div></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5d661a5d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WhatsAppFloat",
  __ssrInlineRender: true,
  props: {
    number: {},
    text: {},
    bottom: { default: 85 },
    right: { default: 25 },
    left: { default: void 0 },
    bgClass: { default: "bg-green-500 text-black hover:bg-green-600" },
    zIndex: { default: 2147483e3 },
    hideOnSelector: { default: "#contacto" }
  },
  setup(__props) {
    const props = __props;
    const { buildUrl } = useWhatsapp();
    const whatsappUrl = computed(() => buildUrl(props.number, props.text));
    const isVisible = ref(true);
    const styleOffsets = computed(() => {
      const bottom = `calc(env(safe-area-inset-bottom, 0px) + ${props.bottom}px)`;
      const right = props.left == null ? `calc(env(safe-area-inset-right, 0px) + ${props.right}px)` : void 0;
      const left = props.left != null ? `calc(env(safe-area-inset-left, 0px) + ${props.left}px)` : void 0;
      return {
        position: "fixed",
        // variables que podremos overridear en media query
        "--fab-bottom": bottom,
        "--fab-right": right,
        "--fab-left": left,
        bottom: "var(--fab-bottom)",
        right: "var(--fab-right)",
        left: "var(--fab-left)",
        zIndex: String(props.zIndex)
      };
    });
    const bgClass = computed(() => props.bgClass);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<a${ssrRenderAttr("href", whatsappUrl.value)} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" class="${ssrRenderClass([bgClass.value, "whatsapp-fab fixed transition-transform duration-300 hover:scale-110"])}" style="${ssrRenderStyle(styleOffsets.value)}"${ssrRenderAttr("data-visible", isVisible.value)}>`);
        _push2(ssrRenderComponent(unref(MessageCircle), { size: 28 }, null, _parent));
        _push2(`</a>`);
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/WhatsAppFloat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { Footer as F, Lines as L, Navbar as N, _sfc_main$2 as _, _sfc_main$3 as a, _sfc_main$4 as b, _sfc_main as c, useWhatsapp as u };
//# sourceMappingURL=WhatsAppFloat-BTMLDWbB.mjs.map
