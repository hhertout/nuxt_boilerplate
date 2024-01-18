export default defineNuxtRouteMiddleware(async () => {
  if (process.client) return
  const headers = useRequestHeaders(['cookie'])
  if(!headers) return navigateTo("/login")
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/check-cookie`, {
    headers,
    credentials: 'include',
  });
  if (!res.ok) return navigateTo("/login")
  return
})