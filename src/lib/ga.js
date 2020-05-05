export const GA_TRACKING_ID = "UA-92541368-6";

// https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
export const pageview = (url) => {
  window.ga("send", "pageview", url);
};
