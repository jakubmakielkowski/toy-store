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

  const cart = ref<Cart>(null);
  const isCartLoading = ref(false);

  const addToCart = async (cartLine: BaseCartLine) => {
    try {
      isCartLoading.value = true;
      if (!cart.value) {
        cart.value = await useCreateCart();
      }
      const newCart = await useAddToCart(cart.value.id, cartLine);
      cart.value = newCart;
      showNotification("Item has been added to the cart.", "positive");
    } catch (error) {
      showNotification("Error while adding item to the cart.", "negative");
    } finally {
      isCartLoading.value = false;
    }
  };

  const removeFromCart = async (lineId: string) => {
    try {
      isCartLoading.value = true;
      const newCart = await useRemoveFromCart(cart.value.id, lineId);
      cart.value = newCart;
      showNotification("Item has been removed from the cart.", "warning");
    } catch (error) {
      showNotification("Error while removing item from the cart.", "negative");
    } finally {
      isCartLoading.value = false;
    }
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
    isCartLoading,
    closeCart,
    toggleCart,
    notification,
    showNotification,
    hideNotification,
  };
});
