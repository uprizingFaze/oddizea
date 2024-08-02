import Link from "next/link";
import { NavigationMenuDemo } from "@/components/navbar/NavigationMenuDemo";
import Svgicon from "@/app/perzeuzicon";
import {
  RocketIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/ModeToggle";

const Navigation = () => {
  return (
    <nav className="bg-white border-b dark:bg-black fixed w-full z-50 ">
      <div className="mx-4 flex flex-wrap items-center justify-between p-[0.80rem]">
        <Link
          href="/"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <Svgicon />
          <span className=" text-2xl dark:text-white ">odizzea</span>
        </Link>
        <div className="ml-4">
          <NavigationMenuDemo />
        </div>
        <div className="ml-auto flex items-center">
          <Link className="" href="/">
            <Button size="sm" variant="ghost">
              <TwitterLogoIcon className="h-6 w-6" />
            </Button>
          </Link>
          <Link className="mx-2" href="https://github.com/uprizingFaze/odissea">
            <Button size="sm" variant="ghost">
              <GitHubLogoIcon className="h-6 w-6" />
            </Button>
          </Link>
          {/* <ModeToggle /> */}
          <Link href="/chat">
            <Button size="sm">
              <RocketIcon className="mr-2 h-4 w-4" /> Get started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
