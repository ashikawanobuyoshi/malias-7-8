// server/api/login.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  if (email === 'admin@example.com' && password === 'password') {
    return {
      success: true,
      user: {
        name: 'Admin User',
        email: email
      }
    }
  } else {
    return {
      success: false,
      message: 'Invalid credentials'
    }
  }
})

