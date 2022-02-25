import Papa from "papaparse";
import { useEffect, useState } from "react";

import config from "@/outbreakafrica/config";

export async function getCountryStats() {
  return Promise.all(
    config.countries.map((country) =>
      fetch(`${config.COUNTRY_STATS_URL}?countryTotal=${country.isoCode}`).then(
        (res) => res.json()
      )
    )
  );
}

function fileNameFromDate(date) {
  const dateGroups = date.toISOString().split("T")[0].split("-");
  return `${dateGroups[1]}-${dateGroups[2]}-${dateGroups[0]}.csv`;
}

export async function getOutbreakStatus() {
  const date = new Date();
  const timestamp = date.getTime();
  const { countries, lastUpdated, url, values } = config.status;
  if (lastUpdated && timestamp - lastUpdated < 30 * 60 * 1000) {
    return { values };
  }

  let fileName = fileNameFromDate(date);
  let csv;
  try {
    let fetchUrl = `${url}/${fileName}`;
    let response = await fetch(fetchUrl);
    if (response.status === 404) {
      // Use the previous day's data if today's data hasn't been published yet
      // Don't update timestamp since we don't want to hit the endpoint
      // for the next half half hour regardless of which data file we use
      date.setDate(date.getDate() - 1);
      fileName = fileNameFromDate(date);
      fetchUrl = `${url}/${fileName}`;
      response = await fetch(fetchUrl);
    }
    if (response.status !== 200) {
      return null;
    }
    csv = await response.text();
  } catch (error) {
    return null;
  }

  const output = Papa.parse(csv, { header: true });
  if (output.data) {
    const countriesOfInterest = new Set(countries);
    const { data: rawData } = output;
    const reducer = (acc, curr) => {
      if (countriesOfInterest.has(curr.Country_Region)) {
        acc.confirmed += Number.parseInt(curr.Confirmed, 10);
        acc.deaths += Number.parseInt(curr.Deaths, 10);
        acc.recovered += Number.parseInt(curr.Recovered, 10);
        acc.active += Number.parseInt(curr.Active, 10);
      }
      return acc;
    };
    const acc = { confirmed: 0, deaths: 0, recovered: 0, active: 0 };
    rawData.reduce(reducer, acc);
    config.status.values = acc;
    config.status.lastUpdated = timestamp;
    return config.status;
  }
  return null;
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
      const jsonClean = await (
        await response.text()
      ).replace("])}while(1);</x>", "");
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
