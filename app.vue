<template>
  <main :class="store.isDarkMode && 'dark'">
    <div class="bg-blue-50 dark:bg-slate-900 text-slate-700">
      <NuxtLayout>
        <AppDrawer />
        <AppHeader />
        <div class="max-w-[1000px] min-h-[100vh] m-auto p-4 pt-20 bg-white shadow-sm">
          <NuxtPage />
        </div>
      </NuxtLayout>
    </div>
  </main>
</template>
<script lang="ts" setup>
import { useStore } from '@/stores/store';

const store = useStore();
</script>