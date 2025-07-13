import { defineEventHandler, setResponseStatus, readBody } from 'file://C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs';

const login = defineEventHandler(async (event) => {
  var _a;
  const method = (_a = event.method) == null ? void 0 : _a.toUpperCase();
  if (method !== "POST") {
    setResponseStatus(event, 405);
    return { message: "Method Not Allowed" };
  }
  const { email, password } = await readBody(event);
  if (email === "admin@example.com" && password === "password") {
    return {
      success: true,
      user: {
        name: "Admin User",
        email
      }
    };
  }
  setResponseStatus(event, 401);
  return {
    success: false,
    message: "Invalid credentials"
  };
});

export { login as default };
//# sourceMappingURL=login.mjs.map
