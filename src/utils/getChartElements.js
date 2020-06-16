export default function getChartElements(parent, ...types) {
  const node = parent || document;
  const hydrate = {
    charts: () =>
      // eslint-disable-next-line array-callback-return
      Array.from(node.querySelectorAll(`div[id^=indicator-`)).map((el) => {
        const chartId = el.getAttribute("id").split("-");
        const geoId = el.getAttribute("data-geo-id") || "";
        const chartTitle = el.getAttribute("data-title") || "";
        const chartDescription = el.getAttribute("data-description") || "";

        const type = chartId[1];
        const id = chartId[2];
        return {
          element: el,
          id,
          type,
          geoId,
          title: chartTitle,
          description: chartDescription,
        };
      }),
  };
  if (!Array.isArray(types)) {
    return {};
  }
  return Object.assign(
    {},
    ...types.map((t) => ({ [t]: hydrate[t.toLowerCase()]() || [] }))
  );
}
