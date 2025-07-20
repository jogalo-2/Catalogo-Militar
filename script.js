const categorias = {
  "Camisas": ["camisa-basica", "camisa-premium"],
  "Cuturno": ["cuturno-preto", "cuturno-marrom", "cuturno-camuflado"],
  "Soutache": [
    "soutache-1", "soutache-2", "soutache-3", "soutache-4",
    "soutache-5", "soutache-6", "soutache-7", "soutache-8"
  ],
  "Facão": ["facao-cabo-marfim", "facao-cabo-simples"],
  "Gorros": ["gorro-formatura", "gorro-selva", "gorro-pe"]
};

const nomesExibicao = {
  "camisa-basica": "Camisa Básica",
  "camisa-premium": "Camisa Premium",
  "cuturno-preto": "Cuturno Preto",
  "cuturno-marrom": "Cuturno Marrom",
  "cuturno-camuflado": "Cuturno Camuflado",
  "facao-cabo-marfim": "Facão Cabo de Marfim",
  "facao-cabo-simples": "Facão Cabo Simples",
  "gorro-formatura": "Gorro de Formatura",
  "gorro-selva": "Gorro de Selva",
  "gorro-pe": "Gorro PE",
  "soutache-1": "Soutache 1",
  "soutache-2": "Soutache 2",
  "soutache-3": "Soutache 3",
  "soutache-4": "Soutache 4",
  "soutache-5": "Soutache 5",
  "soutache-6": "Soutache 6",
  "soutache-7": "Soutache 7",
  "soutache-8": "Soutache 8"
};

const catalogo = document.getElementById("catalogo");

function mostrarCategorias() {
  catalogo.innerHTML = "";
  for (const categoria in categorias) {
    const div = document.createElement("div");
    div.className = "categoria";
    div.innerHTML = `
      <img src="img/${categorias[categoria][0]}.jpeg" alt="${categoria}" />
      <p>${categoria}</p>
    `;
    div.onclick = () => mostrarItens(categoria);
    catalogo.appendChild(div);
  }
}

function mostrarItens(categoria) {
  catalogo.innerHTML = "";
  categorias[categoria].forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img src="img/${item}.jpg" alt="${nomesExibicao[item] || item}" />
      <p>${nomesExibicao[item] || item}</p>
    `;
    catalogo.appendChild(div);
  });

  const botaoVoltar = document.createElement("button");
  botaoVoltar.textContent = "Voltar";
  botaoVoltar.onclick = mostrarCategorias;
  botaoVoltar.style.margin = "1rem auto";
  catalogo.appendChild(botaoVoltar);
}

document.getElementById("toggleTheme").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

mostrarCategorias();
