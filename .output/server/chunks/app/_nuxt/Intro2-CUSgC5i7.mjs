import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './4-CUa9Y2jh.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { _ as _imports_2 } from './02-D3NKgtkr.mjs';
import { _ as _imports_0 } from './03-DYXBsvJS.mjs';

const _sfc_main$3 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "page-header bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/bg1.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100 pb-100"><div class="text-center"><h1 class="fz-100 text-u">About Us.</h1><div class="mt-15"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">About Us</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/about/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-intro position-re" }, _attrs))}><div class="container-fluid rest"><div class="row justify-content-end"><div class="col-sm-9"><div class="img to-up fit-img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div></div></div><div class="container section-padding"><div class="row"><div class="col-lg-5"><h6 class="sub-title main-color">About Company</h6></div><div class="col-lg-7"><div class="text"><h4> Whether you are a development agency looking to outsource design work, a company in search of a Product Designer or Product Team, a marketing agency that needs a landing page, a startup that wants to launch an app, or an enterprise that plans to rebrand or redesign its website, we welcome any challenge with our arms wide open. </h4></div></div></div></div><div class="line-overlay"><svg viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style="${ssrRenderStyle({ "stroke-dasharray": "3246.53, 0" })}"></path></svg></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/about/Intro.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Intro = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="main-marq xlrg o-hidden"><div class="slide-har st1"><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div><div class="box"><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div><div class="item"><h4 class="d-flex align-items-center"><span>Amazing Design</span><span class="fz-50 ml-50 stroke icon">*</span></h4></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/about/Marquee.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Marquee = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Intro2",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-intro-cerv section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-8 bord-thin-right rest"><div class="row justify-content-end rest"><div class="col-md-5 rest"><div class="cont"><div class="mb-40"><h2 class="fz-100 numb-font">1.</h2></div><h4>Our Mission</h4><div class="text mt-30"><p> Our journey is defined by a rich tapestry of achievements and values that set us apart. </p></div></div></div><div class="col-md-5 rest"><div class="img fit-img bord-thin-left"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div></div><div class="row justify-content-end bord-thin-top rest"><div class="col-md-5 rest"><div class="img fit-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-md-5 rest"><div class="cont bord-thin-left"><div class="mb-40"><h2 class="fz-100 numb-font">2.</h2></div><h4>Our Vision</h4><div class="text mt-30"><p> Our journey is defined by a rich tapestry of achievements and values that set us apart. </p></div></div></div></div></div><div class="col-lg-4 rest"><div class="bord-thin-top mt-100 position-re"><div class="row"><div class="col-md-11"><div class="cont"><div class="mb-40"><h2 class="fz-100 numb-font">3.</h2></div><h4>Why Us?</h4><div class="text mt-30"><p> Our journey is defined by a rich tapestry of achievements and values that set us apart. </p></div></div></div></div><div class="bg-dots bg-img" data-background="/dark/assets/imgs/patterns/dots.png"></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/about/Intro2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { Intro as I, Marquee as M, _sfc_main$3 as _, _sfc_main as a };
//# sourceMappingURL=Intro2-CUSgC5i7.mjs.map
