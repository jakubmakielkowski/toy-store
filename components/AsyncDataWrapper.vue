<template>
    <div>
        <div v-if="Boolean(props.pending)" class="flex justify-center">
            <SfLoaderCircular size="2xl" />
        </div>
        <div v-else-if="Boolean(props.error)" class="flex flex-col items-center gap-2">
            <div class="font-xl font-bold ">{{ $t('Something went wrong') }}</div>
            <SfIconCancel size="xl" class="mb-8" />
        </div>
        <div v-else-if="Boolean(props.noData)" class="font-xl font-bold text-center">
            {{ $t('No results for this query') }}
        </div>
        <slot v-else />
    </div>
</template>
    
<script lang="ts" setup>
import { SfLoaderCircular, SfIconCancel, SfButton } from "@storefront-ui/vue";

const props = defineProps<{
    pending?: boolean | unknown;
    error?: boolean | unknown;
    noData?: boolean | unknown;
}>();
</script>