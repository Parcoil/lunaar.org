document.addEventListener("DOMContentLoaded", function () {
  const gameContainer = document.getElementById("gameContainer");
  const searchBar = document.getElementById("searchBar");
  const favoriteGamesContainer = document.getElementById("favoriteGamesContainer");
  let games = []; // Define games array in the outer scope

  let favorites = [];

  fetch("/games.json")
    .then((response) => response.json())
    .then((data) => {
      games = data; // Assign data to games array

      searchBar.placeholder = `Search among ${games.length} games`;

      displayGames(games);
      searchBar.addEventListener("keyup", function () {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredGames = games.filter((game) => game.name.toLowerCase().includes(searchTerm));
        displayGames(filteredGames);
      });

      // Check local storage for existing favorites
      if (localStorage.getItem("favorites")) {
        favorites = JSON.parse(localStorage.getItem("favorites"));
        if (favorites.length > 0) {
          displayFavorites(favorites); // Display favorites if they exist
        } else {
          displayNoFavoritesMessage(); // Show 'No Favorites' message
        }
      } else {
        displayNoFavoritesMessage(); // Show 'No Favorites' message
      }
    })
    .catch((error) => console.log(error));

  function displayGames(games) {
    gameContainer.innerHTML = "";

    games.forEach((game) => {
      const gameCard = document.createElement("div");
      gameCard.classList.add("gameCard");

      const gameImg = document.createElement("img");
      gameImg.src = game.image;
      gameImg.addEventListener("click", function () {
        window.location.href = "/play?game=" + encodeURIComponent(game.url);
      });
      gameCard.appendChild(gameImg);

      const gameTitle = document.createElement("h3");
      gameTitle.textContent = game.name;

      if (favorites.includes(game.name)) {
        gameCard.classList.add("favorited");
      }

      const favoriteButton = document.createElement("button");
      favoriteButton.innerHTML = '<i class="fas fa-heart"></i>';
      favoriteButton.classList.add("favoriteButton");
      favoriteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleFavorite(game.name, gameCard);
      });

      gameCard.appendChild(gameTitle);
      gameCard.appendChild(favoriteButton);

      gameContainer.appendChild(gameCard);
    });
  }

  function toggleFavorite(gameName, gameCard) {
    const index = favorites.indexOf(gameName);
    if (index > -1) {
      favorites.splice(index, 1);
      gameCard.classList.remove("favorited");
    } else {
      favorites.push(gameName);
      gameCard.classList.add("favorited");
    }
    displayFavorites(favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  function displayGames(games) {
    gameContainer.innerHTML = "";
  
    games.forEach((game) => {
      const gameCard = document.createElement("div");
      gameCard.classList.add("gameCard");
  
      const gameImg = document.createElement("img");
      gameImg.src = game.image;
      gameImg.addEventListener("click", function () {
        window.location.href = "/play?game=" + encodeURIComponent(game.url);
      });
      gameCard.appendChild(gameImg);
  
      const gameTitle = document.createElement("h3");
      gameTitle.textContent = game.name;
  
      if (favorites.includes(game.name)) {
        gameCard.classList.add("favorited");
      }
  
      const favoriteButton = document.createElement("button");
      favoriteButton.innerHTML = '<i class="fas fa-heart"></i>';
      favoriteButton.classList.add("favoriteButton");
      favoriteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleFavorite(game.name, gameCard);
      });
  
      gameCard.appendChild(gameTitle);
      gameCard.appendChild(favoriteButton);
  
      // Check if game is new and add 'New' badge with spaces
      if (game.new) {
        const newBadge = document.createElement("span");
        newBadge.classList.add("badge");
        newBadge.textContent = "New";
  
        // Add two blank spaces before the badge
        gameTitle.appendChild(document.createTextNode("\u00A0\u00A0"));
        gameTitle.appendChild(newBadge);
      }
  
      gameContainer.appendChild(gameCard);
    });
  }

  function displayNoFavoritesMessage() {
    const noFavoritesMessage = document.createElement("h5");
    noFavoritesMessage.textContent = "No Favorites you can add favorites. by clicking on the favorites button on a game.";
    favoriteGamesContainer.appendChild(noFavoritesMessage);
  }
});
