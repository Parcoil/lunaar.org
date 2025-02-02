const urlParams = new URLSearchParams(window.location.search);
const gameUrl = urlParams.get("game");
const buttonFullscreen = document.getElementById("fullscreen");
const buttonReload = document.getElementById("reload-button");
const iframe = document.querySelector("iframe");
buttonFullscreen.addEventListener("click", () => {
	iframe.requestFullscreen();
});
buttonReload.addEventListener("click", () => {
	const oldurl = iframe.src;
	console.log(oldurl);
	iframe.src = "https://parcoil.com";
	setTimeout(() => {
		console.log(oldurl);
		iframe.src = oldurl;
	}, 300);
});

iframe.src = `/cdn/${gameUrl}/index.html`;

document.addEventListener("DOMContentLoaded", () => {
	fetch("/json/games.json")
		.then((response) => response.json())
		.then((games) => {
			const game = games.find((g) => g.url === gameUrl);
			if (game) {
				document.getElementById("game-name").textContent = game.name;
			}
		})
		.catch((error) => console.error("Error loading game name:", error));
});
