import { _ as __nuxt_component_0 } from "./nuxt-link-BJqo5zun.js";
import { defineComponent, computed, ref, watch, watchEffect, mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { u as useFavoritesStore } from "./favorites-DaWAitrr.js";
import { useRouter } from "vue-router";
import "C:/Users/nashi/malias-7-8/node_modules/hookable/dist/index.mjs";
import { u as useCookie } from "../server.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import "C:/Users/nashi/malias-7-8/node_modules/klona/dist/index.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "C:/Users/nashi/malias-7-8/node_modules/ufo/dist/index.mjs";
import "pinia";
import "ofetch";
import "C:/Users/nashi/malias-7-8/node_modules/unctx/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/radix3/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/destr/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/ohash/dist/index.mjs";
import "deep-pick-omit";
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
      return "ゲスト";
    });
    __expose({ logout });
    const folder = ref("5_11koyama sama");
    const imagesData = ref([]);
    const loading = ref(false);
    const leftIndex = ref(0);
    const rightIndex = ref(0);
    const leftImage = computed(() => imagesData.value[leftIndex.value] || { url: "", fileName: "画像がありません" });
    const rightImage = computed(() => imagesData.value[rightIndex.value] || { url: "", fileName: "画像がありません" });
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))} data-v-e55d641d><h1 data-v-e55d641d>✅ トップページに来ました</h1><h1 class="text-xl font-bold mb-2" data-v-e55d641d>ようこそ、${ssrInterpolate(userName.value)} さん。</h1><button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" data-v-e55d641d> ログアウト </button><h1 class="text-2xl font-bold mb-4" data-v-e55d641d>フォルダ内の画像ギャラリー</h1><input${ssrRenderAttr("value", folder.value)} type="text" placeholder="例: 5_11koyama sama" class="border border-gray-300 p-2 rounded mb-4 w-full" data-v-e55d641d><button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" data-v-e55d641d> 画像を読み込む </button>`);
      if (loading.value) {
        _push(`<div class="mt-4 text-gray-500" data-v-e55d641d>読み込み中...</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!loading.value && imagesData.value.length === 0) {
        _push(`<div class="mt-4 text-gray-500" data-v-e55d641d>画像が見つかりません。</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="image-selector mt-10" data-v-e55d641d><div class="monitor-container" data-v-e55d641d><div class="monitor monitor-left" data-v-e55d641d><div class="image-wrapper" data-v-e55d641d><img${ssrRenderAttr("src", leftImage.value.url)}${ssrRenderAttr("alt", leftImage.value.fileName)} data-v-e55d641d></div><div class="image-name" data-v-e55d641d>${ssrInterpolate(leftImage.value.fileName)}</div></div><div class="monitor monitor-right" data-v-e55d641d><div class="image-wrapper" data-v-e55d641d><img${ssrRenderAttr("src", rightImage.value.url)}${ssrRenderAttr("alt", rightImage.value.fileName)} data-v-e55d641d></div><div class="image-name" data-v-e55d641d>${ssrInterpolate(rightImage.value.fileName)}</div></div></div><div class="toggle-scroll-link" data-v-e55d641d><label data-v-e55d641d><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isScrollLinked.value) ? ssrLooseContain(isScrollLinked.value, null) : isScrollLinked.value) ? " checked" : ""} data-v-e55d641d> サムネイルのスクロールを連動させる </label></div><div class="thumbnail-container flex gap-4" data-v-e55d641d><div class="thumbnail left-thumbnail overflow-x-auto whitespace-nowrap w-full" data-v-e55d641d><div class="flex gap-2" data-v-e55d641d><!--[-->`);
      ssrRenderList(imagesData.value, (img, index2) => {
        _push(`<div class="${ssrRenderClass([{ active: index2 === leftIndex.value }, "thumbnail-item flex-shrink-0 w-32"])}" data-v-e55d641d><img${ssrRenderAttr("src", img.url)}${ssrRenderAttr("alt", img.fileName)} class="w-full h-auto object-contain rounded" data-v-e55d641d><span class="thumb-name block text-center text-sm mt-1" data-v-e55d641d>${ssrInterpolate(img.fileName)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="thumbnail right-thumbnail overflow-x-auto whitespace-nowrap w-full" data-v-e55d641d><div class="flex gap-2" data-v-e55d641d><!--[-->`);
      ssrRenderList(imagesData.value, (img, index2) => {
        _push(`<div class="${ssrRenderClass([{ active: index2 === rightIndex.value }, "thumbnail-item flex-shrink-0 w-32"])}" data-v-e55d641d><img${ssrRenderAttr("src", img.url)}${ssrRenderAttr("alt", img.fileName)} class="w-full h-auto object-contain rounded" data-v-e55d641d><span class="thumb-name block text-center text-sm mt-1" data-v-e55d641d>${ssrInterpolate(img.fileName)}</span></div>`);
      });
      _push(`<!--]--></div></div></div><div class="controls" data-v-e55d641d><button data-v-e55d641d>お気に入りに追加（左画像）</button><button data-v-e55d641d>お気に入りに追加（右画像）</button></div><div class="favorites-nav" data-v-e55d641d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/favorites" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="favorites-button" data-v-e55d641d${_scopeId}>お気に入りページへ</button>`);
          } else {
            return [
              createVNode("button", { class: "favorites-button" }, "お気に入りページへ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="favorites" data-v-e55d641d><h3 data-v-e55d641d>お気に入り画像</h3><div class="favorites-gallery" data-v-e55d641d><!--[-->`);
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
export {
  index as default
};
//# sourceMappingURL=index-B1vaQkbQ.js.map
