import { _ as __nuxt_component_0 } from './nuxt-link-BJqo5zun.mjs';
import { defineComponent, computed, ref, watch, watchEffect, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { u as useFavoritesStore } from './favorites-DaWAitrr.mjs';
import { useRouter } from 'vue-router';
import { u as useCookie } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'deep-pick-omit';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const router = useRouter();
    const logout = async () => {
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
      const isAuthenticated = useCookie("isAuthenticated");
      isAuthenticated.value = "";
      await router.push("/login");
    };
    const userName = computed(() => {
      return "\u30B2\u30B9\u30C8";
    });
    __expose({ logout });
    const folder = ref("5_11koyama sama");
    const imagesData = ref([]);
    const loading = ref(false);
    const leftIndex = ref(0);
    const rightIndex = ref(0);
    const leftImage = computed(() => imagesData.value[leftIndex.value] || { url: "", fileName: "\u753B\u50CF\u304C\u3042\u308A\u307E\u305B\u3093" });
    const rightImage = computed(() => imagesData.value[rightIndex.value] || { url: "", fileName: "\u753B\u50CF\u304C\u3042\u308A\u307E\u305B\u3093" });
    const favoritesStore = useFavoritesStore();
    const leftThumbnail = ref(null);
    const rightThumbnail = ref(null);
    const isScrollLinked = ref(true);
    let leftScrollHandler = null;
    let rightScrollHandler = null;
    watch(
      () => favoritesStore.favoriteImages,
      (newVal) => {
        localStorage.setItem("favoriteImages", JSON.stringify(newVal));
      },
      { deep: true }
    );
    watchEffect(() => {
      if (!leftThumbnail.value || !rightThumbnail.value) return;
      leftThumbnail.value.removeEventListener("scroll", leftScrollHandler);
      rightThumbnail.value.removeEventListener("scroll", rightScrollHandler);
      if (isScrollLinked.value) {
        leftScrollHandler = () => {
          if (rightThumbnail.value && leftThumbnail.value) {
            rightThumbnail.value.scrollLeft = leftThumbnail.value.scrollLeft;
          }
        };
        rightScrollHandler = () => {
          if (leftThumbnail.value && rightThumbnail.value) {
            leftThumbnail.value.scrollLeft = rightThumbnail.value.scrollLeft;
          }
        };
        leftThumbnail.value.addEventListener("scroll", leftScrollHandler);
        rightThumbnail.value.addEventListener("scroll", rightScrollHandler);
      } else {
        leftScrollHandler = null;
        rightScrollHandler = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))} data-v-e55d641d><h1 data-v-e55d641d>\u2705 \u30C8\u30C3\u30D7\u30DA\u30FC\u30B8\u306B\u6765\u307E\u3057\u305F</h1><h1 class="text-xl font-bold mb-2" data-v-e55d641d>\u3088\u3046\u3053\u305D\u3001${ssrInterpolate(userName.value)} \u3055\u3093\u3002</h1><button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" data-v-e55d641d> \u30ED\u30B0\u30A2\u30A6\u30C8 </button><h1 class="text-2xl font-bold mb-4" data-v-e55d641d>\u30D5\u30A9\u30EB\u30C0\u5185\u306E\u753B\u50CF\u30AE\u30E3\u30E9\u30EA\u30FC</h1><input${ssrRenderAttr("value", folder.value)} type="text" placeholder="\u4F8B: 5_11koyama sama" class="border border-gray-300 p-2 rounded mb-4 w-full" data-v-e55d641d><button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" data-v-e55d641d> \u753B\u50CF\u3092\u8AAD\u307F\u8FBC\u3080 </button>`);
      if (loading.value) {
        _push(`<div class="mt-4 text-gray-500" data-v-e55d641d>\u8AAD\u307F\u8FBC\u307F\u4E2D...</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!loading.value && imagesData.value.length === 0) {
        _push(`<div class="mt-4 text-gray-500" data-v-e55d641d>\u753B\u50CF\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="image-selector mt-10" data-v-e55d641d><div class="monitor-container" data-v-e55d641d><div class="monitor monitor-left" data-v-e55d641d><div class="image-wrapper" data-v-e55d641d><img${ssrRenderAttr("src", leftImage.value.url)}${ssrRenderAttr("alt", leftImage.value.fileName)} data-v-e55d641d></div><div class="image-name" data-v-e55d641d>${ssrInterpolate(leftImage.value.fileName)}</div></div><div class="monitor monitor-right" data-v-e55d641d><div class="image-wrapper" data-v-e55d641d><img${ssrRenderAttr("src", rightImage.value.url)}${ssrRenderAttr("alt", rightImage.value.fileName)} data-v-e55d641d></div><div class="image-name" data-v-e55d641d>${ssrInterpolate(rightImage.value.fileName)}</div></div></div><div class="toggle-scroll-link" data-v-e55d641d><label data-v-e55d641d><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isScrollLinked.value) ? ssrLooseContain(isScrollLinked.value, null) : isScrollLinked.value) ? " checked" : ""} data-v-e55d641d> \u30B5\u30E0\u30CD\u30A4\u30EB\u306E\u30B9\u30AF\u30ED\u30FC\u30EB\u3092\u9023\u52D5\u3055\u305B\u308B </label></div><div class="thumbnail-container flex gap-4" data-v-e55d641d><div class="thumbnail left-thumbnail overflow-x-auto whitespace-nowrap w-full" data-v-e55d641d><div class="flex gap-2" data-v-e55d641d><!--[-->`);
      ssrRenderList(imagesData.value, (img, index2) => {
        _push(`<div class="${ssrRenderClass([{ active: index2 === leftIndex.value }, "thumbnail-item flex-shrink-0 w-32"])}" data-v-e55d641d><img${ssrRenderAttr("src", img.url)}${ssrRenderAttr("alt", img.fileName)} class="w-full h-auto object-contain rounded" data-v-e55d641d><span class="thumb-name block text-center text-sm mt-1" data-v-e55d641d>${ssrInterpolate(img.fileName)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="thumbnail right-thumbnail overflow-x-auto whitespace-nowrap w-full" data-v-e55d641d><div class="flex gap-2" data-v-e55d641d><!--[-->`);
      ssrRenderList(imagesData.value, (img, index2) => {
        _push(`<div class="${ssrRenderClass([{ active: index2 === rightIndex.value }, "thumbnail-item flex-shrink-0 w-32"])}" data-v-e55d641d><img${ssrRenderAttr("src", img.url)}${ssrRenderAttr("alt", img.fileName)} class="w-full h-auto object-contain rounded" data-v-e55d641d><span class="thumb-name block text-center text-sm mt-1" data-v-e55d641d>${ssrInterpolate(img.fileName)}</span></div>`);
      });
      _push(`<!--]--></div></div></div><div class="controls" data-v-e55d641d><button data-v-e55d641d>\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0\uFF08\u5DE6\u753B\u50CF\uFF09</button><button data-v-e55d641d>\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0\uFF08\u53F3\u753B\u50CF\uFF09</button></div><div class="favorites-nav" data-v-e55d641d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/favorites" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="favorites-button" data-v-e55d641d${_scopeId}>\u304A\u6C17\u306B\u5165\u308A\u30DA\u30FC\u30B8\u3078</button>`);
          } else {
            return [
              createVNode("button", { class: "favorites-button" }, "\u304A\u6C17\u306B\u5165\u308A\u30DA\u30FC\u30B8\u3078")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="favorites" data-v-e55d641d><h3 data-v-e55d641d>\u304A\u6C17\u306B\u5165\u308A\u753B\u50CF</h3><div class="favorites-gallery" data-v-e55d641d><!--[-->`);
      ssrRenderList(unref(favoritesStore).favoriteImages, (favImg, index2) => {
        _push(`<div class="favorite-item" data-v-e55d641d><img${ssrRenderAttr("src", favImg.url)}${ssrRenderAttr("alt", favImg.fileName)} data-v-e55d641d></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e55d641d"]]);

export { index as default };
//# sourceMappingURL=index-B1vaQkbQ.mjs.map
