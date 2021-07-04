function hasXorO(element) {
	const hasX = element.attributes.x.value === "true";
	const hasO = element.attributes.o.value === "true";
	return hasX || hasO;
}

function isAttributesTrue(value1, value2, value3, player) {
	v1 = value1.attributes[player].value === "true";
	v2 = value2.attributes[player].value === "true";
	v3 = value3.attributes[player].value === "true";
	return v1 && v2 && v3;
}

function checkIfPlayerWins(
	r1c1,
	r1c2,
	r1c3,
	r2c1,
	r2c2,
	r2c3,
	r3c1,
	r3c2,
	r3c3,
	player
) {
	if (isAttributesTrue(r1c1, r1c2, r1c3, player)) return player;
	if (isAttributesTrue(r2c1, r2c2, r2c3, player)) return player;
	if (isAttributesTrue(r3c1, r3c2, r3c3, player)) return player;

	if (isAttributesTrue(r1c1, r2c1, r3c1, player)) return player;
	if (isAttributesTrue(r1c2, r2c2, r3c2, player)) return player;
	if (isAttributesTrue(r1c3, r2c3, r3c3, player)) return player;

	if (isAttributesTrue(r1c1, r2c2, r3c3, player)) return player;
	if (isAttributesTrue(r1c3, r2c2, r3c1, player)) return player;
}

function desableButtons(...buttons) {
	buttons.forEach((button) => {
		button.disabled = true;
	});
}

function enableButtons(buttons) {
	buttons.forEach((button) => {
		const buttonElement = document.getElementById(button);
		buttonElement.disabled = false;
	});
}

function checkWinner() {
	const r1c1 = document.querySelector("#r1c1");
	const r1c2 = document.querySelector("#r1c2");
	const r1c3 = document.querySelector("#r1c3");

	const r2c1 = document.querySelector("#r2c1");
	const r2c2 = document.querySelector("#r2c2");
	const r2c3 = document.querySelector("#r2c3");

	const r3c1 = document.querySelector("#r3c1");
	const r3c2 = document.querySelector("#r3c2");
	const r3c3 = document.querySelector("#r3c3");

	if (
		checkIfPlayerWins(
			r1c1,
			r1c2,
			r1c3,
			r2c1,
			r2c2,
			r2c3,
			r3c1,
			r3c2,
			r3c3,
			"x"
		) === "x"
	) {
		desableButtons(r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3);
		return "x";
	}
	if (
		checkIfPlayerWins(
			r1c1,
			r1c2,
			r1c3,
			r2c1,
			r2c2,
			r2c3,
			r3c1,
			r3c2,
			r3c3,
			"o"
		) === "o"
	) {
		desableButtons(r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3);
		return "o";
	}
	if (
		hasXorO(r1c1) &&
		hasXorO(r1c2) &&
		hasXorO(r1c3) &&
		hasXorO(r2c1) &&
		hasXorO(r2c2) &&
		hasXorO(r2c3) &&
		hasXorO(r3c1) &&
		hasXorO(r3c2) &&
		hasXorO(r3c3)
	) {
		return "tie";
	}
	// retorna x, o, tie, true
}

function resetValues(values) {
	values.forEach((value) => {
		const element = document.getElementById(value);
		element.setAttribute("x", "false");
		element.setAttribute("o", "false");
		element.innerHTML = "";
	});
}

const times = '<i class="fas fa-times"></i>';
const circle = '<i class="far fa-circle"></i>';

let turn = Math.random() > 0.5 ? "o" : "x";

const divDisplay = document.getElementById("display");
divDisplay.innerHTML = `Vez de ${turn === "o" ? circle : times}`;

elements = document.querySelectorAll(".game-button");
elements.forEach((e) =>
	e.addEventListener("click", function (e) {
		const element = e.currentTarget;
		const hasX = element.attributes.x.value === "true";
		const hasO = element.attributes.o.value === "true";

		if (!(hasX || hasO)) {
			if (turn === "o") {
				element.innerHTML = circle;
				element.setAttribute("o", "true");
				turn = "x";
			} else if (turn === "x") {
				element.innerHTML = times;
				element.setAttribute("x", "true");
				turn = "o";
			}
			divDisplay.innerHTML = `Vez de ${turn === "o" ? circle : times}`;
		}

		if (checkWinner() === "o") {
			divDisplay.innerHTML = `${circle} ganhou`;
		}
		if (checkWinner() === "x") {
			divDisplay.innerHTML = `${times} ganhou`;
		}
		if (checkWinner() === "tie") {
			divDisplay.innerHTML = `Empate`;
		}
	})
);

const gameBoard = [
	"r1c1",
	"r1c2",
	"r1c3",
	"r2c1",
	"r2c2",
	"r2c3",
	"r3c1",
	"r3c2",
	"r3c3",
];

restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", () => {
	resetValues(gameBoard);
	enableButtons(gameBoard);
	turn = Math.random() > 0.5 ? "o" : "x";
	divDisplay.innerHTML = `Vez de ${turn === "o" ? circle : times}`;
});
