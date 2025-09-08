"use strict";
/**
 * @type {HTMLFormElement}
 */
const sjform = document.getElementById("sj-form");
/**
 * @type {HTMLInputElement}
 */
const sjaddress = document.getElementById("sj-address");
/**
 * @type {HTMLInputElement}
 */
const sjsearchEngine = document.getElementById("sj-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const sjerror = document.getElementById("sj-error");
/**
 * @type {HTMLPreElement}
 */
const sjerrorCode = document.getElementById("sj-error-code");

const { ScramjetController } = $scramjetLoadController();

const scramjet = new ScramjetController({
  files: {
    wasm: "/scram/scramjet.wasm.wasm",
    all: "/scram/scramjet.all.js",
    sync: "/scram/scramjet.sync.js",
  },
});

scramjet.init();

window.scramjet = scramjet;

document.addEventListener("DOMContentLoaded", () => {
  const sjconnection = new BareMux.BareMuxConnection("/baremux/worker.js");
  registerSJSW();

  sjform.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      await registerSJSW();
    } catch (err) {
      sjerror.textContent = "Failed to register service worker.";
      sjerrorCode.textContent = err.toString();
      throw err;
    }

    const url = search(sjaddress.value, sjsearchEngine.value);

    let frame = document.getElementById("sj-frame");
    frame.style.display = "block";
    let wispUrl =
      (location.protocol === "https:" ? "wss" : "ws") +
      "://" +
      location.host +
      "/wisp/";
    if ((await sjconnection.getTransport()) !== "/epoxy/index.mjs") {
      await sjconnection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
    }
    const sjEncode = scramjet.encodeUrl.bind(scramjet);
    frame.src = sjEncode(url);
  });
});

const sjEncode = scramjet.encodeUrl.bind(scramjet);

function getSearchEngine() {
  const searchEngine = localStorage.getItem("se") || "ddg";
  let baseUrl;
  switch (searchEngine) {
    case "google":
      baseUrl = `https://www.google.com/search?q=%s`;
      break;
    case "bing":
      baseUrl = `https://www.bing.com/search?q=%s`;
      break;
    case "ddg":
      baseUrl = `https://duckduckgo.com/?q=%s`;
      break;
    case "yahoo":
      baseUrl = `https://search.yahoo.com/search?p=%s`;
      break;
    case "brave":
      baseUrl = `https://search.brave.com/search?q=%s`;
      break;
    case "startpage":
      baseUrl = `https://www.startpage.com/sp/search?query=%s`;
      break;
    default:
      baseUrl = `https://duckduckgo.com/?q=%s`;
  }
  return baseUrl;
}

function sjEncodeAndGo(url) {
  let finalurl;
  finalurl = search(url, getSearchEngine());
  return sjEncode(finalurl);
}

window.sjEncode = sjEncode;
window.sjEncodeAndGo = sjEncodeAndGo;
