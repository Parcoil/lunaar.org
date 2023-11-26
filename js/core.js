// Hey skid or contributor.
// this is The core script that sets the theme, favicon, tabcloak etc

// Collect Tab Cloak data from local storage
 var tab = localStorage.getItem('tab');
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
 document.addEventListener('DOMContentLoaded', function () {
    const themeSelect = document.getElementById('themeSelect');
  
    // Check the saved theme from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      applyTheme(savedTheme);
      themeSelect.value = savedTheme;
    }
  
    // Apply selected theme
    themeSelect.addEventListener('change', function () {
      const selectedTheme = themeSelect.value;
      applyTheme(selectedTheme);
      localStorage.setItem('theme', selectedTheme);
    });
  
    function applyTheme(theme) {
      document.body.className = ''; // Reset body classes
      if (theme !== 'default') {
        document.body.classList.add(theme);
      }
    }
  });