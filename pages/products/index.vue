<template>
  <h1 class="text-2xl text-slate-700 font-bold mt-6 mb-8">{{ $t("Products") }}</h1>
  <ProductsFilter :productsQuery="productsQuery" @productsQueryUpdated="updateProductsQuery" />
  <div class="grid gap-4 grid-cols-3">
    <NuxtLink to="/" v-for="product in products" class="rounded-md hover:shadow-md focus:shadow-md active:shadow-md">
      <ProductCard :product="product" />
    </NuxtLink>
  </div>
</template>
  
<script lang="ts" setup>
import { useProducts } from "~/composables/api";
import type { ProductsQuery, ProductsResponse } from "~/types/api";

const { locale } = useI18n();

const productsQuery = reactive<ProductsQuery>({
  title: "",
  vendor: "",
  tag: "",
});

const {
  data: productsData,
  pending: productsPending,
  error: productsError,
} = await useAsyncData<ProductsResponse>(
  "productsData",
  useProducts({ first: 12, query: productsQuery }), {
  watch: [productsQuery]
}
);

const products = computed(() => productsData.value?.nodes);

const updateProductsQuery = (newProductsQuery: ProductsQuery) => {
  for (const key in newProductsQuery) {
    const productsQueryKey = key as keyof ProductsQuery;
    productsQuery[productsQueryKey] = newProductsQuery[productsQueryKey];
  }
}
</script>
  