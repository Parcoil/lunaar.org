console.log("main.js");

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
    console.log("Something bad happened", err);
  }
}

se();

const texts = [
  "Welcome to Native v5!",
  "What's up brother!",
  "Do not insert text here",
  "They not like us",
  "1 + 1 = 11",
  "LUNAARR",
  "insert text here",
  "🧀",
  "🥚",
  "🌙",
  "My CPU is 156 degrees :)",
  "Spicy Nacho Doritos are good",
  "Yo so games are cool",
  "Aiden does questionable things...",
  "Bonelab = Garys mod",
  "Elden Ring on top - wavy ",
  "Insert text here",
  'Join our Discord: <a href="https://dsc.gg/parcoil">https://dsc.gg/parcoil</a>',
  'Join our Discord For <a href="https://dsc.gg/parcoil">Links</a>',
  "Or what!",
  "Ewww Homework whats that",
  "shit",
  "Powerade Sucks!",
  "The site to cure total boardness",
  "Activate Native.",
  'Did you know native used to be a <a href="https://sites.google.com/view/thebestonlinegames/index?authuser=1">google site?</a>',
];

// adds ip to rng text
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
    document.getElementById("rng").innerHTML = getRandomText();
  });

function getRandomText() {
  return texts[Math.floor(Math.random() * texts.length)];
}
