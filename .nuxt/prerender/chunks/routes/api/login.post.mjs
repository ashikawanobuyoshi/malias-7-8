import { defineEventHandler, readBody } from 'file://C:/Users/nashi/malias-7-8/node_modules/h3/dist/index.mjs';

const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  console.log("\u{1F4E5} \u53D7\u4FE1\u3057\u305F\u30ED\u30B0\u30A4\u30F3\u30EA\u30AF\u30A8\u30B9\u30C8:");
  console.log("\u{1F4E7} email:", email);
  console.log("\u{1F510} password:", password);
  if (email === "admin@example.com" && password === "password123") {
    return {
      success: true,
      user: {
        id: 1,
        name: "Admin User",
        email: "admin@example.com"
      }
    };
  }
  return {
    success: false
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
