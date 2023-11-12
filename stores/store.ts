import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const isDrawerOpened = ref<boolean>(false);

  const openDrawer = (): void => {
    isDrawerOpened.value = true;
  };

  const closeDrawer = (): void => {
    isDrawerOpened.value = false;
  };

  return { isDrawerOpened, openDrawer, closeDrawer };
});
