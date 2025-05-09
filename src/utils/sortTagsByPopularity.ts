function sortTagsByPopularity(tagData: { tag: string; tweets: any[] }[]) {
  return tagData.sort((a, b) => b.tweets.length - a.tweets.length);
}

export { sortTagsByPopularity };
