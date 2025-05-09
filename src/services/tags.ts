import { apiUrl } from "@/constants/modelstyles";
import { sortTagsByPopularity } from "@/utils/sortTagsByPopularity";

async function getTags() {
  try {
    const response = await fetch(`${apiUrl}/tags/mostPopular`);
    const tags = await response.json();
    console.log("api response for mostPopular is:", tags);
    if (tags) return sortTagsByPopularity(tags.data);
    throw new Error("error fetching tags/mostPopular ");
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { getTags };
