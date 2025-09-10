import { onUnmounted, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { c as _imports_0 } from './loader-CbuutFIZ.mjs';
import { d as useI18n } from '../server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';

const _sfc_main = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { current, setLocale, t } = useI18n();
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
      _push(`<!--[--><nav class="navbar navbar-expand-lg bord blur" data-v-e0b23d16><div class="container" data-v-e0b23d16><a class="logo icon-img-100" href="#" data-v-e0b23d16><img${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-e0b23d16></a><div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" data-v-e0b23d16><ul class="navbar-nav" data-v-e0b23d16><li class="nav-item dropdown" data-v-e0b23d16><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false" data-v-e0b23d16><span class="rolling-text" data-v-e0b23d16>${ssrInterpolate(unref(t)("nav.home"))}</span></a></li><li class="nav-item dropdown" data-v-e0b23d16><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/home/works" role="button" aria-haspopup="true" aria-expanded="false" data-v-e0b23d16><span class="rolling-text" data-v-e0b23d16>${ssrInterpolate(unref(t)("nav.works"))}</span></a></li><li class="nav-item" data-v-e0b23d16><a class="nav-link" href="/home/contact" data-v-e0b23d16><span class="rolling-text" data-v-e0b23d16>${ssrInterpolate(unref(t)("nav.connect"))}</span></a></li></ul></div><div class="topnav flex items-center gap-1" data-v-e0b23d16><div class="lang-toggle mt-3 cursor-pointer gap-1"${ssrRenderAttr("aria-label", `Cambiar idioma a ${unref(current) === "es" ? "Ingl\xE9s" : "Espa\xF1ol"}`)} data-v-e0b23d16><span class="${ssrRenderClass(["fi", unref(current) === "es" ? "fi-uy h-3" : "fi-us"])}" data-v-e0b23d16></span><span class="text-xs rolling-text cursor-pointer" data-v-e0b23d16>${ssrInterpolate(unref(current) === "es" ? "Esp" : "Eng")}</span></div><div class="menu-icon cursor-pointer" data-v-e0b23d16><span class="icon ti-align-right" data-v-e0b23d16></span></div></div></div></nav><div class="${ssrRenderClass(`hamenu ${isOpen.value && "open"}`)}" data-v-e0b23d16><div class="logo icon-img-100" data-v-e0b23d16><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-e0b23d16></div><div class="close-menu cursor-pointer ti-close" data-v-e0b23d16></div><div class="container" data-v-e0b23d16><div class="row" data-v-e0b23d16><div class="col-lg-2" data-v-e0b23d16><div class="menu-text" data-v-e0b23d16><div class="text" data-v-e0b23d16><h2 data-v-e0b23d16>Menu</h2></div></div></div><div class="col-lg-7" data-v-e0b23d16><div class="menu-links" data-v-e0b23d16><ul class="main-menu rest" data-v-e0b23d16><li data-v-e0b23d16><div class="o-hidden" data-v-e0b23d16><div class="link cursor-pointer dmenu" data-v-e0b23d16><a href="/dark/home/home" class="sub-link" data-v-e0b23d16><span class="fill-text" data-text="Home" data-v-e0b23d16> Home </span><i data-v-e0b23d16></i></a></div></div></li><li data-v-e0b23d16><div class="o-hidden" data-v-e0b23d16><div class="link cursor-pointer dmenu" data-v-e0b23d16><a href="/dark/home/works" class="sub-link" data-v-e0b23d16><span class="fill-text" data-text="Works" data-v-e0b23d16> Works </span><i data-v-e0b23d16></i></a></div></div></li><li data-v-e0b23d16><div class="o-hidden" data-v-e0b23d16><a href="/dark/home/contact" class="link" data-v-e0b23d16><span class="fill-text" data-text="Contact Us" data-v-e0b23d16> Contact Us </span></a></div></li></ul></div></div><div class="col-lg-3" data-v-e0b23d16><div class="cont-info" data-v-e0b23d16><div class="item mb-50" data-v-e0b23d16><h6 class="sub-title mb-15 opacity-7" data-v-e0b23d16>Address</h6><h5 data-v-e0b23d16> Miami Boulebard 2, <br data-v-e0b23d16> Punta del Este, Uruguay </h5></div><div class="item mb-50" data-v-e0b23d16><h6 class="sub-title mb-15 opacity-7" data-v-e0b23d16>Social Media</h6><ul class="rest social-text" data-v-e0b23d16><li data-v-e0b23d16><a href="https://instagram.com/magnocreative" class="hover-this" data-v-e0b23d16><span class="hover-anim" data-v-e0b23d16>Instagram</span></a></li><li class="mb-10" data-v-e0b23d16><a href="https://behance.net/magnocreative" class="hover-this" data-v-e0b23d16><span class="hover-anim" data-v-e0b23d16>Behance</span></a></li></ul></div><div class="item mb-40" data-v-e0b23d16><h6 class="sub-title mb-15 opacity-7" data-v-e0b23d16>Contact Us</h6><h5 data-v-e0b23d16><a href="#0" data-v-e0b23d16>hello@magnocreative.es</a></h5><h5 class="underline mt-10" data-v-e0b23d16><a href="#0" data-v-e0b23d16> WhatsApp!</a></h5></div></div></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/home-main/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0b23d16"]]);

export { Navbar as N };
//# sourceMappingURL=Navbar-BiS-uGPY.mjs.map
