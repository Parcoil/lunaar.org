fetch("/json/apps.json")
	.then((response) => response.json())
	.then((apps) => {
		function renderApps(filteredApps) {
			const appContainer = document.getElementById("app-container");
			appContainer.innerHTML = "";

			filteredApps.forEach((data) => {
				const appDiv = document.createElement("div");
				appDiv.classList.add("app");
				appDiv.setAttribute("key", data.id);

				const img = document.createElement("img");
				img.src = `${data.image}`;

				img.alt = data.name;

				const p = document.createElement("p");
				p.textContent = data.name;
				img.onclick = function () {
					sessionStorage.setItem(
						"lpurl",
						__uv$config.prefix + __uv$config.encodeUrl(data.url),
					);
					location.href = "/go/";
					sessionStorage.setItem("rawurl", data.url);
				};
				appDiv.appendChild(img);
				appDiv.appendChild(p);
				appContainer.appendChild(appDiv);
			});
		}

		renderApps(apps);

		document
			.getElementById("search-input")
			.addEventListener("input", function () {
				const query = this.value.toLowerCase();
				const filteredApps = apps.filter((app) =>
					app.name.toLowerCase().includes(query),
				);
				renderApps(filteredApps);
			});
	})
	.catch((error) => {
		console.error("Error fetching the apps data:", error);
		const appContainer = document.getElementById("app-container");
		appContainer.innerHTML = "<p>Error loading apps data.</p>";
	});
