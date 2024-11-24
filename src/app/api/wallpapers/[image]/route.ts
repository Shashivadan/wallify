import { fetchImages } from "@/lib/fetch-api-images";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ image: string }> }
) {
  const { image = "0001" } = await params;

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
