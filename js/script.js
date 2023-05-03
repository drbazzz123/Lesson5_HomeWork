// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind


// let name, speciality, averageRating, numMissClass

// const studInfo = {
//   name,
//   speciality,
//   averageRating,
//   numMissClass,
//   showInfo: function () {
//     console.group(`Info about ${this.name}`);
//     console.log(`Speciality: ${this.speciality}`);
//     console.log(`Average Rating: ${this.averageRating}`);
//     console.log(`№ of missed classes: ${this.numMissClass}`);
//     console.groupEnd()
//   }
// }

// const studOne = {
//   name: "Alex",
//   speciality: "Driver",
//   averageRating: "12",
//   numMissClass: "0",
// }

// const studTwo = {
//   name: "Elena",
//   speciality: "Medic",
//   averageRating: "10",
//   numMissClass: "1",
// }

// const studThree = {
//   name: "Eugene",
//   speciality: "Accountant",
//   averageRating: "8",
//   numMissClass: "2",
// }

// studInfo.showInfo.call(studOne)
// studInfo.showInfo.call(studTwo)
// studInfo.showInfo.call(studThree)

// studInfo.showInfo.apply(studOne)
// studInfo.showInfo.apply(studTwo)
// studInfo.showInfo.apply(studThree)

// studInfo.showInfo.bind(studOne)()
// studInfo.showInfo.bind(studTwo)()
// studInfo.showInfo.bind(studThree)()



// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке


// const showInfo = {
//   info() {
//     console.log(this.infoAbout);
//   }
// }

// const htmlInfo = {
//   infoAbout: "HTML - стандартизована мова розмітки документів для перегляду вебсторінок у браузері."
// }

// const cssInfo = {
//   infoAbout: "CSS - це формальна мова декорування та опису зовнішнього вигляду документа ( веб-сторінки ), написаного з використанням мови розмітки."
// }

// document
//   .querySelector("#html")
//   .addEventListener("click", showInfo.info.bind(htmlInfo));

// document
//   .querySelector("#css")
//   .addEventListener("click", showInfo.info.bind(cssInfo));



// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// function calculateCost(productName, pricePerKg, quantity) {
//   const cost = pricePerKg * quantity;
//   console.log(`Продукт: ${productName}\nВартість за ${quantity} кг: ${cost.toFixed(2)} UAH`);;
// }

// calculateCost("banana", 30, 4.5);
// calculateCost("cherry", 58, 1.3);
// calculateCost("orange", 89, 3.4);

