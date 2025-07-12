// stores/auth.ts
import { defineStore } from 'pinia'
import { useCookie } from '#app'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { id: number; name: string; email: string },
    isAuthenticated: false
  }),

  actions: {
    setUser(userData: { id: number; name: string; email: string }) {
      this.user = userData
      this.isAuthenticated = true

      // ローカルストレージにも保存
      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('isAuthenticated', 'true')

      // クッキーに認証情報を保存（SSR対応）
      const isAuth = useCookie('isAuthenticated')
      isAuth.value = 'true'
    },

    clearUser() {
      this.user = null
      this.isAuthenticated = false

      // ローカルストレージ削除
      localStorage.removeItem('user')
      localStorage.removeItem('isAuthenticated')

      // クッキーも削除
      const isAuth = useCookie('isAuthenticated')
      isAuth.value = null
    },

    async login(email: string, password: string) {
      try {
        const res = await $fetch('/api/login', {
          method: 'POST',
          body: { email, password }
        })

        if (res.success) {
          this.setUser(res.user)
          return true
        } else {
          return false
        }
      } catch (error) {
        console.error('ログインエラー:', error)
        return false
      }
    },

checkAuth() {
  const storedUser = localStorage.getItem('user')
  const isAuth = localStorage.getItem('isAuthenticated')

  if (storedUser && isAuth === 'true') {
    this.user = JSON.parse(storedUser)
    this.isAuthenticated = true
  } else {
    this.user = null
    this.isAuthenticated = false
  }
}, 

    logout() {
      this.clearUser()
    }
  }
})
