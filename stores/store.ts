import { defineStore } from "pinia";
import { useAddToCart, useCreateCart, useRemoveFromCart } from "~/composables/api/useCart";
import type { BaseCartLine, Cart } from "~/types/api";

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

  const addToCart = async (cartLine: BaseCartLine) => {
    if (!cart.value) {
      cart.value = await useCreateCart();
    }
    const newCart = await useAddToCart(cart.value.id, cartLine);
    cart.value = newCart;
  };

  const removeFromCart = async (lineId: string) => {
    const newCart = await useRemoveFromCart(cart.value.id, lineId);
    cart.value = newCart;
  };

  const isCartOpened = ref<boolean>(false);

  const closeCart = () => {
    isCartOpened.value = false;
  };

  const toggleCart = () => {
    isCartOpened.value = !isCartOpened.value;
  };

  return {
    isDrawerOpened,
    isDarkMode,
    openDrawer,
    closeDrawer,
    toggleDarkMode,
    cart,
    addToCart,
    removeFromCart,
    isCartOpened,
    closeCart,
    toggleCart,
  };
});
