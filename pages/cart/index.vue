<template>
    <h1 class="text-2xl text-slate-700 font-bold mt-6 mb-8">{{ $t("Your cart") }}</h1>
    <h2 class="text-xl text-slate-700 font-bold mt-6 mb-4">{{ $t("Items") }}</h2>
    <div class="mb-8">
        <CartItem v-for="item in cart?.lines?.nodes" :item="item" class="mb-4" />
    </div>
    <h2 class="text-xl text-slate-700 font-bold mt-6 mb-4">{{ $t("Total") }}</h2>
    <div class="mb-4 flex justify-between text-slate-700">
        <div class="text-xl">{{ cart.totalQuantity }} {{ $t("product in the cart") }}</div>
        <div class="font-bold">{{ cart?.cost.totalAmount.amount }} {{ cart?.cost.totalAmount.currencyCode }}
        </div>
    </div>
    <SfButton disabled class="w-full">{{ $t("Go to checkout") }}</SfButton>
</template>
    
<script lang="ts" setup>
import { SfButton } from "@storefront-ui/vue";
import { useStore } from '@/stores/store';

const store = useStore();

const cart = computed(() => store.cart);

store.closeCart();
</script>
    