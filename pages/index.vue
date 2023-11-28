<template>
  <h1 class="text-2xl font-bold mt-6 mb-8">Toy store</h1>
  <section class="mb-8">
    <h2 class="mb-4 text-xl font-bold">{{ $t("Sample blog post") }}</h2>
    <NuxtLink :to="`/blog/${article.handle}`">
      <ArticleCard :article="article" />
    </NuxtLink>
  </section>
  <section class="mb-8">
    <h2 class="mb-4 text-xl font-bold">{{ $t("Sample products") }}</h2>
    <ProductsSlider :products="productsData?.nodes" />
  </section>
</template>

<script lang="ts" setup>
import { useArticles, useProducts } from "~/composables/api";
import type { Article, ArticlesResponse, ProductsResponse } from "~/types/api";

const { locale } = useI18n();

const {
  data: articlesData,
  pending: articlesPending,
  error: articlesError,
  refresh: articlesRefresh,
} = await useAsyncData<ArticlesResponse>("articlesData", useArticles({ first: 1 }));

const article = computed(() => articlesData.value?.nodes[0] as Partial<Article>);

const {
  data: productsData,
  pending: productsPending,
  error: productsError,
  refresh: productsRefresh,
} = await useAsyncData<ProductsResponse>("productsData", useProducts({ first: 9 }));
</script>
