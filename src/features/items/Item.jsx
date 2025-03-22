import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/use-cart-store";
import { Plus } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Minus } from "lucide-react";
import React from "react";

export default function Item({ item }) {
  return (
    <div
      className={cn("group relative h-fit rounded-md border p-3 shadow-inner")}
    >
      <p className="absolute right-2 top-2 font-mono">
        {formatPrice(item.price)}
      </p>
      <img
        src={item.image}
        className="aspect-square w-full rounded-md object-contain"
      />
      <p className="my-2">{item.name}</p>
      <div className="flex justify-end">
        <CartButton item={item} />
      </div>
    </div>
  );
}

const CartButton = ({ item }) => {
  const cartItems = useCartStore((s) => s.items);
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);

  if (cartItems[item.id]) {
    return (
      <div className="inline-flex items-center gap-2">
        <Button variant={"ghost"} size={"sm"} onClick={() => removeItem(item)}>
          {cartItems[item.id].quantity === 1 ? (
            <Trash2 size={12} />
          ) : (
            <Minus size={12} />
          )}
        </Button>
        <span>{cartItems[item.id].quantity}</span>
        <Button variant={"ghost"} size={"sm"} onClick={() => addItem(item)}>
          <Plus size={12} />
        </Button>
      </div>
    );
  }
  return (
    <Button
      className="bg-green-600 px-4 py-2 text-white hover:bg-green-700"
      onClick={() => addItem(item)}
    >
      Add
    </Button>
  );
};
