import { defineStore } from "pinia";
import { useAddToCart, useCreateCart, useRemoveFromCart } from "~/composables/api/useCart";
import type { BaseCartLine, Cart } from "~/types/api";
import type { Color } from "~/types/ui";

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
    showNotification('Item has been added to the cart.', 'positive');
  };

  const removeFromCart = async (lineId: string) => {
    const newCart = await useRemoveFromCart(cart.value.id, lineId);
    cart.value = newCart;
    showNotification('Item has been removed from the cart.', 'negative');
  };

  const isCartOpened = ref<boolean>(false);

  const closeCart = () => {
    isCartOpened.value = false;
  };

  const toggleCart = () => {
    isCartOpened.value = !isCartOpened.value;
  };

  const notification = ref({
    isVisible: false,
    text: "",
    color: "positive",
  });

  const showNotification = (text: string, color: Color) => {
    notification.value = {
      text,
      color,
      isVisible: true,
    };
  };

  const hideNotification = () => {
    notification.value = {
      text: "",
      color: "positive",
      isVisible: false,
    };
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
    notification,
    showNotification,
    hideNotification,
  };
});
