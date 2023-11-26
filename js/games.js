// Hey skid or contributor.
// This script gets the games from games.json and genarates html on the projects.html page.

document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = document.getElementById("gameContainer");
    const searchBar = document.getElementById("searchBar");
    
    fetch("/games.json")
        .then(response => response.json())
        .then(data => {
            displayGames(data);
            searchBar.addEventListener("keyup", function() {
                const searchTerm = searchBar.value.toLowerCase();
                const filteredGames = data.filter(game =>
                    game.name.toLowerCase().includes(searchTerm)
                );
                displayGames(filteredGames);
            });
        })
        .catch(error => console.log(error));

    function displayGames(games) {
        gameContainer.innerHTML = "";

        games.forEach(game => {
            const gameCard = document.createElement("div");
            gameCard.classList.add("gameCard");

            const gameImg = document.createElement("img");
            gameImg.src = game.image;
            gameImg.addEventListener('click', function() {
                window.location.href = '/play/?game=' + encodeURIComponent(game.url);
            });
            gameCard.appendChild(gameImg);

            const gameTitle = document.createElement("h3");
            gameTitle.textContent = game.name;
            gameCard.appendChild(gameTitle);

            gameContainer.appendChild(gameCard);
        });
    }
});
