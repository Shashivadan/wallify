import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookAIcon, MoveLeft } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ImageDialog from "@/components/image-dialog";
import DownloadButton from "@/components/download-button";

const generateImageNumbers = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, i) =>
    String(start + i).padStart(4, "0")
  );
};

export const metadata = {
  title: "Wallpaper Gallery",
  description: "Explore our curated collection of stunning wallpapers",
};

// export const dynamic = "force-dynamic";

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const currentNumber = await searchParams;

  const ITEMS_PER_PAGE = 12;
  const TOTAL_IMAGES = 248;
  const TOTAL_PAGES = Math.ceil(TOTAL_IMAGES / ITEMS_PER_PAGE);

  const currentPage = Number(currentNumber.page) || 1;
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endIdx = Math.min(startIdx + ITEMS_PER_PAGE - 1, TOTAL_IMAGES);

  const imageNumbers = generateImageNumbers(startIdx, endIdx);
  const imageUrls = process.env.APIURL;

  const getPaginationItems = () => {
    const items = [];
    const maxVisible = 5;
    const halfVisible = Math.floor(maxVisible / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    const endPage = Math.min(TOTAL_PAGES, startPage + maxVisible - 1);

    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (startPage > 1) {
      items.push(1);
      if (startPage > 2) items.push("ellipsis");
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(i);
    }

    if (endPage < TOTAL_PAGES) {
      if (endPage < TOTAL_PAGES - 1) items.push("ellipsis");
      items.push(TOTAL_PAGES);
    }

    return items;
  };

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto bg-gradient-to-b w-full">
      <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Wallpaper Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated collection of {TOTAL_IMAGES} stunning wallpapers
            to elevate your digital spaces
          </p>
        </div>

        <div className="flex justify-center md:justify-end mb-6 gap-2">
          <Link href="/" passHref>
            <Button variant="outline" className="bg-transparent">
              <MoveLeft className="w-4 h-4 mr-2" /> Go Home
            </Button>
          </Link>
          <Link href="/docs" passHref>
            <Button variant="outline" className="bg-transparent">
              <BookAIcon className="w-4 h-4 mr-2" /> API Docs
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {imageNumbers.map((imageNumber) => (
            <div
              key={imageNumber}
              className="group rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/20"
            >
              <CardContent className="p-0 aspect-video relative">
                <Image
                  src={`${imageUrls}/${imageNumber}.jpg`}
                  alt={`Wallpaper ${imageNumber}`}
                  placeholder="blur"
                  blurDataURL={`${imageUrls}/${imageNumber}.jpg`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  priority={parseInt(imageNumber) <= startIdx + 3}
                  quality={75}
                  loading={
                    parseInt(imageNumber) <= startIdx + 3 ? "eager" : "lazy"
                  }
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2 items-center justify-center">
                  <ImageDialog source={`${imageUrls}/${imageNumber}.jpg`} />
                  <DownloadButton
                    url={`${imageUrls}/${imageNumber}.jpg`}
                    filename={`wallpaper-${imageNumber}.jpg`}
                  />
                </div>
              </CardContent>
            </div>
          ))}
        </div>

        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem className="hidden md:block">
              <PaginationPrevious
                href={`?page=${Math.max(1, currentPage - 1)}`}
                aria-disabled={currentPage === 1}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {getPaginationItems().map((item, index) => (
              <PaginationItem key={index}>
                {item === "ellipsis" ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    href={`?page=${item}`}
                    isActive={currentPage === item}
                  >
                    {item}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}

            <PaginationItem className="hidden md:block">
              <PaginationNext
                href={`?page=${Math.min(TOTAL_PAGES, currentPage + 1)}`}
                aria-disabled={currentPage === TOTAL_PAGES}
                className={
                  currentPage === TOTAL_PAGES
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
