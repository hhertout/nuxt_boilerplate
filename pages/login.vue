<script setup lang="ts">

import {ref} from "vue";

const error = ref<string | null>(null)
const pending = ref(false)

const emailRef = ref('')
const passwordRef = ref('')

const handleSubmit = async () => {
  pending.value = true
    try {
      await $fetch("api/login", {
        method: 'POST',
        body: JSON.stringify({
          email: emailRef.value,
          password: passwordRef.value,
        }),
        credentials: "include",
      })
      error.value = null
      navigateTo("/admin")
    } catch (err: any) {
      error.value = err.message
    } finally {
      pending.value = false
    }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div v-if="!pending">
      <label for="email" aria-label="email">Email</label>
      <input id="email" name="email" type="text" v-model="emailRef"/>

      <label for="password" aria-label="password">Password</label>
      <input id="password" name="password" type="password" v-model="passwordRef"/>

      <p v-if="error">{{ error }}</p>

      <button type="submit">Login</button>
    </div>
    <div v-else>Login in...</div>
  </form>
</template>

<style scoped>

</style>