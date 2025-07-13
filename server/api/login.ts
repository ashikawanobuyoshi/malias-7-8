// server/api/login.ts
export default defineEventHandler(async (event) => {
  const method = event.method?.toUpperCase()

  // ✅ 安全に method を取得して検証
  if (method !== 'POST') {
    setResponseStatus(event, 405)
    return { message: 'Method Not Allowed' }
  }

  const { email, password } = await readBody<{ email: string; password: string }>(event)

  // ✅ シンプルな認証ロジック
  if (email === 'admin@example.com' && password === 'password') {
    return {
      success: true,
      user: {
        name: 'Admin User',
        email
      }
    }
  }

  setResponseStatus(event, 401) // 未認証として明示
  return {
    success: false,
    message: 'Invalid credentials'
  }
})


