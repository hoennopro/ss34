const items = [
  "List item number 1",
  "List item number 2",
  "List item number 3",
];

for (const item of items) {
  const li = document.createElement("li");

  li.textContent = item;

  document.querySelector("ul").appendChild(li);
}
