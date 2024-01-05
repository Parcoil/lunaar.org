// Hey skid or contributor.
// this is fullscreen script to fullscreen the iframe on the play.html page.

var originalContainerStyles = {};
var gameIframe = document.getElementById("gameIframe");
var exitFullscreenButton = document.getElementById("exitfullscreen");

function toggleFullScreen() {
  var iframeContainer = document.getElementById("iframeContainer");
  var fullScreenButton = document.getElementById("fullscreengame");
  fullScreenButton.style.display = "none";
  originalContainerStyles = {
    position: iframeContainer.style.position,
    width: iframeContainer.style.width,
    height: iframeContainer.style.height,
    top: iframeContainer.style.top,
    left: iframeContainer.style.left,
    zIndex: iframeContainer.style.zIndex,
  };
  iframeContainer.style.position = "fixed";
  iframeContainer.style.width = "100vw"; // Use viewport units for width
  iframeContainer.style.height = "100vh"; // Use viewport units for height
  iframeContainer.style.top = "0";
  iframeContainer.style.left = "0";
  iframeContainer.style.zIndex = "9998";
  gameIframe.style.height = "100%";

  exitFullscreenButton.style.display = "block";
  exitFullscreenButton.style.zIndex = "9999";
}

var exitFullscreenbtn = document.getElementById("exitfullscreen");

exitFullscreenbtn.onclick = function () {
  var iframeContainer = document.getElementById("iframeContainer");
  var fullScreenButton = document.getElementById("fullscreengame");
  fullScreenButton.style.display = "block";
  iframeContainer.style.position = originalContainerStyles.position;
  iframeContainer.style.width = originalContainerStyles.width;
  iframeContainer.style.height = originalContainerStyles.height;
  iframeContainer.style.top = originalContainerStyles.top;
  iframeContainer.style.left = originalContainerStyles.left;
  iframeContainer.style.zIndex = originalContainerStyles.zIndex;
  gameIframe.style.height = "400px";
  gameIframe.style.width = "100%";

  exitFullscreenButton.style.display = "none";
};
