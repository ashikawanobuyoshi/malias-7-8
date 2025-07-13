import { _ as __nuxt_component_0 } from './nuxt-link-BJqo5zun.mjs';
import { defineComponent, watch, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue/server-renderer/index.mjs';
import { u as useFavoritesStore } from './favorites-DaWAitrr.mjs';
import { storeToRefs } from 'file://C:/Users/nashi/malias-7-8/node_modules/pinia/dist/pinia.prod.cjs';
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
import 'file://C:/Users/nashi/malias-7-8/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/nashi/malias-7-8/node_modules/deep-pick-omit/dist/index.mjs';

const printImages = [
  // Row 1 (5 アイテム)
  {
    src: "/option-images/print/printo_nomi.jpg",
    description: `\u30D7\u30EA\u30F3\u30C8

  \uFF0A\u56DB\u5207\u30D7\u30EA\u30F3\u30C8
   \u30B5\u30A4\u30BA:254\u339C\xD7305\u339C
  5,800\u5186
  \uFF086,380\u5186\u7A0E\u8FBC\uFF09

  \uFF0A\u516D\u5207\u30D7\u30EA\u30F3\u30C8
  \u30B5\u30A4\u30BA:205\u339C\xD7254\u339C
  4,800 \u5186
  \uFF085,280\u5186\u7A0E\u8FBC\uFF09

  \uFF0A\u30AD\u30E3\u30D3\u30CD\u30D7\u30EA\u30F3\u30C8
  \u30B5\u30A4\u30BA:180\u339C\xD7127\u339C
  3,800 \u5186\u300D
  \uFF084,180\u5186\u7A0E\u8FBC\uFF09

  \uFF0A\u624B\u672D\u30D7\u30EA\u30F3\u30C8\u300D
  \u30B5\u30A4\u30BA:127\u339C\xD789\u339C
  3,500 \u5186
  \uFF083,850\u5186\u7A0E\u8FBC\uFF09`,
    productId: 1
  },
  {
    src: "/option-images/print/cd_puran_ok.jpg",
    description: `CD\u30D7\u30E9\u30F3

\uFF0ACD\u4E09\u4E07\u30D7\u30E9\u30F3
\u30FBCD\u30C7\u30FC\u30BF
\u30FB\u516D\u5207\u30D7\u30EA\u30F3\u30C81\u679A
\u30FB\u53F0\u7D19\u4ED8
32,780 \u5186
\uFF0836,080\u5186\u7A0E\u8FBC\uFF09

\uFF0ACD\u4E94\u4E07\u30D7\u30E9\u30F3
\u30FBCD\u30C7\u30FC\u30BF
\u30FB\u516D\u5207\u30D7\u30EA\u30F3\u30C85\u679A
\u30FB\u53F0\u7D19\u4ED8
49,800 \u5186
\uFF0854,780\u5186\u7A0E\u8FBC\uFF09

\uFF0ACD\u4E03\u4E07\u30D7\u30E9\u30F3
\u30FBCD\u30C7\u30FC\u30BF
\u30FB\u516D\u5207\u30D7\u30EA\u30F3\u30C89\u679A
\u30FB\u53F0\u7D19\u4ED8
69,800 \u5186
\uFF0876,780\u5186\u7A0E\u8FBC\uFF09
 
\uFF0A\u30AA\u30EA\u30B8\u30CA\u30EB\u30EC\u30B6\u30FC\u53F0\u7D19\u53C8\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19\u304B\u3089\u304A\u9078\u3073\u4E0B\u3055\u3044\u3002
\uFF0A\u53F0\u7D19\u306E\u30DA\u30FC\u30B8\u6570\u306F\u3001\u3054\u81EA\u7531\u306B\u304A\u6C7A\u3081\u9802\u3051\u307E\u3059\u3002`,
    productId: 2
  },
  {
    src: "/option-images/print/photo_collection.jpg",
    description: `\u5199\u771F\u96C6
    
\uFF0A\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0
\u30FB6P(24\u30AB\u30C3\u30C8)
\u30FBCD\u539F\u672C
49,800\u5186
\uFF0854,780\u5186 \u7A0E\u8FBC\uFF09

\uFF0A\u7D75\u672CBOOK
\u30FB4p(6\u30AB\u30C3\u30C8)
\u30FBCD\u539F\u672C
34,800\u5186
\uFF0838,280\u5186 \u7A0E\u8FBC\uFF09

\uFF0A\u30D7\u30EC\u30DF\u30A2\u30E0\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0
\u30FB6P(24\u30AB\u30C3\u30C8)
\u30FBCD\u539F\u672C
49,800\u5186
\uFF0854,780\u5186 \u7A0E\u8FBC\uFF09`,
    productId: 3
  },
  {
    src: "/option-images/print/photo_collection_h.jpg",
    description: `\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3

\uFF0A\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3A
\u30FB3\u9762\u30A2\u30EB\u30D0\u30E01\u518A
\u30FB2\u9762\u53F0\u7D19 2\u518A
49,800\u5186
\uFF0854,780\u5186 \u7A0E\u8FBC\uFF09
 
\uFF0A\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3B   
\u30FBCD\u30C7\u30FC\u30BF
\u30FB3\u9762\u30A2\u30EB\u30D0\u30E01\u518A
\u30FB2\u9762\u53F0\u7D19 2\u518A
65,000\u5186
\uFF0871,500\u5186 \u7A0E\u8FBC\uFF09

\uFF0A\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3C
\u30FB2\u9762\u53F0\u7D19 2\u518A  
32,100\u5186
\uFF0835,310\u5186 \u7A0E\u8FBC\uFF09

\uFF0A\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3D
\u30FBCD\u30C7\u30FC\u30BF
\u30FB2\u9762\u53F0\u7D19 2\u518A
50,000\u5186
\uFF0855,000\u5186 \u7A0E\u8FBC\uFF09

\uFF0A\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3E 
\u30FBCD\u30C7\u30FC\u30BF
\u30FB\u30D2\u30F3\u30B8\u30A2\u30EB\u30D0\u30E0 1\u518A
\u30FB2\u9762\u984D 1\u679A
54,800\u5186
\uFF0860,280\u5186 \u7A0E\u8FBC\uFF09

\uFF0A\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3F 
\u30FBCD\u30C7\u30FC\u30BF
\u30FB3\u9762\u30A2\u30EB\u30D0\u30E0 1\u518A
\u30FB2\u9762\u984D 2\u679A
60,000\u5186
\uFF0866,000\u5186 \u7A0E\u8FBC\uFF09

\uFF0A\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3\uFF1A\u30B9\u30DA\u30B7\u30E3\u30EB\u30BB\u30C3\u30C8
\u30FBCD\u30C7\u30FC\u30BF
\u30FB\u30D2\u30F3\u30B8\u30A2\u30EB\u30D0\u30E0 1\u518A
\u30FB2\u9762\u984D 2\u679A
\u30FB\u30AF\u30EA\u30B9\u30BF\u30EB\u30B0\u30E9\u30D5\u30A3\u30FC1\u679A
\u30FB\u30AD\u30FC\u30DB\u30EB\u30C0\u30FC 1\u500B
80,000\u5186
\uFF0888,000\u5186 \u7A0E\u8FBC\uFF09`,
    productId: 4
  },
  {
    src: "/option-images/print/753/753_a.jpg",
    description: `\u4E03\u4E94\u4E09\u30D7\u30E9\u30F3

    \uFF0A\u4E03\u4E94\u4E09
    \uFF23\uFF24\u30D7\u30E9\u30F3\uFF1AA
    \u30FBCD\u30C7\u30FC\u30BF\u30FC
    \u30FB\u516D\u5207\u30D7\u30EA\u30F3\u30C81\u679A
    \u30FB\u53F0\u7D19\u4ED8
    32,800 \u5186
    \uFF0836,080\u5186 \u7A0E\u8FBC\uFF09

    \uFF0A\u4E03\u4E94\u4E09
    \uFF23\uFF24\u30D7\u30E9\u30F3\uFF1AB
    \u30FBCD\u30C7\u30FC\u30BF\u30FC
    \u30FB\u516D\u5207\u30D7\u30EA\u30F3\u30C85\u679A
    \u30FB\u53F0\u7D19\u4ED8
    49,800 \u5186
    \uFF0854,780\u5186 \u7A0E\u8FBC\uFF09

    \uFF0A\u4E03\u4E94\u4E09
    \uFF23\uFF24\u30D7\u30E9\u30F3\uFF1AC
    \u30FBCD\u30C7\u30FC\u30BF\u30FC
    \u30FB\u516D\u5207\u30D7\u30EA\u30F3\u30C89\u679A
    \u30FB\u53F0\u7D19\u4ED8
    69,800 \u5186
    \uFF0876,780\u5186 \u7A0E\u8FBC\uFF09
    
    \uFF0A\u548C\u98A8\u53F0\u7D19\u53C8\u30AA\u30EA\u30B8\u30CA\u30EB\u30EC\u30B6\u30FC\u53F0\u7D19\u53C8\u6D0B\u98A8\uFF9A\uFF7B\uFF9E\uFF70\u53F0\u7D19\u304B\u3089\u304A\u9078\u3073\u4E0B\u3055\u3044\u3002`,
    productId: 5
  },
  // Row 2 (5 アイテム)
  {
    src: "/option-images/print/maternity/maternity_6_0.jpg",
    description: `\u30DE\u30BF\u30CB\u30C6\u30A3\u30D7\u30E9\u30F3

   \u64AE\u5F71\u5185\u5BB9 
    \u30FB\u30DE\u30BF\u30CB\u30C6\u30A3\u64AE\u5F71\uFF0B
    \u30FB\u304A\u5BAE\u53C2\u308A\u64AE\u5F71\uFF0B
    \u30FB1\u6B73\u30D0\u30FC\u30B9\u30C7\u30FC\u64AE\u5F71
    \u306E\u5408\u8A083\u56DE\u306E\u64AE\u5F71
    
    \u30A2\u30EB\u30D0\u30E0\u5185\u5BB9
    \u30FB\u516D\u5207\u308A\u30D7\u30EA\u30F3\u30C83\u679A
    72,000\u5186
    \uFF0879,200 \u5186 \u7A0E\u8FBC\uFF09`,
    productId: 6
  },
  {
    src: "/option-images/print/hatsusextuku/hatsusextuku_a.jpg",
    description: `\u521D\u7BC0\u53E5\u30D7\u30E9\u30F3

    \uFF0A\u521D\u7BC0\u53E5\u30D7\u30E9\u30F3A
    \u30FBCD\u30C7\u30FC\u30BF\u30FC
    \u30FB\u516D\u5207\u30D7\u30EA\u30F3\u30C82\u679A
    \u30FB\u30AD\u30E3\u30D3\u30CD\u30D7\u30EA\u30F3\u30C82\u679A
    \u30FB\u548C\u30FB\u6D0B\u53F0\u7D19\u30001\u518A
    \uFF08\u548C\u98A8\u30FB\u6D0B\u98A8\u53F0\u7D19\u304B\u3089\u304A\u9078\u3073\u9802\u3051\u307E\u3059\uFF09
    29,800 \u5186
    \uFF0832,780\u5186 \u7A0E\u8FBC\uFF09

    \uFF0A\u521D\u7BC0\u53E5\u30D7\u30E9\u30F3B
    \u30FBCD\u30C7\u30FC\u30BF\u30FC
    \u30FB\u516D\u5207\u30D7\u30EA\u30F3\u30C82\u679A
    \u30FB\u30AD\u30E3\u30D3\u30CD\u30D7\u30EA\u30F3\u30C84\u679A
    \u30FB\u548C\u30FB\u6D0B\u53F0\u7D19\u30001\u518A
    \uFF08\u548C\u98A8\u30FB\u6D0B\u98A8\u53F0\u7D19\u304B\u3089\u304A\u9078\u3073\u9802\u3051\u307E\u3059\uFF09
    \u30FB\u984D\u30001\u9762\u7528\xD72\u518A
    38,800 \u5186
    \uFF0841,904\u5186 \u7A0E\u8FBC\uFF09

    \uFF0A\u521D\u7BC0\u53E5\u30D7\u30E9\u30F3C
    \u30FBCD\u30C7\u30FC\u30BF\u30FC
    \u30FB\u516D\u5207\u30D7\u30EA\u30F3\u30C82\u679A
    \u30FB\u30AD\u30E3\u30D3\u30CD\u30D7\u30EA\u30F3\u30C84\u679A
    \u30FB\u548C\u30FB\u6D0B\u53F0\u7D19\u30001\u518A
    \uFF08\u548C\u98A8\u30FB\u6D0B\u98A8\u53F0\u7D19\u304B\u3089\u304A\u9078\u3073\u9802\u3051\u307E\u3059\uFF09
    \u30FB\u984D\u30002\u9762\u7528\xD71\u518A
    39,800 \u5186
    \uFF0842,984\u5186 \u7A0E\u8FBC\uFF09`,
    productId: 7
  },
  {
    src: "/option-images/print/birthday/birtkday_top.jpg",
    description: `\u30D0\u30FC\u30B9\u30C7\u30FC\u30D7\u30E9\u30F3

    \uFF0AB-day\u30D7\u30E9\u30F3A
    \u30FB\u30C7\u30B6\u30A4\u30F3\u30D7\u30EA\u30F3\u30C8
    \u307E\u305F\u306F
    \u30FB\u516D\u5207\u30D7\u30EA\u30F3\u30C8
    \u30FB\u5199\u771F\u7ACB\u3066
    15,800 \u5186
    \uFF0817,380\u5186 \u7A0E\u8FBC\uFF09

    \uFF0AB-day\u30D7\u30E9\u30F3B
    \u30FB\u30C7\u30B6\u30A4\u30F3\u30D7\u30EA\u30F3\u30C8
    \u30FB\u5897\u3048\u308B\u30A2\u30EB\u30D0\u30E0\u30001\u518A
    27,800 \u5186
    \uFF0830,580\u5186 \u7A0E\u8FBC\uFF09

    \uFF0AB-day\u30D7\u30E9\u30F3C
    \u30FBCD\u30C7\u30FC\u30BF\u30FC
    \u30FB\u30C7\u30B6\u30A4\u30F3\u30D7\u30EA\u30F3\u30C8
    \u307E\u305F\u306F
    \u30FB\u516D\u5207\u30D7\u30EA\u30F3\u30C8
    \u30FB\u5199\u771F\u7ACB\u3066
    35,800 \u5186
    \uFF0839,380\u5186 \u7A0E\u8FBC\uFF09

    \uFF0AB-day\u30D7\u30E9\u30F3d
    \u30FBCD\u30C7\u30FC\u30BF\u30FC
    \u30FB\u30C7\u30B6\u30A4\u30F3\u30D7\u30EA\u30F3\u30C8
    \u30FB\u5897\u3048\u308B\u30A2\u30EB\u30D0\u30E0
    49,800 \u5186
    \uFF0854,780\u5186 \u7A0E\u8FBC\uFF09`,
    productId: 8
  },
  {
    src: "/option-images/print/nyuugaku/nyuugaku_top.jpg",
    description: `\u5165\u5712\u30FB\u5165\u5B66&\u5352\u696D\u5F0F\u30D7\u30E9\u30F3

    \uFF0A\u5165\u5B66&\u5352\u696D\u5F0F\u30D7\u30E9\u30F3A
    \u30FB\u516D\u5207\u30D7\u30EA\u30F3\u30C8 2\u679A
    \u30FB\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 1\u518A
    \u30FB\u30AD\u30E3\u30D3\u30CD\u30D7\u30EA\u30F3\u30C8 2\u679A
    \u30FB\u30D5\u30E9\u30EF\u30FC\u53F0\u7D19 2\u518A
    23,600 \u5186
    (25,960\u5186 \u7A0E\u8FBC)

    \uFF0A\u5165\u5B66&\u5352\u696D\u5F0F\u30D7\u30E9\u30F3B
    \u30FBCD\u30C7\u30FC\u30BF\u30FC
    \u30FB\u516D\u5207\u30D7\u30EA\u30F3\u30C8 2\u679A
    \u30FB\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 1\u518A
    29,800 \u5186
    (32,780\u5186 \u7A0E\u8FBC)

    \uFF0A\u5165\u5B66&\u5352\u696D\u5F0F\u30D7\u30E9\u30F3C
    \u30FBCD\u30C7\u30FC\u30BF\u30FC
    \u30FB\u516D\u5207\u30D7\u30EA\u30F3\u30C8 2\u679A
    \u30FB\u30AD\u30E3\u30D3\u30CD\u30D7\u30EA\u30F3\u30C8 2\u679A
    \u30FB\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 1\u518A
    \u30FB\u30AD\u30E3\u30D3\u30CD\u984D1\u9762\u7528 2\u679A
    39,800 \u5186
    (43,780\u5186 \u7A0E\u8FBC)`,
    productId: 9
  },
  {
    src: "/option-images/print/seijin-shiki/seijinshiki_top.jpg",
    description: `\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3
  
   \uFF0A\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3A
   \u30FB\u516D\u52073\u9762\u53F0\u7D191\u518A
   \u30FB\u30AD\u30FC\u30DB\u30EB\u30C0\u30FC(1\u9762)
   23,100\u5186
   (25,410\u5186 \u7A0E\u8FBC)
 
   \uFF0A\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3B
   \u30FBCD\u30C7\u30FC\u30BF
   \u30FB\u516D\u52073\u9762\u53F0\u7D191\u518A
   \u30FB\u30AD\u30FC\u30DB\u30EB\u30C0\u30FC(1\u9762)
   34,600\u5186
  (38,460\u5186 \u7A0E\u8FBC)

   \uFF0A\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3C
   \u30FBCD\u30C7\u30FC\u30BF\uFF0B
   \u30FB\u516D\u52073\u9762\u53F0\u7D191\u518A
   \u30FB\u30AD\u30E3\u30D3\u30CD2\u9762\u984D1\u500B
   \u30FB\u30AD\u30FC\u30DB\u30EB\u30C0\u30FC(1\u9762)
   48,600\u5186
  (53,460\u5186 \u7A0E\u8FBC)

   \uFF0A\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3D
   \u30FBCD\u30C7\u30FC\u30BF
   \u30FB\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0
   24\u30AB\u30C3\u30C81\u518A
   \u30FB\u516D\u5207\u308A1\u9762\u53F0\u7D191\u518A
   (\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19)
   \u30FB\u30AD\u30FC\u30DB\u30EB\u30C0\u30FC(1\u9762)
   49,800\u5186
  (54,780\u5186 \u7A0E\u8FBC)

   \uFF0A\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3E 
   \u30FBCD\u30C7\u30FC\u30BF
   \u30FB\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0
   30\u30AB\u30C3\u30C81\u518A
   \u30FB\u30AD\u30E3\u30D3\u30CD2\u9762\u984D1\u500B
   67,200\u5186
  (73,920\u5186 \u7A0E\u8FBC)

   \uFF0A\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3F 
   \u30FBCD\u30C7\u30FC\u30BF
   \u30FB\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0
   36\u30AB\u30C3\u30C81\u518A
   \u30FB\u516D\u5207\u308A3\u9762\u53F0\u7D19
   \u30FB\u30AD\u30FC\u30DB\u30EB\u30C0\u30FC(1\u9762)
   85,900\u5186
  (94,490\u5186 \u7A0E\u8FBC)

   \uFF0A\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3
   \u30B9\u30DA\u30B7\u30E3\u30EB\u30BB\u30C3\u30C8
   \u30FBCD\u30C7\u30FC\u30BF
   \u30FB\u30AF\u30EA\u30B9\u30BF\u30EB\u30B0\u30E9\u30D5\u30A3\u30FC
   3\u9762 1\u518A
   \u30FB\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0
   30\u30AB\u30C3\u30C8 1\u518A
   \u30FB\u516D\u5207\u308A1\u9762\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D191\u518A
   \u30FB\u30AD\u30FC\u30DB\u30EB\u30C0\u30FC1\u500B
   104,700\u5186
  (115,170\u5186 \u7A0E\u8FBC)`,
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-6" }, _attrs))} data-v-3b639961><h2 class="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2" data-v-3b639961> \u304A\u6C17\u306B\u5165\u308A\u753B\u50CF\u4E00\u89A7 </h2><div class="mb-6" data-v-3b639961>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md shadow" data-v-3b639961${_scopeId}> \u3082\u3069\u308B </button>`);
          } else {
            return [
              createVNode("button", { class: "px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md shadow" }, " \u3082\u3069\u308B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-10" data-v-3b639961>`);
      if (unref(favoriteImages).length === 0) {
        _push(`<div class="text-gray-500" data-v-3b639961> \u304A\u6C17\u306B\u5165\u308A\u753B\u50CF\u306F\u3042\u308A\u307E\u305B\u3093 </div>`);
      } else {
        _push(`<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" data-v-3b639961><!--[-->`);
        ssrRenderList(unref(favoriteImages), (favImg, index2) => {
          _push(`<div class="bg-white border border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition" data-v-3b639961>${ssrInterpolate(favImg.fileName)} <img${ssrRenderAttr("src", favImg.url)} alt="Favorite Image" class="rounded shadow-md mx-auto" data-v-3b639961><div class="mt-3 text-sm font-medium text-gray-700" data-v-3b639961>${ssrInterpolate(favImg.fileName)}</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><h2 class="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2" data-v-3b639961> \u304A\u6C17\u306B\u5165\u308A\u753B\u50CF\u306E\u4ED5\u4E0A\u3052\u65B9 </h2><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm" data-v-3b639961><!--[-->`);
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

export { index as default };
//# sourceMappingURL=index-lbhdEE5p.mjs.map
