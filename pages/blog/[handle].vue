<template>
    <AsyncDataWrapper :noData="!article" :error="articleError">
        <h1 class="text-2xl font-bold">{{ article?.title }}</h1>
        <div class="flex gap-1 my-4">
            <SfChip v-if="article?.tags" v-for="tag in article?.tags" size="sm" class="mr-2 mb-2" tabindex="-1">
                {{ tag }}
            </SfChip>
        </div>
        <div>
            <p class="">{{ article?.content }}</p>
        </div>
    </AsyncDataWrapper>
</template>

<script lang="ts" setup>
import { useArticle } from "~/composables/api";
import type { Article } from "~/types/api";
import {
    SfButton,
    SfChip,
    SfIconChevronLeft,
} from '@storefront-ui/vue';
const route = useRoute();

const handle = route.params.handle as string;

const {
    data: article,
    error: articleError,
} = await useAsyncData<Article>(
    "articleData",
    useArticle(handle)
);


useHead({
    title: `Toy Store - ${article.value.title}`
});
</script>