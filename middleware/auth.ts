export default defineNuxtRouteMiddleware(async(to, from) => {
  const headers = useRequestHeaders(['cookie'])
  const res = await $fetch("/api/checkAuth", {
    headers,
    credentials: 'include',
  });
  console.log(res)
})