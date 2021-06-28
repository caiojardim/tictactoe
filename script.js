const r1c1 = document.querySelector("#r1c1");
const r1c2 = document.querySelector("#r1c2");
const r1c3 = document.querySelector("#r1c3");

const r2c1 = document.querySelector("#r2c1");
const r2c2 = document.querySelector("#r2c2");
const r2c3 = document.querySelector("#r2c3");

const r3c1 = document.querySelector("#r3c1");
const r3c2 = document.querySelector("#r3c2");
const r3c3 = document.querySelector("#r3c3");

const times = '<i class="fas fa-times"></i>';
const circle = '<i class="far fa-circle"></i>';

let timesOrCircle = times;

elements = document.querySelectorAll("button");
elements.forEach((e) =>
	e.addEventListener("click", function (e) {
		const element = e.currentTarget;
		const hasX = element.attributes.x.value === "true";
		const hasO = element.attributes.o.value === "true";

		timesOrCircle = timesOrCircle === times ? circle : times;

		if (!(hasX || hasO)) {
			element.innerHTML = timesOrCircle;
			element.setAttribute("x", "true");
		}
		console.log(!(hasX || hasO));
	})
);
