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
