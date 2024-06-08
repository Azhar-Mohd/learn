// const arr = [0, 10, 20, 30];

// var filter = function (arr, fn) {
//   let currentInd = 0;
//   for (let i = 0; i < arr; i++) {
//     if (fn(arr[i], i)) {
//       arr[currentInd] = arr[i];
//       currentInd++;
//     }
//   }
//   arr = currentInd;
//   return arr;
// };
// console.log(filter());

// function callOperation(x, y, callback) {
//   const result = x + y;
//   callback(result);
// }
// function logResult(result) {
//   console.log("This is result: ", result);
// }
// callOperation(8, 9, logResult);

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(add(1) (2)(3));

// for (var i = 0; i < 5; i++) {
//   (function(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 2000);
//   })(i)
// }

//============================= Promise===============>
// console.log("start");
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("1");
//     // reject(1);
//   }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("2");
//     // reject("somthng went wrong");
//   }, 3000);
// });

// p1.then((res) => {
//   console.log("res==>", res);
//   return p2;
// })
//   .then((data) => console.log("data==>", data))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finally"));
// console.log("end");

// Promise.all([p1, p2]).then((data) => {
//   console.log("all", data);
// });

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res))
//   .then((data) => console.log(data));

// const posts = fetch("https://jsonplaceholder.typicode.com/posts");
// const users = fetch("https://jsonplaceholder.typicode.com/users");

// Promise.all([posts, users])
//   .then(([pRes, uRes]) => {
//     return Promise.all([pRes.json(), uRes.json()]);
//   })
//   .then((data) => console.log(data));

//   Promise.any([posts, users]).then(data=> console.log("any1", data))
//============================= Promise===============>
// console.log("start");

// const p1 = new Promise((resolve, reject) => {
//   resolve(1);
// });
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// async function getAsy() {
//   const value = await p1;
// //   console.log(value);
// }
// getAsy();

// const button = document.querySelector(".clickme");
// const ul = document.querySelector("ul");

// button.addEventListener("click", function () {
//   let li = document.createElement("li");
//   li.textContent = "Add New Element";
//   ul.prepend(li);
// });

// const ul1 = document.querySelector("ul");
// ul1.addEventListener("click", (e) => {
//   //   console.log(e);
//   if (e.target.nodeName == "LI") {
//     e.target.remove();
//   }
// });

// const fetchData = async (id) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`Data for ID ${id}`), 100);
//   });
// };

// const ids = [1, 2, 3];

// async function complexAsyncFetch(ids) {
//   const result = await ids.reduce(async (acc, id) => {
//     const data = await fetchData(id);
//     const currentResult = await acc;
//     currentResult.push(data);
//     return currentResult;
//   }, Promise.resolve([]));

//   console.log(result);
// }

// complexAsyncFetch(ids);

//======pasword generation=====
// const passGen = Math.random().toString(36).slice(2);
// console.log(passGen)

// ======reverse an array========
// const rev = [1, 2, 3, 4, 5];
// const curRev = rev.reduce((acc, cur) => [cur, ...acc], []);
// console.log(curRev);

// ========Default and short circuit======
// function greet(name){
//     return `welcom ${name}`
// }
// console.log(greet("alice"));
// console.log(greet());

// ========forEach Case start=======

// const myObj = {
//   name: "Azher",
//   age: 32,
//   height: 5.9,
// };
// // console.log(Object.keys(myObj));
// Object.keys(myObj).forEach((key) => {
//   console.log(myObj[key]);
// });

// let result = "";
// Object.keys(myObj).forEach((key) => {
//   const value = myObj[key];
//   result = result + `&${key}=${value}`;
// });
// const check = result.replace("&", "?");
// console.log(check);

// const array = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, , 5, 5, 5, 6, 6, 6];
// const result = [];
// array.forEach((item) => {
//   if (result.indexOf(item) === -1) {
//     result.push(item);
//   }
// });
// console.log(result);
// const set = [...new Set(array)]
// console.log(set);

// ========forEach Case end=======

// ======== Rest Parameter Case start=======
// const sum = (...input)=>{
// let result = 0
// input.forEach((item)=>{
//     result += item;
// })
// return result
// }
// console.log(sum(1,2,3,4,5));

// const sum1 = (...input) => {
//   return input.reduce((acc, cur) => {
//     return acc + cur
//   },0);
// };
// console.log(sum1(1, 2, 3, 4, 5));

// const multiply = (...input) => {
//   return input.reduce((acc, cur) => {
//     return acc * cur
//   },1);
// };
// console.log(multiply(1, 2, 3, 4, 5));
// ======== Rest Parameter Case end=======


