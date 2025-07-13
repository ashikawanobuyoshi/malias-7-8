import { defineComponent, mergeProps, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const subject = ref("");
    const text = ref("");
    const successMessage = ref("");
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div><label> \u9001\u4FE1\u5148\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9 <input id="email" name="email"${ssrRenderAttr("value", email.value)} type="email" required autocomplete="email" class="border px-2 py-1 w-full"></label></div><div><label> \u4EF6\u540D <input id="subject" name="subject"${ssrRenderAttr("value", subject.value)} type="text" required class="border px-2 py-1 w-full"></label></div><div><label> \u30E1\u30C3\u30BB\u30FC\u30B8 <textarea id="message" name="message" required class="border px-2 py-1 w-full">${ssrInterpolate(text.value)}</textarea></label></div><button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded"> \u9001\u4FE1 </button>`);
      if (successMessage.value) {
        _push(`<p class="text-green-600">${ssrInterpolate(successMessage.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<p class="text-red-600">${ssrInterpolate(errorMessage.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-8" }, _attrs))}><h1 class="text-2xl font-bold mb-4">\u304A\u554F\u3044\u5408\u308F\u305B</h1>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-BGyRG8ST.mjs.map
