// console.log("hello!");
// /zadanie stringi/;
// const name = "Paula";
// const petName = "Ruby";
// const petAge = 2;
// const favoriteFood = "sushi";
// console.log(`Czesc, jestem ${name}, a to jest ${petName} - mój królik.`);
// console.log(petName + " ma już " + petAge + " lat/a!");

// /zadanie kod/;
// let firstName = "Tomek";
// let age = 12;
// age = 18;

// let favColor = "niebieski";
// const favMeal = "schabowy";

// let currentCar;
// currentCar = "Audi";

// let firstName2 = "Ania";
// let age2 = 24;
// let favColor2 = "czerwony";

// /zadanie z prototypami stringów/;
// const text1 = "powiększ mnie!";
// const text2 = "ZAPISZ MNIE MAŁYMI LITERAMI";
// const text3 = "$#%#^ wytnij te dziwne znaki na początku!";
// const text4 = 'sprawdź, czy zawieram słowo "czy"';
// const text5 =
// 	'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"';
// const text6 = "pies zamień każde słowo pies, na słowo kot pies";
// const text7 = "podziel, ten, string, od, przecinków";
// const chosenNumber = 2;

// /1/;
// console.log(text1.toUpperCase());

// /2/;
// console.log(text2.toLowerCase());

// /3/;
// console.log(text3.slice(6));

// /4/;
// const word = "czy";
// console.log(
// 	`Słowo "${word}" ${text4.includes(word) ? "jest" : "nie jest"} w zdaniu`
// ) /
// 	5 /
// 	console.log(`${text5.charAt(chosenNumber)}`);

// /6/;
// console.log(text6.replaceAll("pies", "kot"));

// /7/;
// console.log(text7.split(",", [7]));

// /zadania z warunkow/;
// const pass = "!feregefgresreg";
// if (pass.length > 10 && pass.includes("!")) {
// 	console.log("Haslo jest super");
// } else if (pass.lenght > 10) {
// 	console.log("Haslo jest ok");
// } else {
// 	console.log("Haslo jest slabe");
// }

// /zadanie 1 if/;
// const x = 50;
// const y = 30;

// if (x > y) {
// 	console.log(`${x} jest wieksze od ${y}`);
// }

// /zadanie 2 if else if/;
// const color = "blue";
// const newColor = "green";
// if (color == newColor) {
// 	console.log("Kolory sie zgadzaja");
// } else {
// 	console.log("Kolory sie nie zgadzaja");
// }

/zadanie 3/;
const x = 100;
const y = 50;

if (x > y) {
	console.log(" x > y ");
} else if (x === y) {
	console.log(" x = y ");
} else {
	console.log(" x < y");
}
