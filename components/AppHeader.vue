
<template>
  <div class="fixed z-20 bg-white shadow-sm top-0 right-0 left-0">
    <div class="absolute top-4 left-4">
      <SfButton :square="true" class="dark:bg-neutral-900" @click="store.openDrawer">
        <SfIconMenu />
      </SfButton>
    </div>
    <div class="w-[1000px] m-auto flex justify-between p-4">
      <div class="flex gap-4">
        <NuxtLink to="/">
          <SfButton :square="true" class="dark:bg-neutral-900">
            <SfIconHome />
          </SfButton>
        </NuxtLink>
        <AppSearch />
      </div>
      <div class="flex justify-end gap-4">
        <div class="relative">
          <SfButton :square="true" class="dark:bg-neutral-900" @click="store.toggleCart">
            <SfIconShoppingCart />
            <SfBadge :content="cart?.totalQuantity || 0" />
          </SfButton>
          <CartPopover v-show="store.isCartOpened" :cart="cart" />
        </div>
        <SfButton :square="true" class="dark:bg-neutral-900">
          <SfIconFavoriteFilled />
        </SfButton>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { SfButton, SfIconMenu, SfIconShoppingCart, SfIconFavoriteFilled, SfIconHome, SfBadge } from "@storefront-ui/vue";
import { useStore } from '@/stores/store';

const store = useStore();

const cart = computed(() => store.cart);

</script>
  