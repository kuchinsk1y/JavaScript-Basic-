// first task

console.log("12" + 34); // (1234) Тому що '+' з рядком і числом, число конвертується в рядок, і потім два рядки конкатенуються разом.
console.log(12 + 34); // (46)Тут все звичайно, додавання двох чисел.
console.log(100 / "10"); // (10) Коли ми використовуємо оператор ділення /, рядок '10' буде автоматично конвертований в число.
console.log(100 * "f"); // (NaN) Тому що рядок 'f' це не число.
console.log("7" / null); // (Infinity) Коли ми ділимо число на null, результатом буде Infinity.

// second task

let firstEx = parseInt("2") + parseInt("4"); //'2' + '4'
console.log(firstEx); // -> 6
// UPD
let firstEx2 = +"2" + +"4";
console.log(firstEx2); // -> 6

let secondEx = 7.2 / parseFloat("1.2"); // 7.2 / '1.2'
console.log(secondEx); // -> 6
// UPD
let secondEx2 = 7.2 / +"1.2";
console.log(secondEx2); // -> 6

let thirdEx = "this" + " simple" + " string"; // 'this' + ' simple' + ' string'
console.log(thirdEx); // -> 'this simple string'

let fourthEx = "answer is: " + (parseInt("30") + 5); // 'answer' + ' is:' + '30' + 5
console.log(fourthEx); // -> 'answer is 35'
