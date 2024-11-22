import { NextResponse } from "next/server";
import * as fs from "fs/promises";
import * as path from "path";
import { getImageFilenames } from "@/lib/get-image-file-name";

export async function GET() {
  function generateRandomNumbers() {
    const randomNumber = (Math.random() * 248).toFixed();

    return randomNumber;
  }
  const image = generateRandomNumbers();
  const fileName = getImageFilenames(
    path.join(process.cwd(), "public", "walls")
  );

  if (image) {
    const filePath = path.join(
      process.cwd(),
      "public",
      "walls",
      `${fileName[Number(image)]}`
    );

    try {
      const file = await fs.readFile(filePath);

      return new NextResponse(file, {
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
