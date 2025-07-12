// server/api/login.ts
export default defineEventHandler(async (event) => {
  // ✅ HTTPメソッドを確認（POST以外は405を返す）
  if (event.node.req.method !== 'POST') {
    event.node.res.statusCode = 405
    return { message: 'Method Not Allowed' }
  }

  // ✅ リクエストボディを読み取る
  const body = await readBody(event)
  const { email, password } = body

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


