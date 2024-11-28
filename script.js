document.title = "Website DOM - Ahmad Zidni Hidayat (23106050077)";

// 1. Ganti warna background div menjadi warna kesukaan kalian.
const container1 = document.getElementById("container1");
console.log(container1);
container1.style.backgroundColor = "skyblue";

const container2 = document.getElementById("container2");
console.log(container2);
container2.style.backgroundColor = "orange";

// 2. Ganti isi dari atribut href pada tag <a> yang tadinya “#” menjadi https://www.google.com
const a = document.querySelector("a");
a.setAttribute("href", "https://www.google.com");

// 3. Gunakan loop untuk mengubah text, style, size, dan warna background list
const lists = document.querySelectorAll("li");
for (i = 0; i < lists.length; i++) {
  lists[i].textContent = `List baru ${i + 1}`;
  lists[i].style.fontSize = "20px";
  lists[i].style.color = "red";
  lists[i].style.backgroundColor = "yellow";
  lists[i].style.fontFamily = "Arial";
}
