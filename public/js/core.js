// Hey skid or contributor.
// this is The core script that sets the theme, favicon, tabcloak etc

document.addEventListener('DOMContentLoaded', function() {
  var navHTML = `
  <nav class="navbar">
    <h1 class="navtext">native.</h1>
    <li><a href="./" class="navlink">Home</a></li>
    <li><a href="projects">Games</a></li>
    <li><a href="bookmarklets">Bookmarklets</a></li>
    <li><a href="apps">Apps</a></li>
    <li><a href="search">Search</a></li>
    <li><a href="#" onclick="createBlank();">about:blank</a></li>
    <li><a href="settings">Settings</a></li>
    <li><a href="other/">More</a></li>
  </nav>
  `;

  var bodyElement = document.querySelector('body');
  bodyElement.insertAdjacentHTML('afterbegin', navHTML);
});


var googleAnaIn = document.createElement("script");
googleAnaIn.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-W8NZMM8WN9');
`;
document.body.appendChild(googleAnaIn);



// Fetch the JSON configuration from the URL
fetch("https://gist.githubusercontent.com/3kh0/6dd52e0bc4cf407769e89ea2d5957d49/raw/config.json?time=" + Date.now())
  .then((response) => response.json())
  .then((config) => {
    // Use the obtained values to set the id attributes
    var googleAna = document.createElement("script");
    googleAna.async = true;
    googleAna.src = "https://www.googletagmanager.com/gtag/js?id=" + config.googleAna;
    document.body.appendChild(googleAna);

    var googleAds = document.createElement("script");
    googleAds.async = true;
    googleAds.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + config.adsenseID;
    document.body.appendChild(googleAds);
  });

var rocket = document.createElement("script");
rocket.async = true;
rocket.src = "/js/rocket-loader.min.js";
document.body.appendChild(rocket);

// Collect Tab Cloak data from local storage
var tab = localStorage.getItem("tab");
if (tab) {
  try {
    // Parse the data, it is in JSON
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

// Set the Tab title if the Tab cloak data is there
if (tabData.title) {
  document.title = tabData.title;
}

// Set the Tab icon if the Tab cloak data is there
if (tabData.icon) {
  document.querySelector('link[rel="icon"]').href = tabData.icon;
}
document.addEventListener("DOMContentLoaded", function () {
  const themeSelect = document.getElementById("themeSelect");

  // Check the saved theme from local storage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
    themeSelect.value = savedTheme;
  }

  // Apply selected theme
  themeSelect.addEventListener("change", function () {
    const selectedTheme = themeSelect.value;
    applyTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  });

  function applyTheme(theme) {
    document.body.className = ""; // Reset body classes
    if (theme !== "default") {
      document.body.classList.add(theme);
    }
  }
});
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}





function createBlank() {
  win = window.open();
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";
  var iframe = win.document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.margin = "0";
  iframe.referrerpolicy = "no-referrer";
  iframe.allow = "fullscreen";
  iframe.src = location.origin;
  win.document.body.appendChild(iframe);
  window.location.href = "https://www.google.com/search?q=what+day+is+today";
}
setTimeout(() => {
  console.warn("Thanks for using Native Games.... skid");
}, 3000);

// Check if the page is loaded within an iframe
if (window !== window.top) {
  // Page is in an iframe, find and delete the nav element
  var navElement = document.querySelector('nav.navbar');
  if (navElement) {
    navElement.parentNode.removeChild(navElement);
  }
}
