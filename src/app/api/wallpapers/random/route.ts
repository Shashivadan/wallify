import { fetchImages } from "@/lib/fetch-api-images";
import { NextResponse } from "next/server";

function generateRandomNumbers() {
  const randomNumber = (Math.random() * 248).toFixed().padStart(4, "0");
  return randomNumber;
}

export async function GET() {
  const image = generateRandomNumbers();

  if (image) {
    try {
      const response = await fetchImages(image);
      return new NextResponse(response, {
        headers: {
          "Content-Type": "image/jpeg",
        },
      });
    } catch (error: unknown) {
      return new NextResponse((error as { message: string }).message, {
        status: 404,
      });
    }
  }

  return new NextResponse("Image not found", { status: 404 });
}
