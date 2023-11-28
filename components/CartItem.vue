
<template>
    <div class="h-full py-2 px-4 rounded-md border bg-white border-slate-300">
        <div class="mb-2 flex justify-between items-center gap-1">
            <p class="text-slate-700">
                {{ props.item.quantity }} × <span class="font-bold">{{ props.item?.merchandise?.price?.amount }} {{
                    props.item?.merchandise?.price?.currencyCode }}</span>
            </p>
            <SfButton variant="tertiary" size="sm" :square="true" @click="removeFromCart"><SfIconClose /></SfButton>
        </div>
        <div class="flex justify-between items-center gap-1">
            <p class="text-xs">
                {{ props.item.merchandise.product.title }}
            </p>
            <div class="w-[60px]">
                <img :src="props.item?.merchandise?.image?.url" />
            </div>
        </div>
    </div>
</template>
      
<script lang="ts" setup>
import { SfButton, SfIconClose } from '@storefront-ui/vue';
import { useRemoveFromCart } from '~/composables/api/useCart';
import type { BaseCartLine } from '~/types/api';
import { useStore } from "~/stores/store";

const store = useStore();

const props = defineProps<{
    item: Partial<BaseCartLine>;
}>();

const removeFromCart = async (): Promise<void> => {
    const cart = store.cart;
    const newCart = await useRemoveFromCart(cart.id, props.item.id);
    store.setCart(newCart);
}
</script>
      