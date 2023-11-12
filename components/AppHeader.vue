
<template>
  <div class="fixed bg-white shadow-sm top-0 right-0 left-0">
    <div class="max-w-[1000px] m-auto py-4 grid grid-cols-3 gap-4">
      <div class="flex gap-4">
        <NuxtLink to="/">
          <SfButton :square="true">
            <SfIconHome />
          </SfButton>
        </NuxtLink>
        <NuxtLink to="/collections">
          <SfButton>All collections</SfButton>
        </NuxtLink>
        <NuxtLink to="/blog">
          <SfButton>Blog</SfButton>
        </NuxtLink>
      </div>
      <AppSearch />
      <div class="flex justify-end gap-4">
        <SfButton :square="true">
          <SfIconLanguage />
        </SfButton>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { SfButton, SfIconHome, SfIconLanguage } from "@storefront-ui/vue";
import AppSearch from "./AppSearch";
</script>
  