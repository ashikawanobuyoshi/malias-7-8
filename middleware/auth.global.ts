// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = useCookie('isAuthenticated')
  console.log('🔒 middlewareチェック: isAuthenticated.value =', isAuthenticated.value)
  console.log('🔁 現在のパス:', to.path)

  if (!isAuthenticated.value && to.path !== '/login') {
    return navigateTo('/login')
  }

  // ✅ ログイン済みならログインページへ戻れないようにする
  if (isAuthenticated.value === 'true' && to.path === '/login') {
    return navigateTo('/')
  }
})

