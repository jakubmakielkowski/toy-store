<template>
    <div class="h-full py-2 px-4 rounded-md border bg-white border-slate-300">
        <div class="mb-2 flex justify-between items-center gap-1">
            <p class="">
                {{ props.item.quantity }} × <span class="font-bold">{{ props.item?.merchandise?.price?.amount }} {{
                    props.item?.merchandise?.price?.currencyCode }}</span>
            </p>

            <SfButton :disabled="store.isCartLoading" variant="tertiary" size="sm" :square="true"
                :aria-label="`${props.item.merchandise.product.title} ${$t('Remove from the cart')}`"
                @click="removeFromCart">
                <SfLoaderCircular v-if="store.isCartLoading" />
                <SfIconClose v-else />
            </SfButton>
        </div>
        <div class="flex justify-between items-center gap-1">
            <p class="text-xs">
                {{ props.item.merchandise.product.title }}
            </p>
            <div class="w-[60px]">
                <img :src="props.item?.merchandise?.image?.url" :alt="props.item.merchandise.product.title" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { SfButton, SfIconClose, SfLoaderCircular } from '@storefront-ui/vue';
import type { BaseCartLine } from '~/types/api';
import { useStore } from "~/stores/store";

const store = useStore();

const props = defineProps<{
    item: Partial<BaseCartLine>;
}>();

const removeFromCart = (): void => {
    store.removeFromCart(props.item.id);
}
</script>