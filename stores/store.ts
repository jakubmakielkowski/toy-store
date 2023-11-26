import { defineStore } from "pinia";
import type { Cart } from "~/types/api";

export const useStore = defineStore("store", () => {
  const isDrawerOpened = ref<boolean>(false);

  const openDrawer = (): void => {
    isDrawerOpened.value = true;
  };

  const closeDrawer = (): void => {
    isDrawerOpened.value = false;
  };


  const isDarkMode = ref<boolean>(false);

  const toggleDarkMode = (): void => {
    isDarkMode.value = !isDarkMode.value;
  };


  const cart = ref<Cart>(null);

  const setCart = (newCart: Cart) => {
    cart.value = newCart;
  }

  const removeCart = () => {
    cart.value = null;
  }


  const isCartOpened = ref<boolean>(false);

  const closeCart = () => {
    isCartOpened.value = false;
  }

  const toggleCart = () => {
    isCartOpened.value = !isCartOpened.value;
  }

  return { isDrawerOpened, isDarkMode, openDrawer, closeDrawer, toggleDarkMode, cart, setCart, removeCart, isCartOpened, closeCart, toggleCart };
});
