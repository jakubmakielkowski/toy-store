<template>
  <div :class="store.isDarkMode && 'dark'">
    <div class="bg-blue-50 dark:bg-slate-900">
      <NuxtLayout>
        <AppDrawer />
        <AppHeader />
        <div class="max-w-[1000px] min-h-[100vh] m-auto p-4 pt-20 bg-white shadow-sm">
          <NuxtPage />
        </div>
      </NuxtLayout>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from '@/stores/store';

const store = useStore();
console.log(store.isDarkMode);
</script>