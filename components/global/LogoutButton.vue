<script setup lang="ts">
const config = useRuntimeConfig().public

const handleLogout = async () => {
  try {
    await $fetch(`${config.BACKEND_URL}/api/logout`, {
      credentials: 'include',
    })
    return await navigateTo("/")
  } catch(err) {
    console.error(err)
  }
}

</script>

<template>
  <UButton block @click="handleLogout" icon="i-heroicons-arrow-right-start-on-rectangle-16-solid">
    {{ $t('logout') }}
  </UButton>
</template>

<style scoped>

</style>