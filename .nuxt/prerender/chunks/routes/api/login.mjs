import { defineEventHandler, readBody } from 'file://C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs';

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
