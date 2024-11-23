"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Fullscreen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DialogDescription } from "@radix-ui/react-dialog";

export default function ImageDialog({ source }: { source: string }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="transition-all bg-transparent duration-300 transform hover:scale-110 hover:bg-black/20"
        >
          <Fullscreen className="w-4 h-4 text-white" />
        </Button>
      </DialogTrigger>

      <DialogOverlay className="bg-black/80 backdrop-blur-md" />

      <DialogContent className="max-w-none max-h-none  m-auto  border-none bg-transparent p-4 ">
        <div className="relative w-full h-full aspect-video ">
          <Image
            src={source}
            alt={`Fullscreen view`}
            fill
            className="object-contain aspect-video "
            priority
            sizes="100vw"
            quality={100}
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          />
        </div>

        <DialogHeader className="sr-only">
          <DialogTitle>Fullscreen Image View</DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
