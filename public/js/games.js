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
	'Have a issue? create a ticket in our <a href="https://discord.gg/parcoil" class="link">Discord Server</a>',
	'Try our our other proxy <a href="https://gostarlight.xyz" class="link">Starlight</a>',
	'Dont forget to star lunaar on <a href="https://github.com/Parcoil/lunaar" class="link">Github</a>',
	'Join the <a href="https://discord.gg/parcoil" class="link">Discord Server</a>',
	"🧀",
	"idk what to put here",
	'GTA 6 FREE <a class="link" href="/uv/service/hvtrs8%2F-wuw%2Cymuvu%60e%2Ccmm-wctah%3Dv%3FxtFXjm5RgE0">DOWNLOAD</a>',
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
