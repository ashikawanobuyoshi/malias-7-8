import { _ as __nuxt_component_0 } from './nuxt-link-BJqo5zun.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue/server-renderer/index.mjs';
import { u as useFavoritesStore } from './favorites-DaWAitrr.mjs';
import { storeToRefs } from 'file://C:/Users/nashi/malias-7-8/node_modules/pinia/dist/pinia.prod.cjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs';
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
import 'file://C:/Users/nashi/malias-7-8/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/deep-pick-omit/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "all",
  __ssrInlineRender: true,
  setup(__props) {
    const { favoriteImages } = storeToRefs(favoritesStore);
    const favoritesStore = useFavoritesStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "favorites-gallery" }, _attrs))} data-v-69e9ff99><h2 data-v-69e9ff99>\u304A\u6C17\u306B\u5165\u308A\u4E00\u89A7</h2>`);
      if (unref(favoritesStore).favoriteImages.length === 0) {
        _push(`<div data-v-69e9ff99> \u304A\u6C17\u306B\u5165\u308A\u753B\u50CF\u306F\u3042\u308A\u307E\u305B\u3093 </div>`);
      } else {
        _push(`<div data-v-69e9ff99><!--[-->`);
        ssrRenderList(unref(favoriteImages), (favImg, index) => {
          _push(`<div data-v-69e9ff99>${ssrInterpolate(favImg.fileName)} <img${ssrRenderAttr("src", favImg.url)} alt="Favorite Image" data-v-69e9ff99><div class="fav-image-name" data-v-69e9ff99>${ssrInterpolate(favImg.fileName)}</div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/favorites/details/${index}`,
            class: "details-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u8A73\u7D30\u3092\u898B\u308B `);
              } else {
                return [
                  createTextVNode(" \u8A73\u7D30\u3092\u898B\u308B ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/favorites/all.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const all = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-69e9ff99"]]);

export { all as default };
//# sourceMappingURL=all-9HzZdesP.mjs.map
