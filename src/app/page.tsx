import Image from "next/image";
import Link from "next/link";

import Balancer from "react-wrap-balancer";
import { ArrowRight, Download } from "lucide-react";

import { Section, Container } from "@/components/landing/craft";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <Section className="py-8 md:py-12 lg:py-16 ">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Button
            asChild
            className="mb-4 md:mb-6 w-fit hover:scale-105 transition-transform"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose text-sm sm:text-base" href="/docs">
              Explore Our API Docs{" "}
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
            </Link>
          </Button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight">
            <Balancer>
              Transform Your Screen with Stunning High-Resolution Wallpapers
            </Balancer>
          </h1>

          <h3 className="text-muted-foreground mt-4 md:mt-6 text-base sm:text-lg md:text-lg max-w-[800px]">
            <Balancer>
              Discover a curated collection of 248 breathtaking wallpapers, from
              serene landscapes to abstract art. Each wallpaper is carefully
              crafted to bring life to your desktop and inspire your daily
              workflow.
            </Balancer>
          </h3>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-8 mb-8 md:mb-12">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto hover:scale-105 transition-transform text-sm sm:text-base"
            >
              <Link
                href="/gallery"
                className="flex items-center justify-center"
              >
                Browse Gallery
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto hover:scale-105 transition-transform text-sm sm:text-base"
            >
              <a
                href="/api/wallpapers/random"
                className="flex items-center justify-center"
                download
              >
                Random Wallpaper
                <Download className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="not-prose relative group cursor-pointer w-full overflow-hidden rounded-lg sm:rounded-xl border bg-black">
            <div className="aspect-video md:aspect-[21/9] relative">
              <Image
                className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                src="/api/wallpapers/random"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1400px"
                priority
                alt="Featured wallpaper showcasing a stunning visual composition"
              />
            </div>
          </div>

          <div className="mt-4 md:mt-6 space-y-2 md:space-y-0 md:flex md:justify-center md:gap-8 text-center text-sm sm:text-base text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              <span className="hidden md:inline">•</span> New wallpapers added
              weekly
            </p>
            <p className="flex items-center justify-center gap-1">
              <span className="hidden md:inline">•</span> 4K/HD resolution
            </p>
            <p className="flex items-center justify-center gap-1">
              <span className="hidden md:inline">•</span> Free for personal use
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
