<template>
    <SfScrollable
        class="m-auto items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        buttons-placement="floating" drag>
        <template #previousButton="defaultProps">
            <SfButton v-bind="defaultProps" class="absolute !rounded-full z-10 left-4 bg-white hidden md:block"
                :class="{ '!hidden': defaultProps.disabled }" variant="secondary" size="lg" square :aria-label="`${$t('Products slider scroll to start')}`">
                <SfIconChevronLeft />
            </SfButton>
        </template>
        <NuxtLink :to="`/products/${product.handle}`" v-for="product in products"
            class="rounded-md hover:shadow-md focus:shadow-md active:shadow-md" :aria-label="`${$t('Product')} ${product.handle}`">
            <ProductCard :product="product" class="w-[250px]" />
        </NuxtLink>
        <template #nextButton="defaultProps">
            <SfButton v-bind="defaultProps" class="absolute !rounded-full z-10 right-4 bg-white hidden md:block"
                :class="{ '!hidden': defaultProps.disabled }" variant="secondary" size="lg" square :aria-label="`${$t('Products slider scroll to end')}`">
                <SfIconChevronRight />
            </SfButton>
        </template>
    </SfScrollable>
</template>
  
<script lang="ts" setup>
import {
    SfButton,
    SfIconChevronLeft,
    SfIconChevronRight,
    SfScrollable,
} from '@storefront-ui/vue';
import type { Product } from '~/types/api';

const props = defineProps<{
    products: Array<Partial<Product>>;
}>();
</script>
  