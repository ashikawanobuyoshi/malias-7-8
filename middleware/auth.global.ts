// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to) => {
  // APIルート（/api/xxx）にはミドルウェアを適用しない
  if (to.path.startsWith('/api')) return

  const auth = useAuthStore()

  // 未ログインで login ページ以外にアクセスしようとしたらログインにリダイレクト
  if (!auth.isAuthenticated && to.path !== '/login') {
    return navigateTo('/login')
  }
})


