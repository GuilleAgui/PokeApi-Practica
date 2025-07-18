import { tipoColor } from "./colors";

const nombre = document.getElementById("app");

export const pokemons = async (filtroTipo = null) => {
  nombre.innerHTML = "";
  try {
    for (let i = 1; i <= 151; i++) {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await resp.json();

      if (filtroTipo && !data.types.some((t) => t.type.name === filtroTipo)) {
        continue;
      }

      const card = document.createElement("div");
      card.className = "card";

      const pokeName = document.createElement("p");
      pokeName.innerHTML = `<p>
            #${String(data.id).padStart(3, "0")} - 
            ${data.name}
          </p> 
        `;

      const tiposContainer = document.createElement("div");
      tiposContainer.className = "tipos";

      data.types.forEach((tipoInfo) => {
        const tipo = document.createElement("span");
        tipo.innerHTML = tipoInfo.type.name;
        tipo.className = `tipo ${tipoInfo.type.name}`;
        tipo.style.backgroundColor = tipoColor[tipoInfo.type.name];

        tiposContainer.appendChild(tipo);
      });

      const pokeImage = document.createElement("img");
      pokeImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`;

      card.appendChild(pokeImage);
      card.appendChild(pokeName);
      card.appendChild(tiposContainer);
      nombre.appendChild(card);
    }
  } catch (error) {
    console.log(error);
  }
};
