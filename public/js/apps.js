fetch("/json/apps.json")
	.then((response) => response.json())
	.then((apps) => {
		function renderApps(filteredApps) {
			const appContainer = document.getElementById("app-container");
			appContainer.innerHTML = "";

			if (!filteredApps || filteredApps.length === 0) {
				const html = `<div><i class="fa-solid fa-circle-exclamation big-icon"></i><h1>No Apps found. </h1></div>`;
				appContainer.innerHTML = html;
				return;
			}

			filteredApps.forEach((data) => {
				const appDiv = document.createElement("div");
				appDiv.classList.add("app", "fade-in");

				const img = document.createElement("img");
				img.src = data.image;
				img.alt = data.name;

				const p = document.createElement("p");
				p.textContent = data.name;

				img.onclick = function () {
					sessionStorage.setItem(
						"lpurl",
						__uv$config.prefix + __uv$config.encodeUrl(data.url),
					);
					sessionStorage.setItem("rawurl", data.url);
					location.href = "/go/";
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
		document.getElementById("app-container").innerHTML =
			"<p>Error loading apps data.</p>";
	});
