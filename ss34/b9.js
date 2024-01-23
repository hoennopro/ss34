function editItem() {
  var item = document.querySelector("ul#list li.selected");

  if (!item) {
    return;
  }

  document.getElementById("input").value = item.textContent;
}

document.querySelector("#edit").addEventListener("click", editItem);
