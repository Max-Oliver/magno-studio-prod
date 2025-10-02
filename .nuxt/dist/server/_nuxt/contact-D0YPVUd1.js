import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { defineComponent, computed, reactive, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { u as useWhatsapp, _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6, L as Lines, N as Navbar, W as WhatsAppFloat, F as Footer } from "./WhatsAppFloat-CTnZKLQ4.js";
import { u as useI18n } from "../server.mjs";
import "@unhead/shared";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-brands-svg-icons";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  props: {
    number: {},
    text: {}
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const { buildUrl } = useWhatsapp();
    const whatsappUrl = computed(() => buildUrl(props.number, props.text));
    const form = reactive({
      name: "",
      email: "",
      subject: "",
      message: "",
      hp: ""
      // honeypot
    });
    const loading = ref(false);
    const status = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4 valign"><div class="sec-head info-box full-width md-mb80"><div class="phone fz-30 fw-600 underline main-color"><h5 class="underline mt-10"><i class="fab fa-whatsapp mr-10"></i><a${ssrRenderAttr("href", whatsappUrl.value)} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp"> WhatsApp! </a></h5></div><div class="morinfo mt-50 pb-30 bord-thin-bottom"><h6 class="mb-15">${ssrInterpolate(unref(t)("tab_contact.address_info.address"))}</h6><p> Miami Boulebard 2, <br> Punta del Este, Uruguay </p></div><div class="morinfo mt-30 pb-30 bord-thin-bottom"><h6 class="mb-15">${ssrInterpolate(unref(t)("tab_contact.address_info.email"))}</h6><p><i class="fa fa-envelope mr-10" aria-hidden="true"></i><a href="#">${ssrInterpolate(unref(t)("tab_contact.address_info.info_email"))}</a></p></div><div class="social-icon-circle mt-50"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-dribbble"></i></a><a href="#0"><i class="fab fa-behance"></i></a><a href="https://www.instagram.com/magnocreativee/"><i class="fab fa-instagram"></i></a></div></div></div><div class="col-lg-7 offset-lg-1 valign"><div class="full-width"><div class="sec-head mb-50"><h6 class="sub-title main-color mb-15">${ssrInterpolate(unref(t)("tab_contact.send_message_info.sub_title"))}</h6><h3 class="text-u ls1">${ssrInterpolate(unref(t)("tab_contact.send_message_info.title_a"))} <span class="fw-200">${ssrInterpolate(unref(t)("tab_contact.send_message_info.title_b"))}</span></h3></div><form class="form2"><input${ssrRenderAttr("value", form.hp)} type="text" autocomplete="off" tabindex="-1" style="${ssrRenderStyle({ "position": "absolute", "left": "-9999px", "opacity": "0", "height": "0", "width": "0" })}" aria-hidden="true"><div class="controls row"><div class="col-lg-6"><div class="form-group mb-30"><input${ssrRenderAttr("value", form.name)} type="text" name="name"${ssrRenderAttr("placeholder", unref(t)("tab_contact.send_message_info.name"))} required></div></div><div class="col-lg-6"><div class="form-group mb-30"><input${ssrRenderAttr("value", form.email)} type="email" name="email"${ssrRenderAttr("placeholder", unref(t)("tab_contact.send_message_info.email"))} required></div></div><div class="col-12"><div class="form-group mb-30"><input${ssrRenderAttr("value", form.subject)} type="text" name="subject"${ssrRenderAttr("placeholder", unref(t)("tab_contact.send_message_info.subject"))}></div></div><div class="col-12"><div class="form-group"><textarea name="message"${ssrRenderAttr("placeholder", unref(t)("tab_contact.send_message_info.message"))} rows="4" required>${ssrInterpolate(form.message)}</textarea></div>`);
      if (status.value) {
        _push(`<div class="mt-20">`);
        if (status.value === "ok") {
          _push(`<p class="text-green-500">¡Mensaje enviado! Te responderemos a la brevedad. </p>`);
        } else {
          _push(`<p class="text-red-500">Hubo un error. Intenta nuevamente.</p>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-30"><button type="submit" class="butn butn-full butn-bord radius-30"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""}><span class="text">${ssrInterpolate(loading.value ? unref(t)("enviando") : unref(t)("tab_contact.send_message_info.cta"))}</span></button></div></div></div></form></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/contact/Contact.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header-cerv bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/Header.jpg",
        "data-overlay-dark": "4"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1 class="fz-70">${ssrInterpolate(unref(t)("tab_contact.header.title"))}</h1><div class="mt-15"><a href="/">${ssrInterpolate(unref(t)("tab_contact.header.tab_a"))}</a><span class="padding-rl-20">|</span><span class="main-color">${ssrInterpolate(unref(t)("tab_contact.header.tab_b"))}</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/contact/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const address = "Miami Boulevard 2, Punta del Este, Uruguay";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Map",
  __ssrInlineRender: true,
  setup(__props) {
    const encodedAddress = encodeURIComponent(address);
    const mapSrc = `https://www.google.com/maps?hl=es&q=${encodedAddress}&z=16&output=embed`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "google-map",
        "aria-label": "Mapa de la oficina de Magno Studio"
      }, _attrs))} data-v-18ba3305><iframe id="gmap_canvas"${ssrRenderAttr("title", `Ubicación: ${address}`)}${ssrRenderAttr("src", mapSrc)} loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" data-v-18ba3305></iframe><noscript data-v-18ba3305><a${ssrRenderAttr("href", `https://www.google.com/maps?hl=es&q=${unref(encodedAddress)}&z=16`)} target="_blank" rel="noopener" data-v-18ba3305>Ver en Google Maps</a></noscript></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/contact/Map.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Map = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-18ba3305"]]);
const _sfc_main = {
  __name: "contact",
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
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(Navbar), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(Map), null, null, _parent));
      _push(ssrRenderComponent(WhatsAppFloat, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-D0YPVUd1.js.map
