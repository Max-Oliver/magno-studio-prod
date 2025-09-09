import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact section-padding sub-bg" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5 valign"><div class="sec-head md-mb80"><h2 class="text-u ls1 d-rotate wow"><span class="rotate-text"> Let&#39;s make your <br> brand <span class="fw-200">brilliant!</span></span></h2><p class="mt-20 mb-20"> If you would like to work with us or just want to get in touch, we\u2019d love to hear from you! </p><div class="row"><div class="col-md-6"><div class="morinfo mt-30"><h6 class="mb-15">Address</h6><p>Bes\xF2s 1, 08174 Sant Cugat del Vall\xE8s, Barcelona</p></div></div><div class="col-md-6"><div class="morinfo mt-30"><h6 class="mb-15">Email</h6><p>Support@uithemez.com</p></div></div></div><div class="phone fz-30 fw-600 mt-30 underline main-color"><a href="#0">+1 840 841 25 69</a></div><ul class="rest social-text d-flex mt-60"><li class="mr-30"><a href="#0" class="hover-this"><span class="hover-anim">Facebook</span></a></li><li class="mr-30"><a href="#0" class="hover-this"><span class="hover-anim">Twitter</span></a></li><li class="mr-30"><a href="#0" class="hover-this"><span class="hover-anim">LinkedIn</span></a></li><li><a href="#0" class="hover-this"><span class="hover-anim">Instagram</span></a></li></ul></div></div><div class="col-lg-6 offset-lg-1 valign"><div class="full-width"><div class="sec-head mb-50"><h3 class="text-u ls1"> Send a <span class="fw-200">message</span></h3></div><form id="contact-form" method="post" action="contact.php"><div class="messages"></div><div class="controls row"><div class="col-lg-6"><div class="form-group mb-30"><input id="form_name" type="text" name="name" placeholder="Name" required></div></div><div class="col-lg-6"><div class="form-group mb-30"><input id="form_email" type="email" name="email" placeholder="Email" required></div></div><div class="col-12"><div class="form-group mb-30"><input id="form_subject" type="text" name="subject" placeholder="Subject"></div></div><div class="col-12"><div class="form-group"><textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea></div><div class="mt-30"><button type="submit" class="butn butn-full butn-bord radius-30"><span class="text">Let&#39;s Talk</span></button></div></div></div></form></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/contact/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/b5.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1 class="fz-100 text-u">Contact Us.</h1><div class="mt-15"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Contact</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/contact/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { Contact as C, _sfc_main as _ };
//# sourceMappingURL=Header-DoZ9MkM7.mjs.map
