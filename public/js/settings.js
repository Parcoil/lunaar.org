// // Check if there is a saved tab data in localStorage
// var tab = localStorage.getItem("tab");

// if (tab) {
//   // If there is saved data, try to parse it
//   try {
//     var tabData = JSON.parse(tab);
//   } catch {
//     // If there is an error in parsing, create an empty object
//     var tabData = {};
//   }
// } else {
//   // If there is no saved data, create an empty object
//   var tabData = {};
// }

// // Set the title and icon fields to the values saved in tabData, if they exist
// if (tabData.title) {
//   document.getElementById("title").value = tabData.title;
// }

// if (tabData.icon == null) {
//   document.getElementById("icon").value = tabData.icon;
// }

// // Default tab settings
// var settingsDefaultTab = {
//   title: "Settings | Native",
//   icon: "/media/logo.png",
// };

// // Function to set the document title
// function setTitle(title = "") {
//   if (title) {
//     document.title = title;
//   } else {
//     document.title = settingsDefaultTab.title;
//   }

//   // Update the saved tab data with the new title
//   var tab = localStorage.getItem("tab");

//   if (tab) {
//     // If there is saved data, try to parse it
//     try {
//       var tabData = JSON.parse(tab);
//     } catch {
//       // If there is an error in parsing, create an empty object
//       var tabData = {};
//     }
//   } else {
//     // If there is no saved data, create an empty object
//     var tabData = {};
//   }

//   if (title) {
//     // If there is a new title, update tabData
//     tabData.title = title;
//   } else {
//     // If the title is empty, delete the title field from tabData
//     delete tabData.title;
//   }

//   // Save the updated tab data to localStorage
//   localStorage.setItem("tab", JSON.stringify(tabData));
// }

// // Function to set the favicon
// function setFavicon(icon) {
//   if (icon) {
//     document.querySelector("link[rel='icon']").href = icon;
//   } else {
//     document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
//   }

//   // Update the saved tab data with the new icon
//   var tab = localStorage.getItem("tab");

//   if (tab) {
//     // If there is saved data, try to parse it
//     try {
//       var tabData = JSON.parse(tab);
//     } catch {
//       // If there is an error in parsing, create an empty object
//       var tabData = {};
//     }
//   } else {
//     // If there is no saved data, create an empty object
//     var tabData = {};
//   }

//   if (icon) {
//     // If there is a new icon, update tabData
//     tabData.icon = icon;
//   } else {
//     // If the icon is empty, delete the icon field from tabData
//     delete tabData.icon;
//   }

//   // Save the updated tab data to localStorage
//   localStorage.setItem("tab", JSON.stringify(tabData));
// }

// function setCloak() {
//   // applies only to premade cloaks
//   var cloak = document.getElementById("premadecloaks").value; // cloak seems kind of weird when you spell it out
//   switch (cloak) {
//     case "search": // Google Search
//       setTitle("Google");
//       setFavicon("/media/cloaks/Google Search.ico");
//       location.reload();
//       break;
//     case "itchio": // itch.io
//       setTitle("Top free NSFW games for web");
//       setFavicon("/media/cloaks/D23D344B-4CB0-4799-B525-F4E4F3A36728.ico");
//       location.reload();
//       break;
//     case "wikipedia": // wikipedia
//       setTitle("ويكيبيديا - جهاد");
//       setFavicon("https://ar.wikipedia.org/favicon.ico");
//       location.reload();
//       break;
//     case "bsite": // billibilli
//       setTitle("Billibilli");
//       setFavicon("https://www.bilibili.com/favicon.ico");
//       location.reload();
//       break;
//     case "drive": // Google Drive
//       setTitle("My Drive - Google Drive");
//       setFavicon("/media/cloaks/GoogleDrive.ico");
//       location.reload();
//       break;
//     case "librex": // LibreX
//       setTitle("LibreX");
//       setFavicon("/media/cloaks/9A58D8BC-6595-476A-AD95-B6D8880683C8.ico");
//       location.reload();
//       break;
//     case "youtube": // YouTube
//       setTitle("YouTube");
//       setFavicon("/media/cloaks/YouTube.ico");
//       location.reload();
//       break;
//     case "gmail": // Gmail
//       setTitle("Gmail");
//       setFavicon("/media/cloaks/Gmail.ico");
//       location.reload();
//       break;
//     case "calendar": // Google Calendar
//       setTitle("Google Calendar");
//       setFavicon("/media/cloaks/Calendar.ico");
//       location.reload();
//       break;
//     case "meets": // Google Meet
//       setTitle("Google Meet");
//       setFavicon("/media/cloaks/Meet.ico");
//       location.reload();
//       break;
//     case "classroom": // Google Classroom
//       setTitle("Classes");
//       setFavicon("./media/cloaks/Classroom.png");
//       location.reload();
//       break;
//     case "canvas": // Canvas
//       setTitle("Canvas");
//       setFavicon("/media/cloaks/Canvas.ico");
//       location.reload();
//       break;
//     case "zoom": // Zoom
//       setTitle("Zoom");
//       setFavicon("/media/cloaks/Zoom.ico");
//       location.reload();
//       break;
//     case "nitter": // Nitter
//       setTitle("nitter");
//       setFavicon("/media/cloaks/63DFB320-0EEC-4F06-AF02-C50DFD2B49AB.ico");
//       location.reload();
//       break;
//     case "teddit": // Teddit
//       setTitle("teddit");
//       setFavicon("/media/cloaks/EB4D8FE9-10E9-44B8-A6CE-3F9A0040F94A.ico");
//       location.reload();
//       break;
//     case "cornhub": // Cornhub
//       setTitle("Cornhub");
//       setFavicon("/media/cloaks/8FE4C273-914D-431D-907E-3FCF5BB0399F.ico");
//       location.reload();
//       break;
//     case "indivious": // Indivious
//       setTitle("Indivious");
//       setFavicon("/media/cloaks/2255E848-AB69-43C1-B470-DBFDA40FAD10.ico");
//       location.reload();
//       break;
//     case "khan": // Khan Academy
//       setTitle("Dashboard | Khan Academy");
//       setFavicon("./media/cloaks/Khan Academy.ico");
//       location.reload();
//       break;
//   }
// }

// // Function to reset the tab settings to default
// function resetTab() {
//   document.title = settingsDefaultTab.title;
//   document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
//   document.getElementById("title").value = "";
//   document.getElementById("icon").value = "";
//   localStorage.setItem("tab", JSON.stringify({}));
// }

// // Restore checkbox states from localStorage
// document.addEventListener("DOMContentLoaded", () => {
//   const checkboxes = document.querySelectorAll(".checkbox");
//   checkboxes.forEach((checkbox) => {
//     const id = checkbox.id;
//     if (localStorage.getItem(id)) {
//       checkbox.checked = true;
//     }
//   });
//   toggleParticlesJs();
// });

// // Event listener for checkboxes
// const checkboxes = document.querySelectorAll(".checkbox");
// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener("change", (event) => {
//     const target = event.target;
//     const id = target.id;
//     localStorage.setItem(id, target.checked);
//     if (id === "particlesswitch") {
//       toggleParticlesJs();
//     }
//   });
// });

// // Toggle the visibility of the particles-js div
// function toggleParticlesJs() {
//   const particlesswitch = document.getElementById("particlesswitch");
//   const particlesJs = document.getElementById("particles-js");
//   if (particlesswitch.checked) {
//     particlesJs.classList.add("hidden");
//   } else {
//     particlesJs.classList.remove("hidden");
//   }
// }
