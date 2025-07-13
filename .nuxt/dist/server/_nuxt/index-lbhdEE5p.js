import { _ as __nuxt_component_0 } from "./nuxt-link-BJqo5zun.js";
import { defineComponent, watch, mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
const printImages = [
  // Row 1 (5 アイテム)
  {
    src: "/option-images/print/printo_nomi.jpg",
    description: `プリント

  ＊四切プリント
   サイズ:254㎜×305㎜
  5,800円
  （6,380円税込）

  ＊六切プリント
  サイズ:205㎜×254㎜
  4,800 円
  （5,280円税込）

  ＊キャビネプリント
  サイズ:180㎜×127㎜
  3,800 円」
  （4,180円税込）

  ＊手札プリント」
  サイズ:127㎜×89㎜
  3,500 円
  （3,850円税込）`,
    productId: 1
  },
  {
    src: "/option-images/print/cd_puran_ok.jpg",
    description: `CDプラン

＊CD三万プラン
・CDデータ
・六切プリント1枚
・台紙付
32,780 円
（36,080円税込）

＊CD五万プラン
・CDデータ
・六切プリント5枚
・台紙付
49,800 円
（54,780円税込）

＊CD七万プラン
・CDデータ
・六切プリント9枚
・台紙付
69,800 円
（76,780円税込）
 
＊オリジナルレザー台紙又洋風レザー台紙からお選び下さい。
＊台紙のページ数は、ご自由にお決め頂けます。`,
    productId: 2
  },
  {
    src: "/option-images/print/photo_collection.jpg",
    description: `写真集
    
＊デザインアルバム
・6P(24カット)
・CD原本
49,800円
（54,780円 税込）

＊絵本BOOK
・4p(6カット)
・CD原本
34,800円
（38,280円 税込）

＊プレミアムデザインアルバム
・6P(24カット)
・CD原本
49,800円
（54,780円 税込）`,
    productId: 3
  },
  {
    src: "/option-images/print/photo_collection_h.jpg",
    description: `お宮参りプラン

＊お宮参りプランA
・3面アルバム1冊
・2面台紙 2冊
49,800円
（54,780円 税込）
 
＊お宮参りプランB   
・CDデータ
・3面アルバム1冊
・2面台紙 2冊
65,000円
（71,500円 税込）

＊お宮参りプランC
・2面台紙 2冊  
32,100円
（35,310円 税込）

＊お宮参りプランD
・CDデータ
・2面台紙 2冊
50,000円
（55,000円 税込）

＊お宮参りプランE 
・CDデータ
・ヒンジアルバム 1冊
・2面額 1枚
54,800円
（60,280円 税込）

＊お宮参りプランF 
・CDデータ
・3面アルバム 1冊
・2面額 2枚
60,000円
（66,000円 税込）

＊お宮参りプラン：スペシャルセット
・CDデータ
・ヒンジアルバム 1冊
・2面額 2枚
・クリスタルグラフィー1枚
・キーホルダー 1個
80,000円
（88,000円 税込）`,
    productId: 4
  },
  {
    src: "/option-images/print/753/753_a.jpg",
    description: `七五三プラン

    ＊七五三
    ＣＤプラン：A
    ・CDデーター
    ・六切プリント1枚
    ・台紙付
    32,800 円
    （36,080円 税込）

    ＊七五三
    ＣＤプラン：B
    ・CDデーター
    ・六切プリント5枚
    ・台紙付
    49,800 円
    （54,780円 税込）

    ＊七五三
    ＣＤプラン：C
    ・CDデーター
    ・六切プリント9枚
    ・台紙付
    69,800 円
    （76,780円 税込）
    
    ＊和風台紙又オリジナルレザー台紙又洋風ﾚｻﾞｰ台紙からお選び下さい。`,
    productId: 5
  },
  // Row 2 (5 アイテム)
  {
    src: "/option-images/print/maternity/maternity_6_0.jpg",
    description: `マタニティプラン

   撮影内容 
    ・マタニティ撮影＋
    ・お宮参り撮影＋
    ・1歳バースデー撮影
    の合計3回の撮影
    
    アルバム内容
    ・六切りプリント3枚
    72,000円
    （79,200 円 税込）`,
    productId: 6
  },
  {
    src: "/option-images/print/hatsusextuku/hatsusextuku_a.jpg",
    description: `初節句プラン

    ＊初節句プランA
    ・CDデーター
    ・六切プリント2枚
    ・キャビネプリント2枚
    ・和・洋台紙　1冊
    （和風・洋風台紙からお選び頂けます）
    29,800 円
    （32,780円 税込）

    ＊初節句プランB
    ・CDデーター
    ・六切プリント2枚
    ・キャビネプリント4枚
    ・和・洋台紙　1冊
    （和風・洋風台紙からお選び頂けます）
    ・額　1面用×2冊
    38,800 円
    （41,904円 税込）

    ＊初節句プランC
    ・CDデーター
    ・六切プリント2枚
    ・キャビネプリント4枚
    ・和・洋台紙　1冊
    （和風・洋風台紙からお選び頂けます）
    ・額　2面用×1冊
    39,800 円
    （42,984円 税込）`,
    productId: 7
  },
  {
    src: "/option-images/print/birthday/birtkday_top.jpg",
    description: `バースデープラン

    ＊B-dayプランA
    ・デザインプリント
    または
    ・六切プリント
    ・写真立て
    15,800 円
    （17,380円 税込）

    ＊B-dayプランB
    ・デザインプリント
    ・増えるアルバム　1冊
    27,800 円
    （30,580円 税込）

    ＊B-dayプランC
    ・CDデーター
    ・デザインプリント
    または
    ・六切プリント
    ・写真立て
    35,800 円
    （39,380円 税込）

    ＊B-dayプランd
    ・CDデーター
    ・デザインプリント
    ・増えるアルバム
    49,800 円
    （54,780円 税込）`,
    productId: 8
  },
  {
    src: "/option-images/print/nyuugaku/nyuugaku_top.jpg",
    description: `入園・入学&卒業式プラン

    ＊入学&卒業式プランA
    ・六切プリント 2枚
    ・洋風レザー台紙 1冊
    ・キャビネプリント 2枚
    ・フラワー台紙 2冊
    23,600 円
    (25,960円 税込)

    ＊入学&卒業式プランB
    ・CDデーター
    ・六切プリント 2枚
    ・洋風レザー台紙 1冊
    29,800 円
    (32,780円 税込)

    ＊入学&卒業式プランC
    ・CDデーター
    ・六切プリント 2枚
    ・キャビネプリント 2枚
    ・洋風レザー台紙 1冊
    ・キャビネ額1面用 2枚
    39,800 円
    (43,780円 税込)`,
    productId: 9
  },
  {
    src: "/option-images/print/seijin-shiki/seijinshiki_top.jpg",
    description: `成人式プラン
  
   ＊成人式プランA
   ・六切3面台紙1冊
   ・キーホルダー(1面)
   23,100円
   (25,410円 税込)
 
   ＊成人式プランB
   ・CDデータ
   ・六切3面台紙1冊
   ・キーホルダー(1面)
   34,600円
  (38,460円 税込)

   ＊成人式プランC
   ・CDデータ＋
   ・六切3面台紙1冊
   ・キャビネ2面額1個
   ・キーホルダー(1面)
   48,600円
  (53,460円 税込)

   ＊成人式プランD
   ・CDデータ
   ・デザインアルバム
   24カット1冊
   ・六切り1面台紙1冊
   (洋風レザー台紙)
   ・キーホルダー(1面)
   49,800円
  (54,780円 税込)

   ＊成人式プランE 
   ・CDデータ
   ・デザインアルバム
   30カット1冊
   ・キャビネ2面額1個
   67,200円
  (73,920円 税込)

   ＊成人式プランF 
   ・CDデータ
   ・デザインアルバム
   36カット1冊
   ・六切り3面台紙
   ・キーホルダー(1面)
   85,900円
  (94,490円 税込)

   ＊成人式プラン
   スペシャルセット
   ・CDデータ
   ・クリスタルグラフィー
   3面 1冊
   ・デザインアルバム
   30カット 1冊
   ・六切り1面洋風レザー台紙1冊
   ・キーホルダー1個
   104,700円
  (115,170円 税込)`,
    productId: 10
  }
  // 他のアイテム...
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const favoritesStore = useFavoritesStore();
    const { favoriteImages } = storeToRefs(favoritesStore);
    watch(
      () => favoritesStore.favoriteImages,
      (newVal) => {
        console.log("favoriteImages changed:", newVal);
      },
      { deep: true }
    );
    const getDetailUrl = (productId) => {
      return `/product-details/${productId}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-6" }, _attrs))} data-v-3b639961><h2 class="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2" data-v-3b639961> お気に入り画像一覧 </h2><div class="mb-6" data-v-3b639961>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md shadow" data-v-3b639961${_scopeId}> もどる </button>`);
          } else {
            return [
              createVNode("button", { class: "px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md shadow" }, " もどる ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-10" data-v-3b639961>`);
      if (unref(favoriteImages).length === 0) {
        _push(`<div class="text-gray-500" data-v-3b639961> お気に入り画像はありません </div>`);
      } else {
        _push(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" data-v-3b639961><!--[-->`);
        ssrRenderList(unref(favoriteImages), (favImg, index2) => {
          _push(`<div class="bg-white border border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition" data-v-3b639961>${ssrInterpolate(favImg.fileName)} <img${ssrRenderAttr("src", favImg.url)} alt="Favorite Image" class="rounded shadow-md mx-auto" data-v-3b639961><div class="mt-3 text-sm font-medium text-gray-700" data-v-3b639961>${ssrInterpolate(favImg.fileName)}</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><h2 class="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2" data-v-3b639961> お気に入り画像の仕上げ方 </h2><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm" data-v-3b639961><!--[-->`);
      ssrRenderList(unref(printImages), (img, index2) => {
        _push(`<div class="bg-white border border-gray-300 rounded-lg p-4 text-center transition transform hover:-translate-y-1 hover:shadow-lg" data-v-3b639961>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: getDetailUrl(img.productId)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", img.src)}${ssrRenderAttr("alt", img.description)} class="rounded shadow-md mx-auto mb-2" data-v-3b639961${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: img.src,
                  alt: img.description,
                  class: "rounded shadow-md mx-auto mb-2"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="mt-4 text-left text-gray-700 leading-relaxed tracking-wide text-sm font-light whitespace-pre-line border-t pt-3" data-v-3b639961>${ssrInterpolate(img.description)}</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/favorites/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b639961"]]);
export {
  index as default
};
//# sourceMappingURL=index-lbhdEE5p.js.map
