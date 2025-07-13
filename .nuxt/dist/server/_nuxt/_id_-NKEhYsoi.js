import { defineComponent, ref, computed, watchEffect, withAsyncContext, watch, unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import "C:/Users/nashi/malias-7-8/node_modules/hookable/dist/index.mjs";
import { u as useAsyncData } from "./asyncData-p7p-Qn7f.js";
import "C:/Users/nashi/malias-7-8/node_modules/klona/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { defineStore } from "pinia";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "C:/Users/nashi/malias-7-8/node_modules/perfect-debounce/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "C:/Users/nashi/malias-7-8/node_modules/unctx/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/radix3/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/ufo/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/destr/dist/index.mjs";
import "C:/Users/nashi/malias-7-8/node_modules/ohash/dist/index.mjs";
import "deep-pick-omit";
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
    console.error("シリアライズエラー:", error);
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
      var _a;
      return ((_a = route.params.id) == null ? void 0 : _a.toString()) ?? "";
    });
    watchEffect(() => {
      console.log("🧪 typeof productId:", typeof productId);
      console.log("🧪 typeof productId.value:", typeof productId.value);
      console.log("🧪 productId.value:", productId.value);
      if (!productId.value || productId.value === "undefined") {
        console.warn("Invalid product ID:", productId.value);
        router.replace("/");
      }
    });
    console.log("Product ID:", productId.value);
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("product", () => {
      const id = String(route.params.id ?? "");
      return $fetch(`/api/products/${id}`);
    })), __temp = await __temp, __restore(), __temp);
    const favoritesStore = useFavoritesStore();
    const additionalItems = ref([]);
    const customItems = ref([]);
    const plainProduct = ref({ name: "商品名", price: 0 });
    watch(
      () => productId.value,
      async (newId) => {
        if (!newId) {
          console.warn("productId is undefined or empty. Fetch skipped.");
          return;
        }
        console.log("🧪 Fetch対象の productId:", newId);
        try {
          const res = await $fetch(`/api/print-options?productId=${newId}`);
          console.log("📦 print-options APIレスポンス:", res);
          additionalItems.value = res.map((item) => ({
            ...item,
            selected: false,
            quantity: 0
          }));
        } catch (error2) {
          console.error("❌ print-options の取得に失敗:", error2);
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
        四つ切: 5800,
        六切り: 4800,
        キャビネ: 3800,
        手札: 3500
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
      const favTotal = Array.isArray(favoritesStore.favoriteImages) ? favoritesStore.favoriteImages.reduce(
        (sum, img) => sum + calculatePrice(img.selectedType, img.quantity),
        0
      ) : 0;
      const customTotal = (customItems.value ?? []).reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const optionTotal = (additionalItems.value ?? []).reduce(
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
      console.log("管理者モード");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (unref(product)) {
        _push(`<div data-v-ee8bc17d><h1 data-v-ee8bc17d>${ssrInterpolate(unref(product).productName)}</h1><p data-v-ee8bc17d>${ssrInterpolate(unref(product).description)}</p></div>`);
      } else {
        _push(`<div data-v-ee8bc17d><p data-v-ee8bc17d>商品情報を読み込み中です...</p></div>`);
      }
      _push(`<main class="pb-24" data-v-ee8bc17d><div class="p-4 space-y-6" data-v-ee8bc17d><button class="px-4 py-2 bg-gray-200 rounded" data-v-ee8bc17d> ← 戻る </button>`);
      if (plainProduct.value) {
        _push(`<div class="space-y-4" data-v-ee8bc17d><h2 class="text-2xl font-bold" data-v-ee8bc17d>${ssrInterpolate(plainProduct.value.productName)}</h2><img${ssrRenderAttr("src", plainProduct.value.src)} alt="" class="w-full max-w-sm rounded" data-v-ee8bc17d><p class="whitespace-pre-line" data-v-ee8bc17d>${ssrInterpolate(plainProduct.value.description)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="favorites-gallery" data-v-ee8bc17d><h3 class="text-xl font-semibold mb-4 text-gray-800 border-b pb-2" data-v-ee8bc17d> 📷 お気に入り画像一覧 </h3>`);
      if (unref(favoritesStore).favoriteImages.length === 0) {
        _push(`<div class="text-gray-600" data-v-ee8bc17d> お気に入り画像はありません </div>`);
      } else {
        _push(`<div class="favorites-list flex flex-wrap gap-4" data-v-ee8bc17d><!--[-->`);
        ssrRenderList(unref(favoritesStore).favoriteImages, (favImg, index) => {
          _push(`<div class="favorite-item border p-4 rounded shadow-sm w-60 flex flex-col items-center bg-white" data-v-ee8bc17d><div class="w-40 h-40 flex items-center justify-center bg-gray-50 rounded mb-3 border" data-v-ee8bc17d><img${ssrRenderAttr("src", favImg.url)} alt="お気に入り画像" class="max-w-full h-auto object-contain rounded border" data-v-ee8bc17d></div><p class="font-medium mb-2 text-center break-words w-full text-gray-700" data-v-ee8bc17d> ファイル名: ${ssrInterpolate(favImg.fileName)}</p>`);
          if (productId.value === "1") {
            _push(`<div class="w-full" data-v-ee8bc17d><label class="block mb-2 w-full text-sm text-gray-700" data-v-ee8bc17d><span class="block mb-1 font-semibold" data-v-ee8bc17d>プリント種類:</span><select class="border rounded px-2 py-1 w-full" data-v-ee8bc17d><option disabled value="" data-v-ee8bc17d${ssrIncludeBooleanAttr(Array.isArray(favImg.selectedType) ? ssrLooseContain(favImg.selectedType, "") : ssrLooseEqual(favImg.selectedType, "")) ? " selected" : ""}>選択してください</option><option value="四つ切" data-v-ee8bc17d${ssrIncludeBooleanAttr(Array.isArray(favImg.selectedType) ? ssrLooseContain(favImg.selectedType, "四つ切") : ssrLooseEqual(favImg.selectedType, "四つ切")) ? " selected" : ""}>四つ切</option><option value="六切り" data-v-ee8bc17d${ssrIncludeBooleanAttr(Array.isArray(favImg.selectedType) ? ssrLooseContain(favImg.selectedType, "六切り") : ssrLooseEqual(favImg.selectedType, "六切り")) ? " selected" : ""}>六切り</option><option value="キャビネ" data-v-ee8bc17d${ssrIncludeBooleanAttr(Array.isArray(favImg.selectedType) ? ssrLooseContain(favImg.selectedType, "キャビネ") : ssrLooseEqual(favImg.selectedType, "キャビネ")) ? " selected" : ""}>キャビネ</option><option value="手札" data-v-ee8bc17d${ssrIncludeBooleanAttr(Array.isArray(favImg.selectedType) ? ssrLooseContain(favImg.selectedType, "手札") : ssrLooseEqual(favImg.selectedType, "手札")) ? " selected" : ""}>手札</option></select></label><label class="block mb-2 w-full text-sm text-gray-700" data-v-ee8bc17d><span class="block mb-1 font-semibold" data-v-ee8bc17d>枚数:</span><input type="number"${ssrRenderAttr("value", favImg.quantity)} min="1" class="border rounded px-2 py-1 w-full" data-v-ee8bc17d></label><p class="mt-2 font-semibold text-gray-800 text-center w-full" data-v-ee8bc17d> 小計: ¥${ssrInterpolate(calculatePrice(
              favImg.selectedType,
              favImg.quantity
            ).toLocaleString())}</p><button class="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full" data-v-ee8bc17d> 注文する </button></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<button class="text-red-600 font-bold text-xl mt-4" title="削除" data-v-ee8bc17d> × </button></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div data-v-ee8bc17d><h3 class="text-lg font-semibold mt-6" data-v-ee8bc17d>オプション選択</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4" data-v-ee8bc17d><!--[-->`);
      ssrRenderList(additionalItems.value, (item, index) => {
        _push(`<div class="flex items-center border p-2 rounded shadow-sm bg-white" data-v-ee8bc17d>`);
        if (item.image) {
          _push(`<img${ssrRenderAttr("src", item.image)} alt="オプション画像" class="w-20 h-20 object-contain mr-4" data-v-ee8bc17d>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex-1" data-v-ee8bc17d><label class="flex items-start" data-v-ee8bc17d><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(item.selected) ? ssrLooseContain(item.selected, null) : item.selected) ? " checked" : ""} class="mr-2 mt-1" data-v-ee8bc17d><span class="font-medium text-gray-800" data-v-ee8bc17d>${ssrInterpolate(item.name)}（+¥${ssrInterpolate(item.price.toLocaleString())}） </span></label>`);
        if (item.description) {
          _push(`<p class="text-sm text-gray-600 mt-1" data-v-ee8bc17d>${item.description ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (item.selected) {
          _push(`<div class="mt-2 flex items-center space-x-2" data-v-ee8bc17d><button class="px-2 py-1 bg-gray-200 rounded" data-v-ee8bc17d> － </button><input type="number"${ssrRenderAttr("value", item.quantity)} min="1" class="w-16 text-center border rounded" data-v-ee8bc17d><button class="px-2 py-1 bg-gray-200 rounded" data-v-ee8bc17d> ＋ </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="space-y-4 border p-4 rounded bg-gray-50" data-v-ee8bc17d><div data-v-ee8bc17d><label class="block text-sm font-medium mb-1" data-v-ee8bc17d>ファイル名</label><input${ssrRenderAttr("value", newCustomItem.value.fileName)} placeholder="例: custom.jpg" class="border p-2 w-full rounded" data-v-ee8bc17d></div><div data-v-ee8bc17d><label class="block text-sm font-medium mb-1" data-v-ee8bc17d>名前</label><input${ssrRenderAttr("value", newCustomItem.value.name)} placeholder="例: 特注アルバム" class="border p-2 w-full rounded" data-v-ee8bc17d></div><div data-v-ee8bc17d><label class="block text-sm font-medium mb-1" data-v-ee8bc17d>価格（円）</label><input type="number"${ssrRenderAttr("value", newCustomItem.value.price)} placeholder="例: 12000" class="border p-2 w-full rounded" data-v-ee8bc17d></div><div data-v-ee8bc17d><label class="block text-sm font-medium mb-1" data-v-ee8bc17d>数量</label><input type="number"${ssrRenderAttr("value", newCustomItem.value.quantity)} placeholder="1" min="1" class="border p-2 w-full rounded" data-v-ee8bc17d></div><button class="px-4 py-2 bg-blue-600 text-white rounded" data-v-ee8bc17d> カスタムアイテムを追加 </button></div>`);
      if (selectedAdditionalItems.value.length > 0) {
        _push(`<div class="mt-4 space-y-2" data-v-ee8bc17d><h4 class="text-lg font-semibold" data-v-ee8bc17d>追加済みオプション</h4><!--[-->`);
        ssrRenderList(selectedAdditionalItems.value, (item, index) => {
          _push(`<div class="border p-2 rounded flex justify-between items-center" data-v-ee8bc17d><div data-v-ee8bc17d>${ssrInterpolate(item.name)} - ¥${ssrInterpolate(item.price.toLocaleString())} × ${ssrInterpolate(item.quantity)}</div><button class="text-red-600 underline" data-v-ee8bc17d> 削除 </button></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (customItems.value.length > 0) {
        _push(`<div class="mt-4 space-y-2" data-v-ee8bc17d><h4 class="text-lg font-semibold" data-v-ee8bc17d>追加済みアイテム</h4><!--[-->`);
        ssrRenderList(customItems.value, (item, index) => {
          _push(`<div class="border p-2 rounded flex justify-between items-center" data-v-ee8bc17d><div data-v-ee8bc17d>${ssrInterpolate(item.fileName || item.name)} - ¥${ssrInterpolate(item.price.toLocaleString())} × ${ssrInterpolate(item.quantity)}</div><button class="text-red-600 underline" data-v-ee8bc17d> 削除 </button></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-ee8bc17d><p data-v-ee8bc17d>合計金額（税抜）：¥${ssrInterpolate(totalPrice.value.toLocaleString())}</p><p class="font-bold" data-v-ee8bc17d> 合計金額（税込）：¥${ssrInterpolate(totalPriceWithTax.value.toLocaleString())}</p></div></div><div class="space-y-2 pb-32" data-v-ee8bc17d><h3 class="text-xl font-semibold" data-v-ee8bc17d>お客様情報</h3><input${ssrRenderAttr("value", form.value.customerName)} placeholder="お名前（必須）" class="${ssrRenderClass([{ "border-red-500": !form.value.customerName && _ctx.formTouched }, "w-full border p-2 rounded"])}" data-v-ee8bc17d><input${ssrRenderAttr("value", form.value.email)} placeholder="メールアドレス（必須）" class="${ssrRenderClass([{
        "border-red-500": (!form.value.email || !emailRegex.test(form.value.email)) && _ctx.formTouched
      }, "w-full border p-2 rounded"])}" data-v-ee8bc17d><textarea placeholder="備考（例：お写真の貼る順番 1:左 2:中央 3:右）" class="w-full border p-2 rounded h-24" data-v-ee8bc17d>${ssrInterpolate(form.value.comment)}</textarea>`);
      if (success.value) {
        _push(`<p class="text-green-600 font-semibold" data-v-ee8bc17d> ご注文ありがとうございました！確認メールを送信しました。 </p>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<p class="text-red-600 font-semibold" data-v-ee8bc17d>${ssrInterpolate(error.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main><div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50" data-v-ee8bc17d><button${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="w-full px-4 py-3 bg-green-500 text-white rounded-lg font-semibold text-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed" data-v-ee8bc17d>${ssrInterpolate(isSubmitting.value ? "送信中..." : "注文を確定する")}</button></div><!--]-->`);
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
export {
  _id_ as default
};
//# sourceMappingURL=_id_-NKEhYsoi.js.map
