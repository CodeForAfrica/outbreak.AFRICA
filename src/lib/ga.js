export const GA_TRACKING_ID = process.env.GA_TRACKING_ID || "G-12X35Z55SN";

// https://developers.google.com/analytics/devguides/collection/ga4/views?client_type=gtag
export const pageview = (url) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, { page_path: url });
  }
};
