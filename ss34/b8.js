function addItem() {
  var value = document.getElementById("input").value;

  var li = document.createElement("li");
  li.textContent = value;
  document.getElementById("list").appendChild(li);

  var column = document.createElement("th");
  column.textContent = value;
  document
    .getElementById("table")
    .querySelector("thead tr")
    .appendChild(column);

  document.getElementById("input").value = "";
}

document.querySelector("button").addEventListener("click", addItem);
