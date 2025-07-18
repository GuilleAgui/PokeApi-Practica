import { tipoColor } from "./colors";

const botones = document.getElementById("buttons");

export const btn = async () => {
  try {
    const resp = await fetch("https://pokeapi.co/api/v2/type?limit=18");
    const data = await resp.json();

    const btnTodos = document.createElement("button");
    btnTodos.className = "btn ver-todos";
    btnTodos.textContent = "ver todos";
    botones.appendChild(btnTodos);

    data.results.forEach((tipos) => {
      const button = document.createElement("button");
      button.className = `btn ${tipos.name}`;
      button.textContent = tipos.name;
      button.dataset.type = tipos.name;
      button.style.backgroundColor = tipoColor[tipos.name];

      botones.appendChild(button);
    });
  } catch (error) {
    console.log(error);
  }
};
