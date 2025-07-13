import { defineEventHandler, readBody } from 'file://C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs';

const order = defineEventHandler(async (event) => {
  await readBody(event);
  try {
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

export { order as default };
//# sourceMappingURL=order.mjs.map
