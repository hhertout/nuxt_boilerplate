export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Hello global middleware")
})