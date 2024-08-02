import AnimatedButton from "../ui/AnimatedButton";
import { ModeToggle } from "../ui/ModeToggle";
import Link from "next/link";
export function Footer() {
  return (
    <section className="dark:bg-black bg-white border-t">
      <div className="flex justify-center w-full">
        <div className="flex justify-center items-center py-10 ">
          <Link href="/">
            <AnimatedButton text="odizzea 2024" speed={0.25} />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </section>
  );
}
