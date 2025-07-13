import { defineEventHandler } from 'file://C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs';

const products = defineEventHandler(async () => {
  const data = await $fetch("/api/products");
  return data || [];
});

export { products as default };
//# sourceMappingURL=products.mjs.map
