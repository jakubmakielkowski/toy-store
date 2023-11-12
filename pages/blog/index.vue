<template>
  <h1 class="text-2xl text-slate-700 font-bold mt-6 mb-8">{{ $t("Blog") }}</h1>
  <div class="grid gap-4 grid-cols-1">
    <NuxtLink
      to="/"
      v-for="article in articles"
      class="rounded-md hover:shadow-md focus:shadow-md active:shadow-md"
    >
      <BlogTile :article="article" />
    </NuxtLink>
  </div>
</template>
  
<script lang="ts" setup>
import { useArticles } from "~/composables/api";
import type { ArticlesResponse, ResponseArray } from "~/types/api";

const { locale } = useI18n();

const {
  data: articlesData,
  pending: articlesPending,
  error: articlesError,
  refresh: articlesRefresh,
} = await useAsyncData<ArticlesResponse>(
  "articlesData",
  useArticles({ first: 3 })
);

const articles = computed(() => articlesData.value?.nodes);
</script>
  