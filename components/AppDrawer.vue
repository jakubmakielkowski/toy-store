
<template>
    <div v-show="store.isDrawerOpened" class="fixed top-0 bottom-0 left-0 z-10 p-4 bg-white shadow-md min-w-[320px]">
        <SfButton :square="true" class="mb-4" @click="store.closeDrawer">
            <SfIconClose />
        </SfButton>
        <div class="mb-8">
            <NuxtLink class="block text-2xl font-bold underline" to="/products">{{ $t('Products') }}</NuxtLink>
            <NuxtLink class="block text-2xl font-bold underline" to="/blog">{{ $t('Blog') }}</NuxtLink>
            <NuxtLink class="block text-2xl font-bold underline" to="/cart">{{ $t('Cart') }}</NuxtLink>
        </div>
        <div class="mb-8">
            <h2 class="text-xl font-bold mb-1">{{ $t('Collections') }}</h2>
            <NuxtLink class="block underline mb-1" v-for="collection in collections">{{ collection.title }}</NuxtLink>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { SfButton, SfIconClose } from '@storefront-ui/vue';
import { useStore } from '@/stores/store';
import { useCollections } from "~/composables/api";
import type { CollectionsResponse } from "~/types/api";

const store = useStore();

const {
    data: collectionsData,
    pending: collectionsPending,
    error: collectionsError,
    refresh: collectionsRefresh,
} = await useAsyncData<CollectionsResponse>("collectionsData", useCollections({ first: 10 }));

const collections = computed(() => collectionsData.value?.nodes);
</script>
    