
<template>
  <header class="fixed z-20 p-4 bg-white shadow-sm top-0 right-0 left-0">
    <div class="max-w-[1000px] m-auto flex justify-between relative">
      <div class="flex gap-4">
        <SfButton :square="true" class="dark:bg-neutral-900" @click="store.openDrawer">
          <SfIconMenu />
        </SfButton>
        <NuxtLink to="/products">
          <SfButton :square="true" class="dark:bg-neutral-900" tabindex="-1">
            <SfIconSearch />
          </SfButton>
        </NuxtLink>
        <AppSearch />
      </div>
      <div class="flex justify-end gap-4">
        <SfButton :square="true" class="dark:bg-neutral-900" @click="store.toggleCart">
          <SfIconShoppingCart />
          <SfBadge :content="cart?.totalQuantity || 0" />
        </SfButton>
      </div>
      <CartPopover v-show="store.isCartOpened" :cart="cart" />
    </div>
  </header>
</template>
  
<script lang="ts" setup>
import { SfButton, SfIconMenu, SfIconShoppingCart, SfIconSearch, SfIconHome, SfBadge } from "@storefront-ui/vue";
import { useStore } from '@/stores/store';

const store = useStore();

const cart = computed(() => store.cart);

</script>
  