import { useEffect, useState } from "react";

export function fromTimestamp(timestamp) {
  return new Date(timestamp).toLocaleString("en-GB", {
    year: "numeric",
    day: "2-digit",
    month: "short",
  });
}

export function useStories(url) {
  const urlJson = `https://corsio.devops.codeforafrica.org/?${url}?format=json`;
  const [stories, setStories] = useState([]);
  useEffect(() => {
    async function fetchStories() {
      const response = await fetch(urlJson);
      const jsonClean = await (await response.text()).replace(
        "])}while(1);</x>",
        ""
      );
      const json = await JSON.parse(jsonClean);
      const streamItems = await json.payload.streamItems;
      const foundStories = await streamItems.map(
        (item) => json.payload.references.Post[item.postPreview.postId]
      );
      setStories(foundStories);
    }
    fetchStories();
  }, [urlJson, setStories]);

  return stories;
}
