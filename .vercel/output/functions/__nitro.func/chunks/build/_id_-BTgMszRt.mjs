import { _ as __nuxt_component_0 } from './nuxt-link-BJqo5zun.mjs';
import { defineComponent, computed, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useFavoritesStore } from './favorites-DaWAitrr.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'deep-pick-omit';

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
