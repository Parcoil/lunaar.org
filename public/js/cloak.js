const originalTitle = document.title;
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
      changeTabCloak("Google Drive", "/media/cloaks/GoogleDrive.ico");
      break;
    case "preset2":
      changeTabCloak("Inbox (162) - Gmail ", "/media/cloaks/Gmail.ico");
      break;
    case "preset3":
      changeTabCloak("Preset 3 Title", "preset3-favicon.png");
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
