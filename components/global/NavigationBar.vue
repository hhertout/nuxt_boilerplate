<script setup lang="ts">
import ColorSwitch from "~/components/global/ColorSwitch.vue";
import BaseLogo from "~/components/icons/BaseLogo.vue";
import LogoutButton from "~/components/global/LogoutButton.vue";

const menu = useMenu().value
</script>

<template>
  <nav id="nav-bar-container" class="bg-gray-50 dark:bg-gray-950">
    <NuxtLink to="/" class="flex justify-start items-center gap-2 p-2">
      <BaseLogo/>
      <h1 class="text-xl font-extrabold">{{ useAppConfig().APP_NAME }}</h1>
    </NuxtLink>

    <div class="flex justify-start items-center gap-4">
      <ul v-for="item in menu">
        <li class="font-bold rounded px-3 py-2 hover:bg-primary hover:text-white">
          <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </div>

    <!--    Popover Menu-->
    <ClientOnly>
      <UPopover class="z-10">
        <UButton aria-label="Menu" trailing-icon="i-heroicons-chevron-down-20-solid">
          <Icon name="heroicons:bars-3-16-solid" size="20"/>
        </UButton>
        <template #panel>
          <div class="p-6 flex flex-col gap-2 w-52">
            <NuxtLink to="/" class="flex gap-2 justify-center items-center text-primary rounded border-primary border">
              <Icon name="heroicons:user-circle-16-solid"/>
              <span>{{ $t('account') }}</span>
            </NuxtLink>

            <UDivider/>
            <div class="text-xs flex gap-1 justify-center items-center opacity-40">
              {{ $t('settings') }}
            </div>
            <ColorSwitch/>
            <LocaleSwitcher/>
            <UDivider/>
            <LogoutButton/>
          </div>
        </template>
      </UPopover>
    </ClientOnly>
  </nav>
</template>

<style scoped>
#nav-bar-container {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 60px;
  overflow-y: hidden;

  padding-inline: 2rem;
}
</style>