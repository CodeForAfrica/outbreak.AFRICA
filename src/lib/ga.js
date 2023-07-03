export const GA_TRACKING_ID = process.env.GA_TRACKING_ID || "G-12X35Z55SN";

// https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
export const pageview = (url) => {
  window.ga("send", "pageview", url);
};
