// server/api/login.ts
export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    return {
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    }
  }

  const body = await readBody(event)
  const { email, password } = body

  if (email === 'admin@example.com' && password === 'password') {
    return { success: true, user: { name: 'Admin User' } }
  }

  return { success: false }
})
