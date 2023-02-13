/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let name = ["google", "adobe", "nvidia", "apple", "samsung", "nike"];
  let country = [".com", ".net", ".cu", ".uk", ".it", ".org"];

  function generateDom() {
    document.getElementById("dom").innerHTML =
      name[Math.floor(Math.random() * name.length)] +
      country[Math.floor(Math.random() * country.length)];
  }
  document.getElementById("btn").addEventListener("click", generateDom);

  console.log("Hello Rigo from the console!");
};
