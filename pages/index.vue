<template>
  <h1 class="text-2xl font-bold mt-6 mb-8">Toy store</h1>
  <section class="mb-8">
    <h2 class="mb-4 text-xl font-bold">{{ $t("Sample blog post") }}</h2>
    <AsyncDataWrapper :noData="!article" :error="articlesError">
      <NuxtLink :to="`/blog/${article?.handle}`" :aria-label="`${$t('Blog post')} ${article.title}`" data-testid="blog-card-link">
        <ArticleCard :article="article" />
      </NuxtLink>
    </AsyncDataWrapper>
  </section>
  <section class="mb-8">
    <h2 class="mb-4 text-xl font-bold">{{ $t("Sample products") }}</h2>
    <AsyncDataWrapper :noData="!products.length" :error="productsError">
      <ProductsSlider :products="products" />
    </AsyncDataWrapper>
  </section>
</template>

<script lang="ts" setup>
import { useArticles, useProducts } from "~/composables/api";
import type { ArticlesResponse, ProductsResponse } from "~/types/api";

const { locale } = useI18n();

const {
  data: articlesData,
  error: articlesError,
} = await useAsyncData<ArticlesResponse>("articlesData", useArticles({ first: 1 }));

const article = computed(() => articlesData.value?.nodes[0]);

const {
  data: productsData,
  error: productsError,
} = await useAsyncData<ProductsResponse>("productsData", useProducts({ first: 9 }));

const products = computed(() => productsData.value?.nodes || []);
</script>
