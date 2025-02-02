document.addEventListener("DOMContentLoaded", function () {
  console.log("[Lunaar]", "themes.js");

  const currentTheme = localStorage.getItem("theme") || "default";
  const getsavedImage = localStorage.getItem("backgroundImage");
  function getSavedTheme() {
    document.body.setAttribute("theme", currentTheme);
    if (getsavedImage) {
      document.body.style.backgroundImage = `url("${getsavedImage}")`;
      console.log("[Lunaar]", "background image set");
    }
  }
  getSavedTheme();

  window.updateParticles = function () {
    const checkTheme = localStorage.getItem("theme");
    switch (checkTheme) {
      case "ssb":
        console.log("[Lunaar]", currentTheme);
        particlesJS("particles-js", {"particles":{"number":{"value":43,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":10,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":6,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}); // prettier-ignore
        break;
      case "grey":
        console.log("[Lunaar]", currentTheme);
        particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}); // prettier-ignore
        break;
      case "audi":
        console.log("[Lunaar]", currentTheme);
        particlesJS("particles-js", {"particles":{"number":{"value":10,"density":{"enable":true,"value_area":800}},"color":{"value":"#f50537"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.8286181017543023,"random":true,"anim":{"enable":true,"speed":0.1,"opacity_min":0.1,"sync":false}},"size":{"value":100,"random":false,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":536.6288658980243,"color":"#f50537","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"bottom","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"remove"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":267.7151510792516,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":223.76191731997147,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}); // prettier-ignore
        break;
      default:
        particlesJS("particles-js", { particles: { number: { value: 160, density: { enable: true, value_area: 800 } }, color: { value: "#ffffff" }, shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } }, opacity: { value: 1, random: true, anim: { enable: false, speed: 1, opacity_min: 0, sync: false } }, size: { value: 3, random: true, anim: { enable: false, speed: 4, size_min: 0.3, sync: false } }, line_linked: { enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }, move: { enable: true, speed: 1, direction: "none", random: true, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 600 } } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: false, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 }, repulse: { distance: 400, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } }, retina_detect: true }); // prettier-ignore
        break;
    }
  };

  updateParticles();
});
