let originalContainerStyles = {};

function toggleFullScreen() {
    const iframeContainer = document.getElementById("iframeContainer");
    const exitFullScreenBtn = document.getElementById("exitfullscreen");

    originalContainerStyles = {
        position: iframeContainer.style.position,
        width: iframeContainer.style.width,
        height: iframeContainer.style.height,
        top: iframeContainer.style.top,
        left: iframeContainer.style.left,
        zIndex: iframeContainer.style.zIndex,
    };

    iframeContainer.style.cssText = "position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: 9999;";
    exitFullScreenBtn.style.display = "block";
}

function exitFullScreen() {
    const iframeContainer = document.getElementById("iframeContainer");
    const exitFullScreenBtn = document.getElementById("exitfullscreen");

    iframeContainer.style.cssText = `position: ${originalContainerStyles.position}; width: ${originalContainerStyles.width}; height: ${originalContainerStyles.height}; top: ${originalContainerStyles.top}; left: ${originalContainerStyles.left}; z-index: ${originalContainerStyles.zIndex};`;
    exitFullScreenBtn.style.display = "none";
}
