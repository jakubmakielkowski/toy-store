<template>
    <h1 class="text-2xl font-bold mt-6 mb-8">{{ $t("Refunds policy") }}</h1>
    <AsyncDataWrapper :noData="!refundPolicy" :error="shopError">
        <!-- @see v-html https://vuejs.org/guide/essentials/template-syntax -->
        <p v-html="refundPolicy" />
    </AsyncDataWrapper>
</template>
  
<script lang="ts" setup>
import { useShop } from "~/composables/api/useShop";
import type { Shop } from "~/types/api"

const { locale } = useI18n();

const {
    data: shopData,
    error: shopError,
} = await useAsyncData<Shop>("shopData", useShop);

const refundPolicy = computed(() => shopData.value.refundPolicy?.body);
</script>
  