import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["my dog ", "my grandpa ", "my neighbour ", "superman "];
  let action = ["ate ", "peed ", "broke ", "burned "];
  let what = ["my homework ", "my car ", "my house ", "the street "];
  let when = ["this morning ", "last night ", "yesterday ", "during my lunch break "]
  
  let whorandom = Math.floor(Math.random()*who.length);
  let actionrandom = Math.floor(Math.random()*action.length);
  let whatrandom = Math.floor(Math.random()*what.length);
  let whenrandom = Math.floor(Math.random()*when.length);

  document.querySelector("#excuse").innerHTML = 
  (who[whorandom] + action[actionrandom] + what[whatrandom] + when[whenrandom]);
};
