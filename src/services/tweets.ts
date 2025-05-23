import { apiUrl } from "@/constants/modelstyles";
import { CreateTweetData, UpdateTweetData } from "@/types";

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

async function getTweets(token: string, query: string = "") {
  try {
    const url = query
      ? `${apiUrl}/tweets/getTweets/${token}?tagId=${encodeURIComponent(query)}`
      : `${apiUrl}/tweets/getTweets/${token}`;
    const response = await fetch(url);
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

async function updateLike(data: UpdateTweetData) {
  try {
    const response = await fetch(`${apiUrl}/tweets/updateLike`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const apiData = await response.json();

    if (apiData.result) return apiData;
    throw new Error("updateLike failed");
  } catch (error) {
    console.error("error is: ", error);
    throw error;
  }
}

async function deleteTweet(data: string) {
  try {
    const response = await fetch(`${apiUrl}/tweets/deleteTweet`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ tweetId: data }),
    });

    const apiData = await response.json();
    if (apiData.result) return true;
    throw new Error("delete tweet failed");
  } catch (err) {
    console.error("error is", err);
    throw err;
  }
}

export { createTweet, getTweets, updateLike, deleteTweet };
