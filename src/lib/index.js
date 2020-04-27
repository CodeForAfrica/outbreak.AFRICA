import { useEffect, useState } from "react";

import personImage from "assets/person_3.png";

export function getProfiles() {
  return [
    {
      id: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: personImage,
      },
      name: "Firstname1 Lastname1",
      title: "Credible Institute",
    },
    {
      id: 2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: personImage,
      },
      name: "Firstname2 Lastname2",
      title: "Credible Institute",
    },
    {
      id: 3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: personImage,
      },
      name: "Firstname3 Lastname3",
      title: "Credible Institute",
    },
    {
      id: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: personImage,
      },
      name: "Firstname4 Lastname4",
      title: "Credible Institute",
    },
    {
      id: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: personImage,
      },
      name: "Firstname5 Lastname5",
      title: "Credible Institute",
    },
    {
      id: 6,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: personImage,
      },
      name: "Firstname6 Lastname6",
      title: "Credible Institute",
    },
  ];
}

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
