
<template>
  <div>
    <SfInput @focus="onSearchFocus" @blur="onSearchBlur">
      <template #suffix>
        <SfIconSearch />
      </template>
    </SfInput>
  </div>
</template>
    
<script lang="ts" setup>
import { SfIconSearch, SfInput } from "@storefront-ui/vue";

const state = reactive({
  isFocused: false,
});

const onSearchFocus = () => {
  state.isFocused = true;
};

const onSearchBlur = () => {
  state.isFocused = false;
};
</script>
    