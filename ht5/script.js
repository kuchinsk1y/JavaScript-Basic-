// ==== first task ====

/* let value;

do {
  value = prompt("Enter number..");

  if (isNaN(value)) {
    alert("Only numbers, please");
  } else {
    if (parseInt(value) >= 123) {
      alert("Wow, you've ended this endless cycle!");
    } else {
      alert("Should continue");
    }
  }
} while (isNaN(value) || value < 123); */

// ==== second task ====

let firstValue, secondValue;

// Перше число

while (isNaN(firstValue)) {
  firstValue = prompt("Enter number..");
  if (isNaN(firstValue)) {
    alert("Only numbers, please");
  }
}
// Друге число
while (isNaN(secondValue)) {
  secondValue = prompt("Enter number..");
  if (isNaN(secondValue)) {
    alert("Only numbers, please");
  }
}

firstValue = parseFloat(firstValue);
secondValue = parseFloat(secondValue);

let start, end;

if (firstValue < secondValue) {
  start = firstValue;
  end = secondValue;
} else {
  start = secondValue;
  end = firstValue;
}

let sum = 0; // сума
let product = 1; // добуток

for (let i = start; i <= end; i++) {
  if (i % 2 === 0) {
    product *= i;
  } else {
    sum += i;
  }
}

alert(`Сума = ${sum}, Добуток = ${product}`);
