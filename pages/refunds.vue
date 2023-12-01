<template>
    <h1 class="text-2xl font-bold mt-6 mb-8">{{ $t("Refunds policy") }}</h1>
    <!-- @see v-html https://vuejs.org/guide/essentials/template-syntax -->
    <p v-html="shopData.refundPolicy.body" />
</template>
  
<script lang="ts" setup>
import { useShop } from "~/composables/api/useShop";
import type { Shop } from "~/types/api"

const { locale } = useI18n();

const {
    data: shopData,
    pending: shopPending,
    error: shopError,
} = await useAsyncData<Shop>("shopData", useShop);

</script>
  