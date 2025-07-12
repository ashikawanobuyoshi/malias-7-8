export default defineEventHandler(async (event) => {
  // Nuxt3 推奨の method チェック
  if (event.method !== 'POST') {
    setResponseStatus(event, 405)
    return { message: 'Method Not Allowed' }
  }

  // リクエストボディを取得
  const body = await readBody(event)
  const { email, password } = body

  // ダミーログイン処理
  if (email === 'admin@example.com' && password === 'password') {
    return {
      success: true,
      user: {
        name: 'Admin User',
        email
      }
    }
  } else {
    return {
      success: false,
      message: 'Invalid credentials'
    }
  }
})

