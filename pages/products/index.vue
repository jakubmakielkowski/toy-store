<template>
  <h1 class="text-2xl text-slate-700 font-bold mt-6 mb-8">{{ $t("Products") }}</h1>
  <div class="grid gap-4 grid-cols-3">
    <NuxtLink
      to="/"
      v-for="product in products"
      class="rounded-md hover:shadow-md focus:shadow-md active:shadow-md"
    >
      <ProductCard :product="product" />
    </NuxtLink>
  </div>
</template>
  
<script lang="ts" setup>
import { useProducts } from "~/composables/api";
import type { ProductsResponse } from "~/types/api";

const { locale } = useI18n();

const {
  data: productsData,
  pending: productsPending,
  error: productsError,
  refresh: productsRefresh,
} = await useAsyncData<ProductsResponse>(
  "productsData",
  useProducts({ first: 12 })
);

const products = computed(() => productsData.value?.nodes);
</script>
  