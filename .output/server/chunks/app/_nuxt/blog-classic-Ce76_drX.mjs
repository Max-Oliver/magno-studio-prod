import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0$2, a as _imports_1$1, b as _imports_2$1 } from './c3-CdCIugB9.mjs';
import { _ as _sfc_main$4, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines, c as _imports_0$1 } from './loader-CbuutFIZ.mjs';
import { _ as _sfc_main$5 } from './Navbar-DP9J-Bvz.mjs';
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
import '../server.mjs';
import 'vue-router';

const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/blog/blog1.jpg");
const _imports_1 = "" + publicAssetsURL("dark/assets/imgs/blog/blog2.jpg");
const _imports_2 = "" + publicAssetsURL("dark/assets/imgs/blog/blog4.jpg");
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-main section-padding" }, _attrs))}><div class="container"><div class="row lg-marg justify-content-around"><div class="col-lg-7"><div class="md-mb80"><div class="item mb-50"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="content main-bg"><div class="d-flex align-items-center mb-15"><div class="post-date">20 July 2020</div><div class="commt opacity-7 fz-13"><span class="ti-comment-alt mr-10"></span>4 Comments </div></div><h4 class="mb-15"><a href="/dark/blog-details"> 12 Tips to Leading an Extraordinary Company </a></h4><p> So striking at of to welcomed resolved. Northward by described up household therefore attention. </p><a href="#0" class="d-flex align-items-center mt-40"><span class="text mr-15">Read More</span><span class="ti-arrow-top-right"></span></a></div></div><div class="item mb-50"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="content main-bg"><div class="d-flex align-items-center mb-15"><div class="post-date">20 July 2020</div><div class="commt opacity-7 fz-13"><span class="ti-comment-alt mr-10"></span>4 Comments </div></div><h4 class="mb-15"><a href="/dark/blog-details"> 12 Tips to Leading an Extraordinary Company </a></h4><p> So striking at of to welcomed resolved. Northward by described up household therefore attention. </p><a href="#0" class="d-flex align-items-center mt-40"><span class="text mr-15">Read More</span><span class="ti-arrow-top-right"></span></a></div></div><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="content main-bg"><div class="d-flex align-items-center mb-15"><div class="post-date">20 July 2020</div><div class="commt opacity-7 fz-13"><span class="ti-comment-alt mr-10"></span>4 Comments </div></div><h4 class="mb-15"><a href="/dark/blog-details"> 12 Tips to Leading an Extraordinary Company </a></h4><p> So striking at of to welcomed resolved. Northward by described up household therefore attention. </p><a href="#0" class="d-flex align-items-center mt-40"><span class="text mr-15">Read More</span><span class="ti-arrow-top-right"></span></a></div></div></div></div><div class="col-lg-4"><div class="sidebar"><div class="search-box"><input type="text" name="search-post" placeholder="Search"><span class="icon pe-7s-search"></span></div><div class="widget catogry"><h6 class="title-widget">Categories</h6><ul class="rest"><li><span><a href="/dark/blog-list">Business</a></span><span class="ml-auto">33</span></li><li><span><a href="/dark/blog-list">Lifestyle</a></span><span class="ml-auto">05</span></li><li><span><a href="/dark/blog-list">Creative</a></span><span class="ml-auto">28</span></li><li><span><a href="/dark/blog-list">WordPress</a></span><span class="ml-auto">17</span></li><li><span><a href="/dark/blog-list">Design</a></span><span class="ml-auto">45</span></li></ul></div><div class="widget last-post-thum"><h6 class="title-widget">latest Posts</h6><div class="item d-flex align-items-center"><div><div class="img"><a href="/dark/blog-list"><img${ssrRenderAttr("src", _imports_0$2)} alt=""><span class="date"><span> 14 / <br> sep </span></span></a></div></div><div class="cont"><span class="tag"><a href="/dark/blog-list">Web Design</a></span><h6><a href="/dark/blog-list"> ways to quickly increase traffic to your website </a></h6></div></div><div class="item d-flex align-items-center"><div><div class="img"><a href="/dark/blog-list"><img${ssrRenderAttr("src", _imports_1$1)} alt=""><span class="date"><span> 14 / <br> sep </span></span></a></div></div><div class="cont"><span class="tag"><a href="/dark/blog-list">Web Design</a></span><h6><a href="/dark/blog-list"> breaking the rules: using sqlite to demo web </a></h6></div></div><div class="item d-flex align-items-center"><div><div class="img"><a href="/dark/blog-list"><img${ssrRenderAttr("src", _imports_2$1)} alt=""><span class="date"><span> 14 / <br> sep </span></span></a></div></div><div class="cont"><span class="tag"><a href="/dark/blog-list">Web Design</a></span><h6><a href="/dark/blog-list"> building better ui designs with layout grids </a></h6></div></div></div><div class="widget tags"><h6 class="title-widget">Tags</h6><div><a href="/dark/blog-list">Creative</a><a href="/dark/blog-list">Design</a><a href="/dark/blog-list">Dark &amp; Light</a><a href="/dark/blog-list">Minimal</a><a href="/dark/blog-list">Infolio</a></div></div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/blog-classic/Blogs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Blogs = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "modern-footer sub-bg pt-80" }, _attrs))}><div class="footer-container"><div class="container ontop"><div class="row pb-30 bord-thin-bottom"><div class="col-lg-5"><div class="logo icon-img-120"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div><div class="col-lg-7"><div class="social-media d-flex justify-content-end"><ul class="rest d-flex align-items-center fz-14"><li class="hover-this cursor-pointer"><a href="#0" class="hover-anim"><i class="fab fa-facebook-f mr-10"></i> Facebook </a></li><li class="hover-this cursor-pointer ml-50"><a href="#0" class="hover-anim"><i class="fab fa-dribbble mr-10"></i> Dribbble </a></li><li class="hover-this cursor-pointer ml-50"><a href="#0" class="hover-anim"><i class="fab fa-linkedin-in mr-10"></i> LinkedIn </a></li><li class="hover-this cursor-pointer ml-50"><a href="#0" class="hover-anim"><i class="fab fa-instagram mr-10"></i> Instagram </a></li></ul></div></div></div><div class="row pt-80"><div class="col-lg-7"><div class="call-action"><h2 class="d-slideup wow fz-60 fw-600"><span class="sideup-text"><span class="up-text">Have a project in mind?</span></span><span class="sideup-text"><span class="up-text underline"><a href="/dark/page-contact3" class="main-color"> Let\u2019s get to work. </a></span></span></h2><div class="info mt-80 d-flex align-items-center"><div><a href="#0" class="butn butn-md butn-bord-thin radius-30"><span class="text">Support@Website.com</span></a></div><div><a href="#0" class="butn butn-md butn-bord-thin radius-30 ml-30"><span class="text">+2 456 (343) 24 45</span></a></div></div></div></div><div class="col-lg-4 offset-lg-1 bord-left"><div class="column"><h6 class="sub-title mb-30">Useful Links</h6><div class="row"><div class="col-6"><ul class="rest fz-14"><li class="mb-15"><a href="/dark/page-about3">About</a></li><li class="mb-15"><a href="/dark/page-services">Services</a></li><li class="mb-15"><a href="/dark/blog-list2">Blog</a></li><li><a href="/dark/page-contact3">Contact</a></li></ul></div><div class="col-6"><ul class="rest fz-14"><li class="mb-15"><a href="/dark/page-FAQS">FAQS</a></li><li class="mb-15"><a href="/dark/page-about2">Term &amp; Conditions</a></li><li class="mb-15"><a href="/dark/page-about2">Privacy policy</a></li><li><a href="/dark/page-about2">Help</a></li></ul></div></div></div><div class="subscribe-minimal mt-50"><form action="contact.php"><div class="form-group rest"><input type="email" placeholder="Type Your Email"><button type="submit"><i class="ti-arrow-top-right"></i></button></div></form></div></div></div><div class="text-center pt-30 pb-30 main-bg mt-80"><p class="fz-14"> \xA9 2024 InFolio is Proudly Powered by <span class="underline main-color"><a href="https://themeforest.net/user/UiCamp" target="_blank"> UiCamp </a></span></p></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/blog-classic/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "page-header bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/bg1.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1>Blog Standard.</h1><div class="mt-15"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Blog Standard</span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/blog-classic/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "blog-classic",
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
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Blogs), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/old/dark/blog-classic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blog-classic-Ce76_drX.mjs.map
