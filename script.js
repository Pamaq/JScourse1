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

// /zadanie 3/;
// const x = 100;
// const y = 50;

// if (x > y) {
// 	console.log(" x > y ");
// } else if (x === y) {
// 	console.log(" x = y ");
// } else {
// 	console.log(" x < y");
// }
// /zadanie 4/;
// const promo = "20%";

// switch (promo) {
// 	case "10%":
// 		console.log("Dzis mamy 10% znizki");
// 		break;

// 	case "20%":
// 		console.log("Dzis mamy 20% znizki");
// 		break;

// 	case "30%":
// 		console.log("Dzis mamy 30% znizki");
// 		break;

// 	default:
// 		console.log("Dzis mamy ${promo} znizki");
// }
// /zadanie 5/;
// const x = 10;
// const newX = x % 2 == 0 ? `parzysta` : `nieparzysta`;
// console.log(newX);
// /zadanie 6/;
// const x = 50;

// if (x >= 100) {
// 	console.log(`X >= 100`);
// } else if (x < 100 && x > 30) {
// 	console.log("X jest sredniakiem".toUpperCase());
// } else {
// 	console.log("x jest maly".toUpperCase());
// }
// /alternatywnie - lepiej/;
// const x = 50;
// let text;

// if (x >= 100) {
// 	text = `X >= 100`;
// } else if (x < 100 && x > 30) {
// 	text = "X jest sredniakiem";
// } else {
// 	text = "x jest maly";
// }
// console.log(text.toUpperCase());
// /zadanie 1 z for/;
// const colors = ["blue", "red", "green", "pink", "purple"];
// for (let i = 0; i < colors.length; i++) {
// 	console.log(colors[i]);
// }
// /zadanie 2 z for/;
// const cities = ["London", "Paris", "Warsaw", "New York", "Barcelona"];
// for (let i = 0; i < cities.length; i++) {
// 	console.log(`To miasto nazywa się ${cities[i]}`);
// }
// /zadanie z while/;
// let x = 0;

// while (x < 10) {
// 	x += 2;
// 	console.log(x);
// }
// /zadanie do while/;
// let x = 20;
// do {
// 	x -= 3;
// } while (x > 0);

// console.log(x);

// /zadanie for of/;
// const tab1 = [5, 8, 10, 23, 48, 60];
// let tab2 = [];
// for (let number of tab1) {
// 	number /= 5;
// 	tab2.push(number);
// 	console.log(number);
// }
// console.log(tab2);

// console.log(`-----------------`);

// for (let number of tab1) {
// 	if (number % 2 === 0) {
// 		console.log(`%c${number} jest parzysta`, "background-color: green");
// 	} else {
// 		console.log(`%c${number} jest nieparzysta`, "color: red");
// 	}
// }
// /zadanie z tablica 1/;
// const fruit = ["apple", "banana", "raspberry"];
// console.log(fruit);
// fruit.unshift("leechee", "kiwi");
// console.log(fruit);
// fruit.push("strawberry", "blackberry");
// console.log(fruit);
// fruit.shift();
// fruit.shift();
// console.log(fruit);
// fruit.pop();
// fruit.pop();
// console.log(fruit);
// /metoda map/;
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// function multiply(x) {
// 	return x * 2;
// }

// const newNumbers = numbers.map(multiply);
// console.log(newNumbers);
// /zadanie spread/;
// const drinks = ["cola", "pepsi", "juice"];
// const meals = ["spaghetti", "pizza", "sushi"];
// const menu = [...drinks, ...meals];
// console.log(menu);
// /zadanie slice i splice/;
// const numbers = [0, 0, 1, 1, 2, 2, 2];
// const colors = ["red", "green", "blue", true, 123];
// const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];
// const numbers2 = numbers.slice(0, 2);
// console.log(numbers2);
// const numbers3 = numbers.slice(4);
// console.log(numbers3);
// const randomStuff = colors.splice(3, 2);
// console.log(colors);
// console.log(randomStuff);
// const newCars = cars.splice(2, 4, "test");
// console.log(cars);
// console.log(newCars);
// /zadanie 1 z tablic/;
// const letters = ["c", "d"];
// letters.push("e", "f");
// letters.unshift("a", "b");
// console.log(letters);
// console.log(letters.includes("c"));
// /zadanie 2 z tablic/;
// const numbers = [1, 2, 3, 4, 5];
// const foods = ["sushi", "ice cream", "pizza", "apple pie", "cake"];
// const menu = numbers.concat(...foods);
// const menu2 = [...numbers, ...foods];
// console.log(menu);
// console.log(menu2);
