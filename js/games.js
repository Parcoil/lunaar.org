document.addEventListener("DOMContentLoaded", function () {
  const gameContainer = document.getElementById("gameContainer");
  const searchBar = document.getElementById("searchBar");

  fetch("/games.json")
    .then((response) => response.json())
    .then((data) => {
      // Update placeholder with game count
      searchBar.placeholder = `Search among ${data.length} games`;

      displayGames(data);
      searchBar.addEventListener("keyup", function () {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredGames = data.filter((game) => game.name.toLowerCase().includes(searchTerm));
        displayGames(filteredGames);
      });
    })
    .catch((error) => console.log(error));

  function displayGames(games) {
    gameContainer.innerHTML = "";

    games.forEach((game) => {
      const gameCard = document.createElement("div");
      gameCard.classList.add("gameCard");

      const gameImg = document.createElement("img");
      gameImg.src = game.image;
      if (game.name === "Request a Game") {
        gameImg.addEventListener("click", function () {
          window.location.href = game.url;
        });
      } else {
        gameImg.addEventListener("click", function () {
          window.location.href = "/play?game=" + encodeURIComponent(game.url);
        });
      }
      gameCard.appendChild(gameImg);

      const gameTitle = document.createElement("h3");
      gameTitle.textContent = game.name;

      // Check if game is new and add 'New' badge with spaces
      if (game.new) {
        const newBadge = document.createElement("span");
        newBadge.classList.add("badge");
        newBadge.textContent = "New";

        // Add two blank spaces before the badge
        gameTitle.appendChild(document.createTextNode("\u00A0\u00A0"));
        gameTitle.appendChild(newBadge);
      }

      gameCard.appendChild(gameTitle);

      gameContainer.appendChild(gameCard);
    });
  }
});