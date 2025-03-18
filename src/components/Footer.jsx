import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="inline-flex items-center gap-4 border-t px-4 py-2 shadow-inner">
      <Link href={"/"} className="inline-flex items-center gap-1">
        <Image
          src={"/healthdonalds.png"}
          width={36}
          height={36}
          alt="HealthDonalds logo"
        />
        <h3 className="text-sm font-medium">HealthDonalds</h3>
      </Link>
      <p className="text-center text-xs">
        &copy; {new Date().getFullYear()} HealthDonalds. All rights reserved.
      </p>
    </footer>
  );
};
