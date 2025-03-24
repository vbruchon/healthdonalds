"use client";
import { useUserStore } from "@/store/use-user-store";
import LoginPage from "./login/page";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ItemList } from "@/components/features/items/ItemList";
import FooterCart from "@/components/features/cart/FooterCart";

export default function Home() {
  const user = useUserStore((store) => store.userName);

  if (!user) {
    return <LoginPage />;
  }

  return (
    <div className="relative flex size-full flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <ItemList />
      </div>
      <AdminButton />
      <FooterCart />
    </div>
  );
}

const AdminButton = () => {
  const isAdmin = useUserStore((s) => s.isAdmin);
  const router = useRouter();

  if (!isAdmin) return null;

  return (
    <Button
      variant={"ghost"}
      className="absolute bottom-4 right-4 rounded-full bg-gray-200 p-3 shadow-xl"
      onClick={() => router.push("/items/new")}
    >
      <Plus className="size-6 text-primary" />
    </Button>
  );
};
