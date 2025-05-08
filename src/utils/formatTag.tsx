function formatTag(str: string) {
  const match = str.match(/#\w+/);
  if (!match) return str;

  const [tag] = match;
  const [beforeTag, afterTag] = str.split(tag);

  return (
    <>
      {beforeTag}
      <span className="text-accent font-bold">{tag}</span>
      {afterTag}
    </>
  );
}

export { formatTag };
