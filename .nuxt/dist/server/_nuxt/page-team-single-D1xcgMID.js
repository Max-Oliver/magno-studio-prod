import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { mergeProps, useSSRContext, onUnmounted, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$7 } from "./Footer-Bov6VySB.js";
import { a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, L as Lines } from "./loader-CCDLJnCr.js";
import { _ as _sfc_main$6 } from "./Navbar-DzEBLQao.js";
import { i as isInView } from "./isInView-VXyFXDVH.js";
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
const _imports_0 = "" + __publicAssetsURL("light/assets/imgs/team/t5.jpg");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-single" }, _attrs))}><div class="container-fluid"><div class="row xlg-marg"><div class="col-lg-6"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt="" data-speed="0.2" data-lag="0"></div></div><div class="col-lg-6 valign"><div class="cont"><h1>David Miller</h1><h6 class="text-u ls1 opacity-8">Project manager &amp; ART director</h6><div class="text main-bg"><p class="main-text"> Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark. </p><div class="row md-marg mt-40"><div class="col-sm-6"><p> Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark. </p></div><div class="col-sm-6"><p> Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark. </p></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/team-single/Team.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Team = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    function handleShowProgressValues() {
      isInView({
        selector: ".skill-progress .progres",
        isElements: true,
        callback: (element) => {
          element.style.width = element.getAttribute("data-value");
        }
      });
    }
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleShowProgressValues);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "skills section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5"><div class="skil-progs md-mb80"><h3>Professionals <span class="fw-300">Skills</span></h3><p class="fz-13 mt-15"> Similique sunin culpa qui officia deserunt mollitia animi est laborum ets dolorum fuga. Et harum quidem rerum facilis esty expedita distinctioam nobis est eligendi optio cumquey. </p><div class="skill-item mt-50"><h6 class="fz-16 mb-10">Product Design</h6><div class="skill-progress"><div class="progres" data-value="82%"></div></div></div><div class="skill-item mt-30"><h6 class="fz-16 mb-10">Brand Management</h6><div class="skill-progress"><div class="progres" data-value="94%"></div></div></div><div class="skill-item mt-30"><h6 class="fz-16 mb-10">Growth Analysis</h6><div class="skill-progress"><div class="progres" data-value="89%"></div></div></div></div></div><div class="col-lg-5 offset-lg-1"><div class="resume-exp"><h3>Educational <span class="fw-300">Experience</span></h3><p class="fz-13 mt-15"> Completely evisculates alone expertise through revolutionary strategic are theme areas fashion impactful paradigm for process centric relation whiteboard seamless capital with methods. </p><div class="box-items row mt-50"><div class="col-md-6 item"><span class="num"> 1 <small>st</small></span><div class="text-center"><h6 class="fz-16">Business Expert</h6><span class="opacity-7">2023 - Present(Themes)</span></div></div><div class="col-md-6 item"><span class="num"> 2 <small>st</small></span><div class="text-center"><h6 class="fz-16">Finance Manager</h6><span class="opacity-7">2020 - Present(Themes)</span></div></div><div class="col-md-6 item"><span class="num"> 3 <small>st</small></span><div class="text-center"><h6 class="fz-16">Senior Designer</h6><span class="opacity-7">2018 - Present(Themes)</span></div></div><div class="col-md-6 item"><span class="num"> 4 <small>st</small></span><div class="text-center"><h6 class="fz-16">Junior Architect</h6><span class="opacity-7">2016 - Present(Themes)</span></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/team-single/Skills.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "page-team-single",
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
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(Team), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$7), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/old/light/page-team-single.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=page-team-single-D1xcgMID.js.map
