<template>
    <h1 class="text-2xl font-bold mt-6 mb-8">{{ $t("Shipping policy") }}</h1>
    <AsyncDataWrapper :noData="!shippingPolicy" :error="shopError">
        <!-- @see v-html https://vuejs.org/guide/essentials/template-syntax -->
        <p v-html="shippingPolicy" />
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

const shippingPolicy = computed(() => shopData.value.shippingPolicy?.body);
</script>
  