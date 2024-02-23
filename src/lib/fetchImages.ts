import { ImagesResults } from "@/models/Image";
import { ImagesSchemaWithPhtos } from "@/models/Image";
import env from "./env";

export default async function fetchImages(url: string): Promise<ImagesResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY
      }
    })

    if (!res.ok) throw new Error('Failed to fetch images\n');

    const imagesResults: ImagesResults = await res.json();
    // console.log(imagesResults);

    // Parse تحليل البيانات على حسب هيكل محدد the data with Zod schema
    const parsedData = ImagesSchemaWithPhtos.parse(imagesResults);

    if (parsedData.total_results === 0) return undefined;

    return parsedData;
  } catch (e) {
    // Will show in terminal console
    if (e instanceof Error) console.error(e.stack);
  }
}