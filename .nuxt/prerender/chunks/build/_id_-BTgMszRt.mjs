import { _ as __nuxt_component_0 } from './nuxt-link-BJqo5zun.mjs';
import { defineComponent, computed, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue/server-renderer/index.mjs';
import { useRoute, useRouter } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useFavoritesStore } from './favorites-DaWAitrr.mjs';
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
import 'file://C:/Users/nashi/malias-7-8/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/deep-pick-omit/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const favoritesStore = useFavoritesStore();
    const idParam = route.params.id;
    const id = Number(idParam);
    if (isNaN(id)) {
      console.error("\u7121\u52B9\u306AID:", idParam);
      router.replace("/not-found");
    }
    const selectedImage = computed(() => {
      return id >= 0 && id < favoritesStore.favoriteImages.length ? favoritesStore.favoriteImages[id] : null;
    });
    console.log("Selected Image:", selectedImage.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d2825568><h2 data-v-d2825568>\u304A\u6C17\u306B\u5165\u308A\u753B\u50CF\u306E\u8A73\u7D30</h2>`);
      if (selectedImage.value) {
        _push(`<div data-v-d2825568><img${ssrRenderAttr("src", selectedImage.value.url)} alt="Favorite Image" data-v-d2825568><p data-v-d2825568>\u30D5\u30A1\u30A4\u30EB\u540D: ${ssrInterpolate(selectedImage.value.fileName)}</p><button data-v-d2825568>\u304A\u6C17\u306B\u5165\u308A\u304B\u3089\u524A\u9664</button>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/favorites/all" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u623B\u308B`);
            } else {
              return [
                createTextVNode("\u623B\u308B")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-d2825568><p data-v-d2825568>\u753B\u50CF\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/favorites/all" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u623B\u308B`);
            } else {
              return [
                createTextVNode("\u623B\u308B")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/favorites/details/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d2825568"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BTgMszRt.mjs.map
