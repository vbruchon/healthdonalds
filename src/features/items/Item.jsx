import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format-price";
import { cn } from "@/lib/utils";
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
      <p>{item.name}</p>
      <div className="flex justify-end">
        <Button className="bg-green-600 px-4 py-2 text-white hover:bg-green-700">
          Add
        </Button>
      </div>
    </div>
  );
}
