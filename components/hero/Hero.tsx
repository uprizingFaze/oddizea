import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import StaticLogoCloud from "@/components/hero/components/logos";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function Hero() {
  return (
    <div className="flex flex-col overflow-hidden bg-white dark:bg-black">
      <ContainerScroll
        titleComponent={
          <>
            <div>
              <div className="z-10 flex mt-28 pb-8 items-center justify-center">
                <Link href="/">
                  <div className="inline-flex animate-shine items-center justify-center rounded-full  border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 py-1 font-medium text-neutral-400 transition-colors">
                    ✨ Integration with Open Ai
                  </div>
                </Link>
              </div>
              <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-7xl">
                Create diagrams of any type with this chat app.
              </h1>
              <h2 className="text-muted-foreground text-lg md:text-xl px-4 mt-8 mx-auto max-w-3xl">
                Odizzea is a tool that creates
                <span className="text-black dark:text-white font-medium">
                  {" "}
                  visual maps{" "}
                </span>
                whit AI, all managed through a chat interface where you interact
                dynamically all the time.
                <span className="text-black dark:text-white font-medium">
                  {" "}
                </span>
              </h2>
              <div className="flex-col mt-8">
                <Button
                  className="shadow hover:shadow-[0px_0px_20px_rgba(255,255,255,255)]"
                  asChild
                >
                  <Link href="/chat">Get started</Link>
                </Button>
                <Button className="ml-4 mb-16" variant="secondary">
                  More
                </Button>
              </div>
            </div>
          </>
        }
      >
        <div className="relative rounded-lg">
          <Image
            src="/dashboard-dark.webp"
            alt="Hero Image"
            className="rounded-md"
            width={1030}
            height={500}
          />

          <BorderBeam size={350} duration={7} delay={9} />
        </div>
      </ContainerScroll>
      <StaticLogoCloud />
    </div>
  );
}
