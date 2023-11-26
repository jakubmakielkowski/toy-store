
<template>
    <div class="h-full py-2 px-4 rounded-md border bg-white border-slate-300">
        <p class="text-slate-700">
            {{ props.item.quantity }} × {{ props.item?.merchandise?.price?.amount }}
            {{ props.item?.merchandise?.price?.currencyCode }}

        </p>
        <div class="flex justify-between props.items-center">
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
import { SfButton } from '@storefront-ui/vue';
import type { BaseCartLine } from '~/types/api';

const props = defineProps<{
    item: Partial<BaseCartLine>;
}>();

</script>
      