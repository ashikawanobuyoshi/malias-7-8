import { _ as __nuxt_component_0 } from './nuxt-link-BJqo5zun.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { u as useFavoritesStore } from './favorites-DaWAitrr.mjs';
import { storeToRefs } from 'pinia';
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
import 'vue-router';
import 'deep-pick-omit';

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
