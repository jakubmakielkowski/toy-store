<template>
    <div class="absolute top-12 right-0 w-full max-w-[300px] bg-white rounded shadow-md p-4">
        <div v-if="cart?.lines?.nodes.length">
            <div class="mb-2 flex justify-between ">
                <div>{{ totalQuantity }} {{ $t("product in the cart") }}</div>
                <div class="font-bold">
                    {{ props.cart?.cost.totalAmount.amount }} {{ props.cart?.cost.totalAmount.currencyCode }}
                </div>
            </div>
            <CartItem v-for="item in cart?.lines?.nodes" :item="item" class="mb-4" />
            <NuxtLink to="/cart" data-testid="cart-link">
                <SfButton class="w-full dark:bg-neutral-900" tabindex="-1">{{ $t("See the cart") }}</SfButton>
            </NuxtLink>
        </div>
        <div v-else>{{ $t("No items in the cart") }}</div>
    </div>
</template>
    
<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';
import { useStore } from '@/stores/store';
import type { Cart } from '~/types/api';

const store = useStore();
const { locale } = useI18n();

const props = defineProps<{
    cart: Cart;
}>();

const totalQuantity = computed(() => props.cart?.totalQuantity || 0);

</script>
    