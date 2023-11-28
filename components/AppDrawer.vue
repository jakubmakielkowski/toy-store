
<template>
    <div v-show="store.isDrawerOpened" class="fixed z-30 top-0 bottom-0 left-0 p-4 bg-white shadow-md min-w-[300px]">
        <SfButton :square="true" class="mb-4 dark:bg-neutral-900" @click="store.closeDrawer">
            <SfIconClose />
        </SfButton>
        <nav>
            <div class="mb-8">
                <NuxtLink class="block text-2xl font-bold underline" to="/products" @click="store.closeDrawer">{{
                    $t('Products')
                }}</NuxtLink>
                <NuxtLink class="block text-2xl font-bold underline" to="/blog" @click="store.closeDrawer">{{ $t('Blog') }}
                </NuxtLink>
            </div>
            <div class="mb-8">
                <h2 class="text-xl font-bold mb-1">{{ $t('Vendors') }}</h2>
                <NuxtLink class="block underline mb-1" v-for="vendor in vendors" :to="`/products?vendor=${vendor.value}`"
                    @click="store.closeDrawer">
                    {{ vendor.label }}
                </NuxtLink>
            </div>
        </nav>
        <div class="mb-8">
            <h2 class="text-xl font-bold mb-1">{{ $t('Dark mode') }}</h2>
            <SfSwitch :modelValue="store.isDrawerOpened" class="dark:bg-neutral-900 dark:border-neutral-900"
                @click="store.toggleDarkMode" />
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { SfButton, SfIconClose, SfSwitch } from '@storefront-ui/vue';
import { useStore } from '@/stores/store';
import { vendors } from '~/utils/api/query';

const store = useStore();

</script>
    