import { _ as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, ref, useSSRContext } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue-router/dist/vue-router.node.mjs';
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
import 'file://C:/Users/nashi/malias-7-8/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/deep-pick-omit/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    ref("");
    ref("");
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-B43bLAo4.mjs.map
