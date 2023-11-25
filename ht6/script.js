// ========= task 1 =========

// Цей код містить відповідь на основне завдання та додаткові запитання
function findIndex(array) {
  if (array.length === null) {
    return null;
  }

  let least = array[0];
  let greatest = array[0];

  for (let i = 1; i < array.length; i++) {
    // пошук найменшого
    if (array[i] < least) {
      least = array[i];
    }
    // пошук найбільшого
    if (array[i] > greatest) {
      greatest = array[i];
    }
  }

  return { least, greatest };
}

let firstResult = findIndex([1, 7, 5, 6, 0]); // {least: 0, greatest: 7}
let secondResult = findIndex([3, 1, -9, -3, 2, 8]); // {least: -9, greatest: 8}

console.log(firstResult);
console.log(secondResult);

// ========= task 2 =========

function AmIPalindrome(str) {
  if (str === "") {
    return false;
  }
  let palindrome = true;

  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      palindrome = false;
      break;
    }
    start++;
    end--;
  }
  return palindrome;
}

console.log(AmIPalindrome("")); // false
console.log(AmIPalindrome("b")); // true
console.log(AmIPalindrome("mom")); // true
console.log(AmIPalindrome("string")); // false
console.log(AmIPalindrome("bag")); // false

// ========= task 3 =========

function fromStringToNumber(str) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const digit = str[i] - "0";

    let degree = 1;
    for (let j = i + 1; j < str.length; j++) {
      degree *= 10;
    }

    result += digit * degree;
  }

  return result;
}

/* 
  Відповідь на додаткове запитання:
  Строка 70: "degree *= 10;" - міняємо '10' на основу числення яка цікавить та отримуємо відповідь)
  Наприклад: ('101', 2) результатом її роботи було число 5.
  */

console.log(fromStringToNumber("15")); // 15
console.log(fromStringToNumber("376")); // 376
console.log(fromStringToNumber("100500")); // 100500
