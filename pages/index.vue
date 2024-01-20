<script setup lang="ts">
import {ref} from "vue";
import type {FormError} from "#ui/types";

useHead({title: `${useAppConfig().APP_NAME}| Login`})

const error = ref<string | null>(null)
const pending = ref(false)

const locale = useI18n()

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
    const res = await fetch("/api/login", {
      method: 'POST',
      body: JSON.stringify({
        email: state.email,
        password: state.password,
      }),
      credentials: "include",
    })
    error.value = null
    if (res.status === 200) return await navigateTo("/admin")
    else if (res.status === 400) error.value = locale.t('invalidLoginData')
    else if (res.status >= 500) error.value = locale.t('serverError')
  } catch (err: any) {
    error.value = err.message
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center bg-container">
    <UCard>
      <div v-if="pending" class="flex flex-col justify-center items-center w-96">
        <Icon size="40" name="heroicons:arrow-path-20-solid" class="animate-spin text-primary m-4"/>
        <div class="text-center">{{ $t('loginIn') }}</div>
      </div>

      <div v-else>
        <div class="flex justify-center items-center text-primary px-4">
          <Icon name="heroicons:shield-check-20-solid" size="40"/>
          <h1 class="px-2 text-2xl font-extrabold w-full">{{ $t('login') }}</h1>
        </div>
        <UForm :validate="validate" :state="state" class="w-96 p-4" @submit="handleSubmit">
          <UFormGroup :label="$t('email')" name="email">
            <UInput icon="i-heroicons-at-symbol" type="text" v-model="state.email"/>
          </UFormGroup>

          <UFormGroup :label="$t('password')" name="password" class="mt-3">
            <UInput icon="i-heroicons-lock-closed-16-solid" type="password" v-model="state.password"/>
          </UFormGroup>

          <p v-if="error" class="text-sm text-red-600 text-center mt-3">{{ error }}</p>

          <UButton type="submit" block class="mt-4">{{ $t('login') }}</UButton>
        </UForm>
      </div>
    </UCard>
  </div>
</template>

<style scoped>
.bg-container {
  background-color: #F4D03F;
  background-image: linear-gradient(132deg, #F4D03F 0%, #16A085 100%);
}
</style>