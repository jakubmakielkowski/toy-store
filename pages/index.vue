<template>
  {{ $t("Sample text") }}
  <div>
    <SfButton>{{ $t("Sample button") }}</SfButton>
    {{ productsData }}
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from "@storefront-ui/vue";
import { useProducts } from "~/composables/api";
import type { ProductsResponse } from "~/types/api";

const { locale } = useI18n();

const {
  data: productsData,
  pending: productsPending,
  error: productsError,
  refresh: productsRefresh,
} = await useAsyncData<ProductsResponse>("productsData", useProducts({ first: 1 }));
</script>
