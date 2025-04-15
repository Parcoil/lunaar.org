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
	if (!games || games.length == 0) {
		const html = `<div><i class="fa-solid fa-circle-exclamation big-icon"></i><h1>No games found. </h1></div>`;
		gamesContainer.innerHTML = html;
		return;
	}
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

		if (game.new) {
			gameDiv.querySelector("p").innerHTML += ' <span class="badge">New</span>';
		}
		if (game.top) {
			gameDiv.querySelector("p").innerHTML +=
				' <span class="badge">Hot 🔥</span>';
		}
		if (game.exp) {
			gameDiv.querySelector("p").innerHTML += ' <span class="badge">🧪</span>';
		}
		if (game.updated) {
			gameDiv.querySelector("p").innerHTML +=
				' <span class="badge">🆕 Updated</span>';
		}
		const imageElement = gameDiv.querySelector("img");
		imageElement.addEventListener("click", () => {
			if (game.proxy) {
				sessionStorage.setItem(
					"lpurl",
					__uv$config.prefix + __uv$config.encodeUrl(game.url),
				);
				sessionStorage.setItem("rawurl", `${game.url}`);
				window.location.href = "/./go";
			} else {
				window.location.href = `./play?game=${game.url}`;
			}
			if (game.exp) {
				alert("this game is experimental 🧪");
			}
		});
		gamesContainer.appendChild(gameDiv);
	});
}

function searchGames(searchTerm) {
	const filteredGames = window.gamesData.filter((game) =>
		game.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	displayGames(filteredGames);
	updateSearchBarPlaceholder(filteredGames.length);
}

function updateSearchBarPlaceholder(count) {
	document.getElementById("search-input").placeholder =
		`Search for ${count} games`;
}

document.getElementById("search-input").addEventListener("input", (event) => {
	searchGames(event.target.value);
});

const notifications = [
	'Have a issue? create a ticket in our <a href="https://discord.gg/parcoil" class="link">&#x44;&#x69;&#x73;&#x63;&#x6F;&#x72;&#x64; Server</a>',
	'Try our our other &#x70;&#x72;&#x6F;&#x78;&#x79; <a href="https://gostarlight.xyz" class="link">&#x53;&#x74;&#x61;&#x72;&#x6C;&#x69;&#x67;&#x68;&#x74;</a>',
	'Dont forget to star &#x6C;&#x75;&#x6E;&#x61;&#x61;&#x72; on <a href="https://github.com/Parcoil/lunaar" class="link">&#x47;&#x69;&#x74;&#x68;&#x75;&#x62;</a>',
	'Join the <a href="https://discord.gg/parcoil" class="link">&#x44;&#x69;&#x73;&#x63;&#x6F;&#x72;&#x64; Server</a>',
	"🧀",
	"idk what to put here",
	
];

function getRandomNotification() {
	const index = Math.floor(Math.random() * notifications.length);
	return notifications[index];
}

function showNotification() {
	const notificationDiv = document.getElementById("notification");
	if (!notificationDiv) return;

	const message = getRandomNotification();
	notificationDiv.innerHTML = `
    <i class="fa-solid fa-circle-info"></i>
    &nbsp;
      ${message}
      <span class="close-btn">&times;</span>
    `;
	notificationDiv.classList.remove("hide");
	notificationDiv.classList.add("show");
}

function hideNotification() {
	const notificationDiv = document.getElementById("notification");
	if (!notificationDiv) return;

	notificationDiv.classList.remove("show");
	notificationDiv.classList.add("hide");
}

document.addEventListener("DOMContentLoaded", () => {
	const notificationDiv = document.getElementById("notification");

	notificationDiv.addEventListener("click", (e) => {
		if (e.target.classList.contains("close-btn")) {
			hideNotification();
		}
	});

	showNotification();
	setInterval(showNotification, 15000);

	fetchGames();
});
