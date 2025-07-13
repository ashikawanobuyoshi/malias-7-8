import { _ as __nuxt_component_0 } from "./nuxt-link-BJqo5zun.js";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { u as useFavoritesStore } from "./favorites-DaWAitrr.js";
import { storeToRefs } from "pinia";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "C:/Users/nashi/malias-7-8/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/nashi/malias-7-8/node_modules/hookable/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/unctx/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "C:/Users/nashi/malias-7-8/node_modules/radix3/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/destr/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/ohash/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/klona/dist/index.mjs";
import "deep-pick-omit";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "all",
  __ssrInlineRender: true,
  setup(__props) {
    const { favoriteImages } = storeToRefs(favoritesStore);
    const favoritesStore = useFavoritesStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "favorites-gallery" }, _attrs))} data-v-69e9ff99><h2 data-v-69e9ff99>お気に入り一覧</h2>`);
      if (unref(favoritesStore).favoriteImages.length === 0) {
        _push(`<div data-v-69e9ff99> お気に入り画像はありません </div>`);
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
                _push2(` 詳細を見る `);
              } else {
                return [
                  createTextVNode(" 詳細を見る ")
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
export {
  all as default
};
//# sourceMappingURL=all-9HzZdesP.js.map
