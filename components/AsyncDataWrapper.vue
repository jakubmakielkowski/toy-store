<template>
    <div>
        <div v-if="pending" class="flex justify-center">
            <SfLoaderCircular size="2xl" />
        </div>
        <div v-else-if="error" class="flex flex-col items-center gap-2">
            <div class="font-xl font-bold text-slate-700">{{ $t('Something went wrong!') }}</div>
            <SfIconCancel size="xl" class="mb-8" />
            <NuxtLink to="/">
                <SfButton>{{ $t('Back to home page') }}</SfButton>
            </NuxtLink>
        </div>
        <div v-else-if="noData" class="font-xl font-bold text-slate-700 text-center">
            {{ $t('No results for this query.') }}
        </div>
        <slot v-else />
    </div>
</template>
    
<script lang="ts" setup>
import { SfLoaderCircular, SfIconCancel, SfButton } from "@storefront-ui/vue";

const props = defineProps<{
    pending: boolean;
    error: boolean;
    noData: boolean;
}>();
</script>