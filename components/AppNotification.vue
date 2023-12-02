<template>
    <div v-if="notification.isVisible" role="alert"
        :class="`fixed z-40 overflow-hidden top-4 left-[50%] -translate-x-1/2 flex items-start max-w-[600px] shadow-md px-2 py-1 rounded-md ${getBgColor} ${getTextColor}`">
        <SfIconCheckCircle class="my-2 mr-2 shrink-0" />
        <p class="py-2">{{ $t(notification.text) }}</p>
    </div>
</template>
  
<script lang="ts" setup>
import { SfIconCheckCircle } from '@storefront-ui/vue';
import { useStore } from '@/stores/store';

const store = useStore();

const notification = computed(() => store.notification);
const timeoutId = ref();

// Need to return entire class to correct interpolation
const getBgColor = computed(() => {
    switch (notification.value.color) {
        case 'positive': return 'bg-green-100';
        case 'warning': return 'bg-yellow-100';
        case 'negative': return 'bg-red-100';
        default: return 'bg-slate-100';
    }
});

// Need to return entire class to correct interpolation
const getTextColor = computed(() => {
    switch (notification.value.color) {
        case 'positive': return 'text-green-800';
        case 'warning': return 'text-yellow-800';
        case 'negative': return 'text-red-800';
        default: return 'text-slate-800';
    }
});

watch(notification, (newNotification) => {
    if (timeoutId.value) {
        clearTimeout(timeoutId.value);
    }

    if (newNotification.isVisible) {
        timeoutId.value = setTimeout(store.hideNotification, 3000);
    }
})

</script>