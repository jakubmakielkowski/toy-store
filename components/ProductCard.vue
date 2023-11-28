
<template>
  <div class="h-full p-2 md:p-4 rounded-md border border-slate-300 text-sm overflow-hidden">
    <div class="mb-4 flex flex-col items-center">
      <img
        :src="product.featuredImage?.url"
        :alt="product.featuredImage?.altText"
        class="h-24 sm:h-32 md:h-48 object-cover borde rounded-md"
      />
    </div>
    <div class="flex flex-col justify-between">
      <p class="">{{ product.priceRange?.minVariantPrice.amount }} {{ product.priceRange?.minVariantPrice.currencyCode }}</p>
      <p class="">{{ product.vendor }}</p>
    </div>
    <p class="font-bold truncate">{{ product.title }}</p>
  </div>
</template>
    
<script lang="ts" setup>
import type { Product } from "~/types/api";

const props = defineProps<{
  product: Partial<Product>;
}>();
</script>
    