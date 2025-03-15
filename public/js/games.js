async function fetchGames() {
  try {
    const response = await fetch("./json/games.json");
    const games = await response.json();
    window.gamesData = games;

    displayGames(games);
    updateSearchBarPlaceholder(games.length);
  } catch (error) {
    console.error("Error fetching games:", error);
  }
}

function displayGames(games) {
  const gamesContainer = document.getElementById("game-container");
  gamesContainer.innerHTML = "";

  games.forEach((game) => {
    const gameDiv = document.createElement("div");
    gameDiv.className = "game fade-in";

    const gameImage = game.proxy
      ? `/media/games/${game.image}`
      : `/cdn/${game.url}/${game.image}`;

    gameDiv.innerHTML = `
        <img src="${gameImage}" alt="${game.name}" loading="lazy" width="200" height="200" />
        <p>${game.name}</p>
      `;

    gamesContainer.appendChild(gameDiv);
  });
}

function searchGames(searchTerm) {
  const filteredGames = window.gamesData.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  displayGames(filteredGames);
  updateSearchBarPlaceholder(filteredGames.length);
}

function updateSearchBarPlaceholder(count) {
  document.getElementById(
    "search-input"
  ).placeholder = `Search for ${count} games`;
}

document.getElementById("search-input").addEventListener("input", (event) => {
  searchGames(event.target.value);
});

document.addEventListener("DOMContentLoaded", fetchGames);
