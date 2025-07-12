<template>
    <client-only>
  <form @submit.prevent="handleLogin">
    <input
      type="email"
      v-model="email"
      name="email"
      id="email"
      autocomplete="email"
      placeholder="メールアドレス"
      required
    />
    <input
      type="password"
      v-model="password"
      name="password"
      id="password"
      autocomplete="current-password"
      placeholder="パスワード"
      required
    />
    <button type="submit">ログイン</button>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </form>
  </client-only>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue' // nextTick を追加
import { useRouter } from 'vue-router'
import { useCookie } from '#app'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const router = useRouter()

const handleLogin = async () => {
  console.log('handleLogin実行')
  try {
    const res = await $fetch('/api/login', {
      method: 'POST',
      body: { email: email.value, password: password.value }
    })

    console.log('✅ レスポンス:', res)

    if (res.success) {
      console.log('✅ ユーザー保存:', res.user)

      localStorage.setItem('user', JSON.stringify(res.user))
      localStorage.setItem('isAuthenticated', 'true')

      const isAuthenticated = useCookie('isAuthenticated')
      isAuthenticated.value = 'true'

      await nextTick()  
      await new Promise((resolve) => setTimeout(resolve, 100))

      console.log('🔁 トップページへ遷移実行')
      await router.push('/')

      console.log('✅ 遷移成功')
    } else {
      errorMessage.value = 'メールアドレスまたはパスワードが間違っています。'
    }
  } catch (err) {
    console.error('ログイン失敗:', err)
    errorMessage.value = '通信エラーが発生しました。'
  }
}
</script>


