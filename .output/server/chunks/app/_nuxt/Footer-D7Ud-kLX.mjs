import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { c as _imports_0 } from './loader-CbuutFIZ.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "footer",
        "aria-labelledby": "footer-heading"
      }, _attrs))} data-v-1dd04044><div class="footer__overlay" data-v-1dd04044></div><div class="footer__container" data-v-1dd04044><div class="footer__cta" data-v-1dd04044><h2 id="footer-heading" class="footer__title" data-v-1dd04044><a href="/home/contact" class="footer__titleLink" data-v-1dd04044><span data-v-1dd04044>Let\u2019s Contact </span><span class="ml-30 fz-70 ti-arrow-top-right" data-v-1dd04044></span></a></h2></div><div class="footer__grid" data-v-1dd04044><div data-v-1dd04044><img${ssrRenderAttr("src", _imports_0)} alt="Magno Studio" class="footer__logo" data-v-1dd04044></div><div data-v-1dd04044><h6 class="footer__label" data-v-1dd04044>Address</h6><address class="footer__address" data-v-1dd04044> Miami Boulevard 2<br data-v-1dd04044>Punta del Este, Uruguay </address></div><nav aria-label="Primary" data-v-1dd04044><ul class="menu-col" data-v-1dd04044><li data-v-1dd04044><a class="u-underline is-active" href="/" data-v-1dd04044>Home</a></li><li data-v-1dd04044><a class="u-underline" href="/home/works" data-v-1dd04044>Work</a></li><li data-v-1dd04044><a class="u-underline" href="/home/contact" data-v-1dd04044>Contact Us</a></li></ul></nav><nav aria-label="Social" data-v-1dd04044><ul class="menu-col" data-v-1dd04044><li data-v-1dd04044><a class="u-underline" href="https://instagram.com/magnocreative" target="_blank" rel="noreferrer" data-v-1dd04044>Instagram</a></li><li data-v-1dd04044><a class="u-underline" href="https://behance.net/magnocreative" target="_blank" rel="noreferrer" data-v-1dd04044>Behance</a></li></ul></nav></div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1dd04044"]]);

export { Footer as F };
//# sourceMappingURL=Footer-D7Ud-kLX.mjs.map
