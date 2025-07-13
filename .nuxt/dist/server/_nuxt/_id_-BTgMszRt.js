import { _ as __nuxt_component_0 } from "./nuxt-link-BJqo5zun.js";
import { defineComponent, computed, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import { u as useFavoritesStore } from "./favorites-DaWAitrr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "C:/Users/nashi/malias-7-8/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/nashi/malias-7-8/node_modules/hookable/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/unctx/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs";
import "pinia";
import "C:/Users/nashi/malias-7-8/node_modules/defu/dist/defu.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/radix3/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/destr/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/ohash/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/klona/dist/index.mjs";
import "deep-pick-omit";
function serializeJson(data) {
  return JSON.stringify(data);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    if (process.env.NODE_ENV === "development") {
      console.log("serializeJson test:", serializeJson('{"key": "value"}'));
    }
    const route = useRoute();
    const router = useRouter();
    const favoritesStore = useFavoritesStore();
    const idParam = route.params.id;
    const id = Number(idParam);
    if (isNaN(id)) {
      console.error("無効なID:", idParam);
      router.replace("/not-found");
    } else {
      if (process.env.NODE_ENV === "development") {
        console.log("Route params:", route.params);
        console.log("Received ID:", id);
      }
    }
    const selectedImage = computed(() => {
      return id >= 0 && id < favoritesStore.favoriteImages.length ? favoritesStore.favoriteImages[id] : null;
    });
    console.log("Selected Image:", selectedImage.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d2825568><h2 data-v-d2825568>お気に入り画像の詳細</h2>`);
      if (selectedImage.value) {
        _push(`<div data-v-d2825568><img${ssrRenderAttr("src", selectedImage.value.url)} alt="Favorite Image" data-v-d2825568><p data-v-d2825568>ファイル名: ${ssrInterpolate(selectedImage.value.fileName)}</p><button data-v-d2825568>お気に入りから削除</button>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/favorites/all" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`戻る`);
            } else {
              return [
                createTextVNode("戻る")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-d2825568><p data-v-d2825568>画像が見つかりません</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/favorites/all" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`戻る`);
            } else {
              return [
                createTextVNode("戻る")
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
export {
  _id_ as default
};
//# sourceMappingURL=_id_-BTgMszRt.js.map
