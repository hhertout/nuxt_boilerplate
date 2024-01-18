export default defineEventHandler(async (event) => {
  try {
    const credentials = await readBody(event)
    const res = await fetch(`${process.env.BACKEND_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
      body: JSON.stringify(credentials)
    })

    const cookie = res.headers.getSetCookie()[0]
    appendResponseHeader(event, 'set-cookie', cookie)
    return await res.json()
  } catch
    (err) {
    console.error(err)
  }
})