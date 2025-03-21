"use client";
import { useUserStore } from "@/store/use-user-store";
import LoginPage from "./login/page";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ItemList } from "@/features/items/ItemList";

export default function Home() {
  const user = useUserStore((store) => store.userName);
  const isAdmin = useUserStore((s) => s.isAdmin);
  const router = useRouter();

  if (!user) {
    return <LoginPage />;
  }

  return (
    <div className="relative flex h-full justify-center">
      <ItemList />
      {isAdmin ? (
        <Button
          variant={"ghost"}
          className="absolute bottom-4 right-4 rounded-full bg-gray-200 p-3 shadow-xl"
          onClick={() => router.push("/items/new")}
        >
          <Plus className="h-6 w-6 text-primary" />
        </Button>
      ) : null}
    </div>
  );
}
