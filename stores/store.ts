import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const isDrawerOpened = ref<boolean>(false);
  const isDarkMode = ref<boolean>(false);

  const openDrawer = (): void => {
    isDrawerOpened.value = true;
  };

  const closeDrawer = (): void => {
    isDrawerOpened.value = false;
  };

  const toggleDarkMode = (): void => {
    isDarkMode.value = !isDarkMode.value;
  };


  return { isDrawerOpened, isDarkMode, openDrawer, closeDrawer, toggleDarkMode };
});
