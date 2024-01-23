function changeStyle() {
  var style = document.getElementById("text").style;

  style.color = "red";
  style.fontSize = "24px";
  style.fontWeight = "bold";
}

document.querySelector("button").addEventListener("click", changeStyle);
