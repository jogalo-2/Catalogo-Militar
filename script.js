// Dados das categorias e itens
const catalog = {
  "Camisas": ["Camisa Básica", "Camisa Premium"],
  "Coturno": ["Preto", "Marrom", "Camuflado"],
  "Soutache": ["", "", "", "", "", "", "", ""], // 8 placeholders vazios
  "Facão": ["Facão Cabo de Marfim", "Facão Cabo Simples"],
  "Gorros": ["Gorro de Formatura", "Gorro de Selva", "Gorro PE"]
};

const categoriesDiv = document.getElementById("categories");
const itemsDiv = document.getElementById("items");
const btnBack = document.getElementById("btn-back");
const toggleModeBtn = document.getElementById("toggle-mode");

// Mostra categorias na tela inicial
function mostrarCategorias() {
  categoriesDiv.innerHTML = "";
  itemsDiv.classList.add("hidden");
  categoriesDiv.classList.remove("hidden");
  btnBack.classList.add("hidden");

  for (const categoria in catalog) {
    const div = document.createElement("div");
    div.className = "square";
    div.textContent = categoria;
    div.onclick = () => mostrarItens(categoria);
    categoriesDiv.appendChild(div);
  }
}

// Mostra itens da categoria selecionada
function mostrarItens(categoria) {
  itemsDiv.innerHTML = "";
  categoriesDiv.classList.add("hidden");
  itemsDiv.classList.remove("hidden");
  btnBack.classList.remove("hidden");

  const itens = catalog[categoria];
  itens.forEach(item => {
    const div = document.createElement("div");
    div.className = "square";
    div.textContent = item || "Placeholder";
    itemsDiv.appendChild(div);
  });
}

// Volta para categorias
btnBack.onclick = () => mostrarCategorias();

// Alterna modo claro/escuro
toggleModeBtn.onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Inicia mostrando categorias
mostrarCategorias();
