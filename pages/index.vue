<script setup lang="ts">

import {ref} from "vue";
import type {FormError} from "#ui/types";

const error = ref<string | null>(null)
const pending = ref(false)

const state = reactive({
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email || state.email === "") errors.push({path: 'email', message: 'Required'})
  if (!state.password || state.password === "") errors.push({path: 'password', message: 'Required'})
  return errors
}

const handleSubmit = async () => {
  pending.value = true
  try {
    const res = await fetch("api/login", {
      method: 'POST',
      body: JSON.stringify({
        email: state.email,
        password: state.password,
      }),
      credentials: "include",
    })
    error.value = null
    if (res.status === 200) navigateTo("/admin", {replace: true})
  } catch (err: any) {
    error.value = err.message
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <UContainer class="w-screen h-screen flex justify-center items-center bg-container">
    <UCard>
      <h1 class="px-4 text-xl font-extrabold">{{ $t('login') }}</h1>
      <UForm :validate="validate" :state="state" class="w-96 p-4" @submit="handleSubmit">
        <div v-if="pending">Login in...</div>
        <div v-else>
          <UFormGroup :label="$t('email')" name="email">
            <UInput icon="i-heroicons-at-symbol" type="text" v-model="state.email"/>
          </UFormGroup>

          <UFormGroup :label="$t('password')" name="password" class="mt-3">
            <UInput icon="i-heroicons-lock-closed-16-solid" type="password" v-model="state.password"/>
          </UFormGroup>

          <p v-if="error">{{ error }}</p>

          <UButton type="submit" class="mt-6 w-full flex justify-center">Login</UButton>
        </div>
      </UForm>
    </UCard>
  </UContainer>
</template>

<style scoped>
.bg-container {
  background-color: #F4D03F;
  background-image: linear-gradient(132deg, #F4D03F 0%, #16A085 100%);
}
</style>