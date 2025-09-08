"use strict";
const sjStockSW = "./sw.js";

/**
 * List of hostnames that are allowed to run serviceworkers on http://
 */
const sjswAllowedHostnames = ["localhost", "127.0.0.1"];

/**
 * Global util
 * Used in 404.html and index.html
 */
async function registerSJSW() {
  if (!navigator.serviceWorker) {
    if (
      location.protocol !== "https:" &&
      !sjswAllowedHostnames.includes(location.hostname)
    )
      throw new Error("Service workers cannot be registered without https.");

    throw new Error("Your browser doesn't support service workers.");
  }

  await navigator.serviceWorker.register(sjStockSW, { scope: "/" });
}
