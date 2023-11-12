
<template>
  <div class="p-4 rounded-md border border-slate-300">
    <p class="text-slate-700 font-bold">{{ article.title }}</p>
    <p class="text-slate-700 font-bold">{{ article.excerpt }}</p>
  </div>
</template>
      
<script lang="ts" setup>
import type { Article } from "~/types/api";

const props = defineProps<{
  article: Partial<Article>;
}>();
</script>
      