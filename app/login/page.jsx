"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/store/use-user-store";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const login = useUserStore((store) => store.login);
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center gap-6 py-4">
      <div className="absolute left-2 top-2 -rotate-12">
        <Image
          src="/categories/burger.png"
          alt="Burger"
          width={50}
          height={50}
        />
      </div>

      <div className="absolute right-2 top-2 rotate-12">
        <Image
          src="/categories/nuggets.png"
          alt="nuggets"
          width={50}
          height={50}
        />
      </div>

      <div className="absolute bottom-2 right-2 rotate-12">
        <Image
          src="/categories/dessert.png"
          alt="dessert"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute bottom-2 left-2 -rotate-12">
        <Image src="/categories/fries.png" alt="fries" width={50} height={50} />
      </div>
      <div className="item-center flex flex-col gap-4">
        <h1 className="text-center text-xl text-muted-foreground">
          Welcome to HealthDonalds!
        </h1>
        <h2 className="text-center text-sm">
          Login First to access our applications
        </h2>
        <form
          action={(formData) => {
            const userName = formData.get("userName");
            login(userName);
            router.push("/");
          }}
          className="flex items-center gap-2"
        >
          <Input type="text" placeHolder="Enter your name" name="userName" />
          <Button type="submit" className="bg-green-600 hover:bg-green-800">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
