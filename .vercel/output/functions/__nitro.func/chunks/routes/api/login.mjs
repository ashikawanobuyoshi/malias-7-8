import { d as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const login = defineEventHandler(async (event) => {
  if (event.node.req.method !== "POST") {
    event.node.res.statusCode = 405;
    return { message: "Method Not Allowed" };
  }
  const body = await readBody(event);
  const { email, password } = body;
  if (email === "admin@example.com" && password === "password") {
    return {
      success: true,
      user: {
        name: "Admin User",
        email
      }
    };
  } else {
    return {
      success: false,
      message: "Invalid credentials"
    };
  }
});

export { login as default };
//# sourceMappingURL=login.mjs.map
