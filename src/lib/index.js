import { useEffect, useState } from "react";

import person1Image from "assets/person_1.png";
import person2Image from "assets/person_2.png";
import person3Image from "assets/person_3.png";
import tile1Image from "assets/tile-1@1x-100.png";
import tile2Image from "assets/tile-2@1x-100.png";
import tile3Image from "assets/tile-3@1x-100.png";
import tile5Image from "assets/tile-5@1x-100.png";

export function getProfiles() {
  return [
    {
      id: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: person2Image,
      },
      name: "Wandia Njoya",
      title: "Daystar University",
    },
    {
      id: 2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: person3Image,
      },
      name: "Wandia Njoya",
      title: "Daystar University",
    },
    {
      id: 3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: person1Image,
      },
      name: "Wandia Njoya",
      title: "Daystar University",
    },
    {
      id: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: person2Image,
      },
      name: "Wandia Njoya",
      title: "Daystar University",
    },
    {
      id: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: person3Image,
      },
      name: "Wandia Njoya",
      title: "Daystar University",
    },
    {
      id: 6,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: person1Image,
      },
      name: "Wandia Njoya",
      title: "Daystar University",
    },
    {
      id: 7,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: person2Image,
      },
      name: "Wandia Njoya",
      title: "Daystar University",
    },
    {
      id: 8,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: person3Image,
      },
      name: "Wandia Njoya",
      title: "Daystar University",
    },
  ];
}

export function getFilterData() {
  return [
    {
      id: 1,
      topic: "Lorem",
      slug: 'lorem'
    },
    {
      id: 2,
      topic: "Ipsum",
      slug: 'ipsum'
    },
    {
      id: 3,
      topic: "Dolor",
      slug: 'dolor'
    },
    {
      id: 4,
      topic: "Sit",
      slug: 'sit'
    },
    {
      id: 5,
      topic: "Amet",
      slug: 'amet'
    },
    {
      id: 6,
      topic: "Sed",
      slug: 'sed'
    }
  ];
}

export function getStories() {
  return [
    {
      id: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: tile2Image,
      },
      link: {
        url: "#",
        title: "Learn More",
      },
      title: "A new drug",
    },
    {
      id: 2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: tile3Image,
      },
      link: {
        url: "#",
        title: "Learn More",
      },
      title: "Keep healthy",
    },
    {
      id: 3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: tile1Image,
      },
      link: {
        url: "#",
        title: "Learn More",
      },
      title: "Coronavirus updates",
    },
    {
      id: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: {
        url: tile5Image,
      },
      link: {
        url: "#",
        title: "Learn More",
      },
      title: "A new drug",
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
