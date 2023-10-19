 import camelcase from "camelcase";
 import camelcaseKeys from "camelcase-keys";

 console.log(camelcase("--..fooBAR"));

const person = {
    first_name:"Samar",
    last_name:"Osman",
    phone_number:"(031)621-3458",
};

console.log(camelcaseKeys(person));