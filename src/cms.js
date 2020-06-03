import config from "config";

export async function getSiteOptions(lang) {
  const res = await fetch(
    `${config.WP_BACKEND_URL}/wp-json/acf/v3/options/hurumap-site?lang=${lang}`
  );
  const data = res.ok ? await res.json() : {};

  return data.acf;
}

export async function getPostBySlug(type, slug, lang) {
  const res = await fetch(
    `${config.WP_BACKEND_URL}/wp-json/wp/v2/${type}?slug=${slug}&lang=${lang}`
  );
  const data = res.ok ? await res.json() : {};

  return data;
}

export async function getPostById(type, id, lang) {
  const res = await fetch(
    `${config.WP_BACKEND_URL}/wp-json/wp/v2/${type}/${id}?lang=${lang}`
  );
  return res.ok ? res.json() : null;
}

export async function getPostByParentId(type, parent, lang) {
  const res = await fetch(
    `${config.WP_BACKEND_URL}/wp-json/wp/v2/${type}?parent=${parent}&lang=${lang}`
  );
  return res.ok ? res.json() : null;
}

export async function getSitePage(slug, lang) {
  const pages = await getPostBySlug("pages", slug, lang);
  const page = pages.length ? pages[0] : {};
  const options = await getSiteOptions(lang);
  Object.assign(
    config.page,
    page,
    options,
    { rendered: page.content.rendered },
    page.acf
  );
  config.language = lang;

  return config;
}

export async function getSitePageWithChildren(slug, lang) {
  const site = await getSitePage(slug, lang);
  if (site.page && site.page.id) {
    site.page.children = await getPostByParentId("pages", config.page.id, lang);
  }
  return site;
}

export async function getSectionedCharts(lang) {
  const res = await fetch(
    `${config.WP_BACKEND_URL}/wp-json/hurumap-data/charts?sectioned=1&type=hurumap&lang=${lang}`
  );
  return res.ok ? res.json() : null;
}

export async function getChartDefinition(chartId, lang) {
  const res = await fetch(
    `${config.WP_BACKEND_URL}/wp-json/hurumap-data/charts/${chartId}?lang=${lang}`
  );
  return res.ok ? res.json() : null;
}
