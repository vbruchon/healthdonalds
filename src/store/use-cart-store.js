import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      items: {},
      addItem: (item) =>
        set((state) => {
          const itemId = item.id;
          const newItems = { ...state.items };

          if (newItems[itemId]) {
            newItems[itemId] = {
              quantity: newItems[itemId].quantity + 1,
              item,
            };
          } else {
            newItems[itemId] = {
              item,
              quantity: 1,
            };
          }
          return { items: newItems };
        }),
      removeItem: (item) =>
        set((state) => {
          const itemId = item.id;
          const newItems = { ...state.items };

          if (newItems[itemId]) {
            newItems[itemId] = {
              quantity: newItems[itemId].quantity - 1,
              item,
            };
          }
          if (newItems[itemId].quantity <= 0) {
            delete newItems[itemId];
          }
          return { items: newItems };
        }),
    }),
    { name: "healthdonalds-cart-store" },
  ),
);

export const useCartQuantity = () => {
  return useCartStore((s) => {
    return Object.values(s.items).reduce(
      (total, item) => total + item.quantity,
      0,
    );
  });
};
