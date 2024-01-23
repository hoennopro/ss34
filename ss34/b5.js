var names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

for (var i = 0; i < names.length; i++) {
  var li = document.createElement("li");
  li.textContent = names[i];
  document.getElementById("list").appendChild(li);
}
