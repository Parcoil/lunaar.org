"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

(async () => {
  let connection = new BareMux.BareMuxConnection("/baremux/worker.js");
  let wispUrl =
    (location.protocol === "https:" ? "wss" : "ws") +
    "://" +
    location.host +
    "/wisp/";
  if ((await connection.getTransport()) !== "/epoxy/index.mjs") {
    await connection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
  }
})();

// form.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   try {
//     await registerSW();
//   } catch (err) {
//     error.textContent = "Failed to register service worker.";
//     errorCode.textContent = err.toString();
//     throw err;
//   }

//   const url = search(address.value, searchEngine.value);
//   sessionStorage.setItem("rawurl", address.value);
//   sessionStorage.setItem(
//     "lpurl",
//     __uv$config.prefix + __uv$config.encodeUrl(url)
//   );
//   let frame = document.getElementById("frame");

//   window.location = "/go";
// });
