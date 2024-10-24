console.log("[Lunaar]", "themes.js");

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

const isHalloween = new Date().getMonth() === 9 && new Date().getDate() === 31;

if (isHalloween && currentTheme !== "orange") {
  setTheme("orange");
  window.location.reload();
} else {
  console.log("[Lunaar]", "It's not Halloween or the theme is already orange.");
}
