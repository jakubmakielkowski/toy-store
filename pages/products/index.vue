<template>
  <h1 class="text-2xl font-bold mt-6 mb-8">{{ $t("Products") }}</h1>
  <ProductsFilter :productsQuery="productsQuery" @productsQueryUpdated="updateProductsQuery" />
  <AsyncDataWrapper :pending="productsPending" :error="productsError" :noData="!products.length">
    <div class="grid gap-4 grid-cols-2 md:grid-cols-3">
      <NuxtLink :to="`/products/${product.handle}`" v-for="product in products"
        class="rounded-md hover:shadow-md focus:shadow-md active:shadow-md"
        :aria-label="`${$t('Product')} ${product.handle}`">
        <ProductCard :product="product" />
      </NuxtLink>
    </div>
  </AsyncDataWrapper>
</template>

<script lang="ts" setup>
import { pickBy } from "lodash-es";
import type { RouteLocationRaw } from "vue-router";
import { useProducts } from "~/composables/api";
import type { ProductsQuery, ProductsResponse } from "~/types/api";

const { locale } = useI18n();
const route = useRoute();
const router = useRouter();
const { t } = useI18n();

useHead({
  title: `Toy Store - ${t('Products')}`
});

const urlSearchQuery = ref<ProductsQuery>({
  title: "",
  vendor: "",
  tag: "",
  ...route.query
});

const productsQuery = ref<ProductsQuery>(urlSearchQuery.value);

const {
  data: productsData,
  pending: productsPending,
  error: productsError,
  refresh: refreshProducts,
} = await useAsyncData<ProductsResponse>(
  "productsData",
  useProducts({ first: 12, query: productsQuery.value }));

const products = computed(() => productsData.value?.nodes || []);

watch(() => route.query, (value) => {
  urlSearchQuery.value = {
    title: "",
    vendor: "",
    tag: "",
  }
  for (const key in value) {
    const productsQueryKey = key as keyof ProductsQuery;
    urlSearchQuery.value[productsQueryKey] = value[productsQueryKey] as string;
    updateProductsQuery(urlSearchQuery.value);
  }
});

const updateProductsQuery = (newProductsQuery: ProductsQuery) => {
  for (const key in newProductsQuery) {
    const productsQueryKey = key as keyof ProductsQuery;
    productsQuery.value[productsQueryKey] = newProductsQuery[productsQueryKey];
  }

  router.push({ query: pickBy(productsQuery.value, Boolean) } as RouteLocationRaw);
  refreshProducts();
}
</script>