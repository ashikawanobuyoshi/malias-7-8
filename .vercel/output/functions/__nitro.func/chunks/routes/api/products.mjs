import { d as defineEventHandler } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const products = defineEventHandler(async () => {
  const data = await $fetch("/api/products");
  return data || [];
});

export { products as default };
//# sourceMappingURL=products.mjs.map
