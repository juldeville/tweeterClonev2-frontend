import { apiUrl } from "@/constants/modelstyles";
import { sortTagsByPopularity } from "@/utils/sortTagsByPopularity";
import { TagData } from "@/types";
async function getTags(): Promise<TagData[]> {
  try {
    const response = await fetch(`${apiUrl}/tags/mostPopular`);
    const tags = await response.json();
    if (tags) return sortTagsByPopularity(tags.data);
    throw new Error("error fetching tags/mostPopular ");
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { getTags };
