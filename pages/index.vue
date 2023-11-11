<template>
  {{ $t("Sample text") }}
  <div>
    <SfButton>{{ $t("Sample button") }}</SfButton>
    {{ productsData }}
    {{ collectionsData }}
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from "@storefront-ui/vue";
import { useCollections, useProducts } from "~/composables/api";
import type { CollectionsResponse, ProductsResponse } from "~/types/api";

const { locale } = useI18n();

const {
  data: productsData,
  pending: productsPending,
  error: productsError,
} = await useAsyncData<ProductsResponse>("productsData", useProducts({ first: 1 }));

const {
  data: collectionsData,
  pending: collectionsPending,
  error: collectionsError,
} = await useAsyncData<CollectionsResponse>("collectionsData", useCollections({ first: 1 }));
</script>
