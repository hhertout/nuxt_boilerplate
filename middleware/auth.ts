export default defineNuxtRouteMiddleware(async () => {
  const headers = useRequestHeaders(["cookie"]);
  try {
    const isAuth = await isAuthorized(headers);
    if (!isAuth) return navigateTo("/");
    return
  } catch (err) {
    return navigateTo("/");
  }
});

const isAuthorized = async (headers: { cookie?: string }): Promise<boolean> => {
  const res: { authorized: boolean } = await $fetch("/api/auth", {
    headers,
    credentials: "include",
  });
  return res.authorized;
};
