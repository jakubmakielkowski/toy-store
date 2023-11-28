<template>
    <NuxtLink to="/products">
        <SfButton class="my-4 dark:bg-neutral-900" tabindex="-1">
            <SfIconChevronLeft />{{ $t("Products") }}
        </SfButton>
    </NuxtLink>
    <h1 class="text-2xl font-bold mb-8">{{ product?.title }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductGallery :images="product?.images.nodes" />
        <div>
            <p class="mb-1 text-sm text-slate-500">{{ $t("Created at") }}: {{ product?.createdAt }}</p>
            <div class="mb-4 text-xl font-bold">{{ product?.priceRange.minVariantPrice.amount }} {{
                product?.priceRange.minVariantPrice.currencyCode }}</div>
            <section class="mb-4">
                <h2 class="mb-1 font-bold ">{{ $t("Description") }}</h2>
                <p class="">{{ product?.description }}</p>
            </section>
            <section class="mb-4">
                <h2 class="mb-1 font-bold ">{{ $t("Left") }}</h2>
                <p class="">{{ product?.totalInventory }} {{ $t("pieces") }}</p>
            </section>
            <section class="mb-4">
                <h2 class="mb-2 font-bold ">{{ $t("Tags") }}</h2>
                <SfChip v-if="product?.tags" v-for="tag in product?.tags" size="sm" class="mr-2 mb-2 ">
                    {{ tag }}
                </SfChip>
            </section>
            <SfButton class="w-full dark:bg-neutral-900" @click="addToCart">{{ $t("Add to cart") }}</SfButton>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import {
    SfButton,
    SfChip,
    SfIconChevronLeft,
} from '@storefront-ui/vue';
import { useProduct } from "~/composables/api";
import { useAddToCart, useCreateCart } from "~/composables/api/useCart";
import { useStore } from "~/stores/store";
import type { Product } from "~/types/api";

const route = useRoute();

const handle = route.params.handle as string;
const store = useStore();

const {
    data: product,
    pending: productPending,
    error: productError,
} = await useAsyncData<Product>(
    "productData",
    useProduct(handle)
);

const addToCart = async (): Promise<void> => {
    if (!store.cart) {
        const newCart = await useCreateCart();
        store.setCart(newCart);
    }

    const cart = store.cart;
    const newCart = await useAddToCart(cart.id, {
        merchandise: {
            productVariant: product.value.variants.nodes[0],
        },
        quantity: 1
    });
    store.setCart(newCart);
}


</script>
    