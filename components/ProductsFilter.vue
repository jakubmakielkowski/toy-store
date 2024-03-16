
<template>
    <div class="mb-12">
        <div class="mb-4">
            <h3 class="mb-1 font-bold ">{{ $t("Product name") }}</h3>
            <div class="col-span-2">
                <SfInput v-model="props.productsQuery.title" :placeholder="$t('Name')"
                    @input="onQueryChange('title', $event.target.value)" />
            </div>
        </div>
        <div>
            <h3 class="mb-1 font-bold ">{{ $t("Tag") }}</h3>
            <div class="mb-4 flex flex-wrap">
                <label v-for="{ label, value } in tags" class="flex items-center mb-1 mr-3 rounded cursor-pointer">
                    <SfRadio v-model="props.productsQuery.tag" :value="value" name="tag"
                        @click="onQueryChange('tag', $event.target.value)" />
                    <span class="ml-1 ">{{ label }}</span>
                </label>
            </div>
        </div>
        <div>
            <h3 class="mb-1 font-bold ">{{ $t("Vendor") }}</h3>
            <div class="mb-4 flex flex-wrap">
                <label v-for="{ label, value } in vendors" class="flex items-center mb-1 mr-3 rounded cursor-pointer">
                    <SfRadio v-model="props.productsQuery.vendor" :value="value" name="vendor"
                        @click="onQueryChange('vendor', $event.target.value)" />
                    <span class="ml-1 ">{{ label }}</span>
                </label>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <SfButton class="w-full dark:bg-neutral-900" @click="onQueryUpdate">{{ $t("Search") }}</SfButton>
            <SfButton :disabled="!hasFilters" variant="secondary" class="w-full dark:bg-neutral-900" @click="onQueryClear">
                {{ $t("Clear all filters") }}
            </SfButton>
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

const newProductsQuery = ref<ProductsQuery>(props.productsQuery);

const hasFilters = computed<boolean>(() => Boolean(props.productsQuery.title || props.productsQuery.tag || props.productsQuery.vendor));

const onQueryChange = (key: keyof ProductsQuery, value: string) => {
    newProductsQuery.value[key] = value;
}

const onQueryClear = () => {
    newProductsQuery.value = {
        title: "",
        vendor: "",
        tag: "",
    }
    emit('productsQueryUpdated', newProductsQuery.value);
}

const onQueryUpdate = () => {
    emit('productsQueryUpdated', newProductsQuery.value);
}

</script>
        