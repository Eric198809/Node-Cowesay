const person = require("./information.js");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Je m'appelle ${person.name} et je suis du campus de ${person.campus}`,
    e: "oO",
    T: "U ",
  })
);
