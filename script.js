// Task #1.1

let userNumber = +prompt('Write your number, please');
let userNumberToMinus = +prompt('How much to take from the previous result?');
let userNumberToAdd = +prompt('How much to add from the previous result?');
let userNumberToMultiply = +prompt('How much to multiply from the previous result?');
let userNumberToDivide = +prompt('How much to divide from the previous result?');

let result = ((((userNumber - userNumberToMinus) + userNumberToAdd) * userNumberToMultiply ) / userNumberToDivide);

alert(`(${userNumber} - ${userNumberToMinus} + ${userNumberToAdd}) * ${userNumberToMultiply} / ${userNumberToDivide} = ${result}`);

// Task #1.2

let myName = 'Vika';
let myAge = 25;
let boolean = true;

console.log(`Переменная <myName> имеет тип - ${typeof myName}`);
console.log(`Переменная <myName> имеет тип - ${typeof myAge}`);
console.log(`Переменная <myName> имеет тип - ${typeof boolean}`);

// Task #1.3

let firstNumber = 10;
let secondNumber = 25;

console.log(firstNumber.toString() + secondNumber.toString());

// Task #2.1

let userName = prompt('Добрый день! Как Вас зовут?'); 
let userAffairs= prompt(`Как ${userName} Ваши дела?`);
let userLunch= prompt(`${userName} что Вы ели на обед?`);
let userGoodbye= prompt('К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки...Прощайте');

console.log ('Добрый день! Как Вас зовут?');
console.log (userName);
console.log (`Как ${userName} Ваши дела?`);
console.log (userAffairs);
console.log (`${userName} что Вы ели на обед?`);
console.log (userLunch);
console.log ('К сожалению я робот и не кушаю, поэтому ваши человечьи вкусы мне не близки...Прощайте');
console.log (userGoodbye);

// Task #2.2

let userFirstNumber = +prompt('Здравствуйте! Ведите введите начальное значение диапазона');
let userSecondNumber = +prompt('Ведите конечное значение диапазона');

if (userFirstNumber > userSecondNumber) {
  alert('Невалидные числа');
} 

for (let i=userFirstNumber; i<=userSecondNumber; i++) {
  if (i % 5 == 0 || (i % 2 == 0)) {
    console.log(i);
  } 
}

// task 3.1 - 3.2

// Сheck in
let userLogin = prompt("Create your login");

while (userLogin.length < 5 || userLogin.length >= 20 ) {
  userLogin = prompt("Please enter a value between 5 and 20 characters long");
}

let userPassword = prompt("Create your password");

while (userPassword.length < 5 || userPassword.length >= 20) {
  userPassword = prompt("Please enter a value between 5 and 20 characters long");
}
while (userPassword === userLogin) {
  userPassword = prompt("password and login must not match. Try again");
}

let user = {
  userLogin,
  userPassword,
};

let userSignIn = confirm('Sign in?');

// Sign in
userSignIn = prompt("Enter your login")

while (userSignIn !== userLogin) {
  userSignIn = prompt("User not found. Try again")
}

userSignIn = prompt("Enter your password")

while (userSignIn !== userPassword) {
  userSignIn = prompt("Invalid password. Try again");
}

alert('Signed in successfully');

// task 3.3

let persons = [
  {id: 10, name: 'Vasya', age: 28},
  {id: 11, name: 'Kolya', age: 16, parentId: 14},
  {id: 12, name: 'Anna', age: 37},
  {id: 13, name: 'Zoya', age: 9, parentId: 12},
  {id: 14, name: 'Arkadiy', age: 45},
];

for ( let i = 0; i < persons.length; i++) {
  if (persons[i].age >= 18) {
      persons[i].job = prompt(`Кто вы по профессии, ${persons[i].name}?`);
  } else {
      persons[i].child;
  }
}

for ( let i = 0; i < persons.length; i++) {
if (persons[i].parentId === persons[4].id) {
  persons[4].child = persons[i];
} else if (persons[i].parentId === persons[2].id){
  persons[2].child = persons[i];
}
}

console.log(persons);

// task 4.1

let personList = [
  {id: 10, name: 'Vasya', age: 28, child: {name: 'Valera'}},
  {id: 11, name: 'Kolya', age: 78, child: {}},
  {id: 12, name: 'Anna', age: 37, child: {name: 'Sveta'}},
  {id: 13, name: 'Zoya', age: 22, child: {name: 'Sergey'}},
  {id: 14, name: 'Arkadiy', age: 45, child: {}},
];

function isEmptyObject(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}

function isPersonHasNoChild(person) {
  if (isEmptyObject(person.child) === true) { 
      return true; // Нет ребёнка 
  } else return false;
}


// task 4.2

function addChild(parent) {
  parent.child.name = prompt(`Enter the name of ${parent.name}'s child`);
}

for (let person of personList) {
  if (isPersonHasNoChild(person)) {
    addChild(person);
  } 
}

// task 4.3

console.log(personList);

// task 5.1

let array = [];

function createNewArray(number, coefficient){
  while(array.length < number) {
    array.push(+prompt('Enter the number'));
  }

  let operation = prompt('Do you want to increase or decrease the number?');

  if (operation === 'increase') {
      return array.map(function(item) {
        return item = item * coefficient;
      });
  } else if (operation === 'decrease') {
      return array.map(function(item) {
        return item = item / coefficient;
      });
  } else if (operation === '') {
    operation = prompt('The field cannot be empty. Try again');
  } else operation = prompt('Incorrect value. Try again');   
}

let number = prompt('How many numbers do you want to add to the array?');
let coefficient = prompt('What coefficient do you want to apply?');

console.log(array);
array = createNewArray(number, coefficient);
console.log(array);

// task 5.2

let string = 'You can’t make bricks without straw';

function getTrimmedString(start, end) {
  return string.slice(start, end);
}

let trimmedString = getTrimmedString(4, 15);

console.log(string);
console.log(trimmedString);

// task 5.3

