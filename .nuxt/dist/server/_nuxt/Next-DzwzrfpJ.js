import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
const _sfc_main = {
  __name: "Next",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "next-project sub-bg" }, _attrs))}><div class="container-fluid rest"><div class="row"><div class="col-md-6 rest"><div class="text-left box bg-img" data-background="/dark/assets/imgs/works/projects/2/1.jpg"><div class="cont d-flex align-items-center"><div><span class="mr-30 fz-30 ti-arrow-left"></span></div><div><h6 class="sub-title fz-16 mb-5">Prev Project</h6><a href="/dark/project2" class="fz-40 fw-600 stroke"> OPT Media Agency </a></div></div></div></div><div class="col-md-6 rest"><div class="text-right d-flex box bg-img" data-background="/dark/assets/imgs/works/projects/4/1.jpg"><div class="ml-auto"><div class="cont d-flex align-items-center"><div><h6 class="sub-title fz-16 mb-5">Next Project</h6><a href="/dark/project2" class="fz-40 fw-600 stroke"> TH3 Web Design </a></div><div><span class="ml-30 fz-30 ti-arrow-right"></span></div></div></div></div></div></div></div><div><a href="#0" class="all-works-butn text-center"><span class="ti-view-grid fz-24 mb-10"></span><span class="d-block fz-12 text-u ls1">all Projects</span></a></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/project2/Next.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Next-DzwzrfpJ.js.map
