var form = document.getElementById("form");
var list = document.getElementById("list");

// Carregar dados do localStorage
var data = JSON.parse(localStorage.getItem("listData")) || [];
renderList();

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var text = document.getElementById("text").value;
  
  // Adicionar dados à lista
  data.push({ name: name, age: age, text: text });
  
  // Salvar dados no localStorage
  localStorage.setItem("listData", JSON.stringify(data));
  
  // Limpar formulário
  form.reset();
  
  // Renderizar lista
  renderList();
});

function renderList() {
  list.innerHTML = "";
  data.forEach(function(item) {
    var li = document.createElement("li");
    li.innerHTML = `${item.name} (${item.age}) : ${item.text}`;
    list.appendChild(li);
  });
}