import camelCase from "clcamelcase";

import camelcaseKeys from "camelcase-keys";
let result = camelCase("Foo-Bar");
console.log(result);
console.log("i dont care");
console.log("hello JavaScript");
console.log("hi");
console.log("Goedemorgen");

const person = {
  first_name: "Samar",
  last_name: "Osman",
  phone_number: "042888",
};
console.log (camelcaseKeys(person));



