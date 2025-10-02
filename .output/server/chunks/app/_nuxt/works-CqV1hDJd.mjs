import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$2$1, a as _sfc_main$3, b as _sfc_main$4, L as Lines, N as Navbar, W as WhatsAppFloat, F as Footer } from './WhatsAppFloat-CTnZKLQ4.mjs';
import { u as useI18n } from '../server.mjs';
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
import '@unhead/shared';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-brands-svg-icons';
import 'vue-router';

const _sfc_main$2 = {
  __name: "PortfolioHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header-cerv bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/Header.jpg",
        "data-overlay-dark": "4"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1 class="fz-70">${ssrInterpolate(unref(t)("portfolio.title"))}</h1><div class="mt-15"><a href="/">${ssrInterpolate(unref(t)("portfolio.tab_a"))}</a><span class="padding-rl-20">|</span><span class="main-color">${ssrInterpolate(unref(t)("portfolio.tab_b"))}</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/portfolio-metro/PortfolioHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/portfolio-slider/beru/Mobile/1.jpg");
const _imports_1 = "" + publicAssetsURL("dark/assets/imgs/portfolio-slider/beru/Mobile/2.jpg");
const _imports_2 = "" + publicAssetsURL("dark/assets/imgs/portfolio-slider/beru/beru-web.jpg");
const _imports_3 = "" + publicAssetsURL("dark/assets/imgs/portfolio-slider/urban-code/mobile/logo.jpg");
const responsiveImg = {
  mounted(el, binding) {
    var _a2;
    var _a, _b;
    const mq = (void 0).matchMedia((_a2 = (_a = binding.value) == null ? void 0 : _a.mobileQuery) != null ? _a2 : "(max-width: 768px)");
    const pick = () => {
      const d = el.dataset;
      return mq.matches ? d.srcMobile || el.getAttribute("src") || d.srcDesktop : d.srcDesktop || el.getAttribute("src") || d.srcMobile;
    };
    const apply = () => {
      const src = pick();
      if (src && el.src !== src)
        el.src = src;
    };
    apply();
    const onChange = () => apply();
    (_b = mq.addEventListener) == null ? void 0 : _b.call(mq, "change", onChange);
    (void 0).addEventListener("resize", onChange, { passive: true });
    el.__respCleanup__ = () => {
      var _a22;
      (_a22 = mq.removeEventListener) == null ? void 0 : _a22.call(mq, "change", onChange);
      (void 0).removeEventListener("resize", onChange);
    };
  },
  unmounted(el) {
    var _a;
    (_a = el.__respCleanup__) == null ? void 0 : _a.call(el);
  }
};
const _sfc_main$1 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    const vResponsiveImg = responsiveImg;
    useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-metro section-padding pt-40" }, _attrs))} data-v-593223df><div class="container-xl" data-v-593223df><div class="row xxlg-marg justify-content-between" data-v-593223df><div class="col-lg-8 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttrs(mergeProps({
        "data-src-desktop": "/dark/assets/imgs/portfolio-slider/beru/Desk/Beru_Magno_Studio.png",
        "data-src-mobile": "/dark/assets/imgs/portfolio-slider/beru/Mobile/Beru_Magno_Mobile.png",
        alt: "Dise\xF1o de Branding y Identidad Visual",
        loading: "lazy",
        decoding: "async"
      }, ssrGetDirectiveProps(_ctx, unref(vResponsiveImg))))} data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Beru AI</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>MVP Desarrollo de Producto</a></p></div></div></div><div class="col-lg-4 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Redes Sociales</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Dise\xF1o de Post</a></p></div></div></div><div class="col-lg-4 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Redes Sociales</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Dise\xF1o de Post</a></p></div></div></div><div class="col-lg-8 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Dise\xF1o UI</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Desarrollo Web</a></p></div></div></div><div class="col-lg-8 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttrs(mergeProps({
        "data-src-desktop": "/dark/assets/imgs/portfolio-slider/este\xF1a/Desktop/redes-sociales.jpg",
        "data-src-mobile": "/dark/assets/imgs/portfolio-slider/este\xF1a/mobile/full-feed.jpg",
        alt: "Dise\xF1os de Post",
        loading: "lazy",
        decoding: "async"
      }, ssrGetDirectiveProps(_ctx, unref(vResponsiveImg))))} data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Dise\xF1os de Post</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Identidad Visual</a></p></div></div></div><div class="col-lg-4 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttrs(mergeProps({
        "data-src-desktop": "/dark/assets/imgs/portfolio-slider/este\xF1a/mobile/post-1.jpg",
        "data-src-mobile": "/dark/assets/imgs/portfolio-slider/este\xF1a/mobile/post-1.jpg",
        alt: "Dise\xF1os de Post",
        loading: "lazy",
        decoding: "async"
      }, ssrGetDirectiveProps(_ctx, unref(vResponsiveImg))))} data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Dise\xF1os de Post</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Redes Sociales</a></p></div></div></div><div class="col-lg-4 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttrs(mergeProps({
        "data-src-desktop": "/dark/assets/imgs/portfolio-slider/este\xF1a/mobile/4.jpg",
        "data-src-mobile": "/dark/assets/imgs/portfolio-slider/este\xF1a/mobile/4.jpg",
        alt: "Dise\xF1os de Post",
        loading: "lazy",
        decoding: "async"
      }, ssrGetDirectiveProps(_ctx, unref(vResponsiveImg))))} data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Dise\xF1os de Post</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Redes Sociales</a></p></div></div></div><div class="col-lg-8 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttrs(mergeProps({
        "data-src-desktop": "/dark/assets/imgs/portfolio-slider/este\xF1a/Desktop/feed-desktop.jpg",
        "data-src-mobile": "/dark/assets/imgs/portfolio-slider/este\xF1a/mobile/feed-mobi.jpg",
        alt: "Dise\xF1os de Post",
        loading: "lazy",
        decoding: "async"
      }, ssrGetDirectiveProps(_ctx, unref(vResponsiveImg))))} data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Papeleria Corporativa</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Identidad Visual</a></p></div></div></div><div class="col-lg-8 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttrs(mergeProps({
        "data-src-desktop": "/dark/assets/imgs/portfolio-slider/urban-code/desktop/portfolio.jpg",
        "data-src-mobile": "/dark/assets/imgs/portfolio-slider/urban-code/mobile/post-1.jpg",
        alt: "Dise\xF1os de Post",
        loading: "lazy",
        decoding: "async"
      }, ssrGetDirectiveProps(_ctx, unref(vResponsiveImg))))} data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Dise\xF1os de Post</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Redes Sociales</a></p></div></div></div><div class="col-lg-4 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Dise\xF1o Logotipo</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Identidad Visual</a></p></div></div></div><div class="col-lg-4 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttrs(mergeProps({
        "data-src-desktop": "/dark/assets/imgs/portfolio-slider/urban-code/mobile/post.png",
        "data-src-mobile": "/dark/assets/imgs/portfolio-slider/urban-code/mobile/post.png",
        alt: "Dise\xF1os de Post",
        loading: "lazy",
        decoding: "async"
      }, ssrGetDirectiveProps(_ctx, unref(vResponsiveImg))))} data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Dise\xF1os de Post</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Redes Sociales</a></p></div></div></div><div class="col-lg-8 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttrs(mergeProps({
        "data-src-desktop": "/dark/assets/imgs/portfolio-slider/urban-code/desktop/slider-2.jpg",
        "data-src-mobile": "/dark/assets/imgs/portfolio-slider/urban-code/mobile/mock-1.jpg",
        alt: "Dise\xF1os de Post",
        loading: "lazy",
        decoding: "async"
      }, ssrGetDirectiveProps(_ctx, unref(vResponsiveImg))))} data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Papeleria Corporativa</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Identidad Visual</a></p></div></div></div><div class="col-lg-8 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttrs(mergeProps({
        "data-src-desktop": "/dark/assets/imgs/portfolio-slider/pachu/Desktop/slider.jpg",
        "data-src-mobile": "/dark/assets/imgs/portfolio-slider/pachu/Mobile/pachu-mobile.jpg",
        alt: "Dise\xF1os de Post",
        loading: "lazy",
        decoding: "async"
      }, ssrGetDirectiveProps(_ctx, unref(vResponsiveImg))))} data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Dise\xF1o Ploteable</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Identidad Visual</a></p></div></div></div></div><div class="col-lg-4 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttrs(mergeProps({
        "data-src-desktop": "/dark/assets/imgs/portfolio-slider/pachu/Desktop/mock-4.jpg",
        "data-src-mobile": "/dark/assets/imgs/portfolio-slider/pachu/Mobile/fachada-2.jpg",
        alt: "Dise\xF1os de Post",
        loading: "lazy",
        decoding: "async"
      }, ssrGetDirectiveProps(_ctx, unref(vResponsiveImg))))} data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Dise\xF1o de Carteleria</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Identidad Visual</a></p></div></div></div><div class="col-lg-4 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttrs(mergeProps({
        "data-src-desktop": "/dark/assets/imgs/portfolio-slider/pachu/Desktop/mock-1.jpg",
        "data-src-mobile": "/dark/assets/imgs/portfolio-slider/pachu/Mobile/mock-1.jpg",
        alt: "Dise\xF1o de Papeleria",
        loading: "lazy",
        decoding: "async"
      }, ssrGetDirectiveProps(_ctx, unref(vResponsiveImg))))} data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Dise\xF1o de Papeleria</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Identidad Visual</a></p></div></div></div><div class="col-lg-8 col-md-6" data-v-593223df><div class="item mt-140" data-v-593223df><div class="img" data-v-593223df><img${ssrRenderAttrs(mergeProps({
        "data-src-desktop": "/dark/assets/imgs/portfolio-slider/pachu/Desktop/social-media.jpg",
        "data-src-mobile": "/dark/assets/imgs/portfolio-slider/pachu/Mobile/post-multi.jpg",
        alt: "Dise\xF1os de Post",
        loading: "lazy",
        decoding: "async"
      }, ssrGetDirectiveProps(_ctx, unref(vResponsiveImg))))} data-v-593223df></div><div class="cont d-flex align-items-center mt-20" data-v-593223df><h5 class="fz-22" data-v-593223df><a href="#" data-v-593223df>Dise\xF1os de Post</a></h5><p class="ml-auto" data-v-593223df><a href="#" data-v-593223df>Redes Sociales</a></p></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/portfolio-metro/Portfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Portfolio = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-593223df"]]);
const _sfc_main = {
  __name: "works",
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
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(Navbar), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(Portfolio), null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home/works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=works-CqV1hDJd.mjs.map
