console.log("themes.js");

const currentTheme = localStorage.getItem("theme");

function getSavedTheme() {
  document.body.setAttribute("theme", currentTheme);
}
getSavedTheme();

function setTheme(theme) {
  document.body.setAttribute("theme", theme);
  localStorage.setItem("theme", theme);
}

const isOctober = new Date().getMonth() === 9;

if (isOctober && currentTheme !== "orange") {
  setTheme("orange");
  window.location.reload();
} else {
  console.log("It's not October or the theme is already orange.");
}
