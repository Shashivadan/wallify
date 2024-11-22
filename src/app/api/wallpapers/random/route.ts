import { NextResponse } from "next/server";
import * as fs from "fs/promises";
import * as path from "path";

export async function GET() {
  function generateRandomNumbers() {
    const randomNumber = (Math.random() * 248)
      .toFixed(0)
      .toString()
      .padStart(4, "0");
    return randomNumber;
  }
  const image = generateRandomNumbers();

  if (image) {
    const filePath = path.join(
      process.cwd(),
      "public",
      "walls",
      `${image}.jpg`
    );

    try {
      const file = await fs.readFile(filePath);
      console.log(file);

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
