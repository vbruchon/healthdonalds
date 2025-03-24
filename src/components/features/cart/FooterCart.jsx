import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import { useCartPrice, useCartStore } from "@/store/use-cart-store";
import { ChevronDown } from "lucide-react";
import { ChevronUp, Minus, Trash2 } from "lucide-react";
import React, { useState } from "react";

export default function FooterCart() {
  const [open, setOpen] = useState(false);
  const cart = useCartStore();
  const price = useCartPrice();

  if (Object.keys(cart.items).length < 1) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 m-auto max-w-md rounded-t-lg border-x border-t bg-gray-100 px-4 py-2 shadow-lg">
      <div className="flex justify-center pb-2">
        <div
          className="flex w-full cursor-pointer items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronDown size={22} /> : <ChevronUp size={22} />}
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        {open && (
          <div>
            <div className="flex w-full items-center pb-2">
              <h3 className="text-lg font-bold text-muted-foreground">Cart</h3>
              <p className="ml-auto font-semibold">{formatPrice(price)}</p>
            </div>

            <div className="flex max-h-40 flex-col gap-3 overflow-y-auto py-2">
              {Object.values(cart.items).map((cartItem) => (
                <CartItem
                  key={cartItem.id}
                  item={cartItem.item}
                  quantity={cartItem.quantity}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex w-full items-center gap-4">
        <Button className="w-full bg-green-500 hover:bg-green-700">
          Checkout
        </Button>
        {!open && (
          <p className="ml-auto text-lg font-semibold">{formatPrice(price)}</p>
        )}
      </div>
    </div>
  );
}

const CartItem = ({ item, quantity }) => {
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative rounded-lg border">
          <img
            src={item.image}
            width={50}
            height={50}
            alt={`${item.name}-photo`}
            className="rounded-md"
          />
          <div className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-gray-300 text-xs font-bold shadow-md">
            {quantity}
          </div>
        </div>
        <p>{item.name}</p>
      </div>
      <div className="mr-2 flex items-center gap-3">
        <p className="font-light">{formatPrice(item.price * quantity)}</p>
        <Button variant="outline" size="sm" onClick={() => removeItem(item)}>
          {quantity === 1 ? <Trash2 size={12} /> : <Minus size={12} />}
        </Button>
      </div>
    </div>
  );
};
