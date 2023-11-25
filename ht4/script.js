// first task
let value = prompt("Enter value...");

// ==== 1 method ==============

/* if (isNaN(value)) {
  alert("Is not a number . ."); // перевірка "на число"
} else if (value % 3 === 0 && value % 5 === 0) {
  alert("FizzBuzz");
} else if (value % 3 === 0) {
  alert("Fizz");
} else if (value % 5 === 0) {
  alert("Buzz");
} else {
  alert("Non Divisible");
} */

// ==== 2 method ==============

/* switch (true) {
  case isNaN(value):
    alert("Is not a number . . ");
    break;
  case value === null:
    alert("Ви відмінили введення.");
    break;
  case value % 3 === 0 && value % 5 === 0:
    alert("FizzBuzz");
    break;
  case value % 3 === 0:
    alert("Fizz");
    break;
  case value % 5 === 0:
    alert("Buzz");
    break;
  default:
    alert("Non Divisible");
} */

// ==== 3 method ==============

/* let result =
  value % 3 === 0 && value % 5 === 0
    ? "FizzBuzz"
    : value % 3 === 0
    ? "Fizz"
    : value % 5 === 0
    ? "Buzz"
    : "Non Divisible";
alert(result); */

// ==== 3.1 method ==============

/* let result;
if (!isNaN(value)) { // перевірка "на число"
  result =
    value % 3 === 0 && value % 5 === 0
      ? "FizzBuzz"
      : value % 3 === 0
      ? "Fizz"
      : value % 5 === 0
      ? "Buzz"
      : "Non Divisible";
  alert(result);
} else {
  alert("Is not a number . . ");
} */

// ============== second task =========================

// ==== 1 method ====

try {
  if (value === null) {
    alert("Ви відмінили введення.");
  } else if (!isNaN(value)) {
    alert("You entered a number.");
  } else if (
    value.toLowerCase() === "true" ||
    value.toLowerCase() === "false"
  ) {
    alert("You entered a boolean.");
  } else if (typeof value === "string") {
    alert("You entered a string.");
  } else {
    alert("You entered a complex data.");
  }
} catch (error) {
  console.error("Сталася помилка:", error.message);
}

// ==== 2 method ==============

/* try {
  if (value === null) {
    alert("Ви відмінили введення.");
  } else {
    switch (true) {
      case !isNaN(value):
        alert("You entered a number.");
        break;
      case value.toLowerCase() === "true" || value.toLowerCase() === "false":
        alert("You entered a boolean.");
        break;
      case typeof value === "string":
        alert("You entered a string.");
        break;
      default:
        alert("You entered a complex data.");
        break;
    }
  }
} catch (error) {
  console.error("Сталася помилка:", error.message);
} */

// ==== 3 method ==============

/* try {
  let dataType = !isNaN(value)
    ? "You entered a number"
    : value.toLowerCase() === "true" || value.toLowerCase() === "false"
    ? "You entered a boolean"
    : typeof value === "string"
    ? "You entered a string"
    : "You entered a complex data";
  alert(dataType);
} catch (error) {
  console.error("Сталася помилка:", error.message);
} */
