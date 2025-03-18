import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";

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
      <Button
        size={"sm"}
        variant={"outline"}
        className="inline-flex items-center gap-2"
      >
        0
        <ShoppingBasket />
      </Button>
    </header>
  );
};
