<script setup>
const switchLocalePath = useSwitchLocalePath()
const availableLocales = useLocale().value.locales
const localeMapper = useLocale().value.localMapper

const currentLocale = ref(useLocale().value.locale)

const changeLocale = (locale) => {
  currentLocale.value = locale;
}
</script>

<template>
  <div class="flex flex-row justify-around my-1 gap-1">
    <NuxtLink
        v-for="locale in availableLocales"
        :key="locale"
        :to="switchLocalePath(locale)"
        @click="changeLocale"
        class="w-full"
    >
      <div
          v-if="locale === currentLocale"
          class="flex justify-center items-center bg-gray-100 p-2 rounded hover:bg-gray-200"
      >
        <Icon :name="localeMapper[locale]" size="18"/>
      </div>
      <div
          v-else
          class="flex justify-center items-center p-2 rounded hover:bg-gray-200"
      >
        <Icon :name="localeMapper[locale]" size="18"/>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
</style>
