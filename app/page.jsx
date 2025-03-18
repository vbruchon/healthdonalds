import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={"/categories/burger.png"}
        width={42}
        height={42}
        alt="burger image"
        className="-rotate-12"
      />
      <h2 className="text-2xl font-bold text-muted-foreground">
        Welcome to Healthdonalds!
      </h2>
      <Image
        src={"/categories/nuggets.png"}
        width={42}
        height={42}
        alt="nuggets image"
        className="rotate-12"
      />
    </div>
  );
}
