import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { useSSRContext, unref, mergeProps, defineComponent } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$1$1, a as _sfc_main$2$1, b as _sfc_main$3$1, L as Lines, N as Navbar, F as Footer } from './Navbar-C3Ganfut.mjs';
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

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4 valign"><div class="sec-head info-box full-width md-mb80"><div class="phone fz-30 fw-600 underline main-color"><a href="#0">+1 840 841 25 69</a></div><div class="morinfo mt-50 pb-30 bord-thin-bottom"><h6 class="mb-15">Address</h6><p>Bes\xF2s 1, 08174 Sant Cugat del Vall\xE8s, Barcelona</p></div><div class="morinfo mt-30 pb-30 bord-thin-bottom"><h6 class="mb-15">Email</h6><p>Support@uithemez.com</p></div><div class="social-icon-circle mt-50"><a href="#0"><i class="fab fa-facebook-f"></i></a><a href="#0"><i class="fab fa-dribbble"></i></a><a href="#0"><i class="fab fa-behance"></i></a><a href="#0"><i class="fab fa-instagram"></i></a></div></div></div><div class="col-lg-7 offset-lg-1 valign"><div class="full-width"><div class="sec-head mb-50"><h6 class="sub-title main-color mb-15">Let&#39;s Chat</h6><h3 class="text-u ls1"> Send a <span class="fw-200">message</span></h3></div><form id="contact-form" class="form2" method="post" action="contact.php"><div class="messages"></div><div class="controls row"><div class="col-lg-6"><div class="form-group mb-30"><input id="form_name" type="text" name="name" placeholder="Name" required></div></div><div class="col-lg-6"><div class="form-group mb-30"><input id="form_email" type="email" name="email" placeholder="Email" required></div></div><div class="col-12"><div class="form-group mb-30"><input id="form_subject" type="text" name="subject" placeholder="Subject"></div></div><div class="col-12"><div class="form-group"><textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea></div><div class="mt-30"><button type="submit" class="butn butn-full butn-bord radius-30"><span class="text">Let&#39;s Talk</span></button></div></div></div></form></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/contact/Contact.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header-cerv bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/2.jpg",
        "data-overlay-dark": "4"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1 class="fz-100">Contact Us.</h1><div class="mt-15"><a href="/">Home</a><span class="padding-rl-20">|</span><span class="main-color">Contact</span></div></div></div></header>`);
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
      }, _attrs))} data-v-18ba3305><iframe id="gmap_canvas"${ssrRenderAttr("title", `Ubicaci\xF3n: ${address}`)}${ssrRenderAttr("src", mapSrc)} loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" data-v-18ba3305></iframe><noscript data-v-18ba3305><a${ssrRenderAttr("href", `https://www.google.com/maps?hl=es&q=${unref(encodedAddress)}&z=16`)} target="_blank" rel="noopener" data-v-18ba3305>Ver en Google Maps</a></noscript></div>`);
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
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(Navbar), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Contact), null, null, _parent));
      _push(ssrRenderComponent(unref(Map), null, null, _parent));
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

export { _sfc_main as default };
//# sourceMappingURL=contact-7k6RtP-H.mjs.map
