<template>
  {{ $t("Sample text") }}
  <SfButton>{{ $t("Sample button") }}</SfButton>
</template>

<script lang="ts" setup>
import { SfButton } from "@storefront-ui/vue";
const { locale } = useI18n();
</script>
