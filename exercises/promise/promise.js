// --Callback hell--

// setTimeout(() => {
//   console.log("This is a first time");
//   setTimeout(() => {
//     console.log("This is a second time");
//     setTimeout(() => {
//       console.log("This is a three time");
//       setTimeout(() => {
//         console.log("This is a fourth time");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 3000);

// -> Re-factor

// --Promise hell--
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("This is a first time");
//   }, 3000);
// })
//   .then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("This is a second time");
//       }, 1000);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("This is a third time");
//       }, 1000);
//     });
//   })
//   .then((data) => console.log(data));

// --Promise.all--
// -> Trả về resolve khi tất cả promises truyền vào đều resolve
// -> Trả về reject khi có 1 promise nào đó bị reject
function makeTimer(timer = 1000, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}
const timer1 = makeTimer(1000, "first time");
const timer2 = makeTimer(2000, "second time");
const timer3 = makeTimer(3000, "third time");
// const timeTotal = Promise.all([timer1, timer2, timer3]).then((data) =>
//   console.log(data)
// );

// --Promise.race--
// const timeRace = Promise.race([timer1, timer2, timer3]).then((data) =>
//   console.log(data)
// );

// --Promise.allSettled
function isFrontendDev(languages) {
  return new Promise(function (resolve, reject) {
    if (!languages.includes("html")) {
      reject("You are not frontend developer");
    }
    setTimeout(() => {
      resolve("You are frontend developer");
    }, 1000);
  });
}
const dev1 = isFrontendDev(["html", "css"]);
const dev2 = isFrontendDev(["css"]);
const devAllSettled = Promise.allSettled([dev1, dev2]).then((data) =>
  console.log(data)
);
