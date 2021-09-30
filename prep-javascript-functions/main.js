function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var result = convertHoursToMinutes(3);
console.log(result);

function getGreeting(name) {
  return 'hello ' + name;
}

var greeting = getGreeting('Angela');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var sumAndmultiplyBy5 = addAndMultiplyBy5(7, 7);
console.log(sumAndmultiplyBy5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiply = multiplyAndDivideBy5(5, 6);
console.log(multiply);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var math = subtractTwoNumbers(10, 5);
console.log(math);

function getCircleCircumference(radius) {
  return (radius * 2) * 3.14;
}

var circle = getCircleCircumference(5);
console.log(circle);

function getFullName(firstName, lastName) {
  return 'Angela' + 'Nan';
}

var Cat = getFullName('Angela', 'Nan');
console.log(Cat);

function cube(number) {
  return number * number * number;
}

var math2 = cube(5);
console.log(math2);
