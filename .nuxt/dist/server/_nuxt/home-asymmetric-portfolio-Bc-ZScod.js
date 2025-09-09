import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { mergeProps, useSSRContext, onUnmounted, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0$1, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6, L as Lines } from "./loader-CCDLJnCr.js";
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
const _sfc_main$3 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "min-footer2" }, _attrs))}><div class="footer-container"><div class="container pt-60 pb-25 ontop"><div class="text-center mb-30"><h6 class="sub-title mb-15">Get In Touch</h6><h2 class="fz-100 text-u ls1"><a href="/light/page-contact2">Let&#39;s Talk</a></h2></div><div class="row mt-40 pt-25 bord-thin-top"><div class="col-lg-4 col-md-6 md-mb15"><div class="logo icon-img-100"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div><div class="col-lg-4 order-md-3"><div class="text-center"><p class="fz-14"> © 2024 InFolio is Proudly Powered by <span class="underline main-color"><a href="https://themeforest.net/user/UiCamp" target="_blank"> UiCamp </a></span></p></div></div><div class="col-lg-4 col-md-6 order-md-2 md-mb15"><div class="links d-flex justify-content-end"><ul class="rest d-flex align-items-center"><li><a href="/light/page-FAQS">FAQ</a></li><li class="ml-30"><a href="/light/page-about3">Careers</a></li><li class="ml-30"><a href="/light/page-contact3">Contact Us</a></li></ul></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/asymmetric-portfolio/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    function handleScroll() {
      const bodyScroll = (void 0).scrollY;
      const navbar = (void 0).querySelector(".navbar");
      if (bodyScroll > 300)
        navbar.classList.add("nav-scroll");
      else
        navbar.classList.remove("nav-scroll");
    }
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleScroll);
    });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="navbar navbar-expand-lg bord blur"><div class="container"><a class="logo icon-img-100" href="#"><img${ssrRenderAttr("src", _imports_0$1)} alt="logo"></a><div class="search-form ml-auto"><div class="form-group"><input type="text" name="search" placeholder="Search"><button><span class="pe-7s-search"></span></button></div><div class="search-icon"><span class="pe-7s-search open-search"></span><span class="pe-7s-close close-search"></span></div></div><div class="topnav"><div class="menu-icon cursor-pointer"><span class="icon ti-align-right"></span></div></div></div></nav><div class="${ssrRenderClass(`hamenu ${isOpen.value && "open"}`)}"><div class="logo icon-img-100"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="close-menu cursor-pointer ti-close"></div><div class="container"><div class="row"><div class="col-lg-2"><div class="menu-text"><div class="text"><h2>Menu</h2></div></div></div><div class="col-lg-7"><div class="menu-links"><ul class="main-menu rest"><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Home"> Home </span><i></i></div></div><div class="sub-menu"><ul><li><a href="/light/home-main" class="sub-link"> Main Home </a></li><li><a href="/light/home-startup-onepage" class="sub-link"> Modern Startup </a></li><li><a href="/light/home-creative-agency" class="sub-link"> Creative Agency </a></li><li><a href="/light/home-modern-agency" class="sub-link"> Modern Agency </a></li><li><a href="/light/home-creative-portfolio" class="sub-link"> Creative Portfolio </a></li><li><a href="/light/home-digital-agency" class="sub-link"> Digital Agency </a></li><li><a href="/light/home-freelancer" class="sub-link"> Freelancer </a></li><li><a href="/light/home-personal-vcard" class="sub-link"> Personal vCard </a></li><li><a href="/light/home-minimal-portfolio" class="sub-link"> Minimal Portfolio </a></li><li><a href="/light/home-asymmetric-portfolio" class="sub-link"> Asymmetric Portfolio </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Pages"> Pages </span><i></i></div></div><div class="sub-menu no-bord"><ul><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="About Us"> About Us </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/page-about" class="sub-link"> About Us v1 </a></li><li><a href="/light/page-about2" class="sub-link"> About Us v2 </a></li><li><a href="/light/page-about3" class="sub-link"> About Us v3 </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Services"> Services </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/page-services" class="sub-link"> Services v1 </a></li><li><a href="/light/page-services2" class="sub-link"> Services v2 </a></li><li><a href="/light/page-services-details" class="sub-link"> Services Details </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Contact"> Contact </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/page-contact" class="sub-link"> Contact v1 </a></li><li><a href="/light/page-contact2" class="sub-link"> Contact v2 </a></li><li><a href="/light/page-contact3" class="sub-link"> Contact v3 </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Team"> Team </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/page-team" class="sub-link"> Our Team </a></li><li><a href="/light/page-team-single" class="sub-link"> Team Details </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Others"> Others </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/page-FAQS" class="sub-link"> FAQS </a></li><li><a href="/light/page-error-404" class="sub-link"> Error 404 </a></li></ul></div></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Portfolio"> Portfolio </span><i></i></div></div><div class="sub-menu no-bord"><ul><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Portfolio Type"> Portfolio Type </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/portfolio-standard" class="sub-link"> Standerd </a></li><li><a href="/light/portfolio-gallery" class="sub-link"> Gallery </a></li><li><a href="/light/portfolio-metro" class="sub-link"> Metro </a></li><li><a href="/light/portfolio-masonry" class="sub-link"> Masonry </a></li><li><a href="/light/portfolio-caption-cursor" class="sub-link"> Caption Cursor </a></li><li><a href="/light/portfolio-outline" class="sub-link"> Outline </a></li><li><a href="/light/portfolio-parallax" class="sub-link"> Parallax </a></li><li><a href="/light/portfolio-sticky" class="sub-link"> Sticky </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Showcases"> Showcases </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/showcase-fullscreen" class="sub-link"> Parallax Slider </a></li><li><a href="/light/showcase-carousel" class="sub-link"> Showcase Carousel </a></li><li><a href="/light/showcase-half-slider" class="sub-link"> Creative Slider </a></li><li><a href="/light/showcase-interactive-full" class="sub-link"> Interactive Full </a></li><li><a href="/light/showcase-interactive-center" class="sub-link"> Interactive Center </a></li><li><a href="/light/showcase-interactive-vertical" class="sub-link"> Interactive Vertical </a></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer sub-dmenu"><span class="fill-text" data-text="Portfolio Single"> Portfolio Single </span><i></i></div></div><div class="sub-menu2"><ul><li><a href="/light/project1" class="sub-link"> project1 </a></li><li><a href="/light/project2" class="sub-link"> project2 </a></li><li><a href="/light/project3" class="sub-link"> project3 </a></li><li><a href="/light/project4" class="sub-link"> project4 </a></li><li><a href="/light/project5" class="sub-link"> project5 </a></li><li><a href="/light/project6" class="sub-link"> project6 </a></li></ul></div></li></ul></div></li><li><div class="o-hidden"><div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Blogs"> Blogs </span><i></i></div></div><div class="sub-menu"><ul><li><a class="sub-link" href="/light/blog-classic"> Standard </a></li><li><a class="sub-link" href="/light/blog-list"> Blog List </a></li><li><a class="sub-link" href="/light/blog-list2"> Blog List 2 </a></li><li><a class="sub-link" href="/light/blog-details"> Blog Details </a></li></ul></div></li><li><div class="o-hidden"><a href="/light/page-contact3" class="link"><span class="fill-text" data-text="Contact Us"> Contact Us </span></a></div></li></ul></div></div><div class="col-lg-3"><div class="cont-info"><div class="item mb-50"><h6 class="sub-title mb-15 opacity-7">Address</h6><h5> 541 Melville Geek, <br> Palo Alto, CA 94301 </h5></div><div class="item mb-50"><h6 class="sub-title mb-15 opacity-7">Social Media</h6><ul class="rest social-text"><li class="mb-10"><a href="#0" class="hover-this"><span class="hover-anim">Facebook</span></a></li><li class="mb-10"><a href="#0" class="hover-this"><span class="hover-anim">Twitter</span></a></li><li class="mb-10"><a href="#0" class="hover-this"><span class="hover-anim">LinkedIn</span></a></li><li><a href="#0" class="hover-this"><span class="hover-anim">Instagram</span></a></li></ul></div><div class="item mb-40"><h6 class="sub-title mb-15 opacity-7">Contact Us</h6><h5><a href="#0">Hello@email.com</a></h5><h5 class="underline mt-10"><a href="#0">+1 840 841 25 69</a></h5></div></div></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/asymmetric-portfolio/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "" + __publicAssetsURL("light/assets/imgs/works/1/q1.jpg");
const _imports_1 = "" + __publicAssetsURL("light/assets/imgs/works/1/q2.jpg");
const _imports_2 = "" + __publicAssetsURL("light/assets/imgs/works/1/q3.jpg");
const _imports_3 = "" + __publicAssetsURL("light/assets/imgs/works/1/q4.jpg");
const _imports_4 = "" + __publicAssetsURL("light/assets/imgs/works/1/q5.jpg");
const _imports_5 = "" + __publicAssetsURL("light/assets/imgs/works/1/q6.jpg");
const _imports_6 = "" + __publicAssetsURL("light/assets/imgs/works/1/q7.jpg");
const _imports_7 = "" + __publicAssetsURL("light/assets/imgs/works/1/q8.jpg");
const _imports_8 = "" + __publicAssetsURL("light/assets/imgs/works/1/q9.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-asymetic section-padding" }, _attrs))}><div class="container mt-100"><div class="caption"><div class="lg-text fw-300"><div class="text">Digital art</div><div class="text">director</div><div class="text">&amp; designer</div></div><p> We combine forward-thinking design with modern technology to tell stories that transform and grow our partners brands. </p></div><div class="row"><div class="col-lg-3 offset-lg-3 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="cont mt-30"><span class="opacity-7 text-u fz-13 ls1 mb-5"> August 2020 </span><h6><a href="/light/project1">Branding Design</a></h6></div></div></div><div class="col-lg-6 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="cont d-flex align-items-center mt-30"><h6><a href="/light/project2">Branding Design</a></h6><span class="opacity-7 text-u fz-13 ls1 ml-auto"> August 2020 </span></div></div></div><div class="col-lg-6 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="cont d-flex align-items-center mt-30"><h6><a href="/light/project3">Branding Design</a></h6><span class="opacity-7 text-u fz-13 ls1 ml-auto"> August 2020 </span></div></div></div><div class="col-lg-3 offset-lg-2 items d-flex align-items-end"><div class="item full-width"><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="cont mt-30"><span class="opacity-7 text-u fz-13 ls1 mb-5"> August 2020 </span><h6><a href="/light/project4">Branding Design</a></h6></div></div></div><div class="col-lg-4 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="cont mt-30"><span class="opacity-7 text-u fz-13 ls1 mb-5"> August 2020 </span><h6><a href="/light/project5">Branding Design</a></h6></div></div></div><div class="col-lg-6 offset-lg-2"><div class="row lg-marg"><div class="col-lg-6 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_5)} alt=""></div><div class="cont mt-30"><span class="opacity-7 text-u fz-13 ls1 mb-5"> August 2020 </span><h6><a href="/light/project6">Branding Design</a></h6></div></div></div><div class="col-lg-6 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_6)} alt=""></div><div class="cont mt-30"><span class="opacity-7 text-u fz-13 ls1 mb-5"> August 2020 </span><h6><a href="/light/project1">Branding Design</a></h6></div></div></div></div></div><div class="col-lg-4 items d-flex align-items-end"><div class="item full-width"><div class="img"><img${ssrRenderAttr("src", _imports_7)} alt=""></div><div class="cont d-flex align-items-center mt-30"><h6><a href="/light/project2">Branding Design</a></h6><span class="opacity-7 text-u fz-13 ls1 ml-auto"> August 2020 </span></div></div></div><div class="col-lg-7 offset-lg-1 items"><div class="item"><div class="img"><img${ssrRenderAttr("src", _imports_8)} alt=""></div><div class="cont d-flex align-items-center mt-30"><h6><a href="/light/project3">Branding Design</a></h6><span class="opacity-7 text-u fz-13 ls1 ml-auto"> August 2020 </span></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/asymmetric-portfolio/Portfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Portfolio = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "home-asymmetric-portfolio",
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
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(Portfolio), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/home-asymmetric-portfolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=home-asymmetric-portfolio-Bc-ZScod.js.map
