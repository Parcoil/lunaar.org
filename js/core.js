// Hey skid or contributor.
// this is The core script that sets the theme, favicon, tabcloak etc

var googleAnaIn = document.createElement("script");
googleAnaIn.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-W8NZMM8WN9');
`;
document.body.appendChild(googleAnaIn);

window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  return (event.returnValue = "");
});

var googleAna = document.createElement("script");
googleAna.async = true;
googleAna.src = "https://www.googletagmanager.com/gtag/js?id=G-W8NZMM8WN9";
document.body.appendChild(googleAna);


var googleAds = document.createElement("script");
googleAds.async = true;
googleAds.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1565760898646999";
document.body.appendChild(googleAds);

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
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};