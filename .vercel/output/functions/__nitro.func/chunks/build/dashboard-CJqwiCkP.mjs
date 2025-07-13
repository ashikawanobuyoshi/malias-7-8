import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { a as useAuthStore } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';

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
