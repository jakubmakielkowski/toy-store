
<template>
  <div class="h-full p-4 rounded-md border border-slate-300">
    <div class="mb-4">
      <img
        :src="product.featuredImage?.url"
        :alt="product.featuredImage?.altText"
        class="h-32 w-32 m-auto"
      />
    </div>
    <div class="flex justify-between">
      <p class="text-slate-700">{{ product.priceRange?.minVariantPrice.amount }} {{ product.priceRange?.minVariantPrice.currencyCode }}</p>
      <p class="text-slate-700">{{ product.vendor }}</p>
    </div>
    <p class="text-slate-700 font-bold">{{ product.title }}</p>
  </div>
</template>
    
<script lang="ts" setup>
import type { Product } from "~/types/api";

const props = defineProps<{
  product: Partial<Product>;
}>();
</script>
    