<template>
    <div class="relative flex w-full max-h-[600px] aspect-[4/3]">
        <SfScrollable ref="thumbsRef"
            class="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            direction="vertical" :active-index="activeIndex" :previous-disabled="activeIndex === 0"
            :next-disabled="activeIndex === images?.length - 1" buttons-placement="floating">
            <template #previousButton="defaultProps">
                <SfButton v-if="!firstThumbVisible" v-bind="defaultProps" :disabled="activeIndex === 0"
                    class="absolute !rounded-full z-10 top-4 rotate-90 bg-white" variant="secondary" size="sm" square
                    :aria-label="`${$t('Products gallery scroll to start')}`">
                    <SfIconChevronLeft size="sm" />
                </SfButton>
            </template>
            <button v-for="({ src, altText }, index) in images" :key="`${altText}-${index}-thumbnail`"
                :ref="(el) => assignRef(el, index)" type="button" :aria-label="altText || `${$t('Product image')} ${(index+1)}`"
                :aria-current="activeIndex === index" :class="`md:w-[78px] md:h-auto relative shrink-0 pb-1 mx-4 -mb-2 border-b-4 snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0  ${activeIndex === index ? 'border-primary-700' : 'border-transparent'
                }`" @mouseover="activeIndex = index" @focus="activeIndex = index">
                <img :alt="altText || `${$t('Product image')} ${(index+1)}`" class="border border-neutral-200" width="78" height="78" :src="src" />
            </button>
            <template #nextButton="defaultProps">
                <SfButton v-if="!lastThumbVisible" v-bind="defaultProps" :disabled="activeIndex === images?.length"
                    class="absolute !rounded-full z-10 bottom-4 rotate-90 bg-white" variant="secondary" size="sm" square
                    :aria-label="`${$t('Products gallery scroll to end')}`">
                    <SfIconChevronRight size="sm" />
                </SfButton>
            </template>
        </SfScrollable>
        <SfScrollable
            class="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            :active-index="activeIndex" direction="vertical" wrapper-class="h-full m-auto" is-active-index-centered
            buttons-placement="none" :drag="{ containerWidth: true }" @on-drag-end="onDragged">
            <div v-for="({ src, altText }, index) in images" :key="`${altText}-${index}`"
                class="flex justify-center h-full basis-full shrink-0 grow snap-center">
                <img :aria-label="altText || `${$t('Product image')} ${(index+1)}`" :aria-hidden="activeIndex !== index" class="object-cover w-auto h-full"
                    :alt="altText || `${$t('Product image')} ${(index+1)}`" :src="src" />
            </div>
        </SfScrollable>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
    SfScrollable,
    SfButton,
    SfIconChevronLeft,
    SfIconChevronRight,
    type SfScrollableOnDragEndData,
} from '@storefront-ui/vue';
import { unrefElement, useIntersectionObserver } from '@vueuse/core';
import { watch, type ComponentPublicInstance } from 'vue';
import type { Image } from '~/types/api';

const props = defineProps<{
    images: Array<Image>;
}>();

const thumbsRef = ref<HTMLElement>();
const firstThumbRef = ref<HTMLButtonElement>();
const lastThumbRef = ref<HTMLButtonElement>();
const firstThumbVisible = ref(false);
const lastThumbVisible = ref(false);
const activeIndex = ref(0);

watch(
    thumbsRef,
    (thumbsRef) => {
        if (thumbsRef) {
            useIntersectionObserver(
                firstThumbRef,
                ([{ isIntersecting }]) => {
                    firstThumbVisible.value = isIntersecting;
                },
                {
                    root: unrefElement(thumbsRef),
                    rootMargin: '0px',
                    threshold: 1,
                },
            );
        }
    },
    { immediate: true },
);

watch(
    thumbsRef,
    (thumbsRef) => {
        if (thumbsRef) {
            useIntersectionObserver(
                lastThumbRef,
                ([{ isIntersecting }]) => {
                    lastThumbVisible.value = isIntersecting;
                },
                {
                    root: unrefElement(thumbsRef),
                    rootMargin: '0px',
                    threshold: 1,
                },
            );
        }
    },
    { immediate: true },
);

const onDragged = (event: SfScrollableOnDragEndData) => {
    if (event.swipeRight && activeIndex.value > 0) {
        activeIndex.value -= 1;
    } else if (event.swipeLeft && activeIndex.value < props.images?.length - 1) {
        activeIndex.value += 1;
    }
};

const assignRef = (el: Element | ComponentPublicInstance | null, index: number) => {
    if (!el) return;
    if (index === props.images?.length - 1) {
        lastThumbRef.value = el as HTMLButtonElement;
    } else if (index === 0) {
        firstThumbRef.value = el as HTMLButtonElement;
    }
};
</script>