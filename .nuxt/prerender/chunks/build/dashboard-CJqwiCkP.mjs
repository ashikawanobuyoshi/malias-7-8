import { defineComponent, mergeProps, unref, useSSRContext } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue/server-renderer/index.mjs';
import { a as useAuthStore } from './server.mjs';
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
import 'file://C:/Users/nashi/malias-7-8/node_modules/ohash/dist/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const user = auth.user;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><h1 class="text-xl font-bold">\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9</h1>`);
      if (((_a = unref(user)) == null ? void 0 : _a.role) === "admin") {
        _push(`<p>\u3088\u3046\u3053\u305D\u3001<strong>\u7BA1\u7406\u8005\u69D8</strong>\u3002</p>`);
      } else {
        _push(`<p>\u3088\u3046\u3053\u305D\u3001${ssrInterpolate(((_b = unref(user)) == null ? void 0 : _b.name) || "\u30E6\u30FC\u30B6\u30FC")}\u3055\u3093\u3002</p>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-CJqwiCkP.mjs.map
