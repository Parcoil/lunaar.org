import "/js/games.js";

document.addEventListener("DOMContentLoaded", function () {
  // Store the original title and favicon
  var originalTitle = document.title;
  var favicon = document.getElementById("favicon").href;

  // Check local storage for toggle state
  var switchState = localStorage.getItem("toggleSwitchState");
  if (switchState === "enabled") {
    document.getElementById("clickoffcloak").checked = true;
    addTabEventListener();
  }

  // Add event listener to toggle switch
  document
    .getElementById("clickoffcloak")
    .addEventListener("change", function () {
      var isChecked = this.checked;
      if (isChecked) {
        localStorage.setItem("toggleSwitchState", "enabled");
        addTabEventListener();
      } else {
        localStorage.setItem("toggleSwitchState", "disabled");
        removeTabEventListener();
      }
    });

  // Function to change tab name and icon
  function changeTabNameAndIcon(enabled) {
    var tabTitle = enabled ? "Inbox (162) - Gmail" : originalTitle;
    var tabIcon = enabled ? "media/cloaks/Gmail.ico" : favicon;
    document.title = tabTitle;
    document.getElementById("favicon").href = tabIcon;
  }

  // Add event listener to update tab name and icon when leaving the page
  function addTabEventListener() {
    window.addEventListener("blur", function (event) {
      var switchState = localStorage.getItem("toggleSwitchState");
      if (switchState === "enabled") {
        changeTabNameAndIcon(true);
      }
    });

    window.addEventListener("focus", function (event) {
      var switchState = localStorage.getItem("toggleSwitchState");
      if (switchState === "enabled") {
        changeTabNameAndIcon(false); // Revert to original name and icon
      }
    });
  }

  // Remove event listener for tab name and icon change
  function removeTabEventListener() {
    window.removeEventListener("blur");
    window.removeEventListener("focus");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const themeSelector = document.getElementById("theme-selector");

  // Function to change the theme
  function setTheme(themeName) {
    document.body.setAttribute("theme", themeName);
    localStorage.setItem("selectedTheme", themeName); // Store theme in localStorage
  }

  // Check for a previously selected theme in localStorage
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme) {
    setTheme(savedTheme);
    themeSelector.value = savedTheme; // Set dropdown value
  }

  // Event listener to switch themes
  themeSelector.addEventListener("change", function () {
    setTheme(themeSelector.value);
  });
});

fetch("../package.json")
  .then((response) => response.json())
  .then((data) => {
    const versionEl = document.getElementById("version");
    if (versionEl) {
      versionEl.textContent = data.version;
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  var headElement = document.querySelector("head");

  var htmlToInject = ` 

    `;

  headElement.insertAdjacentHTML("beforeend", htmlToInject);
});

document.addEventListener("DOMContentLoaded", function () {
  // Check the number of existing navbars
  var existingNavs = document.querySelectorAll(".navbar");

  if (existingNavs.length === 0) {
    // Fetch the content of navbar.html
    fetch("/./navbar.html")
      .then((response) => response.text())
      .then((navHTML) => {
        // Insert the fetched HTML into the body element
        var bodyElement = document.querySelector("body");
        bodyElement.insertAdjacentHTML("afterbegin", navHTML);
      })
      .catch((error) => {
        console.error("Error fetching navbar.html:", error);
      });
  }
});

var textOptions = [
  "Homework whats that",
  "Rip 3kh0!",
  "Now with a PR00000000000xy! ",
  "The site to cure Total boredness ",
  "A LOT OF GAMES!",
  "shit",
  "What is Google Sites?",
  "No",
  "Yes",
  "insert text here",
  "Unblocked!",
  "Welcome To The New New Native!",
  "Did you know we are open source? Fork US!",
  "https://discord.gg/Pprt5zjv9h",
  "Snappier is bad at american truck simulator",
  "Gas Gas Gas",
  "Daniel gets no girls",
  "Pineapple Cow",
  "chromebooks suck",
  "Lorem ipsum",
  "technoblade never dies",
  "about:blank on top",
  "Doge does not understand why this does not white",
  "cats are better",
  "thx sandwich",
  "Yup this is Julian.",
  "better than interstellar",
  "NodeJS on top!",
  "Aiden Has a foot fetish",
  "Or what!",
  "Geeeeeeeeeeeeeetar!!!!!!",
  "Powerade Sucks!",
  "Do not insert text here",
  "Doge Loves Metallica",
  "Oh yeah or whatever",
];

// Function to generate random index
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// Function to update the text
function updateText() {
  var randomIndex = getRandomIndex(textOptions.length);
  var randomText = textOptions[randomIndex];
  document.getElementById("randomText").textContent = randomText;
}

// Call the function when the page loads
window.onload = updateText;

// Tab Cloak

const originalTitle = "Native";
const favicon = document.querySelector("#favicon").getAttribute("href");

function changeTabCloak(title, favicon) {
  document.title = title;
  document.querySelector("#favicon").setAttribute("href", favicon);
}

function applyPreset() {
  const dropdown = document.getElementById("presetDropdown");
  const selectedPreset = dropdown.value;

  switch (selectedPreset) {
    case "default":
      changeTabCloak(originalTitle, favicon);
      break;
    case "preset1":
      changeTabCloak("Preset 1 Title", "./media/cloaks/GoogleDrive.ico");
      break;
    case "preset2":
      changeTabCloak("Preset 2 Title", "./media/cloaks/preset2-favicon.png");
      break;
    case "preset3":
      changeTabCloak("Preset 3 Title", "./media/cloaks/Calendar.ico");
      break;
    default:
      break;
  }
}

function updateCustomTitle() {
  const customTitle = document.getElementById("customTitle").value;
  changeTabCloak(
    customTitle,
    document.querySelector("#favicon").getAttribute("href")
  );
}

function updateCustomFavicon() {
  const customFavicon = document.getElementById("customFavicon").value;
  changeTabCloak(document.title, customFavicon);
}

window.addEventListener("beforeunload", function () {
  sessionStorage.setItem("savedTitle", document.title);
  sessionStorage.setItem(
    "savedFavicon",
    document.querySelector("#favicon").getAttribute("href")
  );
});

window.addEventListener("load", function () {
  const savedTitle = sessionStorage.getItem("savedTitle");
  const savedFavicon = sessionStorage.getItem("savedFavicon");

  if (savedTitle && savedFavicon) {
    changeTabCloak(savedTitle, savedFavicon);
  }
});

function showCustomMenu(x, y) {
  var menu = document.getElementById("customMenu");

  // Calculate maximum bounds
  var maxX = window.innerWidth - menu.offsetWidth;
  var maxY = window.innerHeight - menu.offsetHeight;

  // Adjust position to stay within bounds
  var adjustedX = Math.min(x, maxX);
  var adjustedY = Math.min(y, maxY);

  menu.style.left = adjustedX + "px";
  menu.style.top = adjustedY + "px";
  menu.style.display = "block";

  // Close the menu when clicking outside of it
  document.addEventListener("click", function closeMenu(event) {
    if (!event.target.closest(".custom-menu")) {
      hideCustomMenu();
      document.removeEventListener("click", closeMenu);
    }
  });
}

function hideCustomMenu() {
  var menu = document.getElementById("customMenu");
  menu.style.display = "none";
}

function customAction(action) {
  alert("Selected: " + action);
  hideCustomMenu();
}

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  showCustomMenu(event.clientX, event.clientY);
});

window.addEventListener("load", function () {
  const savedTitle = sessionStorage.getItem("savedTitle");
  const savedFavicon = sessionStorage.getItem("savedFavicon");

  if (savedTitle && savedFavicon) {
    changeTabCloak(savedTitle, savedFavicon);
  }
});
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
// console.clear();

var asciiv4 = `

███╗   ██╗ █████╗ ████████╗██╗██╗   ██╗███████╗    ██╗   ██╗██╗  ██╗
████╗  ██║██╔══██╗╚══██╔══╝██║██║   ██║██╔════╝    ██║   ██║██║  ██║
██╔██╗ ██║███████║   ██║   ██║██║   ██║█████╗      ██║   ██║███████║
██║╚██╗██║██╔══██║   ██║   ██║╚██╗ ██╔╝██╔══╝      ╚██╗ ██╔╝╚════██║
██║ ╚████║██║  ██║   ██║   ██║ ╚████╔╝ ███████╗     ╚████╔╝      ██║
╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═══╝  ╚══════╝      ╚═══╝       ╚═╝
                                                                    
                                                                

                                                  

`;
console.log(asciiv4);

var asciiv3 = `                                  
                                  
       ++++++++++                 
      ++#++++++##++               
     +##++     ++#++              
    ++##+       +##+              
    +###+       +##++             
    +###+       +###+             
    +###+       +###+   +++++     
    +###+       +###+   ++##+     
    +++++       +++++    ++++     
                                  `;
console.log(asciiv3);
