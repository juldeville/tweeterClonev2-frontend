function extractTag(str: string) {
  const result = str.match(/#(\w+)/);
  return result ? result[1] : null;
}

export { extractTag };
