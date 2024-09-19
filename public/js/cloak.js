const logo = "\x1b[91m[Parcoil Cloak]\x1b[0m";

const cloak = {
  getFavicon() {
    const icons = document.querySelectorAll('link[rel="icon"]');
    return icons.length > 0 ? icons[0].href : null;
  },
  setFavicon(url) {
    const icons = document.querySelectorAll('link[rel="icon"]');
    icons.forEach((icon) => (icon.href = url));
  },
  getTitle() {
    return document.title;
  },
  setTitle(newTitle) {
    document.title = newTitle;
  },
  setCloak(newTitle, url) {
    document.title = newTitle;
    const icons = document.querySelectorAll('link[rel="icon"]');
    icons.forEach((icon) => (icon.href = url));
    localStorage.setItem("cloakTitle", newTitle);
    localStorage.setItem("cloakFavicon", url);
  },
  init() {
    let cloakTitle = localStorage.getItem("cloakTitle");
    let cloakFavicon = localStorage.getItem("cloakFavicon");

    if (!cloakTitle || !cloakFavicon) {
      console.log(logo, "Initializing cloak settings...");
      const newTitle = this.getTitle();
      const newFavicon = this.getFavicon();
      if (!cloakTitle) {
        localStorage.setItem("cloakTitle", newTitle);
      }
      if (!cloakFavicon && newFavicon) {
        localStorage.setItem("cloakFavicon", newFavicon);
      }
      cloakTitle = localStorage.getItem("cloakTitle");
      cloakFavicon = localStorage.getItem("cloakFavicon");
    }

    // console.log(logo, `Title: ${cloakTitle} Favicon URL: ${cloakFavicon}`);
  },
};

document.addEventListener("DOMContentLoaded", () => {
  let savedTitle = localStorage.getItem("cloakTitle");
  let savedFavicon = localStorage.getItem("cloakFavicon");

  cloak.setFavicon(savedFavicon);
  cloak.setTitle(savedTitle);

  const cloakSelect = document.getElementById("cloakSelect");

  if (cloakSelect) {
    cloakSelect.addEventListener("change", () => {
      const selectedCloakName = cloakSelect.value;
      const selectedCloak = cloaks.find(
        (cloak) => cloak.name === selectedCloakName
      );

      if (selectedCloak) {
        cloak.setCloak(selectedCloak.title, selectedCloak.icon);
        console.log(`Selected cloak title: ${selectedCloak.title}`);
      } else {
        console.error(
          `Cloak '${selectedCloakName}' not found in cloaks array.`
        );
      }
    });
  }
});

// this initialize cloak settings
cloak.init();


