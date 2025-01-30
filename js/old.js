'use strict';

let number = 4.6;

console.log(-4/0);
console.log('string' * 9);

const persone = `5`;

const bool = false;

// console.log(something);

let und;
console.log(und); 

const obj = {
    name: "John",
    age: 25,
    istMarried: false
};

// console.log(obj.name);

console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);







'use strict';

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Вам уже есть 18 лет?', '18');
// console.log(answer + 5);    

const answers = [];
answers[0] = prompt('Ваше имя?', '');
answers[1] = prompt('Ваш фамилия?', '');
answers[2] = prompt('Ваш возраст?', '');

console.log(typeof(answers));
console.log(typeof(null));
