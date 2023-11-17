
<template>
    <div class="mb-12">
        <div class="mb-4">
            <h3 class="mb-1 font-bold text-slate-700">{{ $t("Product name") }}</h3>
            <div class="col-span-2">
                <SfInput :value="productsQuery.title" placeholder="Name"
                    @input="onQueryChange('title', $event.target.value)" />
            </div>
        </div>
        <div>
            <h3 class="mb-1 font-bold text-slate-700">{{ $t("Tag") }}</h3>
            <div class="mb-4 flex flex-wrap">
                <label v-for="{ label, value } in tags" class="flex items-center mb-1 mr-3 rounded cursor-pointer">
                    <SfRadio v-model="productsQuery.tag" :value="value" :name="productsQuery.tag"
                        @click="onQueryChange('tag', $event.target.value)" />
                    <span class="ml-1 text-slate-700">{{ label }}</span>
                </label>
            </div>
        </div>
        <div>
            <h3 class="mb-1 font-bold text-slate-700">{{ $t("Vendor") }}</h3>
            <div class="mb-4 flex flex-wrap">
                <label v-for="{ label, value } in vendors" class="flex items-center mb-1 mr-3 rounded cursor-pointer">
                    <SfRadio v-model="productsQuery.vendor" :value="value" :name="productsQuery.vendor"
                        @click="onQueryChange('vendor', $event.target.value)" />
                    <span class="ml-1 text-slate-700">{{ label }}</span>
                </label>
            </div>
        </div>
        <div>
            <SfButton v-if="hasFilters" class="w-full" @click="onQueryClear">{{ $t("Clear all filters") }}</SfButton>
        </div>
    </div>
</template>
        
<script lang="ts" setup>
import { SfRadio, SfInput, SfButton } from "@storefront-ui/vue";
import type { ProductsQuery } from "~/types/api";
import { tags, vendors } from "~/utils/api/query";

const props = defineProps<{
    productsQuery: ProductsQuery;
}>();

const emit = defineEmits<{
    productsQueryUpdated: [productsQuery: ProductsQuery];
}>();

const hasFilters = computed<boolean>(() => Boolean(props.productsQuery.title || props.productsQuery.tag || props.productsQuery.vendor));

const onQueryChange = (key: string, value: string) => {
    emit('productsQueryUpdated', { ...props.productsQuery, [key]: value });
}

const onQueryClear = () => {
    emit('productsQueryUpdated', {
        title: "",
        vendor: "",
        tag: "",
    });
}

</script>
        