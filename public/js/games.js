document.addEventListener("DOMContentLoaded", function () {
  const gameContainer = document.getElementById("gameContainer");
  const searchBar = document.getElementById("searchBar");
  const serverUrl1 = "https://assets-taupe.vercel.app";
  const serverUrl2 = "https://assets-taupe.vercel.app";
  const favoriteGamesContainer = document.getElementById(
    "favoriteGamesContainer"
  );
  let games = []; // Define games array in the outer scope

  let favorites = [];

  fetch("/games")
    .then((response) => response.json())
    .then((data) => {
      games = data; // Assign data to games array
      // Iterate over each game
      games.forEach((game) => {
        // Create a new element for each game
        let gameElement = document.createElement("div");
        gameElement.classList.add("game");

        // Create and set the game title, including the 'New' badge if applicable
        let gameTitle = document.createElement("h3");
        if (game.new === true) {
          gameTitle.innerHTML = game.name + ' <span class="badge">New</span>';
        } else {
          gameTitle.textContent = game.name;
        }
        gameElement.appendChild(gameTitle);

        // Append other game details here...

        // Finally, append the game element to the game container
        gameContainer.appendChild(gameElement);
      });

      searchBar.placeholder = `Search among ${games.length} games`;

      displayGames(games);
      searchBar.addEventListener("keyup", function () {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredGames = games.filter((game) =>
          game.name.toLowerCase().includes(searchTerm)
        );
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
      gameImg.src = `${serverUrl1}/${game.url}/${game.image}`;
      gameImg.loading = `lazy`;

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

  function displayFavorites(favorites) {
    favoriteGamesContainer.innerHTML = "";

    favorites.forEach((favorite) => {
      const game = games.find((game) => game.name === favorite);
      if (game) {
        const favoriteGameCard = document.createElement("div");
        favoriteGameCard.classList.add("favoriteGameCard");

        const gameImg = document.createElement("img");
        gameImg.src = `https://assets-taupe.vercel.app/${game.url}/${game.image}`;

        gameImg.alt = game.name;
        gameImg.addEventListener("click", function () {
          window.location.href = "/play?game=" + encodeURIComponent(game.url);
        });

        const gameTitle = document.createElement("h3");
        gameTitle.textContent = game.name;

        const unfavoriteButton = document.createElement("button");
        unfavoriteButton.innerHTML = '<i class="fas fa-heart-broken"></i>';
        unfavoriteButton.classList.add("unfavoriteButton");
        unfavoriteButton.addEventListener("click", function (event) {
          event.stopPropagation();
          toggleFavorite(game.name, favoriteGameCard);
        });

        favoriteGameCard.appendChild(gameImg);
        favoriteGameCard.appendChild(gameTitle);
        favoriteGameCard.appendChild(unfavoriteButton);
        favoriteGamesContainer.appendChild(favoriteGameCard);
      }
    });
  }

  function displayNoFavoritesMessage() {
    const noFavoritesMessage = document.createElement("h5");
    noFavoritesMessage.textContent =
      "When You favorite a game, it will appear here";
    favoriteGamesContainer.appendChild(noFavoritesMessage);
  }
});
