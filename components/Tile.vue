
<template>
  <div class="p-4 rounded-md border border-slate-300">
    <div class="mb-4">
      <img
        :src="collection.image?.url"
        :alt="collection.image?.altText"
        class="h-32 w-32 m-auto"
      />
    </div>
    <p class="text-slate-700 font-bold">{{ collection.title }}</p>
  </div>
</template>
    
<script lang="ts" setup>
import type { Collection } from "~/types/api/collection";

const props = defineProps<{
  collection: Collection;
}>();
</script>
    