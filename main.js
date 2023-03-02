"use strict";

// 1

const name = prompt('Имя');
let age = prompt('Возраст');
let city = prompt('Город');
let phone = prompt('Номер Телефона');
let email = prompt('Email');
let company = prompt('Место работы');

alert('Меня зовут '+(name)+'. Мне '+(age)+' лет. Я проживаю в городе '+(city)+ ' и работаю в компании '+(company)+'. Мои контактные данные: '+
 (phone)+', '+(email));

 2

const year = new Date().getFullYear()
let yearOfBirth = year - age;
alert((name)+' родился в '+(yearOfBirth)+' году');

//3

let number = prompt('');
let number1 = number[0] + number[1] + number[2];
let number2 = number[3] + number[4] + number[5];
    if(number1 == number2) {
        alert('yes');
    } 
    else {
        alert('no');
    }

//4

let a = prompt();

if(a > 0) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}

if(a == 0) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}

if(a == 1) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}

if(a == -3) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}

//5

let aaa = 10;
let bbb = 2;

console.log(aaa + bbb);
console.log(aaa - bbb);
console.log(aaa * bbb);
console.log(aaa / bbb);

if((aaa + bbb) > 1) {
    console.log((aaa + bbb) * (aaa + bbb));
}

//6

if(aaa > 2 && aaa < 11 || bbb >= 6 && bbb < 14) {
    console.log(true);
} else {
    console.log(false);
}

//7

let n = prompt ('от 0 до 59');

if (n > 0 && n < 14.75) {
    console.log('1-я четверть');
}

else if (n > 14.75 && n < 29.5) {
    console.log('2-я четверть');
}

else if (n > 29.5 && n < 44.25) {
    console.log('3-я четверть');
}

else if (n > 44.25 && n < 59) {
    console.log('4-я четверть');
} else {
    console.log('That impossible');
}

//8 

let day = prompt('от 1 до 31');

if  (day >= 1 && day <= 10) {
    console.log('1-я декада месяца');
}
if (day >= 10.3 && day <= 20) {
    console.log('2-я декада месяца');
}
if ( day >= 20.6 && day <= 31) {
    console.log('3-я декада месяца');
}

//9 

let days = prompt('количество дней');
let years = days / 365;
let month = Math.ceil(days / 31);
let week = days / 7;
let hr = days * 24;
let min = days * 1440;
let sec = days * 86400;

if (days < 7) {
  console.log('Меньше года  Меньше месяца  Меньше недели ' + (hr) + ' часов ' + (min) + ' минут ' + (sec) + ' секунд.');
}
if (days >= 7 && days < 31) {
  console.log('Меньше года  Меньше месяца \n' + (week) + ' недели ' + (hr) + ' часов ' + (min) + ' минут ' + (sec) + ' секунд.');
}
if (days >= 31 && days < 365) {
  console.log('Меньше года \n' + (month) + ' месяцев ' + (week) + ' недели ' + (hr) + ' часов ' + (min) + ' минут ' + (sec) + ' секунд.');
}
if (days >= 365) {
  console.log((years) + ' года ' + (month) + ' месяцев ' + (week) + ' недели ' + (hr) + ' часов ' + (min) + ' минут ' + (sec) + ' секунд.');
}

//10

// не знаю как сделать!!!!
//