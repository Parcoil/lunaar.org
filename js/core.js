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
  ;
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  sleep(200).then(() => { console.clear(); });
  sleep(201).then(() => { console.log("Hey skid or contributor."); });
  var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = canvas.width; // Number of stars

// Push stars to array

for (var i = 0; i < x; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random(),
    vx: Math.floor(Math.random() * 10) - 5,
    vy: Math.floor(Math.random() * 10) - 5
  });
}

// Draw the scene

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  ctx.globalCompositeOperation = "lighter";
  
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
  
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

// Update star locations

function update() {
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
  
    s.x += s.vx / FPS;
    s.y += s.vy / FPS;
    
    if (s.x < 0 || s.x > canvas.width) s.x = -s.x;
    if (s.y < 0 || s.y > canvas.height) s.y = -s.y;
  }
}

// Update and draw

function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}

tick();
  