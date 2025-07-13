import { _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
import "C:/Users/nashi/malias-7-8/node_modules/hookable/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/klona/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "ofetch";
import "C:/Users/nashi/malias-7-8/node_modules/unctx/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs";
import "pinia";
import "C:/Users/nashi/malias-7-8/node_modules/radix3/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/ufo/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/destr/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/ohash/dist/index.mjs";
import "deep-pick-omit";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    ref("");
    ref("");
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=login-B43bLAo4.js.map
