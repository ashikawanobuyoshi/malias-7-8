import { d as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

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
