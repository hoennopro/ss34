function changeText() {
  var text = document.getElementById("text").textContent;

  document.getElementById("text").textContent = "Text after change";
}

document.querySelector("button").addEventListener("click", changeText);
