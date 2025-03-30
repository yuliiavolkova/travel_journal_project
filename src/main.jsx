import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

/*const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(function (num) {
  return num * num;
});
console.log(doubled);

const names = ["alice", "bob", "charlie", "david"];
const uppercased = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});
console.log(uppercased);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
const pokeList = pokemon.map((poke) => {
  return `<p>${poke}</p>`;
});
console.log(pokeList); */
