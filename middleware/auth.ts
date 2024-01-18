export default defineNuxtRouteMiddleware(async () => {
  if (process.client) return
  const headers = useRequestHeaders(['cookie'])
  if(!headers) return navigateTo("/", { redirectCode: 301 })
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/check-cookie`, {
    headers,
    credentials: 'include',
  });
  if (!res.ok) return navigateTo("/", { redirectCode: 301 })
  return
})