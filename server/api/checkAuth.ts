export default defineEventHandler(async (event) => {
  const cookie = event.node.req.headers['cookie']
  return await $fetch(`${process.env.BACKEND_URL}/api/auth/check-cookie`, {
  // @ts-ignore
    headers: {
      'cookie': cookie
    },
    credentials: 'include'
  })
})