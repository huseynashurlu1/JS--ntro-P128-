// // DATA TYPES - primitive, non-primitive

// var ad = 'Murad'; // string
// console.log(ad);

// var yas = 30; // number

// var unvan;
// unvan = 'Baku' // undefined
// console.log(unvan);

// var telebedir = false; // boolean

// var soyad = null; // null


// // Class - Object - Property - Method
// var Person = {
//     firstname: "Ruslan",
//     age: 25,
//     birthDate: function() {
//         return new Date().getFullYear() - this.age
//     }
// }

// console.log(Person.birthDate());

// /* 
// function ChangeColor() {
//     document.body.style.backgroundColor = 'red';
// }

// function Change1() {
//     document.body.style.backgroundColor = 'white';
// }
// */

// var students = ['Nicat','Seid','Ilkin',true,null,20]
// console.log(students)


// // var x = 0;
// // var y;
// // var z = null;


// var firstname = 'Ruslan'
// // var x = 20
// // document.write('<h1>Ruslan</h1>')

// // alert(firstname)

// function Get(){
//     document.getElementById('username').innerHTML = '<i>P128</i>'
// }


// OPERATORS
// Comparison (> < >= <=)
// Arithmetic (+ - / * %)
// Logical (&& || !)
// Bitwise Operators

// var num1 = 20;
// var num2 = 7;

// var cem = num1 + num2
// var ferq = num1 - num2
// var hasil = num1 * num2
// var bolme = num1 / num2

// document.write("Cem: " + cem + "<br>")
// document.write(ferq+ "<br>")
// document.write(hasil+ "<br>")
// document.write(bolme+ "<br>")

// var x = "20";
// var y = "10";

// console.log(undefined+1);
// console.log(null+1);
// console.log(true+1);
// console.log(false+5);
// console.log(5/0);



// var x = 20;
// var y = "20";

// if(x !== y) {
//     alert('Salam')
// }
// else{
//     alert('Sagol')
// }


// typeof


// var x = 10;
// var y = '10';
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof students);
// console.log(typeof undefined);
// console.log(typeof null);


// pascalCase (FirstName)
// kebapCase (first-name)
// camelCase (firstName)
// snakeCase (first_name)


// var ad = 'Ruslan';
// var yas = 15;

// if(ad === 'Ruslan' || yas > 18) {
//     document.write("Welcome " + ad)
// }
// else{
//     document.write('Get boyuyende gelersen')
// }

// var a = 5;
// var b = a**2
// console.log(b);

// var n = 10;

// if(n%2==1)


// var age = 10;
// x +=5 (x= x+5)
// console.log(x++);
// console.log(x++);

// var isLogin = false;

// // isLogin ? 'welcome to index page' : 'redirect to login page'
// isLogin && 'welcome to index page'

// if() {
//     if() {
//         if() {

//         }
//     }
// }


// var date = new Date()
// var h = date.getHours();
// var m = date.getMinutes();
// var s = date.getSeconds();

// var time = h + ":" + m + ":" + s
// document.write(time);

// switch(date) {
//     case 5:
//         console.log('Iyun')
//     case 1:
//         console.log('Fevral')
//         break;
//     default: 
//         console.log('Hec biri');
//         break;
// }


// var hour = new Date().getHours();

// if(hour>6 && hour < 18) {
//     document.body.style.backgroundColor = 'orange'
//     document.body.style.color = 'white'
// }
// else{
//     document.body.style.backgroundColor = 'black'
// }

// console.log(Math.PI)
// console.log(Math.pow(6,3))
// console.log(Math.sqrt(10))
// console.log(Math.min(1,5,7,9))
// console.log(Math.max(1,5,7,9))
// console.log(Math.trunc(-5.7))
// console.log(Math.abs(-5.7))
// console.log(Math.round(5.49))
// console.log(Math.ceil(5.1))
// console.log(Math.floor(5.9))


var users = ['Qurban','Rehman','Leman'];
var texmin = Math.floor(Math.random() * users.length)
console.log(users[texmin])