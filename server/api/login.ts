// server/api/login.ts

export default defineEventHandler(async (event) => {
  if (event.req.method !== 'POST') {
    event.res.statusCode = 405
    return { message: 'Method Not Allowed' }
  }

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


