<template>
  <h1 class="text-2xl font-bold mt-6 mb-8">{{ $t("Blog") }}</h1>
  <AsyncDataWrapper :error="articlesError" :noData="!articles.length">
    <div class="grid gap-4 grid-cols-1">
      <NuxtLink :to="`/blog/${article.handle}`" v-for="article in articles"
        class="rounded-md hover:shadow-md focus:shadow-md active:shadow-md">
        <ArticleCard :article="article" />
      </NuxtLink>
    </div>
  </AsyncDataWrapper>
</template>
  
<script lang="ts" setup>
import { useArticles } from "~/composables/api";
import type { ArticlesResponse, ConnectionArray } from "~/types/api";

const { locale } = useI18n();

const {
  data: articlesData,
  error: articlesError,
} = await useAsyncData<ArticlesResponse>(
  "articlesData",
  useArticles({ first: 12 })
);

const articles = computed(() => articlesData.value?.nodes || []);
</script>
  