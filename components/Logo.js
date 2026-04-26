import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Complex Flow Physics Lab (CFPL)"
        width={128}
        height={40}
        priority
        className="h-10 w-auto"
      />
    </Link>
  );
}
