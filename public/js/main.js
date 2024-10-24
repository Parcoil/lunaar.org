console.log("[Lunaar]", "main.js");

function se() {
  try {
    const searchengine = localStorage.getItem("se");
    const seElement = document.getElementById("uv-search-engine");

    if (searchengine === "google") {
      seElement.value = "https://www.google.com/search?q=%s";
    } else if (searchengine === "bing") {
      seElement.value = "https://www.bing.com/search?q=%s";
    } else if (searchengine === "ddg") {
      seElement.value = "https://duckduckgo.com/?q=%s";
    } else if (searchengine === "brave") {
      seElement.value = "https://search.brave.com/search?q=%s";
    }
  } catch (err) {
    console.log("[Lunaar]", "Something bad happened", err);
  }
}

se();

const texts = [
  "Welcome to Lunaar v5!",
  "Rip Nativegames",
  "What's up brother!",
  "Do not insert text here",
  "They not like us",
  "1 + 1 = 11",
  "Rip Nativegames",
  "LUNAARR",
  "insert text here",
  "🧀",
  "🥚",
  "🌙",
  "My CPU is 156 degrees :)",
  "Spicy Nacho Doritos are good",
  "Yo so games are cool",
  "Aiden does questionable things...",
  "Rip Native",
  "Bonelab = Garys mod",
  "Elden Ring on top - wavy ",
  "Insert text here",
  "Request games in our discord server!",
  "Rip Native",
  'Join our Discord: <a href="https://dsc.gg/parcoil">https://dsc.gg/parcoil</a>',
  'Join our Discord For <a href="https://dsc.gg/parcoil">Links</a>',
  "Or what!",
  "Ewww Homework whats that",
  "shit",
  "Powerade Sucks!",
  "The site to cure total boardness",
  "Activate Lunaar.",
  "Rip Nativegames",
  "Rip Native",
  'Did you know lunaar used to be a <a href="https://sites.google.com/view/thebestonlinegames/index?authuser=1">google site?</a>',
];

fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    const ipText = `${data.ip}`;
    texts.push(ipText);
  })
  .catch((error) => {
    console.error("Error fetching IP:", error);
  })
  .finally(() => {
    try {
      document.getElementById("rng").innerHTML = getRandomText();
    } catch (e) {
      console.warn("[Lunaar]", "Failed to set RNG Text.");
    }
  });

function getRandomText() {
  return texts[Math.floor(Math.random() * texts.length)];
}

if (navigator.userAgent.indexOf("Firefox") > 0) {
  alert("Firefox is not supported. Please use a Chromium-based browser.");
}

const websites = [
  "YouTube",
  "Facebook",
  "Reddit",
  "X",
  "TikTok",
  "Twitch",
  "my lost socks",
  "Wikipedia",
  "Instagram",
  "Wikipedia",
  "Amazon",
];

const siteurl = window.location.hostname;

$(document).ready(function () {
  if (window.location.hostname.includes("nativegames")) {
    $(".sitetext").text("native.");
    console.log("[Lunaar]", "Site: nativegames");
  }
});
const randomWebsite = websites[Math.floor(Math.random() * websites.length)];
const uvaddress = document.getElementById("uv-address");

try {
  uvaddress.placeholder = `Try Searching "${randomWebsite}"`;
} catch (e) {
  console.warn("[Lunaar]", "Failed to set Dynamic placeholder");
}
