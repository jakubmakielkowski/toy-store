<template>
  <h1 class="text-2xl text-slate-700 font-bold mt-6 mb-8">{{ $t("Collections") }}</h1>
  <div class="grid gap-4 grid-cols-3">
    <NuxtLink
      to="/"
      v-for="collection in collections"
      class="rounded-md hover:shadow-md focus:shadow-md active:shadow-md"
    >
      <Tile :collection="collection" />
    </NuxtLink>
  </div>
</template>
  
<script lang="ts" setup>
import { useCollections } from "~/composables/api";
import type { CollectionsResponse } from "~/types/api";

const { locale } = useI18n();

const {
  data: collectionsData,
  pending: collectionsPending,
  error: collectionsError,
} = await useAsyncData<CollectionsResponse>(
  "collectionsData",
  useCollections({ first: 9 })
);

const collections = computed(() => collectionsData.value?.nodes);
</script>
  