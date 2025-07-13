import { _ as __nuxt_component_0 } from "./nuxt-link-BJqo5zun.js";
import { defineComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "C:/Users/nashi/malias-7-8/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/nashi/malias-7-8/node_modules/hookable/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/unctx/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs";
import "pinia";
import "C:/Users/nashi/malias-7-8/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "C:/Users/nashi/malias-7-8/node_modules/radix3/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/destr/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/ohash/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/klona/dist/index.mjs";
import "deep-pick-omit";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    const products = [
      {
        id: 1,
        productName: "プリント"
      },
      {
        id: 2,
        productName: "CDプラン"
      },
      {
        id: 3,
        productName: "CD2"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>商品一覧</h1><ul><!--[-->`);
      ssrRenderList(products, (product) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/product-details/${product.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(product.productName)}`);
            } else {
              return [
                createTextVNode(toDisplayString(product.productName), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=products-h6dtpQw-.js.map
