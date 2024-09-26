const llogo = "[Native]";

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

loadScript("/./js/themes.js", true);
loadScript("/./js/particles.js", true);
loadCSS("/./css/themes.css");

console.log("preload.js");

const hasVisited = localStorage.getItem("hasVisited");
if (!hasVisited) {
  localStorage.setItem("stars", true);
  localStorage.setItem("hasVisited", true);
  localStorage.setItem("theme", "main");
  localStorage.setItem("se", "google");
  localStorage.setItem("cloakFavicon", "./media/cloaks/classroom.png");
  localStorage.setItem("cloakTitle", "Home");
  console.log("FIRST VISIT");
}

const stars = localStorage.getItem("stars");

if (stars === "true") {
  const particles = document.createElement("div");
  particles.id = "particles-js";
  document.body.appendChild(particles);
  console.log(llogo, "loaded ");
} else {
  console.log("ADSDSDSKLDSJD");
}
