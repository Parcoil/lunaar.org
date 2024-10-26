"use strict";

const form = document.getElementById("uv-form");
const address = document.getElementById("uv-address");
const searchEngine = document.getElementById("uv-search-engine");
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");

(async () => {
  let connection = new BareMux.BareMuxConnection("/baremux/worker.js");
  let wispUrl =
    (location.protocol === "https:" ? "wss" : "ws") +
    "://" +
    location.host +
    "/wisp/";

  await connection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
})();

try {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      await registerSW();
    } catch (err) {
      error.textContent = "Failed to register service worker.";
      errorCode.textContent = err.toString();
      throw err;
    }

    const url = search(address.value, searchEngine.value);
    sessionStorage.setItem("rawurl", address.value);
    sessionStorage.setItem(
      "lpurl",
      __uv$config.prefix + __uv$config.encodeUrl(url)
    );
    try {
      await registerSW();
      await connection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
    } catch (error) {
      console.error(error);
    }
    window.location = "/go";
  });
} catch (error) {
  console.warn("Failed to Find UV Form.");
}
