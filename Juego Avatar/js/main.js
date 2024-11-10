import { data, rules, characters } from "./data.js";
import { subScreen } from "./gameFlow.js";
import { score } from "./score.js";

document.addEventListener("DOMContentLoaded", () => {
	// Global Variables
	const game = document.getElementById("game");
	if (!game) {
		console.error("No se encontró el elemento con id 'game'");
		return;
	}

	// Extract menu items and screen IDs from the unified data
	const menuItems = Object.values(data.screens).map((item) => ({
		name: item.name,
		href: item.href,
	}));

	const rulesItems = Object.values(rules).map((item) => ({
		name: item.name,
		description: item.description,
		img: item.img,
	}));

	const scoreItems = Object.values(score.items).map((item) => ({
		player: item.player,
		enemy: item.enemy,
		result: item.result,
		datetime: item.datetime,
		moves: item.moves,
	}));

	const charactersItems = Object.values(characters).map((item) => ({
		name: item.name,
		select: item.select,
		avatar: item.avatar,
	}));

	// Main Structure
	function createTitle(element, text) {
		const title = document.createElement("h1");
		title.innerHTML = text;
		title.classList.add("title");
		element.appendChild(title);
	}

	function createList(element, items) {
		const ul = document.createElement("ul");
		element.appendChild(ul);
		ul.classList.add("list");

		items.forEach((item) => {
			const li = document.createElement("li");
			const a = document.createElement("a");
			const span = document.createElement("span");
			a.href = "#" + item.href;
			span.innerHTML = item.name;
			a.dataset.replace = item.name;

			if (item.name === "Exit") {
				li.classList.add("flash");
			}

			a.appendChild(span);
			li.appendChild(a);
			ul.appendChild(li);
		});
	}

	function createLogo(element) {
		const logo = document.createElement("img");
		logo.src = "./assets/ui/logo.png";
		logo.classList.add("logo");

		const bg = document.createElement("div");
		const bg2 = document.createElement("div");

		bg.classList.add("bg");
		bg2.classList.add("bg2");
		element.appendChild(logo);
		element.appendChild(bg2);
		element.appendChild(bg);
	}

	function overlayBorder() {
		const div = document.createElement("div");
		div.classList.add("menu-container");
		const body = document.querySelector("body");
		body.appendChild(div);
	}

	function createMenu() {
		const aside = document.createElement("aside");
		aside.classList.add("menu");
        const menuIcon = document.createElement("div");
        menuIcon.classList.add("menu-icon");

		if (window.innerWidth > 1024) {
			createLogo(aside);
			game.appendChild(aside);
			createTitle(aside, "Menu");
			createList(aside, menuItems);
		} else {

		}
	}

	function createScreen(id) {
		// Remove the existing screen if any
		const existingScreen = document.querySelector(".screen");
		if (existingScreen) {
			existingScreen.remove();
		}

		// Create new screen
		const section = document.createElement("section");
		section.classList.add("screen");
		section.id = id;

		const screenData = data.screens[id];

		/* RULES */
		if (id === "rules") {
			const flowContainer = document.createElement("div");
			flowContainer.classList.add("flow-container");

			createTitle(flowContainer, screenData.name);
			const container = document.createElement("div");
			container.classList.add("rules-container");

			rulesItems.forEach((item) => {
				const rule = document.createElement("div");
				rule.classList.add("rule");

				const ruleTitle = document.createElement("h2");
				ruleTitle.innerHTML = item.name;

				const ruleDescription = document.createElement("p");
				ruleDescription.innerHTML = item.description;
				rule.appendChild(ruleTitle);

				if (item.img) {
					const ruleImg = document.createElement("img");
					ruleImg.src = item.img;
					rule.appendChild(ruleImg);
				}
				rule.appendChild(ruleDescription);

				container.appendChild(rule);
			});

			section.appendChild(flowContainer);
			flowContainer.appendChild(container);
		}

		/* PLAY */
		if (id === "play") {
			const flowContainer = document.createElement("div");
			flowContainer.classList.add("flow-container");

			section.appendChild(flowContainer);
			subScreen(flowContainer, 0);
		}

		/* SCORE */
		if (id === "score") {
			const flowContainer = document.createElement("div");
			flowContainer.classList.add("flow-container");

			createTitle(flowContainer, screenData.name);
			const container = document.createElement("div");
			container.classList.add("score-container");

			const table = document.createElement("table");
			table.classList.add("score-table");

			// Crear encabezados de la tabla
			const thead = document.createElement("thead");
			const headerRow = document.createElement("tr");

			const headers = ["Player", "Enemy", "Result", "Datetime", "Moves"];
			const headersLowRes = ["Player", "Enemy", "Result"];

			if (window.innerWidth > 768) {
				headers.forEach((header) => {
					const th = document.createElement("th");
					th.innerHTML = header;
					headerRow.appendChild(th);
				});
			} else {
				headersLowRes.forEach((header) => {
					const th = document.createElement("th");
					th.innerHTML = header;
					headerRow.appendChild(th);
				});
			}

			thead.appendChild(headerRow);
			table.appendChild(thead);

			// Crear cuerpo de la tabla
			const tbody = document.createElement("tbody");

			scoreItems.forEach((item) => {
				const row = document.createElement("tr");
				row.classList.add("score-tr-row");

				const playerCell = document.createElement("td");
				playerCell.classList.add("score-player-cell");
				const playerCharacter = charactersItems.find(
					(c) => c.name === item.player
				);
				if (playerCharacter) {
					playerCell.style.backgroundImage = `url(${playerCharacter.avatar})`;
					playerCell.style.backgroundSize = "contain";
					playerCell.style.backgroundRepeat = "no-repeat";
					playerCell.style.backgroundPosition = "center";
				}
				playerCell.innerHTML = item.player;
				row.appendChild(playerCell);

				const enemyCell = document.createElement("td");
				enemyCell.classList.add("score-enemy-cell");
				const enemyCharacter = charactersItems.find(
					(c) => c.name === item.enemy
				);
				if (enemyCharacter) {
					enemyCell.style.backgroundImage = `url(${enemyCharacter.avatar})`;
					enemyCell.style.backgroundSize = "contain";
					enemyCell.style.backgroundRepeat = "no-repeat";
					enemyCell.style.backgroundPosition = "center";
				}
				enemyCell.innerHTML = item.enemy;
				row.appendChild(enemyCell);

				const resultCell = document.createElement("td");
				resultCell.classList.add("score-result-cell");
				if (item.result === "win") {
					resultCell.style.backgroundColor = "green";
				} else if (item.result === "lose") {
					resultCell.style.backgroundColor = "red";
				} else {
					resultCell.style.backgroundColor = "yellow";
				}
				resultCell.innerHTML = item.result;
				row.appendChild(resultCell);

				if (window.innerWidth > 768) {
					const datetimeCell = document.createElement("td");
					datetimeCell.classList.add("score-datetime-cell");
					datetimeCell.innerHTML = item.datetime;
					row.appendChild(datetimeCell);

					const movesCell = document.createElement("td");
					movesCell.classList.add("score-moves-cell");
					movesCell.innerHTML = item.moves;
					row.appendChild(movesCell);
				}

				tbody.appendChild(row);
			});

			table.appendChild(tbody);
			container.appendChild(table);
			flowContainer.appendChild(container);
			section.appendChild(flowContainer);

			// Scroll hacia el final del contenedor de la tabla
			container.scrollTop = container.scrollHeight;
		}

		if (id === "exit") {
			const flowContainer = document.createElement("div");
			flowContainer.classList.add("flow-container");
			createTitle(flowContainer, "Thanks for playing!");
			const p = document.createElement("p");
			p.innerHTML = "See you soon!";
			flowContainer.appendChild(p);
			const img = document.createElement("img");
			img.src = "./assets/ui/exit.png";
			img.classList.add("exit");
			flowContainer.appendChild(img);
			section.appendChild(flowContainer);
		}

		game.appendChild(section);
	}

	function changeScreen(id) {
		createScreen(id); // Create the screen corresponding to the clicked menu item
	}

	// Execute
	overlayBorder();
	createMenu();

	const menuLinks = document.querySelectorAll(".menu a");
	menuLinks.forEach((link) => {
		link.addEventListener("click", (event) => {
			event.preventDefault();
			const id = event.target.hash.slice(1);
			changeScreen(id);
		});
	});

	// Default Screen
	changeScreen("play");
});
