import { defineComponent, withAsyncContext, mergeProps, unref, computed, toValue, reactive, watch, useSSRContext } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue/server-renderer/index.mjs';
import { c as useRoute, f as fetchDefaults, b as useRequestFetch } from './server.mjs';
import { hash } from 'file://C:/Users/nashi/malias-7-8/node_modules/ohash/dist/index.mjs';
import { isPlainObject } from 'file://C:/Users/nashi/malias-7-8/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import { u as useAsyncData } from './asyncData-p7p-Qn7f.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/nashi/malias-7-8/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/nashi/malias-7-8/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/nashi/malias-7-8/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/devalue/index.js';
import 'file://C:/Users/nashi/malias-7-8/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/deep-pick-omit/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/perfect-debounce/dist/index.mjs';

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = [{}, arg1];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  if (!immediate) {
    let setImmediate = function() {
      _asyncDataOptions.immediate = true;
    };
    watch(key, setImmediate, { flush: "sync", once: true });
    watch([...watchSources || [], _fetchOptions], setImmediate, { flush: "sync", once: true });
  }
  let controller;
  const asyncData = useAsyncData(watchSources === false ? key.value : key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[folder]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const folder = route.params.folder;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/list-images?folder=${encodeURIComponent(folder)}`, "$6nDESici0Y")), __temp = await __temp, __restore(), __temp);
    const images = ((_a = data.value) == null ? void 0 : _a.images) || [];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><h1 class="text-2xl font-bold mb-6">\u30D5\u30A9\u30EB\u30C0\uFF1A${ssrInterpolate(unref(folder))}</h1>`);
      if (unref(images).length) {
        _push(`<div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
        ssrRenderList(unref(images), (img) => {
          _push(`<img${ssrRenderAttr("src", img.url)} class="rounded shadow"${ssrRenderAttr("alt", img.key)}>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<p>\u753B\u50CF\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002</p>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/folder/[folder].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_folder_-CVYJPD0J.mjs.map
