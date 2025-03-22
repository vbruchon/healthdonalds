"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { useUserStore } from "@/store/use-user-store";
import { User } from "lucide-react";
import { useCartQuantity, useCartStore } from "@/store/use-cart-store";

export const Header = () => {
  return (
    <header className="flex items-center justify-between border-b px-4 py-2 shadow-sm">
      <Link href={"/"} className="inline-flex items-center gap-2">
        <Image
          src={"/healthdonalds.png"}
          width={36}
          height={36}
          alt="HealthDonalds logo"
        />
        <h1 className="text-xl font-medium">HealthDonalds</h1>
      </Link>
      <div className="item-center flex gap-2">
        <UserNameHeader />
        <ShoppingCart />
      </div>
    </header>
  );
};

const UserNameHeader = () => {
  const userName = useUserStore((s) => s.userName);
  const logout = useUserStore((s) => s.logout);

  if (!userName) return null;

  return (
    <Button
      size={"sm"}
      variant={"ghost"}
      className="inline-flex items-center gap-2"
      onClick={() => logout()}
    >
      <User />
      {userName}
    </Button>
  );
};

const ShoppingCart = () => {
  const quantity = useCartQuantity();

  return (
    <Button
      size={"sm"}
      variant={"outline"}
      className="inline-flex items-center gap-2"
    >
      {quantity !== 0 ? quantity : null}
      <ShoppingBasket />
    </Button>
  );
};
