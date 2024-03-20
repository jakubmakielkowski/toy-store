
<template>
  <div class="h-full p-2 md:p-4 rounded-md border border-slate-300 text-sm overflow-hidden">
    <div class="mb-4 flex flex-col items-center">
      <img
        :src="props.product.featuredImage?.url"
        :alt="props.product.featuredImage?.altText || props.product.handle"
        class="h-24 sm:h-32 md:h-48 object-cover borde rounded-md"
      />
    </div>
    <div class="flex flex-col justify-between">
      <p class="">{{ props.product.priceRange?.minVariantPrice.amount }} {{ props.product.priceRange?.minVariantPrice.currencyCode }}</p>
      <p class="">{{ props.product.vendor }}</p>
    </div>
    <p class="font-bold truncate">{{ props.product.title }}</p>
  </div>
</template>
    
<script lang="ts" setup>
import type { Product } from "~/types/api";

const props = defineProps<{
  product: Partial<Product>;
}>();
</script>
    