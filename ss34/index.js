// console.log(document);
// console.dir(document);

// query HTML element

// console.log("the html co id demo-id", document.getElementById("demo-id"));

// let div = document.getElementById("demo-id2");

// console.log("the div", div);

// 2.getElementsByClassName

// let lis = document.getElementsByClassName("list-item");

// console.log("danh sach the li list-item", lis);

// let firstLi = lis[0];
// let lastLi = lis[lis.length - 1];

// console.log("the li dau tien", firstLi);
// console.log("the li cuoi cung", lastLi);

// lay ra toan bo the Li nam trong Lis
// for (let i = 0; i < lis.length; i++) {
//   console.log("cac the li", lis[i]);
// }

// 3. document.getElementsByTagName
// let divs = document.getElementsByTagName("div");
// console.log("danh sach the divs", divs);

// let h1 = document.getElementById("demo-id");

// h1.innerHTML = "<i>Hello world sau khi duoc cap nhat</i>";
// h1.textContent = "<b>Doi noi dung = text content</b>";
// h1.innerText = "noi dung da duoc cap nhat bang inner text";

// h1.innerText += ", noi dung duoc noi vao";

// // id
// console.log("id cua the h1", h1.id);
// if (h1.id === "demo-id") {
//   alert("hello world");
// }

// class
// let classList = h1.classList;

// for (let i = 0; i < classList; i++) {
//   console.log("cac class con", classList[i]);
// }

// console.log(classList);
// classList.add("demo-class3");
// classList.remove("demo-class1");
// console.log(classList.contains("demo-class1"));

// let h1 = document.getElementById("demo-id");

// console.log(h1.style);
// h1.style.backgroundColor = "red";
// h1.style.fontSize = "20px";
// h1.style.fontWeight = "20px";
// h1.style.border = "10px solid black";
// h1.style.width = "200px";
// h1.style.height = "200px";
// h1.style.borderRadius = "50%";
// h1.style.textAlign = "center";
// h1.style.lineHeight = "200px";

// let input = document.getElementById("demo-value");

// console.log("gia tri nam trong input tai thoi diem hien tai", input.value);

// input.value = "hello world";

let div = document.createElement("div");
let li = document.createElement("li");
let ul = document.getElementsByTagName("ul")[0];

li.innerHTML = "<i>hello new element</i>";
li.classList.add("list-item");

ul.appendChild(li);

li.remove();
ul.remove();

console.log(div);
console.log(li);
