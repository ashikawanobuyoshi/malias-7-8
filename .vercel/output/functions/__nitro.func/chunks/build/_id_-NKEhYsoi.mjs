import { defineComponent, ref, computed, watchEffect, withAsyncContext, watch, unref, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useAsyncData } from './asyncData-p7p-Qn7f.mjs';
import { defineStore } from 'pinia';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'deep-pick-omit';

const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favoriteImages: []
  }),
  actions: {
    addFavorite(image) {
      this.favoriteImages.push(image);
    },
    removeFavorite(index) {
      this.favoriteImages.splice(index, 1);
    }
  },
  persist: true
});
function serializeJson(data) {
  try {
    return JSON.stringify(data);
  } catch (error) {
    console.error("\u30B7\u30EA\u30A2\u30E9\u30A4\u30BA\u30A8\u30E9\u30FC:", error);
    return "[]";
  }
}
const TAX_RATE = 0.1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const isSubmitting = ref(false);
    const productId = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = route.params.id) == null ? void 0 : _a.toString()) != null ? _a2 : "";
    });
    watchEffect(() => {
      console.log("\u{1F9EA} typeof productId:", typeof productId);
      console.log("\u{1F9EA} typeof productId.value:", typeof productId.value);
      console.log("\u{1F9EA} productId.value:", productId.value);
      if (!productId.value || productId.value === "undefined") {
        console.warn("Invalid product ID:", productId.value);
        router.replace("/");
      }
    });
    console.log("Product ID:", productId.value);
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("product", () => {
      var _a;
      const id = String((_a = route.params.id) != null ? _a : "");
      return $fetch(`/api/products/${id}`);
    })), __temp = await __temp, __restore(), __temp);
    const favoritesStore = useFavoritesStore();
    const additionalItems = ref([]);
    const customItems = ref([]);
    const plainProduct = ref({ name: "\u5546\u54C1\u540D", price: 0 });
    watch(
      () => productId.value,
      async (newId) => {
        if (!newId) {
          console.warn("productId is undefined or empty. Fetch skipped.");
          return;
        }
        console.log("\u{1F9EA} Fetch\u5BFE\u8C61\u306E productId:", newId);
        try {
          const res = await $fetch(`/api/print-options?productId=${newId}`);
          console.log("\u{1F4E6} print-options API\u30EC\u30B9\u30DD\u30F3\u30B9:", res);
          additionalItems.value = res.map((item) => ({
            ...item,
            selected: false,
            quantity: 0
          }));
        } catch (error2) {
          console.error("\u274C print-options \u306E\u53D6\u5F97\u306B\u5931\u6557:", error2);
        }
      },
      { immediate: true }
    );
    watch(
      () => favoritesStore.favoriteImages,
      (val) => {
        localStorage.setItem("favoriteImages", serializeJson(val));
      },
      { deep: true }
    );
    function calculatePrice(type, quantity) {
      const prices = {
        \u56DB\u3064\u5207: 5800,
        \u516D\u5207\u308A: 4800,
        \u30AD\u30E3\u30D3\u30CD: 3800,
        \u624B\u672D: 3500
      };
      if (!type || !quantity) return 0;
      return prices[type] * quantity;
    }
    const selectedAdditionalItems = computed(
      () => additionalItems.value.filter((item) => item.selected && item.quantity > 0)
    );
    computed(
      () => selectedAdditionalItems.value.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    );
    const newCustomItem = ref({
      name: "",
      price: 0,
      quantity: 1,
      fileName: ""
    });
    ref([]);
    const totalPrice = computed(() => {
      var _a, _b;
      const favTotal = Array.isArray(favoritesStore.favoriteImages) ? favoritesStore.favoriteImages.reduce(
        (sum, img) => sum + calculatePrice(img.selectedType, img.quantity),
        0
      ) : 0;
      const customTotal = ((_a = customItems.value) != null ? _a : []).reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const optionTotal = ((_b = additionalItems.value) != null ? _b : []).reduce(
        (sum, item) => item.selected && item.quantity && item.price ? sum + item.price * item.quantity : sum,
        0
      );
      return favTotal + customTotal + optionTotal;
    });
    const totalPriceWithTax = computed(
      () => Math.round(totalPrice.value * (1 + TAX_RATE))
    );
    const ADMIN_EMAILS = ["info@syashin8.com"];
    const form = ref({
      customerName: "",
      email: "",
      address: "",
      comment: ""
    });
    const success = ref(false);
    const error = ref("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isAdmin = ref(false);
    const user = { email: "info@syashin8.com" };
    if (ADMIN_EMAILS.includes(user.email)) {
      isAdmin.value = true;
      console.log("\u7BA1\u7406\u8005\u30E2\u30FC\u30C9");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (unref(product)) {
        _push(`<div data-v-ee8bc17d><h1 data-v-ee8bc17d>${ssrInterpolate(unref(product).productName)}</h1><p data-v-ee8bc17d>${ssrInterpolate(unref(product).description)}</p></div>`);
      } else {
        _push(`<div data-v-ee8bc17d><p data-v-ee8bc17d>\u5546\u54C1\u60C5\u5831\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u3067\u3059...</p></div>`);
      }
      _push(`<main class="pb-24" data-v-ee8bc17d><div class="p-4 space-y-6" data-v-ee8bc17d><button class="px-4 py-2 bg-gray-200 rounded" data-v-ee8bc17d> \u2190 \u623B\u308B </button>`);
      if (plainProduct.value) {
        _push(`<div class="space-y-4" data-v-ee8bc17d><h2 class="text-2xl font-bold" data-v-ee8bc17d>${ssrInterpolate(plainProduct.value.productName)}</h2><img${ssrRenderAttr("src", plainProduct.value.src)} alt="" class="w-full max-w-sm rounded" data-v-ee8bc17d><p class="whitespace-pre-line" data-v-ee8bc17d>${ssrInterpolate(plainProduct.value.description)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="favorites-gallery" data-v-ee8bc17d><h3 class="text-xl font-semibold mb-4 text-gray-800 border-b pb-2" data-v-ee8bc17d> \u{1F4F7} \u304A\u6C17\u306B\u5165\u308A\u753B\u50CF\u4E00\u89A7 </h3>`);
      if (unref(favoritesStore).favoriteImages.length === 0) {
        _push(`<div class="text-gray-600" data-v-ee8bc17d> \u304A\u6C17\u306B\u5165\u308A\u753B\u50CF\u306F\u3042\u308A\u307E\u305B\u3093 </div>`);
      } else {
        _push(`<div class="favorites-list flex flex-wrap gap-4" data-v-ee8bc17d><!--[-->`);
        ssrRenderList(unref(favoritesStore).favoriteImages, (favImg, index) => {
          _push(`<div class="favorite-item border p-4 rounded shadow-sm w-60 flex flex-col items-center bg-white" data-v-ee8bc17d><div class="w-40 h-40 flex items-center justify-center bg-gray-50 rounded mb-3 border" data-v-ee8bc17d><img${ssrRenderAttr("src", favImg.url)} alt="\u304A\u6C17\u306B\u5165\u308A\u753B\u50CF" class="max-w-full h-auto object-contain rounded border" data-v-ee8bc17d></div><p class="font-medium mb-2 text-center break-words w-full text-gray-700" data-v-ee8bc17d> \u30D5\u30A1\u30A4\u30EB\u540D: ${ssrInterpolate(favImg.fileName)}</p>`);
          if (productId.value === "1") {
            _push(`<div class="w-full" data-v-ee8bc17d><label class="block mb-2 w-full text-sm text-gray-700" data-v-ee8bc17d><span class="block mb-1 font-semibold" data-v-ee8bc17d>\u30D7\u30EA\u30F3\u30C8\u7A2E\u985E:</span><select class="border rounded px-2 py-1 w-full" data-v-ee8bc17d><option disabled value="" data-v-ee8bc17d${ssrIncludeBooleanAttr(Array.isArray(favImg.selectedType) ? ssrLooseContain(favImg.selectedType, "") : ssrLooseEqual(favImg.selectedType, "")) ? " selected" : ""}>\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option><option value="\u56DB\u3064\u5207" data-v-ee8bc17d${ssrIncludeBooleanAttr(Array.isArray(favImg.selectedType) ? ssrLooseContain(favImg.selectedType, "\u56DB\u3064\u5207") : ssrLooseEqual(favImg.selectedType, "\u56DB\u3064\u5207")) ? " selected" : ""}>\u56DB\u3064\u5207</option><option value="\u516D\u5207\u308A" data-v-ee8bc17d${ssrIncludeBooleanAttr(Array.isArray(favImg.selectedType) ? ssrLooseContain(favImg.selectedType, "\u516D\u5207\u308A") : ssrLooseEqual(favImg.selectedType, "\u516D\u5207\u308A")) ? " selected" : ""}>\u516D\u5207\u308A</option><option value="\u30AD\u30E3\u30D3\u30CD" data-v-ee8bc17d${ssrIncludeBooleanAttr(Array.isArray(favImg.selectedType) ? ssrLooseContain(favImg.selectedType, "\u30AD\u30E3\u30D3\u30CD") : ssrLooseEqual(favImg.selectedType, "\u30AD\u30E3\u30D3\u30CD")) ? " selected" : ""}>\u30AD\u30E3\u30D3\u30CD</option><option value="\u624B\u672D" data-v-ee8bc17d${ssrIncludeBooleanAttr(Array.isArray(favImg.selectedType) ? ssrLooseContain(favImg.selectedType, "\u624B\u672D") : ssrLooseEqual(favImg.selectedType, "\u624B\u672D")) ? " selected" : ""}>\u624B\u672D</option></select></label><label class="block mb-2 w-full text-sm text-gray-700" data-v-ee8bc17d><span class="block mb-1 font-semibold" data-v-ee8bc17d>\u679A\u6570:</span><input type="number"${ssrRenderAttr("value", favImg.quantity)} min="1" class="border rounded px-2 py-1 w-full" data-v-ee8bc17d></label><p class="mt-2 font-semibold text-gray-800 text-center w-full" data-v-ee8bc17d> \u5C0F\u8A08: \xA5${ssrInterpolate(calculatePrice(
              favImg.selectedType,
              favImg.quantity
            ).toLocaleString())}</p><button class="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full" data-v-ee8bc17d> \u6CE8\u6587\u3059\u308B </button></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<button class="text-red-600 font-bold text-xl mt-4" title="\u524A\u9664" data-v-ee8bc17d> \xD7 </button></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div data-v-ee8bc17d><h3 class="text-lg font-semibold mt-6" data-v-ee8bc17d>\u30AA\u30D7\u30B7\u30E7\u30F3\u9078\u629E</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4" data-v-ee8bc17d><!--[-->`);
      ssrRenderList(additionalItems.value, (item, index) => {
        var _a;
        _push(`<div class="flex items-center border p-2 rounded shadow-sm bg-white" data-v-ee8bc17d>`);
        if (item.image) {
          _push(`<img${ssrRenderAttr("src", item.image)} alt="\u30AA\u30D7\u30B7\u30E7\u30F3\u753B\u50CF" class="w-20 h-20 object-contain mr-4" data-v-ee8bc17d>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex-1" data-v-ee8bc17d><label class="flex items-start" data-v-ee8bc17d><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(item.selected) ? ssrLooseContain(item.selected, null) : item.selected) ? " checked" : ""} class="mr-2 mt-1" data-v-ee8bc17d><span class="font-medium text-gray-800" data-v-ee8bc17d>${ssrInterpolate(item.name)}\uFF08+\xA5${ssrInterpolate(item.price.toLocaleString())}\uFF09 </span></label>`);
        if (item.description) {
          _push(`<p class="text-sm text-gray-600 mt-1" data-v-ee8bc17d>${(_a = item.description) != null ? _a : ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (item.selected) {
          _push(`<div class="mt-2 flex items-center space-x-2" data-v-ee8bc17d><button class="px-2 py-1 bg-gray-200 rounded" data-v-ee8bc17d> \uFF0D </button><input type="number"${ssrRenderAttr("value", item.quantity)} min="1" class="w-16 text-center border rounded" data-v-ee8bc17d><button class="px-2 py-1 bg-gray-200 rounded" data-v-ee8bc17d> \uFF0B </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="space-y-4 border p-4 rounded bg-gray-50" data-v-ee8bc17d><div data-v-ee8bc17d><label class="block text-sm font-medium mb-1" data-v-ee8bc17d>\u30D5\u30A1\u30A4\u30EB\u540D</label><input${ssrRenderAttr("value", newCustomItem.value.fileName)} placeholder="\u4F8B: custom.jpg" class="border p-2 w-full rounded" data-v-ee8bc17d></div><div data-v-ee8bc17d><label class="block text-sm font-medium mb-1" data-v-ee8bc17d>\u540D\u524D</label><input${ssrRenderAttr("value", newCustomItem.value.name)} placeholder="\u4F8B: \u7279\u6CE8\u30A2\u30EB\u30D0\u30E0" class="border p-2 w-full rounded" data-v-ee8bc17d></div><div data-v-ee8bc17d><label class="block text-sm font-medium mb-1" data-v-ee8bc17d>\u4FA1\u683C\uFF08\u5186\uFF09</label><input type="number"${ssrRenderAttr("value", newCustomItem.value.price)} placeholder="\u4F8B: 12000" class="border p-2 w-full rounded" data-v-ee8bc17d></div><div data-v-ee8bc17d><label class="block text-sm font-medium mb-1" data-v-ee8bc17d>\u6570\u91CF</label><input type="number"${ssrRenderAttr("value", newCustomItem.value.quantity)} placeholder="1" min="1" class="border p-2 w-full rounded" data-v-ee8bc17d></div><button class="px-4 py-2 bg-blue-600 text-white rounded" data-v-ee8bc17d> \u30AB\u30B9\u30BF\u30E0\u30A2\u30A4\u30C6\u30E0\u3092\u8FFD\u52A0 </button></div>`);
      if (selectedAdditionalItems.value.length > 0) {
        _push(`<div class="mt-4 space-y-2" data-v-ee8bc17d><h4 class="text-lg font-semibold" data-v-ee8bc17d>\u8FFD\u52A0\u6E08\u307F\u30AA\u30D7\u30B7\u30E7\u30F3</h4><!--[-->`);
        ssrRenderList(selectedAdditionalItems.value, (item, index) => {
          _push(`<div class="border p-2 rounded flex justify-between items-center" data-v-ee8bc17d><div data-v-ee8bc17d>${ssrInterpolate(item.name)} - \xA5${ssrInterpolate(item.price.toLocaleString())} \xD7 ${ssrInterpolate(item.quantity)}</div><button class="text-red-600 underline" data-v-ee8bc17d> \u524A\u9664 </button></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (customItems.value.length > 0) {
        _push(`<div class="mt-4 space-y-2" data-v-ee8bc17d><h4 class="text-lg font-semibold" data-v-ee8bc17d>\u8FFD\u52A0\u6E08\u307F\u30A2\u30A4\u30C6\u30E0</h4><!--[-->`);
        ssrRenderList(customItems.value, (item, index) => {
          _push(`<div class="border p-2 rounded flex justify-between items-center" data-v-ee8bc17d><div data-v-ee8bc17d>${ssrInterpolate(item.fileName || item.name)} - \xA5${ssrInterpolate(item.price.toLocaleString())} \xD7 ${ssrInterpolate(item.quantity)}</div><button class="text-red-600 underline" data-v-ee8bc17d> \u524A\u9664 </button></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-ee8bc17d><p data-v-ee8bc17d>\u5408\u8A08\u91D1\u984D\uFF08\u7A0E\u629C\uFF09\uFF1A\xA5${ssrInterpolate(totalPrice.value.toLocaleString())}</p><p class="font-bold" data-v-ee8bc17d> \u5408\u8A08\u91D1\u984D\uFF08\u7A0E\u8FBC\uFF09\uFF1A\xA5${ssrInterpolate(totalPriceWithTax.value.toLocaleString())}</p></div></div><div class="space-y-2 pb-32" data-v-ee8bc17d><h3 class="text-xl font-semibold" data-v-ee8bc17d>\u304A\u5BA2\u69D8\u60C5\u5831</h3><input${ssrRenderAttr("value", form.value.customerName)} placeholder="\u304A\u540D\u524D\uFF08\u5FC5\u9808\uFF09" class="${ssrRenderClass([{ "border-red-500": !form.value.customerName && _ctx.formTouched }, "w-full border p-2 rounded"])}" data-v-ee8bc17d><input${ssrRenderAttr("value", form.value.email)} placeholder="\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\uFF08\u5FC5\u9808\uFF09" class="${ssrRenderClass([{
        "border-red-500": (!form.value.email || !emailRegex.test(form.value.email)) && _ctx.formTouched
      }, "w-full border p-2 rounded"])}" data-v-ee8bc17d><textarea placeholder="\u5099\u8003\uFF08\u4F8B\uFF1A\u304A\u5199\u771F\u306E\u8CBC\u308B\u9806\u756A 1:\u5DE6 2:\u4E2D\u592E 3:\u53F3\uFF09" class="w-full border p-2 rounded h-24" data-v-ee8bc17d>${ssrInterpolate(form.value.comment)}</textarea>`);
      if (success.value) {
        _push(`<p class="text-green-600 font-semibold" data-v-ee8bc17d> \u3054\u6CE8\u6587\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\uFF01\u78BA\u8A8D\u30E1\u30FC\u30EB\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\u3002 </p>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<p class="text-red-600 font-semibold" data-v-ee8bc17d>${ssrInterpolate(error.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main><div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50" data-v-ee8bc17d><button${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="w-full px-4 py-3 bg-green-500 text-white rounded-lg font-semibold text-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed" data-v-ee8bc17d>${ssrInterpolate(isSubmitting.value ? "\u9001\u4FE1\u4E2D..." : "\u6CE8\u6587\u3092\u78BA\u5B9A\u3059\u308B")}</button></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-details/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ee8bc17d"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-NKEhYsoi.mjs.map
