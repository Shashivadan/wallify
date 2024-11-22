import fs from "fs";
import path from "path";

export function getImageFilenames(folderPath: string) {
  try {
    const files = fs.readdirSync(folderPath);

    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];
    const imageFiles = files.filter((file) =>
      imageExtensions.includes(path.extname(file).toLowerCase())
    );
    return imageFiles;
  } catch (err) {
    console.error("Error reading folder:", err);
    return [];
  }
}
