const r1c1 = document.querySelector("#r1c1");
const r1c2 = document.querySelector("#r1c2");
const r1c3 = document.querySelector("#r1c3");

const r2c1 = document.querySelector("#r2c1");
const r2c2 = document.querySelector("#r2c2");
const r2c3 = document.querySelector("#r2c3");

const r3c1 = document.querySelector("#r3c1");
const r3c2 = document.querySelector("#r3c2");
const r3c3 = document.querySelector("#r3c3");

elements = document.querySelectorAll("button");
elements.forEach((e) =>
	e.addEventListener("click", function (e) {
		console.log(e.currentTarget.attributes);
	})
);
