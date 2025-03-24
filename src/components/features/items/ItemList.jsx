import { getItems } from "@/lib/items/get-items";
import { Loader } from "lucide-react";
import React from "react";
import useSWR from "swr";
import { Item } from "./Item";

export const ItemList = () => {
  const { data, error, isValidating } = useSWR("items/", getItems);

  if (isValidating) {
    return <Loader className="animate-spin" />;
  }

  if (error) {
    return <p className="text-red-500">Failed to load products</p>;
  }

  if (!data || data.length === 0) {
    return <p>Sorry, we have no products</p>;
  }

  return (
    <div className="grid max-h-full grid-cols-2 gap-3 overflow-y-auto">
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
