console.log("Hoi");
console.log("test test");

//import { add } from "./lib.js";
//import { substract, multiply  } from "./lib.js";
//import { speedOfLightMetersPerSecond } from "./lib.js";

const {
  add,
  substract,
  multiply,
  divide,
  speedOfLightMetersPerSecond,
} = require("./lib.js");

console.log(add(3, 4));

console.log(substract(5, 2));
console.log(multiply(10, 4));

console.log(`The speed of light :${speedOfLightMetersPerSecond} m/s`);
