// import { btn } from "./buttons";
// import { pokemons } from "./pokemon";

// document.addEventListener("DOMContentLoaded", () => {
//   pokemons();

//   btn((tipoSeleccionado) => {
//     pokemons(tipoSeleccionado);
//   });
// });

import { btn } from "./buttons.js";
import { pokemons } from "./pokemon.js";

document.addEventListener("DOMContentLoaded", async () => {
  await btn();
  pokemons();
  const botones = document.getElementById("buttons");

  botones.addEventListener("click", (e) => {
    const tipo = e.target.dataset.type;

    if (e.target.classList.contains("ver-todos")) {
      pokemons();
    } else if (tipo) {
      pokemons(tipo);
    }
  });
});
