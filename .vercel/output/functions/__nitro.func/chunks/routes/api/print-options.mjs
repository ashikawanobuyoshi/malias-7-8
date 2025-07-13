import { d as defineEventHandler, g as getQuery } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const printOptions = defineEventHandler((event) => {
  const query = getQuery(event);
  const id = Number(query.productId || query.id);
  const optionsMap = {
    1: [
      {
        name: "CD\u539F\u672C",
        price: 29800,
        selected: false,
        image: "/option-images/print/sd1.jpg",
        // 画像パス
        description: "CD\u306E\u539F\u672C\u3067\u3059"
      },
      {
        name: "\u30E2\u30D0\u30A4\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8",
        price: 3500,
        selected: false,
        image: "/option-images/print/sd41.jpg",
        description: "\u30E2\u30D0\u30A4\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306E\u8AAC\u660E"
      },
      {
        name: "\u30AA\u30EA\u30B8\u30CA\u30EB\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 2\u9762",
        price: 4950,
        selected: false,
        image: "/option-images/print/sd2.jpg",
        description: "\u30AA\u30EA\u30B8\u30CA\u30EB\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u30AA\u30EA\u30B8\u30CA\u30EB\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 3\u9762",
        price: 6600,
        selected: false,
        image: "/option-images/print/sd2.jpg",
        description: "\u30AA\u30EA\u30B8\u30CA\u30EB\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u56DB\u5207\u308A 2\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 4460,
        selected: false,
        image: "/option-images/print/sd3.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u56DB\u5207\u308A 2\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u56DB\u5207\u308A 3\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 5780,
        selected: false,
        image: "/option-images/print/sd3.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u56DB\u5207\u308A 3\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u56DB\u5207\u308A 6\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 12930,
        selected: false,
        image: "/option-images/print/sd3.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u56DB\u5207\u308A 6\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 3300,
        selected: false,
        image: "/option-images/print/sd3.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 4900,
        selected: false,
        image: "/option-images/print/sd3.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 12540,
        selected: false,
        image: "/option-images/print/sd3.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u30AD\u30E3\u30D3\u30CD\u30FB\u624B\u672D 2\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 3190,
        selected: false,
        image: "/option-images/print/sd3.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u30AD\u30E3\u30D3\u30CD\u30FB\u624B\u672D 2\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u30AD\u30E3\u30D3\u30CD\u30FB\u624B\u672D 3\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 4205,
        selected: false,
        image: "/option-images/print/sd3.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u30AD\u30E3\u30D3\u30CD\u30FB\u624B\u672D 3\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u56DB\u5207\u308A 2\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D",
        price: 4460,
        selected: false,
        image: "/option-images/print/sd4.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u56DB\u5207\u308A 2\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u56DB\u5207\u308A 3\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D",
        price: 5780,
        selected: false,
        image: "/option-images/print/sd4.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u56DB\u5207\u308A 3\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u56DB\u5207\u308A 6\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D",
        price: 12930,
        selected: false,
        image: "/option-images/print/sd4.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u56DB\u5207\u308A 6\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D",
        price: 3300,
        selected: false,
        image: "/option-images/print/sd4.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D",
        price: 4900,
        selected: false,
        image: "/option-images/print/sd4.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D",
        price: 12540,
        selected: false,
        image: "/option-images/print/sd4.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u30AD\u30E3\u30D3\u30CD\u30FB\u624B\u672D 2\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D",
        price: 3190,
        selected: false,
        image: "/option-images/print/sd4.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u30AD\u30E3\u30D3\u30CD\u30FB\u624B\u672D 2\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u30AD\u30E3\u30D3\u30CD\u30FB\u624B\u672D 3\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D",
        price: 4205,
        selected: false,
        image: "/option-images/print/sd4.jpg",
        description: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u30AD\u30E3\u30D3\u30CD\u30FB\u624B\u672D 3\u9762\u300C\u30D6\u30E9\u30C3\u30AF\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u8D64\u30FB\u9ED2\u300D",
        price: 7990,
        selected: false,
        image: "/option-images/print/sd5.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u8D64\u30FB\u9ED2\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u8D64\u30FB\u9ED2\u300D",
        price: 10260,
        selected: false,
        image: "/option-images/print/sd5.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u8D64\u30FB\u9ED2\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u8D64\u30FB\u9ED2\u300D",
        price: 16740,
        selected: false,
        image: "/option-images/print/sd5.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u8D64\u30FB\u9ED2\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u30D6\u30EB\u30FC\u300D",
        price: 7990,
        selected: false,
        image: "/option-images/print/sd6.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u30D6\u30EB\u30FC\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D6\u30EB\u30FC\u300D",
        price: 10260,
        selected: false,
        image: "/option-images/print/sd6.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D6\u30EB\u30FC\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D6\u30EB\u30FC\u300D",
        price: 16740,
        selected: false,
        image: "/option-images/print/sd6.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D6\u30EB\u30FC\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u9ED2\u30FB\u7D2B\u300D",
        price: 7990,
        selected: false,
        image: "/option-images/print/sd7.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u9ED2\u30FB\u7D2B\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u9ED2\u30FB\u7D2B\u300D",
        price: 10260,
        selected: false,
        image: "/option-images/print/sd7.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u9ED2\u30FB\u7D2B\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u9ED2\u30FB\u7D2B\u300D",
        price: 16740,
        selected: false,
        image: "/option-images/print/sd7.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u9ED2\u30FB\u7D2B\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u30D4\u30F3\u30AF\u300D",
        price: 7990,
        selected: false,
        image: "/option-images/print/sd8.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u30D4\u30F3\u30AF\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D4\u30F3\u30AF\u300D",
        price: 10260,
        selected: false,
        image: "/option-images/print/sd8.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D4\u30F3\u30AF\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D4\u30F3\u30AF\u300D",
        price: 16740,
        selected: false,
        image: "/option-images/print/sd8.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D4\u30F3\u30AF\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u9752\u300D",
        price: 13610,
        selected: false,
        image: "/option-images/print/sd9.jpg",
        description: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u9752\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u9752\u300D",
        price: 16900,
        selected: false,
        image: "/option-images/print/sd9.jpg",
        description: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u9752\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u8D64\u300D",
        price: 13610,
        selected: false,
        image: "/option-images/print/sd40.jpg",
        description: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u8D64\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u8D64\u300D",
        price: 16900,
        selected: false,
        image: "/option-images/print/sd40.jpg",
        description: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u8D64\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u30D5\u30E9\u30EF\u30FC\u53F0\u7D19 \u30AD\u30E3\u30D3\u30CD\u30FB\u624B\u672D 2\u9762",
        price: 2310,
        selected: false,
        image: "/option-images/print/sd10.jpg",
        description: "\u30D5\u30E9\u30EF\u30FC\u53F0\u7D19 \u30AD\u30E3\u30D3\u30CD\u30FB\u624B\u672D 2\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u30D5\u30E9\u30EF\u30FC\u53F0\u7D19 \u30AD\u30E3\u30D3\u30CD\u30FB\u624B\u672D 3\u9762",
        price: 3140,
        selected: false,
        image: "/option-images/print/sd10.jpg",
        description: "\u30D5\u30E9\u30EF\u30FC\u53F0\u7D19 \u30AD\u30E3\u30D3\u30CD\u30FB\u624B\u672D 3\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u5897\u3048\u308B\u30A2\u30EB\u30D0\u30E0 \u516D\u5207\u308A 8\u9762",
        price: 19800,
        selected: false,
        image: "/option-images/print/sd11.jpg",
        description: "\u5897\u3048\u308B\u30A2\u30EB\u30D0\u30E0 \u516D\u5207\u308A 8\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u4E03\u4E94\u4E09\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u767D\u300D",
        price: 14500,
        selected: false,
        image: "/option-images/print/sd12.jpg",
        description: "\u4E03\u4E94\u4E09\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u767D\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u4E03\u4E94\u4E09\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u767D\u300D",
        price: 18300,
        selected: false,
        image: "/option-images/print/sd12.jpg",
        description: "\u4E03\u4E94\u4E09\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u767D\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u4E03\u4E94\u4E09\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D6\u30EB\u30FC\u300D",
        price: 14500,
        selected: false,
        image: "/option-images/print/sd13.jpg",
        description: "\u4E03\u4E94\u4E09\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D6\u30EB\u30FC\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u4E03\u4E94\u4E09\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D6\u30EB\u30FC\u300D",
        price: 18300,
        selected: false,
        image: "/option-images/print/sd13.jpg",
        description: "\u4E03\u4E94\u4E09\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D6\u30EB\u30FC\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u306F\u306A\u3054\u3053\u308D\u53F0\u7D19 \u56DB\u5207\u308A 2\u9762",
        price: 22150,
        selected: false,
        image: "/option-images/print/sd14.jpg",
        description: "\u306F\u306A\u3054\u3053\u308D\u53F0\u7D19 \u56DB\u5207\u308A 2\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u306F\u306A\u3054\u3053\u308D\u53F0\u7D19 \u56DB\u5207\u308A 3\u9762",
        price: 26575,
        selected: false,
        image: "/option-images/print/sd14.jpg",
        description: "\u306F\u306A\u3054\u3053\u308D\u53F0\u7D19 \u56DB\u5207\u308A 3\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u306F\u306A\u3054\u3053\u308D\u53F0\u7D19 \u56DB\u5207\u308A 6\u9762",
        price: 41700,
        selected: false,
        image: "/option-images/print/sd14.jpg",
        description: "\u306F\u306A\u3054\u3053\u308D\u53F0\u7D19 \u56DB\u5207\u308A 6\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u306F\u306A\u3054\u3053\u308D\u53F0\u7D19 \u56DB\u5207\u308A 8\u9762",
        price: 44185,
        selected: false,
        image: "/option-images/print/sd14.jpg",
        description: "\u306F\u306A\u3054\u3053\u308D\u53F0\u7D19 \u56DB\u5207\u308A 8\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u306F\u306A\u3054\u3053\u308D\u53F0\u7D19 \u56DB\u5207\u308A 12\u9762",
        price: 54987,
        selected: false,
        image: "/option-images/print/sd14.jpg",
        description: "\u306F\u306A\u3054\u3053\u308D\u53F0\u7D19 \u56DB\u5207\u308A 12\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u6210\u4EBA\u5F0F\u53F0\u7D19 \u516D\u5207\u308A 3\u9762",
        price: 13500,
        selected: false,
        image: "/option-images/print/sd16.jpg",
        description: "\u6210\u4EBA\u5F0F\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u83EF\u96C5\u53F0\u7D19 \u516D\u5207\u308A 4\u9762\u300C\u767D\u300D",
        price: 11990,
        selected: false,
        image: "/option-images/print/sd17.jpg",
        description: "\u83EF\u96C5\u53F0\u7D19 \u516D\u5207\u308A 4\u9762\u300C\u767D\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u83EF\u96C5\u53F0\u7D19 \u516D\u5207\u308A 4\u9762\u300C\u8D64\u300D",
        price: 11990,
        selected: false,
        image: "/option-images/print/sd18.jpg",
        description: "\u83EF\u96C5\u53F0\u7D19 \u516D\u5207\u308A 4\u9762\u300C\u8D64\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u7D19\u53F0\u7D19 \u56DB\u5207\u308A 2\u9762",
        price: 2e3,
        selected: false,
        image: "/option-images/print/sd19.jpg",
        description: "\u7D19\u53F0\u7D19 \u56DB\u5207\u308A 2\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u7D19\u53F0\u7D19 \u516D\u5207\u308A 2\u9762",
        price: 1740,
        selected: false,
        image: "/option-images/print/sd20.jpg",
        description: "\u7D19\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u7D19\u53F0\u7D19 \u30AD\u30E3\u30D3\u30CD 1\u9762",
        price: 940,
        selected: false,
        image: "/option-images/print/sd21.jpg",
        description: "\u7D19\u53F0\u7D19 \u30AD\u30E3\u30D3\u30CD 1\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u7D19\u53F0\u7D19 \u624B\u672D 1\u9762",
        price: 730,
        selected: false,
        image: "/option-images/print/sd22.jpg",
        description: "\u7D19\u53F0\u7D19 \u624B\u672D 1\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u30AD\u30E3\u30F3\u30D0\u30B9\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0",
        price: 15176,
        selected: false,
        image: "/option-images/print/sd23.jpg",
        description: "\u30AD\u30E3\u30F3\u30D0\u30B9\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0\u306E\u8AAC\u660E"
      },
      {
        name: "\u30B9\u30AF\u30A8\u30A2\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u516D\u5207\u308A 1p",
        price: 6980,
        selected: false,
        image: "/option-images/print/sd24.jpg",
        description: "\u30B9\u30AF\u30A8\u30A2\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u516D\u5207\u308A 2p\u306E\u8AAC\u660E"
      },
      {
        name: "\u30B9\u30AF\u30A8\u30A2\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u30AD\u30E3\u30D3\u30CD 2p",
        price: 6980,
        selected: false,
        image: "/option-images/print/sd25.jpg",
        description: "\u30B9\u30AF\u30A8\u30A2\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u30AD\u30E3\u30D3\u30CD 2p\u306E\u8AAC\u660E"
      },
      {
        name: "\u30B9\u30AF\u30A8\u30A2\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u624B\u672D 3p",
        price: 6980,
        selected: false,
        image: "/option-images/print/sd26.jpg",
        description: "\u30B9\u30AF\u30A8\u30A2\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u624B\u672D 3p\u306E\u8AAC\u660E"
      },
      {
        name: "\u30B9\u30AF\u30A8\u30A2\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u624B\u672D 4p",
        price: 6980,
        selected: false,
        image: "/option-images/print/sd27.jpg",
        description: "\u30B9\u30AF\u30A8\u30A2\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u624B\u672D 4p\u306E\u8AAC\u660E"
      },
      {
        name: "\u30B9\u30AF\u30A8\u30A2\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u624B\u672D 9p",
        price: 6980,
        selected: false,
        image: "/option-images/print/sd28.jpg",
        description: "\u30B9\u30AF\u30A8\u30A2\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u624B\u672D 9p\u306E\u8AAC\u660E"
      },
      {
        name: "\u6728\u88FD\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u56DB\u5207\u308A\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 2750,
        selected: false,
        image: "/option-images/print/sd29.jpg",
        description: "\u6728\u88FD\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u56DB\u5207\u308A\u300C\u30D6\u30E9\u30A6\u30F3\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6728\u88FD\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u56DB\u5207\u308A\u300C\u30D9\u30FC\u30B8\u30E5\u300D",
        price: 2750,
        selected: false,
        image: "/option-images/print/sd30.jpg",
        description: "\u6728\u88FD\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u56DB\u5207\u308A\u300C\u30D9\u30FC\u30B8\u30E5\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6728\u88FD\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u516D\u5207\u308A\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 1400,
        selected: false,
        image: "/option-images/print/sd29.jpg",
        description: "\u6728\u88FD\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u516D\u5207\u308A\u300C\u30D6\u30E9\u30A6\u30F3\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6728\u88FD\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u516D\u5207\u308A\u300C\u30D9\u30FC\u30B8\u30E5\u300D",
        price: 1400,
        selected: false,
        image: "/option-images/print/sd30.jpg",
        description: "\u6728\u88FD\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u516D\u5207\u308A\u300C\u30D9\u30FC\u30B8\u30E5\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6728\u88FD\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u30AD\u30E3\u30D3\u30CD\u300C\u30AD\u30E3\u30E1\u30EB\u300D",
        price: 1250,
        selected: false,
        image: "/option-images/print/sd36.jpg",
        description: "\u6728\u88FD\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u30AD\u30E3\u30D3\u30CD\u300C\u30AD\u30E3\u30E1\u30EB\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6728\u88FD\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u30AD\u30E3\u30D3\u30CD\u300C\u30DB\u30EF\u30A4\u30C8\u300D",
        price: 1250,
        selected: false,
        image: "/option-images/print/sd37.jpg",
        description: "\u6728\u88FD\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0 \u30AD\u30E3\u30D3\u30CD\u300C\u30DB\u30EF\u30A4\u30C8\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "2\u9762\u984D \u30AD\u30E3\u30D3\u30CD\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 10400,
        selected: false,
        image: "/option-images/print/sd38.jpg",
        description: "2\u9762\u984D \u30AD\u30E3\u30D3\u30CD\u300C\u30D6\u30E9\u30A6\u30F3\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "2\u9762\u984D \u624B\u672D\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 8e3,
        selected: false,
        image: "/option-images/print/sd38.jpg",
        description: "2\u9762\u984D \u624B\u672D\u300C\u30D6\u30E9\u30A6\u30F3\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u30D1\u30FC\u30EB\u984D\u30BB\u30C3\u30C8\u300C\u30D6\u30E9\u30C3\u30AF\u300D",
        price: 11750,
        selected: false,
        image: "/option-images/print/sd33.jpg",
        description: "\u30D1\u30FC\u30EB\u984D\u30BB\u30C3\u30C8\u300C\u30D6\u30E9\u30C3\u30AF\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u30D1\u30FC\u30EB\u984D\u30BB\u30C3\u30C8\u300C\u30D1\u30FC\u30D7\u30EB\u300D",
        price: 11750,
        selected: false,
        image: "/option-images/print/sd34.jpg",
        description: "\u30D1\u30FC\u30EB\u984D\u30BB\u30C3\u30C8\u300C\u30D1\u30FC\u30D7\u30EB\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u30AF\u30EA\u30B9\u30BF\u30EB\u30B0\u30E9\u30D5\u30A3\u30FC 1\u9762",
        price: 13150,
        selected: false,
        image: "/option-images/print/sd35.jpg",
        description: "\u30AF\u30EA\u30B9\u30BF\u30EB\u30B0\u30E9\u30D5\u30A3\u30FC 1\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u30DE\u30B0\u30CD\u30C3\u30C8\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0",
        price: 950,
        selected: false,
        image: "/option-images/print/sd31.jpg",
        description: "\u30DE\u30B0\u30CD\u30C3\u30C8\u30D5\u30A9\u30C8\u30D5\u30EC\u30FC\u30E0\u306E\u8AAC\u660E"
      },
      {
        name: "\u30AD\u30FC\u30DB\u30EB\u30C0\u30FC 1\u9762",
        price: 1500,
        selected: false,
        image: "/option-images/print/sd32.jpg",
        description: "\u30AD\u30FC\u30DB\u30EB\u30C0\u30FC 1\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u30AD\u30FC\u30DB\u30EB\u30C0\u30FC 2\u9762",
        price: 2500,
        selected: false,
        image: "/option-images/print/sd32.jpg",
        description: "\u30AD\u30FC\u30DB\u30EB\u30C0\u30FC 2\u9762\u306E\u8AAC\u660E"
      },
      {
        name: "\u30CD\u30FC\u30E0\u30D7\u30EC\u30FC\u30C8",
        price: 2710,
        selected: false,
        image: "/option-images/print/sd39.jpg",
        description: "\u30CD\u30FC\u30E0\u30D7\u30EC\u30FC\u30C8\u306E\u8AAC\u660E"
      },
      {
        name: "1p",
        price: 4800,
        selected: false,
        image: "/option-images/print/maternity/maternity-1.jpg",
        description: "\u516D\u5207\u308A1\u679A"
      },
      {
        name: "2p",
        price: 7600,
        selected: false,
        image: "/option-images/print/maternity/maternity-5.jpg",
        description: "\u30AD\u30E3\u30D3\u30CD2\u679A"
      },
      {
        name: "3p",
        price: 10500,
        selected: false,
        image: "/option-images/print/maternity/maternity-4.jpg",
        description: "\u624B\u672D3\u679A"
      },
      {
        name: "4p",
        price: 1400,
        selected: false,
        image: "/option-images/print/maternity/maternity-3.jpg",
        description: "\u624B\u672D4\u679A"
      },
      {
        name: "9p",
        price: 31500,
        selected: false,
        image: "/option-images/print/maternity/maternity-2.jpg",
        description: "\u624B\u672D9\u679A"
      }
    ],
    2: [
      {
        name: "C D 3\u4E07\u30BB\u30C3\u30C8",
        price: 32800,
        selected: false,
        image: "/option-images/print/new_3man_pran.jpg",
        description: `C D\u30C7\u30FC\u30BF\uFF0B\u516D\u3064\u5207\u308A\u30D7\u30EA\u30F3\u30C81\u679A,\u3000\u53F0\u7D19\u4ED8\u3000
  \uFF0A\u30AA\u30EA\u30B8\u30CA\u30EB\u30EC\u30B6\u30FC\u53F0\u7D19\u53C8\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19\u304B\u3089\u304A\u9078\u3073\u4E0B\u3055\u3044`
      },
      {
        name: "C D 5\u4E07\u30BB\u30C3\u30C8",
        price: 49800,
        selected: false,
        image: "/option-images/print/new_5man_pran.jpg",
        description: `C D\u30C7\u30FC\u30BF\uFF0B\u516D\u3064\u5207\u308A\u30D7\u30EA\u30F3\u30C85\u679A,\u3000\u53F0\u7D19\u4ED8\u3000
  \uFF0A\u30AA\u30EA\u30B8\u30CA\u30EB\u30EC\u30B6\u30FC\u53F0\u7D19\u53C8\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19\u304B\u3089\u304A\u9078\u3073\u4E0B\u3055\u3044`
      },
      {
        name: "C D 7\u4E07\u30BB\u30C3\u30C8",
        price: 69800,
        selected: false,
        image: "/option-images/print/new_7man_pran.jpg",
        description: `C D\u30C7\u30FC\u30BF\uFF0B\u516D\u3064\u5207\u308A\u30D7\u30EA\u30F3\u30C89\u679A,\u3000\u53F0\u7D19\u4ED8\u3000
  \uFF0A\u30AA\u30EA\u30B8\u30CA\u30EB\u30EC\u30B6\u30FC\u53F0\u7D19\u53C8\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19\u304B\u3089\u304A\u9078\u3073\u4E0B\u3055\u3044`
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd3.jpg",
        description: `\u304A\u5199\u771F\u306E\u8CBC\u308A\u9806\u3092\u5099\u8003\u6B04\u306B\u3054\u8A18\u5165\u4E0B\u3055\u3044`
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd3.jpg",
        description: `\u304A\u5199\u771F\u306E\u8CBC\u308A\u9806\u3092\u5099\u8003\u6B04\u306B\u3054\u8A18\u5165\u4E0B\u3055\u3044`
      },
      {
        name: "\u6D0B\u98A8\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D6\u30E9\u30A6\u30F3\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd3.jpg",
        description: `\u304A\u5199\u771F\u306E\u8CBC\u308A\u9806\u3092\u5099\u8003\u6B04\u306B\u3054\u8A18\u5165\u4E0B\u3055\u3044`
      },
      {
        name: "\u30AA\u30EA\u30B8\u30CA\u30EB\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 2\u9762",
        price: 0,
        selected: false,
        image: "/option-images/print/sd2.jpg",
        description: `\u304A\u5199\u771F\u306E\u8CBC\u308A\u9806\u3092\u5099\u8003\u6B04\u306B\u3054\u8A18\u5165\u4E0B\u3055\u3044`
      },
      {
        name: "\u30AA\u30EA\u30B8\u30CA\u30EB\u30EC\u30B6\u30FC\u53F0\u7D19 \u516D\u5207\u308A 3\u9762",
        price: 0,
        selected: false,
        image: "/option-images/print/sd2.jpg",
        description: `\u304A\u5199\u771F\u306E\u8CBC\u308A\u9806\u3092\u5099\u8003\u6B04\u306B\u3054\u8A18\u5165\u4E0B\u3055\u3044`
      }
    ],
    3: [
      {
        name: "\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0\u3061\u308A\u3081\u3093",
        price: 54780,
        selected: false,
        image: "/option-images/print/chirimen.jpg",
        description: "6P(24\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0\u30AD\u30E3\u30F3\u30D0\u30B9",
        price: 54780,
        selected: false,
        image: "/option-images/print/cyanbasu.jpg",
        description: "6P(24\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0\u3061\u308A\u3081\u3093",
        price: 62480,
        selected: false,
        image: "/option-images/print/chirimen.jpg",
        description: "10P(30\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0\u30AD\u30E3\u30F3\u30D0\u30B9",
        price: 62480,
        selected: false,
        image: "/option-images/print/cyanbasu.jpg",
        description: "10P(30\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0\u3061\u308A\u3081\u3093",
        price: 69080,
        selected: false,
        image: "/option-images/print/chirimen.jpg",
        description: "10P(36\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0\u30AD\u30E3\u30F3\u30D0\u30B9",
        price: 69080,
        selected: false,
        image: "/option-images/print/cyanbasu.jpg",
        description: "10P(36\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0\u3061\u308A\u3081\u3093\u3010\u5897\u5237\u3011",
        price: 27390,
        selected: false,
        image: "/option-images/print/chirimen.jpg",
        description: "6P(24\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0\u3061\u308A\u3081\u3093\u3010\u5897\u5237\u3011",
        price: 36080,
        selected: false,
        image: "/option-images/print/chirimen.jpg",
        description: "10P(30\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0\u30AD\u30E3\u30F3\u30D0\u30B9\u3010\u5897\u5237\u3011",
        price: 27390,
        selected: false,
        image: "/option-images/print/cyanbasu.jpg",
        description: "6P(24\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0\u30AD\u30E3\u30F3\u30D0\u30B9\u3010\u5897\u5237\u3011",
        price: 36080,
        selected: false,
        image: "/option-images/print/cyanbasu.jpg",
        description: "10P(30\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u7D75\u672CBOOK",
        price: 38280,
        selected: false,
        image: "/option-images/print/ehon.jpg",
        description: "4P ( 6\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u7D75\u672CBOOK",
        price: 40480,
        selected: false,
        image: "/option-images/print/ehon-b.jpg",
        description: "6P ( 8\u30AB\u30C3\u30C8) "
      },
      {
        name: "\u7D75\u672CBOOK",
        price: 43780,
        selected: false,
        image: "/option-images/print/ehon-c.jpg",
        description: "8P ( 10\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u7D75\u672CBOOK",
        price: 51480,
        selected: false,
        image: "/option-images/print/ehon.jpg",
        description: "10P ( 12\u30AB\u30C3\u30C8) "
      },
      {
        name: "\u7D75\u672CBOOK",
        price: 54780,
        selected: false,
        image: "/option-images/print/ehon-b.jpg",
        description: "12P ( 14\u30AB\u30C3\u30C8) "
      },
      {
        name: "\u7D75\u672CBOOK\u3010\u5897\u5237\u3011",
        price: 8778,
        selected: false,
        image: "/option-images/print/ehon-c.jpg",
        description: "4P ( 6\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u7D75\u672CBOOK\u3010\u5897\u5237\u3011",
        price: 9504,
        selected: false,
        image: "/option-images/print/ehon.jpg",
        description: "6P ( 8\u30AB\u30C3\u30C8) "
      },
      {
        name: "\u30D7\u30EC\u30DF\u30A2\u30E0\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0",
        price: 54780,
        selected: false,
        image: "/option-images/print/puremiamu3.jpg",
        description: "6P (24\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u30D7\u30EC\u30DF\u30A2\u30E0\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0",
        price: 62480,
        selected: false,
        image: "/option-images/print/puremiamu.jpg",
        description: "10P ( 30\u30AB\u30C3\u30C8) "
      },
      {
        name: "\u30D7\u30EC\u30DF\u30A2\u30E0\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0",
        price: 69080,
        selected: false,
        image: "/option-images/print/puremiamu2.jpg",
        description: "10P (36\u30AB\u30C3\u30C8) "
      },
      {
        name: "\u30D7\u30EC\u30DF\u30A2\u30E0\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0\u3010\u5897\u5237\u3011",
        price: 27390,
        selected: false,
        image: "/option-images/print/puremiamu4.jpg",
        description: "6P (18\u30AB\u30C3\u30C8)"
      },
      {
        name: "\u30D7\u30EC\u30DF\u30A2\u30E0\u30C7\u30B6\u30A4\u30F3\u30A2\u30EB\u30D0\u30E0\u3010\u5897\u5237\u3011",
        price: 36080,
        selected: false,
        image: "/option-images/print/puremiamu.jpg",
        description: "30P (36\u30AB\u30C3\u30C8) "
      }
    ],
    4: [
      {
        name: "\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3\uFF1AA",
        price: 54780,
        selected: false,
        image: "/option-images/print/photo_collection_a.jpg",
        description: "3\u9762\u30A2\u30EB\u30D0\u30E0 1\u518A \uFF0B2\u9762\u53F0\u7D19 2\u518A "
      },
      {
        name: "\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3\uFF1AB",
        price: 71500,
        selected: false,
        image: "/option-images/print/photo_collection_b.jpg",
        description: "CD\u30C7\u30FC\u30BF\uFF08\u5168\u30C7\u30FC\u30BF)\uFF0B3\u9762\u30A2\u30EB\u30D0\u30E0 1\u518A\uFF0B2\u9762\u53F0\u7D19 2\u518A "
      },
      {
        name: "\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3\uFF1AC",
        price: 35310,
        selected: false,
        image: "/option-images/print/photo_collection_c.jpg",
        description: "2\u9762\u53F0\u7D19\u30002\u518A"
      },
      {
        name: "\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3\uFF1AD",
        price: 55e3,
        selected: false,
        image: "/option-images/print/photo_collection_d.jpg",
        description: "CD\u30C7\u30FC\u30BF(\u5168\u30C7\u30FC\u30BF)\uFF0B2\u9762\u53F0\u7D19\u30002\u518A"
      },
      {
        name: "\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3\uFF1AE",
        price: 60280,
        selected: false,
        image: "/option-images/print/photo_collection_e.jpg",
        description: "CD\u30C7\u30FC\u30BF(\u5168\u30C7\u30FC\u30BF)\uFF0B\u30D2\u30F3\u30B8\u30A2\u30EB\u30D0\u30E0 1\u518A\uFF0B2\u9762\u984D 1\u679A"
      },
      {
        name: "\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3\uFF1AF",
        price: 66e3,
        selected: false,
        image: "/option-images/print/photo_collection_f.jpg",
        description: "CD\u30C7\u30FC\u30BF(\u5168\u30C7\u30FC\u30BF)\uFF0B3\u9762\u30A2\u30EB\u30D0\u30E0 1\u518A\uFF0B2\u9762\u984D 2\u679A"
      },
      {
        name: "\u304A\u5BAE\u53C2\u308A\u30D7\u30E9\u30F3\uFF1A\u30B9\u30DA\u30B7\u30E3\u30EB\u30BB\u30C3\u30C8",
        price: 88e3,
        selected: false,
        image: "/option-images/print/photo_collection_g.jpg",
        description: "CD\u30C7\u30FC\u30BF(\u5168\u30C7\u30FC\u30BF)\uFF0B\u30D2\u30F3\u30B8\u30A2\u30EB\u30D0\u30E01\u518A\uFF0B2\u9762\u984D 2\u679A\uFF0B\u30AF\u30EA\u30B9\u30BF\u30EB\u30B0\u30E9\u30D5\u30A3\u30FC 1\u679A\uFF0B\u30AD\u30FC\u30DB\u30EB\u30C0\u30FC 1\u30F6"
      },
      {
        name: "\u30E2\u30D0\u30A4\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8",
        price: 3500,
        selected: false,
        image: "/option-images/print/sd41.jpg",
        description: "\u30E2\u30D0\u30A4\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306E\u8AAC\u660E"
      },
      {
        name: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u9752\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd9.jpg",
        description: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u9752\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u9752\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd9.jpg",
        description: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u9752\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u8D64\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd40.jpg",
        description: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u8D64\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u8D64\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd40.jpg",
        description: "\u6700\u9AD8\u7D1A\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u8D64\u300D\u306E\u8AAC\u660E"
      }
    ],
    5: [
      {
        name: "\u4E03\u4E94\u4E09CD\u30D7\u30E9\u30F3\uFF1AA",
        price: 36080,
        selected: false,
        image: "/option-images/print/photo_collection_a.jpg",
        description: "CD\u30C7\u30FC\u30BF\u30FC\uFF0B\u516D\u5207\u30D7\u30EA\u30F3\u30C81\u679A(\u53F0\u7D19\u4ED8)\uFF0A\u548C\u98A8\u53F0\u7D19\u53C8\u30AA\u30EA\u30B8\u30CA\u30EB\u30EC\u30B6\u30FC\u53F0\u7D19\u53C8\u6D0B\u98A8\uFF9A\uFF7B\uFF9E\uFF70\u53F0\u7D19\u304B\u3089\u304A\u9078\u3073\u4E0B\u3055\u3044"
      },
      {
        name: "\u4E03\u4E94\u4E09CD\u30D7\u30E9\u30F3\uFF1AB",
        price: 54780,
        selected: false,
        image: "/option-images/print/photo_collection_b.jpg",
        description: "CD\u30C7\u30FC\u30BF\u30FC\uFF0B\u516D\u5207\u30D7\u30EA\u30F3\u30C85\u679A(\u53F0\u7D19\u4ED8)\uFF0A\u548C\u98A8\u53F0\u7D19\u53C8\u30AA\u30EA\u30B8\u30CA\u30EB\u30EC\u30B6\u30FC\u53F0\u7D19\u53C8\u6D0B\u98A8\uFF9A\uFF7B\uFF9E\uFF70\u53F0\u7D19\u304B\u3089\u304A\u9078\u3073\u4E0B\u3055\u3044\u3002\uFF0A\u53F0\u7D19\u306E\u30DA\u30FC\u30B8\u6570\u306F\u3001\u3054\u81EA\u7531\u306B\u304A\u6C7A\u3081\u9802\u3051\u307E\u3059\u3002"
      },
      {
        name: "\u4E03\u4E94\u4E09CD\u30D7\u30E9\u30F3\uFF1AC",
        price: 76780,
        selected: false,
        image: "/option-images/print/photo_collection_c.jpg",
        description: "CD\u30C7\u30FC\u30BF\u30FC\uFF0B\u516D\u5207\u30D7\u30EA\u30F3\u30C89\u679A(\u53F0\u7D19\u4ED8)\uFF0A\u548C\u98A8\u53F0\u7D19\u53C8\u30AA\u30EA\u30B8\u30CA\u30EB\u30EC\u30B6\u30FC\u53F0\u7D19\u53C8\u6D0B\u98A8\uFF9A\uFF7B\uFF9E\uFF70\u53F0\u7D19\u304B\u3089\u304A\u9078\u3073\u4E0B\u3055\u3044\uFF0A\u53F0\u7D19\u306E\u30DA\u30FC\u30B8\u6570\u306F\u3001\u3054\u81EA\u7531\u306B\u304A\u6C7A\u3081\u9802\u3051\u307E\u3059\u3002"
      },
      {
        name: "\u30E2\u30D0\u30A4\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8",
        price: 3500,
        selected: false,
        image: "/option-images/print/sd41.jpg",
        description: "\u30E2\u30D0\u30A4\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u8D64\u30FB\u9ED2\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd5.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u8D64\u30FB\u9ED2\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u8D64\u30FB\u9ED2\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd5.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u8D64\u30FB\u9ED2\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u8D64\u30FB\u9ED2\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd5.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u8D64\u30FB\u9ED2\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u30D6\u30EB\u30FC\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd6.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u30D6\u30EB\u30FC\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D6\u30EB\u30FC\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd6.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D6\u30EB\u30FC\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D6\u30EB\u30FC\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd6.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D6\u30EB\u30FC\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u9ED2\u30FB\u7D2B\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd7.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u9ED2\u30FB\u7D2B\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u9ED2\u30FB\u7D2B\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd7.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u9ED2\u30FB\u7D2B\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u9ED2\u30FB\u7D2B\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd7.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u9ED2\u30FB\u7D2B\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u30D4\u30F3\u30AF\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd8.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 2\u9762\u300C\u30D4\u30F3\u30AF\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D4\u30F3\u30AF\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd8.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 3\u9762\u300C\u30D4\u30F3\u30AF\u300D\u306E\u8AAC\u660E"
      },
      {
        name: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D4\u30F3\u30AF\u300D",
        price: 0,
        selected: false,
        image: "/option-images/print/sd8.jpg",
        description: "\u548C\u98A8\u53F0\u7D19 \u516D\u5207\u308A 6\u9762\u300C\u30D4\u30F3\u30AF\u300D\u306E\u8AAC\u660E"
      }
    ],
    6: [
      {
        name: "1p",
        price: 0,
        selected: false,
        image: "/option-images/print/maternity/maternity-1.jpg",
        description: "\u516D\u5207\u308A1\u679A"
      },
      {
        name: "2p",
        price: 600,
        selected: false,
        image: "/option-images/print/maternity/maternity-5.jpg",
        description: "\u30AD\u30E3\u30D3\u30CD2\u679A"
      },
      {
        name: "3p",
        price: 0,
        selected: false,
        image: "/option-images/print/maternity/maternity-4.jpg",
        description: "\u624B\u672D3\u679A"
      },
      {
        name: "4p",
        price: 0,
        selected: false,
        image: "/option-images/print/maternity/maternity-3.jpg",
        description: "\u624B\u672D4\u679A"
      },
      {
        name: "9p",
        price: 0,
        selected: false,
        image: "/option-images/print/maternity/maternity-2.jpg",
        description: "\u624B\u672D9\u679A"
      }
    ],
    7: [
      {
        name: "\u521D\u7BC0\u53E5\u30D7\u30E9\u30F3A",
        price: 29800,
        selected: false,
        image: "/option-images/print/hatsusextuku/hatsusextuku_b.jpg",
        description: "\u521D\u7BC0\u53E5\u30D7\u30E9\u30F3A\u306E\u8AAC\u660E"
      },
      {
        name: "\u521D\u7BC0\u53E5\u30D7\u30E9\u30F3B",
        price: 38800,
        selected: false,
        image: "/option-images/print/hatsusextuku/hatsusextuku_c.jpg",
        description: "\u521D\u7BC0\u53E5\u30D7\u30E9\u30F3B\u306E\u8AAC\u660E"
      },
      {
        name: "\u521D\u7BC0\u53E5\u30D7\u30E9\u30F3C",
        price: 39800,
        selected: false,
        image: "/option-images/print/hatsusextuku/hatsusextuku_d.jpg",
        description: "\u521D\u7BC0\u53E5\u30D7\u30E9\u30F3C\u306E\u8AAC\u660E"
      },
      {
        name: "\u30E2\u30D0\u30A4\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8",
        price: 3500,
        selected: false,
        image: "/option-images/print/sd41.jpg",
        description: "\u30E2\u30D0\u30A4\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306E\u8AAC\u660E"
      }
    ],
    8: [
      {
        name: "\u30D0\u30FC\u30B9\u30C7\u30FC\u30D7\u30E9\u30F3A",
        price: 15800,
        selected: false,
        image: "/option-images/print/birthday/birthday_plan_a_ok.jpg",
        description: "\u30D0\u30FC\u30B9\u30C7\u30FC\u30D7\u30E9\u30F3A\u306E\u8AAC\u660E"
      },
      {
        name: "\u30D0\u30FC\u30B9\u30C7\u30FC\u30D7\u30E9\u30F3B",
        price: 27800,
        selected: false,
        image: "/option-images/print/birthday/birthday_plan_b_ok.jpg",
        description: "\u30D0\u30FC\u30B9\u30C7\u30FC\u30D7\u30E9\u30F3B\u306E\u8AAC\u660E"
      },
      {
        name: "\u30D0\u30FC\u30B9\u30C7\u30FC\u30D7\u30E9\u30F3C",
        price: 35800,
        selected: false,
        image: "/option-images/print/birthday/birthday_plan_c_ok.jpg",
        description: "\u30D0\u30FC\u30B9\u30C7\u30FC\u30D7\u30E9\u30F3C\u306E\u8AAC\u660E"
      },
      {
        name: "\u30D0\u30FC\u30B9\u30C7\u30FC\u30D7\u30E9\u30F3d",
        price: 49800,
        selected: false,
        image: "/option-images/print/birthday/birthday_plan_d_ok.jpg",
        description: "\u30D0\u30FC\u30B9\u30C7\u30FC\u30D7\u30E9\u30F3d\u306E\u8AAC\u660E"
      },
      {
        name: "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8A",
        price: 0,
        selected: false,
        image: "/option-images/print/birthday/4P_a_ok.jpg",
        description: "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8A\u306E\u8AAC\u660E"
      },
      {
        name: "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8B",
        price: 0,
        selected: false,
        image: "/option-images/print/birthday/4P_b_ok.jpg",
        description: "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8B\u306E\u8AAC\u660E"
      },
      {
        name: "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8C",
        price: 0,
        selected: false,
        image: "/option-images/print/birthday/4P_c_ok.jpg",
        description: "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8C\u306E\u8AAC\u660E"
      },
      {
        name: "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8d",
        price: 0,
        selected: false,
        image: "/option-images/print/birthday/4P_d_ok.jpg",
        description: "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8d\u306E\u8AAC\u660E"
      },
      {
        name: "\u30E2\u30D0\u30A4\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8",
        price: 3500,
        selected: false,
        image: "/option-images/print/sd41.jpg",
        description: "\u30E2\u30D0\u30A4\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306E\u8AAC\u660E"
      }
    ],
    9: [
      {
        name: "\u5165\u5712\u30FB\u5165\u5B66&\u5352\u696D\u5F0F\u30D7\u30E9\u30F3A",
        price: 23600,
        selected: false,
        image: "/option-images/print/nyuugaku/nyuugaku_a.jpg",
        description: "\u5165\u5712\u30FB\u5165\u5B66&\u5352\u696D\u5F0F\u30D7\u30E9\u30F3A\u306E\u8AAC\u660E"
      },
      {
        name: "\u5165\u5712\u30FB\u5165\u5B66&\u5352\u696D\u5F0F\u30D7\u30E9\u30F3B",
        price: 29800,
        selected: false,
        image: "/option-images/print/nyuugaku/nyuugaku_b.jpg",
        description: "\u5165\u5712\u30FB\u5165\u5B66&\u5352\u696D\u5F0F\u30D7\u30E9\u30F3B\u306E\u8AAC\u660E"
      },
      {
        name: "\u5165\u5712\u30FB\u5165\u5B66&\u5352\u696D\u5F0F\u30D7\u30E9\u30F3C",
        price: 39800,
        selected: false,
        image: "/option-images/print/nyuugaku/nyuugaku_c.jpg",
        description: "\u5165\u5712\u30FB\u5165\u5B66&\u5352\u696D\u5F0F\u30D7\u30E9\u30F3c\u306E\u8AAC\u660E"
      },
      {
        name: "\u30E2\u30D0\u30A4\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8",
        price: 3500,
        selected: false,
        image: "/option-images/print/sd41.jpg",
        description: "\u30E2\u30D0\u30A4\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306E\u8AAC\u660E"
      }
    ],
    10: [
      {
        name: "\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3A",
        price: 23100,
        selected: false,
        image: "/option-images/print/seijin-shiki/seijinshiki_a_ok.jpg",
        description: "\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3A\u306E\u8AAC\u660E"
      },
      {
        name: "\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3B",
        price: 34600,
        selected: false,
        image: "/option-images/print/seijin-shiki/seijinshiki_b_ok.jpg",
        description: "\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3B\u306E\u8AAC\u660E"
      },
      {
        name: "\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3C",
        price: 48600,
        selected: false,
        image: "/option-images/print/seijin-shiki/seijinshiki_c_ok.jpg",
        description: "\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3C\u306E\u8AAC\u660E"
      },
      {
        name: "\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3D",
        price: 49800,
        selected: false,
        image: "/option-images/print/seijin-shiki/seijinshiki_d_ok.jpg",
        description: "\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3D\u306E\u8AAC\u660E"
      },
      {
        name: "\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3E",
        price: 67200,
        selected: false,
        image: "/option-images/print/seijin-shiki/seijinshiki_e_ok.jpg",
        description: "\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3E\u306E\u8AAC\u660E"
      },
      {
        name: "\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3F ",
        price: 85900,
        selected: false,
        image: "/option-images/print/seijin-shiki/seijinshiki_f_ok.jpg",
        description: "\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3F \u306E\u8AAC\u660E"
      },
      {
        name: "\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3\u30B9\u30DA\u30B7\u30E3\u30EB\u30BB\u30C3\u30C8",
        price: 104700,
        selected: false,
        image: "/option-images/print/seijin-shiki/seijinshiki_g_ok.jpg",
        description: "\u6210\u4EBA\u5F0F\u30D7\u30E9\u30F3\u30B9\u30DA\u30B7\u30E3\u30EB\u30BB\u30C3\u30C8\u306E\u8AAC\u660E"
      },
      {
        name: "\u30E2\u30D0\u30A4\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8",
        price: 3500,
        selected: false,
        image: "/option-images/print/sd41.jpg",
        description: "\u30E2\u30D0\u30A4\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306E\u8AAC\u660E"
      }
    ]
  };
  const options = optionsMap[id] || [];
  return options;
});

export { printOptions as default };
//# sourceMappingURL=print-options.mjs.map
