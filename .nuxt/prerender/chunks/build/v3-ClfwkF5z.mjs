import { hasInjectionContext, inject } from 'file://C:/Users/nashi/malias-7-8/node_modules/vue/index.mjs';
import { t as tryUseNuxtApp } from './server.mjs';
import { u as useHead$1, h as headSymbol } from '../_/renderer.mjs';

function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || tryUseNuxtApp();
  return ((_a = nuxt == null ? void 0 : nuxt.ssrContext) == null ? void 0 : _a.head) || (nuxt == null ? void 0 : nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  }));
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}

export { useHead as u };
//# sourceMappingURL=v3-ClfwkF5z.mjs.map
