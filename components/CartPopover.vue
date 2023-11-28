<template>
    <div class="absolute top-12 right-0 w-[300px] bg-white rounded shadow-md p-4">
        <div class="mb-2 flex justify-between text-slate-700">
            <div>{{ totalQuantity }} {{ $t("product in the cart") }}</div>
            <div class="font-bold">{{ props.cart?.cost.totalAmount.amount }} {{ props.cart?.cost.totalAmount.currencyCode }}</div>
        </div>
        <div class="mb-4">
            <NuxtLink to="/cart">
                <SfButton class="w-full">{{ $t("See the cart") }}</SfButton>
            </NuxtLink>
        </div>
        <div class="flex flex-col gap-4">
            <CartItem v-for="item in cart?.lines?.nodes" :item="item" />
        </div>
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
    