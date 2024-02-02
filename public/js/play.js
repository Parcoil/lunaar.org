// Hey skid or contributor.
// This script Fetches games.json.
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const gameUrl = urlParams.get("game");

  fetch("/games.json")
    .then((response) => response.json())
    .then((data) => {
      const gameData = data.find((game) => game.url === gameUrl);

      document.title = `${gameData.name} | Nativegames`;
      document.getElementById("gamename").innerText = gameData.name;
      document.getElementById("favicon").href = gameData.image;
      document.getElementById(
        "gameIframe"
      ).src = `https://assets-taupe.vercel.app/${gameUrl}/`;
    })
    .catch((error) => console.error("Error fetching game data:", error));
});
