<script setup lang="ts">

const handleLogout = () => {
  console.log("logout")
}

</script>

<template>
  <UButton block @click="handleLogout" icon="i-heroicons-arrow-right-start-on-rectangle-16-solid">
    {{ $t('logout') }}
  </UButton>
</template>

<style scoped>

</style>