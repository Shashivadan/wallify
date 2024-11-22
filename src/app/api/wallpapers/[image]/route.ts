import { NextResponse, type NextRequest } from "next/server";
import * as fs from "fs/promises";
import * as path from "path";

export async function GET(
  req: NextRequest,
  { params }: { params: { image: string } }
) {
  const { image } = await params;
  if (image) {
    const filePath = path.join(
      process.cwd(),
      "public",
      "walls",
      `${image}.jpg`
    );

    function generateRandomNumbers() {
      const randomNumber = (Math.random() * 248)
        .toFixed(0)
        .toString()
        .padStart(4, "0");
      return randomNumber;
    }

    console.log("random number", generateRandomNumbers());

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
