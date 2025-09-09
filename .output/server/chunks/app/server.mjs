import { version, unref, inject, defineComponent, provide, shallowReactive, h, ref, watch, Suspense, nextTick, Transition, useSSRContext, createApp, effectScope, reactive, hasInjectionContext, getCurrentInstance, computed, defineAsyncComponent, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, toRef, shallowRef, isReadonly, isRef, isShallow, isReactive, toRaw, mergeProps } from 'vue';
import { d as useRuntimeConfig$1, $ as $fetch, w as withQuery, l as hasProtocol, p as parseURL, m as isScriptProtocol, j as joinURL, h as createError$1, n as defu, o as sanitizeStatusCode, q as createHooks } from '../nitro/node-server.mjs';
import { getActiveHead } from 'unhead';
import { defineHeadPlugin } from '@unhead/shared';
import { RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

function createContext$1(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers$1.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers$1.delete(onLeave);
      }
    }
  };
}
function createNamespace$1(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext$1({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$2 = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey$2] || (_globalThis$1[globalKey$2] = createNamespace$1());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey$1 = "__unctx_async_handlers__";
const asyncHandlers$1 = _globalThis$1[asyncHandlersKey$1] || (_globalThis$1[asyncHandlersKey$1] = /* @__PURE__ */ new Set());

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.10.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set(),
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
// @__NO_SIDE_EFFECTS__
function tryUseNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  return nuxtAppInstance || null;
}
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  const nuxtAppInstance = /* @__PURE__ */ tryUseNuxtApp();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error2 = useError();
    if (false)
      ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "production" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const _routes = [
  {
    name: "dark-blog-classic",
    path: "/dark/blog-classic",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/blog-classic-BLCb73Hm.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-blog-details",
    path: "/dark/blog-details",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/blog-details-Dw5CDdAL.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-blog-list",
    path: "/dark/blog-list",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/blog-list-CCi1L41H.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-blog-list2",
    path: "/dark/blog-list2",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/blog-list2-nwypr-1R.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-asymmetric-portfolio",
    path: "/dark/home-asymmetric-portfolio",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-asymmetric-portfolio-Cp2t0MhJ.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-creative-agency",
    path: "/dark/home-creative-agency",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-creative-agency-DAKrqN5w.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-creative-portfolio",
    path: "/dark/home-creative-portfolio",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-creative-portfolio-CA620CA4.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-digital-agency",
    path: "/dark/home-digital-agency",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-digital-agency-DUHNZ7Vy.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-freelancer",
    path: "/dark/home-freelancer",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-freelancer-BkCQeUE1.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-main",
    path: "/dark/home-main",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-main-DHaaAAF4.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-minimal-portfolio",
    path: "/dark/home-minimal-portfolio",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-minimal-portfolio-CVaOscJW.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-modern-agency",
    path: "/dark/home-modern-agency",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-modern-agency-kyhZn_LT.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-personal-vcard",
    path: "/dark/home-personal-vcard",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-personal-vcard-B1dL7i_V.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-startup-onepage",
    path: "/dark/home-startup-onepage",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-startup-onepage-DYiAroQg.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-about",
    path: "/dark/home/about",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/about-DnnbA1bT.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-contact",
    path: "/dark/home/contact",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/contact-CIebdwdT.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-home",
    path: "/dark/home/home",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-CyoOn5B_.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-home-works",
    path: "/dark/home/works",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/works-COgMtGQ2.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-about",
    path: "/dark/page-about",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-about-8_uK1ziV.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-about2",
    path: "/dark/page-about2",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-about2-DDA1GWDL.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-about3",
    path: "/dark/page-about3",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-about3-7mln7fxO.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-contact",
    path: "/dark/page-contact",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-contact-DoyhWWUZ.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-contact2",
    path: "/dark/page-contact2",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-contact2-qzubVbv3.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-contact3",
    path: "/dark/page-contact3",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-contact3-CGlMXOha.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-error404",
    path: "/dark/page-error404",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-error404-BkJbMlmi.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-FAQS",
    path: "/dark/page-FAQS",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-FAQS-Dod15D9s.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-services-details",
    path: "/dark/page-services-details",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-services-details-BfmU4qtt.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-services",
    path: "/dark/page-services",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-services-BzbpEBCE.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-services2",
    path: "/dark/page-services2",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-services2-BfQ-J5G0.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-team-single",
    path: "/dark/page-team-single",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-team-single-BhLlZY1H.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-page-team",
    path: "/dark/page-team",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-team-DFd7qpA-.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-caption-cursor",
    path: "/dark/portfolio-caption-cursor",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-caption-cursor-1EmqLuTn.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-gallery",
    path: "/dark/portfolio-gallery",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-gallery-Dr8d0aqT.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-masonry",
    path: "/dark/portfolio-masonry",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-masonry-DQPh7BJM.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-metro",
    path: "/dark/portfolio-metro",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-metro-BS_iESjI.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-outline",
    path: "/dark/portfolio-outline",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-outline-DQSfKjPo.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-parallax",
    path: "/dark/portfolio-parallax",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-parallax-dtyuAnJj.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-standard",
    path: "/dark/portfolio-standard",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-standard-DxyCbXLt.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-portfolio-sticky",
    path: "/dark/portfolio-sticky",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-sticky-BUusZAJK.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-project1",
    path: "/dark/project1",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/project1-D_RIA85C.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-project2",
    path: "/dark/project2",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/project2-D31SIHbt.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-project3",
    path: "/dark/project3",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/project3-DZCTQ8Ng.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-project4",
    path: "/dark/project4",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/project4-DQxEplhU.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-project5",
    path: "/dark/project5",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/project5-BLIGVbbZ.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-project6",
    path: "/dark/project6",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/project6-BhymZ8sr.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-showcase-carousel",
    path: "/dark/showcase-carousel",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/showcase-carousel-CZuxXp0r.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-showcase-fullscreen",
    path: "/dark/showcase-fullscreen",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/showcase-fullscreen-DVRCBXlJ.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-showcase-half-slider",
    path: "/dark/showcase-half-slider",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/showcase-half-slider-DiseF486.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-showcase-interactive-center",
    path: "/dark/showcase-interactive-center",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/showcase-interactive-center-SiH46PTz.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-showcase-interactive-full",
    path: "/dark/showcase-interactive-full",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/showcase-interactive-full-CUDygLSL.mjs').then((m) => m.default || m)
  },
  {
    name: "dark-showcase-interactive-vertical",
    path: "/dark/showcase-interactive-vertical",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/showcase-interactive-vertical-CUX029y0.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/index-BQGoI9er.mjs').then((m) => m.default || m)
  },
  {
    name: "light-blog-classic",
    path: "/light/blog-classic",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/blog-classic-CpCP6k_D.mjs').then((m) => m.default || m)
  },
  {
    name: "light-blog-details",
    path: "/light/blog-details",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/blog-details-jUpY2cpz.mjs').then((m) => m.default || m)
  },
  {
    name: "light-blog-list",
    path: "/light/blog-list",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/blog-list-I_9ur7ol.mjs').then((m) => m.default || m)
  },
  {
    name: "light-blog-list2",
    path: "/light/blog-list2",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/blog-list2-BBIZANmY.mjs').then((m) => m.default || m)
  },
  {
    name: "light-home-asymmetric-portfolio",
    path: "/light/home-asymmetric-portfolio",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-asymmetric-portfolio-Bc-ZScod.mjs').then((m) => m.default || m)
  },
  {
    name: "light-home-creative-agency",
    path: "/light/home-creative-agency",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-creative-agency-BeR0VP0i.mjs').then((m) => m.default || m)
  },
  {
    name: "light-home-creative-portfolio",
    path: "/light/home-creative-portfolio",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-creative-portfolio-Cw3wJO6L.mjs').then((m) => m.default || m)
  },
  {
    name: "light-home-digital-agency",
    path: "/light/home-digital-agency",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-digital-agency-C1y6tep_.mjs').then((m) => m.default || m)
  },
  {
    name: "light-home-freelancer",
    path: "/light/home-freelancer",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-freelancer-BRMeZXm2.mjs').then((m) => m.default || m)
  },
  {
    name: "light-home-main",
    path: "/light/home-main",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-main-DPTAwMf4.mjs').then((m) => m.default || m)
  },
  {
    name: "light-home-minimal-portfolio",
    path: "/light/home-minimal-portfolio",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-minimal-portfolio-y7CHeiFH.mjs').then((m) => m.default || m)
  },
  {
    name: "light-home-modern-agency",
    path: "/light/home-modern-agency",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-modern-agency-B6rlXOBK.mjs').then((m) => m.default || m)
  },
  {
    name: "light-home-personal-vcard",
    path: "/light/home-personal-vcard",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-personal-vcard-zgAn7Uru.mjs').then((m) => m.default || m)
  },
  {
    name: "light-home-startup-onepage",
    path: "/light/home-startup-onepage",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/home-startup-onepage-CUm6P9eN.mjs').then((m) => m.default || m)
  },
  {
    name: "light-page-about",
    path: "/light/page-about",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-about-sWoDqngU.mjs').then((m) => m.default || m)
  },
  {
    name: "light-page-about2",
    path: "/light/page-about2",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-about2-CKW0uXY2.mjs').then((m) => m.default || m)
  },
  {
    name: "light-page-about3",
    path: "/light/page-about3",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-about3-BCmf1Fbg.mjs').then((m) => m.default || m)
  },
  {
    name: "light-page-contact",
    path: "/light/page-contact",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-contact-BMZ8fLot.mjs').then((m) => m.default || m)
  },
  {
    name: "light-page-contact2",
    path: "/light/page-contact2",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-contact2-CoX11CGJ.mjs').then((m) => m.default || m)
  },
  {
    name: "light-page-contact3",
    path: "/light/page-contact3",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-contact3-DAEfVgdK.mjs').then((m) => m.default || m)
  },
  {
    name: "light-page-error404",
    path: "/light/page-error404",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-error404-Dn1w1cKz.mjs').then((m) => m.default || m)
  },
  {
    name: "light-page-FAQS",
    path: "/light/page-FAQS",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-FAQS-BHsZshMl.mjs').then((m) => m.default || m)
  },
  {
    name: "light-page-services-details",
    path: "/light/page-services-details",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-services-details-CQiUw30M.mjs').then((m) => m.default || m)
  },
  {
    name: "light-page-services",
    path: "/light/page-services",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-services-CE0Yqys3.mjs').then((m) => m.default || m)
  },
  {
    name: "light-page-services2",
    path: "/light/page-services2",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-services2-rBd1dwN9.mjs').then((m) => m.default || m)
  },
  {
    name: "light-page-team-single",
    path: "/light/page-team-single",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-team-single-So6EOazT.mjs').then((m) => m.default || m)
  },
  {
    name: "light-page-team",
    path: "/light/page-team",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/page-team-Dj76Wwmm.mjs').then((m) => m.default || m)
  },
  {
    name: "light-portfolio-caption-cursor",
    path: "/light/portfolio-caption-cursor",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-caption-cursor-FuqluvDu.mjs').then((m) => m.default || m)
  },
  {
    name: "light-portfolio-gallery",
    path: "/light/portfolio-gallery",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-gallery-D9aSOAbh.mjs').then((m) => m.default || m)
  },
  {
    name: "light-portfolio-masonry",
    path: "/light/portfolio-masonry",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-masonry-DHEsEywk.mjs').then((m) => m.default || m)
  },
  {
    name: "light-portfolio-metro",
    path: "/light/portfolio-metro",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-metro-B7ahJzMQ.mjs').then((m) => m.default || m)
  },
  {
    name: "light-portfolio-outline",
    path: "/light/portfolio-outline",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-outline-D_OlFfkh.mjs').then((m) => m.default || m)
  },
  {
    name: "light-portfolio-parallax",
    path: "/light/portfolio-parallax",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-parallax-B6NXvYrD.mjs').then((m) => m.default || m)
  },
  {
    name: "light-portfolio-standard",
    path: "/light/portfolio-standard",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-standard-DvJYHP2H.mjs').then((m) => m.default || m)
  },
  {
    name: "light-portfolio-sticky",
    path: "/light/portfolio-sticky",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/portfolio-sticky-CBfFBAxm.mjs').then((m) => m.default || m)
  },
  {
    name: "light-project1",
    path: "/light/project1",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/project1-CuSDlJ1a.mjs').then((m) => m.default || m)
  },
  {
    name: "light-project2",
    path: "/light/project2",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/project2-B7HMZGKB.mjs').then((m) => m.default || m)
  },
  {
    name: "light-project3",
    path: "/light/project3",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/project3-CSX-WTZw.mjs').then((m) => m.default || m)
  },
  {
    name: "light-project4",
    path: "/light/project4",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/project4-BMvCRDA4.mjs').then((m) => m.default || m)
  },
  {
    name: "light-project5",
    path: "/light/project5",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/project5-CyFTrxeZ.mjs').then((m) => m.default || m)
  },
  {
    name: "light-project6",
    path: "/light/project6",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/project6-BCcOv9lJ.mjs').then((m) => m.default || m)
  },
  {
    name: "light-showcase-carousel",
    path: "/light/showcase-carousel",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/showcase-carousel-QxnRguU4.mjs').then((m) => m.default || m)
  },
  {
    name: "light-showcase-fullscreen",
    path: "/light/showcase-fullscreen",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/showcase-fullscreen-CQJld8s2.mjs').then((m) => m.default || m)
  },
  {
    name: "light-showcase-half-slider",
    path: "/light/showcase-half-slider",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/showcase-half-slider-DygcIM1B.mjs').then((m) => m.default || m)
  },
  {
    name: "light-showcase-interactive-center",
    path: "/light/showcase-interactive-center",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/showcase-interactive-center-BaIZwzTE.mjs').then((m) => m.default || m)
  },
  {
    name: "light-showcase-interactive-full",
    path: "/light/showcase-interactive-full",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/showcase-interactive-full-DYex-uIP.mjs').then((m) => m.default || m)
  },
  {
    name: "light-showcase-interactive-vertical",
    path: "/light/showcase-interactive-vertical",
    meta: {},
    alias: [],
    redirect: void 0 ,
    component: () => import('./_nuxt/showcase-interactive-vertical-UQ7il1cD.mjs').then((m) => m.default || m)
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure) {
        await nuxtApp.callHook("page:loading:end");
      }
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY
];
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const messages = {
  en: {
    nav: {
      home: "Home",
      works: "Works",
      connect: "Connect",
      menu: "Menu"
    },
    ribbons: {
      left: "BUILDING DIGITAL DESIGN",
      right: "CREATIVE STUDIO"
    },
    // en messages.en
    hero: {
      line_1: "We create",
      line_2: "impactful",
      line_3: "digital experiences",
      paragraph: "We combine forward-thinking design with modern technology to tell stories that transform and grow our partners’ brands."
    },
    // EN
    intro: {
      headline_1: "If you’re looking for a specialist to build a",
      headline_2: "meaningful digital project you can easily",
      headline_3: "reach us by clicking",
      headline_cta: "here",
      years_label: "Years of Experience",
      years_amount: "3",
      paragraph: "Whether you are a development agency looking to outsource design work, a company in search of a Product Designer or Product Team, a marketing agency that needs a landing page, a startup that wants to launch an app, or an enterprise that plans to rebrand or redesign its website, we welcome any challenge with our arms wide open.",
      marquee: [
        "UI-UX Design",
        "Web Development",
        "Digital Marketing",
        "Digital Product",
        "Branding Design"
      ]
    },
    servicesIntro: {
      watch: "Watch Intro",
      why: "Why Choose Us",
      titleLines: ["Best creative & modern", "digital agency."],
      paragraph: "We craft brands, websites and digital products that are beautiful, fast and purposeful.",
      stats: {
        projects_value: 7,
        projects_label: ["Projects", "Completed"],
        satisfaction_value: 10,
        satisfaction_unit: "+",
        satisfaction_label: ["Customers", "Satisfaction"]
      }
    },
    services2: {
      eyebrow: "Our Specialize",
      title_a: "Comprehensive",
      title_b: "Services.",
      read_more: "Read More"
    },
    services: {
      title: "What we do",
      list: [
        {
          name: "Branding & Identity",
          desc: "We build identities that connect with people and leave a mark."
        },
        {
          name: "Web & Digital Experiences",
          desc: "From sleek websites to immersive platforms, we design with purpose and style."
        },
        {
          name: "Creative Strategy",
          desc: "We align creativity with business goals to generate measurable results."
        }
      ],
      cta: "View services"
    },
    works: {
      title: "Selected work",
      subtitle: "A showcase of projects that merge design, technology, and storytelling.",
      cta: "View all projects"
    },
    contact: {
      title: "Let’s start something great together",
      subtitle: "Tell us about your project, and let’s make it happen.",
      cta: "Get in touch",
      success: "Thanks! We’ll get back to you shortly."
    },
    footer: {
      claim: "Magno Studio — Design, Technology & Bold Ideas."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      works: "Proyectos",
      connect: "Contacto",
      menu: "Menú"
    },
    ribbons: {
      left: "DISEÑO DIGITAL EN ACCIÓN",
      right: "ESTUDIO CREATIVO"
    },
    // en messages.es
    hero: {
      line_1: "Creamos",
      line_2: "Experiencias",
      line_3: "con impacto",
      paragraph: "Combinamos diseño de vanguardia con tecnología moderna para contar historias que transforman y hacen crecer a nuestras marcas aliadas."
    },
    // ES
    intro: {
      headline_1: "Si buscás un especialista para construir un",
      headline_2: "proyecto digital con sentido, podés",
      headline_3: "contactarnos haciendo clic",
      headline_cta: "aquí",
      years_label: "Años de experiencia",
      paragraph: "Ya seas una agencia de desarrollo que quiere tercerizar diseño, una empresa en busca de un Product Designer o un equipo de Producto, una agencia de marketing que necesita una landing, una startup que quiere lanzar una app o una compañía que planea rebranding o rediseño web, recibimos cada desafío con los brazos abiertos.",
      marquee: [
        "Diseño UI-UX",
        "Desarrollo Web",
        "Marketing Digital",
        "Producto Digital",
        "Branding"
      ]
    },
    servicesIntro: {
      watch: "Ver Intro",
      why: "¿Por qué elegirnos?",
      titleLines: ["La agencia creativa y", "moderna que necesitás."],
      paragraph: "Diseñamos marcas, sitios web y productos digitales bellos, rápidos y con propósito.",
      stats: {
        projects_value: 7,
        projects_label: ["Proyectos", "Completados"],
        satisfaction_value: 10,
        satisfaction_unit: "+",
        satisfaction_label: ["Clientes", "Satisfechos"]
      }
    },
    services2: {
      eyebrow: "Nos especializamos en",
      title_a: "Servicios",
      title_b: "integrales.",
      read_more: "Ver más"
    },
    services: {
      title: "Qué hacemos",
      list: [
        {
          name: "Branding & Identidad",
          desc: "Creamos identidades que conectan con las personas y dejan huella."
        },
        {
          name: "Web & Experiencias Digitales",
          desc: "Desde sitios elegantes hasta plataformas inmersivas, diseñamos con propósito y estilo."
        },
        {
          name: "Estrategia Creativa",
          desc: "Alineamos creatividad con objetivos de negocio para generar resultados medibles."
        }
      ],
      cta: "Ver servicios"
    },
    works: {
      title: "Trabajos destacados",
      subtitle: "Una muestra de proyectos que unen diseño, tecnología y storytelling.",
      cta: "Ver todos los proyectos"
    },
    contact: {
      title: "Hagamos algo grande juntos",
      subtitle: "Cuéntanos sobre tu proyecto y hagámoslo realidad.",
      cta: "Escríbenos",
      success: "¡Gracias! Te responderemos muy pronto."
    },
    footer: {
      claim: "Magno Studio — Diseño, Tecnología e Ideas que inspiran."
    }
  }
};
const I18N_KEY = Symbol("i18n");
function createI18n(initial = "es") {
  const state = reactive({
    locale: initial
  });
  const t = (path) => path.split(".").reduce((acc, key) => acc == null ? void 0 : acc[key], messages[state.locale]);
  const current = computed(() => state.locale);
  const setLocale = (l) => state.locale = l;
  return { t, current, setLocale };
}
function provideI18n(initial = "es") {
  const i18n = createI18n(initial);
  provide(I18N_KEY, i18n);
  return i18n;
}
function useI18n() {
  const i18n = inject(I18N_KEY);
  if (!i18n)
    throw new Error("i18n not provided");
  return i18n;
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    provideI18n("es");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtPage, _attrs, null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    (_error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./_nuxt/error-404-C9w8gBlg.mjs').then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import('./_nuxt/error-500-C9B0FO9a.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = defineAsyncComponent(() => import('./_nuxt/island-renderer-eQdyCZUE.mjs').then((r) => r.default || r));
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { useRuntimeConfig as a, navigateTo as b, createError as c, useI18n as d, entry$1 as default, injectHead as i, nuxtLinkDefaults as n, resolveUnrefHeadInput as r, useRouter as u };
//# sourceMappingURL=server.mjs.map
