export async function fetchImages(image: string) {
  try {
    const response = await fetch(`${process.env.APIURL}/${image}.jpg`, {
      cache: "force-cache",
    });

    return response.body;
  } catch (error) {
    return (error as { message: string }).message;
  }
}
