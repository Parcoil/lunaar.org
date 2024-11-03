function loadCSS(href, onload) {
  var link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = href;
  link.crossOrigin = "anonymous";
  link.onload = onload;
  document.head.appendChild(link);
}

function loadScript(src, onload) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.crossOrigin = "anonymous";
  script.onload = onload;
  document.head.appendChild(script);
}

loadScript("/./js/particles.js", true);
loadCSS("/./css/themes.css");

console.log("[Lunaar]", "preload.js");

const hasVisited = localStorage.getItem("hasVisited");
if (!hasVisited) {
  localStorage.setItem("stars", true);
  localStorage.setItem("hasVisited", true);
  localStorage.setItem("theme", "main");
  localStorage.setItem("se", "google");
  localStorage.setItem("cloakFavicon", "./media/cloaks/classroom.png");
  localStorage.setItem("cloakTitle", "Home");
  console.log("[Lunaar]", "FIRST VISIT");
}

if (!localStorage.getItem("panicSite") && !localStorage.getItem("panicKey")) {
  localStorage.setItem("panicSite", "https://www.google.com");
  localStorage.setItem("panicKey", "`");
}

const stars = localStorage.getItem("stars");

if (stars === "true") {
  const particles = document.createElement("div");
  particles.id = "particles-js";
  document.body.appendChild(particles);
  console.log("[Lunaar]", "loaded ");
} else {
  console.log("[Lunaar]", "ADSDSDSKLDSJD");
}
