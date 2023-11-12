
<template>
  <div class="fixed bg-white shadow-sm top-0 right-0 left-0">
    <div class="absolute top-4 left-4">
      <SfButton  :square="true" @click="store.openDrawer">
        <SfIconMenu />
      </SfButton>
    </div>
    <div class="w-[1000px] m-auto flex justify-between p-4">
      <AppSearch />
      <div class="flex justify-end gap-4">
        <SfButton :square="true">
          <SfIconShoppingCart />
        </SfButton>
        <SfButton :square="true">
          <SfIconFavoriteFilled />
        </SfButton>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { SfButton, SfIconMenu, SfIconShoppingCart, SfIconFavoriteFilled } from "@storefront-ui/vue";
import { useStore } from '@/stores/store';

const store = useStore();
</script>
  