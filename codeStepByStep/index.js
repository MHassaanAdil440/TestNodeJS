let app = require("./app");
// for (let i = 0; i < 3; i++) {
//   if (i === 0) {
//     console.log(app.x);
//   } else if (i === 1) {
//     console.log(app.y);
//   } else {
//     console.log(app.z());
//   }
// }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arr1 = arr.filter((x) => x % 2 === 0);
console.log(arr1);