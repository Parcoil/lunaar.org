document.addEventListener("DOMContentLoaded", () => {
  const blobsenabled = localStorage.getItem("blobs") || "true";
  const stars = localStorage.getItem("stars") || "true";
  const starselement = document.getElementById("particles-js");
  const blobselement = document.getElementById("blobs");
  fetch("../package.json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("version").textContent = `v${data.version}`;
    });
  document.body.setAttribute(
    "theme",
    localStorage.getItem("theme") || "default"
  );

  if (starselement && stars === "false") {
    starselement.classList.add("hide");
  }

  if (blobselement && blobsenabled === "false") {
    blobselement.classList.add("hide");
  }

  document.addEventListener("keydown", keyCheck);

  function keyCheck(e) {
    const panicKey = localStorage.getItem("panicKey") || "`";
    const panicUrl =
      localStorage.getItem("panicUrl") ||
      "https://www.google.com/search?q=elon+musk";

    if (!panicKey || !panicUrl) return;

    if (e.key === panicKey) {
      window.location.href = panicUrl;
    }
  }

  function fetchSearchEngine() {
    try {
      const searchengine = localStorage.getItem("se");
      const seElement = document.getElementById("proxy-search-engine");
      const searchIcon = document.getElementById("search-icon");
      const address = document.getElementById("proxy-address");
      if (searchengine === "google") {
        seElement.value = "https://www.google.com/search?q=%s";
        searchIcon.src = "/media/cloaks/google.png";
        address.placeholder = "Search the the web with Google";
      } else if (searchengine === "bing") {
        seElement.value = "https://www.bing.com/search?q=%s";
        searchIcon.src = "/media/cloaks/bing.png";
        address.placeholder = "Search the the web with Bing";
      } else if (searchengine === "ddg") {
        seElement.value = "https://duckduckgo.com/?q=%s";
        searchIcon.src = "/media/cloaks/ddg.png";
        address.placeholder = "Search the the web with DuckDuckGo";
      } else if (searchengine === "brave") {
        seElement.value = "https://search.brave.com/search?q=%s";
        searchIcon.src = "/media/cloaks/brave.png";
        address.placeholder = "Search the the web with Brave";
      }
    } catch (err) {
      console.log("[Lunaar]", "Something bad happened", err);
    }
  }

  fetchSearchEngine();
});
