"use client";

import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DownloadButton({
  url,
  filename,
}: {
  url: string;
  filename: string;
}) {
  const downloadImage = async (url: string, filename: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const urlBlob = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = urlBlob;
    link.download = filename;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(urlBlob);
  };
  return (
    <Button
      variant="ghost"
      className=" transition-all bg-transparent duration-300 transform hover:scale-110 hover:bg-black/20"
      onClick={() => downloadImage(url, filename)}
    >
      <Download className="w-4 h-4 " />
    </Button>
  );
}
