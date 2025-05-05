import { apiUrl } from "@/constants/modelstyles";
import { CreateTweetData } from "@/types";

async function createTweet(data: CreateTweetData) {
  try {
    const response = await fetch(`${apiUrl}/tweets/newTweet`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const tweetData = await response.json();
    if (tweetData.result) {
      return tweetData;
    } else {
      console.log("createTweet failed");
    }
  } catch (error) {}
}

async function getTweets() {
  try {
    const response = await fetch(`${apiUrl}/tweets/getTweets`);
    const data = await response.json();
    if (data.result) {
      return data;
    } else {
      throw new Error("failed to fetch");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateLike() {
  try {
  } catch (error) {}
}

export { createTweet, getTweets };
