<template>
    <NuxtLink to="/products"><SfButton class="my-4 dark:bg-neutral-900"><SfIconChevronLeft />{{ $t("Products") }}</SfButton></NuxtLink>
    <h1 class="text-2xl text-slate-700 font-bold mb-8">{{ product?.title }}</h1>
    <div class="grid grid-cols-2">
        <div>
            <p class="mb-1 text-sm text-slate-500">{{ $t("Created at") }}: {{ product?.createdAt }}</p>
            <div class="mb-4 text-xl text-slate-700 font-bold">{{ product?.priceRange.minVariantPrice.amount }} {{
                product?.priceRange.minVariantPrice.currencyCode }}</div>
            <section class="mb-4">
                <h2 class="mb-1 font-bold text-slate-700">{{ $t("Description") }}</h2>
                <p class="text-slate-700">{{ product?.description }}</p>
            </section>
            <section class="mb-4">
                <h2 class="mb-1 font-bold text-slate-700">{{ $t("Left") }}</h2>
                <p class="text-slate-700">{{ product?.totalInventory }} {{ $t("pieces") }}</p>
            </section>
            <section class="mb-4">
                <h2 class="mb-2 font-bold text-slate-700">{{ $t("Tags") }}</h2>
                <SfChip v-if="product?.tags" v-for="tag in product?.tags" size="sm" class="mr-2 mb-2 text-slate-700">
                    {{ tag }}
                </SfChip>
            </section>
            <SfButton class="w-full dark:bg-neutral-900">{{ $t("Add to cart") }}</SfButton>
        </div>
        <ProductGallery :images="product?.images.nodes" />
    </div>
</template>
    
<script lang="ts" setup>
import { useProduct } from "~/composables/api";
import type { Product } from "~/types/api";
import {
    SfButton,
    SfChip,
    SfIconChevronLeft,
} from '@storefront-ui/vue';
const route = useRoute();

const handle = route.params.handle as string;

const {
    data: product,
    pending: productPending,
    error: productError,
} = await useAsyncData<Product>(
    "productData",
    useProduct(handle)
);

</script>
    